"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6207],{76:(re,k,u)=>{u.d(k,{GW:()=>O,dk:()=>Z,oK:()=>a});var a=(()=>{return(P=a||(a={})).Prompt="PROMPT",P.Camera="CAMERA",P.Photos="PHOTOS",a;var P})(),O=(()=>{return(P=O||(O={})).Rear="REAR",P.Front="FRONT",O;var P})(),Z=(()=>{return(P=Z||(Z={})).Uri="uri",P.Base64="base64",P.DataUrl="dataUrl",Z;var P})()},7423:(re,k,u)=>{u.d(k,{Uw:()=>H,dV:()=>F,fo:()=>I,xz:()=>$});var a=u(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var w=(()=>{return(n=w||(w={})).Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",w;var n})();class $ extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const x=n=>{var e,t,i,l,r;const f=n.CapacitorCustomPlatform||null,s=n.Capacitor||{},v=s.Plugins=s.Plugins||{},h=n.CapacitorPlatforms,W=(null===(e=null==h?void 0:h.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==f?f.name:(n=>{var e,t;return null!=n&&n.androidBridge?"android":null!==(t=null===(e=null==n?void 0:n.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(n)),de=(null===(t=null==h?void 0:h.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==W()),fe=(null===(i=null==h?void 0:h.currentPlatform)||void 0===i?void 0:i.isPluginAvailable)||(g=>{const m=ee.get(g);return!!(null!=m&&m.platforms.has(W())||se(g))}),se=(null===(l=null==h?void 0:h.currentPlatform)||void 0===l?void 0:l.getPluginHeader)||(g=>{var m;return null===(m=s.PluginHeaders)||void 0===m?void 0:m.find(M=>M.name===g)}),ee=new Map,pe=(null===(r=null==h?void 0:h.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((g,m={})=>{const M=ee.get(g);if(M)return console.warn(`Capacitor plugin "${g}" already registered. Cannot register plugins twice.`),M.proxy;const j=W(),B=se(g);let A;const Pe=function(){var p=(0,a.Z)(function*(){return!A&&j in m?A=A="function"==typeof m[j]?yield m[j]():m[j]:null!==f&&!A&&"web"in m&&(A=A="function"==typeof m.web?yield m.web():m.web),A});return function(){return p.apply(this,arguments)}}(),te=p=>{let y;const L=(...U)=>{const S=Pe().then(E=>{const R=((p,y)=>{var L,U;if(!B){if(p)return null===(U=p[y])||void 0===U?void 0:U.bind(p);throw new $(`"${g}" plugin is not implemented on ${j}`,w.Unimplemented)}{const S=null==B?void 0:B.methods.find(E=>y===E.name);if(S)return"promise"===S.rtype?E=>s.nativePromise(g,y.toString(),E):(E,R)=>s.nativeCallback(g,y.toString(),E,R);if(p)return null===(L=p[y])||void 0===L?void 0:L.bind(p)}})(E,p);if(R){const N=R(...U);return y=null==N?void 0:N.remove,N}throw new $(`"${g}.${p}()" is not implemented on ${j}`,w.Unimplemented)});return"addListener"===p&&(S.remove=(0,a.Z)(function*(){return y()})),S};return L.toString=()=>`${p.toString()}() { [capacitor code] }`,Object.defineProperty(L,"name",{value:p,writable:!1,configurable:!1}),L},ae=te("addListener"),le=te("removeListener"),ye=(p,y)=>{const L=ae({eventName:p},y),U=function(){var E=(0,a.Z)(function*(){const R=yield L;le({eventName:p,callbackId:R},y)});return function(){return E.apply(this,arguments)}}(),S=new Promise(E=>L.then(()=>E({remove:U})));return S.remove=(0,a.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield U()}),S},ne=new Proxy({},{get(p,y){switch(y){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return B?ye:ae;case"removeListener":return le;default:return te(y)}}});return v[g]=ne,ee.set(g,{name:g,proxy:ne,platforms:new Set([...Object.keys(m),...B?[j]:[]])}),ne});return s.convertFileSrc||(s.convertFileSrc=g=>g),s.getPlatform=W,s.handleError=g=>n.console.error(g),s.isNativePlatform=de,s.isPluginAvailable=fe,s.pluginMethodNoop=(g,m,M)=>Promise.reject(`${M} does not have an implementation of "${m}".`),s.registerPlugin=pe,s.Exception=$,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s},F=(n=>n.Capacitor=x(n))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),I=F.registerPlugin;class H{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var i=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const f=function(){var v=(0,a.Z)(function*(){return i.removeListener(e,t)});return function(){return v.apply(this,arguments)}}(),s=Promise.resolve({remove:f});return Object.defineProperty(s,"remove",{value:(v=(0,a.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield f()}),function(){return v.apply(this,arguments)})}),s;var v}removeAllListeners(){var e=this;return(0,a.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const i=this.listeners[e];i&&i.forEach(l=>l(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new F.Exception(e,w.Unimplemented)}unavailable(e="not available"){return new F.Exception(e,w.Unavailable)}removeListener(e,t){var i=this;return(0,a.Z)(function*(){const l=i.listeners[e];if(!l)return;const r=l.indexOf(t);i.listeners[e].splice(r,1),i.listeners[e].length||i.removeWindowListener(i.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const X=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),J=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class q extends H{getCookies(){return(0,a.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[l,r]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");l=J(l).trim(),r=J(r).trim(),t[l]=r}),t})()}setCookie(e){return(0,a.Z)(function*(){try{const t=X(e.key),i=X(e.value),l=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),f=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${l}; path=${r}; ${f};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,a.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,a.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,a.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}I("CapacitorCookies",{web:()=>new q});const o=function(){var n=(0,a.Z)(function*(e){return new Promise((t,i)=>{const l=new FileReader;l.onload=()=>{const r=l.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},l.onerror=r=>i(r),l.readAsDataURL(e)})});return function(t){return n.apply(this,arguments)}}();class T extends H{request(e){return(0,a.Z)(function*(){const t=((n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),l=((n={})=>{const e=Object.keys(n);return Object.keys(n).map(l=>l.toLocaleLowerCase()).reduce((l,r,f)=>(l[r]=n[e[f]],l),{})})(n.headers)["content-type"]||"";if("string"==typeof n.data)t.body=n.data;else if(l.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[f,s]of Object.entries(n.data||{}))r.set(f,s);t.body=r.toString()}else if(l.includes("multipart/form-data")){const r=new FormData;if(n.data instanceof FormData)n.data.forEach((s,v)=>{r.append(v,s)});else for(const s of Object.keys(n.data))r.append(s,n.data[s]);t.body=r;const f=new Headers(t.headers);f.delete("content-type"),t.headers=f}else(l.includes("application/json")||"object"==typeof n.data)&&(t.body=JSON.stringify(n.data));return t})(e,e.webFetchExtra),i=((n,e=!0)=>n?Object.entries(n).reduce((i,l)=>{const[r,f]=l;let s,v;return Array.isArray(f)?(v="",f.forEach(h=>{s=e?encodeURIComponent(h):h,v+=`${r}=${s}&`}),v.slice(0,-1)):(s=e?encodeURIComponent(f):f,v=`${r}=${s}`),`${i}&${v}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),l=i?`${e.url}?${i}`:e.url,r=yield fetch(l,t),f=r.headers.get("content-type")||"";let v,h,{responseType:s="text"}=r.ok?e:{};switch(f.includes("application/json")&&(s="json"),s){case"arraybuffer":case"blob":h=yield r.blob(),v=yield o(h);break;case"json":v=yield r.json();break;default:v=yield r.text()}const K={};return r.headers.forEach((W,_)=>{K[_]=W}),{data:v,headers:K,status:r.status,url:r.url}})()}get(e){var t=this;return(0,a.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,a.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,a.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,a.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,a.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}I("CapacitorHttp",{web:()=>new T})},6207:(re,k,u)=>{u.r(k),u.d(k,{Tab2PageModule:()=>ie});var a=u(4556),O=u(6895),Z=u(433),P=u(581),V=u(2598),G=u(655),c=u(8256),w=u(7423),$=u(76);const Y=(0,w.fo)("Camera",{web:()=>u.e(3954).then(u.bind(u,3954)).then(o=>new o.CameraWeb)});var x=(()=>{return(o=x||(x={})).Documents="DOCUMENTS",o.Data="DATA",o.Library="LIBRARY",o.Cache="CACHE",o.External="EXTERNAL",o.ExternalStorage="EXTERNAL_STORAGE",x;var o})();const z=(0,w.fo)("Filesystem",{web:()=>u.e(6364).then(u.bind(u,6364)).then(o=>new o.FilesystemWeb)}),Q=(0,w.fo)("Preferences",{web:()=>u.e(8359).then(u.bind(u,8359)).then(o=>new o.PreferencesWeb)});let H=(()=>{class o{constructor(d){this.photos=[],this.PHOTO_STORAGE="photos",this.convertBlobToBase64=b=>new Promise((T,D)=>{const n=new FileReader;n.onerror=D,n.onload=()=>{T(n.result)},n.readAsDataURL(b)}),this.platform=d}addNewToGallery(){return(0,G.mG)(this,void 0,void 0,function*(){const d=yield Y.getPhoto({resultType:$.dk.Uri,source:$.oK.Camera,quality:100}),b=yield this.savePicture(d);this.photos.unshift(b),Q.set({key:this.PHOTO_STORAGE,value:JSON.stringify(this.photos)})})}savePicture(d){return(0,G.mG)(this,void 0,void 0,function*(){const b=yield this.readAsBase64(d),T=(new Date).getTime()+".jpeg",D=yield z.writeFile({path:T,data:b,directory:x.Data});return this.platform.is("hybrid")?{filepath:D.uri,webviewPath:w.dV.convertFileSrc(D.uri)}:{filepath:T,webviewPath:d.webPath}})}readAsBase64(d){return(0,G.mG)(this,void 0,void 0,function*(){if(this.platform.is("hybrid"))return(yield z.readFile({path:d.path})).data;{const T=yield(yield fetch(d.webPath)).blob();return yield this.convertBlobToBase64(T)}})}loadSaved(){return(0,G.mG)(this,void 0,void 0,function*(){const d=yield Q.get({key:this.PHOTO_STORAGE});if(this.photos=JSON.parse(d.value)||[],!this.platform.is("hybrid"))for(let b of this.photos){const T=yield z.readFile({path:b.filepath,directory:x.Data});b.webviewPath=`data:image/jpeg;base64,${T.data}`}})}}return o.\u0275fac=function(d){return new(d||o)(c.LFG(a.t4))},o.\u0275prov=c.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function oe(o,C){if(1&o&&(c.TgZ(0,"ion-col",8),c._UZ(1,"ion-img",9),c.qZA()),2&o){const d=C.$implicit;c.xp6(1),c.Q6J("src",d.webviewPath)}}const J=[{path:"",component:(()=>{class o{constructor(d){this.photoService=d}addPhotoToGallery(){this.photoService.addNewToGallery()}ngOnInit(){return(0,G.mG)(this,void 0,void 0,function*(){yield this.photoService.loadSaved()})}}return o.\u0275fac=function(d){return new(d||o)(c.Y36(H))},o.\u0275cmp=c.Xpm({type:o,selectors:[["app-tab2"]],decls:15,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["size","6",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","center","slot","fixed"],[3,"click"],["name","camera"],["size","6"],[3,"src"]],template:function(d,b){1&d&&(c.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),c._uU(3," Home "),c.qZA()()(),c.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),c._uU(8,"Home"),c.qZA()()(),c.TgZ(9,"ion-grid")(10,"ion-row"),c.YNc(11,oe,2,1,"ion-col",4),c.qZA()(),c.TgZ(12,"ion-fab",5)(13,"ion-fab-button",6),c.NdJ("click",function(){return b.addPhotoToGallery()}),c._UZ(14,"ion-icon",7),c.qZA()()()),2&d&&(c.Q6J("translucent",!0),c.xp6(4),c.Q6J("fullscreen",!0),c.xp6(7),c.Q6J("ngForOf",b.photoService.photos))},dependencies:[a.wI,a.W2,a.IJ,a.W4,a.jY,a.Gu,a.gu,a.Xz,a.Nd,a.wd,a.sr,O.sg]}),o})()}];let q=(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[V.Bz.forChild(J),V.Bz]}),o})(),ie=(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[a.Pc,O.ez,Z.u5,P.e,q]}),o})()}}]);