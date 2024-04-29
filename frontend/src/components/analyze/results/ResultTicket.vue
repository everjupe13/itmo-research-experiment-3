<script lang="ts" setup>
import { ResultTicketProps } from './ResultTicket.types'

const props = withDefaults(defineProps<ResultTicketProps>(), {
  variant: 'pending',
  name: undefined,
  time: undefined,
  info: undefined
})
</script>

<template>
  <div :class="['result-card', props.variant]">
    <div class="result-card__icon"></div>
    <div>
      <h5 class="result-card__name">{{ props.name }}</h5>
      <p class="result-card__info">{{ props.info }}</p>
    </div>
  </div>
</template>

<style scoped>
.result-card {
  display: flex;
  column-gap: 10px;

  min-height: 35px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  background-color: transparent;
}

.result-card__icon {
  margin-top: calc((35px - 10px - 10px) / 2);
  width: 10px;
  height: 10px;

  border-radius: 100%;
}

.result-card.success .result-card__icon {
  background-color: #35f658;
}
.result-card.pending .result-card__icon {
  background-color: #f6ae13;
}
.result-card.error .result-card__icon {
  background-color: #f24e46;
}

.result-card__name {
  margin: 0;
  padding: 0;

  font-size: 14px;
  font-weight: bold;
}
</style>
