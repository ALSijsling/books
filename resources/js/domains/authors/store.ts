import axios from 'axios';
import { ref } from 'vue';
import { Author } from './types';

//State
const authors = ref<Array<Author>>([]);

//Getters
export const getAllAuthors = () => {
    return authors.value;
}

export const getAuthorById = () => {
    return authors.value;
}

//Actions
export const fetchAllAuthors = async() => {
    const {data} = await axios.get('/api/authors');
    if (!data) return;
    return authors.value = data;
}

export const fetchAuthorById = async(id: number) => {
    const {data} = await axios.get(`/api/authors/${id}`);
    if (!data) return;
    return authors.value = data;
}

export const addAuthor = (author: Author) => {
    const {} = axios.post('/api/authors', author);
}

export const updateAuthor = (author: Author) => {
    const {} = axios.patch('/api/authors', author);
}
