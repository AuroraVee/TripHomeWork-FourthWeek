// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    toName: "Dear xxx",
    mainContent: "How are you",
    lastContent: "Yours wjx",
    isMe: true,
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onLoad(option) {
    const { toname, main, last, recevier } = option
    const isMe = !(recevier === "1")

    this.setData({
      toName: toname || this.data.toName,
      mainContent: main || this.data.mainContent,
      lastContent: last || this.data.lastContent,
      isMe: isMe
    })

    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onShareAppMessage() {
    const { toName, mainContent, lastContent } = this.data
    const url = `pages/index/index?toname=${toName}&main=${mainContent}&last=${lastContent}&recevier=${1}`
    console.log(url);
    return {
      title: "叮！收到一张贺卡，快打开看看吧~",
      path: url
    }
  },
  toInput(e) {
    const { value } = e.detail
    this.setData({
      toName: value
    })
  },
  mainInput(e) {
    const { value } = e.detail
    this.setData({
      mainContent: value
    })

  },
  lastInput(e) {
    const { value } = e.detail
    this.setData({
      lastContent: value
    })
  },
  async getUserProfile() {
    let res = await wx.getUserProfile({
      desc: '用于完善资料',
    })

    this.setData({
      userInfo: res.userInfo,
      hasUserInfo: true
    })

  },
  getUserInfo(e) {

    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,

    })


  },
  bindViewTap() {

  }
})

