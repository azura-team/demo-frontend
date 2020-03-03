export default [
  //获取空气站列表最新质量及PM2.5
  {
    fun: 'getLastAQIVals',
    interface: '/Api/FactorData/GetLastAQIValsForPhone',
    type: 'get',
    serviceName: 'serviceEnv'
  }
]