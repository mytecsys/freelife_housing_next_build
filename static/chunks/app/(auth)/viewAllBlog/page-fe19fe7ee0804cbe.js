(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{16524:function(e,t,r){Promise.resolve().then(r.bind(r,24642))},10907:function(e,t,r){"use strict";var s=r(60891);t.Z=void 0;var o=s(r(19438)),i=r(3827);t.Z=(0,o.default)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward")},28738:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var s=r(70444),o=r(14749),i=r(64090),n=r(75504),a=r(44174),l=r(58836),c=r(93043),d=r(86761),m=r(70533);function x(e){return(0,m.ZP)("MuiCardActions",e)}(0,d.Z)("MuiCardActions",["root","spacing"]);var f=r(3827);let u=["disableSpacing","className"],h=e=>{let{classes:t,disableSpacing:r}=e;return(0,a.Z)({root:["root",!r&&"spacing"]},x,t)},p=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})(e=>{let{ownerState:t}=e;return(0,o.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})});var g=i.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:i=!1,className:a}=r,l=(0,s.Z)(r,u),d=(0,o.Z)({},r,{disableSpacing:i}),m=h(d);return(0,f.jsx)(p,(0,o.Z)({className:(0,n.Z)(m.root,a),ownerState:d,ref:t},l))})},95996:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var s=r(14749),o=r(70444),i=r(64090),n=r(75504),a=r(44174),l=r(58836),c=r(93043),d=r(86761),m=r(70533);function x(e){return(0,m.ZP)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var f=r(3827);let u=["className","component"],h=e=>{let{classes:t}=e;return(0,a.Z)({root:["root"]},x,t)},p=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}}));var g=i.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:i,component:a="div"}=r,l=(0,o.Z)(r,u),d=(0,s.Z)({},r,{component:a}),m=h(d);return(0,f.jsx)(p,(0,s.Z)({as:a,className:(0,n.Z)(m.root,i),ownerState:d,ref:t},l))})},3340:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var s=r(70444),o=r(14749),i=r(64090),n=r(75504),a=r(44174),l=r(93043),c=r(58836),d=r(86761),m=r(70533);function x(e){return(0,m.ZP)("MuiCardMedia",e)}(0,d.Z)("MuiCardMedia",["root","media","img"]);var f=r(3827);let u=["children","className","component","image","src","style"],h=e=>{let{classes:t,isMediaComponent:r,isImageComponent:s}=e;return(0,a.Z)({root:["root",r&&"media",s&&"img"]},x,t)},p=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e,{isMediaComponent:s,isImageComponent:o}=r;return[t.root,s&&t.media,o&&t.img]}})(e=>{let{ownerState:t}=e;return(0,o.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})}),g=["video","audio","picture","iframe","img"],Z=["picture","img"];var j=i.forwardRef(function(e,t){let r=(0,l.Z)({props:e,name:"MuiCardMedia"}),{children:i,className:a,component:c="div",image:d,src:m,style:x}=r,j=(0,s.Z)(r,u),y=-1!==g.indexOf(c),D=!y&&d?(0,o.Z)({backgroundImage:'url("'.concat(d,'")')},x):x,v=(0,o.Z)({},r,{component:c,isMediaComponent:y,isImageComponent:-1!==Z.indexOf(c)}),N=h(v);return(0,f.jsx)(p,(0,o.Z)({className:(0,n.Z)(N.root,a),as:c,role:!y&&d?"img":void 0,ref:t,style:D,ownerState:v,src:y?d||m:void 0},j,{children:i}))})},85195:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var s=r(14749),o=r(70444),i=r(64090),n=r(75504),a=r(44174),l=r(58836),c=r(93043),d=r(10470),m=r(86761),x=r(70533);function f(e){return(0,x.ZP)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var u=r(3827);let h=["className","raised"],p=e=>{let{classes:t}=e;return(0,a.Z)({root:["root"]},f,t)},g=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"}));var Z=i.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiCard"}),{className:i,raised:a=!1}=r,l=(0,o.Z)(r,h),d=(0,s.Z)({},r,{raised:a}),m=p(d);return(0,u.jsx)(g,(0,s.Z)({className:(0,n.Z)(m.root,i),elevation:a?8:void 0,ref:t,ownerState:d},l))})},24642:function(e,t,r){"use strict";r.r(t);var s=r(3827),o=r(64090),i=r(32609),n=r(54272),a=r(82508),l=r(29835),c=r(85195),d=r(3340),m=r(95996),x=r(28738),f=r(6285),u=r(10907),h=r(10242),p=r(92026);r(8792);var g=r(47907),Z=r(80843);t.default=()=>{let[e,t]=(0,o.useState)([]),[r,j]=(0,o.useState)(1),y=(0,g.useRouter)(),D=e=>{y.push("/viewSingleBlog?blogId=".concat(e))},v=async()=>{try{let e=localStorage.getItem("token"),s="".concat(h.Z.baseurl,"api/viewAllBlogNext"),o=await (0,p.$h)(s,{offset:(r-1)*10,limit:10},e);o&&!1===o.error?1===r?t(o.BlogList.slice(0,10)):t(e=>[...e,...o.BlogList]):console.error("Error fetching blogs:",o&&o.message)}catch(e){console.error("Error:",e)}};return(0,o.useEffect)(()=>{v()},[r]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.default,{}),(0,s.jsxs)("div",{className:"container",style:{margin:"0 20px"},children:[(0,s.jsx)(n.Z,{style:{margin:"30px 0 50px 0"},children:(0,s.jsxs)(a.ZP,{container:!0,children:[" ",(0,s.jsxs)(a.ZP,{item:!0,xs:12,sm:10,md:8,lg:6,children:[(0,s.jsxs)(l.Z,{variant:"h6",fontWeight:700,align:"justify",children:[" ","The Most Recent Local Real Estate News"]}),(0,s.jsxs)(l.Z,{color:"#535353",style:{marginTop:"10px"},align:"justify",children:[" ","Lorem Ipsum is simply dummy text"]})]})]})}),(0,s.jsx)(a.ZP,{container:!0,spacing:3,children:e.map((e,t)=>{var r,o;return(0,s.jsx)(a.ZP,{item:!0,xs:12,lg:4,md:4,sm:6,onClick:()=>D(e._id),children:(0,s.jsxs)(c.Z,{style:{padding:"10px",border:"1px solid #202020",boxShadow:"none",height:"100%",display:"flex",flexDirection:"column"},children:[e.blogImg?(0,s.jsx)(d.Z,{sx:{height:170},image:e.blogImg,title:"Blog Image",style:{objectFit:"cover"}}):e.youtubeLink&&(0,s.jsx)("iframe",{title:"Blog Video",width:"100%",height:"170",src:e.youtubeLink,frameBorder:"0",allowFullScreen:!0,style:{borderRadius:"4px",marginBottom:"10px"}}),(0,s.jsxs)(m.Z,{style:{flexGrow:1,display:"flex"},children:[(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(l.Z,{gutterBottom:!0,variant:"h6",component:"div",className:"head1",style:{fontSize:"1rem",fontWeight:"600"},children:(r=e.title)?r.charAt(0).toUpperCase()+r.slice(1):""}),(0,s.jsx)(l.Z,{variant:"body2",color:"text.secondary",className:"headDate",children:new Date(e.createdAt).toLocaleDateString()})]}),(0,s.jsx)(n.Z,{style:{marginLeft:"auto"},children:(0,s.jsx)(l.Z,{gutterBottom:!0,variant:"h6",component:"div",className:"head1",style:{fontSize:"1rem",fontWeight:"600"},children:(o=e.category)?o.charAt(0).toUpperCase()+o.slice(1):""})})]}),(0,s.jsx)(x.Z,{children:(0,s.jsx)(n.Z,{style:{marginTop:"auto",marginRight:"auto"},children:(0,s.jsxs)(f.Z,{onClick:()=>D(e._id),style:{textDecoration:"none",color:"#3D3D3D",display:"flex",alignItems:"center"},className:"viewBlog",children:["View",(0,s.jsx)(u.Z,{className:"viewArrow",style:{marginLeft:"7px"}})]})})})]})},t)})}),e.length>=10&&(0,s.jsx)(n.Z,{display:"flex",justifyContent:"center",marginTop:"20px",children:(0,s.jsx)(f.Z,{onClick:()=>{j(e=>e+1)},variant:"outlined",children:"View More"})})]}),(0,s.jsx)(Z.default,{})]})}},80843:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var s=r(3827),o=r(54272),i=r(82508),n=r(29835),a=r(90144),l=r(73995),c=r(43206),d=r(8792),m=r(10752),x=r(2144),f=r(8203),u=r(79789),h=r(20703);function p(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.Z,{className:"foot_wrapper",children:[(0,s.jsxs)(i.ZP,{container:!0,spacing:2,style:{paddingBottom:"20px"},className:"grid-container",children:[(0,s.jsxs)(i.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,className:"itemBox",children:[(0,s.jsx)(o.Z,{display:"flex",alignItems:"center",children:(0,s.jsx)(h.default,{src:u.Z,style:{width:"180px",padding:"8px 0px"}})}),(0,s.jsx)(o.Z,{children:(0,s.jsxs)(n.Z,{fontSize:"15px",className:"foot_items",children:["46, Yogakshem Layout, Sneh Nagar, Near Chhatrapati Chowk, Nagpur -440015",(0,s.jsx)("br",{}),"Email: info@freelifesystem.com",(0,s.jsx)("br",{}),"Call us: +91 9325993543"]})})]}),(0,s.jsx)(i.ZP,{item:!0,lg:2,md:2,sm:6,xs:6,className:"centered-list",children:(0,s.jsxs)(o.Z,{className:"itemBox",children:[(0,s.jsx)(n.Z,{className:"footerHead",style:{fontWeight:600,color:"#6D6C6C"},variant:"h6",children:"Services"}),(0,s.jsx)(a.Z,{children:(0,s.jsxs)(l.ZP,{style:{display:"flex",flexDirection:"column",alignItems:"left",alignItems:"baseline"},children:[(0,s.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"Buy Property"}),(0,s.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"Sell Property"}),(0,s.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"Rent Property"})]})})]})}),(0,s.jsx)(i.ZP,{item:!0,lg:2,md:2,sm:6,xs:6,className:"centered-list",children:(0,s.jsxs)(o.Z,{className:"itemBox",children:[(0,s.jsx)(n.Z,{className:"footerHead",style:{fontWeight:600,color:"#6D6C6C"},variant:"h6",children:"Company"}),(0,s.jsx)(a.Z,{children:(0,s.jsxs)(l.ZP,{style:{display:"flex",flexDirection:"column",alignItems:"left",alignItems:"left",alignItems:"baseline"},children:[(0,s.jsx)(d.default,{href:"https://freelifesystem.com/#about",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"About Us"}),(0,s.jsx)(d.default,{href:"https://freelifesystem.com/#contactus",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"Contact Us"}),(0,s.jsx)(d.default,{href:"https://freelifesystem.com/#team",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"Our Team"})]})})]})}),(0,s.jsx)(i.ZP,{item:!0,lg:2,md:2,sm:6,xs:6,className:"centered-list",children:(0,s.jsxs)(o.Z,{className:"itemBox",children:[(0,s.jsx)(n.Z,{className:"footerHead",style:{fontWeight:600,color:"#6D6C6C"},variant:"h6",children:"Support"}),(0,s.jsx)(a.Z,{children:(0,s.jsxs)(l.ZP,{style:{display:"flex",flexDirection:"column",alignItems:"left",alignItems:"left",alignItems:"baseline"},children:[(0,s.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"FAQ’S"}),(0,s.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"Support Center"}),(0,s.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"Help Center"})]})})]})}),(0,s.jsx)(i.ZP,{item:!0,lg:2,md:2,sm:12,xs:6,children:(0,s.jsxs)(o.Z,{className:"iconBox",children:[(0,s.jsx)(d.default,{href:"https://www.facebook.com/freelifehousing",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:(0,s.jsx)(c.Z,{children:(0,s.jsx)(f.Z,{className:"footerItemIcon",style:{width:"40px",height:"40px"}})})}),(0,s.jsx)(d.default,{href:"https://www.instagram.com/freelifehousing/",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:(0,s.jsx)(c.Z,{children:(0,s.jsx)(m.Z,{className:"footerItemIcon",style:{width:"40px",height:"40px"}})})}),(0,s.jsx)(d.default,{href:"https://www.youtube.com/@FreeLifeHousing",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:(0,s.jsx)(c.Z,{children:(0,s.jsx)(x.Z,{className:"footerItemIcon",style:{width:"40px",height:"40px"}})})})]})})]}),(0,s.jsx)("hr",{}),(0,s.jsx)("small",{className:"footertext",style:{color:"rgb(141 136 136)"},children:"Copyright \xae 2023 FreeLife System Pvt. Ltd All rights Reserved"})]})})}}},function(e){e.O(0,[650,792,537,732,824,971,69,744],function(){return e(e.s=16524)}),_N_E=e.O()}]);