(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Lw={exports:{}},pc={},Vw={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=Symbol.for("react.element"),rA=Symbol.for("react.portal"),iA=Symbol.for("react.fragment"),sA=Symbol.for("react.strict_mode"),oA=Symbol.for("react.profiler"),aA=Symbol.for("react.provider"),lA=Symbol.for("react.context"),uA=Symbol.for("react.forward_ref"),cA=Symbol.for("react.suspense"),hA=Symbol.for("react.memo"),dA=Symbol.for("react.lazy"),C_=Symbol.iterator;function fA(t){return t===null||typeof t!="object"?null:(t=C_&&t[C_]||t["@@iterator"],typeof t=="function"?t:null)}var Fw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jw=Object.assign,Uw={};function zs(t,e,n){this.props=t,this.context=e,this.refs=Uw,this.updater=n||Fw}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zw(){}zw.prototype=zs.prototype;function Zf(t,e,n){this.props=t,this.context=e,this.refs=Uw,this.updater=n||Fw}var ep=Zf.prototype=new zw;ep.constructor=Zf;jw(ep,zs.prototype);ep.isPureReactComponent=!0;var A_=Array.isArray,Bw=Object.prototype.hasOwnProperty,tp={current:null},$w={key:!0,ref:!0,__self:!0,__source:!0};function Ww(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bw.call(e,r)&&!$w.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ma,type:t,key:s,ref:o,props:i,_owner:tp.current}}function pA(t,e){return{$$typeof:Ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function np(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ma}function mA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var R_=/\/+/g;function Ph(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mA(""+t.key):e.toString(36)}function Kl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ma:case rA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ph(o,0):r,A_(i)?(n="",t!=null&&(n=t.replace(R_,"$&/")+"/"),Kl(i,e,n,"",function(c){return c})):i!=null&&(np(i)&&(i=pA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(R_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",A_(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ph(s,a);o+=Kl(s,e,n,u,i)}else if(u=fA(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ph(s,a++),o+=Kl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Il(t,e,n){if(t==null)return t;var r=[],i=0;return Kl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},Ql={transition:null},_A={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Ql,ReactCurrentOwner:tp};function qw(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Il,forEach:function(t,e,n){Il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Il(t,function(){e++}),e},toArray:function(t){return Il(t,function(e){return e})||[]},only:function(t){if(!np(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=zs;te.Fragment=iA;te.Profiler=oA;te.PureComponent=Zf;te.StrictMode=sA;te.Suspense=cA;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_A;te.act=qw;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Bw.call(e,u)&&!$w.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ma,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:lA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:aA,_context:t},t.Consumer=t};te.createElement=Ww;te.createFactory=function(t){var e=Ww.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:uA,render:t}};te.isValidElement=np;te.lazy=function(t){return{$$typeof:dA,_payload:{_status:-1,_result:t},_init:gA}};te.memo=function(t,e){return{$$typeof:hA,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Ql.transition;Ql.transition={};try{t()}finally{Ql.transition=e}};te.unstable_act=qw;te.useCallback=function(t,e){return kt.current.useCallback(t,e)};te.useContext=function(t){return kt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};te.useEffect=function(t,e){return kt.current.useEffect(t,e)};te.useId=function(){return kt.current.useId()};te.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return kt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};te.useRef=function(t){return kt.current.useRef(t)};te.useState=function(t){return kt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return kt.current.useTransition()};te.version="18.3.1";Vw.exports=te;var H=Vw.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yA=H,vA=Symbol.for("react.element"),wA=Symbol.for("react.fragment"),EA=Object.prototype.hasOwnProperty,TA=yA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IA={key:!0,ref:!0,__self:!0,__source:!0};function Hw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)EA.call(e,r)&&!IA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:vA,type:t,key:s,ref:o,props:i,_owner:TA.current}}pc.Fragment=wA;pc.jsx=Hw;pc.jsxs=Hw;Lw.exports=pc;var g=Lw.exports,Gw={exports:{}},Gt={},Kw={exports:{}},Qw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,B){var G=W.length;W.push(B);e:for(;0<G;){var ie=G-1>>>1,ee=W[ie];if(0<i(ee,B))W[ie]=B,W[G]=ee,G=ie;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var B=W[0],G=W.pop();if(G!==B){W[0]=G;e:for(var ie=0,ee=W.length,Ee=ee>>>1;ie<Ee;){var Ft=2*(ie+1)-1,on=W[Ft],Mn=Ft+1,Ln=W[Mn];if(0>i(on,G))Mn<ee&&0>i(Ln,on)?(W[ie]=Ln,W[Mn]=G,ie=Mn):(W[ie]=on,W[Ft]=G,ie=Ft);else if(Mn<ee&&0>i(Ln,G))W[ie]=Ln,W[Mn]=G,ie=Mn;else break e}}return B}function i(W,B){var G=W.sortIndex-B.sortIndex;return G!==0?G:W.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,w=!1,C=!1,k=!1,b=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(W){for(var B=n(c);B!==null;){if(B.callback===null)r(c);else if(B.startTime<=W)r(c),B.sortIndex=B.expirationTime,e(u,B);else break;B=n(c)}}function D(W){if(k=!1,R(W),!C)if(n(u)!==null)C=!0,wn(j);else{var B=n(c);B!==null&&Vt(D,B.startTime-W)}}function j(W,B){C=!1,k&&(k=!1,E(v),v=-1),w=!0;var G=m;try{for(R(B),f=n(u);f!==null&&(!(f.expirationTime>B)||W&&!x());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,m=f.priorityLevel;var ee=ie(f.expirationTime<=B);B=t.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(u)&&r(u),R(B)}else r(u);f=n(u)}if(f!==null)var Ee=!0;else{var Ft=n(c);Ft!==null&&Vt(D,Ft.startTime-B),Ee=!1}return Ee}finally{f=null,m=G,w=!1}}var F=!1,T=null,v=-1,I=5,A=-1;function x(){return!(t.unstable_now()-A<I)}function P(){if(T!==null){var W=t.unstable_now();A=W;var B=!0;try{B=T(!0,W)}finally{B?S():(F=!1,T=null)}}else F=!1}var S;if(typeof y=="function")S=function(){y(P)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,Qt=Xe.port2;Xe.port1.onmessage=P,S=function(){Qt.postMessage(null)}}else S=function(){b(P,0)};function wn(W){T=W,F||(F=!0,S())}function Vt(W,B){v=b(function(){W(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){C||w||(C=!0,wn(j))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var B=3;break;default:B=m}var G=m;m=B;try{return W()}finally{m=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,B){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var G=m;m=W;try{return B()}finally{m=G}},t.unstable_scheduleCallback=function(W,B,G){var ie=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ie+G:ie):G=ie,W){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=G+ee,W={id:d++,callback:B,priorityLevel:W,startTime:G,expirationTime:ee,sortIndex:-1},G>ie?(W.sortIndex=G,e(c,W),n(u)===null&&W===n(c)&&(k?(E(v),v=-1):k=!0,Vt(D,G-ie))):(W.sortIndex=ee,e(u,W),C||w||(C=!0,wn(j))),W},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(W){var B=m;return function(){var G=m;m=B;try{return W.apply(this,arguments)}finally{m=G}}}})(Qw);Kw.exports=Qw;var SA=Kw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CA=H,Ht=SA;function V(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yw=new Set,ea={};function bi(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(ea[t]=e,t=0;t<e.length;t++)Yw.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Id=Object.prototype.hasOwnProperty,AA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k_={},x_={};function RA(t){return Id.call(x_,t)?!0:Id.call(k_,t)?!1:AA.test(t)?x_[t]=!0:(k_[t]=!0,!1)}function kA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xA(t,e,n,r){if(e===null||typeof e>"u"||kA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var rp=/[\-:]([a-z])/g;function ip(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rp,ip);ot[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rp,ip);ot[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rp,ip);ot[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function sp(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xA(e,n,i,r)&&(n=null),r||i===null?RA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cr=CA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sl=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Yi=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),Sd=Symbol.for("react.profiler"),Xw=Symbol.for("react.provider"),Jw=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),Cd=Symbol.for("react.suspense"),Ad=Symbol.for("react.suspense_list"),lp=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),Zw=Symbol.for("react.offscreen"),P_=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=P_&&t[P_]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,Nh;function xo(t){if(Nh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nh=e&&e[1]||""}return`
`+Nh+t}var bh=!1;function Dh(t,e){if(!t||bh)return"";bh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{bh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xo(t):""}function PA(t){switch(t.tag){case 5:return xo(t.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return t=Dh(t.type,!1),t;case 11:return t=Dh(t.type.render,!1),t;case 1:return t=Dh(t.type,!0),t;default:return""}}function Rd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yi:return"Fragment";case Qi:return"Portal";case Sd:return"Profiler";case op:return"StrictMode";case Cd:return"Suspense";case Ad:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jw:return(t.displayName||"Context")+".Consumer";case Xw:return(t._context.displayName||"Context")+".Provider";case ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lp:return e=t.displayName||null,e!==null?e:Rd(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return Rd(t(e))}catch{}}return null}function NA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rd(e);case 8:return e===op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function e0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bA(t){var e=e0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cl(t){t._valueTracker||(t._valueTracker=bA(t))}function t0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=e0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kd(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function N_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function n0(t,e){e=e.checked,e!=null&&sp(t,"checked",e,!1)}function xd(t,e){n0(t,e);var n=zr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pd(t,e.type,zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function b_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pd(t,e,n){(e!=="number"||gu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function us(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Nd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(V(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function D_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(V(92));if(Po(n)){if(1<n.length)throw Error(V(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zr(n)}}function r0(t,e){var n=zr(e.value),r=zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function O_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Al,s0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DA=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(t){DA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Lo[e]=Lo[t]})});function o0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Lo.hasOwnProperty(t)&&Lo[t]?(""+e).trim():e+"px"}function a0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=o0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var OA=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dd(t,e){if(e){if(OA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(V(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(V(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(V(61))}if(e.style!=null&&typeof e.style!="object")throw Error(V(62))}}function Od(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=null;function up(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ld=null,cs=null,hs=null;function M_(t){if(t=Fa(t)){if(typeof Ld!="function")throw Error(V(280));var e=t.stateNode;e&&(e=vc(e),Ld(t.stateNode,t.type,e))}}function l0(t){cs?hs?hs.push(t):hs=[t]:cs=t}function u0(){if(cs){var t=cs,e=hs;if(hs=cs=null,M_(t),e)for(t=0;t<e.length;t++)M_(e[t])}}function c0(t,e){return t(e)}function h0(){}var Oh=!1;function d0(t,e,n){if(Oh)return t(e,n);Oh=!0;try{return c0(t,e,n)}finally{Oh=!1,(cs!==null||hs!==null)&&(h0(),u0())}}function na(t,e){var n=t.stateNode;if(n===null)return null;var r=vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(V(231,e,typeof n));return n}var Vd=!1;if(Zn)try{var go={};Object.defineProperty(go,"passive",{get:function(){Vd=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{Vd=!1}function MA(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Vo=!1,_u=null,yu=!1,Fd=null,LA={onError:function(t){Vo=!0,_u=t}};function VA(t,e,n,r,i,s,o,a,u){Vo=!1,_u=null,MA.apply(LA,arguments)}function FA(t,e,n,r,i,s,o,a,u){if(VA.apply(this,arguments),Vo){if(Vo){var c=_u;Vo=!1,_u=null}else throw Error(V(198));yu||(yu=!0,Fd=c)}}function Di(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function L_(t){if(Di(t)!==t)throw Error(V(188))}function jA(t){var e=t.alternate;if(!e){if(e=Di(t),e===null)throw Error(V(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return L_(i),t;if(s===r)return L_(i),e;s=s.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?t:e}function p0(t){return t=jA(t),t!==null?m0(t):null}function m0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=m0(t);if(e!==null)return e;t=t.sibling}return null}var g0=Ht.unstable_scheduleCallback,V_=Ht.unstable_cancelCallback,UA=Ht.unstable_shouldYield,zA=Ht.unstable_requestPaint,Me=Ht.unstable_now,BA=Ht.unstable_getCurrentPriorityLevel,cp=Ht.unstable_ImmediatePriority,_0=Ht.unstable_UserBlockingPriority,vu=Ht.unstable_NormalPriority,$A=Ht.unstable_LowPriority,y0=Ht.unstable_IdlePriority,mc=null,An=null;function WA(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(mc,t,void 0,(t.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:GA,qA=Math.log,HA=Math.LN2;function GA(t){return t>>>=0,t===0?32:31-(qA(t)/HA|0)|0}var Rl=64,kl=4194304;function No(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=No(a):(s&=o,s!==0&&(r=No(s)))}else o=n&~i,o!==0?r=No(o):s!==0&&(r=No(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-fn(e),i=1<<n,r|=t[n],e&=~i;return r}function KA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=KA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function jd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v0(){var t=Rl;return Rl<<=1,!(Rl&4194240)&&(Rl=64),t}function Mh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function La(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fn(e),t[e]=n}function YA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function w0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E0,dp,T0,I0,S0,Ud=!1,xl=[],kr=null,xr=null,Pr=null,ra=new Map,ia=new Map,vr=[],XA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function F_(t,e){switch(t){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(e.pointerId)}}function _o(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fa(e),e!==null&&dp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function JA(t,e,n,r,i){switch(e){case"focusin":return kr=_o(kr,t,e,n,r,i),!0;case"dragenter":return xr=_o(xr,t,e,n,r,i),!0;case"mouseover":return Pr=_o(Pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ra.set(s,_o(ra.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ia.set(s,_o(ia.get(s)||null,t,e,n,r,i)),!0}return!1}function C0(t){var e=oi(t.target);if(e!==null){var n=Di(e);if(n!==null){if(e=n.tag,e===13){if(e=f0(n),e!==null){t.blockedOn=e,S0(t.priority,function(){T0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Md=r,n.target.dispatchEvent(r),Md=null}else return e=Fa(n),e!==null&&dp(e),t.blockedOn=n,!1;e.shift()}return!0}function j_(t,e,n){Yl(t)&&n.delete(e)}function ZA(){Ud=!1,kr!==null&&Yl(kr)&&(kr=null),xr!==null&&Yl(xr)&&(xr=null),Pr!==null&&Yl(Pr)&&(Pr=null),ra.forEach(j_),ia.forEach(j_)}function yo(t,e){t.blockedOn===e&&(t.blockedOn=null,Ud||(Ud=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,ZA)))}function sa(t){function e(i){return yo(i,t)}if(0<xl.length){yo(xl[0],t);for(var n=1;n<xl.length;n++){var r=xl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kr!==null&&yo(kr,t),xr!==null&&yo(xr,t),Pr!==null&&yo(Pr,t),ra.forEach(e),ia.forEach(e),n=0;n<vr.length;n++)r=vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)C0(n),n.blockedOn===null&&vr.shift()}var ds=cr.ReactCurrentBatchConfig,Eu=!0;function eR(t,e,n,r){var i=pe,s=ds.transition;ds.transition=null;try{pe=1,fp(t,e,n,r)}finally{pe=i,ds.transition=s}}function tR(t,e,n,r){var i=pe,s=ds.transition;ds.transition=null;try{pe=4,fp(t,e,n,r)}finally{pe=i,ds.transition=s}}function fp(t,e,n,r){if(Eu){var i=zd(t,e,n,r);if(i===null)qh(t,e,r,Tu,n),F_(t,r);else if(JA(i,t,e,n,r))r.stopPropagation();else if(F_(t,r),e&4&&-1<XA.indexOf(t)){for(;i!==null;){var s=Fa(i);if(s!==null&&E0(s),s=zd(t,e,n,r),s===null&&qh(t,e,r,Tu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else qh(t,e,r,null,n)}}var Tu=null;function zd(t,e,n,r){if(Tu=null,t=up(r),t=oi(t),t!==null)if(e=Di(t),e===null)t=null;else if(n=e.tag,n===13){if(t=f0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tu=t,null}function A0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BA()){case cp:return 1;case _0:return 4;case vu:case $A:return 16;case y0:return 536870912;default:return 16}default:return 16}}var Cr=null,pp=null,Xl=null;function R0(){if(Xl)return Xl;var t,e=pp,n=e.length,r,i="value"in Cr?Cr.value:Cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Xl=i.slice(t,1<r?1-r:void 0)}function Jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function U_(){return!1}function Kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pl:U_,this.isPropagationStopped=U_,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),e}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mp=Kt(Bs),Va=Pe({},Bs,{view:0,detail:0}),nR=Kt(Va),Lh,Vh,vo,gc=Pe({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(Lh=t.screenX-vo.screenX,Vh=t.screenY-vo.screenY):Vh=Lh=0,vo=t),Lh)},movementY:function(t){return"movementY"in t?t.movementY:Vh}}),z_=Kt(gc),rR=Pe({},gc,{dataTransfer:0}),iR=Kt(rR),sR=Pe({},Va,{relatedTarget:0}),Fh=Kt(sR),oR=Pe({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),aR=Kt(oR),lR=Pe({},Bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uR=Kt(lR),cR=Pe({},Bs,{data:0}),B_=Kt(cR),hR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fR[t])?!!e[t]:!1}function gp(){return pR}var mR=Pe({},Va,{key:function(t){if(t.key){var e=hR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gp,charCode:function(t){return t.type==="keypress"?Jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gR=Kt(mR),_R=Pe({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$_=Kt(_R),yR=Pe({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gp}),vR=Kt(yR),wR=Pe({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ER=Kt(wR),TR=Pe({},gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),IR=Kt(TR),SR=[9,13,27,32],_p=Zn&&"CompositionEvent"in window,Fo=null;Zn&&"documentMode"in document&&(Fo=document.documentMode);var CR=Zn&&"TextEvent"in window&&!Fo,k0=Zn&&(!_p||Fo&&8<Fo&&11>=Fo),W_=" ",q_=!1;function x0(t,e){switch(t){case"keyup":return SR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xi=!1;function AR(t,e){switch(t){case"compositionend":return P0(e);case"keypress":return e.which!==32?null:(q_=!0,W_);case"textInput":return t=e.data,t===W_&&q_?null:t;default:return null}}function RR(t,e){if(Xi)return t==="compositionend"||!_p&&x0(t,e)?(t=R0(),Xl=pp=Cr=null,Xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return k0&&e.locale!=="ko"?null:e.data;default:return null}}var kR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kR[t.type]:e==="textarea"}function N0(t,e,n,r){l0(r),e=Iu(e,"onChange"),0<e.length&&(n=new mp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jo=null,oa=null;function xR(t){B0(t,0)}function _c(t){var e=es(t);if(t0(e))return t}function PR(t,e){if(t==="change")return e}var b0=!1;if(Zn){var jh;if(Zn){var Uh="oninput"in document;if(!Uh){var G_=document.createElement("div");G_.setAttribute("oninput","return;"),Uh=typeof G_.oninput=="function"}jh=Uh}else jh=!1;b0=jh&&(!document.documentMode||9<document.documentMode)}function K_(){jo&&(jo.detachEvent("onpropertychange",D0),oa=jo=null)}function D0(t){if(t.propertyName==="value"&&_c(oa)){var e=[];N0(e,oa,t,up(t)),d0(xR,e)}}function NR(t,e,n){t==="focusin"?(K_(),jo=e,oa=n,jo.attachEvent("onpropertychange",D0)):t==="focusout"&&K_()}function bR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _c(oa)}function DR(t,e){if(t==="click")return _c(e)}function OR(t,e){if(t==="input"||t==="change")return _c(e)}function MR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yn=typeof Object.is=="function"?Object.is:MR;function aa(t,e){if(yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Id.call(e,i)||!yn(t[i],e[i]))return!1}return!0}function Q_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Y_(t,e){var n=Q_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Q_(n)}}function O0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function M0(){for(var t=window,e=gu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gu(t.document)}return e}function yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LR(t){var e=M0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O0(n.ownerDocument.documentElement,n)){if(r!==null&&yp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Y_(n,s);var o=Y_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var VR=Zn&&"documentMode"in document&&11>=document.documentMode,Ji=null,Bd=null,Uo=null,$d=!1;function X_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$d||Ji==null||Ji!==gu(r)||(r=Ji,"selectionStart"in r&&yp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Uo&&aa(Uo,r)||(Uo=r,r=Iu(Bd,"onSelect"),0<r.length&&(e=new mp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ji)))}function Nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zi={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},zh={},L0={};Zn&&(L0=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function yc(t){if(zh[t])return zh[t];if(!Zi[t])return t;var e=Zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in L0)return zh[t]=e[n];return t}var V0=yc("animationend"),F0=yc("animationiteration"),j0=yc("animationstart"),U0=yc("transitionend"),z0=new Map,J_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(t,e){z0.set(t,e),bi(e,[t])}for(var Bh=0;Bh<J_.length;Bh++){var $h=J_[Bh],FR=$h.toLowerCase(),jR=$h[0].toUpperCase()+$h.slice(1);Kr(FR,"on"+jR)}Kr(V0,"onAnimationEnd");Kr(F0,"onAnimationIteration");Kr(j0,"onAnimationStart");Kr("dblclick","onDoubleClick");Kr("focusin","onFocus");Kr("focusout","onBlur");Kr(U0,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UR=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function Z_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,FA(r,e,void 0,t),t.currentTarget=null}function B0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Z_(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Z_(i,a,c),s=u}}}if(yu)throw t=Fd,yu=!1,Fd=null,t}function Ie(t,e){var n=e[Kd];n===void 0&&(n=e[Kd]=new Set);var r=t+"__bubble";n.has(r)||($0(e,t,2,!1),n.add(r))}function Wh(t,e,n){var r=0;e&&(r|=4),$0(n,t,r,e)}var bl="_reactListening"+Math.random().toString(36).slice(2);function la(t){if(!t[bl]){t[bl]=!0,Yw.forEach(function(n){n!=="selectionchange"&&(UR.has(n)||Wh(n,!1,t),Wh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bl]||(e[bl]=!0,Wh("selectionchange",!1,e))}}function $0(t,e,n,r){switch(A0(e)){case 1:var i=eR;break;case 4:i=tR;break;default:i=fp}n=i.bind(null,e,n,t),i=void 0,!Vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function qh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=oi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}d0(function(){var c=s,d=up(n),f=[];e:{var m=z0.get(t);if(m!==void 0){var w=mp,C=t;switch(t){case"keypress":if(Jl(n)===0)break e;case"keydown":case"keyup":w=gR;break;case"focusin":C="focus",w=Fh;break;case"focusout":C="blur",w=Fh;break;case"beforeblur":case"afterblur":w=Fh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=z_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=iR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=vR;break;case V0:case F0:case j0:w=aR;break;case U0:w=ER;break;case"scroll":w=nR;break;case"wheel":w=IR;break;case"copy":case"cut":case"paste":w=uR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=$_}var k=(e&4)!==0,b=!k&&t==="scroll",E=k?m!==null?m+"Capture":null:m;k=[];for(var y=c,R;y!==null;){R=y;var D=R.stateNode;if(R.tag===5&&D!==null&&(R=D,E!==null&&(D=na(y,E),D!=null&&k.push(ua(y,D,R)))),b)break;y=y.return}0<k.length&&(m=new w(m,C,null,n,d),f.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==Md&&(C=n.relatedTarget||n.fromElement)&&(oi(C)||C[er]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(C=n.relatedTarget||n.toElement,w=c,C=C?oi(C):null,C!==null&&(b=Di(C),C!==b||C.tag!==5&&C.tag!==6)&&(C=null)):(w=null,C=c),w!==C)){if(k=z_,D="onMouseLeave",E="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(k=$_,D="onPointerLeave",E="onPointerEnter",y="pointer"),b=w==null?m:es(w),R=C==null?m:es(C),m=new k(D,y+"leave",w,n,d),m.target=b,m.relatedTarget=R,D=null,oi(d)===c&&(k=new k(E,y+"enter",C,n,d),k.target=R,k.relatedTarget=b,D=k),b=D,w&&C)t:{for(k=w,E=C,y=0,R=k;R;R=Wi(R))y++;for(R=0,D=E;D;D=Wi(D))R++;for(;0<y-R;)k=Wi(k),y--;for(;0<R-y;)E=Wi(E),R--;for(;y--;){if(k===E||E!==null&&k===E.alternate)break t;k=Wi(k),E=Wi(E)}k=null}else k=null;w!==null&&ey(f,m,w,k,!1),C!==null&&b!==null&&ey(f,b,C,k,!0)}}e:{if(m=c?es(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var j=PR;else if(H_(m))if(b0)j=OR;else{j=bR;var F=NR}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=DR);if(j&&(j=j(t,c))){N0(f,j,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Pd(m,"number",m.value)}switch(F=c?es(c):window,t){case"focusin":(H_(F)||F.contentEditable==="true")&&(Ji=F,Bd=c,Uo=null);break;case"focusout":Uo=Bd=Ji=null;break;case"mousedown":$d=!0;break;case"contextmenu":case"mouseup":case"dragend":$d=!1,X_(f,n,d);break;case"selectionchange":if(VR)break;case"keydown":case"keyup":X_(f,n,d)}var T;if(_p)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Xi?x0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(k0&&n.locale!=="ko"&&(Xi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Xi&&(T=R0()):(Cr=d,pp="value"in Cr?Cr.value:Cr.textContent,Xi=!0)),F=Iu(c,v),0<F.length&&(v=new B_(v,t,null,n,d),f.push({event:v,listeners:F}),T?v.data=T:(T=P0(n),T!==null&&(v.data=T)))),(T=CR?AR(t,n):RR(t,n))&&(c=Iu(c,"onBeforeInput"),0<c.length&&(d=new B_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}B0(f,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Iu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=na(t,n),s!=null&&r.unshift(ua(t,s,i)),s=na(t,e),s!=null&&r.push(ua(t,s,i))),t=t.return}return r}function Wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ey(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=na(n,s),u!=null&&o.unshift(ua(n,u,a))):i||(u=na(n,s),u!=null&&o.push(ua(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zR=/\r\n?/g,BR=/\u0000|\uFFFD/g;function ty(t){return(typeof t=="string"?t:""+t).replace(zR,`
`).replace(BR,"")}function Dl(t,e,n){if(e=ty(e),ty(t)!==e&&n)throw Error(V(425))}function Su(){}var Wd=null,qd=null;function Hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gd=typeof setTimeout=="function"?setTimeout:void 0,$R=typeof clearTimeout=="function"?clearTimeout:void 0,ny=typeof Promise=="function"?Promise:void 0,WR=typeof queueMicrotask=="function"?queueMicrotask:typeof ny<"u"?function(t){return ny.resolve(null).then(t).catch(qR)}:Gd;function qR(t){setTimeout(function(){throw t})}function Hh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),sa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);sa(e)}function Nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ry(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Sn="__reactFiber$"+$s,ca="__reactProps$"+$s,er="__reactContainer$"+$s,Kd="__reactEvents$"+$s,HR="__reactListeners$"+$s,GR="__reactHandles$"+$s;function oi(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ry(t);t!==null;){if(n=t[Sn])return n;t=ry(t)}return e}t=n,n=t.parentNode}return null}function Fa(t){return t=t[Sn]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(V(33))}function vc(t){return t[ca]||null}var Qd=[],ts=-1;function Qr(t){return{current:t}}function Ae(t){0>ts||(t.current=Qd[ts],Qd[ts]=null,ts--)}function ve(t,e){ts++,Qd[ts]=t.current,t.current=e}var Br={},vt=Qr(Br),Dt=Qr(!1),_i=Br;function Is(t,e){var n=t.type.contextTypes;if(!n)return Br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(t){return t=t.childContextTypes,t!=null}function Cu(){Ae(Dt),Ae(vt)}function iy(t,e,n){if(vt.current!==Br)throw Error(V(168));ve(vt,e),ve(Dt,n)}function W0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(V(108,NA(t)||"Unknown",i));return Pe({},n,r)}function Au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,_i=vt.current,ve(vt,t),ve(Dt,Dt.current),!0}function sy(t,e,n){var r=t.stateNode;if(!r)throw Error(V(169));n?(t=W0(t,e,_i),r.__reactInternalMemoizedMergedChildContext=t,Ae(Dt),Ae(vt),ve(vt,t)):Ae(Dt),ve(Dt,n)}var Bn=null,wc=!1,Gh=!1;function q0(t){Bn===null?Bn=[t]:Bn.push(t)}function KR(t){wc=!0,q0(t)}function Yr(){if(!Gh&&Bn!==null){Gh=!0;var t=0,e=pe;try{var n=Bn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,wc=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(t+1)),g0(cp,Yr),i}finally{pe=e,Gh=!1}}return null}var ns=[],rs=0,Ru=null,ku=0,Yt=[],Xt=0,yi=null,Wn=1,qn="";function ni(t,e){ns[rs++]=ku,ns[rs++]=Ru,Ru=t,ku=e}function H0(t,e,n){Yt[Xt++]=Wn,Yt[Xt++]=qn,Yt[Xt++]=yi,yi=t;var r=Wn;t=qn;var i=32-fn(r)-1;r&=~(1<<i),n+=1;var s=32-fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wn=1<<32-fn(e)+i|n<<i|r,qn=s+t}else Wn=1<<s|n<<i|r,qn=t}function vp(t){t.return!==null&&(ni(t,1),H0(t,1,0))}function wp(t){for(;t===Ru;)Ru=ns[--rs],ns[rs]=null,ku=ns[--rs],ns[rs]=null;for(;t===yi;)yi=Yt[--Xt],Yt[Xt]=null,qn=Yt[--Xt],Yt[Xt]=null,Wn=Yt[--Xt],Yt[Xt]=null}var $t=null,zt=null,Re=!1,hn=null;function G0(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function oy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$t=t,zt=Nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$t=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yi!==null?{id:Wn,overflow:qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$t=t,zt=null,!0):!1;default:return!1}}function Yd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xd(t){if(Re){var e=zt;if(e){var n=e;if(!oy(t,e)){if(Yd(t))throw Error(V(418));e=Nr(n.nextSibling);var r=$t;e&&oy(t,e)?G0(r,n):(t.flags=t.flags&-4097|2,Re=!1,$t=t)}}else{if(Yd(t))throw Error(V(418));t.flags=t.flags&-4097|2,Re=!1,$t=t}}}function ay(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$t=t}function Ol(t){if(t!==$t)return!1;if(!Re)return ay(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hd(t.type,t.memoizedProps)),e&&(e=zt)){if(Yd(t))throw K0(),Error(V(418));for(;e;)G0(t,e),e=Nr(e.nextSibling)}if(ay(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(V(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=Nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=$t?Nr(t.stateNode.nextSibling):null;return!0}function K0(){for(var t=zt;t;)t=Nr(t.nextSibling)}function Ss(){zt=$t=null,Re=!1}function Ep(t){hn===null?hn=[t]:hn.push(t)}var QR=cr.ReactCurrentBatchConfig;function wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,t))}return t}function Ml(t,e){throw t=Object.prototype.toString.call(e),Error(V(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ly(t){var e=t._init;return e(t._payload)}function Q0(t){function e(E,y){if(t){var R=E.deletions;R===null?(E.deletions=[y],E.flags|=16):R.push(y)}}function n(E,y){if(!t)return null;for(;y!==null;)e(E,y),y=y.sibling;return null}function r(E,y){for(E=new Map;y!==null;)y.key!==null?E.set(y.key,y):E.set(y.index,y),y=y.sibling;return E}function i(E,y){return E=Mr(E,y),E.index=0,E.sibling=null,E}function s(E,y,R){return E.index=R,t?(R=E.alternate,R!==null?(R=R.index,R<y?(E.flags|=2,y):R):(E.flags|=2,y)):(E.flags|=1048576,y)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,y,R,D){return y===null||y.tag!==6?(y=ed(R,E.mode,D),y.return=E,y):(y=i(y,R),y.return=E,y)}function u(E,y,R,D){var j=R.type;return j===Yi?d(E,y,R.props.children,D,R.key):y!==null&&(y.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===_r&&ly(j)===y.type)?(D=i(y,R.props),D.ref=wo(E,y,R),D.return=E,D):(D=su(R.type,R.key,R.props,null,E.mode,D),D.ref=wo(E,y,R),D.return=E,D)}function c(E,y,R,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==R.containerInfo||y.stateNode.implementation!==R.implementation?(y=td(R,E.mode,D),y.return=E,y):(y=i(y,R.children||[]),y.return=E,y)}function d(E,y,R,D,j){return y===null||y.tag!==7?(y=pi(R,E.mode,D,j),y.return=E,y):(y=i(y,R),y.return=E,y)}function f(E,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return y=ed(""+y,E.mode,R),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sl:return R=su(y.type,y.key,y.props,null,E.mode,R),R.ref=wo(E,null,y),R.return=E,R;case Qi:return y=td(y,E.mode,R),y.return=E,y;case _r:var D=y._init;return f(E,D(y._payload),R)}if(Po(y)||mo(y))return y=pi(y,E.mode,R,null),y.return=E,y;Ml(E,y)}return null}function m(E,y,R,D){var j=y!==null?y.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return j!==null?null:a(E,y,""+R,D);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Sl:return R.key===j?u(E,y,R,D):null;case Qi:return R.key===j?c(E,y,R,D):null;case _r:return j=R._init,m(E,y,j(R._payload),D)}if(Po(R)||mo(R))return j!==null?null:d(E,y,R,D,null);Ml(E,R)}return null}function w(E,y,R,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(R)||null,a(y,E,""+D,j);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Sl:return E=E.get(D.key===null?R:D.key)||null,u(y,E,D,j);case Qi:return E=E.get(D.key===null?R:D.key)||null,c(y,E,D,j);case _r:var F=D._init;return w(E,y,R,F(D._payload),j)}if(Po(D)||mo(D))return E=E.get(R)||null,d(y,E,D,j,null);Ml(y,D)}return null}function C(E,y,R,D){for(var j=null,F=null,T=y,v=y=0,I=null;T!==null&&v<R.length;v++){T.index>v?(I=T,T=null):I=T.sibling;var A=m(E,T,R[v],D);if(A===null){T===null&&(T=I);break}t&&T&&A.alternate===null&&e(E,T),y=s(A,y,v),F===null?j=A:F.sibling=A,F=A,T=I}if(v===R.length)return n(E,T),Re&&ni(E,v),j;if(T===null){for(;v<R.length;v++)T=f(E,R[v],D),T!==null&&(y=s(T,y,v),F===null?j=T:F.sibling=T,F=T);return Re&&ni(E,v),j}for(T=r(E,T);v<R.length;v++)I=w(T,E,v,R[v],D),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?v:I.key),y=s(I,y,v),F===null?j=I:F.sibling=I,F=I);return t&&T.forEach(function(x){return e(E,x)}),Re&&ni(E,v),j}function k(E,y,R,D){var j=mo(R);if(typeof j!="function")throw Error(V(150));if(R=j.call(R),R==null)throw Error(V(151));for(var F=j=null,T=y,v=y=0,I=null,A=R.next();T!==null&&!A.done;v++,A=R.next()){T.index>v?(I=T,T=null):I=T.sibling;var x=m(E,T,A.value,D);if(x===null){T===null&&(T=I);break}t&&T&&x.alternate===null&&e(E,T),y=s(x,y,v),F===null?j=x:F.sibling=x,F=x,T=I}if(A.done)return n(E,T),Re&&ni(E,v),j;if(T===null){for(;!A.done;v++,A=R.next())A=f(E,A.value,D),A!==null&&(y=s(A,y,v),F===null?j=A:F.sibling=A,F=A);return Re&&ni(E,v),j}for(T=r(E,T);!A.done;v++,A=R.next())A=w(T,E,v,A.value,D),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?v:A.key),y=s(A,y,v),F===null?j=A:F.sibling=A,F=A);return t&&T.forEach(function(P){return e(E,P)}),Re&&ni(E,v),j}function b(E,y,R,D){if(typeof R=="object"&&R!==null&&R.type===Yi&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Sl:e:{for(var j=R.key,F=y;F!==null;){if(F.key===j){if(j=R.type,j===Yi){if(F.tag===7){n(E,F.sibling),y=i(F,R.props.children),y.return=E,E=y;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===_r&&ly(j)===F.type){n(E,F.sibling),y=i(F,R.props),y.ref=wo(E,F,R),y.return=E,E=y;break e}n(E,F);break}else e(E,F);F=F.sibling}R.type===Yi?(y=pi(R.props.children,E.mode,D,R.key),y.return=E,E=y):(D=su(R.type,R.key,R.props,null,E.mode,D),D.ref=wo(E,y,R),D.return=E,E=D)}return o(E);case Qi:e:{for(F=R.key;y!==null;){if(y.key===F)if(y.tag===4&&y.stateNode.containerInfo===R.containerInfo&&y.stateNode.implementation===R.implementation){n(E,y.sibling),y=i(y,R.children||[]),y.return=E,E=y;break e}else{n(E,y);break}else e(E,y);y=y.sibling}y=td(R,E.mode,D),y.return=E,E=y}return o(E);case _r:return F=R._init,b(E,y,F(R._payload),D)}if(Po(R))return C(E,y,R,D);if(mo(R))return k(E,y,R,D);Ml(E,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,y!==null&&y.tag===6?(n(E,y.sibling),y=i(y,R),y.return=E,E=y):(n(E,y),y=ed(R,E.mode,D),y.return=E,E=y),o(E)):n(E,y)}return b}var Cs=Q0(!0),Y0=Q0(!1),xu=Qr(null),Pu=null,is=null,Tp=null;function Ip(){Tp=is=Pu=null}function Sp(t){var e=xu.current;Ae(xu),t._currentValue=e}function Jd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){Pu=t,Tp=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nt=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(Tp!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(Pu===null)throw Error(V(308));is=t,Pu.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var ai=null;function Cp(t){ai===null?ai=[t]:ai.push(t)}function X0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cp(e)):(n.next=i.next,i.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function Ap(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tr(t,n)}return i=r.interleaved,i===null?(e.next=e,Cp(r)):(e.next=i.next,i.next=e),r.interleaved=e,tr(t,n)}function Zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hp(t,n)}}function uy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nu(t,e,n,r){var i=t.updateQueue;yr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,w=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=t,k=a;switch(m=e,w=n,k.tag){case 1:if(C=k.payload,typeof C=="function"){f=C.call(w,f,m);break e}f=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=k.payload,m=typeof C=="function"?C.call(w,f,m):C,m==null)break e;f=Pe({},f,m);break e;case 2:yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=w,u=f):d=d.next=w,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wi|=o,t.lanes=o,t.memoizedState=f}}function cy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var ja={},Rn=Qr(ja),ha=Qr(ja),da=Qr(ja);function li(t){if(t===ja)throw Error(V(174));return t}function Rp(t,e){switch(ve(da,e),ve(ha,t),ve(Rn,ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bd(e,t)}Ae(Rn),ve(Rn,e)}function As(){Ae(Rn),Ae(ha),Ae(da)}function Z0(t){li(da.current);var e=li(Rn.current),n=bd(e,t.type);e!==n&&(ve(ha,t),ve(Rn,n))}function kp(t){ha.current===t&&(Ae(Rn),Ae(ha))}var ke=Qr(0);function bu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kh=[];function xp(){for(var t=0;t<Kh.length;t++)Kh[t]._workInProgressVersionPrimary=null;Kh.length=0}var eu=cr.ReactCurrentDispatcher,Qh=cr.ReactCurrentBatchConfig,vi=0,xe=null,Be=null,Ge=null,Du=!1,zo=!1,fa=0,YR=0;function ht(){throw Error(V(321))}function Pp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yn(t[n],e[n]))return!1;return!0}function Np(t,e,n,r,i,s){if(vi=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,eu.current=t===null||t.memoizedState===null?ek:tk,t=n(r,i),zo){s=0;do{if(zo=!1,fa=0,25<=s)throw Error(V(301));s+=1,Ge=Be=null,e.updateQueue=null,eu.current=nk,t=n(r,i)}while(zo)}if(eu.current=Ou,e=Be!==null&&Be.next!==null,vi=0,Ge=Be=xe=null,Du=!1,e)throw Error(V(300));return t}function bp(){var t=fa!==0;return fa=0,t}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?xe.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function rn(){if(Be===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Ge===null?xe.memoizedState:Ge.next;if(e!==null)Ge=e,Be=t;else{if(t===null)throw Error(V(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ge===null?xe.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function pa(t,e){return typeof e=="function"?e(t):e}function Yh(t){var e=rn(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((vi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,xe.lanes|=d,wi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,yn(r,e.memoizedState)||(Nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,wi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xh(t){var e=rn(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);yn(s,e.memoizedState)||(Nt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function eE(){}function tE(t,e){var n=xe,r=rn(),i=e(),s=!yn(r.memoizedState,i);if(s&&(r.memoizedState=i,Nt=!0),r=r.queue,Dp(iE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,ma(9,rE.bind(null,n,r,i,e),void 0,null),Ye===null)throw Error(V(349));vi&30||nE(n,e,i)}return i}function nE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rE(t,e,n,r){e.value=n,e.getSnapshot=r,sE(e)&&oE(t)}function iE(t,e,n){return n(function(){sE(e)&&oE(t)})}function sE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yn(t,n)}catch{return!0}}function oE(t){var e=tr(t,1);e!==null&&pn(e,t,1,-1)}function hy(t){var e=In();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},e.queue=t,t=t.dispatch=ZR.bind(null,xe,t),[e.memoizedState,t]}function ma(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function aE(){return rn().memoizedState}function tu(t,e,n,r){var i=In();xe.flags|=t,i.memoizedState=ma(1|e,n,void 0,r===void 0?null:r)}function Ec(t,e,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(Be!==null){var o=Be.memoizedState;if(s=o.destroy,r!==null&&Pp(r,o.deps)){i.memoizedState=ma(e,n,s,r);return}}xe.flags|=t,i.memoizedState=ma(1|e,n,s,r)}function dy(t,e){return tu(8390656,8,t,e)}function Dp(t,e){return Ec(2048,8,t,e)}function lE(t,e){return Ec(4,2,t,e)}function uE(t,e){return Ec(4,4,t,e)}function cE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hE(t,e,n){return n=n!=null?n.concat([t]):null,Ec(4,4,cE.bind(null,e,t),n)}function Op(){}function dE(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fE(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function pE(t,e,n){return vi&21?(yn(n,e)||(n=v0(),xe.lanes|=n,wi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nt=!0),t.memoizedState=n)}function XR(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Qh.transition;Qh.transition={};try{t(!1),e()}finally{pe=n,Qh.transition=r}}function mE(){return rn().memoizedState}function JR(t,e,n){var r=Or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gE(t))_E(e,n);else if(n=X0(t,e,n,r),n!==null){var i=At();pn(n,t,r,i),yE(n,e,r)}}function ZR(t,e,n){var r=Or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gE(t))_E(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,yn(a,o)){var u=e.interleaved;u===null?(i.next=i,Cp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=X0(t,e,i,r),n!==null&&(i=At(),pn(n,t,r,i),yE(n,e,r))}}function gE(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function _E(t,e){zo=Du=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hp(t,n)}}var Ou={readContext:nn,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},ek={readContext:nn,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:dy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tu(4194308,4,cE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tu(4194308,4,t,e)},useInsertionEffect:function(t,e){return tu(4,2,t,e)},useMemo:function(t,e){var n=In();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=In();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=JR.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:hy,useDebugValue:Op,useDeferredValue:function(t){return In().memoizedState=t},useTransition:function(){var t=hy(!1),e=t[0];return t=XR.bind(null,t[1]),In().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=In();if(Re){if(n===void 0)throw Error(V(407));n=n()}else{if(n=e(),Ye===null)throw Error(V(349));vi&30||nE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,dy(iE.bind(null,r,s,t),[t]),r.flags|=2048,ma(9,rE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=In(),e=Ye.identifierPrefix;if(Re){var n=qn,r=Wn;n=(r&~(1<<32-fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tk={readContext:nn,useCallback:dE,useContext:nn,useEffect:Dp,useImperativeHandle:hE,useInsertionEffect:lE,useLayoutEffect:uE,useMemo:fE,useReducer:Yh,useRef:aE,useState:function(){return Yh(pa)},useDebugValue:Op,useDeferredValue:function(t){var e=rn();return pE(e,Be.memoizedState,t)},useTransition:function(){var t=Yh(pa)[0],e=rn().memoizedState;return[t,e]},useMutableSource:eE,useSyncExternalStore:tE,useId:mE,unstable_isNewReconciler:!1},nk={readContext:nn,useCallback:dE,useContext:nn,useEffect:Dp,useImperativeHandle:hE,useInsertionEffect:lE,useLayoutEffect:uE,useMemo:fE,useReducer:Xh,useRef:aE,useState:function(){return Xh(pa)},useDebugValue:Op,useDeferredValue:function(t){var e=rn();return Be===null?e.memoizedState=t:pE(e,Be.memoizedState,t)},useTransition:function(){var t=Xh(pa)[0],e=rn().memoizedState;return[t,e]},useMutableSource:eE,useSyncExternalStore:tE,useId:mE,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tc={isMounted:function(t){return(t=t._reactInternals)?Di(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),i=Or(t),s=Xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=br(t,s,i),e!==null&&(pn(e,t,i,r),Zl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),i=Or(t),s=Xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=br(t,s,i),e!==null&&(pn(e,t,i,r),Zl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=Or(t),i=Xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=br(t,i,r),e!==null&&(pn(e,t,r,n),Zl(e,t,r))}};function fy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!aa(n,r)||!aa(i,s):!0}function vE(t,e,n){var r=!1,i=Br,s=e.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=Ot(e)?_i:vt.current,r=e.contextTypes,s=(r=r!=null)?Is(t,i):Br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function py(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tc.enqueueReplaceState(e,e.state,null)}function ef(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ap(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=Ot(e)?_i:vt.current,i.context=Is(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tc.enqueueReplaceState(i,i.state,null),Nu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e){try{var n="",r=e;do n+=PA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Jh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function tf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var rk=typeof WeakMap=="function"?WeakMap:Map;function wE(t,e,n){n=Xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Lu||(Lu=!0,df=r),tf(t,e)},n}function EE(t,e,n){n=Xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){tf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){tf(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function my(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new rk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=_k.bind(null,t,e,n),e.then(t,t))}function gy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _y(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xn(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var ik=cr.ReactCurrentOwner,Nt=!1;function It(t,e,n,r){e.child=t===null?Y0(e,null,n,r):Cs(e,t.child,n,r)}function yy(t,e,n,r,i){n=n.render;var s=e.ref;return fs(e,i),r=Np(t,e,n,r,s,i),n=bp(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Re&&n&&vp(e),e.flags|=1,It(t,e,r,i),e.child)}function vy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Bp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,TE(t,e,s,r,i)):(t=su(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,r)&&t.ref===e.ref)return nr(t,e,i)}return e.flags|=1,t=Mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function TE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(aa(s,r)&&t.ref===e.ref)if(Nt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Nt=!0);else return e.lanes=t.lanes,nr(t,e,i)}return nf(t,e,n,r,i)}function IE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(os,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(os,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(os,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(os,Ut),Ut|=r;return It(t,e,i,n),e.child}function SE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nf(t,e,n,r,i){var s=Ot(n)?_i:vt.current;return s=Is(e,s),fs(e,i),n=Np(t,e,n,r,s,i),r=bp(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Re&&r&&vp(e),e.flags|=1,It(t,e,n,i),e.child)}function wy(t,e,n,r,i){if(Ot(n)){var s=!0;Au(e)}else s=!1;if(fs(e,i),e.stateNode===null)nu(t,e),vE(e,n,r),ef(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=nn(c):(c=Ot(n)?_i:vt.current,c=Is(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&py(e,o,r,c),yr=!1;var m=e.memoizedState;o.state=m,Nu(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Dt.current||yr?(typeof d=="function"&&(Zd(e,n,d,r),u=e.memoizedState),(a=yr||fy(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,J0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:un(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=nn(u):(u=Ot(n)?_i:vt.current,u=Is(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&py(e,o,r,u),yr=!1,m=e.memoizedState,o.state=m,Nu(e,r,o,i);var C=e.memoizedState;a!==f||m!==C||Dt.current||yr?(typeof w=="function"&&(Zd(e,n,w,r),C=e.memoizedState),(c=yr||fy(e,n,c,r,m,C,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return rf(t,e,n,r,s,i)}function rf(t,e,n,r,i,s){SE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sy(e,n,!1),nr(t,e,s);r=e.stateNode,ik.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Cs(e,t.child,null,s),e.child=Cs(e,null,a,s)):It(t,e,a,s),e.memoizedState=r.state,i&&sy(e,n,!0),e.child}function CE(t){var e=t.stateNode;e.pendingContext?iy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&iy(t,e.context,!1),Rp(t,e.containerInfo)}function Ey(t,e,n,r,i){return Ss(),Ep(i),e.flags|=256,It(t,e,n,r),e.child}var sf={dehydrated:null,treeContext:null,retryLane:0};function of(t){return{baseLanes:t,cachePool:null,transitions:null}}function AE(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(ke,i&1),t===null)return Xd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cc(o,r,0,null),t=pi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=of(n),e.memoizedState=sf,t):Mp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return sk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Mr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Mr(a,s):(s=pi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?of(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sf,r}return s=t.child,t=s.sibling,r=Mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Mp(t,e){return e=Cc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ll(t,e,n,r){return r!==null&&Ep(r),Cs(e,t.child,null,n),t=Mp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Jh(Error(V(422))),Ll(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Cc({mode:"visible",children:r.children},i,0,null),s=pi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Cs(e,t.child,null,o),e.child.memoizedState=of(o),e.memoizedState=sf,s);if(!(e.mode&1))return Ll(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(V(419)),r=Jh(s,r,void 0),Ll(t,e,o,r)}if(a=(o&t.childLanes)!==0,Nt||a){if(r=Ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),pn(r,t,i,-1))}return zp(),r=Jh(Error(V(421))),Ll(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=yk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,zt=Nr(i.nextSibling),$t=e,Re=!0,hn=null,t!==null&&(Yt[Xt++]=Wn,Yt[Xt++]=qn,Yt[Xt++]=yi,Wn=t.id,qn=t.overflow,yi=e),e=Mp(e,r.children),e.flags|=4096,e)}function Ty(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Jd(t.return,e,n)}function Zh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function RE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(It(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ty(t,n,e);else if(t.tag===19)Ty(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Zh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Zh(e,!0,n,null,s);break;case"together":Zh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(V(153));if(e.child!==null){for(t=e.child,n=Mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ok(t,e,n){switch(e.tag){case 3:CE(e),Ss();break;case 5:Z0(e);break;case 1:Ot(e.type)&&Au(e);break;case 4:Rp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?AE(t,e,n):(ve(ke,ke.current&1),t=nr(t,e,n),t!==null?t.sibling:null);ve(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return RE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,IE(t,e,n)}return nr(t,e,n)}var kE,af,xE,PE;kE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};af=function(){};xE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,li(Rn.current);var s=null;switch(n){case"input":i=kd(t,i),r=kd(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=Nd(t,i),r=Nd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Su)}Dd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ea.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ea.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ie("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};PE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Eo(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ak(t,e,n){var r=e.pendingProps;switch(wp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return Ot(e.type)&&Cu(),dt(e),null;case 3:return r=e.stateNode,As(),Ae(Dt),Ae(vt),xp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(mf(hn),hn=null))),af(t,e),dt(e),null;case 5:kp(e);var i=li(da.current);if(n=e.type,t!==null&&e.stateNode!=null)xE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(V(166));return dt(e),null}if(t=li(Rn.current),Ol(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sn]=e,r[ca]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<bo.length;i++)Ie(bo[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":N_(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":D_(r,s),Ie("invalid",r)}Dd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Dl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Dl(r.textContent,a,t),i=["children",""+a]):ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":Cl(r),b_(r,s,!0);break;case"textarea":Cl(r),O_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Su)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[ca]=r,kE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Od(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<bo.length;i++)Ie(bo[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":N_(t,r),i=kd(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":D_(t,r),i=Nd(t,r),Ie("invalid",t);break;default:i=r}Dd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?a0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&s0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ta(t,u):typeof u=="number"&&ta(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ie("scroll",t):u!=null&&sp(t,s,u,o))}switch(n){case"input":Cl(t),b_(t,r,!1);break;case"textarea":Cl(t),O_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?us(t,!!r.multiple,s,!1):r.defaultValue!=null&&us(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Su)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)PE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(V(166));if(n=li(da.current),li(Rn.current),Ol(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(s=r.nodeValue!==n)&&(t=$t,t!==null))switch(t.tag){case 3:Dl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Dl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return dt(e),null;case 13:if(Ae(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&zt!==null&&e.mode&1&&!(e.flags&128))K0(),Ss(),e.flags|=98560,s=!1;else if(s=Ol(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(V(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(V(317));s[Sn]=e}else Ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),s=!1}else hn!==null&&(mf(hn),hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?$e===0&&($e=3):zp())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return As(),af(t,e),t===null&&la(e.stateNode.containerInfo),dt(e),null;case 10:return Sp(e.type._context),dt(e),null;case 17:return Ot(e.type)&&Cu(),dt(e),null;case 19:if(Ae(ke),s=e.memoizedState,s===null)return dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Eo(s,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bu(t),o!==null){for(e.flags|=128,Eo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>ks&&(e.flags|=128,r=!0,Eo(s,!1),e.lanes=4194304)}else{if(!r)if(t=bu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return dt(e),null}else 2*Me()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,r=!0,Eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=ke.current,ve(ke,r?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return Up(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error(V(156,e.tag))}function lk(t,e){switch(wp(e),e.tag){case 1:return Ot(e.type)&&Cu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return As(),Ae(Dt),Ae(vt),xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kp(e),null;case 13:if(Ae(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(V(340));Ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(ke),null;case 4:return As(),null;case 10:return Sp(e.type._context),null;case 22:case 23:return Up(),null;case 24:return null;default:return null}}var Vl=!1,mt=!1,uk=typeof WeakSet=="function"?WeakSet:Set,q=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function lf(t,e,n){try{n()}catch(r){be(t,e,r)}}var Iy=!1;function ck(t,e){if(Wd=Eu,t=M0(),yp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)m=f,f=w;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(w=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(qd={focusedElem:t,selectionRange:n},Eu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var k=C.memoizedProps,b=C.memoizedState,E=e.stateNode,y=E.getSnapshotBeforeUpdate(e.elementType===e.type?k:un(e.type,k),b);E.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(D){be(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return C=Iy,Iy=!1,C}function Bo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&lf(e,n,s)}i=i.next}while(i!==r)}}function Ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function uf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function NE(t){var e=t.alternate;e!==null&&(t.alternate=null,NE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[ca],delete e[Kd],delete e[HR],delete e[GR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bE(t){return t.tag===5||t.tag===3||t.tag===4}function Sy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Su));else if(r!==4&&(t=t.child,t!==null))for(cf(t,e,n),t=t.sibling;t!==null;)cf(t,e,n),t=t.sibling}function hf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(hf(t,e,n),t=t.sibling;t!==null;)hf(t,e,n),t=t.sibling}var Ze=null,cn=!1;function mr(t,e,n){for(n=n.child;n!==null;)DE(t,e,n),n=n.sibling}function DE(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(mc,n)}catch{}switch(n.tag){case 5:mt||ss(n,e);case 6:var r=Ze,i=cn;Ze=null,mr(t,e,n),Ze=r,cn=i,Ze!==null&&(cn?(t=Ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(cn?(t=Ze,n=n.stateNode,t.nodeType===8?Hh(t.parentNode,n):t.nodeType===1&&Hh(t,n),sa(t)):Hh(Ze,n.stateNode));break;case 4:r=Ze,i=cn,Ze=n.stateNode.containerInfo,cn=!0,mr(t,e,n),Ze=r,cn=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lf(n,e,o),i=i.next}while(i!==r)}mr(t,e,n);break;case 1:if(!mt&&(ss(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,e,a)}mr(t,e,n);break;case 21:mr(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,mr(t,e,n),mt=r):mr(t,e,n);break;default:mr(t,e,n)}}function Cy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uk),e.forEach(function(r){var i=vk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ze=a.stateNode,cn=!1;break e;case 3:Ze=a.stateNode.containerInfo,cn=!0;break e;case 4:Ze=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(Ze===null)throw Error(V(160));DE(s,o,i),Ze=null,cn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)OE(e,t),e=e.sibling}function OE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),En(t),r&4){try{Bo(3,t,t.return),Ic(3,t)}catch(k){be(t,t.return,k)}try{Bo(5,t,t.return)}catch(k){be(t,t.return,k)}}break;case 1:ln(e,t),En(t),r&512&&n!==null&&ss(n,n.return);break;case 5:if(ln(e,t),En(t),r&512&&n!==null&&ss(n,n.return),t.flags&32){var i=t.stateNode;try{ta(i,"")}catch(k){be(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&n0(i,s),Od(a,o);var c=Od(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?a0(i,f):d==="dangerouslySetInnerHTML"?s0(i,f):d==="children"?ta(i,f):sp(i,d,f,c)}switch(a){case"input":xd(i,s);break;case"textarea":r0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?us(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?us(i,!!s.multiple,s.defaultValue,!0):us(i,!!s.multiple,s.multiple?[]:"",!1))}i[ca]=s}catch(k){be(t,t.return,k)}}break;case 6:if(ln(e,t),En(t),r&4){if(t.stateNode===null)throw Error(V(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){be(t,t.return,k)}}break;case 3:if(ln(e,t),En(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(k){be(t,t.return,k)}break;case 4:ln(e,t),En(t);break;case 13:ln(e,t),En(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Fp=Me())),r&4&&Cy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(c=mt)||d,ln(e,t),mt=c):ln(e,t),En(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(f=q=d;q!==null;){switch(m=q,w=m.child,m.tag){case 0:case 11:case 14:case 15:Bo(4,m,m.return);break;case 1:ss(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(k){be(r,n,k)}}break;case 5:ss(m,m.return);break;case 22:if(m.memoizedState!==null){Ry(f);continue}}w!==null?(w.return=m,q=w):Ry(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=o0("display",o))}catch(k){be(t,t.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){be(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ln(e,t),En(t),r&4&&Cy(t);break;case 21:break;default:ln(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bE(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ta(i,""),r.flags&=-33);var s=Sy(t);hf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Sy(t);cf(t,a,o);break;default:throw Error(V(161))}}catch(u){be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hk(t,e,n){q=t,ME(t)}function ME(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Vl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||mt;a=Vl;var c=mt;if(Vl=o,(mt=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?ky(i):u!==null?(u.return=o,q=u):ky(i);for(;s!==null;)q=s,ME(s),s=s.sibling;q=i,Vl=a,mt=c}Ay(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Ay(t)}}function Ay(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||Ic(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&sa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}mt||e.flags&512&&uf(e)}catch(m){be(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Ry(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function ky(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ic(4,e)}catch(u){be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){be(e,i,u)}}var s=e.return;try{uf(e)}catch(u){be(e,s,u)}break;case 5:var o=e.return;try{uf(e)}catch(u){be(e,o,u)}}}catch(u){be(e,e.return,u)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var dk=Math.ceil,Mu=cr.ReactCurrentDispatcher,Lp=cr.ReactCurrentOwner,tn=cr.ReactCurrentBatchConfig,ce=0,Ye=null,je=null,it=0,Ut=0,os=Qr(0),$e=0,ga=null,wi=0,Sc=0,Vp=0,$o=null,Pt=null,Fp=0,ks=1/0,Un=null,Lu=!1,df=null,Dr=null,Fl=!1,Ar=null,Vu=0,Wo=0,ff=null,ru=-1,iu=0;function At(){return ce&6?Me():ru!==-1?ru:ru=Me()}function Or(t){return t.mode&1?ce&2&&it!==0?it&-it:QR.transition!==null?(iu===0&&(iu=v0()),iu):(t=pe,t!==0||(t=window.event,t=t===void 0?16:A0(t.type)),t):1}function pn(t,e,n,r){if(50<Wo)throw Wo=0,ff=null,Error(V(185));La(t,n,r),(!(ce&2)||t!==Ye)&&(t===Ye&&(!(ce&2)&&(Sc|=n),$e===4&&wr(t,it)),Mt(t,r),n===1&&ce===0&&!(e.mode&1)&&(ks=Me()+500,wc&&Yr()))}function Mt(t,e){var n=t.callbackNode;QA(t,e);var r=wu(t,t===Ye?it:0);if(r===0)n!==null&&V_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&V_(n),e===1)t.tag===0?KR(xy.bind(null,t)):q0(xy.bind(null,t)),WR(function(){!(ce&6)&&Yr()}),n=null;else{switch(w0(r)){case 1:n=cp;break;case 4:n=_0;break;case 16:n=vu;break;case 536870912:n=y0;break;default:n=vu}n=$E(n,LE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function LE(t,e){if(ru=-1,iu=0,ce&6)throw Error(V(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var r=wu(t,t===Ye?it:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fu(t,r);else{e=r;var i=ce;ce|=2;var s=FE();(Ye!==t||it!==e)&&(Un=null,ks=Me()+500,fi(t,e));do try{mk();break}catch(a){VE(t,a)}while(!0);Ip(),Mu.current=s,ce=i,je!==null?e=0:(Ye=null,it=0,e=$e)}if(e!==0){if(e===2&&(i=jd(t),i!==0&&(r=i,e=pf(t,i))),e===1)throw n=ga,fi(t,0),wr(t,r),Mt(t,Me()),n;if(e===6)wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!fk(i)&&(e=Fu(t,r),e===2&&(s=jd(t),s!==0&&(r=s,e=pf(t,s))),e===1))throw n=ga,fi(t,0),wr(t,r),Mt(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(V(345));case 2:ri(t,Pt,Un);break;case 3:if(wr(t,r),(r&130023424)===r&&(e=Fp+500-Me(),10<e)){if(wu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Gd(ri.bind(null,t,Pt,Un),e);break}ri(t,Pt,Un);break;case 4:if(wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dk(r/1960))-r,10<r){t.timeoutHandle=Gd(ri.bind(null,t,Pt,Un),r);break}ri(t,Pt,Un);break;case 5:ri(t,Pt,Un);break;default:throw Error(V(329))}}}return Mt(t,Me()),t.callbackNode===n?LE.bind(null,t):null}function pf(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(fi(t,e).flags|=256),t=Fu(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&mf(e)),t}function mf(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function fk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wr(t,e){for(e&=~Vp,e&=~Sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fn(e),r=1<<n;t[n]=-1,e&=~r}}function xy(t){if(ce&6)throw Error(V(327));ps();var e=wu(t,0);if(!(e&1))return Mt(t,Me()),null;var n=Fu(t,e);if(t.tag!==0&&n===2){var r=jd(t);r!==0&&(e=r,n=pf(t,r))}if(n===1)throw n=ga,fi(t,0),wr(t,e),Mt(t,Me()),n;if(n===6)throw Error(V(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ri(t,Pt,Un),Mt(t,Me()),null}function jp(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(ks=Me()+500,wc&&Yr())}}function Ei(t){Ar!==null&&Ar.tag===0&&!(ce&6)&&ps();var e=ce;ce|=1;var n=tn.transition,r=pe;try{if(tn.transition=null,pe=1,t)return t()}finally{pe=r,tn.transition=n,ce=e,!(ce&6)&&Yr()}}function Up(){Ut=os.current,Ae(os)}function fi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$R(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(wp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cu();break;case 3:As(),Ae(Dt),Ae(vt),xp();break;case 5:kp(r);break;case 4:As();break;case 13:Ae(ke);break;case 19:Ae(ke);break;case 10:Sp(r.type._context);break;case 22:case 23:Up()}n=n.return}if(Ye=t,je=t=Mr(t.current,null),it=Ut=e,$e=0,ga=null,Vp=Sc=wi=0,Pt=$o=null,ai!==null){for(e=0;e<ai.length;e++)if(n=ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ai=null}return t}function VE(t,e){do{var n=je;try{if(Ip(),eu.current=Ou,Du){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Du=!1}if(vi=0,Ge=Be=xe=null,zo=!1,fa=0,Lp.current=null,n===null||n.return===null){$e=1,ga=e,je=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=it,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=gy(o);if(w!==null){w.flags&=-257,_y(w,o,a,s,e),w.mode&1&&my(s,c,e),e=w,u=c;var C=e.updateQueue;if(C===null){var k=new Set;k.add(u),e.updateQueue=k}else C.add(u);break e}else{if(!(e&1)){my(s,c,e),zp();break e}u=Error(V(426))}}else if(Re&&a.mode&1){var b=gy(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),_y(b,o,a,s,e),Ep(Rs(u,a));break e}}s=u=Rs(u,a),$e!==4&&($e=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=wE(s,u,e);uy(s,E);break e;case 1:a=u;var y=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(Dr===null||!Dr.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=EE(s,a,e);uy(s,D);break e}}s=s.return}while(s!==null)}UE(n)}catch(j){e=j,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function FE(){var t=Mu.current;return Mu.current=Ou,t===null?Ou:t}function zp(){($e===0||$e===3||$e===2)&&($e=4),Ye===null||!(wi&268435455)&&!(Sc&268435455)||wr(Ye,it)}function Fu(t,e){var n=ce;ce|=2;var r=FE();(Ye!==t||it!==e)&&(Un=null,fi(t,e));do try{pk();break}catch(i){VE(t,i)}while(!0);if(Ip(),ce=n,Mu.current=r,je!==null)throw Error(V(261));return Ye=null,it=0,$e}function pk(){for(;je!==null;)jE(je)}function mk(){for(;je!==null&&!UA();)jE(je)}function jE(t){var e=BE(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?UE(t):je=e,Lp.current=null}function UE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lk(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,je=null;return}}else if(n=ak(n,e,Ut),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);$e===0&&($e=5)}function ri(t,e,n){var r=pe,i=tn.transition;try{tn.transition=null,pe=1,gk(t,e,n,r)}finally{tn.transition=i,pe=r}return null}function gk(t,e,n,r){do ps();while(Ar!==null);if(ce&6)throw Error(V(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(V(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(YA(t,s),t===Ye&&(je=Ye=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fl||(Fl=!0,$E(vu,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var o=pe;pe=1;var a=ce;ce|=4,Lp.current=null,ck(t,n),OE(n,t),LR(qd),Eu=!!Wd,qd=Wd=null,t.current=n,hk(n),zA(),ce=a,pe=o,tn.transition=s}else t.current=n;if(Fl&&(Fl=!1,Ar=t,Vu=i),s=t.pendingLanes,s===0&&(Dr=null),WA(n.stateNode),Mt(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Lu)throw Lu=!1,t=df,df=null,t;return Vu&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===ff?Wo++:(Wo=0,ff=t):Wo=0,Yr(),null}function ps(){if(Ar!==null){var t=w0(Vu),e=tn.transition,n=pe;try{if(tn.transition=null,pe=16>t?16:t,Ar===null)var r=!1;else{if(t=Ar,Ar=null,Vu=0,ce&6)throw Error(V(331));var i=ce;for(ce|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:Bo(8,d,s)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var m=d.sibling,w=d.return;if(NE(d),d===c){q=null;break}if(m!==null){m.return=w,q=m;break}q=w}}}var C=s.alternate;if(C!==null){var k=C.child;if(k!==null){C.child=null;do{var b=k.sibling;k.sibling=null,k=b}while(k!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bo(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,q=E;break e}q=s.return}}var y=t.current;for(q=y;q!==null;){o=q;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,q=R;else e:for(o=y;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ic(9,a)}}catch(j){be(a,a.return,j)}if(a===o){q=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,q=D;break e}q=a.return}}if(ce=i,Yr(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(mc,t)}catch{}r=!0}return r}finally{pe=n,tn.transition=e}}return!1}function Py(t,e,n){e=Rs(n,e),e=wE(t,e,1),t=br(t,e,1),e=At(),t!==null&&(La(t,1,e),Mt(t,e))}function be(t,e,n){if(t.tag===3)Py(t,t,n);else for(;e!==null;){if(e.tag===3){Py(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=Rs(n,t),t=EE(e,t,1),e=br(e,t,1),t=At(),e!==null&&(La(e,1,t),Mt(e,t));break}}e=e.return}}function _k(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,Ye===t&&(it&n)===n&&($e===4||$e===3&&(it&130023424)===it&&500>Me()-Fp?fi(t,0):Vp|=n),Mt(t,e)}function zE(t,e){e===0&&(t.mode&1?(e=kl,kl<<=1,!(kl&130023424)&&(kl=4194304)):e=1);var n=At();t=tr(t,e),t!==null&&(La(t,e,n),Mt(t,n))}function yk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zE(t,n)}function vk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(e),zE(t,n)}var BE;BE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Dt.current)Nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nt=!1,ok(t,e,n);Nt=!!(t.flags&131072)}else Nt=!1,Re&&e.flags&1048576&&H0(e,ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;nu(t,e),t=e.pendingProps;var i=Is(e,vt.current);fs(e,n),i=Np(null,e,r,t,i,n);var s=bp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(r)?(s=!0,Au(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ap(e),i.updater=Tc,e.stateNode=i,i._reactInternals=e,ef(e,r,t,n),e=rf(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&vp(e),It(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(nu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ek(r),t=un(r,t),i){case 0:e=nf(null,e,r,t,n);break e;case 1:e=wy(null,e,r,t,n);break e;case 11:e=yy(null,e,r,t,n);break e;case 14:e=vy(null,e,r,un(r.type,t),n);break e}throw Error(V(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),nf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),wy(t,e,r,i,n);case 3:e:{if(CE(e),t===null)throw Error(V(387));r=e.pendingProps,s=e.memoizedState,i=s.element,J0(t,e),Nu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Rs(Error(V(423)),e),e=Ey(t,e,r,n,i);break e}else if(r!==i){i=Rs(Error(V(424)),e),e=Ey(t,e,r,n,i);break e}else for(zt=Nr(e.stateNode.containerInfo.firstChild),$t=e,Re=!0,hn=null,n=Y0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ss(),r===i){e=nr(t,e,n);break e}It(t,e,r,n)}e=e.child}return e;case 5:return Z0(e),t===null&&Xd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hd(r,i)?o=null:s!==null&&Hd(r,s)&&(e.flags|=32),SE(t,e),It(t,e,o,n),e.child;case 6:return t===null&&Xd(e),null;case 13:return AE(t,e,n);case 4:return Rp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Cs(e,null,r,n):It(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),yy(t,e,r,i,n);case 7:return It(t,e,e.pendingProps,n),e.child;case 8:return It(t,e,e.pendingProps.children,n),e.child;case 12:return It(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(xu,r._currentValue),r._currentValue=o,s!==null)if(yn(s.value,o)){if(s.children===i.children&&!Dt.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Xn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Jd(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(V(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Jd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}It(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,fs(e,n),i=nn(i),r=r(i),e.flags|=1,It(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),vy(t,e,r,i,n);case 15:return TE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),nu(t,e),e.tag=1,Ot(r)?(t=!0,Au(e)):t=!1,fs(e,n),vE(e,r,i),ef(e,r,i,n),rf(null,e,r,!0,t,n);case 19:return RE(t,e,n);case 22:return IE(t,e,n)}throw Error(V(156,e.tag))};function $E(t,e){return g0(t,e)}function wk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new wk(t,e,n,r)}function Bp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ek(t){if(typeof t=="function")return Bp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ap)return 11;if(t===lp)return 14}return 2}function Mr(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function su(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Bp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yi:return pi(n.children,i,s,e);case op:o=8,i|=8;break;case Sd:return t=Jt(12,n,e,i|2),t.elementType=Sd,t.lanes=s,t;case Cd:return t=Jt(13,n,e,i),t.elementType=Cd,t.lanes=s,t;case Ad:return t=Jt(19,n,e,i),t.elementType=Ad,t.lanes=s,t;case Zw:return Cc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xw:o=10;break e;case Jw:o=9;break e;case ap:o=11;break e;case lp:o=14;break e;case _r:o=16,r=null;break e}throw Error(V(130,t==null?t:typeof t,""))}return e=Jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function pi(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function Cc(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=Zw,t.lanes=n,t.stateNode={isHidden:!1},t}function ed(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function td(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Tk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mh(0),this.expirationTimes=Mh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $p(t,e,n,r,i,s,o,a,u){return t=new Tk(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ap(s),t}function Ik(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function WE(t){if(!t)return Br;t=t._reactInternals;e:{if(Di(t)!==t||t.tag!==1)throw Error(V(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(V(171))}if(t.tag===1){var n=t.type;if(Ot(n))return W0(t,n,e)}return e}function qE(t,e,n,r,i,s,o,a,u){return t=$p(n,r,!0,t,i,s,o,a,u),t.context=WE(null),n=t.current,r=At(),i=Or(n),s=Xn(r,i),s.callback=e??null,br(n,s,i),t.current.lanes=i,La(t,i,r),Mt(t,r),t}function Ac(t,e,n,r){var i=e.current,s=At(),o=Or(i);return n=WE(n),e.context===null?e.context=n:e.pendingContext=n,e=Xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=br(i,e,o),t!==null&&(pn(t,i,o,s),Zl(t,i,o)),o}function ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ny(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wp(t,e){Ny(t,e),(t=t.alternate)&&Ny(t,e)}function Sk(){return null}var HE=typeof reportError=="function"?reportError:function(t){console.error(t)};function qp(t){this._internalRoot=t}Rc.prototype.render=qp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(V(409));Ac(t,e,null,null)};Rc.prototype.unmount=qp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ei(function(){Ac(null,t,null,null)}),e[er]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=I0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&C0(t)}};function Hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function by(){}function Ck(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ju(o);s.call(c)}}var o=qE(e,r,t,0,null,!1,!1,"",by);return t._reactRootContainer=o,t[er]=o.current,la(t.nodeType===8?t.parentNode:t),Ei(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ju(u);a.call(c)}}var u=$p(t,0,!1,null,null,!1,!1,"",by);return t._reactRootContainer=u,t[er]=u.current,la(t.nodeType===8?t.parentNode:t),Ei(function(){Ac(e,u,n,r)}),u}function xc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ju(o);a.call(u)}}Ac(e,o,t,i)}else o=Ck(n,e,t,i,r);return ju(o)}E0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=No(e.pendingLanes);n!==0&&(hp(e,n|1),Mt(e,Me()),!(ce&6)&&(ks=Me()+500,Yr()))}break;case 13:Ei(function(){var r=tr(t,1);if(r!==null){var i=At();pn(r,t,1,i)}}),Wp(t,1)}};dp=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=At();pn(e,t,134217728,n)}Wp(t,134217728)}};T0=function(t){if(t.tag===13){var e=Or(t),n=tr(t,e);if(n!==null){var r=At();pn(n,t,e,r)}Wp(t,e)}};I0=function(){return pe};S0=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Ld=function(t,e,n){switch(e){case"input":if(xd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vc(r);if(!i)throw Error(V(90));t0(r),xd(r,i)}}}break;case"textarea":r0(t,n);break;case"select":e=n.value,e!=null&&us(t,!!n.multiple,e,!1)}};c0=jp;h0=Ei;var Ak={usingClientEntryPoint:!1,Events:[Fa,es,vc,l0,u0,jp]},To={findFiberByHostInstance:oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rk={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=p0(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||Sk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{mc=jl.inject(Rk),An=jl}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ak;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hp(e))throw Error(V(200));return Ik(t,e,null,n)};Gt.createRoot=function(t,e){if(!Hp(t))throw Error(V(299));var n=!1,r="",i=HE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$p(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,la(t.nodeType===8?t.parentNode:t),new qp(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(V(188)):(t=Object.keys(t).join(","),Error(V(268,t)));return t=p0(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return Ei(t)};Gt.hydrate=function(t,e,n){if(!kc(e))throw Error(V(200));return xc(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!Hp(t))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=HE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qE(e,null,t,1,n??null,i,!1,s,o),t[er]=e.current,la(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rc(e)};Gt.render=function(t,e,n){if(!kc(e))throw Error(V(200));return xc(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!kc(t))throw Error(V(40));return t._reactRootContainer?(Ei(function(){xc(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Gt.unstable_batchedUpdates=jp;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kc(n))throw Error(V(200));if(t==null||t._reactInternals===void 0)throw Error(V(38));return xc(t,e,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426";function GE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(GE)}catch(t){console.error(t)}}GE(),Gw.exports=Gt;var kk=Gw.exports,KE,Dy=kk;KE=Dy.createRoot,Dy.hydrateRoot;var Oy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw Ws(e)},Ws=function(t){return new Error("Firebase Database ("+QE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[d],n[f],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(YE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Pk;const m=s<<2|a>>4;if(r.push(m),c!==64){const w=a<<4&240|c>>2;if(r.push(w),f!==64){const C=c<<6&192|f;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Pk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XE=function(t){const e=YE(t);return Gp.encodeByteArray(e,!0)},Uu=function(t){return XE(t).replace(/\./g,"")},zu=function(t){try{return Gp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(t){return JE(void 0,t)}function JE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bk(n)||(t[n]=JE(t[n],e[n]));return t}function bk(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=()=>Dk().__FIREBASE_DEFAULTS__,Mk=()=>{if(typeof process>"u"||typeof Oy>"u")return;const t=Oy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zu(t[1]);return e&&JSON.parse(e)},Pc=()=>{try{return Ok()||Mk()||Lk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ZE=t=>{var e,n;return(n=(e=Pc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eT=t=>{const e=ZE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tT=()=>{var t;return(t=Pc())===null||t===void 0?void 0:t.config},nT=t=>{var e;return(e=Pc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Uu(JSON.stringify(n)),Uu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Vk(){var t;const e=(t=Pc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uk(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zk(){return QE.NODE_ADMIN===!0}function Bk(){return!Vk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $k(){try{return typeof indexedDB=="object"}catch{return!1}}function Wk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk="FirebaseError";class hr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qk,Object.setPrototypeOf(this,hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ua.prototype.create)}}class Ua{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Hk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hr(i,a,r)}}function Hk(t,e){return t.replace(Gk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Gk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=_a(zu(s[0])||""),n=_a(zu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Kk=function(t){const e=sT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Qk=function(t){const e=sT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function $u(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(My(s)&&My(o)){if(!$u(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function My(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):f<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Xk(t,e){const n=new Jk(t,e);return n.subscribe.bind(n)}class Jk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Zk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=nd),i.error===void 0&&(i.error=nd),i.complete===void 0&&(i.complete=nd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nd(){}function oT(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t){return t&&t._delegate?t._delegate:t}class $r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Nc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(r1(e))try{this.getOrInitializeService({instanceIdentifier:ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ii){return this.instances.has(e)}getOptions(e=ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:n1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ii){return this.component?this.component.multipleInstances?e:ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n1(t){return t===ii?void 0:t}function r1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new t1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const s1={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},o1=ne.INFO,a1={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},l1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=a1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dc{constructor(e){this.name=e,this._logLevel=o1,this._logHandler=l1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?s1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const u1=(t,e)=>e.some(n=>t instanceof n);let Ly,Vy;function c1(){return Ly||(Ly=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h1(){return Vy||(Vy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aT=new WeakMap,_f=new WeakMap,lT=new WeakMap,rd=new WeakMap,Qp=new WeakMap;function d1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&aT.set(n,t)}).catch(()=>{}),Qp.set(e,t),e}function f1(t){if(_f.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_f.set(t,e)}let yf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _f.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function p1(t){yf=t(yf)}function m1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(id(this),e,...n);return lT.set(r,e.sort?e.sort():[e]),Lr(r)}:h1().includes(t)?function(...e){return t.apply(id(this),e),Lr(aT.get(this))}:function(...e){return Lr(t.apply(id(this),e))}}function g1(t){return typeof t=="function"?m1(t):(t instanceof IDBTransaction&&f1(t),u1(t,c1())?new Proxy(t,yf):t)}function Lr(t){if(t instanceof IDBRequest)return d1(t);if(rd.has(t))return rd.get(t);const e=g1(t);return e!==t&&(rd.set(t,e),Qp.set(e,t)),e}const id=t=>Qp.get(t);function _1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Lr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Lr(o.result),u.oldVersion,u.newVersion,Lr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const y1=["get","getKey","getAll","getAllKeys","count"],v1=["put","add","delete","clear"],sd=new Map;function Fy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sd.get(e))return sd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=v1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||y1.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return sd.set(e,s),s}p1(t=>({...t,get:(e,n,r)=>Fy(e,n)||t.get(e,n,r),has:(e,n)=>!!Fy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(E1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function E1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vf="@firebase/app",jy="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Dc("@firebase/app"),T1="@firebase/app-compat",I1="@firebase/analytics-compat",S1="@firebase/analytics",C1="@firebase/app-check-compat",A1="@firebase/app-check",R1="@firebase/auth",k1="@firebase/auth-compat",x1="@firebase/database",P1="@firebase/data-connect",N1="@firebase/database-compat",b1="@firebase/functions",D1="@firebase/functions-compat",O1="@firebase/installations",M1="@firebase/installations-compat",L1="@firebase/messaging",V1="@firebase/messaging-compat",F1="@firebase/performance",j1="@firebase/performance-compat",U1="@firebase/remote-config",z1="@firebase/remote-config-compat",B1="@firebase/storage",$1="@firebase/storage-compat",W1="@firebase/firestore",q1="@firebase/vertexai-preview",H1="@firebase/firestore-compat",G1="firebase",K1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="[DEFAULT]",Q1={[vf]:"fire-core",[T1]:"fire-core-compat",[S1]:"fire-analytics",[I1]:"fire-analytics-compat",[A1]:"fire-app-check",[C1]:"fire-app-check-compat",[R1]:"fire-auth",[k1]:"fire-auth-compat",[x1]:"fire-rtdb",[P1]:"fire-data-connect",[N1]:"fire-rtdb-compat",[b1]:"fire-fn",[D1]:"fire-fn-compat",[O1]:"fire-iid",[M1]:"fire-iid-compat",[L1]:"fire-fcm",[V1]:"fire-fcm-compat",[F1]:"fire-perf",[j1]:"fire-perf-compat",[U1]:"fire-rc",[z1]:"fire-rc-compat",[B1]:"fire-gcs",[$1]:"fire-gcs-compat",[W1]:"fire-fst",[H1]:"fire-fst-compat",[q1]:"fire-vertex","fire-js":"fire-js",[G1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new Map,Y1=new Map,Ef=new Map;function Uy(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ti(t){const e=t.name;if(Ef.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;Ef.set(e,t);for(const n of ya.values())Uy(n,t);for(const n of Y1.values())Uy(n,t);return!0}function Oc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Hn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vr=new Ua("app","Firebase",X1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=K1;function uT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vr.create("bad-app-name",{appName:String(i)});if(n||(n=tT()),!n)throw Vr.create("no-options");const s=ya.get(i);if(s){if($u(n,s.options)&&$u(r,s.config))return s;throw Vr.create("duplicate-app",{appName:i})}const o=new i1(i);for(const u of Ef.values())o.addComponent(u);const a=new J1(n,r,o);return ya.set(i,a),a}function Yp(t=wf){const e=ya.get(t);if(!e&&t===wf&&tT())return uT();if(!e)throw Vr.create("no-app",{appName:t});return e}function Z1(){return Array.from(ya.values())}function kn(t,e,n){var r;let i=(r=Q1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(a.join(" "));return}Ti(new $r(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex="firebase-heartbeat-database",tx=1,va="firebase-heartbeat-store";let od=null;function cT(){return od||(od=_1(ex,tx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(va)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vr.create("idb-open",{originalErrorMessage:t.message})})),od}async function nx(t){try{const n=(await cT()).transaction(va),r=await n.objectStore(va).get(hT(t));return await n.done,r}catch(e){if(e instanceof hr)rr.warn(e.message);else{const n=Vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function zy(t,e){try{const r=(await cT()).transaction(va,"readwrite");await r.objectStore(va).put(e,hT(t)),await r.done}catch(n){if(n instanceof hr)rr.warn(n.message);else{const r=Vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function hT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=1024,ix=30*24*60*60*1e3;class sx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ax(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=By();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ix}),this._storage.overwrite(this._heartbeatsCache))}catch(r){rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=By(),{heartbeatsToSend:r,unsentEntries:i}=ox(this._heartbeatsCache.heartbeats),s=Uu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return rr.warn(n),""}}}function By(){return new Date().toISOString().substring(0,10)}function ox(t,e=rx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$y(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$y(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ax{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $k()?Wk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $y(t){return Uu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(t){Ti(new $r("platform-logger",e=>new w1(e),"PRIVATE")),Ti(new $r("heartbeat",e=>new sx(e),"PRIVATE")),kn(vf,jy,t),kn(vf,jy,"esm2017"),kn("fire-js","")}lx("");function Xp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function dT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ux=dT,fT=new Ua("auth","Firebase",dT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Dc("@firebase/auth");function cx(t,...e){Wu.logLevel<=ne.WARN&&Wu.warn(`Auth (${Oi}): ${t}`,...e)}function ou(t,...e){Wu.logLevel<=ne.ERROR&&Wu.error(`Auth (${Oi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,...e){throw Zp(t,...e)}function mn(t,...e){return Zp(t,...e)}function Jp(t,e,n){const r=Object.assign(Object.assign({},ux()),{[e]:n});return new Ua("auth","Firebase",r).create(e,{appName:t.name})}function mi(t){return Jp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hx(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Nn(t,"argument-error"),Jp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fT.create(t,...e)}function Z(t,e,...n){if(!t)throw Zp(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ou(e),new Error(e)}function ir(t,e){t||Gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dx(){return Wy()==="http:"||Wy()==="https:"}function Wy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dx()||jk()||"connection"in navigator)?navigator.onLine:!0}function px(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=Kp()||iT()}get(){return fx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=new za(3e4,6e4);function tm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hs(t,e,n,r,i={}){return mT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=qs(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Fk()||(c.referrerPolicy="no-referrer"),pT.fetch()(gT(t,t.config.apiHost,n,a),c)})}async function mT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mx),e);try{const i=new yx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ul(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ul(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ul(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ul(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Jp(t,d,c);Nn(t,d)}}catch(i){if(i instanceof hr)throw i;Nn(t,"network-request-failed",{message:String(i)})}}async function _x(t,e,n,r,i={}){const s=await Hs(t,e,n,r,i);return"mfaPendingCredential"in s&&Nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function gT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?em(t.config,i):`${t.config.apiScheme}://${i}`}class yx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),gx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ul(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vx(t,e){return Hs(t,"POST","/v1/accounts:delete",e)}async function _T(t,e){return Hs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wx(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=nm(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qo(ad(i.auth_time)),issuedAtTime:qo(ad(i.iat)),expirationTime:qo(ad(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ad(t){return Number(t)*1e3}function nm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ou("JWT malformed, contained fewer than 3 sections"),null;try{const i=zu(n);return i?JSON.parse(i):(ou("Failed to decode base64 JWT payload"),null)}catch(i){return ou("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qy(t){const e=nm(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hr&&Ex(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ex({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qo(this.lastLoginAt),this.creationTime=qo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await wa(t,_T(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?yT(s.providerUserInfo):[],a=Sx(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new If(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function Ix(t){const e=De(t);await qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yT(t){return t.map(e=>{var{providerId:n}=e,r=Xp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cx(t,e){const n=await mT(t,{},async()=>{const r=qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=gT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ax(t,e){return Hs(t,"POST","/v2/accounts:revokeToken",tm(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=qy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Cx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ms;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ms,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new If(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await wa(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wx(this,e)}reload(){return Ix(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Hn(this.auth.app))return Promise.reject(mi(this.auth));const e=await this.getIdToken();return await wa(this,vx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:R,emailVerified:D,isAnonymous:j,providerData:F,stsTokenManager:T}=n;Z(R&&T,e,"internal-error");const v=ms.fromJSON(this.name,T);Z(typeof R=="string",e,"internal-error"),gr(f,e.name),gr(m,e.name),Z(typeof D=="boolean",e,"internal-error"),Z(typeof j=="boolean",e,"internal-error"),gr(w,e.name),gr(C,e.name),gr(k,e.name),gr(b,e.name),gr(E,e.name),gr(y,e.name);const I=new Kn({uid:R,auth:e,email:m,emailVerified:D,displayName:f,isAnonymous:j,photoURL:C,phoneNumber:w,tenantId:k,stsTokenManager:v,createdAt:E,lastLoginAt:y});return F&&Array.isArray(F)&&(I.providerData=F.map(A=>Object.assign({},A))),b&&(I._redirectEventId=b),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new ms;i.updateFromServerResponse(n);const s=new Kn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?yT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ms;a.updateFromIdToken(r);const u=new Kn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new If(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=new Map;function Qn(t){ir(t instanceof Function,"Expected a class definition");let e=Hy.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vT.type="NONE";const Gy=vT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=au(this.userKey,i.apiKey,s),this.fullPersistenceKey=au("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gs(Qn(Gy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Qn(Gy);const o=au(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Kn._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new gs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new gs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(IT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CT(e))return"Blackberry";if(AT(e))return"Webos";if(ET(e))return"Safari";if((e.includes("chrome/")||TT(e))&&!e.includes("edge/"))return"Chrome";if(ST(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wT(t=wt()){return/firefox\//i.test(t)}function ET(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TT(t=wt()){return/crios\//i.test(t)}function IT(t=wt()){return/iemobile/i.test(t)}function ST(t=wt()){return/android/i.test(t)}function CT(t=wt()){return/blackberry/i.test(t)}function AT(t=wt()){return/webos/i.test(t)}function rm(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Rx(t=wt()){var e;return rm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kx(){return Uk()&&document.documentMode===10}function RT(t=wt()){return rm(t)||ST(t)||AT(t)||CT(t)||/windows phone/i.test(t)||IT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t,e=[]){let n;switch(t){case"Browser":n=Ky(wt());break;case"Worker":n=`${Ky(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(t,e={}){return Hs(t,"GET","/v2/passwordPolicy",tm(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=6;class bx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Nx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qy(this),this.idTokenSubscription=new Qy(this),this.beforeStateQueue=new xx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _T(this,{idToken:e}),r=await Kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Hn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=px()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Hn(this.app))return Promise.reject(mi(this));const n=e?De(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Hn(this.app)?Promise.reject(mi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Hn(this.app)?Promise.reject(mi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Px(this),n=new bx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ua("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ax(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&cx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mc(t){return De(t)}class Qy{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xk(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let im={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ox(t){im=t}function Mx(t){return im.loadJS(t)}function Lx(){return im.gapiScript}function Vx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(t,e){const n=Oc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($u(s,e??{}))return i;Nn(i,"already-initialized")}return n.initialize({options:e})}function jx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ux(t,e,n){const r=Mc(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=xT(e),{host:o,port:a}=zx(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Bx()}function xT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zx(t){const e=xT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yy(o)}}}function Yy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t,e){return _x(t,"POST","/v1/accounts:signInWithIdp",tm(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="http://localhost";class Ii extends PT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ii(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:$x,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends sm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Ba{constructor(){super("facebook.com")}static credential(e){return Ii._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ii._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Ba{constructor(){super("github.com")}static credential(e){return Ii._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.GITHUB_SIGN_IN_METHOD="github.com";Tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Ba{constructor(){super("twitter.com")}static credential(e,n){return Ii._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kn._fromIdTokenResponse(e,r,i),o=Xy(r);return new Ps({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xy(r);return new Ps({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu extends hr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Hu(e,n,r,i)}}function NT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hu._fromErrorAndOperation(t,s,e,r):s})}async function Wx(t,e,n=!1){const r=await wa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ps._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qx(t,e,n=!1){const{auth:r}=t;if(Hn(r.app))return Promise.reject(mi(r));const i="reauthenticate";try{const s=await wa(t,NT(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=nm(s.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),Ps._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hx(t,e,n=!1){if(Hn(t.app))return Promise.reject(mi(t));const r="signIn",i=await NT(t,r,e),s=await Ps._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Gx(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function Kx(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function Qx(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function Yx(t){return De(t).signOut()}const Gu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gu,"1"),this.storage.removeItem(Gu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=1e3,Jx=10;class DT extends bT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=RT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Jx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Xx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}DT.type="LOCAL";const Zx=DT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT extends bT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OT.type="SESSION";const MT=OT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await eP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=om("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return window}function nP(t){xn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function rP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sP(){return LT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="firebaseLocalStorageDb",oP=1,Ku="firebaseLocalStorage",FT="fbase_key";class $a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vc(t,e){return t.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function aP(){const t=indexedDB.deleteDatabase(VT);return new $a(t).toPromise()}function Sf(){const t=indexedDB.open(VT,oP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ku,{keyPath:FT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ku)?e(r):(r.close(),await aP(),e(await Sf()))})})}async function Jy(t,e,n){const r=Vc(t,!0).put({[FT]:e,value:n});return new $a(r).toPromise()}async function lP(t,e){const n=Vc(t,!1).get(e),r=await new $a(n).toPromise();return r===void 0?null:r.value}function Zy(t,e){const n=Vc(t,!0).delete(e);return new $a(n).toPromise()}const uP=800,cP=3;class jT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return LT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lc._getInstance(sP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rP(),!this.activeServiceWorker)return;this.sender=new tP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sf();return await Jy(e,Gu,"1"),await Zy(e,Gu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vc(i,!1).getAll();return new $a(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jT.type="LOCAL";const hP=jT;new za(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t,e){return e?Qn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am extends PT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dP(t){return Hx(t.auth,new am(t),t.bypassAuthState)}function fP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),qx(n,new am(t),t.bypassAuthState)}async function pP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),Wx(n,new am(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dP;case"linkViaPopup":case"linkViaRedirect":return pP;case"reauthViaPopup":case"reauthViaRedirect":return fP;default:Nn(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=new za(2e3,1e4);async function gP(t,e,n){if(Hn(t.app))return Promise.reject(mn(t,"operation-not-supported-in-this-environment"));const r=Mc(t);hx(t,e,sm);const i=UT(r,n);return new ui(r,"signInViaPopup",e,i).executeNotNull()}class ui extends zT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ui.currentPopupAction&&ui.currentPopupAction.cancel(),ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=om();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mP.get())};e()}}ui.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P="pendingRedirect",lu=new Map;class yP extends zT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=lu.get(this.auth._key());if(!e){try{const r=await vP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}lu.set(this.auth._key(),e)}return this.bypassAuthState||lu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vP(t,e){const n=TP(e),r=EP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wP(t,e){lu.set(t._key(),e)}function EP(t){return Qn(t._redirectPersistence)}function TP(t){return au(_P,t.config.apiKey,t.name)}async function IP(t,e,n=!1){if(Hn(t.app))return Promise.reject(mi(t));const r=Mc(t),i=UT(r,e),o=await new yP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=10*60*1e3;class CP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!BT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SP&&this.cachedEventUids.clear(),this.cachedEventUids.has(ev(e))}saveEventToCache(e){this.cachedEventUids.add(ev(e)),this.lastProcessedEventTime=Date.now()}}function ev(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function BT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(t,e={}){return Hs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xP=/^https?/;async function PP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RP(t);for(const n of e)try{if(NP(n))return}catch{}Nn(t,"unauthorized-domain")}function NP(t){const e=Tf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xP.test(n))return!1;if(kP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=new za(3e4,6e4);function tv(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DP(t){return new Promise((e,n)=>{var r,i,s;function o(){tv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tv(),n(mn(t,"network-request-failed"))},timeout:bP.get()})}if(!((i=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xn().gapi)===null||s===void 0)&&s.load)o();else{const a=Vx("iframefcb");return xn()[a]=()=>{gapi.load?o():n(mn(t,"network-request-failed"))},Mx(`${Lx()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw uu=null,e})}let uu=null;function OP(t){return uu=uu||DP(t),uu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=new za(5e3,15e3),LP="__/auth/iframe",VP="emulator/auth/iframe",FP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UP(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?em(e,VP):`https://${t.config.authDomain}/${LP}`,r={apiKey:e.apiKey,appName:t.name,v:Oi},i=jP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qs(r).slice(1)}`}async function zP(t){const e=await OP(t),n=xn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:UP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),a=xn().setTimeout(()=>{s(o)},MP.get());function u(){xn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$P=500,WP=600,qP="_blank",HP="http://localhost";class nv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GP(t,e,n,r=$P,i=WP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},BP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=wt().toLowerCase();n&&(a=TT(c)?qP:n),wT(c)&&(e=e||HP,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[w,C])=>`${m}${w}=${C},`,"");if(Rx(c)&&a!=="_self")return KP(e||"",a),new nv(null);const f=window.open(e||"",a,d);Z(f,t,"popup-blocked");try{f.focus()}catch{}return new nv(f)}function KP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP="__/auth/handler",YP="emulator/auth/handler",XP=encodeURIComponent("fac");async function rv(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Oi,eventId:i};if(e instanceof sm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Ba){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${XP}=${encodeURIComponent(u)}`:"";return`${JP(t)}?${qs(a).slice(1)}${c}`}function JP({config:t}){return t.emulator?em(t,YP):`https://${t.authDomain}/${QP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="webStorageSupport";class ZP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=MT,this._completeRedirectFn=IP,this._overrideRedirectResult=wP}async _openPopup(e,n,r,i){var s;ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await rv(e,n,r,Tf(),i);return GP(e,o,om())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await rv(e,n,r,Tf(),i);return nP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zP(e),r=new CP(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ld,{type:ld},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ld];o!==void 0&&n(!!o),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return RT()||ET()||rm()}}const eN=ZP;var iv="@firebase/auth",sv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rN(t){Ti(new $r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kT(t)},c=new Dx(r,i,s,u);return jx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ti(new $r("auth-internal",e=>{const n=Mc(e.getProvider("auth").getImmediate());return(r=>new tN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(iv,sv,nN(t)),kn(iv,sv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=5*60,sN=nT("authIdTokenMaxAge")||iN;let ov=null;const oN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sN)return;const i=n==null?void 0:n.token;ov!==i&&(ov=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aN(t=Yp()){const e=Oc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Fx(t,{popupRedirectResolver:eN,persistence:[hP,Zx,MT]}),r=nT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=oN(s.toString());Kx(n,o,()=>o(n.currentUser)),Gx(n,a=>o(a))}}const i=ZE("auth");return i&&Ux(n,`http://${i}`),n}function lN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ox({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rN("Browser");var av=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gi,$T;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function I(){}I.prototype=v.prototype,T.D=v.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(A,x,P){for(var S=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)S[Xe-2]=arguments[Xe];return v.prototype[x].apply(A,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,I){I||(I=0);var A=Array(16);if(typeof v=="string")for(var x=0;16>x;++x)A[x]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(x=0;16>x;++x)A[x]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=T.g[0],I=T.g[1],x=T.g[2];var P=T.g[3],S=v+(P^I&(x^P))+A[0]+3614090360&4294967295;v=I+(S<<7&4294967295|S>>>25),S=P+(x^v&(I^x))+A[1]+3905402710&4294967295,P=v+(S<<12&4294967295|S>>>20),S=x+(I^P&(v^I))+A[2]+606105819&4294967295,x=P+(S<<17&4294967295|S>>>15),S=I+(v^x&(P^v))+A[3]+3250441966&4294967295,I=x+(S<<22&4294967295|S>>>10),S=v+(P^I&(x^P))+A[4]+4118548399&4294967295,v=I+(S<<7&4294967295|S>>>25),S=P+(x^v&(I^x))+A[5]+1200080426&4294967295,P=v+(S<<12&4294967295|S>>>20),S=x+(I^P&(v^I))+A[6]+2821735955&4294967295,x=P+(S<<17&4294967295|S>>>15),S=I+(v^x&(P^v))+A[7]+4249261313&4294967295,I=x+(S<<22&4294967295|S>>>10),S=v+(P^I&(x^P))+A[8]+1770035416&4294967295,v=I+(S<<7&4294967295|S>>>25),S=P+(x^v&(I^x))+A[9]+2336552879&4294967295,P=v+(S<<12&4294967295|S>>>20),S=x+(I^P&(v^I))+A[10]+4294925233&4294967295,x=P+(S<<17&4294967295|S>>>15),S=I+(v^x&(P^v))+A[11]+2304563134&4294967295,I=x+(S<<22&4294967295|S>>>10),S=v+(P^I&(x^P))+A[12]+1804603682&4294967295,v=I+(S<<7&4294967295|S>>>25),S=P+(x^v&(I^x))+A[13]+4254626195&4294967295,P=v+(S<<12&4294967295|S>>>20),S=x+(I^P&(v^I))+A[14]+2792965006&4294967295,x=P+(S<<17&4294967295|S>>>15),S=I+(v^x&(P^v))+A[15]+1236535329&4294967295,I=x+(S<<22&4294967295|S>>>10),S=v+(x^P&(I^x))+A[1]+4129170786&4294967295,v=I+(S<<5&4294967295|S>>>27),S=P+(I^x&(v^I))+A[6]+3225465664&4294967295,P=v+(S<<9&4294967295|S>>>23),S=x+(v^I&(P^v))+A[11]+643717713&4294967295,x=P+(S<<14&4294967295|S>>>18),S=I+(P^v&(x^P))+A[0]+3921069994&4294967295,I=x+(S<<20&4294967295|S>>>12),S=v+(x^P&(I^x))+A[5]+3593408605&4294967295,v=I+(S<<5&4294967295|S>>>27),S=P+(I^x&(v^I))+A[10]+38016083&4294967295,P=v+(S<<9&4294967295|S>>>23),S=x+(v^I&(P^v))+A[15]+3634488961&4294967295,x=P+(S<<14&4294967295|S>>>18),S=I+(P^v&(x^P))+A[4]+3889429448&4294967295,I=x+(S<<20&4294967295|S>>>12),S=v+(x^P&(I^x))+A[9]+568446438&4294967295,v=I+(S<<5&4294967295|S>>>27),S=P+(I^x&(v^I))+A[14]+3275163606&4294967295,P=v+(S<<9&4294967295|S>>>23),S=x+(v^I&(P^v))+A[3]+4107603335&4294967295,x=P+(S<<14&4294967295|S>>>18),S=I+(P^v&(x^P))+A[8]+1163531501&4294967295,I=x+(S<<20&4294967295|S>>>12),S=v+(x^P&(I^x))+A[13]+2850285829&4294967295,v=I+(S<<5&4294967295|S>>>27),S=P+(I^x&(v^I))+A[2]+4243563512&4294967295,P=v+(S<<9&4294967295|S>>>23),S=x+(v^I&(P^v))+A[7]+1735328473&4294967295,x=P+(S<<14&4294967295|S>>>18),S=I+(P^v&(x^P))+A[12]+2368359562&4294967295,I=x+(S<<20&4294967295|S>>>12),S=v+(I^x^P)+A[5]+4294588738&4294967295,v=I+(S<<4&4294967295|S>>>28),S=P+(v^I^x)+A[8]+2272392833&4294967295,P=v+(S<<11&4294967295|S>>>21),S=x+(P^v^I)+A[11]+1839030562&4294967295,x=P+(S<<16&4294967295|S>>>16),S=I+(x^P^v)+A[14]+4259657740&4294967295,I=x+(S<<23&4294967295|S>>>9),S=v+(I^x^P)+A[1]+2763975236&4294967295,v=I+(S<<4&4294967295|S>>>28),S=P+(v^I^x)+A[4]+1272893353&4294967295,P=v+(S<<11&4294967295|S>>>21),S=x+(P^v^I)+A[7]+4139469664&4294967295,x=P+(S<<16&4294967295|S>>>16),S=I+(x^P^v)+A[10]+3200236656&4294967295,I=x+(S<<23&4294967295|S>>>9),S=v+(I^x^P)+A[13]+681279174&4294967295,v=I+(S<<4&4294967295|S>>>28),S=P+(v^I^x)+A[0]+3936430074&4294967295,P=v+(S<<11&4294967295|S>>>21),S=x+(P^v^I)+A[3]+3572445317&4294967295,x=P+(S<<16&4294967295|S>>>16),S=I+(x^P^v)+A[6]+76029189&4294967295,I=x+(S<<23&4294967295|S>>>9),S=v+(I^x^P)+A[9]+3654602809&4294967295,v=I+(S<<4&4294967295|S>>>28),S=P+(v^I^x)+A[12]+3873151461&4294967295,P=v+(S<<11&4294967295|S>>>21),S=x+(P^v^I)+A[15]+530742520&4294967295,x=P+(S<<16&4294967295|S>>>16),S=I+(x^P^v)+A[2]+3299628645&4294967295,I=x+(S<<23&4294967295|S>>>9),S=v+(x^(I|~P))+A[0]+4096336452&4294967295,v=I+(S<<6&4294967295|S>>>26),S=P+(I^(v|~x))+A[7]+1126891415&4294967295,P=v+(S<<10&4294967295|S>>>22),S=x+(v^(P|~I))+A[14]+2878612391&4294967295,x=P+(S<<15&4294967295|S>>>17),S=I+(P^(x|~v))+A[5]+4237533241&4294967295,I=x+(S<<21&4294967295|S>>>11),S=v+(x^(I|~P))+A[12]+1700485571&4294967295,v=I+(S<<6&4294967295|S>>>26),S=P+(I^(v|~x))+A[3]+2399980690&4294967295,P=v+(S<<10&4294967295|S>>>22),S=x+(v^(P|~I))+A[10]+4293915773&4294967295,x=P+(S<<15&4294967295|S>>>17),S=I+(P^(x|~v))+A[1]+2240044497&4294967295,I=x+(S<<21&4294967295|S>>>11),S=v+(x^(I|~P))+A[8]+1873313359&4294967295,v=I+(S<<6&4294967295|S>>>26),S=P+(I^(v|~x))+A[15]+4264355552&4294967295,P=v+(S<<10&4294967295|S>>>22),S=x+(v^(P|~I))+A[6]+2734768916&4294967295,x=P+(S<<15&4294967295|S>>>17),S=I+(P^(x|~v))+A[13]+1309151649&4294967295,I=x+(S<<21&4294967295|S>>>11),S=v+(x^(I|~P))+A[4]+4149444226&4294967295,v=I+(S<<6&4294967295|S>>>26),S=P+(I^(v|~x))+A[11]+3174756917&4294967295,P=v+(S<<10&4294967295|S>>>22),S=x+(v^(P|~I))+A[2]+718787259&4294967295,x=P+(S<<15&4294967295|S>>>17),S=I+(P^(x|~v))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(x+(S<<21&4294967295|S>>>11))&4294967295,T.g[2]=T.g[2]+x&4294967295,T.g[3]=T.g[3]+P&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var I=v-this.blockSize,A=this.B,x=this.h,P=0;P<v;){if(x==0)for(;P<=I;)i(this,T,P),P+=this.blockSize;if(typeof T=="string"){for(;P<v;)if(A[x++]=T.charCodeAt(P++),x==this.blockSize){i(this,A),x=0;break}}else for(;P<v;)if(A[x++]=T[P++],x==this.blockSize){i(this,A),x=0;break}}this.h=x,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var I=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=I&255,I/=256;for(this.u(T),T=Array(16),v=I=0;4>v;++v)for(var A=0;32>A;A+=8)T[I++]=this.g[v]>>>A&255;return T};function s(T,v){var I=a;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=v(T)}function o(T,v){this.h=v;for(var I=[],A=!0,x=T.length-1;0<=x;x--){var P=T[x]|0;A&&P==v||(I[x]=P,A=!1)}this.g=I}var a={};function u(T){return-128<=T&&128>T?s(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return b(c(-T));for(var v=[],I=1,A=0;T>=I;A++)v[A]=T/I|0,I*=4294967296;return new o(v,0)}function d(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return b(d(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(v,8)),A=f,x=0;x<T.length;x+=8){var P=Math.min(8,T.length-x),S=parseInt(T.substring(x,x+P),v);8>P?(P=c(Math.pow(v,P)),A=A.j(P).add(c(S))):(A=A.j(I),A=A.add(c(S)))}return A}var f=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-b(this).m();for(var T=0,v=1,I=0;I<this.g.length;I++){var A=this.i(I);T+=(0<=A?A:4294967296+A)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(k(this))return"-"+b(this).toString(T);for(var v=c(Math.pow(T,6)),I=this,A="";;){var x=D(I,v).g;I=E(I,x.j(v));var P=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=x,C(I))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=E(this,T),k(T)?-1:C(T)?0:1};function b(T){for(var v=T.g.length,I=[],A=0;A<v;A++)I[A]=~T.g[A];return new o(I,~T.h).add(m)}t.abs=function(){return k(this)?b(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],A=0,x=0;x<=v;x++){var P=A+(this.i(x)&65535)+(T.i(x)&65535),S=(P>>>16)+(this.i(x)>>>16)+(T.i(x)>>>16);A=S>>>16,P&=65535,S&=65535,I[x]=S<<16|P}return new o(I,I[I.length-1]&-2147483648?-1:0)};function E(T,v){return T.add(b(v))}t.j=function(T){if(C(this)||C(T))return f;if(k(this))return k(T)?b(this).j(b(T)):b(b(this).j(T));if(k(T))return b(this.j(b(T)));if(0>this.l(w)&&0>T.l(w))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,I=[],A=0;A<2*v;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var x=0;x<T.g.length;x++){var P=this.i(A)>>>16,S=this.i(A)&65535,Xe=T.i(x)>>>16,Qt=T.i(x)&65535;I[2*A+2*x]+=S*Qt,y(I,2*A+2*x),I[2*A+2*x+1]+=P*Qt,y(I,2*A+2*x+1),I[2*A+2*x+1]+=S*Xe,y(I,2*A+2*x+1),I[2*A+2*x+2]+=P*Xe,y(I,2*A+2*x+2)}for(A=0;A<v;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=v;A<2*v;A++)I[A]=0;return new o(I,0)};function y(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function R(T,v){this.g=T,this.h=v}function D(T,v){if(C(v))throw Error("division by zero");if(C(T))return new R(f,f);if(k(T))return v=D(b(T),v),new R(b(v.g),b(v.h));if(k(v))return v=D(T,b(v)),new R(b(v.g),v.h);if(30<T.g.length){if(k(T)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=v;0>=A.l(T);)I=j(I),A=j(A);var x=F(I,1),P=F(A,1);for(A=F(A,2),I=F(I,2);!C(A);){var S=P.add(A);0>=S.l(T)&&(x=x.add(I),P=S),A=F(A,1),I=F(I,1)}return v=E(T,x.j(v)),new R(x,v)}for(x=f;0<=T.l(v);){for(I=Math.max(1,Math.floor(T.m()/v.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=c(I),S=P.j(v);k(S)||0<S.l(T);)I-=A,P=c(I),S=P.j(v);C(P)&&(P=m),x=x.add(P),T=E(T,S)}return new R(x,T)}t.A=function(T){return D(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)&T.i(A);return new o(I,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)|T.i(A);return new o(I,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)^T.i(A);return new o(I,this.h^T.h)};function j(T){for(var v=T.g.length+1,I=[],A=0;A<v;A++)I[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(I,T.h)}function F(T,v){var I=v>>5;v%=32;for(var A=T.g.length-I,x=[],P=0;P<A;P++)x[P]=0<v?T.i(P+I)>>>v|T.i(P+I+1)<<32-v:T.i(P+I);return new o(x,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$T=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,gi=o}).apply(typeof av<"u"?av:typeof self<"u"?self:typeof window<"u"?window:{});var zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var WT,Do,qT,cu,Cf,HT,GT,KT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof zl=="object"&&zl];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var N=l[_];if(!(N in p))break e;p=p[N]}l=l[l.length-1],_=p[l],h=h(_),h!=_&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,_=!1,N={next:function(){if(!_&&p<l.length){var O=p++;return{value:h(O,l[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),l.apply(h,N)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function w(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function C(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,N,O){for(var U=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)U[_e-2]=arguments[_e];return h.prototype[N].apply(_,U)}}function k(l){const h=l.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=l[_];return p}return[]}function b(l,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const N=l.length||0,O=_.length||0;l.length=N+O;for(let U=0;U<O;U++)l[N+U]=_[U]}else l.push(_)}}class E{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function R(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var j=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function F(l,h,p){for(const _ in l)h.call(p,l[_],_,l)}function T(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function v(l){const h={};for(const p in l)h[p]=l[p];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,h){let p,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(p in _)l[p]=_[p];for(let O=0;O<I.length;O++)p=I[O],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function x(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function P(l){a.setTimeout(()=>{throw l},0)}function S(){var l=B;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Xe{constructor(){this.h=this.g=null}add(h,p){const _=Qt.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Qt=new E(()=>new wn,l=>l.reset());class wn{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Vt,W=!1,B=new Xe,G=()=>{const l=a.Promise.resolve(void 0);Vt=()=>{l.then(ie)}};var ie=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(p){P(p)}var h=Qt;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}W=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Ft=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function on(l,h){if(Ee.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(j){e:{try{D(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Mn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&on.aa.h.call(this)}}C(on,Ee);var Mn={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ln="closure_listenable_"+(1e6*Math.random()|0),AC=0;function RC(l,h,p,_,N){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=N,this.key=++AC,this.da=this.fa=!1}function sl(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ol(l){this.src=l,this.g={},this.h=0}ol.prototype.add=function(l,h,p,_,N){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var U=lh(l,h,_,N);return-1<U?(h=l[U],p||(h.fa=!1)):(h=new RC(h,this.src,O,!!_,N),h.fa=p,l.push(h)),h};function ah(l,h){var p=h.type;if(p in l.g){var _=l.g[p],N=Array.prototype.indexOf.call(_,h,void 0),O;(O=0<=N)&&Array.prototype.splice.call(_,N,1),O&&(sl(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function lh(l,h,p,_){for(var N=0;N<l.length;++N){var O=l[N];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==_)return N}return-1}var uh="closure_lm_"+(1e6*Math.random()|0),ch={};function Ag(l,h,p,_,N){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Ag(l,h[O],p,_,N);return null}return p=xg(p),l&&l[Ln]?l.K(h,p,c(_)?!!_.capture:!1,N):kC(l,h,p,!1,_,N)}function kC(l,h,p,_,N,O){if(!h)throw Error("Invalid event type");var U=c(N)?!!N.capture:!!N,_e=dh(l);if(_e||(l[uh]=_e=new ol(l)),p=_e.add(h,p,_,U,O),p.proxy)return p;if(_=xC(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)Ft||(N=U),N===void 0&&(N=!1),l.addEventListener(h.toString(),_,N);else if(l.attachEvent)l.attachEvent(kg(h.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function xC(){function l(p){return h.call(l.src,l.listener,p)}const h=PC;return l}function Rg(l,h,p,_,N){if(Array.isArray(h))for(var O=0;O<h.length;O++)Rg(l,h[O],p,_,N);else _=c(_)?!!_.capture:!!_,p=xg(p),l&&l[Ln]?(l=l.i,h=String(h).toString(),h in l.g&&(O=l.g[h],p=lh(O,p,_,N),-1<p&&(sl(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete l.g[h],l.h--)))):l&&(l=dh(l))&&(h=l.g[h.toString()],l=-1,h&&(l=lh(h,p,_,N)),(p=-1<l?h[l]:null)&&hh(p))}function hh(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Ln])ah(h.i,l);else{var p=l.type,_=l.proxy;h.removeEventListener?h.removeEventListener(p,_,l.capture):h.detachEvent?h.detachEvent(kg(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=dh(h))?(ah(p,l),p.h==0&&(p.src=null,h[uh]=null)):sl(l)}}}function kg(l){return l in ch?ch[l]:ch[l]="on"+l}function PC(l,h){if(l.da)l=!0;else{h=new on(h,this);var p=l.listener,_=l.ha||l.src;l.fa&&hh(l),l=p.call(_,h)}return l}function dh(l){return l=l[uh],l instanceof ol?l:null}var fh="__closure_events_fn_"+(1e9*Math.random()>>>0);function xg(l){return typeof l=="function"?l:(l[fh]||(l[fh]=function(h){return l.handleEvent(h)}),l[fh])}function lt(){ee.call(this),this.i=new ol(this),this.M=this,this.F=null}C(lt,ee),lt.prototype[Ln]=!0,lt.prototype.removeEventListener=function(l,h,p,_){Rg(this,l,h,p,_)};function Et(l,h){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=h.type||h,typeof h=="string")h=new Ee(h,l);else if(h instanceof Ee)h.target=h.target||l;else{var N=h;h=new Ee(_,l),A(h,N)}if(N=!0,p)for(var O=p.length-1;0<=O;O--){var U=h.g=p[O];N=al(U,_,!0,h)&&N}if(U=h.g=l,N=al(U,_,!0,h)&&N,N=al(U,_,!1,h)&&N,p)for(O=0;O<p.length;O++)U=h.g=p[O],N=al(U,_,!1,h)&&N}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],_=0;_<p.length;_++)sl(p[_]);delete l.g[h],l.h--}}this.F=null},lt.prototype.K=function(l,h,p,_){return this.i.add(String(l),h,!1,p,_)},lt.prototype.L=function(l,h,p,_){return this.i.add(String(l),h,!0,p,_)};function al(l,h,p,_){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,O=0;O<h.length;++O){var U=h[O];if(U&&!U.da&&U.capture==p){var _e=U.listener,Je=U.ha||U.src;U.fa&&ah(l.i,U),N=_e.call(Je,_)!==!1&&N}}return N&&!_.defaultPrevented}function Pg(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function Ng(l){l.g=Pg(()=>{l.g=null,l.i&&(l.i=!1,Ng(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class NC extends ee{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ng(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function to(l){ee.call(this),this.h=l,this.g={}}C(to,ee);var bg=[];function Dg(l){F(l.g,function(h,p){this.g.hasOwnProperty(p)&&hh(h)},l),l.g={}}to.prototype.N=function(){to.aa.N.call(this),Dg(this)},to.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ph=a.JSON.stringify,bC=a.JSON.parse,DC=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function mh(){}mh.prototype.h=null;function Og(l){return l.h||(l.h=l.i())}function Mg(){}var no={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gh(){Ee.call(this,"d")}C(gh,Ee);function _h(){Ee.call(this,"c")}C(_h,Ee);var Jr={},Lg=null;function ll(){return Lg=Lg||new lt}Jr.La="serverreachability";function Vg(l){Ee.call(this,Jr.La,l)}C(Vg,Ee);function ro(l){const h=ll();Et(h,new Vg(h))}Jr.STAT_EVENT="statevent";function Fg(l,h){Ee.call(this,Jr.STAT_EVENT,l),this.stat=h}C(Fg,Ee);function Tt(l){const h=ll();Et(h,new Fg(h,l))}Jr.Ma="timingevent";function jg(l,h){Ee.call(this,Jr.Ma,l),this.size=h}C(jg,Ee);function io(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function so(){this.g=!0}so.prototype.xa=function(){this.g=!1};function OC(l,h,p,_,N,O){l.info(function(){if(l.g)if(O)for(var U="",_e=O.split("&"),Je=0;Je<_e.length;Je++){var he=_e[Je].split("=");if(1<he.length){var ut=he[0];he=he[1];var ct=ut.split("_");U=2<=ct.length&&ct[1]=="type"?U+(ut+"="+he+"&"):U+(ut+"=redacted&")}}else U=null;else U=O;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+h+`
`+p+`
`+U})}function MC(l,h,p,_,N,O,U){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+h+`
`+p+`
`+O+" "+U})}function Ui(l,h,p,_){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+VC(l,p)+(_?" "+_:"")})}function LC(l,h){l.info(function(){return"TIMEOUT: "+h})}so.prototype.info=function(){};function VC(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var U=1;U<N.length;U++)N[U]=""}}}}return ph(p)}catch{return h}}var ul={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ug={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yh;function cl(){}C(cl,mh),cl.prototype.g=function(){return new XMLHttpRequest},cl.prototype.i=function(){return{}},yh=new cl;function dr(l,h,p,_){this.j=l,this.i=h,this.l=p,this.R=_||1,this.U=new to(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zg}function zg(){this.i=null,this.g="",this.h=!1}var Bg={},vh={};function wh(l,h,p){l.L=1,l.v=pl(Vn(h)),l.m=p,l.P=!0,$g(l,null)}function $g(l,h){l.F=Date.now(),hl(l),l.A=Vn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),r_(p.i,"t",_),l.C=0,p=l.j.J,l.h=new zg,l.g=E_(l.j,p?h:null,!l.m),0<l.O&&(l.M=new NC(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,_=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(bg[0]=N.toString()),N=bg);for(var O=0;O<N.length;O++){var U=Ag(p,N[O],_||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),ro(),OC(l.i,l.u,l.A,l.l,l.R,l.m)}dr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Fn(l)==3?h.j():this.Y(l)},dr.prototype.Y=function(l){try{if(l==this.g)e:{const ct=Fn(this.g);var h=this.g.Ba();const $i=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||c_(this.g)))){this.J||ct!=4||h==7||(h==8||0>=$i?ro(3):ro(2)),Eh(this);var p=this.g.Z();this.X=p;t:if(Wg(this)){var _=c_(this.g);l="";var N=_.length,O=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zr(this),oo(this);var U="";break t}this.h.i=new a.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,l+=this.h.i.decode(_[h],{stream:!(O&&h==N-1)});_.length=0,this.h.g+=l,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=p==200,MC(this.i,this.u,this.A,this.l,this.R,ct,p),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,Je=this.g;if((_e=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(_e)){var he=_e;break t}}he=null}if(p=he)Ui(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Th(this,p);else{this.o=!1,this.s=3,Tt(12),Zr(this),oo(this);break e}}if(this.P){p=!0;let an;for(;!this.J&&this.C<U.length;)if(an=FC(this,U),an==vh){ct==4&&(this.s=4,Tt(14),p=!1),Ui(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Bg){this.s=4,Tt(15),Ui(this.i,this.l,U,"[Invalid Chunk]"),p=!1;break}else Ui(this.i,this.l,an,null),Th(this,an);if(Wg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||U.length!=0||this.h.h||(this.s=1,Tt(16),p=!1),this.o=this.o&&p,!p)Ui(this.i,this.l,U,"[Invalid Chunked Response]"),Zr(this),oo(this);else if(0<U.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),kh(ut),ut.M=!0,Tt(11))}}else Ui(this.i,this.l,U,null),Th(this,U);ct==4&&Zr(this),this.o&&!this.J&&(ct==4?__(this.j,this):(this.o=!1,hl(this)))}else tA(this.g),p==400&&0<U.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Zr(this),oo(this)}}}catch{}finally{}};function Wg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function FC(l,h){var p=l.C,_=h.indexOf(`
`,p);return _==-1?vh:(p=Number(h.substring(p,_)),isNaN(p)?Bg:(_+=1,_+p>h.length?vh:(h=h.slice(_,_+p),l.C=_+p,h)))}dr.prototype.cancel=function(){this.J=!0,Zr(this)};function hl(l){l.S=Date.now()+l.I,qg(l,l.I)}function qg(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=io(m(l.ba,l),h)}function Eh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}dr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(LC(this.i,this.A),this.L!=2&&(ro(),Tt(17)),Zr(this),this.s=2,oo(this)):qg(this,this.S-l)};function oo(l){l.j.G==0||l.J||__(l.j,l)}function Zr(l){Eh(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,Dg(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Th(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||Ih(p.h,l))){if(!l.K&&Ih(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)wl(p),yl(p);else break e;Rh(p),Tt(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=io(m(p.Za,p),6e3));if(1>=Kg(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ti(p,11)}else if((l.K||p.g==l)&&wl(p),!y(h))for(N=p.Da.g.parse(h),h=0;h<N.length;h++){let he=N[h];if(p.T=he[0],he=he[1],p.G==2)if(he[0]=="c"){p.K=he[1],p.ia=he[2];const ut=he[3];ut!=null&&(p.la=ut,p.j.info("VER="+p.la));const ct=he[4];ct!=null&&(p.Aa=ct,p.j.info("SVER="+p.Aa));const $i=he[5];$i!=null&&typeof $i=="number"&&0<$i&&(_=1.5*$i,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const an=l.g;if(an){const Tl=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tl){var O=_.h;O.g||Tl.indexOf("spdy")==-1&&Tl.indexOf("quic")==-1&&Tl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Sh(O,O.h),O.h=null))}if(_.D){const xh=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;xh&&(_.ya=xh,Te(_.I,_.D,xh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var U=l;if(_.qa=w_(_,_.J?_.ia:null,_.W),U.K){Qg(_.h,U);var _e=U,Je=_.L;Je&&(_e.I=Je),_e.B&&(Eh(_e),hl(_e)),_.g=U}else m_(_);0<p.i.length&&vl(p)}else he[0]!="stop"&&he[0]!="close"||ti(p,7);else p.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?ti(p,7):Ah(p):he[0]!="noop"&&p.l&&p.l.ta(he),p.v=0)}}ro(4)}catch{}}var jC=class{constructor(l,h){this.g=l,this.map=h}};function Hg(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Kg(l){return l.h?1:l.g?l.g.size:0}function Ih(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Sh(l,h){l.g?l.g.add(h):l.h=h}function Qg(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Hg.prototype.cancel=function(){if(this.i=Yg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Yg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return k(l.i)}function UC(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,_=0;_<p;_++)h.push(l[_]);return h}h=[],p=0;for(_ in l)h[p++]=l[_];return h}function zC(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const _ in l)h[p++]=_;return h}}}function Xg(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=zC(l),_=UC(l),N=_.length,O=0;O<N;O++)h.call(void 0,_[O],p&&p[O],l)}var Jg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BC(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),N=null;if(0<=_){var O=l[p].substring(0,_);N=l[p].substring(_+1)}else O=l[p];h(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function ei(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ei){this.h=l.h,dl(this,l.j),this.o=l.o,this.g=l.g,fl(this,l.s),this.l=l.l;var h=l.i,p=new uo;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Zg(this,p),this.m=l.m}else l&&(h=String(l).match(Jg))?(this.h=!1,dl(this,h[1]||"",!0),this.o=ao(h[2]||""),this.g=ao(h[3]||"",!0),fl(this,h[4]),this.l=ao(h[5]||"",!0),Zg(this,h[6]||"",!0),this.m=ao(h[7]||"")):(this.h=!1,this.i=new uo(null,this.h))}ei.prototype.toString=function(){var l=[],h=this.j;h&&l.push(lo(h,e_,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(lo(h,e_,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(lo(p,p.charAt(0)=="/"?qC:WC,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",lo(p,GC)),l.join("")};function Vn(l){return new ei(l)}function dl(l,h,p){l.j=p?ao(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function fl(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Zg(l,h,p){h instanceof uo?(l.i=h,KC(l.i,l.h)):(p||(h=lo(h,HC)),l.i=new uo(h,l.h))}function Te(l,h,p){l.i.set(h,p)}function pl(l){return Te(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ao(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function lo(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,$C),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function $C(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var e_=/[#\/\?@]/g,WC=/[#\?:]/g,qC=/[#\?]/g,HC=/[#\?@]/g,GC=/#/g;function uo(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function fr(l){l.g||(l.g=new Map,l.h=0,l.i&&BC(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=uo.prototype,t.add=function(l,h){fr(this),this.i=null,l=zi(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function t_(l,h){fr(l),h=zi(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function n_(l,h){return fr(l),h=zi(l,h),l.g.has(h)}t.forEach=function(l,h){fr(this),this.g.forEach(function(p,_){p.forEach(function(N){l.call(h,N,_,this)},this)},this)},t.na=function(){fr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const N=l[_];for(let O=0;O<N.length;O++)p.push(h[_])}return p},t.V=function(l){fr(this);let h=[];if(typeof l=="string")n_(this,l)&&(h=h.concat(this.g.get(zi(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return fr(this),this.i=null,l=zi(this,l),n_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function r_(l,h,p){t_(l,h),0<p.length&&(l.i=null,l.g.set(zi(l,h),k(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const O=encodeURIComponent(String(_)),U=this.V(_);for(_=0;_<U.length;_++){var N=O;U[_]!==""&&(N+="="+encodeURIComponent(String(U[_]))),l.push(N)}}return this.i=l.join("&")};function zi(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function KC(l,h){h&&!l.j&&(fr(l),l.i=null,l.g.forEach(function(p,_){var N=_.toLowerCase();_!=N&&(t_(this,_),r_(this,N,p))},l)),l.j=h}function QC(l,h){const p=new so;if(a.Image){const _=new Image;_.onload=w(pr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=w(pr,p,"TestLoadImage: error",!1,h,_),_.onabort=w(pr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=w(pr,p,"TestLoadImage: timeout",!1,h,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else h(!1)}function YC(l,h){const p=new so,_=new AbortController,N=setTimeout(()=>{_.abort(),pr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:_.signal}).then(O=>{clearTimeout(N),O.ok?pr(p,"TestPingServer: ok",!0,h):pr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),pr(p,"TestPingServer: error",!1,h)})}function pr(l,h,p,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(p)}catch{}}function XC(){this.g=new DC}function JC(l,h,p){const _=p||"";try{Xg(l,function(N,O){let U=N;c(N)&&(U=ph(N)),h.push(_+O+"="+encodeURIComponent(U))})}catch(N){throw h.push(_+"type="+encodeURIComponent("_badmap")),N}}function ml(l){this.l=l.Ub||null,this.j=l.eb||!1}C(ml,mh),ml.prototype.g=function(){return new gl(this.l,this.j)},ml.prototype.i=function(l){return function(){return l}}({});function gl(l,h){lt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(gl,lt),t=gl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,ho(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,co(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ho(this)),this.g&&(this.readyState=3,ho(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;i_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function i_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?co(this):ho(this),this.readyState==3&&i_(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,co(this))},t.Qa=function(l){this.g&&(this.response=l,co(this))},t.ga=function(){this.g&&co(this)};function co(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ho(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function ho(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(gl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function s_(l){let h="";return F(l,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function Ch(l,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=s_(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Te(l,h,p))}function Ne(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ne,lt);var ZC=/^https?$/i,eA=["POST","PUT"];t=Ne.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yh.g(),this.v=this.o?Og(this.o):Og(yh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(O){o_(this,O);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)p.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())p.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(eA,h,void 0))||_||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,U]of p)this.g.setRequestHeader(O,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{u_(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){o_(this,O)}};function o_(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,a_(l),_l(l)}function a_(l){l.A||(l.A=!0,Et(l,"complete"),Et(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Et(this,"complete"),Et(this,"abort"),_l(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_l(this,!0)),Ne.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?l_(this):this.bb())},t.bb=function(){l_(this)};function l_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Fn(l)!=4||l.Z()!=2)){if(l.u&&Fn(l)==4)Pg(l.Ea,0,l);else if(Et(l,"readystatechange"),Fn(l)==4){l.h=!1;try{const U=l.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=U===0){var N=String(l.D).match(Jg)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),_=!ZC.test(N?N.toLowerCase():"")}p=_}if(p)Et(l,"complete"),Et(l,"success");else{l.m=6;try{var O=2<Fn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",a_(l)}}finally{_l(l)}}}}function _l(l,h){if(l.g){u_(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Et(l,"ready");try{p.onreadystatechange=_}catch{}}}function u_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Fn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),bC(h)}};function c_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function tA(l){const h={};l=(l.g&&2<=Fn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(y(l[_]))continue;var p=x(l[_]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[N]||[];h[N]=O,O.push(p)}T(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fo(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function h_(l){this.Aa=0,this.i=[],this.j=new so,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fo("baseRetryDelayMs",5e3,l),this.cb=fo("retryDelaySeedMs",1e4,l),this.Wa=fo("forwardChannelMaxRetries",2,l),this.wa=fo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Hg(l&&l.concurrentRequestLimit),this.Da=new XC,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=h_.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,_){Tt(0),this.W=l,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=w_(this,null,this.W),vl(this)};function Ah(l){if(d_(l),l.G==3){var h=l.U++,p=Vn(l.I);if(Te(p,"SID",l.K),Te(p,"RID",h),Te(p,"TYPE","terminate"),po(l,p),h=new dr(l,l.j,h),h.L=2,h.v=pl(Vn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=E_(h.j,null),h.g.ea(h.v)),h.F=Date.now(),hl(h)}v_(l)}function yl(l){l.g&&(kh(l),l.g.cancel(),l.g=null)}function d_(l){yl(l),l.u&&(a.clearTimeout(l.u),l.u=null),wl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function vl(l){if(!Gg(l.h)&&!l.s){l.s=!0;var h=l.Ga;Vt||G(),W||(Vt(),W=!0),B.add(h,l),l.B=0}}function nA(l,h){return Kg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=io(m(l.Ga,l,h),y_(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new dr(this,this.j,l);let O=this.o;if(this.S&&(O?(O=v(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=p_(this,N,h),p=Vn(this.I),Te(p,"RID",l),Te(p,"CVER",22),this.D&&Te(p,"X-HTTP-Session-Id",this.D),po(this,p),O&&(this.O?h="headers="+encodeURIComponent(String(s_(O)))+"&"+h:this.m&&Ch(p,this.m,O)),Sh(this.h,N),this.Ua&&Te(p,"TYPE","init"),this.P?(Te(p,"$req",h),Te(p,"SID","null"),N.T=!0,wh(N,p,null)):wh(N,p,h),this.G=2}}else this.G==3&&(l?f_(this,l):this.i.length==0||Gg(this.h)||f_(this))};function f_(l,h){var p;h?p=h.l:p=l.U++;const _=Vn(l.I);Te(_,"SID",l.K),Te(_,"RID",p),Te(_,"AID",l.T),po(l,_),l.m&&l.o&&Ch(_,l.m,l.o),p=new dr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=p_(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Sh(l.h,p),wh(p,_,h)}function po(l,h){l.H&&F(l.H,function(p,_){Te(h,_,p)}),l.l&&Xg({},function(p,_){Te(h,_,p)})}function p_(l,h,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var N=l.i;let O=-1;for(;;){const U=["count="+p];O==-1?0<p?(O=N[0].g,U.push("ofs="+O)):O=0:U.push("ofs="+O);let _e=!0;for(let Je=0;Je<p;Je++){let he=N[Je].g;const ut=N[Je].map;if(he-=O,0>he)O=Math.max(0,N[Je].g-100),_e=!1;else try{JC(ut,U,"req"+he+"_")}catch{_&&_(ut)}}if(_e){_=U.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,_}function m_(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Vt||G(),W||(Vt(),W=!0),B.add(h,l),l.v=0}}function Rh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=io(m(l.Fa,l),y_(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,g_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=io(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),yl(this),g_(this))};function kh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function g_(l){l.g=new dr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Vn(l.qa);Te(h,"RID","rpc"),Te(h,"SID",l.K),Te(h,"AID",l.T),Te(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Te(h,"TO",l.ja),Te(h,"TYPE","xmlhttp"),po(l,h),l.m&&l.o&&Ch(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=pl(Vn(h)),p.m=null,p.P=!0,$g(p,l)}t.Za=function(){this.C!=null&&(this.C=null,yl(this),Rh(this),Tt(19))};function wl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function __(l,h){var p=null;if(l.g==h){wl(l),kh(l),l.g=null;var _=2}else if(Ih(l.h,h))p=h.D,Qg(l.h,h),_=1;else return;if(l.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var N=l.B;_=ll(),Et(_,new jg(_,p)),vl(l)}else m_(l);else if(N=h.s,N==3||N==0&&0<h.X||!(_==1&&nA(l,h)||_==2&&Rh(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),N){case 1:ti(l,5);break;case 4:ti(l,10);break;case 3:ti(l,6);break;default:ti(l,2)}}}function y_(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function ti(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),_=l.Xa;const N=!_;_=new ei(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||dl(_,"https"),pl(_),N?QC(_.toString(),p):YC(_.toString(),p)}else Tt(2);l.G=0,l.l&&l.l.sa(h),v_(l),d_(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function v_(l){if(l.G=0,l.ka=[],l.l){const h=Yg(l.h);(h.length!=0||l.i.length!=0)&&(b(l.ka,h),b(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function w_(l,h,p){var _=p instanceof ei?Vn(p):new ei(p);if(_.g!="")h&&(_.g=h+"."+_.g),fl(_,_.s);else{var N=a.location;_=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var O=new ei(null);_&&dl(O,_),h&&(O.g=h),N&&fl(O,N),p&&(O.l=p),_=O}return p=l.D,h=l.ya,p&&h&&Te(_,p,h),Te(_,"VER",l.la),po(l,_),_}function E_(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ne(new ml({eb:p})):new Ne(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function T_(){}t=T_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function El(){}El.prototype.g=function(l,h){return new jt(l,h)};function jt(l,h){lt.call(this),this.g=new h_(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Bi(this)}C(jt,lt),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Ah(this.g)},jt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=ph(l),l=p);h.i.push(new jC(h.Ya++,l)),h.G==3&&vl(h)},jt.prototype.N=function(){this.g.l=null,delete this.j,Ah(this.g),delete this.g,jt.aa.N.call(this)};function I_(l){gh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}C(I_,gh);function S_(){_h.call(this),this.status=1}C(S_,_h);function Bi(l){this.g=l}C(Bi,T_),Bi.prototype.ua=function(){Et(this.g,"a")},Bi.prototype.ta=function(l){Et(this.g,new I_(l))},Bi.prototype.sa=function(l){Et(this.g,new S_)},Bi.prototype.ra=function(){Et(this.g,"b")},El.prototype.createWebChannel=El.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,KT=function(){return new El},GT=function(){return ll()},HT=Jr,Cf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ul.NO_ERROR=0,ul.TIMEOUT=8,ul.HTTP_ERROR=6,cu=ul,Ug.COMPLETE="complete",qT=Ug,Mg.EventType=no,no.OPEN="a",no.CLOSE="b",no.ERROR="c",no.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Do=Mg,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,WT=Ne}).apply(typeof zl<"u"?zl:typeof self<"u"?self:typeof window<"u"?window:{});const lv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new Dc("@firebase/firestore");function Io(){return Si.logLevel}function K(t,...e){if(Si.logLevel<=ne.DEBUG){const n=e.map(lm);Si.debug(`Firestore (${Gs}): ${t}`,...n)}}function sr(t,...e){if(Si.logLevel<=ne.ERROR){const n=e.map(lm);Si.error(`Firestore (${Gs}): ${t}`,...n)}}function Ns(t,...e){if(Si.logLevel<=ne.WARN){const n=e.map(lm);Si.warn(`Firestore (${Gs}): ${t}`,...n)}}function lm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Gs}) INTERNAL ASSERTION FAILED: `+t;throw sr(e),new Error(e)}function ue(t,e){t||Y()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends hr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class cN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hN{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new QT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new pt(e)}}class dN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new dN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ue(this.o===void 0);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new pN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=gN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function bs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new We(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new We(0,0))}static max(){return new X(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ea.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ea?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Ea{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const _N=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Ea{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return _N.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(me.fromString(e))}static fromName(e){return new Q(me.fromString(e).popFirst(5))}static empty(){return new Q(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new me(e.slice()))}}function yN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new Wr(i,Q.empty(),e)}function vN(t){return new Wr(t.readTime,t.key,-1)}class Wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wr(X.min(),Q.empty(),-1)}static max(){return new Wr(X.max(),Q.empty(),-1)}}function wN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==EN)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function IN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}um.oe=-1;function Ha(t){return t==null}function Qu(t){return t===0&&1/t==-1/0}function SN(t){return typeof t=="number"&&Number.isInteger(t)&&!Qu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function CN(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function XT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ze=class Af{constructor(e,n){this.comparator=e,this.root=n||Fr.EMPTY}insert(e,n){return new Af(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fr.BLACK,null,null))}remove(e){return new Af(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bl(this.root,e,this.comparator,!0)}},Bl=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Fr=class jn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??jn.RED,this.left=i??jn.EMPTY,this.right=s??jn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new jn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return jn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return jn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}};Fr.EMPTY=null,Fr.RED=!0,Fr.BLACK=!1;Fr.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Fr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cv(this.data.getIterator())}getIteratorFrom(e){return new cv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class cv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new st(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new JT("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const AN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(t){if(ue(!!t),typeof t=="string"){let e=0;const n=AN.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ci(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cm(t){const e=t.mapValue.fields.__previous_value__;return Fc(e)?cm(e):e}function Ta(t){const e=qr(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ia{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ia("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ia&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l={mapValue:{}};function Ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fc(t)?4:xN(t)?9007199254740991:kN(t)?10:11:Y()}function bn(t,e){if(t===e)return!0;const n=Ai(t);if(n!==Ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ta(t).isEqual(Ta(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=qr(i.timestampValue),a=qr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ci(i.bytesValue).isEqual(Ci(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),a=Oe(s.doubleValue);return o===a?Qu(o)===Qu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return bs(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(uv(o)!==uv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!bn(o[u],a[u])))return!1;return!0}(t,e);default:return Y()}}function Sa(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Ds(t,e){if(t===e)return 0;const n=Ai(t),r=Ai(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Oe(s.integerValue||s.doubleValue),u=Oe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return hv(t.timestampValue,e.timestampValue);case 4:return hv(Ta(t),Ta(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ci(s),u=Ci(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=de(a[c],u[c]);if(d!==0)return d}return de(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=de(Oe(s.latitude),Oe(o.latitude));return a!==0?a:de(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return dv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const f=s.fields||{},m=o.fields||{},w=(a=f.value)===null||a===void 0?void 0:a.arrayValue,C=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=de(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:dv(w,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===$l.mapValue&&o===$l.mapValue)return 0;if(s===$l.mapValue)return 1;if(o===$l.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=de(u[f],d[f]);if(m!==0)return m;const w=Ds(a[u[f]],c[d[f]]);if(w!==0)return w}return de(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Y()}}function hv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=qr(t),r=qr(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function dv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ds(n[i],r[i]);if(s)return s}return de(n.length,r.length)}function Os(t){return Rf(t)}function Rf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ci(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Rf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Rf(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function Yu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kf(t){return!!t&&"integerValue"in t}function hm(t){return!!t&&"arrayValue"in t}function fv(t){return!!t&&"nullValue"in t}function pv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hu(t){return!!t&&"mapValue"in t}function kN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ho(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ho(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ho(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ho(n)}setAll(e){let n=rt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ho(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());hu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];hu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Mi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new St(Ho(this.value))}}function ZT(t){const e=[];return Mi(t.fields,(n,r)=>{const i=new rt([n]);if(hu(r)){const s=ZT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Qe(e,0,X.min(),X.min(),X.min(),St.empty(),0)}static newFoundDocument(e,n,r,i){return new Qe(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new Qe(e,2,n,X.min(),X.min(),St.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,X.min(),X.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.position=e,this.inclusive=n}}function mv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Ds(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function gv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n="asc"){this.field=e,this.dir=n}}function PN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{}class Ue extends eI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bN(e,n,r):n==="array-contains"?new MN(e,r):n==="in"?new LN(e,r):n==="not-in"?new VN(e,r):n==="array-contains-any"?new FN(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DN(e,r):new ON(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ds(n,this.value)):n!==null&&Ai(this.value)===Ai(n)&&this.matchesComparison(Ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends eI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new vn(e,n)}matches(e){return tI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function tI(t){return t.op==="and"}function nI(t){return NN(t)&&tI(t)}function NN(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function xf(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Os(t.value);if(nI(t))return t.filters.map(e=>xf(e)).join(",");{const e=t.filters.map(n=>xf(n)).join(",");return`${t.op}(${e})`}}function rI(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&bn(r.value,i.value)}(t,e):t instanceof vn?function(r,i){return i instanceof vn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&rI(o,i.filters[a]),!0):!1}(t,e):void Y()}function iI(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Os(n.value)}`}(t):t instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map(iI).join(" ,")+"}"}(t):"Filter"}class bN extends Ue{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class DN extends Ue{constructor(e,n){super(e,"in",n),this.keys=sI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ON extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=sI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class MN extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hm(n)&&Sa(n.arrayValue,this.value)}}class LN extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Sa(this.value.arrayValue,n)}}class VN extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Sa(this.value.arrayValue,n)}}class FN extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Sa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function _v(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jN(t,e,n,r,i,s,o)}function dm(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ha(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Os(r)).join(",")),e.ue=n}return e.ue}function fm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gv(t.startAt,e.startAt)&&gv(t.endAt,e.endAt)}function Pf(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function UN(t,e,n,r,i,s,o,a){return new Li(t,e,n,r,i,s,o,a)}function jc(t){return new Li(t)}function yv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pm(t){return t.collectionGroup!==null}function ys(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new st(rt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ca(s,r))}),n.has(rt.keyField().canonicalString())||e.ce.push(new Ca(rt.keyField(),r))}return e.ce}function Pn(t){const e=J(t);return e.le||(e.le=oI(e,ys(t))),e.le}function zN(t){const e=J(t);return e.he||(e.he=oI(e,t.explicitOrderBy)),e.he}function oI(t,e){if(t.limitType==="F")return _v(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ca(i.field,s)});const n=t.endAt?new Ms(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ms(t.startAt.position,t.startAt.inclusive):null;return _v(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nf(t,e){const n=t.filters.concat([e]);return new Li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xu(t,e,n){return new Li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uc(t,e){return fm(Pn(t),Pn(e))&&t.limitType===e.limitType}function aI(t){return`${dm(Pn(t))}|lt:${t.limitType}`}function Gi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>iI(i)).join(", ")}]`),Ha(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Os(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Os(i)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function zc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ys(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=mv(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ys(r),i)||r.endAt&&!function(o,a,u){const c=mv(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ys(r),i))}(t,e)}function BN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lI(t){return(e,n)=>{let r=!1;for(const i of ys(t)){const s=$N(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $N(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Ds(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Mi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return XT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=new ze(Q.comparator);function or(){return WN}const uI=new ze(Q.comparator);function Oo(...t){let e=uI;for(const n of t)e=e.insert(n.key,n);return e}function cI(t){let e=uI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ci(){return Go()}function hI(){return Go()}function Go(){return new Ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const qN=new ze(Q.comparator),HN=new st(Q.comparator);function re(...t){let e=HN;for(const n of t)e=e.add(n);return e}const GN=new st(de);function KN(){return GN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qu(e)?"-0":e}}function dI(t){return{integerValue:""+t}}function QN(t,e){return SN(e)?dI(e):mm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this._=void 0}}function YN(t,e,n){return t instanceof Aa?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Fc(s)&&(s=cm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ra?pI(t,e):t instanceof ka?mI(t,e):function(i,s){const o=fI(i,s),a=vv(o)+vv(i.Pe);return kf(o)&&kf(i.Pe)?dI(a):mm(i.serializer,a)}(t,e)}function XN(t,e,n){return t instanceof Ra?pI(t,e):t instanceof ka?mI(t,e):n}function fI(t,e){return t instanceof Ju?function(r){return kf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Aa extends Bc{}class Ra extends Bc{constructor(e){super(),this.elements=e}}function pI(t,e){const n=gI(e);for(const r of t.elements)n.some(i=>bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ka extends Bc{constructor(e){super(),this.elements=e}}function mI(t,e){let n=gI(e);for(const r of t.elements)n=n.filter(i=>!bn(i,r));return{arrayValue:{values:n}}}class Ju extends Bc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function vv(t){return Oe(t.integerValue||t.doubleValue)}function gI(t){return hm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n){this.field=e,this.transform=n}}function ZN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ra&&i instanceof Ra||r instanceof ka&&i instanceof ka?bs(r.elements,i.elements,bn):r instanceof Ju&&i instanceof Ju?bn(r.Pe,i.Pe):r instanceof Aa&&i instanceof Aa}(t.transform,e.transform)}class eb{constructor(e,n){this.version=e,this.transformResults=n}}class Ct{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ct}static exists(e){return new Ct(void 0,e)}static updateTime(e){return new Ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function du(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $c{}function _I(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gm(t.key,Ct.none()):new Ga(t.key,t.data,Ct.none());{const n=t.data,r=St.empty();let i=new st(rt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xr(t.key,r,new Bt(i.toArray()),Ct.none())}}function tb(t,e,n){t instanceof Ga?function(i,s,o){const a=i.value.clone(),u=Ev(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Xr?function(i,s,o){if(!du(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ev(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(yI(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ko(t,e,n,r){return t instanceof Ga?function(s,o,a,u){if(!du(s.precondition,o))return a;const c=s.value.clone(),d=Tv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xr?function(s,o,a,u){if(!du(s.precondition,o))return a;const c=Tv(s.fieldTransforms,u,o),d=o.data;return d.setAll(yI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return du(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function nb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=fI(r.transform,i||null);s!=null&&(n===null&&(n=St.empty()),n.set(r.field,s))}return n||null}function wv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&bs(r,i,(s,o)=>ZN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ga extends $c{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xr extends $c{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function yI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ev(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,XN(o,a,n[i]))}return r}function Tv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,YN(s,o,e))}return r}class gm extends $c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vI extends $c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&tb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=_I(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&bs(this.mutations,e.mutations,(n,r)=>wv(n,r))&&bs(this.baseMutations,e.baseMutations,(n,r)=>wv(n,r))}}class _m{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return qN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new _m(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,oe;function wI(t){switch(t){default:return Y();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function EI(t){if(t===void 0)return sr("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ve.OK:return M.OK;case Ve.CANCELLED:return M.CANCELLED;case Ve.UNKNOWN:return M.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return M.INTERNAL;case Ve.UNAVAILABLE:return M.UNAVAILABLE;case Ve.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ve.NOT_FOUND:return M.NOT_FOUND;case Ve.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ve.ABORTED:return M.ABORTED;case Ve.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ve.DATA_LOSS:return M.DATA_LOSS;default:return Y()}}(oe=Ve||(Ve={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new gi([4294967295,4294967295],0);function Iv(t){const e=ab().encode(t),n=new $T;return n.update(e),new Uint8Array(n.digest())}function Sv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new gi([n,r],0),new gi([i,s],0)]}class ym{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Mo(`Invalid padding: ${n}`);if(r<0)throw new Mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Mo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Mo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=gi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(gi.fromNumber(r)));return i.compare(lb)===1&&(i=new gi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Iv(e),[r,i]=Sv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ym(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Iv(e),[r,i]=Sv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ka.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wc(X.min(),i,new ze(de),or(),re())}}class Ka{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ka(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class TI{constructor(e,n){this.targetId=e,this.me=n}}class II{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Cv{constructor(){this.fe=0,this.ge=Rv(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Ka(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Rv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ub{constructor(e){this.Le=e,this.Be=new Map,this.ke=or(),this.qe=Av(),this.Qe=new ze(de)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Pf(s))if(r===0){const o=new Q(s.path);this.Ue(n,o,Qe.newNoDocument(o,X.min()))}else ue(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ci(r).toUint8Array()}catch(u){if(u instanceof JT)return Ns("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new ym(o,i,s)}catch(u){return Ns(u instanceof Mo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Pf(a.target)){const u=new Q(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Qe.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=re();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Wc(e,n,this.Qe,this.ke,r);return this.ke=or(),this.qe=Av(),this.Qe=new ze(de),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Cv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new st(de),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Cv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Av(){return new ze(Q.comparator)}function Rv(){return new ze(Q.comparator)}const cb={asc:"ASCENDING",desc:"DESCENDING"},hb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},db={and:"AND",or:"OR"};class fb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bf(t,e){return t.useProto3Json||Ha(e)?e:{value:e}}function Zu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pb(t,e){return Zu(t,e.toTimestamp())}function Wt(t){return ue(!!t),X.fromTimestamp(function(n){const r=qr(n);return new We(r.seconds,r.nanos)}(t))}function vm(t,e){return Df(t,e).canonicalString()}function Df(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function CI(t){const e=me.fromString(t);return ue(bI(e)),e}function ec(t,e){return vm(t.databaseId,e.path)}function Qo(t,e){const n=CI(e);if(n.get(1)!==t.databaseId.projectId)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(RI(n))}function AI(t,e){return vm(t.databaseId,e)}function mb(t){const e=CI(t);return e.length===4?me.emptyPath():RI(e)}function Of(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function RI(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kv(t,e,n){return{name:ec(t,e),fields:n.value.mapValue.fields}}function gb(t,e){return"found"in e?function(r,i){ue(!!i.found),i.found.name,i.found.updateTime;const s=Qo(r,i.found.name),o=Wt(i.found.updateTime),a=i.found.createTime?Wt(i.found.createTime):X.min(),u=new St({mapValue:{fields:i.found.fields}});return Qe.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){ue(!!i.missing),ue(!!i.readTime);const s=Qo(r,i.missing),o=Wt(i.readTime);return Qe.newNoDocument(s,o)}(t,e):Y()}function _b(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ue(d===void 0||typeof d=="string"),at.fromBase64String(d||"")):(ue(d===void 0||d instanceof Buffer||d instanceof Uint8Array),at.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?M.UNKNOWN:EI(c.code);return new z(d,c.message||"")}(o);n=new II(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qo(t,r.document.name),s=Wt(r.document.updateTime),o=r.document.createTime?Wt(r.document.createTime):X.min(),a=new St({mapValue:{fields:r.document.fields}}),u=Qe.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new fu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qo(t,r.document),s=r.readTime?Wt(r.readTime):X.min(),o=Qe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new fu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qo(t,r.document),s=r.removedTargetIds||[];n=new fu([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ob(i,s),a=r.targetId;n=new TI(a,o)}}return n}function kI(t,e){let n;if(e instanceof Ga)n={update:kv(t,e.key,e.value)};else if(e instanceof gm)n={delete:ec(t,e.key)};else if(e instanceof Xr)n={update:kv(t,e.key,e.data),updateMask:Ab(e.fieldMask)};else{if(!(e instanceof vI))return Y();n={verify:ec(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Aa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ra)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ka)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ju)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:pb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function yb(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Wt(i.updateTime):Wt(s);return o.isEqual(X.min())&&(o=Wt(s)),new eb(o,i.transformResults||[])}(n,e))):[]}function vb(t,e){return{documents:[AI(t,e.path)]}}function xI(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=AI(t,i);const s=function(c){if(c.length!==0)return NI(vn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Sr(m.field),direction:Ib(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=bf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function wb(t,e,n,r){const{_t:i,parent:s}=xI(t,e),o={},a=[];let u=0;return n.forEach(c=>{const d="aggregate_"+u++;o[d]=c.alias,c.aggregateType==="count"?a.push({alias:d,count:{}}):c.aggregateType==="avg"?a.push({alias:d,avg:{field:Sr(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:d,sum:{field:Sr(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ut:o,parent:s}}function Eb(t){let e=mb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=PI(f);return m instanceof vn&&nI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(C){return new Ca(Ki(C.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Ha(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,w=f.values||[];return new Ms(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,w=f.values||[];return new Ms(w,m)}(n.endAt)),UN(e,i,o,s,a,"F",u,c)}function Tb(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function PI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ki(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ki(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ki(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ki(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(r=>PI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function Ib(t){return cb[t]}function Sb(t){return hb[t]}function Cb(t){return db[t]}function Sr(t){return{fieldPath:t.canonicalString()}}function Ki(t){return rt.fromServerFormat(t.fieldPath)}function NI(t){return t instanceof Ue?function(n){if(n.op==="=="){if(pv(n.value))return{unaryFilter:{field:Sr(n.field),op:"IS_NAN"}};if(fv(n.value))return{unaryFilter:{field:Sr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(pv(n.value))return{unaryFilter:{field:Sr(n.field),op:"IS_NOT_NAN"}};if(fv(n.value))return{unaryFilter:{field:Sr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sr(n.field),op:Sb(n.op),value:n.value}}}(t):t instanceof vn?function(n){const r=n.getFilters().map(i=>NI(i));return r.length===1?r[0]:{compositeFilter:{op:Cb(n.op),filters:r}}}(t):Y()}function Ab(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,r,i,s=X.min(),o=X.min(),a=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.ct=e}}function kb(t){const e=Eb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.un=new Pb}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Wr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Wr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Pb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new st(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new st(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ls(0)}static kn(){return new Ls(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.changes=new Ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ko(r.mutation,i,Bt.empty(),We.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=ci();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Oo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ci();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=or();const o=Go(),a=function(){return Go()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Xr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ko(d.mutation,c,d.mutation.getFieldMask(),We.now())):o.set(c.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new bb(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Go();let i=new ze((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Bt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||re()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=hI();d.forEach(m=>{if(!s.has(m)){const w=_I(n.get(m),r.get(m));w!==null&&f.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(ci());let a=-1,u=s;return o.next(c=>L.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(d=>({batchId:a,changes:cI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Oo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Oo();return this.indexManager.getCollectionParents(e,s).next(a=>L.forEach(a,u=>{const c=function(f,m){return new Li(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Qe.newInvalidDocument(d)))});let a=Oo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Ko(d.mutation,c,Bt.empty(),We.now()),zc(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Wt(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:kb(i.bundledQuery),readTime:Wt(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(){this.overlays=new ze(Q.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ci();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=ci(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ze((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ci(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=ci(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return L.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ib(n,r));let s=this.Ir.get(n);s===void 0&&(s=re(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.Tr=new st(He.Er),this.dr=new st(He.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new He(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new me([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new me([])),r=new He(n,e),i=new He(n,e+1);let s=re();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||de(e.wr,n.wr)}static Ar(e,n){return de(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new st(He.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rb(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new He(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(de);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new He(new Q(s),0);let a=new st(de);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),L.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new He(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.Mr=e,this.docs=function(){return new ze(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let r=or();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Qe.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=or();const o=n.path,a=new Q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||wN(vN(d),r)<=0||(i.has(d.key)||zc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jb(this)}getSize(e){return L.resolve(this.size)}}class jb extends Nb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.persistence=e,this.Nr=new Ks(n=>dm(n),fm),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new wm,this.targetCount=0,this.kr=Ls.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new um(0),this.Kr=!1,this.Kr=!0,this.$r=new Lb,this.referenceDelegate=e(this),this.Ur=new Ub(this),this.indexManager=new xb,this.remoteDocumentCache=function(i){return new Fb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Rb(n),this.Gr=new Ob(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Mb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Vb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new Bb(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Bb extends TN{constructor(e){super(),this.currentSequenceNumber=e}}class Em{constructor(e){this.persistence=e,this.Jr=new wm,this.Yr=null}static Zr(e){return new Em(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Tm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Bk()?8:IN(wt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new $b;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Io()<=ne.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Gi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Io()<=ne.DEBUG&&K("QueryEngine","Query:",Gi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Io()<=ne.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Gi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):L.resolve())}Yi(e,n){if(yv(n))return L.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xu(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Xu(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return yv(n)||i.isEqual(X.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(Io()<=ne.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gi(n)),this.rs(e,o,n,yN(i,-1)).next(a=>a))})}ts(e,n){let r=new st(lI(e));return n.forEach((i,s)=>{zc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Io()<=ne.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Gi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Wr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ze(de),this._s=new Ks(s=>dm(s),fm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Db(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Hb(t,e,n,r){return new qb(t,e,n,r)}async function DI(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=re();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function Gb(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let w=L.resolve();return m.forEach(C=>{w=w.next(()=>d.getEntry(u,C)).next(k=>{const b=c.docVersions.get(C);ue(b!==null),k.version.compareTo(b)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function OI(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Kb(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken(at.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(f,w),function(k,b,E){return k.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,w,d)&&a.push(n.Ur.updateTargetData(s,w))});let u=or(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(Qb(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(X.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return L.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function Qb(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=or();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Yb(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Xb(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Mf(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qa(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function xv(t,e,n){const r=J(t);let i=X.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=J(u),m=f._s.get(d);return m!==void 0?L.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,o,Pn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:re())).next(a=>(Jb(r,BN(e),a),{documents:a,Ts:s})))}function Jb(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Pv{constructor(){this.activeTargetIds=KN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zb{constructor(){this.so=new Pv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Pv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl=null;function ud(){return Wl===null?Wl=function(){return 268435456+Math.round(2147483648*Math.random())}():Wl++,"0x"+Wl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class rD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=ud(),u=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(K("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Ns("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=tD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=ud();return new Promise((o,a)=>{const u=new WT;u.setWithCredentials(!0),u.listenOnce(qT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case cu.NO_ERROR:const d=u.getResponseJson();K(ft,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case cu.TIMEOUT:K(ft,`RPC '${e}' ${s} timed out`),a(new z(M.DEADLINE_EXCEEDED,"Request time out"));break;case cu.HTTP_ERROR:const f=u.getStatus();if(K(ft,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const C=function(b){const E=b.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(E)>=0?E:M.UNKNOWN}(w.status);a(new z(C,w.message))}else a(new z(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new z(M.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{K(ft,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);K(ft,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=ud(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=KT(),a=GT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");K(ft,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,w=!1;const C=new nD({Io:b=>{w?K(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(K(ft,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),K(ft,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},To:()=>f.close()}),k=(b,E,y)=>{b.listen(E,R=>{try{y(R)}catch(D){setTimeout(()=>{throw D},0)}})};return k(f,Do.EventType.OPEN,()=>{w||(K(ft,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),k(f,Do.EventType.CLOSE,()=>{w||(w=!0,K(ft,`RPC '${e}' stream ${i} transport closed`),C.So())}),k(f,Do.EventType.ERROR,b=>{w||(w=!0,Ns(ft,`RPC '${e}' stream ${i} transport errored:`,b),C.So(new z(M.UNAVAILABLE,"The operation could not be completed")))}),k(f,Do.EventType.MESSAGE,b=>{var E;if(!w){const y=b.data[0];ue(!!y);const R=y,D=R.error||((E=R[0])===null||E===void 0?void 0:E.error);if(D){K(ft,`RPC '${e}' stream ${i} received error:`,D);const j=D.status;let F=function(I){const A=Ve[I];if(A!==void 0)return EI(A)}(j),T=D.message;F===void 0&&(F=M.INTERNAL,T="Unknown error status: "+j+" with message "+D.message),w=!0,C.So(new z(F,T)),f.close()}else K(ft,`RPC '${e}' stream ${i} received:`,y),C.bo(y)}}),k(a,HT.STAT_EVENT,b=>{b.stat===Cf.PROXY?K(ft,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Cf.NOPROXY&&K(ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function cd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){return new fb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Im(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(sr(n.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iD extends MI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=_b(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Wt(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Of(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Pf(u)?{documents:vb(s,u)}:{query:xI(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=SI(s,o.resumeToken);const c=bf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Zu(s,o.snapshotVersion.toTimestamp());const c=bf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=Tb(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Of(this.serializer),n.removeTarget=e,this.a_(n)}}class sD extends MI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=yb(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Of(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kI(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Df(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Df(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class aD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(sr(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Vi(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.L_.add(4),await Qa(c),c.q_.set("Unknown"),c.L_.delete(4),await Hc(c)}(this))})}),this.q_=new aD(r,i)}}async function Hc(t){if(Vi(t))for(const e of t.B_)await e(!0)}async function Qa(t){for(const e of t.B_)await e(!1)}function LI(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Rm(n)?Am(n):Qs(n).r_()&&Cm(n,e))}function Sm(t,e){const n=J(t),r=Qs(n);n.N_.delete(e),r.r_()&&VI(n,e),n.N_.size===0&&(r.r_()?r.o_():Vi(n)&&n.q_.set("Unknown"))}function Cm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).A_(e)}function VI(t,e){t.Q_.xe(e),Qs(t).R_(e)}function Am(t){t.Q_=new ub({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.q_.v_()}function Rm(t){return Vi(t)&&!Qs(t).n_()&&t.N_.size>0}function Vi(t){return J(t).L_.size===0}function FI(t){t.Q_=void 0}async function uD(t){t.q_.set("Online")}async function cD(t){t.N_.forEach((e,n)=>{Cm(t,e)})}async function hD(t,e){FI(t),Rm(t)?(t.q_.M_(e),Am(t)):t.q_.set("Unknown")}async function dD(t,e,n){if(t.q_.set("Online"),e instanceof II&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await tc(t,r)}else if(e instanceof fu?t.Q_.Ke(e):e instanceof TI?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await OI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(at.EMPTY_BYTE_STRING,d.snapshotVersion)),VI(s,u);const f=new Rr(d.target,u,c,d.sequenceNumber);Cm(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await tc(t,r)}}async function tc(t,e,n){if(!qa(e))throw e;t.L_.add(1),await Qa(t),t.q_.set("Offline"),n||(n=()=>OI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Hc(t)})}function jI(t,e){return e().catch(n=>tc(t,n,e))}async function Gc(t){const e=J(t),n=Hr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;fD(e);)try{const i=await Yb(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,pD(e,i)}catch(i){await tc(e,i)}UI(e)&&zI(e)}function fD(t){return Vi(t)&&t.O_.length<10}function pD(t,e){t.O_.push(e);const n=Hr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function UI(t){return Vi(t)&&!Hr(t).n_()&&t.O_.length>0}function zI(t){Hr(t).start()}async function mD(t){Hr(t).p_()}async function gD(t){const e=Hr(t);for(const n of t.O_)e.m_(n.mutations)}async function _D(t,e,n){const r=t.O_.shift(),i=_m.from(r,e,n);await jI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Gc(t)}async function yD(t,e){e&&Hr(t).V_&&await async function(r,i){if(function(o){return wI(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();Hr(r).s_(),await jI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Gc(r)}}(t,e),UI(t)&&zI(t)}async function bv(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Vi(n);n.L_.add(3),await Qa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Hc(n)}async function vD(t,e){const n=J(t);e?(n.L_.delete(2),await Hc(n)):e||(n.L_.add(2),await Qa(n),n.q_.set("Unknown"))}function Qs(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new iD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:uD.bind(null,t),Ro:cD.bind(null,t),mo:hD.bind(null,t),d_:dD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Rm(t)?Am(t):t.q_.set("Unknown")):(await t.K_.stop(),FI(t))})),t.K_}function Hr(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new sD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:mD.bind(null,t),mo:yD.bind(null,t),f_:gD.bind(null,t),g_:_D.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Gc(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new km(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xm(t,e){if(sr("AsyncQueue",`${e}: ${t}`),qa(t))return new z(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Oo(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new vs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(){this.W_=new ze(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Vs{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Vs(e,n,vs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class ED{constructor(){this.queries=Ov(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=Ov(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new z(M.ABORTED,"Firestore shutting down"))}}function Ov(){return new Ks(t=>aI(t),Uc)}async function Pm(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new wD,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=xm(o,`Initialization of query '${Gi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&bm(n)}async function Nm(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function TD(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&bm(n)}function ID(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function bm(t){t.Y_.forEach(e=>{e.next()})}var Lf,Mv;(Mv=Lf||(Lf={})).ea="default",Mv.Cache="cache";class Dm{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Lf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.key=e}}class $I{constructor(e){this.key=e}}class SD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=lI(e),this.Ra=new vs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Dv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),w=zc(this.query,f)?f:null,C=!!m&&this.mutatedKeys.has(m.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let b=!1;m&&w?m.data.isEqual(w.data)?C!==k&&(r.track({type:3,doc:w}),b=!0):this.ga(m,w)||(r.track({type:2,doc:w}),b=!0,(u&&this.Aa(w,u)>0||c&&this.Aa(w,c)<0)&&(a=!0)):!m&&w?(r.track({type:0,doc:w}),b=!0):m&&!w&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(a=!0)),b&&(w?(o=o.add(w),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(w,C){const k=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return k(w)-k(C)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Vs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Dv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new $I(r))}),this.da.forEach(r=>{e.has(r)||n.push(new BI(r))}),n}ba(e){this.Ta=e.Ts,this.da=re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Vs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class CD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AD{constructor(e){this.key=e,this.va=!1}}class RD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ks(a=>aI(a),Uc),this.Ma=new Map,this.xa=new Set,this.Oa=new ze(Q.comparator),this.Na=new Map,this.La=new wm,this.Ba={},this.ka=new Map,this.qa=Ls.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function kD(t,e,n=!0){const r=QI(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await WI(r,e,n,!0),i}async function xD(t,e){const n=QI(t);await WI(n,e,!0,!1)}async function WI(t,e,n,r){const i=await Xb(t.localStore,Pn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await PD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&LI(t.remoteStore,i),a}async function PD(t,e,n,r,i){t.Ka=(f,m,w)=>async function(k,b,E,y){let R=b.view.ma(E);R.ns&&(R=await xv(k.localStore,b.query,!1).then(({documents:T})=>b.view.ma(T,R)));const D=y&&y.targetChanges.get(b.targetId),j=y&&y.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(R,k.isPrimaryClient,D,j);return Vv(k,b.targetId,F.wa),F.snapshot}(t,f,m,w);const s=await xv(t.localStore,e,!0),o=new SD(e,s.Ts),a=o.ma(s.documents),u=Ka.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Vv(t,n,c.wa);const d=new CD(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function ND(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Uc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Mf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sm(r.remoteStore,i.targetId),Vf(r,i.targetId)}).catch(Wa)):(Vf(r,i.targetId),await Mf(r.localStore,i.targetId,!0))}async function bD(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sm(n.remoteStore,r.targetId))}async function DD(t,e,n){const r=UD(t);try{const i=await function(o,a){const u=J(o),c=We.now(),d=a.reduce((w,C)=>w.add(C.key),re());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let C=or(),k=re();return u.cs.getEntries(w,d).next(b=>{C=b,C.forEach((E,y)=>{y.isValidDocument()||(k=k.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,C)).next(b=>{f=b;const E=[];for(const y of a){const R=nb(y,f.get(y.key).overlayedDocument);R!=null&&E.push(new Xr(y.key,R,ZT(R.value.mapValue),Ct.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,E,a)}).next(b=>{m=b;const E=b.applyToLocalDocumentSet(f,k);return u.documentOverlayCache.saveOverlays(w,b.batchId,E)})}).then(()=>({batchId:m.batchId,changes:cI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new ze(de)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ya(r,i.changes),await Gc(r.remoteStore)}catch(i){const s=xm(i,"Failed to persist write");n.reject(s)}}async function qI(t,e){const n=J(t);try{const r=await Kb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ue(o.va):i.removedDocuments.size>0&&(ue(o.va),o.va=!1))}),await Ya(n,r,e)}catch(r){await Wa(r)}}function Lv(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=J(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&bm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OD(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ze(Q.comparator);o=o.insert(s,Qe.newNoDocument(s,X.min()));const a=re().add(s),u=new Wc(X.min(),new Map,new ze(de),o,a);await qI(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Om(r)}else await Mf(r.localStore,e,!1).then(()=>Vf(r,e,n)).catch(Wa)}async function MD(t,e){const n=J(t),r=e.batch.batchId;try{const i=await Gb(n.localStore,e);GI(n,r,null),HI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ya(n,i)}catch(i){await Wa(i)}}async function LD(t,e,n){const r=J(t);try{const i=await function(o,a){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ue(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);GI(r,e,n),HI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ya(r,i)}catch(i){await Wa(i)}}function HI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function GI(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Vf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||KI(t,r)})}function KI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Sm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Om(t))}function Vv(t,e,n){for(const r of n)r instanceof BI?(t.La.addReference(r.key,e),VD(t,r)):r instanceof $I?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||KI(t,r.key)):Y()}function VD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),Om(t))}function Om(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(me.fromString(e)),r=t.qa.next();t.Na.set(r,new AD(n)),t.Oa=t.Oa.insert(n,r),LI(t.remoteStore,new Rr(Pn(jc(n.path)),r,"TargetPurposeLimboResolution",um.oe))}}async function Ya(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Tm.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>L.forEach(c,m=>L.forEach(m.$i,w=>d.persistence.referenceDelegate.addReference(f,m.targetId,w)).next(()=>L.forEach(m.Ui,w=>d.persistence.referenceDelegate.removeReference(f,m.targetId,w)))))}catch(f){if(!qa(f))throw f;K("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const w=d.os.get(m),C=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(C);d.os=d.os.insert(m,k)}}}(r.localStore,s))}async function FD(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await DI(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new z(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ya(n,r.hs)}}function jD(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return re().add(r.key);{let i=re();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function QI(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OD.bind(null,e),e.Ca.d_=TD.bind(null,e.eventManager),e.Ca.$a=ID.bind(null,e.eventManager),e}function UD(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LD.bind(null,e),e}class nc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Hb(this.persistence,new Wb,e.initialUser,this.serializer)}Ga(e){return new zb(Em.Zr,this.serializer)}Wa(e){return new Zb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nc.provider={build:()=>new nc};class Ff{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FD.bind(null,this.syncEngine),await vD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ED}()}createDatastore(e){const n=qc(e.databaseInfo.databaseId),r=function(s){return new rD(s)}(e.databaseInfo);return function(s,o,a,u){return new oD(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new lD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Lv(this.syncEngine,n,0),function(){return Nv.D()?new Nv:new eD}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new RD(i,s,o,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);K("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Qa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ff.provider={build:()=>new Ff};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(M.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=J(i),a={documents:s.map(f=>ec(o.serializer,f))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,me.emptyPath(),a,s.length),c=new Map;u.forEach(f=>{const m=gb(o.serializer,f);c.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=c.get(f.toString());ue(!!m),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new gm(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=Q.fromPath(r);this.mutations.push(new vI(i,this.precondition(i)))}),await async function(r,i){const s=J(r),o={writes:i.map(a=>kI(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,me.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Y();n=X.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new z(M.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(X.min())?Ct.exists(!1):Ct.updateTime(n):Ct.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(X.min()))throw new z(M.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ct.updateTime(n)}return Ct.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new Im(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new zD(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!Ha(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!wI(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=YT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hd(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await DI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WD(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>bv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>bv(e.remoteStore,i)),t._onlineComponents=e}async function WD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await hd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ns("Error using user provided cache. Falling back to memory cache: "+n),await hd(t,new nc)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await hd(t,new nc);return t._offlineComponents}async function Lm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await Fv(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await Fv(t,new Ff))),t._onlineComponents}function qD(t){return Lm(t).then(e=>e.syncEngine)}function YI(t){return Lm(t).then(e=>e.datastore)}async function rc(t){const e=await Lm(t),n=e.eventManager;return n.onListen=kD.bind(null,e.syncEngine),n.onUnlisten=ND.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=bD.bind(null,e.syncEngine),n}function HD(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Mm({next:m=>{d.Za(),o.enqueueAndForget(()=>Nm(s,f));const w=m.docs.has(a);!w&&m.fromCache?c.reject(new z(M.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?c.reject(new z(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Dm(jc(a.path),d,{includeMetadataChanges:!0,_a:!0});return Pm(s,f)}(await rc(t),t.asyncQueue,e,n,r)),r.promise}function GD(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Mm({next:m=>{d.Za(),o.enqueueAndForget(()=>Nm(s,f)),m.fromCache&&u.source==="server"?c.reject(new z(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Dm(a,d,{includeMetadataChanges:!0,_a:!0});return Pm(s,f)}(await rc(t),t.asyncQueue,e,n,r)),r.promise}function KD(t,e,n){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await YI(t);r.resolve(async function(o,a,u){var c;const d=J(o),{request:f,ut:m,parent:w}=wb(d.serializer,zN(a),u);d.connection.Fo||delete f.parent;const C=(await d.Lo("RunAggregationQuery",d.serializer.databaseId,w,f,1)).filter(b=>!!b.result);ue(C.length===1);const k=(c=C[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(k).reduce((b,E)=>(b[m[E]]=k[E],b),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t,e,n){if(!n)throw new z(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QD(t,e,n,r){if(e===!0&&r===!0)throw new z(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Uv(t){if(!Q.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zv(t){if(Q.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kc(t);throw new z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function YD(t,e){if(e<=0)throw new z(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uN;switch(r.type){case"firstParty":return new fN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jv.get(n);r&&(K("ComponentProvider","Removing Datastore"),jv.delete(n),r.terminate())}(this),Promise.resolve()}}function XD(t,e,n,r={}){var i;const s=(t=qt(t,Qc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=pt.MOCK_USER;else{a=rT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new pt(c)}t._authCredentials=new cN(new QT(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new On(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class jr extends On{constructor(e,n,r){super(e,n,jc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new Q(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function Yc(t,e,...n){if(t=De(t),JI("collection","path",e),t instanceof Qc){const r=me.fromString(e,...n);return zv(r),new jr(t,null,r)}{if(!(t instanceof _t||t instanceof jr))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return zv(r),new jr(t.firestore,null,r)}}function sn(t,e,...n){if(t=De(t),arguments.length===1&&(e=YT.newId()),JI("doc","path",e),t instanceof Qc){const r=me.fromString(e,...n);return Uv(r),new _t(t,null,new Q(r))}{if(!(t instanceof _t||t instanceof jr))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Uv(r),new _t(t.firestore,t instanceof jr?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Im(this,"async_queue_retry"),this.Vu=()=>{const r=cd();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=cd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=cd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new gn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!qa(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw sr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=km.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Wv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ar extends Qc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new $v,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $v(e),this._firestoreClient=void 0,await e}}}function JD(t,e){const n=typeof t=="object"?t:Yp(),r=typeof t=="string"?t:"(default)",i=Oc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=eT("firestore");s&&XD(i,...s)}return i}function Ys(t){if(t._terminated)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ZD(t),t._firestoreClient}function ZD(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new RN(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,XI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new $D(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class t2{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ri(at.fromBase64String(e))}catch(n){throw new z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ri(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=/^__.*__$/;class r2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ga(e,this.data,n,this.fieldTransforms)}}class ZI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function eS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class jm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new jm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ic(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(eS(this.Cu)&&n2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class i2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qc(e)}Qu(e,n,r,i=!1){return new jm({Cu:e,methodName:n,qu:r,path:rt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xa(t){const e=t._freezeSettings(),n=qc(t._databaseId);return new i2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Um(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Bm("Data must be an object, but it was:",o,r);const a=nS(r,o);let u,c;if(s.merge)u=new Bt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=jf(e,f,n);if(!o.contains(m))throw new z(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);iS(d,m)||d.push(m)}u=new Bt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new r2(new St(a),u,c)}class Zc extends Jc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zc}}class zm extends Jc{_toFieldTransform(e){return new JN(e.path,new Aa)}isEqual(e){return e instanceof zm}}function s2(t,e,n,r){const i=t.Qu(1,e,n);Bm("Data must be an object, but it was:",i,r);const s=[],o=St.empty();Mi(r,(u,c)=>{const d=$m(e,u,n);c=De(c);const f=i.Nu(d);if(c instanceof Zc)s.push(d);else{const m=Ja(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new Bt(s);return new ZI(o,a,i.fieldTransforms)}function o2(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[jf(e,r,n)],u=[i];if(s.length%2!=0)throw new z(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(jf(e,s[m])),u.push(s[m+1]);const c=[],d=St.empty();for(let m=a.length-1;m>=0;--m)if(!iS(c,a[m])){const w=a[m];let C=u[m];C=De(C);const k=o.Nu(w);if(C instanceof Zc)c.push(w);else{const b=Ja(C,k);b!=null&&(c.push(w),d.set(w,b))}}const f=new Bt(c);return new ZI(d,f,o.fieldTransforms)}function tS(t,e,n,r=!1){return Ja(n,t.Qu(r?4:3,e))}function Ja(t,e){if(rS(t=De(t)))return Bm("Unsupported field value:",e,t),nS(t,e);if(t instanceof Jc)return function(r,i){if(!eS(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Ja(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return QN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=We.fromDate(r);return{timestampValue:Zu(i.serializer,s)}}if(r instanceof We){const s=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zu(i.serializer,s)}}if(r instanceof Vm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ri)return{bytesValue:SI(i.serializer,r._byteString)};if(r instanceof _t){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:vm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Fm)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return mm(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Kc(r)}`)}(t,e)}function nS(t,e){const n={};return XT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mi(t,(r,i)=>{const s=Ja(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Vm||t instanceof Ri||t instanceof _t||t instanceof Jc||t instanceof Fm)}function Bm(t,e,n){if(!rS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Kc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function jf(t,e,n){if((e=De(e))instanceof Xc)return e._internalPath;if(typeof e=="string")return $m(t,e);throw ic("Field path arguments must be of type string or ",t,!1,void 0,n)}const a2=new RegExp("[~\\*/\\[\\]]");function $m(t,e,n){if(e.search(a2)>=0)throw ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xc(...e.split("."))._internalPath}catch{throw ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ic(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(M.INVALID_ARGUMENT,a+t+u)}function iS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new l2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class l2 extends xa{data(){return super.data()}}function Wm(t,e){return typeof e=="string"?$m(t,e):e instanceof Xc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qm{}class eh extends qm{}function oS(t,e,...n){let r=[];e instanceof qm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Gm).length,a=s.filter(u=>u instanceof Hm).length;if(o>1||o>0&&a>0)throw new z(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Hm extends eh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Hm(e,n,r)}_apply(e){const n=this._parse(e);return uS(e._query,n),new On(e.firestore,e.converter,Nf(e._query,n))}_parse(e){const n=Xa(e.firestore);return function(s,o,a,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Hv(f,d);const w=[];for(const C of f)w.push(qv(u,s,C));m={arrayValue:{values:w}}}else m=qv(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Hv(f,d),m=tS(a,o,f,d==="in"||d==="not-in");return Ue.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Gm extends qm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)uS(o,u),o=Nf(o,u)}(e._query,n),new On(e.firestore,e.converter,Nf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Km extends eh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Km(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ca(s,o)}(e._query,this._field,this._direction);return new On(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Li(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function aS(t,e="asc"){const n=e,r=Wm("orderBy",t);return Km._create(r,n)}class Qm extends eh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Qm(e,n,r)}_apply(e){return new On(e.firestore,e.converter,Xu(e._query,this._limit,this._limitType))}}function lS(t){return YD("limit",t),Qm._create("limit",t,"F")}class Ym extends eh{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ym(e,n,r)}_apply(e){const n=c2(e,this.type,this._docOrFields,this._inclusive);return new On(e.firestore,e.converter,function(i,s){return new Li(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function u2(...t){return Ym._create("startAfter",t,!1)}function c2(t,e,n,r){if(n[0]=De(n[0]),n[0]instanceof xa)return function(s,o,a,u,c){if(!u)throw new z(M.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of ys(s))if(f.field.isKeyField())d.push(Yu(o,u.key));else{const m=u.data.field(f.field);if(Fc(m))throw new z(M.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const w=f.field.canonicalString();throw new z(M.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${w}' (used as the orderBy) does not exist.`)}d.push(m)}return new Ms(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Xa(t.firestore);return function(o,a,u,c,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new z(M.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const w=[];for(let C=0;C<d.length;C++){const k=d[C];if(m[C].field.isKeyField()){if(typeof k!="string")throw new z(M.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!pm(o)&&k.indexOf("/")!==-1)throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const b=o.path.child(me.fromString(k));if(!Q.isDocumentKey(b))throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const E=new Q(b);w.push(Yu(a,E))}else{const b=tS(u,c,k);w.push(b)}}return new Ms(w,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function qv(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new z(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pm(e)&&n.indexOf("/")!==-1)throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!Q.isDocumentKey(r))throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yu(t,new Q(r))}if(n instanceof _t)return Yu(t,n._key);throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kc(n)}.`)}function Hv(t,e){if(!Array.isArray(t)||t.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uS(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class cS{convertValue(e,n="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Oe(o.doubleValue));return new Fm(s)}convertGeoPoint(e){return new Vm(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ta(e));default:return null}}convertTimestamp(e){const n=qr(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);ue(bI(r));const i=new Ia(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class h2 extends cS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ri(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function d2(){return new e2("count")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jm extends xa{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Wm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pu extends Jm{data(e={}){return super.data(e)}}class hS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new as(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pu(this._firestore,this._userDataWriter,r.key,r,new as(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new pu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new as(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new pu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new as(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:f2(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function f2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){t=qt(t,_t);const e=qt(t.firestore,ar);return HD(Ys(e),t._key).then(n=>fS(e,t,n))}class Za extends cS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ri(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function p2(t){t=qt(t,On);const e=qt(t.firestore,ar),n=Ys(e),r=new Za(e);return sS(t._query),GD(n,t._query).then(i=>new hS(e,r,t,i))}function th(t,e,n){t=qt(t,_t);const r=qt(t.firestore,ar),i=Xm(t.converter,e,n);return dS(r,[Um(Xa(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ct.none())])}function m2(t,e){const n=qt(t.firestore,ar),r=sn(t),i=Xm(t.converter,e);return dS(n,[Um(Xa(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ct.exists(!1))]).then(()=>r)}function g2(t,...e){var n,r,i;t=De(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Wv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Wv(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof _t)c=qt(t.firestore,ar),d=jc(t._key.path),u={next:f=>{e[o]&&e[o](fS(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=qt(t,On);c=qt(f.firestore,ar),d=f._query;const m=new Za(c);u={next:w=>{e[o]&&e[o](new hS(c,m,f,w))},error:e[o+1],complete:e[o+2]},sS(t._query)}return function(m,w,C,k){const b=new Mm(k),E=new Dm(w,b,C);return m.asyncQueue.enqueueAndForget(async()=>Pm(await rc(m),E)),()=>{b.Za(),m.asyncQueue.enqueueAndForget(async()=>Nm(await rc(m),E))}}(Ys(c),d,a,u)}function dS(t,e){return function(r,i){const s=new gn;return r.asyncQueue.enqueueAndForget(async()=>DD(await qD(r),i,s)),s.promise}(Ys(t),e)}function fS(t,e,n){const r=n.docs.get(e._key),i=new Za(t);return new Jm(t,i,e._key,r,new as(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(t){return y2(t,{count:d2()})}function y2(t,e){const n=qt(t.firestore,ar),r=Ys(n),i=CN(e,(s,o)=>new sb(o,s.aggregateType,s._internalFieldPath));return KD(r,t._query,i).then(s=>function(a,u,c){const d=new Za(a);return new t2(u,d,c)}(n,t,s))}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2={maxAttempts:5};function So(t,e){if((t=De(t)).firestore!==e)throw new z(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2 extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Xa(n)}get(n){const r=So(n,this._firestore),i=new h2(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Y();const o=s[0];if(o.isFoundDocument())return new xa(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new xa(this._firestore,i,r._key,null,r.converter);throw Y()})}set(n,r,i){const s=So(n,this._firestore),o=Xm(s.converter,r,i),a=Um(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=So(n,this._firestore);let a;return a=typeof(r=De(r))=="string"||r instanceof Xc?o2(this._dataReader,"Transaction.update",o._key,r,i,s):s2(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=So(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=So(e,this._firestore),r=new Za(this._firestore);return super.get(e).then(i=>new Jm(this._firestore,r,n._key,i._document,new as(!1,!1),n.converter))}}function E2(t,e,n){t=qt(t,ar);const r=Object.assign(Object.assign({},v2),n);return function(s){if(s.maxAttempts<1)throw new z(M.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new gn;return s.asyncQueue.enqueueAndForget(async()=>{const c=await YI(s);new BD(s.asyncQueue,c,a,o,u).au()}),u.promise}(Ys(t),i=>e(new w2(t,i)),r)}function ki(){return new zm("serverTimestamp")}(function(e,n=!0){(function(i){Gs=i})(Oi),Ti(new $r("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ar(new hN(r.getProvider("auth-internal")),new mN(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ia(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),kn(lv,"4.7.3",e),kn(lv,"4.7.3","esm2017")})();var T2="firebase",I2="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(T2,I2,"app");var Gv={};const Kv="@firebase/database",Qv="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pS="";function S2(t){pS=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_a(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Dn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new C2(e)}}catch{}return new A2},hi=mS("localStorage"),R2=mS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Dc("@firebase/database"),k2=function(){let t=1;return function(){return t++}}(),gS=function(t){const e=e1(t),n=new Yk;n.update(e);const r=n.digest();return Gp.encodeByteArray(r)},el=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=el.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let Yo=null,Yv=!0;const x2=function(t,e){$(!0,"Can't turn on custom loggers persistently."),ws.logLevel=ne.VERBOSE,Yo=ws.log.bind(ws)},et=function(...t){if(Yv===!0&&(Yv=!1,Yo===null&&R2.get("logging_enabled")===!0&&x2()),Yo){const e=el.apply(null,t);Yo(e)}},tl=function(t){return function(...e){et(t,...e)}},Uf=function(...t){const e="FIREBASE INTERNAL ERROR: "+el(...t);ws.error(e)},lr=function(...t){const e=`FIREBASE FATAL ERROR: ${el(...t)}`;throw ws.error(e),new Error(e)},Lt=function(...t){const e="FIREBASE WARNING: "+el(...t);ws.warn(e)},P2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zm=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},N2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Fs="[MIN_NAME]",xi="[MAX_NAME]",Fi=function(t,e){if(t===e)return 0;if(t===Fs||e===xi)return-1;if(e===Fs||t===xi)return 1;{const n=Xv(t),r=Xv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},b2=function(t,e){return t===e?0:t<e?-1:1},Co=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},eg=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=eg(t[e[r]]);return n+="}",n},_S=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Rt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const yS=function(t){$(!Zm(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},D2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},O2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},M2=new RegExp("^-?(0*)\\d{1,10}$"),L2=-2147483648,V2=2147483647,Xv=function(t){if(M2.test(t)){const e=Number(t);if(e>=L2&&e<=V2)return e}return null},Xs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},F2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Lt(e)}}class mu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}mu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="5",vS="v",wS="s",ES="r",TS="f",IS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,SS="ls",CS="p",zf="ac",AS="websocket",RS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function z2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function xS(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===AS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===RS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);z2(t)&&(n.ns=t.namespace);const i=[];return Rt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this.counters_={}}incrementCounter(e,n=1){Dn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Nk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd={},fd={};function ng(t){const e=t.toString();return dd[e]||(dd[e]=new B2),dd[e]}function $2(t,e){const n=t.toString();return fd[n]||(fd[n]=e()),fd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Xs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="start",q2="close",H2="pLPCommand",G2="pRTLPCB",PS="id",NS="pw",bS="ser",K2="cb",Q2="seg",Y2="ts",X2="d",J2="dframe",DS=1870,OS=30,Z2=DS-OS,eO=25e3,tO=3e4;class ls{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tl(e),this.stats_=ng(n),this.urlFn=u=>(this.appCheckToken&&(u[zf]=this.appCheckToken),xS(n,RS,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new W2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tO)),N2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rg((...s)=>{const[o,a,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jv)this.id=a,this.password=u;else if(o===q2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Jv]="t",r[bS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[K2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[vS]=tg,this.transportSessionId&&(r[wS]=this.transportSessionId),this.lastSessionId&&(r[SS]=this.lastSessionId),this.applicationId&&(r[CS]=this.applicationId),this.appCheckToken&&(r[zf]=this.appCheckToken),typeof location<"u"&&location.hostname&&IS.test(location.hostname)&&(r[ES]=TS);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ls.forceAllow_=!0}static forceDisallow(){ls.forceDisallow_=!0}static isAvailable(){return ls.forceAllow_?!0:!ls.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!D2()&&!O2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=XE(n),i=_S(r,Z2);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[J2]="t",r[PS]=e,r[NS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=k2(),window[H2+this.uniqueCallbackIdentifier]=e,window[G2+this.uniqueCallbackIdentifier]=n,this.myIFrame=rg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){et("frame writing exception"),a.stack&&et(a.stack),et(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||et("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[PS]=this.myID,e[NS]=this.myPW,e[bS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+OS+r.length<=DS;){const o=this.pendingSegs.shift();r=r+"&"+Q2+i+"="+o.seg+"&"+Y2+i+"="+o.ts+"&"+X2+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(eO)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=16384,rO=45e3;let sc=null;typeof MozWebSocket<"u"?sc=MozWebSocket:typeof WebSocket<"u"&&(sc=WebSocket);class dn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tl(this.connId),this.stats_=ng(n),this.connURL=dn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[vS]=tg,typeof location<"u"&&location.hostname&&IS.test(location.hostname)&&(o[ES]=TS),n&&(o[wS]=n),r&&(o[SS]=r),i&&(o[zf]=i),s&&(o[CS]=s),xS(e,AS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hi.set("previous_websocket_failure",!0);try{let r;zk(),this.mySock=new sc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&sc!==null&&!dn.forceDisallow_}static previouslyFailed(){return hi.isInMemoryStorage||hi.get("previous_websocket_failure")===!0}markConnectionHealthy(){hi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=_a(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=_S(n,nO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dn.responsesRequiredToBeHealthy=2;dn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ls,dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dn&&dn.isAvailable();let r=n&&!dn.previouslyFailed();if(e.webSocketOnly&&(n||Lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dn];else{const i=this.transports_=[];for(const s of Na.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Na.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Na.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=6e4,sO=5e3,oO=10*1024,aO=100*1024,pd="t",Zv="d",lO="s",ew="r",uO="e",tw="o",nw="a",rw="n",iw="p",cO="h";class hO{constructor(e,n,r,i,s,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tl("c:"+this.id+":"),this.transportManager_=new Na(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>aO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>oO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pd in e){const n=e[pd];n===nw?this.upgradeIfSecondaryHealthy_():n===ew?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===tw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Co("t",e),r=Co("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:iw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:nw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Co("t",e),r=Co("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Co(pd,e);if(Zv in e){const r=e[Zv];if(n===cO){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===rw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lO?this.onConnectionShutdown_(r):n===ew?this.onReset_(r):n===uO?Uf("Server Error: "+r):n===tw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Uf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),tg!==r&&Lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Xo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:iw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends LS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new oc}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=32,ow=768;class we{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new we("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Gr(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new we(t.pieces_,e)}function ig(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function dO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ba(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function VS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new we(e,0)}function Le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof we)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new we(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function Zt(t,e){const n=ae(t),r=ae(e);if(n===null)return e;if(n===r)return Zt(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function fO(t,e){const n=ba(t,0),r=ba(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Fi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function FS(t,e){if(Gr(t)!==Gr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function en(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Gr(t)>Gr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class pO{constructor(e,n){this.errorPrefix_=n,this.parts_=ba(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=bc(this.parts_[r]);jS(this)}}function mO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=bc(e),jS(t)}function gO(t){const e=t.parts_.pop();t.byteLength_-=bc(e),t.parts_.length>0&&(t.byteLength_-=1)}function jS(t){if(t.byteLength_>ow)throw new Error(t.errorPrefix_+"has a key path longer than "+ow+" bytes ("+t.byteLength_+").");if(t.parts_.length>sw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sw+") or object contains a cycle "+si(t))}function si(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg extends LS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new sg}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=1e3,_O=60*5*1e3,aw=30*1e3,yO=1.3,vO=3e4,wO="server_kill",lw=3;class Jn extends MS{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Jn.nextPersistentConnectionId_++,this.log_=tl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ao,this.maxReconnectDelay_=_O,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&oc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(nt(s)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Nc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;Jn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Dn(e,"w")){const r=xs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Qk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=aw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Kk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Uf("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ao,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ao,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vO&&(this.reconnectDelay_=Ao),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Jn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?et("getToken() completed but was canceled"):(et("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new hO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,w=>{Lt(w+" ("+this.repoInfo_.toString()+")"),this.interrupt(wO)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Lt(f),u())}}}interrupt(e){et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gf(this.interruptReasons_)&&(this.reconnectDelay_=Ao,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>eg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new we(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lw&&(this.reconnectDelay_=aw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+pS.replace(/\./g,"-")]=1,Kp()?e["framework.cordova"]=1:iT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oc.getInstance().currentlyOnline();return gf(this.interruptReasons_)&&e}}Jn.nextPersistentConnectionId_=0;Jn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new le(Fs,e),i=new le(Fs,n);return this.compare(r,i)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql;class US extends nh{static get __EMPTY_NODE(){return ql}static set __EMPTY_NODE(e){ql=e}compare(e,n){return Fi(e.name,n.name)}isDefinedOn(e){throw Ws("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(xi,ql)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,ql)}toString(){return".key"}}const Es=new US;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=i??bt.EMPTY_NODE,this.right=s??bt.EMPTY_NODE}copy(e,n,r,i,s){return new Ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return bt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ke.RED=!0;Ke.BLACK=!1;class EO{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bt{constructor(e,n=bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ke.BLACK,null,null))}remove(e){return new bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ke.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Hl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Hl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Hl(this.root_,null,this.comparator_,!0,e)}}bt.EMPTY_NODE=new EO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t,e){return Fi(t.name,e.name)}function og(t,e){return Fi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bf;function IO(t){Bf=t}const zS=function(t){return typeof t=="number"?"number:"+yS(t):"string:"+t},BS=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Dn(e,".sv"),"Priority must be a string or number.")}else $(t===Bf||t.isEmpty(),"priority of unexpected type.");$(t===Bf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uw;class qe{constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),BS(this.priorityNode_)}static set __childrenNodeConstructor(e){uw=e}static get __childrenNodeConstructor(){return uw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:ae(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||Gr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=yS(this.value_):e+=this.value_,this.lazyHash_=gS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=qe.VALUE_TYPE_ORDER.indexOf(n),s=qe.VALUE_TYPE_ORDER.indexOf(r);return $(i>=0,"Unknown leaf type: "+n),$(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $S,WS;function SO(t){$S=t}function CO(t){WS=t}class AO extends nh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Fi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(xi,new qe("[PRIORITY-POST]",WS))}makePost(e,n){const r=$S(e);return new le(n,new qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const gt=new AO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=Math.log(2);class kO{constructor(e){const n=s=>parseInt(Math.log(s)/RO,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ac=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let f,m;if(d===0)return null;if(d===1)return f=t[u],m=n?n(f):f,new Ke(m,f.node,Ke.BLACK,null,null);{const w=parseInt(d/2,10)+u,C=i(u,w),k=i(w+1,c);return f=t[w],m=n?n(f):f,new Ke(m,f.node,Ke.BLACK,C,k)}},s=function(u){let c=null,d=null,f=t.length;const m=function(C,k){const b=f-C,E=f;f-=C;const y=i(b+1,E),R=t[b],D=n?n(R):R;w(new Ke(D,R.node,k,null,y))},w=function(C){c?(c.left=C,c=C):(d=C,c=C)};for(let C=0;C<u.count;++C){const k=u.nextBitIsOne(),b=Math.pow(2,u.count-(C+1));k?m(b,Ke.BLACK):(m(b,Ke.BLACK),m(b,Ke.RED))}return d},o=new kO(t.length),a=s(o);return new bt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let md;const qi={};class Yn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return $(qi&&gt,"ChildrenNode.ts has not been loaded"),md=md||new Yn({".priority":qi},{".priority":gt}),md}get(e){const n=xs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof bt?n:null}hasIndex(e){return Dn(this.indexSet_,e.toString())}addIndex(e,n){$(e!==Es,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(le.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ac(r,e.getCompare()):a=qi;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new Yn(d,c)}addToIndexes(e,n){const r=Bu(this.indexes_,(i,s)=>{const o=xs(this.indexSet_,s);if($(o,"Missing index implementation for "+s),i===qi)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(le.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),ac(a,o.getCompare())}else return qi;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new le(e.name,a))),u.insert(e,e.node)}});return new Yn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Bu(this.indexes_,i=>{if(i===qi)return i;{const s=n.get(e.name);return s?i.remove(new le(e.name,s)):i}});return new Yn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro;class fe{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&BS(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ro||(Ro=new fe(new bt(og),null,Yn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ro}updatePriority(e){return this.children_.isEmpty()?this:new fe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ro:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new le(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ro:this.priorityNode_;return new fe(i,o,s)}}updateChild(e,n){const r=ae(e);if(r===null)return n;{$(ae(e)!==".priority"||Gr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(gt,(o,a)=>{n[o]=a.val(e),r++,s&&fe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zS(this.getPriority().val())+":"),this.forEachChild(gt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":gS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new le(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nl?-1:0}withIndex(e){if(e===Es||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new fe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Es||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(gt),i=n.getIterator(gt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Es?null:this.indexMap_.get(e.toString())}}fe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xO extends fe{constructor(){super(new bt(og),fe.EMPTY_NODE,Yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fe.EMPTY_NODE}isEmpty(){return!1}}const nl=new xO;Object.defineProperties(le,{MIN:{value:new le(Fs,fe.EMPTY_NODE)},MAX:{value:new le(xi,nl)}});US.__EMPTY_NODE=fe.EMPTY_NODE;qe.__childrenNodeConstructor=fe;IO(nl);CO(nl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO=!0;function tt(t,e=null){if(t===null)return fe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qe(n,tt(e))}if(!(t instanceof Array)&&PO){const n=[];let r=!1;if(Rt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=tt(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new le(o,u)))}}),n.length===0)return fe.EMPTY_NODE;const s=ac(n,TO,o=>o.name,og);if(r){const o=ac(n,gt.getCompare());return new fe(s,tt(e),new Yn({".priority":o},{".priority":gt}))}else return new fe(s,tt(e),Yn.Default)}else{let n=fe.EMPTY_NODE;return Rt(t,(r,i)=>{if(Dn(t,r)&&r.substring(0,1)!=="."){const s=tt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(tt(e))}}SO(tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO extends nh{constructor(e){super(),this.indexPath_=e,$(!se(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Fi(e.name,n.name):s}makePost(e,n){const r=tt(e),i=fe.EMPTY_NODE.updateChild(this.indexPath_,r);return new le(n,i)}maxPost(){const e=fe.EMPTY_NODE.updateChild(this.indexPath_,nl);return new le(xi,e)}toString(){return ba(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO extends nh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Fi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const r=tt(e);return new le(n,r)}toString(){return".value"}}const DO=new bO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(t){return{type:"value",snapshotNode:t}}function MO(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function LO(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function cw(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function VO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=gt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fs}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===gt}copy(){const e=new ag;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===gt?n="$priority":t.index_===DO?n="$value":t.index_===Es?n="$key":($(t.index_ instanceof NO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function dw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==gt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends MS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=tl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=lc.getListenId_(e,r),a={};this.listens_[o]=a;const u=hw(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),xs(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=lc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=hw(e._queryParams),r=e._path.toString(),i=new Nc;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=_a(a.responseText)}catch{Lt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Lt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this.rootNode_=fe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(){return{value:null,children:new Map}}function qS(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ae(e);t.children.has(r)||t.children.set(r,uc());const i=t.children.get(r);e=Ce(e),qS(i,e,n)}}function $f(t,e,n){t.value!==null?n(e,t.value):jO(t,(r,i)=>{const s=new we(e.toString()+"/"+r);$f(i,s,n)})}function jO(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Rt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=10*1e3,zO=30*1e3,BO=5*60*1e3;class $O{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new UO(e);const r=fw+(zO-fw)*Math.random();Xo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Rt(e,(i,s)=>{s>0&&Dn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Xo(this.reportStats_.bind(this),Math.floor(Math.random()*2*BO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Cn||(Cn={}));function lg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function HS(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function GS(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Cn.ACK_USER_WRITE,this.source=lg()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(e));return new cc(ge(),n,this.revert)}}else return $(ae(this.path)===e,"operationForChild called for unrelated child."),new cc(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Cn.OVERWRITE}operationForChild(e){return se(this.path)?new Pi(this.source,ge(),this.snap.getImmediateChild(e)):new Pi(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Cn.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new we(e));return n.isEmpty()?null:n.value?new Pi(this.source,ge(),n.value):new js(this.source,ge(),n)}else return $(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new js(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function WO(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(VO(o.childName,o.snapshotNode))}),ko(t,i,"child_removed",e,r,n),ko(t,i,"child_added",e,r,n),ko(t,i,"child_moved",s,r,n),ko(t,i,"child_changed",e,r,n),ko(t,i,"value",e,r,n),i}function ko(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>HO(t,a,u)),o.forEach(a=>{const u=qO(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function qO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function HO(t,e,n){if(e.childName==null||n.childName==null)throw Ws("Should only compare child_ events.");const r=new le(e.childName,e.snapshotNode),i=new le(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(t,e){return{eventCache:t,serverCache:e}}function Jo(t,e,n,r){return KS(new ug(e,n,r),t.serverCache)}function QS(t,e,n,r){return KS(t.eventCache,new ug(e,n,r))}function Wf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ni(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gd;const GO=()=>(gd||(gd=new bt(b2)),gd);class ye{constructor(e,n=GO()){this.value=e,this.children=n}static fromObject(e){let n=new ye(null);return Rt(e,(r,i)=>{n=n.set(new we(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(se(e))return null;{const r=ae(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ce(e),n);return s!=null?{path:Le(new we(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=ae(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new ye(null)}}set(e,n){if(se(e))return new ye(n,this.children);{const r=ae(e),s=(this.children.get(r)||new ye(null)).set(Ce(e),n),o=this.children.insert(r,s);return new ye(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new ye(null):new ye(null,this.children);{const n=ae(e),r=this.children.get(n);if(r){const i=r.remove(Ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ye(null):new ye(this.value,s)}else return this}}get(e){if(se(e))return this.value;{const n=ae(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(se(e))return n;{const r=ae(e),s=(this.children.get(r)||new ye(null)).setTree(Ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ye(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(se(e))return null;{const s=ae(e),o=this.children.get(s);return o?o.findOnPath_(Ce(e),Le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,r){if(se(e))return this;{this.value&&r(n,this.value);const i=ae(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),Le(n,i),r):new ye(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.writeTree_=e}static empty(){return new _n(new ye(null))}}function Zo(t,e,n){if(se(e))return new _n(new ye(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Zt(i,e);return s=s.updateChild(o,n),new _n(t.writeTree_.set(i,s))}else{const i=new ye(n),s=t.writeTree_.setTree(e,i);return new _n(s)}}}function qf(t,e,n){let r=t;return Rt(n,(i,s)=>{r=Zo(r,Le(e,i),s)}),r}function pw(t,e){if(se(e))return _n.empty();{const n=t.writeTree_.setTree(e,new ye(null));return new _n(n)}}function Hf(t,e){return ji(t,e)!=null}function ji(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Zt(n.path,e)):null}function mw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(gt,(r,i)=>{e.push(new le(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new le(r,i.value))}),e}function Ur(t,e){if(se(e))return t;{const n=ji(t,e);return n!=null?new _n(new ye(n)):new _n(t.writeTree_.subtree(e))}}function Gf(t){return t.writeTree_.isEmpty()}function Us(t,e){return YS(ge(),t.writeTree_,e)}function YS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?($(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=YS(Le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Le(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t,e){return nC(e,t)}function KO(t,e,n,r,i){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Zo(t.visibleWrites,e,n)),t.lastWriteId=r}function QO(t,e,n,r){$(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=qf(t.visibleWrites,e,n),t.lastWriteId=r}function YO(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function XO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&JO(a,r.path)?i=!1:en(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return ZO(t),!0;if(r.snap)t.visibleWrites=pw(t.visibleWrites,r.path);else{const a=r.children;Rt(a,u=>{t.visibleWrites=pw(t.visibleWrites,Le(r.path,u))})}return!0}else return!1}function JO(t,e){if(t.snap)return en(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&en(Le(t.path,n),e))return!0;return!1}function ZO(t){t.visibleWrites=JS(t.allWrites,eM,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function eM(t){return t.visible}function JS(t,e,n){let r=_n.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)en(n,o)?(a=Zt(n,o),r=Zo(r,a,s.snap)):en(o,n)&&(a=Zt(o,n),r=Zo(r,ge(),s.snap.getChild(a)));else if(s.children){if(en(n,o))a=Zt(n,o),r=qf(r,a,s.children);else if(en(o,n))if(a=Zt(o,n),se(a))r=qf(r,ge(),s.children);else{const u=xs(s.children,ae(a));if(u){const c=u.getChild(Ce(a));r=Zo(r,ge(),c)}}}else throw Ws("WriteRecord should have .snap or .children")}}return r}function ZS(t,e,n,r,i){if(!r&&!i){const s=ji(t.visibleWrites,e);if(s!=null)return s;{const o=Ur(t.visibleWrites,e);if(Gf(o))return n;if(n==null&&!Hf(o,ge()))return null;{const a=n||fe.EMPTY_NODE;return Us(o,a)}}}else{const s=Ur(t.visibleWrites,e);if(!i&&Gf(s))return n;if(!i&&n==null&&!Hf(s,ge()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(en(c.path,e)||en(e,c.path))},a=JS(t.allWrites,o,e),u=n||fe.EMPTY_NODE;return Us(a,u)}}}function tM(t,e,n){let r=fe.EMPTY_NODE;const i=ji(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(gt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ur(t.visibleWrites,e);return n.forEachChild(gt,(o,a)=>{const u=Us(Ur(s,new we(o)),a);r=r.updateImmediateChild(o,u)}),mw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ur(t.visibleWrites,e);return mw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function nM(t,e,n,r,i){$(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Le(e,n);if(Hf(t.visibleWrites,s))return null;{const o=Ur(t.visibleWrites,s);return Gf(o)?i.getChild(n):Us(o,i.getChild(n))}}function rM(t,e,n,r){const i=Le(e,n),s=ji(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ur(t.visibleWrites,i);return Us(o,r.getNode().getImmediateChild(n))}else return null}function iM(t,e){return ji(t.visibleWrites,e)}function sM(t,e,n,r,i,s,o){let a;const u=Ur(t.visibleWrites,e),c=ji(u,ge());if(c!=null)a=c;else if(n!=null)a=Us(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let w=m.getNext();for(;w&&d.length<i;)f(w,r)!==0&&d.push(w),w=m.getNext();return d}else return[]}function oM(){return{visibleWrites:_n.empty(),allWrites:[],lastWriteId:-1}}function Kf(t,e,n,r){return ZS(t.writeTree,t.treePath,e,n,r)}function eC(t,e){return tM(t.writeTree,t.treePath,e)}function gw(t,e,n,r){return nM(t.writeTree,t.treePath,e,n,r)}function hc(t,e){return iM(t.writeTree,Le(t.treePath,e))}function aM(t,e,n,r,i,s){return sM(t.writeTree,t.treePath,e,n,r,i,s)}function cg(t,e,n){return rM(t.writeTree,t.treePath,e,n)}function tC(t,e){return nC(Le(t.treePath,e),t.writeTree)}function nC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,cw(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,LO(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,MO(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,cw(r,e.snapshotNode,i.oldSnap));else throw Ws("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const rC=new uM;class hg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ug(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ni(this.viewCache_),s=aM(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function cM(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hM(t,e,n,r,i){const s=new lM;let o,a;if(n.type===Cn.OVERWRITE){const c=n;c.source.fromUser?o=Qf(t,e,c.path,c.snap,r,i,s):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=dc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Cn.MERGE){const c=n;c.source.fromUser?o=fM(t,e,c.path,c.children,r,i,s):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Yf(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Cn.ACK_USER_WRITE){const c=n;c.revert?o=gM(t,e,c.path,r,i,s):o=pM(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Cn.LISTEN_COMPLETE)o=mM(t,e,n.path,r,s);else throw Ws("Unknown operation type: "+n.type);const u=s.getChanges();return dM(e,o,u),{viewCache:o,changes:u}}function dM(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Wf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(OO(Wf(e)))}}function iC(t,e,n,r,i,s){const o=e.eventCache;if(hc(r,n)!=null)return e;{let a,u;if(se(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ni(e),d=c instanceof fe?c:fe.EMPTY_NODE,f=eC(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Kf(r,Ni(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ae(n);if(c===".priority"){$(Gr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=gw(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=Ce(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=gw(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(d,m):f=o.getNode().getImmediateChild(c)}else f=cg(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,i,s):a=o.getNode()}}return Jo(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function dc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const w=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),w,null)}else{const w=ae(n);if(!u.isCompleteForPath(n)&&Gr(n)>1)return e;const C=Ce(n),b=u.getNode().getImmediateChild(w).updateChild(C,r);w===".priority"?c=d.updatePriority(u.getNode(),b):c=d.updateChild(u.getNode(),w,b,C,rC,null)}const f=QS(e,c,u.isFullyInitialized()||se(n),d.filtersNodes()),m=new hg(i,f,s);return iC(t,f,n,i,m,a)}function Qf(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const d=new hg(i,e,s);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Jo(e,c,!0,t.filter.filtersNodes());else{const f=ae(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Jo(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Ce(n),w=a.getNode().getImmediateChild(f);let C;if(se(m))C=r;else{const k=d.getCompleteChild(f);k!=null?ig(m)===".priority"&&k.getChild(VS(m)).isEmpty()?C=k:C=k.updateChild(m,r):C=fe.EMPTY_NODE}if(w.equals(C))u=e;else{const k=t.filter.updateChild(a.getNode(),f,C,m,d,o);u=Jo(e,k,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function _w(t,e){return t.eventCache.isCompleteForChild(e)}function fM(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const d=Le(n,u);_w(e,ae(d))&&(a=Qf(t,a,d,c,i,s,o))}),r.foreach((u,c)=>{const d=Le(n,u);_w(e,ae(d))||(a=Qf(t,a,d,c,i,s,o))}),a}function yw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Yf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;se(n)?c=r:c=new ye(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const w=e.serverCache.getNode().getImmediateChild(f),C=yw(t,w,m);u=dc(t,u,new we(f),C,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const w=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!w){const C=e.serverCache.getNode().getImmediateChild(f),k=yw(t,C,m);u=dc(t,u,new we(f),k,i,s,o,a)}}),u}function pM(t,e,n,r,i,s,o){if(hc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(se(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return dc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(se(n)){let c=new ye(null);return u.getNode().forEachChild(Es,(d,f)=>{c=c.set(new we(d),f)}),Yf(t,e,n,c,i,s,a,o)}else return e}else{let c=new ye(null);return r.foreach((d,f)=>{const m=Le(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),Yf(t,e,n,c,i,s,a,o)}}function mM(t,e,n,r,i){const s=e.serverCache,o=QS(e,s.getNode(),s.isFullyInitialized()||se(n),s.isFiltered());return iC(t,o,n,r,rC,i)}function gM(t,e,n,r,i,s){let o;if(hc(r,n)!=null)return e;{const a=new hg(r,e,i),u=e.eventCache.getNode();let c;if(se(n)||ae(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Kf(r,Ni(e));else{const f=e.serverCache.getNode();$(f instanceof fe,"serverChildren would be complete if leaf node"),d=eC(r,f)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=ae(n);let f=cg(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,Ce(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,fe.EMPTY_NODE,Ce(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Kf(r,Ni(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||hc(r,ge())!=null,Jo(e,c,o,t.filter.filtersNodes())}}function _M(t,e){const n=Ni(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function vw(t,e,n,r){e.type===Cn.MERGE&&e.source.queryId!==null&&($(Ni(t.viewCache_),"We should always have a full cache before handling merges"),$(Wf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=hM(t.processor_,i,e,n,r);return cM(t.processor_,s.viewCache),$(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,yM(t,s.changes,s.viewCache.eventCache.getNode())}function yM(t,e,n,r){const i=t.eventRegistrations_;return WO(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ww;function vM(t){$(!ww,"__referenceConstructor has already been defined"),ww=t}function dg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return $(s!=null,"SyncTree gave us an op for an invalid query."),vw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(vw(o,e,n,r));return s}}function fg(t,e){let n=null;for(const r of t.views.values())n=n||_M(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ew;function wM(t){$(!Ew,"__referenceConstructor has already been defined"),Ew=t}class Tw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ye(null),this.pendingWriteTree_=oM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function EM(t,e,n,r,i){return KO(t.pendingWriteTree_,e,n,r,i),i?rl(t,new Pi(lg(),e,n)):[]}function TM(t,e,n,r){QO(t.pendingWriteTree_,e,n,r);const i=ye.fromObject(n);return rl(t,new js(lg(),e,i))}function di(t,e,n=!1){const r=YO(t.pendingWriteTree_,e);if(XO(t.pendingWriteTree_,e)){let s=new ye(null);return r.snap!=null?s=s.set(ge(),!0):Rt(r.children,o=>{s=s.set(new we(o),!0)}),rl(t,new cc(r.path,s,n))}else return[]}function rh(t,e,n){return rl(t,new Pi(HS(),e,n))}function IM(t,e,n){const r=ye.fromObject(n);return rl(t,new js(HS(),e,r))}function SM(t,e,n,r){const i=lC(t,r);if(i!=null){const s=uC(i),o=s.path,a=s.queryId,u=Zt(o,e),c=new Pi(GS(a),u,n);return cC(t,o,c)}else return[]}function CM(t,e,n,r){const i=lC(t,r);if(i){const s=uC(i),o=s.path,a=s.queryId,u=Zt(o,e),c=ye.fromObject(n),d=new js(GS(a),u,c);return cC(t,o,d)}else return[]}function sC(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Zt(o,e),c=fg(a,u);if(c)return c});return ZS(i,e,s,n,!0)}function rl(t,e){return oC(e,t.syncPointTree_,null,XS(t.pendingWriteTree_,ge()))}function oC(t,e,n,r){if(se(t.path))return aC(t,e,n,r);{const i=e.get(ge());n==null&&i!=null&&(n=fg(i,ge()));let s=[];const o=ae(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=tC(r,o);s=s.concat(oC(a,u,c,d))}return i&&(s=s.concat(dg(i,t,r,n))),s}}function aC(t,e,n,r){const i=e.get(ge());n==null&&i!=null&&(n=fg(i,ge()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=tC(r,o),d=t.operationForChild(o);d&&(s=s.concat(aC(d,a,u,c)))}),i&&(s=s.concat(dg(i,t,r,n))),s}function lC(t,e){return t.tagToQueryMap.get(e)}function uC(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new we(t.substr(0,e))}}function cC(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const i=XS(t.pendingWriteTree_,e);return dg(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new pg(n)}node(){return this.node_}}class mg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new mg(this.syncTree_,n)}node(){return sC(this.syncTree_,this.path_)}}const AM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Iw=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return RM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return kM(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},RM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},kM=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const i=e.node();if($(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},hC=function(t,e,n,r){return gg(e,new mg(n,t),r)},xM=function(t,e,n){return gg(t,new pg(e),n)};function gg(t,e,n){const r=t.getPriority().val(),i=Iw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Iw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new qe(a,tt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new qe(i))),o.forEachChild(gt,(a,u)=>{const c=gg(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function yg(t,e){let n=e instanceof we?e:new we(e),r=t,i=ae(n);for(;i!==null;){const s=xs(r.node.children,i)||{children:{},childCount:0};r=new _g(i,r,s),n=Ce(n),i=ae(n)}return r}function Js(t){return t.node.value}function dC(t,e){t.node.value=e,Xf(t)}function fC(t){return t.node.childCount>0}function PM(t){return Js(t)===void 0&&!fC(t)}function ih(t,e){Rt(t.node.children,(n,r)=>{e(new _g(n,t,r))})}function pC(t,e,n,r){n&&e(t),ih(t,i=>{pC(i,e,!0)})}function NM(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function il(t){return new we(t.parent===null?t.name:il(t.parent)+"/"+t.name)}function Xf(t){t.parent!==null&&bM(t.parent,t.name,t)}function bM(t,e,n){const r=PM(n),i=Dn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Xf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Xf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM=/[\[\].#$\/\u0000-\u001F\u007F]/,OM=/[\[\].#$\u0000-\u001F\u007F]/,_d=10*1024*1024,vg=function(t){return typeof t=="string"&&t.length!==0&&!DM.test(t)},MM=function(t){return typeof t=="string"&&t.length!==0&&!OM.test(t)},LM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),MM(t)},VM=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Zm(t)||t&&typeof t=="object"&&Dn(t,".sv")},wg=function(t,e,n){const r=n instanceof we?new pO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+si(r));if(typeof e=="function")throw new Error(t+"contains a function "+si(r)+" with contents = "+e.toString());if(Zm(e))throw new Error(t+"contains "+e.toString()+" "+si(r));if(typeof e=="string"&&e.length>_d/3&&bc(e)>_d)throw new Error(t+"contains a string greater than "+_d+" utf8 bytes "+si(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Rt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!vg(o)))throw new Error(t+" contains an invalid key ("+o+") "+si(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mO(r,o),wg(t,a,r),gO(r)}),i&&s)throw new Error(t+' contains ".value" child '+si(r)+" in addition to actual children.")}},FM=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ba(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!vg(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(fO);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&en(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},jM=function(t,e,n,r){const i=oT(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Rt(e,(o,a)=>{const u=new we(o);if(wg(i,a,Le(n,u)),ig(u)===".priority"&&!VM(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),FM(i,s)},UM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!LM(n))throw new Error(oT(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function mC(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!FS(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ur(t,e,n){mC(t,n),BM(t,r=>en(r,e)||en(e,r))}function BM(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?($M(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function $M(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Yo&&et("event: "+n.toString()),Xs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM="repo_interrupt",qM=25;class HM{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=uc(),this.transactionQueueTree_=new _g,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function GM(t,e,n){if(t.stats_=ng(t.repoInfo_),t.forceRestClient_||F2())t.server_=new lc(t.repoInfo_,(r,i,s,o)=>{Sw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Cw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Jn(t.repoInfo_,e,(r,i,s,o)=>{Sw(t,r,i,s,o)},r=>{Cw(t,r)},r=>{QM(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=$2(t.repoInfo_,()=>new $O(t.stats_,t.server_)),t.infoData_=new FO,t.infoSyncTree_=new Tw({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=rh(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Tg(t,"connected",!1),t.serverSyncTree_=new Tw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);ur(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function KM(t){const n=t.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Eg(t){return AM({timestamp:KM(t)})}function Sw(t,e,n,r,i){t.dataUpdateCount++;const s=new we(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Bu(n,c=>tt(c));o=CM(t.serverSyncTree_,s,u,i)}else{const u=tt(n);o=SM(t.serverSyncTree_,s,u,i)}else if(r){const u=Bu(n,c=>tt(c));o=IM(t.serverSyncTree_,s,u)}else{const u=tt(n);o=rh(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Da(t,s)),ur(t.eventQueue_,a,o)}function Cw(t,e){Tg(t,"connected",e),e===!1&&XM(t)}function QM(t,e){Rt(e,(n,r)=>{Tg(t,n,r)})}function Tg(t,e,n){const r=new we("/.info/"+e),i=tt(n);t.infoData_.updateSnapshot(r,i);const s=rh(t.infoSyncTree_,r,i);ur(t.eventQueue_,r,s)}function gC(t){return t.nextWriteId_++}function YM(t,e,n,r){Ig(t,"update",{path:e.toString(),value:n});let i=!0;const s=Eg(t),o={};if(Rt(n,(a,u)=>{i=!1,o[a]=hC(Le(e,a),tt(u),t.serverSyncTree_,s)}),i)et("update() called with empty data.  Don't do anything."),Aw(t,r,"ok",void 0);else{const a=gC(t),u=TM(t.serverSyncTree_,e,o,a);mC(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,d)=>{const f=c==="ok";f||Lt("update at "+e+" failed: "+c);const m=di(t.serverSyncTree_,a,!f),w=m.length>0?Da(t,e):e;ur(t.eventQueue_,w,m),Aw(t,r,c,d)}),Rt(n,c=>{const d=EC(t,Le(e,c));Da(t,d)}),ur(t.eventQueue_,e,[])}}function XM(t){Ig(t,"onDisconnectEvents");const e=Eg(t),n=uc();$f(t.onDisconnect_,ge(),(i,s)=>{const o=hC(i,s,t.serverSyncTree_,e);qS(n,i,o)});let r=[];$f(n,ge(),(i,s)=>{r=r.concat(rh(t.serverSyncTree_,i,s));const o=EC(t,i);Da(t,o)}),t.onDisconnect_=uc(),ur(t.eventQueue_,ge(),r)}function JM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(WM)}function Ig(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),et(n,...e)}function Aw(t,e,n,r){e&&Xs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function _C(t,e,n){return sC(t.serverSyncTree_,e,n)||fe.EMPTY_NODE}function Sg(t,e=t.transactionQueueTree_){if(e||sh(t,e),Js(e)){const n=vC(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ZM(t,il(e),n)}else fC(e)&&ih(e,n=>{Sg(t,n)})}function ZM(t,e,n){const r=n.map(c=>c.currentWriteId),i=_C(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];$(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Zt(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{Ig(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(di(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();sh(t,yg(t.transactionQueueTree_,e)),Sg(t,t.transactionQueueTree_),ur(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)Xs(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Lt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Da(t,e)}},o)}function Da(t,e){const n=yC(t,e),r=il(n),i=vC(t,n);return eL(t,i,r),r}function eL(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Zt(n,u.path);let d=!1,f;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,i=i.concat(di(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=qM)d=!0,f="maxretry",i=i.concat(di(t.serverSyncTree_,u.currentWriteId,!0));else{const m=_C(t,u.path,o);u.currentInputSnapshot=m;const w=e[a].update(m.val());if(w!==void 0){wg("transaction failed: Data returned ",w,u.path);let C=tt(w);typeof w=="object"&&w!=null&&Dn(w,".priority")||(C=C.updatePriority(m.getPriority()));const b=u.currentWriteId,E=Eg(t),y=xM(C,m,E);u.currentOutputSnapshotRaw=C,u.currentOutputSnapshotResolved=y,u.currentWriteId=gC(t),o.splice(o.indexOf(b),1),i=i.concat(EM(t.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally)),i=i.concat(di(t.serverSyncTree_,b,!0))}else d=!0,f="nodata",i=i.concat(di(t.serverSyncTree_,u.currentWriteId,!0))}ur(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}sh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Xs(r[a]);Sg(t,t.transactionQueueTree_)}function yC(t,e){let n,r=t.transactionQueueTree_;for(n=ae(e);n!==null&&Js(r)===void 0;)r=yg(r,n),e=Ce(e),n=ae(e);return r}function vC(t,e){const n=[];return wC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function wC(t,e,n){const r=Js(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ih(e,i=>{wC(t,i,n)})}function sh(t,e){const n=Js(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,dC(e,n.length>0?n:void 0)}ih(e,r=>{sh(t,r)})}function EC(t,e){const n=il(yC(t,e)),r=yg(t.transactionQueueTree_,e);return NM(r,i=>{yd(t,i)}),yd(t,r),pC(r,i=>{yd(t,i)}),n}function yd(t,e){const n=Js(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(di(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?dC(e,void 0):n.length=s+1,ur(t.eventQueue_,il(e),i);for(let o=0;o<r.length;o++)Xs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function nL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Rw=function(t,e){const n=rL(t),r=n.namespace;n.domain==="firebase.com"&&lr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&lr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||P2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kS(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new we(n.pathString)}},rL=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=tL(t.substring(d,f)));const m=nL(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const w=e.slice(0,c);if(w.toLowerCase()==="localhost")n="localhost";else if(w.split(".").length<=2)n=w;else{const C=e.indexOf(".");r=e.substring(0,C).toLowerCase(),n=e.substring(C+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return se(this._path)?null:ig(this._path)}get ref(){return new Zs(this._repo,this._path)}get _queryIdentifier(){const e=dw(this._queryParams),n=eg(e);return n==="{}"?"default":n}get _queryObject(){return dw(this._queryParams)}isEqual(e){if(e=De(e),!(e instanceof Cg))return!1;const n=this._repo===e._repo,r=FS(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+dO(this._path)}}class Zs extends Cg{constructor(e,n){super(e,n,new ag,!1)}get parent(){const e=VS(this._path);return e===null?null:new Zs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function iL(t,e){jM("update",e,t._path);const n=new Nc;return YM(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}vM(Zs);wM(Zs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL="FIREBASE_DATABASE_EMULATOR_HOST",Jf={};let oL=!1;function aL(t,e,n,r){t.repoInfo_=new kS(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function lL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||lr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),et("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Rw(s,i),a=o.repoInfo,u;typeof process<"u"&&Gv&&(u=Gv[sL]),u?(s=`http://${u}?ns=${a.namespace}`,o=Rw(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new U2(t.name,t.options,e);UM("Invalid Firebase Database URL",o),se(o.path)||lr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=cL(a,t,c,new j2(t.name,n));return new hL(d,t)}function uL(t,e){const n=Jf[e];(!n||n[t.key]!==t)&&lr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),JM(t),delete n[t.key]}function cL(t,e,n,r){let i=Jf[e.name];i||(i={},Jf[e.name]=i);let s=i[t.toURLString()];return s&&lr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new HM(t,oL,n,r),i[t.toURLString()]=s,s}class hL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(GM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zs(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&lr("Cannot call "+e+" on a deleted database.")}}function dL(t=Yp(),e){const n=Oc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=eT("database");r&&fL(n,...r)}return n}function fL(t,e,n,r={}){t=De(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&lr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&lr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new mu(mu.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:rT(r.mockUserToken,t.app.options.projectId);s=new mu(o)}aL(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(t){S2(Oi),Ti(new $r("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return lL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),kn(Kv,Qv,t),kn(Kv,Qv,"esm2017")}Jn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Jn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};pL();const mL={apiKey:"AIzaSyDWqss4olY-yE58OpUd9FsCAgTuOrHUyfc",authDomain:"mathgame-prod.firebaseapp.com",projectId:"mathgame-prod",storageBucket:"mathgame-prod.firebasestorage.app",messagingSenderId:"823268749100",appId:"1:823268749100:web:88747dc6fd11cfd90a0689",databaseURL:"https://mathgame-prod-default-rtdb.asia-southeast1.firebasedatabase.app/"},vd=10,oh=Z1().length?getApp():uT(mL);console.log(`Firebase initialized with project ID: ${oh.options.projectId}`);const wd=aN(oh),yt=JD(oh);let kw=null;{try{kw=dL(oh),iL(ref(kw,"s/connTest"),{next:-1}).then(()=>{console.log("Successfully sned next -1")}).catch(t=>{console.log("Failed to send next -1 to connTest"+t)})}catch(t){console.error(t),console.log("Error while initializing rtbd")}console.log("Running in production mode, connected to real Firebase services")}const Fe=9999999;async function xw(t){const e=await Pa(sn(yt,"students",t));return e.exists()?e.data():null}async function gL(t,{name:e,email:n,age:r,consentGiven:i,consentTimestamp:s,consentVersion:o}){await th(sn(yt,"students",t),{name:e,email:n,age:Number(r),consentGiven:i,consentTimestamp:s,consentVersion:o,createdAt:ki()})}async function _L(t,e){const n=Yc(yt,"scores",t,"trials"),r=e.sequence?e.sequence.map(i=>`${i.operator}${i.value}`).join(" "):"";await m2(n,{count:e.count,digits:e.digits,isCorrect:e.isCorrect,userAnswer:e.userAnswer,actualAnswer:e.actualAnswer,duration:e.duration,score:e.score??0,numbers:r,timestamp:ki()}),await wL(t,e)}async function Pw(t){const e=Yc(yt,"scores",t,"trials");return(await _2(e)).data().count}function yL(t,e=10,n){const r=oS(Yc(yt,"scores",t,"trials"),aS("timestamp","desc"),lS(e));return g2(r,i=>{const s=i.docs.map(a=>({id:a.id,...a.data()})),o=i.docs[i.docs.length-1]??null;n({trials:s,lastDoc:o})})}async function TC(t,e=10,n=null){const r=Yc(yt,"scores",t,"trials"),i=[aS("timestamp","desc"),lS(e)];n&&i.push(u2(n));const s=oS(r,...i),o=await p2(s),a=o.docs.map(c=>({id:c.id,...c.data()})),u=o.docs[o.docs.length-1]??null;return{trials:a,lastDoc:u}}async function vL(t){const e=sn(yt,"scores",t,"stats","global"),n=sn(yt,"scores",t,"stats","groups"),[r,i]=await Promise.all([Pa(e),Pa(n)]);return{global:r.exists()?r.data():null,groups:i.exists()?i.data():{}}}async function wL(t,e){const n=`${e.digits}d_${e.count}n`,r=sn(yt,"scores",t,"stats","global"),i=sn(yt,"scores",t,"stats","groups");try{await E2(yt,async s=>{const o=await s.get(r),a=await s.get(i),u=o.exists()?o.data():{totalGames:0,totalScore:0,totalCorrect:0,bestStreak:0,currentStreak:0,minScore:Fe,maxScore:0,totalTime:0,minTime:Fe,maxTime:0},c=u.totalGames+1,d=u.totalScore+e.score,f=u.totalCorrect+(e.isCorrect?1:0),m=e.isCorrect?u.currentStreak+1:0,w=(u.totalTime||0)+(e.duration||0),C=u.minScore&&u.minScore>0?u.minScore:Fe,k=u.minTime&&u.minTime>0?u.minTime:Fe,b={totalGames:c,totalScore:d,totalCorrect:f,avgScore:Math.round(d/c),minScore:Math.min(C,e.isCorrect?e.score:Fe),maxScore:Math.max(u.maxScore,e.score),currentStreak:m,bestStreak:Math.max(u.bestStreak,m),accuracy:f/c*100,totalTime:w,minTime:Math.min(k,e.isCorrect?e.duration:Fe),maxTime:Math.max(u.maxTime,e.duration||0),upd_at:ki()},y=(a.exists()?a.data():{})[n]||{totalGames:0,totalScore:0,totalCorrect:0,minScore:Fe,maxScore:0,bstr:0,cstr:0,totalTime:0,minTime:Fe,maxTime:0},R=e.isCorrect?y.cstr?y.cstr+1:1:0,D=Math.max(y.bstr?y.bstr:0,R),j=y.totalGames+1,F=y.totalScore+e.score,T=(y.totalTime||0)+(e.duration||0),v=y.minScore&&y.minScore>0?y.minScore:Fe,I=y.minTime&&y.minTime>0?y.minTime:Fe,A={digits:e.digits,count:e.count,totalGames:j,totalScore:F,totalCorrect:y.totalCorrect+(e.isCorrect?1:0),avgScore:F/j,minScore:Math.min(v,e.isCorrect?e.score:Fe),maxScore:Math.max(y.maxScore,e.score),accuracy:(y.totalCorrect+(e.isCorrect?1:0))/j*100,totalTime:T,minTime:Math.min(I,e.isCorrect?e.duration:Fe),maxTime:Math.max(y.maxTime,e.duration||0),bstr:D,cstr:R,upd_at:ki()};o.exists()?s.update(r,b,{merge:!0}):s.set(r,b),a.exists()?s.update(i,{[n]:A},{merge:!0}):s.set(i,{[n]:A})})}catch(s){console.error("Stats update failed: ",s)}}async function EL(t){const e=await Pa(sn(yt,"students",t,"prefs","general"));return e.exists()?e.data():{}}async function TL(t,e){await th(sn(yt,"students",t,"prefs","general"),{...e,updAt:ki()},{merge:!0})}async function IL(t){const e=await Pa(sn(yt,"students",t,"prefs","customPresets"));return e.exists()?e.data():{presets:[],lastUsed:null}}async function fc(t,e,n){await th(sn(yt,"students",t,"prefs","customPresets"),{presets:e,lastUsed:n||null,updAt:ki()},{merge:!0})}async function SL(t,e){await th(sn(yt,"students",t,"prefs","customPresets"),{lastUsed:e,updAt:ki()},{merge:!0})}const IC=H.createContext(null);function CL({children:t}){const[e,n]=H.useState(void 0),[r,i]=H.useState(null),[s,o]=H.useState(!1),[a,u]=H.useState(null),[c,d]=H.useState([]),[f,m]=H.useState(null);H.useEffect(()=>Qx(wd,async E=>{if(n(E),E){o(!0);const y=await xw(E.uid);i(y),EL(E.uid).then(R=>u(R.nickname||null)),IL(E.uid).then(R=>{d(R.presets||[]),m(R.lastUsed||null)}),o(!1)}else i(null),u(null),d([]),m(null)}),[]);const w=async()=>{const b=new $n;await gP(wd,b)},C=async()=>{await Yx(wd)},k=async()=>{if(!e)return;const b=await xw(e.uid);i(b)};return g.jsx(IC.Provider,{value:{user:e,profile:r,loadingProfile:s,loginWithGoogle:w,logout:C,refreshProfile:k,nickname:a,setNickname:u,presets:c,setPresets:d,lastUsed:f,setLastUsed:m},children:t})}function eo(){return H.useContext(IC)}function AL(){const{loginWithGoogle:t}=eo();return g.jsxs("div",{className:"card text-center flex flex-col gap-md",style:{gap:24},children:[g.jsx("div",{style:{fontSize:"4rem",lineHeight:1},children:"🥷"}),g.jsx("h1",{className:"title",children:"Number Ninja"}),g.jsxs("p",{className:"subtitle",children:["Watch the numbers flash, remember the total,",g.jsx("br",{}),"then type your answer. Can you keep up? 🧠⚡"]}),g.jsx("div",{className:"divider"}),g.jsxs("button",{className:"btn btn-primary btn-full btn-lg",onClick:t,children:[g.jsx(RL,{})," Sign in with Google"]}),g.jsxs("p",{style:{fontSize:"0.78rem",color:"#aaa",lineHeight:1.5},children:["Your information is used for internal analysis and record identification only.",g.jsx("br",{}),"Data is ",g.jsx("strong",{children:"never sold"})," to third parties."]})]})}function RL(){return g.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 48 48",children:[g.jsx("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),g.jsx("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),g.jsx("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),g.jsx("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})]})}const Nw=[{name:"🏃 Sprint",digits:1,count:100,autoMode:!0,speed:.5,lastUsed:Date.now(),createdAt:Date.now()},{name:"🎯 Accuracy",digits:2,count:20,autoMode:!0,speed:1.5,lastUsed:Date.now(),createdAt:Date.now()},{name:"💪 Endurance",digits:1,count:500,autoMode:!0,speed:2,lastUsed:Date.now(),createdAt:Date.now()}];function kL(){const{user:t,refreshProfile:e,setPresets:n}=eo(),[r,i]=H.useState(""),[s,o]=H.useState(!1),[a,u]=H.useState(!1),[c,d]=H.useState(""),[f,m]=H.useState(!1),w=parseInt(r,10),C=async()=>{if(d(""),m(!1),!s){m(!0),d("You must confirm you are the parent / guardian/ Above 18 and agree to the privacy notice before continuing.");return}if(!w||w<4||isNaN(w)){d("Please enter a valid age >= 4.");return}u(!0);try{await gL(t.uid,{name:t.displayName||"Student",email:t.email,age:w,consentGiven:!0,consentTimestamp:new Date().toISOString(),consentVersion:"1.0"}),await fc(t.uid,Nw,null),n(Nw),await e()}catch(k){console.log("Error "+k),d("Something went wrong. Please try again."),u(!1)}};return g.jsxs("div",{className:"card flex flex-col",style:{gap:20},children:[g.jsxs("div",{className:"text-center",children:[g.jsx("div",{style:{fontSize:"2.6rem"},children:"👨‍👩‍👧"}),g.jsx("h2",{className:"title",style:{fontSize:"1.6rem",marginTop:8},children:"Parent / Guardian /Above 18 Setup"}),g.jsx("p",{className:"subtitle mt-sm",children:"You are creating a learning profile for you / your child on Number Ninja."})]}),g.jsx("div",{className:"divider"}),g.jsxs("div",{style:{background:"var(--surface, #f8f9fa)",border:"1.5px solid var(--border, #e2e8f0)",borderRadius:14,padding:"18px 20px",fontSize:"0.88rem",lineHeight:1.7,color:"var(--text-muted)"},children:[g.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12,color:"var(--text)",fontWeight:700,fontSize:"0.92rem"},children:"🔒 We will store"}),g.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[{icon:"👤",text:"Your name + email — for account identification and data archival communications"},{icon:"🎂",text:"User's age — to compare performance with age-group peers"},{icon:"🏆",text:"User's game scores + session history — to review progress and mistakes"}].map(({icon:k,text:b})=>g.jsxs("div",{style:{display:"flex",gap:10,alignItems:"flex-start"},children:[g.jsx("span",{style:{fontSize:"1rem",flexShrink:0,marginTop:1},children:k}),g.jsx("span",{children:b})]},b))}),g.jsxs("div",{style:{marginTop:14,paddingTop:12,borderTop:"1px solid var(--border, #e2e8f0)",display:"flex",flexDirection:"column",gap:4,fontSize:"0.83rem"},children:[g.jsxs("span",{children:["🚫 ",g.jsx("strong",{style:{color:"var(--text)"},children:"We never sell this data."})]}),g.jsxs("span",{children:["🗑️ You can delete all data anytime from ",g.jsx("strong",{style:{color:"var(--text)"},children:"Emailing us at champsworld-hub@googlegroups.com"}),"."]})]}),g.jsx("a",{href:"privacy.html",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",marginTop:12,color:"var(--primary, #4f46e5)",fontWeight:600,fontSize:"0.85rem",textDecoration:"none"},children:"📄 Read full Privacy Policy →"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"section-title",htmlFor:"age-input",children:"User's age 🎂"}),g.jsx("input",{id:"age-input",className:"input mt-sm",type:"number",min:"4",placeholder:"Enter user's age...",value:r,onChange:k=>i(k.target.value)}),r&&(isNaN(w)||w<4)&&g.jsx("p",{style:{color:"var(--red)",fontSize:"0.85rem",marginTop:6},children:"Please enter a valid age (4 years or older)."})]}),g.jsxs("label",{className:"checkbox-label",style:{alignItems:"flex-start",gap:12,padding:"12px 14px",borderRadius:10,border:`1.5px solid ${f?"var(--red, #ef4444)":"transparent"}`,background:f?"rgba(239,68,68,0.06)":"transparent",transition:"border 0.2s, background 0.2s"},children:[g.jsx("input",{type:"checkbox",checked:s,onChange:k=>{o(k.target.checked),k.target.checked&&(m(!1),d(""))},style:{marginTop:3,flexShrink:0}}),g.jsx("span",{style:{fontSize:"0.88rem",lineHeight:1.6},children:"I am the parent / guardian /Above 18 yrs and I consent to the data practices described above."})]}),c&&g.jsxs("p",{style:{color:"var(--red, #ef4444)",fontSize:"0.88rem",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:8,padding:"10px 14px",margin:0},children:["⚠️ ",c]}),g.jsx("button",{className:"btn btn-green btn-full btn-lg",disabled:a,onClick:C,children:a?"Saving...":"Create Profile 🎮"})]})}function Ed(t,e){return Math.floor(Math.random()*(e-t+1))+t}function xL(t,e,n=!1){const r=Math.pow(10,t)-1,i=Ed(1,r),s=[{value:i,operator:"+",running:i}];let o=i;for(let a=1;a<e;a++){let u=Ed(1,r),c=Math.random()<.5?"+":"-";c==="-"&&(o===0?c="+":o-u<0&&(u=Ed(1,o))),o=c==="+"?o+u:o-u,n?s.push({value:u,operator:c}):s.push({value:u,operator:c,running:o})}return{sequence:s,answer:o}}const Oa={easy:{label:"⭐ Easy",digits:1,count:3,autoAllowed:!1},medium:{label:"⭐⭐ Medium",digits:2,count:5,autoAllowed:!1},hard:{label:"⭐⭐⭐ Hard",digits:2,count:7,autoAllowed:!1},custom:{label:"Custom",digits:null,count:null,autoAllowed:!0}},bw={digits:1,count:20},Tn={minDigits:1,maxDigits:8,minCount:2,maxCount:1010};function PL(){var P;const[t,e]=H.useState("easy"),[n,r]=H.useState(bw.digits),[i,s]=H.useState(bw.count),[o,a]=H.useState("idle"),[u,c]=H.useState([]),[d,f]=H.useState(0),[m,w]=H.useState(""),[C,k]=H.useState(null),[b,E]=H.useState(null),[y,R]=H.useState(!1),[D,j]=H.useState(2),F=t==="custom"?n:Oa[t].digits,T=t==="custom"?i:Oa[t].count,v=H.useCallback(()=>{const{sequence:S}=xL(F,T);c(S),f(1),w(""),k(null),a("watching"),E(Date.now())},[F,T]),I=H.useCallback(()=>{d<u.length?f(S=>S+1):a("answering")},[d,u.length]),A=H.useCallback(()=>{var ee;const S=parseInt(m,10);if(isNaN(S))return null;const Xe=((ee=u[u.length-1])==null?void 0:ee.running)??0,Qt=S===Xe,wn=Math.round((Date.now()-b)/1e3),Vt=1+.1*(F-1)+(T-2)/20,W=20+(T-3)*.5,B=100/(1+wn/W),G=Qt?Math.round(B*Vt):0,ie={isCorrect:Qt,actualAnswer:Xe,userAnswer:S,count:u.length,digits:F,duration:wn,score:G};return k(ie),a("result"),ie},[m,u,b,F,T]),x=H.useCallback(()=>{a("idle"),c([]),f(0),w(""),k(null)},[]);return{difficulty:t,setDifficulty:e,customDigits:n,setCustomDigits:r,customCount:i,setCustomCount:s,resolvedDigits:F,resolvedCount:T,phase:o,sequence:u,visibleCount:d,visibleNumbers:u.slice(0,d),currentTotal:((P=u[d-1])==null?void 0:P.running)??0,isLastNumber:d===u.length,userAnswer:m,setUserAnswer:w,result:C,startGame:v,showNext:I,submitAnswer:A,reset:x,autoMode:y,setAutoMode:R,autoSpeed:D,setAutoSpeed:j}}function NL({uid:t}){var R;const[e,n]=H.useState(null),[r,i]=H.useState([]);if(H.useEffect(()=>{vL(t).then(n),TC(t,20,null).then(({trials:D})=>{i([...D].reverse())})},[t]),e===null)return g.jsx(VL,{});if(!e.global)return g.jsx(FL,{});const s=e.global,o=Object.values(e.groups||{}).sort((D,j)=>D.digits!==j.digits?D.digits-j.digits:D.count-j.count),a=s.totalGames||0,u=s.totalCorrect||0,c=s.totalScore||0,d=s.accuracy?Math.round(s.accuracy):0,f=s.avgScore?Math.round(s.avgScore):0,m=s.maxScore??0,w=s.bestStreak??0,C=s.currentStreak??0,k=s.totalGames?Math.round(s.totalTime/s.totalGames):0,b=(R=s.upd_at)!=null&&R.toDate?SC(s.upd_at.toDate()):"—",E=s.minScore?s.minScore===Fe||s.minScore===0?"-":s.minScore:"-",y=s.minTime?s.minTime===Fe||s.minTime===0?"-":s.minTime+"s":"-";return g.jsxs("div",{className:"flex flex-col",style:{gap:20},children:[g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[g.jsx(bL,{pct:d,correct:u,total:a}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,alignContent:"start"},children:[g.jsx(Hi,{label:"Total score",value:c,color:"var(--purple-dark)",icon:"🏆"}),g.jsx(Hi,{label:"Avg score",value:f,color:"var(--blue-dark)",icon:"📊"}),g.jsx(Hi,{label:"Best score",value:m,color:"var(--green-dark)",icon:"⭐"}),g.jsx(Hi,{label:"Best streak",value:`${w}🔥`,color:"var(--yellow-dark)",icon:""}),g.jsx(Hi,{label:"Avg time",value:`${k}s`,color:"var(--blue)",icon:"⏱"}),g.jsx(Hi,{label:"Games played",value:a,color:"var(--text)",icon:"🎮"})]})]}),g.jsxs("a",{href:"ScoringGuide.html",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 18px",background:"linear-gradient(135deg, #fff8e0, #ffefc0)",border:"2px solid #ffe090",borderRadius:14,textDecoration:"none",color:"var(--yellow-dark)",fontWeight:800,fontSize:"0.9rem",transition:"transform 0.15s, box-shadow 0.15s"},onMouseEnter:D=>{D.currentTarget.style.transform="translateY(-2px)",D.currentTarget.style.boxShadow="0 4px 16px rgba(249,168,37,0.25)"},onMouseLeave:D=>{D.currentTarget.style.transform="",D.currentTarget.style.boxShadow=""},children:[g.jsx("span",{children:"🏆 How is my score calculated? See the scoring guide"}),g.jsx("span",{style:{fontSize:"1.1rem"},children:"→"})]}),r.length>=3&&g.jsx(Td,{title:"Score trend (last 20 games)",children:g.jsx(DL,{trials:r})}),o.length>=2&&g.jsx(Td,{title:"Avg score by difficulty",children:g.jsx(OL,{groups:o})}),o.length>=1&&g.jsx(Td,{title:"Accuracy by difficulty",children:g.jsx(ML,{groups:o})}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[g.jsx("div",{style:{flex:1,height:1,background:"#e8e8e8"}}),g.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700,whiteSpace:"nowrap"},children:"RAW BREAKDOWN"}),g.jsx("div",{style:{flex:1,height:1,background:"#e8e8e8"}})]}),g.jsx(Ow,{children:"Overall stats"}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,background:"#f0f8ff",borderRadius:12,padding:14},children:[g.jsx(Se,{label:"Total games",value:a}),g.jsx(Se,{label:"Accuracy",value:`${d}%`,color:d>=70?"var(--green-dark)":"var(--red)"}),g.jsx(Se,{label:"Best streak",value:w,color:"var(--yellow-dark)"}),g.jsx(Se,{label:"Current Streak",value:C,color:"var(--blue-dark)"}),g.jsx(Se,{label:"Total score",value:c,color:"var(--purple-dark)"}),g.jsx(Se,{label:"Avg score",value:f,color:"var(--blue-dark)"}),g.jsx(Se,{label:"Best score",value:m,color:"var(--green-dark)"}),g.jsx(Se,{label:"Worst score",value:E,color:"var(--red)"}),g.jsx(Se,{label:"Last Played",value:b}),g.jsx(Se,{label:"Total time",value:`${Math.round(s.totalTime||0)}s`,color:"var(--purple-dark)"}),g.jsx(Se,{label:"Avg time",value:`${k}s`,color:"var(--blue-dark)"}),g.jsx(Se,{label:"Best time",value:y,color:"var(--green-dark)"}),g.jsx(Se,{label:"Worst time",value:`${s.maxTime??0}s`,color:"var(--red)"})]}),g.jsx(Ow,{children:"Breakdown by difficulty"}),g.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:o.map(D=>g.jsx(LL,{g:D},`${D.digits}-${D.count}`))})]})}function bL({pct:t,correct:e,total:n}){const o=2*Math.PI*44,a=o*(t/100),u=t>=70?"var(--green)":t>=40?"var(--yellow-dark)":"var(--red)";return g.jsxs("div",{style:{background:"#f8f9fa",borderRadius:14,padding:14,display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[g.jsx("span",{style:{fontSize:"0.78rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:1},children:"Accuracy"}),g.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 120 120",children:[g.jsx("circle",{cx:60,cy:60,r:44,fill:"none",stroke:"#e8e8e8",strokeWidth:"12"}),g.jsx("circle",{cx:60,cy:60,r:44,fill:"none",stroke:u,strokeWidth:"12",strokeDasharray:`${a} ${o}`,strokeLinecap:"round",transform:"rotate(-90 60 60)",style:{transition:"stroke-dasharray 0.8s ease"}}),g.jsxs("text",{x:60,y:54,textAnchor:"middle",fontFamily:"Fredoka One, cursive",fontSize:"22",fill:u,children:[t,"%"]}),g.jsxs("text",{x:60,y:72,textAnchor:"middle",fontFamily:"Nunito, sans-serif",fontSize:"10",fill:"#999",fontWeight:"700",children:[e,"/",n]})]})]})}function DL({trials:t}){const i=t.map(m=>m.score??0),s=Math.max(...i,1),o=Math.min(...i),a=s-o||1,u=i.length,c=i.map((m,w)=>{const C=10+w/(u-1)*300,k=70-(m-o)/a*(80-10*2);return[C,k]}),d="M "+c.map(m=>m.join(",")).join(" L "),f=d+` L ${c[c.length-1][0]},80 L ${c[0][0]},80 Z`;return g.jsxs("svg",{width:"100%",viewBox:"0 0 320 80",preserveAspectRatio:"none",style:{display:"block"},children:[g.jsx("defs",{children:g.jsxs("linearGradient",{id:"spark-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[g.jsx("stop",{offset:"0%",stopColor:"#4a9eda",stopOpacity:"0.25"}),g.jsx("stop",{offset:"100%",stopColor:"#4a9eda",stopOpacity:"0.02"})]})}),g.jsx("path",{d:f,fill:"url(#spark-grad)"}),g.jsx("path",{d,fill:"none",stroke:"#4a9eda",strokeWidth:"2.5",strokeLinejoin:"round",strokeLinecap:"round"}),c.map(([m,w],C)=>g.jsx("circle",{cx:m,cy:w,r:"4",fill:t[C].isCorrect?"var(--green)":"var(--red)",stroke:"white",strokeWidth:"1.5"},C)),g.jsx("text",{x:10,y:78,fontSize:"9",fill:"#bbb",fontFamily:"Nunito,sans-serif",children:o}),g.jsx("text",{x:10,y:13,fontSize:"9",fill:"#bbb",fontFamily:"Nunito,sans-serif",children:s})]})}function OL({groups:t}){const i=Math.min(40,300/t.length-8),s=Math.max(...t.map(o=>o.avgScore||0),1);return g.jsx("svg",{width:"100%",viewBox:"0 0 320 100",style:{display:"block",overflow:"visible"},children:t.map((o,a)=>{const u=10+a*(300/t.length)+(300/t.length-i)/2,d=(o.avgScore||0)/s*70,f=80-d,m=["#4a9eda","#5cbf6a","#9c6fe4","#ffd54f"][a%4],w=`${o.digits}d·${o.count}n`;return g.jsxs("g",{children:[g.jsx("rect",{x:u,y:f,width:i,height:d,rx:"5",fill:m,opacity:"0.85"}),g.jsx("text",{x:u+i/2,y:f-4,textAnchor:"middle",fontSize:"10",fontFamily:"Fredoka One,cursive",fill:m,children:Number(o.avgScore||0).toFixed(1)}),g.jsx("text",{x:u+i/2,y:96,textAnchor:"middle",fontSize:"8.5",fontFamily:"Nunito,sans-serif",fill:"#888",fontWeight:"700",children:w})]},a)})})}function ML({groups:t}){const n=t.length*32+10,r=80;return g.jsx("svg",{width:"100%",viewBox:`0 0 320 ${n}`,style:{display:"block"},children:t.map((i,s)=>{const o=i.accuracy?Math.round(i.accuracy):0,a=(320-r-40)*o/100,u=s*32+6,c=o>=70?"var(--green)":o>=40?"var(--yellow-dark)":"var(--red)",d=`${i.digits}d · ${i.count}n`;return g.jsxs("g",{children:[g.jsx("text",{x:0,y:u+16,fontSize:"10",fontFamily:"Nunito,sans-serif",fontWeight:"700",fill:"#555",children:d}),g.jsx("rect",{x:r,y:u+4,width:320-r-40,height:18,rx:"9",fill:"#ececec"}),g.jsx("rect",{x:r,y:u+4,width:Math.max(a,0),height:18,rx:"9",fill:c,opacity:"0.85"}),g.jsxs("text",{x:288,y:u+16,fontSize:"10",fontFamily:"Fredoka One,cursive",fill:c,fontWeight:"bold",children:[o,"%"]})]},s)})})}function LL({g:t}){var f;const e=t.totalCorrect||0,n=Math.round(e/t.totalGames*100),r=Math.round(t.totalScore/t.totalGames),i=Math.round(t.totalTime/t.totalGames),s=t.minTime===Fe||t.minTime===0?"-":t.minTime+"s",o=t.minScore===Fe||t.minScore===0?"-":t.minScore,a=t.maxScore??0,u=t.bstr??"-",c=t.cstr??"-",d=(f=t.upd_at)!=null&&f.toDate?SC(t.upd_at.toDate()):"—";return g.jsxs("div",{style:{background:"#fafafa",border:"2px solid #e8e8e8",borderRadius:14,padding:"14px 16px"},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[g.jsxs("span",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.1rem",color:"var(--blue-dark)"},children:[t.digits," digit",t.digits>1?"s":""," · ",t.count," numbers"]}),g.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:700},children:[t.totalGames," game",t.totalGames>1?"s":""]})]}),g.jsxs("div",{style:{marginBottom:10},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:4},children:[g.jsx("span",{children:"Accuracy"}),g.jsxs("span",{style:{fontWeight:800,color:n>=70?"var(--green-dark)":"var(--red)"},children:[n,"%"]})]}),g.jsx("div",{style:{height:8,background:"#e8e8e8",borderRadius:4,overflow:"hidden"},children:g.jsx("div",{style:{height:"100%",width:`${n}%`,background:n>=70?"var(--green)":"var(--red)",borderRadius:4,transition:"width 0.6s ease"}})})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},children:[g.jsx(Se,{label:"✅ Correct",value:e,color:"var(--green-dark)"}),g.jsx(Se,{label:"Avg score",value:r,color:"var(--purple-dark)"}),g.jsx(Se,{label:"Best score",value:a,color:"var(--yellow-dark)"}),g.jsx(Se,{label:"Worst score",value:o,color:"var(--yellow-dark)"}),g.jsx(Se,{label:"Avg time",value:`${i}s`,color:"var(--blue-dark)"}),g.jsx(Se,{label:"Total games",value:t.totalGames||0}),g.jsx(Se,{label:"Total score",value:t.totalScore||0,color:"var(--purple-dark)"}),g.jsx(Se,{label:"Best time",value:`${s}`,color:"var(--green-dark)"}),g.jsx(Se,{label:"Worst time",value:`${t.maxTime}s`,color:"var(--red)"}),g.jsx(Se,{label:"Best Streak",value:u,color:"var(--green-dark)"}),g.jsx(Se,{label:"Current Streak",value:c,color:"var(--green-dark)"}),g.jsx(Se,{label:"Last Played",value:d})]})]})}function Td({title:t,children:e}){return g.jsxs("div",{style:{background:"#fafafa",border:"1.5px solid #ececec",borderRadius:14,padding:"14px 16px"},children:[g.jsx("p",{style:{fontSize:"0.78rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:1,marginBottom:10},children:t}),e,t.includes("trend")&&g.jsxs("div",{style:{display:"flex",gap:16,marginTop:8,justifyContent:"center"},children:[g.jsx(Dw,{color:"var(--green)",label:"Correct"}),g.jsx(Dw,{color:"var(--red)",label:"Wrong"})]})]})}function Dw({color:t,label:e}){return g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:[g.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:t}}),e]})}function Hi({label:t,value:e,color:n,icon:r}){return g.jsxs("div",{style:{background:"white",border:"1.5px solid #ececec",borderRadius:10,padding:"8px 10px",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.2rem",color:n||"var(--text)",lineHeight:1.2},children:e}),g.jsxs("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)",fontWeight:700,marginTop:2},children:[r," ",t]})]})}function Ow({children:t}){return g.jsx("p",{className:"section-title",style:{margin:0},children:t})}function Se({label:t,value:e,color:n}){return g.jsxs("div",{style:{textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:n||"var(--blue-dark)"},children:e}),g.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:t})]})}function VL(){return g.jsxs("div",{className:"loader",style:{padding:"40px 0"},children:[g.jsx("div",{className:"loader-dot"}),g.jsx("div",{className:"loader-dot"}),g.jsx("div",{className:"loader-dot"})]})}function FL(){return g.jsxs("div",{className:"text-center",style:{padding:"40px 0",color:"var(--text-muted)"},children:[g.jsx("div",{style:{fontSize:"3rem"},children:"📭"}),g.jsx("p",{style:{fontWeight:700,marginTop:12},children:"No stats yet!"}),g.jsx("p",{style:{fontSize:"0.875rem",marginTop:6},children:"Play your first round to see your stats."})]})}function SC(t){return t.toLocaleString("en-IN",{day:"numeric",month:"numeric",year:"numeric"})}function jL({uid:t}){const[e,n]=H.useState(null),[r,i]=H.useState(1),[s,o]=H.useState(0),[a,u]=H.useState(!1),[c,d]=H.useState([null]),f=Math.max(1,Math.ceil(s/vd));if(H.useEffect(()=>(Pw(t).then(o),r!==1?void 0:yL(t,vd,({trials:C,lastDoc:k})=>{n(C),d(b=>{const E=[...b];return E[1]=k,E}),Pw(t).then(o)})),[t,r]),H.useEffect(()=>{r!==1&&(u(!0),TC(t,vd,c[r-1]??null).then(({trials:w,lastDoc:C})=>{n(w),d(k=>{const b=[...k];return b[r]=C,b}),u(!1)}))},[t,r]),e===null||a)return g.jsx(zL,{});if(s===0)return g.jsx(BL,{});const m=e.filter(w=>w.isCorrect).length;return e.length&&Math.round(m/e.length*100),g.jsxs("div",{className:"flex flex-col",style:{gap:14},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[g.jsxs("p",{className:"section-title",style:{margin:0},children:["Page ",r," of ",f,g.jsxs("span",{style:{fontWeight:400,color:"var(--text-muted)",fontSize:"0.85rem"},children:[" (",s," total)"]})]}),r===1&&g.jsx("span",{style:{fontSize:"0.75rem",color:"var(--red)"},children:"🔴 Live"})]}),g.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:8},children:e.map(w=>g.jsx(UL,{t:w},w.id))}),g.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",justifyContent:"center",marginTop:4},children:[g.jsx("button",{className:"btn btn-outline",style:{padding:"8px 20px",fontSize:"0.9rem"},disabled:r===1,onClick:()=>i(w=>w-1),children:"← Prev"}),g.jsxs("span",{style:{fontWeight:700,fontSize:"0.9rem",color:"var(--text-muted)",minWidth:80,textAlign:"center"},children:[r," / ",f]}),g.jsx("button",{className:"btn btn-primary",style:{padding:"8px 20px",fontSize:"0.9rem"},disabled:r>=f,onClick:()=>i(w=>w+1),children:"Next →"})]})]})}function UL({t}){var n;const e=(n=t.timestamp)!=null&&n.toDate?WL(t.timestamp.toDate()):"—";return g.jsxs("li",{style:{background:"#f8f9fa",borderRadius:12,padding:"12px 14px",display:"flex",flexDirection:"column",gap:6,borderLeft:`4px solid ${t.isCorrect?"var(--green)":"var(--red)"}`},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[g.jsx("span",{className:`result-badge ${t.isCorrect?"badge-correct":"badge-wrong"}`,children:t.isCorrect?"✅ Correct":"❌ Wrong"}),g.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:e})]}),t.numbers&&g.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1rem",letterSpacing:"0.5px",wordBreak:"break-all"},children:$L(t.numbers)}),g.jsxs("div",{style:{display:"flex",gap:14,fontSize:"0.82rem",color:"var(--text-muted)",flexWrap:"wrap"},children:[g.jsxs("span",{children:["Answer: ",g.jsx("strong",{style:{color:"var(--text)"},children:t.actualAnswer})]}),g.jsxs("span",{children:["Yours: ",g.jsx("strong",{style:{color:t.isCorrect?"var(--green-dark)":"var(--red)"},children:t.userAnswer})]}),g.jsxs("span",{children:["⏱ ",t.duration,"s"]}),g.jsxs("span",{children:["🏆 ",t.score??0," pts"]}),g.jsxs("span",{children:[t.count," nums · ",t.digits,"d"]})]})]})}function zL(){return g.jsxs("div",{className:"loader",style:{padding:"40px 0"},children:[g.jsx("div",{className:"loader-dot"}),g.jsx("div",{className:"loader-dot"}),g.jsx("div",{className:"loader-dot"})]})}function BL(){return g.jsxs("div",{className:"text-center",style:{padding:"40px 0",color:"var(--text-muted)"},children:[g.jsx("div",{style:{fontSize:"3rem"},children:"📭"}),g.jsx("p",{style:{fontWeight:700,marginTop:12},children:"No games yet!"}),g.jsx("p",{className:"text-sm mt-sm",children:"Play your first round and results will appear here."})]})}function $L(t){return t.split(" ").map((e,n)=>g.jsx("span",{style:{color:e.startsWith("-")?"var(--red)":"var(--green-dark)",marginRight:4},children:e},n))}function WL(t){return t.toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}const zn=[{label:"BG",full:"Beginner",value:5},{label:"LR",full:"Learning",value:3},{label:"INT",full:"Intermediate",value:2},{label:"ADV",full:"Advanced",value:1.5},{label:"EX",full:"Expert",value:1},{label:"🏅",full:"🏅 World Record",value:.5}];function qL(t,e,n,r){if(!r)return`${t}d · ${e}n · Manual`;const i=zn.find(o=>o.value===n),s=i?i.label:`${n}s`;return`${t}d · ${e}n · ${s}`}function HL({autoMode:t,setAutoMode:e,autoSpeed:n,setAutoSpeed:r}){const i=zn.findIndex(c=>c.value===n),s=i===-1?2:i,o=zn[s],a=(o==null?void 0:o.value)===.5;function u(c){const d=parseInt(c.target.value);r(zn[d].value)}return g.jsxs("div",{children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.75rem"},children:[g.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--text-muted)"},children:"Mode:"}),g.jsx("button",{onClick:()=>e(!1),style:{padding:"4px 16px",borderRadius:"999px",fontSize:"0.82rem",fontWeight:700,border:"2px solid var(--purple)",background:t?"white":"var(--purple)",color:t?"var(--purple)":"white",cursor:"pointer"},children:"Manual"}),g.jsx("button",{onClick:()=>e(!0),style:{padding:"4px 16px",borderRadius:"999px",fontSize:"0.82rem",fontWeight:700,border:"2px solid var(--purple)",background:t?"var(--purple)":"white",color:t?"white":"var(--purple)",cursor:"pointer"},children:"⏱️ Auto"})]}),t&&g.jsxs("div",{children:[g.jsx("input",{type:"range",min:0,max:zn.length-1,step:1,value:s,onChange:u,style:{width:"100%",accentColor:a?"#FFD700":"var(--purple)"}}),g.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginTop:4},children:zn.map((c,d)=>g.jsx("div",{title:`${c.full} — ${c.value}s per number`,onClick:()=>r(c.value),style:{fontSize:"0.7rem",fontWeight:700,cursor:"pointer",textAlign:"center",minWidth:28,padding:"2px 0",borderRadius:4,color:s===d?a&&d===zn.length-1?"#7a5800":"var(--purple-dark)":"var(--text-muted)",background:s===d?d===zn.length-1?"#FFD70044":"#f0ebff":"transparent"},children:c.label},d))}),g.jsxs("div",{style:{textAlign:"center",fontSize:"0.78rem",color:a?"#7a5800":"var(--purple-dark)",fontWeight:700,marginTop:6},children:[o.full," — ",o.value,"s per number",a?" 🏅":""]})]})]})}function GL({presets:t,onPick:e,onCancel:n}){return g.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.4)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",zIndex:10,padding:"1rem"},children:g.jsxs("div",{style:{background:"white",borderRadius:12,padding:"1.25rem",width:"100%"},children:[g.jsx("p",{style:{fontWeight:700,marginBottom:"0.75rem",fontSize:"0.9rem"},children:"20 presets saved — pick one to replace:"}),g.jsx("div",{style:{maxHeight:220,overflowY:"auto",marginBottom:"0.75rem"},children:t.map((r,i)=>g.jsxs("div",{onClick:()=>e(i),style:{padding:"0.5rem 0.75rem",borderRadius:8,cursor:"pointer",marginBottom:4,border:"1px solid var(--border)",fontSize:"0.85rem",fontWeight:600},onMouseEnter:s=>s.currentTarget.style.background="var(--bg)",onMouseLeave:s=>s.currentTarget.style.background="white",children:[r.name,g.jsxs("span",{style:{fontWeight:400,color:"var(--text-muted)",marginLeft:8,fontSize:"0.78rem"},children:[r.digits,"d · ",r.count,"n · ",r.autoMode?`${r.speed}s`:"Manual"]})]},i))}),g.jsx("button",{className:"btn btn-outline btn-full",onClick:n,children:"Cancel"})]})})}function CC({game:t,mode:e="game"}){var W;const{user:n,presets:r,setPresets:i,lastUsed:s,setLastUsed:o}=eo(),{customDigits:a,setCustomDigits:u,customCount:c,setCustomCount:d,autoMode:f,setAutoMode:m,autoSpeed:w,setAutoSpeed:C,startGame:k}=t,[b,E]=H.useState(!1),[y,R]=H.useState(""),[D,j]=H.useState(""),[F,T]=H.useState(!1),[v,I]=H.useState(null);H.useEffect(()=>{e==="game"&&s&&(u(s.digits),d(s.count),m(s.autoMode??!1),C(s.speed??2))},[]);const A=Math.pow(10,a)-1,x=f?`⏱️ Auto — ${((W=zn.find(B=>B.value===w))==null?void 0:W.full)||w+"s"} (${w}s/number)`:"✋ Manual — click Next for each number";function P(B){u(B.digits),d(B.count),m(B.autoMode??!1),C(B.speed??2)}function S(){const B=qL(a,c,w,f);R(B),j(""),E(!0)}function Xe(B){R(B.target.value);const G=r.find(ie=>ie.name===B.target.value.trim());j(G?"A preset with this name already exists — saving will overwrite it.":"")}async function Qt(B=null){const G=y.trim();if(!G)return;const ie={name:G,digits:a,count:c,autoMode:f,speed:w,lastUsed:Date.now(),createdAt:Date.now()};let ee=[...r];const Ee=ee.findIndex(Ft=>Ft.name===G);if(Ee!==-1)ee[Ee]={...ie,createdAt:ee[Ee].createdAt};else if(B!==null)ee[B]=ie;else if(ee.length>=20){I(ie),T(!0),E(!1);return}else ee=[ie,...ee];ee.sort((Ft,on)=>(on.lastUsed||0)-(Ft.lastUsed||0)),i(ee),await fc(n.uid,ee,s),E(!1),T(!1),I(null)}async function wn(B){const G=[...r];G[B]=v,G.sort((ie,ee)=>(ee.lastUsed||0)-(ie.lastUsed||0)),i(G),await fc(n.uid,G,s),T(!1),I(null)}async function Vt(){const B={digits:a,count:c,autoMode:f,speed:w};o(B),await SL(n.uid,B),k()}return g.jsxs("div",{style:{position:"relative"},children:[F&&g.jsx(GL,{presets:r,onPick:wn,onCancel:()=>{T(!1),I(null)}}),g.jsxs("div",{style:{background:"#f8f0ff",borderRadius:14,padding:18,display:"flex",flexDirection:"column",gap:16},children:[r.length>0&&g.jsxs("div",{children:[g.jsx("p",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.4rem"},children:"MY CUSTOM GAME PRESETS"}),g.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:g.jsxs("select",{onChange:B=>{const G=r[parseInt(B.target.value)];G&&P(G)},defaultValue:"",style:{flex:1,padding:"0.5rem 0.75rem",borderRadius:10,border:"2px solid var(--purple)",fontSize:"0.85rem",fontFamily:"Nunito, sans-serif",background:"white",color:"var(--text)",outline:"none"},children:[g.jsx("option",{value:"",disabled:!0,children:"Load a preset..."}),r.map((B,G)=>g.jsx("option",{value:G,children:B.name},G))]})})]}),g.jsxs("div",{children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[g.jsx("span",{className:"section-title",style:{margin:0},children:"Digits per number"}),g.jsx("span",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:"var(--purple-dark)"},children:a})]}),g.jsx("input",{type:"range",min:Tn.minDigits,max:Tn.maxDigits,value:a,onChange:B=>u(Number(B.target.value)),style:{width:"100%",accentColor:"var(--purple)"}}),g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"var(--text-muted)",marginTop:4},children:[g.jsx("span",{children:"1 digit (1–9)"}),g.jsx("span",{children:"2 digits (1–99)"}),g.jsx("span",{children:"8 digits"})]})]}),g.jsxs("div",{children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[g.jsx("span",{className:"section-title",style:{margin:0},children:"Number of terms"}),g.jsx("input",{type:"number",min:Tn.minCount,max:Tn.maxCount,value:c,onChange:B=>{const G=Math.max(Tn.minCount,Math.min(Tn.maxCount,Number(B.target.value)));isNaN(G)||d(G)},style:{width:80,textAlign:"center",fontFamily:"Fredoka One, cursive",fontSize:"1.2rem",border:"2px solid var(--purple)",borderRadius:8,padding:"2px 6px",color:"var(--purple-dark)",background:"white",outline:"none"}})]}),g.jsx("input",{type:"range",min:Tn.minCount,max:Tn.maxCount,value:Math.min(c,Tn.maxCount),onChange:B=>d(Number(B.target.value)),style:{width:"100%",accentColor:"var(--purple)"}}),g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"var(--text-muted)",marginTop:4},children:[g.jsx("span",{children:"2 terms"}),g.jsx("span",{children:"50"}),g.jsxs("span",{children:[Tn.maxCount,"+"]})]})]}),g.jsx(HL,{autoMode:f,setAutoMode:m,autoSpeed:w,setAutoSpeed:C}),g.jsxs("div",{style:{background:"white",borderRadius:10,padding:"10px 14px",fontSize:"0.85rem",color:"var(--text-muted)",lineHeight:1.6},children:[g.jsxs("div",{children:["You'll see ",g.jsxs("strong",{style:{color:"var(--text)"},children:[c," numbers"]})," with up to"," ",g.jsxs("strong",{style:{color:"var(--text)"},children:[a," digit",a>1?"s":""]})," each"," ","(max value: ",g.jsx("strong",{style:{color:"var(--text)"},children:A}),")."]}),g.jsx("div",{style:{marginTop:"0.3rem",fontSize:"0.8rem"},children:x})]}),b?g.jsxs("div",{style:{background:"white",borderRadius:10,padding:"0.75rem"},children:[g.jsx("input",{type:"text",value:y,onChange:Xe,placeholder:"Preset name...",style:{width:"100%",padding:"0.5rem 0.75rem",borderRadius:8,boxSizing:"border-box",border:`2px solid ${D?"#BA7517":"var(--purple)"}`,fontSize:"0.9rem",fontFamily:"Nunito, sans-serif",outline:"none",marginBottom:"0.5rem"}}),D&&g.jsxs("p",{style:{fontSize:"0.75rem",color:"#BA7517",marginBottom:"0.5rem"},children:["⚠️ ",D]}),g.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[g.jsx("button",{className:"btn btn-primary",style:{flex:1},onClick:()=>Qt(),children:"Save"}),g.jsx("button",{className:"btn btn-outline",style:{flex:1},onClick:()=>E(!1),children:"Cancel"})]})]}):g.jsx("button",{className:"btn btn-outline btn-full",onClick:S,children:"+ Save as preset"}),e==="game"&&g.jsx("button",{className:"btn btn-green btn-full btn-lg",onClick:Vt,children:"Start Game! 🚀"})]})]})}function KL({game:t,onClose:e}){const{user:n,profile:r,nickname:i,setNickname:s,presets:o,setPresets:a,lastUsed:u}=eo(),[c,d]=H.useState(i||""),[f,m]=H.useState(!1),[w,C]=H.useState(!1);async function k(){m(!0),await TL(n.uid,{nickname:c.trim()||null}),s(c.trim()||null),m(!1),C(!0),setTimeout(()=>C(!1),2e3)}async function b(E){const y=o.filter((R,D)=>D!==E);a(y),await fc(n.uid,y,u)}return g.jsxs(g.Fragment,{children:[g.jsx("div",{onClick:e,style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:50}}),g.jsxs("div",{style:{position:"fixed",top:0,left:0,bottom:0,width:"85%",maxWidth:420,background:"white",zIndex:51,overflowY:"auto",padding:"1.5rem",boxShadow:"4px 0 24px rgba(0,0,0,0.15)",animation:"slideInLeft 0.25s ease"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.5rem"},children:[g.jsx("h2",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:"var(--purple-dark)",margin:0},children:"⚙️ Settings"}),g.jsx("button",{className:"btn btn-outline",onClick:e,style:{padding:"6px 14px"},children:"✕ Close"})]}),g.jsxs("div",{style:{marginBottom:"1.5rem"},children:[g.jsx("p",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.75rem",letterSpacing:"0.05em"},children:"👤 PROFILE"}),g.jsxs("div",{style:{background:"var(--bg)",borderRadius:12,padding:"1rem"},children:[g.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.25rem"},children:"Full name (from Google)"}),g.jsx("p",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"1rem",color:"var(--text)"},children:(r==null?void 0:r.name)||(n==null?void 0:n.displayName)}),g.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.35rem"},children:["Nickname ",g.jsx("span",{style:{opacity:.6},children:"(shown top-left in game)"})]}),g.jsx("input",{type:"text",value:c,onChange:E=>{d(E.target.value),C(!1)},placeholder:"e.g. Ari, Ninja, Flash...",maxLength:20,style:{width:"100%",padding:"0.5rem 0.75rem",borderRadius:8,border:"2px solid var(--purple)",fontSize:"0.9rem",fontFamily:"Nunito, sans-serif",outline:"none",boxSizing:"border-box",marginBottom:"0.5rem"}}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:k,disabled:f,children:w?"✓ Saved!":f?"Saving...":"Save nickname"})]})]}),g.jsxs("div",{children:[g.jsx("p",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.75rem",letterSpacing:"0.05em"},children:"🎮 CUSTOM TRAINING PRESETS"}),o.length===0?g.jsxs("div",{style:{background:"var(--bg)",borderRadius:12,padding:"1.5rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.875rem"},children:["No presets saved yet.",g.jsx("br",{}),g.jsx("span",{style:{fontSize:"0.8rem",opacity:.7},children:"Go to Play → Custom to create one."})]}):g.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginBottom:"1rem"},children:o.map((E,y)=>g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"var(--bg)",borderRadius:10,padding:"0.6rem 0.75rem",border:"1px solid var(--border)"},children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.875rem",color:"var(--text)"},children:E.name}),g.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:[E.digits,"d · ",E.count,"n · ",E.autoMode?`${E.speed}s auto`:"Manual"]})]}),g.jsx("button",{onClick:()=>b(y),style:{background:"none",border:"none",cursor:"pointer",fontSize:"1rem",color:"var(--text-muted)",padding:"4px 8px"},title:"Delete preset",children:"🗑️"})]},y))}),t&&g.jsx(CC,{game:t,mode:"settings"})]})]}),g.jsx("style",{children:`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
      `})]})}function QL(){var E;const{user:t,profile:e,logout:n,nickname:r}=eo(),i=PL(),[s,o]=H.useState("play"),[a,u]=H.useState(null),[c,d]=H.useState(!1),f=H.useRef(null),[m,w]=H.useState(!1);H.useEffect(()=>{i.phase==="answering"&&setTimeout(()=>{var y;return(y=f.current)==null?void 0:y.focus()},100)},[i.phase]),H.useEffect(()=>{if(i.phase==="watching"){d(!0);const y=setTimeout(()=>d(!1),350);return()=>clearTimeout(y)}},[i.currentTotal,i.phase]);const C=async()=>{const y=i.submitAnswer();if(y){u({correct:y.isCorrect}),setTimeout(()=>u(null),900);try{await _L(t.uid,{...y,sequence:i.sequence})}catch(R){console.warn("Failed to save trial:",R)}}},k=y=>{y.key==="Enter"&&C()},b=((e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"S").split(" ").map(y=>y[0]).join("").slice(0,2).toUpperCase();return g.jsxs("div",{className:"card",style:{maxWidth:550},children:[g.jsxs("div",{className:"header-bar",children:[g.jsxs("div",{className:"avatar-chip",onClick:()=>w(!0),style:{cursor:"pointer"},title:"Settings",children:[g.jsx("div",{className:"avatar",children:b}),g.jsx("span",{children:r||((E=e==null?void 0:e.name)==null?void 0:E.split(" ")[0])||"Student"})]}),g.jsxs("div",{className:"title",style:{display:"flex",fontSize:"1rem",alignItems:"center",gap:"0.5rem"},children:[g.jsx("img",{src:"./logo_header.png",alt:"ChampsWorld",style:{height:"32px",width:"auto",borderRadius:"6px"}}),"Number Ninja"]}),g.jsx("button",{className:"btn btn-outline",style:{padding:"8px 16px",fontSize:"0.85rem"},onClick:n,children:"Sign out"})]}),g.jsxs("div",{className:"tabs",children:[g.jsx("button",{className:`tab ${s==="play"?"active":""}`,onClick:()=>{o("play"),i.phase},children:"🎮 Play"}),g.jsx("button",{className:`tab ${s==="stats"?"active":""}`,onClick:()=>o("stats"),children:"📊 Stats"}),g.jsx("button",{className:`tab ${s==="history"?"active":""}`,onClick:()=>o("history"),children:"📜 History"})]}),s==="play"&&g.jsxs(g.Fragment,{children:[i.phase==="idle"&&g.jsx(YL,{game:i,user:t}),i.phase==="watching"&&g.jsx(JL,{game:i,totalBump:c}),i.phase==="answering"&&g.jsx(ZL,{game:i,answerRef:f,onSubmit:C,onKeyDown:k}),i.phase==="result"&&g.jsx(eV,{game:i,onSwitchHistory:()=>o("history")})]}),s==="stats"&&g.jsx(NL,{uid:t.uid}),s==="history"&&g.jsx(jL,{uid:t.uid}),a&&g.jsx("div",{className:"feedback-overlay",children:g.jsx("div",{className:`feedback-badge ${a.correct?"feedback-correct":"feedback-wrong"}`,children:a.correct?"🎉 Correct!":"❌ Oops!"})}),m&&g.jsx(KL,{game:i,onClose:()=>w(!1)}),g.jsx("div",{style:{textAlign:"center",paddingBottom:"0.75rem"},children:g.jsx("a",{href:"./privacy.html",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.75rem",color:"var(--text-muted)",textDecoration:"none",opacity:.7},onMouseEnter:y=>y.currentTarget.style.opacity="1",onMouseLeave:y=>y.currentTarget.style.opacity="0.7",children:"Privacy Policy"})})]})}function YL({game:t,user:e}){return g.jsxs("div",{className:"flex flex-col",style:{gap:20},children:[g.jsxs("div",{className:"text-center",children:[g.jsx("div",{style:{fontSize:"3rem"},children:"🧮"}),g.jsx("h2",{className:"title",style:{fontSize:"1.6rem"},children:"Mental Math"}),g.jsxs("p",{className:"subtitle mt-sm",children:["Numbers will appear one by one.",g.jsx("br",{}),"Keep track of the running total — then type your answer!"]})]}),g.jsxs("div",{children:[g.jsx("p",{className:"section-title",children:"Choose difficulty:"}),g.jsx("div",{className:"difficulty-grid mt-sm",style:{gridTemplateColumns:"repeat(4, 1fr)"},children:Object.entries(Oa).map(([n,{label:r}])=>g.jsx("button",{className:`diff-btn ${t.difficulty===n?"selected":""}`,onClick:()=>t.setDifficulty(n),children:n==="custom"?g.jsxs("div",{className:"diff-btn-custom-content",children:[g.jsx("span",{className:"diff-btn-icon","aria-hidden":"true",children:"⚙️"}),g.jsx("span",{children:r})]}):r},n))})]}),t.difficulty==="custom"?g.jsx(CC,{game:t,mode:"game"}):g.jsx(XL,{difficulty:t.difficulty}),t.difficulty!=="custom"&&g.jsx("button",{className:"btn btn-green btn-full btn-lg",onClick:t.startGame,children:"Start Game! 🚀"})]})}function XL({difficulty:t}){const e=Oa[t];return g.jsxs("div",{style:{background:"#f0f8ff",borderRadius:12,padding:"14px 18px",fontSize:"0.9rem",color:"var(--text-muted)"},children:["You'll see ",g.jsxs("strong",{style:{color:"var(--text)"},children:[e.count," numbers"]})," with up to"," ",g.jsxs("strong",{style:{color:"var(--text)"},children:[e.digits," digit",e.digits>1?"s":""]})," each."]})}function JL({game:t,totalBump:e}){var E;const{visibleNumbers:n,isLastNumber:r,showNext:i,sequence:s,autoMode:o,autoSpeed:a}=t,u=n[n.length-1],[c,d]=H.useState(!1),f=o&&((E=Oa[t.difficulty])==null?void 0:E.autoAllowed)===!0,m=H.useRef(null),w=H.useRef(null);function C(){clearInterval(m.current),w.current=Date.now(),d(!1),i()}H.useEffect(()=>{if(!(!f||!a)&&!r)return w.current=Date.now(),m.current=setInterval(()=>{Date.now()-w.current>=a*1e3&&C()},100),()=>clearInterval(m.current)},[f,a,t.visibleCount,r]);const[k,b]=H.useState(0);return H.useEffect(()=>{if(!f||!a||r){b(0);return}const y=setInterval(()=>{const R=Date.now()-(w.current||Date.now());b(Math.min(R/(a*1e3),1))},50);return()=>clearInterval(y)},[f,a,t.visibleCount,r]),g.jsxs("div",{className:"flex flex-col",style:{gap:16},children:[g.jsx("div",{className:"progress-dots",children:s.map((y,R)=>g.jsx("div",{className:`dot ${R<t.visibleCount-1?"done":R===t.visibleCount-1?"active":""}`},R))}),f&&a&&!r&&g.jsx("div",{style:{height:4,background:"var(--border)",borderRadius:2,overflow:"hidden"},children:g.jsx("div",{style:{height:"100%",borderRadius:2,background:a<.5?"#D85A30":a===.5?"#FFD700":"var(--purple)",width:`${k*100}%`,transition:"width 50ms linear"}})}),g.jsxs("div",{className:"number-display",children:[!c&&u&&g.jsxs("div",{className:"number-bubble current-large bounce-in",children:[t.visibleCount>1&&g.jsx("span",{className:"operator",children:u.operator}),g.jsx("span",{className:`num ${u.operator==="+"?"positive":"negative"}`,children:u.value})]},t.visibleCount),c&&g.jsx("div",{className:"history-stream",children:n.map((y,R)=>g.jsxs("span",{className:`number-bubble-sm ${y.operator==="+"?"positive":"negative"}`,children:[R>0&&g.jsx("span",{className:"op",children:y.operator}),y.value]},R))})]}),g.jsxs("div",{className:"flex flex-col",style:{gap:10},children:[r?g.jsx("button",{className:"btn btn-yellow btn-full btn-lg",onClick:()=>{C()},children:"I'm ready! ✅"}):g.jsxs(g.Fragment,{children:[g.jsx("button",{className:"btn btn-primary btn-full btn-lg",onClick:()=>{C()},children:"Next number →"}),f&&g.jsx("div",{style:{textAlign:"center",fontSize:"0.82rem",color:"var(--text-muted)",padding:"0.5rem",background:"var(--bg)",borderRadius:"10px"},children:a===.5?"🏅 WR pace — next number in 0.5s⏱️":a<.5?`⏱️ ${a}s pace — beyond WR!`:`⏱️ Auto advancing every ${a}s`})]}),g.jsxs("div",{className:"flex flex-row",style:{gap:10},children:[g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.9rem",flex:1},onClick:t.reset,children:"← Back to Menu"}),g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.9rem",flex:1},onClick:()=>d(y=>!y),disabled:t.visibleCount<2,children:c?"🙈 Hide previous":"👀 Peek previous"})]})]})]})}function ZL({game:t,answerRef:e,onSubmit:n,onKeyDown:r}){return g.jsxs("div",{className:"flex flex-col",style:{gap:16},children:[g.jsxs("div",{className:"text-center",children:[g.jsx("div",{style:{fontSize:"2.5rem"},children:"🤔"}),g.jsx("h3",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:"var(--purple-dark)"},children:"What was the total?"}),g.jsxs("p",{className:"subtitle",children:["You saw ",t.sequence.length," numbers — what did they add up to?"]})]}),g.jsx("div",{className:"answer-row",children:g.jsx("input",{ref:e,className:"answer-input",type:"number",placeholder:"?",value:t.userAnswer,onChange:i=>t.setUserAnswer(i.target.value),onKeyDown:r})}),g.jsx("button",{className:"btn btn-purple btn-full btn-lg",style:{background:"var(--purple)",color:"white",boxShadow:"0 4px 0 var(--purple-dark)"},disabled:!t.userAnswer,onClick:n,children:"Submit Answer 🎯"}),g.jsx("button",{className:"btn btn-outline btn-full",onClick:t.reset,children:"← Back to Menu"})]})}function eV({game:t,onSwitchHistory:e}){const n=t.difficulty==="custom"?`${t.customDigits}d, ${t.customCount}n`:t.difficulty,{result:r}=t,i=r==null?void 0:r.isCorrect;return g.jsxs("div",{className:"flex flex-col text-center",style:{gap:16},children:[g.jsx("div",{style:{fontSize:"4rem",lineHeight:1},children:i?"🎉":"💪"}),g.jsxs("div",{children:[g.jsx("h3",{className:"title",style:{color:i?"var(--green-dark)":"var(--red)"},children:i?"Great job!":"Almost there!"}),g.jsx("p",{className:"subtitle mt-sm",children:i?"Great mental math! Your brain is super fast.":`The answer was ${r==null?void 0:r.actualAnswer}, you said ${r==null?void 0:r.userAnswer}.`})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,background:"#f8f9fa",borderRadius:12,padding:16},children:[g.jsx(Gl,{label:"Numbers seen",value:r==null?void 0:r.count}),g.jsx(Gl,{label:"Score",value:r==null?void 0:r.score,color:"var(--purple-dark)"}),g.jsx(Gl,{label:"Time taken",value:`${r==null?void 0:r.duration}s`}),g.jsx(Gl,{label:"Correct answer",value:r==null?void 0:r.actualAnswer,color:"var(--green-dark)"})]}),g.jsxs("button",{className:"btn btn-green btn-full",onClick:t.startGame,children:["Play '",n,"' Again! 🚀"]}),g.jsx("button",{className:"btn btn-outline btn-full",style:{fontSize:"0.85rem"},onClick:t.reset,children:"Menu"})]})}function Gl({label:t,value:e,color:n}){return g.jsxs("div",{style:{textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.8rem",color:n||"var(--blue-dark)"},children:e}),g.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700},children:t})]})}function tV(){const t=Array.from({length:12},(e,n)=>({size:Math.random()*8+4,top:Math.random()*100,left:Math.random()*100,dur:(Math.random()*3+2).toFixed(1),delay:(Math.random()*3).toFixed(1)}));return g.jsx("div",{className:"stars",children:t.map((e,n)=>g.jsx("div",{className:"star",style:{width:e.size,height:e.size,top:`${e.top}%`,left:`${e.left}%`,"--dur":`${e.dur}s`,animationDelay:`${e.delay}s`}},n))})}function Mw(){return g.jsxs("div",{className:"loader",style:{padding:"60px 0"},children:[g.jsx("div",{className:"loader-dot"}),g.jsx("div",{className:"loader-dot"}),g.jsx("div",{className:"loader-dot"})]})}function nV(){const{user:t,profile:e,loadingProfile:n}=eo(),r=t===void 0;return g.jsxs("div",{className:"app-wrap",children:[g.jsx(tV,{}),r?g.jsx(Mw,{}):t?n?g.jsx(Mw,{}):e?g.jsx(QL,{}):g.jsx(kL,{}):g.jsx(AL,{})]})}KE(document.getElementById("root")).render(g.jsx(H.StrictMode,{children:g.jsx(CL,{children:g.jsx(nV,{})})}));
