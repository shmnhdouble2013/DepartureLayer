/*!build time : 2014-07-16 12:02:48 PM*/
KISSY.add("gallery/DepartureLayer/1.0/store",function(){function a(){return b?b:(b=e.body.appendChild(e.createElement("div")),b.style.display="none",b.addBehavior("#default#userData"),b.load(f),b)}var b,c={},d=window,e=d.document,f="localStorage",g="globalStorage";return c.set=function(){},c.get=function(){},c.remove=function(){},c.clear=function(){},f in d&&d[f]?(b=d[f],c.set=function(a,c){b.setItem(a,c)},c.get=function(a){return b.getItem(a)},c.remove=function(a){b.removeItem(a)},c.clear=function(){b.clear()}):g in d&&d[g]?(b=d[g][d.location.hostname],c.set=function(a,c){b[a]=c},c.get=function(a){return b[a]&&b[a].value},c.remove=function(a){delete b[a]},c.clear=function(){for(var a in b)delete b[a]}):e.documentElement.addBehavior&&(c.set=function(b,c){var d=a();d.setAttribute(b,c),d.save(f)},c.get=function(b){var c=a();return c.getAttribute(b)},c.remove=function(b){var c=a();c.removeAttribute(b),c.save(f)},c.clear=function(){var b=a(),c=b.XMLDocument.documentElement.attributes;b.load(f);for(var d,e=0;d=c[e];e++)b.removeAttribute(d.name);b.save(f)}),c}),KISSY.add("gallery/DepartureLayer/1.0/toptip",function(a,b,c){function d(){}var e={render:function(b){var d,e=this;a.isString(b)?d=b:(b=a.mix({title:"\u4eb2\uff0c\u60a8\u7684\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\u5bfc\u81f4\u7f51\u9875\u6253\u5f00\u901f\u5ea6\u8fc7\u6162\uff0c\u4e3a\u4eab\u53d7\u6781\u901f\u4f53\u9a8c\uff0c\u6211\u4eec\u5efa\u8bae\u4eb2\uff1a",button:"\u5347\u7ea7\u6d4f\u89c8\u5668",href:"http://windows.microsoft.com/zh-cn/windows/downloads"},b,!0,null,!0),d='<span class="kb-toptip-title">'+b.title+'</span><a href="'+b.href+'" target="_blank" class="kb-toptip-btn">'+b.button+"</a>");var f=e.$toptip=c('<div class="kb-toptip kb-toptip-wrapper">'+d+"</div>").prependTo("body").hide().on("show",function(){f.show().animate({marginTop:0},".4","easeBothStrong",function(){e.fire("show")})}).on("hide",function(){f.animate({marginTop:-45},".4","easeBothStrong",function(){f.hide(),e.fire("hide")})});return this},show:function(){return this.$toptip.fire("show"),this},hide:function(){return this.$toptip.fire("hide"),this}},f={};return b.extend?b.extend(e,f):a.extend(d,e,f)},{requires:["base","node"]}),KISSY.add("gallery/DepartureLayer/1.0/index",function(a,b,c){function d(b){if("*"===b)return function(){return!0};var c=b.match(g);c||a.log("Unexpacted version: "+b);var d=c[1]||"<=",e=+c[2],f=+c[3];if(d&&e){if("~"===d){var h=e,i=(e/10|0)+10;return function(a){return a&&i>a&&a>=h}}return"="===d&&(d="=="),new Function("version","return null != version && version > 0.1 && (version "+d+" "+e+");")}return(e=c[4])&&f?function(a){return a>=f&&e>=a}:void a.log("Unexpacted version: "+b)}function e(a){return this instanceof e?this.config(a):new e(a)}var f="gallery/DepartureLayer/1.0/",g=/^\s*([<>=~]{0,2})\s*(\d+)\s*$|^\s*(\d+)\s*\-\s*(\d+)\s*$/i,h=a.noop,i=6048e5,j="bk_timestamp";return e.prototype={constructor:e,config:function(c){var f=this,g=f.options=a.mix(a.mix({},f.options||e.CONFIG,!0,null,!0),c,!0,null,!0),h=g.ua,i="all",j=i;return a.each(h,function(c,e){if(!f.matched){var g=c.browser,h=c.version;f.show=c.show||j;var i=+b[g];if(!i)return void a.log("Warning: `config.ua["+e+"].browser` is invalid. Found `"+b[g]+"` under the `KISSY.UA."+g+"`.");if(!h)return void a.log("Warning: `config.ua["+e+"].version` is undefined!");f.browser=g,f.version=i,f.rule=h,f.match=d(h),f.matched=f.match(i)}}),f},matched:!1,_outOfExpires:function(a){var b=+c.get(j);return!b||!a||+new Date-b>a?1:0},_showToptip:function(a){var b=this,d=b.options;KISSY.use([f+"toptip.js",d.theme?d.theme:f+"toptip.less.css"],function(e,f){a.call(b,c,(new f).render(d.toptip).show())})},_showDialog:function(a){var b=this,d=b.options;KISSY.use([f+"dialog.js",d.theme?d.theme:f+"dialog.less.css"],function(e,f){a.call(b,c,(new f).render(d.dialog).show())})},_showAll:function(a){var b=this,d=b.options,e=[f+"dialog.js",f+"toptip.js"];d.theme?e.push(d.theme):(e.push(f+"dialog.less.css"),e.push(f+"toptip.less.css")),KISSY.use(e,function(e,f,g){var h=(new g).render(d.toptip);a.call(b,c,(new f).render(d.dialog).show().on("hide",function(){h&&h.show()}),h)})},kill:function(a){var b=this,c=b.options;if(a=a||h,b.matched){if(b._outOfExpires(c.expires)||(b.show="toptip"),"toptip"===b.show)return b._showToptip(a),b;if("dialog"===b.show)return b._showDialog(a),b;b._showAll(a)}return b}},e.CONFIG={ua:[],theme:"",expires:i,dialog:{},toptip:{}},e.VERSION="1.0",e},{requires:["ua","./store.js","./toptip.less.css","./toptip.js"]});