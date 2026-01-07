<template>
  <div class="scan-page">
    <!-- 顶部 -->
    <div class="scan-header">
      <img
          src="@/assets/home/fhwhite.png"
          class="back"
          @click="router.back()"
       style="margin-left: 10px"/>
      <h2 style="letter-spacing: 3px">扫一扫</h2>
    </div>

    <!-- 扫码框 -->
    <div class="scan-box">
      <div class="scan-line"></div>
    </div>

    <!-- 提示文字 -->
    <p class="tip">对准二维码进行扫描</p>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, onUnmounted, onBeforeMount ,ref} from 'vue'
import { useNavigate } from '@/utils/navigate'

import {request} from "@/utils/request.js";
const { go } = useNavigate()
import { useRouter } from 'vue-router'
const router = useRouter()
const showBottom = ref(false)

const showPopup = () => {
  showBottom.value = true
}
const closePopup = () => {
  showBottom.value = false
}
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
<style lang="scss">
.scan-page {
  min-height: 100vh;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 顶部 */
.scan-header {
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
}

.back {
  width: 20px;
  margin-right: 10px;
}

/* 扫码框 */
.scan-box {
  width: 260px;
  height: 260px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  margin-top: 80px;
  position: relative;
  overflow: hidden;
}

/* 扫描线 */
.scan-line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #00ffcc;
  animation: scan 2s linear infinite;
}

@keyframes scan {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}

/* 提示 */
.tip {
  margin-top: 40px;
  color: #aaa;
  font-size: 14px;
}
</style>