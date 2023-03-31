<template>
    <div v-for="(item, index) in navList" :key="index">
        <NavListItem :itemContent="item"/>
    </div>
</template>

<script>
import NavListItem from './NavListItem.vue'
export default {
    props: ['navList'],
    components: {
        NavListItem
    },
};
</script>