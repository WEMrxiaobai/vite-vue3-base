import axios from "axios";
import qs from "qs";

// axios.defaults.baseURL = ''  //正式
axios.defaults.baseURL = 'http://localhost:3000' //测试

//post请求头
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";

// 表示跨域请求时是否需要使用凭证 允许跨域携带cookie信息
// axios.defaults.withCredentials = false;

// 允许跨域
// axios.defaults.headers.post["Access-Control-Allow-Origin-Type"] = "*";

//设置超时
axios.defaults.timeout = 8000;

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        if (response.status == 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {

        alert(JSON.stringify(error), '请求异常', {
            confirmButtonText: '确定',
            callback: (action) => {
                console.log(action)
            }
        });
    }
);
export default {
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: qs.stringify(data),
            })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                });
        })
    },

    get(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: data,
            })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
};