<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { fetchBookById, getBookById, updateBook } from './../store';
    import BookForm from './../components/BookForm.vue';

    const route = useRoute();
    const id = Number(route.params.id);

    const book = ref();

    onMounted(async () => {
        await fetchBookById(id);
        book.value = getBookById();
    });
</script>

<template>
    <div v-if="book">
        <BookForm @submitBook="(book) => updateBook(book)" :book="book" buttonValue="Update Book" />    
    </div>
</template>
