<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { fetchBookById, getBookById } from './../store';

    const route = useRoute()
    const id = Number(route.params.id)

    const book = ref();
        
    onMounted(async () => {
        await fetchBookById(id);
        book.value = getBookById();
    });
</script>

<template>
    <div class="w-1/2 mx-auto py-3 text-center">
        <img class="w-1/2 mx-auto" src="/public/Book_image.png" />
        <h1 class="my-4 font-bold text-xl">{{ book?.title }}</h1>
        <h3 class="text-gray-500">{{ book?.author.name }}</h3>
    </div>
</template>
