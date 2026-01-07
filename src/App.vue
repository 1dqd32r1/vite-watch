<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
    () => route.meta.bg,
    (bg) => {
      document.body.style.backgroundColor = bg || '#f7f8fa'
    },
    { immediate: true }
)
</script>

<template>
  <router-view />
</template>
