!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}};var n={},o=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?y:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",y="completed",d={};function v(){}function g(){}function m(){}var w={};u(w,i,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(P([])));b&&b!==r&&n.call(b,i)&&(w=b);var _=m.prototype=v.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=m,u(_,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(_),u(_,c,"Generator"),u(_,i,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var i="050776d92f59975128a30e8f83c93796";function a(t){return c.apply(this,arguments)}function c(){return(c=t(e)(t(n).mark((function e(r){var o,a,c;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(r),console.log(o),t.next=4,fetch(o);case 4:return a=t.sent,t.next=7,a.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function u(t){return s.apply(this,arguments)}function s(){return(s=t(e)(t(n).mark((function e(r){var o,a,c;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(i),t.next=3,fetch(o);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,t.abrupt("return",c);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=t(e)(t(n).mark((function e(){var r,o,a;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/trending/all/week?api_key=".concat(i),t.next=3,fetch(r);case 3:return o=t.sent,t.next=6,o.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function f(t){var e="",r=!0,n=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var c=i.value;console.log(c.id),e+='<div class="gallery__card">\n                          <img class="gallery__img" src="'.concat("https://image.tmdb.org/t/p/","w300").concat(c.poster_path,'" data-id="').concat(c.id,'" alt="" loading="lazy" />\n                          <div class="gallery__info">\n                            <h2 class="gallery__title">').concat(c.original_title,'</h2>\n                            <p class="gallery__text">').concat(c.release_date,"</p>                         \n                          </div>\n                       </div>")}}catch(t){n=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(n)throw o}}return e}function h(t){for(;t.hasChildNodes();)t.removeChild(t.firstChild)}var p=document.getElementById("search-form"),y=document.getElementById("gallery");(function(){return l.apply(this,arguments)})().then((function(t){y.insertAdjacentHTML("afterbegin",f(t.results)),console.log(t.results)})).catch((function(t){console.log("Ha ocurrido un error:",t)})),p.addEventListener("submit",(function(t){t.preventDefault();var e=p.searchQuery.value;console.log(e),a(e).then((function(t){console.log("Ejecutado"),console.log(t.results),0==t.results.length?console.log("No se encontraron resultados..."):(console.log(f(t.results)),h(y),y.insertAdjacentHTML("afterbegin",f(t.results)))})).catch((function(t){console.log("Ha ocurrido un error:",t)}))})),y.addEventListener("click",(function(t){t.preventDefault();var e=t.target.dataset.id;console.log(e),u().then((function(t){console.log(t)}))}))}();
//# sourceMappingURL=index.a47bd506.js.map