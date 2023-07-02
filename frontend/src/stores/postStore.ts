import {ref} from 'vue'
import {defineStore} from 'pinia'
import axios from "axios";
import router from "../router/index";

export const usePostStore = defineStore('postStore', () => {
    const posts = ref<any[]>([])

    const getPosts = async (): Promise<any> => {
        return await axios.get('http://localhost:8080/posts/')
            .then((res) => posts.value = res.data)
            .catch(e => console.log(e))
    }

    const getPost = async (id: any): Promise<any> => {
        return await axios.get(`http://localhost:8080/posts/${id}`)
            .then((res) => res.data)
            .catch(e => console.log(e))
    }

    const deletePost = async (id: any): Promise<any> => {
        return await axios.delete(`http://localhost:8080/posts/${id}`)
            .then(() => posts.value = posts.value.filter((x: any) => x.id !== id))
            .then(() => router.push({name: 'posts'}))
    }

    const createPost = async (obj: object): Promise<any> => {
        return await axios.post('http://localhost:8080/posts', obj)
            .then((response) => posts.value.push(response.data))
            .then(() => router.push({name: 'posts'}))
    }

    const updatePost = async (id: any, obj: any): Promise<any> => {
        const prevObj = posts.value.find((x: any) => x.id === id)
        const result = Object.assign(prevObj, obj)
        return await axios.put(`http://localhost:8080/posts/${id}`, result)
            .then(() => router.push({name: 'posts'}))
    }

    const timePassed = (date: any): string => {
        let dateObject = new Date(date);
        let diff: number = new Date() - dateObject;
        let seconds = Math.floor(diff / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        return `${days > 0 ? days + 'day, ' : ''} 
        ${hours > 0 ? hours % 24 + 'hour, ' : ''}  
        ${minutes % 60} min and ${seconds % 60} sec ago`;
    }
    return {getPosts, deletePost, timePassed, createPost, getPost, updatePost, posts}
})
