<script setup lang="ts">
    import BookForm from '../components/BookForm.vue'
    import { addBook } from '../store.ts';

    const book = {};
</script>

<template>
    <BookForm @submitBook="(book) => addBook(book)" :book="book" buttonValue="Add Book" />
</template>