// тут можем регистрировать все компоненты глобально, чтоб не импортировывать и вызывать их постоянно
// когда глобально, то все с заглавной буквы
import Vue from 'vue'

// UI
import Intro from '@/components/UI/Intro.vue' // отсюда импортруем
import PostsList from '@/components/Blog/PostsList.vue'

// Controls
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'
import AppButton from '@/components/UI/Controls/Button.vue'

// UI
Vue.component('Intro', Intro) // тут регистрируем (первый парам - название, второй - сам компонент который регистрируем)
Vue.component('PostsList', PostsList)

// Controls
Vue.component('AppInput', AppInput)
Vue.component('AppTextArea', AppTextArea)
Vue.component('AppButton', AppButton)

// дальше региструем этот файл в nuxt.config.js в плагинах
