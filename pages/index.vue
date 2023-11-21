<template lang="pug">
.website
  Hero
  Experience
  Contact
</template>

<script setup>
import Hero from '@/components/hero';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

body {
  margin: 0;
}
</style>
