"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3527],{3527:(c,s,o)=>{o.r(s),o.d(s,{pwa_camera_modal_instance:()=>h});var r=o(5861),t=o(6738);const h=class{constructor(e){var a=this;(0,t.r)(this,e),this.facingMode="user",this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image",this.handlePhoto=function(){var i=(0,r.Z)(function*(n){a.onPhoto.emit(n)});return function(n){return i.apply(this,arguments)}}(),this.handleNoDeviceError=function(){var i=(0,r.Z)(function*(n){a.noDeviceError.emit(n)});return function(n){return i.apply(this,arguments)}}(),this.onPhoto=(0,t.c)(this,"onPhoto",7),this.noDeviceError=(0,t.c)(this,"noDeviceError",7)}handleBackdropClick(e){e.target!==this.el&&this.onPhoto.emit(null)}handleComponentClick(e){e.stopPropagation()}handleBackdropKeyUp(e){"Escape"===e.key&&this.onPhoto.emit(null)}render(){return(0,t.h)("div",{class:"wrapper",onClick:e=>this.handleBackdropClick(e)},(0,t.h)("div",{class:"content"},(0,t.h)("pwa-camera",{onClick:e=>this.handleComponentClick(e),facingMode:this.facingMode,handlePhoto:this.handlePhoto,handleNoDeviceError:this.handleNoDeviceError,noDevicesButtonText:this.noDevicesButtonText,noDevicesText:this.noDevicesText})))}get el(){return(0,t.g)(this)}static get style(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width:600px){.content{width:100%;height:100%}}"}}}}]);