<script setup lang="ts">
import './style/main.css'
import {useRouter} from "vue-router";
import {usePostStore} from "@/stores/postStore";

const postStore = usePostStore()
const router = useRouter()

postStore.getPosts()
</script>

<template>
   <div class="container">
      <nav>
      </nav>
   </div>
   <nav class="bg-white shadow dark:bg-gray-800">
      <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
         <router-link :to="{name: 'posts'}"
                      class="text-gray-800 dark:text-gray-200  border-blue-500 mx-1.5 sm:mx-6"
                      :class="router.currentRoute.value.name == 'posts' ? 'border-b-2' : ''"
         >
            Posts
         </router-link>

         <router-link :to="{name: 'create'}"
                      class="text-gray-800 dark:text-gray-200 border-blue-500 mx-1.5 sm:mx-6"
                      :class="router.currentRoute.value.name == 'create' ? 'border-b-2' : ''"
         >
            Add Post
         </router-link>
      </div>
   </nav>
   <router-view/>
</template>
