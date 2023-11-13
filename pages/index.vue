<template lang="pug">
.website
  SocialMediaButton(social-media="github", color="light")
</template>

<script setup>
import SocialMediaButton from '@/components/ui/social-media-button';
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

body {
  margin: 0;
}
</style>