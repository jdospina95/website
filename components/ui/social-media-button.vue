<template lang="pug">
button.social-media-button(:class="[props.color]")
  img(:src="socialMediaLogo" :alt="socialMedia" :title="socialMedia")
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

import githubLogo from '@/assets/img/logos/github.svg';

const props: { socialMedia: string, color: string } = defineProps({
  socialMedia: {
    type: String,
    required: true,
    validator: (value: string) => ['github'].includes(value),
  },
  color: {
    type: String,
    default: 'light',
    validator: (value: string) => ['light', 'dark'].includes(value),
  },
});

const socialMediaLogo = computed(() => {
  switch (props.socialMedia) {
    case 'github':
      return githubLogo;
    default:
      return '';
  }
});
</script>

<style lang="scss" scoped>
.social-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
