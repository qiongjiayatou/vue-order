(function(e){function t(t){for(var s,n,l=t[0],i=t[1],d=t[2],u=0,m=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);c&&c(t);while(m.length)m.shift()();return a.push.apply(a,d||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,l=1;l<r.length;l++){var i=r[l];0!==o[i]&&(s=!1)}s&&(a.splice(t--,1),e=n(n.s=r[0]))}return e}var s={},o={app:0},a=[];function n(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=s,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/vue-order/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"33f4":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],n=r("2877"),l={},i=Object(n["a"])(l,o,a,!1,null,null,null),d=i.exports,c=r("8c4f"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex h-screen"},[r("div",{staticClass:"m-auto bg-white overflow-hidden shadow rounded-lg w-full md:w-1/3"},[r("div",{staticClass:"px-4 py-5 sm:p-6"},[r("Nav"),r("router-view")],1)])])},m=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"flex"},[r("ol",{staticClass:"bg-white rounded-md shadow px-6 flex space-x-4"},[r("li",{staticClass:"flex"},[r("div",{staticClass:"flex items-center"},[r("router-link",{staticClass:"ml-4 text-sm font-medium text-gray-500 pointer-events-none",attrs:{to:{name:"Delivery"}}},[e._v("Delivery")])],1)]),r("li",{staticClass:"flex"},[r("div",{staticClass:"flex items-center"},[r("svg",{staticClass:"flex-shrink-0 w-6 h-full text-gray-200",attrs:{viewBox:"0 0 24 44",preserveAspectRatio:"none",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[r("path",{attrs:{d:"M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"}})]),r("router-link",{staticClass:"ml-4 text-sm font-medium text-gray-500 pointer-events-none",attrs:{to:{name:"Payment"}}},[e._v("Payment")])],1)])])])},v=[],f={},h=Object(n["a"])(f,p,v,!1,null,null,null),y=h.exports,x={components:{Nav:y}},g=x,b=Object(n["a"])(g,u,m,!1,null,null,null),w=b.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex h-screen"},[r("div",{staticClass:"m-auto flex items-center justify-center bg-white overflow-hidden shadow rounded-lg h-80 w-full md:w-1/3"},[r("div",{staticClass:"px-4 py-5 sm:p-6"},[r("div",{staticClass:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"},[r("svg",{staticClass:"h-6 w-6 text-green-600",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),e._m(0)])])])},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-3 text-center sm:mt-5"},[r("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900",attrs:{id:"modal-title"}},[e._v(" Thank you! ")])])}],N={},k=Object(n["a"])(N,C,_,!1,null,null,null),P=k.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pt-8 text-left"},[e._m(0),r("form",{staticClass:"mt-6 grid grid-cols-2 gap-y-3 gap-x-4",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("div",{staticClass:"col-span-2"},[r("p",[e._v("Recipient")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.fullName,expression:"fullName"}],class:["shadow-sm block w-full sm:text-sm rounded-md",e.getError("fullName")?"border-red-300":"border-gray-300"],attrs:{type:"text",placeholder:"Full Name"},domProps:{value:e.fullName},on:{input:function(t){t.target.composing||(e.fullName=t.target.value)}}})]),r("div",{staticClass:"col-span-2 mt-4"},[r("p",[e._v("Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],class:["shadow-sm block w-full sm:text-sm rounded-md",e.getError("city")?"border-red-300":"border-gray-300"],attrs:{type:"text",placeholder:"City"},domProps:{value:e.city},on:{input:function(t){t.target.composing||(e.city=t.target.value)}}})]),r("div",{staticClass:"col-span-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.streetAddress,expression:"streetAddress"}],class:["shadow-sm block w-full sm:text-sm rounded-md",e.getError("streetAddress")?"border-red-300":"border-gray-300"],attrs:{type:"text",placeholder:"Street address"},domProps:{value:e.streetAddress},on:{input:function(t){t.target.composing||(e.streetAddress=t.target.value)}}})]),r("div",{staticClass:"col-span-1"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.country,expression:"country"}],class:["shadow-sm block w-full sm:text-sm rounded-md",e.getError("country")?"border-red-300":"border-gray-300"],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.country=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"0",selected:""}},[e._v("Country")]),r("option",{attrs:{value:"1"}},[e._v("Canada")]),r("option",{attrs:{value:"2"}},[e._v("Russia")]),r("option",{attrs:{value:"3"}},[e._v("United Kingdom")])])]),r("div",{staticClass:"col-span-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.postcode,expression:"postcode"}],class:["shadow-sm block w-full sm:text-sm rounded-md",e.getError("postcode")?"border-red-300":"border-gray-300"],attrs:{type:"text",placeholder:"Postal Code"},domProps:{value:e.postcode},on:{input:function(t){t.target.composing||(e.postcode=t.target.value)}}})]),r("button",{staticClass:"mt-4 px-4 py-2 border border-transparent text-center font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700",attrs:{type:"submit"}},[e._v(" Next ")])])])},O=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[e._v(" Delivery Information ")])])}],j=(r("7db0"),{data:function(){return{fullName:"",city:"",streetAddress:"",country:"",postcode:"",errors:[]}},methods:{onSubmit:function(){this.errors=[],this.validateForm(),this.errors.length?console.log(this.errors):(console.log("success"),this.$router.push({name:"Payment"}))},validateForm:function(){this.fullName||this.errors.push({key:"fullName",text:"Full Name cannot be empty"}),this.city||this.errors.push({key:"city",text:"City cannot be empty"}),this.streetAddress||this.errors.push({key:"streetAddress",text:"Street Address cannot be empty"}),this.country<=0&&this.errors.push({key:"country",text:"Country cannot be empty"}),this.postcode||this.errors.push({key:"postcode",text:"Post Code cannot be empty"})},getError:function(e){var t=this.errors.find((function(t){return t.key===e}));return!!t&&t.text}}}),X=j,A=Object(n["a"])(X,E,O,!1,null,null,null),S=A.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pt-8 text-left"},[e._m(0),r("form",{staticClass:"mt-6 grid grid-cols-2 gap-y-3 gap-x-4",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("div",{staticClass:"col-span-2"},[r("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"cardholder"}},[e._v("Cardholder Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.cardholder,expression:"cardholder"}],class:["shadow-sm block w-full sm:text-sm rounded-md",e.getError("cardholder")?"border-red-300":"border-gray-300"],attrs:{type:"text",id:"cardholder",placeholder:"Alison Green"},domProps:{value:e.cardholder},on:{input:function(t){t.target.composing||(e.cardholder=t.target.value)}}})]),r("div",{staticClass:"col-span-2"},[r("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"cardNumber"}},[e._v("Card Number")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.cardNumber,expression:"cardNumber"}],class:["shadow-sm block w-full sm:text-sm rounded-md",e.getError("cardNumber")?"border-red-300":"border-gray-300"],attrs:{type:"text",id:"cardNumber",placeholder:"XXXX XXXX XXXX XXXX"},domProps:{value:e.cardNumber},on:{input:function(t){t.target.composing||(e.cardNumber=t.target.value)}}})]),r("div",{staticClass:"col-span-1"},[r("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"expiry"}},[e._v("Expiry")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expiry,expression:"expiry"}],class:["shadow-sm block w-full sm:text-sm rounded-md",e.getError("expiry")?"border-red-300":"border-gray-300"],attrs:{type:"text",id:"expiry",placeholder:"03/24"},domProps:{value:e.expiry},on:{input:function(t){t.target.composing||(e.expiry=t.target.value)}}})]),r("div",{staticClass:"col-span-1"},[r("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"cvv"}},[e._v("CVV")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.cvv,expression:"cvv"}],class:["shadow-sm block w-full sm:text-sm rounded-md",e.getError("cvv")?"border-red-300":"border-gray-300"],attrs:{type:"text",id:"cvv",placeholder:"000"},domProps:{value:e.cvv},on:{input:function(t){t.target.composing||(e.cvv=t.target.value)}}})]),r("button",{staticClass:"mt-4 px-4 py-2 border border-transparent text-center font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700",attrs:{type:"submit"}},[e._v(" Next ")])])])},D=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[e._v("Payment")])])}],F={data:function(){return{cardholder:"",cardNumber:"",expiry:"",cvv:"",errors:[]}},methods:{onSubmit:function(){this.errors=[],this.validateForm(),this.errors.length?console.log(this.errors):this.$router.push({name:"Success"})},validateForm:function(){this.cardholder||this.errors.push({key:"cardholder",text:"Cardholder Name cannot be empty"}),this.cardNumber||this.errors.push({key:"cardNumber",text:"Card Number cannot be empty"}),this.expiry||this.errors.push({key:"expiry",text:"Expiry cannot be empty"}),this.cvv||this.errors.push({key:"cvv",text:"CVV Name cannot be empty"})},getError:function(e){var t=this.errors.find((function(t){return t.key===e}));return!!t&&t.text}}},M=F,T=Object(n["a"])(M,$,D,!1,null,null,null),V=T.exports;s["a"].use(c["a"]);var R=[{path:"/order",name:"OrderPage",component:w,redirect:{name:"Delivery"},children:[{path:"delivery",name:"Delivery",component:S},{path:"payment",name:"Payment",component:V}]},{path:"/success",name:"Success",component:P},{path:"*",redirect:{name:"OrderPage"}}],B=new c["a"]({mode:"history",base:"/vue-order/",routes:R,linkActiveClass:"text-gray-800"}),J=B;r("33f4");s["a"].config.productionTip=!1,new s["a"]({router:J,render:function(e){return e(d)}}).$mount("#app")}});
//# sourceMappingURL=app.6db652bd.js.map