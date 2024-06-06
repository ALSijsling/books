import axios from 'axios';
import { ref } from 'vue';
import { Book } from './types';

//State
const books = ref<Array<Book>>([]);

//Getters
export const getAllBooks = () => {
    return books.value;
}

export const getBookById = () => {
    return books.value;
}

//Actions
export const fetchAllBooks = async() => {
    const {data} = await axios.get('/api/books');
    if (!data) return;
    return books.value = data;
}

export const fetchBookById = async(id: number) => {
    const {data} = await axios.get(`/api/books/${id}`);
    if (!data) return;
    return books.value = data;
}

export const addBook = (book: Book) => {
    const {} = axios.post('/api/books', book);
};

export const updateBook = (book: Book) => {
    const {} = axios.patch('/api/books', book);
}

export const deleteBook = (book: Book) => {
    const {} = axios.delete('/api/books', {data: book});
}