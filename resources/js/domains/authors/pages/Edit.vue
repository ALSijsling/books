<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { fetchAuthorById, getAuthorById } from '../store';
    import AuthorForm  from '../components/AuthorForm.vue';

    const route = useRoute();
    const id = Number(route.params.id);

    const author = ref();

    onMounted(async () => {
        await fetchAuthorById(id);
        author.value = getAuthorById();
    })
</script>

<template>
    <div v-if="author">
        <AuthorForm :author="author" buttonValue="Update Author"/>
    </div>
</template>