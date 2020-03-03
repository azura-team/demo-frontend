module.exports = {
  dev: {
    // 端口
    port: 30030,
    // 代理地址
    proxy: {
      '/env': {
        target: 'http://172.19.123.68:30006',
        pathRewrite: {
          '^/env': ''
        }
      }
    },
    // 自动设置cookie
    loginInfo: {
      host: 'http://sx.azuratech.com:31000/',
      userid: 'admin',
      password: 'Azura123',
      tokenkey: 'AzuraCookie'
    }
  }
}