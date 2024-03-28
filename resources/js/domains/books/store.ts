import axios from 'axios';
import { ref } from 'vue';
import { Book } from './types';

//State
const books = ref<Array<Book>>([]);

//Getters
export const getAllBooks = () => {
    return books.value
}

//Actions
export const fetchAllBooks = async() => {
    const {data} = await axios.get('api/books');
    if (!data) return;
    return books.value = data;
}
