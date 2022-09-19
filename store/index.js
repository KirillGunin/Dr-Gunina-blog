// главный файл store
import axios from "axios";
import Cookie from 'js-cookie'

// функции
export const state = () => ({
  postsLoaded: [],
  token: null,
})

// обычный объект
export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts // все посты
  },
  addPost(state, post) {
    state.postsLoaded.unshift(post)
    //state.postsLoaded.push(post)
  },
  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit // postIndex приравняем к postEdit
  },
  deletePost(state, postDelete) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postDelete.id)
    state.postsLoaded.splice(postIndex, 1)
  },
  setToken(state, token) {
    state.token = token
  },
  destroyToken(state) {
    state.token = null
  }
}

export const actions = { 
  // отрисовка постов
  nuxtServerInit({commit}, context) {
    return axios.get('https://blog-a4098-default-rtdb.firebaseio.com/posts.json') // тут ссылка на бд + posts.json и то, что мы забираем
      .then(res => {
        // console.log(res) // тут SSR поэтому все будет в терминале

        const postsArray = [] // так определим id каждого поста
        for (let key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }
        // res
        commit('setPosts', postsArray.reverse())
      })
      .catch(error => console.log(error))
  },
  authUser({commit}, authData, SECRET_KEY) {
    SECRET_KEY = process.env.SECRET_KEY
    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${SECRET_KEY}`, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
    .then((res) => {
      const token = res.data.idToken
      commit('setToken', token)
      // to localStorage - хранилище с пом которого можно хранить данные на клиенте
      localStorage.setItem('token', token) // первый токен - название по которому мы будем обращаться, второе - сам токен
      // to cookie
      Cookie.set('jwt', token) // 'jwt' - так принято называть ключ
    })
    .catch(error => console.log(error))
  },
  // будет проверять есть ли такой токен сейчас на клиенте
  initAuth({commit}, req) {
    let token
    if(req) {
      if(!req.headers.cookie) return false
      const jwtCookie = req.headers.cookie
        .split(';')
        .find(tkn => tkn.trim().startsWith('jwt='))
      if(!jwtCookie) return false
      token = jwtCookie.split('=')[1]

    } else {
      token = localStorage.getItem('token')
      if(!token) return false
    }
    commit('setToken', token)
  },
  logoutUser({commit}) {
    commit('destroyToken')
    localStorage.removeItem('token') // удалит по ключу "токен"
    Cookie.remove('jwt')
  },
  // добавление поста
  addPost({commit}, post) { // связываем с файлом page/admin/new-post/index.vue
    const date = new Date(Date.now()).toLocaleString().slice(0, 10) // дата создания
    return axios.post('https://blog-a4098-default-rtdb.firebaseio.com/posts.json', {...post, date}) // тут ссылка на бд + posts.json и то, что мы передаем туда
      .then(res => {
         //console.log(res) // посмотрим что приходит в res, чтоб задать id
        commit('addPost', {...post, id: res.data.name}) // создадим мутацию 'addPost' и передадим ей post и id
      })
      .catch(error => console.log(error))
  },
  // изменение поста
  editPost({commit, state}, post) {
    // console.log(post, '--------')
    const date = new Date(Date.now()).toLocaleString().slice(0, 10) // обновленная дата
    return axios.put(`https://blog-a4098-default-rtdb.firebaseio.com/posts/${post.id}.json?auth=${state.token}`, {...post, date: date}) // отправим post с новой датой
      .then(res => {
        commit('editPost', post)
      })
    .catch(error => console.log(error))
  },
  // удаление поста
  deletePost({commit}, post) {
    return axios.delete(`https://blog-a4098-default-rtdb.firebaseio.com/posts/${post.id}.json`, post)
    .then(res => {
      commit('deletePost', post)
    })
  }
}

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded
  },
  checkAuthUser(state) {
    return state.token != null
  }
}
