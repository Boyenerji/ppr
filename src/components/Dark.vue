<template>
    <div @click="toggleDarkMode()" class="cursor-pointer">
        <!-- mt-4 mb-1 mx-auto -->
        <img class="w-8 h-8" :src="isDark ? '../src/assets/sun.svg' : '../src/assets/dark.png'" alt="Dark mode">
           
    </div>
</template>


<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDarkMode = useToggle(isDark);

</script>
