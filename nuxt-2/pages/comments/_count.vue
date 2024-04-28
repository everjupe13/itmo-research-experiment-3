<template>
  <ul>
    <li
      v-for="current in serverData" :key="current.id"
      :style="{ marginBottom: '20px' }"
    >
      <p>#{{ current.id }}</p>
      <div>Name: {{ current.name }}</div>
      <div>Email: {{ current.email }}</div>
      <div>Body: {{ current.body }}</div>
    </li>
  </ul>
</template>

<script lang="ts">
type DataType = {
  id: number
  name: string
  email: string
  body: string
}

export default {
  async asyncData({ params, $axios, req }: { params: any, $axios: any, req: any }) {
    const data = await $axios.$get(`http://${req.headers.host}/api/comments/${params.count}`)

    return {
      serverData: data.data as DataType[]
    }
  },
}
</script>
