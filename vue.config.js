module.exports = {
    // 基本路径
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    devServer: {
      port: 8080, // 端口号
      host: "localhost",
      https: false, // https:{type:Boolean}
      open: true, //配置自动启动浏览器
      // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
      proxy: {
        "/api": {
          target: "http://39.100.114.237:8080",//接口地址
          ws: true,   //是否代理websockets
          changeOrigin: true ,// 设置同源  默认false，是否需要改变原始主机头为目标URL
          pathRewrite: {
            '^/api': ""          
          }
        },
        "/foo": {
          target: "<other_url>"
        }
      } // 配置多个代理
      
    },
    lintOnSave: false ,// 关闭eslint代码检查
    
  };