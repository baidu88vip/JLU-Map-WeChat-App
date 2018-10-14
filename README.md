# JLU-Map-WeChat-App

# 走近吉大 - 校园导览微信小程序

开源的地图导览微信小程序，仅需修改地图文件，就可以适配某一学校/景区，具有出色的用户体验。

**特性**

-  一键配置切换
-  地图路径规划
-  路径详情信息

------

## 开源

欢迎 Star

允许任何人对该项目进行变动

同时欢迎各位校友参与到该项目(可新增关于界面加入参与贡献者名称)

不过，该项目所有图片均有版权(吉林大学资产管理与后勤处所有)，禁止盗用，包含首页背景

------

## 预览

![](https://i.imgur.com/m4abg72.png)

------

## 使用说明

扫码关注，即可体验！

![](https://i.imgur.com/oIK51lT.jpg)

项目根目录config.js文件，写入以下内容，并根据自身需求修改

```
module.exports = {
  //调试模式开关，调试模式下只调用本地数据
  debug: true,
  //学校数据配置名称，学校英文缩写
  school: "jlu",
  //高德路线规划密钥，必须加入https://restapi.amap.com为request合法域名
  //密钥申请地址http://lbs.amap.com/api/javascript-api/summary/
  key: "",
  //这里需要自行申请key
  //地图更新地址，用于热修补，无需每次都提交审核
  updateUrl: "https://www.qq.com/json.json",
  //图片CDN域名
  imgCDN: "https://i.imgur.com/"
}
```

复制resources下的地图数据文件jlu.js，重命名jlu.js为(你自己学校的英文缩写.js，根据实际情况修改)

```
module.exports.introduce = {}
module.exports.map = [{}]
```

修改地图文件

```
参照例子自行研究
地图经纬度获取：http://lbs.qq.com/tool/getpoint/index.html
```
