<template lang="pug">
.social-media-buttons
  SocialMediaButton(
    v-for="(socialMedia, index) in socialMediaButtons",
    :key="index",
    :socialMedia="socialMedia",
    :color="color",
  )
</template>

<script setup lang="ts">
import SocialMediaButton from '@/components/ui/social-media-button';

const props: { color: string } = defineProps({
  color: {
    type: String,
    default: 'light',
    validator: (value: string) => ['light', 'dark'].includes(value),
  },
});

const socialMediaButtons = ['github', 'linkedin'];
</script>

<style>
.social-media-buttons {
  display: flex;
  gap: 16px;
}
</style>
