var ECL=function(e){"use strict";var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))},n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))},i="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="Expected a function",l=NaN,c="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,v="object"==o(i)&&i&&i.Object===Object&&i,m="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,p=v||m||Function("return this")(),h=Object.prototype.toString,g=Math.max,y=Math.min,E=function(){return p.Date.now()};function b(e){var t=void 0===e?"undefined":o(e);return!!e&&("object"==t||"function"==t)}function S(e){return"symbol"==(void 0===e?"undefined":o(e))||!!(t=e)&&"object"==(void 0===t?"undefined":o(t))&&h.call(e)==c;var t}function _(e){if("number"==typeof e)return e;if(S(e))return l;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=u.test(e);return n||d.test(e)?f(e.slice(2),n?2:8):s.test(e)?l:+e}var k=function(e,t,n){var i,o,l,c,a,s,u=0,d=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function m(t){var n=i,r=o;return i=o=void 0,u=t,c=e.apply(r,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||f&&e-u>=l}function h(){var e,n,i=E();if(p(i))return S(i);a=setTimeout(h,(n=t-((e=i)-s),f?y(n,l-(e-u)):n))}function S(e){return a=void 0,v&&i?m(e):(i=o=void 0,c)}function k(){var e,n=E(),r=p(n);if(i=arguments,o=this,s=n,r){if(void 0===a)return u=e=s,a=setTimeout(h,t),d?m(e):c;if(f)return a=setTimeout(h,t),m(s)}return void 0===a&&(a=setTimeout(h,t)),c}return t=_(t)||0,b(n)&&(d=!!n.leading,l=(f="maxWait"in n)?g(_(n.maxWait)||0,t):l,v="trailing"in n?!!n.trailing:v),k.cancel=function(){void 0!==a&&clearTimeout(a),u=0,i=s=o=a=void 0},k.flush=function(){return void 0===a?c:S(E())},k},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))};var A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))},w=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.context,o=void 0===i?document:i,r=n.forceClose,l=void 0!==r&&r,c=n.closeSiblings,a=void 0!==c&&c,s=n.siblingsSelector,u=void 0===s?"[aria-controls][aria-expanded]":s;if(t){var d=document.getElementById(t.getAttribute("aria-controls"));if(d){var f=!0===l||"true"===t.getAttribute("aria-expanded");if(t.setAttribute("aria-expanded",!f),d.setAttribute("aria-hidden",f),!0===a)Array.prototype.slice.call(o.querySelectorAll(u)).filter(function(e){return e!==t}).forEach(function(t){e(t,{context:o,forceClose:!0})})}}},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))};function x(e,t){var n=void 0!==t?t:{};this.version="2.0.13",this.userAgent=window.navigator.userAgent||"no `userAgent` provided by the browser",this.props={noStyles:n.noStyles||!1,stickyBitStickyOffset:n.stickyBitStickyOffset||0,parentClass:n.parentClass||"js-stickybit-parent",scrollEl:n.scrollEl||window,stickyClass:n.stickyClass||"js-is-sticky",stuckClass:n.stuckClass||"js-is-stuck",useStickyClasses:n.useStickyClasses||!1,verticalPosition:n.verticalPosition||"top"};var i=this.props;i.positionVal=this.definePosition()||"fixed";var o=i.verticalPosition,r=i.noStyles,l=i.positionVal;this.els="string"==typeof e?document.querySelectorAll(e):e,"length"in this.els||(this.els=[this.els]),this.instances=[];for(var c=0;c<this.els.length;c+=1){var a=this.els[c],s=a.style;if("top"!==o||r||(s[o]=i.stickyBitStickyOffset+"px"),"fixed"!==l&&!1===i.useStickyClasses)s.position=l;else{"fixed"!==l&&(s.position=l);var u=this.addInstance(a,i);this.instances.push(u)}}return this}x.prototype.definePosition=function(){for(var e=["","-o-","-webkit-","-moz-","-ms-"],t=document.head.style,n=0;n<e.length;n+=1)t.position=e[n]+"sticky";var i="fixed";return void 0!==t.position&&(i=t.position),t.position="",i},x.prototype.addInstance=function(e,t){var n=this,i={el:e,parent:e.parentNode,props:t},o=i.props;i.parent.className+=" "+t.parentClass;var r=o.scrollEl;return i.isWin=r===window,i.isWin||(r=this.getClosestParent(i.el,r)),this.computeScrollOffsets(i),i.state="default",i.stateContainer=function(){n.manageState(i)},r.addEventListener("scroll",i.stateContainer),i},x.prototype.getClosestParent=function(e,t){var n=document.querySelector(t),i=e;if(i.parentElement===n)return n;for(;i.parentElement!==n;)i=i.parentElement;return n},x.prototype.computeScrollOffsets=function(e){var t=e,n=t.props,i=t.parent,o=t.isWin,r=0,l=i.getBoundingClientRect().top;return o||"fixed"!==n.positionVal||(r=n.scrollEl.getBoundingClientRect().top,l=i.getBoundingClientRect().top-r),t.offset=r+n.stickyBitStickyOffset,t.stickyStart=l-t.offset,t.stickyStop=l+i.offsetHeight-(t.el.offsetHeight+t.offset),t},x.prototype.toggleClasses=function(e,t,n){var i=e,o=i.className.split(" ");n&&-1===o.indexOf(n)&&o.push(n);var r=o.indexOf(t);-1!==r&&o.splice(r,1),i.className=o.join(" ")},x.prototype.manageState=function(e){var t=e,n=t.el,i=t.props,o=t.state,r=t.stickyStart,l=t.stickyStop,c=n.style,a=i.noStyles,s=i.positionVal,u=i.scrollEl,d=i.stickyClass,f=i.stuckClass,v=i.verticalPosition,m=u.requestAnimationFrame;t.isWin&&void 0!==m||(m=function(e){e()});var p=this.toggleClasses,h=t.isWin?u.scrollY||u.pageYOffset:u.scrollTop,g=h<=r&&"sticky"===o,y=h>=l&&"sticky"===o;return h>r&&h<l&&("default"===o||"stuck"===o)?(t.state="sticky",m(function(){p(n,f,d),c.position=s,a||(c.bottom="",c[v]=i.stickyBitStickyOffset+"px")})):g?(t.state="default",m(function(){p(n,d),"fixed"===s&&(c.position="")})):y&&(t.state="stuck",m(function(){p(n,d,f),"fixed"!==s||a||(c.top="",c.bottom="0",c.position="absolute")})),t},x.prototype.removeInstance=function(e){var t=e.el,n=e.props,i=this.toggleClasses;t.style.position="",t.style[n.verticalPosition]="",i(t,n.stickyClass),i(t,n.stuckClass),i(t.parentNode,n.parentClass)},x.prototype.cleanup=function(){for(var e=0;e<this.instances.length;e+=1){var t=this.instances[e];t.props.scrollEl.removeEventListener("scroll",t.stateContainer),this.removeInstance(t)}this.manageState=!1,this.instances=[]};var T,O=(function(e,t){var n,o;n=void 0!==i?i:i.window||i.global,o=function(e){var t,n,i,o,r,l,c={},a="querySelector"in document&&"addEventListener"in e&&"classList"in document.createElement("_"),s=[],u={selector:"[data-gumshoe] a",selectorHeader:"[data-gumshoe-header]",container:e,offset:0,activeClass:"active",scrollDelay:!1,callback:function(){}},d=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(n,e[i],i,e);else for(var o=0,r=e.length;o<r;o++)t.call(n,e[o],o,e)},f=function(e){var n=0;if(e.offsetParent)do{n+=e.offsetTop,e=e.offsetParent}while(e);else n=e.offsetTop;return(n=n-r-t.offset)>=0?n:0};c.setDistances=function(){var e;i=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),r=o?(e=o,Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)+f(o)):0,d(s,function(e){e.distance=f(e.target)}),s.sort(function(e,t){return e.distance>t.distance?-1:e.distance<t.distance?1:0})};var v=function(){l&&(l.nav.classList.remove(t.activeClass),l.parent&&l.parent.classList.remove(t.activeClass))},m=function(e){v(),e.nav.classList.add(t.activeClass),e.parent&&e.parent.classList.add(t.activeClass),t.callback(e),l={nav:e.nav,parent:e.parent}};c.getCurrentNav=function(){var n,o,r=e.pageYOffset;if(e.innerHeight+r>=i&&(n=s[0].target,(o=n.getBoundingClientRect()).top>=0&&o.left>=0&&o.bottom<=(e.innerHeight||document.documentElement.clientHeight)&&o.right<=(e.innerWidth||document.documentElement.clientWidth)))return m(s[0]),s[0];for(var l=0,c=s.length;l<c;l++){var a=s[l];if(a.distance<=r)return m(a),a}v(),t.callback()};c.destroy=function(){t&&(t.container.removeEventListener("resize",h,!1),t.container.removeEventListener("scroll",h,!1),s=[],t=null,n=null,i=null,o=null,r=null,l=null,null)};var p=function(e){window.clearTimeout(n),n=setTimeout(function(){c.setDistances(),c.getCurrentNav()},66)},h=function(e){n||(n=setTimeout(function(){n=null,"scroll"===e.type&&c.getCurrentNav(),"resize"===e.type&&(c.setDistances(),c.getCurrentNav())},66))};return c.init=function(e){var n;a&&(c.destroy(),t=function e(){var t={},n=!1,i=0,o=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],i++);i<o;i++)!function(i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n&&"[object Object]"===Object.prototype.toString.call(i[o])?t[o]=e(!0,t[o],i[o]):t[o]=i[o])}(arguments[i]);return t}(u,e||{}),o=document.querySelector(t.selectorHeader),n=document.querySelectorAll(t.selector),d(n,function(e){if(e.hash){var t=document.querySelector(e.hash);t&&s.push({nav:e,target:t,parent:"li"===e.parentNode.tagName.toLowerCase()?e.parentNode:null,distance:0})}}),0!==s.length&&(d(s,function(e){e.nav.classList.contains(t.activeClass)&&(l={nav:e.nav,parent:e.parent})}),c.setDistances(),c.getCurrentNav(),t.container.addEventListener("resize",h,!1),t.scrollDelay?t.container.addEventListener("scroll",p,!1):t.container.addEventListener("scroll",h,!1)))},c},e.exports=o(n)}(T={exports:{}},T.exports),T.exports),N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))},D=function(e,t){return function(n){if(e&&e.hasAttribute("aria-haspopup")){var i=e.getAttribute("aria-haspopup");""!==i&&"true"!==i||(n.preventDefault(),w(e,{context:t,closeSiblings:!0}))}}};var j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))};return e.accordions=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.selector,i=void 0===n?".ecl-accordion":n,o=e.headerSelector,r=void 0===o?".ecl-accordion__header":o;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var l=t(i);function c(e){if("true"===e.getAttribute("aria-expanded"))return t=e,n=document.getElementById(t.getAttribute("aria-controls")),t.setAttribute("aria-expanded","false"),void n.setAttribute("aria-hidden","true");var t,n,i,o;i=e,o=document.getElementById(i.getAttribute("aria-controls")),i.setAttribute("tabindex",0),i.setAttribute("aria-expanded","true"),o.setAttribute("aria-hidden","false")}function a(e,t){e[t].focus()}function s(e){c(e.currentTarget)}function u(e){var n=e.currentTarget,i=e.metaKey||e.altKey,o=n.parentNode.parentNode,l=t(r,o),s=[].indexOf.call(l,n);if(!i)switch(e.keyCode){case 13:case 32:c(n),e.preventDefault();break;case 37:case 38:a(l,0===s?l.length-1:s-1),e.preventDefault();break;case 39:case 40:a(l,s<l.length-1?s+1:0),e.preventDefault()}}function d(){l.length&&l.forEach(function(e){t(r,e).forEach(function(e){e.addEventListener("click",s),e.addEventListener("keydown",u)})})}return d(),{init:d,destroy:function(){l.forEach(function(e){t(r,e).forEach(function(e){e.removeEventListener("click",s),e.removeEventListener("keydown",u)})})}}},e.carousels=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).selectorId,t=void 0===e?"ecl-carousel":e;if(!("querySelector"in document&&"addEventListener"in window))return null;var i=0,o=document.getElementById(t),r=n(".ecl-carousel__item",o),l=o.querySelector(".ecl-carousel__list");function c(e){r[i].classList.remove("ecl-carousel__item--showing"),i=(e+r.length)%r.length,r[i].classList.add("ecl-carousel__item--showing")}function a(){var e=o.querySelector(".ecl-carousel__item").offsetWidth,t="translate3d("+-i*e+"px, 0, 0)";l.style.MozTransform=t,l.style.msTransform=t,l.style.OTransform=t,l.style.WebkitTransform=t,l.style.transform=t}function s(){o.querySelector(".ecl-carousel__meta-slide").textContent=i+1+" / "+r.length}function u(){var e=n("[data-image]");e&&e.forEach(function(e){return e.style.display="none"}),o.querySelector('[data-image="'+i+'"]').style.display="block"}function d(){c(i-1),a(),s(),u()}function f(){c(i+1),a(),s(),u()}var v=function(){return k(function(){a()},100,{maxWait:300})()};function m(){var e,t;(e=document.createElement("ul")).className="ecl-carousel__controls ecl-list--unstyled",e.innerHTML='\n      <li>\n        <button type="button" class="ecl-icon ecl-icon--left ecl-carousel__button ecl-carousel__button--previous">\n          <span class="ecl-u-sr-only">Previous</span></button>\n      </li>\n      <li>\n        <button type="button" class="ecl-icon ecl-icon--right ecl-carousel__button ecl-carousel__button--next">\n          <span class="ecl-u-sr-only">Next</span>\n        </button>\n      </li>\n    ',e.querySelector(".ecl-carousel__button--previous",".ecl-carousel__controls").addEventListener("click",d),e.querySelector(".ecl-carousel__button--next",".ecl-carousel__controls").addEventListener("click",f),o.querySelector(".ecl-carousel__list-wrapper").appendChild(e),(t=document.createElement("div")).setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true"),t.classList.add("ecl-carousel__meta-slide"),o.querySelector(".ecl-carousel__live-region").appendChild(t),c(0),s(),u(),window.addEventListener("resize",v)}return m(),{init:m,destroy:function(){var e,t;e=o.querySelector(".ecl-carousel__controls"),o.querySelector(".ecl-carousel__list-wrapper").removeChild(e),t=o.querySelector(".ecl-carousel__meta-slide"),o.querySelector(".ecl-carousel__live-region").removeChild(t),window.removeEventListener("resize",v)}}},e.contextualNavs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.selector,n=void 0===t?".ecl-context-nav":t,i=e.buttonSelector,o=void 0===i?".ecl-context-nav__more":i,r=e.hiddenElementsSelector,l=void 0===r?".ecl-context-nav__item--over-limit":r,c=e.classToRemove,a=void 0===c?"ecl-context-nav__item--over-limit":c,s=e.context,u=void 0===s?document:s;L(n,u).forEach(function(e){var t=u.querySelector(o);t&&t.addEventListener("click",function(){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.classToRemove,o=void 0===i?"ecl-context-nav__item--over-limit":i,r=n.hiddenElementsSelector,l=void 0===r?".ecl-context-nav__item--over-limit":r,c=n.context,a=void 0===c?document:c;e&&(L(l,a).forEach(function(e){e.classList.remove(o)}),t.parentNode.removeChild(t))}(e,t,{classToRemove:a,hiddenElementsSelector:l})})})},e.dropdown=function(e){var t=Array.prototype.slice.call(document.querySelectorAll(e));document.addEventListener("click",function(n){t.forEach(function(t){var i,o;if(i=t,o=n.target,!(i===o||16&i.compareDocumentPosition(o))){var r=document.querySelector(e+" > [aria-expanded=true]"),l=document.querySelector(e+" > [aria-hidden=false]");l&&(r.setAttribute("aria-expanded",!1),l.setAttribute("aria-hidden",!0))}})})},e.dialogs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.triggerElementsSelector,n=void 0===t?"[data-ecl-dialog]":t,i=e.dialogWindowId,o=void 0===i?"ecl-dialog":i,r=e.dialogOverlayId,l=void 0===r?"ecl-overlay":r;if(!("querySelector"in document&&"addEventListener"in window))return null;var c=A(n),a=document.getElementById(o),s=document.getElementById(l);if(!s){var u=document.createElement("div");u.setAttribute("id","ecl-overlay"),u.setAttribute("class","ecl-dialog__overlay"),u.setAttribute("aria-hidden","true"),document.body.appendChild(u),s=u}var d=[].slice.call(A('\n        a[href],\n        area[href],\n        input:not([disabled]),\n        select:not([disabled]),\n        textarea:not([disabled]),\n        button:not([disabled]),\n        [tabindex="0"]\n      ',a)),f=null,v=d[0],m=d[d.length-1];function p(e){e.preventDefault(),a.setAttribute("aria-hidden",!0),s.setAttribute("aria-hidden",!0),f&&f.focus(),document.querySelector("body").classList.remove("ecl-u-disablescroll")}function h(e){switch(e.keyCode){case 9:if(1===d.length){e.preventDefault();break}e.shiftKey?document.activeElement===v&&(e.preventDefault(),m.focus()):document.activeElement===m&&(e.preventDefault(),v.focus());break;case 27:p()}}function g(e){e.preventDefault(),a.setAttribute("aria-hidden",!1),s.setAttribute("aria-hidden",!1),f=document.activeElement,v.focus(),s.addEventListener("click",p),a.addEventListener("keydown",h),document.querySelector("body").classList.add("ecl-u-disablescroll")}function y(){c.length&&(c.forEach(function(e){return e.addEventListener("click",g)}),A(".ecl-message__dismiss").forEach(function(e){e.addEventListener("click",p)}))}return y(),{init:y,destroy:function(){c.forEach(function(e){return e.removeEventListener("click",g)}),A(".ecl-message__dismiss").forEach(function(e){e.removeEventListener("click",p)})}}},e.toggleExpandable=w,e.initExpandables=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[aria-controls][aria-expanded]",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;Array.prototype.slice.call(t.querySelectorAll(e)).forEach(function(e){return e.addEventListener("click",function(n){w(e,{context:t}),n.preventDefault()})})},e.fileUploads=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.selector,n=void 0===t?".ecl-file-upload":t,i=e.inputSelector,o=void 0===i?".ecl-file-upload__input":i,r=e.valueSelector,l=void 0===r?".ecl-file-upload__value":r,c=e.browseSelector,a=void 0===c?".ecl-file-upload__browse":c;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var s=C(n);function u(e){"files"in e.target&&C(l,e.target.parentNode).forEach(function(t){!function(e,t){if(0!==t.length){for(var n="",i=0;i<t.length;i+=1){var o=t[i];"name"in o&&(i>0&&(n+=", "),n+=o.name)}e.innerHTML=n}}(t,e.target.files)})}function d(e){var t=e.metaKey||e.altKey;C(o,e.target.parentNode).forEach(function(n){if(!t)switch(e.keyCode){case 13:case 32:e.preventDefault(),n.click()}})}function f(){s.length&&s.forEach(function(e){var t;C(o,t=e).forEach(function(e){e.addEventListener("change",u)}),C(a,t).forEach(function(e){e.addEventListener("keydown",d)})})}return f(),{init:f,destroy:function(){s.forEach(function(e){var t;C(o,t=e).forEach(function(e){e.removeEventListener("change",u)}),C(a,t).forEach(function(e){e.removeEventListener("keydown",d)})})}}},e.eclLangSelectPages=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.selector,n=void 0===t?".ecl-lang-select-page":t,i=e.toggleClass,o=void 0===i?"ecl-lang-select-page--dropdown":i,r=e.listSelector,l=void 0===r?".ecl-lang-select-page__list":r,c=e.dropdownSelector,a=void 0===c?".ecl-lang-select-page__dropdown":c,s=e.dropdownOnChange,u=void 0===s?void 0:s;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var d=q(n);function f(e){if(!e)return null;var t=q(l,e)[0];return e.classList.contains(o)?q(a,e)[0].offsetLeft+t.offsetWidth<e.offsetWidth&&e.classList.remove(o):t&&t.offsetLeft+t.offsetWidth>e.offsetWidth&&e.classList.add(o),!0}return d.forEach(function(e){if(f(e),u){var t=q(a,e)[0];t&&t.addEventListener("change",u)}}),void window.addEventListener("resize",k(function(){d.forEach(f)},100,{maxWait:300}))},e.initMessages=function(){Array.prototype.slice.call(document.getElementsByClassName("ecl-message__dismiss")).forEach(function(e){return e.addEventListener("click",function(){e.parentElement.setAttribute("aria-hidden",!0)})})},e.navigationInpages=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stickySelector,n=void 0===t?".ecl-navigation-inpage":t,i=e.spySelector,o=void 0===i?".ecl-navigation-inpage__link":i,r=e.spyClass,l=void 0===r?"ecl-navigation-inpage__link--is-active":r,c=e.spyTrigger,a=void 0===c?".ecl-navigation-inpage__trigger":c,s=e.spyOffset,u=void 0===s?20:s;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;function d(){new x(n,{useStickyClasses:!0})}function f(){d(),O.init({selector:o,activeClass:l,offset:u,callback:function(e){e&&(document.querySelector(a).innerHTML=e.nav.innerHTML)}})}return f(),{init:f}},e.megamenu=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.selector,n=void 0===t?".ecl-navigation-menu":t,i=e.toggleSelector,o=void 0===i?".ecl-navigation-menu__toggle":i,r=e.listSelector,l=void 0===r?".ecl-navigation-menu__root":r,c=e.linkSelector,a=void 0===c?".ecl-navigation-menu__link":c;N(n).forEach(function(e){var t=e.querySelector(o);t&&t.addEventListener("click",function(){return w(t,{context:e})});var n=e.querySelector(l);N(a,n).forEach(function(e){var t,i;e.addEventListener("click",D(e,n)),e.addEventListener("keydown",(t=e,i=n,function(e){var n=t.parentElement,o=n.previousElementSibling||n.parentElement.lastElementChild,r=n.nextElementSibling||n.parentElement.firstElementChild;if(!e.metaKey&&!e.altKey)switch(e.keyCode){case 13:case 32:D(e.currentTarget,i)(e);break;case 37:case 38:e.preventDefault(),o.querySelector("a").focus();break;case 39:case 40:e.preventDefault(),r.querySelector("a").focus()}}))})})},e.eclTables=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||document.getElementsByClassName("ecl-table--responsive");[].forEach.call(e,function(e){for(var t=[],n="",i=0,o=[],r=e.querySelectorAll("tbody tr"),l=e.querySelectorAll("thead tr th"),c=e.querySelectorAll("thead tr")[0].querySelectorAll("th").length-1,a=e.querySelectorAll("tbody tr")[0].querySelectorAll("td").length,s=-1,u=0;u<l.length;u+=1)l[u].getAttribute("colspan")&&(s=u),t[u]=[],t[u]=l[u].textContent;if(-1!==s){n=t.splice(s,1),i=s,o=e.querySelectorAll("th[colspan]")[0].getAttribute("colspan");for(var d=0;d<o;d+=1)t.splice(i+d,0,t[c+d]),t.splice(c+1+d,1)}[].forEach.call(r,function(e){for(var i=0;i<a;i+=1)if(""===t[i]||" "===t[i]?e.querySelectorAll("td")[i].setAttribute("class","ecl-table__heading"):e.querySelectorAll("td")[i].setAttribute("data-th",t[i]),-1!==s){var r=e.querySelectorAll("td")[s];r.setAttribute("class","ecl-table__group-label"),r.setAttribute("data-th-group",n);for(var l=1;l<o;l+=1)e.querySelectorAll("td")[s+l].setAttribute("class","ecl-table__group_element")}})})},e.tabs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.selector,n=void 0===t?".ecl-tabs":t,i=e.tablistSelector,o=void 0===i?".ecl-tabs__tablist":i,r=e.tabpanelSelector,l=void 0===r?".ecl-tabs__tabpanel":r,c=e.tabelementsSelector,a=void 0===c?o+" li":c;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var s=j(n);function u(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=j(o+" li",e.parentElement.parentElement),i=j(l,e.parentElement.parentElement);n.forEach(function(e){e.setAttribute("tabindex",-1),e.removeAttribute("aria-selected")}),i.forEach(function(e){e.setAttribute("aria-hidden","true")}),e.setAttribute("tabindex",0),e.setAttribute("aria-selected","true"),t&&e.focus(),document.getElementById(e.getAttribute("aria-controls")).removeAttribute("aria-hidden")}function d(e){u(e.currentTarget),e.preventDefault()}function f(e){var t=e.currentTarget,n=t.previousElementSibling||t.parentElement.lastElementChild,i=t.nextElementSibling||t.parentElement.firstElementChild;if(!e.metaKey&&!e.altKey)switch(e.keyCode){case 37:case 38:u(n),e.preventDefault();break;case 39:case 40:u(i),e.preventDefault()}}function v(e){j(a,e).forEach(function(e){e.addEventListener("click",d),e.addEventListener("keydown",f)})}function m(e){j(a,e).forEach(function(e){e.removeEventListener("click",d),e.removeEventListener("keydown",f)})}function p(){s.forEach(v)}return p(),{init:p,destroy:function(){s.forEach(m)}}},e.timelines=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.selector,n=void 0===t?".ecl-timeline":t,i=e.buttonSelector,o=void 0===i?".ecl-timeline__button":i,r=e.hiddenElementsSelector,l=void 0===r?".ecl-timeline__item--over-limit":r,c=e.classToRemove,a=void 0===c?"ecl-timeline__item--over-limit":c,s=e.context,u=void 0===s?document:s;Array.prototype.slice.call(u.querySelectorAll(n)).forEach(function(e){var t=u.querySelector(o);t&&t.addEventListener("click",function(){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.classToRemove,o=void 0===i?"ecl-timeline__item--over-limit":i,r=n.hiddenElementsSelector,l=void 0===r?".ecl-timeline__item--over-limit":r;e&&(Array.prototype.slice.call(e.querySelectorAll(l)).forEach(function(e){e.classList.remove(o)}),t.parentNode.removeChild(t))}(e,t,{classToRemove:a,hiddenElementsSelector:l})})})},e.contentSlider=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.contentSliderSelector,n=void 0===t?".ema-content-slider":t,i=e.listItemSelector,o=void 0===i?".ema-content-slider .ecl-list-item.ema-content-slider__list-item--default":i,r=e.listItemActiveClass,l=void 0===r?"ema-content-slider__list-item--active":r,c=e.listItemHighlightSelector,a=void 0===c?".ema-content-slider .ecl-list-item--highlight.ema-content-slider__list-item--highlight":c;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;function s(){B(o).forEach(function(e){e.classList.remove(l)}),B(a).forEach(function(e){e.setAttribute("aria-hidden",!0)})}function u(e){s();var t=document.getElementById(e.getAttribute("aria-controls"));e.classList.add(l),t.setAttribute("aria-hidden","false")}function d(e){e.preventDefault();var t,n=e.currentTarget;t=n,"true"===document.getElementById(t.getAttribute("aria-controls")).getAttribute("aria-hidden")&&u(n)}var f=B(n);function v(){f.length&&f.forEach(function(e){B(o,e).forEach(function(e){e.addEventListener("click",d)})}),s(),u(document.querySelectorAll(o)[0])}return v(),{init:v,destroy:function(){f.length&&f.forEach(function(e){B(o,e).forEach(function(e){e.removeEventListener("click",d)})})}}},e.ratingForm=function(){if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var e=B(".ema-rating__stars .ema-rating__star"),t=function(e){var t=e.currentTarget.parentElement.parentElement.parentElement.parentElement.getAttribute("aria-controls");B("#"+t)[0].removeAttribute("aria-hidden")},n=function(){e.length&&e.forEach(function(e){e.addEventListener("click",t)})};return n(),{init:n,destroy:function(){e.length&&e.forEach(function(e){e.removeEventListener("click",t)})}}},e}({});