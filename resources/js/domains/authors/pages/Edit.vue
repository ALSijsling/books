<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { fetchAuthorById, getAuthorById, updateAuthor } from '../store';
    import AuthorForm  from '../components/AuthorForm.vue';

const route = useRoute();
    // TODO: authorId is betere naam
    const id = Number(route.params.id);

    const author = ref();

    onMounted(async () => {
        await fetchAuthorById(id);
        author.value = getAuthorById();
    })
</script>

<template>
    <div v-if="author">
        <!-- TODO: eventhandler voor updateAuthor in deze Edit pagina zetten ipv in de form,
        zodat form breder inzetbaar is -->
        <AuthorForm @submitAuthor="(author) => updateAuthor(author)" :author="author" buttonValue="Update Author"/>
    </div>
</template>