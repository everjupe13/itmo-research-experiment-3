<script setup lang="ts">
type DataType = {
  id: number
  name: string
  email: string
  body: string
}

const route = useRoute()
const { data } = await useFetch<{ data: DataType[] | [] }>(`/api/comments/${route.params.count}`)
</script>

<template>
  <ul>
    <li
      v-for="current in data?.data" :key="current.id"
      :style="{ marginBottom: '20px' }"
    >
      <p>#{{ current.id }}</p>
      <div>Name: {{ current.name }}</div>
      <div>Email: {{ current.email }}</div>
      <div>Body: {{ current.body }}</div>
    </li>
  </ul>
</template>