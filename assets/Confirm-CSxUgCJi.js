import{r as T,e as y,u as Ee,j as G}from"./index-DnEG1aiu.js";const Te="_wrapper_hldsh_1",be="_box_hldsh_8",de={wrapper:Te,box:be};function fe(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=fe(e[t]))&&(s&&(s+=" "),s+=n)}else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}function j(){for(var e,t,n=0,s="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=fe(e))&&(s&&(s+=" "),s+=t);return s}const K=e=>typeof e=="number"&&!isNaN(e),V=e=>typeof e=="string",P=e=>typeof e=="function",oe=e=>V(e)||P(e)?e:null,le=e=>T.isValidElement(e)||V(e)||P(e)||K(e);function _e(e,t,n){n===void 0&&(n=300);const{scrollHeight:s,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=s+"px",a.transition=`all ${n}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)})})}function ae(e){let{enter:t,exit:n,appendPosition:s=!1,collapse:a=!0,collapseDuration:c=300}=e;return function(o){let{children:E,position:f,preventExitTransition:I,done:u,nodeRef:C,isIn:_,playToast:w}=o;const m=s?`${t}--${f}`:t,d=s?`${n}--${f}`:n,b=T.useRef(0);return T.useLayoutEffect(()=>{const p=C.current,l=m.split(" "),r=g=>{g.target===C.current&&(w(),p.removeEventListener("animationend",r),p.removeEventListener("animationcancel",r),b.current===0&&g.type!=="animationcancel"&&p.classList.remove(...l))};p.classList.add(...l),p.addEventListener("animationend",r),p.addEventListener("animationcancel",r)},[]),T.useEffect(()=>{const p=C.current,l=()=>{p.removeEventListener("animationend",l),a?_e(p,u,c):u()};_||(I?l():(b.current=1,p.className+=` ${d}`,p.addEventListener("animationend",l)))},[_]),y.createElement(y.Fragment,null,E)}}function ue(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const N=new Map;let Z=[];const ce=new Set,Ie=e=>ce.forEach(t=>t(e)),me=()=>N.size>0;function ge(e,t){var n;if(t)return!((n=N.get(t))==null||!n.isToastActive(e));let s=!1;return N.forEach(a=>{a.isToastActive(e)&&(s=!0)}),s}function ye(e,t){le(e)&&(me()||Z.push({content:e,options:t}),N.forEach(n=>{n.buildToast(e,t)}))}function pe(e,t){N.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function Ce(e){const{subscribe:t,getSnapshot:n,setProps:s}=T.useRef(function(c){const o=c.containerId||1;return{subscribe(E){const f=function(u,C,_){let w=1,m=0,d=[],b=[],p=[],l=C;const r=new Map,g=new Set,O=()=>{p=Array.from(r.values()),g.forEach(i=>i())},B=i=>{b=i==null?[]:b.filter(h=>h!==i),O()},L=i=>{const{toastId:h,onOpen:x,updateId:S,children:D}=i.props,q=S==null;i.staleId&&r.delete(i.staleId),r.set(h,i),b=[...b,i.props.toastId].filter(z=>z!==i.staleId),O(),_(ue(i,q?"added":"updated")),q&&P(x)&&x(T.isValidElement(D)&&D.props)};return{id:u,props:l,observe:i=>(g.add(i),()=>g.delete(i)),toggle:(i,h)=>{r.forEach(x=>{h!=null&&h!==x.props.toastId||P(x.toggle)&&x.toggle(i)})},removeToast:B,toasts:r,clearQueue:()=>{m-=d.length,d=[]},buildToast:(i,h)=>{if((A=>{let{containerId:k,toastId:$,updateId:M}=A;const X=k?k!==u:u!==1,U=r.has($)&&M==null;return X||U})(h))return;const{toastId:x,updateId:S,data:D,staleId:q,delay:z}=h,Y=()=>{B(x)},ee=S==null;ee&&m++;const R={...l,style:l.toastStyle,key:w++,...Object.fromEntries(Object.entries(h).filter(A=>{let[k,$]=A;return $!=null})),toastId:x,updateId:S,data:D,closeToast:Y,isIn:!1,className:oe(h.className||l.toastClassName),bodyClassName:oe(h.bodyClassName||l.bodyClassName),progressClassName:oe(h.progressClassName||l.progressClassName),autoClose:!h.isLoading&&(H=h.autoClose,Q=l.autoClose,H===!1||K(H)&&H>0?H:Q),deleteToast(){const A=r.get(x),{onClose:k,children:$}=A.props;P(k)&&k(T.isValidElement($)&&$.props),_(ue(A,"removed")),r.delete(x),m--,m<0&&(m=0),d.length>0?L(d.shift()):O()}};var H,Q;R.closeButton=l.closeButton,h.closeButton===!1||le(h.closeButton)?R.closeButton=h.closeButton:h.closeButton===!0&&(R.closeButton=!le(l.closeButton)||l.closeButton);let W=i;T.isValidElement(i)&&!V(i.type)?W=T.cloneElement(i,{closeToast:Y,toastProps:R,data:D}):P(i)&&(W=i({closeToast:Y,toastProps:R,data:D}));const F={content:W,props:R,staleId:q};l.limit&&l.limit>0&&m>l.limit&&ee?d.push(F):K(z)?setTimeout(()=>{L(F)},z):L(F)},setProps(i){l=i},setToggle:(i,h)=>{r.get(i).toggle=h},isToastActive:i=>b.some(h=>h===i),getSnapshot:()=>l.newestOnTop?p.reverse():p}}(o,c,Ie);N.set(o,f);const I=f.observe(E);return Z.forEach(u=>ye(u.content,u.options)),Z=[],()=>{I(),N.delete(o)}},setProps(E){var f;(f=N.get(o))==null||f.setProps(E)},getSnapshot(){var E;return(E=N.get(o))==null?void 0:E.getSnapshot()}}}(e)).current;s(e);const a=T.useSyncExternalStore(t,n,n);return{getToastToRender:function(c){if(!a)return[];const o=new Map;return a.forEach(E=>{const{position:f}=E.props;o.has(f)||o.set(f,[]),o.get(f).push(E)}),Array.from(o,E=>c(E[0],E[1]))},isToastActive:ge,count:a==null?void 0:a.length}}function Le(e){const[t,n]=T.useState(!1),[s,a]=T.useState(!1),c=T.useRef(null),o=T.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:E,pauseOnHover:f,closeToast:I,onClick:u,closeOnClick:C}=e;var _,w;function m(){n(!0)}function d(){n(!1)}function b(r){const g=c.current;o.canDrag&&g&&(o.didMove=!0,t&&d(),o.delta=e.draggableDirection==="x"?r.clientX-o.start:r.clientY-o.start,o.start!==r.clientX&&(o.canCloseOnClick=!1),g.style.transform=`translate3d(${e.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,g.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function p(){document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",p);const r=c.current;if(o.canDrag&&o.didMove&&r){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return a(!0),e.closeToast(),void e.collapseAll();r.style.transition="transform 0.2s, opacity 0.2s",r.style.removeProperty("transform"),r.style.removeProperty("opacity")}}(w=N.get((_={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||w.setToggle(_.id,_.fn),T.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||d(),window.addEventListener("focus",m),window.addEventListener("blur",d),()=>{window.removeEventListener("focus",m),window.removeEventListener("blur",d)}},[e.pauseOnFocusLoss]);const l={onPointerDown:function(r){if(e.draggable===!0||e.draggable===r.pointerType){o.didMove=!1,document.addEventListener("pointermove",b),document.addEventListener("pointerup",p);const g=c.current;o.canCloseOnClick=!0,o.canDrag=!0,g.style.transition="none",e.draggableDirection==="x"?(o.start=r.clientX,o.removalDistance=g.offsetWidth*(e.draggablePercent/100)):(o.start=r.clientY,o.removalDistance=g.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(r){const{top:g,bottom:O,left:B,right:L}=c.current.getBoundingClientRect();r.nativeEvent.type!=="touchend"&&e.pauseOnHover&&r.clientX>=B&&r.clientX<=L&&r.clientY>=g&&r.clientY<=O?d():m()}};return E&&f&&(l.onMouseEnter=d,e.stacked||(l.onMouseLeave=m)),C&&(l.onClick=r=>{u&&u(r),o.canCloseOnClick&&I()}),{playToast:m,pauseToast:d,isRunning:t,preventExitTransition:s,toastRef:c,eventHandlers:l}}function we(e){let{delay:t,isRunning:n,closeToast:s,type:a="default",hide:c,className:o,style:E,controlledProgress:f,progress:I,rtl:u,isIn:C,theme:_}=e;const w=c||f&&I===0,m={...E,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};f&&(m.transform=`scaleX(${I})`);const d=j("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${_}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":u}),b=P(o)?o({rtl:u,type:a,defaultClassName:d}):j(d,o),p={[f&&I>=1?"onTransitionEnd":"onAnimationEnd"]:f&&I<1?null:()=>{C&&s()}};return y.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":w},y.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${_} Toastify__progress-bar--${a}`}),y.createElement("div",{role:"progressbar","aria-hidden":w?"true":"false","aria-label":"notification timer",className:b,style:m,...p}))}let Ne=1;const ve=()=>""+Ne++;function xe(e){return e&&(V(e.toastId)||K(e.toastId))?e.toastId:ve()}function J(e,t){return ye(e,t),t.toastId}function se(e,t){return{...t,type:t&&t.type||e,toastId:xe(t)}}function te(e){return(t,n)=>J(t,se(e,n))}function v(e,t){return J(e,se("default",t))}v.loading=(e,t)=>J(e,se("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),v.promise=function(e,t,n){let s,{pending:a,error:c,success:o}=t;a&&(s=V(a)?v.loading(a,n):v.loading(a.render,{...n,...a}));const E={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},f=(u,C,_)=>{if(C==null)return void v.dismiss(s);const w={type:u,...E,...n,data:_},m=V(C)?{render:C}:C;return s?v.update(s,{...w,...m}):v(m.render,{...w,...m}),_},I=P(e)?e():e;return I.then(u=>f("success",o,u)).catch(u=>f("error",c,u)),I},v.success=te("success"),v.info=te("info"),v.error=te("error"),v.warning=te("warning"),v.warn=v.warning,v.dark=(e,t)=>J(e,se("default",{theme:"dark",...t})),v.dismiss=function(e){(function(t){var n;if(me()){if(t==null||V(n=t)||K(n))N.forEach(a=>{a.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){var s;(s=N.get(t.containerId))!=null&&s.removeToast(t.id)||N.forEach(a=>{a.removeToast(t.id)})}}else Z=Z.filter(a=>t!=null&&a.options.toastId!==t)})(e)},v.clearWaitingQueue=function(e){e===void 0&&(e={}),N.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},v.isActive=ge,v.update=function(e,t){t===void 0&&(t={});const n=((s,a)=>{var c;let{containerId:o}=a;return(c=N.get(o||1))==null?void 0:c.toasts.get(s)})(e,t);if(n){const{props:s,content:a}=n,c={delay:100,...s,...t,toastId:t.toastId||e,updateId:ve()};c.toastId!==e&&(c.staleId=e);const o=c.render||a;delete c.render,J(o,c)}},v.done=e=>{v.update(e,{progress:1})},v.onChange=function(e){return ce.add(e),()=>{ce.delete(e)}},v.play=e=>pe(!0,e),v.pause=e=>pe(!1,e);const Pe=typeof window<"u"?T.useLayoutEffect:T.useEffect,ne=e=>{let{theme:t,type:n,isLoading:s,...a}=e;return y.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...a})},ie={info:function(e){return y.createElement(ne,{...e},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return y.createElement(ne,{...e},y.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return y.createElement(ne,{...e},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return y.createElement(ne,{...e},y.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return y.createElement("div",{className:"Toastify__spinner"})}},ke=e=>{const{isRunning:t,preventExitTransition:n,toastRef:s,eventHandlers:a,playToast:c}=Le(e),{closeButton:o,children:E,autoClose:f,onClick:I,type:u,hideProgressBar:C,closeToast:_,transition:w,position:m,className:d,style:b,bodyClassName:p,bodyStyle:l,progressClassName:r,progressStyle:g,updateId:O,role:B,progress:L,rtl:i,toastId:h,deleteToast:x,isIn:S,isLoading:D,closeOnClick:q,theme:z}=e,Y=j("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":i},{"Toastify__toast--close-on-click":q}),ee=P(d)?d({rtl:i,position:m,type:u,defaultClassName:Y}):j(Y,d),R=function(F){let{theme:A,type:k,isLoading:$,icon:M}=F,X=null;const U={theme:A,type:k};return M===!1||(P(M)?X=M({...U,isLoading:$}):T.isValidElement(M)?X=T.cloneElement(M,U):$?X=ie.spinner():(he=>he in ie)(k)&&(X=ie[k](U))),X}(e),H=!!L||!f,Q={closeToast:_,type:u,theme:z};let W=null;return o===!1||(W=P(o)?o(Q):T.isValidElement(o)?T.cloneElement(o,Q):function(F){let{closeToast:A,theme:k,ariaLabel:$="close"}=F;return y.createElement("button",{className:`Toastify__close-button Toastify__close-button--${k}`,type:"button",onClick:M=>{M.stopPropagation(),A(M)},"aria-label":$},y.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},y.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(Q)),y.createElement(w,{isIn:S,done:x,position:m,preventExitTransition:n,nodeRef:s,playToast:c},y.createElement("div",{id:h,onClick:I,"data-in":S,className:ee,...a,style:b,ref:s},y.createElement("div",{...S&&{role:B},className:P(p)?p({type:u}):j("Toastify__toast-body",p),style:l},R!=null&&y.createElement("div",{className:j("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},R),y.createElement("div",null,E)),W,y.createElement(we,{...O&&!H?{key:`pb-${O}`}:{},rtl:i,theme:z,delay:f,isRunning:t,isIn:S,closeToast:_,hide:C,type:u,style:g,className:r,controlledProgress:H,progress:L||0})))},re=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},$e=ae(re("bounce",!0));ae(re("slide",!0));ae(re("zoom"));ae(re("flip"));const Oe={position:"top-right",transition:$e,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Ae(e){let t={...Oe,...e};const n=e.stacked,[s,a]=T.useState(!0),c=T.useRef(null),{getToastToRender:o,isToastActive:E,count:f}=Ce(t),{className:I,style:u,rtl:C,containerId:_}=t;function w(d){const b=j("Toastify__toast-container",`Toastify__toast-container--${d}`,{"Toastify__toast-container--rtl":C});return P(I)?I({position:d,rtl:C,defaultClassName:b}):j(b,oe(I))}function m(){n&&(a(!0),v.play())}return Pe(()=>{if(n){var d;const b=c.current.querySelectorAll('[data-in="true"]'),p=12,l=(d=t.position)==null?void 0:d.includes("top");let r=0,g=0;Array.from(b).reverse().forEach((O,B)=>{const L=O;L.classList.add("Toastify__toast--stacked"),B>0&&(L.dataset.collapsed=`${s}`),L.dataset.pos||(L.dataset.pos=l?"top":"bot");const i=r*(s?.2:1)+(s?0:p*B);L.style.setProperty("--y",`${l?i:-1*i}px`),L.style.setProperty("--g",`${p}`),L.style.setProperty("--s",""+(1-(s?g:0))),r+=L.offsetHeight,g+=.025})}},[s,f,n]),y.createElement("div",{ref:c,className:"Toastify",id:_,onMouseEnter:()=>{n&&(a(!1),v.pause())},onMouseLeave:m},o((d,b)=>{const p=b.length?{...u}:{...u,pointerEvents:"none"};return y.createElement("div",{className:w(d),style:p,key:`container-${d}`},b.map(l=>{let{content:r,props:g}=l;return y.createElement(ke,{...g,stacked:n,collapseAll:m,isIn:E(g.toastId,g.containerId),style:g.style,key:`toast-${g.key}`},r)}))}))}function Be(){const[e,t]=T.useState(""),n=()=>v.error("Falsches Passwort",{position:"bottom-center",autoClose:600,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),s=Ee(),a=()=>{if(e=="$firebasePass"){localStorage.setItem("auth","true"),s("/");return}n()};return G.jsxs("main",{className:de.wrapper,children:[G.jsxs("div",{className:de.box,children:[G.jsx("input",{onChange:c=>t(c.target.value),placeholder:"password",type:"password"}),G.jsx("button",{onClick:()=>a(),children:"Login"})]}),G.jsx(Ae,{position:"bottom-right",autoClose:600,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored",stacked:!0})]})}export{Be as default};