"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.GUI=t():e.GUI=t()}(self,(()=>(self.webpackChunkGUI=self.webpackChunkGUI||[]).push([[251],{77828:(e,t,n)=>{n.r(t);var o=n(96540),s=n(40961),r=n(94921),a=n(41580);const c=(0,n(11640).A)((0,a.A)(r.A)),i="10015059";class d extends o.Component{constructor(e){super(e),this.updateProject=this.updateProject.bind(this),this.state={projectId:window.location.hash.substring(1)||i}}componentDidMount(){window.addEventListener("hashchange",this.updateProject),window.location.hash.substring(1)||(window.location.hash=i)}componentWillUnmount(){window.addEventListener("hashchange",this.updateProject)}updateProject(){this.setState({projectId:window.location.hash.substring(1)})}render(){return o.createElement("div",{style:{display:"flex"}},o.createElement(c,{isPlayerOnly:!0,isFullScreen:!1}),o.createElement("iframe",{allowFullScreen:!0,allowTransparency:!0,frameBorder:"0",height:"402",src:"https://scratch.mit.edu/projects/embed/".concat(this.state.projectId,"/?autostart=true"),width:"485"}))}}const l=document.createElement("div");document.body.appendChild(l),s.render(o.createElement(d,null),l)}},e=>(e.O(0,[278,175],(()=>e(e.s=77828))),e.O())])));