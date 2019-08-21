import vue from 'vue'
import router from 'vue-router'

vue.use(router)

import Index from './components/Index'
import PatchNotes from './components/Patchnotes'
import News from './components/News'
import DataBase from './components/Database'
import Teambuilder from './components/Teambuilder'

// import Characters from './components/Characters'
// import Races from './components/Races'
// import Classes from './components/Classes'

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
            path: '/database',
            component: DataBase
        },
        {
            path: '/teambuilder',
            component: Teambuilder
        },

    ]
})