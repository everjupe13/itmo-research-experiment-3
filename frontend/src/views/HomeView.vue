<script setup lang="ts">
import DefaultLayout from '@/layout/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout class="blog-content">
    <div>
      <h1>Главная страница</h1>
    </div>
    <div>
      <h2>
        Тема ВКР "Исследование экосистемы Vue для разработки веб-приложений"
      </h2>
    </div>
    <div>
      <p>
        Приложение содержит информацию об рекомендациях при построении
        <br />
        веб-приложений на фреймворке Vue с использованием его экосистемы
      </p>
      <p>Создано в рамках работы над ВКР</p>
    </div>

    <div :style="{ marginTop: '80px' }">
      <h4>Автор</h4>
      <p>Бакиров Илья P4208</p>
    </div>
  </DefaultLayout>
</template>
