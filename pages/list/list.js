
Page({
  data:{
    loading:true,
    name:'',
    lists:[],
    id:'',
    page:1,
  },
  returnIndex(e){
       swan.navigateBack();
    },
  changeUrl(e){
     swan.navigateTo({url:e.currentTarget.dataset.pointUrl});
  },
  onReachBottom:function(){
    // console.log(1);
    // var _lists = this.data.lists;
    // _lists.push( {
    //     title:'一只神奇的狗1',
    //     abstract:'我发现窗外有一只黑白相间的狗。它的头是黑色的，身体是白色的，还带着黑色小斑点，尾巴短短的，像一条小辫子，走路的时候总喜欢把尾巴甩来甩去，它还有一双灵敏的耳朵，有时候往下垂，有时候竖起耳朵听旁边有没有动静。它一会儿东张西望，一会儿在旁边跳来跳去，像个淘气的小朋友。就在我转',
    //     time:'03-17'
    //   });
    //   this.setData({
    //     lists:_lists,
    //   })
    //进行翻页操作
    const {id,page} = this.data;
    this.getLists(id,page)
    
  },
  getLists(id,page){
    swan.showLoading({
        title: '数据加载中',
        mask: true
    });
    var _this = this;
    var appInstance = getApp();
    swan.request({
      url: appInstance.api + 'bdprogram/list/c'+ id +'/',
      data:{
        id,
        page
      },
      method: 'GET',
      dataType: 'json',
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if(res.statusCode === 200 && res.data.status === 200){
          var _data = res.data.data;
           let text = [];
            //去除当中的&nbsp;
           _data.list && _data.list.forEach((lists,index)=>{
                _data.list[index].text = lists.text.replace(/&nbsp;/g, "");
            });
          _this.setData({
            lists:_this.data.lists.concat(_data.list),
            name:_data.name,
            loading:false,
            id:id,
            page:_this.data.page += 1,
          });
          // seo信息
          let seoInfo = {
            seokeywords:'小学作文,初中作文,高中作文,中考作文,高考作文,满分作文',
            seodescription:'聚培训作文频道涵盖了小学作文、初中作文、高中作文等,还包含了其它主题作文内容:中考作文,高考作文,满分作文,写人作文,写景作文等内容,查找各种主题作文内容,就上聚培训作文频道.'
          };
          swan.setPageInfo && swan.setPageInfo({
              title: _data.name,
              keywords: seoInfo.seokeywords,
              description: seoInfo.seodescription,
              success: function () {
                  console.log('列表页页面基础信息设置完成');
              }
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
  },
  onLoad:function(ops){
    this.getLists(ops.id,1);
  }
});