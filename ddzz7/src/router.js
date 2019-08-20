import vue from 'vue'
import router from 'vue-router'

vue.use(router)

import Index from './components/Index'
import PatchNotes from './components/patchnotes'
import News from './components/news'
import DataBase from './components/database'
import Characters from './components/characters'
import Races from './components/races'
import Classes from './components/classes'

export default new router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Index
        },
        {
            path: '/patchnotes',
            component: PatchNotes
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/characters',
            component: Characters
        },
        {
            path: '/races',
            component: Races
        },
        {
            path: '/classes',
            component: Classes
        }

    ]
})