webpackJsonp([5],{"Jhn/":function(t,s,a){"use strict";var i=a("7QTg"),e={name:"Luslider",components:{swiper:i.swiper},props:{direction:{type:String,default:"horizontal",validator:function(t){return["horizontal","vertical"].indexOf(t)>-1}},interval:{type:Number,default:3e3,validator:function(t){return t>=0}},loop:{type:Boolean,default:!0},pagination:{type:Boolean,default:!0},autoplay:{type:Boolean,default:!0},data:{type:Array,default:function(){return[]}}},data:function(){return{keyId:Math.random()}},watch:{data:function(t){0!==t.length&&(this.swiperOptions.loop=!(t.length<=1)&&this.loop,this.keyId=Math.random())}},created:function(){this.init()},methods:{init:function(){this.swiperOptions={watchOverflow:!0,direction:this.direction,interval:this.interval,slidesPerView:1,autoplay:this.autoplay,loop:!(this.data.length<=1)&&this.loop,pagination:{el:".swiper-pagination"}}}}},r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("swiper",{key:this.keyId,attrs:{options:this.swiperOptions}},[this._t("default"),this._v(" "),this.pagination?s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):this._e()],2)},staticRenderFns:[]};var n=a("VU/8")(e,r,!1,function(t){a("ypGJ")},"data-v-0c5f13aa",null);s.a=n.exports},aZ5T:function(t,s){},hJK3:function(t,s){},kh3D:function(t,s){},pv01:function(t,s){},taF9:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("8MDr"),e=a("/l8+"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tabbar"},[a("ul",{staticClass:"tabbar-list"},[a("li",{staticClass:"tabbar-item"},[a("i",{staticClass:"iconfont icon-shop"}),t._v(" "),a("p",[t._v("店铺")])]),t._v(" "),a("li",{staticClass:"tabbar-item"},[a("i",{staticClass:"iconfont icon-service"}),t._v(" "),a("p",[t._v("客服")])]),t._v(" "),a("li",{staticClass:"tabbar-item"},[a("i",{staticClass:"iconfont icon-collect"}),t._v(" "),a("p",[t._v("收藏")])])]),t._v(" "),a("div",{staticClass:"tabbar-button"},[a("span",{staticClass:"cart"},[t._v("加入购物车")]),t._v(" "),a("span",{staticClass:"buy"},[t._v("立即购买")])])])}]};var n=a("VU/8")({name:"ProductFooter",data:function(){return{}}},r,!1,function(t){a("pv01")},"data-v-6443b69e",null).exports,o=a("Jhn/"),c=a("odKQ"),l=a("7QTg"),u="horizontal",d=!0,p=!1,v=100,h=a("mtWM"),_=a.n(h),f=function(){return _.a.get("static/data.json").then(function(t){if(t.data)return t.data;throw new Error("没有成功获取到数据")}).catch(function(t){t&&console.log(t)})},g={name:"ProductSlider",components:{LuSlider:o.a,swiperSlide:l.swiperSlide,LuLoading:c.a},data:function(){return{direction:u,loop:d,autoplay:p,interval:v,sliders:[]}},methods:{getProduct:function(){var t=this;return f().then(function(s){t.sliders=s.picUrl})}},created:function(){this.getProduct()}},C={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"swiper-wrapper"},[t.sliders.length?t._e():a("lu-loading"),t._v(" "),a("lu-slider",{attrs:{data:t.sliders,direction:t.direction,loop:t.loop,interval:t.interval,autoplay:t.autoplay}},t._l(t.sliders,function(t,s){return a("swiper-slide",{key:s},[a("img",{staticClass:"slider-img",attrs:{src:t,alt:""}})])}),1)],1)},staticRenderFns:[]};var m=a("VU/8")(g,C,!1,function(t){a("aZ5T")},"data-v-2bbf1a99",null).exports,D={name:"ProductJudge",components:{LuLoading:c.a},data:function(){return{productDetails:{hasData:!1}}},methods:{getProductDetails:function(){var t=this;return f().then(function(s){t.productDetails=s,t.productDetails.hasData=!0,t.$emit("loaded",t.productDetails),console.log(t.productDetails)})}},created:function(){this.getProductDetails()}},y={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.productDetails.hasData?a("div",{staticClass:"judge-wrapper"},[a("div",{staticClass:"product-title"},[a("h4",[a("span",{staticClass:"price"},[t._v("¥"+t._s(t.productDetails.price))]),t._v(" "),a("span",{staticClass:"sale"},[t._v("已售"+t._s(t.productDetails.sale)+"件")])]),t._v(" "),a("p",{staticClass:"title"},[t._v(t._s(t.productDetails.title))]),t._v(" "),a("p",{staticClass:"logistics"},t._l(t.productDetails.logistics,function(s,i){return a("span",{key:i},[t._v(t._s(s))])}),0)]),t._v(" "),a("div",{staticClass:"product-judge"},[a("h4",{staticClass:"title"},[t._v("商品评价"+t._s(t.productDetails.judge.title))]),t._v(" "),a("div",{staticClass:"judge-category"},t._l(t.productDetails.judge.judgeCategory,function(s,i){return a("span",{key:i},[t._v(t._s(s))])}),0),t._v(" "),a("div",{staticClass:"user"},[a("div",{staticClass:"user-id"},[a("img",{attrs:{src:t.productDetails.judge.judgeUser.pic}}),t._v(" "),a("span",{staticClass:"judge-use"},[t._v(t._s(t.productDetails.judge.judgeUser.name[0]))])]),t._v(" "),a("div",{staticClass:"user-text"},[t._v(t._s(t.productDetails.judge.judgeList[0]))]),t._v(" "),a("div",{staticClass:"user-model"},[t._v(t._s(t.productDetails.judge.goodsModel))])])]),t._v(" "),a("div",{staticClass:"product-details"},[a("div",{staticClass:"product-shop"},[a("img",{staticClass:"shop-pic",attrs:{src:t.productDetails.shop.pic}}),t._v(" "),a("span",{staticClass:"shop-name"},[t._v(t._s(t.productDetails.shop.name))]),t._v(" "),a("div",{staticClass:"shop-score"},t._l(t.productDetails.shop.score,function(s,i){return a("span",{key:i},[t._v(t._s(s))])}),0)]),t._v(" "),a("ul",{staticClass:"product-pic"},t._l(t.productDetails.goodsPic,function(t,s){return a("li",{key:s,staticClass:"pic-item"},[a("img",{attrs:{src:t,alt:""}})])}),0)])]):a("lu-loading")],1)},staticRenderFns:[]};var b=a("VU/8")(D,y,!1,function(t){a("kh3D")},"data-v-4dc4a080",null).exports,w={name:"product",components:{LuScroll:i.a,LuNavbar:e.a,ProductSlider:m,ProductDetails:b,ProductFooter:n},data:function(){return{productDetails:{}}},methods:{backto:function(){this.$router.back()},getParams:function(){console.log(this.$route.params)},productDetailsChange:function(t){this.productDetails=t}},created:function(){this.getParams()}},k={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition",{attrs:{name:"product"}},[a("div",{staticClass:"product"},[a("lu-navbar",{staticClass:"product-header"},[a("i",{staticClass:"iconfont icon-back",attrs:{slot:"left"},on:{click:t.backto},slot:"left"}),t._v(" "),a("span",{staticClass:"header-text",attrs:{slot:"center"},slot:"center"},[t._v("商品详情")]),t._v(" "),a("i",{staticClass:"iconfont icon-cart",attrs:{slot:"right"},slot:"right"})]),t._v(" "),a("div",{staticClass:"product-content"},[a("lu-scroll",{staticClass:"product-scroll",attrs:{data:t.productDetails}},[a("product-slider"),t._v(" "),a("product-details",{on:{loaded:t.productDetailsChange}})],1)],1),t._v(" "),a("product-footer",{staticClass:"product-footer"})],1)])},staticRenderFns:[]};var j=a("VU/8")(w,k,!1,function(t){a("hJK3")},"data-v-6754de78",null);s.default=j.exports},ypGJ:function(t,s){}});
//# sourceMappingURL=5.f4a735566365dfdb634e.js.map