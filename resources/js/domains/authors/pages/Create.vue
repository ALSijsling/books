<script setup lang="ts">
    import AuthorForm from '../components/AuthorForm.vue';
    import { addAuthor } from '../store';
import { ref } from 'vue';

    // TODO: author reactive maken
    const author = ref({});
</script>

<template>
    <AuthorForm @submitAuthor="(author) => addAuthor(author)" :author="author" buttonValue="Add Author"/>
</template>