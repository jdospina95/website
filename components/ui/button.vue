<template lang="pug">
button.button(:class="[props.type]") {{ props.text }}
</template>

<script setup lang="ts">
const props: { type: string, text: string } = defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary'].includes(value),
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
$primary-color: black;
$secondary-color: white;

@mixin primary-color-set {
  background-color: $primary-color;
  color: $secondary-color;
}

@mixin secondary-color-set {
  background-color: transparent;
  color: $primary-color;
}

.button {
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  font-size: 14px;
  line-height: 24px;
  border-radius: 24px;
  border: 1px solid $primary-color;
  transition: all 0.2s linear;

  &.primary {
    @include primary-color-set;

    &:hover {
      @include secondary-color-set;
    }
  }

  &.secondary {
    @include secondary-color-set;

    &:hover {
      @include primary-color-set;
    }
  }
}
</style>
