<script setup lang="ts">
import {onBeforeMount, onMounted, ref} from "vue";
import {usePostStore} from "@/stores/postStore";
import {useRoute} from "vue-router";

const postStore = usePostStore()
const post = ref({})
const route = useRoute()

onMounted(async () => {
   post.value = await postStore.getPost(route.params.id)
})
</script>

<template>
   <section class="p-6 dark:text-gray-100">
      <form novalidate="" class="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900">
         <h2 class="w-full text-3xl font-bold leadi">Update Post</h2>
         <div>
            <label for="name" class="block mb-1 ml-1">Title</label>
            <input id="name" type="text" placeholder="Your title" required=""
                   class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"
                   v-model="post.title"
            >
         </div>
         <div>
            <label for="message" class="block mb-1 ml-1">Content</label>
            <textarea id="message" type="text" placeholder="Content..."
                      class="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"
                      v-model="post.content"
            ></textarea>
         </div>
         <div>
            <button type="submit"
                    class="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri dark:bg-violet-400 focus:ri hover:ri dark:text-gray-900"
                    @click.prevent="postStore.updatePost(post.id, post)"
            >
               Update
            </button>
            <router-link
                    :to="{name: 'posts'}"
                    class="mt-8 w-full flex justify-center px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri dark:bg-lime-600 focus:ri hover:ri dark:text-gray-900"
            >
               Back
            </router-link>
         </div>
      </form>
   </section>
</template>

<style scoped>

</style>