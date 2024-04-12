<script setup>
    import NavigationBar from './components/Navigation.vue'
</script>
<template>
    <div>
        <NavigationBar />
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>
