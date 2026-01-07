<template>
  <div ref="chartRef" style="width:100%;height:200px;"></div>
</template>
<script setup>
import * as echarts from 'echarts'
import {nextTick, onMounted, onUnmounted, ref} from "vue";

const chartRef = ref(null)
let myChart = null

const dataList = [
  {name: 'Search Engine', value: 2648, total: 3000, color: '#fb6026'},
  {name: 'Direct', value: 2205, total: 3000, color: '#fdbb25'},
  {name: 'Email', value: 1200, total: 3000, color: '#3aaefd'}
]

onMounted(async () => {
  // 🔹 等待 DOM 渲染完成
  await nextTick()

  if (!chartRef.value) {
    console.error('chartRef is null!')
    return
  }

  myChart = echarts.init(chartRef.value)

  const option = {
    series: [
      {
        type: 'pie',itemStyle: { borderRadius: 5, }, radius: ['93%', '124%'], center: ['50%', '70%'], startAngle: 180, endAngle: 360, silent: true,
        data: [{value: dataList[0].total, itemStyle: {color: '#fbddd3'}}]
      },
      {
        type: 'pie',
        radius: ['93%', '124%'],
        center: ['50%', '70%'],
        startAngle: 180,
        endAngle: 360,
        label: {show: false},
        itemStyle: { borderRadius: 5, },
        data: [
          {value: dataList[0].value, itemStyle: {color: dataList[0].color}},
          {value: dataList[0].total - dataList[0].value, itemStyle: {color: 'transparent'}}
        ]
      },
      {
        type: 'pie', radius: ['86%', '56%'], itemStyle: { borderRadius: 5, },center: ['50%', '70%'], startAngle: 180, endAngle: 360, silent: true,
        data: [{value: dataList[1].total, itemStyle: {color: '#fdefd2'}}]
      },
      {
        type: 'pie',
        radius: ['86%', '56%'],
        center: ['50%', '70%'],
        startAngle: 180,
        endAngle: 360,
        itemStyle: { borderRadius: 5, },
        label: {show: false},
        data: [
          {value: dataList[1].value, itemStyle: {color: dataList[1].color}},
          {value: dataList[1].total - dataList[1].value, itemStyle: {color: 'transparent'}}
        ]
      },
      {
        type: 'pie', radius: ['20%', '50%'],itemStyle: { borderRadius: 5, }, center: ['50%', '70%'], startAngle: 180, endAngle: 360, silent: true,
        data: [{value: dataList[2].total, itemStyle: {color: '#d7ecfd'}}]
      },
      {
        type: 'pie',
        radius: ['20%', '50%'],
        center: ['50%', '70%'],
        startAngle: 180,
        endAngle: 360,
        label: {show: false},
        itemStyle: { borderRadius: 5, },
        data: [
          {value: dataList[2].value, itemStyle: {color: dataList[2].color}},
          {value: dataList[2].total - dataList[2].value, itemStyle: {color: 'transparent'}}
        ]
      }
    ]
  }

  myChart.setOption(option)
})

// 卸载时销毁
onUnmounted(() => {
  myChart && myChart.dispose()
})
</script>
<style>

</style>