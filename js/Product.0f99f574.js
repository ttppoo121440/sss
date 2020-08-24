(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Product"],{"5a97":function(t,a,e){},"62da":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"container product-details mt-200 mb-100"},[e("Loading",{attrs:{active:t.$store.state.Loading.loading},on:{"update:active":function(a){return t.$set(t.$store.state.Loading,"loading",a)}}}),t.product?e("ProductDetails",{attrs:{data:t.product,quantity:t.quantity},on:{"update:quantity":function(a){t.quantity=a},addCart:t.addCartHandler}}):t._e(),0!==t.$store.state.Product.hotProduct.length?e("HotProduct",{attrs:{"product-data":t.product,data:t.$store.state.Product.hotProduct},on:{qty:t.qty}}):t._e()],1)},i=[],r=(e("7db0"),e("96cf"),e("1da1")),s=e("f01d"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.$store.state.Loading.loading?t._e():e("transition-group",{staticClass:"row",attrs:{name:"page",appear:"",tag:"div"}},[e("Pic",{key:t.$route.name,attrs:{pic:t.data.imageUrl}}),e("div",{key:t.$options.name,staticClass:"col-md-6"},[e("div",{staticClass:"product-details-content"},[e("span",{staticClass:"py-3 text-primary"},[e("router-link",{staticClass:"text-primary",attrs:{to:"/products"}},[t._v(" 產品專區")]),t._v("/"+t._s(t.data.category))],1),e("div",{staticClass:"text-left my-5"},[e("h1",[t._v(" "+t._s(t.data.title)+" ")])]),e("p",[t._v(t._s(t.data.description))])]),e("div",{staticClass:"product-details-function mb-5"},[e("DetailPic",{attrs:{data:t.data,quantity:t.bindingValue},on:{"update:quantity":function(a){t.bindingValue=a}}}),e("AddCart",{attrs:{quantity:t.bindingValue},on:{addCart:function(a){return t.$emit("addCart",t.data,t.bindingValue)}}})],1)])],1)},c=[],o=(e("a9e3"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-6 my-auto"},[e("div",{staticClass:"product-details-pic"},[e("img",{staticClass:"img-fluid",attrs:{src:t.pic}})])])}),d=[],l={name:"Pic",props:{pic:{type:Array,default:function(){return[]}}}},p=l,f=e("2877"),m=Object(f["a"])(p,o,d,!1,null,null,null),h=m.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"product-details-cart text-left mt-5"},[e("button",{staticClass:"btn",class:{disabled:999===t.quantity},on:{click:function(a){return t.$emit("addCart")}}},[t._v(" 加到購物車 ")])])},g=[],C={name:"AddCart",props:{quantity:{type:Number,required:!0}}},b=C,q=Object(f["a"])(b,y,g,!1,null,null,null),$=q.exports,v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"product-details-price mt-5"},[e("span",{staticClass:"mr-5"},[t._v("售價： "+t._s(t.data.price)+" ")]),e("InputNumber",{attrs:{quantity:t.bindingValue,data:t.data},on:{calculation:t.changeValue,changeValue:t.changeValue}})],1)},_=[],P=e("4b4a"),x={name:"DetailPic",components:{InputNumber:P["a"]},props:{data:{type:Object,default:function(){}},quantity:{type:Number,required:!0}},computed:{bindingValue:{get:function(){return this.quantity},set:function(t){this.$emit("update:quantity",t)}}},methods:{setQty:function(t){var a=this;this.$store.state.Cart.goodsList.find((function(e){return e.product.id===t.product.id&&(a.bindingValue=t.quantity),!1}))},changeValue:function(t){this.$store.dispatch("Cart/changeValue",t),this.setQty(t)}}},V=x,w=Object(f["a"])(V,v,_,!1,null,null,null),j=w.exports,L={name:"ProductDetails",components:{Pic:h,AddCart:$,DetailPic:j},props:{data:{type:Object,required:!0},quantity:{type:Number,required:!0}},computed:{bindingValue:{get:function(){return this.quantity},set:function(t){this.$emit("update:quantity",t)}}}},O=L,k=Object(f["a"])(O,u,c,!1,null,null,null),A=k.exports,D={name:"Product",components:{ProductDetails:A,HotProduct:s["a"]},data:function(){return{quantity:1}},computed:{product:function(){return this.$store.state.Product.product}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.$store.commit("Product/CLEAR_DATA"),a.next=3,t.$store.dispatch("Product/getSingleProducts",t.$route.params.id);case 3:return a.next=5,t.$store.dispatch("Product/getHotProduct");case 5:t.getCartId();case 6:case"end":return a.stop()}}),a)})))()},methods:{qty:function(t){0!==t&&(this.quantity=t)},addCart:function(t){this.quantity=2,this.$store.dispatch("Cart/addCart",t)},editCart:function(t){this.quantity+=1,this.$store.dispatch("Cart/editCart",{product:t,quantity:this.quantity})},addCartHandler:function(t){var a=this.$store.state.Cart.goodsList.find((function(a){return a.product.id===t.id}));a?this.editCart(t):this.addCart(t),this.$notify({group:"foo",type:"success",title:"提示",text:"加入購物車成功!"})},getCartId:function(){var t=this,a=this.$store.state.Cart.goodsList.find((function(a){return a.product.id===t.$route.params.id}));this.quantity=a?a.quantity:1}}},E=D,H=(e("bcf8"),Object(f["a"])(E,n,i,!1,null,null,null));a["default"]=H.exports},bcf8:function(t,a,e){"use strict";var n=e("5a97"),i=e.n(n);i.a}}]);