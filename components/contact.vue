<template lang="pug">
.contact
  .contact__heading {{ $t('contact.heading') }}
  a.contact__email(href="mailto:jdospina1995@gmail.com") jdospina1995@gmail.com
</template>

<style lang="scss" scoped>
$background-color: #141414;
$color: white;

.contact {
  padding: 120px 40px;
  background-color: $background-color;
  color: $color;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  &__heading {
    font-size: 56px;
    font-weight: 500;
    line-height: 64px;
  }

  &__email {
    text-decoration: none;
    color: $color;
    font-size: 32px;
    line-height: 40px;
    transition: all 0.2s linear;

    &:hover {
      font-size: 34px;
    }
  }
}
</style>
