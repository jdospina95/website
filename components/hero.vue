<template lang="pug">
.hero
  .hero__container
    .hero__info-wrapper
      .hero__info
        .hero-heading(v-html="$t('hero.heading')")
        .hero-text {{ $t('hero.text') }}
        .call-to-action
          Button(type="primary" :text="$t('hero.primary_button')")
          Button(type="secondary" :text="$t('hero.secondary_button')")
          .social-media
        .social-media-buttons
          SocialMediaButton(
            v-for="socialMediaButton in socialMediaButtons",
            :key="socialMediaButton.socialMedia",
            :socialMedia="socialMediaButton.socialMedia",
          )
    img.image(src="@/assets/img/picture.jpg" alt="Hero Image")
</template>

<script setup lang="ts">
import Button from '@/components/ui/button';
import SocialMediaButton from '@/components/ui/social-media-button';

const socialMediaButtons = [
  {
    socialMedia: 'github',
  },
  {
    socialMedia: 'linkedin',
  },
];
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

$background-color: #f5f5f5;
$min-height: calc(800px - #{$layout-navbar-height});

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &__container {
    min-height: $min-height;
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex: 1;
    background-color: $background-color;
    margin: 0;

    .hero__info-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero__info {
      max-width: calc(#{$desktop-width} / 2);
      display: flex;
      flex-direction: column;
      flex: 1;

      .hero-heading {
        font-size: 56px;
        font-weight: 600;
        line-height: 64px;
        margin: 0;
      }

      .hero-text {
        margin: 24px 0 40px;
      }

      .call-to-action {
        display: flex;
        gap: 24px;
        align-items: center;
      }

      .social-media-buttons {
        margin-top: 210px;
        display: flex;
        gap: 16px;
      }
    }

    .image {
      width: 100%;
      height: auto;
    }
  }
}
</style>