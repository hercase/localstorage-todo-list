!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=document.querySelector(".content__list").children[0];function o(){let e=localStorage.getItem("list-items"),t=[];return null!=e&&(t=JSON.parse(e)),t}function l(e){e.preventDefault();const t=document.querySelector(".content__form__input");let n=document.createElement("li"),l=document.createElement("button");if(n.className="content__list__item",""!=t.value){let e=!1;o().forEach(n=>{t.value===n&&(e=!0)}),e?(t.classList.add("error"),setTimeout(()=>{t.classList.remove("error")},2e3)):(!function(e){let t=o();t.push(e),localStorage.setItem("list-items",JSON.stringify(t))}(t.value),n.innerText=t.value,r.appendChild(n),l.className="content__list__delete",l.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>',n.appendChild(l),t.value="")}}const i=document.querySelector(".content__form").children[0],a=document.querySelector(".content__list").children[0],c=document.querySelector(".delete_all");i.addEventListener("submit",e=>l(e)),i.addEventListener("onkeyup",e=>l(e)),a.addEventListener("click",e=>function(e){if(e.stopPropagation(),e.preventDefault(),"content__list__delete"==e.target.className){let t=o();1==window.confirm("Are you sure to delete this item from the list?")&&(t.forEach((n,r)=>{e.target.parentElement.innerText===n&&t.splice(r,1)}),e.target.parentElement.remove(),localStorage.setItem("list-items",JSON.stringify(t)))}}(e)),document.addEventListener("DOMContentLoaded",e=>{o().forEach((e,t)=>{let n=document.createElement("li"),o=document.createElement("button");n.className="content__list__item",n.innerText=e,r.appendChild(n),o.className="content__list__delete",o.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>',n.appendChild(o)})}),c.addEventListener("click",e=>{1==window.confirm("Are you sure you want to delete all items?")&&(localStorage.clear(),r.innerHTML="")})}]);