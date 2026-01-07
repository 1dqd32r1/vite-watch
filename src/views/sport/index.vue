

<template>
  <div style="padding: 10px 20px;">
    <Addsb></Addsb>
  </div>
</template>
<style lang="scss">

</style>
<script setup>
import { onMounted, onUpdated, onUnmounted, onBeforeMount } from 'vue'
import Addsb from "@/views/home/add/addsb.vue";

// DOM 已挂载，最常用来拉数据、初始化图表
onMounted(() => {
  console.log('🌱 onMounted → 可以拿到 DOM')
})

// 数据变化导致重新渲染后
onUpdated(() => {
  console.log('🔄 onUpdated → 视图已重新渲染')
})

// 组件卸载前，清定时器、解绑事件
onUnmounted(() => {
  console.log('🧹 onUnmounted → 清理工作')
})

// 挂载前，很少用，偶尔做最后一次数据修正
onBeforeMount(() => {
  console.log('🚀 onBeforeMount')
})
</script>