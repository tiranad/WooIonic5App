(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+NA5":function(t,n,e){"use strict";e.r(n),e.d(n,"ContactUsPageRoutingModule",(function(){return a}));var o=e("tyNb"),i=e("fXoL"),r=e("TEn/"),c=e("np0s");const s=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["app-contact-us"]],decls:16,vars:0,consts:[["title","Contact us"],[1,"ion-text-center"],[1,"ion-justify-content-center","ion-align-items-center",2,"height","90%"],["padding","",1,"ion-text-justify"],[2,"font-size","1em"],["href","tel:+1234567890"],["expand","block"],["name","call"],["href","mailto:account@domain.com?subject=Your Company name - Support"],["name","mail"]],template:function(t,n){1&t&&(i.Pb(0,"ion-header"),i.Nb(1,"app-toolbar",0),i.Ob(),i.Pb(2,"ion-content",1),i.Pb(3,"ion-row",2),i.Pb(4,"p",3),i.Pb(5,"ion-text",4),i.Pb(6,"h6"),i.pc(7,"To contact us, you can"),i.Ob(),i.Ob(),i.Pb(8,"a",5),i.Pb(9,"ion-button",6),i.Nb(10,"ion-icon",7),i.pc(11," \xa0Call us maybe "),i.Ob(),i.Ob(),i.Pb(12,"a",8),i.Pb(13,"ion-button",6),i.Nb(14,"ion-icon",9),i.pc(15," \xa0Drop an email "),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob())},directives:[r.p,c.a,r.n,r.F,r.T,r.f,r.q],styles:[""]}),t})()}];let a=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(n){return new(n||t)},imports:[[o.j.forChild(s)],o.j]}),t})()},"2c9M":function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return s}));const o={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})},notification(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{o.selection()},r=()=>{o.selectionStart()},c=()=>{o.selectionChanged()},s=()=>{o.selectionEnd()},a=t=>{o.impact(t)}},"6i10":function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));const o={bubbles:{dur:1e3,circles:9,fn:(t,n,e)=>{const o=t*n/e-t+"ms",i=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(t,n,e)=>{const o=n/e,i=t*o-t+"ms",r=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>({r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,n,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,n,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})}}},MSUK:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e("fXoL"),i=e("tk/3");let r=(()=>{class t{constructor(t){this.httpClient=t}getAllProducts(t){return this.httpClient.get("products?per_page=10&order=asc&page="+t)}getAllProductsForCategory(t){return this.httpClient.get(`products?category=${t}&per_page=100&order=asc`)}getProduct(t){return this.httpClient.get("products/"+t)}getProductReviews(t){return this.httpClient.get("products/reviews?product="+t)}getAllVariations(t){return this.httpClient.get(`products/${t}/variations?per_page=20`)}getVariation(t,n){return this.httpClient.get(`products/${t}/variations/${n}`)}}return t.\u0275fac=function(n){return new(n||t)(o.Tb(i.b))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},NqGI:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return i}));const o=async(t,n,e,o,i)=>{if(t)return t.attachViewToDom(n,e,i,o);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return o&&o.forEach(t=>r.classList.add(t)),i&&Object.assign(r,i),n.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},i=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},"U/uv":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var o=e("sxy2"),i=e("ItpF"),r=e("2c9M");const c=(t,n)=>{let e,c;const s=(t,o,i)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,o);r&&n(r)?r!==e&&(u(),a(r,i)):u()},a=(t,n)=>{e=t,c||(c=e);const i=e;Object(o.g)(()=>i.classList.add("ion-activated")),n()},u=(t=!1)=>{if(!e)return;const n=e;Object(o.g)(()=>n.classList.remove("ion-activated")),t&&c!==e&&e.click(),e=void 0};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>s(t.currentX,t.currentY,r.a),onMove:t=>s(t.currentX,t.currentY,r.b),onEnd:()=>{u(!0),Object(r.e)(),c=void 0}})}},gXft:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var o=e("fXoL");let i=(()=>{class t{constructor(){this.products=[]}getProductById(t){return this.products.find(n=>n.id===t)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},k9Ri:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var o=e("ofXK"),i=e("3Pt+"),r=e("tyNb"),c=e("TEn/"),s=e("fXoL");let a=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(n){return new(n||t)},imports:[[o.b,i.a,c.X,r.j]]}),t})()},np0s:function(t,n,e){"use strict";e.d(n,"a",(function(){return g}));var o=e("fXoL"),i=e("zJju"),r=e("ofXK"),c=e("TEn/"),s=e("gXft"),a=e("tyNb");const u=["searchbar"];function l(t,n){if(1&t&&(o.Pb(0,"ion-item",4),o.Pb(1,"ion-avatar",5),o.Nb(2,"ion-img",6),o.Ob(),o.Pb(3,"ion-label",7),o.Nb(4,"p",8),o.Ob(),o.Ob()),2&t){const t=n.$implicit;o.ec("routerLink","/product/",t.id,""),o.Cb(2),o.dc("src",t.images[0].src),o.Cb(2),o.cc("innerHTML",t.name,o.lc)}}function d(t,n){if(1&t&&(o.Pb(0,"ion-list"),o.oc(1,l,5,3,"ion-item",3),o.Ob()),2&t){const t=o.Zb();o.Cb(1),o.cc("ngForOf",t.searchMatchedItems)}}let b=(()=>{class t{constructor(t){this.contextService=t,this.searchMatchedItems=[],this.close=new o.o}getItems(t){const n=t.target.value;n?n.length>=3&&(this.searchMatchedItems=this.contextService.products.filter(t=>t.name.toLowerCase().indexOf(n.toLowerCase())>-1)):this.searchMatchedItems=[]}onCancelSearch(){this.searchMatchedItems=[],this.close.emit()}ngOnInit(){setTimeout(()=>{this.search.setFocus()},500)}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(s.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-product-search-toolbar"]],viewQuery:function(t,n){var e;1&t&&o.tc(u,!0),2&t&&o.ic(e=o.Yb())&&(n.search=e.first)},outputs:{close:"close"},decls:4,vars:1,consts:[["placeholder","Search a product here","showCancelButton","always",3,"ionCancel","ionClear","ionInput"],["searchbar",""],[4,"ngIf"],["lines","none",3,"routerLink",4,"ngFor","ngForOf"],["lines","none",3,"routerLink"],["slot","start"],[3,"src"],[1,"ion-text-wrap"],[2,"font-size","15px","color","#222",3,"innerHTML"]],template:function(t,n){1&t&&(o.Pb(0,"ion-toolbar"),o.Pb(1,"ion-searchbar",0,1),o.Xb("ionCancel",(function(){return n.onCancelSearch()}))("ionClear",(function(){return n.searchMatchedItems=null}))("ionInput",(function(t){return n.getItems(t)})),o.Ob(),o.oc(3,d,2,1,"ion-list",2),o.Ob()),2&t&&(o.Cb(3),o.cc("ngIf",n.searchMatchedItems.length>0))},directives:[c.W,c.G,c.cb,r.j,c.x,r.i,c.v,c.ab,a.h,c.b,c.r,c.w],styles:["ioon-searchbar[_ngcontent-%COMP%]{border:none;box-shadow:none;margin-top:-.25rem;margin-bottom:-.5rem}"]}),t})();function h(t,n){if(1&t&&(o.Pb(0,"ion-title"),o.pc(1),o.Ob()),2&t){const t=o.Zb(2);o.Cb(1),o.qc(t.title)}}function f(t,n){if(1&t){const t=o.Qb();o.Pb(0,"ion-item",4),o.Pb(1,"ion-input",5),o.Xb("click",(function(){return o.kc(t),o.Zb(2).showSearchToolbar=!0})),o.Ob(),o.Ob()}}function m(t,n){if(1&t&&(o.Pb(0,"ion-toolbar"),o.Pb(1,"ion-buttons",2),o.Nb(2,"ion-back-button"),o.Nb(3,"ion-menu-button"),o.Ob(),o.oc(4,h,2,1,"ion-title",0),o.oc(5,f,2,0,"ion-item",3),o.Ob()),2&t){const t=o.Zb();o.Cb(4),o.cc("ngIf",!t.showSearchIcon),o.Cb(1),o.cc("ngIf",t.showSearchIcon)}}function p(t,n){if(1&t){const t=o.Qb();o.Pb(0,"app-product-search-toolbar",6),o.Xb("close",(function(){return o.kc(t),o.Zb().showSearchToolbar=!1})),o.Ob()}}let g=(()=>{class t{constructor(t){this.cartService=t,this.showSearchIcon=!1,this.showSearchToolbar=!1}ngOnInit(){window.location.pathname.includes("product")&&(this.showSearchIcon=!0)}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(i.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-toolbar"]],inputs:{title:"title"},decls:2,vars:2,consts:[[4,"ngIf"],[3,"close",4,"ngIf"],["slot","start"],["class","ion-no-margin search-container","lines","none",4,"ngIf"],["lines","none",1,"ion-no-margin","search-container"],["placeholder","Search a product here",3,"click"],[3,"close"]],template:function(t,n){1&t&&(o.oc(0,m,6,2,"ion-toolbar",0),o.oc(1,p,1,0,"app-product-search-toolbar",1)),2&t&&(o.cc("ngIf",!n.showSearchToolbar),o.Cb(1),o.cc("ngIf",n.showSearchToolbar))},directives:[r.j,c.W,c.g,c.c,c.d,c.A,c.V,c.v,c.u,c.cb,b],styles:["ion-back-button[_ngcontent-%COMP%], ion-icon[_ngcontent-%COMP%], ion-menu-button[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{color:var(--ion-color-primary-contrast);text-transform:capitalize}ion-toolbar[_ngcontent-%COMP%]{--background:var(--ion-color-primary)}.search-container[_ngcontent-%COMP%]{--background:none;margin-left:-.85rem}.search-container[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--color:#fff;--padding-bottom:8px;font-size:19px}"]}),t})()},oq9R:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var o=e("fXoL"),i=e("zJju"),r=e("1eqS"),c=e("ofXK"),s=e("TEn/");function a(t,n){1&t&&o.Nb(0,"ion-icon",7)}function u(t,n){if(1&t){const t=o.Qb();o.Pb(0,"ion-button",5),o.Xb("click",(function(){return o.kc(t),o.Zb(2).addItemToCart()})),o.oc(1,a,1,0,"ion-icon",6),o.pc(2),o.Ob()}if(2&t){const t=o.Zb(2);o.Cb(1),o.cc("ngIf",t.showIcon),o.Cb(1),o.rc(" \xa0 ",t.addToCartText||"Add to cart"," ")}}function l(t,n){if(1&t){const t=o.Qb();o.Pb(0,"ion-buttons",8),o.Pb(1,"ion-button",9),o.Xb("click",(function(){return o.kc(t),o.Zb(2).removeItemFromCart()})),o.Nb(2,"ion-icon",10),o.Ob(),o.Pb(3,"ion-button",11),o.pc(4),o.Ob(),o.Pb(5,"ion-button",9),o.Xb("click",(function(){return o.kc(t),o.Zb(2).addItemToCart()})),o.Nb(6,"ion-icon",12),o.Ob(),o.Ob()}if(2&t){const t=o.Zb(2);o.Cb(4),o.rc(" ",t.quantity," ")}}const d=function(t,n){return{"mr-1":t,"mr-0":n}};function b(t,n){if(1&t&&(o.Pb(0,"div",2),o.oc(1,u,3,2,"ion-button",3),o.oc(2,l,7,1,"ion-buttons",4),o.Ob()),2&t){const t=o.Zb();o.cc("ngClass",o.hc(3,d,!t.showIcon,t.showIcon)),o.Cb(1),o.cc("ngIf",0===t.quantity&&"instock"===t.product.stock_status),o.Cb(1),o.cc("ngIf",t.quantity>0)}}function h(t,n){if(1&t){const t=o.Qb();o.Pb(0,"ion-button",16),o.Xb("click",(function(){o.kc(t);const n=o.Zb(2);return n.addVariationToCart(n.selectedVariation.id)})),o.pc(1,"Add to cart "),o.Ob()}}function f(t,n){if(1&t){const t=o.Qb();o.Pb(0,"ion-buttons",17),o.Pb(1,"ion-button",9),o.Xb("click",(function(){o.kc(t);const n=o.Zb(2);return n.removeVariationFromCart(n.selectedVariation.id)})),o.Nb(2,"ion-icon",10),o.Ob(),o.Pb(3,"ion-button",18),o.pc(4),o.Ob(),o.Pb(5,"ion-button",9),o.Xb("click",(function(){o.kc(t);const n=o.Zb(2);return n.addVariationToCart(n.selectedVariation.id)})),o.Nb(6,"ion-icon",12),o.Ob(),o.Ob()}if(2&t){const t=o.Zb(2);o.Cb(4),o.rc(" ",t.quantity," ")}}function m(t,n){if(1&t&&(o.Pb(0,"div",13),o.oc(1,h,2,0,"ion-button",14),o.oc(2,f,7,1,"ion-buttons",15),o.Ob()),2&t){const t=o.Zb();o.Cb(1),o.cc("ngIf",t.selectedVariation&&0===t.quantity),o.Cb(1),o.cc("ngIf",t.quantity>0)}}let p=(()=>{class t{constructor(t,n){this.cartService=t,this.toastService=n,this.onAdd=new o.o,this.onRemove=new o.o,this.quantity=0}addItemToCart(){this.cartService.addItem(this.product).then(t=>{t?this.onAdd.emit(this.quantity):this.toastService.presentToast("Unable to add quantity right now")})}removeItemFromCart(){this.cartService.removeItem(this.product).then(t=>{t?this.onRemove.emit(this.quantity):this.toastService.presentToast("Unable to remove quantity right now")})}addVariationToCart(t){this.cartService.addItem(this.product,t).then(t=>{t?this.onAdd.emit(this.quantity):this.toastService.presentToast("Unable to add quantity right now")})}removeVariationFromCart(t){this.cartService.removeItem(this.product,t).then(t=>{t?this.onRemove.emit(this.quantity):this.toastService.presentToast("Unable to remove quantity right now")})}ngOnInit(){const t=this.cartService.getItem(this.product.id);t&&(this.quantity=t.quantity),this.cartService.cartDetails.subscribe(t=>{this.quantity=this.selectedVariation?(t.find(t=>t.product_id===this.product.id&&t.variation_id===this.selectedVariation.id)||{}).quantity||0:(t.find(t=>t.product_id===this.product.id)||{}).quantity||0})}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(i.a),o.Mb(r.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["add-to-cart"]],inputs:{product:"product",selectedVariation:"selectedVariation",addToCartText:"addToCartText",showIcon:"showIcon"},outputs:{onAdd:"onAdd",onRemove:"onRemove"},decls:2,vars:2,consts:[[3,"ngClass",4,"ngIf"],["style","position: absolute;",4,"ngIf"],[3,"ngClass"],["expand","full",3,"click",4,"ngIf"],["class","ion-float-right","style","margin-top: 0.35rem;",4,"ngIf"],["expand","full",3,"click"],["name","cart",4,"ngIf"],["name","cart"],[1,"ion-float-right",2,"margin-top","0.35rem"],[3,"click"],["name","remove"],["disabled","true",1,"quantity"],["name","add"],[2,"position","absolute"],["expand","full","margin","",3,"click",4,"ngIf"],["class","ion-float-right","style","margin-top: 0.5rem;",4,"ngIf"],["expand","full","margin","",3,"click"],[1,"ion-float-right",2,"margin-top","0.5rem"],["clear","","disabled","true",2,"font-size","1rem"]],template:function(t,n){1&t&&(o.oc(0,b,3,6,"div",0),o.oc(1,m,3,2,"div",1)),2&t&&(o.cc("ngIf",0===n.product.variations.length),o.Cb(1),o.cc("ngIf",n.product.variations.length>0&&n.selectedVariation))},directives:[c.j,c.h,s.f,s.q,s.g],styles:[".quantity[_ngcontent-%COMP%]{color:#444;font-size:1.125rem}.mr-1[_ngcontent-%COMP%]{right:1rem}.mr-0[_ngcontent-%COMP%], .mr-1[_ngcontent-%COMP%]{position:absolute}.mr-0[_ngcontent-%COMP%]{right:0}"]}),t})()},sPtc:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return s}));const o=(t,n)=>null!==n.closest(t),i=(t,n)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},n):n,r=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},c=/^[a-z][a-z0-9+\-.]*:/,s=async(t,n,e,o)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const i=document.querySelector("ion-router");if(i)return null!=n&&n.preventDefault(),i.push(t,e,o)}return!1}},zJju:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e("fXoL"),i=e("n90K");let r=(()=>{class t{constructor(t){this.storageService=t,this.cartItems=[],this.cart=new o.o,this.cartDetails=new o.o,this.getCartItems().then(t=>{this.cartItems=t||[]})}getCartItems(){return this.storageService.get("cart")}getItem(t,n){return null==this.cartItems?null:this.cartItems.length>0?this.cartItems.find(e=>e.product_id===t&&e.variation_id===(n||e.variation_id)):void 0}addItem(t,n){return this.getItem(t.id,n)?this.cartItems.find(e=>e.product_id===t.id&&e.variation_id===(n||e.variation_id)).quantity+=this.getQtyIncrementSeedForProduct(t):this.cartItems.push({product_id:t.id,quantity:this.getMinQtyForProduct(t),variation_id:n||void 0}),this.syncCartToStorage()}removeItem(t,n){return this.getItem(t.id,n).quantity>this.getMinQtyForProduct(t)?this.getItem(t.id,n).quantity-=this.getQtyIncrementSeedForProduct(t):this.cartItems=this.cartItems.filter(n?t=>t.variation_id!==n:n=>n.product_id!==t.id),this.syncCartToStorage()}clearItem(t){return this.cartItems=this.cartItems.filter(n=>n.variation_id!==t),this.syncCartToStorage()}emptyCart(){return this.cartItems=[],this.syncCartToStorage()}syncCartToStorage(){return this.storageService.remove("cart").then(t=>this.storageService.set("cart",this.cartItems).then(t=>(this.cart.emit(this.cartItems.length),this.cartDetails.emit(this.cartItems),!0))).catch(t=>!1)}getMinQtyForProduct(t){const n=t.attributes.find(t=>"minimum-quantity"===t.name);return n?parseFloat(n.options[0]):.5}getQtyIncrementSeedForProduct(t){const n=t.attributes.find(t=>"quantity-increment"===t.name);return n?parseFloat(n.options[0]):.5}}return t.\u0275fac=function(n){return new(n||t)(o.Tb(i.a))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);