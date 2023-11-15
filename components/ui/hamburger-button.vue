<template lang="pug">
button.hamburger-button(:class="{ active: isActive }", @click="isActive = !isActive")
  .line
  .line
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref(false);
</script>

<style lang="scss">
.hamburger-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  .line {
    width: 100%;
    height: 2px;
    background-color: black;
    transition: transform 0.3s ease-in-out;

    &:first-child {
      transform: translateY(6px) rotate(0deg);
    }

    &:last-child {
      transform: translateY(-6px) rotate(0deg);
    }
  }

  &.active {
    .line:first-child {
      transform: translateY(0px) rotate(45deg);
    }

    .line:last-child {
      transform: translateY(0px) rotate(-45deg);
    }
  }
}
</style>
