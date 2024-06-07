<script setup lang="ts">
    import ReviewForm from '../components/ReviewForm.vue';

    const review = {};
</script>

<template>
    <ReviewForm :review="review" buttonValue="Add Review" />
</template>