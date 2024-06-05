<script setup>
    
</script>

<template>
    <nav class="flex justify-between bg-gray-800 text-slate-200 text-xl py-3">
        <div>
            <router-link :to="{name: 'Home'}" class="p-3 hover:bg-gray-500">Home</router-link>
            <router-link :to="{name: 'Authors'}" class="p-3 hover:bg-gray-500">Authors</router-link>
        </div>
        <div>
            <router-link :to="{name: 'CreateBook'}" class="p-3 hover:bg-gray-500">Add Book</router-link>
            <router-link :to="{name: 'CreateAuthor'}" class="p-3 hover:bg-gray-500">Add Author</router-link>
        </div>
    </nav>
</template>