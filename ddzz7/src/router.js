import vue from 'vue'
import router from 'vue-router'

vue.use(router)

import Index from './components/Index'
import PatchNotes from './components/Patchnotes'
import Society from './components/Society'
import News from './components/SocietyChildren/News'
import Cards from './components/SocietyChildren/Cards'
import DataBase from './components/Database'
import Teambuilder from './components/Teambuilder'

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
            path: '/society',
            component: Society,
            children: [{
                    path: '/news',
                    component: News
                },
                {
                    path: '/cards',
                    component: Cards
                }
            ]
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