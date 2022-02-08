import Vue from 'vue'
import Router from 'vue-router'
import MyNFTs from '../views/myNFTs'
import Home from '../views/home'
import CreateNft from '../views/createNft'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/myNFTs',
            name: 'MyNFTs',
            component: MyNFTs
        },
        {
            path: '/createNft',
            name: 'CreateNft',
            component: CreateNft
        }
    ]
})