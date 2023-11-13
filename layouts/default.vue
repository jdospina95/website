<template lang="pug">
.navigation-bar
  p {{ $t('logo') }}
  p Menu
slot
</template>

<style lang="scss" scoped>
.navigation-bar {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
}
</style>