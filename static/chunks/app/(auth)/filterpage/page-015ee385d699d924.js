(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{67606:function(e,l,s){Promise.resolve().then(s.bind(s,21599))},21599:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return ee}});var t=s(3827),a=s(54272),n=s(82508),i=s(14332),r=s(41224),o=s(29835),c=s(91699),d=s(32486),x=s(16929),h=s(41848),p=s(9186),g=s(92226),m=s(34111),u=s(55602),y=s(55934),j=s(87640),Z=s(68148),f=s(14647),b=s(18645),v=s(70334),C=s(6285),S=s(85195),P=s(3340),w=s(95996),A=s(53098),W=s(64090),k=s(8792),R=s(93299),T=s(57572),L=s(86325),N=s(98562),E=s(85693),I=s(32609),B=s(7380),F=s(10242),G=s(92026),H=s(90588),z=s(9608),D=s(42151),O=s.n(D),K=s(47907),_={src:"/_next/static/media/noPropertyfound.d69df139.png",height:431,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAgklEQVR42mM4f+8Z+7m7T+QZkMDVJ695zt55InD+3lN2uOCUJWv556xYrzZj6VrFyOIaFpDY6r27GRlO3Xwg+PzLH66Vuw7rLVu3uXvF5l1lm46cl7j+7K3QreffWRiuPHjlsP/q5ZS9ty87Hth3yOfM9Tv+6y4c9D5753Hi9MPLLAFbt0DRxo/ARgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},U=s(20703),V=s(65593),M=s(43206),Y=s(79309),q=s(19723),J=s(56251),Q=s(74737),X=s(55549),$=s(49398);function ee(){let[e,l]=(0,W.useState)(window.innerWidth),s=()=>{l(window.innerWidth)};(0,W.useEffect)(()=>(window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}),[]);let[D,ee]=W.useState(!1),el=()=>ee(!0),es=()=>{ee(!1)},et=(0,K.useRouter)(),[ea,en]=(0,W.useState)([]),[ei,er]=(0,W.useState)([]);console.log("propertyList state:",ea);let eo=(0,K.useSearchParams)(),ec=eo.get("propertyType"),ed=eo.get("city"),ex=eo.get("search"),eh=eo.get("propertyStatus"),ep=eo.get("buildingType"),[eg,em]=(0,W.useState)(!1),[eu,ey]=(0,W.useState)({}),ej=(e,l)=>{"clickaway"!==l&&em(!1)};M.Z,Y.Z;let eZ=e=>e?"object"==typeof e?"".concat(e.minpgRent/1e3,"k - ").concat(e.maxpgRent/1e3,"k"):e>=1e7?"".concat((e/1e7).toFixed(1),"cr"):e>=1e5?"".concat((e/1e5).toFixed(1),"L"):e>=1e3?"".concat((e/1e3).toFixed(0),"k"):e.toString():"",[ef,eb]=(0,W.useState)([]);console.log("is localities---",ef),(0,W.useEffect)(()=>{(async()=>{console.log("function trigger");try{let e="".concat(F.Z.baseurl,"api/viewLocalities"),l=await (0,G.KD)(e);eb(l[0].localities),console.log("loaclities response---",l)}catch(e){console.error("Error:",e)}})()},[]);let ev=["Agent","Owner","Builder","Expert pro agent"],[eC,eS]=(0,W.useState)(null),eP=e=>{eS(e)},ew=["Rent","Sell"];"Commercial"!==ec&&ew.push("PG/Co-living");let[eA,eW]=(0,W.useState)(null),ek=e=>{eW(e.target.value)},eR=["Apartment","Independent House","Independent Floor","Villa"];("Sell"==eA||"Buy"==eh)&&eR.push("Plot","Agricultural Land"),(0,W.useEffect)(()=>{"Buy"==eh?eW("Sell"):eW(eh)},[]);let eT=["Office","Retail Shop","Showroom","Warehouse","Plot","Other"],[eL,eN]=(0,W.useState)(null),eE=e=>{eN(e.target.value)},[eI,eB]=(0,W.useState)(!1),[eF,eG]=(0,W.useState)(!1),eH=e=>{eB(e.target.checked)},ez=e=>{eG(e.target.checked)},eD=["Dining Table","Washing Machine","Sofa","Microwave","Stove","Fridge","Water Purifier","Gas Pipeline","AC","Bed","TV","Cupboard","Geyser","Lift","CCTV","Gym","Garden","Kids Area","Sports","Swimming Pool","Intercom","Gated Community","Club House","Community Hall","Regular Water Supply","Power Backup","Pet Allowed"],eO=["CCTV","Gated Community","Security","Biometric","Fridge","Washing Machine","Microwave","Water Purifier","TT Table","TV","Coffee Machine","Snacks Machine","Laundry","Housekeeping","Internet/WiFi Connectivity","GYM","Lift","Regular Water Supply","Swimming Pool","Reserved Parking","Power Backup"],[eK,e_]=(0,W.useState)(null),eU=e=>{let l=e.target.value;e_(e=>e&&e.includes(l)?e.filter(e=>e!==l):[...e||[],l])},eV=["North","East","West","South","North-East","North-West","South-East","South-West"],[eM,eY]=(0,W.useState)([]),eq=e=>{let l=e.target.value;eY(e=>e&&e.includes(l)?e.filter(e=>e!==l):[...e||[],l])},eJ=["Boys","Girls"],[eQ,eX]=(0,W.useState)(null),e$=e=>{let l=e.target.value;eX(e=>e&&e.includes(l)?e.filter(e=>e!==l):[...e||[],l])},e0=["Resale","New Booking"],[e1,e5]=(0,W.useState)(null),e2=e=>{let l=e.target.value;e5(e=>e&&e.includes(l)?e.filter(e=>e!==l):[...e||[],l])},e7=["Yes","No"],[e6,e4]=(0,W.useState)(null),e9=e=>{e4(e.target.value)},e3=["Private Room","Double Sharing","Triple Sharing","3+ Sharing"],[e8,le]=(0,W.useState)(null),ll=e=>{let l=e.target.value;le(e=>e&&e.includes(l)?e.filter(e=>e!==l):[...e||[],l])},ls=[{label:"Less than 1 year",value:1},{label:"Less than 3 years",value:3},{label:"Less than 5 years",value:5},{label:"Less than 10 years",value:10},{label:"More than 10 years",value:10}],[lt,la]=(0,W.useState)(null),ln=e=>{console.log("Selected Option:",e),la(e.value)},[li,lr]=(0,W.useState)([]),[lo,lc]=(0,W.useState)([]);(0,W.useEffect)(()=>{(async()=>{try{let e=await fetch("URL_TO_FETCH_PROPERTIES"),l=await e.json();lr(l)}catch(e){console.error("Failed to fetch properties:",e)}})()},[]);let[ld,lx]=W.useState([0,15e3]),[lh,lp]=(0,W.useState)(),[lg,lm]=(0,W.useState)(),lu=(e,l)=>{lx(l),lp(l[0]),lm(l[1])},ly=[{value:0,label:"0 Sq/Ft"},{value:15e3,label:"1,5000 Sq/Ft"}];function lj(e){return"₹".concat(e)}let[lZ,lf]=W.useState([0,15e6]),[lb,lv]=(0,W.useState)(),[lC,lS]=(0,W.useState)(),lP=(e,l)=>{lf(l),lv(l[0]),lS(l[1])},lw=[{value:0,label:"₹ 0"},{value:15e6,label:"₹1,50,00000"}];function lA(e){return"₹".concat(e)}let lW=["1RK","1BHK","2BHK","3BHK","4BHK","5BHK","6BHK","7BHK","8BHK","9BHK","10BHK"],[lk,lR]=(0,W.useState)(""),lT=e=>{lR(e.target.value)},lL=["Less than 1 year","Less than 2 years","Less than 3 years","Less than 4 years","Less than 5 years"],lN=["Ready to move","Under Construction"],[lE,lI]=(0,W.useState)(""),lB=e=>{lI(e.target.value)},[lF,lG]=(0,W.useState)(""),lH=e=>{lG(e.target.value)},lz=["Pre-Leased","Non-Leased"],[lD,lO]=(0,W.useState)(""),lK=e=>{lO(e.target.value)},[l_,lU]=(0,W.useState)(""),[lV,lM]=(0,W.useState)(ex),lY=e=>{lM(e.target.value)},lq=async()=>{console.log("function trigger");try{let e=localStorage.getItem("token"),l="".concat(F.Z.baseurl,"filter/propertyFilter"),s={propertyType1:ec,lookingTo:"Buy"===eh?"Sell":eh,bathroom:[]};eL&&(s.propertyType2=eL),eA&&(s.lookingTo=eA),lk&&(s.bhk=lk),eI&&s.bathroom.push("indians"),eF&&s.bathroom.push("western"),lF&&(s.possesionDate=lF),eC&&(s.postedBy=eC),eM&&(s.facing=eM),"All"==lV?s.locality="":s.locality=lV,lE&&(s.possesionStatus=lE),lD&&(s.preRented="Pre-Leased"===lD?"Yes":"No"),eK&&(s.amenities=eK),(lh||lg)&&(s.minBuiltUpArea=lh,s.maxBuiltUpArea=lg),(lb||lC)&&(s.minPrice=lb,s.maxPrice=lC),e8&&(s.roomType=e8),eQ&&(s.pgIsFor=eQ),e6&&(s.mealsAvailable=e6),"Plot"==ep&&(s.propertyType2=ep),e1&&(s.saleType=e1),console.log("payload filter",s);let t=await (0,G.$h)(l,s,e);console.log("payload filter response",t),en(t.propertyList||[])}catch(e){console.error("Error:",e)}};(0,W.useEffect)(()=>{lq()},[ec,eh,eL,eA,lk,eI,eF,lF,eC,eM,lV,lE,lD,lb,lC,eK,lh,lg,e8,eQ,e6,e1]);let[lJ,lQ]=(0,W.useState)(""),lX=ea.slice().sort((e,l)=>{if(O()(e.createdAt).format("YYYY-MM-DD"),O()(e.createdAt).format("YYYY-MM-DD"),"Price- High-Low"===lJ)return l.monthlyRent-e.monthlyRent;if("Price- Low-High"===lJ)return e.monthlyRent-l.monthlyRent;if("Date- Latest-Oldest"===lJ){let s=O()(l.createdAt).diff(O()(e.createdAt));return 0===s?O()(l.createdAt).diff(O()(e.createdAt),"milliseconds"):s}if("Date- Oldest-Latest"!==lJ)return 0;{let s=O()(e.createdAt).diff(O()(l.createdAt));return 0===s?O()(e.createdAt).diff(O()(l.createdAt),"milliseconds"):s}});(0,W.useEffect)(()=>{},[lX]);let l$=async e=>{console.log("Add recently function triggered");try{let l=localStorage.getItem("token"),s=localStorage.getItem("userId");if(!localStorage.getItem("authUser")){let l=JSON.parse(localStorage.getItem("recently"))||[];l.includes(e)||(l.push(e),localStorage.setItem("recently",JSON.stringify(l))),et.push("/property?".concat(e));return}let t={property_id:e,user_id:s};console.log("Recently viewed payload",t);let a="".concat(F.Z.baseurl,"user/addToRecently"),n=await (0,G.$h)(a,t,l);!0===n.error?(ey(n.message),em(!0),el()):et.push("/property?".concat(e)),console.log("Recently viewed response",n)}catch(e){console.error("Error:",e)}},l0=e=>{l$(e)},l1=e=>{et.push("/property?".concat(e))},l5=async()=>{try{let e=localStorage.getItem("token"),l=localStorage.getItem("userId"),s=localStorage.getItem("authUser");if(console.log("userId recently data--",l),!s){let e=JSON.parse(localStorage.getItem("recently"))||[];if(0===e.length){console.log("No recently viewed properties found in localStorage");return}let l={property_ids:e};console.log("Recently viewed properties payload--",l);let s="".concat(F.Z.baseurl,"api/recentlyLocalStorageView");console.log("Recently viewed properties payload postUrl--",s);let t=await (0,G.$h)(s,l);console.log("Recently viewed properties response localstorage",t),er(t.recently||[]);return}let t={user_id:l};console.log("All recently payload--",t);let a="".concat(F.Z.baseurl,"api/recentlyView"),n=await (0,G.$h)(a,t,e);console.log("All recently response",n),er(n.recently||[])}catch(e){console.error("Error:",e)}};(0,W.useEffect)(()=>{l5()},[]);let l2=()=>{let e=[];return e.push((0,t.jsx)(k.default,{underline:"hover",className:"breadcombs",color:"inherit",href:"/",children:"Home"},"home")),ec&&e.push((0,t.jsx)(k.default,{underline:"hover",className:"breadcombs",color:"inherit",href:"/filterpage?propertyType=".concat(ec),children:ec},ec)),e};return(0,t.jsxs)("div",{children:[(0,t.jsx)(I.default,{}),(0,t.jsx)(a.Z,{className:"content_wrapper",children:(0,t.jsxs)(n.ZP,{container:!0,spacing:2,style:{display:"flex"},children:[(0,t.jsxs)(n.ZP,{item:!0,lg:9,md:9,xs:12,children:[(0,t.jsx)(i.Z,{spacing:2,children:(0,t.jsx)(r.Z,{separator:"›","aria-label":"breadcrumb",children:(0,t.jsx)("div",{children:l2().map((e,l)=>(0,t.jsxs)("span",{style:{fontSize:"20px"},children:[e,l<l2().length-1&&" > "]},l))})})}),(0,t.jsxs)(o.Z,{style:{display:"flex",alignItems:"center"},variant:"h5",fontWeight:700,mt:2,children:[(0,t.jsx)(X.Z,{}),"Properties for ",eh," in ",ex,", ",ed]}),(0,t.jsxs)(n.ZP,{container:!0,marginTop:"20px",children:[(0,t.jsx)(n.ZP,{style:{marginBottom:"20px"},className:"sidefilter",item:!0,lg:5,md:6,xs:12,children:e<900?(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(d.Z,{expandIcon:(0,t.jsx)($.Z,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Find your home"})}),(0,t.jsx)(x.Z,{children:(0,t.jsxs)(a.Z,{className:"flter_select_sec",children:[(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Find your home"}),(0,t.jsx)(a.Z,{sx:{width:"auto",margin:"10px 0"},children:(0,t.jsxs)(h.Z,{fullWidth:!0,size:"small",children:[(0,t.jsx)(p.Z,{id:"location-label",children:"Location"}),(0,t.jsxs)(g.Z,{labelId:"location-label",value:lV,onChange:lY,label:"Location",inputProps:{startAdornment:(0,t.jsx)(m.Z,{position:"start",children:(0,t.jsx)(N.Z,{style:{color:"grey"}})})},children:[(0,t.jsx)(u.Z,{value:"All",children:"All"}),ef.map((e,l)=>(0,t.jsx)(u.Z,{value:e,children:e},l))]})]})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Property status"}),(0,t.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,t.jsx)(y.Z,{"aria-label":"property-type",name:"property-type",value:eA,onChange:ek,children:ew.map(e=>(0,t.jsx)(j.Z,{value:e,control:(0,t.jsx)(Z.Z,{className:"radiobuttons"}),label:"Sell"===e?"Buy":e},e))})})]}),"Commercial"!==ec&&("PG/Co-living"!==eA||"PG/Co-living"!==eh)&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Building Type"}),(0,t.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,t.jsx)(y.Z,{row:!0,"aria-label":"property-type",name:"property-type",value:eL,onChange:eE,children:eR.map(e=>(0,t.jsx)(j.Z,{value:e,control:(0,t.jsx)(Z.Z,{className:"radiobuttons"}),label:e},e))})})]}),"Commercial"==ec&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Building Type"}),(0,t.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,t.jsx)(y.Z,{row:!0,"aria-label":"property-type",name:"property-type",value:eL,onChange:eE,children:eT.map(e=>(0,t.jsx)(j.Z,{value:e,control:(0,t.jsx)(Z.Z,{className:"radiobuttons"}),label:e},e))})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Price Range"}),(0,t.jsx)(a.Z,{className:"sliderRange",sx:{width:"100%",padding:"0px 55px 0px 10px"},children:(0,t.jsx)(f.ZP,{getAriaLabel:()=>"Area range",value:lZ,onChange:lP,valueLabelDisplay:"auto",getAriaValueText:lA,min:0,max:15e6,marks:lw,className:"sliderCustomStyle"})})]}),"PG/Co-living"!==eA&&"PG/Co-living"!==eh&&(0,t.jsxs)(t.Fragment,{children:["Commercial"!==ec&&"Plot"!==eL&&"Agricultural Land"!==eL&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"BHK Type"}),(0,t.jsx)(a.Z,{sx:{width:"100%",marginTop:"10px"},children:(0,t.jsx)(h.Z,{sx:{m:0},size:"small",children:(0,t.jsxs)(g.Z,{value:lk,onChange:lT,displayEmpty:!0,inputProps:{"aria-label":"BHK Type"},sx:{fontSize:"16px",width:"100%",background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Select BHK Type"})}),lW.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Washrooms"}),(0,t.jsxs)(a.Z,{sx:{width:250,marginTop:"10px"},children:[(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eI,onChange:eH}),label:"Indian"}),(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eF,onChange:ez}),label:"Western"})]})]})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Plot"==eL||"Agricultural Land"==eL?"Plot Area (Sq.Ft.)":"Built Up Area (Sq.Ft.)"}),(0,t.jsx)(a.Z,{className:"sliderRange2",sx:{width:"100%",padding:"0px 55px 0px 10px"},children:(0,t.jsx)(f.ZP,{getAriaLabel:()=>"Area range",value:ld,onChange:lu,valueLabelDisplay:"auto",getAriaValueText:lj,min:0,max:15e3,step:10,marks:ly,className:"sliderCustomStyle"})})]})]}),(0,t.jsxs)(a.Z,{style:{display:"flex",alignItems:"center",margin:"10px 0"},children:[(0,t.jsx)(E.Z,{disabled:!0,"aria-label":"like",style:{height:"20px",width:"35px",background:"#fff",marginTop:"5px"},children:(0,t.jsx)(L.Z,{})}),(0,t.jsx)(a.Z,{style:{marginLeft:"10px"},children:(0,t.jsx)(o.Z,{style:{fontWeight:"700",marginTop:"8px"},children:"Other Features"})})]}),"Commercial"==ec&&(0,t.jsxs)(t.Fragment,{children:["Commercial"==ec&&"Rent"==eh&&"Plot"==eL?"":(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Possession Status"}),(0,t.jsx)(a.Z,{className:"possession",sx:{marginTop:"10px"},children:(0,t.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,t.jsxs)(g.Z,{value:lE,onChange:lB,displayEmpty:!0,inputProps:{"aria-label":"Possession Status"},sx:{width:"100%",background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Possession Status"})}),lN.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Lease Type"}),(0,t.jsx)(a.Z,{sx:{width:250,marginTop:"10px 0"},children:(0,t.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,t.jsxs)(g.Z,{value:lD,onChange:lK,displayEmpty:!0,inputProps:{"aria-label":"Lease Type"},sx:{width:250,background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Select Lease Type"})}),lz.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]})]}),"PG/Co-living"!==eA&&"Commercial"!==ec&&"PG/Co-living"!==eh&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Possession Status"}),(0,t.jsx)(a.Z,{sx:{width:250,margin:"10px 0"},children:(0,t.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,t.jsxs)(g.Z,{value:lF,onChange:lH,displayEmpty:!0,inputProps:{"aria-label":"Possession Status"},sx:{width:250,background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Possession Status"})}),lL.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]}),"Residential"==ec&&"Sell"==eA&&("Plot"==eL||"Agricultural Land"==eL)&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Sale Type"}),(0,t.jsx)(v.Z,{children:e0.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:e1&&e1.includes(e),onChange:e2,value:e}),label:e},e))})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Property Post By"}),(0,t.jsx)(a.Z,{className:"button-container2",style:{margin:"10px 0"},children:ev.map(e=>(0,t.jsx)(C.Z,{className:"custom-button2",onClick:()=>eP(e),style:{width:"calc(25%)",fontSize:"16px",backgroundColor:e===eC?"blue":"white",color:e===eC?"white":"black",border:e===eC?"1px solid blue":"1px solid #8E8E8E",marginRight:"-40px",marginBottom:"10px",textTransform:"none"},children:e},e))})]}),"PG/Co-living"==eA||"PG/Co-living"==eh?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"PG For"}),(0,t.jsx)(v.Z,{children:eJ.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eQ&&eQ.includes(e),onChange:e$,value:e}),label:e},e))})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Room Type"}),(0,t.jsx)(v.Z,{children:e3.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:e8&&e8.includes(e),onChange:ll,value:e}),label:e},e))})]}),(0,t.jsx)(a.Z,{style:{margin:"10px 0"},children:(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Food Available"}),(0,t.jsx)(v.Z,{children:e7.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(Z.Z,{checked:e6===e,onChange:e9,value:e,name:"foodAvailable"}),label:e},e))})]})})]}):"","Commercial"!==ec&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Amenities"}),"PG/Co-living"!==eA&&"PG/Co-living"!==eh&&(0,t.jsx)(v.Z,{children:eD.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eK&&eK.includes(e),onChange:eU,value:e}),label:e},e))}),"PG/Co-living"==eA||"PG/Co-living"==eh?(0,t.jsx)(v.Z,{children:eO.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eK&&eK.includes(e),onChange:eU,value:e}),label:e},e))}):""]}),"PG/Co-living"!==eA&&"PG/Co-living"!==eh&&"Commercial"!==ec&&"Plot"!==eL&&"Agricultural Land"!==eL&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{className:"button-container3",style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Age of Property"}),(0,t.jsx)(a.Z,{style:{margin:"10px 0"},children:ls.map(e=>(0,t.jsx)(C.Z,{className:"custom-button3",onClick:()=>ln(e),style:{backgroundColor:e.value===lt?"blue":"white",color:e.value===lt?"white":"black",border:e.value===lt?"1px solid blue":"1px solid #8E8E8E",marginRight:"-40px",marginBottom:"10px",textTransform:"none"},children:e.label},e.label))})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Facing"}),(0,t.jsx)(v.Z,{children:eV.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eM&&eM.includes(e),onChange:eq,value:e}),label:e},e))})]})]})]})})]}):(0,t.jsxs)(a.Z,{className:"flter_select_sec",children:[(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Find your home"}),(0,t.jsx)(a.Z,{sx:{width:"auto",margin:"10px 0"},children:(0,t.jsxs)(h.Z,{fullWidth:!0,size:"small",children:[(0,t.jsx)(p.Z,{id:"location-label",children:"Location"}),(0,t.jsxs)(g.Z,{labelId:"location-label",value:lV,onChange:lY,label:"Location",inputProps:{startAdornment:(0,t.jsx)(m.Z,{position:"start",children:(0,t.jsx)(N.Z,{style:{color:"grey"}})})},children:[(0,t.jsx)(u.Z,{value:"All",children:"All"}),ef.map((e,l)=>(0,t.jsx)(u.Z,{value:e,children:e},l))]})]})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Property status"}),(0,t.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,t.jsx)(y.Z,{"aria-label":"property-type",name:"property-type",value:eA,onChange:ek,children:ew.map(e=>(0,t.jsx)(j.Z,{value:e,control:(0,t.jsx)(Z.Z,{className:"radiobuttons"}),label:"Sell"===e?"Buy":e},e))})})]}),"Commercial"!==ec&&("PG/Co-living"!==eA||"PG/Co-living"!==eh)&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Building Type"}),(0,t.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,t.jsx)(y.Z,{row:!0,"aria-label":"property-type",name:"property-type",value:eL,onChange:eE,children:eR.map(e=>(0,t.jsx)(j.Z,{value:e,control:(0,t.jsx)(Z.Z,{className:"radiobuttons"}),label:e},e))})})]}),"Commercial"==ec&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Building Type"}),(0,t.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,t.jsx)(y.Z,{row:!0,"aria-label":"property-type",name:"property-type",value:eL,onChange:eE,children:eT.map(e=>(0,t.jsx)(j.Z,{value:e,control:(0,t.jsx)(Z.Z,{className:"radiobuttons"}),label:e},e))})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Price Range"}),(0,t.jsx)(a.Z,{className:"sliderRange",sx:{width:"100%",padding:"0px 55px 0px 10px"},children:(0,t.jsx)(f.ZP,{getAriaLabel:()=>"Area range",value:lZ,onChange:lP,valueLabelDisplay:"auto",getAriaValueText:lA,min:0,max:15e6,marks:lw,className:"sliderCustomStyle"})})]}),"PG/Co-living"!==eA&&"PG/Co-living"!==eh&&(0,t.jsxs)(t.Fragment,{children:["Commercial"!==ec&&"Plot"!==eL&&"Agricultural Land"!==eL&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"BHK Type"}),(0,t.jsx)(a.Z,{sx:{width:"100%",marginTop:"10px"},children:(0,t.jsx)(h.Z,{sx:{m:0},size:"small",children:(0,t.jsxs)(g.Z,{value:lk,onChange:lT,displayEmpty:!0,inputProps:{"aria-label":"BHK Type"},sx:{fontSize:"16px",width:"100%",background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Select BHK Type"})}),lW.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Washrooms"}),(0,t.jsxs)(a.Z,{sx:{width:250,marginTop:"10px"},children:[(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eI,onChange:eH}),label:"Indian"}),(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eF,onChange:ez}),label:"Western"})]})]})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Plot"==eL||"Agricultural Land"==eL?"Plot Area (Sq.Ft.)":"Built Up Area (Sq.Ft.)"}),(0,t.jsx)(a.Z,{className:"sliderRange2",sx:{width:"100%",padding:"0px 55px 0px 10px"},children:(0,t.jsx)(f.ZP,{getAriaLabel:()=>"Area range",value:ld,onChange:lu,valueLabelDisplay:"auto",getAriaValueText:lj,min:0,max:15e3,step:10,marks:ly,className:"sliderCustomStyle"})})]})]}),(0,t.jsxs)(a.Z,{style:{display:"flex",alignItems:"center",margin:"10px 0"},children:[(0,t.jsx)(E.Z,{disabled:!0,"aria-label":"like",style:{height:"20px",width:"35px",background:"#fff",marginTop:"5px"},children:(0,t.jsx)(L.Z,{})}),(0,t.jsx)(a.Z,{style:{marginLeft:"10px"},children:(0,t.jsx)(o.Z,{style:{fontWeight:"700",marginTop:"8px"},children:"Other Features"})})]}),"Commercial"==ec&&(0,t.jsxs)(t.Fragment,{children:["Commercial"==ec&&"Rent"==eh&&"Plot"==eL?"":(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Possession Status"}),(0,t.jsx)(a.Z,{sx:{width:250,marginTop:"10px"},children:(0,t.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,t.jsxs)(g.Z,{value:lE,onChange:lB,displayEmpty:!0,inputProps:{"aria-label":"Possession Status"},sx:{width:"100%",background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Possession Status"})}),lN.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Lease Type"}),(0,t.jsx)(a.Z,{sx:{width:250,marginTop:"10px 0"},children:(0,t.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,t.jsxs)(g.Z,{value:lD,onChange:lK,displayEmpty:!0,inputProps:{"aria-label":"Lease Type"},sx:{width:250,background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Select Lease Type"})}),lz.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]})]}),"PG/Co-living"!==eA&&"Commercial"!==ec&&"PG/Co-living"!==eh&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Possession Status"}),(0,t.jsx)(a.Z,{sx:{width:250,margin:"10px 0"},children:(0,t.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,t.jsxs)(g.Z,{value:lF,onChange:lH,displayEmpty:!0,inputProps:{"aria-label":"Possession Status"},sx:{width:250,background:"#fff",borderRadius:"4px"},children:[(0,t.jsx)(u.Z,{value:"",disabled:!0,children:(0,t.jsx)("em",{children:"Possession Status"})}),lL.map(e=>(0,t.jsx)(u.Z,{value:e,children:e},e))]})})})]}),"Residential"==ec&&"Sell"==eA&&("Plot"==eL||"Agricultural Land"==eL)&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Sale Type"}),(0,t.jsx)(v.Z,{children:e0.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:e1&&e1.includes(e),onChange:e2,value:e}),label:e},e))})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Property Post By"}),(0,t.jsx)(a.Z,{className:"button-container2",style:{margin:"10px 0"},children:ev.map(e=>(0,t.jsx)(C.Z,{className:"custom-button2",onClick:()=>eP(e),style:{width:"calc(25%)",fontSize:"16px",backgroundColor:e===eC?"blue":"white",color:e===eC?"white":"black",border:e===eC?"1px solid blue":"1px solid #8E8E8E",marginRight:"-40px",marginBottom:"10px",textTransform:"none"},children:e},e))})]}),"PG/Co-living"==eA||"PG/Co-living"==eh?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"PG For"}),(0,t.jsx)(v.Z,{children:eJ.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eQ&&eQ.includes(e),onChange:e$,value:e}),label:e},e))})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Room Type"}),(0,t.jsx)(v.Z,{children:e3.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:e8&&e8.includes(e),onChange:ll,value:e}),label:e},e))})]}),(0,t.jsx)(a.Z,{style:{margin:"10px 0"},children:(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Food Available"}),(0,t.jsx)(v.Z,{children:e7.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(Z.Z,{checked:e6===e,onChange:e9,value:e,name:"foodAvailable"}),label:e},e))})]})})]}):"","Commercial"!==ec&&(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Amenities"}),"PG/Co-living"!==eA&&"PG/Co-living"!==eh&&(0,t.jsx)(v.Z,{children:eD.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eK&&eK.includes(e),onChange:eU,value:e}),label:e},e))}),"PG/Co-living"==eA||"PG/Co-living"==eh?(0,t.jsx)(v.Z,{children:eO.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eK&&eK.includes(e),onChange:eU,value:e}),label:e},e))}):""]}),"PG/Co-living"!==eA&&"PG/Co-living"!==eh&&"Commercial"!==ec&&"Plot"!==eL&&"Agricultural Land"!==eL&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{className:"button-container3",style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Age of Property"}),(0,t.jsx)(a.Z,{style:{margin:"10px 0"},children:ls.map(e=>(0,t.jsx)(C.Z,{className:"custom-button3",onClick:()=>ln(e),style:{backgroundColor:e.value===lt?"blue":"white",color:e.value===lt?"white":"black",border:e.value===lt?"1px solid blue":"1px solid #8E8E8E",marginRight:"-40px",marginBottom:"10px",textTransform:"none"},children:e.label},e.label))})]}),(0,t.jsxs)(a.Z,{style:{margin:"10px 0"},children:[(0,t.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Facing"}),(0,t.jsx)(v.Z,{children:eV.map(e=>(0,t.jsx)(j.Z,{control:(0,t.jsx)(b.Z,{checked:eM&&eM.includes(e),onChange:eq,value:e}),label:e},e))})]})]})]})}),(0,t.jsx)(n.ZP,{item:!0,lg:7,md:6,xs:12,children:ea.length>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{className:"fil_middle_sec_wrap ",children:[(0,t.jsxs)(o.Z,{children:["Showing ",ea.length," results"]}),(0,t.jsxs)(a.Z,{style:{display:"flex",alignItems:"center",paddingLeft:"15px"},children:[(0,t.jsx)(o.Z,{pt:2,R:!0,mr:1,children:"Sort by:"}),(0,t.jsxs)(h.Z,{sx:{minWidth:200},size:"small",children:[(0,t.jsx)(p.Z,{id:"sort-by-label",children:"Sort by"}),(0,t.jsx)(g.Z,{labelId:"sort-by-label",id:"sort-by-select",value:lJ,onChange:e=>{lQ(e.target.value)},label:"Sort by",children:[{value:"Price- High-Low",label:"Price - High to Low"},{value:"Price- Low-High",label:"Price - Low to High"},{value:"Date- Latest-Oldest",label:"Date - Latest to Oldest"},{value:"Date- Oldest-Latest",label:"Date - Oldest to Latest"}].map((e,l)=>(0,t.jsx)(u.Z,{value:e.value,children:e.label},l))})]})]})]}),(0,t.jsx)(n.ZP,{container:!0,spacing:3,className:"fpg_middle_cards",style:{marginTop:"20px",display:"flex"},children:lX.map((e,l)=>(0,t.jsx)(n.ZP,{item:!0,lg:6,md:12,sm:6,xs:12,children:(0,t.jsx)(S.Z,{className:"outerbox cardOuterBox",style:{height:"280px",marginRight:"10px",marginBottom:"10px"},onClick:()=>l0(e.propTitle),children:(0,t.jsxs)("div",{children:[(0,t.jsx)(a.Z,{component:"img",sx:{height:170,display:"block",maxWidth:400,overflow:"hidden",width:"100%",objectFit:"cover"},src:e.imageUrls[0]}),(0,t.jsxs)(a.Z,{style:{padding:"10px"},children:[(0,t.jsxs)(o.Z,{variant:"h6",fontWeight:600,children:["₹",eZ(e.monthlyRent)]}),(0,t.jsxs)(o.Z,{style:{display:"flex",alignItems:"center"},className:"cardrent",variant:"p",mt:1,children:[(0,t.jsx)(X.Z,{})," ".concat(e.locality," ").concat(e.searchCity).slice(0,15)," Located At ".concat(e.locality," ").concat(e.searchCity).length>15?"...":""]}),(0,t.jsx)(a.Z,{display:"flex",alignItems:"center",children:(0,t.jsx)(a.Z,{mr:2,children:(0,t.jsx)(o.Z,{variant:"body2",children:(0,t.jsxs)(a.Z,{display:"flex",alignItems:"center",style:{marginTop:"7px"},children:[e.bhk&&(0,t.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,t.jsx)(R.Z,{style:{color:"gray",marginRight:"5px"}}),(0,t.jsx)(o.Z,{variant:"body2",style:{fontSize:"13px",fontWeight:"600"},children:e.bhk})]}),0==e.washroom&&e.plotArea>0?(0,t.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,t.jsx)(V.Z,{style:{color:"gray",marginRight:"5px"}}),(0,t.jsxs)(o.Z,{variant:"body2",style:{fontSize:"13px",fontWeight:"600"},children:[e.plotArea," sq.ft"]})]}):"",e.washroom>0&&(0,t.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,t.jsx)(T.Z,{style:{color:"gray",marginRight:"5px"}}),(0,t.jsxs)(o.Z,{variant:"body2",style:{fontSize:"13px",fontWeight:"600"},children:[e.washroom," Washrooms"]})]}),e.yourFloor&&(0,t.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,t.jsx)(H.Z,{style:{color:"gray",marginRight:"5px"}}),(0,t.jsxs)(o.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:[function(e){if(isNaN(e))return e;{let l=parseInt(e),s=["th","st","nd","rd"],t=l%100;return l+(s[(t-20)%10]||s[t]||"th")}}(e.yourFloor),"Floor"]})]}),e.pgIsFor&&(0,t.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,t.jsx)(z.Z,{style:{color:"gray",marginRight:"5px"}}),(0,t.jsxs)(o.Z,{variant:"body2",children:["PG for ",e.pgIsFor]})]})]})})})})]})]})},l)},l))})]}):(0,t.jsx)(a.Z,{className:"cardFilterContainer",children:(0,t.jsxs)(a.Z,{style:{border:"1px solid #80808070",padding:"15px",borderRadius:"4px"},children:[(0,t.jsx)(a.Z,{style:{width:"100%",height:"280px"},children:(0,t.jsx)(U.default,{src:_,alt:"no propert found",style:{height:"100%",width:"100%"}})}),(0,t.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"15px"},children:[(0,t.jsx)("h3",{children:"No properties found"}),(0,t.jsx)(o.Z,{children:"Try removing some filters or reset your filters"}),(0,t.jsx)(C.Z,{variant:"contained",style:{marginTop:"10px"},onClick:()=>{eS(""),eW(""),eN(""),eB(""),eG(""),e_(null),eY(null),eX(null),e4(""),le(null),la(""),lp(""),lm(""),lv(""),lS(""),lR(""),lI(""),lG(""),lO(""),lU(""),lM(""),lf([0,15e6]),lx([0,15e3]),lq()},children:"Reset"})]})]})})})]})]}),(0,t.jsx)(n.ZP,{item:!0,lg:3,md:3,xs:12,children:ei.length>0&&(0,t.jsxs)(a.Z,{style:{background:"#F3F4F4",padding:"20px"},children:[(0,t.jsxs)(S.Z,{sx:{maxWidth:465},onClick:()=>l1(ei[0].propTitle),children:[(0,t.jsx)(P.Z,{component:"img",image:ei[0].imageUrls&&ei[0].imageUrls[0],sx:{height:150},title:"Property Image"}),(0,t.jsx)(w.Z,{children:(0,t.jsx)(a.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,t.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,t.jsxs)(o.Z,{fontWeight:"600",style:{fontSize:"1rem"},children:["₹",eZ(ei[0].monthlyRent)]}),(0,t.jsxs)(o.Z,{style:{display:"flex",alignItems:"center"},className:"cardrent",variant:"p",mt:1,children:[(0,t.jsx)(X.Z,{})," ","".concat(ei[0].locality," ").concat(ei[0].searchCity).slice(0,15)," Located At ".concat(ei[0].locality," ").concat(ei[0].searchCity).length>15?"...":""]})]})})})]}),ei.slice(1).map((e,l)=>(0,t.jsx)(a.Z,{style:{marginTop:"10px"},children:(0,t.jsxs)(S.Z,{sx:{maxWidth:465},style:{display:"flex",alignItems:"center"},onClick:()=>l1(e.propTitle),children:[(0,t.jsx)(P.Z,{component:"img",image:e.imageUrls&&e.imageUrls[0],sx:{height:110,width:"50%"},title:"Property Image"}),(0,t.jsx)(w.Z,{children:(0,t.jsx)(a.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,t.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,t.jsxs)(o.Z,{variant:"h6",fontWeight:"700",style:{fontSize:"0.9rem"},children:["₹",eZ(e.monthlyRent)]}),(0,t.jsxs)(o.Z,{style:{display:"flex",alignItems:"center"},className:"cardrent",variant:"p",mt:1,children:[(0,t.jsx)(X.Z,{})," ","".concat(e.locality," ").concat(e.searchCity).slice(0,15)," Located At ".concat(e.locality," ").concat(e.searchCity).length>15?"...":""]})]})})})]})},l))]})})]})}),(0,t.jsx)(J.Z,{open:eg,autoHideDuration:6e3,onClose:ej,anchorOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiAlert-filledError":{backgroundColor:"Red",color:"#fff"}},children:(0,t.jsx)(q.Z,{onClose:ej,severity:"error",variant:"filled",children:eu})}),(0,t.jsx)(A.Z,{open:D,onClose:es,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,t.jsxs)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:450,bgcolor:"background.paper",boxShadow:24,borderRadius:"4px",p:4},children:[(0,t.jsx)(a.Z,{style:{width:"100%",justifyContent:"end",display:"flex"},children:(0,t.jsx)(C.Z,{style:{color:"#000"},onClick:es,children:"X"})}),(0,t.jsx)(Q.default,{close:es})]})}),(0,t.jsx)(B.default,{})]})}},74737:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return m}});var t=s(3827),a=s(54272),n=s(82508),i=s(10470),r=s(29835),o=s(6285),c=s(20703);s(47587);var d=s(79789);s(8792);var x=s(92026),h=s(47907),p=s(10242),g=s(64090);function m(e){let{close:l}=e;(0,h.useRouter)();let[s,m]=(0,g.useState)({mobno:"",password:""}),[u,y]=(0,g.useState)({mobno:"",password:""}),j=e=>{let{name:l,value:s}=e.target;m(e=>({...e,[l]:s})),y(e=>({...e,[l]:""}))},Z=async()=>{let e={};if(""===s.mobno.trim()&&(e.mobno="Mobile number is required"),""===s.password.trim()&&(e.password="Password is required"),y(e),!Object.values(e).every(e=>""===e))return!1;{let e="".concat(p.Z.baseurl,"auth/login");try{let t=await (0,x.Lx)(e,s,"POST");!1===t.error?(localStorage.setItem("token",t.token),m({mobno:"",password:""}),l(),console.log("login sucessfully--",t)):toast.error(t.message,{position:"top-right",theme:"light"})}catch(e){throw e}}};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.Z,{children:(0,t.jsx)(n.ZP,{container:!0,children:(0,t.jsx)(n.ZP,{item:!0,lg:12,md:12,xs:12,children:(0,t.jsx)("div",{className:" right-side-container",children:(0,t.jsx)(i.Z,{style:{boxShadow:"none"},children:(0,t.jsxs)(a.Z,{style:{padding:"0px 15px",margin:"auto"},className:"mainBox",children:[(0,t.jsx)("div",{style:{marginBottom:"25px",marginTop:"15px"},className:"logoImg",children:(0,t.jsx)(c.default,{src:d.Z})}),(0,t.jsx)(r.Z,{variant:"h5",fontWeight:600,className:"variantH5",children:"Welcome Back to FreeLife Housing!"}),(0,t.jsx)(r.Z,{color:"#8E8E8E",className:"variant",children:"Log in to your account"}),(0,t.jsxs)(a.Z,{style:{marginTop:"20px"},children:[(0,t.jsxs)("div",{className:"loginregwrap",children:[(0,t.jsx)("label",{className:"loginreglabel font-weight-bold",children:"Mobile Number"}),(0,t.jsx)("input",{type:"text",id:"mobno",name:"mobno",value:s.mobno,onChange:j,placeholder:"Enter mobile number",className:"loginRegInput"}),u.mobno&&(0,t.jsx)("span",{className:"error",children:u.mobno})]}),(0,t.jsxs)("div",{className:"loginregwrap",children:[(0,t.jsx)("label",{className:"loginreglabel font-weight-bold",children:"Password"}),(0,t.jsx)("input",{type:"password",id:"password",name:"password",value:s.password,onChange:j,placeholder:"Enter password",className:"loginRegInput"}),u.password&&(0,t.jsx)("span",{className:"error",children:u.password})]})]}),(0,t.jsx)(o.Z,{variant:"contained",className:"freehousing_button addbutton",style:{textTransform:"none",width:"100%",margin:"15px 0"},onClick:Z,children:"Login"})]})})})})})})})}},47587:function(e,l){"use strict";l.Z={src:"/_next/static/media/loginRegister.04c1af2b.png",height:1080,width:959,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAqElEQVR42iWLPQrCQBBGZ2ZXoxINbIRYKBZWgoInsfYoHsfOxtKjiJ0g2sSgJJCg+VlnjPoVH7wHD3eHEBEAvscirhIW0LYqX1laa1sW2vUC41pmTQhiq4bTwk531GsnlaQWqWTKyWHtGN/UKCJNArWYBMf9dnW5zsd+5Jm4EI2oNuvHcjZQoSRPPA+nJAyIpHQfCG93yqWpEP4jlrdCPEVZnNu6lZ/9ACvuRTr4WoR/AAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}}},function(e){e.O(0,[990,650,792,862,995,964,762,163,958,824,380,971,69,744],function(){return e(e.s=67606)}),_N_E=e.O()}]);