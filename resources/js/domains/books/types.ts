import { Author } from '../authors/types'

export interface Book {
    id: number,
    author_id: number,
    slug: string,
    title: string,
    author: Author
}
