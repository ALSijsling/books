import { Book } from '../books/types';

export interface Review {
    id: number,
    user_id: number,
    book_id: number,
    content: string,
    book: Book,
    user: User
}

interface User {
    id: number,
    name: string,
    email: string,
    password: string
}