//# sourceMappingURL=jquery.i18n.properties-1.0.9.js.map
(function(l){function n(c,a){l.ajax({url:c,async:!1,cache:a.cache,contentType:"text/plain;charset="+a.encoding,dataType:"text",success:function(b,c){r(b,a.mode)}})}function r(c,a){var b="";c=c.split(/\n/);for(var h=/(\{\d+\})/g,e=/\{(\d+)\}/g,t=/(\\u.{4})/ig,g=0;g<c.length;g++)if(c[g]=c[g].replace(/^\s\s*/,"").replace(/\s\s*$/,""),0<c[g].length&&"#"!=c[g].match("^#")){var d=c[g].split("=");if(0<d.length){for(var f=unescape(d[0]).replace(/^\s\s*/,"").replace(/\s\s*$/,""),k=1==d.length?"":d[1];"\\"==
k.match(/\\$/);)k=k.substring(0,k.length-1),k+=c[++g].replace(/\s\s*$/,"");for(var m=2;m<d.length;m++)k+="="+d[m];k=k.replace(/^\s\s*/,"").replace(/\s\s*$/,"");if("map"==a||"both"==a){if(d=k.match(t))for(m=0;m<d.length;m++)k=k.replace(d[m],u(d[m]));l.i18n.map[f]=k}if("vars"==a||"both"==a)if(k=k.replace(/"/g,'\\"'),v(f),h.test(k)){for(var d=k.split(h),m=!0,n="",q=[],p=0;p<d.length;p++)!h.test(d[p])||0!=q.length&&-1!=q.indexOf(d[p])||(m||(n+=","),n+=d[p].replace(e,"v$1"),q.push(d[p]),m=!1);b+=f+"=function("+
n+"){";f='"'+k.replace(e,'"+v$1+"')+'"';b+="return "+f+";};"}else b+=f+'="'+k+'";'}}eval(b)}function v(c){if(/\./.test(c)){var a="";c=c.split(/\./);for(var b=0;b<c.length;b++)0<b&&(a+="."),a+=c[b],eval("typeof "+a+' == "undefined"')&&eval(a+"={};")}}function u(c){var a=[];c=parseInt(c.substr(2),16);0<=c&&c<Math.pow(2,16)&&a.push(c);c="";for(var b=0;b<a.length;++b)c+=String.fromCharCode(a[b]);return c}l.i18n={};l.i18n.map={};l.i18n.properties=function(c){c=l.extend({name:"Messages",language:"",path:"",
mode:"vars",cache:!1,encoding:"UTF-8",callback:null},c);if(null===c.language||""==c.language)c.language=l.i18n.browserLang();null===c.language&&(c.language="");var a;a=(a=c.name)&&a.constructor==Array?a:[a];for(i=0;i<a.length;i++)5<=c.language.length?n(c.path+a[i]+"_"+c.language.substring(0,5)+".properties",c):2<=c.language.length?n(c.path+a[i]+"_"+c.language.substring(0,2)+".properties",c):n(c.path+a[i]+".properties",c);c.callback&&c.callback()};l.i18n.prop=function(c){var a=l.i18n.map[c];if(null==
a)return"["+c+"]";var b;if("string"==typeof a){for(b=0;-1!=(b=a.indexOf("\\",b));)a="t"==a[b+1]?a.substring(0,b)+"\t"+a.substring(b++ +2):"r"==a[b+1]?a.substring(0,b)+"\r"+a.substring(b++ +2):"n"==a[b+1]?a.substring(0,b)+"\n"+a.substring(b++ +2):"f"==a[b+1]?a.substring(0,b)+"\f"+a.substring(b++ +2):"\\"==a[b+1]?a.substring(0,b)+"\\"+a.substring(b++ +2):a.substring(0,b)+a.substring(b+1);var h=[],e,f;for(b=0;b<a.length;)if("'"==a[b])if(b==a.length-1)a=a.substring(0,b);else if("'"==a[b+1])a=a.substring(0,
b)+a.substring(++b);else{for(e=b+2;-1!=(e=a.indexOf("'",e));)if(e==a.length-1||"'"!=a[e+1]){a=a.substring(0,b)+a.substring(b+1,e)+a.substring(e+1);b=e-1;break}else a=a.substring(0,e)+a.substring(++e);-1==e&&(a=a.substring(0,b)+a.substring(b+1))}else if("{"==a[b])if(e=a.indexOf("}",b+1),-1==e)b++;else if(f=parseInt(a.substring(b+1,e)),!isNaN(f)&&0<=f){var g=a.substring(0,b);""!=g&&h.push(g);h.push(f);b=0;a=a.substring(e+1)}else b=e+1;else b++;""!=a&&h.push(a);a=h;l.i18n.map[c]=h}if(0==a.length)return"";
if(1==a.lengh&&"string"==typeof a[0])return a[0];g="";for(b=0;b<a.length;b++)g="string"==typeof a[b]?g+a[b]:a[b]+1<arguments.length?g+arguments[a[b]+1]:g+("{"+a[b]+"}");return g};l.i18n.browserLang=function(){var c=navigator.language||navigator.userLanguage,c=c.toLowerCase();3<c.length&&(c=c.substring(0,3)+c.substring(3).toUpperCase());return c};var f;f||(f=function(c,a,b){if("[object RegExp]"!==Object.prototype.toString.call(a))return"undefined"==typeof f._nativeSplit?c.split(a,b):f._nativeSplit.call(c,
a,b);var h=[],e=0,l=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.sticky?"y":"");a=RegExp(a.source,l+"g");var g,d,n;c+="";f._compliantExecNpcg||(g=RegExp("^"+a.source+"$(?!\\s)",l));if(void 0===b||0>+b)b=Infinity;else if(b=Math.floor(+b),!b)return[];for(;d=a.exec(c);){l=d.index+d[0].length;if(l>e&&(h.push(c.slice(e,d.index)),!f._compliantExecNpcg&&1<d.length&&d[0].replace(g,function(){for(var a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(d[a]=void 0)}),1<d.length&&d.index<c.length&&Array.prototype.push.apply(h,
d.slice(1)),n=d[0].length,e=l,h.length>=b))break;a.lastIndex===d.index&&a.lastIndex++}e===c.length?!n&&a.test("")||h.push(""):h.push(c.slice(e));return h.length>b?h.slice(0,b):h},f._compliantExecNpcg=void 0===/()??/.exec("")[1],f._nativeSplit=String.prototype.split);String.prototype.split=function(c,a){return f(this,c,a)}})(jQuery);