<script setup>
    
</script>

<template>
    <nav class="bg-gray-800 text-slate-200 text-xl py-3">
        <router-link :to="{name: 'Home'}" class="p-3 hover:bg-gray-500">Home</router-link>
        <router-link :to="{name: 'CreateBook'}" class="p-3 hover:bg-gray-500">Add Book</router-link>
    </nav>
</template>
