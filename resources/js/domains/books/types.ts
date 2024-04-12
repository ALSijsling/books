export interface Book {
    id: number,
    author_id: number,
    slug: string,
    title: string,
    author: Author
}

export interface Author {
    id: number,
    name: string,
    slug: string
}
