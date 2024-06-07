<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { fetchBookById, getBookById } from '../../books/store';
    import router from '../../../router/index.js';

    const props = defineProps(['review', 'buttonValue']);
    const emit = defineEmits(['submitReview']);

    const route = useRoute();
    const book_id = Number(route.params.book_id);

    const review = ref({...props.review});
    const book = ref();

    const onSubmit = () => {
        emit('submitReview', [review.value, book.value.id]);
        router.push('/');
    }

    onMounted(async () => {
        await fetchBookById(book_id);
        book.value = getBookById();
    })
</script>

<template>
    <div class="w-1/3 mx-auto bg-gray-300 rounded-md">
        <p v-if="book" class="w-2/3 my-4 p-4 mx-auto">Review for <span class="font-bold">{{ book.title }}</span></p>
        <form @submit.prevent="onSubmit">
            <div class="w-2/3 my-4 p-4 mx-auto">
                <textarea v-model="review.content" id="content" rows="8" class="border-slate-500 border-solid rounded-md pl-2 py-2 w-full" required></textarea>
            </div>
            <div class="w-2/3 p-4 mx-auto">
                <button type="submit" class="mt-4 px-4 py-2 bg-blue-600 text-slate-100 rounded-lg">{{props.buttonValue}}</button>
                <button @click="router.push('/')" class="mt-4 ml-2 px-4 py-2 bg-gray-600 text-slate-100 rounded-lg">Cancel</button>
            </div>
        </form>
    </div>
</template>