<template>
  <div style="padding: 10px 20px;">
    <addsb></addsb>
    <Hometop></Hometop>
    <div @click="go('/kllxq')" class="van-card"
         style="float: right;width: 60px;margin-top: -60px;box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);display: flex;justify-content: center;align-items: center;">
      <div>
        <img src="../../assets/home/bg.png" style="width: 30px;">
        <div style="margin-top: 10px;font-weight: 700;font-size: 20px;text-align: center">
          ×4
        </div>
      </div>
    </div>
    <div class="van-card" style="margin-top: 40px;">
      <div style="display: grid;grid-template-columns: repeat(3,1fr)">
        <div>
          <div style="display: flex ;align-items: center">
            <img src="../../assets/home/kll.png" style="width: 30px;">
            <div style="margin-left: 0px;font-size: 14px">卡路里</div>
            <img src="../../assets/home/jt.png" style="width: 13px;margin-left: 10px">
          </div>
          <div style="margin-top: 10px">
            <h1 style="font-size: 32px;margin-bottom: 0">295</h1>
            <p style="margin-top: 0;margin-bottom: 5px">/800千卡</p>
          </div>
        </div>
        <div>
          <div style="display: flex ;align-items: center">
            <img src="../../assets/home/bs.png" style="width: 25px;height: 25px;margin-top: 5px;margin-right: 5px">
            <div style="margin-left: 0px;font-size: 14px">步数</div>
            <img src="../../assets/home/jt.png" style="width: 13px;margin-left: 10px">
          </div>
          <div style="margin-top: 10px">
            <h1 style="font-size: 32px;margin-bottom: 0">3468</h1>
            <p style="margin-top: 0;margin-bottom: 5px">/6000步</p>
          </div>
        </div>
        <div>
          <div style="display: flex ;align-items: center">
            <img src="../../assets/home/time.png" style="width: 25px;height: 25px;margin-top: 5px;margin-right: 5px">
            <div style="margin-top: 3px;display: flex;align-items: center">
              <div style="margin-left: 0px;font-size: 14px">中高强度</div>
              <img src="../../assets/home/jt.png" style="width: 13px;margin-left: 10px">
            </div>
          </div>
          <div style="margin-top: 10px">
            <h1 style="font-size: 32px;margin-bottom: 0">8</h1>
            <p style="margin-top: 0;margin-bottom: 5px">/60分钟</p>
          </div>
        </div>
      </div>
      <van-divider/>
      <div style="padding: 10px 5px;display: flex;align-items: center;">
        <img src="../../assets/home/people.png" style="width: 30px;">
        <div style="font-size: 14px;font-weight:700;margin-left: 5px">活动次数13次</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, onUpdated, onUnmounted, onBeforeMount} from 'vue'
import Addsb from "@/views/home/add/addsb.vue";
import Hometop from '@/views/home/echarts/hometop.vue'
import {request} from '@/utils/request';
import {useNavigate} from '@/utils/navigate.js'

const {go} = useNavigate()

// 获取 query 参数
onMounted(() => {
  console.log('🌱 onMounted → 可以拿到 DOM')
  request('get', '/por-api/system/data/list').then(res => {
    console.log(res);
  }).catch(err => {
        console.error('登录失败：', err);
  });
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