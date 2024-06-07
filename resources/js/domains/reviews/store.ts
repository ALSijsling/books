import axios from "axios";
import { ref } from 'vue';
import { Review } from './types';

//State
const reviews = ref<Array<Review>>([]);

//Getters
export const getReviewsByBook = () => {
    return reviews.value;
}

//Actions
export const fetchReviewsByBook = async(id: number) => {
    const {data} = await axios.get(`/api/books/${id}/reviews`);
    if (!data) return;
    return reviews.value = data;
}

export const addReview = (review: Review) => {
    const {} = axios.post('/api/reviews', review);
}