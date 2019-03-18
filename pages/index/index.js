Page({
  data:{
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
    var appInstance = getApp();
    swan.request({
      url: appInstance.api + '/index.action', 
      method: 'GET',
      dataType: 'json',
      // data: {
      //     key: 'value'
      // },
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: function (res) {
          var _data = res;
          this.setData({
            classes:_data,
          })
      },
      fail: function (err) {
          console.log('错误码：' + err.errCode);
          console.log('错误信息：' + err.errMsg);
      }
    });
  }
});
