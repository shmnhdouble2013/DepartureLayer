/*!build time : 2015-01-21 9:57:17 PM*/
KISSY.add("kg/departurelayer/toptip",function(a,b,c){function d(){}var e={render:function(b){var d,e=this;if(a.isString(b))d=b;else if(b=a.mix({title:"\u4eb2\uff0c\u60a8\u7684\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\u5bfc\u81f4\u7f51\u9875\u6253\u5f00\u901f\u5ea6\u8fc7\u6162\uff0c\u4e3a\u4eab\u53d7\u6781\u901f\u4f53\u9a8c\uff0c\u6211\u4eec\u5efa\u8bae\u4eb2\uff1a",button:{name:"ie",title:"\u5347\u7ea7IE\u6d4f\u89c8\u5668",href:"http://windows.microsoft.com/zh-cn/windows/downloads"},others:[{name:"uc",title:"UC\u6d4f\u89c8\u5668",href:"http://down2.uc.cn/pcbrowser/index.php?id=101&pid=4415"},{name:"chrome",title:"\u8c37\u6b4c\u6d4f\u89c8\u5668",href:"http://www.google.cn/intl/zh-CN/chrome/browser/?installdataindex=chinabookmarkcontrol&brand=CHUN&gclid=CIDzwJGo3cECFQZvvAodnwMAsA"}]},b,!0,null,!0),d='<span class="kb-toptip-title">'+b.title+'</span><a href="'+b.button.href+'" target="_blank" data-spm-click="gostr=/ued;locaid=btn2" class="kb-toptip-btn kb-toptip-ie">'+b.button.title+"</a>",b.others&&b.others.length){d+='<span class="kb-toptip-title">\u6216\u8005\u70b9\u51fb\u4e0b\u8f7d</span>';var f=[];a.each(b.others,function(a){f.push('<a href="'+a.href+'" class="kb-toptip-btn kb-toptip-'+a.name+'" data-spm-click="gostr=/ued;locaid=btn'+a.name+'" target="_blank">'+a.title+"</a>")}),d+=f.join("\u6216")}var g=e.$toptip=c('<div data-spm="20140707" class="kb-toptip kb-toptip-wrapper">'+d+"</div>").prependTo("body").hide().on("show",function(){g.show().animate({marginTop:0},".4","easeBothStrong",function(){e.fire("show")})}).on("hide",function(){g.animate({marginTop:-45},".4","easeBothStrong",function(){g.hide(),e.fire("hide")})});return this},show:function(){return this.$toptip.fire("show"),this},hide:function(){return this.$toptip.fire("hide"),this}},f={};return b.extend?b.extend(e,f):a.extend(d,e,f)},{requires:["base","node"]});