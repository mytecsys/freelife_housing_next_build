"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{21985:function(e,t,s){s.r(t),s.d(t,{default:function(){return D}});var i=s(3827),l=s(64090),a=s(54272),r=s(29835),n=s(6285),o=s(82508),d=s(10470),c=s(28089),p=s(36847),x=s(68620),h=s(73219),g=s(368),m=s(5068),y=s(20283),j=s(11554),u=s(93299),f=s(57572);s(20703);var Z=s(138);s(55768),s(8694);var v=s(64833),b=s.n(v),_=s(49239),A=s(80843),S=s(92026),L=s(10242),w=s(45466),I=s(47907),k=s(56251),P=s(43206),T=s(79309),C=s(83731);function D(){var e,t,s,v;(0,I.useRouter)();let D=(0,I.useSearchParams)().get("property_id"),[N,R]=(0,l.useState)([]),[B,E]=(0,l.useState)(!1),[W,F]=(0,l.useState)(null);(0,l.useEffect)(()=>{(async()=>{console.log("function trigger"),E(!0),F(null);try{let e=localStorage.getItem("token"),t=localStorage.getItem("userId"),s={property_id:D,user_id:t};console.log("payload",s);let i="".concat(L.Z.baseurl,"api/singleproperty"),l=await (0,S.$)(i,s,e);R(l.property_detail||""),!0===l.property_detail.isInterested&&(z("Interest Already Added"),U(!0)),console.log("response",l.property_detail)}catch(e){console.error("Error:",e)}})()},[D]);let[O,z]=(0,l.useState)("I am intreseted"),[M,U]=(0,l.useState)(!1),[q,H]=(0,l.useState)(null),[$,J]=(0,l.useState)(!1),[G,V]=(0,l.useState)(""),K=(e,t)=>{"clickaway"!==t&&J(!1)};P.Z,T.Z,(0,l.useEffect)(()=>{H(localStorage.getItem("userId"))},[]);let Q=async()=>{try{let e=localStorage.getItem("token"),t={user_id:q,property_id:D,owner_id:N.user_id};console.log("response lead payload",t);let s="".concat(L.Z.baseurl,"lead/addlead");console.log("response lead url",s);let i=await (0,S.$)(s,t,e);console.log("response lead response---",i),!1===i.error?(z("Interest Added Successfully"),U(!0)):"Invalid Token"===i.message&&!0===i.islogin&&(console.log("Token is invalid. User needs to login again."),V(i.message),J(!0))}catch(e){console.error("Error:",e)}},X=N&&N.advanceDetails?N.advanceDetails.propertyDescription:"",Y=N&&N.floorPlanArray&&N.floorPlanArray.length>0?N.floorPlanArray[0]:"",ee=(0,j.bH)(y.ZP),et=[{range:"₹50.66L - 53.03 L",location:"Located at Jamtha",bedroomtext:"2 Bed Rooms",bathroomtext:"4 Bathrooms",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"},{range:"₹76.66L - 78.03 L",location:"Located at Mumbai",bedroomtext:"2 Bed Rooms",bathroomtext:"4 Bathrooms",imgPath:"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"},{range:"₹73.66L - 75.03 L",location:"Located at Delhi",bedroomtext:"2 Bed Rooms",bathroomtext:"4 Bathrooms",imgPath:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"}],es=(0,g.Z)(),[ei,el]=l.useState(0),ea=et.length,er={border:"2px solid blue",borderRadius:"5px"},[en,eo]=(0,l.useState)(0);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.default,{}),(0,i.jsxs)(a.Z,{className:"content_wrapper",children:[(0,i.jsx)(h.Z,{}),(0,i.jsxs)(a.Z,{className:"property_top_section",children:[(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(r.Z,{variant:"h5",fontWeight:700,children:N&&(null==N?void 0:N.slug)}),(0,i.jsx)(r.Z,{pt:1,children:"Located at Jamtha"})]}),(0,i.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column",alignItems:"end"},children:[(0,i.jsx)(a.Z,{children:(0,i.jsxs)(r.Z,{variant:"h5",color:"#00A0E3",fontWeight:700,pb:1,children:["₹",null==(v=N&&(null==N?void 0:null===(e=N.propertyDetails)||void 0===e?void 0:e.monthlyRent))?"":v>=1e5?"".concat((v/1e5).toFixed(1),"L"):v>=1e3?"".concat((v/1e3).toFixed(0),"k"):v.toString()]})}),(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(n.Z,{startIcon:(0,i.jsx)(c.Z,{}),style:{background:"#0066AB1A",textTransform:"none",marginRight:"10px"},children:"Share"}),(0,i.jsx)(n.Z,{startIcon:(0,i.jsx)(p.Z,{}),style:{background:"#0066AB1A",textTransform:"none",marginRight:"10px"},children:"Favorite"}),(0,i.jsx)(n.Z,{startIcon:(0,i.jsx)(x.Z,{}),style:{background:"#0066AB1A",textTransform:"none"},children:"Print"})]})]})]}),(0,i.jsx)(a.Z,{style:{margin:"20px 0"},children:(0,i.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(o.ZP,{item:!0,lg:12,md:12,xs:12,className:"CarDetails-page",children:(0,i.jsx)(Z.Z,{dots:!0,infinite:!0,arrows:!1,speed:500,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,autoPlay:!0,afterChange:e=>{eo(e)},children:N&&(null==N?void 0:null===(t=N.imageArray)||void 0===t?void 0:t.map((e,t)=>(0,i.jsx)(a.Z,{children:(0,i.jsx)("div",{className:"image-container",children:(0,i.jsx)("img",{src:e,alt:"Slider Image ".concat(t+1),style:{width:"100%",height:"100%"}})})},t)))})}),(0,i.jsx)(o.ZP,{container:!0,spacing:3,lg:12,style:{marginLeft:"7px",marginTop:"20px"},children:N&&(null==N?void 0:null===(s=N.imageArray)||void 0===s?void 0:s.map((e,t)=>(0,i.jsx)(o.ZP,{item:!0,xs:4,lg:2,md:2,children:(0,i.jsx)("img",{src:e,alt:"Thumbnail Image ".concat(t+1),style:{...en===t?er:{}},className:"thumbnailStyle"})},t)))})]})}),(0,i.jsx)(a.Z,{style:{marginTop:"40px"},children:(0,i.jsxs)(o.ZP,{container:!0,children:[(0,i.jsxs)(o.ZP,{item:!0,lg:8,md:8,xs:12,children:[(0,i.jsxs)(d.Z,{style:{padding:"20px"},children:[(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(r.Z,{variant:"h6",style:{padding:"30px 0 15px 0"},fontWeight:700,children:"Property details"}),(0,i.jsx)(a.Z,{className:"spg_prop_details",children:N&&N.propertyDetails?Object.entries(N.propertyDetails).map(e=>{let[t,s]=e;if("_id"!==t){let e=t.split(/(?=[A-Z])/).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");if("availableFrom"===t&&"string"==typeof s&&s.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)){let l=new Date(s).toLocaleDateString();return(0,i.jsx)("div",{className:"spg_prop_details_items",children:(0,i.jsx)("div",{style:{marginBottom:"5px",marginRight:"20px"},children:(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,i.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,i.jsx)(w.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),e,":"]})}),(0,i.jsx)("div",{style:{textAlign:"end"},children:l})]})})},t)}if("object"!=typeof s&&s)return(0,i.jsx)("div",{className:"spg_prop_details_items",children:(0,i.jsx)("div",{style:{marginRight:"20px",marginBottom:"5px"},children:(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,i.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,i.jsx)(w.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}}),e,":"]})}),(0,i.jsx)("div",{style:{textAlign:"end"},children:s})]})})},t)}return null}):""})]}),N&&N.advanceDetails&&Object.keys(N.advanceDetails).filter(e=>"_id"!==e).some(e=>N.advanceDetails[e])?(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(r.Z,{variant:"h6",style:{padding:"15px 0"},fontWeight:700,children:"Property utility"}),(0,i.jsx)(a.Z,{className:"spg_prop_details",children:N&&N.advanceDetails?Object.entries(N.advanceDetails).map((e,t)=>{let[s,l]=e;if("_id"!==s&&"address"!==s&&"propertyDescription"!==s&&l){let e=s.split(/(?=[A-Z])/).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");return(0,i.jsx)("div",{className:"spg_prop_details_items",children:(0,i.jsx)("div",{style:{marginRight:"20px",marginBottom:"5px"},children:(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,i.jsxs)("span",{style:{marginLeft:"7px",display:"flex"},children:[(0,i.jsx)(w.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}})," ",e,":"]})}),(0,i.jsx)("div",{style:{textAlign:"end"},children:l})]})})},t)}return null}):""})]}):"",N&&N.amenities&&Object.keys(N.amenities).filter(e=>"_id"!==e).some(e=>N.amenities[e])?(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(r.Z,{variant:"h6",style:{padding:"15px 0"},fontWeight:700,children:"Outdoor features"}),(0,i.jsx)(a.Z,{className:"spg_prop_details",children:N&&N.amenities&&Object.entries(N.amenities).map((e,t)=>{let[s,l]=e;return"isdelete"===s.toLowerCase()?null:(0,i.jsx)("div",{className:"spg_prop_details_items",children:(()=>{let e=s.split(/(?=[A-Z])/).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.Z,{variant:"subtitle1",style:{fontWeight:700,color:"#555",display:"flex",alignItems:"center"},children:[(0,i.jsx)(w.Z,{fontSize:"small",style:{marginRight:"10px",color:"gray"}})," ",e]}),Array.isArray(l)?l.map((e,t)=>(0,i.jsx)("div",{style:{marginLeft:"20px"},children:(0,i.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,i.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,i.jsx)("span",{style:{marginLeft:"7px"},children:e})})})},t)):(0,i.jsx)("div",{style:{marginLeft:"20px"},children:(0,i.jsx)("div",{children:(0,i.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,i.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,i.jsx)("span",{style:{marginLeft:"7px"},children:l})})})})})]})})()},t)})})]}):""]}),(0,i.jsx)(a.Z,{style:{marginTop:"20px"},children:(0,i.jsxs)(d.Z,{style:{padding:"20px"},children:[(0,i.jsx)(r.Z,{variant:"h6",pb:2,fontWeight:700,children:"Video"}),(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(b(),{className:"spg_video_player",url:"https://player.vimeo.com/external/222141033.sd.mp4?s=cb4965a7d8a1845a77a7cb42b5ec05a6167744bb&profile_id=164&oauth2_token_id=57447761",controls:!0,muted:!0,light:!1,pip:!0}),(0,i.jsx)("source",{src:"https://player.vimeo.com/external/222141033.sd.mp4?s=cb4965a7d8a1845a77a7cb42b5ec05a6167744bb&profile_id=164&oauth2_token_id=57447761",type:"video/mp4"})]})]})}),(0,i.jsx)(a.Z,{style:{marginTop:"20px"},children:Y&&(0,i.jsxs)(d.Z,{style:{padding:"20px"},children:[(0,i.jsx)(r.Z,{variant:"h6",pb:2,fontWeight:700,children:"Floor plans"}),(0,i.jsx)(a.Z,{children:(0,i.jsx)("img",{src:Y,className:"spg_floor_plan"})})]})}),(null==N?void 0:N.googleMapsLink)&&(0,i.jsx)(a.Z,{style:{marginTop:"20px"},children:(0,i.jsxs)(d.Z,{style:{padding:"20px"},children:[(0,i.jsx)(r.Z,{variant:"h6",pb:2,fontWeight:700,children:"Location"}),(0,i.jsx)(a.Z,{children:(0,i.jsx)("iframe",{title:"Property Location",loading:"lazy",allowFullScreen:!0,frameBorder:"0",src:N.googleMapsLink,className:"spg_location_img"})})]})}),X&&(0,i.jsx)(a.Z,{style:{marginTop:"20px"},children:(0,i.jsxs)(d.Z,{style:{padding:"20px"},children:[(0,i.jsx)(r.Z,{variant:"h5",pb:2,children:"Description"}),(0,i.jsx)(r.Z,{children:X})]})})]}),(0,i.jsx)(o.ZP,{item:!0,lg:4,md:4,xs:12,children:(0,i.jsxs)(a.Z,{className:"related_prp_wrap",children:[(null==N?void 0:N.status)=="Approved"?(0,i.jsx)(n.Z,{variant:"contained",style:{width:"100%",marginTop:"10px"},onClick:Q,disabled:M,children:O}):"",(0,i.jsx)(k.Z,{open:$,autoHideDuration:6e3,onClose:K,anchorOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiAlert-filledError":{backgroundColor:"red",color:"#fff"}},children:(0,i.jsx)(C.Z,{onClose:K,severity:"error",variant:"filled",children:"Session expired please login to continue"})}),(0,i.jsxs)(a.Z,{style:{background:"#EAEAEA",padding:"20px",marginTop:"20px",borderRadius:"5px"},children:[(0,i.jsx)(r.Z,{variant:"h4",children:"Related Property"}),(0,i.jsx)(r.Z,{variant:"p",children:"Tantas signiferumque eum at, vix an dicant fierent homero dignissim."}),(0,i.jsxs)(a.Z,{sx:{maxWidth:400,flexGrow:1,marginTop:"20px"},children:[(0,i.jsx)(ee,{axis:"rtl"===es.direction?"x-reverse":"x",index:ei,onChangeIndex:e=>{el(e)},enableMouseEvents:!0,children:et.map((e,t)=>(0,i.jsx)(d.Z,{children:(0,i.jsx)("div",{children:2>=Math.abs(ei-t)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{component:"img",sx:{height:255,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},src:e.imgPath,alt:e.label}),(0,i.jsxs)(a.Z,{style:{padding:"10px"},children:[(0,i.jsx)(r.Z,{variant:"h6",fontWeight:600,children:et[ei].range}),(0,i.jsx)(r.Z,{variant:"p",mt:1,children:et[ei].location}),(0,i.jsxs)(a.Z,{style:{display:"flex",marginTop:"10px"},children:[(0,i.jsxs)(a.Z,{style:{display:"flex"},children:[(0,i.jsx)(u.Z,{style:{color:"gray"}})," ",(0,i.jsxs)("span",{style:{marginLeft:"5px"},children:[" ",et[ei].bedroomtext]})]}),(0,i.jsxs)(a.Z,{style:{display:"flex",marginLeft:"20px"},children:[(0,i.jsx)(f.Z,{style:{color:"gray"}})," ",(0,i.jsxs)("span",{style:{marginLeft:"5px"},children:[" ",et[ei].bathroomtext]})]})]})]})]}):null},e.label)}))}),(0,i.jsx)(m.Z,{steps:ea,position:"static",activeStep:ei,style:{display:"flex",justifyContent:"center"}})]})]})]})})]})})]}),(0,i.jsx)(A.default,{})]})}}}]);