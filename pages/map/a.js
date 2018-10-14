
var app = getApp();
var amapFile = require('../../utils/amap-wx.js');

Page({
  data: {
    buildlData: app.globalData.map,
    latitude: null,
    longitude: null,
    markers: [],
    distance: '',
    polyline: [],
    //定义变量接受经纬度参数
    deslatitude: null,
    deslongitude: null
  },

//为起点和终点经纬度赋值，起点用自带方法返回浮点数，终点需要转化为浮点数
  onLoad: function (options) {
    var that = this;
    that.setData({
      longitude: app.globalData.longitude,
      latitude: app.globalData.latitude,
      deslatitude: parseFloat(options.deslatitude),
      deslongitude: parseFloat(options.deslongitude)
    })
    //定义起点终点坐标变量并赋值
    var destinationvar = that.data.deslongitude + ',' + that.data.deslatitude;
    var originvar = that.data.longitude + ',' + that.data.latitude;
    var _this = this;
    var myAmapFun = new amapFile.AMapWX({ key: require('../../config.js').key });
    myAmapFun.getWalkingRoute({
      //起点
      // origin: '125.276760,43.823980',
      // origin: JSON.stringify(that.data.longitude) + ',' + JSON.stringify( that.data.latitude),
      origin: originvar,//将赋值变量给origin和destination
      //目的地
      // destination: '116.40711,39.90466',
      // destination: options.deslongitude + ',' + options.deslatitude,
      destination: destinationvar,
      success: function (data) {
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          that.setData({
            steps: data.paths[0].steps
          });
        }
      },
      fail: function (info) {

      }
    })
  },

})
