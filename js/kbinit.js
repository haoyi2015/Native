var mDom ={
	footerDom:function(act){
		var fHtml = {  
            'conTxt':[{
            	'name':'看吧',
            	'hurl':'kanba.html',
            	'hclass':'eye',
            	'id':1
            },{
            	'name':'贴吧',
            	'hurl':'tieba.html',
            	'hclass':'paperplane',
            	'id':2
            },{
            	'name':'聊吧',
            	'hurl':'liaoba.html',
            	'hclass':'chatbubble',
            	'id':3
            	
            },{
            	'name':'我',
            	'hurl':'my.html',
            	'hclass':'person',
            	'id':4
            }]
          };
        var len =fHtml.conTxt.length;
		var Kbdom ='<nav class="mui-bar mui-bar-tab">'
				for(var i=0; i<len; i++){
					var hm =fHtml.conTxt[i],
						cs ='';
					if(i==act){
						cs ='mui-active';
					}
					Kbdom+='<a class="mui-tab-item '+cs+'" data-in="'+cs+'" data-href="'+hm.hurl+'" data-id="'+hm.id+'">'+
						'<span class="mui-icon mui-icon-'+hm.hclass+'"></span>'+
						'<span class="mui-tab-label">'+hm.name+'</span>'+
					'</a>'
				}
			'</nav>';
		return Kbdom;
	},
	init:function(apt){
		var t =this;
		t.applendDom(apt);
	},
	applendDom:function(apt){
		var f =true;
		if(f){
			$('.mui-content').after(mDom.footerDom(apt));
			mDom.AddBind();
			f= false;
		}
	},
	AddBind:function(){
		$('.mui-tab-item').on('click',function(){
			var din =$(this),
				dhref =din.attr('data-href'),
				did =din.attr('data-id');
			mui.openWindow({
			    url:'./'+dhref+'',
			    id:did,
			    show:{
			      autoShow:false
			    },
			    extras:{
			        id:did,
			        version:'0.5.8'
			    },
			    waiting:{
			      autoShow:true,//自动显示等待框，默认为true
			      title:'正在加载...',//等待对话框上显示的提示内容
			      options:{
			        width:'waiting-dialog-widht',//等待框背景区域宽度，默认根据内容自动计算合适宽度
			        height:'waiting-dialog-height',//等待框背景区域高度，默认根据内容自动计算合适高度
			      }
			    }
			});
		});
		
		$(document).ready(function (){
	    	$(window).scroll(function(){
              if($(document).scrollTop()>=$(document).height()-$(window).height()){
              	 $('nav.mui-bar-tab').fadeOut();
              	 $('.mui-kba .mui-content').css('padding-bottom',20);
              }else{
              	 $('nav.mui-bar-tab').fadeIn();
              	 $('.mui-kba .mui-content').css('padding-bottom',56);
              }
            });
	    });
	}
}