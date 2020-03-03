import local from '../../../config/local'
import deploy from '../../../config/deploy'
export default {
  apiBasePath:
    process.env.NODE_ENV === 'production'
      ? deploy.corsDomain + ':' + deploy.emergencyPort
      : local.corsDomain + ':' + local.emergencyPort,
  fileBasePath:
    process.env.NODE_ENV === 'production'
      ? deploy.corsDomain + ':' + deploy.emergencyPort
      : local.corsDomain + ':5000',
  dataBasePath:
    process.env.NODE_ENV === 'production'
      ? deploy.corsDomain + ':' + deploy.emergencyPort
      : 'http://localhost' + ':' + local.emergencyPort,
  vocApiPath:
    process.env.NODE_ENV === 'production'
      ? deploy.corsDomain + ':' + deploy.sharePort
      : local.corsDomain + ':' + local.sharePort,
  visualBasePath:
    process.env.NODE_ENV === 'production'
      ? deploy.corsDomain + ':' + deploy.simulatorPort
      : local.corsDomain + ':' + local.simulatorPort,
  spotBasePath:
    process.env.NODE_ENV === 'production'
      ? deploy.corsDomain + ':' + deploy.samplePort
      : local.corsDomain + ':' + local.samplePort,
  shareBasePath:
    process.env.NODE_ENV === 'production'
      ? deploy.corsDomain + ':' + deploy.sharePort
      : local.corsDomain + ':' + local.sharePort,
  defaultDivision: {
    province: deploy.defaultProvince ? deploy.defaultProvince : '浙江省',
    city: deploy.defaultCity ? deploy.defaultCity : '宁波市',
    area: deploy.defaultArea ? deploy.defaultArea : '鄞州区'
  },
  maintenanceApi:
    process.env.NODE_ENV === 'production'
      ? deploy.maintenanceApi
      : local.maintenanceApi,
  maintenanceUrl:
    process.env.NODE_ENV === 'production'
      ? deploy.maintenanceUrl
      : local.maintenanceUrl

}
