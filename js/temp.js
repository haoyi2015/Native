var Htm = jQuery.noConflict();
if(Htm){
	Htm.extend({
		footerDom:function(options){
			var Kbdom ='<nav class="mui-bar mui-bar-tab">'+
					'<a class="mui-tab-item" href="index.html">'+
						'<span class="mui-icon mui-icon-eye"></span>'+
						'<span class="mui-tab-label">看吧</span>'+
					'</a>'+
					'<a class="mui-tab-item" href="tieba.html">'+
						'<span class="mui-icon mui-icon-paperplane"></span>'+
						'<span class="mui-tab-label">贴吧</span>'+
					'</a>'+
					'<a class="mui-tab-item" href="my.html">'+
						'<span class="mui-icon mui-icon-chatbubble">'+
							'<!--<span class="mui-badge">9</span>-->'+
						'</span>'+
						'<span class="mui-tab-label">聊吧</span>'+
					'</a>'+
					'<a class="mui-tab-item mui-active" href="#tabbar-with-map">'+
						'<span class="mui-icon mui-icon-person"></span>'+
						'<span class="mui-tab-label">我</span>'+
					'</a>'+
				'</nav>';
			return Kbdom;
		}
	});
}