<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { getAllBooks, fetchAllBooks } from './../store.ts';
    import { Book } from './../types';

    const books = ref<Array<Book>>([]);

    onMounted(async () => {
      await fetchAllBooks();
      books.value = getAllBooks();
    });
</script>

<template>
    <div class="w-2/3 mx-auto my-10">
        <div class="grid grid-cols-6 gap-12">
            <div v-for="book in books" :key="book.id">
                <router-link :to="{name: 'Show', params:{id: book.id}}">
                    <img src="/public/Book_image.png" />
                    <p class="my-4 font-bold text-center">{{ book.title }}</p>
                    <p>{{ book.author.name }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>