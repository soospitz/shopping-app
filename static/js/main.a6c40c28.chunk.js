(this["webpackJsonpshopping-app"]=this["webpackJsonpshopping-app"]||[]).push([[0],{29:function(t,e,i){},35:function(t,e,i){"use strict";i.r(e);var c=i(0),a=i(1),s=i.n(a),n=i(22),r=i.n(n),o=(i(29),i(13)),l=i(15),j=i(7),h=i(11),u=i(2),b=i(8),d=(i(9),{1:20,2:30,3:15,4:25,5:25,6:30,7:30,8:35,9:35,10:40,11:30,12:45,13:15,14:15,15:20,16:20,17:23}),p=function(t){return Object(c.jsx)("div",{className:"column",children:Object(c.jsxs)("div",{className:"item",children:[Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h3",{children:t.item.name}),Object(c.jsx)("i",{onClick:function(){return t.clickHeart(t.item.id)},class:t.item.heart&&!0===t.status?"fas fa-heart fa-lg":"far fa-heart fa-lg",id:"heart"})]}),Object(c.jsxs)("p",{children:["$",d[t.item.id]]}),Object(c.jsx)("img",{src:t.item.img,style:{height:150}}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"itemBottom",children:[Object(c.jsxs)("div",{className:"selections",children:[Object(c.jsxs)("div",{className:"selection-left",children:[Object(c.jsx)("p",{children:"Size:"}),Object(c.jsx)("p",{children:"Qty:"})]}),Object(c.jsxs)("div",{className:"selection-right",children:[Object(c.jsxs)("select",{value:t.item.size,className:"inputS",name:"size",onChange:t.changeSize(t.item.id),children:[Object(c.jsx)("option",{value:"",children:"Select"}),Object(c.jsx)("option",{value:"small",children:"Small"}),Object(c.jsx)("option",{value:"medium",children:"Medium"}),Object(c.jsx)("option",{value:"large",children:"Large"})]}),Object(c.jsx)("input",{type:"number",className:"inputQ",value:t.item.quantity,min:"1",onChange:t.changeQuantity(t.item.id)})]})]}),Object(c.jsx)("button",{type:"submit",onClick:t.addToCart(t.item.id),className:"button",children:"Add to Cart"})]})]})},t.key)},m=function(t){var e=t.listOfItems&&"all"===t.tagVisible?t.listOfItems.map((function(e){return Object(c.jsx)(p,{item:e,changeSize:t.changeSize,changeQuantity:t.changeQuantity,addToCart:t.addToCart,handleSubmit:t.handleSubmit,clickHeart:t.clickHeart,status:t.status},e.id)})):t.listOfItems.filter((function(e){return e.tag===t.tagVisible})).map((function(e){return Object(c.jsx)(p,{item:e,changeSize:t.changeSize,changeQuantity:t.changeQuantity,addToCart:t.addToCart,handleSubmit:t.handleSubmit,clickHeart:t.clickHeart,status:t.status},e.id)}));return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"tag",children:[Object(c.jsx)("button",{onClick:t.handleTag,value:"top",className:"button",children:"Top"}),Object(c.jsx)("button",{onClick:t.handleTag,value:"bottom",className:"button",children:"Bottom"}),Object(c.jsx)("button",{onClick:t.handleTag,value:"acc",className:"button",children:"Accessories"}),Object(c.jsx)("button",{onClick:t.handleTag,value:"all",className:"button",children:"All"})]}),Object(c.jsx)("div",{className:"cards",children:e})]})};var g=function(t){return Object(c.jsx)("nav",{className:"menu",children:Object(c.jsx)("ul",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)("li",{children:"Home"})}),Object(c.jsx)(b.b,{to:"/about",children:Object(c.jsx)("li",{children:"About"})}),Object(c.jsx)(b.b,{to:"/liked",children:Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{class:"fas fa-heart fa-sm"}),"Liked"]})}),Object(c.jsx)(b.b,{to:"/cart",children:Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{class:"fas fa-shopping-cart fa-sm"}),"Cart(",t.getTotalQuantity(),")"]})})]})})})};var O=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"About"})})},x=function(t){var e=t.cart&&t.cart.map((function(e){return Object(c.jsx)("div",{children:e.quantity>0&&Object(c.jsxs)("div",{className:"cart-item",children:[Object(c.jsx)("img",{src:e.img}),Object(c.jsx)("p",{children:e.name}),Object(c.jsx)("p",{children:e.size}),Object(c.jsxs)("p",{children:["$",d[e.id]]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("i",{onClick:function(){return t.clickMinus(e.id,e.size)},class:"fas fa-minus-circle"}),e.quantity,Object(c.jsx)("i",{onClick:function(){return t.clickPlus(e.id,e.size)},class:"fas fa-plus-circle"})]}),Object(c.jsxs)("p",{children:["$",d[e.id]*e.quantity]}),Object(c.jsx)("i",{onClick:function(){return t.clickTrash(e.id,e.size)},class:"fas fa-trash-alt fa-lg",style:{color:"darkred"}})]})})})),i=.08875*t.getSubtotal();return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{children:[Object(c.jsx)("i",{class:"fas fa-shopping-cart"})," CART (",t.getTotalQuantity(),"):"]}),Object(c.jsx)("div",{children:t.cartLength>0?Object(c.jsxs)("div",{className:"cart",children:[Object(c.jsxs)("div",{className:"cart-left",children:[Object(c.jsxs)("div",{className:"cart-label",children:[Object(c.jsx)("h4",{}),Object(c.jsx)("h4",{children:"Item"}),Object(c.jsx)("h4",{children:"Size"}),Object(c.jsx)("h4",{children:"Price"}),Object(c.jsx)("h4",{children:"Quantity"}),Object(c.jsx)("h4",{children:"Total"}),Object(c.jsx)("h4",{})]}),Object(c.jsx)("div",{children:e})]}),Object(c.jsxs)("div",{className:"cart-right",children:[Object(c.jsx)("h4",{children:"Order Summary"}),Object(c.jsxs)("div",{className:"cart-right-inside",children:[Object(c.jsxs)("div",{className:"cart-right-left",children:[Object(c.jsx)("p4",{children:"Subtotal:"}),Object(c.jsx)("br",{}),Object(c.jsx)("p4",{children:"Shipping:"}),Object(c.jsx)("br",{}),Object(c.jsx)("p4",{children:"Tax:"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("p4",{className:"total",children:"Total:"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",onClick:t.clearCart,className:"cart-button-checkout",children:"Checkout"})]}),Object(c.jsxs)("div",{className:"cart-right-right",children:[Object(c.jsxs)("p4",{children:["$",t.getSubtotal(),".00"]}),Object(c.jsx)("br",{}),Object(c.jsx)("p4",{children:"$4.99"}),Object(c.jsx)("br",{}),Object(c.jsxs)("p4",{children:["$",i.toFixed(2)]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("p4",{className:"total",children:["$",(t.getSubtotal()+4.99+i).toFixed(2)]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",onClick:t.clearCart,className:"cart-button",children:"Clear"})]})]})]})]}):Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"emptyCart",children:"Your Cart is Empty"})})})]})},f=function(t){var e=t.heart.map((function(t){return Object(c.jsx)("div",{className:"column",id:"items-liked",children:Object(c.jsxs)("div",{className:"item-liked",children:[Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("i",{class:"fas fa-heart fa-lg",id:"heart"})]}),Object(c.jsxs)("p",{children:["$",d[t.id]]}),Object(c.jsx)("img",{src:t.img,style:{height:150}}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"itemBottom"})]})})}));return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{children:["Liked ",Object(c.jsx)("i",{class:"fas fa-heart fa-sm",id:"heart"})]}),Object(c.jsx)("div",{children:e})]})},v=function(){var t,e=Object(a.useState)([]),i=Object(h.a)(e,2),s=i[0],n=i[1],r=Object(a.useState)("all"),p=Object(h.a)(r,2),v=p[0],y=p[1],z=Object(a.useState)([]),k=Object(h.a)(z,2),T=k[0],C=k[1],N=Object(a.useState)(!1),S=Object(h.a)(N,2),q=S[0],B=S[1],E=Object(a.useState)({items:[{id:1,name:"HB White Tee",size:"",quantity:0,tag:"top",img:"https://soospitz.github.io/pm-shop-react/images/top1.png",heart:!1},{id:2,name:"Flight Risk Back Tee",size:"",quantity:0,tag:"top",img:"https://soospitz.github.io/pm-shop-react/images/top2.png",heart:!1},{id:3,name:"Sword Tour Tee",size:"",price:0,quantity:0,tag:"top",img:"https://soospitz.github.io/pm-shop-react/images/top3.png",heart:!1},{id:4,name:"HB Cover Tee",size:"",price:0,quantity:0,tag:"top",img:"https://soospitz.github.io/pm-shop-react/images/top4.png",heart:!1},{id:5,name:"Portrait Tee",size:"",price:0,quantity:0,tag:"top",img:"https://soospitz.github.io/pm-shop-react/images/top5.png",heart:!1},{id:6,name:"HB Purple Tee",size:"",price:0,quantity:0,tag:"top",img:"https://soospitz.github.io/pm-shop-react/images/top6.png",heart:!1},{id:7,name:"Flight Risk Tee",size:"",price:0,quantity:0,tag:"top",img:"https://soospitz.github.io/pm-shop-react/images/top7.png",heart:!1},{id:8,name:"Flight Risk Longsleeve",size:"",price:0,quantity:0,tag:"top",img:"https://soospitz.github.io/pm-shop-react/images/top8.png",heart:!1},{id:9,name:"Sad But True Longsleeve",size:"",price:0,quantity:0,tag:"top",img:"https://soospitz.github.io/pm-shop-react/images/top9.png",heart:!1},{id:10,name:"Skull Tour Longsleeve",size:"",price:0,quantity:0,tag:"top",img:"https://soospitz.github.io/pm-shop-react/images/top10.png",heart:!1},{id:11,name:"Over Me Longsleeve",size:"",price:0,quantity:0,tag:"top",img:"https://soospitz.github.io/pm-shop-react/images/top11.png",heart:!1},{id:12,name:"Cover Sweatshorts",size:"",price:0,quantity:0,tag:"bottom",img:"https://soospitz.github.io/pm-shop-react/images/bottom.png",heart:!1},{id:13,name:"Runaway Tour Beanie",size:"",price:0,quantity:0,tag:"acc",img:"https://soospitz.github.io/pm-shop-react/images/acc1.png",heart:!1},{id:14,name:"HB Beanie",size:"",price:0,quantity:0,tag:"acc",img:"https://soospitz.github.io/pm-shop-react/images/acc2.png",heart:!1},{id:15,name:"Runaway Tour Black Tote",size:"",price:0,quantity:0,tag:"acc",img:"https://soospitz.github.io/pm-shop-react/images/acc3.png",heart:!1},{id:16,name:"Runaway Tour Natural Tote",size:"",price:0,quantity:0,tag:"acc",img:"https://soospitz.github.io/pm-shop-react/images/acc4.png"},{id:17,name:"De Saint-Trupes Hat",size:"",price:0,quantity:0,tag:"acc",img:"https://soospitz.github.io/pm-shop-react/images/acc5.png",heart:!1}]}),H=Object(h.a)(E,2),Q=H[0],L=H[1],I=function(t){y(t.target.value)},F=function(t){return function(e){console.log(e.target.value);var i=[];Q.items.forEach((function(c){var a=Object(j.a)({},c);c.id===t&&(a.size=e.target.value),console.log("copyItem",a),i.push(a)})),L(Object(j.a)(Object(j.a)({},Q),{},{items:i}))}},$=function(t){return function(e){console.log(e.target.value);var i=[];Q.items.forEach((function(c){var a=Object(j.a)({},c);c.id===t&&(a.quantity=parseInt(e.target.value)),console.log("copyItem",a),i.push(a)})),L(Object(j.a)(Object(j.a)({},Q),{},{items:i}))}},w=function(t){return function(){var e=[],i={};Q.items.forEach((function(e){e.id===t&&(i=e)}));var c=!1;s.forEach((function(t){t.id===i.id&&t.size===i.size?(i.quantity=t.quantity+i.quantity,e.push(i),c=!0):e.push(t)})),c||e.push(i);var a=[];Q.items.forEach((function(e){var i=Object(j.a)({},e);e.id===t&&(i.size="",i.quantity=0),a.push(i)})),L(Object(j.a)(Object(j.a)({},Q),{},{items:a})),n(e)}},P=function(){n([])},R=function(t){var e=Object(l.a)(s).filter((function(e){return e.id!==t}));n(e)},A=function(t,e){console.log(t,"plus clicked"),console.log(e,"plus size");var i=Object(l.a)(s);i.forEach((function(i){i.id===t&&i.size===e&&i.quantity--})),n(i)},M=function(t,e){var i=Object(l.a)(s);i.forEach((function(i){i.id===t&&i.size===e&&i.quantity++})),n(i)},V=function(){var t=0;return s.forEach((function(e){t+=e.quantity*d[e.id]})),t},D=function(){var t=0;return s.forEach((function(e){t=e.quantity+t})),t},J=function(t){console.log("Heart Clicked!");var e=[],i=Object(l.a)(Q.items);i.forEach((function(i){i.id===t&&(i.heart=!0,e.push(i)),B(!q)})),console.log(e,"likeditems"),e.forEach((function(e){e.id!==t||q||T.push(e)})),console.log(T,"heart"),C(T),L(Object(j.a)(Object(j.a)({},Q),{},{items:i}))};return Object(c.jsx)("div",{children:Object(c.jsxs)(b.a,{basename:"/",children:[Object(c.jsx)(u.a,{render:function(){return Object(c.jsx)(g,{getTotalQuantity:D})}}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,(t={exact:!0,path:"/"},Object(o.a)(t,"exact",!0),Object(o.a)(t,"render",(function(){return Object(c.jsx)(m,{listOfItems:Q.items,tagVisible:v,handleTag:I,changeSize:F,changeQuantity:$,addToCart:w,clickHeart:J,status:q})})),t)),Object(c.jsx)(u.a,{path:"/about",component:O}),Object(c.jsx)(u.a,{path:"/liked",exact:!0,render:function(){return Object(c.jsx)(f,{heart:T})}}),Object(c.jsx)(u.a,{path:"/cart",exact:!0,render:function(){return Object(c.jsx)(x,{cart:s,cartLength:s.length,getSubtotal:V,getTotalQuantity:D,clearCart:P,setCart:n,clickTrash:R,clickMinus:A,clickPlus:M})}}),Object(c.jsx)(u.a,{component:m})]})]})})},y=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,36)).then((function(e){var i=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,n=e.getTTFB;i(t),c(t),a(t),s(t),n(t)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),y()},9:function(t,e,i){}},[[35,1,2]]]);
//# sourceMappingURL=main.a6c40c28.chunk.js.map