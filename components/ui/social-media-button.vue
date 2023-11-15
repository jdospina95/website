<template lang="pug">
button.social-media-button(:class="[props.color]", @click="redirectToSocialMedia")
  img.logo(:src="socialMediaLogo" :alt="socialMedia" :title="socialMedia", :draggable="false")
</template>

<script setup lang="ts">
import { computed } from 'vue';

import githubLogo from '@/assets/img/logos/github.svg';
import linkedInLogo from '@/assets/img/logos/linkedin.svg';

const props: { socialMedia: string, color: string } = defineProps({
  socialMedia: {
    type: String,
    required: true,
    validator: (value: string) => ['github', 'linkedin'].includes(value),
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
    case 'linkedin':
      return linkedInLogo;
    default:
      return '';
  }
});

function redirectToSocialMedia(): void {
  switch (props.socialMedia) {
    case 'github':
      window.open('https://github.com/jdospina95', '_blank noopener noreferrer');
      break;
    case 'linkedin':
      window.open('https://linkedin.com/in/jdospina95', '_blank noopener noreferrer');
      break;
    default:
      break;
  }
}
</script>

<style lang="scss" scoped>
.social-media-button {
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 24px;
  border: none;
  transition: all 0.2s linear;

  &.light {
    background-color: white;
  }

  &.dark {
    background-color: #5b5b5b;
    border: 1px solid white;

    .logo {
      filter: invert(1);
    }
  }

  .logo {
    width: 24px;
    height: 24px;
  }

  &:hover {
    .logo {
      opacity: 60%;
    }
  }

  &:active {
    .logo {
      opacity: 1;
    }
  }
}
</style>
