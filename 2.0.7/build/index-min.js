/*!build time : 2014-11-08 3:38:15 PM*/
KISSY.add("kg/departurelayer/store",function(){function a(){return b?b:(b=e.body.appendChild(e.createElement("div")),b.style.display="none",b.addBehavior("#default#userData"),b.load(f),b)}var b,c={},d=window,e=d.document,f="localStorage",g="globalStorage";return c.set=function(){},c.get=function(){},c.remove=function(){},c.clear=function(){},f in d&&d[f]?(b=d[f],c.set=function(a,c){b.setItem(a,c)},c.get=function(a){return b.getItem(a)},c.remove=function(a){b.removeItem(a)},c.clear=function(){b.clear()}):g in d&&d[g]?(b=d[g][d.location.hostname],c.set=function(a,c){b[a]=c},c.get=function(a){return b[a]&&b[a].value},c.remove=function(a){delete b[a]},c.clear=function(){for(var a in b)delete b[a]}):e.documentElement.addBehavior&&(c.set=function(b,c){var d=a();d.setAttribute(b,c),d.save(f)},c.get=function(b){var c=a();return c.getAttribute(b)},c.remove=function(b){var c=a();c.removeAttribute(b),c.save(f)},c.clear=function(){var b=a(),c=b.XMLDocument.documentElement.attributes;b.load(f);for(var d,e=0;d=c[e];e++)b.removeAttribute(d.name);b.save(f)}),c}),KISSY.add("kg/departurelayer/index",function(a,b,c){function d(b){if("*"===b)return function(){return!0};var c=b.match(f);if(!c)return a.log("Unexpacted version: "+b),g;var d=c[1]||"<=",e=+c[2],h=+c[3];if(d&&e){if("~"===d){var i=e,j=(e/10|0)+10;return function(a){return a&&j>a&&a>=i}}return"="===d&&(d="=="),new Function("version","return null != version && version > 0.1 && (version "+d+" "+e+");")}return(e=c[4])&&h?function(a){return a>=h&&e>=a}:void a.log("Unexpacted version: "+b)}function e(a){return this instanceof e?this.config(a):new e(a)}var f=/^\s*([<>=~]{0,2})\s*(\d+)\s*$|^\s*(\d+)\s*\-\s*(\d+)\s*$/i,g=a.noop,h=6048e5,i="bk_timestamp";return e.prototype={constructor:e,config:function(c){var e=this,f=e.options=a.mix(e.options||{ua:[],theme:"",expires:h,dialog:{},toptip:{}},c,!0,null,!0),g=f.ua,i="all",j=i;return a.each(g,function(c,f){if(!e.matched){var g=c.browser,h=c.version;e.show=c.show||j;var i=+b[g];if(!i)return void a.log("Warning: `config.ua["+f+"].browser` is invalid. Found `"+b[g]+"` under the `KISSY.UA."+g+"`.");if(!h)return void a.log("Warning: `config.ua["+f+"].version` is undefined!");e.browser=g,e.version=i,e.rule=h,e.match=d(h),e.matched=e.match(i)}}),e},matched:!1,_outOfExpires:function(a){var b=+c.get(i);return!b||!a||+new Date-b>a?1:0},_showToptip:function(a){var b=this,d=b.options;KISSY.use(["kg/departurelayer/toptip",d.theme?d.theme:"kg/departurelayer/toptip.less.css"],function(e,f){a.call(b,c,null,(new f).render(d.toptip).show())})},_showDialog:function(a){var b=this,d=b.options;KISSY.use(["kg/departurelayer/dialog",d.theme?d.theme:"kg/departurelayer/dialog.less.css"],function(e,f){a.call(b,c,(new f).render(d.dialog).show())})},_showAll:function(a){var b=this,d=b.options,e=["kg/departurelayer/dialog","kg/departurelayer/toptip"];d.theme?e.push(d.theme):(e.push("kg/departurelayer/dialog.less.css"),e.push("kg/departurelayer/toptip.less.css")),KISSY.use(e,function(e,f,g){var h=(new g).render(d.toptip);a.call(b,c,(new f).render(d.dialog).show().on("hide",function(){h&&h.show(),c.set(i,+new Date)}),h)})},kill:function(a){var b=this,c=b.options;if(a=a||g,b.matched){if(b._outOfExpires(c.expires)||(b.show="toptip"),"toptip"===b.show)return b._showToptip(a),b;if("dialog"===b.show)return b._showDialog(a),b;b._showAll(a)}return b}},e.VERSION="1.1",e},{requires:["ua","./store"]});