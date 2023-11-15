<template lang="pug">
.logo
  img(:src="CodeBlockIcon" alt="JUAN")
  .text Juan
</template>

<script setup lang="ts">
import CodeBlockIcon from '@/assets/img/icons/code-block.svg';

</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;

  .text {
    font-size: 24px;
    font-weight: 700;
    margin-left: 8px;
  }
}
</style>