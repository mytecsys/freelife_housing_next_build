"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[598],{74737:function(e,s,t){t.r(s),t.d(s,{default:function(){return g}});var l=t(3827),o=t(54272),n=t(82508),a=t(10470),r=t(29835),i=t(6285),c=t(20703);t(47587);var d=t(79789);t(8792);var m=t(92026),x=t(47907),h=t(10242),p=t(64090);function g(e){let{close:s}=e;(0,x.useRouter)();let[t,g]=(0,p.useState)({mobno:"",password:""}),[f,u]=(0,p.useState)({mobno:"",password:""}),j=e=>{let{name:s,value:t}=e.target;g(e=>({...e,[s]:t})),u(e=>({...e,[s]:""}))},y=async()=>{let e={};if(""===t.mobno.trim()&&(e.mobno="Mobile number is required"),""===t.password.trim()&&(e.password="Password is required"),u(e),!Object.values(e).every(e=>""===e))return!1;{let e="".concat(h.Z.baseurl,"auth/login");try{let l=await (0,m.Lx)(e,t,"POST");!1===l.error?(localStorage.setItem("token",l.token),g({mobno:"",password:""}),s(),console.log("login sucessfully--",l)):toast.error(l.message,{position:"top-right",theme:"light"})}catch(e){throw e}}};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.Z,{children:(0,l.jsx)(n.ZP,{container:!0,children:(0,l.jsx)(n.ZP,{item:!0,lg:12,md:12,xs:12,children:(0,l.jsx)("div",{className:" right-side-container",children:(0,l.jsx)(a.Z,{style:{boxShadow:"none"},children:(0,l.jsxs)(o.Z,{style:{padding:"0px 15px",margin:"auto"},className:"mainBox",children:[(0,l.jsx)("div",{style:{marginBottom:"25px",marginTop:"15px"},className:"logoImg",children:(0,l.jsx)(c.default,{src:d.Z})}),(0,l.jsx)(r.Z,{variant:"h5",fontWeight:600,className:"variantH5",children:"Welcome Back to FreeLife Housing!"}),(0,l.jsx)(r.Z,{color:"#8E8E8E",className:"variant",children:"Log in to your account"}),(0,l.jsxs)(o.Z,{style:{marginTop:"20px"},children:[(0,l.jsxs)("div",{className:"loginregwrap",children:[(0,l.jsx)("label",{className:"loginreglabel font-weight-bold",children:"Mobile Number"}),(0,l.jsx)("input",{type:"text",id:"mobno",name:"mobno",value:t.mobno,onChange:j,placeholder:"Enter mobile number",className:"loginRegInput"}),f.mobno&&(0,l.jsx)("span",{className:"error",children:f.mobno})]}),(0,l.jsxs)("div",{className:"loginregwrap",children:[(0,l.jsx)("label",{className:"loginreglabel font-weight-bold",children:"Password"}),(0,l.jsx)("input",{type:"password",id:"password",name:"password",value:t.password,onChange:j,placeholder:"Enter password",className:"loginRegInput"}),f.password&&(0,l.jsx)("span",{className:"error",children:f.password})]})]}),(0,l.jsx)(i.Z,{variant:"contained",className:"freehousing_button addbutton",style:{textTransform:"none",width:"100%",margin:"15px 0"},onClick:y,children:"Login"})]})})})})})})})}},80843:function(e,s,t){t.r(s),t.d(s,{default:function(){return f}});var l=t(3827),o=t(54272),n=t(82508),a=t(29835),r=t(90144),i=t(73995),c=t(43206),d=t(8792),m=t(10752),x=t(2144),h=t(8203),p=t(79789),g=t(20703);function f(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.Z,{className:"foot_wrapper",children:[(0,l.jsxs)(n.ZP,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",style:{paddingBottom:"20px"},className:"grid-container",children:[(0,l.jsxs)(n.ZP,{item:!0,lg:4,md:5,sm:6,xs:12,className:"itemBox",children:[(0,l.jsx)(o.Z,{display:"flex",justifyContent:"center",alignItems:"center",className:"foot-img",children:(0,l.jsx)(g.default,{src:p.Z,style:{width:"180px",padding:"8px 0px"}})}),(0,l.jsx)(o.Z,{textAlign:"center",children:(0,l.jsxs)(a.Z,{className:"foot_items",children:["46, Yogakshem Layout, Sneh Nagar, ",(0,l.jsx)("br",{}),"Near Chhatrapati Chowk, Nagpur -440015 ",(0,l.jsx)("br",{}),"Email: info@freelifesystem.com ",(0,l.jsx)("br",{}),"Call us: +91 9325993543"]})})]}),(0,l.jsx)(n.ZP,{item:!0,lg:2,md:2,sm:6,xs:6,className:"centered-list",children:(0,l.jsxs)(o.Z,{className:"itemBox",children:[(0,l.jsx)(a.Z,{className:"footerHead",style:{fontWeight:600,color:"#6D6C6C"},variant:"h6",children:"Services"}),(0,l.jsx)(r.Z,{children:(0,l.jsxs)(i.ZP,{style:{display:"flex",flexDirection:"column",alignItems:"left",alignItems:"baseline"},children:[(0,l.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"Buy Property"}),(0,l.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"Sell Property"}),(0,l.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"Rent Property"})]})})]})}),(0,l.jsx)(n.ZP,{item:!0,lg:2,md:2,sm:6,xs:6,className:"centered-list",children:(0,l.jsxs)(o.Z,{className:"itemBox",children:[(0,l.jsx)(a.Z,{className:"footerHead",style:{fontWeight:600,color:"#6D6C6C"},variant:"h6",children:"Company"}),(0,l.jsx)(r.Z,{children:(0,l.jsxs)(i.ZP,{style:{display:"flex",flexDirection:"column",alignItems:"left",alignItems:"left",alignItems:"baseline"},children:[(0,l.jsx)(d.default,{href:"https://freelifesystem.com/#about",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"About Us"}),(0,l.jsx)(d.default,{href:"https://freelifesystem.com/#contactus",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"Contact Us"}),(0,l.jsx)(d.default,{href:"https://freelifesystem.com/#team",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"Our Team"})]})})]})}),(0,l.jsx)(n.ZP,{item:!0,lg:2,md:2,sm:6,xs:6,className:"centered-list",children:(0,l.jsxs)(o.Z,{className:"itemBox",children:[(0,l.jsx)(a.Z,{className:"footerHead",style:{fontWeight:600,color:"#6D6C6C"},variant:"h6",children:"Support"}),(0,l.jsx)(r.Z,{children:(0,l.jsxs)(i.ZP,{style:{display:"flex",flexDirection:"column",alignItems:"left",alignItems:"left",alignItems:"baseline"},children:[(0,l.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"FAQ’S"}),(0,l.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"Support Center"}),(0,l.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},className:"foot_items",children:"Help Center"})]})})]})}),(0,l.jsx)(n.ZP,{item:!0,lg:2,md:1,sm:12,xs:6,children:(0,l.jsxs)(o.Z,{className:"iconBox",children:[(0,l.jsx)(d.default,{href:"https://www.facebook.com/freelifehousing",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:(0,l.jsx)(c.Z,{children:(0,l.jsx)(h.Z,{className:"footerItemIcon",style:{width:"40px",height:"40px"}})})}),(0,l.jsx)(d.default,{href:"https://www.instagram.com/freelifehousing/",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:(0,l.jsx)(c.Z,{children:(0,l.jsx)(m.Z,{className:"footerItemIcon",style:{width:"40px",height:"40px"}})})}),(0,l.jsx)(d.default,{href:"https://www.youtube.com/@FreeLifeHousing",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:(0,l.jsx)(c.Z,{children:(0,l.jsx)(x.Z,{className:"footerItemIcon",style:{width:"40px",height:"40px"}})})})]})})]}),(0,l.jsx)("hr",{}),(0,l.jsx)("small",{className:"footertext",style:{color:"rgb(141 136 136)"},children:"Copyright \xae 2023 FreeLife System Pvt. Ltd All rights Reserved"})]})})}},47587:function(e,s){s.Z={src:"/_next/static/media/loginRegister.04c1af2b.png",height:1080,width:959,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAqElEQVR42iWLPQrCQBBGZ2ZXoxINbIRYKBZWgoInsfYoHsfOxtKjiJ0g2sSgJJCg+VlnjPoVH7wHD3eHEBEAvscirhIW0LYqX1laa1sW2vUC41pmTQhiq4bTwk531GsnlaQWqWTKyWHtGN/UKCJNArWYBMf9dnW5zsd+5Jm4EI2oNuvHcjZQoSRPPA+nJAyIpHQfCG93yqWpEP4jlrdCPEVZnNu6lZ/9ACvuRTr4WoR/AAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}}}]);