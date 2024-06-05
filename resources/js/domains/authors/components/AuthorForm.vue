<script setup lang="ts">
    import router from '../../../router/index.js';
</script>

<template>
    <div class="w-1/3 mx-auto bg-gray-300 rounded-md">
        <form>
            <div class="w-2/3 my-4 p-4 mx-auto">
                <label for="name" class="block">Author name</label>
                <input id="name" type="text" class="border-slate-500 border-solid rounded-md pl-2 py-2 w-full" required>
            </div>
            <div class="w-2/3 p-4 mx-auto">
                <button type="submit" class="mt-4 px-4 py-2 bg-blue-600 text-slate-100 rounded-lg">Add</button>
                <button @click="router.push('/')" class="mt-4 ml-2 px-4 py-2 bg-gray-600 text-slate-100 rounded-lg">Cancel</button>
            </div>
        </form>
    </div>
</template>