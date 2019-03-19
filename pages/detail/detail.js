Page({
    data:{
        loading:true,
        exceeding:false,
        text:{},
        recommend:{
            name:''
        }
    },
     changeUrl(e){
        swan.navigateTo({url:e.currentTarget.dataset.pointUrl});
    },
    nextOrPre(e){
        swan.redirectTo({url:e.currentTarget.dataset.pointUrl});
    },
    showAll(e){
        this.setData({
            exceeding:false,
        })
    },
    returnIndex(e){
        swan.navigateBack();
    },
    onReady:function(){
        const _this = this;
        setTimeout(function() {
            let query = swan.createSelectorQuery();
            query.select('#content').fields({
                size: true,
            },function(res){
                res.height
            }).exec((res)=>{
                let height = res[0].height;
                if(height > 500){
                    console.log(_this);
                    _this.setData({
                        exceeding:true,
                    });
                }
            });
        },500);
    },
    onLoad:function(ops){
        swan.showLoading({
            title: '数据加载中',
            mask: true
        });
        var _this = this;
        var appInstance = getApp();
        swan.request({
        url: appInstance.api + 'bdprogram/zuowen/'+ ops.id +'.html', 
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
            _data.text && _data.text.forEach((texts)=>{
                text.push(texts.replace(/&nbsp;/g, ""));
            });
            _data.text = text;
            _this.setData({
                text:_data,
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
