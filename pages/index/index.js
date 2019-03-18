Page({
  data:{
    loading:true,
    picUrl:{
      logo:'../../images/logo.png',
      banner:"../../images/banner.png",
    },
    classes:[
      {
        title:'小学作文',
        banner:[
          {
            bannerText:'小雨伞小雨伞小雨伞小雨伞小雨伞小雨伞',
            bannerUrl:'../../images/微信图片_201903151528191.jpg',
          },
          {
            bannerText:'小雨伞',
            bannerUrl:'../../images/微信图片_201903151528191.jpg',
          }
        ],
        list:[
          {
            listTitle:"美丽的太阳花1",
            listTime:"03-15",
          },
           {
            listTitle:"美丽的太阳花美丽的太阳花美丽的太阳花美丽的太阳花",
            listTime:"03-15",
          },
           {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          },
           {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          }, {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          }
          , {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          },
        ]
      },
     {
        title:'初中作文',
        banner:[
          {
            bannerText:'小雨伞',
            bannerUrl:'../../images/微信图片_201903151528191.jpg',
          },
          {
            bannerText:'小雨伞',
            bannerUrl:'../../images/微信图片_201903151528191.jpg',
          }
        ],
        list:[
          {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          },
           {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          },
           {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          },
           {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          }, {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          }
          , {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          },
        ]
      },
      {
        title:'高中作文',
        banner:[
          {
            bannerText:'小雨伞',
            bannerUrl:'../../images/微信图片_201903151528191.jpg',
          },
          {
            bannerText:'小雨伞',
            bannerUrl:'../../images/微信图片_201903151528191.jpg',
          }
        ],
        list:[
          {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          },
           {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          },
           {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          },
           {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          }, {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          }
          , {
            listTitle:"美丽的太阳花",
            listTime:"03-15",
          },
        ]
      },
    ]
  },
  changeUrl(e){
     swan.navigateTo({url:e.currentTarget.dataset.pointUrl});
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
        console.log(res);
        if(res.statusCode === 200 && res.data.status === 200){
          console.log(1);
          var _data = res.data.data;
          _this.setData({
            classes:_data,
            loading:false,
          });
        }
       swan.hideLoading();
          
      },
      fail: function (err) {
          console.log('错误码：' + err.errCode);
          console.log('错误信息：' + err.errMsg);
      }
    });
  }
});
