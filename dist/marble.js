!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){var o,r;function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(i,s){"object"===c(e)&&void 0!==t?t.exports=s():void 0===(r="function"==typeof(o=s)?o.call(e,n,e,t):o)||(t.exports=r)}(0,(function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),r={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_poster:"poster",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},c=function(t,e){var n,o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)},a=function(t,e){return t.getAttribute("data-"+e)},u=function(t,e,n){var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},l=function(t){return"true"===a(t,"was-processed")},h=function(t,e){return u(t,"ll-timeout",e)},d=function(t){return a(t,"ll-timeout")},f=function(t,e,n,o){t&&(void 0===o?void 0===n?t(e):t(e,n):t(e,n,o))},p=function(t,e){t._loadingCount+=e,0===t._elements.length&&0===t._loadingCount&&f(t._settings.callback_finish,t)},_=function(t){for(var e,n=[],o=0;e=t.children[o];o+=1)"SOURCE"===e.tagName&&n.push(e);return n},g=function(t,e,n){n&&t.setAttribute(e,n)},v=function(t,e){g(t,"sizes",a(t,e.data_sizes)),g(t,"srcset",a(t,e.data_srcset)),g(t,"src",a(t,e.data_src))},b={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&_(n).forEach((function(t){v(t,e)})),v(t,e)},IFRAME:function(t,e){g(t,"src",a(t,e.data_src))},VIDEO:function(t,e){_(t).forEach((function(t){g(t,"src",a(t,e.data_src))})),g(t,"poster",a(t,e.data_poster)),g(t,"src",a(t,e.data_src)),t.load()}},m=function(t,e){o?t.classList.add(e):t.className+=(t.className?" ":"")+e},y=function(t,e){o?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},w=function(t,e,n){t.addEventListener(e,n)},E=function(t,e,n){t.removeEventListener(e,n)},I=function(t,e,n){E(t,"load",e),E(t,"loadeddata",e),E(t,"error",n)},O=function(t,e,n){var o=n._settings,r=e?o.class_loaded:o.class_error,i=e?o.callback_loaded:o.callback_error,s=t.target;y(s,o.class_loading),m(s,r),f(i,s,n),p(n,-1)},R=["IMG","IFRAME","VIDEO"],T=function(t,e){var n=e._observer;M(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},k=function(t){var e=d(t);e&&(clearTimeout(e),h(t,null))},M=function(t,e,n){var o=e._settings;!n&&l(t)||(R.indexOf(t.tagName)>-1&&(function(t,e){var n=function n(r){O(r,!0,e),I(t,n,o)},o=function o(r){O(r,!1,e),I(t,n,o)};!function(t,e,n){w(t,"load",e),w(t,"loadeddata",e),w(t,"error",n)}(t,n,o)}(t,e),m(t,o.class_loading)),function(t,e){var n,o,r=e._settings,i=t.tagName,s=b[i];if(s)return s(t,r),p(e,1),void(e._elements=(n=e._elements,o=t,n.filter((function(t){return t!==o}))));!function(t,e){var n=a(t,e.data_src),o=a(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),o&&(t.style.backgroundImage=o)}(t,r)}(t,e),function(t){u(t,"was-processed","true")}(t),f(o.callback_reveal,t,e),f(o.callback_set,t,e))},L=function(t){return!!n&&(t._observer=new IntersectionObserver((function(e){e.forEach((function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e,n){var o=n._settings;f(o.callback_enter,t,e,n),o.load_delay?function(t,e){var n=e._settings.load_delay,o=d(t);o||(o=setTimeout((function(){T(t,e),k(t)}),n),h(t,o))}(t,n):T(t,n)}(e.target,e,t):function(t,e,n){var o=n._settings;f(o.callback_exit,t,e,n),o.load_delay&&k(t)}(e.target,e,t)}))}),{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},A=["IMG","IFRAME"],x=function(t,e){return function(t){return t.filter((function(t){return!l(t)}))}((n=t||function(t){return t.container.querySelectorAll(t.elements_selector)}(e),Array.prototype.slice.call(n)));var n},S=function(e,n){var o;this._settings=function(t){return s({},r,t)}(e),this._loadingCount=0,L(this),this.update(n),o=this,t&&window.addEventListener("online",(function(t){!function(t){var e=t._settings;i(e.container.querySelectorAll("."+e.class_error)).forEach((function(t){y(t,e.class_error),function(t){u(t,"was-processed",null)}(t)})),t.update()}(o)}))};return S.prototype={update:function(t){var n,o=this,r=this._settings;this._elements=x(t,r),!e&&this._observer?(function(t){return t.use_native&&"loading"in HTMLImageElement.prototype}(r)&&((n=this)._elements.forEach((function(t){-1!==A.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),M(t,n))})),this._elements=x(t,r)),this._elements.forEach((function(t){o._observer.observe(t)}))):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach((function(e){t._observer.unobserve(e)})),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){M(t,this,e)},loadAll:function(){var t=this;this._elements.forEach((function(e){T(e,t)}))}},t&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)c(t,n);else c(t,e)}(S,window.lazyLoadOptions),S}))},function(t,e,n){"use strict";n.r(e);n(2);n(4)},function(t,e,n){},function(t,e){!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=window.document,e=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},o.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(r(window,"resize",this._checkForIntersections,!0),r(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,i(window,"resize",this._checkForIntersections,!0),i(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var r=o.element,i=s(r),c=this._rootContainsTarget(r),a=o.entry,u=t&&c&&this._computeTargetAndRootIntersection(r,e),l=o.entry=new n({time:window.performance&&performance.now&&performance.now(),target:r,boundingClientRect:i,rootBounds:e,intersectionRect:u});a?t&&c?this._hasCrossedThreshold(a,l)&&this._queuedEntries.push(l):a&&a.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(e,n){if("none"!=window.getComputedStyle(e).display){for(var o,r,i,c,u,l,h,d,f=s(e),p=a(e),_=!1;!_;){var g=null,v=1==p.nodeType?window.getComputedStyle(p):{};if("none"==v.display)return;if(p==this.root||p==t?(_=!0,g=n):p!=t.body&&p!=t.documentElement&&"visible"!=v.overflow&&(g=s(p)),g&&(o=g,r=f,i=void 0,c=void 0,u=void 0,l=void 0,h=void 0,d=void 0,i=Math.max(o.top,r.top),c=Math.min(o.bottom,r.bottom),u=Math.max(o.left,r.left),l=Math.min(o.right,r.right),d=c-i,!(f=(h=l-u)>=0&&d>=0&&{top:i,bottom:c,left:u,right:l,width:h,height:d})))break;p=a(p)}return f}},o.prototype._getRootRect=function(){var e;if(this.root)e=s(this.root);else{var n=t.documentElement,o=t.body;e={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},o.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},o.prototype._rootIsInDom=function(){return!this.root||c(t,this.root)},o.prototype._rootContainsTarget=function(e){return c(this.root||t,e)},o.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},o.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=o,window.IntersectionObserverEntry=n}function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function o(t,e){var n,o,r,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout((function(){n(),r=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function r(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function i(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function s(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t,e){for(var n=e;n;){if(n==t)return!0;n=a(n)}return!1}function a(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}()},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o);n(3),exports.global=function(){!function(){const t=new r.a({elements_selector:".lazy",callback_loaded:t=>{t.dispatchEvent(new CustomEvent("image-loaded",{bubbles:!0}))}});document.querySelector("body").addEventListener("flickity-change",()=>{t.update()}),window.addEventListener("scroll",(function e(){t.loadAll(),window.removeEventListener("scroll",e,!0)}),!0)}()}}]);
//# sourceMappingURL=marble.js.map