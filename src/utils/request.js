// src/utils/request.js
import axios from 'axios';

const BASE_URL = 'http://10.33.83.93';

export function request(type, path, data = {}, headers = {}) {
    headers['Content-Type'] ||= 'application/json';

    // 1. 不再判断路径，一律挂 token（没有就空字符串）
    headers['Authorization'] = localStorage.getItem('token') || '';

    const url = `${BASE_URL}${path}`;

    const config = {
        method: type,
        url,
        headers,
        ...(type.toLowerCase() === 'get' ? {params: data} : {data: JSON.stringify(data)})
    };

    return axios(config).then(res => res.data);
}

/*
    request('get', '/por-api/system/team/list').then(res => {
    console.log(res);
})
    .catch(err => {
        console.error('登录失败：', err);
    });
    request('post', '/por-api/login', {username: 'wyx', password: '123456'})
    .then(res => {
        console.log(res);          // 登录成功，这里就能拿到后端返回的 token
        // 示例：把 token 存起来
        localStorage.setItem('token','bearer '+ res.token);
    })
    .catch(err => {
        console.error('登录失败：', err);
    });*/
