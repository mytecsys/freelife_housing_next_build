(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[700],{9065:function(e,t,s){Promise.resolve().then(s.bind(s,61102))},12486:function(e,t,s){"use strict";var r=s(60891);t.Z=void 0;var n=r(s(19438)),l=s(3827);t.Z=(0,n.default)((0,l.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"}),"Favorite")},85195:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var r=s(14749),n=s(70444),l=s(64090),i=s(75504),o=s(44174),a=s(58836),c=s(93043),d=s(10470),x=s(86761),h=s(70533);function f(e){return(0,h.ZP)("MuiCard",e)}(0,x.Z)("MuiCard",["root"]);var p=s(3827);let g=["className","raised"],m=e=>{let{classes:t}=e;return(0,o.Z)({root:["root"]},f,t)},j=(0,a.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"}));var u=l.forwardRef(function(e,t){let s=(0,c.Z)({props:e,name:"MuiCard"}),{className:l,raised:o=!1}=s,a=(0,n.Z)(s,g),d=(0,r.Z)({},s,{raised:o}),x=m(d);return(0,p.jsx)(j,(0,r.Z)({className:(0,i.Z)(x.root,l),elevation:o?8:void 0,ref:t,ownerState:d},a))})},61102:function(e,t,s){"use strict";s.r(t);var r=s(3827),n=s(64090),l=s(80843),i=s(49239),o=s(93299),a=s(57572),c=s(54272),d=s(82508),x=s(85195),h=s(29835),f=s(12486),p=s(10242),g=s(92026),m=s(90588),j=s(9608);t.default=()=>{let[e,t]=(0,n.useState)([]),s=e=>e?"object"==typeof e?"".concat(e.minpgRent," - ").concat(e.maxpgRent):e>=1e7?"".concat((e/1e7).toFixed(1),"cr"):e>=1e5?"".concat((e/1e5).toFixed(1),"L"):e>=1e3?"".concat((e/1e3).toFixed(0),"k"):e.toString():"",u=async()=>{try{let e=localStorage.getItem("token"),s=localStorage.getItem("userId"),r="".concat(p.Z.baseurl,"api/viewWishlist"),n=await (0,g.$h)(r,{user_id:s},e);console.log("all whislist response",n),t(n.wishlist||[])}catch(e){console.error("Error:",e)}};return(0,n.useEffect)(()=>{u()},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(c.Z,{className:"content_wrapper",children:(0,r.jsx)(d.ZP,{container:!0,spacing:2,children:e.map((e,t)=>(0,r.jsx)(d.ZP,{item:!0,xs:12,md:4,lg:3,children:(0,r.jsxs)(x.Z,{children:[(0,r.jsx)("img",{src:e.imageUrls&&e.imageUrls[0],alt:"",style:{width:"100%",height:200,objectFit:"cover"}}),(0,r.jsxs)(c.Z,{p:2,children:[(0,r.jsxs)(c.Z,{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsxs)(h.Z,{variant:"h6",fontWeight:600,children:["₹",s(e.monthlyRent)]}),(0,r.jsx)(f.Z,{style:{fill:"#f60202"}})]}),(0,r.jsxs)(h.Z,{variant:"h6",pb:1,children:["Located at ",e.searchCity]}),(0,r.jsx)(c.Z,{display:"flex",alignItems:"center",children:(0,r.jsx)(c.Z,{mr:2,children:(0,r.jsx)(h.Z,{variant:"body2",children:(0,r.jsxs)(c.Z,{display:"flex",alignItems:"center",children:[e.bhk&&(0,r.jsxs)(c.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,r.jsx)(o.Z,{style:{color:"gray",marginRight:"5px"}}),(0,r.jsx)(h.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:e.bhk})]}),e.washroom&&(0,r.jsxs)(c.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,r.jsx)(a.Z,{style:{color:"gray",marginRight:"5px"}}),(0,r.jsxs)(h.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:[e.washroom," Washrooms"]})]}),e.yourFloor&&(0,r.jsxs)(c.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,r.jsx)(m.Z,{style:{color:"gray",marginRight:"5px"}}),(0,r.jsxs)(h.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:[function(e){let t=["th","st","nd","rd"],s=e%100;return e+(t[(s-20)%10]||t[s]||"th")}(parseInt(e.yourFloor))," ","Floor"]})]}),e.pgIsFor&&(0,r.jsxs)(c.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,r.jsx)(j.Z,{style:{color:"gray",marginRight:"5px"}}),(0,r.jsxs)(h.Z,{variant:"body2",children:["PG for ",e.pgIsFor]})]})]})})})})]})]})},t))})}),(0,r.jsx)(l.default,{})]})}},80843:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var r=s(3827),n=s(54272),l=s(82508),i=s(29835),o=s(90144),a=s(73995),c=s(43206),d=s(8792),x=s(10752),h=s(2144),f=s(8203),p=s(79789),g=s(20703);function m(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(n.Z,{className:"foot_wrapper",style:{paddingLeft:"100px",paddingRight:"100px"},children:[(0,r.jsxs)(l.ZP,{container:!0,spacing:2,style:{paddingBottom:"50px"},children:[(0,r.jsxs)(l.ZP,{item:!0,lg:4,md:4,xs:12,children:[(0,r.jsx)(n.Z,{display:"flex",alignItems:"center",children:(0,r.jsx)(g.default,{src:p.Z,style:{width:"180px",padding:"8px 0px"}})}),(0,r.jsx)(n.Z,{children:(0,r.jsxs)(i.Z,{fontSize:"15px",children:["46, Yogakshem Layout, Sneh Nagar, Near Chhatrapati Chowk, Nagpur -440015",(0,r.jsx)("br",{}),"Email: info@freelifesystem.com",(0,r.jsx)("br",{}),"Call us: +91 9325993543"]})})]}),(0,r.jsx)(l.ZP,{item:!0,lg:2,md:2,xs:4,children:(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(i.Z,{style:{fontWeight:600,color:"#6D6C6C"},variant:"h6",children:"Services"}),(0,r.jsx)(o.Z,{children:(0,r.jsxs)(a.ZP,{style:{display:"flex",flexDirection:"column",alignItems:"left",alignItems:"baseline"},className:"foot_items",children:[(0,r.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"Buy Property"}),(0,r.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"Sell Property"}),(0,r.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"Rent Property"})]})})]})}),(0,r.jsx)(l.ZP,{item:!0,lg:2,md:2,xs:4,children:(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(i.Z,{style:{fontWeight:600,color:"#6D6C6C"},variant:"h6",children:"Company"}),(0,r.jsx)(o.Z,{children:(0,r.jsxs)(a.ZP,{style:{display:"flex",flexDirection:"column",alignItems:"left",alignItems:"left",alignItems:"baseline"},className:"foot_items",children:[(0,r.jsx)(d.default,{href:"https://freelifesystem.com/#about",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"About Us"}),(0,r.jsx)(d.default,{href:"https://freelifesystem.com/#contactus",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"Contact Us"}),(0,r.jsx)(d.default,{href:"https://freelifesystem.com/#team",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"Our Team"})]})})]})}),(0,r.jsx)(l.ZP,{item:!0,lg:2,md:2,xs:4,children:(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(i.Z,{style:{fontWeight:600,color:"#6D6C6C"},variant:"h6",children:"Support"}),(0,r.jsx)(o.Z,{children:(0,r.jsxs)(a.ZP,{style:{display:"flex",flexDirection:"column",alignItems:"left",alignItems:"left",alignItems:"baseline"},className:"foot_items",children:[(0,r.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"FAQ’S"}),(0,r.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"Support Center"}),(0,r.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"Help Center"})]})})]})}),(0,r.jsx)(l.ZP,{item:!0,lg:2,md:2,children:(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(d.default,{href:"https://www.facebook.com/freelifehousing",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(f.Z,{style:{width:"40px",height:"40px"}})})}),(0,r.jsx)(d.default,{href:"https://www.instagram.com/freelifehousing/",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(x.Z,{style:{width:"40px",height:"40px"}})})}),(0,r.jsx)(d.default,{href:"https://www.youtube.com/@FreeLifeHousing",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(h.Z,{style:{width:"40px",height:"40px"}})})})]})})]}),(0,r.jsx)("hr",{}),(0,r.jsx)("small",{style:{color:"rgb(141 136 136)"},children:"Copyright \xae 2023 FreeLife System Pvt. Ltd All rights Reserved"})]})})}}},function(e){e.O(0,[934,792,703,537,601,506,971,69,744],function(){return e(e.s=9065)}),_N_E=e.O()}]);