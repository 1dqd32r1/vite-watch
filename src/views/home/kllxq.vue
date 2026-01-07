<template>
    <div style="padding: 10px 20px">
      <div style="margin-left: 10px;padding-top: 20px">
        <img src="../../assets/home/fhwhite.png" alt="" style="width: 20px;" @click="router.back()">
      </div>
      <h2 style="color: white;margin-top: 10px;font-weight: 500">卡路里消耗</h2>
      <div class="van-card" style="margin-top: 20px;height: 400px;background-color:#fdfdfd;padding: 0;border-radius: 30px;width: 90%">
        <div style="background: linear-gradient(to bottom,#78e5fd,#bbf1fb,#fdfdfd);height: 150px;border-radius: 30px;padding: 30px;">
          <div style="font-size: 14px">
            <div style="color: #242424">5454545</div>
            <div style="color: gray;font-size: 12px;margin-top: 5px">2026年1月4日活力指标</div>
          </div>
          <h2 style="font-size: 22px;margin-top: 10px">2.1公里 · 3468步</h2>
          <h1 style="font-size: 30px;">消耗294千卡</h1>
          <h1 style="font-size: 30px;">约 4 块饼干</h1>
          <img src="../../assets/home/bg.png" alt="" style="width: 160px;float: right;margin-top: 20px">
        </div>
      </div>
      <div style="display: grid;grid-template-columns: repeat(2,1fr);width: 90%;position: fixed;bottom: 20px;left: 5%">
        <div style="text-align: center;">
          <button  style="width: 90%;background-color: #888888;border: none;padding: 15px 3px;border-radius: 20px;color: white;font-size: 14px">查看活力指标</button>
        </div>
        <div style="text-align: center;">
          <button style="width: 90%;background-color: #ee4c18;border: none;padding: 15px 3px;border-radius: 20px;color: white;font-size: 14px" @click="showShare = true">分享</button>
        </div>
      </div>
    </div>
  <van-share-sheet
      v-model:show="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
  />
</template>

<script setup>
import { onMounted, onUpdated, onUnmounted, onBeforeMount ,ref} from 'vue'
import { useNavigate } from '@/utils/navigate'
import {request} from "@/utils/request.js";
const { go } = useNavigate()
const showBottom = ref(false)

const showPopup = () => {
  showBottom.value = true
}
const closePopup = () => {
  showBottom.value = false
}
const showShare = ref(false);
const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' },
];

const onSelect = (option) => {
  showToast(option.name);
  showShare.value = false;
};
import { useRouter } from 'vue-router'

const router = useRouter()
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

</style>