<script setup lang="ts">
    import AuthorForm from '../components/AuthorForm.vue';
    import { addAuthor } from '../store';

    const author = {};
</script>

<template>
    <AuthorForm @submitAuthor="(author) => addAuthor(author)" :author="author" buttonValue="Add Author"/>
</template>