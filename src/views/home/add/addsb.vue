<template>
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <div style="font-size:24px;">{{ rawRoute.name }}</div>

    <!-- Popover 包住 img -->
    <van-popover
        v-model:show="showPopover"
        :actions="actions"
        placement="bottom-end"
        @select="onSelect"
    >
      <template #reference>
        <img
            src="../../../assets/home/tjia.png"
            style="width:20px; height:20px;"
        />
      </template>
    </van-popover>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { toRaw } from 'vue'
import { useNavigate } from '@/utils/navigate'
const { go } = useNavigate()
const showPopover = ref(false);

// 通过 actions 属性来定义菜单选项
const actions = [
  { text: '添加设备' ,key: '1'},
  { text: '扫一扫' ,key: '2'},
];
const onSelect = (action) => {
  switch (action.key) {
      case '1':
          // go('/login')
          break;
      case '2':
          go('/erweima')
          break;
  }
}

import { useRoute } from 'vue-router'

const route = useRoute()
const rawRoute = toRaw(route)

console.log(rawRoute.name)
</script>

<style scoped>

</style>