(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{62294:function(e,t,s){Promise.resolve().then(s.bind(s,70289)),Promise.resolve().then(s.bind(s,21985)),Promise.resolve().then(s.bind(s,80843)),Promise.resolve().then(s.bind(s,49239)),Promise.resolve().then(s.bind(s,87446))},70289:function(e,t,s){"use strict";s.r(t),s.d(t,{Box:function(){return i.Z}});var i=s(54272)},95585:function(e,t,s){"use strict";s.r(t);var i=s(3827),l=s(64090);s(49239);var n=s(54272),r=s(29835),o=s(6285),a=s(82508),c=s(85195),d=s(3340),h=s(95996),x=s(28738);s(8792);var p=s(10907),g=s(10242),m=s(92026),y=s(47907);t.default=()=>{let e=(0,y.useRouter)(),[t,s]=(0,l.useState)([]),j=t=>{e.push("/viewSingleBlog?blogId=".concat(t))},u=async()=>{try{let e=localStorage.getItem("token"),t="".concat(g.Z.baseurl,"api/viewAllBlogNext"),i=await (0,m.$h)(t,{offset:0},e);if(i&&!1===i.error){let e=i.BlogList.sort((e,t)=>new Date(t.createdAt)-new Date(e.createdAt));s(e.slice(0,3))}else console.error("Error fetching blogs:",i&&i.message)}catch(e){console.error("Error:",e)}};return(0,l.useEffect)(()=>{u()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.Z,{style:{display:"flex",width:"100%",padding:"20px"},children:[(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(r.Z,{variant:"h5",style:{fontSize:"22px"},fontWeight:700,className:"heading6",children:"The Most Recent Local Real Estate News"}),(0,i.jsx)(r.Z,{color:"#535353",style:{marginTop:"10px"},className:"heading7",children:"Lorem Ipsum is simply dummy text"})]}),(0,i.jsx)(n.Z,{style:{marginLeft:"auto"},children:(0,i.jsxs)(o.Z,{onClick:()=>{e.push("/viewAllBlog")},component:"a",className:"viewAll",style:{textDecoration:"none",color:"#3D3D3D",display:"flex",alignItems:"center",border:"none",backgroundColor:"transparent",cursor:"pointer"},children:["View all",(0,i.jsx)(p.Z,{style:{marginLeft:"0px",height:"15px",width:"15px"}})]})})]}),(0,i.jsx)(a.ZP,{container:!0,spacing:3,style:{padding:"20px"},children:t.map((e,t)=>{var s,l;return(0,i.jsx)(a.ZP,{item:!0,xs:12,lg:4,md:4,sm:6,children:(0,i.jsxs)(c.Z,{style:{padding:"10px",border:"1px solid #202020",boxShadow:"none",height:"100%",display:"flex",flexDirection:"column"},children:[e.blogImg?(0,i.jsx)(d.Z,{sx:{height:170},image:e.blogImg,title:"Blog Image",style:{objectFit:"cover"}}):e.youtubeLink&&(0,i.jsx)("iframe",{title:"Blog Video",width:"100%",height:"170",src:e.youtubeLink,frameBorder:"0",allowFullScreen:!0,style:{borderRadius:"4px",marginBottom:"10px"}}),(0,i.jsxs)(h.Z,{style:{flexGrow:1,display:"flex"},children:[(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(r.Z,{gutterBottom:!0,variant:"h6",component:"div",style:{fontSize:"1rem",fontWeight:"600"},children:(s=e.title)?s.charAt(0).toUpperCase()+s.slice(1):""}),(0,i.jsx)(r.Z,{variant:"body2",color:"text.secondary",children:new Date(e.createdAt).toLocaleDateString()})]}),(0,i.jsx)(n.Z,{style:{marginLeft:"auto"},children:(0,i.jsx)(r.Z,{gutterBottom:!0,variant:"h6",component:"div",style:{fontSize:"1rem",fontWeight:"600"},children:(l=e.category)?l.charAt(0).toUpperCase()+l.slice(1):""})})]}),(0,i.jsx)(x.Z,{children:(0,i.jsx)(n.Z,{style:{marginTop:"auto",marginRight:"auto"},children:(0,i.jsxs)(o.Z,{onClick:()=>j(e._id),style:{textDecoration:"none",color:"#3D3D3D",display:"flex",alignItems:"center"},children:["View",(0,i.jsx)(p.Z,{style:{marginLeft:"7px"}})]})})})]})},t)})})]})}},87446:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return U}});var i=s(3827),l=s(64090),n=s(54272),r=s(82508),o=s(29835),a=s(6285),c=s(98322),d=s(55602),h=s(41848),x=s(55934),p=s(87640),g=s(68148),m=s(85195),y=s(3340),j=s(95996),u=s(10470),f=s(65593),Z=s(138);s(55768),s(8694);var v=s(8792),b=s(10907),w=s(93299),S=s(57572),R={src:"/_next/static/media/otherservices.721aef74.png",height:920,width:773,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA3UlEQVR42g3JsUrDQACA4f8ud7kk2kIV0lRiioMVERQUnV30bXwDJ1/KwdHZTUQUo0MhUk1NqKBJmpx+6ycuLq8qs7Hj2nyKOwgZHZ/jORKjnFr+zt5oyk/y6Qvm6YYmS+kFHiuuRIl4H7uYEe2eoLWgrit6rkJakF6eouI95uUXH1VLV2ToriIwGrk+OaLNM0x6S1i+on9Kuu85/n8qfzjG7yR1OLFr0aYwWwe2P4yF7Jao4u5ajg9PaUdnQouW/qovtAPCIpVw1OLx4d4U1dJuRwOa92eSJBHSBNUfFyBOHXCXTYIAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8},N=s(20703),P=s(56531),C=s(81121),I=s(77489),T=s(368);let k=[{img:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Independent house",rows:1,cols:3,mdCols:2,mdRows:1},{img:"https://framerusercontent.com/images/7br4uRjIjL8CyFscubgDfE3cg.jpeg",title:"Plots",rows:1,cols:3,mdCols:1,mdRows:1},{img:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Flats",rows:2,cols:6,mdCols:3,mdRows:1},{img:"https://framerusercontent.com/images/7br4uRjIjL8CyFscubgDfE3cg.jpeg",title:"Agricultural Land",rows:1,cols:6,mdCols:3,mdRows:1}];var L=()=>{let e=(0,T.Z)(),t=(0,I.Z)(e.breakpoints.down("xs")),s=(0,I.Z)(e.breakpoints.down("md"));return(0,i.jsxs)("div",{style:{height:"100%",overflowY:"hidden"},children:[" ",(0,i.jsx)(P.Z,{sx:{width:"100%",height:"100%",overflowY:"hidden"},variant:"quilted",cols:t?1:s?3:12,rowHeight:200,gap:8,children:k.map(e=>(0,i.jsxs)(C.Z,{className:"imageList",cols:t?1:s?e.mdCols:e.cols,rows:t?1:s?e.mdRows:e.rows,style:{marginTop:t?4:s?4:0,marginBottom:t?8:s?8:0},children:[(0,i.jsx)("div",{className:"overlay",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.5)"}}),(0,i.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"white"},children:(0,i.jsx)(o.Z,{variant:"h6",style:{fontSize:"13px"},children:e.title})}),(0,i.jsx)("img",{src:"".concat(e.img,"?w=").concat(200*e.cols,"&h=").concat(200*e.rows,"&fit=crop&auto=format"),srcSet:"".concat(e.img,"?w=").concat(200*e.cols,"&h=").concat(200*e.rows,"&fit=crop&auto=format&dpr=2 2x"),alt:e.title,loading:"lazy"})]},e.img))})]})},A=s(92026),D=s(10242),_=s(47907),W=s(49239),F=s(80843),B=s(90588),z=s(9608),E=s(95585),U=()=>{let e=(0,_.useRouter)(),[t,s]=(0,l.useState)("Nagpur"),[P,C]=(0,l.useState)("Residential"),I=e=>{C(e)},[T,k]=(0,l.useState)(),[U,O]=(0,l.useState)(""),[G,V]=(0,l.useState)([]),[H,Y]=(0,l.useState)([]),[M,K]=(0,l.useState)("");console.log("is localities---",H),(0,l.useEffect)(()=>{(async()=>{console.log("function trigger");try{let e="".concat(D.Z.baseurl,"api/viewLocalities"),t=await (0,A.KD)(e);Y(t[0].localities),console.log("loaclities response---",t)}catch(e){console.error("Error:",e)}})()},[]);let q=e=>{O(e),V([])},J={dots:!0,arrows:!1,infinite:!0,autoplay:!0,speed:500,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1314,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1005,settings:{dots:!1,arrows:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:683,settings:{dots:!1,arrows:!0,slidesToShow:1,slidesToScroll:1}}]},[Q,X]=(0,l.useState)([]),[$,ee]=(0,l.useState)([]),[et,es]=(0,l.useState)([]);function ei(e){let t=["th","st","nd","rd"],s=e%100;return e+(t[(s-20)%10]||t[s]||"th")}console.log("response propertyy====",Q),(0,l.useEffect)(()=>{(async()=>{console.log("function trigger");try{let e="".concat(D.Z.baseurl,"api/prophome"),t=await (0,A.$h)(e);X(t.RecentProperty),ee(t.SellProperty),es(t.SpotlightProperty),console.log("response",t)}catch(e){console.error("Error:",e)}})()},[]);let el=()=>T&&U?(K(""),!0):(K("Please fill all the fields"),!1),en=t=>{e.push("/singleProperty?property_id=".concat(t))},er=e=>e?"object"==typeof e?"".concat(e.minpgRent/1e3,"k - ").concat(e.maxpgRent/1e3,"k"):e>=1e7?"".concat((e/1e7).toFixed(1),"cr"):e>=1e5?"".concat((e/1e5).toFixed(1),"L"):e>=1e3?"".concat((e/1e3).toFixed(0),"k"):e.toString():"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(W.default,{}),(0,i.jsxs)(n.Z,{className:"content_wrapper",children:[(0,i.jsxs)(r.ZP,{container:!0,spacing:3,className:"backgroundImageContainer",children:[(0,i.jsxs)(r.ZP,{item:!0,lg:8,md:8,xs:12,children:[(0,i.jsx)(o.Z,{variant:"h3",className:"home_heading",mb:2,children:"Easy Way To Find Your Dream House"}),(0,i.jsx)(o.Z,{fontSize:"14px",fontWeight:"400",mb:2,children:"Search and find your dream property at an affordable price, with the best quality. Only available on Real Estate."}),(0,i.jsx)(n.Z,{display:"flex",mb:2,style:{flexWrap:"wrap"},children:(0,i.jsx)("div",{children:[{id:1,value:"Residential"},{id:2,value:"Commercial"},{id:3,value:"PG/Co-Living"},{id:4,value:"Plot"}].map(e=>(0,i.jsx)(a.Z,{className:P===e.value?"btnActive":"btnNormal",onClick:()=>I(e.value),children:e.value},e.id))})}),(0,i.jsx)(n.Z,{className:"outerwrap",children:(0,i.jsxs)(r.ZP,{container:!0,style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(r.ZP,{item:!0,lg:2,md:2,xs:3,children:(0,i.jsxs)(c.Z,{className:"selectCity",value:t,onChange:e=>{s(e.target.value)},displayEmpty:!0,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"1px solid gray",borderRadius:"4px"}},children:[(0,i.jsx)(d.Z,{value:"",disabled:!0,children:"City"}),["Nagpur"].map(e=>(0,i.jsx)(d.Z,{value:e,children:e},e))]})}),(0,i.jsx)(r.ZP,{item:!0,lg:5,md:4,xs:3,style:{position:"relative",top:"-24px"},children:(0,i.jsxs)("div",{className:"search_wrap",children:[(0,i.jsx)("input",{placeholder:"Search for locality, landmark..",style:{fontSize:"15px",width:"100%",border:"0",outline:"0"},value:U,onChange:e=>{let t=e.target.value;O(t),H&&(console.log("localities---",H),V(H.filter(e=>e.toLowerCase().startsWith(t.toLowerCase()))))},autoFocus:!0}),(0,i.jsx)("div",{style:{maxHeight:"250px",overflowY:"auto",paddingTop:"10px"},children:G.map((e,t)=>(0,i.jsx)("div",{className:"suggession_top",children:(0,i.jsx)("div",{className:"suggestion",onClick:()=>q(e),children:e},t)}))})]})}),(0,i.jsx)(r.ZP,{item:!0,lg:3,md:4,xs:4,display:"flex",justifyContent:"end",children:"PG/Co-Living"!==P&&(0,i.jsx)(h.Z,{children:(0,i.jsxs)(x.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"propertyStatus",value:T,onChange:e=>{k(e.target.value)},children:[(0,i.jsx)(p.Z,{value:"Buy",control:(0,i.jsx)(g.Z,{}),label:"Buy"}),"Plot"!==P&&(0,i.jsx)(p.Z,{value:"Rent",control:(0,i.jsx)(g.Z,{}),label:"Rent"})]})})}),(0,i.jsx)(r.ZP,{item:!0,lg:2,md:2,xs:2,children:(0,i.jsx)(a.Z,{className:"freehousing_button searchbtn",style:{color:"#fff",width:"100%",textTransform:"none"},onClick:()=>{if(el()){let s=P,i=T,l=null;"PG/Co-Living"===P&&(s="Residential",i="PG/Co-living"),"Plot"===P&&(s="Residential",l=P);let n=new URLSearchParams({city:t,propertyType:s,search:U,propertyStatus:i,buildingType:l}).toString();e.push("/filterpage?".concat(n))}},children:"Search"})}),(0,i.jsxs)(n.Z,{style:{display:"flex",justifyContent:"end",width:"100%"},children:[" ",M&&(0,i.jsx)("p",{style:{color:"red"},children:M})]})]})})]}),(0,i.jsx)(r.ZP,{item:!0,lg:4,md:4,xs:12,style:{padding:10},children:(0,i.jsxs)(n.Z,{style:{background:"#F3F4F4",padding:"20px",width:"100%"},children:[Q.slice(0,1).map((e,t)=>(0,i.jsx)(n.Z,{style:{marginTop:t>0?"10px":0},children:(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(y.Z,{component:"img",image:e.imageUrls[0],sx:{height:150,objectFit:"cover"},title:e.address}),(0,i.jsx)(j.Z,{children:(0,i.jsxs)(n.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsxs)(n.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,i.jsxs)(o.Z,{variant:"h6",fontWeight:"600",style:{fontSize:"20px"},children:["₹",er(e.monthlyRent)]}),(0,i.jsxs)(o.Z,{style:{fontSize:"15px"},children:["Located at ",e.searchCity]})]}),(0,i.jsx)(a.Z,{variant:"contained",className:"freehousing_button",style:{textTransform:"none"},children:"Contact"})]})})]})},t)),Q.slice(1,3).map((e,t)=>(0,i.jsx)(n.Z,{style:{marginTop:"10px"},children:(0,i.jsx)(m.Z,{children:(0,i.jsxs)(r.ZP,{style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(r.ZP,{lg:7,md:7,xs:7,children:(0,i.jsx)(y.Z,{component:"img",image:e.imageUrls[0],sx:{height:150,objectFit:"cover"},title:e.address})}),(0,i.jsx)(r.ZP,{lg:5,md:5,xs:5,children:(0,i.jsx)(n.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,i.jsxs)(n.Z,{style:{flexDirection:"column",marginLeft:30},children:[(0,i.jsxs)(o.Z,{variant:"h6",fontWeight:"600",style:{fontSize:"19px"},children:["₹",er(e.monthlyRent)]}),(0,i.jsxs)(o.Z,{style:{fontSize:"14px"},children:["Located at ",e.searchCity]})]})})})]})})}))]})})]}),(0,i.jsxs)(r.ZP,{container:!0,marginTop:4,children:[(0,i.jsxs)(n.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(o.Z,{variant:"h5",fontWeight:700,className:"heading1",children:"In Spotlight"}),(0,i.jsx)(o.Z,{color:"#535353",className:"heading2",children:"Explore our recent property here"})]}),(0,i.jsx)(r.ZP,{item:!0,lg:12,xs:12,md:12,className:"CarDetails-page",pt:1,children:(0,i.jsx)(Z.Z,{dots:!0,arrows:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}],children:et.map((e,t)=>(0,i.jsx)(n.Z,{children:(0,i.jsxs)(n.Z,{style:{position:"relative"},children:[(0,i.jsxs)("div",{className:"image-container",children:[(0,i.jsx)("img",{src:e.imageUrls[0],alt:"Slider Image ".concat(t+1),style:{width:"100%",objectFit:"cover",height:"100%"}}),(0,i.jsx)("div",{className:"image-overlay",style:{position:"absolute",bottom:0,left:0,right:0,height:"60%",backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))"}})]}),(0,i.jsx)(n.Z,{className:"hpage_slider_bottom",children:(0,i.jsxs)(n.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsxs)(n.Z,{className:"hpage_slider_bottom_left",children:[(0,i.jsx)(n.Z,{children:(0,i.jsx)("img",{src:e.slidericon,style:{height:"40px",width:"40px"}})}),(0,i.jsxs)(n.Z,{style:{display:"flex",flexDirection:"column",marginLeft:"15px"},children:[(0,i.jsx)(o.Z,{fontWeight:"600",className:"hpage_slider_bottom_left_heading",children:e.propertyType}),(0,i.jsx)(o.Z,{className:"hpage_slider_bottom_left_heading",children:e.searchCity})]})]}),(0,i.jsxs)(n.Z,{className:"hpage_slider_bottom_right",children:[(0,i.jsx)(o.Z,{mr:2,fontWeight:600,children:er(e.monthlyRent)}),(0,i.jsx)(a.Z,{variant:"contained",children:"View"})]})]})})]})},t))})})]}),(0,i.jsxs)(n.Z,{marginTop:4,style:{width:"100%"},children:[(0,i.jsxs)(n.Z,{style:{display:"flex",flexDirection:"column",width:"100%"},children:[(0,i.jsxs)(n.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(o.Z,{variant:"h5",fontWeight:700,className:"heading1",children:"Best Properties to Buy"}),(0,i.jsx)(o.Z,{color:"#535353",className:"heading2",children:"Best properties to buy in the cities"})]}),(0,i.jsxs)(n.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px"},children:[(0,i.jsx)(n.Z,{children:(0,i.jsx)(a.Z,{style:{background:"#0066ab1a",color:"#0066AB",textTransform:"none"},children:"Nagpur"})}),(0,i.jsx)(n.Z,{children:(0,i.jsxs)(v.default,{href:"#",style:{textDecoration:"none",color:"#3D3D3D",display:"flex",alignItems:"center",className:"viewAll"},children:["View all",(0,i.jsx)(b.Z,{style:{marginLeft:"7px",height:"15px",width:"15px"}})]})})]})]}),(0,i.jsx)(r.ZP,{item:!0,lg:12,spacing:2,className:"hpg_property",pt:1,children:$?(0,i.jsx)(Z.Z,{...J,children:$.map((e,t)=>{var s,l;let{washroom:r,monthlyRent:a,imageUrls:c,bhk:d,searchCity:h,propertyType:x,lookingTo:p,propertyDetails:g,commPropDetails:y,roomDetails:j,pgPropDetails:u,address:Z,yourFloor:v,property_id:b}=e;null==r||r.indians,null==r||r.western,null==y||null===(s=y.yourFloor)||void 0===s||s.label;let w=null==u?void 0:null===(l=u.pgdetails)||void 0===l?void 0:l.pgIsFor;y&&(null==y?void 0:y.monthlyRent)?er(null==y?void 0:y.monthlyRent):y&&y.price?er(null==y?void 0:y.price):y&&(null==y?void 0:y.currentRentPerMonth)&&er(null==y?void 0:y.currentRentPerMonth);let R=c&&c.length>0?c[0]:"",N="";if(j&&"object"==typeof j){let e=[];for(let t in j)j.hasOwnProperty(t)&&j[t].pgRent&&e.push(parseInt(j[t].pgRent,10));e.length>0?N=e.length>1?"".concat(Math.min(...e)/1e3,"k - ").concat(Math.max(...e)/1e3,"k"):"".concat(e[0]/1e3,"k"):console.log("No valid pgRent values found in propertyDetails.roomDetails.")}return(0,i.jsx)(m.Z,{className:"outerbox",style:{marginRight:"10px",height:"100%"},onClick:()=>en(b),children:(0,i.jsxs)("div",{style:{height:"280px"},children:[(0,i.jsx)(n.Z,{component:"img",sx:{height:170,display:"block",maxWidth:400,overflow:"hidden",width:"100%",objectFit:"cover"},src:R,alt:Z}),(0,i.jsxs)(n.Z,{style:{padding:"10px"},children:["Residential"==x&&("Rent"==p||"Sell"==p)?(0,i.jsxs)(o.Z,{variant:"h6",fontWeight:600,children:["₹",er(a)]}):"","Commercial"==x?(0,i.jsxs)(o.Z,{variant:"h6",fontWeight:600,children:["₹",er(a)]}):"","Residential"==x&&"PG/Co-living"==p?(0,i.jsxs)(o.Z,{variant:"h6",fontWeight:600,children:["₹",N]}):"",(0,i.jsxs)(o.Z,{variant:"p",mt:1,children:["Located at ",h]}),"Residential"===x&&d&&d.trim().length>0&&("Rent"===p||"Sell"===p)&&r>0?(0,i.jsxs)(n.Z,{style:{display:"flex",marginTop:"10px",alignItems:"center"},children:[(0,i.jsxs)(n.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,i.jsx)(f.Z,{style:{color:"gray",marginRight:"5px"}}),(0,i.jsx)(o.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:d})]}),r>0&&(0,i.jsxs)(n.Z,{style:{display:"flex",marginLeft:"20px"},children:[(0,i.jsx)(S.Z,{style:{color:"gray"}})," ",(0,i.jsxs)("span",{style:{marginLeft:"5px"},children:[r," Washrooms"]})]}),console.log("washroom:",r),console.log("bhk:",d),console.log("lookingTo:",p)]}):"",(v>0||"Ground"===v)&&"Commercial"===x&&(0,i.jsx)(n.Z,{style:{display:"flex",marginTop:"10px",alignItems:"center"},children:(0,i.jsx)(n.Z,{style:{display:"flex"},children:(0,i.jsxs)(o.Z,{variant:"p",style:{display:"flex"},children:[(0,i.jsx)(B.Z,{style:{color:"gray"}}),(0,i.jsxs)("span",{style:{marginLeft:"5px"},children:["Ground"===v?"Ground":ei(parseInt(v))," ","Floor"]})]})})}),"Residential"==x&&"PG/Co-living"==p?(0,i.jsx)(n.Z,{style:{display:"flex",marginTop:"10px",alignItems:"center"},children:(0,i.jsx)(n.Z,{style:{display:"flex"},children:(0,i.jsxs)(o.Z,{variant:"p",style:{display:"flex"},children:[(0,i.jsx)(z.Z,{style:{color:"gray"}}),(0,i.jsxs)("span",{style:{marginLeft:"5px"},children:["PG for ",w]})]})})}):""]})]})},t)})}):(0,i.jsx)(o.Z,{variant:"p",children:"No properties found."})})]}),(0,i.jsxs)(n.Z,{marginTop:4,style:{width:"100%"},children:[(0,i.jsx)(n.Z,{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:(0,i.jsxs)(n.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(o.Z,{variant:"h5",fontWeight:700,className:"heading1",children:"Recently Added Properties"}),(0,i.jsx)(o.Z,{color:"#535353",className:"heading2",children:"Best properties to buy in the cities"})]})}),(0,i.jsx)(r.ZP,{item:!0,lg:12,spacing:2,className:"hpg_property",pt:1,children:(0,i.jsx)(Z.Z,{...J,children:Q&&Q.map((e,t)=>{let{monthlyRent:s,washroom:l,yourFloor:r,pgIsFor:a,searchCity:c,_id:d,imageUrls:h,bhk:x,maxpgRent:p,minpgRent:g,plotArea:y}=e,j=h&&h.length>0?h[0]:"";return(0,i.jsx)(m.Z,{className:"outerbox",style:{marginRight:"10px"},onClick:()=>en(d),children:(0,i.jsxs)("div",{style:{height:"280px"},children:[(0,i.jsx)(n.Z,{component:"img",sx:{height:170,display:"block",maxWidth:400,overflow:"hidden",width:"100%",objectFit:"cover"},src:j}),(0,i.jsxs)(n.Z,{style:{padding:"10px"},children:[(0,i.jsxs)(o.Z,{variant:"h6",fontWeight:600,children:["₹",er(s)]}),(0,i.jsxs)(o.Z,{variant:"p",mt:1,children:["Located at ",c]}),(0,i.jsx)(n.Z,{display:"flex",alignItems:"center",children:(0,i.jsx)(n.Z,{mr:2,children:(0,i.jsx)(o.Z,{variant:"body2",children:(0,i.jsxs)(n.Z,{display:"flex",alignItems:"center",children:[x>0&&(0,i.jsxs)(n.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,i.jsx)(w.Z,{style:{color:"gray",marginRight:"5px"}}),(0,i.jsx)(o.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:x})]}),y>0&&(0,i.jsxs)(n.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,i.jsx)(f.Z,{style:{color:"gray",marginRight:"5px"}}),(0,i.jsx)(o.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:y})]}),l>0&&(0,i.jsxs)(n.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,i.jsx)(S.Z,{style:{color:"gray",marginRight:"5px"}}),(0,i.jsxs)(o.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:[l," Washrooms"]})]}),r>0&&(0,i.jsxs)(n.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,i.jsx)(B.Z,{style:{color:"gray",marginRight:"5px"}}),(0,i.jsxs)(o.Z,{variant:"body2",style:{fontSize:"15px",fontWeight:"600"},children:[ei(parseInt(r))," ","Floor"]})]}),a>0&&(0,i.jsxs)(n.Z,{display:"flex",alignItems:"center",mr:2,children:[(0,i.jsx)(z.Z,{style:{color:"gray",marginRight:"5px"}}),(0,i.jsxs)(o.Z,{variant:"body2",children:["PG for ",a]})]})]})})})})]})]})},t)})})})]}),(0,i.jsxs)(r.ZP,{container:!0,marginTop:"70px",children:[(0,i.jsx)(r.ZP,{item:!0,lg:5,md:5,xs:12,children:(0,i.jsx)(N.default,{src:R,className:"hpg_other_services",style:{width:"100%",height:"100%"}})}),(0,i.jsxs)(r.ZP,{item:!0,lg:7,md:7,xs:12,className:"hpg_OS_heading_wrap",children:[(0,i.jsxs)(o.Z,{className:"hpg_other_services_heading heading3",variant:"h3",fontWeight:"700",children:["Not Only ",(0,i.jsx)("br",{}),"Buying, Selling or Renting,",(0,i.jsx)("br",{}),"We can help you with ",(0,i.jsx)("br",{})," our Other Services"]}),(0,i.jsx)(u.Z,{style:{padding:"30px",marginTop:"30px"},children:(0,i.jsxs)(r.ZP,{container:!0,lg:12,md:12,xs:12,style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)(r.ZP,{item:!0,lg:5,md:5,xs:12,children:[(0,i.jsx)(o.Z,{variant:"h6",fontWeight:700,children:"Rent Agreements"}),(0,i.jsx)(o.Z,{fontSize:"12px",mt:2,children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}),(0,i.jsx)(n.Z,{style:{marginTop:"12px",marginLeft:"10px"},children:(0,i.jsxs)(v.default,{href:"#",style:{textDecoration:"none",color:"#3D3D3D",display:"flex",alignItems:"center"},children:["View",(0,i.jsx)(b.Z,{style:{marginLeft:"7px",height:"15px",width:"15px"}})]})})]}),(0,i.jsxs)(r.ZP,{item:!0,lg:5,md:5,xs:12,children:[(0,i.jsx)(o.Z,{variant:"h6",fontWeight:700,children:"Home Loans"}),(0,i.jsx)(o.Z,{fontSize:"12px",mt:2,children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}),(0,i.jsx)(n.Z,{style:{marginTop:"12px",marginLeft:"10px"},children:(0,i.jsxs)(v.default,{href:"#",style:{textDecoration:"none",color:"#3D3D3D",display:"flex",alignItems:"center"},children:["View",(0,i.jsx)(b.Z,{style:{marginLeft:"7px",height:"15px",width:"15px"}})]})})]})]})})]})]}),(0,i.jsxs)(n.Z,{marginTop:4,style:{width:"100%"},children:[(0,i.jsx)(n.Z,{style:{display:"flex",flexDirection:"column",width:"100%"},children:(0,i.jsxs)(n.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(o.Z,{variant:"h5",style:{fontSize:"22px"},fontWeight:700,className:"heading4",children:"Types of properties you can buy through us"}),(0,i.jsx)(o.Z,{color:"#535353",className:"heading5",children:"Prominent developers in Nagpur"})]})}),(0,i.jsx)(r.ZP,{container:!0,marginTop:"30px",children:(0,i.jsx)(L,{})})]}),(0,i.jsx)(n.Z,{marginTop:4,style:{width:"100%"},children:(0,i.jsx)(E.default,{})})]}),(0,i.jsx)(F.default,{})]})}}},function(e){e.O(0,[102,792,537,732,572,849,398,222,506,985,971,69,744],function(){return e(e.s=62294)}),_N_E=e.O()}]);