(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{67606:function(e,l,s){Promise.resolve().then(s.bind(s,21599))},21599:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return ee}});var t=s(3827),a=s(54272),n=s(82508),i=s(14332),r=s(41224),o=s(29835),c=s(91699),d=s(32486),x=s(16929),h=s(41848),p=s(9186),g=s(92226),m=s(34111),u=s(55602),y=s(55934),j=s(87640),Z=s(68148),f=s(14647),b=s(18645),v=s(70334),C=s(6285),P=s(85195),S=s(3340),w=s(95996),A=s(53098),W=s(64090),k=s(8792),R=s(93299),T=s(57572),N=s(86325),L=s(98562),I=s(85693),E=s(32609),B=s(7380),F=s(10242),G=s(92026),H=s(90588),z=s(9608),D=s(42151),O=s.n(D),K=s(47907),_={src:"/_next/static/media/noPropertyfound.d69df139.png",height:431,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAgklEQVR42mM4f+8Z+7m7T+QZkMDVJ695zt55InD+3lN2uOCUJWv556xYrzZj6VrFyOIaFpDY6r27GRlO3Xwg+PzLH66Vuw7rLVu3uXvF5l1lm46cl7j+7K3QreffWRiuPHjlsP/q5ZS9ty87Hth3yOfM9Tv+6y4c9D5753Hi9MPLLAFbt0DRxo/ARgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},U=s(20703),V=s(65593),M=s(43206),Y=s(79309),q=s(19723),J=s(56251),Q=s(74737),X=s(55549),$=s(49398);function ee(){let[e,l]=(0,W.useState)(window.innerWidth),s=()=>{l(window.innerWidth)};(0,W.useEffect)(()=>(window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}),[]);let[D,ee]=W.useState(!1),el=()=>ee(!0),es=()=>{ee(!1)},et=(0,K.useRouter)(),[ea,en]=(0,W.useState)([]),[ei,er]=(0,W.useState)([]),[eo,ec]=(0,W.useState)(),[ed,ex]=(0,W.useState)();console.log("propertyList state:",ea),console.log("filterPrice====",eo);let eh=(0,K.useSearchParams)(),ep=eh.get("propertyType"),eg=eh.get("city"),em=eh.get("search"),eu=eh.get("propertyStatus"),ey=eh.get("buildingType"),[ej,eZ]=(0,W.useState)(!1),[ef,eb]=(0,W.useState)({}),ev=(e,l)=>{"clickaway"!==l&&eZ(!1)};M.Z,Y.Z;let eC=e=>e?"object"==typeof e?"".concat(e.minpgRent/1e3,"k - ").concat(e.maxpgRent/1e3,"k"):e>=1e7?"".concat((e/1e7).toFixed(1),"cr"):e>=1e5?"".concat((e/1e5).toFixed(1),"L"):e>=1e3?"".concat((e/1e3).toFixed(0),"k"):e.toString():"",[eP,eS]=(0,W.useState)([]);console.log("is localities---",eP),(0,W.useEffect)(()=>{(async()=>{console.log("function trigger");try{let e="".concat(F.Z.baseurl,"api/viewLocalities"),l=await (0,G.KD)(e);eS(l[0].localities),console.log("loaclities response---",l)}catch(e){console.error("Error:",e)}})()},[]);let ew=["Agent","Owner","Builder","Freelife Housing"],[eA,eW]=(0,W.useState)(null),ek=e=>{eW(e)},eR=["Rent","Sell"];"Commercial"!==ep&&eR.push("PG/Co-living");let[eT,eN]=(0,W.useState)(null),eL=e=>{eN(e.target.value)},eI=["Apartment","Independent House","Independent Floor","Villa"];("Sell"==eT||"Buy"==eu)&&eI.push("Plot","Agricultural Land"),(0,W.useEffect)(()=>{"Buy"==eu?eN("Sell"):eN(eu)},[]);let eE=["Office","Retail Shop","Showroom","Warehouse","Plot","Other"],[eB,eF]=(0,W.useState)(null),eG=e=>{eF(e.target.value)},[eH,ez]=(0,W.useState)(!1),[eD,eO]=(0,W.useState)(!1),eK=e=>{ez(e.target.checked)},e_=e=>{eO(e.target.checked)},eU=["Dining Table","Washing Machine","Sofa","Microwave","Stove","Refrigerator","Water Purifier","Gas Pipeline","AC","Bed","TV","Cupboard","Geyser","Lift","CCTV","Gym","Garden","Kids Area","Sports","Swimming Pool","Intercom","Gated Community","Club House","Community Hall","Regular Water Supply","Power Backup","Pet Allowed"],eV=["CCTV","Gated Community","Security","Biometric","Refrigerator","Washing Machine","Microwave","Water Purifier","TT Table","TV","Coffee Machine","Snacks Machine","Laundry","Housekeeping","Internet/WiFi Connectivity","GYM","Lift","Regular Water Supply","Swimming Pool","Reserved Parking","Power Backup"],[eM,eY]=(0,W.useState)(null),eq=e=>{let l=e.target.value;eY(e=>e&&e.includes(l)?e.filter(e=>e!==l):[...e||[],l])},eJ=["North","East","West","South","North-East","North-West","South-East","South-West"],[eQ,eX]=(0,W.useState)([]),e$=e=>{let l=e.target.value;eX(e=>e&&e.includes(l)?e.filter(e=>e!==l):[...e||[],l])},e0=["Boys","Girls"],[e1,e2]=(0,W.useState)(null),e5=e=>{let l=e.target.value;e2(e=>e&&e.includes(l)?e.filter(e=>e!==l):[...e||[],l])},e7=["Resale","New Booking"],[e4,e6]=(0,W.useState)(null),e9=e=>{let l=e.target.value;e6(e=>e&&e.includes(l)?e.filter(e=>e!==l):[...e||[],l])},e8=["Yes","No"],[e3,le]=(0,W.useState)(null),ll=e=>{le(e.target.value)},ls=["Private Room","Double Sharing","Triple Sharing","3+ Sharing"],[lt,la]=(0,W.useState)(null),ln=e=>{let l=e.target.value;la(e=>e&&e.includes(l)?e.filter(e=>e!==l):[...e||[],l])},li=[{label:"Less than 1 year",value:1},{label:"Less than 3 years",value:3},{label:"Less than 5 years",value:5},{label:"Less than 10 years",value:10},{label:"More than 10 years",value:10}],[lr,lo]=(0,W.useState)(null),lc=e=>{console.log("Selected Option:",e),lo(e.value)},[ld,lx]=(0,W.useState)([]),[lh,lp]=(0,W.useState)([]);(0,W.useEffect)(()=>{(async()=>{try{let e=await fetch("URL_TO_FETCH_PROPERTIES"),l=await e.json();lx(l)}catch(e){console.error("Failed to fetch properties:",e)}})()},[]);let[lg,lm]=W.useState([0,15e3]),[lu,ly]=(0,W.useState)(),[lj,lZ]=(0,W.useState)(),lf=(e,l)=>{lm(l),ly(l[0]),lZ(l[1])},lb=[{value:0,label:"0 Sq/Ft"},{value:ed,label:"".concat(ed," Sq/Ft")}];function lv(e){return"₹".concat(e)}let[lC,lP]=W.useState([0,15e6]),[lS,lw]=(0,W.useState)(),[lA,lW]=(0,W.useState)(),lk=(e,l)=>{lP(l),lw(l[0]),lW(l[1])},lR=[{value:0,label:"₹ 0"},{value:eo,label:"₹".concat(eo)}];function lT(e){return"₹".concat(e)}let lN=["1RK","1BHK","2BHK","3BHK","4BHK","5BHK","6BHK","7BHK","8BHK","9BHK","10BHK"],[lL,lI]=(0,W.useState)(""),lE=e=>{lI(e.target.value)},lB=["Less than 1 year","Less than 2 years","Less than 3 years","Less than 4 years","Less than 5 years"],lF=["Ready to move","Under Construction"],[lG,lH]=(0,W.useState)(""),lz=e=>{lH(e.target.value)},[lD,lO]=(0,W.useState)(""),lK=e=>{lO(e.target.value)},l_=["Pre-Leased","Non-Leased"],[lU,lV]=(0,W.useState)(""),lM=e=>{lV(e.target.value)},[lY,lq]=(0,W.useState)(""),[lJ,lQ]=(0,W.useState)(em),lX=e=>{lQ(e.target.value)},l$=async()=>{console.log("function trigger");try{let e=localStorage.getItem("token"),l="".concat(F.Z.baseurl,"filter/propertyFilter"),s={propertyType1:ep,lookingTo:"Buy"===eu?"Sell":eu,bathroom:[]};eB&&(s.propertyType2=eB),eT&&(s.lookingTo=eT),lL&&(s.bhk=lL),eH&&s.bathroom.push("indians"),eD&&s.bathroom.push("western"),lD&&(s.possesionDate=lD),eA&&(s.postedBy=eA),eQ&&(s.facing=eQ),"All"==lJ?s.locality="":s.locality=lJ,lG&&(s.possesionStatus=lG),lU&&(s.preRented="Pre-Leased"===lU?"Yes":"No"),eM&&(s.amenities=eM),(lu||lj)&&(s.minBuiltUpArea=lu,s.maxBuiltUpArea=lj),(lS||lA)&&(s.minPrice=lS,s.maxPrice=lA),lt&&(s.roomType=lt),e1&&(s.pgIsFor=e1),e3&&(s.mealsAvailable=e3),"Plot"==ey&&(s.propertyType2=ey),e4&&(s.saleType=e4),console.log("payload filter",s);let t=await (0,G.$h)(l,s,e);console.log("payload filter response",t),t&&t.maxPrice&&(ec(t.maxPrice),ex(t.maxBuiltUpArea)),en(t.propertyList||[])}catch(e){console.error("Error:",e)}};(0,W.useEffect)(()=>{l$()},[ep,eu,eB,eT,lL,eH,eD,lD,eA,eQ,lJ,lG,lU,lS,lA,eM,lu,lj,lt,e1,e3,e4]);let[l0,l1]=(0,W.useState)(""),l2=ea.slice().sort((e,l)=>{if(O()(e.createdAt).format("YYYY-MM-DD"),O()(e.createdAt).format("YYYY-MM-DD"),"Price- High-Low"===l0)return l.monthlyRent-e.monthlyRent;if("Price- Low-High"===l0)return e.monthlyRent-l.monthlyRent;if("Date- Latest-Oldest"===l0){let s=O()(l.createdAt).diff(O()(e.createdAt));return 0===s?O()(l.createdAt).diff(O()(e.createdAt),"milliseconds"):s}if("Date- Oldest-Latest"!==l0)return 0;{let s=O()(e.createdAt).diff(O()(l.createdAt));return 0===s?O()(e.createdAt).diff(O()(l.createdAt),"milliseconds"):s}});(0,W.useEffect)(()=>{},[l2]);let l5=async e=>{console.log("Add recently function triggered");try{let l=localStorage.getItem("token"),s=localStorage.getItem("userId");if(!localStorage.getItem("authUser")){let l=JSON.parse(localStorage.getItem("recently"))||[];l.includes(e)||(l.push(e),localStorage.setItem("recently",JSON.stringify(l))),et.push("/property?".concat(e));return}let t={property_id:e,user_id:s};console.log("Recently viewed payload",t);let a="".concat(F.Z.baseurl,"user/addToRecently"),n=await (0,G.$h)(a,t,l);!0===n.error?(eb(n.message),eZ(!0),el()):et.push("/property?".concat(e)),console.log("Recently viewed response",n)}catch(e){console.error("Error:",e)}},l7=e=>{l5(e)},l4=e=>{et.push("/property?".concat(e))},l6=async()=>{try{let e=localStorage.getItem("token"),l=localStorage.getItem("userId"),s=localStorage.getItem("authUser");if(console.log("userId recently data--",l),!s){let e=JSON.parse(localStorage.getItem("recently"))||[];if(0===e.length){console.log("No recently viewed properties found in localStorage");return}let l={property_ids:e};console.log("Recently viewed properties payload--",l);let s="".concat(F.Z.baseurl,"api/recentlyLocalStorageView");console.log("Recently viewed properties payload postUrl--",s);let t=await (0,G.$h)(s,l);console.log("Recently viewed properties response localstorage",t),er(t.recently||[]);return}let t={user_id:l};console.log("All recently payload--",t);let a="".concat(F.Z.baseurl,"api/recentlyView"),n=await (0,G.$h)(a,t,e);console.log("All recently response",n),er(n.recently||[])}catch(e){console.error("Error:",e)}};(0,W.useEffect)(()=>{l6()},[]);let l9=()=>{let e=[];return e.push((0,t.jsx)(k.default,{underline:"hover",className:"breadcombs",color:"inherit",href:"/",children:"Home"},"home")),ep&&e.push((0,t.jsx)(k.default,{underline:"hover",className:"breadcombs",color:"inherit",href:"/filterpage?propertyType=".concat(ep),children:ep},ep)),e};return(0,t.jsxs)("div",{children:[(0,t.jsx)(E.default,{}),(0,t.jsx)(a.Z,{className:"content_wrapper",children:(0,t.jsxs)(n.ZP,{container:!0,spacing:2,style:{display:"flex"},children:[(0,t.jsxs)(n.ZP,{item:!0,lg:9,md:8,xs:12,children:[(0,t.jsx)(i.Z,{spacing:2,children:(0,t.jsx)(r.Z,{separator:"›","aria-label":"breadcrumb",children:(0,t.jsx)("div",{children:l9().map((e,l)=>(0,t.jsxs)("span",{style:{fontSize:"20px"},children:[e,l<l9().length-1&&" > "]},l))})})}),(0,t.jsxs)(o.Z,{style:{display:"flex",alignItems:"center"},variant:"h5",fontWeight:700,mt:2,children:[(0,t.jsx)(X.Z,{}),"Properties for ",eu," in ",em,", ",eg]}),(0,t.jsxs)(n.ZP,{container:!0,marginTop:"20px",children:[(0,t.jsx)(n.ZP,{style:{marginBottom:"20px"},className:"sidefilter",item:!0,lg:5,md:6,xs:12,children:e<900?(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(d.Z,{expandIcon:(0,t.jsx)($.Z,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Find your home"})}),(0,t.jsx)(x.Z,{children:(0,t.jsxs)(a.Z,{className:"flter_select_sec",children:[(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Find your home"}),(0,t.jsx)(a.Z,{sx:{width:"auto",margin:"10px 0"},children:(0,t.jsxs)(h.Z,{fullWidth:!0,size:"small",children:[(0,t.jsx)(p.Z,{id:"location-label",children:"Location"}),(0,t.jsxs)(g.Z,{labelId:"location-label",value:lJ,onChange:lX,label:"Location",inputProps:{startAdornment:(0,t.jsx)(m.Z,{position:"start",children:(0,t.jsx)(L.Z,{style:{color:"grey"}})})},children:[(0,t.jsx)(u.Z,{value:"All",children:"All"}),eP.map((e,l)=>(0,t.jsx)(u.Z,{value:e,children:e},l))]})]})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Property status"}),(0,t.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,t.jsx)(y.Z,{"aria-label":"property-type",name:"property-type",value:eT,onChange:eL,children:eR.map(e=>(0,t.jsx)(j.Z,{value:e,control:(0,t.jsx)(Z.Z,{className:"radiobuttons"}),label:"Sell"===e?"Buy":e},e))})})]}),"Commercial"!==ep&&("PG/Co-living"!==eT||"PG/Co-living"!==eu)&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Building Type"}),(0,t.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,t.jsx)(y.Z,{row:!0,"aria-label":"property-type",name:"property-type",value:eB,onChange:eG,children:eI.map(e=>(0,t.jsx)(j.Z,{value:e,control:(0,t.jsx)(Z.Z,{className:"radiobuttons"}),label:e},e))})})]}),"Commercial"==ep&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Building Type"}),(0,t.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,t.jsx)(y.Z,{row:!0,"aria-label":"property-type",name:"property-type",value:eB,onChange:eG,children:eE.map(e=>(0,t.jsx)(j.Z,{value:e,control:(0,t.jsx)(Z.Z,{className:"radiobuttons"}),label:e},e))})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Price Range"}),(0,t.jsx)(a.Z,{className:"sliderRange",sx:{width:"100%",padding:"0px 55px 0px 10px"},children:(0,t.jsx)(f.ZP,{getAriaLabel:()=>"Area range",value:lC,onChange:lk,valueLabelDisplay:"auto",getAriaValueText:lT,min:0,max:eo,marks:lR,className:"sliderCustomStyle"})})]}),"PG/Co-living"!==eT&&"PG/Co-living"!==eu&&(0,t.jsxs)(t.Fragment,{children:["Commercial"!==ep&&"Plot"!==eB&&"Agricultural Land"!==eB&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"BHK Type"}),(0,t.jsx)(a.Z,{sx:{width:"100%",marginTop:"10px"},children:(0,t.jsx)(h.Z,{sx:{m:0},size:"small",children:(0,t.jsxs)(g.Z,{value:lL,onChange:lE,displayEmpty:!0,inputProps:{"aria-label":"BHK Type"},sx:{fontSize:"16px",width:"100%",background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Select BHK Type"})}),lN.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Washrooms"}),(0,t.jsxs)(a.Z,{sx:{width:250,marginTop:"10px"},children:[(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eH,onChange:eK}),label:"Indian"}),(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eD,onChange:e_}),label:"Western"})]})]})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Plot"==eB||"Agricultural Land"==eB?"Plot Area (Sq.Ft.)":"Built Up Area (Sq.Ft.)"}),(0,t.jsx)(a.Z,{className:"sliderRange2",sx:{width:"100%",padding:"0px 55px 0px 10px"},children:(0,t.jsx)(f.ZP,{getAriaLabel:()=>"Area range",value:lg,onChange:lf,valueLabelDisplay:"auto",getAriaValueText:lv,min:0,max:ed,step:10,marks:lb,className:"sliderCustomStyle"})})]})]}),(0,t.jsxs)(a.Z,{style:{display:"flex",alignItems:"center",margin:"10px 0"},children:[(0,t.jsx)(I.Z,{disabled:!0,"aria-label":"like",style:{height:"20px",width:"35px",background:"#fff",marginTop:"5px"},children:(0,t.jsx)(N.Z,{})}),(0,t.jsx)(a.Z,{style:{marginLeft:"10px"},children:(0,t.jsx)(o.Z,{style:{fontWeight:"700",marginTop:"8px"},children:"Other Features"})})]}),"Commercial"==ep&&(0,t.jsxs)(t.Fragment,{children:["Commercial"==ep&&"Rent"==eu&&"Plot"==eB?"":(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Possession Status"}),(0,t.jsx)(a.Z,{className:"possession",sx:{marginTop:"10px"},children:(0,t.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,t.jsxs)(g.Z,{value:lG,onChange:lz,displayEmpty:!0,inputProps:{"aria-label":"Possession Status"},sx:{width:"100%",background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Possession Status"})}),lF.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Lease Type"}),(0,t.jsx)(a.Z,{sx:{width:250,marginTop:"10px 0"},children:(0,t.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,t.jsxs)(g.Z,{value:lU,onChange:lM,displayEmpty:!0,inputProps:{"aria-label":"Lease Type"},sx:{width:250,background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Select Lease Type"})}),l_.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]})]}),"PG/Co-living"!==eT&&"Commercial"!==ep&&"PG/Co-living"!==eu&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Possession Status"}),(0,t.jsx)(a.Z,{sx:{width:250,margin:"10px 0"},children:(0,t.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,t.jsxs)(g.Z,{value:lD,onChange:lK,displayEmpty:!0,inputProps:{"aria-label":"Possession Status"},sx:{width:250,background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Possession Status"})}),lB.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]}),"Residential"==ep&&"Sell"==eT&&("Plot"==eB||"Agricultural Land"==eB)&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Sale Type"}),(0,t.jsx)(v.Z,{children:e7.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:e4&&e4.includes(e),onChange:e9,value:e}),label:e},e))})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Property Post By"}),(0,t.jsx)(a.Z,{className:"button-container2",style:{margin:"10px 0"},children:ew.map(e=>(0,t.jsx)(C.Z,{className:"custom-button2",onClick:()=>ek(e),style:{width:"calc(25%)",fontSize:"16px",backgroundColor:e===eA?"blue":"white",color:e===eA?"white":"black",border:e===eA?"1px solid blue":"1px solid #8E8E8E",marginRight:"-40px",marginBottom:"10px",textTransform:"none"},children:e},e))})]}),"PG/Co-living"==eT||"PG/Co-living"==eu?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"PG For"}),(0,t.jsx)(v.Z,{children:e0.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:e1&&e1.includes(e),onChange:e5,value:e}),label:e},e))})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Room Type"}),(0,t.jsx)(v.Z,{children:ls.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:lt&&lt.includes(e),onChange:ln,value:e}),label:e},e))})]}),(0,t.jsx)(a.Z,{style:{margin:"10px 0"},children:(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Food Available"}),(0,t.jsx)(v.Z,{children:e8.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(Z.Z,{checked:e3===e,onChange:ll,value:e,name:"foodAvailable"}),label:e},e))})]})})]}):"","Commercial"!==ep&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Amenities"}),"PG/Co-living"!==eT&&"PG/Co-living"!==eu&&(0,t.jsx)(v.Z,{children:eU.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eM&&eM.includes(e),onChange:eq,value:e}),label:e},e))}),"PG/Co-living"==eT||"PG/Co-living"==eu?(0,t.jsx)(v.Z,{children:eV.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eM&&eM.includes(e),onChange:eq,value:e}),label:e},e))}):""]}),"PG/Co-living"!==eT&&"PG/Co-living"!==eu&&"Commercial"!==ep&&"Plot"!==eB&&"Agricultural Land"!==eB&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{className:"button-container3",style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Age of Property"}),(0,t.jsx)(a.Z,{style:{margin:"10px 0"},children:li.map(e=>(0,t.jsx)(C.Z,{className:"custom-button3",onClick:()=>lc(e),style:{backgroundColor:e.value===lr?"blue":"white",color:e.value===lr?"white":"black",border:e.value===lr?"1px solid blue":"1px solid #8E8E8E",marginRight:"-40px",marginBottom:"10px",textTransform:"none"},children:e.label},e.label))})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Facing"}),(0,t.jsx)(v.Z,{children:eJ.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eQ&&eQ.includes(e),onChange:e$,value:e}),label:e},e))})]})]})]})})]}):(0,t.jsxs)(a.Z,{className:"flter_select_sec",children:[(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Find your home"}),(0,t.jsx)(a.Z,{sx:{width:"auto",margin:"10px 0"},children:(0,t.jsxs)(h.Z,{fullWidth:!0,size:"small",children:[(0,t.jsx)(p.Z,{id:"location-label",children:"Location"}),(0,t.jsxs)(g.Z,{labelId:"location-label",value:lJ,onChange:lX,label:"Location",inputProps:{startAdornment:(0,t.jsx)(m.Z,{position:"start",children:(0,t.jsx)(L.Z,{style:{color:"grey"}})})},children:[(0,t.jsx)(u.Z,{value:"All",children:"All"}),eP.map((e,l)=>(0,t.jsx)(u.Z,{value:e,children:e},l))]})]})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Property status"}),(0,t.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,t.jsx)(y.Z,{"aria-label":"property-type",name:"property-type",value:eT,onChange:eL,children:eR.map(e=>(0,t.jsx)(j.Z,{value:e,control:(0,t.jsx)(Z.Z,{className:"radiobuttons"}),label:"Sell"===e?"Buy":e},e))})})]}),"Commercial"!==ep&&("PG/Co-living"!==eT||"PG/Co-living"!==eu)&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Building Type"}),(0,t.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,t.jsx)(y.Z,{row:!0,"aria-label":"property-type",name:"property-type",value:eB,onChange:eG,children:eI.map(e=>(0,t.jsx)(j.Z,{value:e,control:(0,t.jsx)(Z.Z,{className:"radiobuttons"}),label:e},e))})})]}),"Commercial"==ep&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Building Type"}),(0,t.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,t.jsx)(y.Z,{row:!0,"aria-label":"property-type",name:"property-type",value:eB,onChange:eG,children:eE.map(e=>(0,t.jsx)(j.Z,{value:e,control:(0,t.jsx)(Z.Z,{className:"radiobuttons"}),label:e},e))})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Price Range"}),(0,t.jsx)(a.Z,{className:"sliderRange",sx:{width:"100%",padding:"0px 55px 0px 10px"},children:(0,t.jsx)(f.ZP,{getAriaLabel:()=>"Area range",value:lC,onChange:lk,valueLabelDisplay:"auto",getAriaValueText:lT,min:0,max:eo,marks:lR,className:"sliderCustomStyle"})})]}),"PG/Co-living"!==eT&&"PG/Co-living"!==eu&&(0,t.jsxs)(t.Fragment,{children:["Commercial"!==ep&&"Plot"!==eB&&"Agricultural Land"!==eB&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"BHK Type"}),(0,t.jsx)(a.Z,{sx:{width:"100%",marginTop:"10px"},children:(0,t.jsx)(h.Z,{sx:{m:0},size:"small",children:(0,t.jsxs)(g.Z,{value:lL,onChange:lE,displayEmpty:!0,inputProps:{"aria-label":"BHK Type"},sx:{fontSize:"16px",width:"100%",background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Select BHK Type"})}),lN.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Washrooms"}),(0,t.jsxs)(a.Z,{sx:{width:250,marginTop:"10px"},children:[(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eH,onChange:eK}),label:"Indian"}),(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eD,onChange:e_}),label:"Western"})]})]})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Plot"==eB||"Agricultural Land"==eB?"Plot Area (Sq.Ft.)":"Built Up Area (Sq.Ft.)"}),(0,t.jsx)(a.Z,{className:"sliderRange2",sx:{width:"100%",padding:"0px 55px 0px 10px"},children:(0,t.jsx)(f.ZP,{getAriaLabel:()=>"Area range",value:lg,onChange:lf,valueLabelDisplay:"auto",getAriaValueText:lv,min:0,max:ed,step:10,marks:lb,className:"sliderCustomStyle"})})]})]}),(0,t.jsxs)(a.Z,{style:{display:"flex",alignItems:"center",margin:"10px 0"},children:[(0,t.jsx)(I.Z,{disabled:!0,"aria-label":"like",style:{height:"20px",width:"35px",background:"#fff",marginTop:"5px"},children:(0,t.jsx)(N.Z,{})}),(0,t.jsx)(a.Z,{style:{marginLeft:"10px"},children:(0,t.jsx)(o.Z,{style:{fontWeight:"700",marginTop:"8px"},children:"Other Features"})})]}),"Commercial"==ep&&(0,t.jsxs)(t.Fragment,{children:["Commercial"==ep&&"Rent"==eu&&"Plot"==eB?"":(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Possession Status"}),(0,t.jsx)(a.Z,{sx:{width:250,marginTop:"10px"},children:(0,t.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,t.jsxs)(g.Z,{value:lG,onChange:lz,displayEmpty:!0,inputProps:{"aria-label":"Possession Status"},sx:{width:"100%",background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Possession Status"})}),lF.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Lease Type"}),(0,t.jsx)(a.Z,{sx:{width:250,marginTop:"10px 0"},children:(0,t.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,t.jsxs)(g.Z,{value:lU,onChange:lM,displayEmpty:!0,inputProps:{"aria-label":"Lease Type"},sx:{width:250,background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Select Lease Type"})}),l_.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]})]}),"PG/Co-living"!==eT&&"Commercial"!==ep&&"PG/Co-living"!==eu&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Possession Status"}),(0,t.jsx)(a.Z,{sx:{width:250,margin:"10px 0"},children:(0,t.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,t.jsxs)(g.Z,{value:lD,onChange:lK,displayEmpty:!0,inputProps:{"aria-label":"Possession Status"},sx:{width:250,background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Possession Status"})}),lB.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]}),"Residential"==ep&&"Sell"==eT&&("Plot"==eB||"Agricultural Land"==eB)&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Sale Type"}),(0,t.jsx)(v.Z,{children:e7.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:e4&&e4.includes(e),onChange:e9,value:e}),label:e},e))})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Property Post By"}),(0,t.jsx)(a.Z,{className:"button-container2",style:{margin:"10px 0"},children:ew.map(e=>(0,t.jsx)(C.Z,{className:"custom-button2",onClick:()=>ek(e),style:{width:"calc(25%)",fontSize:"16px",backgroundColor:e===eA?"blue":"white",color:e===eA?"white":"black",border:e===eA?"1px solid blue":"1px solid #8E8E8E",marginRight:"-40px",marginBottom:"10px",textTransform:"none"},children:e},e))})]}),"PG/Co-living"==eT||"PG/Co-living"==eu?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"PG For"}),(0,t.jsx)(v.Z,{children:e0.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:e1&&e1.includes(e),onChange:e5,value:e}),label:e},e))})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Room Type"}),(0,t.jsx)(v.Z,{children:ls.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:lt&&lt.includes(e),onChange:ln,value:e}),label:e},e))})]}),(0,t.jsx)(a.Z,{style:{margin:"10px 0"},children:(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Food Available"}),(0,t.jsx)(v.Z,{children:e8.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(Z.Z,{checked:e3===e,onChange:ll,value:e,name:"foodAvailable"}),label:e},e))})]})})]}):"","Commercial"!==ep&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Amenities"}),"PG/Co-living"!==eT&&"PG/Co-living"!==eu&&(0,t.jsx)(v.Z,{children:eU.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eM&&eM.includes(e),onChange:eq,value:e}),label:e},e))}),"PG/Co-living"==eT||"PG/Co-living"==eu?(0,t.jsx)(v.Z,{children:eV.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eM&&eM.includes(e),onChange:eq,value:e}),label:e},e))}):""]}),"PG/Co-living"!==eT&&"PG/Co-living"!==eu&&"Commercial"!==ep&&"Plot"!==eB&&"Agricultural Land"!==eB&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{className:"button-container3",style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Age of Property"}),(0,t.jsx)(a.Z,{style:{margin:"10px 0"},children:li.map(e=>(0,t.jsx)(C.Z,{className:"custom-button3",onClick:()=>lc(e),style:{backgroundColor:e.value===lr?"blue":"white",color:e.value===lr?"white":"black",border:e.value===lr?"1px solid blue":"1px solid #8E8E8E",marginRight:"-40px",marginBottom:"10px",textTransform:"none"},children:e.label},e.label))})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Facing"}),(0,t.jsx)(v.Z,{children:eJ.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eQ&&eQ.includes(e),onChange:e$,value:e}),label:e},e))})]})]})]})}),(0,t.jsx)(n.ZP,{item:!0,lg:7,md:6,xs:12,children:ea.length>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{className:"fil_middle_sec_wrap sort-container",children:[(0,t.jsx)(a.Z,{className:"results-container",children:(0,t.jsxs)(o.Z,{children:["Showing ",ea.length," results"]})}),(0,t.jsxs)(a.Z,{className:"sort-container",style:{display:"flex",alignItems:"center",paddingLeft:"15px"},children:[(0,t.jsx)(o.Z,{pt:2,R:!0,mr:1,children:"Sort by:"}),(0,t.jsxs)(h.Z,{sx:{minWidth:200},size:"small",children:[(0,t.jsx)(p.Z,{id:"sort-by-label",children:"Sort by"}),(0,t.jsx)(g.Z,{labelId:"sort-by-label",id:"sort-by-select",value:l0,onChange:e=>{l1(e.target.value)},label:"Sort by",children:[{value:"Price- High-Low",label:"Price - High to Low"},{value:"Price- Low-High",label:"Price - Low to High"},{value:"Date- Latest-Oldest",label:"Date - Latest to Oldest"},{value:"Date- Oldest-Latest",label:"Date - Oldest to Latest"}].map((e,l)=>(0,t.jsx)(u.Z,{value:e.value,children:e.label},l))})]})]})]}),(0,t.jsx)(n.ZP,{container:!0,spacing:3,className:"fpg_middle_cards",style:{marginTop:"20px",display:"flex"},children:l2.map((e,l)=>(0,t.jsx)(n.ZP,{item:!0,lg:6,md:12,sm:6,xs:12,children:(0,t.jsx)(P.Z,{className:"outerbox cardOuterBox",style:{height:"280px",marginRight:"10px",marginBottom:"10px"},onClick:()=>l7(e.propTitle),children:(0,t.jsxs)("div",{children:[(0,t.jsx)(a.Z,{component:"img",sx:{height:170,display:"block",maxWidth:400,overflow:"hidden",width:"100%",objectFit:"cover"},src:e.imageUrls[0]}),(0,t.jsxs)(a.Z,{style:{padding:"10px"},children:[(0,t.jsxs)(o.Z,{variant:"h6",fontWeight:600,children:["₹",eC(e.monthlyRent)]}),(0,t.jsxs)(o.Z,{style:{display:"flex",alignItems:"center"},className:"cardrent",variant:"p",mt:1,children:[(0,t.jsx)(X.Z,{})," ".concat(e.locality," ").concat(e.searchCity).slice(0,15)," Located At ".concat(e.locality," ").concat(e.searchCity).length>15?"...":""]}),(0,t.jsx)(a.Z,{display:"flex",alignItems:"center",children:(0,t.jsx)(a.Z,{mr:2,children:(0,t.jsx)(o.Z,{variant:"body2",children:(0,t.jsxs)(a.Z,{display:"flex",alignItems:"center",style:{marginTop:"7px"},children:[e.bhk&&(0,t.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,t.jsx)(R.Z,{style:{color:"gray",marginRight:"5px"}}),(0,t.jsx)(o.Z,{variant:"body2",style:{fontSize:"13px",fontWeight:"600"},children:e.bhk})]}),0==e.washroom&&e.plotArea>0?(0,t.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,t.jsx)(V.Z,{style:{color:"gray",marginRight:"5px"}}),(0,t.jsxs)(o.Z,{variant:"body2",style:{fontSize:"13px",fontWeight:"600"},children:[e.plotArea," sq.ft"]})]}):"",e.washroom>0&&(0,t.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,t.jsx)(T.Z,{style:{color:"gray",marginRight:"5px"}}),(0,t.jsxs)(o.Z,{variant:"body2",style:{fontSize:"13px",fontWeight:"600"},children:[e.washroom," Washrooms"]})]}),e.yourFloor&&(0,t.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,t.jsx)(H.Z,{style:{color:"gray",marginRight:"5px"}}),(0,t.jsxs)(o.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:[function(e){if(isNaN(e))return e;{let l=parseInt(e),s=["th","st","nd","rd"],t=l%100;return l+(s[(t-20)%10]||s[t]||"th")}}(e.yourFloor),"Floor"]})]}),e.pgIsFor&&(0,t.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,t.jsx)(z.Z,{style:{color:"gray",marginRight:"5px"}}),(0,t.jsxs)(o.Z,{variant:"body2",children:["PG for ",e.pgIsFor]})]})]})})})})]})]})},l)},l))})]}):(0,t.jsx)(a.Z,{className:"cardFilterContainer",children:(0,t.jsxs)(a.Z,{style:{border:"1px solid #80808070",padding:"15px",borderRadius:"4px"},children:[(0,t.jsx)(a.Z,{style:{width:"100%",height:"280px"},children:(0,t.jsx)(U.default,{src:_,alt:"no propert found",style:{height:"100%",width:"100%"}})}),(0,t.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"15px"},children:[(0,t.jsx)("h3",{children:"No properties found"}),(0,t.jsx)(o.Z,{children:"Try removing some filters or reset your filters"}),(0,t.jsx)(C.Z,{variant:"contained",style:{marginTop:"10px"},onClick:()=>{eW(""),eN(""),eF(""),ez(""),eO(""),eY(null),eX(null),e2(null),le(""),la(null),lo(""),ly(""),lZ(""),lw(""),lW(""),lI(""),lH(""),lO(""),lV(""),lq(""),lQ(""),lP([0,15e6]),lm([0,15e3]),l$()},children:"Reset"})]})]})})})]})]}),(0,t.jsx)(n.ZP,{item:!0,lg:3,md:4,xs:12,children:ei.length>0&&(0,t.jsxs)(a.Z,{style:{background:"#F3F4F4",padding:"20px"},children:[(0,t.jsxs)(P.Z,{className:"sideCard",sx:{width:"100%"},onClick:()=>l4(ei[0].propTitle),children:[(0,t.jsx)(S.Z,{component:"img",image:ei[0].imageUrls&&ei[0].imageUrls[0],sx:{height:150,padding:"10px"},title:"Property Image"}),(0,t.jsx)(w.Z,{children:(0,t.jsx)(a.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,t.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,t.jsxs)(o.Z,{fontWeight:"600",style:{fontSize:"1rem"},children:["₹",eC(ei[0].monthlyRent)]}),(0,t.jsxs)(o.Z,{style:{display:"flex",alignItems:"center"},className:"cardrent",variant:"p",mt:1,children:[(0,t.jsx)(X.Z,{})," ","".concat(ei[0].locality," ").concat(ei[0].searchCity).slice(0,15)," Located At ".concat(ei[0].locality," ").concat(ei[0].searchCity).length>15?"...":""]})]})})})]}),ei.slice(1).map((e,l)=>(0,t.jsx)(a.Z,{style:{marginTop:"10px"},children:(0,t.jsx)(P.Z,{className:"sideCard",style:{display:"flex",alignItems:"center",height:"100%"},onClick:()=>l4(e.propTitle),children:(0,t.jsxs)(n.ZP,{lg:12,style:{display:"flex",justifyContent:""},children:[(0,t.jsx)(n.ZP,{lg:7,md:7,xs:12,children:(0,t.jsx)(S.Z,{className:"cardMedia",component:"img",image:e.imageUrls&&e.imageUrls[0],style:{width:"155px",height:"150px"},sx:{padding:"10px"},title:"Property Image"})}),(0,t.jsx)(n.ZP,{lg:5,md:5,xs:12,children:(0,t.jsx)(w.Z,{className:"cardcontent",children:(0,t.jsx)(a.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,t.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,t.jsxs)(o.Z,{variant:"h6",fontWeight:"700",style:{fontSize:"0.9rem"},children:["₹",eC(e.monthlyRent)]}),(0,t.jsxs)(o.Z,{style:{display:"flex",alignItems:"center"},className:"cardrent",variant:"p",mt:1,children:[(0,t.jsx)(X.Z,{})," ","".concat(e.locality," ").concat(e.searchCity).slice(0,15)," Located At ".concat(e.locality," ").concat(e.searchCity).length>15?"...":""]})]})})})})]})})},l))]})})]})}),(0,t.jsx)(J.Z,{open:ej,autoHideDuration:6e3,onClose:ev,anchorOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiAlert-filledError":{backgroundColor:"Red",color:"#fff"}},children:(0,t.jsx)(q.Z,{onClose:ev,severity:"error",variant:"filled",children:ef})}),(0,t.jsx)(A.Z,{open:D,onClose:es,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,t.jsxs)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:450,bgcolor:"background.paper",boxShadow:24,borderRadius:"4px",p:4},children:[(0,t.jsx)(a.Z,{style:{width:"100%",justifyContent:"end",display:"flex"},children:(0,t.jsx)(C.Z,{style:{color:"#000"},onClick:es,children:"X"})}),(0,t.jsx)(Q.default,{close:es})]})}),(0,t.jsx)(B.default,{})]})}},74737:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return m}});var t=s(3827),a=s(54272),n=s(82508),i=s(10470),r=s(29835),o=s(6285),c=s(20703);s(47587);var d=s(79789);s(8792);var x=s(92026),h=s(47907),p=s(10242),g=s(64090);function m(e){let{close:l}=e;(0,h.useRouter)();let[s,m]=(0,g.useState)({mobno:"",password:""}),[u,y]=(0,g.useState)({mobno:"",password:""}),j=e=>{let{name:l,value:s}=e.target;m(e=>({...e,[l]:s})),y(e=>({...e,[l]:""}))},Z=async()=>{let e={};if(""===s.mobno.trim()&&(e.mobno="Mobile number is required"),""===s.password.trim()&&(e.password="Password is required"),y(e),!Object.values(e).every(e=>""===e))return!1;{let e="".concat(p.Z.baseurl,"auth/login");try{let t=await (0,x.Lx)(e,s,"POST");!1===t.error?(localStorage.setItem("token",t.token),m({mobno:"",password:""}),l(),console.log("login sucessfully--",t)):toast.error(t.message,{position:"top-right",theme:"light"})}catch(e){throw e}}};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.Z,{children:(0,t.jsx)(n.ZP,{container:!0,children:(0,t.jsx)(n.ZP,{item:!0,lg:12,md:12,xs:12,children:(0,t.jsx)("div",{className:" right-side-container",children:(0,t.jsx)(i.Z,{style:{boxShadow:"none"},children:(0,t.jsxs)(a.Z,{style:{padding:"0px 15px",margin:"auto"},className:"mainBox",children:[(0,t.jsx)("div",{style:{marginBottom:"25px",marginTop:"15px"},className:"logoImg",children:(0,t.jsx)(c.default,{src:d.Z})}),(0,t.jsx)(r.Z,{variant:"h5",fontWeight:600,className:"variantH5",children:"Welcome Back to FreeLife Housing!"}),(0,t.jsx)(r.Z,{color:"#8E8E8E",className:"variant",children:"Log in to your account"}),(0,t.jsxs)(a.Z,{style:{marginTop:"20px"},children:[(0,t.jsxs)("div",{className:"loginregwrap",children:[(0,t.jsx)("label",{className:"loginreglabel font-weight-bold",children:"Mobile Number"}),(0,t.jsx)("input",{type:"text",id:"mobno",name:"mobno",value:s.mobno,onChange:j,placeholder:"Enter mobile number",className:"loginRegInput"}),u.mobno&&(0,t.jsx)("span",{className:"error",children:u.mobno})]}),(0,t.jsxs)("div",{className:"loginregwrap",children:[(0,t.jsx)("label",{className:"loginreglabel font-weight-bold",children:"Password"}),(0,t.jsx)("input",{type:"password",id:"password",name:"password",value:s.password,onChange:j,placeholder:"Enter password",className:"loginRegInput"}),u.password&&(0,t.jsx)("span",{className:"error",children:u.password})]})]}),(0,t.jsx)(o.Z,{variant:"contained",className:"freehousing_button addbutton",style:{textTransform:"none",width:"100%",margin:"15px 0"},onClick:Z,children:"Login"})]})})})})})})})}},47587:function(e,l){"use strict";l.Z={src:"/_next/static/media/loginRegister.04c1af2b.png",height:1080,width:959,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAqElEQVR42iWLPQrCQBBGZ2ZXoxINbIRYKBZWgoInsfYoHsfOxtKjiJ0g2sSgJJCg+VlnjPoVH7wHD3eHEBEAvscirhIW0LYqX1laa1sW2vUC41pmTQhiq4bTwk531GsnlaQWqWTKyWHtGN/UKCJNArWYBMf9dnW5zsd+5Jm4EI2oNuvHcjZQoSRPPA+nJAyIpHQfCG93yqWpEP4jlrdCPEVZnNu6lZ/9ACvuRTr4WoR/AAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}}},function(e){e.O(0,[990,650,792,862,995,964,762,163,958,824,380,971,69,744],function(){return e(e.s=67606)}),_N_E=e.O()}]);