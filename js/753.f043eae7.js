"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[753],{3753:function(t,s,a){a.r(s),a.d(s,{default:function(){return n}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"Project_product"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.modal,expression:"modal"}],staticClass:"modal",attrs:{id:"myModal"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"justify-content-center"},[s("p",{staticStyle:{"margin-bottom":"0"}},[s("span",{staticClass:"icon-modal",domProps:{innerHTML:t._s(t.text)}}),s("span",{staticStyle:{"font-size":"20px"}},[t._v(t._s(t.msg))])])])])]),s("div",{staticClass:"container"},[t.favoriteList[0]?s("div",[s("div",{staticClass:"favoriteTitle d-flex justify-content-between align-items-center mb-4 pb-3"},[s("h2",{staticClass:"h3 mb-0 font-weight-bold"},[t._v("我的追蹤清單")]),s("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v(" 共 "),s("span",{staticClass:"text-danger"},[t._v(" "+t._s(t.favoriteList.length)+" ")]),t._v(" 項 ")])]),s("div",{staticClass:"row"},t._l(t.favoriteList,(function(a){return s("div",{key:a.id,staticClass:"col-lg-3 col-md-4 mb-5 col-sm-6"},[s("router-link",{staticClass:"text-decoration-none text-dark",attrs:{to:`/product/${a.id}`}},[s("div",{staticClass:"card"},[s("div",{staticClass:"product__wrap"},[s("div",{staticClass:"product__wrap__img bg-cover position-relative",staticStyle:{height:"200px","background-position":"center","background-size":"cover"},style:{backgroundImage:`url(${a.imageUrl})`}},[s("span",{staticClass:"badge badge-secondary align-self-start favorite",staticStyle:{"border-radius":"0 !important"}},[t._v(" "+t._s(a.category)+" ")]),s("span",{on:{click:function(s){return s.preventDefault(),t.removefavorite(a)}}},[s("i",{staticClass:"fas fa-backspace fav-icon"})])])]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("h5",{staticClass:"card-title text-dark font-weight-bold"},[t._v(" "+t._s(a.title)+" ")])]),s("div",{staticStyle:{"vertical-align":"middle"}},[s("div",{staticClass:"float-left"},[s("span",{staticClass:"mb-0 h4 font-weight-bold text-danger"},[t._v(" $")]),s("span",{staticClass:"mb-0 h4 font-weight-bold text-danger mr-1"},[t._v(t._s(a.price))])]),s("div",{staticClass:"float-right"},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"icon"},[s("span",{on:{click:function(s){return s.preventDefault(),t.addToCart(a.id)}}},[s("i",{staticClass:"fas fa-cart-plus cart-fv-icon mr-1"})])])])])])])])])],1)})),0)]):s("div",{staticClass:"d-flex justify-content-center text-center"},[s("div",{staticClass:"mt-5"},[t._m(0),s("a",{staticClass:"text-dark",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.category="所有商品",t.toProducts()}}},[t._m(1)])])])])])},e=[function(){var t=this,s=t._self._c;return s("h2",{staticClass:"favorite__title mb-3 h5 mt-4 mb-4"},[s("i",{staticClass:"far fa-heart",staticStyle:{"font-size":"7rem","background-color":"#b7b7b7",padding:"20px",color:"#fff"}}),t._v(" 沒有收藏的商品可顯示 ")])},function(){var t=this,s=t._self._c;return s("button",{staticClass:"btn all_btn"},[s("i",{staticClass:"fas fa-angle-left mr-2"}),t._v("去逛逛 ")])}],o={name:"MyFavorite",data(){return{msg:"",text:"",modal:!1,favoriteList:[],favoriteId:[],isLoading:!1,category:""}},created(){this.favoriteList=JSON.parse(localStorage.getItem("favoriteList"))||[],this.favoriteId=JSON.parse(localStorage.getItem("favoriteId"))||[]},methods:{addToCart(t,s=1){const a="https://course-ec-api.hexschool.io/api/d25970ec-b87b-44f6-9785-9bdbbcd8dc56/ec/shopping",i={product:t,quantity:s};this.$http.post(a,i).then((()=>{this.$emit("updateCart"),this.text='<i class="fa-solid fa-circle-check" style="color: green;"></i>',this.msg="商品已加入購物車！",this.modal=!0,this.modal=setTimeout((()=>{this.modal=!1}),1e3)})).catch((()=>{this.text='<i class="fa-solid fa-triangle-exclamation" style="color: red;"></i>',this.msg="購物車已存在該商品！",this.modal=!0,this.modal=setTimeout((()=>{this.modal=!1}),1e3)}))},toProducts(){this.$emit("fliterProduct",this.category),this.$router.push(`/products/${this.category}`)},removefavorite(t){this.favoriteList.forEach(((s,a)=>{s.id===t.id&&(this.favoriteList.splice(a,1),localStorage.setItem("favoriteList",JSON.stringify(this.favoriteList)))})),this.favoriteId.forEach(((s,a)=>{s===t.id&&(this.favoriteId.splice(a,1),localStorage.setItem("favoriteId",JSON.stringify(this.favoriteId)))}))}}},r=o,c=a(1001),l=(0,c.Z)(r,i,e,!1,null,"d174149a",null),n=l.exports}}]);
//# sourceMappingURL=753.f043eae7.js.map