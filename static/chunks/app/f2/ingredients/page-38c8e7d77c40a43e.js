(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[688],{2179:function(e,t,r){Promise.resolve().then(r.bind(r,7042))},7042:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7437),a=r(4519),d=r(4033);function s(){let e=(0,d.useRouter)(),{handleAddProduct:t,order:r,handleUpdateProduct:s,handleResetOrder:o,handleSetOrderStage:c,handleSetPayStage:i}=(0,a.Z)(),{products:u,targetOrderNumber:l}=r,p=u[l],{ingredients:x={}}=p||{},h=(e,t)=>{e.preventDefault();let r=e.currentTarget.getAttribute("data-text");if(console.log(r),!r)return;let n=x[r]||0,a="추가"===t?n+1:"빼기"===t?n-1:n,d={...x,[r]:a>=0?a:0};s(l,{ingredients:d})};return(0,n.jsxs)("div",{className:" w-full items-start",children:[(0,n.jsx)("div",{className:" flex justify-start",children:(0,n.jsx)("div",{className:" h-[300px] text-h1 font-bold pt-20 ml-10",children:"결제완료"})}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:" p-10",children:(0,n.jsxs)("table",{className:"table-fixed w-full text-[64px] text-center ",children:[(0,n.jsx)("thead",{className:" border-b-[1px] text-[50px] text-[#626262] font-normal",children:(0,n.jsxs)("tr",{className:" ",children:[(0,n.jsx)("th",{className:" w-1/5",children:"메뉴"}),(0,n.jsx)("th",{className:" w-1/5",children:"추가비용"}),(0,n.jsx)("th",{className:" w-3/5",children:"수량변경"})]})}),(0,n.jsx)("tbody",{children:[{text:"피클",id:"pickle"},{text:"토마토",id:"tomato"},{text:"양상추",id:"cabbage"},{text:"양파",id:"onion"},{text:"고기패티",id:"patty"},{text:"치즈",id:"cheese"}].map((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.text}),(0,n.jsx)("td",{children:"".concat(r.menuPrices.options[e.id],"원")}),(0,n.jsxs)("td",{className:" flex justify-center space-x-16 items-center",children:[(0,n.jsx)("div",{"data-text":e.text,onClick:e=>{h(e,"빼기")},className:" border rounded-3xl px-20 py-6 my-4",children:"빼기"}),(0,n.jsx)("div",{children:x[e.text]||0}),(0,n.jsx)("div",{"data-text":e.text,onClick:e=>{h(e,"추가")},className:" border rounded-3xl px-20 py-6 my-4",children:"추가"})]})]},e.text))})]})}),(0,n.jsx)("div",{className:" flex justify-center items-center ",children:(0,n.jsx)("div",{onClick:()=>{e.push("/f2")},className:"w-full rounded-[50px] bg-gray-Light_2 text-gray-Medium p-4 mx-20 shadow-lg text-h2 text-center",children:"뒤로 가기"})})]})}},4519:function(e,t,r){"use strict";var n=r(2993),a=r(8392),d=r(8035);t.Z=()=>{let e=(0,n.T)(),t=(0,n.C)(e=>e.order),r=async t=>{if(t instanceof Blob){let r=e((e,t)=>t()).order;try{let n=await e((0,d.M)(t));n.payload.burger?e((0,a.d1)(1)):2===r.orderStage?e((0,a.d1)(5)):e((0,a.d1)(2))}catch(e){console.error("Error processing voice:",e);return}}else{let r=e((e,t)=>t()).order;if(r.products.some(e=>e.orderNumber===t.orderNumber))return;e((0,a.gK)(t)),e((0,a.d1)(1))}};return{order:t,handleAddProduct:r,handleUpdateProduct:(t,r)=>{console.log(t,r),e((0,a.nM)({orderNumber:t,changes:r}))},handleRemoveProduct:t=>e((0,a.kh)(t)),handleResetOrder:()=>e((0,a.H8)()),handleSetTakeout:t=>e((0,a.O_)(t)),handleSetCurrentOrderNumber:t=>e((0,a.g0)(t)),handleSetOrderStage:t=>e((0,a.d1)(t)),handleSetPayStage:t=>e((0,a.q8)(t)),handleSetTargetOrderNumber:t=>e((0,a.V8)(t))}}},2993:function(e,t,r){"use strict";r.d(t,{C:function(){return d},T:function(){return a}});var n=r(3198);let a=()=>(0,n.I0)(),d=n.v9},8392:function(e,t,r){"use strict";r.d(t,{H8:function(){return i},O_:function(){return l},V8:function(){return m},d1:function(){return x},g0:function(){return p},gK:function(){return o},kh:function(){return c},nM:function(){return u},q8:function(){return h}});var n=r(64),a=r(8035);let d={products:[],isTakeout:!1,ok:!1,orderStage:0,payStage:0,currentOrderNumber:0,targetOrderNumber:0,menuPrices:{burger:{bigMac:[5900,8300],BTD:[5800,8200],bulgogi:[4500,5900]},options:{pickle:300,tomato:300,cabbage:300,onion:300,patty:1e3,cheese:500}}},s=(0,n.oM)({name:"order",initialState:d,reducers:{addProduct:(e,t)=>{e.products.push(t.payload)},removeProduct:(e,t)=>{e.products=e.products.filter(e=>e.orderNumber!==t.payload)},updateProduct:(e,t)=>{let{orderNumber:r,changes:n}=t.payload;console.log(r,n);let a=e.products.find(e=>e.orderNumber==r);a&&Object.assign(a,n),console.log(a)},resetOrder:()=>({...d}),setTakeout:(e,t)=>{e.isTakeout=t.payload},setOrderStage:(e,t)=>{e.orderStage=t.payload},setPayStage:(e,t)=>{e.payStage=t.payload},setCurrentOrderNumber:(e,t)=>{e.currentOrderNumber=t.payload},setTargetOrderNumber:(e,t)=>{e.targetOrderNumber=t.payload}},extraReducers:e=>{e.addCase(a.M.fulfilled,(e,t)=>{console.log(t.payload),t.payload.burger&&e.products.push({...t.payload,quantity:+t.payload.quantity||1,orderNumber:e.products.length,ingredients:{피클:0,토마토:0,양상추:0,양파:0,패티:0,치즈:0}})}),e.addCase(a.M.rejected,(e,t)=>{})}}),{addProduct:o,removeProduct:c,resetOrder:i,updateProduct:u,setTakeout:l,setCurrentOrderNumber:p,setOrderStage:x,setPayStage:h,setTargetOrderNumber:m}=s.actions;t.ZP=s.reducer},8035:function(e,t,r){"use strict";r.d(t,{M:function(){return a}});var n=r(64);let a=(0,n.hg)("order/processVoiceForOrder",async e=>{let t=new FormData;t.append("audio_file",e,"audio.webm");let r=await fetch("https://sr-kiosk-api-shs2783.koyeb.app/api/stt/menu",{method:"POST",headers:{accept:"application/json"},body:t}),n=await r.json();if(!r.ok)throw Error("Server responded with a non-200 status");return n.menu})},4033:function(e,t,r){e.exports=r(8165)}},function(e){e.O(0,[713,971,596,744],function(){return e(e.s=2179)}),_N_E=e.O()}]);