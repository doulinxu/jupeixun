Page({
  data:{
    loading:true,
    picUrl:{
      logo:'../../images/logo.png',
      banner:"../../images/banner.png",
    },
    classes:[],
  },
  changeUrl(e){
     swan.navigateTo({url:e.currentTarget.dataset.pointUrl});
  },
  onReady:function(){
    let seoInfo = {
      seotitle:'聚培训作文',
      seokeywords:'小学作文,初中作文,高中作文,中考作文,高考作文,满分作文',
      seodescription:'聚培训作文频道涵盖了小学作文、初中作文、高中作文等,还包含了其它主题作文内容:中考作文,高考作文,满分作文,写人作文,写景作文等内容,查找各种主题作文内容,就上聚培训作文频道.'
    };
     swan.setPageInfo && swan.setPageInfo({
                title: seoInfo.seotitle,
                keywords: seoInfo.seokeywords,
                description: seoInfo.seodescription,
                success: function () {
                    console.log('页面基础信息设置完成');
                }
            });
  },
  onLoad:function(){
    swan.showLoading({
        title: '数据加载中',
        mask: true
    });
    var _this = this;
    var appInstance = getApp();
    swan.request({
      url: appInstance.api + 'bdprogram/home/', 
      method: 'GET',
      dataType: 'json',
      // data: {
      //     key: 'value'
      // },
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if(res.statusCode === 200 && res.data.status === 200){
          var _data = res.data.data;
          _this.setData({
            classes:_data,
            loading:false,
          });
        }else{
          swan.showModal({
              title: '提示',
              content: '网络请求错误，请重新打开小程序',
              cancelColor: '#999999',
              success: function (res) {
                  if (res.confirm) {
                      
                  }
              }
          });
        }
        swan.hideLoading();
      },
      fail: function (err) {
          console.log('错误码：' + err.errCode);
          console.log('错误信息：' + err.errMsg);
          swan.showModal({
              title: '提示',
              content: '网络请求错误，请重新打开小程序',
              cancelColor: '#999999',
              success: function (res) {
                  if (res.confirm) {
                      
                  }
              }
          });
      }
    });
  }
});
