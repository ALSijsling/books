<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { fetchAllAuthors, getAllAuthors, deleteAuthor } from '../store';
    import { Author } from '../types';
    import router from '../../../router';

    const authors = ref<Array<Author>>([]);

    onMounted(async () => {
        await fetchAllAuthors();
        authors.value = getAllAuthors();
    })
</script>

<template>
    <div class="m-10 w-2/5 mx-auto">
        <div v-for="author in authors" :key="author.id" class="mt-2 w-full flex justify-between bg-gray-300 rounded-md">
            <div class="flex h-10 place-items-center">
                <i class="ml-2 fa-solid fa-circle-user fa-2xl"></i>
                <p class="ml-2">{{ author.name }}</p>
            </div>
            <div class="mr-4 flex space-x-4">
                <button @click="router.push({name: 'EditAuthor', params: {id: author.id}})" class="px-4 py-2 bg-blue-600 text-slate-100 rounded-lg">Edit</button>
                <button @click="deleteAuthor(author), router.go(0)" class="px-4 py-2 bg-red-600 text-slate-100 rounded-lg">Delete</button>
            </div>
        </div>
    </div>
</template>