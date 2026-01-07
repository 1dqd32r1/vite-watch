<script setup>
import {request} from '@/utils/request.js';
import {useNavigate} from '@/utils/navigate.js'   // 路径按你实际的来

const {go} = useNavigate()
const dl = () => {
  request('post', '/por-api/login', {username: 'wyx', password: '123456'}).then(res => {
    console.log(res);          // 登录成功，这里就能拿到后端返回的 token
    // 示例：把 token 存起来
    localStorage.setItem('token', 'Bearer ' + res.token);
    setTimeout(function () {
      console.log('登录成功')
      go('/app/home')
    }, 1000);
  }).catch(err => {
    console.error('登录失败：', err);
  });
}
</script>

<template>
  <button @click="dl">登录</button>
</template>

<style scoped>

</style>