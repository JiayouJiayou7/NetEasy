const px2rem = require('postcss-px2rem');
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 75   // 设计稿10等分之后的值
});
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer:{
    open: true
  }
}