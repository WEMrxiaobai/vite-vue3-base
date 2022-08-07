<template>
    <div>
        <h1>Home</h1>
    </div>
    <router-link to="/login">Go to Login</router-link>
    <br />
    <router-link to="/vuexdemo">Go to VuexDemo</router-link>
    <br />
    <button @click="GotoRouter('123')"></button>
</template>

<script>
import { ref, reactive, getCurrentInstance } from 'vue'

export default {
    setup() {
        const { proxy } = getCurrentInstance(); //来获取全局 globalProperties 中配置的信息
        const GotoRouter = (path) => {
            console.log(path);
        }
        const sendHttp = () => {
            proxy.$axios
                .post("/captcha/sent", {
                    phone: 12345678912,
                })
                .then((res) => {
                    //请求成功
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })

        }
        return {
            sendHttp,
            GotoRouter,
            proxy
        }
    }
}
</script>

<style>
</style>