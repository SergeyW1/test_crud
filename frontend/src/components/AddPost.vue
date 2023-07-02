<script setup lang="ts">
import {usePostStore} from "@/stores/postStore";
import {ref} from "vue";

const postStore = usePostStore()
const date = ref(new Date())
const formPost = ref({
   title: '',
   content: '',
   createdAt: date.value.toISOString()
})

</script>

<template>
   <section class="p-6 dark:text-gray-100">
      <form novalidate="" class="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900">
         <h2 class="w-full text-3xl font-bold leadi">Create Post</h2>
         <div>
            <label for="name" class="block mb-1 ml-1">Title</label>
            <input id="name" type="text" placeholder="Your title" required=""
                   v-model="formPost.title"
                   class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800">
         </div>
         <div>
            <label for="message" class="block mb-1 ml-1">Content</label>
            <textarea id="message" type="text" placeholder="Content..."
                      v-model="formPost.content"
                      class="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
         </div>
         <div>
            <button type="submit"
                    class="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri dark:bg-violet-400 focus:ri hover:ri dark:text-gray-900"
                    @click.prevent="postStore.createPost(formPost)"
            >
               Create
            </button>
         </div>
      </form>
   </section>
</template>

