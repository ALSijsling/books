import axios from "axios";
import { ref } from 'vue';
import { Review } from './types';

//State
const reviews = ref<Array<Review>>([]);

//Getters
export const getReviewsByBook = () => {
    return reviews.value;
}

export const getReviewById = () => {
    return reviews.value;
}

//Actions
export const fetchReviewsByBook = async(id: number) => {
    const {data} = await axios.get(`/api/books/${id}/reviews`);
    if (!data) return;
    return reviews.value = data;
}

export const fetchReviewById = async(id: number) => {
    const {data} = await axios.get(`/api/reviews/${id}`);
    if (!data) return;
    return reviews.value = data;
}

export const addReview = (review: Review) => {
    const {} = axios.post('/api/reviews', review);
}

export const updateReview = (review: Review) => {
    const {} = axios.patch('/api/reviews', review);
}

export const deleteReview = (review: Review) => {
    const {} = axios.delete('/api/reviews', {data: review});
}