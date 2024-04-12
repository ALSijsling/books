import Home from './../domains/books/pages/Overview.vue';
import Create from './../domains/books/pages/Create.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/create', name: 'Create', component: Create}
];

export default routes;
