<template lang="pug">
.experience
  .experience__heading {{ $t('experience.heading') }}
  .experience__list
    .experience__list-item(v-for="(experienceItem, index) in experience")
      .position {{ experienceItem.position }}
      .period {{ experienceItem.period }}
      .company-name {{ experienceItem.companyName }}
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const experience = [
  {
    period: t('experience.senior_frontend_engineer_period'),
    position: t('experience.senior_frontend_engineer'),
    companyName: 'Demodesk GmbH',
    website: 'https://demodesk.com'
  }, {
    period: t('experience.full_stack_engineer_period'),
    position: t('experience.full_stack_engineer'),
    companyName: 'Demodesk GmbH',
    website: 'https://demodesk.com'
  }, {
    period: t('experience.software_engineering_intern_period'),
    position: t('experience.software_engineering_intern'),
    companyName: 'Demodesk GmbH',
    website: 'https://demodesk.com'
  },
];
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

$background-color: white;

.experience {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 80px;
  background-color: $background-color;
  padding: 120px 40px;

  &__heading {
    font-size: 56px;
    font-weight: 500;
    line-height: 64px;
  }

  &__list {
    width: 100%;
  }

  &__list-item {
    border-top: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-weight: 400;
    padding: 18px 0;
    cursor: pointer;
    transition: all 0.2s linear;

    .position {
      align-self: center;
      grid-row: 1/3;

      font-size: 18px;
    }

    .company-name {
      grid-column: 2;
    }

    .period, .company-name {
      justify-self: end;
    }

    &:last-child {
      border-bottom: 1px solid black;
    }

    &:hover {
      padding: 18px;
    }
  }
}
</style>
