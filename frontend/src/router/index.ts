import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/posts',
            name: 'posts',
            component: () => import('../components/Posts.vue')
        },
        {
            path: '/create',
            name: 'create',
            component: () => import('../components/AddPost.vue')
        },
        {
            path: '/post/:id',
            name: 'post',
            component: () => import('../components/Post.vue')
        },
        {
            path: '/update/:id',
            name: 'update',
            component: () => import('../components/UpdatePost.vue')
        },
    ]
})

export default router

