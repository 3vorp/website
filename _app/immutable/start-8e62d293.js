import{S as Qe,i as xe,s as et,a as tt,e as F,c as nt,b as W,g as he,t as J,d as me,f as G,h as K,j as rt,o as Se,k as at,l as ot,m as st,n as ke,p as q,q as it,r as lt,u as ct,v as Z,w as Q,x as Oe,y as x,z as ee,A as Ge}from"./chunks/index-ccb60fdc.js";import{g as Ke,f as ze,s as M,a as Le,b as ft,i as ut}from"./chunks/singletons-59d9cc08.js";function pt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function dt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ht=["href","pathname","search","searchParams","toString","toJSON"];function mt(r,e){const t=new URL(r);for(const s of ht){let l=t[s];Object.defineProperty(t,s,{get(){return e(),l},enumerable:!0,configurable:!0})}return gt(t),t}function gt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const _t="/__data.json";function wt(r){return r.replace(/\/$/,"")+_t}function yt(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;de.delete(s)}return ge(r,e)};const de=new Map;function bt(r,e,t){let l=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(l+=`[data-hash="${yt(t.body)}"]`);const c=document.querySelector(l);if(c!=null&&c.textContent){const{body:n,...i}=JSON.parse(c.textContent),_=c.getAttribute("data-ttl");return _&&de.set(e,{body:n,init:i,ttl:1e3*Number(_)}),Promise.resolve(new Response(n,i))}return ge(r,t)}function vt(r,e){const t=de.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);de.delete(r)}return ge(r,e)}const Et=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function kt(r){const e=[],t=[],s=[];let l=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${St(r).map((n,i,_)=>{const d=decodeURIComponent(n),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(m)return e.push(m[1]),t.push(m[2]),s.push(!1),"(?:/(.*))?";const k=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(d);if(k)return e.push(k[1]),t.push(k[2]),s.push(!0),"(?:/([^/]+))?";const R=i===_.length-1;return d?"/"+d.split(/\[(.+?)\](?!\])/).map((A,B)=>{if(B%2){const D=Et.exec(A);if(!D)throw new Error(`Invalid param: ${A}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,te,Y,ie,ne]=D;return e.push(ie),t.push(ne),s.push(!!te),Y?"(.*?)":te?"([^/]*)?":"([^/]+?)"}return R&&A.includes(".")&&(l=!1),A.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${l?"/?":""}$`),names:e,types:t,optional:s}}function Rt(r){return!/^\([^)]+\)$/.test(r)}function St(r){return r.slice(1).split("/").filter(Rt)}function Lt(r,{names:e,types:t,optional:s},l){const c={};for(let n=0;n<e.length;n+=1){const i=e[n],_=t[n];let d=r[n+1];if(d||!s[n]){if(_){const m=l[_];if(!m)throw new Error(`Missing "${_}" param matcher`);if(!m(d))return}c[i]=d!=null?d:""}}return c}function $t(r,e,t,s){const l=new Set(e);return Object.entries(t).map(([i,[_,d,m]])=>{const{pattern:k,names:R,types:O,optional:z}=kt(i),A={id:i,exec:B=>{const D=k.exec(B);if(D)return Lt(D,{names:R,types:O,optional:z},s)},errors:[1,...m||[]].map(B=>r[B]),layouts:[0,...d||[]].map(n),leaf:c(_)};return A.errors.length=A.layouts.length=Math.max(A.errors.length,A.layouts.length),A});function c(i){const _=i<0;return _&&(i=~i),[_,r[i]]}function n(i){return i===void 0?i:[l.has(i),r[i]]}}function At(r){let e,t,s;var l=r[0][0];function c(n){return{props:{data:n[2],form:n[1]}}}return l&&(e=Z(l,c(r))),{c(){e&&Q(e.$$.fragment),t=F()},l(n){e&&Oe(e.$$.fragment,n),t=F()},m(n,i){e&&x(e,n,i),W(n,t,i),s=!0},p(n,i){const _={};if(i&4&&(_.data=n[2]),i&2&&(_.form=n[1]),i&1&&l!==(l=n[0][0])){if(e){he();const d=e;J(d.$$.fragment,1,0,()=>{ee(d,1)}),me()}l?(e=Z(l,c(n)),Q(e.$$.fragment),G(e.$$.fragment,1),x(e,t.parentNode,t)):e=null}else l&&e.$set(_)},i(n){s||(e&&G(e.$$.fragment,n),s=!0)},o(n){e&&J(e.$$.fragment,n),s=!1},d(n){n&&K(t),e&&ee(e,n)}}}function It(r){let e,t,s;var l=r[0][0];function c(n){return{props:{data:n[2],$$slots:{default:[Ot]},$$scope:{ctx:n}}}}return l&&(e=Z(l,c(r))),{c(){e&&Q(e.$$.fragment),t=F()},l(n){e&&Oe(e.$$.fragment,n),t=F()},m(n,i){e&&x(e,n,i),W(n,t,i),s=!0},p(n,i){const _={};if(i&4&&(_.data=n[2]),i&523&&(_.$$scope={dirty:i,ctx:n}),i&1&&l!==(l=n[0][0])){if(e){he();const d=e;J(d.$$.fragment,1,0,()=>{ee(d,1)}),me()}l?(e=Z(l,c(n)),Q(e.$$.fragment),G(e.$$.fragment,1),x(e,t.parentNode,t)):e=null}else l&&e.$set(_)},i(n){s||(e&&G(e.$$.fragment,n),s=!0)},o(n){e&&J(e.$$.fragment,n),s=!1},d(n){n&&K(t),e&&ee(e,n)}}}function Ot(r){let e,t,s;var l=r[0][1];function c(n){return{props:{data:n[3],form:n[1]}}}return l&&(e=Z(l,c(r))),{c(){e&&Q(e.$$.fragment),t=F()},l(n){e&&Oe(e.$$.fragment,n),t=F()},m(n,i){e&&x(e,n,i),W(n,t,i),s=!0},p(n,i){const _={};if(i&8&&(_.data=n[3]),i&2&&(_.form=n[1]),i&1&&l!==(l=n[0][1])){if(e){he();const d=e;J(d.$$.fragment,1,0,()=>{ee(d,1)}),me()}l?(e=Z(l,c(n)),Q(e.$$.fragment),G(e.$$.fragment,1),x(e,t.parentNode,t)):e=null}else l&&e.$set(_)},i(n){s||(e&&G(e.$$.fragment,n),s=!0)},o(n){e&&J(e.$$.fragment,n),s=!1},d(n){n&&K(t),e&&ee(e,n)}}}function Me(r){let e,t=r[5]&&He(r);return{c(){e=at("div"),t&&t.c(),this.h()},l(s){e=ot(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var l=st(e);t&&t.l(l),l.forEach(K),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(s,l){W(s,e,l),t&&t.m(e,null)},p(s,l){s[5]?t?t.p(s,l):(t=He(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&K(e),t&&t.d()}}}function He(r){let e;return{c(){e=it(r[6])},l(t){e=lt(t,r[6])},m(t,s){W(t,e,s)},p(t,s){s&64&&ct(e,t[6])},d(t){t&&K(e)}}}function Pt(r){let e,t,s,l,c;const n=[It,At],i=[];function _(m,k){return m[0][1]?0:1}e=_(r),t=i[e]=n[e](r);let d=r[4]&&Me(r);return{c(){t.c(),s=tt(),d&&d.c(),l=F()},l(m){t.l(m),s=nt(m),d&&d.l(m),l=F()},m(m,k){i[e].m(m,k),W(m,s,k),d&&d.m(m,k),W(m,l,k),c=!0},p(m,[k]){let R=e;e=_(m),e===R?i[e].p(m,k):(he(),J(i[R],1,1,()=>{i[R]=null}),me(),t=i[e],t?t.p(m,k):(t=i[e]=n[e](m),t.c()),G(t,1),t.m(s.parentNode,s)),m[4]?d?d.p(m,k):(d=Me(m),d.c(),d.m(l.parentNode,l)):d&&(d.d(1),d=null)},i(m){c||(G(t),c=!0)},o(m){J(t),c=!1},d(m){i[e].d(m),m&&K(s),d&&d.d(m),m&&K(l)}}}function Ut(r,e,t){let{stores:s}=e,{page:l}=e,{components:c}=e,{form:n}=e,{data_0:i=null}=e,{data_1:_=null}=e;rt(s.page.notify);let d=!1,m=!1,k=null;return Se(()=>{const R=s.page.subscribe(()=>{d&&(t(5,m=!0),t(6,k=document.title||"untitled page"))});return t(4,d=!0),R}),r.$$set=R=>{"stores"in R&&t(7,s=R.stores),"page"in R&&t(8,l=R.page),"components"in R&&t(0,c=R.components),"form"in R&&t(1,n=R.form),"data_0"in R&&t(2,i=R.data_0),"data_1"in R&&t(3,_=R.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(l)},[c,n,i,_,d,m,k,s,l]}class jt extends Qe{constructor(e){super(),xe(this,e,Ut,Pt,et,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Nt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Tt=function(r,e){return new URL(r,e).href},We={},H=function(e,t,s){if(!t||t.length===0)return e();const l=document.getElementsByTagName("link");return Promise.all(t.map(c=>{if(c=Tt(c,s),c in We)return;We[c]=!0;const n=c.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(!!s)for(let m=l.length-1;m>=0;m--){const k=l[m];if(k.href===c&&(!n||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${i}`))return;const d=document.createElement("link");if(d.rel=n?"stylesheet":Nt,n||(d.as="script",d.crossOrigin=""),d.href=c,document.head.appendChild(d),n)return new Promise((m,k)=>{d.addEventListener("load",m),d.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>e())},Dt={},_e=[()=>H(()=>import("./chunks/0-d47c341c.js"),["./chunks/0-d47c341c.js","./chunks/_layout-1daba58d.js","./components/pages/_layout.svelte-01ffa24a.js","./chunks/index-ccb60fdc.js","./assets/_layout-f10944c0.css"],import.meta.url),()=>H(()=>import("./chunks/1-6aef4ee0.js"),["./chunks/1-6aef4ee0.js","./components/error.svelte-c77ca1d0.js","./chunks/index-ccb60fdc.js","./chunks/singletons-59d9cc08.js"],import.meta.url),()=>H(()=>import("./chunks/2-57730c01.js"),["./chunks/2-57730c01.js","./components/pages/_page.svelte-22badebc.js","./chunks/index-ccb60fdc.js"],import.meta.url),()=>H(()=>import("./chunks/3-5f6bc430.js"),["./chunks/3-5f6bc430.js","./components/pages/commissions/_page.svelte-c15a78dd.js","./chunks/index-ccb60fdc.js"],import.meta.url),()=>H(()=>import("./chunks/4-a9598f79.js"),["./chunks/4-a9598f79.js","./components/pages/faithful/_page.svelte-f6527725.js","./chunks/index-ccb60fdc.js"],import.meta.url),()=>H(()=>import("./chunks/5-5582cc1c.js"),["./chunks/5-5582cc1c.js","./components/pages/gamble/_page.svelte-e1eba3b9.js","./chunks/index-ccb60fdc.js","./assets/_page-a455a398.css"],import.meta.url),()=>H(()=>import("./chunks/6-af2b44d9.js"),["./chunks/6-af2b44d9.js","./components/pages/spunch-bot/_page.svelte-882ea2f0.js","./chunks/index-ccb60fdc.js"],import.meta.url)],Vt=[],Bt={"/":[2],"/commissions":[3],"/faithful":[4],"/gamble":[5],"/spunch-bot":[6]},qt={handleError:({error:r})=>{console.error(r)}};class $e{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,t){this.status=e,this.location=t}}async function Ct(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,l])=>[s,await l])));return r}const Ft=-1,Jt=-2,Gt=-3,Kt=-4,zt=-5,Mt=-6;function Ht(r,e){if(typeof r=="number")return l(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const t=r,s=Array(t.length);function l(c,n=!1){if(c===Ft)return;if(c===Gt)return NaN;if(c===Kt)return 1/0;if(c===zt)return-1/0;if(c===Mt)return-0;if(n)throw new Error("Invalid input");if(c in s)return s[c];const i=t[c];if(!i||typeof i!="object")s[c]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const _=i[0],d=e==null?void 0:e[_];if(d)return s[c]=d(l(i[1]));switch(_){case"Date":s[c]=new Date(i[1]);break;case"Set":const m=new Set;s[c]=m;for(let O=1;O<i.length;O+=1)m.add(l(i[O]));break;case"Map":const k=new Map;s[c]=k;for(let O=1;O<i.length;O+=2)k.set(l(i[O]),l(i[O+1]));break;case"RegExp":s[c]=new RegExp(i[1],i[2]);break;case"Object":s[c]=Object(i[1]);break;case"BigInt":s[c]=BigInt(i[1]);break;case"null":const R=Object.create(null);s[c]=R;for(let O=1;O<i.length;O+=2)R[i[O]]=l(i[O+1]);break;default:throw new Error(`Unknown type ${_}`)}}else{const _=new Array(i.length);s[c]=_;for(let d=0;d<i.length;d+=1){const m=i[d];m!==Jt&&(_[d]=l(m))}}else{const _={};s[c]=_;for(const d in i){const m=i[d];_[d]=l(m)}}return s[c]}return l(0)}const Ze="sveltekit:scroll",C="sveltekit:index",fe=$t(_e,Vt,Bt,Dt),Ae=_e[0],Ie=_e[1];Ae();Ie();let se={};try{se=JSON.parse(sessionStorage[Ze])}catch{}function Re(r){se[r]=Le()}function Wt({target:r,base:e,trailing_slash:t}){var Ce;const s=[];let l=null;const c={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},i=!1,_=!1,d=!0,m=!1,k=!1,R=!1,O=!1,z,A=(Ce=history.state)==null?void 0:Ce[C];A||(A=Date.now(),history.replaceState({...history.state,[C]:A},"",location.href));const B=se[A];B&&(history.scrollRestoration="manual",scrollTo(B.x,B.y));let D,te,Y;async function ie(){Y=Y||Promise.resolve(),await Y,Y=null;const a=new URL(location.href),f=be(a,!0);l=null,await Ue(f,a,[])}async function ne(a,{noScroll:f=!1,replaceState:p=!1,keepFocus:o=!1,state:u={},invalidateAll:h=!1},g,b){return typeof a=="string"&&(a=new URL(a,Ke(document))),ve({url:a,scroll:f?Le():null,keepfocus:o,redirect_chain:g,details:{state:u,replaceState:p},nav_token:b,accepted:()=>{h&&(O=!0)},blocked:()=>{},type:"goto"})}async function Pe(a){const f=be(a,!1);if(!f)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return l={id:f.id,promise:Te(f)},l.promise}async function Ue(a,f,p,o,u={},h){var b,v;te=u;let g=a&&await Te(a);if(g||(g=await qe(f,{id:null},oe(new Error(`Not found: ${f.pathname}`),{url:f,params:{},route:{id:null}}),404)),f=(a==null?void 0:a.url)||f,te!==u)return!1;if(g.type==="redirect")if(p.length>10||p.includes(f.pathname))g=await le({status:500,error:oe(new Error("Redirect loop"),{url:f,params:{},route:{id:null}}),url:f,route:{id:null}});else return ne(new URL(g.location,f).href,{},[...p,f.pathname],u),!1;else((v=(b=g.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await M.updated.check()&&await ce(f);if(s.length=0,O=!1,m=!0,o&&o.details){const{details:w}=o,y=w.replaceState?0:1;w.state[C]=A+=y,history[w.replaceState?"replaceState":"pushState"](w.state,"",f)}if(l=null,_){n=g.state,g.props.page&&(g.props.page.url=f);const w=pe();z.$set(g.props),w()}else je(g);if(o){const{scroll:w,keepfocus:y}=o;if(!y){const S=document.body,U=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),U!==null?S.setAttribute("tabindex",U):S.removeAttribute("tabindex")}if(await Ge(),d){const S=f.hash&&document.getElementById(f.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await Ge();d=!0,g.props.page&&(D=g.props.page),h&&h(),m=!1}function je(a){var u,h;n=a.state;const f=document.querySelector("style[data-sveltekit]");f&&f.remove(),D=a.props.page;const p=pe();z=new jt({target:r,props:{...a.props,stores:M},hydrate:!0}),p();const o={from:null,to:ue("to",{params:n.params,route:{id:(h=(u=n.route)==null?void 0:u.id)!=null?h:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};c.after_navigate.forEach(g=>g(o)),_=!0}async function re({url:a,params:f,branch:p,status:o,error:u,route:h,form:g}){var U;const b=p.filter(Boolean),v={type:"loaded",state:{url:a,params:f,branch:p,error:u,route:h},props:{components:b.map($=>$.node.component)}};g!==void 0&&(v.props.form=g);let w={},y=!D;for(let $=0;$<b.length;$+=1){const N=b[$];w={...w,...N.data},(y||!n.branch.some(T=>T===N))&&(v.props[`data_${$}`]=w,y=y||Object.keys((U=N.data)!=null?U:{}).length>0)}if(y||(y=Object.keys(D.data).length!==Object.keys(w).length),!n.url||a.href!==n.url.href||n.error!==u||g!==void 0||y){v.props.page={error:u,params:f,route:h,status:o,url:a,form:g,data:y?w:D.data};const $=(N,T)=>{Object.defineProperty(v.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${T}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return v}async function we({loader:a,parent:f,url:p,params:o,route:u,server_data_node:h}){var w,y,S,U,$;let g=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await a();if((w=v.shared)!=null&&w.load){let N=function(...L){for(const V of L){const{href:E}=new URL(V,p);b.dependencies.add(E)}};const T={route:{get id(){return b.route=!0,u.id}},params:new Proxy(o,{get:(L,V)=>(b.params.add(V),L[V])}),data:(y=h==null?void 0:h.data)!=null?y:null,url:mt(p,()=>{b.url=!0}),async fetch(L,V){let E;L instanceof Request?(E=L.url,V={body:L.method==="GET"||L.method==="HEAD"?void 0:await L.blob(),cache:L.cache,credentials:L.credentials,headers:L.headers,integrity:L.integrity,keepalive:L.keepalive,method:L.method,mode:L.mode,redirect:L.redirect,referrer:L.referrer,referrerPolicy:L.referrerPolicy,signal:L.signal,...V}):E=L;const I=new URL(E,p).href;return N(I),_?vt(I,V):bt(E,I,V)},setHeaders:()=>{},depends:N,parent(){return b.parent=!0,f()}};Object.defineProperties(T,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),g=(S=await v.shared.load.call(null,T))!=null?S:null,g=g?await Ct(g):null}return{node:v,loader:a,server:h,shared:(U=v.shared)!=null&&U.load?{type:"data",data:g,uses:b}:null,data:($=g!=null?g:h==null?void 0:h.data)!=null?$:null}}function Ne(a,f,p,o,u){if(O)return!0;if(!o)return!1;if(o.parent&&a||o.route&&f||o.url&&p)return!0;for(const h of o.params)if(u[h]!==n.params[h])return!0;for(const h of o.dependencies)if(s.some(g=>g(new URL(h))))return!0;return!1}function ye(a,f){var p,o;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((o=a.uses.params)!=null?o:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&f!=null?f:null}async function Te({id:a,invalidating:f,url:p,params:o,route:u}){var V;if((l==null?void 0:l.id)===a)return l.promise;const{errors:h,layouts:g,leaf:b}=u,v=[...g,b];h.forEach(E=>E==null?void 0:E().catch(()=>{})),v.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let w=null;const y=n.url?a!==n.url.pathname+n.url.search:!1,S=n.route?a!==n.route.id:!1,U=v.reduce((E,I,j)=>{var ae;const P=n.branch[j],X=!!(I!=null&&I[0])&&((P==null?void 0:P.loader)!==I[1]||Ne(E.some(Boolean),S,y,(ae=P.server)==null?void 0:ae.uses,o));return E.push(X),E},[]);if(U.some(Boolean)){try{w=await Xe(p,U)}catch(E){return le({status:500,error:oe(E,{url:p,params:o,route:{id:u.id}}),url:p,route:u})}if(w.type==="redirect")return w}const $=w==null?void 0:w.nodes;let N=!1;const T=v.map(async(E,I)=>{var ae;if(!E)return;const j=n.branch[I],P=$==null?void 0:$[I];if((!P||P.type==="skip")&&E[1]===(j==null?void 0:j.loader)&&!Ne(N,S,y,(ae=j.shared)==null?void 0:ae.uses,o))return j;if(N=!0,(P==null?void 0:P.type)==="error")throw P;return we({loader:E[1],url:p,params:o,route:u,parent:async()=>{var Je;const Fe={};for(let Ee=0;Ee<I;Ee+=1)Object.assign(Fe,(Je=await T[Ee])==null?void 0:Je.data);return Fe},server_data_node:ye(P===void 0&&E[0]?{type:"skip"}:P!=null?P:null,j==null?void 0:j.server)})});for(const E of T)E.catch(()=>{});const L=[];for(let E=0;E<v.length;E+=1)if(v[E])try{L.push(await T[E])}catch(I){if(I instanceof Ye)return{type:"redirect",location:I.location};let j=500,P;$!=null&&$.includes(I)?(j=(V=I.status)!=null?V:j,P=I.error):I instanceof $e?(j=I.status,P=I.body):P=oe(I,{params:o,url:p,route:{id:u.id}});const X=await De(E,L,h);return X?await re({url:p,params:o,branch:L.slice(0,X.idx).concat(X.node),status:j,error:P,route:u}):await qe(p,{id:u.id},P,j)}else L.push(void 0);return await re({url:p,params:o,branch:L,status:200,error:null,route:u,form:f?void 0:null})}async function De(a,f,p){for(;a--;)if(p[a]){let o=a;for(;!f[o];)o-=1;try{return{idx:o+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function le({status:a,error:f,url:p,route:o}){var w;const u={},h=await Ae();let g=null;if(h.server)try{const y=await Xe(p,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;g=(w=y.nodes[0])!=null?w:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||i)&&await ce(p)}const b=await we({loader:Ae,url:p,params:u,route:o,parent:()=>Promise.resolve({}),server_data_node:ye(g)}),v={node:await Ie(),loader:Ie,shared:null,server:null,data:null};return await re({url:p,params:u,branch:[b,v],status:a,error:f,route:null})}function be(a,f){if(Ve(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const o of fe){const u=o.exec(p);if(u){const h=new URL(a.origin+pt(a.pathname,t)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:f,route:o,params:dt(u),url:h}}}}function Ve(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Be({url:a,type:f,intent:p,delta:o}){var b,v,w,y,S;let u=!1;const h={from:ue("from",{params:n.params,route:{id:(v=(b=n.route)==null?void 0:b.id)!=null?v:null},url:n.url}),to:ue("to",{params:(w=p==null?void 0:p.params)!=null?w:null,route:{id:(S=(y=p==null?void 0:p.route)==null?void 0:y.id)!=null?S:null},url:a}),willUnload:!p,type:f};o!==void 0&&(h.delta=o);const g={...h,cancel:()=>{u=!0}};return c.before_navigate.forEach(U=>U(g)),u?null:h}async function ve({url:a,scroll:f,keepfocus:p,redirect_chain:o,details:u,type:h,delta:g,nav_token:b,accepted:v,blocked:w}){const y=be(a,!1),S=Be({url:a,type:h,delta:g,intent:y});if(!S){w();return}Re(A),v(),k=!0,_&&M.navigating.set(S),await Ue(y,a,o,{scroll:f,keepfocus:p,details:u},b,()=>{k=!1,c.after_navigate.forEach(U=>U(S)),M.navigating.set(null)})}async function qe(a,f,p,o){return a.origin===location.origin&&a.pathname===location.pathname&&!i?await le({status:o,error:p,url:a,route:f}):await ce(a)}function ce(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Se(()=>(c.after_navigate.push(a),()=>{const f=c.after_navigate.indexOf(a);c.after_navigate.splice(f,1)}))},before_navigate:a=>{Se(()=>(c.before_navigate.push(a),()=>{const f=c.before_navigate.indexOf(a);c.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(m||!_)&&(d=!1)},goto:(a,f={})=>{if("keepfocus"in f)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in f)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ne(a,f,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:f}=new URL(a,location.href);s.push(p=>p.href===f)}return ie()},invalidateAll:()=>(O=!0,ie()),prefetch:async a=>{const f=new URL(a,Ke(document));await Pe(f)},prefetch_routes:async a=>{const p=(a?fe.filter(o=>a.some(u=>o.exec(u))):fe).map(o=>Promise.all([...o.layouts,o.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const f=new URL(location.href),{branch:p,route:o}=n;if(!o)return;const u=await De(n.branch.length,p,o.errors);if(u){const h=await re({url:f,params:n.params,branch:p.slice(0,u.idx).concat(u.node),status:500,error:a.error,route:o});n=h.state;const g=pe();z.$set(h.props),g()}}else if(a.type==="redirect")ne(a.location,{invalidateAll:!0},[]);else{const f={form:a.data,page:{...D,form:a.data,status:a.status}},p=pe();z.$set(f),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var h,g;let u=!1;if(!k){const b={from:ue("from",{params:n.params,route:{id:(g=(h=n.route)==null?void 0:h.id)!=null?g:null},url:n.url}),to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};c.before_navigate.forEach(v=>v(b))}u?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(A);try{sessionStorage[Ze]=JSON.stringify(se)}catch{}}});const a=o=>{const{url:u,options:h}=ze(o);if(u&&h.prefetch){if(Ve(u))return;Pe(u)}};let f;const p=o=>{clearTimeout(f),f=setTimeout(()=>{var u;(u=o.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:u,url:h,options:g}=ze(o);if(!u||!h)return;const b=u instanceof SVGAElement;if(!b&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:")||u.hasAttribute("download"))return;if((u.getAttribute("rel")||"").split(/\s+/).includes("external")||g.reload||(b?u.target.baseVal:u.target)){Be({url:h,type:"link"})||o.preventDefault(),k=!0;return}const[w,y]=h.href.split("#");if(y!==void 0&&w===location.href.split("#")[0]){R=!0,Re(A),n.url=h,M.page.set({...D,url:h}),M.page.notify();return}ve({url:h,scroll:g.noscroll?Le():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{if(o.state){if(o.state[C]===A)return;const u=o.state[C]-A;ve({url:new URL(location.href),scroll:se[o.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=o.state[C]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[C]:++A},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&M.navigating.set(null)})},_hydrate:async({status:a,error:f,node_ids:p,params:o,route:u,data:h,form:g})=>{var w;i=!0;const b=new URL(location.href);let v;try{const y=p.map(async(S,U)=>{const $=h[U];return we({loader:_e[S],url:b,params:o,route:u,parent:async()=>{const N={};for(let T=0;T<U;T+=1)Object.assign(N,(await y[T]).data);return N},server_data_node:ye($)})});v=await re({url:b,params:o,branch:await Promise.all(y),status:a,error:f,form:g,route:(w=fe.find(({id:S})=>S===u.id))!=null?w:null})}catch(y){if(y instanceof Ye){await ce(new URL(y.location,location.href));return}v=await le({status:y instanceof $e?y.status:500,error:oe(y,{url:b,params:o,route:u}),url:b,route:u})}je(v)}}}async function Xe(r,e){var c;const t=new URL(r);t.pathname=wt(r.pathname);const s=await ge(t.href,{headers:{"x-sveltekit-invalidated":e.map(n=>n?"1":"").join(",")}}),l=await s.json();if(!s.ok)throw new Error(l);return(c=l.nodes)==null||c.forEach(n=>{var i,_;(n==null?void 0:n.type)==="data"&&(n.data=Ht(n.data),n.uses={dependencies:new Set((i=n.uses.dependencies)!=null?i:[]),params:new Set((_=n.uses.params)!=null?_:[]),parent:!!n.uses.parent,route:!!n.uses.route,url:!!n.uses.url})}),l}function oe(r,e){var t;return r instanceof $e?r.body:(t=qt.handleError({error:r,event:e}))!=null?t:{message:e.route.id!=null?"Internal Error":"Not Found"}}const Yt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ue(r,e){for(const t of Yt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function pe(){return()=>{}}async function Qt({env:r,hydrate:e,paths:t,target:s,trailing_slash:l}){ft(t);const c=Wt({target:s,base:t.base,trailing_slash:l});ut({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Qt as start};
