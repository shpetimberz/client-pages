(function(){"use strict";var n={1409:function(n,e,o){var t=o(9963),s=o(6252);function r(n,e,o,t,r,c){const i=(0,s.up)("Headernav"),l=(0,s.up)("lesson"),a=(0,s.up)("checkout");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i),r.showLessons?((0,s.wg)(),(0,s.j4)(l,{key:0,lessons:r.lessons,onObjectSent:c.handleObject,onShowCheckOut:c.showCheck},null,8,["lessons","onObjectSent","onShowCheckOut"])):(0,s.kq)("",!0),r.showLessons?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(a,{key:1,lessonscart:r.lessonscart,onShowCheckOut:c.showLesson,onObjectSent:c.removeObject},null,8,["lessonscart","onShowCheckOut","onObjectSent"]))],64)}o(7658);function c(n,e,o,t,r,c){return(0,s.wg)(),(0,s.iD)("h1",null,"My Application")}var i={name:"Header-nav"},l=o(3744);const a=(0,l.Z)(i,[["render",c]]);var u=a,h=o(3577);const p={id:"app"},w=(0,s._)("h2",null,"Lessons",-1),f=["onClick"];function d(n,e,o,t,r,c){return(0,s.wg)(),(0,s.iD)("div",p,[w,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.lessons,(n=>((0,s.wg)(),(0,s.iD)("div",{key:n.location,class:"mylessons"},[(0,s._)("ul",null,[(0,s._)("li",null," Topic: "+(0,h.zw)(n.topic),1),(0,s._)("li",null," Location: "+(0,h.zw)(n.location),1),(0,s._)("li",null," Price: "+(0,h.zw)(n.price),1)]),(0,s._)("button",{class:"inside",onClick:e=>c.addToCart(n)}," Add lesson to cart ",8,f)])))),128)),(0,s._)("button",{onClick:e[0]||(e[0]=(...n)=>c.showCheckOut&&c.showCheckOut(...n))}," cart ")])}var v={name:"lesson-page",props:{lessons:{type:Array,required:!0}},methods:{addToCart(n){this.$emit("object-sent",n)},showCheckOut(){this.$emit("showCheck-out",null)}}};const k=(0,l.Z)(v,[["render",d]]);var m=k;const O={id:"app"},b=(0,s._)("h2",null,"Shopping Cart",-1),C=["onClick"];function g(n,e,o,t,r,c){return(0,s.wg)(),(0,s.iD)("div",O,[b,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.lessonscart,((n,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:"mylessons"},[(0,s._)("ul",null,[(0,s._)("li",null," Topic: "+(0,h.zw)(n.topic),1),(0,s._)("li",null," Location: "+(0,h.zw)(n.location),1),(0,s._)("li",null," Price: "+(0,h.zw)(n.price),1)]),(0,s._)("button",{class:"insidecart",onClick:e=>c.removeFromCart(n)}," Remove lesson from cart ",8,C)])))),128)),(0,s._)("button",{onClick:e[0]||(e[0]=(...n)=>c.showCheckOut&&c.showCheckOut(...n))}," cart ")])}var y={name:"checkout-page",props:{lessonscart:{type:Array,required:!0}},methods:{showCheckOut(){this.$emit("showCheck-out",null)},removeFromCart(n){this.$emit("object-sent",n)}}};const j=(0,l.Z)(y,[["render",g]]);var _=j,L={name:"App",components:{Headernav:u,lesson:m,checkout:_},data(){return{lessons:[],lessonscart:[],showLessons:!0}},methods:{handleObject(n){this.lessonscart.push(n)},showCheck(){this.showLessons=!1},showLesson(){this.showLessons=!0},removeObject(n){this.lessonscart=this.lessonscart.filter((e=>e.topic!==n.topic||e.location!==n.location||e.price!==n.price))},async getLessons(){try{const n=await fetch("https://assignment-class3.herokuapp.com/lessons"),e=await n.json();this.lessons=e}catch(n){console.error(n)}}},created(){this.getLessons()}};const S=(0,l.Z)(L,[["render",r]]);var D=S;(0,t.ri)(D).mount("#app")}},e={};function o(t){var s=e[t];if(void 0!==s)return s.exports;var r=e[t]={exports:{}};return n[t](r,r.exports,o),r.exports}o.m=n,function(){var n=[];o.O=function(e,t,s,r){if(!t){var c=1/0;for(u=0;u<n.length;u++){t=n[u][0],s=n[u][1],r=n[u][2];for(var i=!0,l=0;l<t.length;l++)(!1&r||c>=r)&&Object.keys(o.O).every((function(n){return o.O[n](t[l])}))?t.splice(l--,1):(i=!1,r<c&&(c=r));if(i){n.splice(u--,1);var a=s();void 0!==a&&(e=a)}}return e}r=r||0;for(var u=n.length;u>0&&n[u-1][2]>r;u--)n[u]=n[u-1];n[u]=[t,s,r]}}(),function(){o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};o.O.j=function(e){return 0===n[e]};var e=function(e,t){var s,r,c=t[0],i=t[1],l=t[2],a=0;if(c.some((function(e){return 0!==n[e]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(l)var u=l(o)}for(e&&e(t);a<c.length;a++)r=c[a],o.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return o.O(u)},t=self["webpackChunkclient_pages"]=self["webpackChunkclient_pages"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(1409)}));t=o.O(t)})();
//# sourceMappingURL=app.7f9927c4.js.map