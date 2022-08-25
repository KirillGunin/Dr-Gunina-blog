// это главный файл store
import axios from "axios";

// функции
export const state = () => ({
  postsLoaded: []
})

// обычный объект
export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts // все посты
  },
  addPost(state, post) {
    // console.log(post)
    state.postsLoaded.push(post)
  },
  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit // postIndex приравняем к postEdit
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
        commit('setPosts', postsArray)
      })
      .catch(error => console.log(error))
  },
  // добавление поста
  addPost({commit}, post) { // связываем с файлом page/admin/new-post/index.vue
    // console.log(post)
    return axios.post('https://blog-a4098-default-rtdb.firebaseio.com/posts.json', post) // тут ссылка на бд + posts.json и то, что мы передаем туда
      .then(res => {
        // console.log(res) // посмотрим что приходит в res, чтоб задать id
        commit('addPost', {...post, id: res.data.name}) // создадим мутацию 'addPost' и передадим ей post и id
      })
      .catch(error => console.log(error))
  },
  // изменение поста
  editPost({commit}, post) {
    return axios.put(`https://blog-a4098-default-rtdb.firebaseio.com/posts/${post.id}.json`, post) // post - это то на что меняем
      .then(res => {
        commit('editPost', post)
      })
    .catch(error => console.log(error))
  }
}

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded
  }
}
