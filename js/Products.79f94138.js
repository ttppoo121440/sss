(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Products"],{"0e8f":function(t,e,a){"use strict";var n=a("eb67"),r=a.n(n);r.a},"2e5d":function(t,e,a){},"4bcf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("Loading",{attrs:{active:t.$store.state.Loading.loading},on:{"update:active":function(e){return t.$set(t.$store.state.Loading,"loading",e)}}}),a("Banner",{attrs:{id:"banner"}}),a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"container text-center py-5"},[0!==t.$store.state.Product.category.length?a("Category",{attrs:{categorys:t.$store.state.Product.category},on:{categoryHandler:t.categoryHandler}}):t._e()],1),a("ProductsList",{staticClass:"mb-5",attrs:{data:t.filterProduct}}),a("ProductsNav",{attrs:{current:t.currentIndex,"page-size":t.pageSize,category:t.category},on:{"update:current":function(e){t.currentIndex=e}}})],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center my-5"},[a("h1",{staticClass:"title"},[t._v(" 產品專區 ")])])}],s=(a("4de4"),a("fb6a"),a("8415")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueSlickCarousel",t._b({staticClass:"text-center category"},"VueSlickCarousel",t.settings,!1),[a("div",{staticClass:"category-item"},[a("button",{staticClass:"btn btn-outline",class:{active:"全部"===t.active},attrs:{type:"button"},on:{click:function(e){return t.categoryHandler("全部")}}},[t._v(" 全部 ")])]),t._l(t.categorys,(function(e){return a("div",{key:e,staticClass:"category-item"},[a("button",{staticClass:"btn btn-outline",class:{active:t.active===e},attrs:{type:"button"},on:{click:function(a){return t.categoryHandler(e)}}},[t._v(" "+t._s(e)+" ")])])}))],2)},c=[],o=(a("dca8"),a("a7ab")),u=a.n(o),l=(a("7b8d"),a("6a2c"),{name:"Category",components:{VueSlickCarousel:u.a},props:{categorys:{type:Array,required:!0}},data:function(){return{active:"全部",settings:Object.freeze({speed:500,slidesToShow:4,slidesToScroll:1,swipeToSlide:!0,infinite:!1,arrows:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:767,settings:{slidesToShow:3}}]})}},methods:{categoryHandler:function(t){this.active=t,this.$emit("categoryHandler",t)}}}),d=l,g=(a("b896"),a("2877")),p=Object(g["a"])(d,i,c,!1,null,null,null),f=p.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("transition-group",{staticClass:"row mx-0 card",attrs:{name:"page",appear:"",tag:"div"}},t._l(t.data,(function(e){return a("div",{key:e.id,staticClass:"col-md-6 col-xl-4 col-lg-6 my-3"},[a("div",{staticClass:"card-item"},[a("div",{staticClass:"card-pic mb-2"},[a("img",{staticClass:"img-fluid",attrs:{src:e.imageUrl}})]),a("div",{staticClass:"card-content"},[a("h3",[t._v(" "+t._s(e.title)+" ")]),a("p",[t._v("售價："+t._s(e.price))]),a("Buttons",{on:{goProductPage:function(a){return t.goProductPage(e.id)},addCartHandler:function(a){return t.addCartHandler(e)}}})],1)])])})),0)],1)},v=[],m=a("5530"),b=a("2f62"),y=a("3211"),C={name:"ProductsList",components:{Buttons:y["a"]},props:{data:{type:Array,required:!0}},methods:Object(m["a"])(Object(m["a"])({},Object(b["b"])({addCart:"Cart/addCart"})),{},{goProductPage:function(t){this.$router.push("/Product/".concat(t)).catch((function(){}))},addCartHandler:function(t){this.addCart(t),this.$notify({group:"foo",type:"success",title:"提示",text:"加入購物車成功!"})}})},_=C,P=Object(g["a"])(_,h,v,!1,null,null,null),$=P.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$store.state.Loading.loading?t._e():a("Pagination",{attrs:{current:t.current,"total-pages":t.totalPages},on:{ChangeNav:t.ChangeNav}})},k=[],w=(a("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return 1!==t.totalPages?a("nav",{staticClass:"container"},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:1===t.current}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.ChangeNav(t.current-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.totalPages,(function(e,n){return a("li",{key:n,staticClass:"page-item"},[a("a",{staticClass:"page-link",class:{active:t.current===e},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.ChangeNav(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.current===t.totalPages}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.ChangeNav(t.current+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)]):t._e()}),N=[],S=a("dc05"),L={name:"Pagination",mixins:[S["a"]],props:{current:{type:Number,required:!0},totalPages:{type:Number,required:!0}},mounted:function(){window.addEventListener("scroll",this.backTop)},beforeDestroy:function(){window.removeEventListener("scroll",this.backTop)},methods:{ChangeNav:function(t){var e=document.querySelector("#banner");this.scrollTo(e.offsetHeight),this.$emit("ChangeNav",t)}}},j=L,E=Object(g["a"])(j,w,N,!1,null,null,null),H=E.exports,T={name:"ProductsNav",components:{Pagination:H},props:{current:{type:Number,required:!0},pageSize:{type:Number,required:!0},category:{type:String,required:!0}},computed:{currentIndex:{get:function(){return this.current},set:function(t){this.$emit("update:current",t)}},totalPages:{get:function(){return Math.ceil(this.categoryTotal/this.pageSize)}},categoryTotal:function(){var t=this;return this.$store.state.Product.productList.filter((function(e){return(e.category===t.category||"全部"===t.category)&&e})).length}},methods:{ChangeNav:function(t){this.currentIndex=t}}},z=T,O=Object(g["a"])(z,x,k,!1,null,null,null),q=O.exports,I={name:"Product",components:{ProductsList:$,Banner:s["a"],Category:f,ProductsNav:q},data:function(){return{category:"全部",nav:0,current:1,pageSize:6}},computed:{currentIndex:{get:function(){return this.current},set:function(t){var e=this.$store.state.Product.productList.length;this.current=t<=1?1:t,Math.ceil(e/this.pageSize)<this.current&&(this.current=Math.ceil(e/this.pageSize))}},totalNav:{get:function(){return this.nav},set:function(t){this.nav=t}},filterProduct:function(){var t=this,e=(this.currentIndex-1)*this.pageSize,a=e+this.pageSize;return this.$store.state.Product.productList.filter((function(e){return(e.category===t.category||"全部"===t.category)&&e})).slice(e,a)}},mounted:function(){this.$store.commit("Product/CLEAR_DATA"),this.$store.dispatch("Product/getProduct")},methods:{categoryHandler:function(t){this.category=t,this.currentIndex=1,this.totalNav=this.filterProduct.length}}},A=I,B=(a("b1c0"),Object(g["a"])(A,n,r,!1,null,null,null));e["default"]=B.exports},"4e98":function(t,e,a){},"4eb4":function(t,e,a){t.exports=a.p+"img/page-banner.a018afdd.jpg"},8415:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-banner"},[n("div",{staticClass:"row m-0"},[n("img",{staticClass:"w-100",attrs:{src:a("c4ed"),alt:"banner"}}),n("img",{staticClass:"w-100",attrs:{src:a("4eb4"),alt:"banner"}})])])}],s={name:"Banner"},i=s,c=(a("0e8f"),a("2877")),o=Object(c["a"])(i,n,r,!1,null,null,null);e["a"]=o.exports},b1c0:function(t,e,a){"use strict";var n=a("2e5d"),r=a.n(n);r.a},b896:function(t,e,a){"use strict";var n=a("4e98"),r=a.n(n);r.a},c4ed:function(t,e,a){t.exports=a.p+"img/page-banner.c23186b0.jpg"},eb67:function(t,e,a){}}]);