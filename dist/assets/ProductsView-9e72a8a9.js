import{u as p,_ as m,o as a,c as r,g,h as b,b as d,a as l,d as o,F as h,j as P,k as y,l as x,w as n,n as _,t as f,q as u,v as L}from"./index-b6d2559c.js";import{P as T,T as $}from"./Trending-27d11e4d.js";const{toggleFilter:k}=p(),S={mounted(){document.querySelectorAll(".products-filter-btn").forEach(s=>s.addEventListener("click",e=>{e.currentTarget.parentElement.querySelector(".active-filter").classList.remove("active-filter"),e.currentTarget.classList.add("active-filter");const i=e.currentTarget.getAttribute("data-filter");k(i)}))}},V={id:"products-filter"},C=g('<div class="products-filter-btn green active-filter" data-filter="all" data-v-bcf962f2> Tous </div><div class="products-filter-btn green" data-filter="pc" data-v-bcf962f2>PC</div><div class="products-filter-btn green" data-filter="smartphones" data-v-bcf962f2> Smartphones </div><div class="products-filter-btn green" data-filter="moniteurs" data-v-bcf962f2> Moniteurs </div><div class="products-filter-btn green" data-filter="tablettes" data-v-bcf962f2> Tablettes </div>',5),F=[C];function N(c,s,e,i,v,t){return a(),r("div",V,F)}const B=m(S,[["render",N],["__scopeId","data-v-bcf962f2"]]);const E={id:"ProductsList"},q=["src","alt"],w={__name:"ProductsList",setup(c){const{products:s,filter:e}=b(p());return(i,v)=>(a(),r("section",E,[d(B),l("div",{class:u(["productsList-container",o(e)])},[o(s)?(a(!0),r(h,{key:0},P(o(s),t=>(a(),y(T,{class:u(t.categorie),key:t.id,to:{name:"product",params:{id:t.id}}},x({title:n(()=>[_(f(t.name),1)]),price:n(()=>[_(f(t.price)+" €",1)]),_:2},[t.img?{name:"img",fn:n(()=>[l("img",{src:t.img,alt:t.name},null,8,q)]),key:"0"}:void 0]),1032,["class","to"]))),128)):L("",!0)],2)]))}},A=m(w,[["__scopeId","data-v-3df056a9"]]),I={id:"Products"},D={__name:"ProductsView",setup(c){return(s,e)=>(a(),r("main",I,[d(A),d($)]))}};export{D as default};