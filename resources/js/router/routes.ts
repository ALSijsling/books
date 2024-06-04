import Home from './../domains/books/pages/Overview.vue';
import Create from './../domains/books/pages/Create.vue';
import Show from './../domains/books/pages/Show.vue';
import Edit from './../domains/books/pages/Edit.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/create', name: 'Create', component: Create},
    {path: '/books/:id', name: 'Show', component: Show},
    {path: '/books/:id/edit', name: 'Edit', component: Edit}
];

export default routes;
