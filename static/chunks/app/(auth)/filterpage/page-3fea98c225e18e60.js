(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{81803:function(e,t,l){Promise.resolve().then(l.bind(l,61708))},61708:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return K}});var s=l(3827),r=l(54272),n=l(82508),i=l(14332),a=l(41224),o=l(29835),c=l(23712),d=l(39424),h=l(41848),x=l(55934),p=l(87640),g=l(68148),m=l(14647),u=l(98322),y=l(55602),j=l(18645),f=l(70334),Z=l(6285),b=l(85195),v=l(3340),P=l(95996),S=l(64090);l(73219);var C=l(93299),D=l(57572),w=l(86325),A=l(98562),k=l(85693),L=l(49239),W=l(80843),R=l(10242),T=l(92026),I=l(90588),F=l(9608),B=l(42151),E=l.n(B),N=l(47907),H=l(8792),G={src:"/_next/static/media/noPropertyfound.d69df139.png",height:431,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAgklEQVR42mM4f+8Z+7m7T+QZkMDVJ695zt55InD+3lN2uOCUJWv556xYrzZj6VrFyOIaFpDY6r27GRlO3Xwg+PzLH66Vuw7rLVu3uXvF5l1lm46cl7j+7K3QreffWRiuPHjlsP/q5ZS9ty87Hth3yOfM9Tv+6y4c9D5753Hi9MPLLAFbt0DRxo/ARgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},_=l(20703),z=l(65593);function K(){let e=(0,N.useRouter)(),[t,l]=(0,S.useState)([]),[B,K]=(0,S.useState)([]);console.log("propertyList state:",t);let O=(0,N.useSearchParams)(),M=O.get("propertyType"),U=O.get("city"),V=O.get("search"),Y=O.get("propertyStatus"),q=O.get("buildingType"),J=e=>e?"object"==typeof e?"".concat(e.minpgRent/1e3,"k - ").concat(e.maxpgRent/1e3,"k"):e>=1e7?"".concat((e/1e7).toFixed(1),"cr"):e>=1e5?"".concat((e/1e5).toFixed(1),"L"):e>=1e3?"".concat((e/1e3).toFixed(0),"k"):e.toString():"",[Q,X]=(0,S.useState)([]);console.log("is localities---",Q),(0,S.useEffect)(()=>{(async()=>{console.log("function trigger");try{let e="".concat(R.Z.baseurl,"api/viewLocalities"),t=await (0,T.KD)(e);X(t[0].localities),console.log("loaclities response---",t)}catch(e){console.error("Error:",e)}})()},[]);let[$,ee]=(0,S.useState)(null),et=e=>{ee(e)},el=["Rent","Sell"];"Commercial"!==M&&el.push("PG/Co-living");let[es,er]=(0,S.useState)(null),en=["Apartment","Independent House","Independent Floor","Villa"];("Sell"==es||"Buy"==Y)&&en.push("Plot","Agricultural Land"),(0,S.useEffect)(()=>{"Buy"==Y?er("Sell"):er(Y)},[]);let[ei,ea]=(0,S.useState)(null),eo=e=>{ea(e.target.value)},[ec,ed]=(0,S.useState)(!1),[eh,ex]=(0,S.useState)(!1),[ep,eg]=(0,S.useState)(null),em=e=>{let t=e.target.value;eg(e=>e&&e.includes(t)?e.filter(e=>e!==t):[...e||[],t])},[eu,ey]=(0,S.useState)(null),ej=e=>{let t=e.target.value;ey(e=>e&&e.includes(t)?e.filter(e=>e!==t):[...e||[],t])},[ef,eZ]=(0,S.useState)(null),eb=e=>{let t=e.target.value;eZ(e=>e&&e.includes(t)?e.filter(e=>e!==t):[...e||[],t])},[ev,eP]=(0,S.useState)(null),eS=e=>{let t=e.target.value;eP(e=>e&&e.includes(t)?e.filter(e=>e!==t):[...e||[],t])},[eC,eD]=(0,S.useState)(null),ew=e=>{eD(e.target.value)},[eA,ek]=(0,S.useState)(null),eL=e=>{let t=e.target.value;ek(e=>e&&e.includes(t)?e.filter(e=>e!==t):[...e||[],t])},[eW,eR]=(0,S.useState)(null),eT=e=>{eR(e.value)},[eI,eF]=S.useState([0,15e3]),[eB,eE]=(0,S.useState)(),[eN,eH]=(0,S.useState)(),[eG,e_]=S.useState([0,15e6]),[ez,eK]=(0,S.useState)(),[eO,eM]=(0,S.useState)(),[eU,eV]=(0,S.useState)(""),[eY,eq]=(0,S.useState)(""),[eJ,eQ]=(0,S.useState)(""),[eX,e$]=(0,S.useState)(""),[e0,e1]=(0,S.useState)(""),[e2,e3]=(0,S.useState)(""),e5=async()=>{console.log("function trigger");try{let e=localStorage.getItem("token"),t="".concat(R.Z.baseurl,"filter/propertyFilter"),s={propertyType1:M,lookingTo:"Buy"===Y?"Sell":Y,bathroom:[]};ei&&(s.propertyType2=ei),es&&(s.lookingTo=es),eU&&(s.bhk=eU),ec&&s.bathroom.push("indians"),eh&&s.bathroom.push("western"),eJ&&(s.possesionDate=eJ),$&&(s.postedBy=$),eu&&(s.facing=eu),e2&&(s.locality=e2),eY&&(s.possesionStatus=eY),eX&&(s.preRented="Pre-Leased"===eX?"Yes":"No"),ep&&(s.amenities=ep),(eB||eN)&&(s.minBuiltUpArea=eB,s.maxBuiltUpArea=eN),(ez||eO)&&(s.minPrice=ez,s.maxPrice=eO),eA&&(s.roomType=eA),ef&&(s.pgIsFor=ef),eC&&(s.mealsAvailable=eC),"Plot"==q&&(s.propertyType2=q),ev&&(s.saleType=ev),console.log("payload filter",s);let r=await (0,T.$h)(t,s,e);console.log("payload filter response",r),l(r.propertyList||[])}catch(e){console.error("Error:",e)}};(0,S.useEffect)(()=>{e5()},[M,Y,ei,es,eU,ec,eh,eJ,$,eu,e2,eY,eX,ez,eO,ep,eB,eN,eA,ef,eC,ev]);let[e4,e7]=(0,S.useState)(""),e6=t.slice().sort((e,t)=>{if(E()(e.createdAt).format("YYYY-MM-DD"),E()(e.createdAt).format("YYYY-MM-DD"),"Price- High-Low"===e4)return t.monthlyRent-e.monthlyRent;if("Price- Low-High"===e4)return e.monthlyRent-t.monthlyRent;if("Date- Latest-Oldest"===e4){let l=E()(t.createdAt).diff(E()(e.createdAt));return 0===l?E()(t.createdAt).diff(E()(e.createdAt),"milliseconds"):l}if("Date- Oldest-Latest"!==e4)return 0;{let l=E()(e.createdAt).diff(E()(t.createdAt));return 0===l?E()(e.createdAt).diff(E()(t.createdAt),"milliseconds"):l}});(0,S.useEffect)(()=>{},[e6]);let e8=async e=>{console.log("wishlist function trigger");try{let t=localStorage.getItem("token"),l=localStorage.getItem("userId"),s={property_id:e,user_id:l};console.log("recently payload",s);let r="".concat(R.Z.baseurl,"user/addToRecently"),n=await (0,T.$h)(r,s,t);console.log("recently response --",n)}catch(e){console.error("Error:",e)}},e9=t=>{e8(t),e.push("/singleProperty?property_id=".concat(t))},te=async()=>{try{let e=localStorage.getItem("token"),t=localStorage.getItem("userId"),l="".concat(R.Z.baseurl,"api/recentlyView"),s=await (0,T.$h)(l,{user_id:t},e);console.log("all recently response",s),K(s.recently||[])}catch(e){console.error("Error:",e)}};(0,S.useEffect)(()=>{te()},[]);let tt=()=>{let e=[];return e.push((0,s.jsx)(H.default,{underline:"hover",className:"breadcombs",color:"inherit",href:"/",children:"Home"},"home")),M&&e.push((0,s.jsx)(H.default,{underline:"hover",className:"breadcombs",color:"inherit",href:"/filterpage?propertyType=".concat(M),children:M},M)),e};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(L.default,{}),(0,s.jsx)(r.Z,{className:"content_wrapper",children:(0,s.jsxs)(n.ZP,{container:!0,spacing:2,style:{display:"flex"},children:[(0,s.jsxs)(n.ZP,{item:!0,lg:9,md:9,xs:12,children:[(0,s.jsx)(i.Z,{spacing:2,children:(0,s.jsx)(a.Z,{separator:"›","aria-label":"breadcrumb",children:(0,s.jsx)("div",{children:tt().map((e,t)=>(0,s.jsxs)("span",{children:[e,t<tt().length-1&&" > "]},t))})})}),(0,s.jsxs)(o.Z,{variant:"h5",fontWeight:700,mt:2,children:["Properties for ",Y," in ",V,", ",U]}),(0,s.jsxs)(n.ZP,{container:!0,marginTop:"20px",children:[(0,s.jsx)(n.ZP,{item:!0,lg:4,md:4,children:(0,s.jsxs)(r.Z,{className:"flter_select_sec",children:[(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Find your home"}),(0,s.jsx)(r.Z,{sx:{width:250,margin:"10px 0"},children:(0,s.jsx)(c.Z,{freeSolo:!0,options:Q,inputValue:e2,onInputChange:(e,t)=>{e3(t)},renderInput:e=>(0,s.jsx)(d.Z,{...e,label:"Location",size:"small",sx:{width:250,background:"#fff",borderRadius:"4px"},InputProps:{...e.InputProps,startAdornment:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(A.Z,{style:{marginRight:"8px",color:"grey"}}),e.InputProps.startAdornment]})}})})})]}),(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Property status"}),(0,s.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,s.jsx)(x.Z,{"aria-label":"property-type",name:"property-type",value:es,onChange:e=>{er(e.target.value)},children:el.map(e=>(0,s.jsx)(p.Z,{value:e,control:(0,s.jsx)(g.Z,{className:"radiobuttons"}),label:"Sell"===e?"Buy":e},e))})})]}),"Commercial"!==M&&("PG/Co-living"!==es||"PG/Co-living"!==Y)&&(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Building Type"}),(0,s.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,s.jsx)(x.Z,{row:!0,"aria-label":"property-type",name:"property-type",value:ei,onChange:eo,children:en.map(e=>(0,s.jsx)(p.Z,{value:e,control:(0,s.jsx)(g.Z,{className:"radiobuttons"}),label:e},e))})})]}),"Commercial"==M&&(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Building Type"}),(0,s.jsx)(h.Z,{component:"fieldset",style:{margin:"0"},children:(0,s.jsx)(x.Z,{row:!0,"aria-label":"property-type",name:"property-type",value:ei,onChange:eo,children:["Office","Retail Shop","Showroom","Warehouse","Plot","Other"].map(e=>(0,s.jsx)(p.Z,{value:e,control:(0,s.jsx)(g.Z,{className:"radiobuttons"}),label:e},e))})})]}),(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Price Range"}),(0,s.jsx)(r.Z,{sx:{width:230},children:(0,s.jsx)(m.ZP,{getAriaLabel:()=>"Area range",value:eG,onChange:(e,t)=>{e_(t),eK(t[0]),eM(t[1])},valueLabelDisplay:"auto",getAriaValueText:function(e){return"₹".concat(e)},min:0,max:15e6,marks:[{value:0,label:"₹ 0"},{value:15e6,label:"₹1,50,00000"}]})})]}),"PG/Co-living"!==es&&"PG/Co-living"!==Y&&(0,s.jsxs)(s.Fragment,{children:["Commercial"!==M&&"Plot"!==ei&&"Agricultural Land"!==ei&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"BHK Type"}),(0,s.jsx)(r.Z,{sx:{width:250,marginTop:"10px"},children:(0,s.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,s.jsxs)(u.Z,{value:eU,onChange:e=>{eV(e.target.value)},displayEmpty:!0,inputProps:{"aria-label":"BHK Type"},sx:{width:250,background:"#fff",borderRadius:"4px"},children:[(0,s.jsx)(y.Z,{value:"",disabled:!0,children:(0,s.jsx)("em",{children:"Select BHK Type"})}),["1RK","1BHK","2BHK","3BHK","4BHK","5BHK","6BHK","7BHK","8BHK","9BHK","10BHK"].map(e=>(0,s.jsx)(y.Z,{value:e,children:e},e))]})})})]}),(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Washrooms"}),(0,s.jsxs)(r.Z,{sx:{width:250,marginTop:"10px"},children:[(0,s.jsx)(p.Z,{control:(0,s.jsx)(j.Z,{checked:ec,onChange:e=>{ed(e.target.checked)}}),label:"Indian"}),(0,s.jsx)(p.Z,{control:(0,s.jsx)(j.Z,{checked:eh,onChange:e=>{ex(e.target.checked)}}),label:"Western"})]})]})]}),(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Plot"==ei||"Agricultural Land"==ei?"Plot Area (Sq.Ft.)":"Built Up Area (Sq.Ft.)"}),(0,s.jsx)(r.Z,{sx:{width:230},children:(0,s.jsx)(m.ZP,{getAriaLabel:()=>"Area range",value:eI,onChange:(e,t)=>{eF(t),eE(t[0]),eH(t[1])},valueLabelDisplay:"auto",getAriaValueText:function(e){return"₹".concat(e)},min:0,max:15e3,step:10,marks:[{value:0,label:"0 Sq/Ft"},{value:15e3,label:"1,5000 Sq/Ft"}]})})]})]}),(0,s.jsxs)(r.Z,{style:{display:"flex",alignItems:"center",margin:"10px 0"},children:[(0,s.jsx)(k.Z,{disabled:!0,"aria-label":"like",style:{height:"20px",width:"35px",background:"#fff",marginTop:"5px"},children:(0,s.jsx)(w.Z,{})}),(0,s.jsx)(r.Z,{style:{marginLeft:"10px"},children:(0,s.jsx)(o.Z,{style:{fontWeight:"700",marginTop:"8px"},children:"Other Features"})})]}),"Commercial"==M&&(0,s.jsxs)(s.Fragment,{children:["Commercial"==M&&"Rent"==Y&&"Plot"==ei?"":(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Possession Status"}),(0,s.jsx)(r.Z,{sx:{width:250,marginTop:"10px"},children:(0,s.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,s.jsxs)(u.Z,{value:eY,onChange:e=>{eq(e.target.value)},displayEmpty:!0,inputProps:{"aria-label":"Possession Status"},sx:{width:250,background:"#fff",borderRadius:"4px"},children:[(0,s.jsx)(y.Z,{value:"",disabled:!0,children:(0,s.jsx)("em",{children:"Possession Status"})}),["Ready to move","Under Construction"].map(e=>(0,s.jsx)(y.Z,{value:e,children:e},e))]})})})]}),(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Lease Type"}),(0,s.jsx)(r.Z,{sx:{width:250,marginTop:"10px 0"},children:(0,s.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,s.jsxs)(u.Z,{value:eX,onChange:e=>{e$(e.target.value)},displayEmpty:!0,inputProps:{"aria-label":"Lease Type"},sx:{width:250,background:"#fff",borderRadius:"4px"},children:[(0,s.jsx)(y.Z,{value:"",disabled:!0,children:(0,s.jsx)("em",{children:"Select Lease Type"})}),["Pre-Leased","Non-Leased"].map(e=>(0,s.jsx)(y.Z,{value:e,children:e},e))]})})})]})]}),"PG/Co-living"!==es&&"Commercial"!==M&&"PG/Co-living"!==Y&&(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Possession Status"}),(0,s.jsx)(r.Z,{sx:{width:250,margin:"10px 0"},children:(0,s.jsx)(h.Z,{sx:{m:0,minWidth:120},size:"small",children:(0,s.jsxs)(u.Z,{value:eJ,onChange:e=>{eQ(e.target.value)},displayEmpty:!0,inputProps:{"aria-label":"Possession Status"},sx:{width:250,background:"#fff",borderRadius:"4px"},children:[(0,s.jsx)(y.Z,{value:"",disabled:!0,children:(0,s.jsx)("em",{children:"Possession Status"})}),["Less than 1 year","Less than 2 years","Less than 3 years","Less than 4 years","Less than 5 years"].map(e=>(0,s.jsx)(y.Z,{value:e,children:e},e))]})})})]}),"Residential"==M&&"Sell"==es&&("Plot"==ei||"Agricultural Land"==ei)&&(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Sale Type"}),(0,s.jsx)(f.Z,{children:["Resale","New Booking"].map(e=>(0,s.jsx)(p.Z,{control:(0,s.jsx)(j.Z,{checked:ev&&ev.includes(e),onChange:eS,value:e}),label:e},e))})]}),(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Property Post By"}),(0,s.jsx)(r.Z,{style:{margin:"10px 0"},children:["Agent","Owner","Builder","Expert pro agent"].map(e=>(0,s.jsx)(Z.Z,{onClick:()=>et(e),style:{backgroundColor:e===$?"blue":"white",color:e===$?"white":"black",border:e===$?"1px solid blue":"1px solid #8E8E8E",marginRight:"10px",marginBottom:"10px",textTransform:"none"},children:e},e))})]}),"PG/Co-living"==es||"PG/Co-living"==Y?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"PG For"}),(0,s.jsx)(f.Z,{children:["Boys","Girls"].map(e=>(0,s.jsx)(p.Z,{control:(0,s.jsx)(j.Z,{checked:ef&&ef.includes(e),onChange:eb,value:e}),label:e},e))})]}),(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Room Type"}),(0,s.jsx)(f.Z,{children:["Private Room","Double Sharing","Triple Sharing","3+ Sharing"].map(e=>(0,s.jsx)(p.Z,{control:(0,s.jsx)(j.Z,{checked:eA&&eA.includes(e),onChange:eL,value:e}),label:e},e))})]}),(0,s.jsx)(r.Z,{style:{margin:"10px 0"},children:(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Food Available"}),(0,s.jsx)(f.Z,{children:["Yes","No"].map(e=>(0,s.jsx)(p.Z,{control:(0,s.jsx)(g.Z,{checked:eC===e,onChange:ew,value:e,name:"foodAvailable"}),label:e},e))})]})})]}):"","Commercial"!==M&&(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Amenities"}),"PG/Co-living"!==es&&"PG/Co-living"!==Y&&(0,s.jsx)(f.Z,{children:["Dining Table","Washing Machine","Sofa","Microwave","Stove","Fridge","Water Purifier","Gas Pipeline","AC","Bed","TV","Cupboard","Geyser","Lift","CCTV","Gym","Garden","Kids Area","Sports","Swimming Pool","Intercom","Gated Community","Club House","Community Hall","Regular Water Supply","Power Backup","Pet Allowed"].map(e=>(0,s.jsx)(p.Z,{control:(0,s.jsx)(j.Z,{checked:ep&&ep.includes(e),onChange:em,value:e}),label:e},e))}),"PG/Co-living"==es||"PG/Co-living"==Y?(0,s.jsx)(f.Z,{children:["CCTV","Gated Community","Security","Biometric","Fridge","Washing Machine","Microwave","Water Purifier","TT Table","TV","Coffee Machine","Snacks Machine","Laundry","Housekeeping","Internet/WiFi Connectivity","GYM","Lift","Regular Water Supply","Swimming Pool","Reserved Parking","Power Backup"].map(e=>(0,s.jsx)(p.Z,{control:(0,s.jsx)(j.Z,{checked:ep&&ep.includes(e),onChange:em,value:e}),label:e},e))}):""]}),"PG/Co-living"!==es&&"PG/Co-living"!==Y&&"Commercial"!==M&&"Plot"!==ei&&"Agricultural Land"!==ei&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Age of Property"}),(0,s.jsx)(r.Z,{style:{margin:"10px 0"},children:[{label:"Less than 1 year",value:1},{label:"Less than 3 years",value:3},{label:"Less than 5 years",value:5},{label:"Less than 10 years",value:10},{label:"More than 10 years",value:10}].map(e=>(0,s.jsx)(Z.Z,{onClick:()=>eT(e),style:{backgroundColor:e.value===eW?"blue":"white",color:e.value===eW?"white":"black",border:e.value===eW?"1px solid blue":"1px solid #8E8E8E",marginRight:"10px",marginBottom:"10px",textTransform:"none"},children:e.label},e.label))})]}),(0,s.jsxs)(r.Z,{style:{margin:"10px 0"},children:[(0,s.jsx)(o.Z,{style:{fontWeight:"700",margin:"10px 0"},children:"Facing"}),(0,s.jsx)(f.Z,{children:["North","East","West","South","North-East","North-West","South-East","South-West"].map(e=>(0,s.jsx)(p.Z,{control:(0,s.jsx)(j.Z,{checked:eu&&eu.includes(e),onChange:ej,value:e}),label:e},e))})]})]})]})}),(0,s.jsx)(n.ZP,{item:!0,lg:8,md:8,children:t.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.Z,{className:"fil_middle_sec_wrap",children:[(0,s.jsxs)(o.Z,{children:["Showing ",t.length," results"]}),(0,s.jsxs)(r.Z,{style:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(o.Z,{pt:2,R:!0,mr:1,children:"Sort by:"}),(0,s.jsx)(c.Z,{disablePortal:!0,id:"combo-box-demo",options:[{label:"Price- High-Low"},{label:"Price- Low-High"},{label:"Date- Latest-Oldest"},{label:"Date- Oldest-Latest"}],onChange:(e,t)=>{e7(t.label)},getOptionLabel:e=>e.label,sx:{width:200,height:"20px"},renderInput:e=>(0,s.jsx)(d.Z,{...e,label:"Sort by",size:"small"})})]})]}),(0,s.jsx)(n.ZP,{container:!0,spacing:3,className:"fpg_middle_cards",style:{marginTop:"20px"},children:e6.map((e,t)=>{var l,i,a,c;return null===(i=e.propertyDetails)||void 0===i||null===(l=i.bathroom)||void 0===l||l.indians,null===(c=e.propertyDetails)||void 0===c||null===(a=c.bathroom)||void 0===a||a.western,(0,s.jsx)(n.ZP,{item:!0,lg:6,md:6,sm:6,xs:12,children:(0,s.jsx)(b.Z,{className:"outerbox",style:{marginRight:"10px",marginBottom:"10px"},onClick:()=>e9(e._id),children:(0,s.jsxs)("div",{children:[(0,s.jsx)(r.Z,{component:"img",sx:{height:170,display:"block",maxWidth:400,overflow:"hidden",width:"100%",objectFit:"cover"},src:e.imageUrls}),(0,s.jsxs)(r.Z,{style:{padding:"10px"},children:[(0,s.jsxs)(o.Z,{variant:"h6",fontWeight:600,children:["₹",J(e.monthlyRent)]}),(0,s.jsxs)(o.Z,{variant:"p",mt:1,children:["Located at ",e.searchCity]}),(0,s.jsx)(r.Z,{display:"flex",alignItems:"center",children:(0,s.jsx)(r.Z,{mr:2,children:(0,s.jsx)(o.Z,{variant:"body2",children:(0,s.jsxs)(r.Z,{display:"flex",alignItems:"center",style:{marginTop:"7px"},children:[e.bhk&&(0,s.jsxs)(r.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,s.jsx)(C.Z,{style:{color:"gray",marginRight:"5px"}}),(0,s.jsx)(o.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:e.bhk})]}),"Plot"==ei||"Agricultural Land"==ei&&e.plotArea>0?(0,s.jsxs)(r.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,s.jsx)(z.Z,{style:{color:"gray",marginRight:"5px"}}),(0,s.jsxs)(o.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:[e.plotArea," sq.ft"]})]}):"",e.washroom>0&&(0,s.jsxs)(r.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,s.jsx)(D.Z,{style:{color:"gray",marginRight:"5px"}}),(0,s.jsxs)(o.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:[e.washroom," Washrooms"]})]}),e.yourFloor&&(0,s.jsxs)(r.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,s.jsx)(I.Z,{style:{color:"gray",marginRight:"5px"}}),(0,s.jsxs)(o.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:[function(e){let t=["th","st","nd","rd"],l=e%100;return e+(t[(l-20)%10]||t[l]||"th")}(parseInt(e.yourFloor)),"Floor"]})]}),e.pgIsFor&&(0,s.jsxs)(r.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,s.jsx)(F.Z,{style:{color:"gray",marginRight:"5px"}}),(0,s.jsxs)(o.Z,{variant:"body2",children:["PG for ",e.pgIsFor]})]})]})})})})]})]})},t)},t)})})]}):(0,s.jsx)(r.Z,{children:(0,s.jsxs)(r.Z,{style:{border:"1px solid #80808070",padding:"15px",borderRadius:"4px"},children:[(0,s.jsx)(r.Z,{style:{width:"100%",height:"280px"},children:(0,s.jsx)(_.default,{src:G,alt:"no propert found",style:{height:"100%",width:"100%"}})}),(0,s.jsxs)(r.Z,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"15px"},children:[(0,s.jsx)("h3",{children:"No properties found"}),(0,s.jsx)(o.Z,{children:"Try removing some filters or reset your filters"}),(0,s.jsx)(Z.Z,{variant:"contained",style:{marginTop:"10px"},onClick:()=>{ee(""),er(""),ea(""),ed(""),ex(""),eg(null),ey(null),eZ(null),eD(""),ek(null),eR(""),eE(""),eH(""),eK(""),eM(""),eV(""),eq(""),eQ(""),e$(""),e1(""),e3(""),e_([0,15e6]),eF([0,15e3]),e5()},children:"Reset"})]})]})})})]})]}),(0,s.jsx)(n.ZP,{item:!0,lg:3,md:3,xs:12,children:(0,s.jsxs)(r.Z,{style:{background:"#F3F4F4",padding:"20px"},children:[B.length>0&&(0,s.jsxs)(b.Z,{sx:{maxWidth:465},children:[(0,s.jsx)(v.Z,{component:"img",image:B[0].imageUrls&&B[0].imageUrls[0],sx:{height:150},title:"Property Image"}),(0,s.jsx)(P.Z,{children:(0,s.jsx)(r.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,s.jsxs)(r.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,s.jsxs)(o.Z,{fontWeight:"600",style:{fontSize:"1rem"},children:["₹",J(B[0].monthlyRent)]}),(0,s.jsxs)(o.Z,{style:{fontSize:"0.9rem"},children:["Located at ",B[0].searchCity]})]})})})]}),B.slice(1).map((e,t)=>(0,s.jsx)(r.Z,{style:{marginTop:"10px"},children:(0,s.jsxs)(b.Z,{sx:{maxWidth:465},style:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(v.Z,{component:"img",image:e.imageUrls&&e.imageUrls[0],sx:{height:110,width:"50%"},title:"Property Image"}),(0,s.jsx)(P.Z,{children:(0,s.jsx)(r.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,s.jsxs)(r.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,s.jsxs)(o.Z,{variant:"h6",fontWeight:"700",style:{fontSize:"0.9rem"},children:["₹",J(e.monthlyRent)]}),(0,s.jsxs)(o.Z,{style:{fontSize:"0.7rem"},children:["Located at ",e.searchCity]})]})})})]})},t))]})})]})}),(0,s.jsx)(W.default,{})]})}},80843:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return u}});var s=l(3827),r=l(54272),n=l(82508),i=l(29835),a=l(90144),o=l(73995),c=l(43206),d=l(8792),h=l(10752),x=l(2144),p=l(8203),g=l(79789),m=l(20703);function u(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.Z,{className:"foot_wrapper",style:{paddingLeft:"100px",paddingRight:"100px"},children:[(0,s.jsxs)(n.ZP,{container:!0,spacing:2,style:{paddingBottom:"50px"},children:[(0,s.jsxs)(n.ZP,{item:!0,lg:4,md:4,xs:12,children:[(0,s.jsx)(r.Z,{display:"flex",alignItems:"center",children:(0,s.jsx)(m.default,{src:g.Z,style:{width:"180px",padding:"8px 0px"}})}),(0,s.jsx)(r.Z,{children:(0,s.jsxs)(i.Z,{fontSize:"15px",children:["46, Yogakshem Layout, Sneh Nagar, Near Chhatrapati Chowk, Nagpur -440015",(0,s.jsx)("br",{}),"Email: info@freelifesystem.com",(0,s.jsx)("br",{}),"Call us: +91 9325993543"]})})]}),(0,s.jsx)(n.ZP,{item:!0,lg:2,md:2,xs:4,children:(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(i.Z,{style:{fontWeight:600,color:"#6D6C6C"},variant:"h6",children:"Services"}),(0,s.jsx)(a.Z,{children:(0,s.jsxs)(o.ZP,{style:{display:"flex",flexDirection:"column",alignItems:"left",alignItems:"baseline"},className:"foot_items",children:[(0,s.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"Buy Property"}),(0,s.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"Sell Property"}),(0,s.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"Rent Property"})]})})]})}),(0,s.jsx)(n.ZP,{item:!0,lg:2,md:2,xs:4,children:(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(i.Z,{style:{fontWeight:600,color:"#6D6C6C"},variant:"h6",children:"Company"}),(0,s.jsx)(a.Z,{children:(0,s.jsxs)(o.ZP,{style:{display:"flex",flexDirection:"column",alignItems:"left",alignItems:"left",alignItems:"baseline"},className:"foot_items",children:[(0,s.jsx)(d.default,{href:"https://freelifesystem.com/#about",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"About Us"}),(0,s.jsx)(d.default,{href:"https://freelifesystem.com/#contactus",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"Contact Us"}),(0,s.jsx)(d.default,{href:"https://freelifesystem.com/#team",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"Our Team"})]})})]})}),(0,s.jsx)(n.ZP,{item:!0,lg:2,md:2,xs:4,children:(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(i.Z,{style:{fontWeight:600,color:"#6D6C6C"},variant:"h6",children:"Support"}),(0,s.jsx)(a.Z,{children:(0,s.jsxs)(o.ZP,{style:{display:"flex",flexDirection:"column",alignItems:"left",alignItems:"left",alignItems:"baseline"},className:"foot_items",children:[(0,s.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"FAQ’S"}),(0,s.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"Support Center"}),(0,s.jsx)(d.default,{href:"#",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:"Help Center"})]})})]})}),(0,s.jsx)(n.ZP,{item:!0,lg:2,md:2,children:(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(d.default,{href:"https://www.facebook.com/freelifehousing",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:(0,s.jsx)(c.Z,{children:(0,s.jsx)(p.Z,{style:{width:"40px",height:"40px"}})})}),(0,s.jsx)(d.default,{href:"https://www.instagram.com/freelifehousing/",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:(0,s.jsx)(c.Z,{children:(0,s.jsx)(h.Z,{style:{width:"40px",height:"40px"}})})}),(0,s.jsx)(d.default,{href:"https://www.youtube.com/@FreeLifeHousing",style:{padding:"5px 0",textDecoration:"none",color:"#3D3D3D"},children:(0,s.jsx)(c.Z,{children:(0,s.jsx)(x.Z,{style:{width:"40px",height:"40px"}})})})]})})]}),(0,s.jsx)("hr",{}),(0,s.jsx)("small",{style:{color:"rgb(141 136 136)"},children:"Copyright \xae 2023 FreeLife System Pvt. Ltd All rights Reserved"})]})})}},73219:function(e,t,l){"use strict";l(3827),l(64090),l(8792)}},function(e){e.O(0,[990,934,792,703,537,572,601,901,554,506,971,69,744],function(){return e(e.s=81803)}),_N_E=e.O()}]);