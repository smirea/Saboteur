

/**
 * @FILE: client/jquery/jquery.js
 */
/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);/******************************************************************************/

/**
 * @FILE: client/jquery/jquery.mouseToken.js
 */
(function($){
  
  $.mouseToken = function( options, classes ){
    
    var opt = {
      object  : '<div style="background:red;width:10px;height:10px;"></div>',
      offsetX : 20,
      offsetY : 30
    };
    
    var cls = {
      token : 'mouseToken-token'
    };
    
    // delete if already set
    if( $(window).data('mouseToken') ){
      $(window).data('mouseToken').token.remove();
      $(window).unbind('mousemove.mouseToken');
    }
    
    if( options !== false ){
      $.extend( opt, options );
      $.extend( cls, classes );
      var com = {
        token : $(document.createElement('div')),
        opt   : opt,
        cls   : cls
      };
      com.token
        .addClass( cls.token )
        .append( opt.object )
        .css({
          position  : 'absolute',
          zIndex    : 2000000000
        });
      $(document).children().eq(0).append( com.token );
      
      $(window)
        .data('mouseToken', com)
        .bind('mousemove.mouseToken', function(e){
          com.token.offset({
            left  : e.pageX + opt.offsetX,
            top   : e.pageY + opt.offsetY
          });
        });
    }
    
  };
  
})(jQuery); 
/******************************************************************************/

/**
 * @FILE: client/jquery/jquery.progressBar.js
 */
(function($){
  
  $.progressBar = {
    options : {
      value   : 0,
      max     : 100,
      title   : false,
      message : false
    },
    classes : {
      main    : 'progressBar',
      wrapper : 'progressBar-wrapper',
      bar     : 'progressBar-bar',
      title   : 'progressBar-title',
      message : 'progressBar-message'
    }
  };
  
  $.fn.progressBar = function( options, classes ){
    
    // methods
    if( typeof options == 'string' ){
      var fName = options || "";
      var args  = classes || [];
      return this.each(function(){
        var com = $(this).data('com');
        switch( fName ){
          case 'setValue':
            com.value = Math.max( 0, Math.min( com.max, args[0] ) );
            var newWidth  = Math.ceil( com.value / com.max * 100 );
            com.structure.bar.css('width', newWidth + '%');
            break;
          case 'increment':
            $(this).progressBar('setValue', [com.value+1]);
            break;
          case 'decrement':
            $(this).progressBar('setValue', [com.value-1]);
            break;
          case 'setTitle':
            if( args[0] ) com.structure.title.show().html( args[0] );
              else com.structure.title.hide();
            break;
          case 'setMessage':
            if( args[0] ) com.structure.message.show().html( args[0] );
              else com.structure.message.hide();
            break;
        }
      });
    } else {
      
      var opt = {};
      var cls = {};
      
      $.extend( opt, $.progressBar.options, options );
      $.extend( cls, $.progressBar.classes, classes );
      
      return this.each(function(){
        var com = {
          self      : $(this),
          value     : opt.value,
          max       : opt.max,
          structure : {
            main    : $(document.createElement('span')),
            wrapper : $(document.createElement('div')),
            bar     : $(document.createElement('div')),
            title   : $(document.createElement('div')),
            message : $(document.createElement('div'))
          },
          opt       : opt,
          cls       : cls
        };
        
        com.structure.main
          .addClass( cls.main )
          .append( com.structure.title, com.structure.wrapper, com.structure.message );
        com.structure.wrapper
          .addClass( cls.wrapper )
          .append( com.structure.bar );
        com.structure.bar
          .addClass( cls.bar );
        com.structure.title
          .addClass( cls.title );
        com.structure.message
          .addClass( cls.message );
        
        com.self
          .data('com', com)
          .html( com.structure.main )
          .progressBar( 'setValue', [com.value] )
          .progressBar( 'setTitle', [opt.title] )
          .progressBar( 'setMessage', [opt.message] );
      });
    }
    
  };
  
})(jQuery); /******************************************************************************/

/**
 * @FILE: lib/Logger.js
 */
var Logger = {
  _console  : typeof console != 'undefined' && console != null ? {
      log   : typeof console.log == 'function',
      info  : typeof console.info == 'function',
      warn  : typeof console.warn == 'function',
      err   : typeof console.err == 'function'
    } : { log:false, info:false, warn:false, err:false },
  log : function(){
    return this._console.log ? console.log( arguments ) : null;
  },
  info : function(){
    return this._console.info ? console.info( arguments ) : null;
  },
  warn : function(){
    return this._console.warn ? console.warn( arguments ) : null;
  },
  err : function(){
    return this._console.err ? console.err( arguments ) : null;
  }
}; 
/******************************************************************************/

/**
 * @FILE: lib/inheritance.js
 */
/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  // The base Class implementation (does nothing)
  this.Class = function(){};
  
  // Create a new Class that inherits from this class
  Class.extend = function( prop ) {
    var _super = this.prototype;
    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;

    // Copy the properties over onto the new prototype
    for (var name in prop) { 
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" && 
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
            
            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];
            
            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
            
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
    
    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
    
    // Populate our constructed prototype object
    Class.prototype = prototype;
    
    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;
    
    return Class;
  };
})(); 
/******************************************************************************/

/**
 * @FILE: lib/Utils.js
 */

var S = {};
var U = {};
var D = {
  top        : 0,
  right      : 1,
  bottom     : 2,
  left       : 3,
  opposite   : function(aDirection) {
    return (aDirection + 2) % 4;
  },
};


(function(){
  
  U = {
    print : (function(){
      function pad( str, len ){
        var h = '';
        for( var i=0; i<len; ++i ){ h += str; }
        return h;
      };
      function wrap( str, type ){
        switch( type ){
          case "string":  return '"'+str+'"';
          case "object":  return '{'+str+'}';
          case "array":   return '['+str+']';
          default: return str;
        }
      };
      function createString( obj, uglyPrint, recursionDepth, indent ){
        recursionDepth = recursionDepth || 10;
        if( obj == null ){
          return 'null';
        };
        if( recursionDepth <= 0 ){
          return '';
        }
        var type = U.type(obj);
        var arr = [];
        switch( type ){
          case 'object':
          case 'array':
            var content = null;
            if( !uglyPrint ){
              indent = indent || 2;
              for( var i in obj ){
                arr.push(
                  pad(' ', indent)+i+' : '+createString( obj[i], uglyPrint, recursionDepth-1, indent+2 )
                );
              } 
              content =  "\n"+(arr.join(", \n"))+"\n"+pad(' ',indent-2);
            } else {
              for( var i in obj ){
                arr.push(i+':'+createString(obj[i], uglyPrint, recursionDepth-1) );
              }
              content = arr.join(",");
            };
            return wrap( content, type );
          default:
            return wrap( obj.toString(), type );
        };
      };
      return function(obj, uglyPrint, recursionDepth){
        (Logger || console).log( createString( obj, uglyPrint, recursionDepth, 0 ) );
      }
    })(),
    each : function(object, callback) {
      object = U.extend(true, {}, object);
      for (var i in object) {
        var ret = callback.call(object[i], i, object[i]);
        object[i] = ret !== undefined ? ret : object[i];
      }
      return object;
    },
    type : (function(){
      var types       = "Boolean Number String Function Array Date RegExp Object".split(" ");
      var class2type  = {};
      for( var i in types ) {
        class2type[ "[object " + types[i] + "]" ] = types[i].toLowerCase();
      };
      var toString = Object.prototype.toString;
      return function ( obj ){
        return obj == null ?
          String( obj ) :
          class2type[ toString.call(obj) ] || "object";
      };
    })(),
    isUndefined: function( obj ){
      return typeof obj == 'undefined';
    },
    isNumeric: function( obj ) {
      return !isNaN( parseFloat(obj) ) && isFinite( obj );
    },
    isFunction: function( obj ) {
      return U.type(obj) === "function";
    },
    isArray: Array.isArray || function( obj ) {
      return U.type(obj) === "array";
    },
    isWindow: function( obj ) {
      return obj && typeof obj === "object" && "setInterval" in obj;
    },
    isPlainObject: function( obj ){
      // Must be an Object.
      // Because of IE, we also have to check the presence of the constructor property.
      // Make sure that DOM nodes and window objects don't pass through, as well
      if ( !obj || U.type(obj) !== "object" || obj.nodeType || U.isWindow( obj ) ) {
        return false;
      }
      try {
        // Not own constructor property must be Object
        if ( obj.constructor &&
          !hasOwn.call(obj, "constructor") &&
          !hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
          return false;
        }
      } catch ( e ) {
        // IE8,9 Will throw exceptions on certain host objects #9897
        return false;
      }
      // Own properties are enumerated firstly, so to speed up,
      // if last one is own, then all properties are own.
      var key;
      for ( key in obj ) {}
      return key === undefined || hasOwn.call( obj, key );
    },
    objectLength: function( obj ){
      var c = 0;
      for( var i in obj ){ ++c; };
      return c;
    },
    extend : function(){
      if( arguments[0] === true ){
        for( var i=2; i<arguments.length; ++i ){
          for( var j in arguments[i] ){
            if( typeof arguments[i][j] === "object" ){
              arguments[1][j] = arguments[1][j] || (U.isArray(arguments[i][j]) ? [] : {});
              U.extend( true, arguments[1][j], arguments[i][j] );
            } else {
              arguments[1][j] = arguments[i][j];
            }
          }
        }
        return arguments[1];
      } else {
        for( var i=1; i<arguments.length; ++i ){
          for( var j in arguments[i] ){
            arguments[0][j] = arguments[i][j];
          }
        }
      }
      return arguments[0];
    },
    error : function( msg ) {
      throw new Error( msg );
    },
    /**
     * Cookie plugin
     *
     * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
     * Dual licensed under the MIT and GPL licenses:
     * http://www.opensource.org/licenses/mit-license.php
     * http://www.gnu.org/licenses/gpl.html
     * @note minor modified script of Klaus Hartl's jQuery Cookie plugin
     */
    cookie : function(key, value, options) {
      // key and at least value given, set cookie...
      if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
        options = U.extend({}, options);
        if (value === null || value === undefined) {
          options.expires = -1;
        }
        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        value = String(value);
        return (document.cookie = [
          encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
          options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
          options.path    ? '; path=' + options.path : '',
          options.domain  ? '; domain=' + options.domain : '',
          options.secure  ? '; secure' : ''
        ].join(''));
      }

      // key and possibly options given, get cookie...
      options = value || {};
      var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

      var pairs = document.cookie.split('; ');
      for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
        if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
      }
      return null;
    }
  };
  
})();
/******************************************************************************/

/**
 * @FILE: lib/Factory.class.js
 */
/**
 * This is just a specialized container for the S. classes
 */
var Factory = Class.extend({
  namespaces  : {},
  _total      : 0,
  /**
   * @param {Object} classes  (ClassName : Number_of_instances) pairs
   */
  register  : (function(){
    return function( classes ){
      for( var i in classes ){
        this.addNamespace( i );
        var arr = makeDeck( classes[i] );
        for( var j in arr ){
          this.add( i, arr[j] );
        };
      };
    };
    /**
    * Creates a deck of card given a list of class names from the S. namespace
    * @param {Object} list  a list of (className : cardCount) pairs
    * @param {Object} namespace  An object containing the classes used - defaults to S
    */
    function makeDeck( list, namespace ){
      namespace = namespace || S;
      var arr = [];
      var id = 0;
      for( var i in list ){
        for( var j=0; j<list[i]; ++j ){
          if( namespace[i] ){
            var card = new namespace[i];
            card.name = card._className.replace(/([A-Z])/g, " $1");
            card.id = id++;
            arr.push( card );
          } else {
            Logger.warn( '[Unknown Class]: '+i );
          };
        };
      };
      return arr;
    };
  })(),
  /**
   * @param {String} namespace
   * @param {Class} aClass
   */
  add : function( namespace, aClass ){
    if( this.hasNamespace(namespace) ){
      this.namespaces[namespace].push( aClass );
      ++this._total;
    } else {
      Logger.warn('[Factory.get] Unknown namespace', arguments);
    }
    return this;
  },
  /**
   * Returns the number of elements in the factory
   * @param {String} namespace1[,namespace2...]  The names of the namespaces to return the combined total
   * @return {Int}
   */
  size : function(){
    if( arguments.length == 0 ){
      return this._total;
    } else {
      var c = 0;
      for( var i in arguments ){
        if( this.hasNamespace(arguments[i]) ){
          c += this.getNamespaces(arguments[i]).length;
        };
      };
      return c;
    };
  },
  /**
   * @param {String} namespace  the namespace of the class
   * @param {Int} index  the index of the class within the namespace
   */
  get : function( namespace, index ){
    if( this.namespaces[namespace] && this.namespaces[namespace].length >= 0 ){
      if( index >= 0 && index < this.namespaces[namespace].length ){
        return this.namespaces[namespace][index];
      };
      Logger.warn('[Factory.get] Index out of bounds', arguments);
    } else {
      Logger.warn('[Factory.get] Unknown namespace', arguments);
    };
    
    return null;
  },
  /**
   * Gets a range of elements from a namespace
   * @param {String} namespace
   * @param {Int} start   [Optional] The start index - defaults to 0
   * @param {Int} end     [Optional] The end index - defaults to namespace.length
   * @return {Array}
   */
  getRange : function( namespace, start, end ){
    if( this.hasNamespace(namespace) ){
      if( start == null && end == null ){
        return this.getNamespaces( namespace );
      } else {
        start = start || 0;
        end   = end   || this.getNamespaces(namespace).length;
        var a = [];
        for( var i=start; i<end; ++i ){
          a.push( this.namespaces[namespace][i] );
        };
        return a;
      };
    } else {
      Logger.warn('[Factory.getRange] Unknown namespace', arguments);
      return null;
    };
  },
  /**
   * Registers a new namespace
   * @param {String} namespace
   */
  addNamespace : function( namespace ){
    if( !this.hasNamespace(namespace) ){
      this.namespaces[namespace] = [];
    };
    return this;
  },
  /**
   * Checks whether a namespace exists
   * @param {String} namespace
   * @return {Bool}
   */
  hasNamespace : function( namespace ){
    var val = this.namespaces[namespace] !== undefined && this.namespaces[namespace] !== null;
    return this.namespaces[namespace] !== undefined && this.namespaces[namespace] !== null;
  },
  /**
   * Returns the namespace array if it exists
   * @param {String} namespace1[,namespace2,...]
   * @return {Array}
   */
  getNamespaces : function(){
    var arr = [];
    for( var i in arguments ){
      if( this.hasNamespace( arguments[i] ) ){
        arr = arr.concat( this.namespaces[arguments[i]] );
      } else {
        Logger.warn('[Factory.getNamespaces] Unknown namespace', arguments);
        return null;
      }
    }
    return arr;
  },
});/******************************************************************************/

/**
 * @FILE: client/Preloader.js
 */
var Preloader = {
  img       : {},
  _total    : 0,
  _finished : 0,
  multiLoad : function( array, onload_callback, onerror_callback ){
    for( var i in array ){
      this.load( array[i], onload_callback, onerror_callback );
    }
    return this;
  },
  load  : function( path, onload_callback, onerror_callback ){
    onload_callback   = onload_callback || function(){};
    onerror_callback  = onerror_callback || function(){};
    var self          = this;
    if( !self.img[path] ){
      ++self._total;
      var img     = new Image();
      img.onload  = function(){
        self.img[ path ] = this;
        ++self._finished;
        onload_callback.call( self, this );
      };
      img.onerror = function(){
        if( onerror_callback.call( self, this ) === false ){
          Logger.warn('[Preloader.load] Unable to load image', arguments);
        };
      };
      img.src     = path;
    } else {
      onload_callback.call( self, self.get(path) );
    }
    return this;
  },
  get : function( name ){
    if( this.img[ name ] ){
      return this.img[ name ];
    } else {
      Logger.warn('[Preloader.get] Unknown image name', arguments);
    };
  }
}; 

if( typeof P == 'undefined' ) 
  var P = Preloader;/******************************************************************************/

/**
 * @FILE: lib/SaboteurOptions.js
 */
var SaboteurOptions = SO = {
  options : {
    players       : [  ],
    initialCards  : 6,
    discardCards  : 10,
    healDiscard   : 2,
    healDraw      : 1,
    goldCards     : 1,
    // position of every start card. NOTE: the first one must be [0,0]
    startCards    : [ [0,0] ],
    //position of every goal card relative to the start card [0,0]
    goalCards     : [ [2,4], [0,4], [-2,4] ]
  },
  cards : {
    start : {
      FullCrossStartCard  : 1
    },
    goal  : {
      FullCrossGoldCard   : 1,
      CurvedLeftGoalCard  : 1,
      CurvedRightGoalCard : 1
    },
    role  : {
      BlueGoldDigger   : 4,
      GreenGoldDigger  : 4,
      Boss              : 1,
      Geologist         : 2,
      Profiteer         : 1,
      Saboteur          : 3
    },
    path : {
      RightCrystalCard                : 1,
      TopCrystalCard                  : 1,
      FullCrossCrystalCard            : 1,
      VerticalCrossCrystalCard        : 3,
      HorizontalCrossCrystalCard      : 1,
      BlockHorizontalCrossCrystalCard : 1,
      BlockVerticalCrossCrystalCard   : 1,
      BlockVerticalLineCrystalCard    : 1,
      HorizontalBlueGateCard          : 1,
      VerticalBlueGateCard            : 1,
      LeftCurvedBlueGatePath          : 1,
      BlockHorizontalGreenGateCard    : 1,
      VerticalGreenGateCard           : 1,
      RightCurvedGreenGateCard        : 1,
      TopLadderPath                   : 1,
      RightLadderPath                 : 1,
      CurvedRightLadderPath           : 1,
      CurvedLeftLadderPath            : 1,
      FullCrossPathCard               : 5,
      HorizontalCrossPathCard         : 5,
      VerticalCrossPathCard           : 5,
      CurvedRightPathCard             : 4,
      CurvedLeftPathCard              : 5,
      VerticalPathCard                : 3,
      HorizontalPathCard              : 4,
      DoubleCurvePathCard             : 2,
      BridgePathCard                  : 2,
      BlockFullCrossPathCard          : 1,
      BlockVerticalCrossPathCard      : 1,
      BlockHorizontalCrossPathCard    : 1,
      BlockVerticalPathCard           : 1,
      BlockHorizontalPathCard         : 1,
      BlockTopPathCard                : 1,
      BlockRightPathCard              : 1,
      BlockTopRightPathCard           : 1,
      BlockTopLeftPathCard            : 1      
    },
    action : {
      Lamp          : 2,
      Cart          : 2,
      Pickaxe       : 2,
      BrokenLamp    : 3,
      BrokenCart    : 3,
      BrokenPickaxe : 3,
      LampPickaxe   : 1,
      PickaxeCart   : 1,
      CartLamp      : 1,
      Rockfall      : 3,
      ViewGoalCard  : 6,
      Theft         : 4,
      HandsOff      : 3,
      SwapHand      : 2,
      Inspection    : 2,
      SwapHats      : 2,
      Trapped       : 3,
      FreeAtLast    : 4
    }
  }
};
/******************************************************************************/

/**
 * @FILE: client/SaboteurOptions.js
 */
U.extend(true, SaboteurOptions, {
  webRoot : 'http://localhost:8080',
  server : {
    address : 'http://192.168.1.101:8080'
  },
  options : {
    card_width    : 65,
    card_height   : 110
  },
  classes : {
    main  : 'Saboteur',
    card  : 'Saboteur-card',
    map : {
      main  : 'Saboteur-map',
      table : 'Saboteur-map-table',
      td    : 'Saboteur-map-td'
    },
    hand : {
      main    : 'Saboteur-hand',
      cards   : 'Saboteur-hand-cards',
      action  : 'Saboteur-hand-action',
      actions : 'Saboteur-hand-actions'
    }
  },
  images : {
    BlockFullCrossPathCard : {
      front_cover : 'http://localhost:8080/images/cards/BlockFullCrossPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlockFullCrossPathCard-icon.png'
    },
    BlockHorizontalCrossCrystalCard : {
      front_cover : 'http://localhost:8080/images/cards/BlockHorizontalCrossCrystalCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlockHorizontalCrossCrystalCard-icon.png'
    },
    BlockHorizontalCrossPathCard : {
      front_cover : 'http://localhost:8080/images/cards/BlockHorizontalCrossPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlockHorizontalCrossPathCard-icon.png'
    },
    BlockHorizontalGreenGateCard : {
      front_cover : 'http://localhost:8080/images/cards/BlockHorizontalGreenGateCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlockHorizontalGreenGateCard-icon.png'
    },
    BlockHorizontalPathCard : {
      front_cover : 'http://localhost:8080/images/cards/BlockHorizontalPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlockHorizontalPathCard-icon.png'
    },
    BlockRightPathCard : {
      front_cover : 'http://localhost:8080/images/cards/BlockRightPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlockRightPathCard-icon.png'
    },
    BlockTopLeftPathCard : {
      front_cover : 'http://localhost:8080/images/cards/BlockTopLeftPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlockTopLeftPathCard-icon.png'
    },
    BlockTopPathCard : {
      front_cover : 'http://localhost:8080/images/cards/BlockTopPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlockTopPathCard-icon.png'
    },
    BlockTopRightPathCard : {
      front_cover : 'http://localhost:8080/images/cards/BlockTopRightPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlockTopRightPathCard-icon.png'
    },
    BlockVerticalCrossCrystalCard : {
      front_cover : 'http://localhost:8080/images/cards/BlockVerticalCrossCrystalCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlockVerticalCrossCrystalCard-icon.png'
    },
    BlockVerticalCrossPathCard : {
      front_cover : 'http://localhost:8080/images/cards/BlockVerticalCrossPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlockVerticalCrossPathCard-icon.png'
    },
    BlockVerticalLineCrystalCard : {
      front_cover : 'http://localhost:8080/images/cards/BlockVerticalLineCrystalCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlockVerticalLineCrystalCard-icon.png'
    },
    BlockVerticalPathCard : {
      front_cover : 'http://localhost:8080/images/cards/BlockVerticalPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlockVerticalPathCard-icon.png'
    },
    BlueGateCard : {
      front_cover : 'http://localhost:8080/images/cards/BlueGateCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlueGateCard-icon.png'
    },
    BlueGoldDigger : {
      front_cover : 'http://localhost:8080/images/cards/BlueGoldDigger-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Role-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BlueGoldDigger-icon.png'
    },
    Boss : {
      front_cover : 'http://localhost:8080/images/cards/Boss-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Role-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/Boss-icon.png'
    },
    BridgePathCard : {
      front_cover : 'http://localhost:8080/images/cards/BridgePathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BridgePathCard-icon.png'
    },
    BrokenCart : {
      front_cover : 'http://localhost:8080/images/cards/BrokenCart-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BrokenCart-icon.png'
    },
    BrokenLamp : {
      front_cover : 'http://localhost:8080/images/cards/BrokenLamp-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BrokenLamp-icon.png'
    },
    BrokenPickaxe : {
      front_cover : 'http://localhost:8080/images/cards/BrokenPickaxe-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/BrokenPickaxe-icon.png'
    },
    Card : {
      front_cover : 'http://localhost:8080/images/cards/Card-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/Card-icon.png'
    },
    Cart : {
      front_cover : 'http://localhost:8080/images/cards/Cart-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/Cart-icon.png'
    },
    CartLamp : {
      front_cover : 'http://localhost:8080/images/cards/CartLamp-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/CartLamp-icon.png'
    },
    CrystalCard : {
      front_cover : 'http://localhost:8080/images/cards/CrystalCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/CrystalCard-icon.png'
    },
    CurvedLeftGoalCard : {
      front_cover : 'http://localhost:8080/images/cards/CurvedLeftGoalCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Goal-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/CurvedLeftGoalCard-icon.png'
    },
    CurvedLeftLadderPath : {
      front_cover : 'http://localhost:8080/images/cards/CurvedLeftLadderPath-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/CurvedLeftLadderPath-icon.png'
    },
    CurvedLeftPathCard : {
      front_cover : 'http://localhost:8080/images/cards/CurvedLeftPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/CurvedLeftPathCard-icon.png'
    },
    CurvedRightGoalCard : {
      front_cover : 'http://localhost:8080/images/cards/CurvedRightGoalCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Goal-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/CurvedRightGoalCard-icon.png'
    },
    CurvedRightLadderPath : {
      front_cover : 'http://localhost:8080/images/cards/CurvedRightLadderPath-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/CurvedRightLadderPath-icon.png'
    },
    CurvedRightPathCard : {
      front_cover : 'http://localhost:8080/images/cards/CurvedRightPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/CurvedRightPathCard-icon.png'
    },
    DoubleCurvePathCard : {
      front_cover : 'http://localhost:8080/images/cards/DoubleCurvePathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/DoubleCurvePathCard-icon.png'
    },
    DummyCard : {
      front_cover : 'http://localhost:8080/images/cards/DummyCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/DummyCard-icon.png'
    },
    FreeAtLast : {
      front_cover : 'http://localhost:8080/images/cards/FreeAtLast-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/FreeAtLast-icon.png'
    },
    FullCrossCrystalCard : {
      front_cover : 'http://localhost:8080/images/cards/FullCrossCrystalCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/FullCrossCrystalCard-icon.png'
    },
    FullCrossGoldCard : {
      front_cover : 'http://localhost:8080/images/cards/FullCrossGoldCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Goal-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/FullCrossGoldCard-icon.png'
    },
    FullCrossPathCard : {
      front_cover : 'http://localhost:8080/images/cards/FullCrossPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/FullCrossPathCard-icon.png'
    },
    FullCrossStartCard : {
      front_cover : 'http://localhost:8080/images/cards/FullCrossStartCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/FullCrossStartCard-icon.png'
    },
    GameCard : {
      front_cover : 'http://localhost:8080/images/cards/GameCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/GameCard-icon.png'
    },
    GateCard : {
      front_cover : 'http://localhost:8080/images/cards/GateCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/GateCard-icon.png'
    },
    Geologist : {
      front_cover : 'http://localhost:8080/images/cards/Geologist-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Role-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/Geologist-icon.png'
    },
    GoalCard : {
      front_cover : 'http://localhost:8080/images/cards/GoalCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Goal-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/GoalCard-icon.png'
    },
    GoldCard : {
      front_cover : 'http://localhost:8080/images/cards/GoldCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Goal-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/GoldCard-icon.png'
    },
    GreenGateCard : {
      front_cover : 'http://localhost:8080/images/cards/GreenGateCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/GreenGateCard-icon.png'
    },
    GreenGoldDigger : {
      front_cover : 'http://localhost:8080/images/cards/GreenGoldDigger-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Role-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/GreenGoldDigger-icon.png'
    },
    HandsOff : {
      front_cover : 'http://localhost:8080/images/cards/HandsOff-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/HandsOff-icon.png'
    },
    HorizontalBlueGateCard : {
      front_cover : 'http://localhost:8080/images/cards/HorizontalBlueGateCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/HorizontalBlueGateCard-icon.png'
    },
    HorizontalCrossCrystalCard : {
      front_cover : 'http://localhost:8080/images/cards/HorizontalCrossCrystalCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/HorizontalCrossCrystalCard-icon.png'
    },
    HorizontalCrossPathCard : {
      front_cover : 'http://localhost:8080/images/cards/HorizontalCrossPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/HorizontalCrossPathCard-icon.png'
    },
    HorizontalPathCard : {
      front_cover : 'http://localhost:8080/images/cards/HorizontalPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/HorizontalPathCard-icon.png'
    },
    Inspection : {
      front_cover : 'http://localhost:8080/images/cards/Inspection-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/Inspection-icon.png'
    },
    LadderPathCard : {
      front_cover : 'http://localhost:8080/images/cards/LadderPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/LadderPathCard-icon.png'
    },
    Lamp : {
      front_cover : 'http://localhost:8080/images/cards/Lamp-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/Lamp-icon.png'
    },
    LampPickaxe : {
      front_cover : 'http://localhost:8080/images/cards/LampPickaxe-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/LampPickaxe-icon.png'
    },
    LeftCurvedBlueGatePath : {
      front_cover : 'http://localhost:8080/images/cards/LeftCurvedBlueGatePath-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/LeftCurvedBlueGatePath-icon.png'
    },
    MapActionCard : {
      front_cover : 'http://localhost:8080/images/cards/MapActionCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/MapActionCard-icon.png'
    },
    MapCard : {
      front_cover : 'http://localhost:8080/images/cards/MapCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/MapCard-icon.png'
    },
    MapClient : {
      front_cover : 'http://localhost:8080/images/cards/MapClient-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/MapClient-icon.png'
    },
    PathCard : {
      front_cover : 'http://localhost:8080/images/cards/PathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/PathCard-icon.png'
    },
    Pickaxe : {
      front_cover : 'http://localhost:8080/images/cards/Pickaxe-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/Pickaxe-icon.png'
    },
    PickaxeCart : {
      front_cover : 'http://localhost:8080/images/cards/PickaxeCart-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/PickaxeCart-icon.png'
    },
    Player : {
      front_cover : 'http://localhost:8080/images/cards/Player-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/Player-icon.png'
    },
    PlayerActionCard : {
      front_cover : 'http://localhost:8080/images/cards/PlayerActionCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/PlayerActionCard-icon.png'
    },
    PrivatePlayerActionCard : {
      front_cover : 'http://localhost:8080/images/cards/PrivatePlayerActionCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/PrivatePlayerActionCard-icon.png'
    },
    Profiteer : {
      front_cover : 'http://localhost:8080/images/cards/Profiteer-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Role-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/Profiteer-icon.png'
    },
    PublicPlayerActionCard : {
      front_cover : 'http://localhost:8080/images/cards/PublicPlayerActionCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/PublicPlayerActionCard-icon.png'
    },
    RightCrystalCard : {
      front_cover : 'http://localhost:8080/images/cards/RightCrystalCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/RightCrystalCard-icon.png'
    },
    RightCurvedGreenGateCard : {
      front_cover : 'http://localhost:8080/images/cards/RightCurvedGreenGateCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/RightCurvedGreenGateCard-icon.png'
    },
    RightLadderPath : {
      front_cover : 'http://localhost:8080/images/cards/RightLadderPath-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/RightLadderPath-icon.png'
    },
    Rockfall : {
      front_cover : 'http://localhost:8080/images/cards/Rockfall-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/Rockfall-icon.png'
    },
    RoleCard : {
      front_cover : 'http://localhost:8080/images/cards/RoleCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Role-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/RoleCard-icon.png'
    },
    Saboteur : {
      front_cover : 'http://localhost:8080/images/cards/Saboteur-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Role-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/Saboteur-icon.png'
    },
    StartCard : {
      front_cover : 'http://localhost:8080/images/cards/StartCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/StartCard-icon.png'
    },
    SwapHand : {
      front_cover : 'http://localhost:8080/images/cards/SwapHand-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/SwapHand-icon.png'
    },
    SwapHats : {
      front_cover : 'http://localhost:8080/images/cards/SwapHats-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/SwapHats-icon.png'
    },
    Theft : {
      front_cover : 'http://localhost:8080/images/cards/Theft-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/Theft-icon.png'
    },
    TopCrystalCard : {
      front_cover : 'http://localhost:8080/images/cards/TopCrystalCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/TopCrystalCard-icon.png'
    },
    TopLadderPath : {
      front_cover : 'http://localhost:8080/images/cards/TopLadderPath-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/TopLadderPath-icon.png'
    },
    Trapped : {
      front_cover : 'http://localhost:8080/images/cards/Trapped-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/Trapped-icon.png'
    },
    VerticalBlueGateCard : {
      front_cover : 'http://localhost:8080/images/cards/VerticalBlueGateCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/VerticalBlueGateCard-icon.png'
    },
    VerticalCrossCrystalCard : {
      front_cover : 'http://localhost:8080/images/cards/VerticalCrossCrystalCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/VerticalCrossCrystalCard-icon.png'
    },
    VerticalCrossPathCard : {
      front_cover : 'http://localhost:8080/images/cards/VerticalCrossPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/VerticalCrossPathCard-icon.png'
    },
    VerticalGreenGateCard : {
      front_cover : 'http://localhost:8080/images/cards/VerticalGreenGateCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/VerticalGreenGateCard-icon.png'
    },
    VerticalPathCard : {
      front_cover : 'http://localhost:8080/images/cards/VerticalPathCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/VerticalPathCard-icon.png'
    },
    ViewGoalCard : {
      front_cover : 'http://localhost:8080/images/cards/ViewGoalCard-cover-front.png',
      back_cover  : 'http://localhost:8080/images/Card-cover-back.png',
      icon        : 'http://localhost:8080/images/cards/ViewGoalCard-icon.png'
    }
  }
});/******************************************************************************/

/**
 * @FILE: lib/Card.abstract.js
 */
S.Card = Class.extend({
  _className : 'Card',
  init       : function() {
    
  }
});/******************************************************************************/

/**
 * @FILE: client/Card.abstract.js
 */
S.Card = S.Card.extend({
  _className : "Card",
  init : function(){
    U.extend( this, {
      name          : 'Card-Name',
      description   : 'This card has no description',
      // Array of Classes on which this card can be used on
      front_cover   : 'images/card-role-back.png',
      back_cover    : 'images/card-back.png',
      width         : SO.options.card_width,
      height        : SO.options.card_height,
      // all onents of the card element
      structure     : null,
      angle         : 0,
      // how much to translate and where to put the graphichs when the canvas is rotated
      _positioning  : []
    });
  },
  rotate    : (function(){
    return function( val ){
      var pos = this._positioning;
      val = (val % 360) / 90;
      var canvas  = this.structure.canvas[0];
      var context = this.structure._context;
      canvas.width  = pos[val][3];
      canvas.height = pos[val][4];
      context.rotate( pos[val][0] );
      context.translate( pos[val][1], pos[val][2] );
      this.restoreState();
      context.translate( -pos[val][1], -pos[val][2] );
      context.rotate( -pos[val][0] );
      this.angle = val * 90;
      return this;
    };
  })(),
  saveState : function(){
    var imageData = this.structure._context.getImageData( 0, 0, this.width, this.height );
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width   = this.width;
    tmpCanvas.height  = this.height;
    tmpCanvas.getContext('2d').putImageData( imageData, 0, 0 );
    this._lastState = tmpCanvas;
    return this;
  },
  restoreState : function(){
    this.structure._context.clearRect( 0, 0, this.width, this.height );
    this.structure._context.drawImage( this._lastState, 0, 0 );
    return this;
  },
  toElement : (function(){
    function auto_generate_paths(){
      var obj = this;
      if( !obj.toElement ) return false;
      var container = obj.structure.main;
      if( obj.sides ){
        for( var j in obj.sides ){
          if( obj.sides[j].hasPath ){
            j = parseInt( j );
            var context = obj.structure._context;
            context.beginPath();
            context.lineWidth   = Math.floor(obj.width / 3.5);
            context.strokeStyle = 'rgb(100,100,100)';
            var ok = false;
            for( var k in obj.sides[j].links ){
              ok  = true;
              k   = parseInt( k );
              draw_path.call( this, context, (j+1)%4, (k+1)%4 );
            };
            if( !ok ){
              var a = getPoint.call( this, (j+1)%4 );
              context.moveTo( a.x, a.y );
              switch( (j+1)%4 ){
                case 0: context.lineTo( this.width/2, this.height/4 ); break;
                case 1: context.lineTo( this.width*3/4, this.height/2 ); break;
                case 2: context.lineTo( this.width/2, this.height*3/4 ); break;
                case 3: context.lineTo( this.width/4, this.height/2 ); break;
              };
              context.stroke();
            };
          };
        };
      };
      if( obj.hasCrystal ){
        var w = 30;
        var h = 40;
        var x = (obj.width-w) / 2;
        var y = (obj.height-h) / 2;
        addImageAt.call( this, SO.webRoot + 'images/icon-diamond.png', x, y, w, h );
      };
      if( obj.hasLadder ){
        var w = 40;
        var h = 50;
        var x = (obj.width-w) / 2;
        var y = (obj.height-h) / 2;
        addImageAt.call( this, SO.webRoot + 'images/icon-ladder.gif', x, y, w, h );
      };
      if( obj instanceof S.GateCard ){
        var w = 60;
        var h = 60;
        var x = (obj.width-w) / 2;
        var y = (obj.height-h) / 2;
        if( obj instanceof S.BlueGateCard )
          addImageAt.call( this, SO.webRoot + 'images/icon-gate-blue.png', x, y, w, h );
        else
          addImageAt.call( this, SO.webRoot + 'images/icon-gate-green.png', x, y, w, h );
      };
      this.saveState();
      return true;
    };
    
    function addImageAt( path, x, y, w, h ){
      var self = this;
      P.load( path, function( img ){
        x = x || 0;
        y = y || 0;
        w = w || img.width;
        h = h || img.height;
        self.structure._context.drawImage( img, x, y, w, h );
        self.saveState();
      });
    }
    
    function getPoint( point ){
      point = point % 4;
      var obj = { x:0, y:0 };
      switch( point ){
        case 0: obj.x = this.width/2; break;
        case 1: obj.x = this.width; obj.y = this.height/2; break;
        case 2: obj.x = this.width/2; obj.y = this.height; break;
        case 3: obj.y = this.height/2; break;
      };
      return obj;
    };
    
    function draw_path( context, x, y ){
      var a = getPoint.call( this, x );
      var b = getPoint.call( this, y );
      context.moveTo( a.x, a.y );
      context.quadraticCurveTo( this.width/2, this.height/2, b.x, b.y );
      context.stroke();
    };
    
    function setup(){
      this._positioning = [ // [angle, x offset, y offset, translate-x, translate-y]
        [ 0, 0, 0, this.width, this.height ],  
        [ Math.PI/2, 0, -this.height, this.height, this.width ],
        [ Math.PI, -this.width, -this.height, this.width, this.height ],
        [ Math.PI*3/2, -this.width, 0, this.height, this.width ] 
      ];
      var struct = this.structure;
      
      if( this.tapped ){
        addImageAt.call( this, 
                         SO.images[this._className].back_cover, 
                         0, 
                         0, 
                         this.width,
                         this.height
                       );
      } else if( this instanceof S.PathCard ){
        auto_generate_paths.call( this );
      } else {
        addImageAt.call( this, 
                         SO.images[this._className].front_cover, 
                         0, 
                         0, 
                         this.width,
                         this.height
                       );
      };
      this.saveState();
    };
    return function(){
      if( !this.structure ){
        var self = this;
        
        this.structure = {
          main        : $(document.createElement('span')),
          name        : $(document.createElement('span')),
          canvas      : $(document.createElement('canvas')),
          description : $(document.createElement('span')),
          overlay     : $(document.createElement('a')),
          _context    : null
        };
        
        this.structure._context = this.structure.canvas[0].getContext('2d');
        this.structure.name
          .attr('class', 'card-name')
          .html( this.name );
        this.structure.canvas.attr({
          'class'   : 'card-canvas',
          'width'   : this.width,
          'height'  : this.height
        });
        this.structure.description
          .attr('class', 'card-description')
          .html( this.description );
        this.structure.overlay
          .attr({
            'class' : 'card-overlay',
            'href'  : 'javascript:void(0)'
          });
        this.structure.main
          .data( 'card', this )
          .attr( 'class', SO.classes.card )
          .append( this.structure.name, this.structure.canvas, 
                   this.structure.description, this.structure.overlay
          ).bind('mouseenter.toggleInfo', function(){
            self.structure.name.slideDown( 'fast' );
          }).bind('mouseleave.toggleInfo', function(){
            self.structure.name.hide();
          }).trigger('mouseleave.toggleInfo');
        setup.call( this );
      };
      return this.structure.main;
    };
  })()
});/******************************************************************************/

/**
 * @FILE: lib/DummyCard.abstract.js
 */

S.DummyCard = S.Card.extend({
  _className  : 'DummyCard',
  init        : function() {
    this._super();  
  }
});/******************************************************************************/

/**
 * @FILE: lib/GameCard.abstract.js
 */
S.GameCard = S.Card.extend({
  _className : 'GameCard',
  init       : function() {
    this._super();
  },
  target     : '', // _className for maps, public/private for person
  /**
   * Checks whether the cards function can be executed
   * @return true if success, false otherwise
   */
  check      : function() {
    
  },
  /**
   * Tries to execute the given action on the target, potentially with 
   * extra arguments.
   * @param dryrun true if you want to just check if possible, false to execute
   * @return true if success, false otherwise, null if more work is to be done
   */
  execute : function(dryrun) {
    // execute on Map or on player
    return false;
  }
});/******************************************************************************/

/**
 * @FILE: lib/MapCard.abstract.js
 */
S.MapCard = S.GameCard.extend({
  _className  : 'MapCard',
  execute     : function(dryrun, map, posx, posy) {
    return false;
  }
}); 
/******************************************************************************/

/**
 * @FILE: lib/Map.class.js
 */

Map = Class.extend({
  _className  : 'Map',
  init        : (function(){
    return function( factory, options ){
      if( !options ){
        Logger.warn('[Map.init] Invalid Options!');
        return null;
      };
      U.extend( this, {
        factory     : factory,
        maxCards    : 100,
        cards       : [],
        // potential starting points for reaching the goal; holds realIndex
        ladderCards : [],
        // The box in which cards are put already on the map
        // left-top-X/Y, right-top-X/Y
        boundaries  : { min_X:0, min_Y:0, max_X:0, max_Y:0 },
        startCards  : options.startCards || SO.options.startCards,
        goalCards   : options.goalCards || SO.options.goalCards
      });
      this.cards = this._createEmptyMap();
      add_starting_cards.apply( this );
    };
    function add_starting_cards(){
      for( var i in this.startCards ){
        this._insertCardAt( this.startCards[i][0], this.startCards[i][1], this.startCards[i][2] );
      };
      for( var i in this.goalCards ){
        this._insertCardAt( this.goalCards[i][0], this.goalCards[i][1], this.goalCards[i][2] );
      };
    };
  })(),
  _createEmptyMap : function() {
    var cards = [];
    for ( var i=0; i<this.maxCards*2; ++i ) {
        cards[i] = [];
    };
    return cards;
  },
  neighbour  : function( x, y, pos ){
    switch( pos ){
      case D.top:     y -= 1; break;
      case D.right:   x += 1; break;
      case D.bottom:  y += 1; break;
      case D.left:    x -= 1; break;
      default: 
        Logger.warn( '[Map.neighbour] Unknown case', arguments );
        return null;
    }
    return {
      x : x,
      y : y
    };
  },
  checkSide : function( card_1, side_1, card_2, side_2 ){
    function p(v){ return v.hasPath; }
    return card_1.sides[side_1].hasPath == card_2.sides[side_2].hasPath;
  },
  _realIndex  : function( x, y ){
    return {
      x : this.maxCards + x,
      y : this.maxCards + y
    };
  },
  /**
   * Tells if there is a card at the absolute positions on the map given.
   *
   * @param posx -- the absolute x coordinate
   * @param posy -- the absolute y coordinate
   * @return true or false, if has or not a card
   */
  _isCardAt : function( posx, posy ) {
    var content = this.cards[posx][posy];
    return ( content ? true : false );
  },
  getCardAt  : function( x, y ){
    var pos = this._realIndex( x, y );
    if( pos.x >= 0 && pos.x <= this.maxCards * 2 && pos.y >= 0 && pos.y <= this.maxCards * 2 ){
      var cardInfo = this.cards[pos.x][pos.y];
      if (cardInfo) {
        return this.factory.get.apply(F, cardInfo);
      } else {
        return null;
      };
    } else {
      Logger.warn( '[Map.getCardAt] Indexes out of bounds', arguments );
      return null;
    };
  },
  checkRemoveCardAt : function( x,y ){
    var card = this.getCardAt( x,y );
    if( card !== false ){
      if( card.destructible ){
        return true;
      } else {
        Logger.warn('[Map.checkRemoveCardAt] Card is undestructible', arguments);
      }
    } else {
      Logger.warn('[Map.checkRemoveCardAt] Indexes ouf of bounds', arguments);
    };
    
    return false;
  },
  removeCardAt : function( x, y ) {
    if( this.checkRemoveCardAt( x, y ) ){
      var card = this.getCardAt(x, y);
      var pos = this._realIndex(x, y);
      delete this.cards[pos.x][pos.y];
      // update ladderCards
      if (card.hasLadder) {
        for (var i in this.ladderCards) {
          var cur = this.ladderCards[i];
          if (cur.x === pos.x && cur.y === pos.y ) {
            this.ladderCards.splice(i, 1);
            break;
          };
        };
      };
      return card;
    };
    
    return false;
  },
  checkInsertCardAt : function(cardID, x, y) {
    return this._checkInsertCardAt(['game', cardID], x, y);
  },
  _checkInsertCardAt : function( cardWrapper, x, y ){
    var aPathCard = this.factory.get.apply(F, cardWrapper);
    var pos = this._realIndex( x, y );
    if( pos.x >= 0 && pos.y >= 0 ){
      if( aPathCard instanceof S.StartCard || aPathCard instanceof S.GoalCard ){
        return true;
      } else if( aPathCard instanceof S.PathCard ){
        if( null === this.getCardAt(x, y) ) {
          var ok            = true;
          var foreverAlone  = true;
          var directions    = [ D.top, D.right, D.bottom, D.left ];
          for( var i in directions ){
            var neighbourPos  = this.neighbour(x,y,directions[i]);
            var neighbour     = this.getCardAt( neighbourPos.x, neighbourPos.y );
            if( null !== neighbour ){
              var side = D.opposite( directions[i] );
              ok = ok && this.checkSide( aPathCard, directions[i], neighbour, side );
              foreverAlone = false;
            };
          };
          return ok && !foreverAlone;
        } else {
          Logger.warn( '[Map.check] Must place card on empty slot', arguments );
        };
      } else {
        Logger.warn( '[Map.check] Not an instance of PathCard', arguments );
      };
    };
    return false;
  },
  insertCardAt : function( cardID, x, y) {
    return this._insertCardAt([ 'game', cardID ], x, y);
  },
  _insertCardAt : function( cardWrapper, x, y ) { 
    if( x < this.boundaries.min_X ) this.boundaries.min_X = x;
    if( y < this.boundaries.min_Y ) this.boundaries.min_Y = y;
    if( x > this.boundaries.max_X ) this.boundaries.max_X = x;
    if( y > this.boundaries.max_Y ) this.boundaries.max_Y = y;
    var pos = this._realIndex( x, y );
    if( pos.x >= 0 && pos.y >= 0 ){
      if( this._checkInsertCardAt.apply( this, arguments ) ){
        // TODO: not sure if next line needed...
        if( !this.cards[pos.x] ){ this.cards[pos.y] = []; }
        this.cards[pos.x][pos.y] = cardWrapper;
        // update ladderCards
        var card = this.getCardAt(x, y);
        if (card.hasLadder) {
          this.ladderCards.push(pos);
        };
        return true;
      } else {
        Logger.warn( '[Map.insertCardAt] Unable to place card on map', arguments );
        return false;
      };
    } else {
      Logger.warn( '[Map.insertCardAt] Indexes out of bounds (max:'+this.maxCards+')', arguments );
      return false;
    };
  },
  canReachGold : function( player ) {
    var cards = this._createEmptyMap();
    var newTile = function(t, r, b, l) {
      // 0 is untouched, 1 is entered through here, 2 is finished checking
      var ret = {};
      ret[D.top] = t || 0;
      ret[D.right] = r || 0;
      ret[D.bottom] = b || 0;
      ret[D.left] = l || 0;
     return ret;
    };
    var finalStack = [];
    // pre-seed with ladder cards
    var startStack = U.extend([], this.ladderCards);
    for (var i in startStack) {
      var pos = startStack[i];
      var card = this.getCardAt(pos.x, pos.y);
      var sides = card.sides;
      var tile = newTile();
      for (var dir in sides) {
        var side = sides[dir];
        var neighbour = this.neighbour(pos.x, pos.y, dir);
        var canConnect = side.hasPath && this.isCardAt(neighbour.x, neighbour.y);
        if (canConnect) {
          tile[dir] = 2;
          finalStack.push(neighbour);
          cards[pos.x][pos.y][D.opposite(dir)] = 1;
        };
      };
      cards[pos.x][pos.y] = tile;
    };
    
    while (true) {
      //TODO: continue from here..
    };
    /*
    for (var i in startStack) {
      var pos = startStack[i];
      var card = this.getCardAt(pos.x, pos.y);
      var sides = card.sides;
      for (var dir in sides) {
        var side = sides[dir];
        var neighbour = this.neighbour(pos.x, pos.y, dir);
        var canConnect = side.hasPath && this.isCardAt(neighbour.x, neighbour.y);
        if (canConnect) {
          finalStack.push(neighbour);
          cards[pos.x][pos.y][dir] = true;
        };
      };
    };
    */
    
    // TODO: prode from here.....
    _CardState = Class.extend({
      init : function(aPos, aPathCard, aDir) {
        this.pos      = aPos;
        this.pathCard = aPathCard;
        this.dir      = aDir;
      }
    });
    //function(asd, ads)
    // this.startCards
    // 
                     // - start, goal, colorcard, playercolor.
                     // - card conn
    var stack = [];
    var reachedGoals = [];
    var exploredCards = {};

    // Loading start nodes
    for (var i in this.startCards) {
      var currCard = this.startCards[i];
      exploredCards[currCard[0].id] = true;

      for (var dir in currCard.sides) {
        currSide = currCard.sides[dir];
        if (currSide.hasLadder()) {
          // currCard [1], [2] are (x,y)
          var neighbour = this.neighbour( currCard[1], currCard[2], dir);
          if (neighbour) {
            stack.push(_CardState(neighbour,
                                  this.getCardAt(neighbour[0], neighbour[1]),
                                  D.opposite(dir)));
          }
        }
      }
    }

    // Running the algorithm and storing encountered goals
    while (stack) {
      elem = stack[stack.length()-1];
      stack.pop();
      currPos = elem.pos;
      currCard = elem.pathCard;
      currDir = elem.dir;

      if (exploredCards[currCard.id]) continue;
      exploredCards[currCard.id] = true;

      if (currCard instanceof S.GoalCard)
          reachedGoals.push(currPos);

      currNode = currCard.sides[dir];
      for (var i in currNode.links) {
        var neighbour = this.neighbour(currPos[0], currPos[1], currNode.links[i]);
        if (neighbour) {
            stack.push(_CardState(neighbour,
                                  this.getCardAt(neighbour[0], neighbour[1]),
                                  D.opposite(currNode.links[i])));
        }
      }
    }

    return reachedGoals;
  }
});
/******************************************************************************/

/**
 * @FILE: client/ClientMap.class.js
 */

ClientMap = Map.extend({
  _className  : 'ClientMap',
  init : (function(){
    return function( options ){
      U.extend( this, {
        structure : {
          main  : $(document.createElement('div')),
          table : $(document.createElement('table'))
        }
      });
      this._super( options );
      create_map.apply( this );
      this.structure.main.append( this.structure.table );
    };
    function create_map(){
      var tr    = $();
      for( var y=this.boundaries.min_Y; y<=this.boundaries.max_Y; ++y ){
        var td = $();
        for( var x=this.boundaries.min_X; x<=this.boundaries.max_X; ++x ){
          var id = 'field_'+x+'_'+y;
          var card = this.getCardAt( x, y );
          var element;
          if( card !== null ) {
            element = card;
          } else {
            element = new S.Card();
            element.name = 'Empty Slot';
          };
          td = td.add(
            $(document.createElement('td')).attr({
              'id'    : id,
              'class' : SO.classes.map.td
            }).html( element.toElement().data('pos',[x,y]) )
          );
          element.rotate( 90 );
        };
        tr = tr.add( $(document.createElement('tr')).append(td) );
      };
      this.structure.table
        .attr({
          'class'       : SO.classes.map.table,
          'cellspacing' : 0,
          'cellpadding' : 0
        })
        .html( tr );
    };
  })(),
  _insertCardAt : function( cardWrapper, x, y ){
    if( this._super( cardWrapper, x, y ) ){
      var aPathCard = F.get.apply( F, cardWrapper );
      var elem      = aPathCard.toElement();
      var elemPos   = this.structure.table.find( '#field_'+x+'_'+y );
      elem.data( 'swap-card', elemPos );
      elemPos.html( elem );
      aPathCard.rotate( aPathCard.isFlipped ? 90 : 270 );
      aPathCard.structure.rotate.hide();
      return true;
    }
    return false;
  },
  removeCardAt: function( x, y ){
    var card = this._super( x, y );
    if( card === false ){
      card.detach();
    } else {
      Logger.warn( '[MapClient.removeCardAt] Unable to remove card', arguments );
    }
  },
  toElement : function(){
    return this.structure.main;
  }
});
/******************************************************************************/

/**
 * @FILE: lib/ActionCard.class.js
 */
S.MapActionCard = S.MapCard.extend({
  _className  : 'MapActionCard'
});

S.PlayerActionCard = S.GameCard.extend({
  _className  : 'PlayerActionCard',
  multiple    : false, // if one can have multiple cards of this type
  placed      : false // if it can be placed on a Player or if it removes
});

S.PublicPlayerActionCard = S.PlayerActionCard.extend({
  _className  : 'PublicPlayerActionCard',
  target      : 'public',
  placed      : null, // should be true or false
  effect      : [], // attribute from player.public
  execute     : function(dryrun, player, cardID) {
    if (this.placed) { 
      if (this.multiple) { // can get more or have none
        if (!dryrun) {
          player.public[this.effect[0]].push(this);
        };
        return true;
      } else {
        for (var i in this.effect) {
          if (player.public[this.effect[i]]) { // if something is already there...
            return false;
          };
        };
        if (!dryrun) {
          player.public[this.effect[0]].push(this);
        };
        return true;
      };
    } else {
      for (var i in this.effect) {
        var effects = player.public[this.effect[i]];
        for (var j in effects) {
          if (effects[j].id == cardID) {
            if (!dryrun) {
              player[effect].splice(i, 1);
            };
            return true;
          };
        };
      };
      return false;
    };
    return true;
  }
});

S.PrivatePlayerActionCard = S.PlayerActionCard.extend({
  _className  : 'PrivatePlayerActionCard',
  target      : 'private',
  execute     : function(dryrun, player) {
    if (dryrun) {
      return true;
    } else {
      return null;
    };
  }
});

// PUBLIC Player
S.BrokenLamp    = S.PublicPlayerActionCard.extend({
  _className : 'BrokenLamp',
  placed     : true
});

S.BrokenCart    = S.PublicPlayerActionCard.extend({
  _className : 'BrokenCart',
  effect     : ['cart'],
  placed     : true
});

S.BrokenPickaxe = S.PublicPlayerActionCard.extend({
  _className : 'BrokenPickaxe',
  effect     : ['pickaxe'],
  placed     : true
});


S.Lamp          = S.PublicPlayerActionCard.extend({
  _className : 'Lamp',
  effect     : ['lamp'],
  placed     : false
});

S.Cart          = S.PublicPlayerActionCard.extend({
  _className : 'Cart',
  effect     : ['cart'],
  placed     : false
});

S.Pickaxe       = S.PublicPlayerActionCard.extend({
  _className : 'Pickaxe',
  effect     : ['pickaxe'],
  placed     : false
});

S.LampPickaxe   = S.PublicPlayerActionCard.extend({
  _className : 'LampPickaxe',
  effect     : ['lamp', 'pickaxe'],
  placed     : false
});

S.PickaxeCart   = S.PublicPlayerActionCard.extend({
  _className : 'PickaxeCart',
  effect     : ['pickaxe', 'cart'],
  placed     : false
});

S.CartLamp      = S.PublicPlayerActionCard.extend({
  _className : 'CartLamp',
  effect     : ['cart', 'lamp'],
  placed     : false
});

S.Theft         = S.PublicPlayerActionCard.extend({
  _className : 'Theft',
  effect     : ['theft'],
  placed     : true
});

S.HandsOff      = S.PublicPlayerActionCard.extend({
  _className : 'HandsOff',
  effect     : ['theft'],
  placed     : false
});

S.Trapped       = S.PublicPlayerActionCard.extend({
  _className : 'Trapped',
  effect     : ['jail'],
  placed     : true
});

S.FreeAtLast    = S.PublicPlayerActionCard.extend({
  _className : 'FreeAtLast',
  effect     : ['jail'],
  placed     : false
});

// PRIVATE Player
S.SwapHand      = S.PrivatePlayerActionCard.extend({
  _className : 'SwapHand'
});

S.Inspection    = S.PrivatePlayerActionCard.extend({
  _className : 'Inspection'
});

S.SwapHats      = S.PrivatePlayerActionCard.extend({
  _className : 'SwapHats'
});


// MAP
S.Rockfall      = S.MapActionCard.extend({
  _className : 'Rockfall',
  target     : 'PathCard',
  execute    : function(dryrun, map, posx, posy) {
    if (map.checkRemoveCardAt(posx, posy)) {
      if (!dryrun) {
        map.removeCardAt(posx, posy);
      };
      return true;
    } else {
      return false;
    };
    
    Logger.warn(this._className, 'Failed doing action');
    return null;
  }
});

S.ViewGoalCard = S.MapActionCard.extend({
  _className : 'ViewGoalCard',
  target     : 'GoalCard',
  execute    : function(dryrun, map, posx, posy) {
    var card = map.getCardAt(posx, posy);
    if (!card || !(card instanceof S[this.target])) {
      return false;
    } else {
      if (dryrun) {
        return true;
      } else {
        return card.id;
      };
    };
    
    Logger.warn(this._className, 'Failed doing action');
  }
});
/******************************************************************************/

/**
 * @FILE: lib/PathCard.abstract.js
 */
(function(){
  var Node = Class.extend({
    init    : function(hasPath, links) {
      this.hasPath = hasPath || false;
      this.links  = links || {};
    },
    hasPath  : false,
    links    : {}
  });

  S.PathCard = S.MapCard.extend({
    _className : 'PathCard',
    target     : 'DummyCard', 
    init       : function() {
      this._super();
      U.extend(this, {
        destructible  : false,
        sides         :  {}
      });
      for (var i in [D.top, D.right, D.bottom, D.left]) {
        this.sides[i] = new Node();
      };
    },
    execute   : function(dryrun, map, posx, posy, flipped) {
      if (this.isFlipped != flipped) {
        this.flip();
      };
      if (dryrun) {
        return map.checkInsertCardAt(this.id, posx, posy);
      } else {
        return map.insertCardAt(this.id, posx, posy);
      };
    
      Logger.warn(this._className, 'Failed doing action');
      return false;
    },
    isFlipped : false,
    flip      : function() {
      this.isFlipped  = !this.isFlipped;
      var temp        = this.sides[D.top];
      this.sides[D.top]   = this.sides[D.bottom];
      this.sides[D.bottom]   = temp;

      var temp        = this.sides[D.right];
      this.sides[D.right]   = this.sides[D.left];
      this.sides[D.left]   = temp;
      return this;
    },
    connect   : function(side, sides) {
      for(s in sides) {
        this.sides[side].links[sides[s]] = this.sides[s];
      }
      return this;
    },
    nodes : function(){
      for( var i in arguments ){
        this.sides[arguments[i]].hasPath = true;
      }
      return this;
    }
  });
})();/******************************************************************************/

/**
 * @FILE: client/PathCard.abstract.js
 */
S.PathCard = S.PathCard.extend({
  _className  : 'PathCard',
  toElement   : function(){
    if( !this.structure ){
      this._super();
      this.structure.rotate = $(document.createElement('a'));
      var self = this;
      this.structure.rotate
        .attr({
          'class' : 'card-rotate',
          'href'  : 'javascript:void(0)',
          'title' : 'Flip Card'
        }).html(
          $(document.createElement('img'))
            .attr('src',SO.webRoot+'/images/icon-rotate.png')
        ).bind('click.rotate', function(e){
          e.stopPropagation();
          self.flip();
        });
      this.structure.overlay.append( this.structure.rotate );
    };
    return this.structure.main;
  },
  flip : function(){
    this._super();
    this.rotate( this.isFlipped ? 90 : 270 );
  }
}); 
/******************************************************************************/

/**
 * @FILE: lib/PathCard.class.js
 */

// 4 pieces
S.HorizontalPathCard = S.PathCard.extend({
  _className : 'HorizontalPathCard',
  init  : function() {
    this._super();

    this.sides[D.right].hasPath   = true;
    this.sides[D.left].hasPath   = true;

    this.connect(D.right, [D.left]);
    this.connect(D.left, [D.right]);
  }
});

// D.left pieces
S.VerticalPathCard = S.PathCard.extend({
  _className : 'VerticalPathCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.bottom );

    this.connect(D.top, [D.bottom]);
    this.connect(D.bottom, [D.top]);
  }
});

// 5 pieces
S.FullCrossPathCard = S.PathCard.extend({
  _className : 'FullCrossPathCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.bottom, D.left );

    this.connect(D.top, [D.right,D.bottom,D.left]);
    this.connect(D.right, [D.top,D.bottom,D.left]);
    this.connect(D.bottom, [D.top,D.right,D.left]);
    this.connect(D.left, [D.top,D.right,D.bottom]);
  }
});

// 5 pieces
S.HorizontalCrossPathCard = S.PathCard.extend({
  _className : 'HorizontalCrossPathCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.left );
    
    this.connect(D.top, [D.right,D.left]);
    this.connect(D.right, [D.top,D.left]);
    this.connect(D.left, [D.top,D.right]);
  }
});

// 5 pieces
S.VerticalCrossPathCard = S.PathCard.extend({
  _className : 'VerticalCrossPathCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.bottom );

    this.connect(D.top, [D.right,D.bottom]);
    this.connect(D.right, [D.top,D.bottom]);
    this.connect(D.bottom, [D.top,D.right]);
  }
});

// 4 pieces
S.CurvedRightPathCard = S.PathCard.extend({
  _className : 'CurvedRightPathCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right );
    
    this.connect(D.top, [D.right]);
    this.connect(D.right, [D.top]);
  }
});

// 5 pieces
S.CurvedLeftPathCard = S.PathCard.extend({
  _className : 'CurvedLeftPathCard',
  init  : function() {
    this._super();
    
    this.nodes( D.top, D.left );

    this.connect(D.top, [D.left]);
    this.connect(D.left, [D.top]);
  }
});

// D.bottom pieces
S.DoubleCurvePathCard = S.PathCard.extend({
  _className : 'DoubleCurvePathCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.bottom, D.left );
    
    this.connect(D.top, [D.right]);
    this.connect(D.right, [D.top]);
    this.connect(D.bottom, [D.left]);
    this.connect(D.left, [D.bottom]);
  }
});

// D.bottom pieces
S.BridgePathCard = S.PathCard.extend({
  _className : 'BridgePathCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.bottom, D.left );

    this.connect(D.top, [D.bottom]);
    this.connect(D.right, [D.left]);
    this.connect(D.bottom, [D.top]);
    this.connect(D.left, [D.right]);
  }
});

// PURE BLOCK CARDS
S.BlockFullCrossPathCard = S.PathCard.extend({
  _className : 'BlockFullCrossPathCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.bottom, D.left );
  }
});

S.BlockVerticalCrossPathCard = S.PathCard.extend({
  _className : 'BlockVerticalCrossPathCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.bottom );
  }
});

S.BlockHorizontalCrossPathCard = S.PathCard.extend({
  _className : 'BlockHorizontalCrossPathCard',
  init  : function() {
    this._super();
    
    this.nodes( D.top, D.right, D.left );
  }
});

S.BlockVerticalPathCard = S.PathCard.extend({
  _className : 'BlockVerticalPathCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.bottom );
  }
});

S.BlockHorizontalPathCard = S.PathCard.extend({
  _className : 'BlockHorizontalPathCard',
  init  : function() {
    this._super();

    this.nodes( D.right, D.left );
  }
});

S.BlockTopPathCard = S.PathCard.extend({
  _className : 'BlockTopPathCard',
  init  : function() {
    this._super();

    this.nodes( D.top );
  }
});

S.BlockRightPathCard = S.PathCard.extend({
  _className : 'BlockRightPathCard',
  init  : function() {
    this._super();

    this.nodes( D.right );
  }
});

S.BlockTopRightPathCard = S.PathCard.extend({
  _className : 'BlockTopRightPathCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right );
  }
});

S.BlockTopLeftPathCard = S.PathCard.extend({
  _className : 'BlockTopLeftPathCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.left );
  }
});/******************************************************************************/

/**
 * @FILE: lib/GoalCard.class.js
 */
S.GoalCard = S.PathCard.extend({
  _className  : 'GoalCard',
  init: function(){
    this._super();
    U.extend( this, {
      tapped  : true
    });
  }
});

S.CurvedLeftGoalCard = S.GoalCard.extend({
  _className : 'CurvedLeftGoalCard',
  init  : function() {
    this._super();
    this.nodes( D.top, D.left );
    this.connect( D.top, [D.left] );
    this.connect( D.left, [D.top] );
  }
});

S.CurvedRightGoalCard = S.GoalCard.extend({
  _className : 'CurvedRightGoalCard',
  init  : function() {
    this._super();
    this.nodes( D.top, D.right );
    this.connect( D.top, [D.right] );
    this.connect( D.right, [D.top] );
  }
});/******************************************************************************/

/**
 * @FILE: lib/LadderPathCard.class.js
 */
// LADDERS
S.LadderPathCard = S.PathCard.extend({
  _className : 'LadderPathCard',
  init    : function() { 
    this._super(); 
  },
  // only to know it has a ladder...could also add a field :)
  hasLadder : true
});

S.RightLadderPath = S.LadderPathCard.extend({
  _className : 'RightLadderPath',
  init  : function() {
    this._super();

    this.nodes( D.right );
    this.sides[D.right].hasLadder = true;
  }
});

S.TopLadderPath = S.LadderPathCard.extend({
  _className : 'TopLadderPath',
  init  : function() {
    this._super();

    this.nodes( D.top );
    this.sides[D.top].hasLadder = true;
  }
});

S.CurvedRightLadderPath = S.LadderPathCard.extend({
  _className : 'CurvedRightLadderPath',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right );
    
    this.sides[D.top].hasLadder = true;
    this.sides[D.right].hasLadder = true;

    this.connect( D.top, [D.right] );
    this.connect( D.right, [D.top] );
  }
});

S.CurvedLeftLadderPath = S.LadderPathCard.extend({
  _className : 'CurvedLeftLadderPath',
  init  : function() {
    this._super();

    this.nodes( D.top, D.left );
    
    this.sides[D.top].hasLadder = true;
    this.sides[D.left].hasLadder = true;

    this.connect( D.top, [D.left] );
    this.connect( D.left, [D.top] );
  }
});
/******************************************************************************/

/**
 * @FILE: lib/RoleCard.class.js
 */

S.RoleCard = S.GameCard.extend({
  _className : 'RoleCard'
});

S.BlueGoldDigger   = S.RoleCard.extend({
  _className : 'BlueGoldDigger'
});
S.GreenGoldDigger  = S.RoleCard.extend({
  _className : 'GreenGoldDigger'
});
S.Boss              = S.RoleCard.extend({
  _className : 'Boss'
});
S.Geologist         = S.RoleCard.extend({
  _className : 'Geologist'
});
S.Profiteer         = S.RoleCard.extend({
  _className : 'Profiteer'
});
S.Saboteur          = S.RoleCard.extend({
  _className : 'Saboteur'
});
/******************************************************************************/

/**
 * @FILE: lib/CrystalPathCard.class.js
 */
// CRYSTALS
S.CrystalCard = S.PathCard.extend({
  _className  : 'CrystalCard',
  // only to know it has a crystal...could also add a field :)
  hasCrystal : true
});

S.RightCrystalCard = S.CrystalCard.extend({
  _className : 'RightCrystalCard',
  init  : function() {
    this._super();
    
    this.nodes( D.right );
  }
});

S.TopCrystalCard = S.CrystalCard.extend({
  _className : 'TopCrystalCard',
  init  : function() {
    this._super();
    
    this.nodes( D.top );
  }
});

S.FullCrossCrystalCard = S.CrystalCard.extend({
  _className : 'FullCrossCrystalCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.bottom, D.left );

    this.connect(D.top, [D.right,D.bottom,D.left]);
    this.connect(D.right, [D.top,D.bottom,D.left]);
    this.connect(D.bottom, [D.top,D.right,D.left]);
    this.connect(D.left, [D.top,D.right,D.bottom]);
  }
});

S.HorizontalCrossCrystalCard = S.CrystalCard.extend({
  _className : 'HorizontalCrossCrystalCard',
  init  : function() {
    this._super();

    this.nodes( D.right, D.bottom, D.left );
    
    this.connect(D.right, [D.bottom,D.left]);
    this.connect(D.bottom, [D.right,D.left]);
    this.connect(D.left, [D.right,D.bottom]);
  }
});

S.BlockHorizontalCrossCrystalCard = S.CrystalCard.extend({
  _className : 'BlockHorizontalCrossCrystalCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.bottom, D.left );
    
    this.connect(D.right, [D.bottom,D.left]);
    this.connect(D.bottom, [D.right,D.left]);
    this.connect(D.left, [D.right,D.bottom]);
  }
});

S.VerticalCrossCrystalCard = S.CrystalCard.extend({
  _className : 'VerticalCrossCrystalCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.bottom );
    
    this.connect(D.top, [D.right,D.bottom]);
    this.connect(D.right, [D.top,D.bottom]);
    this.connect(D.bottom, [D.top,D.right]);
  }
});

S.BlockVerticalCrossCrystalCard = S.CrystalCard.extend({
  _className : 'BlockVerticalCrossCrystalCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.bottom, D.left );

    this.connect(D.top, [D.right,D.bottom]);
    this.connect(D.right, [D.top,D.bottom]);
    this.connect(D.bottom, [D.top,D.right]);
  }
});

S.BlockVerticalLineCrystalCard = S.CrystalCard.extend({
  _className : 'BlockVerticalLineCrystalCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.bottom );

    this.connect(D.top, [D.bottom]);
    this.connect(D.bottom, [D.top]);
  }
});
/******************************************************************************/

/**
 * @FILE: lib/GatePathCard.class.js
 */
// GATES
S.GateCard = S.PathCard.extend({
  _className  : 'GateCard',
  // the exact gate will be on the connections
  hasGate     : true
});

S.BlueGateCard = S.GateCard.extend({
  color : 'blue'
});

S.GreenGateCard = S.GateCard.extend({
  color : 'green'
});

S.HorizontalBlueGateCard = S.BlueGateCard.extend({
  _className : 'HorizontalBlueGateCard',
  init  : function() {
    this._super();

    this.nodes( D.right, D.left );

    this.connect(D.right, [D.left]);
    this.connect(D.left, [D.right]);
  }
});

S.VerticalBlueGateCard = S.BlueGateCard.extend({
  _className : 'VerticalBlueGateCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.bottom );

    this.connect(D.top, [D.bottom]);
    this.connect(D.bottom, [D.top]);
  }
});

S.LeftCurvedBlueGatePath = S.BlueGateCard.extend({
  _className : 'LeftCurvedBlueGatePath',
  init  : function() {
    this._super();

    this.nodes( D.top, D.left );

    this.connect(D.top, [D.left]);
    this.connect(D.left, [D.top]);
  }
});

S.BlockHorizontalGreenGateCard = S.GreenGateCard.extend({
  _className : 'BlockHorizontalGreenGateCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.left );

    this.connect(D.right, [D.left]);
    this.connect(D.left, [D.right]);
  }
});

S.VerticalGreenGateCard = S.GreenGateCard.extend({
  _className : 'VerticalGreenGateCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.bottom );

    this.connect(D.top, [D.bottom]);
    this.connect(D.bottom, [D.top]);
  }
});

S.RightCurvedGreenGateCard = S.GreenGateCard.extend({
  _className : 'RightCurvedGreenGateCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right );

    this.connect(D.top, [D.right]);
    this.connect(D.right, [D.top]);
  }
});/******************************************************************************/

/**
 * @FILE: lib/GoldCard.class.js
 */

S.GoldCard = S.GoalCard.extend({
  _className : 'GoldCard'
});
S.FullCrossGoldCard = S.GoldCard.extend({
  _className : 'FullCrossGoldCard',
  init  : function() {
    this._super();
    this.nodes( D.top, D.right, D.bottom, D.left );
    
    this.connect(D.top, [D.right,D.bottom,D.left]);
    this.connect(D.right, [D.top,D.bottom,D.left]);
    this.connect(D.bottom, [D.top,D.right,D.left]);
    this.connect(D.left, [D.top,D.right,D.bottom]);
  }
}); /******************************************************************************/

/**
 * @FILE: lib/Hand.class.js
 */
var Hand = Class.extend({
  _className : 'Hand',
  /**
   * 
   */
  init : function( ids ){
    U.extend( this, {
      cards : []
    });
    if( ids && ids.length > 0 ){
      this.add( ids );
    };
  },
  /**
   * Adds cards to the hand
   * @param {Array} cards - card IDs to be added to the hand
   * @return this
   */
  add : function( ids ){
    for( var i in ids ){
      this.cards.push( ids[i] );
    };
    return this;
  },
  /**
   * Checks whether a certain card (id) is in the hand
   * @param {Int} id
   * @return {Boolean}
   */
  has : function( id ){
    return this.cards.indexOf( id ) !== -1 ? true : false;
  },
  /**
   * Removes multiple card ids from hand
   * @param {Array} ids
   */
  remove : (function(){
    return function( ids ){
      for( var i in ids ){
        var pos = get.call( this, ids[i] );
        if( pos > -1 ){
          delete this.cards[pos];
        } else {
          Logger.warn('[Hand.remove] Unknown id', arguments);
          return null;
        }
      }
      this.compact();
      return this;
    };
    function get( id ){
      return this.cards.indexOf( id );
    };
  })(),
  /**
   * Removes null/empty slots from hand
   */
  compact : function() {
    var newcards = [];
    for (var i in this.cards) {
      var cardID = this.cards[i];
      if ( undefined !== cardID ) {
        newcards.push(cardID);
      };
    };
    this.cards = newcards;
    return this;
  },
  /**
   * Check for all cards being selected are right
   * @param {Array} cardIDs
   * @return {Boolean}
   */
  validateCards : function( cardIDs ) {
    for (var i in cardIDs) {
      if( !this.has( cardIDs[i] ) ){
        return false;
      };
    };
    return true;
  }
}); 
/******************************************************************************/

/**
 * @FILE: client/ClientHand.class.js
 */

var ClientHand = Hand.extend({
  _className : 'ClientHand',
  init  : (function(){
    return function( ids ){
      U.extend( this, {
        selected  : $(),
        structure : {
          main    : $(document.createElement('div')),
          cards   : $(document.createElement('div')),
          actions : {
            main      : $(document.createElement('div')),
            playCard  : $(document.createElement('a')),
            heal      : $(document.createElement('a')),
            discard   : $(document.createElement('a'))
          },
          attributes  : $(document.createElement('div'))
        }
      });
      this._super( ids );
      create_structure.call( this );
    };
    
    function create_structure(){
      this.structure.cards
        .addClass( SO.classes.hand.cards );
      
      for( var i in this.structure.actions ){
        var el = this.structure.actions[i];
        if( el[0].tagName.toLowerCase() == 'a' ){
          el.attr({
              href  : 'javascript:void(0)',
              class : SO.classes.hand.action
            }).html( i );
          this.structure.actions.main.append( el );
        };
      };
      
      var self    = this;
      var accept  = this.structure.actions.accept;
      this.structure.actions.playCard
        .bind( 'click.playCard', function(){
          var cards = client.map.structure.table.find('.'+SO.classes.card);
          cards
            .unbind('click.placeCard')
            .bind('click.placeCard', function(){
              if( self.selected.length != 1 ){
                Logger.info('You can only play one card at a time');
                return;
              };
              var pos   = $(this).data('pos');
              var card  = self.selected.eq(0).data('card');
              if( card.execute( true, client.map, pos[0], pos[1], card.isFlipped ) ){
                var event = Protocol.createEvent('targetMap', 'server', 'custom');
                event.data.playerID = gameState.playerID;
                event.data.cardID   = card.id;
                event.data.posx     = pos[0];
                event.data.posy     = pos[1];
                event.data.flipped  = card.isFlipped;
                actions.targetMap.callback(event);
              } else {
                Logger.info('You are unable to place that card on that location');
              };
            });
        });
        
      this.structure.actions.heal
        .bind( 'click.heal', function(){
          //TODO: ME!
        });
        
      this.structure.actions.discard
        .bind( 'click.discard', function(){
          if( self.selected.length == 0 ){
            Logger.info('Select at least 1 card to discard');
            return;
          };
          var ids = self.selected.map(function(){ 
            return $(this).data('card').id;
          });
          var event = Protocol.createEvent('discard', 'server', 'custom');
          event.data.playerID = gameState.playerID;
          event.data.cards = ids.toArray();
          actions.discard.callback(event);
        });
      
      this.structure.actions.main
        .addClass( SO.classes.hand.actions );
        
      this.structure.main
        .addClass( SO.classes.hand.main )
        .append( this.structure.actions.main, this.structure.cards );
    };
  })(),
  add : function( ids ){
    var self = this;
    if( this._super( ids ) ){
      for( var i in ids ){
        F.get( 'game', ids[i])
          .toElement()
          .appendTo( this.structure.cards )
          .bind( 'click.selectCard', function(){
            if( !$(this).hasClass('selected') ){
              self.selected = self.selected.add( $(this) );
              var card = $(this).data('card');
              card.rotate( card.isFlipped ? 90 : 270 );
              $(this)
                .addClass( 'selected' )
                .trigger( 'mouseenter.toggleInfo' );
            } else {
              $(this).removeClass( 'selected' );
              self.selected = self.selected.not( $(this) );
              $(this).data('card').rotate( 0 );
            };
          });
      };
      return this;
    };
    return null;
  },
  remove : function( ids ){
    if( this._super( ids ) ){
      for( var i in ids ){
        F.get( 'game', ids[i]).toElement().detach();
      };
      return this;
    };
    return null;
  },
  toElement : function(){
    return this.structure.main;
  }
});/******************************************************************************/

/**
 * @FILE: client/HiddenHand.class.js
 */

/**
 * NOTE: Must extend the extended client-ready Hand!!!
 * This is just like a normal hand class, only that it server dummy cards intead
 */
var HiddenHand = ClientHand.extend({
  _className : 'HiddenHand',
  init : function( ids ){
    this._super( ids );
    U.extend( this, {
      cards : []
    });
  },
  add : function( ids ){
    for( var i in ids ){
      var card = new S.GameCard();
      this.cards.push( card );
      this.structure.cards.append( card.toElement() );
    };
    return this;
  },
  remove : function( ids ){
    for( var i in ids ){
      var card = this.cards.pop();
      card.detach();
    };
    return this;
  }
}); 
/******************************************************************************/

/**
 * @FILE: lib/Player.class.js
 */
Player = Class.extend({
  _className    : 'Player',
  init          : function( attributes, handClass ){
    handClass = handClass || Hand;
    var defaults = {
      public : {
        name    : 'Player-Name',
        id      : null,
        turn    : 0,
        playing : false,
        lamp    : [],
        cart    : [],
        pickaxe : [],
        jail    : [],
        theft   : []
        },
      private : {
        roleCard  : null,
        hand      : {}
      }
    };
    U.extend( true, this, defaults, attributes);
    var args = this.private.hand.cards ? this.private.hand.cards : [];
    this.private.hand = new handClass( args );
  },
  setName         : function( name ) {
    this.public.name = name;
    return this;
  },
  setId           : function(id) {
    this.public.id = id;
    return this;
  },
  canBuild        : function(){
    return (!this.public.lamp.length 
      && !this.public.cart.length 
      && !this.public.pickaxe.length 
      && !this.public.jail.length);
  }
});
/******************************************************************************/

/**
 * @FILE: client/ClientPlayer.class.js
 */
ClientPlayer = Player.extend({
  init : function( attributes, handClass ){
    handClass = handClass || ClientHand;
    this._super( attributes, handClass );
  }
});/******************************************************************************/

/**
 * @FILE: client/HiddenPlayer.class.js
 */
HiddenPlayer = ClientPlayer.extend({
  init : function( attributes, handClass ){
    handClass = handClass || HiddenHand;
    this._super( attributes, handClass );
  }
});/******************************************************************************/

/**
 * @FILE: lib/Protocol.js
 */
var Event = Class.extend({
//Event = Class.extend({
  init : function(name, data, callback) {
    this.name = name || '';
    this.data = data || {};
    this.callback = callback || function() {};
  }
});

var Protocol;
( function() {
Protocol = {
  state   : {
    CORRECT : 0,
    ERROR   : 1
  },
  events  : {
    server : {
      admin : {
        connect     : new Event('connect', null),
        disconnect  : new Event('disconnect', null),
        message     : new Event('message', '')
      },
      custom  : {
        chat                  : new Event('chat', {
          playerID  : 0, // player
          message   : ''
        }),
        setup                 : new Event('setup', {
          playerID : 0,
          name     : ''
        }),
        startGame             : new Event('startGame', {
          // nothing so far..
        }),
        discard               : new Event('discard', {
          playerID  : '',
          cards     : []
        }), 
        targetPublicPlayer    : new Event('targetPublicPlayer', {
          playerID      : 0, // player
          cardID        : 0, // card
          targetID      : 0, // player
          targetCardID  : 0 // card
        }), 
        targetPrivatePlayer   : new Event('targetPrivatePlayer', {
          playerID      : 0, // player
          cardID        : 0, // card
          targetID      : 0 // player
        }),
        targetMap             : new Event('targetMap', {
          playerID      : 0, // player
          cardID        : 0, // card
          posx          : 0, // mapX
          posy          : 0, // mapY
          flipped       : false
        }), 
        heal                  : new Event('heal', {
          playerID      : 0, // player
          cards         : [], // card
          targetCardID      : 0 // card
        })
      }
    },
    client : {
      admin : {
        connect           : new Event('connect', null),
        disconnect        : new Event('disconnect', null),
        reconnect         : new Event('reconnect', null),
        reconnecting      : new Event('reconnecting', null),
        reconnect_failed  : new Event('reconnect_failed', 0),
        message           : new Event('message', null)
      },
      custom : {
        multiple  : new Event('multiple', {
          events  : [] // EVENT
        }),
        chat      : new Event('chat', {
          playerID : 0, // player
          message  : ''
        }),
        setup     : new Event('setup', {
          playerID  : 0 // player
        }),
        result    : new Event('result', {
          state   : 0 // STATE
        }),
        reset     : new Event('reset', {
          map     : {}, // MAP
          players : [] // all players, public for everyone, private for you
        }),
        update    : new Event('update', {
          turn      : 0, // playerID
          prevEvent : {}, // previous event information
          response  : {} // special response for each event
        })
      }
    }
  },
  createEvent : function(what, where, type, data) {
    if (!type || !where || !what) return null;
    var event = U.extend({}, this.events[where][type][what]);
    if (data) {
      U.extend(event.data, data);
    };
    
    delete event.callback;
    delete event.response;
    
    return event;
  },
  createResponse : function(what, where, type, response) {
    if (!type || !where || !what) return null;
    var event = U.extend({}, this.events[where][type][what]);
    if (reponse) {
      U.extend(event.response, response);
    };
    
    delete event.callback;
    
    return event;
  }
};

})();
/******************************************************************************/

/**
 * @FILE: lib/StartCard.class.js
 */

S.StartCard = S.LadderPathCard.extend({
  _className  : 'StartCard',
  init        : function(){ 
    this._super();     
  }
});
S.FullCrossStartCard = S.StartCard.extend({
  _className : 'FullCrossStartCard',
  init  : function() {
    this._super();
    this.nodes( D.top, D.right, D.bottom, D.left );

    this.connect(D.top, [D.right,D.bottom,D.left]);
    this.connect(D.right, [D.top,D.bottom,D.left]);
    this.connect(D.bottom, [D.top,D.right,D.left]);
    this.connect(D.left, [D.top,D.right,D.bottom]);
  }
}); 
/******************************************************************************/

/**
 * @FILE: lib/Saboteur.class.js
 */
var Saboteur = Class.extend({
  init  : (function(){
    return function( options, cards ){
      // General multi-purpose object. Will store in it all information regarding the game
      U.extend( this, {
        // {Array} list of all player objects
        players     : {},
        // {Object} class for holding map state information
        map         : {},
        // {Object}
        factory     : new Factory(),
        // {Object} class for holding event info: handle, check, execute
        events      : {},
        // {Object} the extended options object, stored for later use
        opt         : {},
        // {Object} the extended classes object, stored for later use
        cls         : {},
        // {Object} the extended cards object, stored for later use
        cards       : {},
        // {Array} array of player IDs in the order in which they will play the game
        turns       : [],
        // {Int} the current index in the this.turns representing the player to play
        currentTurn : 0
      });
      
      U.extend( this.opt, SO.options, options );
      U.extend( true, this.cards, SO.cards, cards );
      
      create_factory.call( this );
      create_events.call( this );
      
    };
    
    function create_factory(){
      var startListDetails     = {};
      var gameListDetails      = {};
      var roleListDetails      = {};
      var goalListDetails      = {};
      var dummyGoalListDetails = {};

      U.extend( startListDetails, this.cards.start );
      U.extend( gameListDetails, this.cards.path, this.cards.action );
      U.extend( roleListDetails, this.cards.role );
      dummyGoalListDetails = { GoalCard:U.objectLength(this.cards.goal) };
      goalListDetails = this.cards.goal;
      
      // create the card decks
      this.factory.register({
        'start'     : startListDetails,
        'goal'      : goalListDetails,
        'dummyGoal' : dummyGoalListDetails,
        'game'      : gameListDetails,
        'role'      : roleListDetails
      });
    };
    
    function create_events(){
      for (var h in Protocol.events.server.custom) {
        this.events[h] = {};
        U.extend(this.events[h], {
          handle  : function() {
            Logger.warn('Undefined handle for', h);
          },
          check : function() {
            Logger.warn('Undefined check for', h);
          },
          execute : function() {
            Logger.warn('Undefined execute for', h);
          }
        });
      };
      
      // EVENT discard
      U.extend(this.events.discard, {
        check : function(event) {
          var data = event.data;
          return this.doDiscard(true, data.playerID, data.cards);
        },
        execute : function(event) {
          var data = event.data;
          return this.doDiscard(false, data.playerID, data.cards);
        }
      });
      
      // EVENT targetPublicPlayer
      U.extend(this.events.targetPublicPlayer, {
        check : function(event) {
          var data = event.data;
          return this.doTargetPublicPlayer(true, data.playerID, data.playerCardID, data.targetID, data.targetCardID);
        },
        execute : function(event) {
          var data = event.data;
          return this.doTargetPublicPlayer(false, data.playerID, data.playerCardID, data.targetID, data.targetCardID);
        }
      });
      
      // EVENT targetPrivatePlayer
      U.extend(this.events.targetPrivatePlayer, {
        check : function(event) {
          var data = event.data;
          return this.doTargetPrivatePlayer(true, data.playerID, data.playerCardID, data.targetID);
        },
        execute : function(event) {
          var data = event.data;
          return this.doTargetPrivatePlayer(false, data.playerID, data.playerCardID, data.targetID);
        }
      });
      
      // EVENT targetMap
      U.extend(this.events.targetMap, {
        check : function(event) {
          var data = event.data;
          return this.doTargetMap(true, data.playerID, data.cardID, data.posx, data.posy, data.flipped);
        },
        execute : function(event) {
          var data = event.data;
          return this.doTargetMap(false, data.playerID, data.cardID, data.posx, data.posy, data.flipped);
        }
      });
      
      // EVENT heal
      U.extend(this.events.heal, {
        check : function(event) {
          var data = event.data;
          return this.doHeal(true, data.playerID, data.cards, data.targetCardID);
        },
        execute : function(event) {
          var data = event.data;
          return this.doHeal(false, data.playerID, data.cards, data.targetCardID);
        }
      });
    };
    
  })(),
  
  /**
   * Creates the set of options to be used on the map.
   * @param {BOOLEAN} useGoalCards -- indicate if to use goal or dummyGoal
   */
  createMapOptions : function(useGoalCards) {
    var goal = (useGoalCards ? 'goal' : 'dummyGoal');
    
    return {
      maxCards    : this.factory.size(),
      startCards  : this.opt.startCards.map(function(v,i){ v.unshift(['start', i]); return v; }),
      goalCards   : this.opt.goalCards.map(function(v,i){ v.unshift([goal, i]); return v; })
    };
  },
  
  setPlayers : function( players ){
    this.players = {};
    for( var i in players ){
      this.players[ i ] = new S.Player( players[i] );
    };
    return this;
  },
  
  cleanState : function() {
    this.players = {};
    this.map = {};
    this.turns = [];
    this.currentTurn = 0;
  },
  
  prepareTurn : function(playerID) {
    return true; // TODO: hacked for Stefan :p
    var player = this.players[playerID];
    // got player, his turn, first event
    if (player && this.currentTurn == player.public.turn && !player.public.playing) {
      player.public.playing = true;
      return true;
    } else {
      return false;
    };
  },
  
  advanceTurn : function() {
    // unset the playing state of the current player
    var playerID = this.turns[this.currentTurn];
    this.players[playerID].public.playing = false;
    // advance the play turn
    this.currentTurn++;
    if (this.currentTurn >= this.turns.length) {
      this.currentTurn = 0;
    };
    return this.currentTurn;
  },

  // EVENTS
  doDiscard : function(dryrun, playerID, cards) {
    var player = this.players[playerID];
    if (!player) {
      return false;
    } else {
      var hand = player.private.hand;
      if (hand.validateCards(cards)) {
        if (!dryrun) {
          hand.remove(cards);
        };
        return true;
      } else {
        return false;
      };
    };
  },

  /**
   * @return true if can be done, false otherwise
   */
  doTargetPublicPlayer : function(dryrun, playerID, playerCardID, targetId, targetCardID) {
    var player = this.players[playerID];
    if (!player) {
      return false;
    } else {
      var target = this.players[targetID];
      var card = (player.private.hand.has(playerCardID) 
                    ? this.factory.get('game', playerCardID) 
                    : null);
      
      if (!target || !card || !(card instanceof PublicPlayerActionCard)) {
        return false;
      } else {
        return card.execute(dryrun, target, targetCardID);
      };
    };
  },
  
  /**
   * @return true if can be done, false otherwise, null if you asked to execute
   */
  doTargetPrivatePlayer : function(dryrun, playerID, playerCardID, targetID) {
    var player = this.players[playerID];
    if (!player) {
      return false;
    } else {
      var target = this.players[targetID];
      var card = (player.private.hand.has(playerCardID) 
                    ? this.factory.get('game', playerCardID) 
                    : null);
      
      if (!target || !card || !(card instanceof S.PrivatePlayerActionCard)) {
        return false;
      } else {
        return (dryrun ? true : null);
      };
    };
  },
  
  doTargetMap : function(dryrun, playerID, cardID, posx, posy, flipped) {
    var player = this.players[playerID];
    
    if (!player) {
      return false;
    } else {
      var card = (player.private.hand.has(cardID) 
                    ? this.factory.get('game', cardID) 
                    : null);
                    
      if (!card || !(card instanceof S.MapCard)) {
        return false;
      } else {
        return card.execute(dryrun, this.map, posx, posy, flipped);
      };
    }; 
  },
  
  doHeal : function(dryrun, playerID, cards, targetCardID) {
    var player = this.players[playerID];
    
    if ( !player
      || !cards.length == this.opt.healDiscard
      || !player.private.hand.validateCards(cards))
    {
      return this.doDiscard(dryrun, playerID, cards);
    } else {
      return false;
    };
  }
});
/******************************************************************************/

/**
 * @FILE: client/ClientSaboteur.class.js
 */

var ClientSaboteur = Saboteur.extend({
  _className : 'ClientSaboteur',
  init : (function(){
    return function( target, options, cards ){
      if( !target || target.length == 0 ){
        Logger.warn( '[SaboteurClient.init] Invalid target', arguments );
        return null;
      };
      
      this._super( options, cards );
      
      $.extend($.expr[':'], {
        selected : function(el){
          return !!$(el).hasClass('selected');
        }
      });
      
      U.extend( this, {
        target    : target,
        map       : null,
        selected  : $()
      });
      
      createStructure.call(this);
      bindLiveEvents.call(this);
    };
    
    function bindLiveEvents(){
      // Select Card
      var self = this;
        
      // Target Map
      $('.'+SO.classes.map.table)
        .live('click.placeCard',function(){
          
        });
    };
    
    function createStructure(){
      this.structure  = {
        wrapper     : $(document.createElement('div')),
        map         : $(document.createElement('div')),
        players     : $(document.createElement('div')),
        hand        : $(document.createElement('div')),
        progressBar : $(document.createElement('div'))
      };
      
      this.structure.wrapper
        .addClass( SO.classes.main )
        .append( this.structure.progressBar, 
                this.structure.map, 
                this.structure.players, 
                this.structure.hand 
        );
        
      this.target.html( this.structure.wrapper );
      return this;
    };
  })(),

  createHand : function(){
    this.structure.hand
      .append( this.players[gameState.playerID].private.hand.toElement() );
    return this;
  },
  
  createMap : function(){
    var self = this;
    this.map = new ClientMap( this.factory, this.createMapOptions(false) );
    this.structure.map
      .append( this.map.toElement() )
      .addClass( SO.classes.map.main );
    return this;
  },
  
  preloadImages : function( callback ){
    callback = callback || function(){};
    var images = [];
    U.each( SO.images, function( k, v ){
      images.push( v.front_cover, v.back_cover );
    });
    var s = this.structure.progressBar.progressBar({
      title : 'loading...',
      max   : images.length
    });
    var self = this;
    P.multiLoad(images, function( image ){
      s.progressBar('increment');
      if( this._total == this._finished ){
        s.progressBar('setMessage', ['---- Image loading done ----']);
        s.progressBar('setTitle', ['now what?!']);
        callback.call( self );
      } else {
        s.progressBar('setMessage', [image.src]);
      }
    });
    return this;
  },
  
  setPlayers : function( players ){
    this.players = {};
    for( var i in players ){
      if( i === gameState.playerID ){
        this.players[ i ] = new ClientPlayer( players[i] );
      } else {
        //TODO: add support for other players
        continue;
        this.players[ i ] = new HiddenPlayer( players[i] );
      };
    };
    return this;
  }
  
});
/******************************************************************************/
