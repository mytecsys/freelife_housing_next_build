(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75],{41057:function(e,t,s){Promise.resolve().then(s.bind(s,79108))},74737:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var l=s(3827),i=s(54272),r=s(82508),a=s(10470),n=s(29835),o=s(6285),d=s(20703);s(47587);var c=s(79789);s(8792);var p=s(92026),g=s(47907),x=s(10242),h=s(64090);function m(e){let{close:t}=e;(0,g.useRouter)();let[s,m]=(0,h.useState)({mobno:"",password:""}),[y,j]=(0,h.useState)({mobno:"",password:""}),f=e=>{let{name:t,value:s}=e.target;m(e=>({...e,[t]:s})),j(e=>({...e,[t]:""}))},u=async()=>{let e={};if(""===s.mobno.trim()&&(e.mobno="Mobile number is required"),""===s.password.trim()&&(e.password="Password is required"),j(e),!Object.values(e).every(e=>""===e))return!1;{let e="".concat(x.Z.baseurl,"auth/login");try{let l=await (0,p.Lx)(e,s,"POST");!1===l.error?(localStorage.setItem("token",l.token),m({mobno:"",password:""}),t(),console.log("login sucessfully--",l)):toast.error(l.message,{position:"top-right",theme:"light"})}catch(e){throw e}}};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.Z,{children:(0,l.jsx)(r.ZP,{container:!0,children:(0,l.jsx)(r.ZP,{item:!0,lg:12,md:12,xs:12,children:(0,l.jsx)("div",{className:" right-side-container",children:(0,l.jsx)(a.Z,{style:{boxShadow:"none"},children:(0,l.jsxs)(i.Z,{style:{padding:"0px 15px",margin:"auto"},className:"mainBox",children:[(0,l.jsx)("div",{style:{marginBottom:"25px",marginTop:"15px"},className:"logoImg",children:(0,l.jsx)(d.default,{src:c.Z})}),(0,l.jsx)(n.Z,{variant:"h5",fontWeight:600,className:"variantH5",children:"Welcome Back to FreeLife Housing!"}),(0,l.jsx)(n.Z,{color:"#8E8E8E",className:"variant",children:"Log in to your account"}),(0,l.jsxs)(i.Z,{style:{marginTop:"20px"},children:[(0,l.jsxs)("div",{className:"loginregwrap",children:[(0,l.jsx)("label",{className:"loginreglabel font-weight-bold",children:"Mobile Number"}),(0,l.jsx)("input",{type:"text",id:"mobno",name:"mobno",value:s.mobno,onChange:f,placeholder:"Enter mobile number",className:"loginRegInput"}),y.mobno&&(0,l.jsx)("span",{className:"error",children:y.mobno})]}),(0,l.jsxs)("div",{className:"loginregwrap",children:[(0,l.jsx)("label",{className:"loginreglabel font-weight-bold",children:"Password"}),(0,l.jsx)("input",{type:"password",id:"password",name:"password",value:s.password,onChange:f,placeholder:"Enter password",className:"loginRegInput"}),y.password&&(0,l.jsx)("span",{className:"error",children:y.password})]})]}),(0,l.jsx)(o.Z,{variant:"contained",className:"freehousing_button addbutton",style:{textTransform:"none",width:"100%",margin:"15px 0"},onClick:u,children:"Login"})]})})})})})})})}},79108:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return G}});var l=s(3827),i=s(64090),r=s(77489),a=s(54272),n=s(14332),o=s(41224),d=s(82508),c=s(29835),p=s(6285),g=s(10470),x=s(53098),h=s(72921),m=s(28089),y=s(36847),j=s(68620),f=s(64845),u=s(86520),v=s(30412),b=s(98430),Z=s(4558),w=s(20360);s(20283),s(11554);var N=s(93299),_=s(57572),S=s(138);s(55768),s(8694);var C=s(32609),T=s(7380),A=s(92026),R=s(55549),I=s(10242),k=s(45466),P=s(47907),D=s(56251),B=s(43206),L=s(79309),W=s(19723),F=s(8792),O=s(25958),E=s(65593),M=s(90588),z=s(9608),U=s(74737);function G(){var e,t,s,G,H,$,q;let[J,Y]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=()=>{Y(window.scrollY>0)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let K=(0,P.useRouter)(),Q=(0,P.useSearchParams)().keys().next().value;console.log("propertyId--->>>",Q);let[V,X]=(0,i.useState)([]),[ee,et]=(0,i.useState)(!1),[es,el]=(0,i.useState)(null),[ei,er]=(0,i.useState)([]),[ea,en]=(0,i.useState)(""),[eo,ed]=(0,i.useState)(!1),[ec,ep]=(0,i.useState)(""),[eg,ex]=(0,i.useState)(""),[eh,em]=(0,i.useState)([]);console.log("room details---",V.roomDetails);let[ey,ej]=i.useState(!1),ef=()=>ej(!0),eu=()=>{ej(!1)},ev=()=>{ed(!eo)},[eb,eZ]=(0,i.useState)(!1),ew=(0,r.Z)("(max-width: 899px)"),eN=(0,r.Z)("(max-width: 599px)")?4:6,e_=eb||!ew?null==V?void 0:V.imageArray:null==V?void 0:null===(e=V.imageArray)||void 0===e?void 0:e.slice(0,eN),eS=async e=>{console.log("Add recently function triggered");try{let t=localStorage.getItem("token"),s=localStorage.getItem("userId");if(!localStorage.getItem("authUser")){let t=JSON.parse(localStorage.getItem("recently"))||[];t.includes(e)||(t.push(e),localStorage.setItem("recently",JSON.stringify(t))),K.push("/property?".concat(e));return}let l={property_id:e,user_id:s};console.log("Recently viewed payload",l);let i="".concat(I.Z.baseurl,"user/addToRecently"),r=await (0,A.$h)(i,l,t);!0===r.error?(eL(r.message),eD(!0),ef()):K.push("/property?".concat(e)),console.log("Recently viewed response",r)}catch(e){console.error("Error:",e)}},eC=e=>{eS(e)},eT=async()=>{let e={title:"Your Website Title",text:"Check out this link!",url:window.location.href};try{await navigator.share(e),console.log("Successfully shared")}catch(e){console.error("Error sharing:",e)}};(0,i.useEffect)(()=>{(async()=>{console.log("function trigger"),et(!0),el(null);try{let e=localStorage.getItem("token"),t={user_id:localStorage.getItem("userId")};Q.includes("-")?t.slug=Q:t.property_id=Q,console.log("single pagle payload",t);let s="".concat(I.Z.baseurl,"api/singleproperty"),i=await (0,A.$h)(s,t,e);console.log("single page response---",i),X(i.property_detail||""),em(i.relatedPropertiesInfo||""),console.log("response",i.property_detail),er([(0,l.jsx)(F.default,{underline:"hover",className:"breadcombs",color:"inherit",href:"/",children:"Home"},"1"),i.property_detail.propertyDetails.propertyType1&&(0,l.jsx)(F.default,{underline:"hover",className:"breadcombs",color:"inherit",href:"/filterpage",children:i.property_detail.propertyDetails.propertyType1},"2"),i.property_detail.propertyDetails.propertyType2&&(0,l.jsx)(F.default,{underline:"hover",className:"breadcombs",color:"inherit",href:"/filterpage",children:i.property_detail.propertyDetails.propertyType2},"4"),i.property_detail.propertyDetails.lookingTo&&(0,l.jsx)(F.default,{underline:"hover",className:"breadcombs",color:"inherit",href:"/filterpage",children:i.property_detail.propertyDetails.lookingTo},"3")])}catch(e){console.error("Error:",e)}})()},[Q]);let[eA,eR]=(0,i.useState)("I am intreseted"),[eI,ek]=(0,i.useState)(null),[eP,eD]=(0,i.useState)(!1),[eB,eL]=(0,i.useState)({}),eW=(e,t)=>{"clickaway"!==t&&eD(!1)};B.Z,L.Z;let eF=async()=>{console.log("wishlist function trigger");try{let e=localStorage.getItem("token"),t=localStorage.getItem("userId");if(!localStorage.getItem("authUser")){let e=JSON.parse(localStorage.getItem("wishlist"))||[];e.includes(Q)||(e.push(Q),localStorage.setItem("wishlist",JSON.stringify(e))),ez("Property added to whishlist sucessfully"),eE(!0);return}let s={property_id:Q,user_id:t};console.log("payload",s);let l="".concat(I.Z.baseurl,"user/addToWishlist"),i=await (0,A.$h)(l,s,e);!0===i.error?(eL(i.message),eD(!0),ef()):(ez(i.message),eE(!0)),console.log("response of wishlist--",i)}catch(e){console.error("Error:",e)}},[eO,eE]=(0,i.useState)(!1),[eM,ez]=(0,i.useState)(""),eU=(e,t)=>{"clickaway"!==t&&eE(!1)};B.Z,L.Z,(0,i.useEffect)(()=>{ek(localStorage.getItem("userId"))},[]);let eG=async()=>{try{if(!ec||!eg){el("Name and Number are required.");return}el("");let e=localStorage.getItem("token"),t={userName:ec,mobNo:eg,property_id:V._id,owner_id:V.user_id};console.log("response lead payload",t);let s="".concat(I.Z.baseurl,"lead/addlead");console.log("response lead url",s);let l=await (0,A.$h)(s,t,e);console.log("response lead response---",l),!1===l.error?(ez("Interest Added Successfully"),eE(!0),ep(""),ex(""),ev()):console.log("Token is invalid. User needs to login again.")}catch(e){console.error("Error:",e)}},eH=V&&V.advanceDetails?V.advanceDetails.propertyDescription:"",e$=V&&V.floorPlanArray&&V.floorPlanArray.length>0?V.floorPlanArray[0]:"",eq=V&&V.locality?V.locality:"",eJ=V&&V.city?V.city:"",[eY,eK]=(0,i.useState)(0),eQ=(0,i.useRef)(),eV=e=>{eQ.current&&eK(e)},eX=e=>{eK(e),eQ.current&&eQ.current.slickGoTo(e)},e0=e=>e?"object"==typeof e?"".concat(e.minpgRent," - ").concat(e.maxpgRent):e>=1e7?"".concat((e/1e7).toFixed(2),"cr"):e>=1e5?"".concat((e/1e5).toFixed(2),"L"):e>=1e3?"".concat((e/1e3).toFixed(2),"k"):e.toString():"";(0,i.useEffect)(()=>{if(V&&V.roomDetails&&"object"==typeof V.roomDetails){let e=V.roomDetails,t=[];for(let s in e)e.hasOwnProperty(s)&&e[s].pgRent&&t.push(parseInt(e[s].pgRent,10));if(t.length>0){if(t.length>1){let e="".concat(Math.min(...t)/1e3,"k - ").concat(Math.max(...t)/1e3,"k");en(e),console.log(e)}else{let e="".concat(t[0]/1e3,"k");en(e),console.log(e)}}else console.log("No valid pgRent values found in propertyDetails.roomDetails.")}},[V]);let e2=Object.values(V.roomDetails||{});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(C.default,{}),(0,l.jsxs)(a.Z,{className:"content_wrapper",children:[(0,l.jsx)(n.Z,{spacing:2,children:(0,l.jsx)(o.Z,{className:"breadcr",separator:"›","aria-label":"breadcrumb",children:ei})}),(0,l.jsxs)(a.Z,{className:"property_top_section",style:{display:"block"},children:[(0,l.jsxs)(d.ZP,{className:"grid1",item:!0,style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)(d.ZP,{item:!0,lg:9,md:9,xs:12,children:(0,l.jsx)(c.Z,{className:"topHeading",variant:"h5",fontWeight:700,style:{marginLeft:"5px"},children:V&&(null==V?void 0:V.propTitle)})}),(0,l.jsx)(d.ZP,{item:!0,lg:3,md:3,xs:12,children:(0,l.jsxs)(c.Z,{variant:"h5",className:"rentPrice",color:"#00A0E3",fontWeight:700,pb:1,children:["₹ ",V&&V.propPrice]})})]}),(0,l.jsxs)(d.ZP,{className:"grid2",item:!0,style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)(d.ZP,{item:!0,lg:5,md:5,sm:12,xs:12,children:(0,l.jsxs)(c.Z,{pt:1,className:"locatedAt",style:{display:"flex",alignItems:"center"},children:[(0,l.jsx)(R.Z,{}),"Located at"," ",(0,l.jsx)("span",{style:{fontWeight:"600",marginLeft:"10px"},children:eq}),","," ",(0,l.jsx)("span",{style:{fontWeight:"600",marginLeft:"10px"},children:eJ})]})}),(0,l.jsxs)(d.ZP,{item:!0,lg:7,md:7,sm:12,xs:12,children:[(0,l.jsx)(p.Z,{className:"btns3",startIcon:(0,l.jsx)(m.Z,{className:"btnIcon"}),style:{background:"#0066AB1A",textTransform:"none",marginRight:"10px"},onClick:eT,children:(0,l.jsx)("span",{className:"iconName",children:"Share"})}),(0,l.jsx)(p.Z,{className:"btns3",startIcon:(0,l.jsx)(y.Z,{className:"btnIcon"}),style:{background:"#0066AB1A",textTransform:"none",marginRight:"10px"},onClick:()=>{eF()},children:(0,l.jsx)("span",{className:"iconName",children:"Favorite"})}),(0,l.jsx)(p.Z,{className:"btns3",startIcon:(0,l.jsx)(j.Z,{className:"btnIcon"}),style:{background:"#0066AB1A",textTransform:"none"},onClick:()=>{window.print()},children:(0,l.jsx)("span",{className:"iconName",children:"Print"})})]})]})]}),(0,l.jsx)(a.Z,{style:{margin:"20px 0 ",padding:"0px 25px"},children:(0,l.jsxs)(d.ZP,{container:!0,spacing:3,children:[(0,l.jsx)(d.ZP,{item:!0,lg:12,md:12,xs:12,className:"CarDetails-page",children:(0,l.jsx)(S.Z,{dots:!1,infinite:!0,arrows:!0,slidesToShow:1,slidesToScroll:1,autoplay:!1,speed:1e3,autoplaySpeed:1e3,adaptiveHeight:!0,initialSlide:eY,afterChange:e=>eV(e),ref:eQ,children:V&&(null==V?void 0:null===(t=V.imageArray)||void 0===t?void 0:t.map((e,t)=>(0,l.jsx)(a.Z,{children:(0,l.jsxs)("div",{className:"image-container",children:[(0,l.jsx)("img",{src:e,alt:"Slider Image ".concat(t+1)}),(0,l.jsx)("div",{className:"image-overlay",style:{position:"absolute",bottom:0,left:0,right:0,height:"60%",backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))"}})]})},t)))})}),(0,l.jsxs)("div",{className:"container",style:{width:"100%",paddingLeft:"30px"},children:[(0,l.jsx)(d.ZP,{container:!0,spacing:3,lg:12,style:{marginTop:"5px"},children:null==e_?void 0:e_.map((e,t)=>(0,l.jsx)(d.ZP,{item:!0,sm:2,xs:3,lg:2,md:2,children:(0,l.jsx)("img",{src:e,alt:"Thumbnail Image ".concat(t+1),className:"thumbnailStyle",style:{width:"100%",height:"120vh",cursor:"pointer"},onClick:()=>eX(t)})},t))}),(null==V?void 0:null===(s=V.imageArray)||void 0===s?void 0:s.length)>eN&&ew&&(0,l.jsx)(a.Z,{display:"flex",justifyContent:"center",marginTop:"10px",children:(0,l.jsx)(p.Z,{onClick:()=>{eZ(!eb)},children:eb?"Show Less":"Load More"})})]})]})}),(0,l.jsx)(a.Z,{style:{marginTop:"20px"},children:(0,l.jsxs)(d.ZP,{container:!0,children:[(0,l.jsxs)(d.ZP,{item:!0,lg:8,md:8,xs:12,children:[(0,l.jsxs)(g.Z,{style:{padding:"20px"},children:[(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(c.Z,{variant:"h6",style:{padding:"30px 0 15px 0"},fontWeight:700,children:"Property details"}),V&&(null==V?void 0:null===(G=V.propertyDetails)||void 0===G?void 0:G.propertyType1)==="Residential"?(0,l.jsx)(a.Z,{className:"spg_prop_details scrollableTable",children:V&&V.propertyDetails?Object.entries(V.propertyDetails).map(e=>{let[t,s]=e;if("_id"!==t&&s){let e=t.split(/(?=[A-Z])/).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");if("propertyType1"===t)e="Property Type";else if("propertyType2"===t)e="Building Type";else if("maintainanceChargesPerMonth"===t)e="Monthly Maintainance",s=e0(s);else if("bhk"===t)e="BHK",s=s.toUpperCase();else if("constStatus"===t)e="Con. Status";else if("transaType"===t)e="Transaction Type";else if("builtUpArea"===t||"carpetArea"===t||"plotArea"===t)s+=" sq.ft";else if("monthlyRent"===t)e=V&&"Sell"===V.propertyDetails.lookingTo?"Price":"Monthly Rent",s=e0(s);else if("brokeragenego"===t&&"boolean"==typeof s)e="Brokerage Negotiable",s=s?"Yes":"No";else if("maintainanceCharges"===t)s=e0(s);else if("brokerageChargeCustom"===t)e="Brokerage Charge",s=e0(s);else if("ageOfProperty"===t)s=1===s?"1 yr":"".concat(s," yrs");else if("plotLength"===t||"plotWidth"===t){let e=s;V.areaUnit&&s&&(e+=" ".concat(V.areaUnit)),s=e}if("prefferedType"===t&&Array.isArray(s)&&s.length>0&&""!==s[0])return(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginRight:"20px",marginBottom:"5px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),"Preferred Type:"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:s.map((e,t)=>(0,l.jsx)("span",{children:e},t))})]})})},t);if("object"!=typeof s&&s){let e=t.split(/(?=[A-Z])/).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");return(0,l.jsx)(l.Fragment,{children:"Custom"===s?" ":(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginRight:"20px",marginBottom:"5px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),"maintainanceChargesPerMonth"===t?"Monthly Maintainance":"brokerageChargeCustom"===t?"Brokerage Charge":"securityDepositCustom"===t?"Security Deposit":e,":"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:"availableFrom"===t&&"string"==typeof s?(0,l.jsxs)("span",{children:[new Date(s).toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-")," "]}):(0,l.jsx)("div",{style:{textAlign:"end"},children:s})})]})})},t)})}if("availableFrom"===t&&"string"==typeof s&&s.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/))return new Date(s).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginBottom:"5px",marginRight:"20px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),e,":"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:"date"})]})})},t);if("object"!=typeof s&&s)return(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginRight:"20px",marginBottom:"5px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),e,":"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:s})]})})},t)}return null}):""}):"",V&&(null==V?void 0:null===(H=V.propertyDetails)||void 0===H?void 0:H.propertyType1)==="Residential"&&(null==V?void 0:null===($=V.propertyDetails)||void 0===$?void 0:$.lookingTo)==="PG/Co-living"&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{className:"spg_prop_details_pg",children:V&&V.pgPropDetails.ownerdetails?Object.entries(V.pgPropDetails.ownerdetails).map(e=>{let[t,s]=e;if("_id"!==t&&s){let e=t.split(/(?=[A-Z])/).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");if("propertyType1"===t?e="Property Type":"propertyType2"===t&&(e="Building Type"),"availableFrom"===t&&"string"==typeof s&&s.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/))return new Date(s).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginBottom:"5px",marginRight:"20px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),e,":"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:"date"})]})})},t);if("object"!=typeof s&&s)return(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginRight:"20px",marginBottom:"5px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),e,":"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:s})]})})},t)}return null}):""}),(0,l.jsx)(a.Z,{className:"spg_prop_details_pg",children:V&&V.pgPropDetails.pgRules?Object.entries(V.pgPropDetails.pgRules).map(e=>{let[t,s]=e;if("_id"!==t&&s){let e=t.split(/(?=[A-Z])/).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");if("propertyType1"===t?e="Property Type":"propertyType2"===t&&(e="Building Type"),"availableFrom"===t&&"string"==typeof s&&s.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/))return new Date(s).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginBottom:"5px",marginRight:"20px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),e,":"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:"date"})]})})},t);if("object"!=typeof s&&s)return(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginRight:"20px",marginBottom:"5px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),e,":"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:s})]})})},t)}return null}):""}),(0,l.jsx)(a.Z,{className:"spg_prop_details_pg",children:V&&V.pgPropDetails.pgdetails?Object.entries(V.pgPropDetails.pgdetails).map(e=>{let[t,s]=e;if("_id"!==t&&s){let e=t.split(/(?=[A-Z])/).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");if("propertyType1"===t?e="Property Type":"propertyType2"===t?e="Building Type":"lockInPeriod"===t||"noticePeriod"===t?s+=" days":"pgIsFor"===t?e="PG For":"pgName"===t&&(e="PG Name"),"availableFrom"===t&&"string"==typeof s&&s.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/))return new Date(s).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginBottom:"5px",marginRight:"20px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),e,":"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:"date"})]})})},t);if("object"!=typeof s&&s)return(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginRight:"20px",marginBottom:"5px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),"Pg Is For"===t?"PG For":"maintainanceChargesPerMonth"===t?"Monthly Maintainance":"pgName"===t?"PG Name":e,":"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:s})]})})},t)}return null}):""}),(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(c.Z,{variant:"h6",style:{fontWeight:"700",marginBottom:"10px"},children:"Room Details"}),e2.map((e,t)=>(0,l.jsx)(a.Z,{className:"room_details_pg",children:(0,l.jsx)(f.Z,{component:g.Z,className:"scrollableTable",children:(0,l.jsxs)(u.Z,{children:[(0,l.jsx)(v.Z,{children:(0,l.jsxs)(b.Z,{children:[e.roomType&&(0,l.jsx)(Z.Z,{className:"tbl_heading",children:"Room Type"}),e.totalBedsInThisRoom&&(0,l.jsx)(Z.Z,{className:"tbl_heading",children:"Total Beds"}),e.pgRent&&(0,l.jsx)(Z.Z,{className:"tbl_heading",children:"PG Rent"}),e.securityDeposit&&(0,l.jsx)(Z.Z,{className:"tbl_heading",children:"Security Deposit"}),e.bathroomStyle&&(0,l.jsx)(Z.Z,{className:"tbl_heading",children:"Washroom Style"}),e.facilitiesOffered&&e.facilitiesOffered.length>0&&(0,l.jsx)(Z.Z,{className:"tbl_heading",children:"Facilities Offered"})]})}),(0,l.jsx)(w.Z,{children:(0,l.jsxs)(b.Z,{children:[e.roomType&&(0,l.jsx)(Z.Z,{style:{whiteSpace:"nowrap"},children:e.roomType.replace("Sharing","Sharing\n")}),e.totalBedsInThisRoom&&(0,l.jsx)(Z.Z,{children:e.totalBedsInThisRoom}),e.pgRent&&(0,l.jsxs)(Z.Z,{style:{whiteSpace:"nowrap"},children:["₹ ",e.pgRent]}),e.securityDeposit&&(0,l.jsxs)(Z.Z,{children:["₹ ",e.securityDeposit]}),e.bathroomStyle&&(0,l.jsx)(Z.Z,{children:e.bathroomStyle}),e.facilitiesOffered&&e.facilitiesOffered.length>0&&(0,l.jsx)(Z.Z,{children:e.facilitiesOffered.join(", ")})]})})]})})},t))]})]}),V&&(null==V?void 0:null===(q=V.propertyDetails)||void 0===q?void 0:q.propertyType1)==="Commercial"?(0,l.jsx)(a.Z,{className:"spg_prop_details",children:(0,l.jsxs)(l.Fragment,{children:[V&&V.propertyDetails?Object.entries(V.propertyDetails).map(e=>{let[t,s]=e;if("_id"!==t&&s){let e=t.split(/(?=[A-Z])/).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");if("propertyType1"===t?e="Property Type":"propertyType2"===t?e="Building Type":"maintainanceChargesPerMonth"===t?(e="Monthly Maintainance",s=e0(s)):"bhk"===t?(e="BHKss",s=s.toUpperCase()):"constStatus"===t?e="Con. Status":"transaType"===t?e="Transaction Type":"builtUpArea"===t||"carpetArea"===t||"plotArea"===t?s+=" sq.ft":"monthlyRent"===t?(e=V&&"Sell"===V.propertyDetails.lookingTo?"Price":"Monthly Rent",s=e0(s)):"brokeragenego"===t&&"boolean"==typeof s?(e="Brokerage Negotiable",s=s?"True":"False"):"maintainanceCharges"===t?s=e0(s):"brokerageChargeCustom"===t?(e="Brokerage Charge",s=e0(s)):"ageOfProperty"===t&&(s=1===s?"1 yr":"".concat(s," yrs")),"availableFrom"===t&&"string"==typeof s&&s.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/))return new Date(s).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginBottom:"5px",marginRight:"20px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),e,":"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:"date"})]})})},t);if("object"!=typeof s&&s)return(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginRight:"20px",marginBottom:"5px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),e,":"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:s})]})})},t)}return null}):"",V&&V.commPropDetails?Object.entries(V.commPropDetails).map(e=>{let[t,s]=e;if("_id"!==t&&s){let e=t.split(/(?=[A-Z])/).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");if("propertyType1"===t?e="Property Type":"propertyType2"===t?e="Building Type":"maintainanceChargesPerMonth"===t?(e="Monthly Maintainance",s=e0(s)):"bhk"===t?(e="BHK",s=s.toUpperCase()):"constStatus"===t?e="Const. Status":"transaType"===t?e="Transaction Type":"builtUpArea"===t||"CarpetArea"===t||"plotArea"===t?s+=" sq.ft":"monthlyRent"===t?(e=V&&"Sell"===V.propertyDetails.lookingTo?"Price":"Monthly Rent",s=e0(s)):"brokeragenego"===t&&"boolean"==typeof s?(e="Brokerage Negotiable",s=s?"Yes":"No"):"securityDeposit"===t||"expectedRentIncrease"===t||"expectedReturnOnInvestment"===t||"price"===t||"currentRentPerMonth"===t?s=e0(s):"ageOfProperty"===t?s=1===s?"1 yr":"".concat(s," yrs"):("lockInPeriod"===t||"noticePeriod"===t)&&(s+=" days"),("upscChargeIncluded"===t||"waterCharge"===t||"taxGovtCharge"===t||"negotiable"===t||"electricityCharge"===t)&&(s="true"===s?"Yes":"No"),"availableFrom"===t&&"string"==typeof s&&s.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)&&new Date(s).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),"possessionDate"===t||"availableFrom"===t&&"string"==typeof s&&s.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/))return new Date(s).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginBottom:"5px",marginRight:"20px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),e,":"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:"date"})]})})},t);if("object"!=typeof s&&s)return(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginRight:"20px",marginBottom:"5px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),e,":"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:s})]})})},t)}return null}):""]})}):""]}),V&&V.advanceDetails&&Object.keys(V.advanceDetails).filter(e=>"_id"!==e).some(e=>V.advanceDetails[e])?(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(c.Z,{variant:"h6",style:{padding:"15px 0"},fontWeight:700,children:"Property utility"}),(0,l.jsx)(a.Z,{className:"spg_prop_details",children:V&&V.advanceDetails?Object.entries(V.advanceDetails).map((e,t)=>{let[s,i]=e;if("_id"!==s&&"address"!==s&&"propertyDescription"!==s&&i){let e=s.split(/(?=[A-Z])/).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");return"servantRoom"===s&&(i="true"===i.toLowerCase()?"Yes":"No"),(0,l.jsx)("div",{className:"spg_prop_details_items",children:(0,l.jsx)("div",{style:{marginRight:"20px",marginBottom:"5px"},children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}})," ",e,":"]})}),(0,l.jsx)("div",{style:{textAlign:"end"},children:i})]})})},t)}return null}):""})]}):"",V&&V.amenities&&Object.keys(V.amenities).filter(e=>"_id"!==e).some(e=>V.amenities[e])?(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(c.Z,{variant:"h6",style:{padding:"15px 0"},fontWeight:700,children:"Outdoor features"}),(0,l.jsx)(a.Z,{className:"spg_prop_details",children:V&&V.amenities&&Object.entries(V.amenities).map((e,t)=>{let[s,i]=e;return"isdelete"===s.toLowerCase()?null:(0,l.jsx)("div",{className:"spg_prop_details_items",children:(()=>{let e=s.split(/(?=[A-Z])/).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(c.Z,{variant:"subtitle1",style:{fontWeight:700,color:"#555",display:"flex",alignItems:"center"},children:[(0,l.jsx)(k.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}})," ",e]}),Array.isArray(i)?i.map((e,t)=>(0,l.jsx)("div",{style:{marginLeft:"20px"},children:(0,l.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsx)("span",{style:{marginLeft:"7px"},children:e})})})},t)):(0,l.jsx)("div",{style:{marginLeft:"20px"},children:(0,l.jsx)("div",{children:(0,l.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,l.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,l.jsx)("span",{style:{marginLeft:"7px"},children:i})})})})})]})})()},t)})})]}):""]}),(0,l.jsx)(a.Z,{style:{marginTop:"20px"},children:!e$.includes("imgNotAvailable_2.png")&&(0,l.jsxs)(g.Z,{style:{padding:"20px"},children:[(0,l.jsx)(c.Z,{variant:"h6",pb:2,fontWeight:700,children:"Floor Plans"}),(0,l.jsx)(a.Z,{children:(0,l.jsxs)("div",{className:"floor_image-container",children:[(0,l.jsx)("img",{src:e$,className:"spg_floor_plan",alt:"Floor Plan"}),(0,l.jsx)("div",{className:"floor_overlay",children:(0,l.jsx)(O.Z,{style:{position:"absolute",top:"50%",left:"50%",zIndex:"9999",fill:" #fff"},onClick:()=>{window.open(e$,"_blank")}})})]})})]})}),(null==V?void 0:V.googleMapsLink)&&(0,l.jsx)(a.Z,{style:{marginTop:"20px"},children:(0,l.jsxs)(g.Z,{style:{padding:"20px"},children:[(0,l.jsx)(c.Z,{variant:"h6",pb:2,fontWeight:700,children:"Location"}),(0,l.jsx)(a.Z,{children:(0,l.jsx)("iframe",{title:"Property Location",loading:"lazy",allowFullScreen:!0,frameBorder:"0",src:V.googleMapsLink,className:"spg_location_img"})})]})}),eH&&(0,l.jsx)(a.Z,{style:{marginTop:"20px"},children:(0,l.jsxs)(g.Z,{style:{padding:"20px"},children:[(0,l.jsx)(c.Z,{variant:"h5",pb:2,children:"Description"}),(0,l.jsx)(c.Z,{children:eH})]})})]}),(0,l.jsx)(d.ZP,{item:!0,lg:4,md:4,xs:12,children:(0,l.jsxs)(a.Z,{className:"related_prp_wrap",children:[(0,l.jsx)(p.Z,{className:"stickyContent",variant:"contained",style:{width:"100%",marginTop:"10px"},onClick:ev,children:eA}),(0,l.jsx)(D.Z,{open:eP,autoHideDuration:6e3,onClose:eW,anchorOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiAlert-filledError":{backgroundColor:"Red",color:"#fff"}},children:(0,l.jsx)(W.Z,{onClose:eW,severity:"error",variant:"filled",children:eB})}),eh.length>0?(0,l.jsxs)(a.Z,{style:{background:"#EAEAEA",padding:"20px",marginTop:"20px",borderRadius:"5px"},children:[(0,l.jsx)(c.Z,{style:{marginBottom:"20px"},className:"propertyText",variant:"h4",children:"Related Property"}),(0,l.jsx)(a.Z,{style:{margin:"auto"},sx:{maxWidth:400,flexGrow:1,marginTop:"20px"},children:(0,l.jsx)(S.Z,{dots:!0,infinite:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,autoplay:!0,speed:2500,autoplaySpeed:2500,adaptiveHeight:!0,children:eh.map((e,t)=>(0,l.jsx)(d.ZP,{item:!0,lg:6,md:6,sm:6,xs:12,children:(0,l.jsx)("div",{style:{width:"500px"},children:(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{onClick:()=>eC(e.propTitle),children:[(0,l.jsx)(a.Z,{component:"img",sx:{height:240,display:"block",maxWidth:400,overflow:"hidden",width:"100%",objectFit:"cover"},src:e.imageUrls[0]}),(0,l.jsxs)(a.Z,{style:{padding:"10px"},children:[(0,l.jsxs)(c.Z,{variant:"h6",fontWeight:600,children:["₹",e0(e.monthlyRent)]}),(0,l.jsxs)(c.Z,{variant:"p",mt:1,children:["Located at ",e.searchCity]}),(0,l.jsx)(a.Z,{display:"flex",alignItems:"center",children:(0,l.jsx)(a.Z,{mr:2,children:(0,l.jsx)(c.Z,{variant:"body2",children:(0,l.jsxs)(a.Z,{display:"flex",alignItems:"center",style:{marginTop:"7px"},children:[e.bhk&&(0,l.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,l.jsx)(N.Z,{style:{color:"gray",marginRight:"5px"}}),(0,l.jsx)(c.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:e.bhk})]}),0==e.washroom&&e.plotArea>0?(0,l.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,l.jsx)(E.Z,{style:{color:"gray",marginRight:"5px"}}),(0,l.jsxs)(c.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:[e.plotArea," sq.ft"]})]}):"",e.washroom>0&&(0,l.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,l.jsx)(_.Z,{style:{color:"gray",marginRight:"5px"}}),(0,l.jsxs)(c.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:[e.washroom," Washrooms"]})]}),e.yourFloor&&(0,l.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,l.jsx)(M.Z,{style:{color:"gray",marginRight:"5px"}}),(0,l.jsxs)(c.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:[function(e){if(isNaN(e))return e;{let t=parseInt(e),s=["th","st","nd","rd"],l=t%100;return t+(s[(l-20)%10]||s[l]||"th")}}(e.yourFloor),"Floor"]})]}),e.pgIsFor&&(0,l.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,l.jsx)(z.Z,{style:{color:"gray",marginRight:"5px"}}),(0,l.jsxs)(c.Z,{style:{fontSize:"15px",fontWeight:"600"},children:["PG for ",e.pgIsFor]})]})]})})})})]})]})})},t)},t))})})]}):""]})})]})})]}),(0,l.jsx)(x.Z,{open:eo,onClose:ev,"aria-labelledby":"interest-modal-title","aria-describedby":"interest-modal-description",children:(0,l.jsxs)(a.Z,{className:"iaminterestedmodel",sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4},children:[(0,l.jsx)(d.ZP,{lg:12,style:{marginTop:"-20px",textAlign:"end"},children:(0,l.jsxs)(B.Z,{onClick:ev,children:[" ",(0,l.jsx)(L.Z,{})]})}),(0,l.jsx)(c.Z,{id:"interest-modal-title",variant:"h5",align:"center",children:"I am Interested"}),(0,l.jsx)(a.Z,{sx:{mt:2},children:(0,l.jsx)(h.Z,{fullWidth:!0,id:"name",label:"Name",variant:"outlined",value:ec,onChange:e=>{ep(e.target.value)}})}),(0,l.jsx)(a.Z,{sx:{mt:2},children:(0,l.jsx)(h.Z,{fullWidth:!0,id:"number",label:"Number",variant:"outlined",value:eg,onChange:e=>{let t=e.target.value;/^$|^[6-9]\d{0,9}$/.test(t)?(ex(t),0===t.length||10===t.length?el(""):el("Number must be exactly 10 digits.")):el("Number must start with 6 and be numeric.")}})}),es&&(0,l.jsx)(a.Z,{sx:{mt:2},children:(0,l.jsx)(a.Z,{style:{color:"red"},children:es})}),(0,l.jsx)(a.Z,{sx:{mt:2},children:(0,l.jsx)(p.Z,{variant:"contained",color:"primary",onClick:eG,fullWidth:!0,disabled:!ec||!/^[6-9]\d{9}$/.test(eg),children:"Submit"})})]})}),(0,l.jsx)(D.Z,{open:eO,autoHideDuration:6e3,onClose:eU,anchorOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiAlert-filledError":{backgroundColor:"#02DB63",color:"#fff"}},children:(0,l.jsx)(W.Z,{onClose:eU,severity:"error",variant:"filled",children:eM})}),(0,l.jsx)(x.Z,{open:ey,onClose:eu,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:450,bgcolor:"background.paper",boxShadow:24,borderRadius:"4px",p:4},children:[(0,l.jsx)(a.Z,{style:{width:"100%",justifyContent:"end",display:"flex"},children:(0,l.jsx)(p.Z,{style:{color:"#000"},onClick:eu,children:"X"})}),(0,l.jsx)(U.default,{close:eu})]})}),(0,l.jsx)(d.ZP,{container:!0,style:{padding:"0px 30px",marginTop:"-15px",display:"flex",justifyContent:"space-between"},children:(0,l.jsx)(d.ZP,{lg:6,children:(0,l.jsx)(p.Z,{className:"backButton",variant:"outlined",style:{marginTop:"10px"},onClick:()=>{window.history.back()},children:"Back"})})}),(0,l.jsx)("div",{style:{display:"flex",alignItems:"center",position:"sticky",bottom:"10px"},children:(0,l.jsx)(p.Z,{style:{position:"absolute",top:"-37px",right:"30px"},className:"stickyContent2",variant:"contained",onClick:ev,children:eA})}),(0,l.jsx)(T.default,{})]})}},47587:function(e,t){"use strict";t.Z={src:"/_next/static/media/loginRegister.04c1af2b.png",height:1080,width:959,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAqElEQVR42iWLPQrCQBBGZ2ZXoxINbIRYKBZWgoInsfYoHsfOxtKjiJ0g2sSgJJCg+VlnjPoVH7wHD3eHEBEAvscirhIW0LYqX1laa1sW2vUC41pmTQhiq4bTwk531GsnlaQWqWTKyWHtGN/UKCJNArWYBMf9dnW5zsd+5Jm4EI2oNuvHcjZQoSRPPA+nJAyIpHQfCG93yqWpEP4jlrdCPEVZnNu6lZ/9ACvuRTr4WoR/AAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}}},function(e){e.O(0,[650,792,862,995,107,964,163,372,824,380,971,69,744],function(){return e(e.s=41057)}),_N_E=e.O()}]);