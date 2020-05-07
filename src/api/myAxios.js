import axios from 'axios';
import qs from 'querystring';

/* 创建Axios 的伪实例, 不是new Axios的实例，但可以利用Axios实例中的所有方法和属性 */
const instance = axios.create({
    // baseURL: '/'
});

//请求拦截器：即将发送请求之前，将所有请求拦截下来，批量处理，例如：添加token,或者修改请求参数
instance.interceptors.request.use(config => {
    //axios中默认发送的格式是json,但目前的服务器没有对json格式的请求参数做处理，所以需要转换为urlencoded编码格式
    config.data = qs.stringify(config.data);
    return config;
});

//响应拦截器
instance.interceptors.response.use(
    response => response.data,
    error => {
        alert('响应拦截器失败===', error.message);
        return new Promise(()=>{});//初始化promise实例对象，为pending状态
    }

);

export default instance;