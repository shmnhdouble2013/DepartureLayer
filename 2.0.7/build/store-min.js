/*!build time : 2014-11-04 7:03:48 PM*/
KISSY.add("kg/departurelayer/store",function(){function a(){return b?b:(b=e.body.appendChild(e.createElement("div")),b.style.display="none",b.addBehavior("#default#userData"),b.load(f),b)}var b,c={},d=window,e=d.document,f="localStorage",g="globalStorage";return c.set=function(){},c.get=function(){},c.remove=function(){},c.clear=function(){},f in d&&d[f]?(b=d[f],c.set=function(a,c){b.setItem(a,c)},c.get=function(a){return b.getItem(a)},c.remove=function(a){b.removeItem(a)},c.clear=function(){b.clear()}):g in d&&d[g]?(b=d[g][d.location.hostname],c.set=function(a,c){b[a]=c},c.get=function(a){return b[a]&&b[a].value},c.remove=function(a){delete b[a]},c.clear=function(){for(var a in b)delete b[a]}):e.documentElement.addBehavior&&(c.set=function(b,c){var d=a();d.setAttribute(b,c),d.save(f)},c.get=function(b){var c=a();return c.getAttribute(b)},c.remove=function(b){var c=a();c.removeAttribute(b),c.save(f)},c.clear=function(){var b=a(),c=b.XMLDocument.documentElement.attributes;b.load(f);for(var d,e=0;d=c[e];e++)b.removeAttribute(d.name);b.save(f)}),c});