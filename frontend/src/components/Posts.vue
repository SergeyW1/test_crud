<script setup lang="ts">
import {usePostStore} from "@/stores/postStore";

const postStore = usePostStore()
</script>

<template>
   <div class="text-gray-900 bg-gray-200">
      <div class="p-4 flex">
         <h1 class="text-3xl">
            Posts
         </h1>
      </div>
      <div class="px-3 py-4 flex justify-center">
         <table class="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
            <tr class="border-b">
               <th class="text-left p-3 px-5">Title</th>
               <th class="text-left p-3 px-5">Content</th>
               <th class="text-left p-3 px-5">Created At</th>
               <th></th>
            </tr>
            <tr class="border-b hover:bg-orange-100" v-for="post in postStore.posts" :key="post.id">
               <td class="p-3 px-5">{{ post.title }}</td>
               <td class="p-3 px-5">{{ post.content }}</td>
               <td class="p-3 px-5">{{ postStore.timePassed(post.createdAt) }}</td>
               <td class="p-3 px-5 flex justify-end">
                  <router-link
                          :to="{path: `/post/${post.id}`}"
                          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                     Preview
                  </router-link>
                  <router-link
                          :to="{path: `/update/${post.id}`}"
                          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                     Edit
                  </router-link>
                  <button class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          @click.prevent="postStore.deletePost(post.id)"
                  >
                     Delete
                  </button>
               </td>
            </tr>
            </tbody>
         </table>
      </div>
   </div>
</template>
