<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { fetchReviewById, getReviewById, updateReview } from '../store';
    import ReviewForm from '../components/ReviewForm.vue';

    const route = useRoute();
    const id = Number(route.params.id);

    const review = ref();

    onMounted(async() => {
        await fetchReviewById(id);
        review.value = getReviewById();
    })
</script>

<template>
    <div v-if="review">
        <ReviewForm @submitReview="(review) => updateReview(review)" :review="review" buttonValue="Update Review" />
    </div>
</template>