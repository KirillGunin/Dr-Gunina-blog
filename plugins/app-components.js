// тут можем регистрировать все компоненты глобально, чтоб не импортировывать и вызывать их постоянно
// когда глобально, то все с заглавной буквы
import Vue from 'vue'

// UI
import Intro from '@/components/UI/Intro.vue' // отсюда импортруем
import PostsList from '@/components/Blog/PostsList.vue'


// Controls

// UI
Vue.component('Intro', Intro) // тут регистрируем (первый парам - название, второй - сам компонент который регистрируем)
Vue.component('PostsList', PostsList)
// Controls


// дальше региструем этот файл в nuxt.config.js в плагинах
