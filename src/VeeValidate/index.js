import Vue from 'vue';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    email: '邮箱账号',
    pwd: '密码',
    captcha: '图形验证码'
  }
});
//自定义验证规则
VeeValidate.Validator.extend('mobile', {
  validate: value => {
    return /^\d(3|4|5|6|7|8|9)\d{9}$/.test(value)
  },
  getMessage: field => field + '必须是11位手机号码'
});
VeeValidate.Validator.extend('code', { //短信验证码
  validate: value => {
    return /^\d{4,6}$/.test(value)
  },
  getMessage: field => field + '必须是4-6位的验证码'
});