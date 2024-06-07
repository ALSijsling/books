<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { fetchBookById, getBookById, deleteBook } from '../store';
    import { fetchReviewsByBook, getReviewsByBook } from '../../reviews/store';
    import router from '../../../router';

    const route = useRoute();
    const id = Number(route.params.id);

    const book = ref();
    const reviews = ref();
        
    onMounted(async () => {
        await fetchBookById(id);
        await fetchReviewsByBook(id);
        book.value = getBookById();
        reviews.value = getReviewsByBook();
    });
</script>

<template>
    <div v-if="book" class="w-1/2 mx-auto py-3 text-center">
        <img class="my-4 w-1/2 mx-auto" src="/public/Book_image.png" />
        <h1 class="my-4 font-bold text-xl">{{ book.title }}</h1>
        <h3 class="my-4 text-gray-500">{{ book.author.name }}</h3>
        <div class="inline-flex">
            <button @click="router.push({name: 'EditBook', params: {id: id}})" class="m-6 px-4 py-2 bg-blue-600 text-slate-100 rounded-lg">Edit Book</button>
            <button @click="deleteBook(book), router.push('/')" class="m-6 px-4 py-2 bg-rose-600 text-slate-100 rounded-lg">Delete Book</button>
        </div>
        <div class="w-1/2 mx-auto">
            <h1 class="font-bold text-xl">Reviews for <i>{{ book.title }}</i></h1>
            <div v-for="review in reviews" :key="review.id"
                    class="my-4 bg-gray-300 rounded-lg">
                <div class="flex place-items-center">
                    <i class="ml-2 fa-solid fa-circle-user"></i>
                    <p class="pl-2 font-bold">{{ review.user.name }}</p>
                </div>
                <p class="">{{ review.content }}</p>
            </div>
            <button @click="router.push({name: 'CreateReview'})" class="px-4 py-2 bg-orange-600 text-slate-100 rounded-lg">Add Review</button>
        </div>
    </div>
</template>