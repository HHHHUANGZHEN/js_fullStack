//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    songLists: [],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.showLoading({
      title: '正在加载中',
      mask: true
    })
    const songLists = wx.getStorageSync('songLists');
    if(songLists && songLists.length) {
      this.setData({
        songLists
      });
      wx.hideLoading();
      return false;
    }
    wx.request({
      url: app.globalData.API_BASE + '/top/list',
      data: {
        idx: 1
      },
      success: res => {
        console.log(res);
        if (res.statusCode === 200) {
          this.setData({
          songLists: res.data.playlist.tracks
        })
        // undefined.tracks
        wx.setStorageSync('songLists', res.data.playlist.tracks)
      }
        wx.hideLoading();
      }
    })
  },
  handlePlayAudio (event) {
    const audioId = event.currentTarget.dataset.id;
    // console.log(audioId);
    wx.navigateTo({
      url: `../play/play?id=${audioId}`
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
