"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[125],{52930:function(e,t,r){var o,s,i=Object.create,l=Object.defineProperty,n=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,u=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of a(t))p.call(e,s)||s===r||l(e,s,{get:()=>t[s],enumerable:!(o=n(t,s))||o.enumerable});return e},c=(e,t,r)=>(h(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>g}),e.exports=d(l({},"__esModule",{value:!0}),y);var m=(s=null!=(o=r(64090))?i(u(o)):{},d(o&&o.__esModule?s:l(s,"default",{value:o,enumerable:!0}),o)),f=r(9798),b=r(56877);class g extends m.Component{componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){(0,f.getSDK)("https://w.soundcloud.com/player/api.js","SC").then(r=>{if(!this.iframe)return;let{PLAY:o,PLAY_PROGRESS:s,PAUSE:i,FINISH:l,ERROR:n}=r.Widget.Events;t||(this.player=r.Widget(this.iframe),this.player.bind(o,this.props.onPlay),this.player.bind(i,()=>{this.duration-this.currentTime<.05||this.props.onPause()}),this.player.bind(s,e=>{this.currentTime=e.currentPosition/1e3,this.fractionLoaded=e.loadedProgress}),this.player.bind(l,()=>this.props.onEnded()),this.player.bind(n,e=>this.props.onError(e))),this.player.load(e,{...this.props.config.options,callback:()=>{this.player.getDuration(e=>{this.duration=e/1e3,this.props.onReady()})}})})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];this.callPlayer("seekTo",1e3*e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.fractionLoaded*this.duration}render(){let{display:e}=this.props;return m.default.createElement("iframe",{ref:this.ref,src:"https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),style:{width:"100%",height:"100%",display:e},frameBorder:0,allow:"autoplay"})}constructor(){super(...arguments),c(this,"callPlayer",f.callPlayer),c(this,"duration",null),c(this,"currentTime",null),c(this,"fractionLoaded",null),c(this,"mute",()=>{this.setVolume(0)}),c(this,"unmute",()=>{null!==this.props.volume&&this.setVolume(this.props.volume)}),c(this,"ref",e=>{this.iframe=e})}}c(g,"displayName","SoundCloud"),c(g,"canPlay",b.canPlay.soundcloud),c(g,"loopOnEnded",!0)}}]);