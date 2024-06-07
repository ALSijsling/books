<script setup lang="ts">
    import ReviewForm from '../components/ReviewForm.vue';
    import { addReview } from '../store';

    const review = {};
</script>

<template>
    <ReviewForm @submitReview="(review) => addReview(review)" :review="review" buttonValue="Add Review" />
</template>