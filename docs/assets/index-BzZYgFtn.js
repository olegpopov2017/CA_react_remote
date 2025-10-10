(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var lh={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function Oy(){if(E_)return Oo;E_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:f,ref:o!==void 0?o:null,props:c}}return Oo.Fragment=t,Oo.jsx=n,Oo.jsxs=n,Oo}var T_;function Py(){return T_||(T_=1,lh.exports=Oy()),lh.exports}var xt=Py(),ch={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function zy(){if(b_)return fe;b_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function S(N,et,Rt){this.props=N,this.context=et,this.refs=b,this.updater=Rt||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,et){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,et,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=S.prototype;function O(N,et,Rt){this.props=N,this.context=et,this.refs=b,this.updater=Rt||y}var U=O.prototype=new x;U.constructor=O,E(U,S.prototype),U.isPureReactComponent=!0;var D=Array.isArray,B={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function z(N,et,Rt,Ut,q,gt){return Rt=gt.ref,{$$typeof:r,type:N,key:et,ref:Rt!==void 0?Rt:null,props:gt}}function G(N,et){return z(N.type,et,void 0,void 0,void 0,N.props)}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function A(N){var et={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Rt){return et[Rt]})}var F=/\/+/g;function ct(N,et){return typeof N=="object"&&N!==null&&N.key!=null?A(""+N.key):et.toString(36)}function st(){}function ft(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(st,st):(N.status="pending",N.then(function(et){N.status==="pending"&&(N.status="fulfilled",N.value=et)},function(et){N.status==="pending"&&(N.status="rejected",N.reason=et)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function lt(N,et,Rt,Ut,q){var gt=typeof N;(gt==="undefined"||gt==="boolean")&&(N=null);var Et=!1;if(N===null)Et=!0;else switch(gt){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(N.$$typeof){case r:case t:Et=!0;break;case g:return Et=N._init,lt(Et(N._payload),et,Rt,Ut,q)}}if(Et)return q=q(N),Et=Ut===""?"."+ct(N,0):Ut,D(q)?(Rt="",Et!=null&&(Rt=Et.replace(F,"$&/")+"/"),lt(q,et,Rt,"",function($t){return $t})):q!=null&&(R(q)&&(q=G(q,Rt+(q.key==null||N&&N.key===q.key?"":(""+q.key).replace(F,"$&/")+"/")+Et)),et.push(q)),1;Et=0;var Ct=Ut===""?".":Ut+":";if(D(N))for(var Lt=0;Lt<N.length;Lt++)Ut=N[Lt],gt=Ct+ct(Ut,Lt),Et+=lt(Ut,et,Rt,gt,q);else if(Lt=v(N),typeof Lt=="function")for(N=Lt.call(N),Lt=0;!(Ut=N.next()).done;)Ut=Ut.value,gt=Ct+ct(Ut,Lt++),Et+=lt(Ut,et,Rt,gt,q);else if(gt==="object"){if(typeof N.then=="function")return lt(ft(N),et,Rt,Ut,q);throw et=String(N),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return Et}function V(N,et,Rt){if(N==null)return N;var Ut=[],q=0;return lt(N,Ut,"","",function(gt){return et.call(Rt,gt,q++)}),Ut}function nt(N){if(N._status===-1){var et=N._result;et=et(),et.then(function(Rt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Rt)},function(Rt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Rt)}),N._status===-1&&(N._status=0,N._result=et)}if(N._status===1)return N._result.default;throw N._result}var Z=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Tt(){}return fe.Children={map:V,forEach:function(N,et,Rt){V(N,function(){et.apply(this,arguments)},Rt)},count:function(N){var et=0;return V(N,function(){et++}),et},toArray:function(N){return V(N,function(et){return et})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},fe.Component=S,fe.Fragment=n,fe.Profiler=o,fe.PureComponent=O,fe.StrictMode=a,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,fe.act=function(){throw Error("act(...) is not supported in production builds of React.")},fe.cache=function(N){return function(){return N.apply(null,arguments)}},fe.cloneElement=function(N,et,Rt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ut=E({},N.props),q=N.key,gt=void 0;if(et!=null)for(Et in et.ref!==void 0&&(gt=void 0),et.key!==void 0&&(q=""+et.key),et)!I.call(et,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&et.ref===void 0||(Ut[Et]=et[Et]);var Et=arguments.length-2;if(Et===1)Ut.children=Rt;else if(1<Et){for(var Ct=Array(Et),Lt=0;Lt<Et;Lt++)Ct[Lt]=arguments[Lt+2];Ut.children=Ct}return z(N.type,q,void 0,void 0,gt,Ut)},fe.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},fe.createElement=function(N,et,Rt){var Ut,q={},gt=null;if(et!=null)for(Ut in et.key!==void 0&&(gt=""+et.key),et)I.call(et,Ut)&&Ut!=="key"&&Ut!=="__self"&&Ut!=="__source"&&(q[Ut]=et[Ut]);var Et=arguments.length-2;if(Et===1)q.children=Rt;else if(1<Et){for(var Ct=Array(Et),Lt=0;Lt<Et;Lt++)Ct[Lt]=arguments[Lt+2];q.children=Ct}if(N&&N.defaultProps)for(Ut in Et=N.defaultProps,Et)q[Ut]===void 0&&(q[Ut]=Et[Ut]);return z(N,gt,void 0,void 0,null,q)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(N){return{$$typeof:h,render:N}},fe.isValidElement=R,fe.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:nt}},fe.memo=function(N,et){return{$$typeof:d,type:N,compare:et===void 0?null:et}},fe.startTransition=function(N){var et=B.T,Rt={};B.T=Rt;try{var Ut=N(),q=B.S;q!==null&&q(Rt,Ut),typeof Ut=="object"&&Ut!==null&&typeof Ut.then=="function"&&Ut.then(Tt,Z)}catch(gt){Z(gt)}finally{B.T=et}},fe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},fe.use=function(N){return B.H.use(N)},fe.useActionState=function(N,et,Rt){return B.H.useActionState(N,et,Rt)},fe.useCallback=function(N,et){return B.H.useCallback(N,et)},fe.useContext=function(N){return B.H.useContext(N)},fe.useDebugValue=function(){},fe.useDeferredValue=function(N,et){return B.H.useDeferredValue(N,et)},fe.useEffect=function(N,et){return B.H.useEffect(N,et)},fe.useId=function(){return B.H.useId()},fe.useImperativeHandle=function(N,et,Rt){return B.H.useImperativeHandle(N,et,Rt)},fe.useInsertionEffect=function(N,et){return B.H.useInsertionEffect(N,et)},fe.useLayoutEffect=function(N,et){return B.H.useLayoutEffect(N,et)},fe.useMemo=function(N,et){return B.H.useMemo(N,et)},fe.useOptimistic=function(N,et){return B.H.useOptimistic(N,et)},fe.useReducer=function(N,et,Rt){return B.H.useReducer(N,et,Rt)},fe.useRef=function(N){return B.H.useRef(N)},fe.useState=function(N){return B.H.useState(N)},fe.useSyncExternalStore=function(N,et,Rt){return B.H.useSyncExternalStore(N,et,Rt)},fe.useTransition=function(){return B.H.useTransition()},fe.version="19.0.0",fe}var A_;function Wd(){return A_||(A_=1,ch.exports=zy()),ch.exports}var pe=Wd(),uh={exports:{}},Po={},fh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function By(){return R_||(R_=1,function(r){function t(V,nt){var Z=V.length;V.push(nt);t:for(;0<Z;){var Tt=Z-1>>>1,N=V[Tt];if(0<o(N,nt))V[Tt]=nt,V[Z]=N,Z=Tt;else break t}}function n(V){return V.length===0?null:V[0]}function a(V){if(V.length===0)return null;var nt=V[0],Z=V.pop();if(Z!==nt){V[0]=Z;t:for(var Tt=0,N=V.length,et=N>>>1;Tt<et;){var Rt=2*(Tt+1)-1,Ut=V[Rt],q=Rt+1,gt=V[q];if(0>o(Ut,Z))q<N&&0>o(gt,Ut)?(V[Tt]=gt,V[q]=Z,Tt=q):(V[Tt]=Ut,V[Rt]=Z,Tt=Rt);else if(q<N&&0>o(gt,Z))V[Tt]=gt,V[q]=Z,Tt=q;else break t}}return nt}function o(V,nt){var Z=V.sortIndex-nt.sortIndex;return Z!==0?Z:V.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],d=[],g=1,_=null,v=3,y=!1,E=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(V){for(var nt=n(d);nt!==null;){if(nt.callback===null)a(d);else if(nt.startTime<=V)a(d),nt.sortIndex=nt.expirationTime,t(m,nt);else break;nt=n(d)}}function D(V){if(b=!1,U(V),!E)if(n(m)!==null)E=!0,ft();else{var nt=n(d);nt!==null&&lt(D,nt.startTime-V)}}var B=!1,I=-1,z=5,G=-1;function R(){return!(r.unstable_now()-G<z)}function A(){if(B){var V=r.unstable_now();G=V;var nt=!0;try{t:{E=!1,b&&(b=!1,x(I),I=-1),y=!0;var Z=v;try{e:{for(U(V),_=n(m);_!==null&&!(_.expirationTime>V&&R());){var Tt=_.callback;if(typeof Tt=="function"){_.callback=null,v=_.priorityLevel;var N=Tt(_.expirationTime<=V);if(V=r.unstable_now(),typeof N=="function"){_.callback=N,U(V),nt=!0;break e}_===n(m)&&a(m),U(V)}else a(m);_=n(m)}if(_!==null)nt=!0;else{var et=n(d);et!==null&&lt(D,et.startTime-V),nt=!1}}break t}finally{_=null,v=Z,y=!1}nt=void 0}}finally{nt?F():B=!1}}}var F;if(typeof O=="function")F=function(){O(A)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,st=ct.port2;ct.port1.onmessage=A,F=function(){st.postMessage(null)}}else F=function(){S(A,0)};function ft(){B||(B=!0,F())}function lt(V,nt){I=S(function(){V(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){E||y||(E=!0,ft())},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return n(m)},r.unstable_next=function(V){switch(v){case 1:case 2:case 3:var nt=3;break;default:nt=v}var Z=v;v=nt;try{return V()}finally{v=Z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,nt){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Z=v;v=V;try{return nt()}finally{v=Z}},r.unstable_scheduleCallback=function(V,nt,Z){var Tt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Tt+Z:Tt):Z=Tt,V){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Z+N,V={id:g++,callback:nt,priorityLevel:V,startTime:Z,expirationTime:N,sortIndex:-1},Z>Tt?(V.sortIndex=Z,t(d,V),n(m)===null&&V===n(d)&&(b?(x(I),I=-1):b=!0,lt(D,Z-Tt))):(V.sortIndex=N,t(m,V),E||y||(E=!0,ft())),V},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(V){var nt=v;return function(){var Z=v;v=nt;try{return V.apply(this,arguments)}finally{v=Z}}}}(hh)),hh}var w_;function Iy(){return w_||(w_=1,fh.exports=By()),fh.exports}var dh={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function Fy(){if(C_)return Rn;C_=1;var r=Wd();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Rn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Rn.flushSync=function(m){var d=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=d,a.p=g,a.d.f()}},Rn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(m,d))},Rn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Rn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Rn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(m)},Rn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Rn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(m)},Rn.requestFormReset=function(m){a.d.r(m)},Rn.unstable_batchedUpdates=function(m,d){return m(d)},Rn.useFormState=function(m,d,g){return f.H.useFormState(m,d,g)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.0.0",Rn}var D_;function Hy(){if(D_)return dh.exports;D_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),dh.exports=Fy(),dh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function Gy(){if(U_)return Po;U_=1;var r=Iy(),t=Wd(),n=Hy();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),y=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var z=Symbol.for("react.client.reference");function G(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case h:return"Portal";case g:return"Profiler";case d:return"StrictMode";case b:return"Suspense";case S:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:return(e.displayName||"Context")+".Provider";case v:return(e._context.displayName||"Context")+".Consumer";case E:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case x:return i=e.displayName||null,i!==null?i:G(e.type)||"Memo";case O:i=e._payload,e=e._init;try{return G(e(i))}catch{}}return null}var R=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,F,ct;function st(e){if(F===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||"",ct=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+e+ct}var ft=!1;function lt(e,i){if(!e||ft)return"";ft=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(ht){var at=ht}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(ht){at=ht}e.call(bt.prototype)}}else{try{throw Error()}catch(ht){at=ht}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(ht){if(ht&&at&&typeof ht.stack=="string")return[ht.stack,at.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),M=p[0],w=p[1];if(M&&w){var P=M.split(`
`),W=w.split(`
`);for(u=l=0;l<P.length&&!P[l].includes("DetermineComponentFrameRoot");)l++;for(;u<W.length&&!W[u].includes("DetermineComponentFrameRoot");)u++;if(l===P.length||u===W.length)for(l=P.length-1,u=W.length-1;1<=l&&0<=u&&P[l]!==W[u];)u--;for(;1<=l&&0<=u;l--,u--)if(P[l]!==W[u]){if(l!==1||u!==1)do if(l--,u--,0>u||P[l]!==W[u]){var pt=`
`+P[l].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=l&&0<=u);break}}}finally{ft=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?st(s):""}function V(e){switch(e.tag){case 26:case 27:case 5:return st(e.type);case 16:return st("Lazy");case 13:return st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return e=lt(e.type,!1),e;case 11:return e=lt(e.type.render,!1),e;case 1:return e=lt(e.type,!0),e;default:return""}}function nt(e){try{var i="";do i+=V(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Z(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function Tt(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function N(e){if(Z(e)!==e)throw Error(a(188))}function et(e){var i=e.alternate;if(!i){if(i=Z(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var u=s.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===s)return N(u),e;if(p===l)return N(u),i;p=p.sibling}throw Error(a(188))}if(s.return!==l.return)s=u,l=p;else{for(var M=!1,w=u.child;w;){if(w===s){M=!0,s=u,l=p;break}if(w===l){M=!0,l=u,s=p;break}w=w.sibling}if(!M){for(w=p.child;w;){if(w===s){M=!0,s=p,l=u;break}if(w===l){M=!0,l=p,s=u;break}w=w.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function Rt(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=Rt(e),i!==null)return i;e=e.sibling}return null}var Ut=Array.isArray,q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,gt={pending:!1,data:null,method:null,action:null},Et=[],Ct=-1;function Lt(e){return{current:e}}function $t(e){0>Ct||(e.current=Et[Ct],Et[Ct]=null,Ct--)}function Ft(e,i){Ct++,Et[Ct]=e.current,e.current=i}var ue=Lt(null),Te=Lt(null),re=Lt(null),H=Lt(null);function Ie(e,i){switch(Ft(re,i),Ft(Te,e),Ft(ue,null),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?Jg(i):0;break;default:if(e=e===8?i.parentNode:i,i=e.tagName,e=e.namespaceURI)e=Jg(e),i=$g(e,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}$t(ue),Ft(ue,i)}function vt(){$t(ue),$t(Te),$t(re)}function Mt(e){e.memoizedState!==null&&Ft(H,e);var i=ue.current,s=$g(i,e.type);i!==s&&(Ft(Te,e),Ft(ue,s))}function dt(e){Te.current===e&&($t(ue),$t(Te)),H.current===e&&($t(H),Co._currentValue=gt)}var Ot=Object.prototype.hasOwnProperty,mt=r.unstable_scheduleCallback,L=r.unstable_cancelCallback,T=r.unstable_shouldYield,K=r.unstable_requestPaint,rt=r.unstable_now,_t=r.unstable_getCurrentPriorityLevel,ut=r.unstable_ImmediatePriority,Yt=r.unstable_UserBlockingPriority,Dt=r.unstable_NormalPriority,kt=r.unstable_LowPriority,me=r.unstable_IdlePriority,wt=r.log,Wt=r.unstable_setDisableYieldValue,Qt=null,jt=null;function Xt(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Qt,e,void 0,(e.current.flags&128)===128)}catch{}}function ce(e){if(typeof wt=="function"&&Wt(e),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(Qt,e)}catch{}}var te=Math.clz32?Math.clz32:Ht,Le=Math.log,Y=Math.LN2;function Ht(e){return e>>>=0,e===0?32:31-(Le(e)/Y|0)|0}var ot=128,St=4194304;function zt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bt(e,i){var s=e.pendingLanes;if(s===0)return 0;var l=0,u=e.suspendedLanes,p=e.pingedLanes,M=e.warmLanes;e=e.finishedLanes!==0;var w=s&134217727;return w!==0?(s=w&~u,s!==0?l=zt(s):(p&=w,p!==0?l=zt(p):e||(M=w&~M,M!==0&&(l=zt(M))))):(w=s&~u,w!==0?l=zt(w):p!==0?l=zt(p):e||(M=s&~M,M!==0&&(l=zt(M)))),l===0?0:i!==0&&i!==l&&(i&u)===0&&(u=l&-l,M=i&-i,u>=M||u===32&&(M&4194176)!==0)?i:l}function ae(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ke(e,i){switch(e){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sn(){var e=ot;return ot<<=1,(ot&4194176)===0&&(ot=128),e}function Ae(){var e=St;return St<<=1,(St&62914560)===0&&(St=4194304),e}function Ln(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Nn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function al(e,i,s,l,u,p){var M=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var w=e.entanglements,P=e.expirationTimes,W=e.hiddenUpdates;for(s=M&~s;0<s;){var pt=31-te(s),bt=1<<pt;w[pt]=0,P[pt]=-1;var at=W[pt];if(at!==null)for(W[pt]=null,pt=0;pt<at.length;pt++){var ht=at[pt];ht!==null&&(ht.lane&=-536870913)}s&=~bt}l!==0&&Fr(e,l,0),p!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=p&~(M&~i))}function Fr(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-te(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194218}function Ri(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-te(s),u=1<<l;u&i|e[l]&i&&(e[l]|=i),s&=~u}}function Us(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hr(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:__(e.type))}function sl(e,i){var s=q.p;try{return q.p=e,i()}finally{q.p=s}}var qn=Math.random().toString(36).slice(2),rn="__reactFiber$"+qn,on="__reactProps$"+qn,Bi="__reactContainer$"+qn,Ls="__reactEvents$"+qn,su="__reactListeners$"+qn,ru="__reactHandles$"+qn,rl="__reactResources$"+qn,ja="__reactMarker$"+qn;function Gr(e){delete e[rn],delete e[on],delete e[Ls],delete e[su],delete e[ru]}function Ii(e){var i=e[rn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Bi]||s[rn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=n_(e);e!==null;){if(s=e[rn])return s;e=n_(e)}return i}e=s,s=e.parentNode}return null}function C(e){if(e=e[rn]||e[Bi]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function j(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function it(e){var i=e[rl];return i||(i=e[rl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function $(e){e[ja]=!0}var Q=new Set,At={};function Pt(e,i){Vt(e,i),Vt(e+"Capture",i)}function Vt(e,i){for(At[e]=i,e=0;e<i.length;e++)Q.add(i[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Jt={};function ye(e){return Ot.call(Jt,e)?!0:Ot.call(ie,e)?!1:se.test(e)?Jt[e]=!0:(ie[e]=!0,!1)}function Se(e,i,s){if(ye(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Ve(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Re(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function oe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ee(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ln(e){var i=ee(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,p=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Me(e){e._valueTracker||(e._valueTracker=ln(e))}function Fn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=ee(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var On=/[\n"\\]/g;function pn(e){return e.replace(On,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ne(e,i,s,l,u,p,M,w){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),i!=null?M==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+oe(i)):e.value!==""+oe(i)&&(e.value=""+oe(i)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),i!=null?bn(e,M,oe(i)):s!=null?bn(e,M,oe(s)):l!=null&&e.removeAttribute("value"),u==null&&p!=null&&(e.defaultChecked=!!p),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+oe(w):e.removeAttribute("name")}function Pn(e,i,s,l,u,p,M,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),i!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||i!=null))return;s=s!=null?""+oe(s):"",i=i!=null?""+oe(i):s,w||i===e.value||(e.value=i),e.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=w?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function bn(e,i,s){i==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function je(e,i,s,l){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&l&&(e[s].defaultSelected=!0)}else{for(s=""+oe(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function xn(e,i,s){if(i!=null&&(i=""+oe(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+oe(s):""}function Ns(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(Ut(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=oe(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Hn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var U0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rp(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||U0.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function op(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&rp(e,u,l)}else for(var p in i)i.hasOwnProperty(p)&&rp(e,p,i[p])}function ou(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var L0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),N0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(e){return N0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var lu=null;function cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,Ps=null;function lp(e){var i=C(e);if(i&&(e=i.stateNode)){var s=e[on]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ne(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+pn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var u=l[on]||null;if(!u)throw Error(a(90));Ne(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Fn(l)}break t;case"textarea":xn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&je(e,!!s.multiple,i,!1)}}}var uu=!1;function cp(e,i,s){if(uu)return e(i,s);uu=!0;try{var l=e(i);return l}finally{if(uu=!1,(Os!==null||Ps!==null)&&(Xl(),Os&&(i=Os,e=Ps,Ps=Os=null,lp(i),e)))for(i=0;i<e.length;i++)lp(e[i])}}function Vr(e,i){var s=e.stateNode;if(s===null)return null;var l=s[on]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var fu=!1;if(Gt)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){fu=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{fu=!1}var da=null,hu=null,ll=null;function up(){if(ll)return ll;var e,i=hu,s=i.length,l,u="value"in da?da.value:da.textContent,p=u.length;for(e=0;e<s&&i[e]===u[e];e++);var M=s-e;for(l=1;l<=M&&i[s-l]===u[p-l];l++);return ll=u.slice(e,1<l?1-l:void 0)}function cl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function fp(){return!1}function Gn(e){function i(s,l,u,p,M){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(s=e[w],this[w]=s?s(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ul:fp,this.isPropagationStopped=fp,this}return A(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),i}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Gn(Za),Xr=A({},Za,{view:0,detail:0}),O0=Gn(Xr),du,pu,Wr,hl=A({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(du=e.screenX-Wr.screenX,pu=e.screenY-Wr.screenY):pu=du=0,Wr=e),du)},movementY:function(e){return"movementY"in e?e.movementY:pu}}),hp=Gn(hl),P0=A({},hl,{dataTransfer:0}),z0=Gn(P0),B0=A({},Xr,{relatedTarget:0}),mu=Gn(B0),I0=A({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),F0=Gn(I0),H0=A({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G0=Gn(H0),V0=A({},Za,{data:0}),dp=Gn(V0),k0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y0(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=W0[e])?!!i[e]:!1}function gu(){return Y0}var q0=A({},Xr,{key:function(e){if(e.key){var i=k0[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?X0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),j0=Gn(q0),Z0=A({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=Gn(Z0),K0=A({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),Q0=Gn(K0),J0=A({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),$0=Gn(J0),tx=A({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ex=Gn(tx),nx=A({},Za,{newState:0,oldState:0}),ix=Gn(nx),ax=[9,13,27,32],_u=Gt&&"CompositionEvent"in window,Yr=null;Gt&&"documentMode"in document&&(Yr=document.documentMode);var sx=Gt&&"TextEvent"in window&&!Yr,mp=Gt&&(!_u||Yr&&8<Yr&&11>=Yr),gp=" ",_p=!1;function vp(e,i){switch(e){case"keyup":return ax.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zs=!1;function rx(e,i){switch(e){case"compositionend":return xp(i);case"keypress":return i.which!==32?null:(_p=!0,gp);case"textInput":return e=i.data,e===gp&&_p?null:e;default:return null}}function ox(e,i){if(zs)return e==="compositionend"||!_u&&vp(e,i)?(e=up(),ll=hu=da=null,zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return mp&&i.locale!=="ko"?null:i.data;default:return null}}var lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!lx[e.type]:i==="textarea"}function Sp(e,i,s,l){Os?Ps?Ps.push(l):Ps=[l]:Os=l,i=Zl(i,"onChange"),0<i.length&&(s=new fl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var qr=null,jr=null;function cx(e){qg(e,0)}function dl(e){var i=j(e);if(Fn(i))return e}function Mp(e,i){if(e==="change")return i}var Ep=!1;if(Gt){var vu;if(Gt){var xu="oninput"in document;if(!xu){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),xu=typeof Tp.oninput=="function"}vu=xu}else vu=!1;Ep=vu&&(!document.documentMode||9<document.documentMode)}function bp(){qr&&(qr.detachEvent("onpropertychange",Ap),jr=qr=null)}function Ap(e){if(e.propertyName==="value"&&dl(jr)){var i=[];Sp(i,jr,e,cu(e)),cp(cx,i)}}function ux(e,i,s){e==="focusin"?(bp(),qr=i,jr=s,qr.attachEvent("onpropertychange",Ap)):e==="focusout"&&bp()}function fx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(jr)}function hx(e,i){if(e==="click")return dl(i)}function dx(e,i){if(e==="input"||e==="change")return dl(i)}function px(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var jn=typeof Object.is=="function"?Object.is:px;function Zr(e,i){if(jn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!Ot.call(i,u)||!jn(e[u],i[u]))return!1}return!0}function Rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wp(e,i){var s=Rp(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Rp(s)}}function Cp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Cp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Dp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=gi(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=gi(e.document)}return i}function yu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function mx(e,i){var s=Dp(i);i=e.focusedElem;var l=e.selectionRange;if(s!==i&&i&&i.ownerDocument&&Cp(i.ownerDocument.documentElement,i)){if(l!==null&&yu(i)){if(e=l.start,s=l.end,s===void 0&&(s=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(s,i.value.length);else if(s=(e=i.ownerDocument||document)&&e.defaultView||window,s.getSelection){s=s.getSelection();var u=i.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!s.extend&&p>l&&(u=l,l=p,p=u),u=wp(i,p);var M=wp(i,l);u&&M&&(s.rangeCount!==1||s.anchorNode!==u.node||s.anchorOffset!==u.offset||s.focusNode!==M.node||s.focusOffset!==M.offset)&&(e=e.createRange(),e.setStart(u.node,u.offset),s.removeAllRanges(),p>l?(s.addRange(e),s.extend(M.node,M.offset)):(e.setEnd(M.node,M.offset),s.addRange(e)))}}for(e=[],s=i;s=s.parentNode;)s.nodeType===1&&e.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)s=e[i],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var gx=Gt&&"documentMode"in document&&11>=document.documentMode,Bs=null,Su=null,Kr=null,Mu=!1;function Up(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Mu||Bs==null||Bs!==gi(l)||(l=Bs,"selectionStart"in l&&yu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Kr&&Zr(Kr,l)||(Kr=l,l=Zl(Su,"onSelect"),0<l.length&&(i=new fl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=Bs)))}function Ka(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Is={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},Eu={},Lp={};Gt&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Qa(e){if(Eu[e])return Eu[e];if(!Is[e])return e;var i=Is[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Lp)return Eu[e]=i[s];return e}var Np=Qa("animationend"),Op=Qa("animationiteration"),Pp=Qa("animationstart"),_x=Qa("transitionrun"),vx=Qa("transitionstart"),xx=Qa("transitioncancel"),zp=Qa("transitionend"),Bp=new Map,Ip="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function _i(e,i){Bp.set(e,i),Pt(i,[e])}var ni=[],Fs=0,Tu=0;function pl(){for(var e=Fs,i=Tu=Fs=0;i<e;){var s=ni[i];ni[i++]=null;var l=ni[i];ni[i++]=null;var u=ni[i];ni[i++]=null;var p=ni[i];if(ni[i++]=null,l!==null&&u!==null){var M=l.pending;M===null?u.next=u:(u.next=M.next,M.next=u),l.pending=u}p!==0&&Fp(s,u,p)}}function ml(e,i,s,l){ni[Fs++]=e,ni[Fs++]=i,ni[Fs++]=s,ni[Fs++]=l,Tu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function bu(e,i,s,l){return ml(e,i,s,l),gl(e)}function pa(e,i){return ml(e,null,null,i),gl(e)}function Fp(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var u=!1,p=e.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(u=!0)),e=p,p=p.return;u&&i!==null&&e.tag===3&&(p=e.stateNode,u=31-te(s),p=p.hiddenUpdates,e=p[u],e===null?p[u]=[i]:e.push(i),i.lane=s|536870912)}function gl(e){if(50<Mo)throw Mo=0,Lf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Hs={},Hp=new WeakMap;function ii(e,i){if(typeof e=="object"&&e!==null){var s=Hp.get(e);return s!==void 0?s:(i={value:e,source:i,stack:nt(i)},Hp.set(e,i),i)}return{value:e,source:i,stack:nt(i)}}var Gs=[],Vs=0,_l=null,vl=0,ai=[],si=0,Ja=null,Fi=1,Hi="";function $a(e,i){Gs[Vs++]=vl,Gs[Vs++]=_l,_l=e,vl=i}function Gp(e,i,s){ai[si++]=Fi,ai[si++]=Hi,ai[si++]=Ja,Ja=e;var l=Fi;e=Hi;var u=32-te(l)-1;l&=~(1<<u),s+=1;var p=32-te(i)+u;if(30<p){var M=u-u%5;p=(l&(1<<M)-1).toString(32),l>>=M,u-=M,Fi=1<<32-te(i)+u|s<<u|l,Hi=p+e}else Fi=1<<p|s<<u|l,Hi=e}function Au(e){e.return!==null&&($a(e,1),Gp(e,1,0))}function Ru(e){for(;e===_l;)_l=Gs[--Vs],Gs[Vs]=null,vl=Gs[--Vs],Gs[Vs]=null;for(;e===Ja;)Ja=ai[--si],ai[si]=null,Hi=ai[--si],ai[si]=null,Fi=ai[--si],ai[si]=null}var zn=null,yn=null,we=!1,vi=null,wi=!1,wu=Error(a(519));function ts(e){var i=Error(a(418,""));throw $r(ii(i,e)),wu}function Vp(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[rn]=e,i[on]=l,s){case"dialog":Ee("cancel",i),Ee("close",i);break;case"iframe":case"object":case"embed":Ee("load",i);break;case"video":case"audio":for(s=0;s<To.length;s++)Ee(To[s],i);break;case"source":Ee("error",i);break;case"img":case"image":case"link":Ee("error",i),Ee("load",i);break;case"details":Ee("toggle",i);break;case"input":Ee("invalid",i),Pn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Me(i);break;case"select":Ee("invalid",i);break;case"textarea":Ee("invalid",i),Ns(i,l.value,l.defaultValue,l.children),Me(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Qg(i.textContent,s)?(l.popover!=null&&(Ee("beforetoggle",i),Ee("toggle",i)),l.onScroll!=null&&Ee("scroll",i),l.onScrollEnd!=null&&Ee("scrollend",i),l.onClick!=null&&(i.onclick=Kl),i=!0):i=!1,i||ts(e)}function kp(e){for(zn=e.return;zn;)switch(zn.tag){case 3:case 27:wi=!0;return;case 5:case 13:wi=!1;return;default:zn=zn.return}}function Qr(e){if(e!==zn)return!1;if(!we)return kp(e),we=!0,!1;var i=!1,s;if((s=e.tag!==3&&e.tag!==27)&&((s=e.tag===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Zf(e.type,e.memoizedProps)),s=!s),s&&(i=!0),i&&yn&&ts(e),kp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){yn=yi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}yn=null}}else yn=zn?yi(e.stateNode.nextSibling):null;return!0}function Jr(){yn=zn=null,we=!1}function $r(e){vi===null?vi=[e]:vi.push(e)}var to=Error(a(460)),Xp=Error(a(474)),Cu={then:function(){}};function Wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xl(){}function Yp(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(xl,xl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===to?Error(a(483)):e;default:if(typeof i.status=="string")i.then(xl,xl);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===to?Error(a(483)):e}throw eo=i,to}}var eo=null;function qp(){if(eo===null)throw Error(a(459));var e=eo;return eo=null,e}var ks=null,no=0;function yl(e){var i=no;return no+=1,ks===null&&(ks=[]),Yp(ks,e,i)}function io(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Sl(e,i){throw i.$$typeof===c?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function jp(e){var i=e._init;return i(e._payload)}function Zp(e){function i(J,k){if(e){var tt=J.deletions;tt===null?(J.deletions=[k],J.flags|=16):tt.push(k)}}function s(J,k){if(!e)return null;for(;k!==null;)i(J,k),k=k.sibling;return null}function l(J){for(var k=new Map;J!==null;)J.key!==null?k.set(J.key,J):k.set(J.index,J),J=J.sibling;return k}function u(J,k){return J=Aa(J,k),J.index=0,J.sibling=null,J}function p(J,k,tt){return J.index=tt,e?(tt=J.alternate,tt!==null?(tt=tt.index,tt<k?(J.flags|=33554434,k):tt):(J.flags|=33554434,k)):(J.flags|=1048576,k)}function M(J){return e&&J.alternate===null&&(J.flags|=33554434),J}function w(J,k,tt,yt){return k===null||k.tag!==6?(k=Tf(tt,J.mode,yt),k.return=J,k):(k=u(k,tt),k.return=J,k)}function P(J,k,tt,yt){var qt=tt.type;return qt===m?pt(J,k,tt.props.children,yt,tt.key):k!==null&&(k.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===O&&jp(qt)===k.type)?(k=u(k,tt.props),io(k,tt),k.return=J,k):(k=Fl(tt.type,tt.key,tt.props,null,J.mode,yt),io(k,tt),k.return=J,k)}function W(J,k,tt,yt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=bf(tt,J.mode,yt),k.return=J,k):(k=u(k,tt.children||[]),k.return=J,k)}function pt(J,k,tt,yt,qt){return k===null||k.tag!==7?(k=us(tt,J.mode,yt,qt),k.return=J,k):(k=u(k,tt),k.return=J,k)}function bt(J,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Tf(""+k,J.mode,tt),k.return=J,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case f:return tt=Fl(k.type,k.key,k.props,null,J.mode,tt),io(tt,k),tt.return=J,tt;case h:return k=bf(k,J.mode,tt),k.return=J,k;case O:var yt=k._init;return k=yt(k._payload),bt(J,k,tt)}if(Ut(k)||I(k))return k=us(k,J.mode,tt,null),k.return=J,k;if(typeof k.then=="function")return bt(J,yl(k),tt);if(k.$$typeof===y)return bt(J,zl(J,k),tt);Sl(J,k)}return null}function at(J,k,tt,yt){var qt=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return qt!==null?null:w(J,k,""+tt,yt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case f:return tt.key===qt?P(J,k,tt,yt):null;case h:return tt.key===qt?W(J,k,tt,yt):null;case O:return qt=tt._init,tt=qt(tt._payload),at(J,k,tt,yt)}if(Ut(tt)||I(tt))return qt!==null?null:pt(J,k,tt,yt,null);if(typeof tt.then=="function")return at(J,k,yl(tt),yt);if(tt.$$typeof===y)return at(J,k,zl(J,tt),yt);Sl(J,tt)}return null}function ht(J,k,tt,yt,qt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return J=J.get(tt)||null,w(k,J,""+yt,qt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case f:return J=J.get(yt.key===null?tt:yt.key)||null,P(k,J,yt,qt);case h:return J=J.get(yt.key===null?tt:yt.key)||null,W(k,J,yt,qt);case O:var ve=yt._init;return yt=ve(yt._payload),ht(J,k,tt,yt,qt)}if(Ut(yt)||I(yt))return J=J.get(tt)||null,pt(k,J,yt,qt,null);if(typeof yt.then=="function")return ht(J,k,tt,yl(yt),qt);if(yt.$$typeof===y)return ht(J,k,tt,zl(k,yt),qt);Sl(k,yt)}return null}function Zt(J,k,tt,yt){for(var qt=null,ve=null,Kt=k,ne=k=0,_n=null;Kt!==null&&ne<tt.length;ne++){Kt.index>ne?(_n=Kt,Kt=null):_n=Kt.sibling;var Ce=at(J,Kt,tt[ne],yt);if(Ce===null){Kt===null&&(Kt=_n);break}e&&Kt&&Ce.alternate===null&&i(J,Kt),k=p(Ce,k,ne),ve===null?qt=Ce:ve.sibling=Ce,ve=Ce,Kt=_n}if(ne===tt.length)return s(J,Kt),we&&$a(J,ne),qt;if(Kt===null){for(;ne<tt.length;ne++)Kt=bt(J,tt[ne],yt),Kt!==null&&(k=p(Kt,k,ne),ve===null?qt=Kt:ve.sibling=Kt,ve=Kt);return we&&$a(J,ne),qt}for(Kt=l(Kt);ne<tt.length;ne++)_n=ht(Kt,J,ne,tt[ne],yt),_n!==null&&(e&&_n.alternate!==null&&Kt.delete(_n.key===null?ne:_n.key),k=p(_n,k,ne),ve===null?qt=_n:ve.sibling=_n,ve=_n);return e&&Kt.forEach(function(Na){return i(J,Na)}),we&&$a(J,ne),qt}function le(J,k,tt,yt){if(tt==null)throw Error(a(151));for(var qt=null,ve=null,Kt=k,ne=k=0,_n=null,Ce=tt.next();Kt!==null&&!Ce.done;ne++,Ce=tt.next()){Kt.index>ne?(_n=Kt,Kt=null):_n=Kt.sibling;var Na=at(J,Kt,Ce.value,yt);if(Na===null){Kt===null&&(Kt=_n);break}e&&Kt&&Na.alternate===null&&i(J,Kt),k=p(Na,k,ne),ve===null?qt=Na:ve.sibling=Na,ve=Na,Kt=_n}if(Ce.done)return s(J,Kt),we&&$a(J,ne),qt;if(Kt===null){for(;!Ce.done;ne++,Ce=tt.next())Ce=bt(J,Ce.value,yt),Ce!==null&&(k=p(Ce,k,ne),ve===null?qt=Ce:ve.sibling=Ce,ve=Ce);return we&&$a(J,ne),qt}for(Kt=l(Kt);!Ce.done;ne++,Ce=tt.next())Ce=ht(Kt,J,ne,Ce.value,yt),Ce!==null&&(e&&Ce.alternate!==null&&Kt.delete(Ce.key===null?ne:Ce.key),k=p(Ce,k,ne),ve===null?qt=Ce:ve.sibling=Ce,ve=Ce);return e&&Kt.forEach(function(Ny){return i(J,Ny)}),we&&$a(J,ne),qt}function Qe(J,k,tt,yt){if(typeof tt=="object"&&tt!==null&&tt.type===m&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case f:t:{for(var qt=tt.key;k!==null;){if(k.key===qt){if(qt=tt.type,qt===m){if(k.tag===7){s(J,k.sibling),yt=u(k,tt.props.children),yt.return=J,J=yt;break t}}else if(k.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===O&&jp(qt)===k.type){s(J,k.sibling),yt=u(k,tt.props),io(yt,tt),yt.return=J,J=yt;break t}s(J,k);break}else i(J,k);k=k.sibling}tt.type===m?(yt=us(tt.props.children,J.mode,yt,tt.key),yt.return=J,J=yt):(yt=Fl(tt.type,tt.key,tt.props,null,J.mode,yt),io(yt,tt),yt.return=J,J=yt)}return M(J);case h:t:{for(qt=tt.key;k!==null;){if(k.key===qt)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){s(J,k.sibling),yt=u(k,tt.children||[]),yt.return=J,J=yt;break t}else{s(J,k);break}else i(J,k);k=k.sibling}yt=bf(tt,J.mode,yt),yt.return=J,J=yt}return M(J);case O:return qt=tt._init,tt=qt(tt._payload),Qe(J,k,tt,yt)}if(Ut(tt))return Zt(J,k,tt,yt);if(I(tt)){if(qt=I(tt),typeof qt!="function")throw Error(a(150));return tt=qt.call(tt),le(J,k,tt,yt)}if(typeof tt.then=="function")return Qe(J,k,yl(tt),yt);if(tt.$$typeof===y)return Qe(J,k,zl(J,tt),yt);Sl(J,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(s(J,k.sibling),yt=u(k,tt),yt.return=J,J=yt):(s(J,k),yt=Tf(tt,J.mode,yt),yt.return=J,J=yt),M(J)):s(J,k)}return function(J,k,tt,yt){try{no=0;var qt=Qe(J,k,tt,yt);return ks=null,qt}catch(Kt){if(Kt===to)throw Kt;var ve=ci(29,Kt,null,J.mode);return ve.lanes=yt,ve.return=J,ve}finally{}}}var es=Zp(!0),Kp=Zp(!1),Xs=Lt(null),Ml=Lt(0);function Qp(e,i){e=Qi,Ft(Ml,e),Ft(Xs,i),Qi=e|i.baseLanes}function Du(){Ft(Ml,Qi),Ft(Xs,Xs.current)}function Uu(){Qi=Ml.current,$t(Xs),$t(Ml)}var ri=Lt(null),Ci=null;function ma(e){var i=e.alternate;Ft(cn,cn.current&1),Ft(ri,e),Ci===null&&(i===null||Xs.current!==null||i.memoizedState!==null)&&(Ci=e)}function Jp(e){if(e.tag===22){if(Ft(cn,cn.current),Ft(ri,e),Ci===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ci=e)}}else ga()}function ga(){Ft(cn,cn.current),Ft(ri,ri.current)}function Gi(e){$t(ri),Ci===e&&(Ci=null),$t(cn)}var cn=Lt(0);function El(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var yx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Sx=r.unstable_scheduleCallback,Mx=r.unstable_NormalPriority,un={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new yx,data:new Map,refCount:0}}function ao(e){e.refCount--,e.refCount===0&&Sx(Mx,function(){e.controller.abort()})}var so=null,Nu=0,Ws=0,Ys=null;function Ex(e,i){if(so===null){var s=so=[];Nu=0,Ws=Hf(),Ys={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Nu++,i.then($p,$p),i}function $p(){if(--Nu===0&&so!==null){Ys!==null&&(Ys.status="fulfilled");var e=so;so=null,Ws=0,Ys=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Tx(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var tm=R.S;R.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ex(e,i),tm!==null&&tm(e,i)};var ns=Lt(null);function Ou(){var e=ns.current;return e!==null?e:He.pooledCache}function Tl(e,i){i===null?Ft(ns,ns.current):Ft(ns,i.pool)}function em(){var e=Ou();return e===null?null:{parent:un._currentValue,pool:e}}var _a=0,ge=null,Oe=null,tn=null,bl=!1,qs=!1,is=!1,Al=0,ro=0,js=null,bx=0;function Je(){throw Error(a(321))}function Pu(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!jn(e[s],i[s]))return!1;return!0}function zu(e,i,s,l,u,p){return _a=p,ge=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,R.H=e===null||e.memoizedState===null?as:va,is=!1,p=s(l,u),is=!1,qs&&(p=im(i,s,l,u)),nm(e),p}function nm(e){R.H=Di;var i=Oe!==null&&Oe.next!==null;if(_a=0,tn=Oe=ge=null,bl=!1,ro=0,js=null,i)throw Error(a(300));e===null||mn||(e=e.dependencies,e!==null&&Pl(e)&&(mn=!0))}function im(e,i,s,l){ge=e;var u=0;do{if(qs&&(js=null),ro=0,qs=!1,25<=u)throw Error(a(301));if(u+=1,tn=Oe=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}R.H=ss,p=i(s,l)}while(qs);return p}function Ax(){var e=R.H,i=e.useState()[0];return i=typeof i.then=="function"?oo(i):i,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(ge.flags|=1024),i}function Bu(){var e=Al!==0;return Al=0,e}function Iu(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Fu(e){if(bl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}bl=!1}_a=0,tn=Oe=ge=null,qs=!1,ro=Al=0,js=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?ge.memoizedState=tn=e:tn=tn.next=e,tn}function en(){if(Oe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var i=tn===null?ge.memoizedState:tn.next;if(i!==null)tn=i,Oe=e;else{if(e===null)throw ge.alternate===null?Error(a(467)):Error(a(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},tn===null?ge.memoizedState=tn=e:tn=tn.next=e}return tn}var Rl;Rl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function oo(e){var i=ro;return ro+=1,js===null&&(js=[]),e=Yp(js,e,i),i=ge,(tn===null?i.memoizedState:tn.next)===null&&(i=i.alternate,R.H=i===null||i.memoizedState===null?as:va),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===y)return An(e)}throw Error(a(438,String(e)))}function Hu(e){var i=null,s=ge.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ge.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Rl(),ge.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=D;return i.index++,s}function Vi(e,i){return typeof i=="function"?i(e):i}function Cl(e){var i=en();return Gu(i,Oe,e)}function Gu(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var u=e.baseQueue,p=l.pending;if(p!==null){if(u!==null){var M=u.next;u.next=p.next,p.next=M}i.baseQueue=u=p,l.pending=null}if(p=e.baseState,u===null)e.memoizedState=p;else{i=u.next;var w=M=null,P=null,W=i,pt=!1;do{var bt=W.lane&-536870913;if(bt!==W.lane?(be&bt)===bt:(_a&bt)===bt){var at=W.revertLane;if(at===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),bt===Ws&&(pt=!0);else if((_a&at)===at){W=W.next,at===Ws&&(pt=!0);continue}else bt={lane:0,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},P===null?(w=P=bt,M=p):P=P.next=bt,ge.lanes|=at,Ra|=at;bt=W.action,is&&s(p,bt),p=W.hasEagerState?W.eagerState:s(p,bt)}else at={lane:bt,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},P===null?(w=P=at,M=p):P=P.next=at,ge.lanes|=bt,Ra|=bt;W=W.next}while(W!==null&&W!==i);if(P===null?M=p:P.next=w,!jn(p,e.memoizedState)&&(mn=!0,pt&&(s=Ys,s!==null)))throw s;e.memoizedState=p,e.baseState=M,e.baseQueue=P,l.lastRenderedState=p}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Vu(e){var i=en(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,u=s.pending,p=i.memoizedState;if(u!==null){s.pending=null;var M=u=u.next;do p=e(p,M.action),M=M.next;while(M!==u);jn(p,i.memoizedState)||(mn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function am(e,i,s){var l=ge,u=en(),p=we;if(p){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!jn((Oe||u).memoizedState,s);if(M&&(u.memoizedState=s,mn=!0),u=u.queue,Wu(om.bind(null,l,u,e),[e]),u.getSnapshot!==i||M||tn!==null&&tn.memoizedState.tag&1){if(l.flags|=2048,Zs(9,rm.bind(null,l,u,s,i),{destroy:void 0},null),He===null)throw Error(a(349));p||(_a&60)!==0||sm(l,i,s)}return s}function sm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=ge.updateQueue,i===null?(i=Rl(),ge.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function rm(e,i,s,l){i.value=s,i.getSnapshot=l,lm(i)&&cm(e)}function om(e,i,s){return s(function(){lm(i)&&cm(e)})}function lm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!jn(e,s)}catch{return!0}}function cm(e){var i=pa(e,2);i!==null&&Bn(i,e,2)}function ku(e){var i=Vn();if(typeof e=="function"){var s=e;if(e=s(),is){ce(!0);try{s()}finally{ce(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},i}function um(e,i,s,l){return e.baseState=s,Gu(e,Oe,typeof l=="function"?l:Vi)}function Rx(e,i,s,l,u){if(Ll(e))throw Error(a(485));if(e=i.action,e!==null){var p={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};R.T!==null?s(!0):p.isTransition=!1,l(p),s=i.pending,s===null?(p.next=i.pending=p,fm(i,p)):(p.next=s.next,i.pending=s.next=p)}}function fm(e,i){var s=i.action,l=i.payload,u=e.state;if(i.isTransition){var p=R.T,M={};R.T=M;try{var w=s(u,l),P=R.S;P!==null&&P(M,w),hm(e,i,w)}catch(W){Xu(e,i,W)}finally{R.T=p}}else try{p=s(u,l),hm(e,i,p)}catch(W){Xu(e,i,W)}}function hm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){dm(e,i,l)},function(l){return Xu(e,i,l)}):dm(e,i,s)}function dm(e,i,s){i.status="fulfilled",i.value=s,pm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,fm(e,s)))}function Xu(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,pm(i),i=i.next;while(i!==l)}e.action=null}function pm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function mm(e,i){return i}function gm(e,i){if(we){var s=He.formState;if(s!==null){t:{var l=ge;if(we){if(yn){e:{for(var u=yn,p=wi;u.nodeType!==8;){if(!p){u=null;break e}if(u=yi(u.nextSibling),u===null){u=null;break e}}p=u.data,u=p==="F!"||p==="F"?u:null}if(u){yn=yi(u.nextSibling),l=u.data==="F!";break t}}ts(l)}l=!1}l&&(i=s[0])}}return s=Vn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mm,lastRenderedState:i},s.queue=l,s=Om.bind(null,ge,l),l.dispatch=s,l=ku(!1),p=Ku.bind(null,ge,!1,l.queue),l=Vn(),u={state:i,dispatch:null,action:e,pending:null},l.queue=u,s=Rx.bind(null,ge,u,p,s),u.dispatch=s,l.memoizedState=e,[i,s,!1]}function _m(e){var i=en();return vm(i,Oe,e)}function vm(e,i,s){i=Gu(e,i,mm)[0],e=Cl(Vi)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?oo(i):i;var l=en(),u=l.queue,p=u.dispatch;return s!==l.memoizedState&&(ge.flags|=2048,Zs(9,wx.bind(null,u,s),{destroy:void 0},null)),[i,p,e]}function wx(e,i){e.action=i}function xm(e){var i=en(),s=Oe;if(s!==null)return vm(i,s,e);en(),i=i.memoizedState,s=en();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Zs(e,i,s,l){return e={tag:e,create:i,inst:s,deps:l,next:null},i=ge.updateQueue,i===null&&(i=Rl(),ge.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function ym(){return en().memoizedState}function Dl(e,i,s,l){var u=Vn();ge.flags|=e,u.memoizedState=Zs(1|i,s,{destroy:void 0},l===void 0?null:l)}function Ul(e,i,s,l){var u=en();l=l===void 0?null:l;var p=u.memoizedState.inst;Oe!==null&&l!==null&&Pu(l,Oe.memoizedState.deps)?u.memoizedState=Zs(i,s,p,l):(ge.flags|=e,u.memoizedState=Zs(1|i,s,p,l))}function Sm(e,i){Dl(8390656,8,e,i)}function Wu(e,i){Ul(2048,8,e,i)}function Mm(e,i){return Ul(4,2,e,i)}function Em(e,i){return Ul(4,4,e,i)}function Tm(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function bm(e,i,s){s=s!=null?s.concat([e]):null,Ul(4,4,Tm.bind(null,i,e),s)}function Yu(){}function Am(e,i){var s=en();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Pu(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function Rm(e,i){var s=en();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Pu(i,l[1]))return l[0];if(l=e(),is){ce(!0);try{e()}finally{ce(!1)}}return s.memoizedState=[l,i],l}function qu(e,i,s){return s===void 0||(_a&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Cg(),ge.lanes|=e,Ra|=e,s)}function wm(e,i,s,l){return jn(s,i)?s:Xs.current!==null?(e=qu(e,s,l),jn(e,i)||(mn=!0),e):(_a&42)===0?(mn=!0,e.memoizedState=s):(e=Cg(),ge.lanes|=e,Ra|=e,i)}function Cm(e,i,s,l,u){var p=q.p;q.p=p!==0&&8>p?p:8;var M=R.T,w={};R.T=w,Ku(e,!1,i,s);try{var P=u(),W=R.S;if(W!==null&&W(w,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var pt=Tx(P,l);lo(e,i,pt,Jn(e))}else lo(e,i,l,Jn(e))}catch(bt){lo(e,i,{then:function(){},status:"rejected",reason:bt},Jn())}finally{q.p=p,R.T=M}}function Cx(){}function ju(e,i,s,l){if(e.tag!==5)throw Error(a(476));var u=Dm(e).queue;Cm(e,u,i,gt,s===null?Cx:function(){return Um(e),s(l)})}function Dm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:gt,baseState:gt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:gt},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Um(e){var i=Dm(e).next.queue;lo(e,i,{},Jn())}function Zu(){return An(Co)}function Lm(){return en().memoizedState}function Nm(){return en().memoizedState}function Dx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=Jn();e=Sa(s);var l=Ma(i,e,s);l!==null&&(Bn(l,i,s),fo(l,i,s)),i={cache:Lu()},e.payload=i;return}i=i.return}}function Ux(e,i,s){var l=Jn();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Ll(e)?Pm(i,s):(s=bu(e,i,s,l),s!==null&&(Bn(s,e,l),zm(s,i,l)))}function Om(e,i,s){var l=Jn();lo(e,i,s,l)}function lo(e,i,s,l){var u={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ll(e))Pm(i,u);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,w=p(M,s);if(u.hasEagerState=!0,u.eagerState=w,jn(w,M))return ml(e,i,u,0),He===null&&pl(),!1}catch{}finally{}if(s=bu(e,i,u,l),s!==null)return Bn(s,e,l),zm(s,i,l),!0}return!1}function Ku(e,i,s,l){if(l={lane:2,revertLane:Hf(),action:l,hasEagerState:!1,eagerState:null,next:null},Ll(e)){if(i)throw Error(a(479))}else i=bu(e,s,l,2),i!==null&&Bn(i,e,2)}function Ll(e){var i=e.alternate;return e===ge||i!==null&&i===ge}function Pm(e,i){qs=bl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function zm(e,i,s){if((s&4194176)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Ri(e,s)}}var Di={readContext:An,use:wl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je};Di.useCacheRefresh=Je,Di.useMemoCache=Je,Di.useHostTransitionStatus=Je,Di.useFormState=Je,Di.useActionState=Je,Di.useOptimistic=Je;var as={readContext:An,use:wl,useCallback:function(e,i){return Vn().memoizedState=[e,i===void 0?null:i],e},useContext:An,useEffect:Sm,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Dl(4194308,4,Tm.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Dl(4194308,4,e,i)},useInsertionEffect:function(e,i){Dl(4,2,e,i)},useMemo:function(e,i){var s=Vn();i=i===void 0?null:i;var l=e();if(is){ce(!0);try{e()}finally{ce(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Vn();if(s!==void 0){var u=s(i);if(is){ce(!0);try{s(i)}finally{ce(!1)}}}else u=i;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=Ux.bind(null,ge,e),[l.memoizedState,e]},useRef:function(e){var i=Vn();return e={current:e},i.memoizedState=e},useState:function(e){e=ku(e);var i=e.queue,s=Om.bind(null,ge,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Yu,useDeferredValue:function(e,i){var s=Vn();return qu(s,e,i)},useTransition:function(){var e=ku(!1);return e=Cm.bind(null,ge,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=ge,u=Vn();if(we){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),He===null)throw Error(a(349));(be&60)!==0||sm(l,i,s)}u.memoizedState=s;var p={value:s,getSnapshot:i};return u.queue=p,Sm(om.bind(null,l,p,e),[e]),l.flags|=2048,Zs(9,rm.bind(null,l,p,s,i),{destroy:void 0},null),s},useId:function(){var e=Vn(),i=He.identifierPrefix;if(we){var s=Hi,l=Fi;s=(l&~(1<<32-te(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=Al++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=bx++,i=":"+i+"r"+s.toString(32)+":";return e.memoizedState=i},useCacheRefresh:function(){return Vn().memoizedState=Dx.bind(null,ge)}};as.useMemoCache=Hu,as.useHostTransitionStatus=Zu,as.useFormState=gm,as.useActionState=gm,as.useOptimistic=function(e){var i=Vn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Ku.bind(null,ge,!0,s),s.dispatch=i,[e,i]};var va={readContext:An,use:wl,useCallback:Am,useContext:An,useEffect:Wu,useImperativeHandle:bm,useInsertionEffect:Mm,useLayoutEffect:Em,useMemo:Rm,useReducer:Cl,useRef:ym,useState:function(){return Cl(Vi)},useDebugValue:Yu,useDeferredValue:function(e,i){var s=en();return wm(s,Oe.memoizedState,e,i)},useTransition:function(){var e=Cl(Vi)[0],i=en().memoizedState;return[typeof e=="boolean"?e:oo(e),i]},useSyncExternalStore:am,useId:Lm};va.useCacheRefresh=Nm,va.useMemoCache=Hu,va.useHostTransitionStatus=Zu,va.useFormState=_m,va.useActionState=_m,va.useOptimistic=function(e,i){var s=en();return um(s,Oe,e,i)};var ss={readContext:An,use:wl,useCallback:Am,useContext:An,useEffect:Wu,useImperativeHandle:bm,useInsertionEffect:Mm,useLayoutEffect:Em,useMemo:Rm,useReducer:Vu,useRef:ym,useState:function(){return Vu(Vi)},useDebugValue:Yu,useDeferredValue:function(e,i){var s=en();return Oe===null?qu(s,e,i):wm(s,Oe.memoizedState,e,i)},useTransition:function(){var e=Vu(Vi)[0],i=en().memoizedState;return[typeof e=="boolean"?e:oo(e),i]},useSyncExternalStore:am,useId:Lm};ss.useCacheRefresh=Nm,ss.useMemoCache=Hu,ss.useHostTransitionStatus=Zu,ss.useFormState=xm,ss.useActionState=xm,ss.useOptimistic=function(e,i){var s=en();return Oe!==null?um(s,Oe,e,i):(s.baseState=e,[e,s.queue.dispatch])};function Qu(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:A({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Ju={isMounted:function(e){return(e=e._reactInternals)?Z(e)===e:!1},enqueueSetState:function(e,i,s){e=e._reactInternals;var l=Jn(),u=Sa(l);u.payload=i,s!=null&&(u.callback=s),i=Ma(e,u,l),i!==null&&(Bn(i,e,l),fo(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=Jn(),u=Sa(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=Ma(e,u,l),i!==null&&(Bn(i,e,l),fo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=Jn(),l=Sa(s);l.tag=2,i!=null&&(l.callback=i),i=Ma(e,l,s),i!==null&&(Bn(i,e,s),fo(i,e,s))}};function Bm(e,i,s,l,u,p,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!Zr(s,l)||!Zr(u,p):!0}function Im(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&Ju.enqueueReplaceState(i,i.state,null)}function rs(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=A({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Fm(e){Nl(e)}function Hm(e){console.error(e)}function Gm(e){Nl(e)}function Ol(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Vm(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function $u(e,i,s){return s=Sa(s),s.tag=3,s.payload={element:null},s.callback=function(){Ol(e,i)},s}function km(e){return e=Sa(e),e.tag=3,e}function Xm(e,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var p=l.value;e.payload=function(){return u(p)},e.callback=function(){Vm(i,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Vm(i,s,l),typeof u!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function Lx(e,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&uo(i,s,u,!0),s=ri.current,s!==null){switch(s.tag){case 13:return Ci===null?Pf():s.alternate===null&&Ke===0&&(Ke=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===Cu?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Bf(e,l,u)),!1;case 22:return s.flags|=65536,l===Cu?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Bf(e,l,u)),!1}throw Error(a(435,s.tag))}return Bf(e,l,u),Pf(),!1}if(we)return i=ri.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==wu&&(e=Error(a(422),{cause:l}),$r(ii(e,s)))):(l!==wu&&(i=Error(a(423),{cause:l}),$r(ii(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=ii(l,s),u=$u(e.stateNode,l,u),mf(e,u),Ke!==4&&(Ke=2)),!1;var p=Error(a(520),{cause:l});if(p=ii(p,s),yo===null?yo=[p]:yo.push(p),Ke!==4&&(Ke=2),i===null)return!0;l=ii(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=$u(s.stateNode,l,e),mf(s,e),!1;case 1:if(i=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(wa===null||!wa.has(p))))return s.flags|=65536,u&=-u,s.lanes|=u,u=km(u),Xm(u,e,s,l),mf(s,u),!1}s=s.return}while(s!==null);return!1}var Wm=Error(a(461)),mn=!1;function Sn(e,i,s,l){i.child=e===null?Kp(i,null,s,l):es(i,e.child,s,l)}function Ym(e,i,s,l,u){s=s.render;var p=i.ref;if("ref"in l){var M={};for(var w in l)w!=="ref"&&(M[w]=l[w])}else M=l;return ls(i),l=zu(e,i,s,M,p,u),w=Bu(),e!==null&&!mn?(Iu(e,i,u),ki(e,i,u)):(we&&w&&Au(i),i.flags|=1,Sn(e,i,l,u),i.child)}function qm(e,i,s,l,u){if(e===null){var p=s.type;return typeof p=="function"&&!Ef(p)&&p.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=p,jm(e,i,p,l,u)):(e=Fl(s.type,null,l,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(p=e.child,!cf(e,u)){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:Zr,s(M,l)&&e.ref===i.ref)return ki(e,i,u)}return i.flags|=1,e=Aa(p,l),e.ref=i.ref,e.return=i,i.child=e}function jm(e,i,s,l,u){if(e!==null){var p=e.memoizedProps;if(Zr(p,l)&&e.ref===i.ref)if(mn=!1,i.pendingProps=l=p,cf(e,u))(e.flags&131072)!==0&&(mn=!0);else return i.lanes=e.lanes,ki(e,i,u)}return tf(e,i,s,l,u)}function Zm(e,i,s){var l=i.pendingProps,u=l.children,p=(i.stateNode._pendingVisibility&2)!==0,M=e!==null?e.memoizedState:null;if(co(e,i),l.mode==="hidden"||p){if((i.flags&128)!==0){if(l=M!==null?M.baseLanes|s:s,e!==null){for(u=i.child=e.child,p=0;u!==null;)p=p|u.lanes|u.childLanes,u=u.sibling;i.childLanes=p&~l}else i.childLanes=0,i.child=null;return Km(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tl(i,M!==null?M.cachePool:null),M!==null?Qp(i,M):Du(),Jp(i);else return i.lanes=i.childLanes=536870912,Km(e,i,M!==null?M.baseLanes|s:s,s)}else M!==null?(Tl(i,M.cachePool),Qp(i,M),ga(),i.memoizedState=null):(e!==null&&Tl(i,null),Du(),ga());return Sn(e,i,u,s),i.child}function Km(e,i,s,l){var u=Ou();return u=u===null?null:{parent:un._currentValue,pool:u},i.memoizedState={baseLanes:s,cachePool:u},e!==null&&Tl(i,null),Du(),Jp(i),e!==null&&uo(e,i,l,!0),null}function co(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=2097664)}}function tf(e,i,s,l,u){return ls(i),s=zu(e,i,s,l,void 0,u),l=Bu(),e!==null&&!mn?(Iu(e,i,u),ki(e,i,u)):(we&&l&&Au(i),i.flags|=1,Sn(e,i,s,u),i.child)}function Qm(e,i,s,l,u,p){return ls(i),i.updateQueue=null,s=im(i,l,s,u),nm(e),l=Bu(),e!==null&&!mn?(Iu(e,i,p),ki(e,i,p)):(we&&l&&Au(i),i.flags|=1,Sn(e,i,s,p),i.child)}function Jm(e,i,s,l,u){if(ls(i),i.stateNode===null){var p=Hs,M=s.contextType;typeof M=="object"&&M!==null&&(p=An(M)),p=new s(l,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Ju,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=l,p.state=i.memoizedState,p.refs={},df(i),M=s.contextType,p.context=typeof M=="object"&&M!==null?An(M):Hs,p.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(Qu(i,s,M,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&Ju.enqueueReplaceState(p,p.state,null),po(i,l,p,u),ho(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){p=i.stateNode;var w=i.memoizedProps,P=rs(s,w);p.props=P;var W=p.context,pt=s.contextType;M=Hs,typeof pt=="object"&&pt!==null&&(M=An(pt));var bt=s.getDerivedStateFromProps;pt=typeof bt=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,pt||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||W!==M)&&Im(i,p,l,M),ya=!1;var at=i.memoizedState;p.state=at,po(i,l,p,u),ho(),W=i.memoizedState,w||at!==W||ya?(typeof bt=="function"&&(Qu(i,s,bt,l),W=i.memoizedState),(P=ya||Bm(i,s,P,l,at,W,M))?(pt||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=W),p.props=l,p.state=W,p.context=M,l=P):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{p=i.stateNode,pf(e,i),M=i.memoizedProps,pt=rs(s,M),p.props=pt,bt=i.pendingProps,at=p.context,W=s.contextType,P=Hs,typeof W=="object"&&W!==null&&(P=An(W)),w=s.getDerivedStateFromProps,(W=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==bt||at!==P)&&Im(i,p,l,P),ya=!1,at=i.memoizedState,p.state=at,po(i,l,p,u),ho();var ht=i.memoizedState;M!==bt||at!==ht||ya||e!==null&&e.dependencies!==null&&Pl(e.dependencies)?(typeof w=="function"&&(Qu(i,s,w,l),ht=i.memoizedState),(pt=ya||Bm(i,s,pt,l,at,ht,P)||e!==null&&e.dependencies!==null&&Pl(e.dependencies))?(W||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,ht,P),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,ht,P)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ht),p.props=l,p.state=ht,p.context=P,l=pt):(typeof p.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),l=!1)}return p=l,co(e,i),l=(i.flags&128)!==0,p||l?(p=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,e!==null&&l?(i.child=es(i,e.child,null,u),i.child=es(i,null,s,u)):Sn(e,i,s,u),i.memoizedState=p.state,e=i.child):e=ki(e,i,u),e}function $m(e,i,s,l){return Jr(),i.flags|=256,Sn(e,i,s,l),i.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function nf(e){return{baseLanes:e,cachePool:em()}}function af(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=ui),e}function tg(e,i,s){var l=i.pendingProps,u=!1,p=(i.flags&128)!==0,M;if((M=p)||(M=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),M&&(u=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,e===null){if(we){if(u?ma(i):ga(),we){var w=yn,P;if(P=w){t:{for(P=w,w=wi;P.nodeType!==8;){if(!w){w=null;break t}if(P=yi(P.nextSibling),P===null){w=null;break t}}w=P}w!==null?(i.memoizedState={dehydrated:w,treeContext:Ja!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912},P=ci(18,null,null,0),P.stateNode=w,P.return=i,i.child=P,zn=i,yn=null,P=!0):P=!1}P||ts(i)}if(w=i.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?i.lanes=16:i.lanes=536870912,null;Gi(i)}return w=l.children,l=l.fallback,u?(ga(),u=i.mode,w=rf({mode:"hidden",children:w},u),l=us(l,u,s,null),w.return=i,l.return=i,w.sibling=l,i.child=w,u=i.child,u.memoizedState=nf(s),u.childLanes=af(e,M,s),i.memoizedState=ef,l):(ma(i),sf(i,w))}if(P=e.memoizedState,P!==null&&(w=P.dehydrated,w!==null)){if(p)i.flags&256?(ma(i),i.flags&=-257,i=of(e,i,s)):i.memoizedState!==null?(ga(),i.child=e.child,i.flags|=128,i=null):(ga(),u=l.fallback,w=i.mode,l=rf({mode:"visible",children:l.children},w),u=us(u,w,s,null),u.flags|=2,l.return=i,u.return=i,l.sibling=u,i.child=l,es(i,e.child,null,s),l=i.child,l.memoizedState=nf(s),l.childLanes=af(e,M,s),i.memoizedState=ef,i=u);else if(ma(i),w.data==="$!"){if(M=w.nextSibling&&w.nextSibling.dataset,M)var W=M.dgst;M=W,l=Error(a(419)),l.stack="",l.digest=M,$r({value:l,source:null,stack:null}),i=of(e,i,s)}else if(mn||uo(e,i,s,!1),M=(s&e.childLanes)!==0,mn||M){if(M=He,M!==null){if(l=s&-s,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==P.retryLane)throw P.retryLane=l,pa(e,l),Bn(M,e,l),Wm}w.data==="$?"||Pf(),i=of(e,i,s)}else w.data==="$?"?(i.flags|=128,i.child=e.child,i=qx.bind(null,e),w._reactRetry=i,i=null):(e=P.treeContext,yn=yi(w.nextSibling),zn=i,we=!0,vi=null,wi=!1,e!==null&&(ai[si++]=Fi,ai[si++]=Hi,ai[si++]=Ja,Fi=e.id,Hi=e.overflow,Ja=i),i=sf(i,l.children),i.flags|=4096);return i}return u?(ga(),u=l.fallback,w=i.mode,P=e.child,W=P.sibling,l=Aa(P,{mode:"hidden",children:l.children}),l.subtreeFlags=P.subtreeFlags&31457280,W!==null?u=Aa(W,u):(u=us(u,w,s,null),u.flags|=2),u.return=i,l.return=i,l.sibling=u,i.child=l,l=u,u=i.child,w=e.child.memoizedState,w===null?w=nf(s):(P=w.cachePool,P!==null?(W=un._currentValue,P=P.parent!==W?{parent:W,pool:W}:P):P=em(),w={baseLanes:w.baseLanes|s,cachePool:P}),u.memoizedState=w,u.childLanes=af(e,M,s),i.memoizedState=ef,l):(ma(i),s=e.child,e=s.sibling,s=Aa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(M=i.deletions,M===null?(i.deletions=[e],i.flags|=16):M.push(e)),i.child=s,i.memoizedState=null,s)}function sf(e,i){return i=rf({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function rf(e,i){return Ag(e,i,0,null)}function of(e,i,s){return es(i,e.child,null,s),e=sf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function eg(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),ff(e.return,i,s)}function lf(e,i,s,l,u){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=s,p.tailMode=u)}function ng(e,i,s){var l=i.pendingProps,u=l.revealOrder,p=l.tail;if(Sn(e,i,l.children,s),l=cn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eg(e,s,i);else if(e.tag===19)eg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Ft(cn,l),u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&El(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),lf(i,!1,u,s,p);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&El(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}lf(i,!0,s,null,p);break;case"together":lf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ki(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Ra|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(uo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Aa(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Aa(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function cf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Pl(e)))}function Nx(e,i,s){switch(i.tag){case 3:Ie(i,i.stateNode.containerInfo),xa(i,un,e.memoizedState.cache),Jr();break;case 27:case 5:Mt(i);break;case 4:Ie(i,i.stateNode.containerInfo);break;case 10:xa(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ma(i),i.flags|=128,null):(s&i.child.childLanes)!==0?tg(e,i,s):(ma(i),e=ki(e,i,s),e!==null?e.sibling:null);ma(i);break;case 19:var u=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(uo(e,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return ng(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ft(cn,cn.current),l)break;return null;case 22:case 23:return i.lanes=0,Zm(e,i,s);case 24:xa(i,un,e.memoizedState.cache)}return ki(e,i,s)}function ig(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)mn=!0;else{if(!cf(e,s)&&(i.flags&128)===0)return mn=!1,Nx(e,i,s);mn=(e.flags&131072)!==0}else mn=!1,we&&(i.flags&1048576)!==0&&Gp(i,vl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,u=l._init;if(l=u(l._payload),i.type=l,typeof l=="function")Ef(l)?(e=rs(l,e),i.tag=1,i=Jm(null,i,l,e,s)):(i.tag=0,i=tf(null,i,l,e,s));else{if(l!=null){if(u=l.$$typeof,u===E){i.tag=11,i=Ym(null,i,l,e,s);break t}else if(u===x){i.tag=14,i=qm(null,i,l,e,s);break t}}throw i=G(l)||l,Error(a(306,i,""))}}return i;case 0:return tf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=rs(l,i.pendingProps),Jm(e,i,l,u,s);case 3:t:{if(Ie(i,i.stateNode.containerInfo),e===null)throw Error(a(387));var p=i.pendingProps;u=i.memoizedState,l=u.element,pf(e,i),po(i,p,null,s);var M=i.memoizedState;if(p=M.cache,xa(i,un,p),p!==u.cache&&hf(i,[un],s,!0),ho(),p=M.element,u.isDehydrated)if(u={element:p,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=u,i.memoizedState=u,i.flags&256){i=$m(e,i,p,s);break t}else if(p!==l){l=ii(Error(a(424)),i),$r(l),i=$m(e,i,p,s);break t}else for(yn=yi(i.stateNode.containerInfo.firstChild),zn=i,we=!0,vi=null,wi=!0,s=Kp(i,null,p,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Jr(),p===l){i=ki(e,i,s);break t}Sn(e,i,p,s)}i=i.child}return i;case 26:return co(e,i),e===null?(s=r_(i.type,null,i.pendingProps,null))?i.memoizedState=s:we||(s=i.type,e=i.pendingProps,l=Ql(re.current).createElement(s),l[rn]=i,l[on]=e,Mn(l,s,e),$(l),i.stateNode=l):i.memoizedState=r_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Mt(i),e===null&&we&&(l=i.stateNode=i_(i.type,i.pendingProps,re.current),zn=i,wi=!0,yn=yi(l.firstChild)),l=i.pendingProps.children,e!==null||we?Sn(e,i,l,s):i.child=es(i,null,l,s),co(e,i),i.child;case 5:return e===null&&we&&((u=l=yn)&&(l=cy(l,i.type,i.pendingProps,wi),l!==null?(i.stateNode=l,zn=i,yn=yi(l.firstChild),wi=!1,u=!0):u=!1),u||ts(i)),Mt(i),u=i.type,p=i.pendingProps,M=e!==null?e.memoizedProps:null,l=p.children,Zf(u,p)?l=null:M!==null&&Zf(u,M)&&(i.flags|=32),i.memoizedState!==null&&(u=zu(e,i,Ax,null,null,s),Co._currentValue=u),co(e,i),Sn(e,i,l,s),i.child;case 6:return e===null&&we&&((e=s=yn)&&(s=uy(s,i.pendingProps,wi),s!==null?(i.stateNode=s,zn=i,yn=null,e=!0):e=!1),e||ts(i)),null;case 13:return tg(e,i,s);case 4:return Ie(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=es(i,null,l,s):Sn(e,i,l,s),i.child;case 11:return Ym(e,i,i.type,i.pendingProps,s);case 7:return Sn(e,i,i.pendingProps,s),i.child;case 8:return Sn(e,i,i.pendingProps.children,s),i.child;case 12:return Sn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,xa(i,i.type,l.value),Sn(e,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,ls(i),u=An(u),l=l(u),i.flags|=1,Sn(e,i,l,s),i.child;case 14:return qm(e,i,i.type,i.pendingProps,s);case 15:return jm(e,i,i.type,i.pendingProps,s);case 19:return ng(e,i,s);case 22:return Zm(e,i,s);case 24:return ls(i),l=An(un),e===null?(u=Ou(),u===null&&(u=He,p=Lu(),u.pooledCache=p,p.refCount++,p!==null&&(u.pooledCacheLanes|=s),u=p),i.memoizedState={parent:l,cache:u},df(i),xa(i,un,u)):((e.lanes&s)!==0&&(pf(e,i),po(i,null,null,s),ho()),u=e.memoizedState,p=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),xa(i,un,l)):(l=p.cache,xa(i,un,l),l!==u.cache&&hf(i,[un],s,!0))),Sn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}var uf=Lt(null),os=null,Xi=null;function xa(e,i,s){Ft(uf,i._currentValue),i._currentValue=s}function Wi(e){e._currentValue=uf.current,$t(uf)}function ff(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function hf(e,i,s,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var p=u.dependencies;if(p!==null){var M=u.child;p=p.firstContext;t:for(;p!==null;){var w=p;p=u;for(var P=0;P<i.length;P++)if(w.context===i[P]){p.lanes|=s,w=p.alternate,w!==null&&(w.lanes|=s),ff(p.return,s,e),l||(M=null);break t}p=w.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(a(341));M.lanes|=s,p=M.alternate,p!==null&&(p.lanes|=s),ff(M,s,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function uo(e,i,s,l){e=null;for(var u=i,p=!1;u!==null;){if(!p){if((u.flags&524288)!==0)p=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var w=u.type;jn(u.pendingProps.value,M.value)||(e!==null?e.push(w):e=[w])}}else if(u===H.current){if(M=u.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}u=u.return}e!==null&&hf(i,e,s,l),i.flags|=262144}function Pl(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ls(e){os=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return ag(os,e)}function zl(e,i){return os===null&&ls(e),ag(e,i)}function ag(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Xi===null){if(e===null)throw Error(a(308));Xi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Xi=Xi.next=i;return s}var ya=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(We&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=gl(e),Fp(e,null,s),i}return ml(e,l,i,s),gl(e)}function fo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194176)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Ri(e,s)}}function mf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?u=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?u=p=i:p=p.next=i}else u=p=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var gf=!1;function ho(){if(gf){var e=Ys;if(e!==null)throw e}}function po(e,i,s,l){gf=!1;var u=e.updateQueue;ya=!1;var p=u.firstBaseUpdate,M=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var P=w,W=P.next;P.next=null,M===null?p=W:M.next=W,M=P;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,w=pt.lastBaseUpdate,w!==M&&(w===null?pt.firstBaseUpdate=W:w.next=W,pt.lastBaseUpdate=P))}if(p!==null){var bt=u.baseState;M=0,pt=W=P=null,w=p;do{var at=w.lane&-536870913,ht=at!==w.lane;if(ht?(be&at)===at:(l&at)===at){at!==0&&at===Ws&&(gf=!0),pt!==null&&(pt=pt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Zt=e,le=w;at=i;var Qe=s;switch(le.tag){case 1:if(Zt=le.payload,typeof Zt=="function"){bt=Zt.call(Qe,bt,at);break t}bt=Zt;break t;case 3:Zt.flags=Zt.flags&-65537|128;case 0:if(Zt=le.payload,at=typeof Zt=="function"?Zt.call(Qe,bt,at):Zt,at==null)break t;bt=A({},bt,at);break t;case 2:ya=!0}}at=w.callback,at!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[at]:ht.push(at))}else ht={lane:at,tag:w.tag,payload:w.payload,callback:w.callback,next:null},pt===null?(W=pt=ht,P=bt):pt=pt.next=ht,M|=at;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ht=w,w=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);pt===null&&(P=bt),u.baseState=P,u.firstBaseUpdate=W,u.lastBaseUpdate=pt,p===null&&(u.shared.lanes=0),Ra|=M,e.lanes=M,e.memoizedState=bt}}function sg(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function rg(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)sg(s[e],i)}function mo(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&e)===e){l=void 0;var p=s.create,M=s.inst;l=p(),M.destroy=l}s=s.next}while(s!==u)}}catch(w){Fe(i,i.return,w)}}function Ea(e,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var p=u.next;l=p;do{if((l.tag&e)===e){var M=l.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,u=i;var P=s;try{w()}catch(W){Fe(u,P,W)}}}l=l.next}while(l!==p)}}catch(W){Fe(i,i.return,W)}}function og(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{rg(i,s)}catch(l){Fe(e,e.return,l)}}}function lg(e,i,s){s.props=rs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Fe(e,i,l)}}function cs(e,i){try{var s=e.ref;if(s!==null){var l=e.stateNode;switch(e.tag){case 26:case 27:case 5:var u=l;break;default:u=l}typeof s=="function"?e.refCleanup=s(u):s.current=u}}catch(p){Fe(e,i,p)}}function Zn(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){Fe(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Fe(e,i,u)}else s.current=null}function cg(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){Fe(e,e.return,u)}}function ug(e,i,s){try{var l=e.stateNode;ay(l,e.type,s,i),l[on]=i}catch(u){Fe(e,e.return,u)}}function fg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function _f(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vf(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(e,i):s.insertBefore(e,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(e,s)):(i=s,i.appendChild(e)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Kl));else if(l!==4&&l!==27&&(e=e.child,e!==null))for(vf(e,i,s),e=e.sibling;e!==null;)vf(e,i,s),e=e.sibling}function Bl(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&l!==27&&(e=e.child,e!==null))for(Bl(e,i,s),e=e.sibling;e!==null;)Bl(e,i,s),e=e.sibling}var Yi=!1,Ze=!1,xf=!1,hg=typeof WeakSet=="function"?WeakSet:Set,gn=null,dg=!1;function Ox(e,i){if(e=e.containerInfo,qf=ic,e=Dp(e),yu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break t}var M=0,w=-1,P=-1,W=0,pt=0,bt=e,at=null;e:for(;;){for(var ht;bt!==s||u!==0&&bt.nodeType!==3||(w=M+u),bt!==p||l!==0&&bt.nodeType!==3||(P=M+l),bt.nodeType===3&&(M+=bt.nodeValue.length),(ht=bt.firstChild)!==null;)at=bt,bt=ht;for(;;){if(bt===e)break e;if(at===s&&++W===u&&(w=M),at===p&&++pt===l&&(P=M),(ht=bt.nextSibling)!==null)break;bt=at,at=bt.parentNode}bt=ht}s=w===-1||P===-1?null:{start:w,end:P}}else s=null}s=s||{start:0,end:0}}else s=null;for(jf={focusedElem:e,selectionRange:s},ic=!1,gn=i;gn!==null;)if(i=gn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,gn=e;else for(;gn!==null;){switch(i=gn,p=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,s=i,u=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Zt=rs(s.type,u,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(Zt,p),l.__reactInternalSnapshotBeforeUpdate=e}catch(le){Fe(s,s.return,le)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Jf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,gn=e;break}gn=i.return}return Zt=dg,dg=!1,Zt}function pg(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ji(e,s),l&4&&mo(5,s);break;case 1:if(ji(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(w){Fe(s,s.return,w)}else{var u=rs(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(w){Fe(s,s.return,w)}}l&64&&og(s),l&512&&cs(s,s.return);break;case 3:if(ji(e,s),l&64&&(l=s.updateQueue,l!==null)){if(e=null,s.child!==null)switch(s.child.tag){case 27:case 5:e=s.child.stateNode;break;case 1:e=s.child.stateNode}try{rg(l,e)}catch(w){Fe(s,s.return,w)}}break;case 26:ji(e,s),l&512&&cs(s,s.return);break;case 27:case 5:ji(e,s),i===null&&l&4&&cg(s),l&512&&cs(s,s.return);break;case 12:ji(e,s);break;case 13:ji(e,s),l&4&&_g(e,s);break;case 22:if(u=s.memoizedState!==null||Yi,!u){i=i!==null&&i.memoizedState!==null||Ze;var p=Yi,M=Ze;Yi=u,(Ze=i)&&!M?Ta(e,s,(s.subtreeFlags&8772)!==0):ji(e,s),Yi=p,Ze=M}l&512&&(s.memoizedProps.mode==="manual"?cs(s,s.return):Zn(s,s.return));break;default:ji(e,s)}}function mg(e){var i=e.alternate;i!==null&&(e.alternate=null,mg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Gr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,Kn=!1;function qi(e,i,s){for(s=s.child;s!==null;)gg(e,i,s),s=s.sibling}function gg(e,i,s){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Qt,s)}catch{}switch(s.tag){case 26:Ze||Zn(s,i),qi(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Ze||Zn(s,i);var l=nn,u=Kn;for(nn=s.stateNode,qi(e,i,s),s=s.stateNode,i=s.attributes;i.length;)s.removeAttributeNode(i[0]);Gr(s),nn=l,Kn=u;break;case 5:Ze||Zn(s,i);case 6:u=nn;var p=Kn;if(nn=null,qi(e,i,s),nn=u,Kn=p,nn!==null)if(Kn)try{e=nn,l=s.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)}catch(M){Fe(s,i,M)}else try{nn.removeChild(s.stateNode)}catch(M){Fe(s,i,M)}break;case 18:nn!==null&&(Kn?(i=nn,s=s.stateNode,i.nodeType===8?Qf(i.parentNode,s):i.nodeType===1&&Qf(i,s),No(i)):Qf(nn,s.stateNode));break;case 4:l=nn,u=Kn,nn=s.stateNode.containerInfo,Kn=!0,qi(e,i,s),nn=l,Kn=u;break;case 0:case 11:case 14:case 15:Ze||Ea(2,s,i),Ze||Ea(4,s,i),qi(e,i,s);break;case 1:Ze||(Zn(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&lg(s,i,l)),qi(e,i,s);break;case 21:qi(e,i,s);break;case 22:Ze||Zn(s,i),Ze=(l=Ze)||s.memoizedState!==null,qi(e,i,s),Ze=l;break;default:qi(e,i,s)}}function _g(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{No(e)}catch(s){Fe(i,i.return,s)}}function Px(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new hg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new hg),i;default:throw Error(a(435,e.tag))}}function yf(e,i){var s=Px(e);i.forEach(function(l){var u=jx.bind(null,e,l);s.has(l)||(s.add(l),l.then(u,u))})}function oi(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],p=e,M=i,w=M;t:for(;w!==null;){switch(w.tag){case 27:case 5:nn=w.stateNode,Kn=!1;break t;case 3:nn=w.stateNode.containerInfo,Kn=!0;break t;case 4:nn=w.stateNode.containerInfo,Kn=!0;break t}w=w.return}if(nn===null)throw Error(a(160));gg(p,M,u),nn=null,Kn=!1,p=u.alternate,p!==null&&(p.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)vg(i,e),i=i.sibling}var xi=null;function vg(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:oi(i,e),li(e),l&4&&(Ea(3,e,e.return),mo(3,e),Ea(5,e,e.return));break;case 1:oi(i,e),li(e),l&512&&(Ze||s===null||Zn(s,s.return)),l&64&&Yi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=xi;if(oi(i,e),li(e),l&512&&(Ze||s===null||Zn(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":p=u.getElementsByTagName("title")[0],(!p||p[ja]||p[rn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=u.createElement(l),u.head.insertBefore(p,u.querySelector("head > title"))),Mn(p,l,s),p[rn]=e,$(p),l=p;break t;case"link":var M=c_("link","href",u).get(l+(s.href||""));if(M){for(var w=0;w<M.length;w++)if(p=M[w],p.getAttribute("href")===(s.href==null?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(w,1);break e}}p=u.createElement(l),Mn(p,l,s),u.head.appendChild(p);break;case"meta":if(M=c_("meta","content",u).get(l+(s.content||""))){for(w=0;w<M.length;w++)if(p=M[w],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(w,1);break e}}p=u.createElement(l),Mn(p,l,s),u.head.appendChild(p);break;default:throw Error(a(468,l))}p[rn]=e,$(p),l=p}e.stateNode=l}else u_(u,e.type,e.stateNode);else e.stateNode=l_(u,l,e.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?u_(u,e.type,e.stateNode):l_(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ug(e,e.memoizedProps,s.memoizedProps)}break;case 27:if(l&4&&e.alternate===null){u=e.stateNode,p=e.memoizedProps;try{for(var P=u.firstChild;P;){var W=P.nextSibling,pt=P.nodeName;P[ja]||pt==="HEAD"||pt==="BODY"||pt==="SCRIPT"||pt==="STYLE"||pt==="LINK"&&P.rel.toLowerCase()==="stylesheet"||u.removeChild(P),P=W}for(var bt=e.type,at=u.attributes;at.length;)u.removeAttributeNode(at[0]);Mn(u,bt,p),u[rn]=e,u[on]=p}catch(Zt){Fe(e,e.return,Zt)}}case 5:if(oi(i,e),li(e),l&512&&(Ze||s===null||Zn(s,s.return)),e.flags&32){u=e.stateNode;try{Hn(u,"")}catch(Zt){Fe(e,e.return,Zt)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,ug(e,u,s!==null?s.memoizedProps:u)),l&1024&&(xf=!0);break;case 6:if(oi(i,e),li(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Zt){Fe(e,e.return,Zt)}}break;case 3:if(tc=null,u=xi,xi=Jl(i.containerInfo),oi(i,e),xi=u,li(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{No(i.containerInfo)}catch(Zt){Fe(e,e.return,Zt)}xf&&(xf=!1,xg(e));break;case 4:l=xi,xi=Jl(e.stateNode.containerInfo),oi(i,e),li(e),xi=l;break;case 12:oi(i,e),li(e);break;case 13:oi(i,e),li(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Cf=rt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,yf(e,l)));break;case 22:if(l&512&&(Ze||s===null||Zn(s,s.return)),P=e.memoizedState!==null,W=s!==null&&s.memoizedState!==null,pt=Yi,bt=Ze,Yi=pt||P,Ze=bt||W,oi(i,e),Ze=bt,Yi=pt,li(e),i=e.stateNode,i._current=e,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,l&8192&&(i._visibility=P?i._visibility&-2:i._visibility|1,P&&(i=Yi||Ze,s===null||W||i||Ks(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(s=null,i=e;;){if(i.tag===5||i.tag===26||i.tag===27){if(s===null){W=s=i;try{if(u=W.stateNode,P)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{M=W.stateNode,w=W.memoizedProps.style;var ht=w!=null&&w.hasOwnProperty("display")?w.display:null;M.style.display=ht==null||typeof ht=="boolean"?"":(""+ht).trim()}}catch(Zt){Fe(W,W.return,Zt)}}}else if(i.tag===6){if(s===null){W=i;try{W.stateNode.nodeValue=P?"":W.memoizedProps}catch(Zt){Fe(W,W.return,Zt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,yf(e,s))));break;case 19:oi(i,e),li(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,yf(e,l)));break;case 21:break;default:oi(i,e),li(e)}}function li(e){var i=e.flags;if(i&2){try{if(e.tag!==27){t:{for(var s=e.return;s!==null;){if(fg(s)){var l=s;break t}s=s.return}throw Error(a(160))}switch(l.tag){case 27:var u=l.stateNode,p=_f(e);Bl(e,p,u);break;case 5:var M=l.stateNode;l.flags&32&&(Hn(M,""),l.flags&=-33);var w=_f(e);Bl(e,w,M);break;case 3:case 4:var P=l.stateNode.containerInfo,W=_f(e);vf(e,W,P);break;default:throw Error(a(161))}}}catch(pt){Fe(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function xg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;xg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ji(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)pg(e,i.alternate,i),i=i.sibling}function Ks(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ea(4,i,i.return),Ks(i);break;case 1:Zn(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&lg(i,i.return,s),Ks(i);break;case 26:case 27:case 5:Zn(i,i.return),Ks(i);break;case 22:Zn(i,i.return),i.memoizedState===null&&Ks(i);break;default:Ks(i)}e=e.sibling}}function Ta(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=e,p=i,M=p.flags;switch(p.tag){case 0:case 11:case 15:Ta(u,p,s),mo(4,p);break;case 1:if(Ta(u,p,s),l=p,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(W){Fe(l,l.return,W)}if(l=p,u=l.updateQueue,u!==null){var w=l.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)sg(P[u],w)}catch(W){Fe(l,l.return,W)}}s&&M&64&&og(p),cs(p,p.return);break;case 26:case 27:case 5:Ta(u,p,s),s&&l===null&&M&4&&cg(p),cs(p,p.return);break;case 12:Ta(u,p,s);break;case 13:Ta(u,p,s),s&&M&4&&_g(u,p);break;case 22:p.memoizedState===null&&Ta(u,p,s),cs(p,p.return);break;default:Ta(u,p,s)}i=i.sibling}}function Sf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&ao(s))}function Mf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ao(e))}function ba(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)yg(e,i,s,l),i=i.sibling}function yg(e,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:ba(e,i,s,l),u&2048&&mo(9,i);break;case 3:ba(e,i,s,l),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ao(e)));break;case 12:if(u&2048){ba(e,i,s,l),e=i.stateNode;try{var p=i.memoizedProps,M=p.id,w=p.onPostCommit;typeof w=="function"&&w(M,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Fe(i,i.return,P)}}else ba(e,i,s,l);break;case 23:break;case 22:p=i.stateNode,i.memoizedState!==null?p._visibility&4?ba(e,i,s,l):go(e,i):p._visibility&4?ba(e,i,s,l):(p._visibility|=4,Qs(e,i,s,l,(i.subtreeFlags&10256)!==0)),u&2048&&Sf(i.alternate,i);break;case 24:ba(e,i,s,l),u&2048&&Mf(i.alternate,i);break;default:ba(e,i,s,l)}}function Qs(e,i,s,l,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var p=e,M=i,w=s,P=l,W=M.flags;switch(M.tag){case 0:case 11:case 15:Qs(p,M,w,P,u),mo(8,M);break;case 23:break;case 22:var pt=M.stateNode;M.memoizedState!==null?pt._visibility&4?Qs(p,M,w,P,u):go(p,M):(pt._visibility|=4,Qs(p,M,w,P,u)),u&&W&2048&&Sf(M.alternate,M);break;case 24:Qs(p,M,w,P,u),u&&W&2048&&Mf(M.alternate,M);break;default:Qs(p,M,w,P,u)}i=i.sibling}}function go(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,u=l.flags;switch(l.tag){case 22:go(s,l),u&2048&&Sf(l.alternate,l);break;case 24:go(s,l),u&2048&&Mf(l.alternate,l);break;default:go(s,l)}i=i.sibling}}var _o=8192;function Js(e){if(e.subtreeFlags&_o)for(e=e.child;e!==null;)Sg(e),e=e.sibling}function Sg(e){switch(e.tag){case 26:Js(e),e.flags&_o&&e.memoizedState!==null&&Ey(xi,e.memoizedState,e.memoizedProps);break;case 5:Js(e);break;case 3:case 4:var i=xi;xi=Jl(e.stateNode.containerInfo),Js(e),xi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=_o,_o=16777216,Js(e),_o=i):Js(e));break;default:Js(e)}}function Mg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function vo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];gn=l,Tg(l,e)}Mg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Eg(e),e=e.sibling}function Eg(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&4&&(e.return===null||e.return.tag!==13)?(i._visibility&=-5,Il(e)):vo(e);break;default:vo(e)}}function Il(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];gn=l,Tg(l,e)}Mg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ea(8,i,i.return),Il(i);break;case 22:s=i.stateNode,s._visibility&4&&(s._visibility&=-5,Il(i));break;default:Il(i)}e=e.sibling}}function Tg(e,i){for(;gn!==null;){var s=gn;switch(s.tag){case 0:case 11:case 15:Ea(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ao(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,gn=l;else t:for(s=e;gn!==null;){l=gn;var u=l.sibling,p=l.return;if(mg(l),l===s){gn=null;break t}if(u!==null){u.return=p,gn=u;break t}gn=p}}}function zx(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,i,s,l){return new zx(e,i,s,l)}function Ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Aa(e,i){var s=e.alternate;return s===null?(s=ci(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&31457280,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function bg(e,i){e.flags&=31457282;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Fl(e,i,s,l,u,p){var M=0;if(l=e,typeof e=="function")Ef(e)&&(M=1);else if(typeof e=="string")M=Sy(e,s,ue.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return us(s.children,u,p,i);case d:M=8,u|=24;break;case g:return e=ci(12,s,i,u|2),e.elementType=g,e.lanes=p,e;case b:return e=ci(13,s,i,u),e.elementType=b,e.lanes=p,e;case S:return e=ci(19,s,i,u),e.elementType=S,e.lanes=p,e;case U:return Ag(s,u,p,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case y:M=10;break t;case v:M=9;break t;case E:M=11;break t;case x:M=14;break t;case O:M=16,l=null;break t}M=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=ci(M,s,i,u),i.elementType=e,i.type=l,i.lanes=p,i}function us(e,i,s,l){return e=ci(7,e,l,i),e.lanes=s,e}function Ag(e,i,s,l){e=ci(22,e,l,i),e.elementType=U,e.lanes=s;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var p=u._current;if(p===null)throw Error(a(456));if((u._pendingVisibility&2)===0){var M=pa(p,2);M!==null&&(u._pendingVisibility|=2,Bn(M,p,2))}},attach:function(){var p=u._current;if(p===null)throw Error(a(456));if((u._pendingVisibility&2)!==0){var M=pa(p,2);M!==null&&(u._pendingVisibility&=-3,Bn(M,p,2))}}};return e.stateNode=u,e}function Tf(e,i,s){return e=ci(6,e,null,i),e.lanes=s,e}function bf(e,i,s){return i=ci(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function Zi(e){e.flags|=4}function Rg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!f_(i)){if(i=ri.current,i!==null&&((be&4194176)===be?Ci!==null:(be&62914560)!==be&&(be&536870912)===0||i!==Ci))throw eo=Cu,Xp;e.flags|=8192}}function Hl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ae():536870912,e.lanes|=i,tr|=i)}function xo(e,i){if(!we)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Xe(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&31457280,l|=u.flags&31457280,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function Bx(e,i,s){var l=i.pendingProps;switch(Ru(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(i),null;case 1:return Xe(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Wi(un),vt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Qr(i)?Zi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,vi!==null&&(Nf(vi),vi=null))),Xe(i),null;case 26:return s=i.memoizedState,e===null?(Zi(i),s!==null?(Xe(i),Rg(i,s)):(Xe(i),i.flags&=-16777217)):s?s!==e.memoizedState?(Zi(i),Xe(i),Rg(i,s)):(Xe(i),i.flags&=-16777217):(e.memoizedProps!==l&&Zi(i),Xe(i),i.flags&=-16777217),null;case 27:dt(i),s=re.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Zi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Xe(i),null}e=ue.current,Qr(i)?Vp(i):(e=i_(u,l,s),i.stateNode=e,Zi(i))}return Xe(i),null;case 5:if(dt(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Zi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Xe(i),null}if(e=ue.current,Qr(i))Vp(i);else{switch(u=Ql(re.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(s,{is:l.is}):u.createElement(s)}}e[rn]=i,e[on]=l;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(Mn(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zi(i)}}return Xe(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Zi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=re.current,Qr(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,u=zn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[rn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Qg(e.nodeValue,s)),e||ts(i)}else e=Ql(e).createTextNode(l),e[rn]=i,i.stateNode=e}return Xe(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Qr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[rn]=i}else Jr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Xe(i),u=!1}else vi!==null&&(Nf(vi),vi=null),u=!0;if(!u)return i.flags&256?(Gi(i),i):(Gi(i),null)}if(Gi(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var p=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==u&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),Hl(i,i.updateQueue),Xe(i),null;case 4:return vt(),e===null&&Xf(i.stateNode.containerInfo),Xe(i),null;case 10:return Wi(i.type),Xe(i),null;case 19:if($t(cn),u=i.memoizedState,u===null)return Xe(i),null;if(l=(i.flags&128)!==0,p=u.rendering,p===null)if(l)xo(u,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(p=El(e),p!==null){for(i.flags|=128,xo(u,!1),e=p.updateQueue,i.updateQueue=e,Hl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)bg(s,e),s=s.sibling;return Ft(cn,cn.current&1|2),i.child}e=e.sibling}u.tail!==null&&rt()>Gl&&(i.flags|=128,l=!0,xo(u,!1),i.lanes=4194304)}else{if(!l)if(e=El(p),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Hl(i,e),xo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!p.alternate&&!we)return Xe(i),null}else 2*rt()-u.renderingStartTime>Gl&&s!==536870912&&(i.flags|=128,l=!0,xo(u,!1),i.lanes=4194304);u.isBackwards?(p.sibling=i.child,i.child=p):(e=u.last,e!==null?e.sibling=p:i.child=p,u.last=p)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=rt(),i.sibling=null,e=cn.current,Ft(cn,l?e&1|2:e&1),i):(Xe(i),null);case 22:case 23:return Gi(i),Uu(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Xe(i),i.subtreeFlags&6&&(i.flags|=8192)):Xe(i),s=i.updateQueue,s!==null&&Hl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&$t(ns),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Wi(un),Xe(i),null;case 25:return null}throw Error(a(156,i.tag))}function Ix(e,i){switch(Ru(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Wi(un),vt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return dt(i),null;case 13:if(Gi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Jr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return $t(cn),null;case 4:return vt(),null;case 10:return Wi(i.type),null;case 22:case 23:return Gi(i),Uu(),e!==null&&$t(ns),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Wi(un),null;case 25:return null;default:return null}}function wg(e,i){switch(Ru(i),i.tag){case 3:Wi(un),vt();break;case 26:case 27:case 5:dt(i);break;case 4:vt();break;case 13:Gi(i);break;case 19:$t(cn);break;case 10:Wi(i.type);break;case 22:case 23:Gi(i),Uu(),e!==null&&$t(ns);break;case 24:Wi(un)}}var Fx={getCacheForType:function(e){var i=An(un),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},Hx=typeof WeakMap=="function"?WeakMap:Map,We=0,He=null,xe=null,be=0,Ge=0,Qn=null,Ki=!1,$s=!1,Af=!1,Qi=0,Ke=0,Ra=0,fs=0,Rf=0,ui=0,tr=0,yo=null,Ui=null,wf=!1,Cf=0,Gl=1/0,Vl=null,wa=null,kl=!1,hs=null,So=0,Df=0,Uf=null,Mo=0,Lf=null;function Jn(){if((We&2)!==0&&be!==0)return be&-be;if(R.T!==null){var e=Ws;return e!==0?e:Hf()}return Hr()}function Cg(){ui===0&&(ui=(be&536870912)===0||we?sn():536870912);var e=ri.current;return e!==null&&(e.flags|=32),ui}function Bn(e,i,s){(e===He&&Ge===2||e.cancelPendingCommit!==null)&&(er(e,0),Ji(e,be,ui,!1)),Nn(e,s),((We&2)===0||e!==He)&&(e===He&&((We&2)===0&&(fs|=s),Ke===4&&Ji(e,be,ui,!1)),Li(e))}function Dg(e,i,s){if((We&6)!==0)throw Error(a(327));var l=!s&&(i&60)===0&&(i&e.expiredLanes)===0||ae(e,i),u=l?kx(e,i):zf(e,i,!0),p=l;do{if(u===0){$s&&!l&&Ji(e,i,0,!1);break}else if(u===6)Ji(e,i,0,!Ki);else{if(s=e.current.alternate,p&&!Gx(s)){u=zf(e,i,!1),p=!1;continue}if(u===2){if(p=i,e.errorRecoveryDisabledLanes&p)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;t:{var w=e;u=yo;var P=w.current.memoizedState.isDehydrated;if(P&&(er(w,M).flags|=256),M=zf(w,M,!1),M!==2){if(Af&&!P){w.errorRecoveryDisabledLanes|=p,fs|=p,u=4;break t}p=Ui,Ui=u,p!==null&&Nf(p)}u=M}if(p=!1,u!==2)continue}}if(u===1){er(e,0),Ji(e,i,0,!0);break}t:{switch(l=e,u){case 0:case 1:throw Error(a(345));case 4:if((i&4194176)===i){Ji(l,i,ui,!Ki);break t}break;case 2:Ui=null;break;case 3:case 5:break;default:throw Error(a(329))}if(l.finishedWork=s,l.finishedLanes=i,(i&62914560)===i&&(p=Cf+300-rt(),10<p)){if(Ji(l,i,ui,!Ki),Bt(l,0)!==0)break t;l.timeoutHandle=t_(Ug.bind(null,l,s,Ui,Vl,wf,i,ui,fs,tr,Ki,2,-0,0),p);break t}Ug(l,s,Ui,Vl,wf,i,ui,fs,tr,Ki,0,-0,0)}}break}while(!0);Li(e)}function Nf(e){Ui===null?Ui=e:Ui.push.apply(Ui,e)}function Ug(e,i,s,l,u,p,M,w,P,W,pt,bt,at){var ht=i.subtreeFlags;if((ht&8192||(ht&16785408)===16785408)&&(wo={stylesheets:null,count:0,unsuspend:My},Sg(i),i=Ty(),i!==null)){e.cancelPendingCommit=i(Ig.bind(null,e,s,l,u,M,w,P,1,bt,at)),Ji(e,p,M,!W);return}Ig(e,s,l,u,M,w,P,pt,bt,at)}function Gx(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],p=u.getSnapshot;u=u.value;try{if(!jn(p(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ji(e,i,s,l){i&=~Rf,i&=~fs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var u=i;0<u;){var p=31-te(u),M=1<<p;l[p]=-1,u&=~M}s!==0&&Fr(e,s,i)}function Xl(){return(We&6)===0?(Eo(0),!1):!0}function Of(){if(xe!==null){if(Ge===0)var e=xe.return;else e=xe,Xi=os=null,Fu(e),ks=null,no=0,e=xe;for(;e!==null;)wg(e.alternate,e),e=e.return;xe=null}}function er(e,i){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,ry(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Of(),He=e,xe=s=Aa(e.current,null),be=i,Ge=0,Qn=null,Ki=!1,$s=ae(e,i),Af=!1,tr=ui=Rf=fs=Ra=Ke=0,Ui=yo=null,wf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var u=31-te(l),p=1<<u;i|=e[u],l&=~p}return Qi=i,pl(),s}function Lg(e,i){ge=null,R.H=Di,i===to?(i=qp(),Ge=3):i===Xp?(i=qp(),Ge=4):Ge=i===Wm?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Qn=i,xe===null&&(Ke=1,Ol(e,ii(i,e.current)))}function Ng(){var e=R.H;return R.H=Di,e===null?Di:e}function Og(){var e=R.A;return R.A=Fx,e}function Pf(){Ke=4,Ki||(be&4194176)!==be&&ri.current!==null||($s=!0),(Ra&134217727)===0&&(fs&134217727)===0||He===null||Ji(He,be,ui,!1)}function zf(e,i,s){var l=We;We|=2;var u=Ng(),p=Og();(He!==e||be!==i)&&(Vl=null,er(e,i)),i=!1;var M=Ke;t:do try{if(Ge!==0&&xe!==null){var w=xe,P=Qn;switch(Ge){case 8:Of(),M=6;break t;case 3:case 2:case 6:ri.current===null&&(i=!0);var W=Ge;if(Ge=0,Qn=null,nr(e,w,P,W),s&&$s){M=0;break t}break;default:W=Ge,Ge=0,Qn=null,nr(e,w,P,W)}}Vx(),M=Ke;break}catch(pt){Lg(e,pt)}while(!0);return i&&e.shellSuspendCounter++,Xi=os=null,We=l,R.H=u,R.A=p,xe===null&&(He=null,be=0,pl()),M}function Vx(){for(;xe!==null;)Pg(xe)}function kx(e,i){var s=We;We|=2;var l=Ng(),u=Og();He!==e||be!==i?(Vl=null,Gl=rt()+500,er(e,i)):$s=ae(e,i);t:do try{if(Ge!==0&&xe!==null){i=xe;var p=Qn;e:switch(Ge){case 1:Ge=0,Qn=null,nr(e,i,p,1);break;case 2:if(Wp(p)){Ge=0,Qn=null,zg(i);break}i=function(){Ge===2&&He===e&&(Ge=7),Li(e)},p.then(i,i);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:Wp(p)?(Ge=0,Qn=null,zg(i)):(Ge=0,Qn=null,nr(e,i,p,7));break;case 5:var M=null;switch(xe.tag){case 26:M=xe.memoizedState;case 5:case 27:var w=xe;if(!M||f_(M)){Ge=0,Qn=null;var P=w.sibling;if(P!==null)xe=P;else{var W=w.return;W!==null?(xe=W,Wl(W)):xe=null}break e}}Ge=0,Qn=null,nr(e,i,p,5);break;case 6:Ge=0,Qn=null,nr(e,i,p,6);break;case 8:Of(),Ke=6;break t;default:throw Error(a(462))}}Xx();break}catch(pt){Lg(e,pt)}while(!0);return Xi=os=null,R.H=l,R.A=u,We=s,xe!==null?0:(He=null,be=0,pl(),Ke)}function Xx(){for(;xe!==null&&!T();)Pg(xe)}function Pg(e){var i=ig(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,i===null?Wl(e):xe=i}function zg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Qm(s,i,i.pendingProps,i.type,void 0,be);break;case 11:i=Qm(s,i,i.pendingProps,i.type.render,i.ref,be);break;case 5:Fu(i);default:wg(s,i),i=xe=bg(i,Qi),i=ig(s,i,Qi)}e.memoizedProps=e.pendingProps,i===null?Wl(e):xe=i}function nr(e,i,s,l){Xi=os=null,Fu(i),ks=null,no=0;var u=i.return;try{if(Lx(e,u,i,s,be)){Ke=1,Ol(e,ii(s,e.current)),xe=null;return}}catch(p){if(u!==null)throw xe=u,p;Ke=1,Ol(e,ii(s,e.current)),xe=null;return}i.flags&32768?(we||l===1?e=!0:$s||(be&536870912)!==0?e=!1:(Ki=e=!0,(l===2||l===3||l===6)&&(l=ri.current,l!==null&&l.tag===13&&(l.flags|=16384))),Bg(i,e)):Wl(i)}function Wl(e){var i=e;do{if((i.flags&32768)!==0){Bg(i,Ki);return}e=i.return;var s=Bx(i.alternate,i,Qi);if(s!==null){xe=s;return}if(i=i.sibling,i!==null){xe=i;return}xe=i=e}while(i!==null);Ke===0&&(Ke=5)}function Bg(e,i){do{var s=Ix(e.alternate,e);if(s!==null){s.flags&=32767,xe=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){xe=e;return}xe=e=s}while(e!==null);Ke=6,xe=null}function Ig(e,i,s,l,u,p,M,w,P,W){var pt=R.T,bt=q.p;try{q.p=2,R.T=null,Wx(e,i,s,l,bt,u,p,M,w,P,W)}finally{R.T=pt,q.p=bt}}function Wx(e,i,s,l,u,p,M,w){do ir();while(hs!==null);if((We&6)!==0)throw Error(a(327));var P=e.finishedWork;if(l=e.finishedLanes,P===null)return null;if(e.finishedWork=null,e.finishedLanes=0,P===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var W=P.lanes|P.childLanes;if(W|=Tu,al(e,l,W,p,M,w),e===He&&(xe=He=null,be=0),(P.subtreeFlags&10256)===0&&(P.flags&10256)===0||kl||(kl=!0,Df=W,Uf=s,Zx(Dt,function(){return ir(),null})),s=(P.flags&15990)!==0,(P.subtreeFlags&15990)!==0||s?(s=R.T,R.T=null,p=q.p,q.p=2,M=We,We|=4,Ox(e,P),vg(P,e),mx(jf,e.containerInfo),ic=!!qf,jf=qf=null,e.current=P,pg(e,P.alternate,P),K(),We=M,q.p=p,R.T=s):e.current=P,kl?(kl=!1,hs=e,So=l):Fg(e,W),W=e.pendingLanes,W===0&&(wa=null),Xt(P.stateNode),Li(e),i!==null)for(u=e.onRecoverableError,P=0;P<i.length;P++)W=i[P],u(W.value,{componentStack:W.stack});return(So&3)!==0&&ir(),W=e.pendingLanes,(l&4194218)!==0&&(W&42)!==0?e===Lf?Mo++:(Mo=0,Lf=e):Mo=0,Eo(0),null}function Fg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,ao(i)))}function ir(){if(hs!==null){var e=hs,i=Df;Df=0;var s=Us(So),l=R.T,u=q.p;try{if(q.p=32>s?32:s,R.T=null,hs===null)var p=!1;else{s=Uf,Uf=null;var M=hs,w=So;if(hs=null,So=0,(We&6)!==0)throw Error(a(331));var P=We;if(We|=4,Eg(M.current),yg(M,M.current,w,s),We=P,Eo(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Qt,M)}catch{}p=!0}return p}finally{q.p=u,R.T=l,Fg(e,i)}}return!1}function Hg(e,i,s){i=ii(s,i),i=$u(e.stateNode,i,2),e=Ma(e,i,2),e!==null&&(Nn(e,2),Li(e))}function Fe(e,i,s){if(e.tag===3)Hg(e,e,s);else for(;i!==null;){if(i.tag===3){Hg(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wa===null||!wa.has(l))){e=ii(s,e),s=km(2),l=Ma(i,s,2),l!==null&&(Xm(s,l,i,e),Nn(l,2),Li(l));break}}i=i.return}}function Bf(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new Hx;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(Af=!0,u.add(s),e=Yx.bind(null,e,i,s),i.then(e,e))}function Yx(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,He===e&&(be&s)===s&&(Ke===4||Ke===3&&(be&62914560)===be&&300>rt()-Cf?(We&2)===0&&er(e,0):Rf|=s,tr===be&&(tr=0)),Li(e)}function Gg(e,i){i===0&&(i=Ae()),e=pa(e,i),e!==null&&(Nn(e,i),Li(e))}function qx(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Gg(e,s)}function jx(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Gg(e,s)}function Zx(e,i){return mt(e,i)}var Yl=null,ar=null,If=!1,ql=!1,Ff=!1,ds=0;function Li(e){e!==ar&&e.next===null&&(ar===null?Yl=ar=e:ar=ar.next=e),ql=!0,If||(If=!0,Qx(Kx))}function Eo(e,i){if(!Ff&&ql){Ff=!0;do for(var s=!1,l=Yl;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var p=0;else{var M=l.suspendedLanes,w=l.pingedLanes;p=(1<<31-te(42|e)+1)-1,p&=u&~(M&~w),p=p&201326677?p&201326677|1:p?p|2:0}p!==0&&(s=!0,Xg(l,p))}else p=be,p=Bt(l,l===He?p:0),(p&3)===0||ae(l,p)||(s=!0,Xg(l,p));l=l.next}while(s);Ff=!1}}function Kx(){ql=If=!1;var e=0;ds!==0&&(sy()&&(e=ds),ds=0);for(var i=rt(),s=null,l=Yl;l!==null;){var u=l.next,p=Vg(l,i);p===0?(l.next=null,s===null?Yl=u:s.next=u,u===null&&(ar=s)):(s=l,(e!==0||(p&3)!==0)&&(ql=!0)),l=u}Eo(e)}function Vg(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var M=31-te(p),w=1<<M,P=u[M];P===-1?((w&s)===0||(w&l)!==0)&&(u[M]=ke(w,i)):P<=i&&(e.expiredLanes|=w),p&=~w}if(i=He,s=be,s=Bt(e,e===i?s:0),l=e.callbackNode,s===0||e===i&&Ge===2||e.cancelPendingCommit!==null)return l!==null&&l!==null&&L(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||ae(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&L(l),Us(s)){case 2:case 8:s=Yt;break;case 32:s=Dt;break;case 268435456:s=me;break;default:s=Dt}return l=kg.bind(null,e),s=mt(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&L(l),e.callbackPriority=2,e.callbackNode=null,2}function kg(e,i){var s=e.callbackNode;if(ir()&&e.callbackNode!==s)return null;var l=be;return l=Bt(e,e===He?l:0),l===0?null:(Dg(e,l,i),Vg(e,rt()),e.callbackNode!=null&&e.callbackNode===s?kg.bind(null,e):null)}function Xg(e,i){if(ir())return null;Dg(e,i,!0)}function Qx(e){oy(function(){(We&6)!==0?mt(ut,e):e()})}function Hf(){return ds===0&&(ds=sn()),ds}function Wg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ol(""+e)}function Yg(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Jx(e,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var p=Wg((u[on]||null).action),M=l.submitter;M&&(i=(i=M[on]||null)?Wg(i.formAction):M.getAttribute("formAction"),i!==null&&(p=i,M=null));var w=new fl("action","action",null,l,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ds!==0){var P=M?Yg(u,M):new FormData(u);ju(s,{pending:!0,data:P,method:u.method,action:p},null,P)}}else typeof p=="function"&&(w.preventDefault(),P=M?Yg(u,M):new FormData(u),ju(s,{pending:!0,data:P,method:u.method,action:p},p,P))},currentTarget:u}]})}}for(var Gf=0;Gf<Ip.length;Gf++){var Vf=Ip[Gf],$x=Vf.toLowerCase(),ty=Vf[0].toUpperCase()+Vf.slice(1);_i($x,"on"+ty)}_i(Np,"onAnimationEnd"),_i(Op,"onAnimationIteration"),_i(Pp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(_x,"onTransitionRun"),_i(vx,"onTransitionStart"),_i(xx,"onTransitionCancel"),_i(zp,"onTransitionEnd"),Vt("onMouseEnter",["mouseout","mouseover"]),Vt("onMouseLeave",["mouseout","mouseover"]),Vt("onPointerEnter",["pointerout","pointerover"]),Vt("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function qg(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],u=l.event;l=l.listeners;t:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var w=l[M],P=w.instance,W=w.currentTarget;if(w=w.listener,P!==p&&u.isPropagationStopped())break t;p=w,u.currentTarget=W;try{p(u)}catch(pt){Nl(pt)}u.currentTarget=null,p=P}else for(M=0;M<l.length;M++){if(w=l[M],P=w.instance,W=w.currentTarget,w=w.listener,P!==p&&u.isPropagationStopped())break t;p=w,u.currentTarget=W;try{p(u)}catch(pt){Nl(pt)}u.currentTarget=null,p=P}}}}function Ee(e,i){var s=i[Ls];s===void 0&&(s=i[Ls]=new Set);var l=e+"__bubble";s.has(l)||(jg(i,e,2,!1),s.add(l))}function kf(e,i,s){var l=0;i&&(l|=4),jg(s,e,l,i)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Xf(e){if(!e[jl]){e[jl]=!0,Q.forEach(function(s){s!=="selectionchange"&&(ey.has(s)||kf(s,!1,e),kf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[jl]||(i[jl]=!0,kf("selectionchange",!1,i))}}function jg(e,i,s,l){switch(__(i)){case 2:var u=Ry;break;case 8:u=wy;break;default:u=ih}s=u.bind(null,i,s,e),u=void 0,!fu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function Wf(e,i,s,l,u){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var w=l.stateNode.containerInfo;if(w===u||w.nodeType===8&&w.parentNode===u)break;if(M===4)for(M=l.return;M!==null;){var P=M.tag;if((P===3||P===4)&&(P=M.stateNode.containerInfo,P===u||P.nodeType===8&&P.parentNode===u))return;M=M.return}for(;w!==null;){if(M=Ii(w),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){l=p=M;continue t}w=w.parentNode}}l=l.return}cp(function(){var W=p,pt=cu(s),bt=[];t:{var at=Bp.get(e);if(at!==void 0){var ht=fl,Zt=e;switch(e){case"keypress":if(cl(s)===0)break t;case"keydown":case"keyup":ht=j0;break;case"focusin":Zt="focus",ht=mu;break;case"focusout":Zt="blur",ht=mu;break;case"beforeblur":case"afterblur":ht=mu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=Q0;break;case Np:case Op:case Pp:ht=F0;break;case zp:ht=$0;break;case"scroll":case"scrollend":ht=O0;break;case"wheel":ht=ex;break;case"copy":case"cut":case"paste":ht=G0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=pp;break;case"toggle":case"beforetoggle":ht=ix}var le=(i&4)!==0,Qe=!le&&(e==="scroll"||e==="scrollend"),J=le?at!==null?at+"Capture":null:at;le=[];for(var k=W,tt;k!==null;){var yt=k;if(tt=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||tt===null||J===null||(yt=Vr(k,J),yt!=null&&le.push(bo(k,yt,tt))),Qe)break;k=k.return}0<le.length&&(at=new ht(at,Zt,null,s,pt),bt.push({event:at,listeners:le}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",at&&s!==lu&&(Zt=s.relatedTarget||s.fromElement)&&(Ii(Zt)||Zt[Bi]))break t;if((ht||at)&&(at=pt.window===pt?pt:(at=pt.ownerDocument)?at.defaultView||at.parentWindow:window,ht?(Zt=s.relatedTarget||s.toElement,ht=W,Zt=Zt?Ii(Zt):null,Zt!==null&&(Qe=Z(Zt),le=Zt.tag,Zt!==Qe||le!==5&&le!==27&&le!==6)&&(Zt=null)):(ht=null,Zt=W),ht!==Zt)){if(le=hp,yt="onMouseLeave",J="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(le=pp,yt="onPointerLeave",J="onPointerEnter",k="pointer"),Qe=ht==null?at:j(ht),tt=Zt==null?at:j(Zt),at=new le(yt,k+"leave",ht,s,pt),at.target=Qe,at.relatedTarget=tt,yt=null,Ii(pt)===W&&(le=new le(J,k+"enter",Zt,s,pt),le.target=tt,le.relatedTarget=Qe,yt=le),Qe=yt,ht&&Zt)e:{for(le=ht,J=Zt,k=0,tt=le;tt;tt=sr(tt))k++;for(tt=0,yt=J;yt;yt=sr(yt))tt++;for(;0<k-tt;)le=sr(le),k--;for(;0<tt-k;)J=sr(J),tt--;for(;k--;){if(le===J||J!==null&&le===J.alternate)break e;le=sr(le),J=sr(J)}le=null}else le=null;ht!==null&&Zg(bt,at,ht,le,!1),Zt!==null&&Qe!==null&&Zg(bt,Qe,Zt,le,!0)}}t:{if(at=W?j(W):window,ht=at.nodeName&&at.nodeName.toLowerCase(),ht==="select"||ht==="input"&&at.type==="file")var qt=Mp;else if(yp(at))if(Ep)qt=dx;else{qt=fx;var ve=ux}else ht=at.nodeName,!ht||ht.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?W&&ou(W.elementType)&&(qt=Mp):qt=hx;if(qt&&(qt=qt(e,W))){Sp(bt,qt,s,pt);break t}ve&&ve(e,at,W),e==="focusout"&&W&&at.type==="number"&&W.memoizedProps.value!=null&&bn(at,"number",at.value)}switch(ve=W?j(W):window,e){case"focusin":(yp(ve)||ve.contentEditable==="true")&&(Bs=ve,Su=W,Kr=null);break;case"focusout":Kr=Su=Bs=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Up(bt,s,pt);break;case"selectionchange":if(gx)break;case"keydown":case"keyup":Up(bt,s,pt)}var Kt;if(_u)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else zs?vp(e,s)&&(ne="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ne="onCompositionStart");ne&&(mp&&s.locale!=="ko"&&(zs||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&zs&&(Kt=up()):(da=pt,hu="value"in da?da.value:da.textContent,zs=!0)),ve=Zl(W,ne),0<ve.length&&(ne=new dp(ne,e,null,s,pt),bt.push({event:ne,listeners:ve}),Kt?ne.data=Kt:(Kt=xp(s),Kt!==null&&(ne.data=Kt)))),(Kt=sx?rx(e,s):ox(e,s))&&(ne=Zl(W,"onBeforeInput"),0<ne.length&&(ve=new dp("onBeforeInput","beforeinput",null,s,pt),bt.push({event:ve,listeners:ne}),ve.data=Kt)),Jx(bt,e,W,s,pt)}qg(bt,i)})}function bo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Zl(e,i){for(var s=i+"Capture",l=[];e!==null;){var u=e,p=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||p===null||(u=Vr(e,s),u!=null&&l.unshift(bo(e,u,p)),u=Vr(e,i),u!=null&&l.push(bo(e,u,p))),e=e.return}return l}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zg(e,i,s,l,u){for(var p=i._reactName,M=[];s!==null&&s!==l;){var w=s,P=w.alternate,W=w.stateNode;if(w=w.tag,P!==null&&P===l)break;w!==5&&w!==26&&w!==27||W===null||(P=W,u?(W=Vr(s,p),W!=null&&M.unshift(bo(s,W,P))):u||(W=Vr(s,p),W!=null&&M.push(bo(s,W,P)))),s=s.return}M.length!==0&&e.push({event:i,listeners:M})}var ny=/\r\n?/g,iy=/\u0000|\uFFFD/g;function Kg(e){return(typeof e=="string"?e:""+e).replace(ny,`
`).replace(iy,"")}function Qg(e,i){return i=Kg(i),Kg(e)===i}function Kl(){}function Pe(e,i,s,l,u,p){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Hn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Hn(e,""+l);break;case"className":Ve(e,"class",l);break;case"tabIndex":Ve(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ve(e,s,l);break;case"style":op(e,l,p);break;case"data":if(i!=="object"){Ve(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=ol(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(i!=="input"&&Pe(e,i,"name",u.name,u,null),Pe(e,i,"formEncType",u.formEncType,u,null),Pe(e,i,"formMethod",u.formMethod,u,null),Pe(e,i,"formTarget",u.formTarget,u,null)):(Pe(e,i,"encType",u.encType,u,null),Pe(e,i,"method",u.method,u,null),Pe(e,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=ol(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Kl);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=ol(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Se(e,"popover",l);break;case"xlinkActuate":Re(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Re(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Re(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Re(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Re(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Re(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Re(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Re(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Re(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Se(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=L0.get(s)||s,Se(e,s,l))}}function Yf(e,i,s,l,u,p){switch(s){case"style":op(e,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Hn(e,l):(typeof l=="number"||typeof l=="bigint")&&Hn(e,""+l);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!At.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),p=e[on]||null,p=p!=null?p[s]:null,typeof p=="function"&&e.removeEventListener(i,p,u),typeof l=="function")){typeof p!="function"&&p!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,u);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Se(e,s,l)}}}function Mn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var l=!1,u=!1,p;for(p in s)if(s.hasOwnProperty(p)){var M=s[p];if(M!=null)switch(p){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Pe(e,i,p,M,s,null)}}u&&Pe(e,i,"srcSet",s.srcSet,s,null),l&&Pe(e,i,"src",s.src,s,null);return;case"input":Ee("invalid",e);var w=p=M=u=null,P=null,W=null;for(l in s)if(s.hasOwnProperty(l)){var pt=s[l];if(pt!=null)switch(l){case"name":u=pt;break;case"type":M=pt;break;case"checked":P=pt;break;case"defaultChecked":W=pt;break;case"value":p=pt;break;case"defaultValue":w=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:Pe(e,i,l,pt,s,null)}}Pn(e,p,w,P,W,M,u,!1),Me(e);return;case"select":Ee("invalid",e),l=M=p=null;for(u in s)if(s.hasOwnProperty(u)&&(w=s[u],w!=null))switch(u){case"value":p=w;break;case"defaultValue":M=w;break;case"multiple":l=w;default:Pe(e,i,u,w,s,null)}i=p,s=M,e.multiple=!!l,i!=null?je(e,!!l,i,!1):s!=null&&je(e,!!l,s,!0);return;case"textarea":Ee("invalid",e),p=u=l=null;for(M in s)if(s.hasOwnProperty(M)&&(w=s[M],w!=null))switch(M){case"value":l=w;break;case"defaultValue":u=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:Pe(e,i,M,w,s,null)}Ns(e,l,u,p),Me(e);return;case"option":for(P in s)if(s.hasOwnProperty(P)&&(l=s[P],l!=null))switch(P){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Pe(e,i,P,l,s,null)}return;case"dialog":Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(l=0;l<To.length;l++)Ee(To[l],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in s)if(s.hasOwnProperty(W)&&(l=s[W],l!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Pe(e,i,W,l,s,null)}return;default:if(ou(i)){for(pt in s)s.hasOwnProperty(pt)&&(l=s[pt],l!==void 0&&Yf(e,i,pt,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&Pe(e,i,w,l,s,null))}function ay(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,p=null,M=null,w=null,P=null,W=null,pt=null;for(ht in s){var bt=s[ht];if(s.hasOwnProperty(ht)&&bt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":P=bt;default:l.hasOwnProperty(ht)||Pe(e,i,ht,null,l,bt)}}for(var at in l){var ht=l[at];if(bt=s[at],l.hasOwnProperty(at)&&(ht!=null||bt!=null))switch(at){case"type":p=ht;break;case"name":u=ht;break;case"checked":W=ht;break;case"defaultChecked":pt=ht;break;case"value":M=ht;break;case"defaultValue":w=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,i));break;default:ht!==bt&&Pe(e,i,at,ht,l,bt)}}Ne(e,M,w,P,W,pt,p,u);return;case"select":ht=M=w=at=null;for(p in s)if(P=s[p],s.hasOwnProperty(p)&&P!=null)switch(p){case"value":break;case"multiple":ht=P;default:l.hasOwnProperty(p)||Pe(e,i,p,null,l,P)}for(u in l)if(p=l[u],P=s[u],l.hasOwnProperty(u)&&(p!=null||P!=null))switch(u){case"value":at=p;break;case"defaultValue":w=p;break;case"multiple":M=p;default:p!==P&&Pe(e,i,u,p,l,P)}i=w,s=M,l=ht,at!=null?je(e,!!s,at,!1):!!l!=!!s&&(i!=null?je(e,!!s,i,!0):je(e,!!s,s?[]:"",!1));return;case"textarea":ht=at=null;for(w in s)if(u=s[w],s.hasOwnProperty(w)&&u!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Pe(e,i,w,null,l,u)}for(M in l)if(u=l[M],p=s[M],l.hasOwnProperty(M)&&(u!=null||p!=null))switch(M){case"value":at=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==p&&Pe(e,i,M,u,l,p)}xn(e,at,ht);return;case"option":for(var Zt in s)if(at=s[Zt],s.hasOwnProperty(Zt)&&at!=null&&!l.hasOwnProperty(Zt))switch(Zt){case"selected":e.selected=!1;break;default:Pe(e,i,Zt,null,l,at)}for(P in l)if(at=l[P],ht=s[P],l.hasOwnProperty(P)&&at!==ht&&(at!=null||ht!=null))switch(P){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Pe(e,i,P,at,l,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in s)at=s[le],s.hasOwnProperty(le)&&at!=null&&!l.hasOwnProperty(le)&&Pe(e,i,le,null,l,at);for(W in l)if(at=l[W],ht=s[W],l.hasOwnProperty(W)&&at!==ht&&(at!=null||ht!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:Pe(e,i,W,at,l,ht)}return;default:if(ou(i)){for(var Qe in s)at=s[Qe],s.hasOwnProperty(Qe)&&at!==void 0&&!l.hasOwnProperty(Qe)&&Yf(e,i,Qe,void 0,l,at);for(pt in l)at=l[pt],ht=s[pt],!l.hasOwnProperty(pt)||at===ht||at===void 0&&ht===void 0||Yf(e,i,pt,at,l,ht);return}}for(var J in s)at=s[J],s.hasOwnProperty(J)&&at!=null&&!l.hasOwnProperty(J)&&Pe(e,i,J,null,l,at);for(bt in l)at=l[bt],ht=s[bt],!l.hasOwnProperty(bt)||at===ht||at==null&&ht==null||Pe(e,i,bt,at,l,ht)}var qf=null,jf=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function Jg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $g(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Zf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kf=null;function sy(){var e=window.event;return e&&e.type==="popstate"?e===Kf?!1:(Kf=e,!0):(Kf=null,!1)}var t_=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,e_=typeof Promise=="function"?Promise:void 0,oy=typeof queueMicrotask=="function"?queueMicrotask:typeof e_<"u"?function(e){return e_.resolve(null).then(e).catch(ly)}:t_;function ly(e){setTimeout(function(){throw e})}function Qf(e,i){var s=i,l=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(l===0){e.removeChild(u),No(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=u}while(s);No(i)}function Jf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Jf(s),Gr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function cy(e,i,s,l){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ja])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==u.rel||e.getAttribute("href")!==(u.href==null?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var p=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function uy(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=yi(e.nextSibling),e===null))return null;return e}function yi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}function n_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function i_(e,i,s){switch(i=Ql(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}var fi=new Map,a_=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var $i=q.d;q.d={f:fy,r:hy,D:dy,C:py,L:my,m:gy,X:vy,S:_y,M:xy};function fy(){var e=$i.f(),i=Xl();return e||i}function hy(e){var i=C(e);i!==null&&i.tag===5&&i.type==="form"?Um(i):$i.r(e)}var rr=typeof document>"u"?null:document;function s_(e,i,s){var l=rr;if(l&&typeof i=="string"&&i){var u=pn(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),a_.has(u)||(a_.add(u),e={rel:e,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),Mn(i,"link",e),$(i),l.head.appendChild(i)))}}function dy(e){$i.D(e),s_("dns-prefetch",e,null)}function py(e,i){$i.C(e,i),s_("preconnect",e,i)}function my(e,i,s){$i.L(e,i,s);var l=rr;if(l&&e&&i){var u='link[rel="preload"][as="'+pn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+pn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+pn(s.imageSizes)+'"]')):u+='[href="'+pn(e)+'"]';var p=u;switch(i){case"style":p=or(e);break;case"script":p=lr(e)}fi.has(p)||(e=A({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),fi.set(p,e),l.querySelector(u)!==null||i==="style"&&l.querySelector(Ao(p))||i==="script"&&l.querySelector(Ro(p))||(i=l.createElement("link"),Mn(i,"link",e),$(i),l.head.appendChild(i)))}}function gy(e,i){$i.m(e,i);var s=rr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+pn(l)+'"][href="'+pn(e)+'"]',p=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=lr(e)}if(!fi.has(p)&&(e=A({rel:"modulepreload",href:e},i),fi.set(p,e),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Ro(p)))return}l=s.createElement("link"),Mn(l,"link",e),$(l),s.head.appendChild(l)}}}function _y(e,i,s){$i.S(e,i,s);var l=rr;if(l&&e){var u=it(l).hoistableStyles,p=or(e);i=i||"default";var M=u.get(p);if(!M){var w={loading:0,preload:null};if(M=l.querySelector(Ao(p)))w.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":i},s),(s=fi.get(p))&&$f(e,s);var P=M=l.createElement("link");$(P),Mn(P,"link",e),P._p=new Promise(function(W,pt){P.onload=W,P.onerror=pt}),P.addEventListener("load",function(){w.loading|=1}),P.addEventListener("error",function(){w.loading|=2}),w.loading|=4,$l(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:w},u.set(p,M)}}}function vy(e,i){$i.X(e,i);var s=rr;if(s&&e){var l=it(s).hoistableScripts,u=lr(e),p=l.get(u);p||(p=s.querySelector(Ro(u)),p||(e=A({src:e,async:!0},i),(i=fi.get(u))&&th(e,i),p=s.createElement("script"),$(p),Mn(p,"link",e),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(u,p))}}function xy(e,i){$i.M(e,i);var s=rr;if(s&&e){var l=it(s).hoistableScripts,u=lr(e),p=l.get(u);p||(p=s.querySelector(Ro(u)),p||(e=A({src:e,async:!0,type:"module"},i),(i=fi.get(u))&&th(e,i),p=s.createElement("script"),$(p),Mn(p,"link",e),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(u,p))}}function r_(e,i,s,l){var u=(u=re.current)?Jl(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=or(s.href),s=it(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=or(s.href);var p=it(u).hoistableStyles,M=p.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,M),(p=u.querySelector(Ao(e)))&&!p._p&&(M.instance=p,M.state.loading=5),fi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},fi.set(e,s),p||yy(u,e,s,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=lr(s),s=it(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function or(e){return'href="'+pn(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function o_(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function yy(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Mn(i,"link",s),$(i),e.head.appendChild(i))}function lr(e){return'[src="'+pn(e)+'"]'}function Ro(e){return"script[async]"+e}function l_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+pn(s.href)+'"]');if(l)return i.instance=l,$(l),l;var u=A({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),$(l),Mn(l,"style",u),$l(l,s.precedence,e),i.instance=l;case"stylesheet":u=or(s.href);var p=e.querySelector(Ao(u));if(p)return i.state.loading|=4,i.instance=p,$(p),p;l=o_(s),(u=fi.get(u))&&$f(l,u),p=(e.ownerDocument||e).createElement("link"),$(p);var M=p;return M._p=new Promise(function(w,P){M.onload=w,M.onerror=P}),Mn(p,"link",l),i.state.loading|=4,$l(p,s.precedence,e),i.instance=p;case"script":return p=lr(s.src),(u=e.querySelector(Ro(p)))?(i.instance=u,$(u),u):(l=s,(u=fi.get(p))&&(l=A({},s),th(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),$(u),Mn(u,"link",l),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,$l(l,s.precedence,e));return i.instance}function $l(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,p=u,M=0;M<l.length;M++){var w=l[M];if(w.dataset.precedence===i)p=w;else if(p!==u)break}p?p.parentNode.insertBefore(e,p.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function $f(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function th(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var tc=null;function c_(e,i,s){if(tc===null){var l=new Map,u=tc=new Map;u.set(s,l)}else u=tc,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var p=s[u];if(!(p[ja]||p[rn]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(i)||"";M=e+M;var w=l.get(M);w?w.push(p):l.set(M,[p])}}return l}function u_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function Sy(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function f_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var wo=null;function My(){}function Ey(e,i,s){if(wo===null)throw Error(a(475));var l=wo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=or(s.href),p=e.querySelector(Ao(u));if(p){e=p._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=ec.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=p,$(p);return}p=e.ownerDocument||e,s=o_(s),(u=fi.get(u))&&$f(s,u),p=p.createElement("link"),$(p);var M=p;M._p=new Promise(function(w,P){M.onload=w,M.onerror=P}),Mn(p,"link",s),i.instance=p}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=ec.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function Ty(){if(wo===null)throw Error(a(475));var e=wo;return e.stylesheets&&e.count===0&&eh(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&eh(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function ec(){if(this.count--,this.count===0){if(this.stylesheets)eh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nc=null;function eh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nc=new Map,i.forEach(by,e),nc=null,ec.call(e))}function by(e,i){if(!(i.state.loading&4)){var s=nc.get(e);if(s)var l=s.get(null);else{s=new Map,nc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<u.length;p++){var M=u[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}u=i.instance,M=u.getAttribute("data-precedence"),p=s.get(M)||l,p===l&&s.set(null,u),s.set(M,u),this.count++,l=ec.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),p?p.parentNode.insertBefore(u,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Co={$$typeof:y,Provider:null,Consumer:null,_currentValue:gt,_currentValue2:gt,_threadCount:0};function Ay(e,i,s,l,u,p,M,w){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ln(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ln(0),this.hiddenUpdates=Ln(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function h_(e,i,s,l,u,p,M,w,P,W,pt,bt){return e=new Ay(e,i,s,M,w,P,W,bt),i=1,p===!0&&(i|=24),p=ci(3,null,null,i),e.current=p,p.stateNode=e,i=Lu(),i.refCount++,e.pooledCache=i,i.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:i},df(p),e}function d_(e){return e?(e=Hs,e):Hs}function p_(e,i,s,l,u,p){u=d_(u),l.context===null?l.context=u:l.pendingContext=u,l=Sa(i),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=Ma(e,l,i),s!==null&&(Bn(s,e,i),fo(s,e,i))}function m_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function nh(e,i){m_(e,i),(e=e.alternate)&&m_(e,i)}function g_(e){if(e.tag===13){var i=pa(e,67108864);i!==null&&Bn(i,e,67108864),nh(e,67108864)}}var ic=!0;function Ry(e,i,s,l){var u=R.T;R.T=null;var p=q.p;try{q.p=2,ih(e,i,s,l)}finally{q.p=p,R.T=u}}function wy(e,i,s,l){var u=R.T;R.T=null;var p=q.p;try{q.p=8,ih(e,i,s,l)}finally{q.p=p,R.T=u}}function ih(e,i,s,l){if(ic){var u=ah(l);if(u===null)Wf(e,i,l,ac,s),v_(e,l);else if(Dy(u,e,i,s,l))l.stopPropagation();else if(v_(e,l),i&4&&-1<Cy.indexOf(e)){for(;u!==null;){var p=C(u);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=zt(p.pendingLanes);if(M!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var P=1<<31-te(M);w.entanglements[1]|=P,M&=~P}Li(p),(We&6)===0&&(Gl=rt()+500,Eo(0))}}break;case 13:w=pa(p,2),w!==null&&Bn(w,p,2),Xl(),nh(p,2)}if(p=ah(l),p===null&&Wf(e,i,l,ac,s),p===u)break;u=p}u!==null&&l.stopPropagation()}else Wf(e,i,l,null,s)}}function ah(e){return e=cu(e),sh(e)}var ac=null;function sh(e){if(ac=null,e=Ii(e),e!==null){var i=Z(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=Tt(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return ac=e,null}function __(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_t()){case ut:return 2;case Yt:return 8;case Dt:case kt:return 32;case me:return 268435456;default:return 32}default:return 32}}var rh=!1,Ca=null,Da=null,Ua=null,Do=new Map,Uo=new Map,La=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v_(e,i){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Do.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(i.pointerId)}}function Lo(e,i,s,l,u,p){return e===null||e.nativeEvent!==p?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},i!==null&&(i=C(i),i!==null&&g_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function Dy(e,i,s,l,u){switch(i){case"focusin":return Ca=Lo(Ca,e,i,s,l,u),!0;case"dragenter":return Da=Lo(Da,e,i,s,l,u),!0;case"mouseover":return Ua=Lo(Ua,e,i,s,l,u),!0;case"pointerover":var p=u.pointerId;return Do.set(p,Lo(Do.get(p)||null,e,i,s,l,u)),!0;case"gotpointercapture":return p=u.pointerId,Uo.set(p,Lo(Uo.get(p)||null,e,i,s,l,u)),!0}return!1}function x_(e){var i=Ii(e.target);if(i!==null){var s=Z(i);if(s!==null){if(i=s.tag,i===13){if(i=Tt(s),i!==null){e.blockedOn=i,sl(e.priority,function(){if(s.tag===13){var l=Jn(),u=pa(s,l);u!==null&&Bn(u,s,l),nh(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=ah(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);lu=l,s.target.dispatchEvent(l),lu=null}else return i=C(s),i!==null&&g_(i),e.blockedOn=s,!1;i.shift()}return!0}function y_(e,i,s){sc(e)&&s.delete(i)}function Uy(){rh=!1,Ca!==null&&sc(Ca)&&(Ca=null),Da!==null&&sc(Da)&&(Da=null),Ua!==null&&sc(Ua)&&(Ua=null),Do.forEach(y_),Uo.forEach(y_)}function rc(e,i){e.blockedOn===i&&(e.blockedOn=null,rh||(rh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Uy)))}var oc=null;function S_(e){oc!==e&&(oc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){oc===e&&(oc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],u=e[i+2];if(typeof l!="function"){if(sh(l||s)===null)continue;break}var p=C(s);p!==null&&(e.splice(i,3),i-=3,ju(p,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function No(e){function i(P){return rc(P,e)}Ca!==null&&rc(Ca,e),Da!==null&&rc(Da,e),Ua!==null&&rc(Ua,e),Do.forEach(i),Uo.forEach(i);for(var s=0;s<La.length;s++){var l=La[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<La.length&&(s=La[0],s.blockedOn===null);)x_(s),s.blockedOn===null&&La.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],p=s[l+1],M=u[on]||null;if(typeof p=="function")M||S_(s);else if(M){var w=null;if(p&&p.hasAttribute("formAction")){if(u=p,M=p[on]||null)w=M.formAction;else if(sh(u)!==null)continue}else w=M.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),S_(s)}}}function oh(e){this._internalRoot=e}lc.prototype.render=oh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=Jn();p_(s,l,e,i,null,null)},lc.prototype.unmount=oh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;e.tag===0&&ir(),p_(e.current,2,null,e,null,null),Xl(),i[Bi]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Hr();e={blockedOn:null,target:e,priority:i};for(var s=0;s<La.length&&i!==0&&i<La[s].priority;s++);La.splice(s,0,e),s===0&&x_(e)}};var M_=t.version;if(M_!=="19.0.0")throw Error(a(527,M_,"19.0.0"));q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=et(i),e=e!==null?Rt(e):null,e=e===null?null:e.stateNode,e};var Ly={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:R,findFiberByHostInstance:Ii,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{Qt=cc.inject(Ly),jt=cc}catch{}}return Po.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",u=Fm,p=Hm,M=Gm,w=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks)),i=h_(e,1,!1,null,null,s,l,u,p,M,w,null),e[Bi]=i.current,Xf(e.nodeType===8?e.parentNode:e),new oh(i)},Po.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,u="",p=Fm,M=Hm,w=Gm,P=null,W=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(P=s.unstable_transitionCallbacks),s.formState!==void 0&&(W=s.formState)),i=h_(e,1,!0,i,s??null,l,u,p,M,w,P,W),i.context=d_(null),s=i.current,l=Jn(),u=Sa(l),u.callback=null,Ma(s,u,l),i.current.lanes=l,Nn(i,l),Li(i),e[Bi]=i.current,Xf(e),new lc(i)},Po.version="19.0.0",Po}var L_;function Vy(){if(L_)return uh.exports;L_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),uh.exports=Gy(),uh.exports}var ky=Vy();const Xy=()=>{const[r,t]=pe.useState("--"),[n,a]=pe.useState("");pe.useEffect(()=>{const c=localStorage.getItem("authData");if(c)try{const f=JSON.parse(c);t(f.username||"--"),a(f.access_token||"")}catch(f){console.error("Error parsing auth data:",f)}},[]);const o=()=>{localStorage.removeItem("authData"),window.location.href="/sign_in"};return xt.jsx("header",{children:xt.jsxs("div",{className:"header-content",children:[xt.jsx("h2",{children:"Voyload AI-fast way logistic"}),xt.jsxs("div",{className:"user-info",children:[xt.jsx("span",{children:"Welcome,"}),xt.jsx("span",{id:"userDisplay",children:r}),xt.jsx("button",{className:"logout-btn",id:"logoutBtn",onClick:o,children:"Logout"})]})]})})};function Wy({cargos:r,setCargos:t}){const n=()=>{t([])};return xt.jsx("thead",{children:xt.jsxs("tr",{children:[xt.jsx("th",{children:"UUID"}),xt.jsx("th",{children:"X width"}),xt.jsx("th",{children:"Y height"}),xt.jsx("th",{children:"Z depth"}),xt.jsx("th",{children:"X position"}),xt.jsx("th",{children:"Y position"}),xt.jsx("th",{children:"Z position"}),xt.jsx("th",{className:"finishTH",children:xt.jsx("button",{onClick:()=>n(),children:"Удалить все"})})]})})}const En=[];for(let r=0;r<256;++r)En.push((r+256).toString(16).slice(1));function Yy(r,t=0){return(En[r[t+0]]+En[r[t+1]]+En[r[t+2]]+En[r[t+3]]+"-"+En[r[t+4]]+En[r[t+5]]+"-"+En[r[t+6]]+En[r[t+7]]+"-"+En[r[t+8]]+En[r[t+9]]+"-"+En[r[t+10]]+En[r[t+11]]+En[r[t+12]]+En[r[t+13]]+En[r[t+14]]+En[r[t+15]]).toLowerCase()}let ph;const qy=new Uint8Array(16);function jy(){if(!ph){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");ph=crypto.getRandomValues.bind(crypto)}return ph(qy)}const Zy=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),N_={randomUUID:Zy};function Xv(r,t,n){var o;if(N_.randomUUID&&!r)return N_.randomUUID();r=r||{};const a=r.random??((o=r.rng)==null?void 0:o.call(r))??jy();if(a.length<16)throw new Error("Random bytes length must be >= 16");return a[6]=a[6]&15|64,a[8]=a[8]&63|128,Yy(a)}function Ky({cargos:r,setCargos:t}){const[n,a]=pe.useState(""),[o,c]=pe.useState(""),[f,h]=pe.useState(""),[m,d]=pe.useState(""),[g,_]=pe.useState(""),[v,y]=pe.useState(""),[E,b]=pe.useState(""),[S,x]=pe.useState(""),O=()=>{let B=[];if(!n||!o||!f)return alert("Необходимо ввести размеры груза");if(n<=0||o<=0||f<=0)return alert("Введеные размеры груза должны быть больше нуля");if(m<0||g<0||v<0)return alert("Введеные координаты не могут быть отрицательными");if(S<0)return alert("Введеное колличество грузов не может быть отрицательным или равным нулю");if(S===""){console.log(S),B.push(D());let z=[...B,...r];t(z);return}for(let z=0;z<S;z++)B.push(D());let I=[...B,...r];t(I)};let U=O_[Math.floor(Math.random()*O_.length)];const D=()=>{const B=Xv(),I=U,z=n,G=o,R=f,A=m==""?0:m,F=g==""?0:g,ct=v==""?0:v;return{uuid:B,userColor:I,Xwidth:z,Yheight:G,Zdepth:R,Xposition:A,Yposition:F,Zposition:ct}};return xt.jsxs("tr",{children:[xt.jsx("td",{}),xt.jsx("td",{children:xt.jsx("input",{className:"inputCargoParameters",name:"input_width",type:"number",placeholder:"введите...",value:n,onChange:B=>a(B.target.value)})}),xt.jsx("td",{children:xt.jsx("input",{className:"inputCargoParameters",name:"input_height",type:"number",placeholder:"введите...",value:o,onChange:B=>c(B.target.value)})}),xt.jsx("td",{children:xt.jsx("input",{className:"inputCargoParameters",name:"input_length",type:"number",placeholder:"введите...",value:f,onChange:B=>h(B.target.value)})}),xt.jsx("td",{children:xt.jsx("input",{className:"inputCargoParameters",name:"input_pos_x",type:"number",placeholder:"введите...",value:m,onChange:B=>d(B.target.value)})}),xt.jsx("td",{children:xt.jsx("input",{className:"inputCargoParameters",name:"input_pos_x",type:"number",placeholder:"введите...",value:g,onChange:B=>_(B.target.value)})}),xt.jsx("td",{children:xt.jsx("input",{className:"inputCargoParameters",name:"input_pos_z",type:"number",placeholder:"введите...",value:v,onChange:B=>y(B.target.value)})}),xt.jsx("td",{className:"finishTd",children:xt.jsxs("div",{className:"finish-input-button-group",children:[xt.jsx("input",{className:"inputQuantity",name:"input_quantity",type:"number",placeholder:"колличество...",value:S,onChange:B=>x(B.target.value)}),xt.jsx("button",{className:"create1",onClick:O,children:"Создать"})]})})]})}let O_=["aqua","antiquewhite","coral","cornflowerblue","chocolate","azure","beige","bisque","blanchedalmond","blueviolet","brown"];function Qy({uuid:r,cargos:t,setCargos:n}){return xt.jsx("td",{className:"uuid-cell",children:r})}function Jy({uuid:r,initialXwidth:t,cargos:n,setCargos:a}){const[o,c]=pe.useState({id:null}),f=pe.useRef(),h=d=>{c({id:d}),setTimeout(()=>{var g;return(g=f.current)==null?void 0:g.focus()},0)},m=d=>{if(d.key==="Enter"){const g=d.target.value;if(isNaN(Number(g))){alert("введеннное значение должно быть числовым");return}if(g<0){alert("введенное значение не может быть меньше 0");return}a(_=>_.map(v=>v.uuid===r?{...v,Xwidth:Number(g)}:v)),c({id:null}),console.log(n)}else d.key==="Escape"&&c({id:null})};return xt.jsx("td",{onClick:()=>h(r),children:o.id===r?xt.jsx("input",{className:"change-cargo-data-input",type:"number",ref:f,defaultValue:t,onKeyDown:m,onBlur:()=>c({id:null})}):t})}function $y({uuid:r,initialYheight:t,cargos:n,setCargos:a}){const[o,c]=pe.useState({id:null}),f=pe.useRef(),h=d=>{c({id:d}),setTimeout(()=>{var g;return(g=f.current)==null?void 0:g.focus()},0)},m=d=>{if(d.key==="Enter"){const g=d.target.value;if(isNaN(Number(g))){alert("введеннное значение должно быть числовым");return}if(g<0){alert("введенное значение не может быть меньше 0");return}a(_=>_.map(v=>v.uuid===r?{...v,Yheight:Number(g)}:v)),c({id:null}),console.log(n)}else d.key==="Escape"&&c({id:null})};return xt.jsx("td",{onClick:()=>h(r),children:o.id===r?xt.jsx("input",{className:"change-cargo-data-input",type:"number",ref:f,defaultValue:t,onKeyDown:m,onBlur:()=>c({id:null})}):t})}function tS({uuid:r,initialZdepth:t,cargos:n,setCargos:a}){const[o,c]=pe.useState({id:null}),f=pe.useRef(),h=d=>{c({id:d}),setTimeout(()=>{var g;return(g=f.current)==null?void 0:g.focus()},0)},m=d=>{if(d.key==="Enter"){const g=d.target.value;if(isNaN(Number(g))){alert("введеннное значение должно быть числовым");return}if(g<0){alert("введенное значение не может быть меньше 0");return}a(_=>_.map(v=>v.uuid===r?{...v,Zdepth:Number(g)}:v)),c({id:null}),console.log(n)}else d.key==="Escape"&&c({id:null})};return xt.jsx("td",{onClick:()=>h(r),children:o.id===r?xt.jsx("input",{className:"change-cargo-data-input",type:"number",ref:f,defaultValue:t,onKeyDown:m,onBlur:()=>c({id:null})}):t})}function eS({uuid:r,initialXposition:t,cargos:n,setCargos:a}){const[o,c]=pe.useState({id:null}),f=pe.useRef(),h=d=>{c({id:d}),setTimeout(()=>{var g;return(g=f.current)==null?void 0:g.focus()},0)},m=d=>{if(d.key==="Enter"){const g=d.target.value;if(isNaN(Number(g)))return alert("введеннное значение должно быть числовым");if(g<0)return alert("введенное значение не может быть меньше 0");a(_=>_.map(v=>v.uuid===r?{...v,Xposition:Number(g)}:v)),c({id:null}),console.log(n)}else d.key==="Escape"&&c({id:null})};return xt.jsx("td",{onClick:()=>h(r),children:o.id===r?xt.jsx("input",{className:"change-cargo-data-input",type:"number",ref:f,defaultValue:t,onKeyDown:m,onBlur:()=>c({id:null})}):t})}function nS({uuid:r,initialYposition:t,cargos:n,setCargos:a}){const[o,c]=pe.useState({id:null}),f=pe.useRef(),h=d=>{c({id:d}),setTimeout(()=>{var g;return(g=f.current)==null?void 0:g.focus()},0)},m=d=>{if(d.key==="Enter"){const g=d.target.value;if(isNaN(Number(g))){alert("введеннное значение должно быть числовым");return}if(g<0){alert("введенное значение не может быть меньше 0");return}a(_=>_.map(v=>v.uuid===r?{...v,Yposition:Number(g)}:v)),c({id:null}),console.log(n)}else d.key==="Escape"&&c({id:null})};return xt.jsx("td",{onClick:()=>h(r),children:o.id===r?xt.jsx("input",{className:"change-cargo-data-input",type:"number",ref:f,defaultValue:t,onKeyDown:m,onBlur:()=>c({id:null})}):t})}function iS({uuid:r,initialZposition:t,cargos:n,setCargos:a}){const[o,c]=pe.useState({id:null}),f=pe.useRef(),h=d=>{c({id:d}),setTimeout(()=>{var g;return(g=f.current)==null?void 0:g.focus()},0)},m=d=>{if(d.key==="Enter"){const g=d.target.value;if(isNaN(Number(g))){alert("введеннное значение должно быть числовым");return}if(g<0){alert("введенное значение не может быть меньше 0");return}a(_=>_.map(v=>v.uuid===r?{...v,Zposition:Number(g)}:v)),c({id:null}),console.log(n)}else d.key==="Escape"&&c({id:null})};return xt.jsx("td",{onClick:()=>h(r),children:o.id===r?xt.jsx("input",{className:"change-cargo-data-input",type:"number",ref:f,defaultValue:t,onKeyDown:m,onBlur:()=>c({id:null})}):t})}function aS({cargos:r,setCargos:t}){const n=a=>{const o=r.filter(c=>c.uuid!==a);t(o)};return r.map(a=>xt.jsxs("tr",{children:[xt.jsx(Qy,{uuid:a.uuid,cargos:r,setCargos:t}),xt.jsx(Jy,{uuid:a.uuid,initialXwidth:a.Xwidth,cargos:r,setCargos:t}),xt.jsx($y,{uuid:a.uuid,initialYheight:a.Yheight,cargos:r,setCargos:t}),xt.jsx(tS,{uuid:a.uuid,initialZdepth:a.Zdepth,cargos:r,setCargos:t}),xt.jsx(eS,{uuid:a.uuid,initialXposition:a.Xposition,cargos:r,setCargos:t}),xt.jsx(nS,{uuid:a.uuid,initialYposition:a.Yposition,cargos:r,setCargos:t}),xt.jsx(iS,{uuid:a.uuid,initialZposition:a.Zposition,cargos:r,setCargos:t}),xt.jsx("td",{children:xt.jsx("button",{className:"delete-cargo-button",onClick:()=>n(a.uuid),children:"Удалить"})})]},a.uuid))}function sS({cargos:r,setCargos:t}){return xt.jsxs("tbody",{children:[xt.jsx(Ky,{cargos:r,setCargos:t}),xt.jsx(aS,{cargos:r,setCargos:t})]})}function rS({cargos:r,setCargos:t}){return xt.jsx("div",{className:"table-cargos-container",children:xt.jsxs("table",{className:"table-cargos",children:[xt.jsx(Wy,{cargos:r,setCargos:t}),xt.jsx(sS,{cargos:r,setCargos:t})]})})}function oS(r,t,n,a,o,c){const f=m=>m.map(d=>({"#11_uuid":d.uuid,"#12_width_X":parseInt(d.Xwidth),"#13_height_Y":parseInt(d.Yheight),"#14_length_Z":parseInt(d.Zdepth),"#15_position_x":parseInt(d.Xposition),"#16_position_y":parseInt(d.Yposition),"#17_position_z":parseInt(d.Zposition),"#18_color":d.userColor})),h={"#00_access_token":null,"#01_start_corner":parseInt(a),"#02_row_arrangement":o,"#03_arrangement_direction":"x","#11_uuid":n[0].uuid,"#12_width_X":parseInt(n[0].Xwidth),"#13_height_Y":parseInt(n[0].Yheight),"#14_length_Z":parseInt(n[0].Zdepth),"#15_position_x":parseInt(n[0].position_x),"#16_position_y":parseInt(n[0].position_y),"#17_position_z":parseInt(n[0].position_z),"#200_arranged_cuboids":null,"#300_not_linked_cuboids":f(r)};fetch("/api/ca/snake_algorithm",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then(m=>{if(!m.ok)throw new Error(`Ошибка ${m.status}`);return m.json()}).then(m=>{m["#200_arranged_cuboids"]&&m["#200_arranged_cuboids"].forEach(d=>{t(g=>g.map(_=>_.uuid===d["#11_uuid"]?{..._,Xposition:parseInt(d["#15_position_x"]),Yposition:parseInt(d["#16_position_y"]),Zposition:parseInt(d["#17_position_z"])}:_))})}).catch(m=>{console.error("Ошибка при расстановке:",m)})}function lS({cargos:r,setCargos:t,cargoArea:n,setCargoArea:a,onClose:o}){const[c,f]=pe.useState("1"),[h,m]=pe.useState(!0),[d,g]=pe.useState(!1),_=v=>{f(v.target.value)};return xt.jsx("div",{className:"container-modal",role:"dialog","aria-modal":"true",children:xt.jsxs("div",{className:"modal",children:[xt.jsx("h2",{children:"Выберите параметры расстановки"}),xt.jsxs("fieldset",{className:"fieldset",children:[xt.jsx("legend",{children:"Угол относительно которого будет расстановка:"}),xt.jsxs("label",{className:"change-corner",children:[xt.jsx("input",{className:"radio",type:"radio",name:"corner",value:"1",defaultChecked:!0,onChange:_}),"передний левый"]}),xt.jsxs("label",{className:"change-corner",children:[xt.jsx("input",{className:"radio",type:"radio",name:"corner",value:"2",onChange:_}),"передний правый"]}),xt.jsxs("label",{className:"change-corner",children:[xt.jsx("input",{className:"radio",type:"radio",name:"corner",value:"3",onChange:_}),"задний левый"]}),xt.jsxs("label",{className:"change-corner",children:[xt.jsx("input",{className:"radio",type:"radio",name:"corner",value:"4",onChange:_}),"задний правый"]})]}),xt.jsxs("div",{className:"checkbox-line-arrangement",children:["Требуется ли расстановка в линию",xt.jsx("input",{type:"checkbox",checked:h,onChange:()=>m(!h)})]}),xt.jsxs("div",{className:"checkbox-center-arrangement",children:["Требуется ли расстановка от центра грузового помещения",xt.jsx("input",{type:"checkbox",checked:d,onChange:()=>g(!d)})]}),xt.jsxs("div",{className:"modal-buttons",children:[xt.jsx("button",{className:"arrange-button",onClick:()=>oS(r,t,n,a,c),children:"Расставить автоматически"}),xt.jsx("button",{className:"close-button",onClick:o,children:"Закрыть окно"})]})]})})}function cS({cargoArea:r,setCargoArea:t,cargos:n,setCargos:a}){const[o,c]=pe.useState(""),[f,h]=pe.useState(""),[m,d]=pe.useState(""),[g,_]=pe.useState(""),[v,y]=pe.useState(!1),E=()=>{if(!f||!m||!g)return alert("Введите все размеры");if(f<=0||m<=0||g<=0)return alert("Размеры должны быть больше нуля");const b=o||Xv(),S=[{uuid:b,Xwidth:f,Yheight:m,Zdepth:g}];c(b),t(S)};return xt.jsxs("div",{className:"cargoAreaForm-box",children:[xt.jsxs("div",{className:"form-row",children:[xt.jsx("label",{className:"left-cell-of-cargo-area-table",children:"UUID"}),xt.jsx("div",{className:"uuid-display",children:o||"—"})]}),xt.jsxs("div",{className:"form-row",children:[xt.jsx("label",{className:"left-cell-of-cargo-area-table",children:"X width"}),xt.jsx("input",{className:"right-cell-of-cargo-area-table",type:"number",value:f,onChange:b=>h(b.target.value)})]}),xt.jsxs("div",{className:"form-row",children:[xt.jsx("label",{className:"left-cell-of-cargo-area-table",children:"Y height"}),xt.jsx("input",{className:"right-cell-of-cargo-area-table",type:"number",value:m,onChange:b=>d(b.target.value)})]}),xt.jsxs("div",{className:"form-row",children:[xt.jsx("label",{className:"left-cell-of-cargo-area-table",children:"Z depth"}),xt.jsx("input",{className:"right-cell-of-cargo-area-table",type:"number",value:g,onChange:b=>_(b.target.value)})]}),xt.jsxs("div",{className:"form-row",children:[xt.jsx("button",{onClick:E,children:"Создать"}),xt.jsx("button",{onClick:()=>y(!0),children:"Расчитать"})]}),v&&xt.jsx(lS,{cargos:n,setCargos:a,cargoArea:r,setCargoArea:t,onClose:()=>y(!1)})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yd="175",br={ROTATE:0,DOLLY:1,PAN:2},Er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uS=0,P_=1,fS=2,Wv=1,hS=2,ra=3,Wa=0,Wn=1,Oi=2,ka=0,Ar=1,z_=2,B_=3,I_=4,dS=5,Ss=100,pS=101,mS=102,gS=103,_S=104,vS=200,xS=201,yS=202,SS=203,Jh=204,$h=205,MS=206,ES=207,TS=208,bS=209,AS=210,RS=211,wS=212,CS=213,DS=214,td=0,ed=1,nd=2,Dr=3,id=4,ad=5,sd=6,rd=7,Yv=0,US=1,LS=2,Xa=0,NS=1,OS=2,PS=3,zS=4,BS=5,IS=6,FS=7,qv=300,Ur=301,Lr=302,od=303,ld=304,eu=306,cd=1e3,Es=1001,ud=1002,bi=1003,HS=1004,uc=1005,Pi=1006,mh=1007,Ts=1008,fa=1009,jv=1010,Zv=1011,qo=1012,qd=1013,bs=1014,oa=1015,el=1016,jd=1017,Zd=1018,jo=1020,Kv=35902,Qv=1021,Jv=1022,Ti=1023,$v=1024,t0=1025,Zo=1026,Ko=1027,e0=1028,Kd=1029,n0=1030,Qd=1031,Jd=1033,Hc=33776,Gc=33777,Vc=33778,kc=33779,fd=35840,hd=35841,dd=35842,pd=35843,md=36196,gd=37492,_d=37496,vd=37808,xd=37809,yd=37810,Sd=37811,Md=37812,Ed=37813,Td=37814,bd=37815,Ad=37816,Rd=37817,wd=37818,Cd=37819,Dd=37820,Ud=37821,Xc=36492,Ld=36494,Nd=36495,i0=36283,Od=36284,Pd=36285,zd=36286,GS=3200,VS=3201,kS=0,XS=1,Ga="",di="srgb",Nr="srgb-linear",Zc="linear",ze="srgb",cr=7680,F_=519,WS=512,YS=513,qS=514,a0=515,jS=516,ZS=517,KS=518,QS=519,H_=35044,G_="300 es",la=2e3,Kc=2001;class Cs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xo=Math.PI/180,Bd=180/Math.PI;function Br(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[n&63|128]+wn[n>>8&255]+"-"+wn[n>>16&255]+wn[n>>24&255]+wn[a&255]+wn[a>>8&255]+wn[a>>16&255]+wn[a>>24&255]).toLowerCase()}function _e(r,t,n){return Math.max(t,Math.min(n,r))}function JS(r,t){return(r%t+t)%t}function gh(r,t,n){return(1-n)*r+n*t}function zo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const $S={DEG2RAD:Xo};class Nt{constructor(t=0,n=0){Nt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_e(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(_e(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*o+t.x,this.y=c*o+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,n,a,o,c,f,h,m,d){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,f,h,m,d)}set(t,n,a,o,c,f,h,m,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,f=a[0],h=a[3],m=a[6],d=a[1],g=a[4],_=a[7],v=a[2],y=a[5],E=a[8],b=o[0],S=o[3],x=o[6],O=o[1],U=o[4],D=o[7],B=o[2],I=o[5],z=o[8];return c[0]=f*b+h*O+m*B,c[3]=f*S+h*U+m*I,c[6]=f*x+h*D+m*z,c[1]=d*b+g*O+_*B,c[4]=d*S+g*U+_*I,c[7]=d*x+g*D+_*z,c[2]=v*b+y*O+E*B,c[5]=v*S+y*U+E*I,c[8]=v*x+y*D+E*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],d=t[7],g=t[8];return n*f*g-n*h*d-a*c*g+a*h*m+o*c*d-o*f*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],d=t[7],g=t[8],_=g*f-h*d,v=h*m-g*c,y=d*c-f*m,E=n*_+a*v+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(o*d-g*a)*b,t[2]=(h*a-o*f)*b,t[3]=v*b,t[4]=(g*n-o*m)*b,t[5]=(o*c-h*n)*b,t[6]=y*b,t[7]=(a*m-d*n)*b,t[8]=(f*n-a*c)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,f,h){const m=Math.cos(c),d=Math.sin(c);return this.set(a*m,a*d,-a*(m*f+d*h)+f+t,-o*d,o*m,-o*(-d*f+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(_h.makeScale(t,n)),this}rotate(t){return this.premultiply(_h.makeRotation(-t)),this}translate(t,n){return this.premultiply(_h.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _h=new he;function s0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Qo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tM(){const r=Qo("canvas");return r.style.display="block",r}const V_={};function Wc(r){r in V_||(V_[r]=!0,console.warn(r))}function eM(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function nM(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function iM(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const k_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),X_=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aM(){const r={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ze&&(o.r=ca(o.r),o.g=ca(o.g),o.b=ca(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ze&&(o.r=Rr(o.r),o.g=Rr(o.g),o.b=Rr(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ga?Zc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Nr]:{primaries:t,whitePoint:a,transfer:Zc,toXYZ:k_,fromXYZ:X_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:a,transfer:ze,toXYZ:k_,fromXYZ:X_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),r}const De=aM();function ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ur;class sM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{ur===void 0&&(ur=Qo("canvas")),ur.width=t.width,ur.height=t.height;const o=ur.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=ur}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Qo("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=ca(c[f]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ca(n[a]/255)*255):n[a]=ca(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rM=0;class $d{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Br(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push(vh(o[f].image)):c.push(vh(o[f]))}else c=vh(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function vh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oM=0;class Dn extends Cs{constructor(t=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,a=Es,o=Es,c=Pi,f=Ts,h=Ti,m=fa,d=Dn.DEFAULT_ANISOTROPY,g=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Br(),this.name="",this.source=new $d(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cd:t.x=t.x-Math.floor(t.x);break;case Es:t.x=t.x<0?0:1;break;case ud:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cd:t.y=t.y-Math.floor(t.y);break;case Es:t.y=t.y<0?0:1;break;case ud:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=qv;Dn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,n=0,a=0,o=1){$e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*a+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*o+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const m=t.elements,d=m[0],g=m[4],_=m[8],v=m[1],y=m[5],E=m[9],b=m[2],S=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(d+1)/2,D=(y+1)/2,B=(x+1)/2,I=(g+v)/4,z=(_+b)/4,G=(E+S)/4;return U>D&&U>B?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=I/a,c=z/a):D>B?D<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(D),a=I/o,c=G/o):B<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(B),a=z/c,o=G/c),this.set(a,o,c,n),this}let O=Math.sqrt((S-E)*(S-E)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(S-E)/O,this.y=(_-b)/O,this.z=(v-g)/O,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this.z=_e(this.z,t.z,n.z),this.w=_e(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this.z=_e(this.z,t,n),this.w=_e(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_e(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lM extends Cs{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new $e(0,0,t,n),this.scissorTest=!1,this.viewport=new $e(0,0,t,n);const o={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Dn(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new $d(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends lM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class r0 extends Dn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=bi,this.minFilter=bi,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends Dn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=bi,this.minFilter=bi,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,f,h){let m=a[o+0],d=a[o+1],g=a[o+2],_=a[o+3];const v=c[f+0],y=c[f+1],E=c[f+2],b=c[f+3];if(h===0){t[n+0]=m,t[n+1]=d,t[n+2]=g,t[n+3]=_;return}if(h===1){t[n+0]=v,t[n+1]=y,t[n+2]=E,t[n+3]=b;return}if(_!==b||m!==v||d!==y||g!==E){let S=1-h;const x=m*v+d*y+g*E+_*b,O=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const B=Math.sqrt(U),I=Math.atan2(B,x*O);S=Math.sin(S*I)/B,h=Math.sin(h*I)/B}const D=h*O;if(m=m*S+v*D,d=d*S+y*D,g=g*S+E*D,_=_*S+b*D,S===1-h){const B=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=B,d*=B,g*=B,_*=B}}t[n]=m,t[n+1]=d,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,c,f){const h=a[o],m=a[o+1],d=a[o+2],g=a[o+3],_=c[f],v=c[f+1],y=c[f+2],E=c[f+3];return t[n]=h*E+g*_+m*y-d*v,t[n+1]=m*E+g*v+d*_-h*y,t[n+2]=d*E+g*y+h*v-m*_,t[n+3]=g*E-h*_-m*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,d=h(a/2),g=h(o/2),_=h(c/2),v=m(a/2),y=m(o/2),E=m(c/2);switch(f){case"XYZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"YZX":this._x=v*g*_+d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_-v*y*E;break;case"XZY":this._x=v*g*_-d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],f=n[1],h=n[5],m=n[9],d=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-d)*y,this._z=(f-o)*y}else if(a>h&&a>_){const y=2*Math.sqrt(1+a-h-_);this._w=(g-m)/y,this._x=.25*y,this._y=(o+f)/y,this._z=(c+d)/y}else if(h>_){const y=2*Math.sqrt(1+h-a-_);this._w=(c-d)/y,this._x=(o+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-a-h);this._w=(f-o)/y,this._x=(c+d)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,f=t._w,h=n._x,m=n._y,d=n._z,g=n._w;return this._x=a*g+f*h+o*d-c*m,this._y=o*g+f*m+c*h-a*d,this._z=c*g+f*d+a*m-o*h,this._w=f*g-a*h-o*m-c*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,f=this._w;let h=f*t._w+a*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=a,this._y=o,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*a+n*this._x,this._y=y*o+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const d=Math.sqrt(m),g=Math.atan2(d,h),_=Math.sin((1-n)*g)/d,v=Math.sin(n*g)/d;return this._w=f*_+this._w*v,this._x=a*_+this._x*v,this._y=o*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,n=0,a=0){X.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(W_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(W_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,f=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,f=t.y,h=t.z,m=t.w,d=2*(f*o-h*a),g=2*(h*n-c*o),_=2*(c*a-f*n);return this.x=n+m*d+f*_-h*g,this.y=a+m*g+h*d-c*_,this.z=o+m*_+c*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this.z=_e(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this.z=_e(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_e(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,f=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*f-a*m,this.z=a*h-o*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return xh.copy(this).projectOnVector(t),this.sub(xh)}reflect(t){return this.sub(xh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(_e(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xh=new X,W_=new Rs;class Ya{constructor(t=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Si):Si.fromBufferAttribute(c,f),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),fc.copy(a.boundingBox)),fc.applyMatrix4(t.matrixWorld),this.union(fc)}const o=t.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),hc.subVectors(this.max,Bo),fr.subVectors(t.a,Bo),hr.subVectors(t.b,Bo),dr.subVectors(t.c,Bo),Oa.subVectors(hr,fr),Pa.subVectors(dr,hr),ps.subVectors(fr,dr);let n=[0,-Oa.z,Oa.y,0,-Pa.z,Pa.y,0,-ps.z,ps.y,Oa.z,0,-Oa.x,Pa.z,0,-Pa.x,ps.z,0,-ps.x,-Oa.y,Oa.x,0,-Pa.y,Pa.x,0,-ps.y,ps.x,0];return!yh(n,fr,hr,dr,hc)||(n=[1,0,0,0,1,0,0,0,1],!yh(n,fr,hr,dr,hc))?!1:(dc.crossVectors(Oa,Pa),n=[dc.x,dc.y,dc.z],yh(n,fr,hr,dr,hc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ta=[new X,new X,new X,new X,new X,new X,new X,new X],Si=new X,fc=new Ya,fr=new X,hr=new X,dr=new X,Oa=new X,Pa=new X,ps=new X,Bo=new X,hc=new X,dc=new X,ms=new X;function yh(r,t,n,a,o){for(let c=0,f=r.length-3;c<=f;c+=3){ms.fromArray(r,c);const h=o.x*Math.abs(ms.x)+o.y*Math.abs(ms.y)+o.z*Math.abs(ms.z),m=t.dot(ms),d=n.dot(ms),g=a.dot(ms);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const uM=new Ya,Io=new X,Sh=new X;class nu{constructor(t=new X,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):uM.setFromPoints(t).getCenter(a);let o=0;for(let c=0,f=t.length;c<f;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);const n=Io.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Io,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add(Sh)),this.expandByPoint(Io.copy(t.center).sub(Sh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new X,Mh=new X,pc=new X,za=new X,Eh=new X,mc=new X,Th=new X;class iu{constructor(t=new X,n=new X(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ea.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,n),ea.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Mh.copy(t).add(n).multiplyScalar(.5),pc.copy(n).sub(t).normalize(),za.copy(this.origin).sub(Mh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(pc),h=za.dot(this.direction),m=-za.dot(pc),d=za.lengthSq(),g=Math.abs(1-f*f);let _,v,y,E;if(g>0)if(_=f*m-h,v=f*h-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const b=1/g;_*=b,v*=b,y=_*(_+f*v+2*h)+v*(f*_+v+2*m)+d}else v=c,_=Math.max(0,-(f*v+h)),y=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(f*v+h)),y=-_*_+v*(v+2*m)+d;else v<=-E?(_=Math.max(0,-(-f*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+d):(_=Math.max(0,-(f*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+d);else v=f>0?-c:c,_=Math.max(0,-(f*v+h)),y=-_*_+v*(v+2*m)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Mh).addScaledVector(pc,v),y}intersectSphere(t,n){ea.subVectors(t.center,this.origin);const a=ea.dot(this.direction),o=ea.dot(ea)-a*a,c=t.radius*t.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,f,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),a>f||c>o||((c>a||isNaN(a))&&(a=c),(f<o||isNaN(o))&&(o=f),_>=0?(h=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,n,a,o,c){Eh.subVectors(n,t),mc.subVectors(a,t),Th.crossVectors(Eh,mc);let f=this.direction.dot(Th),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;za.subVectors(this.origin,t);const m=h*this.direction.dot(mc.crossVectors(za,mc));if(m<0)return null;const d=h*this.direction.dot(Eh.cross(za));if(d<0||m+d>f)return null;const g=-h*za.dot(Th);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(t,n,a,o,c,f,h,m,d,g,_,v,y,E,b,S){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,f,h,m,d,g,_,v,y,E,b,S)}set(t,n,a,o,c,f,h,m,d,g,_,v,y,E,b,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=o,x[1]=c,x[5]=f,x[9]=h,x[13]=m,x[2]=d,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/pr.setFromMatrixColumn(t,0).length(),c=1/pr.setFromMatrixColumn(t,1).length(),f=1/pr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,y=f*_,E=h*g,b=h*_;n[0]=m*g,n[4]=-m*_,n[8]=d,n[1]=y+E*d,n[5]=v-b*d,n[9]=-h*m,n[2]=b-v*d,n[6]=E+y*d,n[10]=f*m}else if(t.order==="YXZ"){const v=m*g,y=m*_,E=d*g,b=d*_;n[0]=v+b*h,n[4]=E*h-y,n[8]=f*d,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=y*h-E,n[6]=b+v*h,n[10]=f*m}else if(t.order==="ZXY"){const v=m*g,y=m*_,E=d*g,b=d*_;n[0]=v-b*h,n[4]=-f*_,n[8]=E+y*h,n[1]=y+E*h,n[5]=f*g,n[9]=b-v*h,n[2]=-f*d,n[6]=h,n[10]=f*m}else if(t.order==="ZYX"){const v=f*g,y=f*_,E=h*g,b=h*_;n[0]=m*g,n[4]=E*d-y,n[8]=v*d+b,n[1]=m*_,n[5]=b*d+v,n[9]=y*d-E,n[2]=-d,n[6]=h*m,n[10]=f*m}else if(t.order==="YZX"){const v=f*m,y=f*d,E=h*m,b=h*d;n[0]=m*g,n[4]=b-v*_,n[8]=E*_+y,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-d*g,n[6]=y*_+E,n[10]=v-b*_}else if(t.order==="XZY"){const v=f*m,y=f*d,E=h*m,b=h*d;n[0]=m*g,n[4]=-_,n[8]=d*g,n[1]=v*_+b,n[5]=f*g,n[9]=y*_-E,n[2]=E*_-y,n[6]=h*g,n[10]=b*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fM,t,hM)}lookAt(t,n,a){const o=this.elements;return $n.subVectors(t,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ba.crossVectors(a,$n),Ba.lengthSq()===0&&(Math.abs(a.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ba.crossVectors(a,$n)),Ba.normalize(),gc.crossVectors($n,Ba),o[0]=Ba.x,o[4]=gc.x,o[8]=$n.x,o[1]=Ba.y,o[5]=gc.y,o[9]=$n.y,o[2]=Ba.z,o[6]=gc.z,o[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,f=a[0],h=a[4],m=a[8],d=a[12],g=a[1],_=a[5],v=a[9],y=a[13],E=a[2],b=a[6],S=a[10],x=a[14],O=a[3],U=a[7],D=a[11],B=a[15],I=o[0],z=o[4],G=o[8],R=o[12],A=o[1],F=o[5],ct=o[9],st=o[13],ft=o[2],lt=o[6],V=o[10],nt=o[14],Z=o[3],Tt=o[7],N=o[11],et=o[15];return c[0]=f*I+h*A+m*ft+d*Z,c[4]=f*z+h*F+m*lt+d*Tt,c[8]=f*G+h*ct+m*V+d*N,c[12]=f*R+h*st+m*nt+d*et,c[1]=g*I+_*A+v*ft+y*Z,c[5]=g*z+_*F+v*lt+y*Tt,c[9]=g*G+_*ct+v*V+y*N,c[13]=g*R+_*st+v*nt+y*et,c[2]=E*I+b*A+S*ft+x*Z,c[6]=E*z+b*F+S*lt+x*Tt,c[10]=E*G+b*ct+S*V+x*N,c[14]=E*R+b*st+S*nt+x*et,c[3]=O*I+U*A+D*ft+B*Z,c[7]=O*z+U*F+D*lt+B*Tt,c[11]=O*G+U*ct+D*V+B*N,c[15]=O*R+U*st+D*nt+B*et,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],f=t[1],h=t[5],m=t[9],d=t[13],g=t[2],_=t[6],v=t[10],y=t[14],E=t[3],b=t[7],S=t[11],x=t[15];return E*(+c*m*_-o*d*_-c*h*v+a*d*v+o*h*y-a*m*y)+b*(+n*m*y-n*d*v+c*f*v-o*f*y+o*d*g-c*m*g)+S*(+n*d*_-n*h*y-c*f*_+a*f*y+c*h*g-a*d*g)+x*(-o*h*g-n*m*_+n*h*v+o*f*_-a*f*v+a*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],d=t[7],g=t[8],_=t[9],v=t[10],y=t[11],E=t[12],b=t[13],S=t[14],x=t[15],O=_*S*d-b*v*d+b*m*y-h*S*y-_*m*x+h*v*x,U=E*v*d-g*S*d-E*m*y+f*S*y+g*m*x-f*v*x,D=g*b*d-E*_*d+E*h*y-f*b*y-g*h*x+f*_*x,B=E*_*m-g*b*m-E*h*v+f*b*v+g*h*S-f*_*S,I=n*O+a*U+o*D+c*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return t[0]=O*z,t[1]=(b*v*c-_*S*c-b*o*y+a*S*y+_*o*x-a*v*x)*z,t[2]=(h*S*c-b*m*c+b*o*d-a*S*d-h*o*x+a*m*x)*z,t[3]=(_*m*c-h*v*c-_*o*d+a*v*d+h*o*y-a*m*y)*z,t[4]=U*z,t[5]=(g*S*c-E*v*c+E*o*y-n*S*y-g*o*x+n*v*x)*z,t[6]=(E*m*c-f*S*c-E*o*d+n*S*d+f*o*x-n*m*x)*z,t[7]=(f*v*c-g*m*c+g*o*d-n*v*d-f*o*y+n*m*y)*z,t[8]=D*z,t[9]=(E*_*c-g*b*c-E*a*y+n*b*y+g*a*x-n*_*x)*z,t[10]=(f*b*c-E*h*c+E*a*d-n*b*d-f*a*x+n*h*x)*z,t[11]=(g*h*c-f*_*c-g*a*d+n*_*d+f*a*y-n*h*y)*z,t[12]=B*z,t[13]=(g*b*o-E*_*o+E*a*v-n*b*v-g*a*S+n*_*S)*z,t[14]=(E*h*o-f*b*o-E*a*m+n*b*m+f*a*S-n*h*S)*z,t[15]=(f*_*o-g*h*o+g*a*m-n*_*m-f*a*v+n*h*v)*z,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,f=t.x,h=t.y,m=t.z,d=c*f,g=c*h;return this.set(d*f+a,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+a,g*m-o*f,0,d*m-o*h,g*m+o*f,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,f){return this.set(1,a,c,0,t,1,f,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,d=c+c,g=f+f,_=h+h,v=c*d,y=c*g,E=c*_,b=f*g,S=f*_,x=h*_,O=m*d,U=m*g,D=m*_,B=a.x,I=a.y,z=a.z;return o[0]=(1-(b+x))*B,o[1]=(y+D)*B,o[2]=(E-U)*B,o[3]=0,o[4]=(y-D)*I,o[5]=(1-(v+x))*I,o[6]=(S+O)*I,o[7]=0,o[8]=(E+U)*z,o[9]=(S-O)*z,o[10]=(1-(v+b))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=pr.set(o[0],o[1],o[2]).length();const f=pr.set(o[4],o[5],o[6]).length(),h=pr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Mi.copy(this);const d=1/c,g=1/f,_=1/h;return Mi.elements[0]*=d,Mi.elements[1]*=d,Mi.elements[2]*=d,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=_,Mi.elements[9]*=_,Mi.elements[10]*=_,n.setFromRotationMatrix(Mi),a.x=c,a.y=f,a.z=h,this}makePerspective(t,n,a,o,c,f,h=la){const m=this.elements,d=2*c/(n-t),g=2*c/(a-o),_=(n+t)/(n-t),v=(a+o)/(a-o);let y,E;if(h===la)y=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===Kc)y=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=d,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,a,o,c,f,h=la){const m=this.elements,d=1/(n-t),g=1/(a-o),_=1/(f-c),v=(n+t)*d,y=(a+o)*g;let E,b;if(h===la)E=(f+c)*_,b=-2*_;else if(h===Kc)E=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*d,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=b,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const pr=new X,Mi=new qe,fM=new X(0,0,0),hM=new X(1,1,1),Ba=new X,gc=new X,$n=new X,Y_=new qe,q_=new Rs;class ha{constructor(t=0,n=0,a=0,o=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],f=o[4],h=o[8],m=o[1],d=o[5],g=o[9],_=o[2],v=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Y_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Y_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return q_.setFromEuler(this),this.setFromQuaternion(q_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dM=0;const j_=new X,mr=new Rs,na=new qe,_c=new X,Fo=new X,pM=new X,mM=new Rs,Z_=new X(1,0,0),K_=new X(0,1,0),Q_=new X(0,0,1),J_={type:"added"},gM={type:"removed"},gr={type:"childadded",child:null},bh={type:"childremoved",child:null};class Un extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new X,n=new ha,a=new Rs,o=new X(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qe},normalMatrix:{value:new he}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return mr.setFromAxisAngle(t,n),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,n){return mr.setFromAxisAngle(t,n),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(Z_,t)}rotateY(t){return this.rotateOnAxis(K_,t)}rotateZ(t){return this.rotateOnAxis(Q_,t)}translateOnAxis(t,n){return j_.copy(t).applyQuaternion(this.quaternion),this.position.add(j_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Z_,t)}translateY(t){return this.translateOnAxis(K_,t)}translateZ(t){return this.translateOnAxis(Q_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?_c.copy(t):_c.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Fo,_c,this.up):na.lookAt(_c,Fo,this.up),this.quaternion.setFromRotationMatrix(na),o&&(na.extractRotation(o.matrixWorld),mr.setFromRotationMatrix(na),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(J_),gr.child=t,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(gM),bh.child=t,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(J_),gr.child=t,this.dispatchEvent(gr),gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,pM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,mM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=f(t.geometries),m=f(t.materials),d=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),y=f(t.animations),E=f(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=o,a;function f(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Un.DEFAULT_UP=new X(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new X,ia=new X,Ah=new X,aa=new X,_r=new X,vr=new X,$_=new X,Rh=new X,wh=new X,Ch=new X,Dh=new $e,Uh=new $e,Lh=new $e;class mi{constructor(t=new X,n=new X,a=new X){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Ei.subVectors(t,n),o.cross(Ei);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Ei.subVectors(o,n),ia.subVectors(a,n),Ah.subVectors(t,n);const f=Ei.dot(Ei),h=Ei.dot(ia),m=Ei.dot(Ah),d=ia.dot(ia),g=ia.dot(Ah),_=f*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(d*m-h*g)*v,E=(f*g-h*m)*v;return c.set(1-y-E,E,y)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,n,a,o,c,f,h,m){return this.getBarycoord(t,n,a,o,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,aa.x),m.addScaledVector(f,aa.y),m.addScaledVector(h,aa.z),m)}static getInterpolatedAttribute(t,n,a,o,c,f){return Dh.setScalar(0),Uh.setScalar(0),Lh.setScalar(0),Dh.fromBufferAttribute(t,n),Uh.fromBufferAttribute(t,a),Lh.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(Dh,c.x),f.addScaledVector(Uh,c.y),f.addScaledVector(Lh,c.z),f}static isFrontFacing(t,n,a,o){return Ei.subVectors(a,n),ia.subVectors(t,n),Ei.cross(ia).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Ei.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return mi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return mi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let f,h;_r.subVectors(o,a),vr.subVectors(c,a),Rh.subVectors(t,a);const m=_r.dot(Rh),d=vr.dot(Rh);if(m<=0&&d<=0)return n.copy(a);wh.subVectors(t,o);const g=_r.dot(wh),_=vr.dot(wh);if(g>=0&&_<=g)return n.copy(o);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(a).addScaledVector(_r,f);Ch.subVectors(t,c);const y=_r.dot(Ch),E=vr.dot(Ch);if(E>=0&&y<=E)return n.copy(c);const b=y*d-m*E;if(b<=0&&d>=0&&E<=0)return h=d/(d-E),n.copy(a).addScaledVector(vr,h);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return $_.subVectors(c,o),h=(_-g)/(_-g+(y-E)),n.copy(o).addScaledVector($_,h);const x=1/(S+b+v);return f=b*x,h=v*x,n.copy(a).addScaledVector(_r,f).addScaledVector(vr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const o0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Nh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Ue{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.toWorkingColorSpace(this,n),this}setRGB(t,n,a,o=De.workingColorSpace){return this.r=t,this.g=n,this.b=a,De.toWorkingColorSpace(this,o),this}setHSL(t,n,a,o=De.workingColorSpace){if(t=JS(t,1),n=_e(n,0,1),a=_e(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=Nh(f,c,t+1/3),this.g=Nh(f,c,t),this.b=Nh(f,c,t-1/3)}return De.toWorkingColorSpace(this,o),this}setStyle(t,n=di){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=di){const a=o0[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return De.fromWorkingColorSpace(Cn.copy(this),t),Math.round(_e(Cn.r*255,0,255))*65536+Math.round(_e(Cn.g*255,0,255))*256+Math.round(_e(Cn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=De.workingColorSpace){De.fromWorkingColorSpace(Cn.copy(this),n);const a=Cn.r,o=Cn.g,c=Cn.b,f=Math.max(a,o,c),h=Math.min(a,o,c);let m,d;const g=(h+f)/2;if(h===f)m=0,d=0;else{const _=f-h;switch(d=g<=.5?_/(f+h):_/(2-f-h),f){case a:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-a)/_+2;break;case c:m=(a-o)/_+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,n=De.workingColorSpace){return De.fromWorkingColorSpace(Cn.copy(this),n),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=di){De.fromWorkingColorSpace(Cn.copy(this),t);const n=Cn.r,a=Cn.g,o=Cn.b;return t!==di?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+n,Ia.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Ia),t.getHSL(vc);const a=gh(Ia.h,vc.h,n),o=gh(Ia.s,vc.s,n),c=gh(Ia.l,vc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ue;Ue.NAMES=o0;let _M=0;class nl extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=Ar,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jh,this.blendDst=$h,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(a.blending=this.blending),this.side!==Wa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Jh&&(a.blendSrc=this.blendSrc),this.blendDst!==$h&&(a.blendDst=this.blendDst),this.blendEquation!==Ss&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=o(t.textures),f=o(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ua extends nl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=Yv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new X,xc=new Nt;let vM=0;class Ai{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=H_,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)xc.fromBufferAttribute(this,n),xc.applyMatrix3(t),this.setXY(n,xc.x,xc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)an.fromBufferAttribute(this,n),an.applyMatrix3(t),this.setXYZ(n,an.x,an.y,an.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)an.fromBufferAttribute(this,n),an.applyMatrix4(t),this.setXYZ(n,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)an.fromBufferAttribute(this,n),an.applyNormalMatrix(t),this.setXYZ(n,an.x,an.y,an.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)an.fromBufferAttribute(this,n),an.transformDirection(t),this.setXYZ(n,an.x,an.y,an.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=zo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=kn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=zo(n,this.array)),n}setX(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=zo(n,this.array)),n}setY(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=zo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=zo(n,this.array)),n}setW(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array),o=kn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array),o=kn(o,this.array),c=kn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==H_&&(t.usage=this.usage),t}}class l0 extends Ai{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class c0 extends Ai{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class ei extends Ai{constructor(t,n,a){super(new Float32Array(t),n,a)}}let xM=0;const hi=new qe,Oh=new Un,xr=new X,ti=new Ya,Ho=new Ya,vn=new X;class Yn extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(s0(t)?c0:l0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new he().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,n,a){return hi.makeTranslation(t,n,a),this.applyMatrix4(hi),this}scale(t,n,a){return hi.makeScale(t,n,a),this.applyMatrix4(hi),this}lookAt(t){return Oh.lookAt(t),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const f=t[o];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ei(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const a=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Ho.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ti.min,Ho.min),ti.expandByPoint(vn),vn.addVectors(ti.max,Ho.max),ti.expandByPoint(vn)):(ti.expandByPoint(Ho.min),ti.expandByPoint(Ho.max))}ti.getCenter(a);let o=0;for(let c=0,f=t.count;c<f;c++)vn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(vn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)vn.fromBufferAttribute(h,d),m&&(xr.fromBufferAttribute(t,d),vn.add(xr)),o=Math.max(o,a.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let G=0;G<a.count;G++)h[G]=new X,m[G]=new X;const d=new X,g=new X,_=new X,v=new Nt,y=new Nt,E=new Nt,b=new X,S=new X;function x(G,R,A){d.fromBufferAttribute(a,G),g.fromBufferAttribute(a,R),_.fromBufferAttribute(a,A),v.fromBufferAttribute(c,G),y.fromBufferAttribute(c,R),E.fromBufferAttribute(c,A),g.sub(d),_.sub(d),y.sub(v),E.sub(v);const F=1/(y.x*E.y-E.x*y.y);isFinite(F)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(F),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(F),h[G].add(b),h[R].add(b),h[A].add(b),m[G].add(S),m[R].add(S),m[A].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let G=0,R=O.length;G<R;++G){const A=O[G],F=A.start,ct=A.count;for(let st=F,ft=F+ct;st<ft;st+=3)x(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const U=new X,D=new X,B=new X,I=new X;function z(G){B.fromBufferAttribute(o,G),I.copy(B);const R=h[G];U.copy(R),U.sub(B.multiplyScalar(B.dot(R))).normalize(),D.crossVectors(I,R);const F=D.dot(m[G])<0?-1:1;f.setXYZW(G,U.x,U.y,U.z,F)}for(let G=0,R=O.length;G<R;++G){const A=O[G],F=A.start,ct=A.count;for(let st=F,ft=F+ct;st<ft;st+=3)z(t.getX(st+0)),z(t.getX(st+1)),z(t.getX(st+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ai(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const o=new X,c=new X,f=new X,h=new X,m=new X,d=new X,g=new X,_=new X;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),b=t.getX(v+1),S=t.getX(v+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,b),f.fromBufferAttribute(n,S),g.subVectors(f,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,b),d.fromBufferAttribute(a,S),h.add(g),m.add(g),d.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(b,m.x,m.y,m.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),g.subVectors(f,c),_.subVectors(o,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)vn.fromBufferAttribute(t,n),vn.normalize(),t.setXYZ(n,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,m){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(m.length*g);let y=0,E=0;for(let b=0,S=m.length;b<S;b++){h.isInterleavedBufferAttribute?y=m[b]*h.data.stride+h.offset:y=m[b]*g;for(let x=0;x<g;x++)v[E++]=d[y++]}return new Ai(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yn,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=t(m,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],y=t(v,a);m.push(y)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const d=f[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const d=a[m];t.data.attributes[m]=d.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const y=d[_];g.push(y.toJSON(t.data))}g.length>0&&(o[m]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const _=f[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tv=new qe,gs=new iu,yc=new nu,ev=new X,Sc=new X,Mc=new X,Ec=new X,Ph=new X,Tc=new X,nv=new X,bc=new X;class Tn extends Un{constructor(t=new Yn,n=new ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Tc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],_=c[m];g!==0&&(Ph.fromBufferAttribute(_,t),f?Tc.addScaledVector(Ph,g):Tc.addScaledVector(Ph.sub(n),g))}n.add(Tc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),yc.copy(a.boundingSphere),yc.applyMatrix4(c),gs.copy(t.ray).recast(t.near),!(yc.containsPoint(gs.origin)===!1&&(gs.intersectSphere(yc,ev)===null||gs.origin.distanceToSquared(ev)>(t.far-t.near)**2))&&(tv.copy(c).invert(),gs.copy(t.ray).applyMatrix4(tv),!(a.boundingBox!==null&&gs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,gs)))}_computeIntersections(t,n,a){let o;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,b=v.length;E<b;E++){const S=v[E],x=f[S.materialIndex],O=Math.max(S.start,y.start),U=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let D=O,B=U;D<B;D+=3){const I=h.getX(D),z=h.getX(D+1),G=h.getX(D+2);o=Ac(this,x,t,a,d,g,_,I,z,G),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),b=Math.min(h.count,y.start+y.count);for(let S=E,x=b;S<x;S+=3){const O=h.getX(S),U=h.getX(S+1),D=h.getX(S+2);o=Ac(this,f,t,a,d,g,_,O,U,D),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,b=v.length;E<b;E++){const S=v[E],x=f[S.materialIndex],O=Math.max(S.start,y.start),U=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let D=O,B=U;D<B;D+=3){const I=D,z=D+1,G=D+2;o=Ac(this,x,t,a,d,g,_,I,z,G),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),b=Math.min(m.count,y.start+y.count);for(let S=E,x=b;S<x;S+=3){const O=S,U=S+1,D=S+2;o=Ac(this,f,t,a,d,g,_,O,U,D),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function yM(r,t,n,a,o,c,f,h){let m;if(t.side===Wn?m=a.intersectTriangle(f,c,o,!0,h):m=a.intersectTriangle(o,c,f,t.side===Wa,h),m===null)return null;bc.copy(h),bc.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(bc);return d<n.near||d>n.far?null:{distance:d,point:bc.clone(),object:r}}function Ac(r,t,n,a,o,c,f,h,m,d){r.getVertexPosition(h,Sc),r.getVertexPosition(m,Mc),r.getVertexPosition(d,Ec);const g=yM(r,t,n,a,Sc,Mc,Ec,nv);if(g){const _=new X;mi.getBarycoord(nv,Sc,Mc,Ec,_),o&&(g.uv=mi.getInterpolatedAttribute(o,h,m,d,_,new Nt)),c&&(g.uv1=mi.getInterpolatedAttribute(c,h,m,d,_,new Nt)),f&&(g.normal=mi.getInterpolatedAttribute(f,h,m,d,_,new X),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:d,normal:new X,materialIndex:0};mi.getNormal(Sc,Mc,Ec,v.normal),g.face=v,g.barycoord=_}return g}class Ds extends Yn{constructor(t=1,n=1,a=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,a,n,t,f,c,0),E("z","y","x",1,-1,a,n,-t,f,c,1),E("x","z","y",1,1,t,a,n,o,f,2),E("x","z","y",1,-1,t,a,-n,o,f,3),E("x","y","z",1,-1,t,n,a,o,c,4),E("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new ei(d,3)),this.setAttribute("normal",new ei(g,3)),this.setAttribute("uv",new ei(_,2));function E(b,S,x,O,U,D,B,I,z,G,R){const A=D/z,F=B/G,ct=D/2,st=B/2,ft=I/2,lt=z+1,V=G+1;let nt=0,Z=0;const Tt=new X;for(let N=0;N<V;N++){const et=N*F-st;for(let Rt=0;Rt<lt;Rt++){const Ut=Rt*A-ct;Tt[b]=Ut*O,Tt[S]=et*U,Tt[x]=ft,d.push(Tt.x,Tt.y,Tt.z),Tt[b]=0,Tt[S]=0,Tt[x]=I>0?1:-1,g.push(Tt.x,Tt.y,Tt.z),_.push(Rt/z),_.push(1-N/G),nt+=1}}for(let N=0;N<G;N++)for(let et=0;et<z;et++){const Rt=v+et+lt*N,Ut=v+et+lt*(N+1),q=v+(et+1)+lt*(N+1),gt=v+(et+1)+lt*N;m.push(Rt,Ut,gt),m.push(Ut,q,gt),Z+=6}h.addGroup(y,Z,R),y+=Z,v+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Or(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function In(r){const t={};for(let n=0;n<r.length;n++){const a=Or(r[n]);for(const o in a)t[o]=a[o]}return t}function SM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function u0(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const MM={clone:Or,merge:In};var EM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends nl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=SM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class f0 extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=la}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new X,iv=new Nt,av=new Nt;class pi extends f0{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Bd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bd*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,n){return this.getViewBounds(t,iv,av),n.subVectors(av,iv)}setViewOffset(t,n,a,o,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Xo*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*o/m,n-=f.offsetY*a/d,o*=f.width/m,a*=f.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const yr=-90,Sr=1;class bM extends Un{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new pi(yr,Sr,t,n);o.layers=this.layers,this.add(o);const c=new pi(yr,Sr,t,n);c.layers=this.layers,this.add(c);const f=new pi(yr,Sr,t,n);f.layers=this.layers,this.add(f);const h=new pi(yr,Sr,t,n);h.layers=this.layers,this.add(h);const m=new pi(yr,Sr,t,n);m.layers=this.layers,this.add(m);const d=new pi(yr,Sr,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,f,h,m]=n;for(const d of n)this.remove(d);if(t===la)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Kc)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,f),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,m),t.setRenderTarget(a,4,o),t.render(n,d),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(_,v,y),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class h0 extends Dn{constructor(t=[],n=Ur,a,o,c,f,h,m,d,g){super(t,n,a,o,c,f,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class AM extends As{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new h0(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ds(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:Or(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Wn,blending:ka});c.uniforms.tEquirect.value=n;const f=new Tn(o,c),h=n.minFilter;return n.minFilter===Ts&&(n.minFilter=Pi),new bM(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,a,o);t.setRenderTarget(c)}}class Va extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,f=null;const h=this._targetRay,m=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const b of t.hand.values()){const S=n.getJointPose(b,a),x=this._getHandJoint(d,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;d.inputState.pinching&&v>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Va;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class wM extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Bh=new X,CM=new X,DM=new he;class Ha{constructor(t=new X(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Bh.subVectors(a,n).cross(CM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Bh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||DM.getNormalMatrix(t),o=this.coplanarPoint(Bh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new nu,Rc=new X;class d0{constructor(t=new Ha,n=new Ha,a=new Ha,o=new Ha,c=new Ha,f=new Ha){this.planes=[t,n,a,o,c,f]}set(t,n,a,o,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=la){const a=this.planes,o=t.elements,c=o[0],f=o[1],h=o[2],m=o[3],d=o[4],g=o[5],_=o[6],v=o[7],y=o[8],E=o[9],b=o[10],S=o[11],x=o[12],O=o[13],U=o[14],D=o[15];if(a[0].setComponents(m-c,v-d,S-y,D-x).normalize(),a[1].setComponents(m+c,v+d,S+y,D+x).normalize(),a[2].setComponents(m+f,v+g,S+E,D+O).normalize(),a[3].setComponents(m-f,v-g,S-E,D-O).normalize(),a[4].setComponents(m-h,v-_,S-b,D-U).normalize(),n===la)a[5].setComponents(m+h,v+_,S+b,D+U).normalize();else if(n===Kc)a[5].setComponents(h,_,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Rc.x=o.normal.x>0?t.max.x:t.min.x,Rc.y=o.normal.y>0?t.max.y:t.min.y,Rc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wr extends nl{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qc=new X,Jc=new X,sv=new qe,Go=new iu,wc=new nu,Ih=new X,rv=new X;class Yc extends Un{constructor(t=new Yn,n=new wr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)Qc.fromBufferAttribute(n,o-1),Jc.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=Qc.distanceTo(Jc);t.setAttribute("lineDistance",new ei(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),wc.copy(a.boundingSphere),wc.applyMatrix4(o),wc.radius+=c,t.ray.intersectsSphere(wc)===!1)return;sv.copy(o).invert(),Go.copy(t.ray).applyMatrix4(sv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,d=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let b=y,S=E-1;b<S;b+=d){const x=g.getX(b),O=g.getX(b+1),U=Cc(this,t,Go,m,x,O,b);U&&n.push(U)}if(this.isLineLoop){const b=g.getX(E-1),S=g.getX(y),x=Cc(this,t,Go,m,b,S,E-1);x&&n.push(x)}}else{const y=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let b=y,S=E-1;b<S;b+=d){const x=Cc(this,t,Go,m,b,b+1,b);x&&n.push(x)}if(this.isLineLoop){const b=Cc(this,t,Go,m,E-1,y,E-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Cc(r,t,n,a,o,c,f){const h=r.geometry.attributes.position;if(Qc.fromBufferAttribute(h,o),Jc.fromBufferAttribute(h,c),n.distanceSqToSegment(Qc,Jc,Ih,rv)>a)return;Ih.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Ih);if(!(d<t.near||d>t.far))return{distance:d,point:rv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const ov=new X,lv=new X;class p0 extends Yc{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)ov.fromBufferAttribute(n,o),lv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+ov.distanceTo(lv);t.setAttribute("lineDistance",new ei(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class m0 extends Dn{constructor(t,n,a=bs,o,c,f,h=bi,m=bi,d,g=Zo){if(g!==Zo&&g!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,c,f,h,m,g,a,d),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $d(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let f;n?f=n:f=t*a[c-1];let h=0,m=c-1,d;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),d=a[o]-f,d<0)h=o+1;else if(d>0)m=o-1;else{m=o;break}if(o=m,a[o]===f)return o/(c-1);const g=a[o],v=a[o+1]-g,y=(f-g)/v;return(o+y)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const f=this.getPoint(o),h=this.getPoint(c),m=n||(f.isVector2?new Nt:new X);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new X,o=[],c=[],f=[],h=new X,m=new qe;for(let y=0;y<=t;y++){const E=y/t;o[y]=this.getTangentAt(E,new X)}c[0]=new X,f[0]=new X;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=d&&(d=g,a.set(1,0,0)),_<=d&&(d=_,a.set(0,1,0)),v<=d&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),f[0].crossVectors(o[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),h.crossVectors(o[y-1],o[y]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(_e(o[y-1].dot(o[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(h,E))}f[y].crossVectors(o[y],c[y])}if(n===!0){let y=Math.acos(_e(c[0].dot(c[t]),-1,1));y/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],y*E)),f[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ep extends zi{constructor(t=0,n=0,a=1,o=1,c=0,f=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=m}getPoint(t,n=new Nt){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(f?c=0:c=o),this.aClockwise===!0&&!f&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),d=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=m-this.aX,y=d-this.aY;m=v*g-y*_+this.aX,d=v*_+y*g+this.aY}return a.set(m,d)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class UM extends ep{constructor(t,n,a,o,c,f){super(t,n,a,a,o,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function np(){let r=0,t=0,n=0,a=0;function o(c,f,h,m){r=c,t=h,n=-3*c+3*f-2*h-m,a=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,d){o(f,h,d*(h-c),d*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,d,g,_){let v=(f-c)/d-(h-c)/(d+g)+(h-f)/g,y=(h-f)/g-(m-f)/(g+_)+(m-h)/_;v*=g,y*=g,o(f,h,v,y)},calc:function(c){const f=c*c,h=f*c;return r+t*c+n*f+a*h}}}const Dc=new X,Fh=new np,Hh=new np,Gh=new np;class LM extends zi{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new X){const a=n,o=this.points,c=o.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let d,g;this.closed||h>0?d=o[(h-1)%c]:(Dc.subVectors(o[0],o[1]).add(o[0]),d=Dc);const _=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(Dc.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=Dc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(d.distanceToSquared(_),y),b=Math.pow(_.distanceToSquared(v),y),S=Math.pow(v.distanceToSquared(g),y);b<1e-4&&(b=1),E<1e-4&&(E=b),S<1e-4&&(S=b),Fh.initNonuniformCatmullRom(d.x,_.x,v.x,g.x,E,b,S),Hh.initNonuniformCatmullRom(d.y,_.y,v.y,g.y,E,b,S),Gh.initNonuniformCatmullRom(d.z,_.z,v.z,g.z,E,b,S)}else this.curveType==="catmullrom"&&(Fh.initCatmullRom(d.x,_.x,v.x,g.x,this.tension),Hh.initCatmullRom(d.y,_.y,v.y,g.y,this.tension),Gh.initCatmullRom(d.z,_.z,v.z,g.z,this.tension));return a.set(Fh.calc(m),Hh.calc(m),Gh.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new X().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function cv(r,t,n,a,o){const c=(a-t)*.5,f=(o-n)*.5,h=r*r,m=r*h;return(2*n-2*a+c+f)*m+(-3*n+3*a-2*c-f)*h+c*r+n}function NM(r,t){const n=1-r;return n*n*t}function OM(r,t){return 2*(1-r)*r*t}function PM(r,t){return r*r*t}function Wo(r,t,n,a){return NM(r,t)+OM(r,n)+PM(r,a)}function zM(r,t){const n=1-r;return n*n*n*t}function BM(r,t){const n=1-r;return 3*n*n*r*t}function IM(r,t){return 3*(1-r)*r*r*t}function FM(r,t){return r*r*r*t}function Yo(r,t,n,a,o){return zM(r,t)+BM(r,n)+IM(r,a)+FM(r,o)}class g0 extends zi{constructor(t=new Nt,n=new Nt,a=new Nt,o=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new Nt){const a=n,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(Yo(t,o.x,c.x,f.x,h.x),Yo(t,o.y,c.y,f.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class HM extends zi{constructor(t=new X,n=new X,a=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new X){const a=n,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(Yo(t,o.x,c.x,f.x,h.x),Yo(t,o.y,c.y,f.y,h.y),Yo(t,o.z,c.z,f.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _0 extends zi{constructor(t=new Nt,n=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Nt){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Nt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class GM extends zi{constructor(t=new X,n=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new X){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new X){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class v0 extends zi{constructor(t=new Nt,n=new Nt,a=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Nt){const a=n,o=this.v0,c=this.v1,f=this.v2;return a.set(Wo(t,o.x,c.x,f.x),Wo(t,o.y,c.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class VM extends zi{constructor(t=new X,n=new X,a=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new X){const a=n,o=this.v0,c=this.v1,f=this.v2;return a.set(Wo(t,o.x,c.x,f.x),Wo(t,o.y,c.y,f.y),Wo(t,o.z,c.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class x0 extends zi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Nt){const a=n,o=this.points,c=(o.length-1)*t,f=Math.floor(c),h=c-f,m=o[f===0?f:f-1],d=o[f],g=o[f>o.length-2?o.length-1:f+1],_=o[f>o.length-3?o.length-1:f+2];return a.set(cv(h,m.x,d.x,g.x,_.x),cv(h,m.y,d.y,g.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new Nt().fromArray(o))}return this}}var Id=Object.freeze({__proto__:null,ArcCurve:UM,CatmullRomCurve3:LM,CubicBezierCurve:g0,CubicBezierCurve3:HM,EllipseCurve:ep,LineCurve:_0,LineCurve3:GM,QuadraticBezierCurve:v0,QuadraticBezierCurve3:VM,SplineCurve:x0});class kM extends zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Id[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const f=o[c]-a,h=this.curves[c],m=h.getLength(),d=m===0?0:1-f/m;return h.getPointAt(d,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const f=c[o],h=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(h);for(let d=0;d<m.length;d++){const g=m[d];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new Id[o.type]().fromJSON(o))}return this}}class Fd extends kM{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new _0(this.currentPoint.clone(),new Nt(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const c=new v0(this.currentPoint.clone(),new Nt(t,n),new Nt(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,c,f){const h=new g0(this.currentPoint.clone(),new Nt(t,n),new Nt(a,o),new Nt(c,f));return this.curves.push(h),this.currentPoint.set(c,f),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new x0(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,c,f){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+h,n+m,a,o,c,f),this}absarc(t,n,a,o,c,f){return this.absellipse(t,n,a,a,o,c,f),this}ellipse(t,n,a,o,c,f,h,m){const d=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+d,n+g,a,o,c,f,h,m),this}absellipse(t,n,a,o,c,f,h,m){const d=new ep(t,n,a,o,c,f,h,m);if(this.curves.length>0){const _=d.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(d);const g=d.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}const Uc=new X,Lc=new X,Vh=new X,Nc=new mi;class XM extends Yn{constructor(t=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:n},t!==null){const o=Math.pow(10,4),c=Math.cos(Xo*n),f=t.getIndex(),h=t.getAttribute("position"),m=f?f.count:h.count,d=[0,0,0],g=["a","b","c"],_=new Array(3),v={},y=[];for(let E=0;E<m;E+=3){f?(d[0]=f.getX(E),d[1]=f.getX(E+1),d[2]=f.getX(E+2)):(d[0]=E,d[1]=E+1,d[2]=E+2);const{a:b,b:S,c:x}=Nc;if(b.fromBufferAttribute(h,d[0]),S.fromBufferAttribute(h,d[1]),x.fromBufferAttribute(h,d[2]),Nc.getNormal(Vh),_[0]=`${Math.round(b.x*o)},${Math.round(b.y*o)},${Math.round(b.z*o)}`,_[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,_[2]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let O=0;O<3;O++){const U=(O+1)%3,D=_[O],B=_[U],I=Nc[g[O]],z=Nc[g[U]],G=`${D}_${B}`,R=`${B}_${D}`;R in v&&v[R]?(Vh.dot(v[R].normal)<=c&&(y.push(I.x,I.y,I.z),y.push(z.x,z.y,z.z)),v[R]=null):G in v||(v[G]={index0:d[O],index1:d[U],normal:Vh.clone()})}}for(const E in v)if(v[E]){const{index0:b,index1:S}=v[E];Uc.fromBufferAttribute(h,b),Lc.fromBufferAttribute(h,S),y.push(Uc.x,Uc.y,Uc.z),y.push(Lc.x,Lc.y,Lc.z)}this.setAttribute("position",new ei(y,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class qc extends Fd{constructor(t){super(t),this.uuid=Br(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new Fd().fromJSON(o))}return this}}function WM(r,t,n=2){const a=t&&t.length,o=a?t[0]*n:r.length;let c=y0(r,0,o,n,!0);const f=[];if(!c||c.next===c.prev)return f;let h,m,d;if(a&&(c=KM(r,t,c,n)),r.length>80*n){h=1/0,m=1/0;let g=-1/0,_=-1/0;for(let v=n;v<o;v+=n){const y=r[v],E=r[v+1];y<h&&(h=y),E<m&&(m=E),y>g&&(g=y),E>_&&(_=E)}d=Math.max(g-h,_-m),d=d!==0?32767/d:0}return Jo(c,f,n,h,m,d,0),f}function y0(r,t,n,a,o){let c;if(o===oE(r,t,n,a)>0)for(let f=t;f<n;f+=a)c=uv(f/a|0,r[f],r[f+1],c);else for(let f=n-a;f>=t;f-=a)c=uv(f/a|0,r[f],r[f+1],c);return c&&Pr(c,c.next)&&(tl(c),c=c.next),c}function ws(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(Pr(n,n.next)||Ye(n.prev,n,n.next)===0)){if(tl(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function Jo(r,t,n,a,o,c,f){if(!r)return;!f&&c&&eE(r,a,o,c);let h=r;for(;r.prev!==r.next;){const m=r.prev,d=r.next;if(c?qM(r,a,o,c):YM(r)){t.push(m.i,r.i,d.i),tl(r),r=d.next,h=d.next;continue}if(r=d,r===h){f?f===1?(r=jM(ws(r),t),Jo(r,t,n,a,o,c,2)):f===2&&ZM(r,t,n,a,o,c):Jo(ws(r),t,n,a,o,c,1);break}}}function YM(r){const t=r.prev,n=r,a=r.next;if(Ye(t,n,a)>=0)return!1;const o=t.x,c=n.x,f=a.x,h=t.y,m=n.y,d=a.y,g=Math.min(o,c,f),_=Math.min(h,m,d),v=Math.max(o,c,f),y=Math.max(h,m,d);let E=a.next;for(;E!==t;){if(E.x>=g&&E.x<=v&&E.y>=_&&E.y<=y&&Vo(o,h,c,m,f,d,E.x,E.y)&&Ye(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function qM(r,t,n,a){const o=r.prev,c=r,f=r.next;if(Ye(o,c,f)>=0)return!1;const h=o.x,m=c.x,d=f.x,g=o.y,_=c.y,v=f.y,y=Math.min(h,m,d),E=Math.min(g,_,v),b=Math.max(h,m,d),S=Math.max(g,_,v),x=Hd(y,E,t,n,a),O=Hd(b,S,t,n,a);let U=r.prevZ,D=r.nextZ;for(;U&&U.z>=x&&D&&D.z<=O;){if(U.x>=y&&U.x<=b&&U.y>=E&&U.y<=S&&U!==o&&U!==f&&Vo(h,g,m,_,d,v,U.x,U.y)&&Ye(U.prev,U,U.next)>=0||(U=U.prevZ,D.x>=y&&D.x<=b&&D.y>=E&&D.y<=S&&D!==o&&D!==f&&Vo(h,g,m,_,d,v,D.x,D.y)&&Ye(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;U&&U.z>=x;){if(U.x>=y&&U.x<=b&&U.y>=E&&U.y<=S&&U!==o&&U!==f&&Vo(h,g,m,_,d,v,U.x,U.y)&&Ye(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;D&&D.z<=O;){if(D.x>=y&&D.x<=b&&D.y>=E&&D.y<=S&&D!==o&&D!==f&&Vo(h,g,m,_,d,v,D.x,D.y)&&Ye(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function jM(r,t){let n=r;do{const a=n.prev,o=n.next.next;!Pr(a,o)&&M0(a,n,n.next,o)&&$o(a,o)&&$o(o,a)&&(t.push(a.i,n.i,o.i),tl(n),tl(n.next),n=r=o),n=n.next}while(n!==r);return ws(n)}function ZM(r,t,n,a,o,c){let f=r;do{let h=f.next.next;for(;h!==f.prev;){if(f.i!==h.i&&aE(f,h)){let m=E0(f,h);f=ws(f,f.next),m=ws(m,m.next),Jo(f,t,n,a,o,c,0),Jo(m,t,n,a,o,c,0);return}h=h.next}f=f.next}while(f!==r)}function KM(r,t,n,a){const o=[];for(let c=0,f=t.length;c<f;c++){const h=t[c]*a,m=c<f-1?t[c+1]*a:r.length,d=y0(r,h,m,a,!1);d===d.next&&(d.steiner=!0),o.push(iE(d))}o.sort(QM);for(let c=0;c<o.length;c++)n=JM(o[c],n);return n}function QM(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const a=(r.next.y-r.y)/(r.next.x-r.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function JM(r,t){const n=$M(r,t);if(!n)return t;const a=E0(n,r);return ws(a,a.next),ws(n,n.next)}function $M(r,t){let n=t;const a=r.x,o=r.y;let c=-1/0,f;if(Pr(r,n))return n;do{if(Pr(r,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const _=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=a&&_>c&&(c=_,f=n.x<n.next.x?n:n.next,_===a))return f}n=n.next}while(n!==t);if(!f)return null;const h=f,m=f.x,d=f.y;let g=1/0;n=f;do{if(a>=n.x&&n.x>=m&&a!==n.x&&S0(o<d?a:c,o,m,d,o<d?c:a,o,n.x,n.y)){const _=Math.abs(o-n.y)/(a-n.x);$o(n,r)&&(_<g||_===g&&(n.x>f.x||n.x===f.x&&tE(f,n)))&&(f=n,g=_)}n=n.next}while(n!==h);return f}function tE(r,t){return Ye(r.prev,r,t.prev)<0&&Ye(t.next,r,r.next)<0}function eE(r,t,n,a){let o=r;do o.z===0&&(o.z=Hd(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,nE(o)}function nE(r){let t,n=1;do{let a=r,o;r=null;let c=null;for(t=0;a;){t++;let f=a,h=0;for(let d=0;d<n&&(h++,f=f.nextZ,!!f);d++);let m=n;for(;h>0||m>0&&f;)h!==0&&(m===0||!f||a.z<=f.z)?(o=a,a=a.nextZ,h--):(o=f,f=f.nextZ,m--),c?c.nextZ=o:r=o,o.prevZ=c,c=o;a=f}c.nextZ=null,n*=2}while(t>1);return r}function Hd(r,t,n,a,o){return r=(r-n)*o|0,t=(t-a)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function iE(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function S0(r,t,n,a,o,c,f,h){return(o-f)*(t-h)>=(r-f)*(c-h)&&(r-f)*(a-h)>=(n-f)*(t-h)&&(n-f)*(c-h)>=(o-f)*(a-h)}function Vo(r,t,n,a,o,c,f,h){return!(r===f&&t===h)&&S0(r,t,n,a,o,c,f,h)}function aE(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!sE(r,t)&&($o(r,t)&&$o(t,r)&&rE(r,t)&&(Ye(r.prev,r,t.prev)||Ye(r,t.prev,t))||Pr(r,t)&&Ye(r.prev,r,r.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function Pr(r,t){return r.x===t.x&&r.y===t.y}function M0(r,t,n,a){const o=Pc(Ye(r,t,n)),c=Pc(Ye(r,t,a)),f=Pc(Ye(n,a,r)),h=Pc(Ye(n,a,t));return!!(o!==c&&f!==h||o===0&&Oc(r,n,t)||c===0&&Oc(r,a,t)||f===0&&Oc(n,r,a)||h===0&&Oc(n,t,a))}function Oc(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function Pc(r){return r>0?1:r<0?-1:0}function sE(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&M0(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function $o(r,t){return Ye(r.prev,r,r.next)<0?Ye(r,t,r.next)>=0&&Ye(r,r.prev,t)>=0:Ye(r,t,r.prev)<0||Ye(r,r.next,t)<0}function rE(r,t){let n=r,a=!1;const o=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function E0(r,t){const n=Gd(r.i,r.x,r.y),a=Gd(t.i,t.x,t.y),o=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function uv(r,t,n,a){const o=Gd(r,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function tl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Gd(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function oE(r,t,n,a){let o=0;for(let c=t,f=n-a;c<n;c+=a)o+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return o}class lE{static triangulate(t,n,a=2){return WM(t,n,a)}}class Cr{static area(t){const n=t.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return Cr.area(t)<0}static triangulateShape(t,n){const a=[],o=[],c=[];fv(t),hv(a,t);let f=t.length;n.forEach(fv);for(let m=0;m<n.length;m++)o.push(f),f+=n[m].length,hv(a,n[m]);const h=lE.triangulate(a,o);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function fv(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function hv(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class ip extends Yn{constructor(t=new qc([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const a=this,o=[],c=[];for(let h=0,m=t.length;h<m;h++){const d=t[h];f(d)}this.setAttribute("position",new ei(o,3)),this.setAttribute("uv",new ei(c,2)),this.computeVertexNormals();function f(h){const m=[],d=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,_=n.depth!==void 0?n.depth:1;let v=n.bevelEnabled!==void 0?n.bevelEnabled:!0,y=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:y-.1,b=n.bevelOffset!==void 0?n.bevelOffset:0,S=n.bevelSegments!==void 0?n.bevelSegments:3;const x=n.extrudePath,O=n.UVGenerator!==void 0?n.UVGenerator:cE;let U,D=!1,B,I,z,G;x&&(U=x.getSpacedPoints(g),D=!0,v=!1,B=x.computeFrenetFrames(g,!1),I=new X,z=new X,G=new X),v||(S=0,y=0,E=0,b=0);const R=h.extractPoints(d);let A=R.shape;const F=R.holes;if(!Cr.isClockWise(A)){A=A.reverse();for(let vt=0,Mt=F.length;vt<Mt;vt++){const dt=F[vt];Cr.isClockWise(dt)&&(F[vt]=dt.reverse())}}function st(vt){const dt=10000000000000001e-36;let Ot=vt[0];for(let mt=1;mt<=vt.length;mt++){const L=mt%vt.length,T=vt[L],K=T.x-Ot.x,rt=T.y-Ot.y,_t=K*K+rt*rt,ut=Math.max(Math.abs(T.x),Math.abs(T.y),Math.abs(Ot.x),Math.abs(Ot.y)),Yt=dt*ut*ut;if(_t<=Yt){vt.splice(L,1),mt--;continue}Ot=T}}st(A),F.forEach(st);const ft=F.length,lt=A;for(let vt=0;vt<ft;vt++){const Mt=F[vt];A=A.concat(Mt)}function V(vt,Mt,dt){return Mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),vt.clone().addScaledVector(Mt,dt)}const nt=A.length;function Z(vt,Mt,dt){let Ot,mt,L;const T=vt.x-Mt.x,K=vt.y-Mt.y,rt=dt.x-vt.x,_t=dt.y-vt.y,ut=T*T+K*K,Yt=T*_t-K*rt;if(Math.abs(Yt)>Number.EPSILON){const Dt=Math.sqrt(ut),kt=Math.sqrt(rt*rt+_t*_t),me=Mt.x-K/Dt,wt=Mt.y+T/Dt,Wt=dt.x-_t/kt,Qt=dt.y+rt/kt,jt=((Wt-me)*_t-(Qt-wt)*rt)/(T*_t-K*rt);Ot=me+T*jt-vt.x,mt=wt+K*jt-vt.y;const Xt=Ot*Ot+mt*mt;if(Xt<=2)return new Nt(Ot,mt);L=Math.sqrt(Xt/2)}else{let Dt=!1;T>Number.EPSILON?rt>Number.EPSILON&&(Dt=!0):T<-Number.EPSILON?rt<-Number.EPSILON&&(Dt=!0):Math.sign(K)===Math.sign(_t)&&(Dt=!0),Dt?(Ot=-K,mt=T,L=Math.sqrt(ut)):(Ot=T,mt=K,L=Math.sqrt(ut/2))}return new Nt(Ot/L,mt/L)}const Tt=[];for(let vt=0,Mt=lt.length,dt=Mt-1,Ot=vt+1;vt<Mt;vt++,dt++,Ot++)dt===Mt&&(dt=0),Ot===Mt&&(Ot=0),Tt[vt]=Z(lt[vt],lt[dt],lt[Ot]);const N=[];let et,Rt=Tt.concat();for(let vt=0,Mt=ft;vt<Mt;vt++){const dt=F[vt];et=[];for(let Ot=0,mt=dt.length,L=mt-1,T=Ot+1;Ot<mt;Ot++,L++,T++)L===mt&&(L=0),T===mt&&(T=0),et[Ot]=Z(dt[Ot],dt[L],dt[T]);N.push(et),Rt=Rt.concat(et)}const Ut=[],q=[];for(let vt=0;vt<S;vt++){const Mt=vt/S,dt=y*Math.cos(Mt*Math.PI/2),Ot=E*Math.sin(Mt*Math.PI/2)+b;for(let mt=0,L=lt.length;mt<L;mt++){const T=V(lt[mt],Tt[mt],Ot);ue(T.x,T.y,-dt),Mt==0&&Ut.push(T)}for(let mt=0,L=ft;mt<L;mt++){const T=F[mt];et=N[mt];const K=[];for(let rt=0,_t=T.length;rt<_t;rt++){const ut=V(T[rt],et[rt],Ot);ue(ut.x,ut.y,-dt),Mt==0&&K.push(ut)}Mt==0&&q.push(K)}}const gt=Cr.triangulateShape(Ut,q),Et=gt.length,Ct=E+b;for(let vt=0;vt<nt;vt++){const Mt=v?V(A[vt],Rt[vt],Ct):A[vt];D?(z.copy(B.normals[0]).multiplyScalar(Mt.x),I.copy(B.binormals[0]).multiplyScalar(Mt.y),G.copy(U[0]).add(z).add(I),ue(G.x,G.y,G.z)):ue(Mt.x,Mt.y,0)}for(let vt=1;vt<=g;vt++)for(let Mt=0;Mt<nt;Mt++){const dt=v?V(A[Mt],Rt[Mt],Ct):A[Mt];D?(z.copy(B.normals[vt]).multiplyScalar(dt.x),I.copy(B.binormals[vt]).multiplyScalar(dt.y),G.copy(U[vt]).add(z).add(I),ue(G.x,G.y,G.z)):ue(dt.x,dt.y,_/g*vt)}for(let vt=S-1;vt>=0;vt--){const Mt=vt/S,dt=y*Math.cos(Mt*Math.PI/2),Ot=E*Math.sin(Mt*Math.PI/2)+b;for(let mt=0,L=lt.length;mt<L;mt++){const T=V(lt[mt],Tt[mt],Ot);ue(T.x,T.y,_+dt)}for(let mt=0,L=F.length;mt<L;mt++){const T=F[mt];et=N[mt];for(let K=0,rt=T.length;K<rt;K++){const _t=V(T[K],et[K],Ot);D?ue(_t.x,_t.y+U[g-1].y,U[g-1].x+dt):ue(_t.x,_t.y,_+dt)}}}Lt(),$t();function Lt(){const vt=o.length/3;if(v){let Mt=0,dt=nt*Mt;for(let Ot=0;Ot<Et;Ot++){const mt=gt[Ot];Te(mt[2]+dt,mt[1]+dt,mt[0]+dt)}Mt=g+S*2,dt=nt*Mt;for(let Ot=0;Ot<Et;Ot++){const mt=gt[Ot];Te(mt[0]+dt,mt[1]+dt,mt[2]+dt)}}else{for(let Mt=0;Mt<Et;Mt++){const dt=gt[Mt];Te(dt[2],dt[1],dt[0])}for(let Mt=0;Mt<Et;Mt++){const dt=gt[Mt];Te(dt[0]+nt*g,dt[1]+nt*g,dt[2]+nt*g)}}a.addGroup(vt,o.length/3-vt,0)}function $t(){const vt=o.length/3;let Mt=0;Ft(lt,Mt),Mt+=lt.length;for(let dt=0,Ot=F.length;dt<Ot;dt++){const mt=F[dt];Ft(mt,Mt),Mt+=mt.length}a.addGroup(vt,o.length/3-vt,1)}function Ft(vt,Mt){let dt=vt.length;for(;--dt>=0;){const Ot=dt;let mt=dt-1;mt<0&&(mt=vt.length-1);for(let L=0,T=g+S*2;L<T;L++){const K=nt*L,rt=nt*(L+1),_t=Mt+Ot+K,ut=Mt+mt+K,Yt=Mt+mt+rt,Dt=Mt+Ot+rt;re(_t,ut,Yt,Dt)}}}function ue(vt,Mt,dt){m.push(vt),m.push(Mt),m.push(dt)}function Te(vt,Mt,dt){H(vt),H(Mt),H(dt);const Ot=o.length/3,mt=O.generateTopUV(a,o,Ot-3,Ot-2,Ot-1);Ie(mt[0]),Ie(mt[1]),Ie(mt[2])}function re(vt,Mt,dt,Ot){H(vt),H(Mt),H(Ot),H(Mt),H(dt),H(Ot);const mt=o.length/3,L=O.generateSideWallUV(a,o,mt-6,mt-3,mt-2,mt-1);Ie(L[0]),Ie(L[1]),Ie(L[3]),Ie(L[1]),Ie(L[2]),Ie(L[3])}function H(vt){o.push(m[vt*3+0]),o.push(m[vt*3+1]),o.push(m[vt*3+2])}function Ie(vt){c.push(vt.x),c.push(vt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return uE(n,a,t)}static fromJSON(t,n){const a=[];for(let c=0,f=t.shapes.length;c<f;c++){const h=n[t.shapes[c]];a.push(h)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new Id[o.type]().fromJSON(o)),new ip(a,t.options)}}const cE={generateTopUV:function(r,t,n,a,o){const c=t[n*3],f=t[n*3+1],h=t[a*3],m=t[a*3+1],d=t[o*3],g=t[o*3+1];return[new Nt(c,f),new Nt(h,m),new Nt(d,g)]},generateSideWallUV:function(r,t,n,a,o,c){const f=t[n*3],h=t[n*3+1],m=t[n*3+2],d=t[a*3],g=t[a*3+1],_=t[a*3+2],v=t[o*3],y=t[o*3+1],E=t[o*3+2],b=t[c*3],S=t[c*3+1],x=t[c*3+2];return Math.abs(h-g)<Math.abs(f-d)?[new Nt(f,1-m),new Nt(d,1-_),new Nt(v,1-E),new Nt(b,1-x)]:[new Nt(h,1-m),new Nt(g,1-_),new Nt(y,1-E),new Nt(S,1-x)]}};function uE(r,t,n){if(n.shapes=[],Array.isArray(r))for(let a=0,o=r.length;a<o;a++){const c=r[a];n.shapes.push(c.uuid)}else n.shapes.push(r.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class zr extends Yn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,f=n/2,h=Math.floor(a),m=Math.floor(o),d=h+1,g=m+1,_=t/h,v=n/m,y=[],E=[],b=[],S=[];for(let x=0;x<g;x++){const O=x*v-f;for(let U=0;U<d;U++){const D=U*_-c;E.push(D,-O,0),b.push(0,0,1),S.push(U/h),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<h;O++){const U=O+d*x,D=O+d*(x+1),B=O+1+d*(x+1),I=O+1+d*x;y.push(U,D,I),y.push(D,B,I)}this.setIndex(y),this.setAttribute("position",new ei(E,3)),this.setAttribute("normal",new ei(b,3)),this.setAttribute("uv",new ei(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.width,t.height,t.widthSegments,t.heightSegments)}}class fE extends nl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hE extends nl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $c={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class dE{constructor(t,n,a){const o=this;let c=!1,f=0,h=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,f,h),c=!0},this.itemEnd=function(g){f++,o.onProgress!==void 0&&o.onProgress(g,f,h),f===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=d.length;_<v;_+=2){const y=d[_],E=d[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null}}}const pE=new dE;class il{constructor(t){this.manager=t!==void 0?t:pE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const a=this;return new Promise(function(o,c){a.load(t,o,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}il.DEFAULT_MATERIAL_NAME="__DEFAULT";const sa={};class mE extends Error{constructor(t,n){super(t),this.response=n}}class gE extends il{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,n,a,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=$c.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{n&&n(c),this.manager.itemEnd(t)},0),c;if(sa[t]!==void 0){sa[t].push({onLoad:n,onProgress:a,onError:o});return}sa[t]=[],sa[t].push({onLoad:n,onProgress:a,onError:o});const f=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,m=this.responseType;fetch(f).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=sa[t],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=v?parseInt(v):0,E=y!==0;let b=0;const S=new ReadableStream({start(x){O();function O(){_.read().then(({done:U,value:D})=>{if(U)x.close();else{b+=D.byteLength;const B=new ProgressEvent("progress",{lengthComputable:E,loaded:b,total:y});for(let I=0,z=g.length;I<z;I++){const G=g[I];G.onProgress&&G.onProgress(B)}x.enqueue(D),O()}},U=>{x.error(U)})}}});return new Response(S)}else throw new mE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(m){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return d.json();default:if(h==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return d.arrayBuffer().then(E=>y.decode(E))}}}).then(d=>{$c.add(t,d);const g=sa[t];delete sa[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onLoad&&y.onLoad(d)}}).catch(d=>{const g=sa[t];if(g===void 0)throw this.manager.itemError(t),d;delete sa[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onError&&y.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class _E extends il{constructor(t){super(t)}load(t,n,a,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=$c.get(t);if(f!==void 0)return c.manager.itemStart(t),setTimeout(function(){n&&n(f),c.manager.itemEnd(t)},0),f;const h=Qo("img");function m(){g(),$c.add(t,this),n&&n(this),c.manager.itemEnd(t)}function d(_){g(),o&&o(_),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),c.manager.itemStart(t),h.src=t,h}}class dv extends il{constructor(t){super(t)}load(t,n,a,o){const c=new Dn,f=new _E(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class T0 extends Un{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class vE extends f0{constructor(t=-1,n=1,a=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,f=a+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class xE extends T0{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class yE extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const pv=new qe;class SE{constructor(t,n,a=0,o=1/0){this.ray=new iu(t,n),this.near=a,this.far=o,this.camera=null,this.layers=new tp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return pv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pv),this}intersectObject(t,n=!0,a=[]){return Vd(t,this,a,n),a.sort(mv),a}intersectObjects(t,n=!0,a=[]){for(let o=0,c=t.length;o<c;o++)Vd(t[o],this,a,n);return a.sort(mv),a}}function mv(r,t){return r.distance-t.distance}function Vd(r,t,n,a){let o=!0;if(r.layers.test(t.layers)&&r.raycast(t,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)Vd(c[f],t,n,!0)}}class gv{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(_e(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ME extends p0{constructor(t,n=16776960){const a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),o=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],c=new Yn;c.setIndex(new Ai(a,1)),c.setAttribute("position",new ei(o,3)),super(c,new wr({color:n,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const n=this.box;n.isEmpty()||(n.getCenter(this.position),n.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class EE{constructor(){this.type="ShapePath",this.color=new Ue,this.subPaths=[],this.currentPath=null}moveTo(t,n){return this.currentPath=new Fd,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,n),this}lineTo(t,n){return this.currentPath.lineTo(t,n),this}quadraticCurveTo(t,n,a,o){return this.currentPath.quadraticCurveTo(t,n,a,o),this}bezierCurveTo(t,n,a,o,c,f){return this.currentPath.bezierCurveTo(t,n,a,o,c,f),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function n(x){const O=[];for(let U=0,D=x.length;U<D;U++){const B=x[U],I=new qc;I.curves=B.curves,O.push(I)}return O}function a(x,O){const U=O.length;let D=!1;for(let B=U-1,I=0;I<U;B=I++){let z=O[B],G=O[I],R=G.x-z.x,A=G.y-z.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(z=O[I],R=-R,G=O[B],A=-A),x.y<z.y||x.y>G.y)continue;if(x.y===z.y){if(x.x===z.x)return!0}else{const F=A*(x.x-z.x)-R*(x.y-z.y);if(F===0)return!0;if(F<0)continue;D=!D}}else{if(x.y!==z.y)continue;if(G.x<=x.x&&x.x<=z.x||z.x<=x.x&&x.x<=G.x)return!0}}return D}const o=Cr.isClockWise,c=this.subPaths;if(c.length===0)return[];let f,h,m;const d=[];if(c.length===1)return h=c[0],m=new qc,m.curves=h.curves,d.push(m),d;let g=!o(c[0].getPoints());g=t?!g:g;const _=[],v=[];let y=[],E=0,b;v[E]=void 0,y[E]=[];for(let x=0,O=c.length;x<O;x++)h=c[x],b=h.getPoints(),f=o(b),f=t?!f:f,f?(!g&&v[E]&&E++,v[E]={s:new qc,p:b},v[E].s.curves=h.curves,g&&E++,y[E]=[]):y[E].push({h,p:b[0]});if(!v[0])return n(c);if(v.length>1){let x=!1,O=0;for(let U=0,D=v.length;U<D;U++)_[U]=[];for(let U=0,D=v.length;U<D;U++){const B=y[U];for(let I=0;I<B.length;I++){const z=B[I];let G=!0;for(let R=0;R<v.length;R++)a(z.p,v[R].p)&&(U!==R&&O++,G?(G=!1,_[R].push(z)):x=!0);G&&_[U].push(z)}}O>0&&x===!1&&(y=_)}let S;for(let x=0,O=v.length;x<O;x++){m=v[x].s,d.push(m),S=y[x];for(let U=0,D=S.length;U<D;U++)m.holes.push(S[U].h)}return d}}class TE extends Cs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function _v(r,t,n,a){const o=bE(a);switch(n){case Qv:return r*t;case $v:return r*t;case t0:return r*t*2;case e0:return r*t/o.components*o.byteLength;case Kd:return r*t/o.components*o.byteLength;case n0:return r*t*2/o.components*o.byteLength;case Qd:return r*t*2/o.components*o.byteLength;case Jv:return r*t*3/o.components*o.byteLength;case Ti:return r*t*4/o.components*o.byteLength;case Jd:return r*t*4/o.components*o.byteLength;case Hc:case Gc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Vc:case kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hd:case pd:return Math.max(r,16)*Math.max(t,8)/4;case fd:case dd:return Math.max(r,8)*Math.max(t,8)/2;case md:case gd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _d:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case yd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Md:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ed:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case bd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ad:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case wd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Cd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Dd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ud:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Xc:case Ld:case Nd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case i0:case Od:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Pd:case zd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bE(r){switch(r){case fa:case jv:return{byteLength:1,components:1};case qo:case Zv:case el:return{byteLength:2,components:1};case jd:case Zd:return{byteLength:2,components:4};case bs:case qd:case oa:return{byteLength:4,components:1};case Kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function b0(){let r=null,t=!1,n=null,a=null;function o(c,f){n(c,f),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function AE(r){const t=new WeakMap;function n(h,m){const d=h.array,g=h.usage,_=d.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,d,g),h.onUploadCallback();let y;if(d instanceof Float32Array)y=r.FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=r.SHORT;else if(d instanceof Uint32Array)y=r.UNSIGNED_INT;else if(d instanceof Int32Array)y=r.INT;else if(d instanceof Int8Array)y=r.BYTE;else if(d instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,m,d){const g=m.array,_=m.updateRanges;if(r.bindBuffer(d,h),_.length===0)r.bufferSubData(d,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],b=_[y];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,_[v]=b)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const b=_[y];r.bufferSubData(d,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,m),d.version=h.version}}return{get:o,remove:c,update:f}}var RE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$E=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iT="gl_FragColor = linearToOutputTexel( gl_FragColor );",aT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_T=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ST=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ET=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,db=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ob=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:RE,alphahash_pars_fragment:wE,alphamap_fragment:CE,alphamap_pars_fragment:DE,alphatest_fragment:UE,alphatest_pars_fragment:LE,aomap_fragment:NE,aomap_pars_fragment:OE,batching_pars_vertex:PE,batching_vertex:zE,begin_vertex:BE,beginnormal_vertex:IE,bsdfs:FE,iridescence_fragment:HE,bumpmap_pars_fragment:GE,clipping_planes_fragment:VE,clipping_planes_pars_fragment:kE,clipping_planes_pars_vertex:XE,clipping_planes_vertex:WE,color_fragment:YE,color_pars_fragment:qE,color_pars_vertex:jE,color_vertex:ZE,common:KE,cube_uv_reflection_fragment:QE,defaultnormal_vertex:JE,displacementmap_pars_vertex:$E,displacementmap_vertex:tT,emissivemap_fragment:eT,emissivemap_pars_fragment:nT,colorspace_fragment:iT,colorspace_pars_fragment:aT,envmap_fragment:sT,envmap_common_pars_fragment:rT,envmap_pars_fragment:oT,envmap_pars_vertex:lT,envmap_physical_pars_fragment:xT,envmap_vertex:cT,fog_vertex:uT,fog_pars_vertex:fT,fog_fragment:hT,fog_pars_fragment:dT,gradientmap_pars_fragment:pT,lightmap_pars_fragment:mT,lights_lambert_fragment:gT,lights_lambert_pars_fragment:_T,lights_pars_begin:vT,lights_toon_fragment:yT,lights_toon_pars_fragment:ST,lights_phong_fragment:MT,lights_phong_pars_fragment:ET,lights_physical_fragment:TT,lights_physical_pars_fragment:bT,lights_fragment_begin:AT,lights_fragment_maps:RT,lights_fragment_end:wT,logdepthbuf_fragment:CT,logdepthbuf_pars_fragment:DT,logdepthbuf_pars_vertex:UT,logdepthbuf_vertex:LT,map_fragment:NT,map_pars_fragment:OT,map_particle_fragment:PT,map_particle_pars_fragment:zT,metalnessmap_fragment:BT,metalnessmap_pars_fragment:IT,morphinstance_vertex:FT,morphcolor_vertex:HT,morphnormal_vertex:GT,morphtarget_pars_vertex:VT,morphtarget_vertex:kT,normal_fragment_begin:XT,normal_fragment_maps:WT,normal_pars_fragment:YT,normal_pars_vertex:qT,normal_vertex:jT,normalmap_pars_fragment:ZT,clearcoat_normal_fragment_begin:KT,clearcoat_normal_fragment_maps:QT,clearcoat_pars_fragment:JT,iridescence_pars_fragment:$T,opaque_fragment:tb,packing:eb,premultiplied_alpha_fragment:nb,project_vertex:ib,dithering_fragment:ab,dithering_pars_fragment:sb,roughnessmap_fragment:rb,roughnessmap_pars_fragment:ob,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:cb,shadowmap_vertex:ub,shadowmask_pars_fragment:fb,skinbase_vertex:hb,skinning_pars_vertex:db,skinning_vertex:pb,skinnormal_vertex:mb,specularmap_fragment:gb,specularmap_pars_fragment:_b,tonemapping_fragment:vb,tonemapping_pars_fragment:xb,transmission_fragment:yb,transmission_pars_fragment:Sb,uv_pars_fragment:Mb,uv_pars_vertex:Eb,uv_vertex:Tb,worldpos_vertex:bb,background_vert:Ab,background_frag:Rb,backgroundCube_vert:wb,backgroundCube_frag:Cb,cube_vert:Db,cube_frag:Ub,depth_vert:Lb,depth_frag:Nb,distanceRGBA_vert:Ob,distanceRGBA_frag:Pb,equirect_vert:zb,equirect_frag:Bb,linedashed_vert:Ib,linedashed_frag:Fb,meshbasic_vert:Hb,meshbasic_frag:Gb,meshlambert_vert:Vb,meshlambert_frag:kb,meshmatcap_vert:Xb,meshmatcap_frag:Wb,meshnormal_vert:Yb,meshnormal_frag:qb,meshphong_vert:jb,meshphong_frag:Zb,meshphysical_vert:Kb,meshphysical_frag:Qb,meshtoon_vert:Jb,meshtoon_frag:$b,points_vert:tA,points_frag:eA,shadow_vert:nA,shadow_frag:iA,sprite_vert:aA,sprite_frag:sA},It={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Ni={basic:{uniforms:In([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:In([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ue(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:In([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:In([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:In([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Ue(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:In([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:In([It.points,It.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:In([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:In([It.common,It.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:In([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:In([It.sprite,It.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:In([It.common,It.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:In([It.lights,It.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ni.physical={uniforms:In([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const zc={r:0,b:0,g:0},vs=new ha,rA=new qe;function oA(r,t,n,a,o,c,f){const h=new Ue(0);let m=c===!0?0:1,d,g,_=null,v=0,y=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?n:t).get(D)),D}function b(U){let D=!1;const B=E(U);B===null?x(h,m):B&&B.isColor&&(x(B,1),D=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?a.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(U,D){const B=E(D);B&&(B.isCubeTexture||B.mapping===eu)?(g===void 0&&(g=new Tn(new Ds(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Or(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,z,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),vs.copy(D.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(rA.makeRotationFromEuler(vs)),g.material.toneMapped=De.getTransfer(B.colorSpace)!==ze,(_!==B||v!==B.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=B,v=B.version,y=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(d===void 0&&(d=new Tn(new zr(2,2),new qa({name:"BackgroundMaterial",uniforms:Or(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=B,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.toneMapped=De.getTransfer(B.colorSpace)!==ze,B.matrixAutoUpdate===!0&&B.updateMatrix(),d.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||v!==B.version||y!==r.toneMapping)&&(d.material.needsUpdate=!0,_=B,v=B.version,y=r.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null))}function x(U,D){U.getRGB(zc,u0(r)),a.buffers.color.setClear(zc.r,zc.g,zc.b,D,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,D=1){h.set(U),m=D,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,x(h,m)},render:b,addToRenderList:S,dispose:O}}function lA(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,f=!1;function h(A,F,ct,st,ft){let lt=!1;const V=_(st,ct,F);c!==V&&(c=V,d(c.object)),lt=y(A,st,ct,ft),lt&&E(A,st,ct,ft),ft!==null&&t.update(ft,r.ELEMENT_ARRAY_BUFFER),(lt||f)&&(f=!1,D(A,F,ct,st),ft!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return r.createVertexArray()}function d(A){return r.bindVertexArray(A)}function g(A){return r.deleteVertexArray(A)}function _(A,F,ct){const st=ct.wireframe===!0;let ft=a[A.id];ft===void 0&&(ft={},a[A.id]=ft);let lt=ft[F.id];lt===void 0&&(lt={},ft[F.id]=lt);let V=lt[st];return V===void 0&&(V=v(m()),lt[st]=V),V}function v(A){const F=[],ct=[],st=[];for(let ft=0;ft<n;ft++)F[ft]=0,ct[ft]=0,st[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ct,attributeDivisors:st,object:A,attributes:{},index:null}}function y(A,F,ct,st){const ft=c.attributes,lt=F.attributes;let V=0;const nt=ct.getAttributes();for(const Z in nt)if(nt[Z].location>=0){const N=ft[Z];let et=lt[Z];if(et===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(et=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(et=A.instanceColor)),N===void 0||N.attribute!==et||et&&N.data!==et.data)return!0;V++}return c.attributesNum!==V||c.index!==st}function E(A,F,ct,st){const ft={},lt=F.attributes;let V=0;const nt=ct.getAttributes();for(const Z in nt)if(nt[Z].location>=0){let N=lt[Z];N===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(N=A.instanceColor));const et={};et.attribute=N,N&&N.data&&(et.data=N.data),ft[Z]=et,V++}c.attributes=ft,c.attributesNum=V,c.index=st}function b(){const A=c.newAttributes;for(let F=0,ct=A.length;F<ct;F++)A[F]=0}function S(A){x(A,0)}function x(A,F){const ct=c.newAttributes,st=c.enabledAttributes,ft=c.attributeDivisors;ct[A]=1,st[A]===0&&(r.enableVertexAttribArray(A),st[A]=1),ft[A]!==F&&(r.vertexAttribDivisor(A,F),ft[A]=F)}function O(){const A=c.newAttributes,F=c.enabledAttributes;for(let ct=0,st=F.length;ct<st;ct++)F[ct]!==A[ct]&&(r.disableVertexAttribArray(ct),F[ct]=0)}function U(A,F,ct,st,ft,lt,V){V===!0?r.vertexAttribIPointer(A,F,ct,ft,lt):r.vertexAttribPointer(A,F,ct,st,ft,lt)}function D(A,F,ct,st){b();const ft=st.attributes,lt=ct.getAttributes(),V=F.defaultAttributeValues;for(const nt in lt){const Z=lt[nt];if(Z.location>=0){let Tt=ft[nt];if(Tt===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(Tt=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(Tt=A.instanceColor)),Tt!==void 0){const N=Tt.normalized,et=Tt.itemSize,Rt=t.get(Tt);if(Rt===void 0)continue;const Ut=Rt.buffer,q=Rt.type,gt=Rt.bytesPerElement,Et=q===r.INT||q===r.UNSIGNED_INT||Tt.gpuType===qd;if(Tt.isInterleavedBufferAttribute){const Ct=Tt.data,Lt=Ct.stride,$t=Tt.offset;if(Ct.isInstancedInterleavedBuffer){for(let Ft=0;Ft<Z.locationSize;Ft++)x(Z.location+Ft,Ct.meshPerAttribute);A.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let Ft=0;Ft<Z.locationSize;Ft++)S(Z.location+Ft);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let Ft=0;Ft<Z.locationSize;Ft++)U(Z.location+Ft,et/Z.locationSize,q,N,Lt*gt,($t+et/Z.locationSize*Ft)*gt,Et)}else{if(Tt.isInstancedBufferAttribute){for(let Ct=0;Ct<Z.locationSize;Ct++)x(Z.location+Ct,Tt.meshPerAttribute);A.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Ct=0;Ct<Z.locationSize;Ct++)S(Z.location+Ct);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let Ct=0;Ct<Z.locationSize;Ct++)U(Z.location+Ct,et/Z.locationSize,q,N,et*gt,et/Z.locationSize*Ct*gt,Et)}}else if(V!==void 0){const N=V[nt];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(Z.location,N);break;case 3:r.vertexAttrib3fv(Z.location,N);break;case 4:r.vertexAttrib4fv(Z.location,N);break;default:r.vertexAttrib1fv(Z.location,N)}}}}O()}function B(){G();for(const A in a){const F=a[A];for(const ct in F){const st=F[ct];for(const ft in st)g(st[ft].object),delete st[ft];delete F[ct]}delete a[A]}}function I(A){if(a[A.id]===void 0)return;const F=a[A.id];for(const ct in F){const st=F[ct];for(const ft in st)g(st[ft].object),delete st[ft];delete F[ct]}delete a[A.id]}function z(A){for(const F in a){const ct=a[F];if(ct[A.id]===void 0)continue;const st=ct[A.id];for(const ft in st)g(st[ft].object),delete st[ft];delete ct[A.id]}}function G(){R(),f=!0,c!==o&&(c=o,d(c.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:G,resetDefaultState:R,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:S,disableUnusedAttributes:O}}function cA(r,t,n){let a;function o(d){a=d}function c(d,g){r.drawArrays(a,d,g),n.update(g,a,1)}function f(d,g,_){_!==0&&(r.drawArraysInstanced(a,d,g,_),n.update(g,a,_))}function h(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];n.update(y,a,1)}function m(d,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)f(d[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,g,0,v,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b]*v[b];n.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function uA(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(z){return!(z!==Ti&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const G=z===el&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==fa&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==oa&&!G)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=m(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:B,maxSamples:I}}function fA(r){const t=this;let n=null,a=0,o=!1,c=!1;const f=new Ha,h=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||a!==0||o;return o=v,a=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,x=r.get(_);if(!o||E===null||E.length===0||c&&!S)c?g(null):d();else{const O=c?0:a,U=O*4;let D=x.clippingState||null;m.value=D,D=g(E,v,U,y);for(let B=0;B!==U;++B)D[B]=n[B];x.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=O}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,y,E){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=m.value,E!==!0||S===null){const x=y+b*4,O=v.matrixWorldInverse;h.getNormalMatrix(O),(S===null||S.length<x)&&(S=new Float32Array(x));for(let U=0,D=y;U!==b;++U,D+=4)f.copy(_[U]).applyMatrix4(O,h),f.normal.toArray(S,D),S[D+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function hA(r){let t=new WeakMap;function n(f,h){return h===od?f.mapping=Ur:h===ld&&(f.mapping=Lr),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===od||h===ld)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const d=new AM(m.height);return d.fromEquirectangularTexture(r,f),t.set(f,d),f.addEventListener("dispose",o),n(d.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Tr=4,vv=[.125,.215,.35,.446,.526,.582],Ms=20,kh=new vE,xv=new Ue;let Xh=null,Wh=0,Yh=0,qh=!1;const ys=(1+Math.sqrt(5))/2,Mr=1/ys,yv=[new X(-ys,Mr,0),new X(ys,Mr,0),new X(-Mr,0,ys),new X(Mr,0,ys),new X(0,ys,-Mr),new X(0,ys,Mr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],dA=new X;class Sv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100,c={}){const{size:f=256,position:h=dA}=c;Xh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xh,Wh,Yh),this._renderer.xr.enabled=qh,t.scissorTest=!1,Bc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ur||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:el,format:Ti,colorSpace:Nr,depthBuffer:!1},o=Mv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mv(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pA(c)),this._blurMaterial=mA(c,t,n)}return o}_compileMaterial(t){const n=new Tn(this._lodPlanes[0],t);this._renderer.compile(n,kh)}_sceneToCubeUV(t,n,a,o,c){const m=new pi(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(xv),_.toneMapping=Xa,_.autoClear=!1;const E=new ua({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),b=new Tn(new Ds,E);let S=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,S=!0):(E.color.copy(xv),S=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(m.up.set(0,d[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):U===1?(m.up.set(0,0,d[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,d[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const D=this._cubeSize;Bc(o,U*D,O>2?D:0,D,D),_.setRenderTarget(o),S&&_.render(b,m),_.render(t,m)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=y,_.autoClear=v,t.background=x}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Ur||t.mapping===Lr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ev());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new Tn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Bc(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(f,kh)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=yv[(o-c-1)%yv.length];this._blur(t,c-1,c,f,h)}n.autoClear=a}_blur(t,n,a,o,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,a,o,"latitudinal",c),this._halfBlur(f,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,f,h){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Tn(this._lodPlanes[o],d),v=d.uniforms,y=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ms-1),b=c/E,S=isFinite(c)?1+Math.floor(g*b):Ms;S>Ms&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ms}`);const x=[];let O=0;for(let z=0;z<Ms;++z){const G=z/b,R=Math.exp(-G*G/2);x.push(R),z===0?O+=R:z<S&&(O+=2*R)}for(let z=0;z<x.length;z++)x[z]=x[z]/O;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-a;const D=this._sizeLods[o],B=3*D*(o>U-Tr?o-U+Tr:0),I=4*(this._cubeSize-D);Bc(n,B,I,3*D,2*D),m.setRenderTarget(n),m.render(_,kh)}}function pA(r){const t=[],n=[],a=[];let o=r;const c=r-Tr+1+vv.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);n.push(h);let m=1/h;f>r-Tr?m=vv[f-r+Tr-1]:f===0&&(m=0),a.push(m);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,b=3,S=2,x=1,O=new Float32Array(b*E*y),U=new Float32Array(S*E*y),D=new Float32Array(x*E*y);for(let I=0;I<y;I++){const z=I%3*2/3-1,G=I>2?0:-1,R=[z,G,0,z+2/3,G,0,z+2/3,G+1,0,z,G,0,z+2/3,G+1,0,z,G+1,0];O.set(R,b*E*I),U.set(v,S*E*I);const A=[I,I,I,I,I,I];D.set(A,x*E*I)}const B=new Yn;B.setAttribute("position",new Ai(O,b)),B.setAttribute("uv",new Ai(U,S)),B.setAttribute("faceIndex",new Ai(D,x)),t.push(B),o>Tr&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function Mv(r,t,n){const a=new As(r,t,n);return a.texture.mapping=eu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Bc(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function mA(r,t,n){const a=new Float32Array(Ms),o=new X(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Ev(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Tv(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function ap(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gA(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const m=h.mapping,d=m===od||m===ld,g=m===Ur||m===Lr;if(d||g){let _=t.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new Sv(r)),_=d?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return d&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new Sv(r)),_=d?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function o(h){let m=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&m++;return m===d}function c(h){const m=h.target;m.removeEventListener("dispose",c);const d=t.get(m);d!==void 0&&(t.delete(m),d.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function _A(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Wc("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function vA(r,t,n,a){const o={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete o[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",f),o[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)t.update(v[y],r.ARRAY_BUFFER)}function d(_){const v=[],y=_.index,E=_.attributes.position;let b=0;if(y!==null){const O=y.array;b=y.version;for(let U=0,D=O.length;U<D;U+=3){const B=O[U+0],I=O[U+1],z=O[U+2];v.push(B,I,I,z,z,B)}}else if(E!==void 0){const O=E.array;b=E.version;for(let U=0,D=O.length/3-1;U<D;U+=3){const B=U+0,I=U+1,z=U+2;v.push(B,I,I,z,z,B)}}else return;const S=new(s0(v)?c0:l0)(v,1);S.version=b;const x=c.get(_);x&&t.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function xA(r,t,n){let a;function o(v){a=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,y){r.drawElements(a,y,c,v*f),n.update(y,a,1)}function d(v,y,E){E!==0&&(r.drawElementsInstanced(a,y,c,v*f,E),n.update(y,a,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,a,1)}function _(v,y,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/f,y[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,b,0,E);let x=0;for(let O=0;O<E;O++)x+=y[O]*b[O];n.update(x,a,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function yA(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function SA(r,t,n){const a=new WeakMap,o=new $e;function c(f,h,m){const d=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let A=function(){G.dispose(),a.delete(h),h.removeEventListener("dispose",A)};var y=A;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),S===!0&&(D=3);let B=h.attributes.position.count*D,I=1;B>t.maxTextureSize&&(I=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const z=new Float32Array(B*I*4*_),G=new r0(z,B,I,_);G.type=oa,G.needsUpdate=!0;const R=D*4;for(let F=0;F<_;F++){const ct=x[F],st=O[F],ft=U[F],lt=B*I*4*F;for(let V=0;V<ct.count;V++){const nt=V*R;E===!0&&(o.fromBufferAttribute(ct,V),z[lt+nt+0]=o.x,z[lt+nt+1]=o.y,z[lt+nt+2]=o.z,z[lt+nt+3]=0),b===!0&&(o.fromBufferAttribute(st,V),z[lt+nt+4]=o.x,z[lt+nt+5]=o.y,z[lt+nt+6]=o.z,z[lt+nt+7]=0),S===!0&&(o.fromBufferAttribute(ft,V),z[lt+nt+8]=o.x,z[lt+nt+9]=o.y,z[lt+nt+10]=o.z,z[lt+nt+11]=ft.itemSize===4?o.w:1)}}v={count:_,texture:G,size:new Nt(B,I)},a.set(h,v),h.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const b=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function MA(r,t,n,a){let o=new WeakMap;function c(m){const d=a.render.frame,g=m.geometry,_=t.get(m,g);if(o.get(_)!==d&&(t.update(_),o.set(_,d)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==d&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,d))),m.isSkinnedMesh){const v=m.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return _}function f(){o=new WeakMap}function h(m){const d=m.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:f}}const A0=new Dn,bv=new m0(1,1),R0=new r0,w0=new cM,C0=new h0,Av=[],Rv=[],wv=new Float32Array(16),Cv=new Float32Array(9),Dv=new Float32Array(4);function Ir(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=Av[o];if(c===void 0&&(c=new Float32Array(o),Av[o]=c),t!==0){a.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,r[f].toArray(c,h)}return c}function hn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function dn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function au(r,t){let n=Rv[t];n===void 0&&(n=new Int32Array(t),Rv[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function EA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function TA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;r.uniform2fv(this.addr,t),dn(n,t)}}function bA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hn(n,t))return;r.uniform3fv(this.addr,t),dn(n,t)}}function AA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;r.uniform4fv(this.addr,t),dn(n,t)}}function RA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(hn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,a))return;Dv.set(a),r.uniformMatrix2fv(this.addr,!1,Dv),dn(n,a)}}function wA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(hn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,a))return;Cv.set(a),r.uniformMatrix3fv(this.addr,!1,Cv),dn(n,a)}}function CA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(hn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,a))return;wv.set(a),r.uniformMatrix4fv(this.addr,!1,wv),dn(n,a)}}function DA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function UA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;r.uniform2iv(this.addr,t),dn(n,t)}}function LA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;r.uniform3iv(this.addr,t),dn(n,t)}}function NA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;r.uniform4iv(this.addr,t),dn(n,t)}}function OA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function PA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;r.uniform2uiv(this.addr,t),dn(n,t)}}function zA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;r.uniform3uiv(this.addr,t),dn(n,t)}}function BA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;r.uniform4uiv(this.addr,t),dn(n,t)}}function IA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(bv.compareFunction=a0,c=bv):c=A0,n.setTexture2D(t||c,o)}function FA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||w0,o)}function HA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||C0,o)}function GA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||R0,o)}function VA(r){switch(r){case 5126:return EA;case 35664:return TA;case 35665:return bA;case 35666:return AA;case 35674:return RA;case 35675:return wA;case 35676:return CA;case 5124:case 35670:return DA;case 35667:case 35671:return UA;case 35668:case 35672:return LA;case 35669:case 35673:return NA;case 5125:return OA;case 36294:return PA;case 36295:return zA;case 36296:return BA;case 35678:case 36198:case 36298:case 36306:case 35682:return IA;case 35679:case 36299:case 36307:return FA;case 35680:case 36300:case 36308:case 36293:return HA;case 36289:case 36303:case 36311:case 36292:return GA}}function kA(r,t){r.uniform1fv(this.addr,t)}function XA(r,t){const n=Ir(t,this.size,2);r.uniform2fv(this.addr,n)}function WA(r,t){const n=Ir(t,this.size,3);r.uniform3fv(this.addr,n)}function YA(r,t){const n=Ir(t,this.size,4);r.uniform4fv(this.addr,n)}function qA(r,t){const n=Ir(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function jA(r,t){const n=Ir(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function ZA(r,t){const n=Ir(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function KA(r,t){r.uniform1iv(this.addr,t)}function QA(r,t){r.uniform2iv(this.addr,t)}function JA(r,t){r.uniform3iv(this.addr,t)}function $A(r,t){r.uniform4iv(this.addr,t)}function t1(r,t){r.uniform1uiv(this.addr,t)}function e1(r,t){r.uniform2uiv(this.addr,t)}function n1(r,t){r.uniform3uiv(this.addr,t)}function i1(r,t){r.uniform4uiv(this.addr,t)}function a1(r,t,n){const a=this.cache,o=t.length,c=au(n,o);hn(a,c)||(r.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==o;++f)n.setTexture2D(t[f]||A0,c[f])}function s1(r,t,n){const a=this.cache,o=t.length,c=au(n,o);hn(a,c)||(r.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==o;++f)n.setTexture3D(t[f]||w0,c[f])}function r1(r,t,n){const a=this.cache,o=t.length,c=au(n,o);hn(a,c)||(r.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==o;++f)n.setTextureCube(t[f]||C0,c[f])}function o1(r,t,n){const a=this.cache,o=t.length,c=au(n,o);hn(a,c)||(r.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==o;++f)n.setTexture2DArray(t[f]||R0,c[f])}function l1(r){switch(r){case 5126:return kA;case 35664:return XA;case 35665:return WA;case 35666:return YA;case 35674:return qA;case 35675:return jA;case 35676:return ZA;case 5124:case 35670:return KA;case 35667:case 35671:return QA;case 35668:case 35672:return JA;case 35669:case 35673:return $A;case 5125:return t1;case 36294:return e1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return o1}}class c1{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=VA(n.type)}}class u1{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=l1(n.type)}}class f1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function Uv(r,t){r.seq.push(t),r.map[t.id]=t}function h1(r,t,n){const a=r.name,o=a.length;for(jh.lastIndex=0;;){const c=jh.exec(a),f=jh.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&f+2===o){Uv(n,d===void 0?new c1(h,r,t):new u1(h,r,t));break}else{let _=n.map[h];_===void 0&&(_=new f1(h),Uv(n,_)),n=_}}}class jc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),f=t.getUniformLocation(n,c.name);h1(c,f,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const f=t[o];f.id in n&&a.push(f)}return a}}function Lv(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const d1=37297;let p1=0;function m1(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=o;f<c;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return a.join(`
`)}const Nv=new he;function g1(r){De._getMatrix(Nv,De.workingColorSpace,r);const t=`mat3( ${Nv.elements.map(n=>n.toFixed(4))} )`;switch(De.getTransfer(r)){case Zc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ov(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),o=r.getShaderInfoLog(t).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+m1(r.getShaderSource(t),f)}else return o}function _1(r,t){const n=g1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function v1(r,t){let n;switch(t){case NS:n="Linear";break;case OS:n="Reinhard";break;case PS:n="Cineon";break;case zS:n="ACESFilmic";break;case IS:n="AgX";break;case FS:n="Neutral";break;case BS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ic=new X;function x1(){De.getLuminanceCoefficients(Ic);const r=Ic.x.toFixed(4),t=Ic.y.toFixed(4),n=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function S1(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function M1(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return n}function ko(r){return r!==""}function Pv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const E1=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(r){return r.replace(E1,b1)}const T1=new Map;function b1(r,t){let n=de[t];if(n===void 0){const a=T1.get(t);if(a!==void 0)n=de[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return kd(n)}const A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bv(r){return r.replace(A1,R1)}function R1(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Iv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function w1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Wv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===hS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function C1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ur:case Lr:t="ENVMAP_TYPE_CUBE";break;case eu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function D1(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function U1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Yv:t="ENVMAP_BLENDING_MULTIPLY";break;case US:t="ENVMAP_BLENDING_MIX";break;case LS:t="ENVMAP_BLENDING_ADD";break}return t}function L1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function N1(r,t,n,a){const o=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=w1(n),d=C1(n),g=D1(n),_=U1(n),v=L1(n),y=y1(n),E=S1(c),b=o.createProgram();let S,x,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ko).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ko).join(`
`),x.length>0&&(x+=`
`)):(S=[Iv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),x=[Iv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xa?"#define TONE_MAPPING":"",n.toneMapping!==Xa?de.tonemapping_pars_fragment:"",n.toneMapping!==Xa?v1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,_1("linearToOutputTexel",n.outputColorSpace),x1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ko).join(`
`)),f=kd(f),f=Pv(f,n),f=zv(f,n),h=kd(h),h=Pv(h,n),h=zv(h,n),f=Bv(f),h=Bv(h),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===G_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===G_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=O+S+f,D=O+x+h,B=Lv(o,o.VERTEX_SHADER,U),I=Lv(o,o.FRAGMENT_SHADER,D);o.attachShader(b,B),o.attachShader(b,I),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function z(F){if(r.debug.checkShaderErrors){const ct=o.getProgramInfoLog(b).trim(),st=o.getShaderInfoLog(B).trim(),ft=o.getShaderInfoLog(I).trim();let lt=!0,V=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(lt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,b,B,I);else{const nt=Ov(o,B,"vertex"),Z=Ov(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ct+`
`+nt+`
`+Z)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(st===""||ft==="")&&(V=!1);V&&(F.diagnostics={runnable:lt,programLog:ct,vertexShader:{log:st,prefix:S},fragmentShader:{log:ft,prefix:x}})}o.deleteShader(B),o.deleteShader(I),G=new jc(o,b),R=M1(o,b)}let G;this.getUniforms=function(){return G===void 0&&z(this),G};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(b,d1)),A},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=p1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=B,this.fragmentShader=I,this}let O1=0;class P1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new z1(t),n.set(t,a)),a}}class z1{constructor(t){this.id=O1++,this.code=t,this.usedTimes=0}}function B1(r,t,n,a,o,c,f){const h=new tp,m=new P1,d=new Set,g=[],_=o.logarithmicDepthBuffer,v=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return d.add(R),R===0?"uv":`uv${R}`}function S(R,A,F,ct,st){const ft=ct.fog,lt=st.geometry,V=R.isMeshStandardMaterial?ct.environment:null,nt=(R.isMeshStandardMaterial?n:t).get(R.envMap||V),Z=nt&&nt.mapping===eu?nt.image.height:null,Tt=E[R.type];R.precision!==null&&(y=o.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const N=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,et=N!==void 0?N.length:0;let Rt=0;lt.morphAttributes.position!==void 0&&(Rt=1),lt.morphAttributes.normal!==void 0&&(Rt=2),lt.morphAttributes.color!==void 0&&(Rt=3);let Ut,q,gt,Et;if(Tt){const Ae=Ni[Tt];Ut=Ae.vertexShader,q=Ae.fragmentShader}else Ut=R.vertexShader,q=R.fragmentShader,m.update(R),gt=m.getVertexShaderID(R),Et=m.getFragmentShaderID(R);const Ct=r.getRenderTarget(),Lt=r.state.buffers.depth.getReversed(),$t=st.isInstancedMesh===!0,Ft=st.isBatchedMesh===!0,ue=!!R.map,Te=!!R.matcap,re=!!nt,H=!!R.aoMap,Ie=!!R.lightMap,vt=!!R.bumpMap,Mt=!!R.normalMap,dt=!!R.displacementMap,Ot=!!R.emissiveMap,mt=!!R.metalnessMap,L=!!R.roughnessMap,T=R.anisotropy>0,K=R.clearcoat>0,rt=R.dispersion>0,_t=R.iridescence>0,ut=R.sheen>0,Yt=R.transmission>0,Dt=T&&!!R.anisotropyMap,kt=K&&!!R.clearcoatMap,me=K&&!!R.clearcoatNormalMap,wt=K&&!!R.clearcoatRoughnessMap,Wt=_t&&!!R.iridescenceMap,Qt=_t&&!!R.iridescenceThicknessMap,jt=ut&&!!R.sheenColorMap,Xt=ut&&!!R.sheenRoughnessMap,ce=!!R.specularMap,te=!!R.specularColorMap,Le=!!R.specularIntensityMap,Y=Yt&&!!R.transmissionMap,Ht=Yt&&!!R.thicknessMap,ot=!!R.gradientMap,St=!!R.alphaMap,zt=R.alphaTest>0,Bt=!!R.alphaHash,ae=!!R.extensions;let ke=Xa;R.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(ke=r.toneMapping);const sn={shaderID:Tt,shaderType:R.type,shaderName:R.name,vertexShader:Ut,fragmentShader:q,defines:R.defines,customVertexShaderID:gt,customFragmentShaderID:Et,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:Ft,batchingColor:Ft&&st._colorsTexture!==null,instancing:$t,instancingColor:$t&&st.instanceColor!==null,instancingMorph:$t&&st.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Ct===null?r.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Nr,alphaToCoverage:!!R.alphaToCoverage,map:ue,matcap:Te,envMap:re,envMapMode:re&&nt.mapping,envMapCubeUVHeight:Z,aoMap:H,lightMap:Ie,bumpMap:vt,normalMap:Mt,displacementMap:v&&dt,emissiveMap:Ot,normalMapObjectSpace:Mt&&R.normalMapType===XS,normalMapTangentSpace:Mt&&R.normalMapType===kS,metalnessMap:mt,roughnessMap:L,anisotropy:T,anisotropyMap:Dt,clearcoat:K,clearcoatMap:kt,clearcoatNormalMap:me,clearcoatRoughnessMap:wt,dispersion:rt,iridescence:_t,iridescenceMap:Wt,iridescenceThicknessMap:Qt,sheen:ut,sheenColorMap:jt,sheenRoughnessMap:Xt,specularMap:ce,specularColorMap:te,specularIntensityMap:Le,transmission:Yt,transmissionMap:Y,thicknessMap:Ht,gradientMap:ot,opaque:R.transparent===!1&&R.blending===Ar&&R.alphaToCoverage===!1,alphaMap:St,alphaTest:zt,alphaHash:Bt,combine:R.combine,mapUv:ue&&b(R.map.channel),aoMapUv:H&&b(R.aoMap.channel),lightMapUv:Ie&&b(R.lightMap.channel),bumpMapUv:vt&&b(R.bumpMap.channel),normalMapUv:Mt&&b(R.normalMap.channel),displacementMapUv:dt&&b(R.displacementMap.channel),emissiveMapUv:Ot&&b(R.emissiveMap.channel),metalnessMapUv:mt&&b(R.metalnessMap.channel),roughnessMapUv:L&&b(R.roughnessMap.channel),anisotropyMapUv:Dt&&b(R.anisotropyMap.channel),clearcoatMapUv:kt&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:me&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&b(R.sheenRoughnessMap.channel),specularMapUv:ce&&b(R.specularMap.channel),specularColorMapUv:te&&b(R.specularColorMap.channel),specularIntensityMapUv:Le&&b(R.specularIntensityMap.channel),transmissionMapUv:Y&&b(R.transmissionMap.channel),thicknessMapUv:Ht&&b(R.thicknessMap.channel),alphaMapUv:St&&b(R.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Mt||T),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!lt.attributes.uv&&(ue||St),fog:!!ft,useFog:R.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Lt,skinning:st.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Rt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:ke,decodeVideoTexture:ue&&R.map.isVideoTexture===!0&&De.getTransfer(R.map.colorSpace)===ze,decodeVideoTextureEmissive:Ot&&R.emissiveMap.isVideoTexture===!0&&De.getTransfer(R.emissiveMap.colorSpace)===ze,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Oi,flipSided:R.side===Wn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:ae&&R.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&R.extensions.multiDraw===!0||Ft)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return sn.vertexUv1s=d.has(1),sn.vertexUv2s=d.has(2),sn.vertexUv3s=d.has(3),d.clear(),sn}function x(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const F in R.defines)A.push(F),A.push(R.defines[F]);return R.isRawShaderMaterial===!1&&(O(A,R),U(A,R),A.push(r.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function O(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function U(R,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),R.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reverseDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),R.push(h.mask)}function D(R){const A=E[R.type];let F;if(A){const ct=Ni[A];F=MM.clone(ct.uniforms)}else F=R.uniforms;return F}function B(R,A){let F;for(let ct=0,st=g.length;ct<st;ct++){const ft=g[ct];if(ft.cacheKey===A){F=ft,++F.usedTimes;break}}return F===void 0&&(F=new N1(r,A,R,c),g.push(F)),F}function I(R){if(--R.usedTimes===0){const A=g.indexOf(R);g[A]=g[g.length-1],g.pop(),R.destroy()}}function z(R){m.remove(R)}function G(){m.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:D,acquireProgram:B,releaseProgram:I,releaseShaderCache:z,programs:g,dispose:G}}function I1(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function o(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function F1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Fv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Hv(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function f(_,v,y,E,b,S){let x=r[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:b,group:S},r[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=b,x.group=S),t++,x}function h(_,v,y,E,b,S){const x=f(_,v,y,E,b,S);y.transmission>0?a.push(x):y.transparent===!0?o.push(x):n.push(x)}function m(_,v,y,E,b,S){const x=f(_,v,y,E,b,S);y.transmission>0?a.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function d(_,v){n.length>1&&n.sort(_||F1),a.length>1&&a.sort(v||Fv),o.length>1&&o.sort(v||Fv)}function g(){for(let _=t,v=r.length;_<v;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:m,finish:g,sort:d}}function H1(){let r=new WeakMap;function t(a,o){const c=r.get(a);let f;return c===void 0?(f=new Hv,r.set(a,[f])):o>=c.length?(f=new Hv,c.push(f)):f=c[o],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function G1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new X,color:new Ue};break;case"SpotLight":n={position:new X,direction:new X,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":n={color:new Ue,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=n,n}}}function V1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let k1=0;function X1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function W1(r){const t=new G1,n=V1(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new X);const o=new X,c=new qe,f=new qe;function h(d){let g=0,_=0,v=0;for(let R=0;R<9;R++)a.probe[R].set(0,0,0);let y=0,E=0,b=0,S=0,x=0,O=0,U=0,D=0,B=0,I=0,z=0;d.sort(X1);for(let R=0,A=d.length;R<A;R++){const F=d[R],ct=F.color,st=F.intensity,ft=F.distance,lt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=ct.r*st,_+=ct.g*st,v+=ct.b*st;else if(F.isLightProbe){for(let V=0;V<9;V++)a.probe[V].addScaledVector(F.sh.coefficients[V],st);z++}else if(F.isDirectionalLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const nt=F.shadow,Z=n.get(F);Z.shadowIntensity=nt.intensity,Z.shadowBias=nt.bias,Z.shadowNormalBias=nt.normalBias,Z.shadowRadius=nt.radius,Z.shadowMapSize=nt.mapSize,a.directionalShadow[y]=Z,a.directionalShadowMap[y]=lt,a.directionalShadowMatrix[y]=F.shadow.matrix,O++}a.directional[y]=V,y++}else if(F.isSpotLight){const V=t.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(ct).multiplyScalar(st),V.distance=ft,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,a.spot[b]=V;const nt=F.shadow;if(F.map&&(a.spotLightMap[B]=F.map,B++,nt.updateMatrices(F),F.castShadow&&I++),a.spotLightMatrix[b]=nt.matrix,F.castShadow){const Z=n.get(F);Z.shadowIntensity=nt.intensity,Z.shadowBias=nt.bias,Z.shadowNormalBias=nt.normalBias,Z.shadowRadius=nt.radius,Z.shadowMapSize=nt.mapSize,a.spotShadow[b]=Z,a.spotShadowMap[b]=lt,D++}b++}else if(F.isRectAreaLight){const V=t.get(F);V.color.copy(ct).multiplyScalar(st),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),a.rectArea[S]=V,S++}else if(F.isPointLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),V.distance=F.distance,V.decay=F.decay,F.castShadow){const nt=F.shadow,Z=n.get(F);Z.shadowIntensity=nt.intensity,Z.shadowBias=nt.bias,Z.shadowNormalBias=nt.normalBias,Z.shadowRadius=nt.radius,Z.shadowMapSize=nt.mapSize,Z.shadowCameraNear=nt.camera.near,Z.shadowCameraFar=nt.camera.far,a.pointShadow[E]=Z,a.pointShadowMap[E]=lt,a.pointShadowMatrix[E]=F.shadow.matrix,U++}a.point[E]=V,E++}else if(F.isHemisphereLight){const V=t.get(F);V.skyColor.copy(F.color).multiplyScalar(st),V.groundColor.copy(F.groundColor).multiplyScalar(st),a.hemi[x]=V,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=It.LTC_FLOAT_1,a.rectAreaLTC2=It.LTC_FLOAT_2):(a.rectAreaLTC1=It.LTC_HALF_1,a.rectAreaLTC2=It.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const G=a.hash;(G.directionalLength!==y||G.pointLength!==E||G.spotLength!==b||G.rectAreaLength!==S||G.hemiLength!==x||G.numDirectionalShadows!==O||G.numPointShadows!==U||G.numSpotShadows!==D||G.numSpotMaps!==B||G.numLightProbes!==z)&&(a.directional.length=y,a.spot.length=b,a.rectArea.length=S,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=D+B-I,a.spotLightMap.length=B,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=z,G.directionalLength=y,G.pointLength=E,G.spotLength=b,G.rectAreaLength=S,G.hemiLength=x,G.numDirectionalShadows=O,G.numPointShadows=U,G.numSpotShadows=D,G.numSpotMaps=B,G.numLightProbes=z,a.version=k1++)}function m(d,g){let _=0,v=0,y=0,E=0,b=0;const S=g.matrixWorldInverse;for(let x=0,O=d.length;x<O;x++){const U=d[x];if(U.isDirectionalLight){const D=a.directional[_];D.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),_++}else if(U.isSpotLight){const D=a.spot[y];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),y++}else if(U.isRectAreaLight){const D=a.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),f.identity(),c.copy(U.matrixWorld),c.premultiply(S),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const D=a.point[v];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const D=a.hemi[b];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(S),b++}}}return{setup:h,setupView:m,state:a}}function Gv(r){const t=new W1(r),n=[],a=[];function o(g){d.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function Y1(r){let t=new WeakMap;function n(o,c=0){const f=t.get(o);let h;return f===void 0?(h=new Gv(r),t.set(o,[h])):c>=f.length?(h=new Gv(r),f.push(h)):h=f[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Z1(r,t,n){let a=new d0;const o=new Nt,c=new Nt,f=new $e,h=new fE({depthPacking:VS}),m=new hE,d={},g=n.maxTextureSize,_={[Wa]:Wn,[Wn]:Wa,[Oi]:Oi},v=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:q1,fragmentShader:j1}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Yn;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Tn(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wv;let x=this.type;this.render=function(I,z,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const R=r.getRenderTarget(),A=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),ct=r.state;ct.setBlending(ka),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const st=x!==ra&&this.type===ra,ft=x===ra&&this.type!==ra;for(let lt=0,V=I.length;lt<V;lt++){const nt=I[lt],Z=nt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const Tt=Z.getFrameExtents();if(o.multiply(Tt),c.copy(Z.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/Tt.x),o.x=c.x*Tt.x,Z.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/Tt.y),o.y=c.y*Tt.y,Z.mapSize.y=c.y)),Z.map===null||st===!0||ft===!0){const et=this.type!==ra?{minFilter:bi,magFilter:bi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new As(o.x,o.y,et),Z.map.texture.name=nt.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const N=Z.getViewportCount();for(let et=0;et<N;et++){const Rt=Z.getViewport(et);f.set(c.x*Rt.x,c.y*Rt.y,c.x*Rt.z,c.y*Rt.w),ct.viewport(f),Z.updateMatrices(nt,et),a=Z.getFrustum(),D(z,G,Z.camera,nt,this.type)}Z.isPointLightShadow!==!0&&this.type===ra&&O(Z,G),Z.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(R,A,F)};function O(I,z){const G=t.update(b);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new As(o.x,o.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(z,null,G,v,b,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(z,null,G,y,b,null)}function U(I,z,G,R){let A=null;const F=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)A=F;else if(A=G.isPointLight===!0?m:h,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ct=A.uuid,st=z.uuid;let ft=d[ct];ft===void 0&&(ft={},d[ct]=ft);let lt=ft[st];lt===void 0&&(lt=A.clone(),ft[st]=lt,z.addEventListener("dispose",B)),A=lt}if(A.visible=z.visible,A.wireframe=z.wireframe,R===ra?A.side=z.shadowSide!==null?z.shadowSide:z.side:A.side=z.shadowSide!==null?z.shadowSide:_[z.side],A.alphaMap=z.alphaMap,A.alphaTest=z.alphaTest,A.map=z.map,A.clipShadows=z.clipShadows,A.clippingPlanes=z.clippingPlanes,A.clipIntersection=z.clipIntersection,A.displacementMap=z.displacementMap,A.displacementScale=z.displacementScale,A.displacementBias=z.displacementBias,A.wireframeLinewidth=z.wireframeLinewidth,A.linewidth=z.linewidth,G.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ct=r.properties.get(A);ct.light=G}return A}function D(I,z,G,R,A){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===ra)&&(!I.frustumCulled||a.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);const st=t.update(I),ft=I.material;if(Array.isArray(ft)){const lt=st.groups;for(let V=0,nt=lt.length;V<nt;V++){const Z=lt[V],Tt=ft[Z.materialIndex];if(Tt&&Tt.visible){const N=U(I,Tt,R,A);I.onBeforeShadow(r,I,z,G,st,N,Z),r.renderBufferDirect(G,null,st,N,I,Z),I.onAfterShadow(r,I,z,G,st,N,Z)}}}else if(ft.visible){const lt=U(I,ft,R,A);I.onBeforeShadow(r,I,z,G,st,lt,null),r.renderBufferDirect(G,null,st,lt,I,null),I.onAfterShadow(r,I,z,G,st,lt,null)}}const ct=I.children;for(let st=0,ft=ct.length;st<ft;st++)D(ct[st],z,G,R,A)}function B(I){I.target.removeEventListener("dispose",B);for(const G in d){const R=d[G],A=I.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}const K1={[td]:ed,[nd]:sd,[id]:rd,[Dr]:ad,[ed]:td,[sd]:nd,[rd]:id,[ad]:Dr};function Q1(r,t){function n(){let Y=!1;const Ht=new $e;let ot=null;const St=new $e(0,0,0,0);return{setMask:function(zt){ot!==zt&&!Y&&(r.colorMask(zt,zt,zt,zt),ot=zt)},setLocked:function(zt){Y=zt},setClear:function(zt,Bt,ae,ke,sn){sn===!0&&(zt*=ke,Bt*=ke,ae*=ke),Ht.set(zt,Bt,ae,ke),St.equals(Ht)===!1&&(r.clearColor(zt,Bt,ae,ke),St.copy(Ht))},reset:function(){Y=!1,ot=null,St.set(-1,0,0,0)}}}function a(){let Y=!1,Ht=!1,ot=null,St=null,zt=null;return{setReversed:function(Bt){if(Ht!==Bt){const ae=t.get("EXT_clip_control");Bt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Ht=Bt;const ke=zt;zt=null,this.setClear(ke)}},getReversed:function(){return Ht},setTest:function(Bt){Bt?Ct(r.DEPTH_TEST):Lt(r.DEPTH_TEST)},setMask:function(Bt){ot!==Bt&&!Y&&(r.depthMask(Bt),ot=Bt)},setFunc:function(Bt){if(Ht&&(Bt=K1[Bt]),St!==Bt){switch(Bt){case td:r.depthFunc(r.NEVER);break;case ed:r.depthFunc(r.ALWAYS);break;case nd:r.depthFunc(r.LESS);break;case Dr:r.depthFunc(r.LEQUAL);break;case id:r.depthFunc(r.EQUAL);break;case ad:r.depthFunc(r.GEQUAL);break;case sd:r.depthFunc(r.GREATER);break;case rd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}St=Bt}},setLocked:function(Bt){Y=Bt},setClear:function(Bt){zt!==Bt&&(Ht&&(Bt=1-Bt),r.clearDepth(Bt),zt=Bt)},reset:function(){Y=!1,ot=null,St=null,zt=null,Ht=!1}}}function o(){let Y=!1,Ht=null,ot=null,St=null,zt=null,Bt=null,ae=null,ke=null,sn=null;return{setTest:function(Ae){Y||(Ae?Ct(r.STENCIL_TEST):Lt(r.STENCIL_TEST))},setMask:function(Ae){Ht!==Ae&&!Y&&(r.stencilMask(Ae),Ht=Ae)},setFunc:function(Ae,Ln,Nn){(ot!==Ae||St!==Ln||zt!==Nn)&&(r.stencilFunc(Ae,Ln,Nn),ot=Ae,St=Ln,zt=Nn)},setOp:function(Ae,Ln,Nn){(Bt!==Ae||ae!==Ln||ke!==Nn)&&(r.stencilOp(Ae,Ln,Nn),Bt=Ae,ae=Ln,ke=Nn)},setLocked:function(Ae){Y=Ae},setClear:function(Ae){sn!==Ae&&(r.clearStencil(Ae),sn=Ae)},reset:function(){Y=!1,Ht=null,ot=null,St=null,zt=null,Bt=null,ae=null,ke=null,sn=null}}}const c=new n,f=new a,h=new o,m=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,b=!1,S=null,x=null,O=null,U=null,D=null,B=null,I=null,z=new Ue(0,0,0),G=0,R=!1,A=null,F=null,ct=null,st=null,ft=null;const lt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,nt=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=nt>=1):Z.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=nt>=2);let Tt=null,N={};const et=r.getParameter(r.SCISSOR_BOX),Rt=r.getParameter(r.VIEWPORT),Ut=new $e().fromArray(et),q=new $e().fromArray(Rt);function gt(Y,Ht,ot,St){const zt=new Uint8Array(4),Bt=r.createTexture();r.bindTexture(Y,Bt),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<ot;ae++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Ht,0,r.RGBA,1,1,St,0,r.RGBA,r.UNSIGNED_BYTE,zt):r.texImage2D(Ht+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,zt);return Bt}const Et={};Et[r.TEXTURE_2D]=gt(r.TEXTURE_2D,r.TEXTURE_2D,1),Et[r.TEXTURE_CUBE_MAP]=gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[r.TEXTURE_2D_ARRAY]=gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Et[r.TEXTURE_3D]=gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Ct(r.DEPTH_TEST),f.setFunc(Dr),vt(!1),Mt(P_),Ct(r.CULL_FACE),H(ka);function Ct(Y){g[Y]!==!0&&(r.enable(Y),g[Y]=!0)}function Lt(Y){g[Y]!==!1&&(r.disable(Y),g[Y]=!1)}function $t(Y,Ht){return _[Y]!==Ht?(r.bindFramebuffer(Y,Ht),_[Y]=Ht,Y===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ht),Y===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ht),!0):!1}function Ft(Y,Ht){let ot=y,St=!1;if(Y){ot=v.get(Ht),ot===void 0&&(ot=[],v.set(Ht,ot));const zt=Y.textures;if(ot.length!==zt.length||ot[0]!==r.COLOR_ATTACHMENT0){for(let Bt=0,ae=zt.length;Bt<ae;Bt++)ot[Bt]=r.COLOR_ATTACHMENT0+Bt;ot.length=zt.length,St=!0}}else ot[0]!==r.BACK&&(ot[0]=r.BACK,St=!0);St&&r.drawBuffers(ot)}function ue(Y){return E!==Y?(r.useProgram(Y),E=Y,!0):!1}const Te={[Ss]:r.FUNC_ADD,[pS]:r.FUNC_SUBTRACT,[mS]:r.FUNC_REVERSE_SUBTRACT};Te[gS]=r.MIN,Te[_S]=r.MAX;const re={[vS]:r.ZERO,[xS]:r.ONE,[yS]:r.SRC_COLOR,[Jh]:r.SRC_ALPHA,[AS]:r.SRC_ALPHA_SATURATE,[TS]:r.DST_COLOR,[MS]:r.DST_ALPHA,[SS]:r.ONE_MINUS_SRC_COLOR,[$h]:r.ONE_MINUS_SRC_ALPHA,[bS]:r.ONE_MINUS_DST_COLOR,[ES]:r.ONE_MINUS_DST_ALPHA,[RS]:r.CONSTANT_COLOR,[wS]:r.ONE_MINUS_CONSTANT_COLOR,[CS]:r.CONSTANT_ALPHA,[DS]:r.ONE_MINUS_CONSTANT_ALPHA};function H(Y,Ht,ot,St,zt,Bt,ae,ke,sn,Ae){if(Y===ka){b===!0&&(Lt(r.BLEND),b=!1);return}if(b===!1&&(Ct(r.BLEND),b=!0),Y!==dS){if(Y!==S||Ae!==R){if((x!==Ss||D!==Ss)&&(r.blendEquation(r.FUNC_ADD),x=Ss,D=Ss),Ae)switch(Y){case Ar:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case z_:r.blendFunc(r.ONE,r.ONE);break;case B_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case I_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ar:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case z_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case B_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case I_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}O=null,U=null,B=null,I=null,z.set(0,0,0),G=0,S=Y,R=Ae}return}zt=zt||Ht,Bt=Bt||ot,ae=ae||St,(Ht!==x||zt!==D)&&(r.blendEquationSeparate(Te[Ht],Te[zt]),x=Ht,D=zt),(ot!==O||St!==U||Bt!==B||ae!==I)&&(r.blendFuncSeparate(re[ot],re[St],re[Bt],re[ae]),O=ot,U=St,B=Bt,I=ae),(ke.equals(z)===!1||sn!==G)&&(r.blendColor(ke.r,ke.g,ke.b,sn),z.copy(ke),G=sn),S=Y,R=!1}function Ie(Y,Ht){Y.side===Oi?Lt(r.CULL_FACE):Ct(r.CULL_FACE);let ot=Y.side===Wn;Ht&&(ot=!ot),vt(ot),Y.blending===Ar&&Y.transparent===!1?H(ka):H(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const St=Y.stencilWrite;h.setTest(St),St&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ot(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Ct(r.SAMPLE_ALPHA_TO_COVERAGE):Lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function vt(Y){A!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),A=Y)}function Mt(Y){Y!==uS?(Ct(r.CULL_FACE),Y!==F&&(Y===P_?r.cullFace(r.BACK):Y===fS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Lt(r.CULL_FACE),F=Y}function dt(Y){Y!==ct&&(V&&r.lineWidth(Y),ct=Y)}function Ot(Y,Ht,ot){Y?(Ct(r.POLYGON_OFFSET_FILL),(st!==Ht||ft!==ot)&&(r.polygonOffset(Ht,ot),st=Ht,ft=ot)):Lt(r.POLYGON_OFFSET_FILL)}function mt(Y){Y?Ct(r.SCISSOR_TEST):Lt(r.SCISSOR_TEST)}function L(Y){Y===void 0&&(Y=r.TEXTURE0+lt-1),Tt!==Y&&(r.activeTexture(Y),Tt=Y)}function T(Y,Ht,ot){ot===void 0&&(Tt===null?ot=r.TEXTURE0+lt-1:ot=Tt);let St=N[ot];St===void 0&&(St={type:void 0,texture:void 0},N[ot]=St),(St.type!==Y||St.texture!==Ht)&&(Tt!==ot&&(r.activeTexture(ot),Tt=ot),r.bindTexture(Y,Ht||Et[Y]),St.type=Y,St.texture=Ht)}function K(){const Y=N[Tt];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function rt(){try{r.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _t(){try{r.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ut(){try{r.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Yt(){try{r.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Dt(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function kt(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function me(){try{r.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function wt(){try{r.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Wt(){try{r.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Qt(){try{r.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function jt(Y){Ut.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),Ut.copy(Y))}function Xt(Y){q.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),q.copy(Y))}function ce(Y,Ht){let ot=d.get(Ht);ot===void 0&&(ot=new WeakMap,d.set(Ht,ot));let St=ot.get(Y);St===void 0&&(St=r.getUniformBlockIndex(Ht,Y.name),ot.set(Y,St))}function te(Y,Ht){const St=d.get(Ht).get(Y);m.get(Ht)!==St&&(r.uniformBlockBinding(Ht,St,Y.__bindingPointIndex),m.set(Ht,St))}function Le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Tt=null,N={},_={},v=new WeakMap,y=[],E=null,b=!1,S=null,x=null,O=null,U=null,D=null,B=null,I=null,z=new Ue(0,0,0),G=0,R=!1,A=null,F=null,ct=null,st=null,ft=null,Ut.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Ct,disable:Lt,bindFramebuffer:$t,drawBuffers:Ft,useProgram:ue,setBlending:H,setMaterial:Ie,setFlipSided:vt,setCullFace:Mt,setLineWidth:dt,setPolygonOffset:Ot,setScissorTest:mt,activeTexture:L,bindTexture:T,unbindTexture:K,compressedTexImage2D:rt,compressedTexImage3D:_t,texImage2D:Wt,texImage3D:Qt,updateUBOMapping:ce,uniformBlockBinding:te,texStorage2D:me,texStorage3D:wt,texSubImage2D:ut,texSubImage3D:Yt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:kt,scissor:jt,viewport:Xt,reset:Le}}function J1(r,t,n,a,o,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Nt,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return y?new OffscreenCanvas(L,T):Qo("canvas")}function b(L,T,K){let rt=1;const _t=mt(L);if((_t.width>K||_t.height>K)&&(rt=K/Math.max(_t.width,_t.height)),rt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(rt*_t.width),Yt=Math.floor(rt*_t.height);_===void 0&&(_=E(ut,Yt));const Dt=T?E(ut,Yt):_;return Dt.width=ut,Dt.height=Yt,Dt.getContext("2d").drawImage(L,0,0,ut,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ut+"x"+Yt+")."),Dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),L;return L}function S(L){return L.generateMipmaps}function x(L){r.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(L,T,K,rt,_t=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=T;if(T===r.RED&&(K===r.FLOAT&&(ut=r.R32F),K===r.HALF_FLOAT&&(ut=r.R16F),K===r.UNSIGNED_BYTE&&(ut=r.R8)),T===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ut=r.R8UI),K===r.UNSIGNED_SHORT&&(ut=r.R16UI),K===r.UNSIGNED_INT&&(ut=r.R32UI),K===r.BYTE&&(ut=r.R8I),K===r.SHORT&&(ut=r.R16I),K===r.INT&&(ut=r.R32I)),T===r.RG&&(K===r.FLOAT&&(ut=r.RG32F),K===r.HALF_FLOAT&&(ut=r.RG16F),K===r.UNSIGNED_BYTE&&(ut=r.RG8)),T===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ut=r.RG8UI),K===r.UNSIGNED_SHORT&&(ut=r.RG16UI),K===r.UNSIGNED_INT&&(ut=r.RG32UI),K===r.BYTE&&(ut=r.RG8I),K===r.SHORT&&(ut=r.RG16I),K===r.INT&&(ut=r.RG32I)),T===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),K===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),K===r.UNSIGNED_INT&&(ut=r.RGB32UI),K===r.BYTE&&(ut=r.RGB8I),K===r.SHORT&&(ut=r.RGB16I),K===r.INT&&(ut=r.RGB32I)),T===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),K===r.UNSIGNED_INT&&(ut=r.RGBA32UI),K===r.BYTE&&(ut=r.RGBA8I),K===r.SHORT&&(ut=r.RGBA16I),K===r.INT&&(ut=r.RGBA32I)),T===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),T===r.RGBA){const Yt=_t?Zc:De.getTransfer(rt);K===r.FLOAT&&(ut=r.RGBA32F),K===r.HALF_FLOAT&&(ut=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ut=Yt===ze?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function D(L,T){let K;return L?T===null||T===bs||T===jo?K=r.DEPTH24_STENCIL8:T===oa?K=r.DEPTH32F_STENCIL8:T===qo&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===bs||T===jo?K=r.DEPTH_COMPONENT24:T===oa?K=r.DEPTH_COMPONENT32F:T===qo&&(K=r.DEPTH_COMPONENT16),K}function B(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==bi&&L.minFilter!==Pi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function I(L){const T=L.target;T.removeEventListener("dispose",I),G(T),T.isVideoTexture&&g.delete(T)}function z(L){const T=L.target;T.removeEventListener("dispose",z),A(T)}function G(L){const T=a.get(L);if(T.__webglInit===void 0)return;const K=L.source,rt=v.get(K);if(rt){const _t=rt[T.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&R(L),Object.keys(rt).length===0&&v.delete(K)}a.remove(L)}function R(L){const T=a.get(L);r.deleteTexture(T.__webglTexture);const K=L.source,rt=v.get(K);delete rt[T.__cacheKey],f.memory.textures--}function A(L){const T=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(T.__webglFramebuffer[rt]))for(let _t=0;_t<T.__webglFramebuffer[rt].length;_t++)r.deleteFramebuffer(T.__webglFramebuffer[rt][_t]);else r.deleteFramebuffer(T.__webglFramebuffer[rt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[rt])}else{if(Array.isArray(T.__webglFramebuffer))for(let rt=0;rt<T.__webglFramebuffer.length;rt++)r.deleteFramebuffer(T.__webglFramebuffer[rt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let rt=0;rt<T.__webglColorRenderbuffer.length;rt++)T.__webglColorRenderbuffer[rt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[rt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=L.textures;for(let rt=0,_t=K.length;rt<_t;rt++){const ut=a.get(K[rt]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),f.memory.textures--),a.remove(K[rt])}a.remove(L)}let F=0;function ct(){F=0}function st(){const L=F;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),F+=1,L}function ft(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function lt(L,T){const K=a.get(L);if(L.isVideoTexture&&dt(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const rt=L.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(K,L,T);return}}n.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+T)}function V(L,T){const K=a.get(L);if(L.version>0&&K.__version!==L.version){q(K,L,T);return}n.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+T)}function nt(L,T){const K=a.get(L);if(L.version>0&&K.__version!==L.version){q(K,L,T);return}n.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+T)}function Z(L,T){const K=a.get(L);if(L.version>0&&K.__version!==L.version){gt(K,L,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+T)}const Tt={[cd]:r.REPEAT,[Es]:r.CLAMP_TO_EDGE,[ud]:r.MIRRORED_REPEAT},N={[bi]:r.NEAREST,[HS]:r.NEAREST_MIPMAP_NEAREST,[uc]:r.NEAREST_MIPMAP_LINEAR,[Pi]:r.LINEAR,[mh]:r.LINEAR_MIPMAP_NEAREST,[Ts]:r.LINEAR_MIPMAP_LINEAR},et={[WS]:r.NEVER,[QS]:r.ALWAYS,[YS]:r.LESS,[a0]:r.LEQUAL,[qS]:r.EQUAL,[KS]:r.GEQUAL,[jS]:r.GREATER,[ZS]:r.NOTEQUAL};function Rt(L,T){if(T.type===oa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Pi||T.magFilter===mh||T.magFilter===uc||T.magFilter===Ts||T.minFilter===Pi||T.minFilter===mh||T.minFilter===uc||T.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Tt[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Tt[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Tt[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,N[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,et[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===bi||T.minFilter!==uc&&T.minFilter!==Ts||T.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function Ut(L,T){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",I));const rt=T.source;let _t=v.get(rt);_t===void 0&&(_t={},v.set(rt,_t));const ut=ft(T);if(ut!==L.__cacheKey){_t[ut]===void 0&&(_t[ut]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,K=!0),_t[ut].usedTimes++;const Yt=_t[L.__cacheKey];Yt!==void 0&&(_t[L.__cacheKey].usedTimes--,Yt.usedTimes===0&&R(T)),L.__cacheKey=ut,L.__webglTexture=_t[ut].texture}return K}function q(L,T,K){let rt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(rt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(rt=r.TEXTURE_3D);const _t=Ut(L,T),ut=T.source;n.bindTexture(rt,L.__webglTexture,r.TEXTURE0+K);const Yt=a.get(ut);if(ut.version!==Yt.__version||_t===!0){n.activeTexture(r.TEXTURE0+K);const Dt=De.getPrimaries(De.workingColorSpace),kt=T.colorSpace===Ga?null:De.getPrimaries(T.colorSpace),me=T.colorSpace===Ga||Dt===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let wt=b(T.image,!1,o.maxTextureSize);wt=Ot(T,wt);const Wt=c.convert(T.format,T.colorSpace),Qt=c.convert(T.type);let jt=U(T.internalFormat,Wt,Qt,T.colorSpace,T.isVideoTexture);Rt(rt,T);let Xt;const ce=T.mipmaps,te=T.isVideoTexture!==!0,Le=Yt.__version===void 0||_t===!0,Y=ut.dataReady,Ht=B(T,wt);if(T.isDepthTexture)jt=D(T.format===Ko,T.type),Le&&(te?n.texStorage2D(r.TEXTURE_2D,1,jt,wt.width,wt.height):n.texImage2D(r.TEXTURE_2D,0,jt,wt.width,wt.height,0,Wt,Qt,null));else if(T.isDataTexture)if(ce.length>0){te&&Le&&n.texStorage2D(r.TEXTURE_2D,Ht,jt,ce[0].width,ce[0].height);for(let ot=0,St=ce.length;ot<St;ot++)Xt=ce[ot],te?Y&&n.texSubImage2D(r.TEXTURE_2D,ot,0,0,Xt.width,Xt.height,Wt,Qt,Xt.data):n.texImage2D(r.TEXTURE_2D,ot,jt,Xt.width,Xt.height,0,Wt,Qt,Xt.data);T.generateMipmaps=!1}else te?(Le&&n.texStorage2D(r.TEXTURE_2D,Ht,jt,wt.width,wt.height),Y&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,wt.width,wt.height,Wt,Qt,wt.data)):n.texImage2D(r.TEXTURE_2D,0,jt,wt.width,wt.height,0,Wt,Qt,wt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){te&&Le&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,jt,ce[0].width,ce[0].height,wt.depth);for(let ot=0,St=ce.length;ot<St;ot++)if(Xt=ce[ot],T.format!==Ti)if(Wt!==null)if(te){if(Y)if(T.layerUpdates.size>0){const zt=_v(Xt.width,Xt.height,T.format,T.type);for(const Bt of T.layerUpdates){const ae=Xt.data.subarray(Bt*zt/Xt.data.BYTES_PER_ELEMENT,(Bt+1)*zt/Xt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,Bt,Xt.width,Xt.height,1,Wt,ae)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,Xt.width,Xt.height,wt.depth,Wt,Xt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ot,jt,Xt.width,Xt.height,wt.depth,0,Xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?Y&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,Xt.width,Xt.height,wt.depth,Wt,Qt,Xt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ot,jt,Xt.width,Xt.height,wt.depth,0,Wt,Qt,Xt.data)}else{te&&Le&&n.texStorage2D(r.TEXTURE_2D,Ht,jt,ce[0].width,ce[0].height);for(let ot=0,St=ce.length;ot<St;ot++)Xt=ce[ot],T.format!==Ti?Wt!==null?te?Y&&n.compressedTexSubImage2D(r.TEXTURE_2D,ot,0,0,Xt.width,Xt.height,Wt,Xt.data):n.compressedTexImage2D(r.TEXTURE_2D,ot,jt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?Y&&n.texSubImage2D(r.TEXTURE_2D,ot,0,0,Xt.width,Xt.height,Wt,Qt,Xt.data):n.texImage2D(r.TEXTURE_2D,ot,jt,Xt.width,Xt.height,0,Wt,Qt,Xt.data)}else if(T.isDataArrayTexture)if(te){if(Le&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,jt,wt.width,wt.height,wt.depth),Y)if(T.layerUpdates.size>0){const ot=_v(wt.width,wt.height,T.format,T.type);for(const St of T.layerUpdates){const zt=wt.data.subarray(St*ot/wt.data.BYTES_PER_ELEMENT,(St+1)*ot/wt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,St,wt.width,wt.height,1,Wt,Qt,zt)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Wt,Qt,wt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,jt,wt.width,wt.height,wt.depth,0,Wt,Qt,wt.data);else if(T.isData3DTexture)te?(Le&&n.texStorage3D(r.TEXTURE_3D,Ht,jt,wt.width,wt.height,wt.depth),Y&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Wt,Qt,wt.data)):n.texImage3D(r.TEXTURE_3D,0,jt,wt.width,wt.height,wt.depth,0,Wt,Qt,wt.data);else if(T.isFramebufferTexture){if(Le)if(te)n.texStorage2D(r.TEXTURE_2D,Ht,jt,wt.width,wt.height);else{let ot=wt.width,St=wt.height;for(let zt=0;zt<Ht;zt++)n.texImage2D(r.TEXTURE_2D,zt,jt,ot,St,0,Wt,Qt,null),ot>>=1,St>>=1}}else if(ce.length>0){if(te&&Le){const ot=mt(ce[0]);n.texStorage2D(r.TEXTURE_2D,Ht,jt,ot.width,ot.height)}for(let ot=0,St=ce.length;ot<St;ot++)Xt=ce[ot],te?Y&&n.texSubImage2D(r.TEXTURE_2D,ot,0,0,Wt,Qt,Xt):n.texImage2D(r.TEXTURE_2D,ot,jt,Wt,Qt,Xt);T.generateMipmaps=!1}else if(te){if(Le){const ot=mt(wt);n.texStorage2D(r.TEXTURE_2D,Ht,jt,ot.width,ot.height)}Y&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Wt,Qt,wt)}else n.texImage2D(r.TEXTURE_2D,0,jt,Wt,Qt,wt);S(T)&&x(rt),Yt.__version=ut.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function gt(L,T,K){if(T.image.length!==6)return;const rt=Ut(L,T),_t=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+K);const ut=a.get(_t);if(_t.version!==ut.__version||rt===!0){n.activeTexture(r.TEXTURE0+K);const Yt=De.getPrimaries(De.workingColorSpace),Dt=T.colorSpace===Ga?null:De.getPrimaries(T.colorSpace),kt=T.colorSpace===Ga||Yt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const me=T.isCompressedTexture||T.image[0].isCompressedTexture,wt=T.image[0]&&T.image[0].isDataTexture,Wt=[];for(let St=0;St<6;St++)!me&&!wt?Wt[St]=b(T.image[St],!0,o.maxCubemapSize):Wt[St]=wt?T.image[St].image:T.image[St],Wt[St]=Ot(T,Wt[St]);const Qt=Wt[0],jt=c.convert(T.format,T.colorSpace),Xt=c.convert(T.type),ce=U(T.internalFormat,jt,Xt,T.colorSpace),te=T.isVideoTexture!==!0,Le=ut.__version===void 0||rt===!0,Y=_t.dataReady;let Ht=B(T,Qt);Rt(r.TEXTURE_CUBE_MAP,T);let ot;if(me){te&&Le&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,ce,Qt.width,Qt.height);for(let St=0;St<6;St++){ot=Wt[St].mipmaps;for(let zt=0;zt<ot.length;zt++){const Bt=ot[zt];T.format!==Ti?jt!==null?te?Y&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt,0,0,Bt.width,Bt.height,jt,Bt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt,ce,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?Y&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt,0,0,Bt.width,Bt.height,jt,Xt,Bt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt,ce,Bt.width,Bt.height,0,jt,Xt,Bt.data)}}}else{if(ot=T.mipmaps,te&&Le){ot.length>0&&Ht++;const St=mt(Wt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,ce,St.width,St.height)}for(let St=0;St<6;St++)if(wt){te?Y&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Wt[St].width,Wt[St].height,jt,Xt,Wt[St].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ce,Wt[St].width,Wt[St].height,0,jt,Xt,Wt[St].data);for(let zt=0;zt<ot.length;zt++){const ae=ot[zt].image[St].image;te?Y&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt+1,0,0,ae.width,ae.height,jt,Xt,ae.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt+1,ce,ae.width,ae.height,0,jt,Xt,ae.data)}}else{te?Y&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,jt,Xt,Wt[St]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ce,jt,Xt,Wt[St]);for(let zt=0;zt<ot.length;zt++){const Bt=ot[zt];te?Y&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt+1,0,0,jt,Xt,Bt.image[St]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt+1,ce,jt,Xt,Bt.image[St])}}}S(T)&&x(r.TEXTURE_CUBE_MAP),ut.__version=_t.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Et(L,T,K,rt,_t,ut){const Yt=c.convert(K.format,K.colorSpace),Dt=c.convert(K.type),kt=U(K.internalFormat,Yt,Dt,K.colorSpace),me=a.get(T),wt=a.get(K);if(wt.__renderTarget=T,!me.__hasExternalTextures){const Wt=Math.max(1,T.width>>ut),Qt=Math.max(1,T.height>>ut);_t===r.TEXTURE_3D||_t===r.TEXTURE_2D_ARRAY?n.texImage3D(_t,ut,kt,Wt,Qt,T.depth,0,Yt,Dt,null):n.texImage2D(_t,ut,kt,Wt,Qt,0,Yt,Dt,null)}n.bindFramebuffer(r.FRAMEBUFFER,L),Mt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,_t,wt.__webglTexture,0,vt(T)):(_t===r.TEXTURE_2D||_t>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,rt,_t,wt.__webglTexture,ut),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(L,T,K){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer){const rt=T.depthTexture,_t=rt&&rt.isDepthTexture?rt.type:null,ut=D(T.stencilBuffer,_t),Yt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=vt(T);Mt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt,ut,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,ut,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ut,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Yt,r.RENDERBUFFER,L)}else{const rt=T.textures;for(let _t=0;_t<rt.length;_t++){const ut=rt[_t],Yt=c.convert(ut.format,ut.colorSpace),Dt=c.convert(ut.type),kt=U(ut.internalFormat,Yt,Dt,ut.colorSpace),me=vt(T);K&&Mt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,kt,T.width,T.height):Mt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,kt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,kt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Lt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=a.get(T.depthTexture);rt.__renderTarget=T,(!rt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt(T.depthTexture,0);const _t=rt.__webglTexture,ut=vt(T);if(T.depthTexture.format===Zo)Mt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_t,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_t,0);else if(T.depthTexture.format===Ko)Mt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_t,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function $t(L){const T=a.get(L),K=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const rt=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),rt){const _t=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,rt.removeEventListener("dispose",_t)};rt.addEventListener("dispose",_t),T.__depthDisposeCallback=_t}T.__boundDepthTexture=rt}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Lt(T.__webglFramebuffer,L)}else if(K){T.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[rt]),T.__webglDepthbuffer[rt]===void 0)T.__webglDepthbuffer[rt]=r.createRenderbuffer(),Ct(T.__webglDepthbuffer[rt],L,!1);else{const _t=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[rt];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,ut)}}else if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Ct(T.__webglDepthbuffer,L,!1);else{const rt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,_t),r.framebufferRenderbuffer(r.FRAMEBUFFER,rt,r.RENDERBUFFER,_t)}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(L,T,K){const rt=a.get(L);T!==void 0&&Et(rt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&$t(L)}function ue(L){const T=L.texture,K=a.get(L),rt=a.get(T);L.addEventListener("dispose",z);const _t=L.textures,ut=L.isWebGLCubeRenderTarget===!0,Yt=_t.length>1;if(Yt||(rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture()),rt.__version=T.version,f.memory.textures++),ut){K.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Dt]=[];for(let kt=0;kt<T.mipmaps.length;kt++)K.__webglFramebuffer[Dt][kt]=r.createFramebuffer()}else K.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)K.__webglFramebuffer[Dt]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Yt)for(let Dt=0,kt=_t.length;Dt<kt;Dt++){const me=a.get(_t[Dt]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),f.memory.textures++)}if(L.samples>0&&Mt(L)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Dt=0;Dt<_t.length;Dt++){const kt=_t[Dt];K.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Dt]);const me=c.convert(kt.format,kt.colorSpace),wt=c.convert(kt.type),Wt=U(kt.internalFormat,me,wt,kt.colorSpace,L.isXRRenderTarget===!0),Qt=vt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,Wt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,K.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Ct(K.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){n.bindTexture(r.TEXTURE_CUBE_MAP,rt.__webglTexture),Rt(r.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let kt=0;kt<T.mipmaps.length;kt++)Et(K.__webglFramebuffer[Dt][kt],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,kt);else Et(K.__webglFramebuffer[Dt],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);S(T)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Yt){for(let Dt=0,kt=_t.length;Dt<kt;Dt++){const me=_t[Dt],wt=a.get(me);n.bindTexture(r.TEXTURE_2D,wt.__webglTexture),Rt(r.TEXTURE_2D,me),Et(K.__webglFramebuffer,L,me,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,0),S(me)&&x(r.TEXTURE_2D)}n.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Dt,rt.__webglTexture),Rt(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let kt=0;kt<T.mipmaps.length;kt++)Et(K.__webglFramebuffer[kt],L,T,r.COLOR_ATTACHMENT0,Dt,kt);else Et(K.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,Dt,0);S(T)&&x(Dt),n.unbindTexture()}L.depthBuffer&&$t(L)}function Te(L){const T=L.textures;for(let K=0,rt=T.length;K<rt;K++){const _t=T[K];if(S(_t)){const ut=O(L),Yt=a.get(_t).__webglTexture;n.bindTexture(ut,Yt),x(ut),n.unbindTexture()}}}const re=[],H=[];function Ie(L){if(L.samples>0){if(Mt(L)===!1){const T=L.textures,K=L.width,rt=L.height;let _t=r.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Yt=a.get(L),Dt=T.length>1;if(Dt)for(let kt=0;kt<T.length;kt++)n.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let kt=0;kt<T.length;kt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_t|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_t|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[kt]);const me=a.get(T[kt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,me,0)}r.blitFramebuffer(0,0,K,rt,0,0,K,rt,_t,r.NEAREST),m===!0&&(re.length=0,H.length=0,re.push(r.COLOR_ATTACHMENT0+kt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(re.push(ut),H.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let kt=0;kt<T.length;kt++){n.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[kt]);const me=a.get(T[kt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.TEXTURE_2D,me,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function vt(L){return Math.min(o.maxSamples,L.samples)}function Mt(L){const T=a.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function dt(L){const T=f.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function Ot(L,T){const K=L.colorSpace,rt=L.format,_t=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==Nr&&K!==Ga&&(De.getTransfer(K)===ze?(rt!==Ti||_t!==fa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function mt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=st,this.resetTextureUnits=ct,this.setTexture2D=lt,this.setTexture2DArray=V,this.setTexture3D=nt,this.setTextureCube=Z,this.rebindTextures=Ft,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Mt}function $1(r,t){function n(a,o=Ga){let c;const f=De.getTransfer(o);if(a===fa)return r.UNSIGNED_BYTE;if(a===jd)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Zd)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Kv)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===jv)return r.BYTE;if(a===Zv)return r.SHORT;if(a===qo)return r.UNSIGNED_SHORT;if(a===qd)return r.INT;if(a===bs)return r.UNSIGNED_INT;if(a===oa)return r.FLOAT;if(a===el)return r.HALF_FLOAT;if(a===Qv)return r.ALPHA;if(a===Jv)return r.RGB;if(a===Ti)return r.RGBA;if(a===$v)return r.LUMINANCE;if(a===t0)return r.LUMINANCE_ALPHA;if(a===Zo)return r.DEPTH_COMPONENT;if(a===Ko)return r.DEPTH_STENCIL;if(a===e0)return r.RED;if(a===Kd)return r.RED_INTEGER;if(a===n0)return r.RG;if(a===Qd)return r.RG_INTEGER;if(a===Jd)return r.RGBA_INTEGER;if(a===Hc||a===Gc||a===Vc||a===kc)if(f===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===fd||a===hd||a===dd||a===pd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===fd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===hd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===md||a===gd||a===_d)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===md||a===gd)return f===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===_d)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===vd||a===xd||a===yd||a===Sd||a===Md||a===Ed||a===Td||a===bd||a===Ad||a===Rd||a===wd||a===Cd||a===Dd||a===Ud)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===vd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===xd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===yd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Sd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Md)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ed)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Td)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===bd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ad)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Rd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===wd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Cd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Dd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ud)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Xc||a===Ld||a===Nd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Xc)return f===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Ld)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Nd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===i0||a===Od||a===Pd||a===zd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Xc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Od)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Pd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===zd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===jo?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const tR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const o=new Dn,c=t.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new qa({vertexShader:tR,fragmentShader:eR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tn(new zr(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iR extends Cs{constructor(t,n){super();const a=this;let o=null,c=1,f=null,h="local-floor",m=1,d=null,g=null,_=null,v=null,y=null,E=null;const b=new nR,S=n.getContextAttributes();let x=null,O=null;const U=[],D=[],B=new Nt;let I=null;const z=new pi;z.viewport=new $e;const G=new pi;G.viewport=new $e;const R=[z,G],A=new yE;let F=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let gt=U[q];return gt===void 0&&(gt=new zh,U[q]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(q){let gt=U[q];return gt===void 0&&(gt=new zh,U[q]=gt),gt.getGripSpace()},this.getHand=function(q){let gt=U[q];return gt===void 0&&(gt=new zh,U[q]=gt),gt.getHandSpace()};function st(q){const gt=D.indexOf(q.inputSource);if(gt===-1)return;const Et=U[gt];Et!==void 0&&(Et.update(q.inputSource,q.frame,d||f),Et.dispatchEvent({type:q.type,data:q.inputSource}))}function ft(){o.removeEventListener("select",st),o.removeEventListener("selectstart",st),o.removeEventListener("selectend",st),o.removeEventListener("squeeze",st),o.removeEventListener("squeezestart",st),o.removeEventListener("squeezeend",st),o.removeEventListener("end",ft),o.removeEventListener("inputsourceschange",lt);for(let q=0;q<U.length;q++){const gt=D[q];gt!==null&&(D[q]=null,U[q].disconnect(gt))}F=null,ct=null,b.reset(),t.setRenderTarget(x),y=null,v=null,_=null,o=null,O=null,Ut.stop(),a.isPresenting=!1,t.setPixelRatio(I),t.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){h=q,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(q){d=q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",st),o.addEventListener("selectstart",st),o.addEventListener("selectend",st),o.addEventListener("squeeze",st),o.addEventListener("squeezestart",st),o.addEventListener("squeezeend",st),o.addEventListener("end",ft),o.addEventListener("inputsourceschange",lt),S.xrCompatible!==!0&&await n.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ct=null,Lt=null;S.depth&&(Lt=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Et=S.stencil?Ko:Zo,Ct=S.stencil?jo:bs);const $t={colorFormat:n.RGBA8,depthFormat:Lt,scaleFactor:c};_=new XRWebGLBinding(o,n),v=_.createProjectionLayer($t),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),O=new As(v.textureWidth,v.textureHeight,{format:Ti,type:fa,depthTexture:new m0(v.textureWidth,v.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Et={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Et),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new As(y.framebufferWidth,y.framebufferHeight,{format:Ti,type:fa,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await o.requestReferenceSpace(h),Ut.setContext(o),Ut.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function lt(q){for(let gt=0;gt<q.removed.length;gt++){const Et=q.removed[gt],Ct=D.indexOf(Et);Ct>=0&&(D[Ct]=null,U[Ct].disconnect(Et))}for(let gt=0;gt<q.added.length;gt++){const Et=q.added[gt];let Ct=D.indexOf(Et);if(Ct===-1){for(let $t=0;$t<U.length;$t++)if($t>=D.length){D.push(Et),Ct=$t;break}else if(D[$t]===null){D[$t]=Et,Ct=$t;break}if(Ct===-1)break}const Lt=U[Ct];Lt&&Lt.connect(Et)}}const V=new X,nt=new X;function Z(q,gt,Et){V.setFromMatrixPosition(gt.matrixWorld),nt.setFromMatrixPosition(Et.matrixWorld);const Ct=V.distanceTo(nt),Lt=gt.projectionMatrix.elements,$t=Et.projectionMatrix.elements,Ft=Lt[14]/(Lt[10]-1),ue=Lt[14]/(Lt[10]+1),Te=(Lt[9]+1)/Lt[5],re=(Lt[9]-1)/Lt[5],H=(Lt[8]-1)/Lt[0],Ie=($t[8]+1)/$t[0],vt=Ft*H,Mt=Ft*Ie,dt=Ct/(-H+Ie),Ot=dt*-H;if(gt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ot),q.translateZ(dt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Lt[10]===-1)q.projectionMatrix.copy(gt.projectionMatrix),q.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const mt=Ft+dt,L=ue+dt,T=vt-Ot,K=Mt+(Ct-Ot),rt=Te*ue/L*mt,_t=re*ue/L*mt;q.projectionMatrix.makePerspective(T,K,rt,_t,mt,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Tt(q,gt){gt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(gt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;let gt=q.near,Et=q.far;b.texture!==null&&(b.depthNear>0&&(gt=b.depthNear),b.depthFar>0&&(Et=b.depthFar)),A.near=G.near=z.near=gt,A.far=G.far=z.far=Et,(F!==A.near||ct!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,ct=A.far),z.layers.mask=q.layers.mask|2,G.layers.mask=q.layers.mask|4,A.layers.mask=z.layers.mask|G.layers.mask;const Ct=q.parent,Lt=A.cameras;Tt(A,Ct);for(let $t=0;$t<Lt.length;$t++)Tt(Lt[$t],Ct);Lt.length===2?Z(A,z,G):A.projectionMatrix.copy(z.projectionMatrix),N(q,A,Ct)};function N(q,gt,Et){Et===null?q.matrix.copy(gt.matrixWorld):(q.matrix.copy(Et.matrixWorld),q.matrix.invert(),q.matrix.multiply(gt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(gt.projectionMatrix),q.projectionMatrixInverse.copy(gt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Bd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(q){m=q,v!==null&&(v.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(A)};let et=null;function Rt(q,gt){if(g=gt.getViewerPose(d||f),E=gt,g!==null){const Et=g.views;y!==null&&(t.setRenderTargetFramebuffer(O,y.framebuffer),t.setRenderTarget(O));let Ct=!1;Et.length!==A.cameras.length&&(A.cameras.length=0,Ct=!0);for(let Ft=0;Ft<Et.length;Ft++){const ue=Et[Ft];let Te=null;if(y!==null)Te=y.getViewport(ue);else{const H=_.getViewSubImage(v,ue);Te=H.viewport,Ft===0&&(t.setRenderTargetTextures(O,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(O))}let re=R[Ft];re===void 0&&(re=new pi,re.layers.enable(Ft),re.viewport=new $e,R[Ft]=re),re.matrix.fromArray(ue.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ue.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Te.x,Te.y,Te.width,Te.height),Ft===0&&(A.matrix.copy(re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ct===!0&&A.cameras.push(re)}const Lt=o.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&_){const Ft=_.getDepthInformation(Et[0]);Ft&&Ft.isValid&&Ft.texture&&b.init(t,Ft,o.renderState)}}for(let Et=0;Et<U.length;Et++){const Ct=D[Et],Lt=U[Et];Ct!==null&&Lt!==void 0&&Lt.update(Ct,gt,d||f)}et&&et(q,gt),gt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:gt}),E=null}const Ut=new b0;Ut.setAnimationLoop(Rt),this.setAnimationLoop=function(q){et=q},this.dispose=function(){}}}const xs=new ha,aR=new qe;function sR(r,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,u0(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,O,U,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,D)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),b(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(f(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?m(S,x,O,U):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Wn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Wn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const O=t.get(x),U=O.envMap,D=O.envMapRotation;U&&(S.envMap.value=U,xs.copy(D),xs.x*=-1,xs.y*=-1,xs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),S.envMapRotation.value.setFromMatrix4(aR.makeRotationFromEuler(xs)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,O,U){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*O,S.scale.value=U*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,O){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const O=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function rR(r,t,n,a){let o={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const D=U.program;a.uniformBlockBinding(O,D)}function d(O,U){let D=o[O.id];D===void 0&&(E(O),D=g(O),o[O.id]=D,O.addEventListener("dispose",S));const B=U.program;a.updateUBOMapping(O,B);const I=t.render.frame;c[O.id]!==I&&(v(O),c[O.id]=I)}function g(O){const U=_();O.__bindingPointIndex=U;const D=r.createBuffer(),B=O.__size,I=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,B,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function _(){for(let O=0;O<h;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const U=o[O.id],D=O.uniforms,B=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let I=0,z=D.length;I<z;I++){const G=Array.isArray(D[I])?D[I]:[D[I]];for(let R=0,A=G.length;R<A;R++){const F=G[R];if(y(F,I,R,B)===!0){const ct=F.__offset,st=Array.isArray(F.value)?F.value:[F.value];let ft=0;for(let lt=0;lt<st.length;lt++){const V=st[lt],nt=b(V);typeof V=="number"||typeof V=="boolean"?(F.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,ct+ft,F.__data)):V.isMatrix3?(F.__data[0]=V.elements[0],F.__data[1]=V.elements[1],F.__data[2]=V.elements[2],F.__data[3]=0,F.__data[4]=V.elements[3],F.__data[5]=V.elements[4],F.__data[6]=V.elements[5],F.__data[7]=0,F.__data[8]=V.elements[6],F.__data[9]=V.elements[7],F.__data[10]=V.elements[8],F.__data[11]=0):(V.toArray(F.__data,ft),ft+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ct,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(O,U,D,B){const I=O.value,z=U+"_"+D;if(B[z]===void 0)return typeof I=="number"||typeof I=="boolean"?B[z]=I:B[z]=I.clone(),!0;{const G=B[z];if(typeof I=="number"||typeof I=="boolean"){if(G!==I)return B[z]=I,!0}else if(G.equals(I)===!1)return G.copy(I),!0}return!1}function E(O){const U=O.uniforms;let D=0;const B=16;for(let z=0,G=U.length;z<G;z++){const R=Array.isArray(U[z])?U[z]:[U[z]];for(let A=0,F=R.length;A<F;A++){const ct=R[A],st=Array.isArray(ct.value)?ct.value:[ct.value];for(let ft=0,lt=st.length;ft<lt;ft++){const V=st[ft],nt=b(V),Z=D%B,Tt=Z%nt.boundary,N=Z+Tt;D+=Tt,N!==0&&B-N<nt.storage&&(D+=B-N),ct.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=D,D+=nt.storage}}}const I=D%B;return I>0&&(D+=B-I),O.__size=D,O.__cache={},this}function b(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function S(O){const U=O.target;U.removeEventListener("dispose",S);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function x(){for(const O in o)r.deleteBuffer(o[O]);f=[],o={},c={}}return{bind:m,update:d,dispose:x}}class oR{constructor(t={}){const{canvas:n=tM(),context:a=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,x=null;const O=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let B=!1;this._outputColorSpace=di;let I=0,z=0,G=null,R=-1,A=null;const F=new $e,ct=new $e;let st=null;const ft=new Ue(0);let lt=0,V=n.width,nt=n.height,Z=1,Tt=null,N=null;const et=new $e(0,0,V,nt),Rt=new $e(0,0,V,nt);let Ut=!1;const q=new d0;let gt=!1,Et=!1;const Ct=new qe,Lt=new qe,$t=new X,Ft=new $e,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function re(){return G===null?Z:1}let H=a;function Ie(C,j){return n.getContext(C,j)}try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yd}`),n.addEventListener("webglcontextlost",St,!1),n.addEventListener("webglcontextrestored",zt,!1),n.addEventListener("webglcontextcreationerror",Bt,!1),H===null){const j="webgl2";if(H=Ie(j,C),H===null)throw Ie(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let vt,Mt,dt,Ot,mt,L,T,K,rt,_t,ut,Yt,Dt,kt,me,wt,Wt,Qt,jt,Xt,ce,te,Le,Y;function Ht(){vt=new _A(H),vt.init(),te=new $1(H,vt),Mt=new uA(H,vt,t,te),dt=new Q1(H,vt),Mt.reverseDepthBuffer&&v&&dt.buffers.depth.setReversed(!0),Ot=new yA(H),mt=new I1,L=new J1(H,vt,dt,mt,Mt,te,Ot),T=new hA(D),K=new gA(D),rt=new AE(H),Le=new lA(H,rt),_t=new vA(H,rt,Ot,Le),ut=new MA(H,_t,rt,Ot),jt=new SA(H,Mt,L),wt=new fA(mt),Yt=new B1(D,T,K,vt,Mt,Le,wt),Dt=new sR(D,mt),kt=new H1,me=new Y1(vt),Qt=new oA(D,T,K,dt,ut,y,m),Wt=new Z1(D,ut,Mt),Y=new rR(H,Ot,Mt,dt),Xt=new cA(H,vt,Ot),ce=new xA(H,vt,Ot),Ot.programs=Yt.programs,D.capabilities=Mt,D.extensions=vt,D.properties=mt,D.renderLists=kt,D.shadowMap=Wt,D.state=dt,D.info=Ot}Ht();const ot=new iR(D,H);this.xr=ot,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=vt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=vt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(V,nt,!1))},this.getSize=function(C){return C.set(V,nt)},this.setSize=function(C,j,it=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,nt=j,n.width=Math.floor(C*Z),n.height=Math.floor(j*Z),it===!0&&(n.style.width=C+"px",n.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(V*Z,nt*Z).floor()},this.setDrawingBufferSize=function(C,j,it){V=C,nt=j,Z=it,n.width=Math.floor(C*it),n.height=Math.floor(j*it),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(et)},this.setViewport=function(C,j,it,$){C.isVector4?et.set(C.x,C.y,C.z,C.w):et.set(C,j,it,$),dt.viewport(F.copy(et).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(Rt)},this.setScissor=function(C,j,it,$){C.isVector4?Rt.set(C.x,C.y,C.z,C.w):Rt.set(C,j,it,$),dt.scissor(ct.copy(Rt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(C){dt.setScissorTest(Ut=C)},this.setOpaqueSort=function(C){Tt=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,it=!0){let $=0;if(C){let Q=!1;if(G!==null){const At=G.texture.format;Q=At===Jd||At===Qd||At===Kd}if(Q){const At=G.texture.type,Pt=At===fa||At===bs||At===qo||At===jo||At===jd||At===Zd,Vt=Qt.getClearColor(),Gt=Qt.getClearAlpha(),se=Vt.r,ie=Vt.g,Jt=Vt.b;Pt?(E[0]=se,E[1]=ie,E[2]=Jt,E[3]=Gt,H.clearBufferuiv(H.COLOR,0,E)):(b[0]=se,b[1]=ie,b[2]=Jt,b[3]=Gt,H.clearBufferiv(H.COLOR,0,b))}else $|=H.COLOR_BUFFER_BIT}j&&($|=H.DEPTH_BUFFER_BIT),it&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",zt,!1),n.removeEventListener("webglcontextcreationerror",Bt,!1),Qt.dispose(),kt.dispose(),me.dispose(),mt.dispose(),T.dispose(),K.dispose(),ut.dispose(),Le.dispose(),Y.dispose(),Yt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",al),ot.removeEventListener("sessionend",Fr),Ri.stop()};function St(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const C=Ot.autoReset,j=Wt.enabled,it=Wt.autoUpdate,$=Wt.needsUpdate,Q=Wt.type;Ht(),Ot.autoReset=C,Wt.enabled=j,Wt.autoUpdate=it,Wt.needsUpdate=$,Wt.type=Q}function Bt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ae(C){const j=C.target;j.removeEventListener("dispose",ae),ke(j)}function ke(C){sn(C),mt.remove(C)}function sn(C){const j=mt.get(C).programs;j!==void 0&&(j.forEach(function(it){Yt.releaseProgram(it)}),C.isShaderMaterial&&Yt.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,it,$,Q,At){j===null&&(j=ue);const Pt=Q.isMesh&&Q.matrixWorld.determinant()<0,Vt=su(C,j,it,$,Q);dt.setMaterial($,Pt);let Gt=it.index,se=1;if($.wireframe===!0){if(Gt=_t.getWireframeAttribute(it),Gt===void 0)return;se=2}const ie=it.drawRange,Jt=it.attributes.position;let ye=ie.start*se,Se=(ie.start+ie.count)*se;At!==null&&(ye=Math.max(ye,At.start*se),Se=Math.min(Se,(At.start+At.count)*se)),Gt!==null?(ye=Math.max(ye,0),Se=Math.min(Se,Gt.count)):Jt!=null&&(ye=Math.max(ye,0),Se=Math.min(Se,Jt.count));const Ve=Se-ye;if(Ve<0||Ve===1/0)return;Le.setup(Q,$,Vt,it,Gt);let Re,oe=Xt;if(Gt!==null&&(Re=rt.get(Gt),oe=ce,oe.setIndex(Re)),Q.isMesh)$.wireframe===!0?(dt.setLineWidth($.wireframeLinewidth*re()),oe.setMode(H.LINES)):oe.setMode(H.TRIANGLES);else if(Q.isLine){let ee=$.linewidth;ee===void 0&&(ee=1),dt.setLineWidth(ee*re()),Q.isLineSegments?oe.setMode(H.LINES):Q.isLineLoop?oe.setMode(H.LINE_LOOP):oe.setMode(H.LINE_STRIP)}else Q.isPoints?oe.setMode(H.POINTS):Q.isSprite&&oe.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Wc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))oe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ee=Q._multiDrawStarts,ln=Q._multiDrawCounts,Me=Q._multiDrawCount,Fn=Gt?rt.get(Gt).bytesPerElement:1,gi=mt.get($).currentProgram.getUniforms();for(let On=0;On<Me;On++)gi.setValue(H,"_gl_DrawID",On),oe.render(ee[On]/Fn,ln[On])}else if(Q.isInstancedMesh)oe.renderInstances(ye,Ve,Q.count);else if(it.isInstancedBufferGeometry){const ee=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,ln=Math.min(it.instanceCount,ee);oe.renderInstances(ye,Ve,ln)}else oe.render(ye,Ve)};function Ae(C,j,it){C.transparent===!0&&C.side===Oi&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,on(C,j,it),C.side=Wa,C.needsUpdate=!0,on(C,j,it),C.side=Oi):on(C,j,it)}this.compile=function(C,j,it=null){it===null&&(it=C),x=me.get(it),x.init(j),U.push(x),it.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),C!==it&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const $=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const At=Q.material;if(At)if(Array.isArray(At))for(let Pt=0;Pt<At.length;Pt++){const Vt=At[Pt];Ae(Vt,it,Q),$.add(Vt)}else Ae(At,it,Q),$.add(At)}),x=U.pop(),$},this.compileAsync=function(C,j,it=null){const $=this.compile(C,j,it);return new Promise(Q=>{function At(){if($.forEach(function(Pt){mt.get(Pt).currentProgram.isReady()&&$.delete(Pt)}),$.size===0){Q(C);return}setTimeout(At,10)}vt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Ln=null;function Nn(C){Ln&&Ln(C)}function al(){Ri.stop()}function Fr(){Ri.start()}const Ri=new b0;Ri.setAnimationLoop(Nn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(C){Ln=C,ot.setAnimationLoop(C),C===null?Ri.stop():Ri.start()},ot.addEventListener("sessionstart",al),ot.addEventListener("sessionend",Fr),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(j),j=ot.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,j,G),x=me.get(C,U.length),x.init(j),U.push(x),Lt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q.setFromProjectionMatrix(Lt),Et=this.localClippingEnabled,gt=wt.init(this.clippingPlanes,Et),S=kt.get(C,O.length),S.init(),O.push(S),ot.enabled===!0&&ot.isPresenting===!0){const At=D.xr.getDepthSensingMesh();At!==null&&Us(At,j,-1/0,D.sortObjects)}Us(C,j,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Tt,N),Te=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Te&&Qt.addToRenderList(S,C),this.info.render.frame++,gt===!0&&wt.beginShadows();const it=x.state.shadowsArray;Wt.render(it,C,j),gt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=S.opaque,Q=S.transmissive;if(x.setupLights(),j.isArrayCamera){const At=j.cameras;if(Q.length>0)for(let Pt=0,Vt=At.length;Pt<Vt;Pt++){const Gt=At[Pt];sl($,Q,C,Gt)}Te&&Qt.render(C);for(let Pt=0,Vt=At.length;Pt<Vt;Pt++){const Gt=At[Pt];Hr(S,C,Gt,Gt.viewport)}}else Q.length>0&&sl($,Q,C,j),Te&&Qt.render(C),Hr(S,C,j);G!==null&&z===0&&(L.updateMultisampleRenderTarget(G),L.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(D,C,j),Le.resetDefaultState(),R=-1,A=null,U.pop(),U.length>0?(x=U[U.length-1],gt===!0&&wt.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function Us(C,j,it,$){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)it=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){$&&Ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Lt);const Pt=ut.update(C),Vt=C.material;Vt.visible&&S.push(C,Pt,Vt,it,Ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const Pt=ut.update(C),Vt=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ft.copy(C.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ft.copy(Pt.boundingSphere.center)),Ft.applyMatrix4(C.matrixWorld).applyMatrix4(Lt)),Array.isArray(Vt)){const Gt=Pt.groups;for(let se=0,ie=Gt.length;se<ie;se++){const Jt=Gt[se],ye=Vt[Jt.materialIndex];ye&&ye.visible&&S.push(C,Pt,ye,it,Ft.z,Jt)}}else Vt.visible&&S.push(C,Pt,Vt,it,Ft.z,null)}}const At=C.children;for(let Pt=0,Vt=At.length;Pt<Vt;Pt++)Us(At[Pt],j,it,$)}function Hr(C,j,it,$){const Q=C.opaque,At=C.transmissive,Pt=C.transparent;x.setupLightsView(it),gt===!0&&wt.setGlobalState(D.clippingPlanes,it),$&&dt.viewport(F.copy($)),Q.length>0&&qn(Q,j,it),At.length>0&&qn(At,j,it),Pt.length>0&&qn(Pt,j,it),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function sl(C,j,it,$){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[$.id]===void 0&&(x.state.transmissionRenderTarget[$.id]=new As(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?el:fa,minFilter:Ts,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const At=x.state.transmissionRenderTarget[$.id],Pt=$.viewport||F;At.setSize(Pt.z*D.transmissionResolutionScale,Pt.w*D.transmissionResolutionScale);const Vt=D.getRenderTarget();D.setRenderTarget(At),D.getClearColor(ft),lt=D.getClearAlpha(),lt<1&&D.setClearColor(16777215,.5),D.clear(),Te&&Qt.render(it);const Gt=D.toneMapping;D.toneMapping=Xa;const se=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),x.setupLightsView($),gt===!0&&wt.setGlobalState(D.clippingPlanes,$),qn(C,it,$),L.updateMultisampleRenderTarget(At),L.updateRenderTargetMipmap(At),vt.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Jt=0,ye=j.length;Jt<ye;Jt++){const Se=j[Jt],Ve=Se.object,Re=Se.geometry,oe=Se.material,ee=Se.group;if(oe.side===Oi&&Ve.layers.test($.layers)){const ln=oe.side;oe.side=Wn,oe.needsUpdate=!0,rn(Ve,it,$,Re,oe,ee),oe.side=ln,oe.needsUpdate=!0,ie=!0}}ie===!0&&(L.updateMultisampleRenderTarget(At),L.updateRenderTargetMipmap(At))}D.setRenderTarget(Vt),D.setClearColor(ft,lt),se!==void 0&&($.viewport=se),D.toneMapping=Gt}function qn(C,j,it){const $=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,At=C.length;Q<At;Q++){const Pt=C[Q],Vt=Pt.object,Gt=Pt.geometry,se=Pt.group;let ie=Pt.material;ie.allowOverride===!0&&$!==null&&(ie=$),Vt.layers.test(it.layers)&&rn(Vt,j,it,Gt,ie,se)}}function rn(C,j,it,$,Q,At){C.onBeforeRender(D,j,it,$,Q,At),C.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(D,j,it,$,C,At),Q.transparent===!0&&Q.side===Oi&&Q.forceSinglePass===!1?(Q.side=Wn,Q.needsUpdate=!0,D.renderBufferDirect(it,j,$,Q,C,At),Q.side=Wa,Q.needsUpdate=!0,D.renderBufferDirect(it,j,$,Q,C,At),Q.side=Oi):D.renderBufferDirect(it,j,$,Q,C,At),C.onAfterRender(D,j,it,$,Q,At)}function on(C,j,it){j.isScene!==!0&&(j=ue);const $=mt.get(C),Q=x.state.lights,At=x.state.shadowsArray,Pt=Q.state.version,Vt=Yt.getParameters(C,Q.state,At,j,it),Gt=Yt.getProgramCacheKey(Vt);let se=$.programs;$.environment=C.isMeshStandardMaterial?j.environment:null,$.fog=j.fog,$.envMap=(C.isMeshStandardMaterial?K:T).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,se===void 0&&(C.addEventListener("dispose",ae),se=new Map,$.programs=se);let ie=se.get(Gt);if(ie!==void 0){if($.currentProgram===ie&&$.lightsStateVersion===Pt)return Ls(C,Vt),ie}else Vt.uniforms=Yt.getUniforms(C),C.onBeforeCompile(Vt,D),ie=Yt.acquireProgram(Vt,Gt),se.set(Gt,ie),$.uniforms=Vt.uniforms;const Jt=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Jt.clippingPlanes=wt.uniform),Ls(C,Vt),$.needsLights=rl(C),$.lightsStateVersion=Pt,$.needsLights&&(Jt.ambientLightColor.value=Q.state.ambient,Jt.lightProbe.value=Q.state.probe,Jt.directionalLights.value=Q.state.directional,Jt.directionalLightShadows.value=Q.state.directionalShadow,Jt.spotLights.value=Q.state.spot,Jt.spotLightShadows.value=Q.state.spotShadow,Jt.rectAreaLights.value=Q.state.rectArea,Jt.ltc_1.value=Q.state.rectAreaLTC1,Jt.ltc_2.value=Q.state.rectAreaLTC2,Jt.pointLights.value=Q.state.point,Jt.pointLightShadows.value=Q.state.pointShadow,Jt.hemisphereLights.value=Q.state.hemi,Jt.directionalShadowMap.value=Q.state.directionalShadowMap,Jt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Jt.spotShadowMap.value=Q.state.spotShadowMap,Jt.spotLightMatrix.value=Q.state.spotLightMatrix,Jt.spotLightMap.value=Q.state.spotLightMap,Jt.pointShadowMap.value=Q.state.pointShadowMap,Jt.pointShadowMatrix.value=Q.state.pointShadowMatrix),$.currentProgram=ie,$.uniformsList=null,ie}function Bi(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=jc.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Ls(C,j){const it=mt.get(C);it.outputColorSpace=j.outputColorSpace,it.batching=j.batching,it.batchingColor=j.batchingColor,it.instancing=j.instancing,it.instancingColor=j.instancingColor,it.instancingMorph=j.instancingMorph,it.skinning=j.skinning,it.morphTargets=j.morphTargets,it.morphNormals=j.morphNormals,it.morphColors=j.morphColors,it.morphTargetsCount=j.morphTargetsCount,it.numClippingPlanes=j.numClippingPlanes,it.numIntersection=j.numClipIntersection,it.vertexAlphas=j.vertexAlphas,it.vertexTangents=j.vertexTangents,it.toneMapping=j.toneMapping}function su(C,j,it,$,Q){j.isScene!==!0&&(j=ue),L.resetTextureUnits();const At=j.fog,Pt=$.isMeshStandardMaterial?j.environment:null,Vt=G===null?D.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Nr,Gt=($.isMeshStandardMaterial?K:T).get($.envMap||Pt),se=$.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ie=!!it.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Jt=!!it.morphAttributes.position,ye=!!it.morphAttributes.normal,Se=!!it.morphAttributes.color;let Ve=Xa;$.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Re=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,oe=Re!==void 0?Re.length:0,ee=mt.get($),ln=x.state.lights;if(gt===!0&&(Et===!0||C!==A)){const je=C===A&&$.id===R;wt.setState($,C,je)}let Me=!1;$.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==ln.state.version||ee.outputColorSpace!==Vt||Q.isBatchedMesh&&ee.batching===!1||!Q.isBatchedMesh&&ee.batching===!0||Q.isBatchedMesh&&ee.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ee.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ee.instancing===!1||!Q.isInstancedMesh&&ee.instancing===!0||Q.isSkinnedMesh&&ee.skinning===!1||!Q.isSkinnedMesh&&ee.skinning===!0||Q.isInstancedMesh&&ee.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ee.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ee.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ee.instancingMorph===!1&&Q.morphTexture!==null||ee.envMap!==Gt||$.fog===!0&&ee.fog!==At||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==wt.numPlanes||ee.numIntersection!==wt.numIntersection)||ee.vertexAlphas!==se||ee.vertexTangents!==ie||ee.morphTargets!==Jt||ee.morphNormals!==ye||ee.morphColors!==Se||ee.toneMapping!==Ve||ee.morphTargetsCount!==oe)&&(Me=!0):(Me=!0,ee.__version=$.version);let Fn=ee.currentProgram;Me===!0&&(Fn=on($,j,Q));let gi=!1,On=!1,pn=!1;const Ne=Fn.getUniforms(),Pn=ee.uniforms;if(dt.useProgram(Fn.program)&&(gi=!0,On=!0,pn=!0),$.id!==R&&(R=$.id,On=!0),gi||A!==C){dt.buffers.depth.getReversed()?(Ct.copy(C.projectionMatrix),nM(Ct),iM(Ct),Ne.setValue(H,"projectionMatrix",Ct)):Ne.setValue(H,"projectionMatrix",C.projectionMatrix),Ne.setValue(H,"viewMatrix",C.matrixWorldInverse);const xn=Ne.map.cameraPosition;xn!==void 0&&xn.setValue(H,$t.setFromMatrixPosition(C.matrixWorld)),Mt.logarithmicDepthBuffer&&Ne.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ne.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,On=!0,pn=!0)}if(Q.isSkinnedMesh){Ne.setOptional(H,Q,"bindMatrix"),Ne.setOptional(H,Q,"bindMatrixInverse");const je=Q.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Ne.setValue(H,"boneTexture",je.boneTexture,L))}Q.isBatchedMesh&&(Ne.setOptional(H,Q,"batchingTexture"),Ne.setValue(H,"batchingTexture",Q._matricesTexture,L),Ne.setOptional(H,Q,"batchingIdTexture"),Ne.setValue(H,"batchingIdTexture",Q._indirectTexture,L),Ne.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ne.setValue(H,"batchingColorTexture",Q._colorsTexture,L));const bn=it.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&jt.update(Q,it,Fn),(On||ee.receiveShadow!==Q.receiveShadow)&&(ee.receiveShadow=Q.receiveShadow,Ne.setValue(H,"receiveShadow",Q.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Pn.envMap.value=Gt,Pn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&j.environment!==null&&(Pn.envMapIntensity.value=j.environmentIntensity),On&&(Ne.setValue(H,"toneMappingExposure",D.toneMappingExposure),ee.needsLights&&ru(Pn,pn),At&&$.fog===!0&&Dt.refreshFogUniforms(Pn,At),Dt.refreshMaterialUniforms(Pn,$,Z,nt,x.state.transmissionRenderTarget[C.id]),jc.upload(H,Bi(ee),Pn,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(jc.upload(H,Bi(ee),Pn,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ne.setValue(H,"center",Q.center),Ne.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Ne.setValue(H,"normalMatrix",Q.normalMatrix),Ne.setValue(H,"modelMatrix",Q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const je=$.uniformsGroups;for(let xn=0,Ns=je.length;xn<Ns;xn++){const Hn=je[xn];Y.update(Hn,Fn),Y.bind(Hn,Fn)}}return Fn}function ru(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function rl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,j,it){const $=mt.get(C);$.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),mt.get(C.texture).__webglTexture=j,mt.get(C.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:it,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const it=mt.get(C);it.__webglFramebuffer=j,it.__useDefaultFramebuffer=j===void 0};const ja=H.createFramebuffer();this.setRenderTarget=function(C,j=0,it=0){G=C,I=j,z=it;let $=!0,Q=null,At=!1,Pt=!1;if(C){const Gt=mt.get(C);if(Gt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(H.FRAMEBUFFER,null),$=!1;else if(Gt.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Gt.__hasExternalTextures)L.rebindTextures(C,mt.get(C.texture).__webglTexture,mt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Jt=C.depthTexture;if(Gt.__boundDepthTexture!==Jt){if(Jt!==null&&mt.has(Jt)&&(C.width!==Jt.image.width||C.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const se=C.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Pt=!0);const ie=mt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ie[j])?Q=ie[j][it]:Q=ie[j],At=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?Q=mt.get(C).__webglMultisampledFramebuffer:Array.isArray(ie)?Q=ie[it]:Q=ie,F.copy(C.viewport),ct.copy(C.scissor),st=C.scissorTest}else F.copy(et).multiplyScalar(Z).floor(),ct.copy(Rt).multiplyScalar(Z).floor(),st=Ut;if(it!==0&&(Q=ja),dt.bindFramebuffer(H.FRAMEBUFFER,Q)&&$&&dt.drawBuffers(C,Q),dt.viewport(F),dt.scissor(ct),dt.setScissorTest(st),At){const Gt=mt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Gt.__webglTexture,it)}else if(Pt){const Gt=mt.get(C.texture),se=j;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.__webglTexture,it,se)}else if(C!==null&&it!==0){const Gt=mt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Gt.__webglTexture,it)}R=-1},this.readRenderTargetPixels=function(C,j,it,$,Q,At,Pt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(Vt=Vt[Pt]),Vt){dt.bindFramebuffer(H.FRAMEBUFFER,Vt);try{const Gt=C.texture,se=Gt.format,ie=Gt.type;if(!Mt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-$&&it>=0&&it<=C.height-Q&&H.readPixels(j,it,$,Q,te.convert(se),te.convert(ie),At)}finally{const Gt=G!==null?mt.get(G).__webglFramebuffer:null;dt.bindFramebuffer(H.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(C,j,it,$,Q,At,Pt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(Vt=Vt[Pt]),Vt)if(j>=0&&j<=C.width-$&&it>=0&&it<=C.height-Q){dt.bindFramebuffer(H.FRAMEBUFFER,Vt);const Gt=C.texture,se=Gt.format,ie=Gt.type;if(!Mt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Jt),H.bufferData(H.PIXEL_PACK_BUFFER,At.byteLength,H.STREAM_READ),H.readPixels(j,it,$,Q,te.convert(se),te.convert(ie),0);const ye=G!==null?mt.get(G).__webglFramebuffer:null;dt.bindFramebuffer(H.FRAMEBUFFER,ye);const Se=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await eM(H,Se,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Jt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,At),H.deleteBuffer(Jt),H.deleteSync(Se),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,it=0){const $=Math.pow(2,-it),Q=Math.floor(C.image.width*$),At=Math.floor(C.image.height*$),Pt=j!==null?j.x:0,Vt=j!==null?j.y:0;L.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,it,0,0,Pt,Vt,Q,At),dt.unbindTexture()};const Gr=H.createFramebuffer(),Ii=H.createFramebuffer();this.copyTextureToTexture=function(C,j,it=null,$=null,Q=0,At=null){At===null&&(Q!==0?(Wc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=Q,Q=0):At=0);let Pt,Vt,Gt,se,ie,Jt,ye,Se,Ve;const Re=C.isCompressedTexture?C.mipmaps[At]:C.image;if(it!==null)Pt=it.max.x-it.min.x,Vt=it.max.y-it.min.y,Gt=it.isBox3?it.max.z-it.min.z:1,se=it.min.x,ie=it.min.y,Jt=it.isBox3?it.min.z:0;else{const bn=Math.pow(2,-Q);Pt=Math.floor(Re.width*bn),Vt=Math.floor(Re.height*bn),C.isDataArrayTexture?Gt=Re.depth:C.isData3DTexture?Gt=Math.floor(Re.depth*bn):Gt=1,se=0,ie=0,Jt=0}$!==null?(ye=$.x,Se=$.y,Ve=$.z):(ye=0,Se=0,Ve=0);const oe=te.convert(j.format),ee=te.convert(j.type);let ln;j.isData3DTexture?(L.setTexture3D(j,0),ln=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(L.setTexture2DArray(j,0),ln=H.TEXTURE_2D_ARRAY):(L.setTexture2D(j,0),ln=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const Me=H.getParameter(H.UNPACK_ROW_LENGTH),Fn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),gi=H.getParameter(H.UNPACK_SKIP_PIXELS),On=H.getParameter(H.UNPACK_SKIP_ROWS),pn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Re.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Re.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,se),H.pixelStorei(H.UNPACK_SKIP_ROWS,ie),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Jt);const Ne=C.isDataArrayTexture||C.isData3DTexture,Pn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const bn=mt.get(C),je=mt.get(j),xn=mt.get(bn.__renderTarget),Ns=mt.get(je.__renderTarget);dt.bindFramebuffer(H.READ_FRAMEBUFFER,xn.__webglFramebuffer),dt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ns.__webglFramebuffer);for(let Hn=0;Hn<Gt;Hn++)Ne&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mt.get(C).__webglTexture,Q,Jt+Hn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mt.get(j).__webglTexture,At,Ve+Hn)),H.blitFramebuffer(se,ie,Pt,Vt,ye,Se,Pt,Vt,H.DEPTH_BUFFER_BIT,H.NEAREST);dt.bindFramebuffer(H.READ_FRAMEBUFFER,null),dt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||mt.has(C)){const bn=mt.get(C),je=mt.get(j);dt.bindFramebuffer(H.READ_FRAMEBUFFER,Gr),dt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ii);for(let xn=0;xn<Gt;xn++)Ne?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bn.__webglTexture,Q,Jt+xn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bn.__webglTexture,Q),Pn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.__webglTexture,At,Ve+xn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,je.__webglTexture,At),Q!==0?H.blitFramebuffer(se,ie,Pt,Vt,ye,Se,Pt,Vt,H.COLOR_BUFFER_BIT,H.NEAREST):Pn?H.copyTexSubImage3D(ln,At,ye,Se,Ve+xn,se,ie,Pt,Vt):H.copyTexSubImage2D(ln,At,ye,Se,se,ie,Pt,Vt);dt.bindFramebuffer(H.READ_FRAMEBUFFER,null),dt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Pn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(ln,At,ye,Se,Ve,Pt,Vt,Gt,oe,ee,Re.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(ln,At,ye,Se,Ve,Pt,Vt,Gt,oe,Re.data):H.texSubImage3D(ln,At,ye,Se,Ve,Pt,Vt,Gt,oe,ee,Re):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,At,ye,Se,Pt,Vt,oe,ee,Re.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,At,ye,Se,Re.width,Re.height,oe,Re.data):H.texSubImage2D(H.TEXTURE_2D,At,ye,Se,Pt,Vt,oe,ee,Re);H.pixelStorei(H.UNPACK_ROW_LENGTH,Me),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Fn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,gi),H.pixelStorei(H.UNPACK_SKIP_ROWS,On),H.pixelStorei(H.UNPACK_SKIP_IMAGES,pn),At===0&&j.generateMipmaps&&H.generateMipmap(ln),dt.unbindTexture()},this.copyTextureToTexture3D=function(C,j,it=null,$=null,Q=0){return Wc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,it,$,Q)},this.initRenderTarget=function(C){mt.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),dt.unbindTexture()},this.resetState=function(){I=0,z=0,G=null,dt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),n.unpackColorSpace=De._getUnpackColorSpace()}}let tu=()=>{let r=new Un;return r.name="__placeholder__",r.userData.isPlaceholder=!0,r};function Xd(r){var t;return((t=r==null?void 0:r.userData)==null?void 0:t.isPlaceholder)===!0}function lR(r,t,n,a,o,c,f,h,m,d,g,_,v,y,E){t=null,n=null,t=new Date,n=t-a,n<200&&uR(o,c,f,h,m,d,g,_,v,y,E)}function cR(r,t,n){const o=t.domElement.getBoundingClientRect();n.x=(r.clientX-o.left)/o.width*2-1,n.y=-((r.clientY-o.top)/o.height)*2+1}function uR(r,t,n,a,o,c,f,h,m,d,g){if(!Xd(h.current)&&(r.enabled=!1,fR(h,m,t)&&hR(h,d,g),h.current.material.opacity=1,h.current.material.transparent=!1,h.current.children[0].material.color.set("black"),h.current.removeFromParent(),t.add(h.current),h.current=tu(),m.current=tu(),Xd(h.current))){r.enabled=!0;return}if(n.x=(event.clientX-a.left)/(a.right-a.left)*2-1,n.y=-((event.clientY-a.top)/(a.bottom-a.top))*2+1,o.setFromCamera(n,c),event.clientX>a.left&&event.clientX<a.right&&event.clientY<a.bottom&&event.clientY>a.top){let _=o.intersectObjects(t.children,!1);_.length>0&&_[0].object.userData.isFloor==!1&&(h.current=_[0].object,m.current=_[0].object.clone(),h.current.userData.intersecteble=!1,h.current.userData.isPlaceholder=!1,h.current.removeFromParent(),h.current.material.opacity=.2,h.current.material.transparent=!0,h.current.children[0].material.color.set("GREEN"),f.add(h.current))}}function fR(r,t,n,a){const o=new Ya().setFromObject(r.current);if(o.min.x=o.min.x+.01,o.min.y=o.min.y+.01,o.min.z=o.min.z+.01,o.max.x=o.max.x-.01,o.max.y=o.max.y-.01,o.max.z=o.max.z-.01,n.children.length>0)for(let c=0;c<n.children.length;c++){let f=new Ya().setFromObject(n.children[c]);return o.intersectsBox(f)?(r.current.position.x=t.current.position.x,r.current.position.y=t.current.position.y,r.current.position.z=t.current.position.z,!1):!0}}function hR(r,t,n){let a=r.current.uuid,o=r.current.position.x-r.current.geometry.parameters.width/2,c=r.current.position.y-r.current.geometry.parameters.height/2,f=r.current.position.z-r.current.geometry.parameters.depth/2,h=parseFloat(o.toFixed(2)),m=parseFloat(c.toFixed(2)),d=parseFloat(f.toFixed(2)),g=t.map(_=>_.uuid===a?{..._,Xposition:h,Yposition:m,Zposition:d}:_);n(g)}const Vv={type:"change"},sp={type:"start"},D0={type:"end"},Fc=new iu,kv=new Ha,dR=Math.cos(70*$S.DEG2RAD),fn=new X,Xn=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zh=1e-6;class pR extends TE{constructor(t,n=null){super(t,n),this.state=Be.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:br.ROTATE,MIDDLE:br.DOLLY,RIGHT:br.PAN},this.touches={ONE:Er.ROTATE,TWO:Er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Rs,this._lastTargetPosition=new X,this._quat=new Rs().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gv,this._sphericalDelta=new gv,this._scale=1,this._panOffset=new X,this._rotateStart=new Nt,this._rotateEnd=new Nt,this._rotateDelta=new Nt,this._panStart=new Nt,this._panEnd=new Nt,this._panDelta=new Nt,this._dollyStart=new Nt,this._dollyEnd=new Nt,this._dollyDelta=new Nt,this._dollyDirection=new X,this._mouse=new Nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gR.bind(this),this._onPointerDown=mR.bind(this),this._onPointerUp=_R.bind(this),this._onContextMenu=TR.bind(this),this._onMouseWheel=yR.bind(this),this._onKeyDown=SR.bind(this),this._onTouchStart=MR.bind(this),this._onTouchMove=ER.bind(this),this._onMouseDown=vR.bind(this),this._onMouseMove=xR.bind(this),this._interceptControlDown=bR.bind(this),this._interceptControlUp=AR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vv),this.update(),this.state=Be.NONE}update(t=null){const n=this.object.position;fn.copy(n).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=Xn:a>Math.PI&&(a-=Xn),o<-Math.PI?o+=Xn:o>Math.PI&&(o-=Xn),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),n.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=fn.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new X(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),f=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Fc.origin.copy(this.object.position),Fc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fc.direction))<dR?this.object.lookAt(this.target):(kv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fc.intersectPlane(kv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zh||this._lastTargetPosition.distanceToSquared(this.target)>Zh?(this.dispatchEvent(Vv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){fn.setFromMatrixColumn(n,0),fn.multiplyScalar(-t),this._panOffset.add(fn)}_panUp(t,n){this.screenSpacePanning===!0?fn.setFromMatrixColumn(n,1):(fn.setFromMatrixColumn(n,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(t),this._panOffset.add(fn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;fn.copy(o).sub(this.target);let c=fn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,f=a.width,h=a.height;this._mouse.x=o/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Nt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function mR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function gR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function _R(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(D0),this.state=Be.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function vR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Be.DOLLY;break;case br.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Be.ROTATE}break;case br.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(sp)}function xR(r){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function yR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(r.preventDefault(),this.dispatchEvent(sp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(D0))}function SR(r){this.enabled!==!1&&this._handleKeyDown(r)}function MR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Er.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Be.TOUCH_ROTATE;break;case Er.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case Er.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Be.TOUCH_DOLLY_PAN;break;case Er.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(sp)}function ER(r){switch(this._trackPointer(r),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Be.NONE}}function TR(r){this.enabled!==!1&&r.preventDefault()}function bR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function RR(){let r=new wM;r.background=new Ue(15789299);const t=new xE(16777147,526368,1);return t.position.set(30,30,30).normalize(),r.add(t),r}function wR(){let r=new Va,t=new Va,n=new Va,a=new Va;return[r,t,n,a]}function CR(){let r=new pi(75,window.innerWidth/window.innerHeight,.1,5e3);return r.position.x=7,r.position.z=7,r.position.y=7,r}function DR(){let r=new oR;return r.setSize(600,300),r}function UR(r,t){let n=new pR(r,t.domElement);return n.enableDamping=!0,n.dampingFactor=.1,n.zoomSpeed=2,n.rotateSpeed=.5,n.panSpeed=1,n.enableZoom=!0,n.enablePan=!0,n}function LR(r){if(!r){console.error("Сцена не инициализирована");return}r.traverse(t=>{t instanceof Tn&&(t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())),t instanceof T0&&(t.isPointLight||t.isDirectionalLight)&&t.shadow&&t.shadow.dispose(),t instanceof Dn&&t.dispose()}),r.clear()}function NR(r,t){let n=r,a=new dv().load("./conteiner_side.png"),o=new ua({map:a}),c=new Tn(new zr(1,1),o),f=new dv().load("./conteiner_front.png"),h=new ua({map:f}),m=new Tn(new zr(1,1),h),d=m.clone();d.scale.x=Number(n.width_X),d.scale.y=Number(n.height_Y),d.position.x=Number(n.width_X/2),d.position.y=Number(n.height_Y/2),t.add(d);let g=m.clone();g.scale.x=Number(n.width_X),g.scale.y=Number(n.height_Y),g.position.x=Number(n.width_X/2),g.position.y=Number(n.height_Y/2),g.position.z=Number(n.depth_Z),g.rotation.y=Math.PI,t.add(g);let _=c.clone();_.scale.x=Number(n.depth_Z),_.scale.y=Number(n.height_Y),_.position.x=0,_.position.y=Number(n.height_Y/2),_.position.z=Number(n.depth_Z/2),_.rotation.y=Math.PI/2,t.add(_);let v=c.clone();v.scale.x=Number(n.depth_Z),v.scale.y=Number(n.height_Y),v.position.x=Number(n.width_X),v.position.y=Number(n.height_Y/2),v.position.z=Number(n.depth_Z/2),v.rotation.y=-Math.PI/2,t.add(v)}class Kh extends il{constructor(t){super(t)}load(t,n,a,o){const c=this,f=new gE(this.manager);f.setPath(this.path),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(t,function(h){const m=c.parse(JSON.parse(h));n&&n(m)},a,o)}parse(t){return new OR(t)}}class OR{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,n=100){const a=[],o=PR(t,n,this.data);for(let c=0,f=o.length;c<f;c++)a.push(...o[c].toShapes());return a}}function PR(r,t,n){const a=Array.from(r),o=t/n.resolution,c=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*o,f=[];let h=0,m=0;for(let d=0;d<a.length;d++){const g=a[d];if(g===`
`)h=0,m-=c;else{const _=zR(g,o,h,m,n);h+=_.offsetX,f.push(_.path)}}return f}function zR(r,t,n,a,o){const c=o.glyphs[r]||o.glyphs["?"];if(!c){console.error('THREE.Font: character "'+r+'" does not exists in font family '+o.familyName+".");return}const f=new EE;let h,m,d,g,_,v,y,E;if(c.o){const b=c._cachedOutline||(c._cachedOutline=c.o.split(" "));for(let S=0,x=b.length;S<x;)switch(b[S++]){case"m":h=b[S++]*t+n,m=b[S++]*t+a,f.moveTo(h,m);break;case"l":h=b[S++]*t+n,m=b[S++]*t+a,f.lineTo(h,m);break;case"q":d=b[S++]*t+n,g=b[S++]*t+a,_=b[S++]*t+n,v=b[S++]*t+a,f.quadraticCurveTo(_,v,d,g);break;case"b":d=b[S++]*t+n,g=b[S++]*t+a,_=b[S++]*t+n,v=b[S++]*t+a,y=b[S++]*t+n,E=b[S++]*t+a,f.bezierCurveTo(_,v,y,E,d,g);break}}return{offsetX:c.ha*t,path:f}}class Qh extends ip{constructor(t,n={}){const a=n.font;if(a===void 0)super();else{const o=a.generateShapes(t,n.size);n.depth===void 0&&(n.depth=50),n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(o,n)}this.type="TextGeometry"}}function BR(r,t,n,a){let o=Number(r),c=Number(t),f=Number(n);const h=Math.max(o,c,f);new Kh().load("./helvetiker_regular.typeface.json",function(z){const G=new Qh("X",{font:z,size:80,depth:5,curveSegments:12,bevelEnabled:!0,bevelThickness:1,bevelSize:8,bevelOffset:0,bevelSegments:5});let R=new ua({color:"red"}),A=new Tn(G,R);A.scale.set(.01*(h/8),.01*(h/8),.001),A.position.x=h*1.4,A.position.y=0,A.position.z=0,a.add(A)});const d=new wr({color:"red"}),g=[];g.push(new X(0,0,0)),g.push(new X(h*1.2,0,0));const _=new Yn().setFromPoints(g),v=new Yc(_,d);v.material.linewidth=1,a.add(v),new Kh().load("./optimer_regular.typeface.json",function(z){const G=new Qh("Y",{font:z,size:80,depth:5,curveSegments:12,bevelEnabled:!0,bevelThickness:1,bevelSize:8,bevelOffset:0,bevelSegments:5});let R=new ua({color:"green"}),A=new Tn(G,R);A.scale.set(.01*(h/8),.01*(h/8),.001),A.position.x=0,A.position.y=h*1.4,A.position.z=0,a.add(A)});const E=new wr({color:"green"}),b=[];b.push(new X(0,0,0)),b.push(new X(0,h*1.2,0));const S=new Yn().setFromPoints(b),x=new Yc(S,E);x.material.linewidth=1,a.add(x),new Kh().load("./optimer_regular.typeface.json",function(z){const G=new Qh("Z",{font:z,size:80,depth:5,curveSegments:12,bevelEnabled:!0,bevelThickness:1,bevelSize:8,bevelOffset:0,bevelSegments:5});let R=new ua({color:"blue"}),A=new Tn(G,R);A.scale.set(.01*(h/8),.01*(h/8),.001),A.position.x=0,A.position.y=0,A.position.z=h*1.4,A.rotation.y=Math.PI/2,a.add(A)});const U=new wr({color:"blue"}),D=[];D.push(new X(0,0,0)),D.push(new X(0,0,h*1.2));const B=new Yn().setFromPoints(D),I=new Yc(B,U);I.material.linewidth=1,a.add(I)}function IR(r,t,n,a,o,c,f){t.clear(),a.clear(),n.clear();let h=Number(r[0].Xwidth),m=Number(r[0].Yheight),d=Number(r[0].Zdepth);const g=new Ya;g.setFromCenterAndSize(new X(h/2,m/2,d/2),new X(h,m,d));const _=new ME(g,14616327);t.add(_);let v=new Ds(h,0,d),y=new ua({color:16776960}),E=new Tn(v,y);return E.position.x=h/2,E.position.z=d/2,E.userData.isFloor=!0,a.add(E),NR({width_X:h,height_Y:m,depth_Z:d},n),BR(h,m,d,n),f||o.position.set(h*1.4,m*1.4,d),c.target.set(h/2,0,d/2),_}function FR(r,t){let n=r.length;for(let a=0;a<n;a++){let o=Number(r[a].Xposition),c=Number(r[a].Yposition),f=Number(r[a].Zposition),h=Number(r[a].Xwidth),m=Number(r[a].Yheight),d=Number(r[a].Zdepth),g=new Ds(h,m,d),_=new ua({color:r[a].userColor}),v=r[a].uuid,y=new Tn(g,_);y.material.side=Oi;let E=new XM(g),b=new p0(E,new wr({color:"black"}));y.add(b),y.position.x=o+h/2,y.position.y=c+m/2,y.position.z=f+d/2,y.userData.isFloor=!1,y.uuid=v,t.add(y)}}const HR=({cargos:r,setCargos:t,cargoArea:n,setCargoArea:a})=>{const o=pe.useRef(null);let c=pe.useRef(""),f=pe.useRef("");pe.useRef(null);const[h,m]=pe.useState(null);return pe.useEffect(()=>{let d=RR(),g=CR();h&&g.position.set(h.x,h.y,h.z);let _=DR(),v=UR(g,_),[y,E,b,S]=wR();d.add(y),d.add(E),d.add(b),d.add(S),o.current&&(o.current.innerHTML="",o.current.appendChild(_.domElement));let x=new SE,O=new Nt,U=new Nt;c.current=tu(),f.current=tu();let D=_.getContext().canvas.getBoundingClientRect(),B=new Date,I=new Date,z=new Date,G=ft=>cR(ft,_,O),R=ft=>B=new Date,A=ft=>lR(ft,I,z,B,v,E,U,D,x,g,d,c,f,r,t);window.addEventListener("mousemove",G),window.addEventListener("mousedown",R),window.addEventListener("mouseup",A);function F(){if(x.setFromCamera(O,g),!Xd(c.current)){let ft=[...b.children,...E.children];const lt=x.intersectObjects(ft,!1);if(lt.length>0){let V=lt[0];(V.faceIndex==4||V.faceIndex==5)&&(V.point.x<=Number(c.current.geometry.parameters.width)/2?c.current.position.x=Number(c.current.geometry.parameters.width)/2:V.point.x+Number(c.current.geometry.parameters.width)/2>=y.children[0].scale.x*2?c.current.position.x=y.children[0].scale.x*2-Number(c.current.geometry.parameters.width)/2:c.current.position.x=V.point.x,V.point.z<=Number(c.current.geometry.parameters.depth)/2?c.current.position.z=Number(c.current.geometry.parameters.depth)/2:V.point.z+Number(c.current.geometry.parameters.depth)/2>=y.children[0].scale.z*2?c.current.position.z=y.children[0].scale.z*2-Number(c.current.geometry.parameters.depth)/2:c.current.position.z=V.point.z,c.current.position.y=V.point.y+Number(c.current.geometry.parameters.height)/2)}}}n&&IR(n,y,S,b,g,v,h),r.length>0&&FR(r,E);let ct;function st(){m(g.position.clone()),v.update(),F(),_.render(d,g),ct=requestAnimationFrame(st)}return st(),()=>{var ft;_&&(_.dispose(),(ft=_.getContext().getExtension("WEBGL_lose_context"))==null||ft.loseContext()),d&&LR(d),ct&&cancelAnimationFrame(ct),o.current&&_.domElement&&o.current.removeChild(_.domElement),window.removeEventListener("mousedown",R),window.removeEventListener("mouseup",A),window.removeEventListener("mousemove",G)}},[r,n]),xt.jsx("div",{className:"ThreeScene-container",ref:o})};function GR(){const[r,t]=pe.useState([]),[n,a]=pe.useState("");return xt.jsxs("div",{className:"main-container",children:[xt.jsx(Xy,{}),xt.jsx("div",{className:"scene-wrapper",children:xt.jsx(HR,{cargos:r,setCargos:t,cargoArea:n,setCargoArea:a})}),xt.jsxs("div",{className:"tables-row",children:[xt.jsx("div",{className:"table-right",children:xt.jsx(rS,{cargos:r,setCargos:t})}),xt.jsx("div",{className:"table-left",children:xt.jsx(cS,{cargoArea:n,setCargoArea:a,cargos:r,setCargos:t})})]})]})}ky.createRoot(document.getElementById("root")).render(xt.jsx(pe.StrictMode,{children:xt.jsx(GR,{})}));
