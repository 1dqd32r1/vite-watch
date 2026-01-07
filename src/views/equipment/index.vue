<template>
  <div style="padding: 10px 20px;">
    <Addsb></Addsb>
    <div class="van-card" style="margin-top: 20px;">
      <img src="../../assets/equipment/Watch.png" alt="" style="width: 100%;margin-top: -10%">
      <div style="display: grid;grid-template-columns: repeat(2,1fr);margin-top: -50px">
        <div style="text-align: center;">
          <button @click="showPopup" style="width: 95%;background-color: #888888;border: none;padding: 15px 5px;border-radius: 30px;color: white;font-size: 14px">扫一扫</button>
        </div>
        <div style="text-align: center;">
          <button @click="showPopupTwo" style="width: 95%;background-color: #ee4c18;border: none;padding: 15px 5px;border-radius: 30px;color: white;font-size: 14px">添加设备</button>
        </div>
      </div>
    </div>
  </div>
  <van-popup
      v-model:show="showBottom"
      round
      :style="{ height: '40%', width: '80%' ,marginLeft: '10%',marginTop: '50%' }"
  >
    <div class="popup-wrap">
      <div class="popup-title">权限说明</div>
      <div class="popup-body">
        <div class="tip-item" style="font-weight: 600;line-height: 22px;">
          在使用过程中，本应用需要访问相机权限，
          用于扫描二维码功能。
        </div>
        <div class="tip-item" style="line-height: 22px;color: #888888;margin-top: 10px">
          如果您不同意调用以上权限，将导致该功能
          无法正常使用，但不影响您使用本应用的基
          本功能。您可随时前往“设置”>“权限管理”，
          选择关闭以上权限调用以撤回您的同意。
        </div>
      </div>
      <div style="display: grid;grid-template-columns: repeat(2,1fr);margin-top: 20px">
        <div style="text-align: center;">
          <button @click="closePopup" style="width: 95%;background-color: #888888;border: none;padding: 15px 5px;border-radius: 30px;color: white;font-size: 14px">拒绝</button>
        </div>
        <div style="text-align: center;">
          <button @click="go('/erweima')"  style="width: 95%;background-color: #ee4c18;border: none;padding: 15px 5px;border-radius: 30px;color: white;font-size: 14px">允许</button>
        </div>
      </div>
    </div>
    </van-popup>
  <van-popup
      v-model:show="showBottomTwo"
      round
      :style="{ height: '25%', width: '80%' ,marginLeft: '10%',marginTop: '50%' }"
  >
    <div class="popup-wrap">
      <div class="popup-title">是否允许蓝牙数据传输？</div>
      <div class="popup-body">
        <div class="tip-item" style="font-weight: 600;line-height: 22px;text-align: center;margin-top: 10px">
          本应用需要通过蓝牙与设备互相传输数据。
        </div>
      </div>
      <div style="display: grid;grid-template-columns: repeat(2,1fr);margin-top: 20px">
        <div style="text-align: center;">
          <button @click="closePopupTwo" style="width: 95%;background-color: #888888;border: none;padding: 15px 5px;border-radius: 30px;color: white;font-size: 14px">拒绝</button>
        </div>
        <div style="text-align: center;">
          <button @click="go('/add')"  style="width: 95%;background-color: #ee4c18;border: none;padding: 15px 5px;border-radius: 30px;color: white;font-size: 14px">同意</button>
        </div>
      </div>
    </div>
  </van-popup>
</template>
<style lang="scss">

</style>
<script setup>
import { onMounted, onUpdated, onUnmounted, onBeforeMount ,ref} from 'vue'
import Addsb from "@/views/home/add/addsb.vue";
import { useNavigate } from '@/utils/navigate'
const { go } = useNavigate()
const showBottom = ref(false)

const showPopup = () => {
  showBottom.value = true
}
const closePopup = () => {
  showBottom.value = false
}
const showBottomTwo = ref(false)

const showPopupTwo = () => {
  showBottomTwo.value = true
}
const closePopupTwo = () => {
  showBottomTwo.value = false
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
<style lang="scss" scoped>
.popup-wrap {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.popup-title {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 12px;
}
.popup-body {
  flex: 1;
  font-size: 14px;
  color: #666;
}
.tip-item {
  line-height: 30px;
}
</style>