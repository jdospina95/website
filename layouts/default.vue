<template lang="pug">
.navigation-bar
  NuxtLink.logo-link(to="/")
    Logo
  //- HamburgerButton
slot
.footer
  Logo
  .links
    NuxtLink(to="#about-me") {{ $t('footer.about_me') }}
    NuxtLink(to="#experience") {{ $t('footer.experience') }}
    NuxtLink(to="#contact") {{ $t('footer.contact') }}
  SocialMediaButtons(color="dark")
</template>

<script setup lang="ts">
import Logo from '@/components/logo';
import HamburgerButton from '@/components/ui/hamburger-button';
import SocialMediaButtons from '@/components/ui/social-media-buttons';
</script>

<style lang="scss" scoped>
.navigation-bar {
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  position: sticky;
  top: 0;
  background: white;
  height: 40px;

  .logo-link {
    text-decoration: none;
    display: contents;
    color: inherit;
  }
}

.footer {
  padding: 40px 0;
  margin: 0 40px;
  border-top: 1px solid #5b5b5b;
  background-color: #141414;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  :deep(.logo) {
    color: white;

    img {
      filter: invert(1);
    }
  }

  .links {
    display: flex;
    gap: 32px;

    a {
      text-decoration: none;
      color: inherit;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
