<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { fetchAuthorById, getAuthorById, updateAuthor } from '../store';
    import AuthorForm  from '../components/AuthorForm.vue';

const route = useRoute();
    const authorId = Number(route.params.id);

    const author = ref();

    onMounted(async () => {
        await fetchAuthorById(authorId);
        author.value = getAuthorById();
    })
</script>

<template>
    <div v-if="author">
        <AuthorForm @submitAuthor="(author) => updateAuthor(author)" :author="author" buttonValue="Update Author"/>
    </div>
</template>