(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{62294:function(e,t,i){Promise.resolve().then(i.bind(i,70289)),Promise.resolve().then(i.bind(i,21985)),Promise.resolve().then(i.bind(i,80843)),Promise.resolve().then(i.bind(i,49239)),Promise.resolve().then(i.bind(i,31273))},90588:function(e,t,i){"use strict";var s=i(60891);t.Z=void 0;var n=s(i(19438)),a=i(3827);t.Z=(0,n.default)((0,a.jsx)("path",{d:"M12 7V3H2v18h20V7zm-2 12H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z"}),"CorporateFare")},9608:function(e,t,i){"use strict";var s=i(60891);t.Z=void 0;var n=s(i(19438)),a=i(3827);t.Z=(0,n.default)((0,a.jsx)("path",{d:"M12 3 4 9v12h16V9zm-2.25 9.5c.69 0 1.25.56 1.25 1.25S10.44 15 9.75 15s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M17 18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H15c1.1 0 2 .9 2 2z"}),"NightShelter")},55934:function(e,t,i){"use strict";var s=i(14749),n=i(70444),a=i(64090),r=i(70334),l=i(43758),o=i(15726),c=i(40775),d=i(99416),h=i(3827);let p=["actions","children","defaultValue","name","onChange","value"],x=a.forwardRef(function(e,t){let{actions:i,children:x,defaultValue:m,name:g,onChange:u,value:y}=e,f=(0,n.Z)(e,p),j=a.useRef(null),[Z,v]=(0,o.Z)({controlled:y,default:m,name:"RadioGroup"});a.useImperativeHandle(i,()=>({focus:()=>{let e=j.current.querySelector("input:not(:disabled):checked");e||(e=j.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);let b=(0,l.Z)(t,j),w=(0,d.Z)(g),S=a.useMemo(()=>({name:w,onChange(e){v(e.target.value),u&&u(e,e.target.value)},value:Z}),[w,u,v,Z]);return(0,h.jsx)(c.Z.Provider,{value:S,children:(0,h.jsx)(r.Z,(0,s.Z)({role:"radiogroup",ref:b},f,{children:x}))})});t.Z=x},40775:function(e,t,i){"use strict";let s=i(64090).createContext(void 0);t.Z=s},68148:function(e,t,i){"use strict";i.d(t,{Z:function(){return L}});var s=i(70444),n=i(14749),a=i(64090),r=i(75504),l=i(44174),o=i(82495),c=i(80864),d=i(93043),h=i(34198),p=i(3827),x=(0,h.Z)((0,p.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),m=(0,h.Z)((0,p.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),g=i(58836);let u=(0,g.ZP)("span",{shouldForwardProp:g.FO})({position:"relative",display:"flex"}),y=(0,g.ZP)(x)({transform:"scale(1)"}),f=(0,g.ZP)(m)(e=>{let{theme:t,ownerState:i}=e;return(0,n.Z)({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},i.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})})});var j=function(e){let{checked:t=!1,classes:i={},fontSize:s}=e,a=(0,n.Z)({},e,{checked:t});return(0,p.jsxs)(u,{className:i.root,ownerState:a,children:[(0,p.jsx)(y,{fontSize:s,className:i.background,ownerState:a}),(0,p.jsx)(f,{fontSize:s,className:i.dot,ownerState:a})]})},Z=i(95135),v=i(3769),b=i(40775),w=i(86761),S=i(70533);function C(e){return(0,S.ZP)("MuiRadio",e)}let P=(0,w.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),R=["checked","checkedIcon","color","icon","name","onChange","size","className"],N=e=>{let{classes:t,color:i,size:s}=e,a={root:["root","color".concat((0,Z.Z)(i)),"medium"!==s&&"size".concat((0,Z.Z)(s))]};return(0,n.Z)({},t,(0,l.Z)(a,C,t))},k=(0,g.ZP)(c.Z,{shouldForwardProp:e=>(0,g.FO)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,"medium"!==i.size&&t["size".concat((0,Z.Z)(i.size))],t["color".concat((0,Z.Z)(i.color))]]}})(e=>{let{theme:t,ownerState:i}=e;return(0,n.Z)({color:(t.vars||t).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===i.color?t.vars.palette.action.activeChannel:t.vars.palette[i.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,o.Fq)("default"===i.color?t.palette.action.active:t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&{["&.".concat(P.checked)]:{color:(t.vars||t).palette[i.color].main}},{["&.".concat(P.disabled)]:{color:(t.vars||t).palette.action.disabled}})}),I=(0,p.jsx)(j,{checked:!0}),T=(0,p.jsx)(j,{});var L=a.forwardRef(function(e,t){var i,l,o,c;let h=(0,d.Z)({props:e,name:"MuiRadio"}),{checked:x,checkedIcon:m=I,color:g="primary",icon:u=T,name:y,onChange:f,size:j="medium",className:Z}=h,w=(0,s.Z)(h,R),S=(0,n.Z)({},h,{color:g,size:j}),C=N(S),P=a.useContext(b.Z),L=x,z=(0,v.Z)(f,P&&P.onChange),_=y;return P&&(void 0===L&&(o=P.value,L="object"==typeof(c=h.value)&&null!==c?o===c:String(o)===String(c)),void 0===_&&(_=P.name)),(0,p.jsx)(k,(0,n.Z)({type:"radio",icon:a.cloneElement(u,{fontSize:null!=(i=T.props.fontSize)?i:j}),checkedIcon:a.cloneElement(m,{fontSize:null!=(l=I.props.fontSize)?l:j}),ownerState:S,classes:C,name:_,checked:L,onChange:z,ref:t,className:(0,r.Z)(C.root,Z)},w))})},70289:function(e,t,i){"use strict";i.r(t),i.d(t,{Box:function(){return s.Z}});var s=i(54272)},31273:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return es}});var s=i(3827),n=i(64090),a=i(54272),r=i(82508),l=i(29835),o=i(6285),c=i(98322),d=i(55602),h=i(41848),p=i(55934),x=i(87640),m=i(68148),g=i(85195),u=i(3340),y=i(95996),f=i(10470),j=i(138);i(55768),i(8694);var Z=i(8792),v=i(10907),b=i(93299),w=i(57572),S={src:"/_next/static/media/otherservices.721aef74.png",height:920,width:773,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA3UlEQVR42g3JsUrDQACA4f8ud7kk2kIV0lRiioMVERQUnV30bXwDJ1/KwdHZTUQUo0MhUk1NqKBJmpx+6ycuLq8qs7Hj2nyKOwgZHZ/jORKjnFr+zt5oyk/y6Qvm6YYmS+kFHiuuRIl4H7uYEe2eoLWgrit6rkJakF6eouI95uUXH1VLV2ToriIwGrk+OaLNM0x6S1i+on9Kuu85/n8qfzjG7yR1OLFr0aYwWwe2P4yF7Jao4u5ajg9PaUdnQouW/qovtAPCIpVw1OLx4d4U1dJuRwOa92eSJBHSBNUfFyBOHXCXTYIAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8},C=i(20703),P=i(70444),R=i(14749),N=i(44174),k=i(75504),I=i(58836),T=i(93043),L=i(86761),z=i(70533);function _(e){return(0,z.ZP)("MuiImageList",e)}(0,L.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);let A=n.createContext({}),F=["children","className","cols","component","rowHeight","gap","style","variant"],D=e=>{let{classes:t,variant:i}=e;return(0,N.Z)({root:["root",i]},_,t)},M=(0,I.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[i.variant]]}})(e=>{let{ownerState:t}=e;return(0,R.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===t.variant&&{display:"block"})}),W=n.forwardRef(function(e,t){let i=(0,T.Z)({props:e,name:"MuiImageList"}),{children:a,className:r,cols:l=2,component:o="ul",rowHeight:c="auto",gap:d=4,style:h,variant:p="standard"}=i,x=(0,P.Z)(i,F),m=n.useMemo(()=>({rowHeight:c,gap:d,variant:p}),[c,d,p]);n.useEffect(()=>{},[]);let g="masonry"===p?(0,R.Z)({columnCount:l,columnGap:d},h):(0,R.Z)({gridTemplateColumns:"repeat(".concat(l,", 1fr)"),gap:d},h),u=(0,R.Z)({},i,{component:o,gap:d,rowHeight:c,variant:p}),y=D(u);return(0,s.jsx)(M,(0,R.Z)({as:o,className:(0,k.Z)(y.root,y[p],r),ref:t,style:g,ownerState:u},x,{children:(0,s.jsx)(A.Provider,{value:m,children:a})}))});i(97051);var H=i(97056);function O(e){return(0,z.ZP)("MuiImageListItem",e)}let V=(0,L.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),B=["children","className","cols","component","rows","style"],G=e=>{let{classes:t,variant:i}=e;return(0,N.Z)({root:["root",i],img:["img"]},O,t)},E=(0,I.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[{["& .".concat(V.img)]:t.img},t.root,t[i.variant]]}})(e=>{let{ownerState:t}=e;return(0,R.Z)({display:"block",position:"relative"},"standard"===t.variant&&{display:"flex",flexDirection:"column"},"woven"===t.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{["& .".concat(V.img)]:(0,R.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===t.variant&&{height:"auto",flexGrow:1})})}),U=n.forwardRef(function(e,t){let i=(0,T.Z)({props:e,name:"MuiImageListItem"}),{children:a,className:r,cols:l=1,component:o="li",rows:c=1,style:d}=i,h=(0,P.Z)(i,B),{rowHeight:p="auto",gap:x,variant:m}=n.useContext(A),g="auto";"woven"===m?g=void 0:"auto"!==p&&(g=p*c+x*(c-1));let u=(0,R.Z)({},i,{cols:l,component:o,gap:x,rowHeight:p,rows:c,variant:m}),y=G(u);return(0,s.jsx)(E,(0,R.Z)({as:o,className:(0,k.Z)(y.root,y[m],r),ref:t,style:(0,R.Z)({height:g,gridColumnEnd:"masonry"!==m?"span ".concat(l):void 0,gridRowEnd:"masonry"!==m?"span ".concat(c):void 0,marginBottom:"masonry"===m?x:void 0,breakInside:"masonry"===m?"avoid":void 0},d),ownerState:u},h,{children:n.Children.map(a,e=>n.isValidElement(e)?"img"===e.type||(0,H.Z)(e,["Image"])?n.cloneElement(e,{className:(0,k.Z)(y.img,e.props.className)}):e:null)}))});function q(){return(0,s.jsx)(W,{sx:{width:"100%",height:410},variant:"quilted",cols:12,rowHeight:200,gap:8,children:J.map(e=>(0,s.jsxs)(U,{cols:e.cols||1,rows:e.rows||1,children:[(0,s.jsx)("div",{className:"overlay",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.5)"}}),(0,s.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"white"},children:(0,s.jsx)(l.Z,{variant:"h6",style:{fontSize:"13px"},children:e.title})}),(0,s.jsx)("img",{...function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return{src:"".concat(e,"?w=").concat(t*s,"&h=").concat(t*i,"&fit=crop&auto=format"),srcSet:"".concat(e,"?w=").concat(t*s,"&h=").concat(t*i,"&fit=crop&auto=format&dpr=2 2x")}}(e.img,150,e.rows,e.cols),alt:e.title,loading:"lazy"})]},e.img))})}let J=[{img:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Independent hosue",rows:1,cols:3},{img:"https://framerusercontent.com/images/7br4uRjIjL8CyFscubgDfE3cg.jpeg",title:"Plots",rows:1,cols:3},{img:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Flats",rows:2,cols:6},{img:"https://framerusercontent.com/images/7br4uRjIjL8CyFscubgDfE3cg.jpeg",title:"Agricultural Land",rows:1,cols:6}];var K=i(92026),Y=i(10242),Q=i(47907),X=i(49239),$=i(80843),ee=i(90588),et=i(9608),ei=i(95585),es=()=>{let e=(0,Q.useRouter)(),[t,i]=(0,n.useState)("Nagpur"),[P,R]=(0,n.useState)("Residential"),N=e=>{R(e)},[k,I]=(0,n.useState)(),[T,L]=(0,n.useState)(""),[z,_]=(0,n.useState)([]),A=["Mahal","Sitabuldi","Ganesh Peth Colony","Dhantoli","Trimurti Nagar","Itwari","Mominpura","Dharampeth","Ramdaspeth","Shraddhanand Peth","Sadar","Civil Lines","Chinchbhuvan","Gandhibagh","Nandanvan","Kalamna","Wardhaman Nagar","Seminary Hills","Police Line Takli","Mankapur","Pachpaoli","Vayusena Nagar","Ravi Nagar","Byramji Town","Chaoni","Mangalwari","Gaddi Godam","Gitti Khadan","Pratap Nagar","Ajni","Pardi","Indora","Maskasath","Jaitala","Jaripatka","Kapil Nagar","Ashok Nagar","Gokulpeth","Giripeth","Bajaj Nagar","Rajendra Nagar","Lakadganj","Gandhinagar","Manish Nagar","Bezanbagh","Bhandewadi","Rahate Colony","New Pawan Shakti Nagar","Jafar Nagar","Friends Colony","Baba Farid Nagar","Suyog Nagar","Sahyog Nagar"],F=e=>{L(e),_([])},D={dots:!0,arrows:!1,infinite:!0,autoplay:!0,speed:500,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1314,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1005,settings:{dots:!1,arrows:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:683,settings:{dots:!1,arrows:!0,slidesToShow:1,slidesToScroll:1}}]},[M,W]=(0,n.useState)([]),[H,O]=(0,n.useState)([]),[V,B]=(0,n.useState)([]);function G(e){let t=["th","st","nd","rd"],i=e%100;return e+(t[(i-20)%10]||t[i]||"th")}console.log("response propertyy====",M),(0,n.useEffect)(()=>{(async()=>{console.log("function trigger");try{let e="".concat(Y.Z.baseurl,"api/prophome"),t=await (0,K.$)(e);W(t.RecentProperty),O(t.SellProperty),B(t.SpotlightProperty),console.log("response",t)}catch(e){console.error("Error:",e)}})()},[]);let E=t=>{e.push("/singleProperty?property_id=".concat(t))},U=e=>e?"object"==typeof e?"".concat(e.minpgRent," - ").concat(e.maxpgRent):e>=1e7?"".concat((e/1e7).toFixed(1),"cr"):e>=1e5?"".concat((e/1e5).toFixed(1),"L"):e>=1e3?"".concat((e/1e3).toFixed(0),"k"):e.toString():"";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(X.default,{}),(0,s.jsxs)(a.Z,{className:"content_wrapper",children:[(0,s.jsxs)(r.ZP,{container:!0,spacing:3,className:"backgroundImageContainer",children:[(0,s.jsxs)(r.ZP,{item:!0,lg:8,md:8,xs:12,children:[(0,s.jsx)(l.Z,{variant:"h3",className:"home_heading",mb:2,children:"Easy Way To Find Your Dream House"}),(0,s.jsx)(l.Z,{fontSize:"14px",fontWeight:"400",mb:2,children:"Search and find your dream property at an affordable price, with the best quality. Only available on Real Estate."}),(0,s.jsx)(a.Z,{display:"flex",mb:2,style:{flexWrap:"wrap"},children:(0,s.jsx)("div",{children:[{id:1,value:"Residential"},{id:2,value:"Commercial"},{id:3,value:"PG/Co-Living"},{id:4,value:"Plot"}].map(e=>(0,s.jsx)(o.Z,{className:P===e.value?"btnActive":"btnNormal",onClick:()=>N(e.value),children:e.value},e.id))})}),(0,s.jsx)(a.Z,{className:"outerwrap",children:(0,s.jsxs)(r.ZP,{container:!0,style:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(r.ZP,{item:!0,lg:2,md:2,xs:4,children:(0,s.jsxs)(c.Z,{value:t,onChange:e=>{i(e.target.value)},displayEmpty:!0,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"1px solid gray",borderRadius:"4px"}},children:[(0,s.jsx)(d.Z,{value:"",disabled:!0,children:"City"}),["Nagpur"].map(e=>(0,s.jsx)(d.Z,{value:e,children:e},e))]})}),(0,s.jsx)(r.ZP,{item:!0,lg:5,md:5,xs:8,style:{position:"relative",top:"-24px"},children:(0,s.jsxs)("div",{className:"search_wrap",children:[(0,s.jsx)("input",{placeholder:"Search for locality, landmark..",style:{fontSize:"15px",width:"100%",border:"0",outline:"0"},value:T,onChange:e=>{let t=e.target.value;L(t),_(A.filter(e=>e.toLowerCase().startsWith(t.toLowerCase())))},autoFocus:!0}),(0,s.jsx)("div",{style:{maxHeight:"250px",overflowY:"auto",paddingTop:"10px"},children:z.map((e,t)=>(0,s.jsx)("div",{className:"suggession_top",children:(0,s.jsx)("div",{className:"suggestion",onClick:()=>F(e),children:e},t)}))})]})}),(0,s.jsx)(r.ZP,{item:!0,lg:3,md:3,xs:6,display:"flex",justifyContent:"end",children:"PG/Co-Living"!==P&&(0,s.jsx)(h.Z,{children:(0,s.jsxs)(p.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"propertyStatus",value:k,onChange:e=>{I(e.target.value)},children:[(0,s.jsx)(x.Z,{value:"Buy",control:(0,s.jsx)(m.Z,{}),label:"Buy"}),"Plot"!==P&&(0,s.jsx)(x.Z,{value:"Rent",control:(0,s.jsx)(m.Z,{}),label:"Rent"})]})})}),(0,s.jsx)(r.ZP,{item:!0,lg:2,md:2,xs:6,children:(0,s.jsx)(o.Z,{className:"freehousing_button",style:{color:"#fff",width:"100%",textTransform:"none"},onClick:()=>{let i=P,s=k;"PG/Co-Living"===P&&(i="Residential",s="PG/Co-living");let n=new URLSearchParams({city:t,propertyType:i,search:T,propertyStatus:s}).toString();e.push("/filterpage?".concat(n))},children:"Search"})})]})})]}),(0,s.jsx)(r.ZP,{item:!0,lg:4,md:4,xs:12,style:{padding:10},children:(0,s.jsxs)(a.Z,{style:{background:"#F3F4F4",padding:"20px",width:"100%"},children:[M.slice(0,1).map((e,t)=>(0,s.jsx)(a.Z,{style:{marginTop:t>0?"10px":0},children:(0,s.jsxs)(g.Z,{children:[(0,s.jsx)(u.Z,{component:"img",image:e.imageUrls[0],sx:{height:150,objectFit:"cover"},title:e.address}),(0,s.jsx)(y.Z,{children:(0,s.jsxs)(a.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,s.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,s.jsxs)(l.Z,{variant:"h6",fontWeight:"600",style:{fontSize:"20px"},children:["₹",U(e.monthlyRent)]}),(0,s.jsxs)(l.Z,{style:{fontSize:"15px"},children:["Located at ",e.searchCity]})]}),(0,s.jsx)(o.Z,{variant:"contained",className:"freehousing_button",style:{textTransform:"none"},children:"Contact"})]})})]})},t)),M.slice(1,3).map((e,t)=>(0,s.jsx)(a.Z,{style:{marginTop:"10px"},children:(0,s.jsx)(g.Z,{children:(0,s.jsxs)(r.ZP,{style:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(r.ZP,{lg:7,md:7,xs:7,children:(0,s.jsx)(u.Z,{component:"img",image:e.imageUrls[0],sx:{height:150,objectFit:"cover"},title:e.address})}),(0,s.jsx)(r.ZP,{lg:5,md:5,xs:5,children:(0,s.jsx)(a.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,s.jsxs)(a.Z,{style:{flexDirection:"column",marginLeft:30},children:[(0,s.jsxs)(l.Z,{variant:"h6",fontWeight:"600",style:{fontSize:"19px"},children:["₹",U(e.monthlyRent)]}),(0,s.jsxs)(l.Z,{style:{fontSize:"14px"},children:["Located at ",e.searchCity]})]})})})]})})}))]})})]}),(0,s.jsxs)(r.ZP,{container:!0,marginTop:4,children:[(0,s.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,s.jsx)(l.Z,{variant:"h5",fontWeight:700,children:"In Spotlight"}),(0,s.jsx)(l.Z,{color:"#535353",children:"Explore our recent property here"})]}),(0,s.jsx)(r.ZP,{item:!0,lg:12,xs:12,md:12,className:"CarDetails-page",pt:1,children:(0,s.jsx)(j.Z,{dots:!0,arrows:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}],children:V.map((e,t)=>(0,s.jsx)(a.Z,{children:(0,s.jsxs)(a.Z,{style:{position:"relative"},children:[(0,s.jsxs)("div",{className:"image-container",children:[(0,s.jsx)("img",{src:e.imageUrls[0],alt:"Slider Image ".concat(t+1),style:{width:"100%",objectFit:"cover",height:"100%"}}),(0,s.jsx)("div",{className:"image-overlay",style:{position:"absolute",bottom:0,left:0,right:0,height:"60%",backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))"}})]}),(0,s.jsx)(a.Z,{className:"hpage_slider_bottom",children:(0,s.jsxs)(a.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,s.jsxs)(a.Z,{className:"hpage_slider_bottom_left",children:[(0,s.jsx)(a.Z,{children:(0,s.jsx)("img",{src:e.slidericon,style:{height:"40px",width:"40px"}})}),(0,s.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column",marginLeft:"15px"},children:[(0,s.jsx)(l.Z,{fontWeight:"600",className:"hpage_slider_bottom_left_heading",children:e.propertyType}),(0,s.jsx)(l.Z,{className:"hpage_slider_bottom_left_heading",children:e.searchCity})]})]}),(0,s.jsxs)(a.Z,{className:"hpage_slider_bottom_right",children:[(0,s.jsx)(l.Z,{mr:2,fontWeight:600,children:U(e.monthlyRent)}),(0,s.jsx)(o.Z,{variant:"contained",children:"View"})]})]})})]})},t))})})]}),(0,s.jsxs)(a.Z,{marginTop:4,style:{width:"100%"},children:[(0,s.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column",width:"100%"},children:[(0,s.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,s.jsx)(l.Z,{variant:"h5",fontWeight:700,children:"Best Properties to Buy"}),(0,s.jsx)(l.Z,{color:"#535353",children:"Best properties to buy in the cities"})]}),(0,s.jsxs)(a.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px"},children:[(0,s.jsx)(a.Z,{children:(0,s.jsx)(o.Z,{style:{background:"#0066ab1a",color:"#0066AB",textTransform:"none"},children:"Nagpur"})}),(0,s.jsx)(a.Z,{children:(0,s.jsxs)(Z.default,{href:"#",style:{textDecoration:"none",color:"#3D3D3D",display:"flex",alignItems:"center"},children:["View all",(0,s.jsx)(v.Z,{style:{marginLeft:"7px",height:"15px",width:"15px"}})]})})]})]}),(0,s.jsx)(r.ZP,{item:!0,lg:12,spacing:2,className:"hpg_property",pt:1,children:H?(0,s.jsx)(j.Z,{...D,children:H.map((e,t)=>{var i,n;let{washroom:r,monthlyRent:o,imageUrls:c,bhk:d,searchCity:h,propertyType:p,lookingTo:x,propertyDetails:m,commPropDetails:u,roomDetails:y,pgPropDetails:f,address:j,property_id:Z}=e,v=(null==r?void 0:r.indians)||0,S=(null==r?void 0:r.western)||0,C=null==u?void 0:null===(i=u.yourFloor)||void 0===i?void 0:i.label,P=null==f?void 0:null===(n=f.pgdetails)||void 0===n?void 0:n.pgIsFor,R=u&&(null==u?void 0:u.monthlyRent)?U(null==u?void 0:u.monthlyRent):u&&u.price?U(null==u?void 0:u.price):u&&(null==u?void 0:u.currentRentPerMonth)?U(null==u?void 0:u.currentRentPerMonth):null,N=c&&c.length>0?c[0]:"",k="";if(y&&"object"==typeof y){let e=[];for(let t in y)y.hasOwnProperty(t)&&y[t].pgRent&&e.push(parseInt(y[t].pgRent,10));e.length>0?k=e.length>1?"".concat(Math.min(...e)/1e3,"k - ").concat(Math.max(...e)/1e3,"k"):"".concat(e[0]/1e3,"k"):console.log("No valid pgRent values found in propertyDetails.roomDetails.")}return(0,s.jsx)(g.Z,{className:"outerbox",style:{marginRight:"10px"},onClick:()=>E(Z),children:(0,s.jsxs)("div",{children:[(0,s.jsx)(a.Z,{component:"img",sx:{height:170,display:"block",maxWidth:400,overflow:"hidden",width:"100%",objectFit:"cover"},src:N,alt:j}),(0,s.jsxs)(a.Z,{style:{padding:"10px"},children:["Residential"==p&&("Rent"==x||"Sell"==x)?(0,s.jsxs)(l.Z,{variant:"h6",fontWeight:600,children:["₹",U(o)]}):"","Commercial"==p?(0,s.jsxs)(l.Z,{variant:"h6",fontWeight:600,children:["₹",R]}):"","Residential"==p&&"PG/Co-living"==x?(0,s.jsxs)(l.Z,{variant:"h6",fontWeight:600,children:["₹",k]}):"",(0,s.jsxs)(l.Z,{variant:"p",mt:1,children:["Located at ",h]}),"Residential"==p&&("Rent"==x||"Sell"==x)?(0,s.jsxs)(a.Z,{style:{display:"flex",marginTop:"10px",alignItems:"center"},children:[(0,s.jsx)(a.Z,{style:{display:"flex"},children:(0,s.jsxs)(l.Z,{variant:"p",style:{display:"flex"},children:[(0,s.jsx)(b.Z,{style:{color:"gray"}}),(0,s.jsx)("span",{style:{marginLeft:"5px"},children:d})]})}),(0,s.jsxs)(a.Z,{style:{display:"flex",marginLeft:"20px"},children:[(0,s.jsx)(w.Z,{style:{color:"gray"}})," ",(0,s.jsxs)("span",{style:{marginLeft:"5px"},children:[v+S," Washrooms"]})]})]}):"","Commercial"==p&&(0,s.jsx)(a.Z,{style:{display:"flex",marginTop:"10px",alignItems:"center"},children:(0,s.jsx)(a.Z,{style:{display:"flex"},children:(0,s.jsxs)(l.Z,{variant:"p",style:{display:"flex"},children:[(0,s.jsx)(ee.Z,{style:{color:"gray"}}),(0,s.jsxs)("span",{style:{marginLeft:"5px"},children:[G(parseInt(C))," Floor"]})]})})}),"Residential"==p&&"PG/Co-living"==x?(0,s.jsx)(a.Z,{style:{display:"flex",marginTop:"10px",alignItems:"center"},children:(0,s.jsx)(a.Z,{style:{display:"flex"},children:(0,s.jsxs)(l.Z,{variant:"p",style:{display:"flex"},children:[(0,s.jsx)(et.Z,{style:{color:"gray"}}),(0,s.jsxs)("span",{style:{marginLeft:"5px"},children:["PG for ",P]})]})})}):""]})]})},t)})}):(0,s.jsx)(l.Z,{variant:"p",children:"No properties found."})})]}),(0,s.jsxs)(a.Z,{marginTop:4,style:{width:"100%"},children:[(0,s.jsx)(a.Z,{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:(0,s.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,s.jsx)(l.Z,{variant:"h5",fontWeight:700,children:"Recently Added Properties"}),(0,s.jsx)(l.Z,{color:"#535353",children:"Best properties to buy in the cities"})]})}),(0,s.jsx)(r.ZP,{item:!0,lg:12,spacing:2,className:"hpg_property",pt:1,children:(0,s.jsx)(j.Z,{...D,children:M&&M.map((e,t)=>{let{monthlyRent:i,washroom:n,yourFloor:r,pgIsFor:o,searchCity:c,_id:d,imageUrls:h,bhk:p,maxpgRent:x,minpgRent:m}=e,u=h&&h.length>0?h[0]:"";return(0,s.jsx)(g.Z,{className:"outerbox",style:{marginRight:"10px"},onClick:()=>E(d),children:(0,s.jsxs)("div",{children:[(0,s.jsx)(a.Z,{component:"img",sx:{height:170,display:"block",maxWidth:400,overflow:"hidden",width:"100%",objectFit:"cover"},src:u}),(0,s.jsxs)(a.Z,{style:{padding:"10px"},children:[(0,s.jsxs)(l.Z,{variant:"h6",fontWeight:600,children:["₹",U(i)]}),(0,s.jsxs)(l.Z,{variant:"p",mt:1,children:["Located at ",c]}),(0,s.jsx)(a.Z,{display:"flex",alignItems:"center",children:(0,s.jsx)(a.Z,{mr:2,children:(0,s.jsx)(l.Z,{variant:"body2",children:(0,s.jsxs)(a.Z,{display:"flex",alignItems:"center",children:[p&&(0,s.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,s.jsx)(b.Z,{style:{color:"gray",marginRight:"5px"}}),(0,s.jsx)(l.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:p})]}),n&&(0,s.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,s.jsx)(w.Z,{style:{color:"gray",marginRight:"5px"}}),(0,s.jsxs)(l.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:[n," Washrooms"]})]}),r&&(0,s.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,s.jsx)(ee.Z,{style:{color:"gray",marginRight:"5px"}}),(0,s.jsxs)(l.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:[G(parseInt(r))," ","Floor"]})]}),o&&(0,s.jsxs)(a.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,s.jsx)(et.Z,{style:{color:"gray",marginRight:"5px"}}),(0,s.jsxs)(l.Z,{variant:"body2",children:["PG for ",o]})]})]})})})})]})]})},t)})})})]}),(0,s.jsxs)(r.ZP,{container:!0,marginTop:"70px",children:[(0,s.jsx)(r.ZP,{item:!0,lg:5,md:5,xs:12,children:(0,s.jsx)(C.default,{src:S,className:"hpg_other_services",style:{width:"100%",height:"100%"}})}),(0,s.jsxs)(r.ZP,{item:!0,lg:7,md:7,xs:12,className:"hpg_OS_heading_wrap",children:[(0,s.jsxs)(l.Z,{className:"hpg_other_services_heading",variant:"h3",fontWeight:"700",children:["Not Only ",(0,s.jsx)("br",{}),"Buying, Selling or Renting,",(0,s.jsx)("br",{}),"We can help you with ",(0,s.jsx)("br",{})," our Other Services"]}),(0,s.jsx)(f.Z,{style:{padding:"30px",marginTop:"30px"},children:(0,s.jsxs)(r.ZP,{container:!0,lg:12,md:12,xs:12,style:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsxs)(r.ZP,{item:!0,lg:5,md:5,xs:12,children:[(0,s.jsx)(l.Z,{variant:"h6",fontWeight:700,children:"Rent Agreements"}),(0,s.jsx)(l.Z,{fontSize:"12px",mt:2,children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}),(0,s.jsx)(a.Z,{style:{marginTop:"12px",marginLeft:"10px"},children:(0,s.jsxs)(Z.default,{href:"#",style:{textDecoration:"none",color:"#3D3D3D",display:"flex",alignItems:"center"},children:["View",(0,s.jsx)(v.Z,{style:{marginLeft:"7px",height:"15px",width:"15px"}})]})})]}),(0,s.jsxs)(r.ZP,{item:!0,lg:5,md:5,xs:12,children:[(0,s.jsx)(l.Z,{variant:"h6",fontWeight:700,children:"Home Loans"}),(0,s.jsx)(l.Z,{fontSize:"12px",mt:2,children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}),(0,s.jsx)(a.Z,{style:{marginTop:"12px",marginLeft:"10px"},children:(0,s.jsxs)(Z.default,{href:"#",style:{textDecoration:"none",color:"#3D3D3D",display:"flex",alignItems:"center"},children:["View",(0,s.jsx)(v.Z,{style:{marginLeft:"7px",height:"15px",width:"15px"}})]})})]})]})})]})]}),(0,s.jsxs)(a.Z,{marginTop:4,style:{width:"100%"},children:[(0,s.jsx)(a.Z,{style:{display:"flex",flexDirection:"column",width:"100%"},children:(0,s.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,s.jsx)(l.Z,{variant:"h5",fontWeight:700,children:"Types of properties you can buy through us"}),(0,s.jsx)(l.Z,{color:"#535353",children:"Prominent developers in Nagpur"})]})}),(0,s.jsx)(r.ZP,{container:!0,marginTop:"30px",children:(0,s.jsx)(q,{})})]}),(0,s.jsx)(a.Z,{marginTop:4,style:{width:"100%"},children:(0,s.jsx)(ei.default,{})})]}),(0,s.jsx)($.default,{})]})}}},function(e){e.O(0,[934,792,703,537,572,335,454,710,506,985,585,971,69,744],function(){return e(e.s=62294)}),_N_E=e.O()}]);