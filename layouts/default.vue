<template lang="pug">
.navigation-bar
  NuxtLink(to="/")
    Logo
  HamburgerButton
slot
</template>

<script setup lang="ts">
import Logo from '@/components/logo';
import HamburgerButton from '@/components/ui/hamburger-button';
</script>

<style lang="scss" scoped>
.navigation-bar {
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
}

a {
  text-decoration: none;
  display: contents;
  color: inherit;
}
</style>