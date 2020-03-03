'use strict'
module.exports = {
  dev: {
    corsDomain: 'http://debug.azuratech.com',
    corsMainPort: 41000, // 平台端口
    sharePort: 31001, // 基础数据端口
    samplePort: 31011, // 采样端口
    simulatorPort: 31013, // 模拟端口
    emergencyPort: 31021, // 应急端口
    maintenanceApi: "", 
    maintenanceUrl: "http://demo.azuratech.com:51008", 
    frameJS: '/Scripts/aepmod.js',
    defaultProvince: '浙江省',
    defaultCity: '宁波市',
    defaultArea: '鄞州区',
    serverUrl: 'http://localhost:30025/'
  },
  debug: {
    corsDomain: 'http://debug.azuratech.com',
    corsMainPort: 41000, // 平台端口
    sharePort: 51001, // 基础数据端口
    samplePort: 31011, // 采样端口
    simulatorPort: 31013, // 模拟端口
    emergencyPort: 51005, // 应急端口
    maintenanceApi: "", 
    maintenanceUrl: "", 
    frameJS: '/Scripts/aepmod.js',
    defaultProvince: '浙江省',
    defaultCity: '宁波市',
    defaultArea: '鄞州区',
    serverUrl: 'http://localhost:30005/'
  },
  zhoushan: {
    corsDomain: 'https://zsxt.azuratech.com',
    corsMainPort: 8000,
    sharePort: 8001,
    samplePort: 8005,
    simulatorPort: 8006,
    emergencyPort: 8003,
    frameJS: '/Scripts/aepmod.js',
    defaultProvince: '浙江省',
    defaultCity: '舟山市',
    defaultArea: '定海区'
    }
}
