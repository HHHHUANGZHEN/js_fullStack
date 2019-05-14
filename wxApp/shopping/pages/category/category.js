// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      { name: '果味', id: 'guowei' },
      { name: '蔬菜', id: 'shucai' },
      { name: '炒货', id: 'chaohuo' },
      { name: '点心', id: 'dianxin' },
      { name: '粗茶', id: 'cucha' },
      { name: '淡饭', id: 'danfan' }
    ],
    curIndex: 0,
    toView: 'guowei',
    isScroll: false,
    lastActive: 0,
    conHeight: 0
  },
  switchTap(e) {
    console.log(e);
    this.setData({
      toView: e.target.dataset.id,
      curIndex: e.target.dataset.index
    })
  },
  switchContent(e) {
    let that = this
    console.log(e)
    const scrollTop = e.detail.scrollTop;
    const scrollArr = this.data.heightArr;
    if (scrollTop >= scrollArr[scrollArr.length - 1] - (that.data.conHeight / 2)) {
      return;
    } else {
      for (let i = 0; i < scrollArr.length; i++) {
        if(scrollTop >= 0 && scrollTop < scrollArr[0]) {
          if(0 != that.data.lastActive) {
            that.setData({
              curIndex: 0,
              lastActive: 0
            })
          }
        } else if (scrollTop >= scrollArr[i - 1] - 100 && scrollTop < scrollArr[i]) {
          if(i != that.data.lastActive) {
            console.log(i)
            that.setData({
              curIndex: i,
              lastActive: i
            })
          }
        }
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.getSystemInfo({
      success: function (res) {
        let windowHeight = (res.windowHeight * (750 / res.windowWidth));
        //console.log(windowHeight) //最后获得转化后得rpx单位的窗口高度
        _this.setData({
          conHeight: windowHeight,
        })
      }
    })   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let self = this
    wx.request({
      url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
      success(res) {
        self.setData({
          detail: res.data
        })
        let heightArr = [];
        let h = 0;
        //创建节点选择器
        const query = wx.createSelectorQuery();
        //选择id
        query.selectAll('.cate-box').boundingClientRect()
        query.exec(function (res) {
          console.log(res)
          //res就是 所有标签为cate-box的元素的信息 的数组
          res[0].forEach((item) => {
            h += item.height;
            heightArr.push(h);
          })
          self.setData({
            heightArr: heightArr
          })
          console.log(self.data.heightArr)
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})