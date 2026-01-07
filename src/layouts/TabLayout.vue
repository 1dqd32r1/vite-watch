<template>
  <!-- 子页面 -->
  <router-view />

  <!-- 底部导航 -->
  <van-tabbar route>
    <van-tabbar-item icon="home-o" to="/app/home">健康</van-tabbar-item>
    <van-tabbar-item icon="flag-o" to="/app/sport">运动</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/app/equipment">设备</van-tabbar-item>
    <van-tabbar-item icon="contact-o" to="/app/mine">我的</van-tabbar-item>
  </van-tabbar>

</template>
