<script setup lang="ts">
    import { getAllBooks, fetchAllBooks } from './../store.ts'
    import { ref, onMounted } from 'vue';
    import { Book } from './../types';

    const books = ref<Array<Book>>([]);

    onMounted(async () => {
      await fetchAllBooks();
      books.value = getAllBooks();
    });
</script>

<template>
    <ul>
        <li v-for="book in books" :key="book.id">
            {{ book.title }}
            {{ book.author.name }}
        </li>
    </ul>
</template>
