exports.id=738,exports.ids=[738],exports.modules={40802:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2583,23)),Promise.resolve().then(n.t.bind(n,26840,23)),Promise.resolve().then(n.t.bind(n,38771,23)),Promise.resolve().then(n.t.bind(n,13225,23)),Promise.resolve().then(n.t.bind(n,9295,23)),Promise.resolve().then(n.t.bind(n,43982,23))},5661:()=>{},71651:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});let s={baseurl:"https://expressapi.freelifehousing.com/"}},16807:(e,t,n)=>{"use strict";function s(e,t,n,s="POST"){return fetch(e,{method:s,headers:{"Content-Type":"application/json",Authorization:n},body:JSON.stringify(t)}).then(e=>e.json()).then(function(e){return e})}function r(e,t="GET"){return fetch(e,{method:t,headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(function(e){return e})}function i(e,t,n="POST"){return fetch(e,{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(function(e){return e})}n.d(t,{$h:()=>s,KD:()=>r,Lx:()=>i})},5181:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I});var s=n(95344),r=n(3729),i=n(7470),o=n.n(i),l=n(16706),a=n(56739),d=n(65852),c=n(86120),x=n(81354),h=n(80443),p=n(74665),A=n(54183),g=n(65442),u=n(65183),f=n(17055),m=n(81997),j=n(59230),Z=n(89808),y=n(90965),b=n(62217),S=n(43266),v=n(8428);let w={src:"/_next/static/media/avtar.aa6c4f9b.png",height:32,width:32,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEW81fc5eaKxnqybrcTQ5//B2/tok7bO5f/H4P5MaXFJcJFPcY+XpLi/2vdajbjF4P9TgqhaiKpNcI50cop4do/Q5/+21fO9rKjd+P/d3uz/383x2tQzcZynxt7SzNHQy9BD32GfAAAAFXRSTlMusv768fP6tf0A/v76ruqt6S0r9vcL300JAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nAXBBwKAIAwEsAMLbd2Ljfr/X5pAwSIMBegZp0gA5yGlOS8gKbUWcaAQWgvBgaN/Px83YO3W9h3Qw9yXOfUHcLIDV/M0V+AAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};var C=n(51564),D=n(89410),k=n(36639),T=n(97553),R=n(56506);let B={src:"/_next/static/media/favicon.cf3498dd.ico",height:50,width:41,blurWidth:0,blurHeight:0};function P(e,{wishlistItems:t}){let n=(0,v.useRouter)(),{window:i}=e,[o,P]=r.useState(!1),[I,E]=r.useState(null),L=()=>{P(e=>!e)},M=e=>{E(e.currentTarget)},U=()=>{localStorage.removeItem("username"),Y(""),G(!1)},z=()=>{n.push("https://app.freelifehousing.com/")},O=()=>{E(null)},[K,Y]=r.useState(""),[F,N]=r.useState(!1),[V,G]=r.useState(F);(0,r.useEffect)(()=>{localStorage.getItem("username")?G(!0):G(!1),Y(localStorage.getItem("username"))},[]),(0,r.useEffect)(()=>{N(!!localStorage.getItem("authUser"))},[]);let W=()=>{V?n.push("https://app.freelifehousing.com/#/add-property"):n.push("https://app.freelifehousing.com/#/login")},X=()=>{n.push("/wishlistProperty")},H=()=>{n.push("/viewAllBlog")},J=s.jsx(a.Z,{onClick:L,sx:{textAlign:"center"},children:(0,s.jsxs)(a.Z,{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"10px"},children:[s.jsx(g.Z,{variant:"h6",sx:{my:2},children:s.jsx(R.default,{href:"/",children:s.jsx(D.default,{src:C.Z,style:{width:"180px",height:"30px"}})})}),s.jsx(c.Z,{}),s.jsx(a.Z,{children:(0,s.jsxs)(u.Z,{onClick:X,sx:{color:"#3D3D3D",textTransform:"none",fontSize:"17px"},children:[s.jsx(f.Z,{style:{marginRight:"5px"}}),"Saved"]})}),s.jsx(a.Z,{children:(0,s.jsxs)(u.Z,{onClick:H,sx:{color:"#3D3D3D",textTransform:"none",fontSize:"17px"},children:[s.jsx(k.Z,{style:{marginRight:"5px"}}),"Blogs"]})}),s.jsx(a.Z,{children:(0,s.jsxs)(u.Z,{onClick:W,sx:{color:"#3D3D3D",textTransform:"none",fontSize:"17px"},children:[s.jsx(T.Z,{style:{marginRight:"5px"}}),"Add Your Property"]})}),(0,s.jsxs)(a.Z,{style:{width:"100%",marginTop:"10px"},children:[V?s.jsx(u.Z,{startIcon:s.jsx(m.Z,{src:w,style:{height:"25px",width:"25px"}}),style:{borderRadius:"40px",padding:"5px 15px",textTransform:"none"},onClick:M,children:K}):s.jsx(u.Z,{onClick:z,startIcon:s.jsx(b.Z,{}),style:{background:"#0066AB1A",borderRadius:"40px",padding:"5px 15px",textTransform:"none",fontSize:"17px",width:"95%",marginLeft:"5px",display:"flex",justifyContent:"center",alignItems:"center"},children:"Login"}),s.jsx(j.Z,{anchorEl:I,open:!!I,onClose:O,children:(0,s.jsxs)(Z.Z,{onClick:U,children:[s.jsx(y.Z,{children:s.jsx(S.Z,{fontSize:"small"})}),"Logout"]})})]})]})});return(0,s.jsxs)(a.Z,{sx:{display:"flex"},children:[s.jsx(d.ZP,{}),s.jsx(l.Z,{component:"nav",style:{backgroundColor:"#fff",color:"#3D3D3D"},children:(0,s.jsxs)(A.Z,{children:[s.jsx(a.Z,{sx:{display:{xs:"block",sm:"none"},marginRight:"auto"},children:s.jsx(R.default,{href:"/",children:s.jsx(D.default,{src:C.Z,style:{width:"180px",height:"30px"}})})}),s.jsx(h.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:L,sx:{mr:2,display:{sm:"none"}},children:s.jsx(p.Z,{})}),s.jsx(g.Z,{variant:"h6",component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:s.jsx(R.default,{href:"/",children:s.jsx(D.default,{src:C.Z,style:{width:"200px",height:"35px"}})})}),(0,s.jsxs)(a.Z,{sx:{display:{xs:"none",sm:"flex"},alignItems:"center",justifyContent:"end"},children:[s.jsx(a.Z,{children:(0,s.jsxs)(u.Z,{onClick:X,sx:{color:"#3D3D3D",textTransform:"none",fontSize:"17px"},children:[s.jsx(f.Z,{style:{marginRight:"5px"}}),"Saved"]})}),s.jsx(a.Z,{children:s.jsx(u.Z,{onClick:H,sx:{color:"#3D3D3D",textTransform:"none"},children:"Blogs"})}),s.jsx(a.Z,{style:{marginRight:"10px"},children:s.jsx(u.Z,{variant:"contained",style:{width:"170px",textTransform:"none"},onClick:W,children:"Add Your Property"})}),V?s.jsx(u.Z,{startIcon:s.jsx(m.Z,{src:w,style:{height:"25px",width:"25px"}}),style:{background:"#0066AB1A",borderRadius:"40px",padding:"5px 15px",textTransform:"none"},onClick:M,children:K}):s.jsx(u.Z,{onClick:z,startIcon:s.jsx(b.Z,{}),style:{background:"#0066AB1A",borderRadius:"40px",padding:"5px 15px",textTransform:"none"},children:"Login"}),s.jsx(j.Z,{anchorEl:I,open:!!I,onClose:O,children:(0,s.jsxs)(Z.Z,{onClick:U,children:[s.jsx(y.Z,{children:s.jsx(S.Z,{fontSize:"small"})}),"Logout"]})})]})]})}),(0,s.jsxs)("nav",{children:[s.jsx(D.default,{src:B}),s.jsx(x.ZP,{open:o,onClose:L,container:void 0!==i?()=>i().document.body:void 0,variant:"temporary",ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:J})]})]})}P.propTypes={window:o().func};let I=P},51965:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l,metadata:()=>o});var s=n(25036),r=n(11457),i=n.n(r);n(5023);let o={title:"FREE LIFE HOUSING",description:"Generated by create next app"};function l({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:i().className,children:e})})}},51564:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});let s={src:"/_next/static/media/logo11.4e5129ee.png",height:50,width:270,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAD1BMVEU6OjpbteFagZc/P0Y1KSPlVTbSAAAABXRSTlMWvjsoKwm5AKEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BkYmFmYGBgAAAARgALkg3FvwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1}},73881:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});var s=n(70337);let r=e=>[{type:"image/x-icon",sizes:"41x50",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};