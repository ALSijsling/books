import Home from '../domains/books/pages/Overview.vue';
import CreateBook from '../domains/books/pages/Create.vue';
import ShowBook from '../domains/books/pages/Show.vue';
import EditBook from '../domains/books/pages/Edit.vue';
import Authors from '../domains/authors/pages/Overview.vue';
import CreateAuthor from '../domains/authors/pages/Create.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/books/create', name: 'CreateBook', component: CreateBook},
    {path: '/books/:id', name: 'ShowBook', component: ShowBook},
    {path: '/books/:id/edit', name: 'EditBook', component: EditBook},
    {path: '/authors', name: 'Authors', component: Authors},
    {path: '/authors/create', name: 'CreateAuthor', component: CreateAuthor}
];

export default routes;