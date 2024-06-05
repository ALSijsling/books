<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import router from '../../../router/index.js';
    import { Author } from '../../authors/types';
    import { fetchAllAuthors, getAllAuthors } from '../../authors/store';

    const props = defineProps(['book', 'buttonValue']);
    const emit = defineEmits(['submitBook']);
    
    const book = ref({...props.book});
    const authors = ref<Array<Author>>([]);

    const selected = ref(book.value.author?.id);

    onMounted(async () => {
        await fetchAllAuthors();
        authors.value = getAllAuthors();
    })

    const onSubmit = () => {
        emit('submitBook', [book.value, {author: selected.value}])
        router.push('/')
    }
</script>

<template>
    <div class="w-1/2 mx-auto bg-gray-300 rounded-md">
        <form @submit.prevent="onSubmit">
            <div class="w-2/3 my-4 p-4 mx-auto">
                <label for="author">Select an author</label>
                <select v-model="selected" id="author" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option :value="author.id" v-for="author in authors" :key="author.id">
                        {{ author.name }}
                    </option>
                </select>
            </div>
            <div class="w-2/3 my-4 p-4 mx-auto">
                <label for="title" class="block">Title</label>
                <input v-model="book.title" id="title" type="text" class="border-slate-500 border-solid rounded-md pl-2 py-2 w-full" required>
            </div>
            <div class="w-2/3 p-4 mx-auto">
                <button type="submit" class="mt-4 px-4 py-2 bg-blue-600 text-slate-100 rounded-lg">{{props.buttonValue}}</button>
                <button @click="router.push('/')" class="mt-4 ml-2 px-4 py-2 bg-gray-600 text-slate-100 rounded-lg">Cancel</button>
            </div>
        </form>
    </div>
</template>
