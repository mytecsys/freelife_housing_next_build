"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{76609:function(e,t,r){var s,a,l=Object.create,o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,u=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,h=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))p.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(s=n(t,a))||s.enumerable});return e},c=(e,t,r)=>(h(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>b}),e.exports=d(o({},"__esModule",{value:!0}),y);var m=(a=null!=(s=r(64090))?l(u(s)):{},d(s&&s.__esModule?a:o(a,"default",{value:s,enumerable:!0}),s)),f=r(9798),P=r(56877);class b extends m.Component{componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,f.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then(e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.on("ready",()=>{setTimeout(()=>{this.player.isReady=!0,this.player.setLoop(this.props.loop),this.props.muted&&this.player.mute(),this.addListeners(this.player,this.props),this.props.onReady()},500)}))},this.props.onError)}addListeners(e,t){e.on("play",t.onPlay),e.on("pause",t.onPause),e.on("ended",t.onEnded),e.on("error",t.onError),e.on("timeupdate",e=>{let{duration:t,seconds:r}=e;this.duration=t,this.currentTime=r})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){return m.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}constructor(){super(...arguments),c(this,"callPlayer",f.callPlayer),c(this,"duration",null),c(this,"currentTime",null),c(this,"secondsLoaded",null),c(this,"mute",()=>{this.callPlayer("mute")}),c(this,"unmute",()=>{this.callPlayer("unmute")}),c(this,"ref",e=>{this.iframe=e})}}c(b,"displayName","Kaltura"),c(b,"canPlay",P.canPlay.kaltura)}}]);