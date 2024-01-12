<script setup lang="ts">
type DataType = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const route = useRoute()
const { data } = await useFetch<DataType[] | []>(`/api/comments/${route.params.count}`)
</script>

<template>
  <ul>
    <li
      v-for="current in data" :key="current.id"
      :style="{ marginBottom: '20px' }"
    >
      <p>#{{ current.id }}</p>
      <div>Name: {{ current.name }}</div>
      <div>Email: {{ current.email }}</div>
      <div>Body: {{ current.body }}</div>
      <div>Post: {{ current.postId }}</div>
    </li>
  </ul>
</template>