// 云函数入口文件
const cloud = require('./node_modules/wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // page通过wx.cloud.callFunction 上云
  // 会到地上
  return event.userInfo
}