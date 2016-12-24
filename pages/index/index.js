//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    systemInfo: {},
    motto: 'Hello World',
    info: '今天中午·火锅',
    userInfo: {},
    food: '日本料理'
  },
  //事件处理函数
  invitationClick: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取系统数据
    app.getSystemInfo(function(res) {
      that.setData({
        systemInfo: res
      })
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
