<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { fetchBookById, getBookById } from './../store';
    import router from '../../../router';

    const route = useRoute();
    const id = Number(route.params.id);

    const book = ref();
        
    onMounted(async () => {
        await fetchBookById(id);
        book.value = getBookById();
    });
</script>

<template>
    <div class="w-1/2 mx-auto py-3 text-center">
        <img class="my-4 w-1/2 mx-auto" src="/public/Book_image.png" />
        <h1 class="my-4 font-bold text-xl">{{ book?.title }}</h1>
        <h3 class="my-4 text-gray-500">{{ book?.author.name }}</h3>
        <div class="inline-flex">
            <button @click="router.push({name: 'Edit', params: {id: id}})" class="m-6 px-4 py-2 bg-blue-600 text-slate-100 rounded-lg">Edit Book</button>
            <button @click="router.push('Delete')" class="m-6 px-4 py-2 bg-rose-600 text-slate-100 rounded-lg">Delete Book</button>
        </div>
    </div>
</template>
