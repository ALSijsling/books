import axios from 'axios';
import { ref } from 'vue';
import { Author } from './types';

//State
const authors = ref<Array<Author>>([]);

//Getters
export const getAllAuthors = () => {
    return authors.value
}

//Actions
export const fetchAllAuthors = async() => {
    const {data} = await axios.get('api/authors');
    if (!data) return;
    return authors.value = data;
}
