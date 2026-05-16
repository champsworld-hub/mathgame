(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Pw={exports:{}},Fc={},Nw={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),eA=Symbol.for("react.portal"),tA=Symbol.for("react.fragment"),nA=Symbol.for("react.strict_mode"),rA=Symbol.for("react.profiler"),iA=Symbol.for("react.provider"),sA=Symbol.for("react.context"),oA=Symbol.for("react.forward_ref"),aA=Symbol.for("react.suspense"),lA=Symbol.for("react.memo"),uA=Symbol.for("react.lazy"),py=Symbol.iterator;function cA(t){return t===null||typeof t!="object"?null:(t=py&&t[py]||t["@@iterator"],typeof t=="function"?t:null)}var bw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dw=Object.assign,Ow={};function eo(t,e,n){this.props=t,this.context=e,this.refs=Ow,this.updater=n||bw}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mw(){}Mw.prototype=eo.prototype;function bp(t,e,n){this.props=t,this.context=e,this.refs=Ow,this.updater=n||bw}var Dp=bp.prototype=new Mw;Dp.constructor=bp;Dw(Dp,eo.prototype);Dp.isPureReactComponent=!0;var my=Array.isArray,Lw=Object.prototype.hasOwnProperty,Op={current:null},Vw={key:!0,ref:!0,__self:!0,__source:!0};function jw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Lw.call(e,r)&&!Vw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:el,type:t,key:s,ref:o,props:i,_owner:Op.current}}function hA(t,e){return{$$typeof:el,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mp(t){return typeof t=="object"&&t!==null&&t.$$typeof===el}function dA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gy=/\/+/g;function od(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dA(""+t.key):e.toString(36)}function gu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case el:case eA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+od(o,0):r,my(i)?(n="",t!=null&&(n=t.replace(gy,"$&/")+"/"),gu(i,e,n,"",function(c){return c})):i!=null&&(Mp(i)&&(i=hA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",my(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+od(s,a);o+=gu(s,e,n,u,i)}else if(u=cA(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+od(s,a++),o+=gu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bl(t,e,n){if(t==null)return t;var r=[],i=0;return gu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vt={current:null},_u={transition:null},pA={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:_u,ReactCurrentOwner:Op};function Fw(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:Bl,forEach:function(t,e,n){Bl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bl(t,function(){e++}),e},toArray:function(t){return Bl(t,function(e){return e})||[]},only:function(t){if(!Mp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=eo;ue.Fragment=tA;ue.Profiler=rA;ue.PureComponent=bp;ue.StrictMode=nA;ue.Suspense=aA;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pA;ue.act=Fw;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Dw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Op.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Lw.call(e,u)&&!Vw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:el,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:sA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iA,_context:t},t.Consumer=t};ue.createElement=jw;ue.createFactory=function(t){var e=jw.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:oA,render:t}};ue.isValidElement=Mp;ue.lazy=function(t){return{$$typeof:uA,_payload:{_status:-1,_result:t},_init:fA}};ue.memo=function(t,e){return{$$typeof:lA,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=_u.transition;_u.transition={};try{t()}finally{_u.transition=e}};ue.unstable_act=Fw;ue.useCallback=function(t,e){return Vt.current.useCallback(t,e)};ue.useContext=function(t){return Vt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Vt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Vt.current.useEffect(t,e)};ue.useId=function(){return Vt.current.useId()};ue.useImperativeHandle=function(t,e,n){return Vt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Vt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Vt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Vt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Vt.current.useReducer(t,e,n)};ue.useRef=function(t){return Vt.current.useRef(t)};ue.useState=function(t){return Vt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Vt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Vt.current.useTransition()};ue.version="18.3.1";Nw.exports=ue;var L=Nw.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mA=L,gA=Symbol.for("react.element"),_A=Symbol.for("react.fragment"),yA=Object.prototype.hasOwnProperty,vA=mA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wA={key:!0,ref:!0,__self:!0,__source:!0};function Uw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)yA.call(e,r)&&!wA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gA,type:t,key:s,ref:o,props:i,_owner:vA.current}}Fc.Fragment=_A;Fc.jsx=Uw;Fc.jsxs=Uw;Pw.exports=Fc;var h=Pw.exports,zw={exports:{}},rn={},Bw={exports:{}},$w={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,H){var U=B.length;B.push(H);e:for(;0<U;){var X=U-1>>>1,Z=B[X];if(0<i(Z,H))B[X]=H,B[U]=Z,U=X;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var H=B[0],U=B.pop();if(U!==H){B[0]=U;e:for(var X=0,Z=B.length,se=Z>>>1;X<se;){var G=2*(X+1)-1,K=B[G],ve=G+1,ke=B[ve];if(0>i(K,U))ve<Z&&0>i(ke,K)?(B[X]=ke,B[ve]=U,X=ve):(B[X]=K,B[G]=U,X=G);else if(ve<Z&&0>i(ke,U))B[X]=ke,B[ve]=U,X=ve;else break e}}return H}function i(B,H){var U=B.sortIndex-H.sortIndex;return U!==0?U:B.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],f=1,p=null,g=3,y=!1,T=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(B){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=B)r(c),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(c)}}function D(B){if(k=!1,C(B),!T)if(n(u)!==null)T=!0,qe(O);else{var H=n(c);H!==null&&xe(D,H.startTime-B)}}function O(B,H){T=!1,k&&(k=!1,x(_),_=-1),y=!0;var U=g;try{for(C(H),p=n(u);p!==null&&(!(p.expirationTime>H)||B&&!R());){var X=p.callback;if(typeof X=="function"){p.callback=null,g=p.priorityLevel;var Z=X(p.expirationTime<=H);H=t.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(u)&&r(u),C(H)}else r(u);p=n(u)}if(p!==null)var se=!0;else{var G=n(c);G!==null&&xe(D,G.startTime-H),se=!1}return se}finally{p=null,g=U,y=!1}}var V=!1,I=null,_=-1,w=5,S=-1;function R(){return!(t.unstable_now()-S<w)}function P(){if(I!==null){var B=t.unstable_now();S=B;var H=!0;try{H=I(!0,B)}finally{H?A():(V=!1,I=null)}}else V=!1}var A;if(typeof E=="function")A=function(){E(P)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Te=me.port2;me.port1.onmessage=P,A=function(){Te.postMessage(null)}}else A=function(){N(P,0)};function qe(B){I=B,V||(V=!0,A())}function xe(B,H){_=N(function(){B(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){T||y||(T=!0,qe(O))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var U=g;g=H;try{return B()}finally{g=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var U=g;g=B;try{return H()}finally{g=U}},t.unstable_scheduleCallback=function(B,H,U){var X=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?X+U:X):U=X,B){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=U+Z,B={id:f++,callback:H,priorityLevel:B,startTime:U,expirationTime:Z,sortIndex:-1},U>X?(B.sortIndex=U,e(c,B),n(u)===null&&B===n(c)&&(k?(x(_),_=-1):k=!0,xe(D,U-X))):(B.sortIndex=Z,e(u,B),T||y||(T=!0,qe(O))),B},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(B){var H=g;return function(){var U=g;g=H;try{return B.apply(this,arguments)}finally{g=U}}}})($w);Bw.exports=$w;var EA=Bw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TA=L,nn=EA;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ww=new Set,ga={};function zi(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(ga[t]=e,t=0;t<e.length;t++)Ww.add(e[t])}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=Object.prototype.hasOwnProperty,IA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_y={},yy={};function SA(t){return ef.call(yy,t)?!0:ef.call(_y,t)?!1:IA.test(t)?yy[t]=!0:(_y[t]=!0,!1)}function xA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function CA(t,e,n,r){if(e===null||typeof e>"u"||xA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lp=/[\-:]([a-z])/g;function Vp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lp,Vp);mt[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lp,Vp);mt[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lp,Vp);mt[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function jp(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(CA(e,n,i,r)&&(n=null),r||i===null?SA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fr=TA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$l=Symbol.for("react.element"),os=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),Fp=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),qw=Symbol.for("react.provider"),Gw=Symbol.for("react.context"),Up=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),rf=Symbol.for("react.suspense_list"),zp=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),Hw=Symbol.for("react.offscreen"),vy=Symbol.iterator;function Po(t){return t===null||typeof t!="object"?null:(t=vy&&t[vy]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,ad;function Wo(t){if(ad===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ad=e&&e[1]||""}return`
`+ad+t}var ld=!1;function ud(t,e){if(!t||ld)return"";ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{ld=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wo(t):""}function AA(t){switch(t.tag){case 5:return Wo(t.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return t=ud(t.type,!1),t;case 11:return t=ud(t.type.render,!1),t;case 1:return t=ud(t.type,!0),t;default:return""}}function sf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case os:return"Portal";case tf:return"Profiler";case Fp:return"StrictMode";case nf:return"Suspense";case rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gw:return(t.displayName||"Context")+".Consumer";case qw:return(t._context.displayName||"Context")+".Provider";case Up:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zp:return e=t.displayName||null,e!==null?e:sf(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return sf(t(e))}catch{}}return null}function kA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sf(e);case 8:return e===Fp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RA(t){var e=Kw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wl(t){t._valueTracker||(t._valueTracker=RA(t))}function Qw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Kw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ju(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function of(t,e){var n=e.checked;return Fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Yw(t,e){e=e.checked,e!=null&&jp(t,"checked",e,!1)}function af(t,e){Yw(t,e);var n=qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&lf(t,e.type,qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ey(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lf(t,e,n){(e!=="number"||ju(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qo=Array.isArray;function ws(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function uf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ty(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(qo(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qr(n)}}function Xw(t,e){var n=qr(e.value),r=qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Iy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ql,Zw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ql=ql||document.createElement("div"),ql.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ql.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PA=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(t){PA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xo[e]=Xo[t]})});function eE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xo.hasOwnProperty(t)&&Xo[t]?(""+e).trim():e+"px"}function tE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=eE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var NA=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hf(t,e){if(e){if(NA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function Bp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pf=null,Es=null,Ts=null;function Sy(t){if(t=rl(t)){if(typeof pf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Wc(e),pf(t.stateNode,t.type,e))}}function nE(t){Es?Ts?Ts.push(t):Ts=[t]:Es=t}function rE(){if(Es){var t=Es,e=Ts;if(Ts=Es=null,Sy(t),e)for(t=0;t<e.length;t++)Sy(e[t])}}function iE(t,e){return t(e)}function sE(){}var cd=!1;function oE(t,e,n){if(cd)return t(e,n);cd=!0;try{return iE(t,e,n)}finally{cd=!1,(Es!==null||Ts!==null)&&(sE(),rE())}}function ya(t,e){var n=t.stateNode;if(n===null)return null;var r=Wc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var mf=!1;if(nr)try{var No={};Object.defineProperty(No,"passive",{get:function(){mf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{mf=!1}function bA(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Jo=!1,Fu=null,Uu=!1,gf=null,DA={onError:function(t){Jo=!0,Fu=t}};function OA(t,e,n,r,i,s,o,a,u){Jo=!1,Fu=null,bA.apply(DA,arguments)}function MA(t,e,n,r,i,s,o,a,u){if(OA.apply(this,arguments),Jo){if(Jo){var c=Fu;Jo=!1,Fu=null}else throw Error(z(198));Uu||(Uu=!0,gf=c)}}function Bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function aE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xy(t){if(Bi(t)!==t)throw Error(z(188))}function LA(t){var e=t.alternate;if(!e){if(e=Bi(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xy(i),t;if(s===r)return xy(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function lE(t){return t=LA(t),t!==null?uE(t):null}function uE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uE(t);if(e!==null)return e;t=t.sibling}return null}var cE=nn.unstable_scheduleCallback,Cy=nn.unstable_cancelCallback,VA=nn.unstable_shouldYield,jA=nn.unstable_requestPaint,We=nn.unstable_now,FA=nn.unstable_getCurrentPriorityLevel,$p=nn.unstable_ImmediatePriority,hE=nn.unstable_UserBlockingPriority,zu=nn.unstable_NormalPriority,UA=nn.unstable_LowPriority,dE=nn.unstable_IdlePriority,Uc=null,bn=null;function zA(t){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(Uc,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:WA,BA=Math.log,$A=Math.LN2;function WA(t){return t>>>=0,t===0?32:31-(BA(t)/$A|0)|0}var Gl=64,Hl=4194304;function Go(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Go(a):(s&=o,s!==0&&(r=Go(s)))}else o=n&~i,o!==0?r=Go(o):s!==0&&(r=Go(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),i=1<<n,r|=t[n],e&=~i;return r}function qA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=qA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function _f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fE(){var t=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),t}function hd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function HA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Wp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ee=0;function pE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mE,qp,gE,_E,yE,yf=!1,Kl=[],br=null,Dr=null,Or=null,va=new Map,wa=new Map,Ir=[],KA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ay(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function bo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=rl(e),e!==null&&qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QA(t,e,n,r,i){switch(e){case"focusin":return br=bo(br,t,e,n,r,i),!0;case"dragenter":return Dr=bo(Dr,t,e,n,r,i),!0;case"mouseover":return Or=bo(Or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return va.set(s,bo(va.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,wa.set(s,bo(wa.get(s)||null,t,e,n,r,i)),!0}return!1}function vE(t){var e=pi(t.target);if(e!==null){var n=Bi(e);if(n!==null){if(e=n.tag,e===13){if(e=aE(n),e!==null){t.blockedOn=e,yE(t.priority,function(){gE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ff=r,n.target.dispatchEvent(r),ff=null}else return e=rl(n),e!==null&&qp(e),t.blockedOn=n,!1;e.shift()}return!0}function ky(t,e,n){yu(t)&&n.delete(e)}function YA(){yf=!1,br!==null&&yu(br)&&(br=null),Dr!==null&&yu(Dr)&&(Dr=null),Or!==null&&yu(Or)&&(Or=null),va.forEach(ky),wa.forEach(ky)}function Do(t,e){t.blockedOn===e&&(t.blockedOn=null,yf||(yf=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,YA)))}function Ea(t){function e(i){return Do(i,t)}if(0<Kl.length){Do(Kl[0],t);for(var n=1;n<Kl.length;n++){var r=Kl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(br!==null&&Do(br,t),Dr!==null&&Do(Dr,t),Or!==null&&Do(Or,t),va.forEach(e),wa.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)vE(n),n.blockedOn===null&&Ir.shift()}var Is=fr.ReactCurrentBatchConfig,$u=!0;function XA(t,e,n,r){var i=Ee,s=Is.transition;Is.transition=null;try{Ee=1,Gp(t,e,n,r)}finally{Ee=i,Is.transition=s}}function JA(t,e,n,r){var i=Ee,s=Is.transition;Is.transition=null;try{Ee=4,Gp(t,e,n,r)}finally{Ee=i,Is.transition=s}}function Gp(t,e,n,r){if($u){var i=vf(t,e,n,r);if(i===null)Ed(t,e,r,Wu,n),Ay(t,r);else if(QA(i,t,e,n,r))r.stopPropagation();else if(Ay(t,r),e&4&&-1<KA.indexOf(t)){for(;i!==null;){var s=rl(i);if(s!==null&&mE(s),s=vf(t,e,n,r),s===null&&Ed(t,e,r,Wu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ed(t,e,r,null,n)}}var Wu=null;function vf(t,e,n,r){if(Wu=null,t=Bp(r),t=pi(t),t!==null)if(e=Bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=aE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wu=t,null}function wE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FA()){case $p:return 1;case hE:return 4;case zu:case UA:return 16;case dE:return 536870912;default:return 16}default:return 16}}var Rr=null,Hp=null,vu=null;function EE(){if(vu)return vu;var t,e=Hp,n=e.length,r,i="value"in Rr?Rr.value:Rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return vu=i.slice(t,1<r?1-r:void 0)}function wu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ql(){return!0}function Ry(){return!1}function sn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ql:Ry,this.isPropagationStopped=Ry,this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ql)},persist:function(){},isPersistent:Ql}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kp=sn(to),nl=Fe({},to,{view:0,detail:0}),ZA=sn(nl),dd,fd,Oo,zc=Fe({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(dd=t.screenX-Oo.screenX,fd=t.screenY-Oo.screenY):fd=dd=0,Oo=t),dd)},movementY:function(t){return"movementY"in t?t.movementY:fd}}),Py=sn(zc),ek=Fe({},zc,{dataTransfer:0}),tk=sn(ek),nk=Fe({},nl,{relatedTarget:0}),pd=sn(nk),rk=Fe({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),ik=sn(rk),sk=Fe({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ok=sn(sk),ak=Fe({},to,{data:0}),Ny=sn(ak),lk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ck={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ck[t])?!!e[t]:!1}function Qp(){return hk}var dk=Fe({},nl,{key:function(t){if(t.key){var e=lk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qp,charCode:function(t){return t.type==="keypress"?wu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fk=sn(dk),pk=Fe({},zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),by=sn(pk),mk=Fe({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qp}),gk=sn(mk),_k=Fe({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),yk=sn(_k),vk=Fe({},zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wk=sn(vk),Ek=[9,13,27,32],Yp=nr&&"CompositionEvent"in window,Zo=null;nr&&"documentMode"in document&&(Zo=document.documentMode);var Tk=nr&&"TextEvent"in window&&!Zo,TE=nr&&(!Yp||Zo&&8<Zo&&11>=Zo),Dy=" ",Oy=!1;function IE(t,e){switch(t){case"keyup":return Ek.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function SE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function Ik(t,e){switch(t){case"compositionend":return SE(e);case"keypress":return e.which!==32?null:(Oy=!0,Dy);case"textInput":return t=e.data,t===Dy&&Oy?null:t;default:return null}}function Sk(t,e){if(ls)return t==="compositionend"||!Yp&&IE(t,e)?(t=EE(),vu=Hp=Rr=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return TE&&e.locale!=="ko"?null:e.data;default:return null}}var xk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function My(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xk[t.type]:e==="textarea"}function xE(t,e,n,r){nE(r),e=qu(e,"onChange"),0<e.length&&(n=new Kp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ea=null,Ta=null;function Ck(t){LE(t,0)}function Bc(t){var e=hs(t);if(Qw(e))return t}function Ak(t,e){if(t==="change")return e}var CE=!1;if(nr){var md;if(nr){var gd="oninput"in document;if(!gd){var Ly=document.createElement("div");Ly.setAttribute("oninput","return;"),gd=typeof Ly.oninput=="function"}md=gd}else md=!1;CE=md&&(!document.documentMode||9<document.documentMode)}function Vy(){ea&&(ea.detachEvent("onpropertychange",AE),Ta=ea=null)}function AE(t){if(t.propertyName==="value"&&Bc(Ta)){var e=[];xE(e,Ta,t,Bp(t)),oE(Ck,e)}}function kk(t,e,n){t==="focusin"?(Vy(),ea=e,Ta=n,ea.attachEvent("onpropertychange",AE)):t==="focusout"&&Vy()}function Rk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bc(Ta)}function Pk(t,e){if(t==="click")return Bc(e)}function Nk(t,e){if(t==="input"||t==="change")return Bc(e)}function bk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xn=typeof Object.is=="function"?Object.is:bk;function Ia(t,e){if(xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ef.call(e,i)||!xn(t[i],e[i]))return!1}return!0}function jy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fy(t,e){var n=jy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jy(n)}}function kE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?kE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function RE(){for(var t=window,e=ju();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ju(t.document)}return e}function Xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Dk(t){var e=RE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&kE(n.ownerDocument.documentElement,n)){if(r!==null&&Xp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Fy(n,s);var o=Fy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ok=nr&&"documentMode"in document&&11>=document.documentMode,us=null,wf=null,ta=null,Ef=!1;function Uy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ef||us==null||us!==ju(r)||(r=us,"selectionStart"in r&&Xp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ta&&Ia(ta,r)||(ta=r,r=qu(wf,"onSelect"),0<r.length&&(e=new Kp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=us)))}function Yl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:Yl("Animation","AnimationEnd"),animationiteration:Yl("Animation","AnimationIteration"),animationstart:Yl("Animation","AnimationStart"),transitionend:Yl("Transition","TransitionEnd")},_d={},PE={};nr&&(PE=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function $c(t){if(_d[t])return _d[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in PE)return _d[t]=e[n];return t}var NE=$c("animationend"),bE=$c("animationiteration"),DE=$c("animationstart"),OE=$c("transitionend"),ME=new Map,zy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(t,e){ME.set(t,e),zi(e,[t])}for(var yd=0;yd<zy.length;yd++){var vd=zy[yd],Mk=vd.toLowerCase(),Lk=vd[0].toUpperCase()+vd.slice(1);Zr(Mk,"on"+Lk)}Zr(NE,"onAnimationEnd");Zr(bE,"onAnimationIteration");Zr(DE,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(OE,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zi("onBeforeInput",["compositionend","keypress","textInput","paste"]);zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function By(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,MA(r,e,void 0,t),t.currentTarget=null}function LE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;By(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;By(i,a,c),s=u}}}if(Uu)throw t=gf,Uu=!1,gf=null,t}function Pe(t,e){var n=e[Cf];n===void 0&&(n=e[Cf]=new Set);var r=t+"__bubble";n.has(r)||(VE(e,t,2,!1),n.add(r))}function wd(t,e,n){var r=0;e&&(r|=4),VE(n,t,r,e)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Sa(t){if(!t[Xl]){t[Xl]=!0,Ww.forEach(function(n){n!=="selectionchange"&&(Vk.has(n)||wd(n,!1,t),wd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xl]||(e[Xl]=!0,wd("selectionchange",!1,e))}}function VE(t,e,n,r){switch(wE(e)){case 1:var i=XA;break;case 4:i=JA;break;default:i=Gp}n=i.bind(null,e,n,t),i=void 0,!mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ed(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=pi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}oE(function(){var c=s,f=Bp(n),p=[];e:{var g=ME.get(t);if(g!==void 0){var y=Kp,T=t;switch(t){case"keypress":if(wu(n)===0)break e;case"keydown":case"keyup":y=fk;break;case"focusin":T="focus",y=pd;break;case"focusout":T="blur",y=pd;break;case"beforeblur":case"afterblur":y=pd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Py;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=tk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=gk;break;case NE:case bE:case DE:y=ik;break;case OE:y=yk;break;case"scroll":y=ZA;break;case"wheel":y=wk;break;case"copy":case"cut":case"paste":y=ok;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=by}var k=(e&4)!==0,N=!k&&t==="scroll",x=k?g!==null?g+"Capture":null:g;k=[];for(var E=c,C;E!==null;){C=E;var D=C.stateNode;if(C.tag===5&&D!==null&&(C=D,x!==null&&(D=ya(E,x),D!=null&&k.push(xa(E,D,C)))),N)break;E=E.return}0<k.length&&(g=new y(g,T,null,n,f),p.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",g&&n!==ff&&(T=n.relatedTarget||n.fromElement)&&(pi(T)||T[rr]))break e;if((y||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,y?(T=n.relatedTarget||n.toElement,y=c,T=T?pi(T):null,T!==null&&(N=Bi(T),T!==N||T.tag!==5&&T.tag!==6)&&(T=null)):(y=null,T=c),y!==T)){if(k=Py,D="onMouseLeave",x="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(k=by,D="onPointerLeave",x="onPointerEnter",E="pointer"),N=y==null?g:hs(y),C=T==null?g:hs(T),g=new k(D,E+"leave",y,n,f),g.target=N,g.relatedTarget=C,D=null,pi(f)===c&&(k=new k(x,E+"enter",T,n,f),k.target=C,k.relatedTarget=N,D=k),N=D,y&&T)t:{for(k=y,x=T,E=0,C=k;C;C=ts(C))E++;for(C=0,D=x;D;D=ts(D))C++;for(;0<E-C;)k=ts(k),E--;for(;0<C-E;)x=ts(x),C--;for(;E--;){if(k===x||x!==null&&k===x.alternate)break t;k=ts(k),x=ts(x)}k=null}else k=null;y!==null&&$y(p,g,y,k,!1),T!==null&&N!==null&&$y(p,N,T,k,!0)}}e:{if(g=c?hs(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var O=Ak;else if(My(g))if(CE)O=Nk;else{O=Rk;var V=kk}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(O=Pk);if(O&&(O=O(t,c))){xE(p,O,n,f);break e}V&&V(t,g,c),t==="focusout"&&(V=g._wrapperState)&&V.controlled&&g.type==="number"&&lf(g,"number",g.value)}switch(V=c?hs(c):window,t){case"focusin":(My(V)||V.contentEditable==="true")&&(us=V,wf=c,ta=null);break;case"focusout":ta=wf=us=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,Uy(p,n,f);break;case"selectionchange":if(Ok)break;case"keydown":case"keyup":Uy(p,n,f)}var I;if(Yp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ls?IE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(TE&&n.locale!=="ko"&&(ls||_!=="onCompositionStart"?_==="onCompositionEnd"&&ls&&(I=EE()):(Rr=f,Hp="value"in Rr?Rr.value:Rr.textContent,ls=!0)),V=qu(c,_),0<V.length&&(_=new Ny(_,t,null,n,f),p.push({event:_,listeners:V}),I?_.data=I:(I=SE(n),I!==null&&(_.data=I)))),(I=Tk?Ik(t,n):Sk(t,n))&&(c=qu(c,"onBeforeInput"),0<c.length&&(f=new Ny("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=I))}LE(p,e)})}function xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ya(t,n),s!=null&&r.unshift(xa(t,s,i)),s=ya(t,e),s!=null&&r.push(xa(t,s,i))),t=t.return}return r}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $y(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ya(n,s),u!=null&&o.unshift(xa(n,u,a))):i||(u=ya(n,s),u!=null&&o.push(xa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jk=/\r\n?/g,Fk=/\u0000|\uFFFD/g;function Wy(t){return(typeof t=="string"?t:""+t).replace(jk,`
`).replace(Fk,"")}function Jl(t,e,n){if(e=Wy(e),Wy(t)!==e&&n)throw Error(z(425))}function Gu(){}var Tf=null,If=null;function Sf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,Uk=typeof clearTimeout=="function"?clearTimeout:void 0,qy=typeof Promise=="function"?Promise:void 0,zk=typeof queueMicrotask=="function"?queueMicrotask:typeof qy<"u"?function(t){return qy.resolve(null).then(t).catch(Bk)}:xf;function Bk(t){setTimeout(function(){throw t})}function Td(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ea(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ea(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),Nn="__reactFiber$"+no,Ca="__reactProps$"+no,rr="__reactContainer$"+no,Cf="__reactEvents$"+no,$k="__reactListeners$"+no,Wk="__reactHandles$"+no;function pi(t){var e=t[Nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[rr]||n[Nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gy(t);t!==null;){if(n=t[Nn])return n;t=Gy(t)}return e}t=n,n=t.parentNode}return null}function rl(t){return t=t[Nn]||t[rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Wc(t){return t[Ca]||null}var Af=[],ds=-1;function ei(t){return{current:t}}function De(t){0>ds||(t.current=Af[ds],Af[ds]=null,ds--)}function Ae(t,e){ds++,Af[ds]=t.current,t.current=e}var Gr={},At=ei(Gr),$t=ei(!1),xi=Gr;function Ms(t,e){var n=t.type.contextTypes;if(!n)return Gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Wt(t){return t=t.childContextTypes,t!=null}function Hu(){De($t),De(At)}function Hy(t,e,n){if(At.current!==Gr)throw Error(z(168));Ae(At,e),Ae($t,n)}function jE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,kA(t)||"Unknown",i));return Fe({},n,r)}function Ku(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gr,xi=At.current,Ae(At,t),Ae($t,$t.current),!0}function Ky(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=jE(t,e,xi),r.__reactInternalMemoizedMergedChildContext=t,De($t),De(At),Ae(At,t)):De($t),Ae($t,n)}var qn=null,qc=!1,Id=!1;function FE(t){qn===null?qn=[t]:qn.push(t)}function qk(t){qc=!0,FE(t)}function ti(){if(!Id&&qn!==null){Id=!0;var t=0,e=Ee;try{var n=qn;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,qc=!1}catch(i){throw qn!==null&&(qn=qn.slice(t+1)),cE($p,ti),i}finally{Ee=e,Id=!1}}return null}var fs=[],ps=0,Qu=null,Yu=0,on=[],an=0,Ci=null,Hn=1,Kn="";function ci(t,e){fs[ps++]=Yu,fs[ps++]=Qu,Qu=t,Yu=e}function UE(t,e,n){on[an++]=Hn,on[an++]=Kn,on[an++]=Ci,Ci=t;var r=Hn;t=Kn;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var s=32-wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hn=1<<32-wn(e)+i|n<<i|r,Kn=s+t}else Hn=1<<s|n<<i|r,Kn=t}function Jp(t){t.return!==null&&(ci(t,1),UE(t,1,0))}function Zp(t){for(;t===Qu;)Qu=fs[--ps],fs[ps]=null,Yu=fs[--ps],fs[ps]=null;for(;t===Ci;)Ci=on[--an],on[an]=null,Kn=on[--an],on[an]=null,Hn=on[--an],on[an]=null}var en=null,Jt=null,Le=!1,gn=null;function zE(t,e){var n=ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,en=t,Jt=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,en=t,Jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ci!==null?{id:Hn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,en=t,Jt=null,!0):!1;default:return!1}}function kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rf(t){if(Le){var e=Jt;if(e){var n=e;if(!Qy(t,e)){if(kf(t))throw Error(z(418));e=Mr(n.nextSibling);var r=en;e&&Qy(t,e)?zE(r,n):(t.flags=t.flags&-4097|2,Le=!1,en=t)}}else{if(kf(t))throw Error(z(418));t.flags=t.flags&-4097|2,Le=!1,en=t}}}function Yy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;en=t}function Zl(t){if(t!==en)return!1;if(!Le)return Yy(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sf(t.type,t.memoizedProps)),e&&(e=Jt)){if(kf(t))throw BE(),Error(z(418));for(;e;)zE(t,e),e=Mr(e.nextSibling)}if(Yy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Jt=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Jt=null}}else Jt=en?Mr(t.stateNode.nextSibling):null;return!0}function BE(){for(var t=Jt;t;)t=Mr(t.nextSibling)}function Ls(){Jt=en=null,Le=!1}function em(t){gn===null?gn=[t]:gn.push(t)}var Gk=fr.ReactCurrentBatchConfig;function Mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function eu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xy(t){var e=t._init;return e(t._payload)}function $E(t){function e(x,E){if(t){var C=x.deletions;C===null?(x.deletions=[E],x.flags|=16):C.push(E)}}function n(x,E){if(!t)return null;for(;E!==null;)e(x,E),E=E.sibling;return null}function r(x,E){for(x=new Map;E!==null;)E.key!==null?x.set(E.key,E):x.set(E.index,E),E=E.sibling;return x}function i(x,E){return x=Fr(x,E),x.index=0,x.sibling=null,x}function s(x,E,C){return x.index=C,t?(C=x.alternate,C!==null?(C=C.index,C<E?(x.flags|=2,E):C):(x.flags|=2,E)):(x.flags|=1048576,E)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function a(x,E,C,D){return E===null||E.tag!==6?(E=Pd(C,x.mode,D),E.return=x,E):(E=i(E,C),E.return=x,E)}function u(x,E,C,D){var O=C.type;return O===as?f(x,E,C.props.children,D,C.key):E!==null&&(E.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Er&&Xy(O)===E.type)?(D=i(E,C.props),D.ref=Mo(x,E,C),D.return=x,D):(D=Au(C.type,C.key,C.props,null,x.mode,D),D.ref=Mo(x,E,C),D.return=x,D)}function c(x,E,C,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=Nd(C,x.mode,D),E.return=x,E):(E=i(E,C.children||[]),E.return=x,E)}function f(x,E,C,D,O){return E===null||E.tag!==7?(E=Ti(C,x.mode,D,O),E.return=x,E):(E=i(E,C),E.return=x,E)}function p(x,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Pd(""+E,x.mode,C),E.return=x,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case $l:return C=Au(E.type,E.key,E.props,null,x.mode,C),C.ref=Mo(x,null,E),C.return=x,C;case os:return E=Nd(E,x.mode,C),E.return=x,E;case Er:var D=E._init;return p(x,D(E._payload),C)}if(qo(E)||Po(E))return E=Ti(E,x.mode,C,null),E.return=x,E;eu(x,E)}return null}function g(x,E,C,D){var O=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return O!==null?null:a(x,E,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case $l:return C.key===O?u(x,E,C,D):null;case os:return C.key===O?c(x,E,C,D):null;case Er:return O=C._init,g(x,E,O(C._payload),D)}if(qo(C)||Po(C))return O!==null?null:f(x,E,C,D,null);eu(x,C)}return null}function y(x,E,C,D,O){if(typeof D=="string"&&D!==""||typeof D=="number")return x=x.get(C)||null,a(E,x,""+D,O);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case $l:return x=x.get(D.key===null?C:D.key)||null,u(E,x,D,O);case os:return x=x.get(D.key===null?C:D.key)||null,c(E,x,D,O);case Er:var V=D._init;return y(x,E,C,V(D._payload),O)}if(qo(D)||Po(D))return x=x.get(C)||null,f(E,x,D,O,null);eu(E,D)}return null}function T(x,E,C,D){for(var O=null,V=null,I=E,_=E=0,w=null;I!==null&&_<C.length;_++){I.index>_?(w=I,I=null):w=I.sibling;var S=g(x,I,C[_],D);if(S===null){I===null&&(I=w);break}t&&I&&S.alternate===null&&e(x,I),E=s(S,E,_),V===null?O=S:V.sibling=S,V=S,I=w}if(_===C.length)return n(x,I),Le&&ci(x,_),O;if(I===null){for(;_<C.length;_++)I=p(x,C[_],D),I!==null&&(E=s(I,E,_),V===null?O=I:V.sibling=I,V=I);return Le&&ci(x,_),O}for(I=r(x,I);_<C.length;_++)w=y(I,x,_,C[_],D),w!==null&&(t&&w.alternate!==null&&I.delete(w.key===null?_:w.key),E=s(w,E,_),V===null?O=w:V.sibling=w,V=w);return t&&I.forEach(function(R){return e(x,R)}),Le&&ci(x,_),O}function k(x,E,C,D){var O=Po(C);if(typeof O!="function")throw Error(z(150));if(C=O.call(C),C==null)throw Error(z(151));for(var V=O=null,I=E,_=E=0,w=null,S=C.next();I!==null&&!S.done;_++,S=C.next()){I.index>_?(w=I,I=null):w=I.sibling;var R=g(x,I,S.value,D);if(R===null){I===null&&(I=w);break}t&&I&&R.alternate===null&&e(x,I),E=s(R,E,_),V===null?O=R:V.sibling=R,V=R,I=w}if(S.done)return n(x,I),Le&&ci(x,_),O;if(I===null){for(;!S.done;_++,S=C.next())S=p(x,S.value,D),S!==null&&(E=s(S,E,_),V===null?O=S:V.sibling=S,V=S);return Le&&ci(x,_),O}for(I=r(x,I);!S.done;_++,S=C.next())S=y(I,x,_,S.value,D),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?_:S.key),E=s(S,E,_),V===null?O=S:V.sibling=S,V=S);return t&&I.forEach(function(P){return e(x,P)}),Le&&ci(x,_),O}function N(x,E,C,D){if(typeof C=="object"&&C!==null&&C.type===as&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case $l:e:{for(var O=C.key,V=E;V!==null;){if(V.key===O){if(O=C.type,O===as){if(V.tag===7){n(x,V.sibling),E=i(V,C.props.children),E.return=x,x=E;break e}}else if(V.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Er&&Xy(O)===V.type){n(x,V.sibling),E=i(V,C.props),E.ref=Mo(x,V,C),E.return=x,x=E;break e}n(x,V);break}else e(x,V);V=V.sibling}C.type===as?(E=Ti(C.props.children,x.mode,D,C.key),E.return=x,x=E):(D=Au(C.type,C.key,C.props,null,x.mode,D),D.ref=Mo(x,E,C),D.return=x,x=D)}return o(x);case os:e:{for(V=C.key;E!==null;){if(E.key===V)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){n(x,E.sibling),E=i(E,C.children||[]),E.return=x,x=E;break e}else{n(x,E);break}else e(x,E);E=E.sibling}E=Nd(C,x.mode,D),E.return=x,x=E}return o(x);case Er:return V=C._init,N(x,E,V(C._payload),D)}if(qo(C))return T(x,E,C,D);if(Po(C))return k(x,E,C,D);eu(x,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,E!==null&&E.tag===6?(n(x,E.sibling),E=i(E,C),E.return=x,x=E):(n(x,E),E=Pd(C,x.mode,D),E.return=x,x=E),o(x)):n(x,E)}return N}var Vs=$E(!0),WE=$E(!1),Xu=ei(null),Ju=null,ms=null,tm=null;function nm(){tm=ms=Ju=null}function rm(t){var e=Xu.current;De(Xu),t._currentValue=e}function Pf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){Ju=t,tm=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ut=!0),t.firstContext=null)}function cn(t){var e=t._currentValue;if(tm!==t)if(t={context:t,memoizedValue:e,next:null},ms===null){if(Ju===null)throw Error(z(308));ms=t,Ju.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return e}var mi=null;function im(t){mi===null?mi=[t]:mi.push(t)}function qE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,im(e)):(n.next=i.next,i.next=n),e.interleaved=n,ir(t,r)}function ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tr=!1;function sm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function GE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ir(t,n)}return i=r.interleaved,i===null?(e.next=e,im(r)):(e.next=i.next,i.next=e),r.interleaved=e,ir(t,n)}function Eu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wp(t,n)}}function Jy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zu(t,e,n,r){var i=t.updateQueue;Tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,a=s;do{var g=a.lane,y=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,k=a;switch(g=e,y=n,k.tag){case 1:if(T=k.payload,typeof T=="function"){p=T.call(y,p,g);break e}p=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=k.payload,g=typeof T=="function"?T.call(y,p,g):T,g==null)break e;p=Fe({},p,g);break e;case 2:Tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=y,u=p):f=f.next=y,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ki|=o,t.lanes=o,t.memoizedState=p}}function Zy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var il={},Dn=ei(il),Aa=ei(il),ka=ei(il);function gi(t){if(t===il)throw Error(z(174));return t}function om(t,e){switch(Ae(ka,e),Ae(Aa,t),Ae(Dn,il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cf(e,t)}De(Dn),Ae(Dn,e)}function js(){De(Dn),De(Aa),De(ka)}function HE(t){gi(ka.current);var e=gi(Dn.current),n=cf(e,t.type);e!==n&&(Ae(Aa,t),Ae(Dn,n))}function am(t){Aa.current===t&&(De(Dn),De(Aa))}var Ve=ei(0);function ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sd=[];function lm(){for(var t=0;t<Sd.length;t++)Sd[t]._workInProgressVersionPrimary=null;Sd.length=0}var Tu=fr.ReactCurrentDispatcher,xd=fr.ReactCurrentBatchConfig,Ai=0,je=null,Xe=null,rt=null,tc=!1,na=!1,Ra=0,Hk=0;function wt(){throw Error(z(321))}function um(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xn(t[n],e[n]))return!1;return!0}function cm(t,e,n,r,i,s){if(Ai=s,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tu.current=t===null||t.memoizedState===null?Xk:Jk,t=n(r,i),na){s=0;do{if(na=!1,Ra=0,25<=s)throw Error(z(301));s+=1,rt=Xe=null,e.updateQueue=null,Tu.current=Zk,t=n(r,i)}while(na)}if(Tu.current=nc,e=Xe!==null&&Xe.next!==null,Ai=0,rt=Xe=je=null,tc=!1,e)throw Error(z(300));return t}function hm(){var t=Ra!==0;return Ra=0,t}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?je.memoizedState=rt=t:rt=rt.next=t,rt}function hn(){if(Xe===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=rt===null?je.memoizedState:rt.next;if(e!==null)rt=e,Xe=t;else{if(t===null)throw Error(z(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},rt===null?je.memoizedState=rt=t:rt=rt.next=t}return rt}function Pa(t,e){return typeof e=="function"?e(t):e}function Cd(t){var e=hn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var f=c.lane;if((Ai&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,je.lanes|=f,ki|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,xn(r,e.memoizedState)||(Ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,je.lanes|=s,ki|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ad(t){var e=hn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);xn(s,e.memoizedState)||(Ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function KE(){}function QE(t,e){var n=je,r=hn(),i=e(),s=!xn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ut=!0),r=r.queue,dm(JE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,Na(9,XE.bind(null,n,r,i,e),void 0,null),at===null)throw Error(z(349));Ai&30||YE(n,e,i)}return i}function YE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function XE(t,e,n,r){e.value=n,e.getSnapshot=r,ZE(e)&&eT(t)}function JE(t,e,n){return n(function(){ZE(e)&&eT(t)})}function ZE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xn(t,n)}catch{return!0}}function eT(t){var e=ir(t,1);e!==null&&En(e,t,1,-1)}function ev(t){var e=Pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},e.queue=t,t=t.dispatch=Yk.bind(null,je,t),[e.memoizedState,t]}function Na(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tT(){return hn().memoizedState}function Iu(t,e,n,r){var i=Pn();je.flags|=t,i.memoizedState=Na(1|e,n,void 0,r===void 0?null:r)}function Gc(t,e,n,r){var i=hn();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&um(r,o.deps)){i.memoizedState=Na(e,n,s,r);return}}je.flags|=t,i.memoizedState=Na(1|e,n,s,r)}function tv(t,e){return Iu(8390656,8,t,e)}function dm(t,e){return Gc(2048,8,t,e)}function nT(t,e){return Gc(4,2,t,e)}function rT(t,e){return Gc(4,4,t,e)}function iT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sT(t,e,n){return n=n!=null?n.concat([t]):null,Gc(4,4,iT.bind(null,e,t),n)}function fm(){}function oT(t,e){var n=hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&um(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function aT(t,e){var n=hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&um(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lT(t,e,n){return Ai&21?(xn(n,e)||(n=fE(),je.lanes|=n,ki|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ut=!0),t.memoizedState=n)}function Kk(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=xd.transition;xd.transition={};try{t(!1),e()}finally{Ee=n,xd.transition=r}}function uT(){return hn().memoizedState}function Qk(t,e,n){var r=jr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cT(t))hT(e,n);else if(n=qE(t,e,n,r),n!==null){var i=Lt();En(n,t,r,i),dT(n,e,r)}}function Yk(t,e,n){var r=jr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cT(t))hT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,xn(a,o)){var u=e.interleaved;u===null?(i.next=i,im(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=qE(t,e,i,r),n!==null&&(i=Lt(),En(n,t,r,i),dT(n,e,r))}}function cT(t){var e=t.alternate;return t===je||e!==null&&e===je}function hT(t,e){na=tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wp(t,n)}}var nc={readContext:cn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},Xk={readContext:cn,useCallback:function(t,e){return Pn().memoizedState=[t,e===void 0?null:e],t},useContext:cn,useEffect:tv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Iu(4194308,4,iT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Iu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Iu(4,2,t,e)},useMemo:function(t,e){var n=Pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Qk.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=Pn();return t={current:t},e.memoizedState=t},useState:ev,useDebugValue:fm,useDeferredValue:function(t){return Pn().memoizedState=t},useTransition:function(){var t=ev(!1),e=t[0];return t=Kk.bind(null,t[1]),Pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,i=Pn();if(Le){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),at===null)throw Error(z(349));Ai&30||YE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,tv(JE.bind(null,r,s,t),[t]),r.flags|=2048,Na(9,XE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Pn(),e=at.identifierPrefix;if(Le){var n=Kn,r=Hn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Hk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Jk={readContext:cn,useCallback:oT,useContext:cn,useEffect:dm,useImperativeHandle:sT,useInsertionEffect:nT,useLayoutEffect:rT,useMemo:aT,useReducer:Cd,useRef:tT,useState:function(){return Cd(Pa)},useDebugValue:fm,useDeferredValue:function(t){var e=hn();return lT(e,Xe.memoizedState,t)},useTransition:function(){var t=Cd(Pa)[0],e=hn().memoizedState;return[t,e]},useMutableSource:KE,useSyncExternalStore:QE,useId:uT,unstable_isNewReconciler:!1},Zk={readContext:cn,useCallback:oT,useContext:cn,useEffect:dm,useImperativeHandle:sT,useInsertionEffect:nT,useLayoutEffect:rT,useMemo:aT,useReducer:Ad,useRef:tT,useState:function(){return Ad(Pa)},useDebugValue:fm,useDeferredValue:function(t){var e=hn();return Xe===null?e.memoizedState=t:lT(e,Xe.memoizedState,t)},useTransition:function(){var t=Ad(Pa)[0],e=hn().memoizedState;return[t,e]},useMutableSource:KE,useSyncExternalStore:QE,useId:uT,unstable_isNewReconciler:!1};function pn(t,e){if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hc={isMounted:function(t){return(t=t._reactInternals)?Bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=jr(t),s=er(r,i);s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(En(e,t,i,r),Eu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=jr(t),s=er(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(En(e,t,i,r),Eu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Lt(),r=jr(t),i=er(n,r);i.tag=2,e!=null&&(i.callback=e),e=Lr(t,i,r),e!==null&&(En(e,t,r,n),Eu(e,t,r))}};function nv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ia(n,r)||!Ia(i,s):!0}function fT(t,e,n){var r=!1,i=Gr,s=e.contextType;return typeof s=="object"&&s!==null?s=cn(s):(i=Wt(e)?xi:At.current,r=e.contextTypes,s=(r=r!=null)?Ms(t,i):Gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function rv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hc.enqueueReplaceState(e,e.state,null)}function bf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},sm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=cn(s):(s=Wt(e)?xi:At.current,i.context=Ms(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hc.enqueueReplaceState(i,i.state,null),Zu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Fs(t,e){try{var n="",r=e;do n+=AA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var e1=typeof WeakMap=="function"?WeakMap:Map;function pT(t,e,n){n=er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ic||(ic=!0,$f=r),Df(t,e)},n}function mT(t,e,n){n=er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Df(t,e),typeof r!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function iv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new e1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=p1.bind(null,t,e,n),e.then(t,t))}function sv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ov(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=er(-1,1),e.tag=2,Lr(n,e,1))),n.lanes|=1),t)}var t1=fr.ReactCurrentOwner,Ut=!1;function Nt(t,e,n,r){e.child=t===null?WE(e,null,n,r):Vs(e,t.child,n,r)}function av(t,e,n,r,i){n=n.render;var s=e.ref;return Ss(e,i),r=cm(t,e,n,r,s,i),n=hm(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sr(t,e,i)):(Le&&n&&Jp(e),e.flags|=1,Nt(t,e,r,i),e.child)}function lv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Em(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gT(t,e,s,r,i)):(t=Au(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ia,n(o,r)&&t.ref===e.ref)return sr(t,e,i)}return e.flags|=1,t=Fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function gT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ia(s,r)&&t.ref===e.ref)if(Ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ut=!0);else return e.lanes=t.lanes,sr(t,e,i)}return Of(t,e,n,r,i)}function _T(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(_s,Yt),Yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ae(_s,Yt),Yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ae(_s,Yt),Yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ae(_s,Yt),Yt|=r;return Nt(t,e,i,n),e.child}function yT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Of(t,e,n,r,i){var s=Wt(n)?xi:At.current;return s=Ms(e,s),Ss(e,i),n=cm(t,e,n,r,s,i),r=hm(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sr(t,e,i)):(Le&&r&&Jp(e),e.flags|=1,Nt(t,e,n,i),e.child)}function uv(t,e,n,r,i){if(Wt(n)){var s=!0;Ku(e)}else s=!1;if(Ss(e,i),e.stateNode===null)Su(t,e),fT(e,n,r),bf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=cn(c):(c=Wt(n)?xi:At.current,c=Ms(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&rv(e,o,r,c),Tr=!1;var g=e.memoizedState;o.state=g,Zu(e,r,o,i),u=e.memoizedState,a!==r||g!==u||$t.current||Tr?(typeof f=="function"&&(Nf(e,n,f,r),u=e.memoizedState),(a=Tr||nv(e,n,a,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,GE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:pn(e.type,a),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=cn(u):(u=Wt(n)?xi:At.current,u=Ms(e,u));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==u)&&rv(e,o,r,u),Tr=!1,g=e.memoizedState,o.state=g,Zu(e,r,o,i);var T=e.memoizedState;a!==p||g!==T||$t.current||Tr?(typeof y=="function"&&(Nf(e,n,y,r),T=e.memoizedState),(c=Tr||nv(e,n,c,r,g,T,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Mf(t,e,n,r,s,i)}function Mf(t,e,n,r,i,s){yT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ky(e,n,!1),sr(t,e,s);r=e.stateNode,t1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,a,s)):Nt(t,e,a,s),e.memoizedState=r.state,i&&Ky(e,n,!0),e.child}function vT(t){var e=t.stateNode;e.pendingContext?Hy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hy(t,e.context,!1),om(t,e.containerInfo)}function cv(t,e,n,r,i){return Ls(),em(i),e.flags|=256,Nt(t,e,n,r),e.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function wT(t,e,n){var r=e.pendingProps,i=Ve.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ae(Ve,i&1),t===null)return Rf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yc(o,r,0,null),t=Ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vf(n),e.memoizedState=Lf,t):pm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return n1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Fr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Fr(a,s):(s=Ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lf,r}return s=t.child,t=s.sibling,r=Fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pm(t,e){return e=Yc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tu(t,e,n,r){return r!==null&&em(r),Vs(e,t.child,null,n),t=pm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function n1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kd(Error(z(422))),tu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yc({mode:"visible",children:r.children},i,0,null),s=Ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Vs(e,t.child,null,o),e.child.memoizedState=Vf(o),e.memoizedState=Lf,s);if(!(e.mode&1))return tu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=kd(s,r,void 0),tu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ut||a){if(r=at,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ir(t,i),En(r,t,i,-1))}return wm(),r=kd(Error(z(421))),tu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=m1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Jt=Mr(i.nextSibling),en=e,Le=!0,gn=null,t!==null&&(on[an++]=Hn,on[an++]=Kn,on[an++]=Ci,Hn=t.id,Kn=t.overflow,Ci=e),e=pm(e,r.children),e.flags|=4096,e)}function hv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Pf(t.return,e,n)}function Rd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ET(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Nt(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hv(t,n,e);else if(t.tag===19)hv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ae(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ec(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Rd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ec(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Rd(e,!0,n,null,s);break;case"together":Rd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Su(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ki|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function r1(t,e,n){switch(e.tag){case 3:vT(e),Ls();break;case 5:HE(e);break;case 1:Wt(e.type)&&Ku(e);break;case 4:om(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ae(Xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ae(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?wT(t,e,n):(Ae(Ve,Ve.current&1),t=sr(t,e,n),t!==null?t.sibling:null);Ae(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ET(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,_T(t,e,n)}return sr(t,e,n)}var TT,jf,IT,ST;TT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jf=function(){};IT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,gi(Dn.current);var s=null;switch(n){case"input":i=of(t,i),r=of(t,r),s=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),s=[];break;case"textarea":i=uf(t,i),r=uf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gu)}hf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ga.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ga.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Pe("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ST=function(t,e,n,r){n!==r&&(e.flags|=4)};function Lo(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function i1(t,e,n){var r=e.pendingProps;switch(Zp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Wt(e.type)&&Hu(),Et(e),null;case 3:return r=e.stateNode,js(),De($t),De(At),lm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gn!==null&&(Gf(gn),gn=null))),jf(t,e),Et(e),null;case 5:am(e);var i=gi(ka.current);if(n=e.type,t!==null&&e.stateNode!=null)IT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return Et(e),null}if(t=gi(Dn.current),Zl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nn]=e,r[Ca]=s,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<Ho.length;i++)Pe(Ho[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":wy(r,s),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Pe("invalid",r);break;case"textarea":Ty(r,s),Pe("invalid",r)}hf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Jl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Jl(r.textContent,a,t),i=["children",""+a]):ga.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":Wl(r),Ey(r,s,!0);break;case"textarea":Wl(r),Iy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nn]=e,t[Ca]=r,TT(t,e,!1,!1),e.stateNode=t;e:{switch(o=df(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),i=r;break;case"iframe":case"object":case"embed":Pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ho.length;i++)Pe(Ho[i],t);i=r;break;case"source":Pe("error",t),i=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),i=r;break;case"details":Pe("toggle",t),i=r;break;case"input":wy(t,r),i=of(t,r),Pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":Ty(t,r),i=uf(t,r),Pe("invalid",t);break;default:i=r}hf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?tE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Zw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&_a(t,u):typeof u=="number"&&_a(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ga.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Pe("scroll",t):u!=null&&jp(t,s,u,o))}switch(n){case"input":Wl(t),Ey(t,r,!1);break;case"textarea":Wl(t),Iy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ws(t,!!r.multiple,s,!1):r.defaultValue!=null&&ws(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)ST(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=gi(ka.current),gi(Dn.current),Zl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nn]=e,(s=r.nodeValue!==n)&&(t=en,t!==null))switch(t.tag){case 3:Jl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nn]=e,e.stateNode=r}return Et(e),null;case 13:if(De(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&Jt!==null&&e.mode&1&&!(e.flags&128))BE(),Ls(),e.flags|=98560,s=!1;else if(s=Zl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Nn]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),s=!1}else gn!==null&&(Gf(gn),gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?Ze===0&&(Ze=3):wm())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return js(),jf(t,e),t===null&&Sa(e.stateNode.containerInfo),Et(e),null;case 10:return rm(e.type._context),Et(e),null;case 17:return Wt(e.type)&&Hu(),Et(e),null;case 19:if(De(Ve),s=e.memoizedState,s===null)return Et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Lo(s,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ec(t),o!==null){for(e.flags|=128,Lo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ae(Ve,Ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&We()>Us&&(e.flags|=128,r=!0,Lo(s,!1),e.lanes=4194304)}else{if(!r)if(t=ec(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Le)return Et(e),null}else 2*We()-s.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,r=!0,Lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=We(),e.sibling=null,n=Ve.current,Ae(Ve,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return vm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Yt&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function s1(t,e){switch(Zp(e),e.tag){case 1:return Wt(e.type)&&Hu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),De($t),De(At),lm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return am(e),null;case 13:if(De(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return De(Ve),null;case 4:return js(),null;case 10:return rm(e.type._context),null;case 22:case 23:return vm(),null;case 24:return null;default:return null}}var nu=!1,St=!1,o1=typeof WeakSet=="function"?WeakSet:Set,Q=null;function gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function Ff(t,e,n){try{n()}catch(r){ze(t,e,r)}}var dv=!1;function a1(t,e){if(Tf=$u,t=RE(),Xp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,f=0,p=t,g=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++f===r&&(u=o),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(If={focusedElem:t,selectionRange:n},$u=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var k=T.memoizedProps,N=T.memoizedState,x=e.stateNode,E=x.getSnapshotBeforeUpdate(e.elementType===e.type?k:pn(e.type,k),N);x.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(D){ze(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return T=dv,dv=!1,T}function ra(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ff(e,n,s)}i=i.next}while(i!==r)}}function Kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Uf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xT(t){var e=t.alternate;e!==null&&(t.alternate=null,xT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nn],delete e[Ca],delete e[Cf],delete e[$k],delete e[Wk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function CT(t){return t.tag===5||t.tag===3||t.tag===4}function fv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||CT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gu));else if(r!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}function Bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}var ct=null,mn=!1;function vr(t,e,n){for(n=n.child;n!==null;)AT(t,e,n),n=n.sibling}function AT(t,e,n){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(Uc,n)}catch{}switch(n.tag){case 5:St||gs(n,e);case 6:var r=ct,i=mn;ct=null,vr(t,e,n),ct=r,mn=i,ct!==null&&(mn?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(mn?(t=ct,n=n.stateNode,t.nodeType===8?Td(t.parentNode,n):t.nodeType===1&&Td(t,n),Ea(t)):Td(ct,n.stateNode));break;case 4:r=ct,i=mn,ct=n.stateNode.containerInfo,mn=!0,vr(t,e,n),ct=r,mn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ff(n,e,o),i=i.next}while(i!==r)}vr(t,e,n);break;case 1:if(!St&&(gs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ze(n,e,a)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,vr(t,e,n),St=r):vr(t,e,n);break;default:vr(t,e,n)}}function pv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new o1),e.forEach(function(r){var i=g1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,mn=!1;break e;case 3:ct=a.stateNode.containerInfo,mn=!0;break e;case 4:ct=a.stateNode.containerInfo,mn=!0;break e}a=a.return}if(ct===null)throw Error(z(160));AT(s,o,i),ct=null,mn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ze(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kT(e,t),e=e.sibling}function kT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fn(e,t),kn(t),r&4){try{ra(3,t,t.return),Kc(3,t)}catch(k){ze(t,t.return,k)}try{ra(5,t,t.return)}catch(k){ze(t,t.return,k)}}break;case 1:fn(e,t),kn(t),r&512&&n!==null&&gs(n,n.return);break;case 5:if(fn(e,t),kn(t),r&512&&n!==null&&gs(n,n.return),t.flags&32){var i=t.stateNode;try{_a(i,"")}catch(k){ze(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Yw(i,s),df(a,o);var c=df(a,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?tE(i,p):f==="dangerouslySetInnerHTML"?Zw(i,p):f==="children"?_a(i,p):jp(i,f,p,c)}switch(a){case"input":af(i,s);break;case"textarea":Xw(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?ws(i,!!s.multiple,y,!1):g!==!!s.multiple&&(s.defaultValue!=null?ws(i,!!s.multiple,s.defaultValue,!0):ws(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ca]=s}catch(k){ze(t,t.return,k)}}break;case 6:if(fn(e,t),kn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){ze(t,t.return,k)}}break;case 3:if(fn(e,t),kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ea(e.containerInfo)}catch(k){ze(t,t.return,k)}break;case 4:fn(e,t),kn(t);break;case 13:fn(e,t),kn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_m=We())),r&4&&pv(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(St=(c=St)||f,fn(e,t),St=c):fn(e,t),kn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(p=Q=f;Q!==null;){switch(g=Q,y=g.child,g.tag){case 0:case 11:case 14:case 15:ra(4,g,g.return);break;case 1:gs(g,g.return);var T=g.stateNode;if(typeof T.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(k){ze(r,n,k)}}break;case 5:gs(g,g.return);break;case 22:if(g.memoizedState!==null){gv(p);continue}}y!==null?(y.return=g,Q=y):gv(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=eE("display",o))}catch(k){ze(t,t.return,k)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){ze(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:fn(e,t),kn(t),r&4&&pv(t);break;case 21:break;default:fn(e,t),kn(t)}}function kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(CT(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_a(i,""),r.flags&=-33);var s=fv(t);Bf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=fv(t);zf(t,a,o);break;default:throw Error(z(161))}}catch(u){ze(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function l1(t,e,n){Q=t,RT(t)}function RT(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||nu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||St;a=nu;var c=St;if(nu=o,(St=u)&&!c)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?_v(i):u!==null?(u.return=o,Q=u):_v(i);for(;s!==null;)Q=s,RT(s),s=s.sibling;Q=i,nu=a,St=c}mv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):mv(t)}}function mv(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||Kc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ea(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}St||e.flags&512&&Uf(e)}catch(g){ze(e,e.return,g)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function gv(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function _v(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kc(4,e)}catch(u){ze(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ze(e,i,u)}}var s=e.return;try{Uf(e)}catch(u){ze(e,s,u)}break;case 5:var o=e.return;try{Uf(e)}catch(u){ze(e,o,u)}}}catch(u){ze(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var u1=Math.ceil,rc=fr.ReactCurrentDispatcher,mm=fr.ReactCurrentOwner,un=fr.ReactCurrentBatchConfig,pe=0,at=null,Ke=null,ft=0,Yt=0,_s=ei(0),Ze=0,ba=null,ki=0,Qc=0,gm=0,ia=null,Ft=null,_m=0,Us=1/0,$n=null,ic=!1,$f=null,Vr=null,ru=!1,Pr=null,sc=0,sa=0,Wf=null,xu=-1,Cu=0;function Lt(){return pe&6?We():xu!==-1?xu:xu=We()}function jr(t){return t.mode&1?pe&2&&ft!==0?ft&-ft:Gk.transition!==null?(Cu===0&&(Cu=fE()),Cu):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:wE(t.type)),t):1}function En(t,e,n,r){if(50<sa)throw sa=0,Wf=null,Error(z(185));tl(t,n,r),(!(pe&2)||t!==at)&&(t===at&&(!(pe&2)&&(Qc|=n),Ze===4&&Sr(t,ft)),qt(t,r),n===1&&pe===0&&!(e.mode&1)&&(Us=We()+500,qc&&ti()))}function qt(t,e){var n=t.callbackNode;GA(t,e);var r=Bu(t,t===at?ft:0);if(r===0)n!==null&&Cy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cy(n),e===1)t.tag===0?qk(yv.bind(null,t)):FE(yv.bind(null,t)),zk(function(){!(pe&6)&&ti()}),n=null;else{switch(pE(r)){case 1:n=$p;break;case 4:n=hE;break;case 16:n=zu;break;case 536870912:n=dE;break;default:n=zu}n=VT(n,PT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function PT(t,e){if(xu=-1,Cu=0,pe&6)throw Error(z(327));var n=t.callbackNode;if(xs()&&t.callbackNode!==n)return null;var r=Bu(t,t===at?ft:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=oc(t,r);else{e=r;var i=pe;pe|=2;var s=bT();(at!==t||ft!==e)&&($n=null,Us=We()+500,Ei(t,e));do try{d1();break}catch(a){NT(t,a)}while(!0);nm(),rc.current=s,pe=i,Ke!==null?e=0:(at=null,ft=0,e=Ze)}if(e!==0){if(e===2&&(i=_f(t),i!==0&&(r=i,e=qf(t,i))),e===1)throw n=ba,Ei(t,0),Sr(t,r),qt(t,We()),n;if(e===6)Sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!c1(i)&&(e=oc(t,r),e===2&&(s=_f(t),s!==0&&(r=s,e=qf(t,s))),e===1))throw n=ba,Ei(t,0),Sr(t,r),qt(t,We()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:hi(t,Ft,$n);break;case 3:if(Sr(t,r),(r&130023424)===r&&(e=_m+500-We(),10<e)){if(Bu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xf(hi.bind(null,t,Ft,$n),e);break}hi(t,Ft,$n);break;case 4:if(Sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u1(r/1960))-r,10<r){t.timeoutHandle=xf(hi.bind(null,t,Ft,$n),r);break}hi(t,Ft,$n);break;case 5:hi(t,Ft,$n);break;default:throw Error(z(329))}}}return qt(t,We()),t.callbackNode===n?PT.bind(null,t):null}function qf(t,e){var n=ia;return t.current.memoizedState.isDehydrated&&(Ei(t,e).flags|=256),t=oc(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&Gf(e)),t}function Gf(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function c1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!xn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~gm,e&=~Qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function yv(t){if(pe&6)throw Error(z(327));xs();var e=Bu(t,0);if(!(e&1))return qt(t,We()),null;var n=oc(t,e);if(t.tag!==0&&n===2){var r=_f(t);r!==0&&(e=r,n=qf(t,r))}if(n===1)throw n=ba,Ei(t,0),Sr(t,e),qt(t,We()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hi(t,Ft,$n),qt(t,We()),null}function ym(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(Us=We()+500,qc&&ti())}}function Ri(t){Pr!==null&&Pr.tag===0&&!(pe&6)&&xs();var e=pe;pe|=1;var n=un.transition,r=Ee;try{if(un.transition=null,Ee=1,t)return t()}finally{Ee=r,un.transition=n,pe=e,!(pe&6)&&ti()}}function vm(){Yt=_s.current,De(_s)}function Ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Uk(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(Zp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hu();break;case 3:js(),De($t),De(At),lm();break;case 5:am(r);break;case 4:js();break;case 13:De(Ve);break;case 19:De(Ve);break;case 10:rm(r.type._context);break;case 22:case 23:vm()}n=n.return}if(at=t,Ke=t=Fr(t.current,null),ft=Yt=e,Ze=0,ba=null,gm=Qc=ki=0,Ft=ia=null,mi!==null){for(e=0;e<mi.length;e++)if(n=mi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}mi=null}return t}function NT(t,e){do{var n=Ke;try{if(nm(),Tu.current=nc,tc){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tc=!1}if(Ai=0,rt=Xe=je=null,na=!1,Ra=0,mm.current=null,n===null||n.return===null){Ze=1,ba=e,Ke=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=ft,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=sv(o);if(y!==null){y.flags&=-257,ov(y,o,a,s,e),y.mode&1&&iv(s,c,e),e=y,u=c;var T=e.updateQueue;if(T===null){var k=new Set;k.add(u),e.updateQueue=k}else T.add(u);break e}else{if(!(e&1)){iv(s,c,e),wm();break e}u=Error(z(426))}}else if(Le&&a.mode&1){var N=sv(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),ov(N,o,a,s,e),em(Fs(u,a));break e}}s=u=Fs(u,a),Ze!==4&&(Ze=2),ia===null?ia=[s]:ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=pT(s,u,e);Jy(s,x);break e;case 1:a=u;var E=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Vr===null||!Vr.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=mT(s,a,e);Jy(s,D);break e}}s=s.return}while(s!==null)}OT(n)}catch(O){e=O,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function bT(){var t=rc.current;return rc.current=nc,t===null?nc:t}function wm(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),at===null||!(ki&268435455)&&!(Qc&268435455)||Sr(at,ft)}function oc(t,e){var n=pe;pe|=2;var r=bT();(at!==t||ft!==e)&&($n=null,Ei(t,e));do try{h1();break}catch(i){NT(t,i)}while(!0);if(nm(),pe=n,rc.current=r,Ke!==null)throw Error(z(261));return at=null,ft=0,Ze}function h1(){for(;Ke!==null;)DT(Ke)}function d1(){for(;Ke!==null&&!VA();)DT(Ke)}function DT(t){var e=LT(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,e===null?OT(t):Ke=e,mm.current=null}function OT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=s1(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,Ke=null;return}}else if(n=i1(n,e,Yt),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);Ze===0&&(Ze=5)}function hi(t,e,n){var r=Ee,i=un.transition;try{un.transition=null,Ee=1,f1(t,e,n,r)}finally{un.transition=i,Ee=r}return null}function f1(t,e,n,r){do xs();while(Pr!==null);if(pe&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(HA(t,s),t===at&&(Ke=at=null,ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ru||(ru=!0,VT(zu,function(){return xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=un.transition,un.transition=null;var o=Ee;Ee=1;var a=pe;pe|=4,mm.current=null,a1(t,n),kT(n,t),Dk(If),$u=!!Tf,If=Tf=null,t.current=n,l1(n),jA(),pe=a,Ee=o,un.transition=s}else t.current=n;if(ru&&(ru=!1,Pr=t,sc=i),s=t.pendingLanes,s===0&&(Vr=null),zA(n.stateNode),qt(t,We()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ic)throw ic=!1,t=$f,$f=null,t;return sc&1&&t.tag!==0&&xs(),s=t.pendingLanes,s&1?t===Wf?sa++:(sa=0,Wf=t):sa=0,ti(),null}function xs(){if(Pr!==null){var t=pE(sc),e=un.transition,n=Ee;try{if(un.transition=null,Ee=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,sc=0,pe&6)throw Error(z(331));var i=pe;for(pe|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Q=c;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:ra(8,f,s)}var p=f.child;if(p!==null)p.return=f,Q=p;else for(;Q!==null;){f=Q;var g=f.sibling,y=f.return;if(xT(f),f===c){Q=null;break}if(g!==null){g.return=y,Q=g;break}Q=y}}}var T=s.alternate;if(T!==null){var k=T.child;if(k!==null){T.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ra(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,Q=x;break e}Q=s.return}}var E=t.current;for(Q=E;Q!==null;){o=Q;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,Q=C;else e:for(o=E;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kc(9,a)}}catch(O){ze(a,a.return,O)}if(a===o){Q=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,Q=D;break e}Q=a.return}}if(pe=i,ti(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(Uc,t)}catch{}r=!0}return r}finally{Ee=n,un.transition=e}}return!1}function vv(t,e,n){e=Fs(n,e),e=pT(t,e,1),t=Lr(t,e,1),e=Lt(),t!==null&&(tl(t,1,e),qt(t,e))}function ze(t,e,n){if(t.tag===3)vv(t,t,n);else for(;e!==null;){if(e.tag===3){vv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vr===null||!Vr.has(r))){t=Fs(n,t),t=mT(e,t,1),e=Lr(e,t,1),t=Lt(),e!==null&&(tl(e,1,t),qt(e,t));break}}e=e.return}}function p1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Lt(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(ft&n)===n&&(Ze===4||Ze===3&&(ft&130023424)===ft&&500>We()-_m?Ei(t,0):gm|=n),qt(t,e)}function MT(t,e){e===0&&(t.mode&1?(e=Hl,Hl<<=1,!(Hl&130023424)&&(Hl=4194304)):e=1);var n=Lt();t=ir(t,e),t!==null&&(tl(t,e,n),qt(t,n))}function m1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),MT(t,n)}function g1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),MT(t,n)}var LT;LT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)Ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ut=!1,r1(t,e,n);Ut=!!(t.flags&131072)}else Ut=!1,Le&&e.flags&1048576&&UE(e,Yu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Su(t,e),t=e.pendingProps;var i=Ms(e,At.current);Ss(e,n),i=cm(null,e,r,t,i,n);var s=hm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(r)?(s=!0,Ku(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sm(e),i.updater=Hc,e.stateNode=i,i._reactInternals=e,bf(e,r,t,n),e=Mf(null,e,r,!0,s,n)):(e.tag=0,Le&&s&&Jp(e),Nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Su(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=y1(r),t=pn(r,t),i){case 0:e=Of(null,e,r,t,n);break e;case 1:e=uv(null,e,r,t,n);break e;case 11:e=av(null,e,r,t,n);break e;case 14:e=lv(null,e,r,pn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),Of(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),uv(t,e,r,i,n);case 3:e:{if(vT(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,GE(t,e),Zu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Fs(Error(z(423)),e),e=cv(t,e,r,n,i);break e}else if(r!==i){i=Fs(Error(z(424)),e),e=cv(t,e,r,n,i);break e}else for(Jt=Mr(e.stateNode.containerInfo.firstChild),en=e,Le=!0,gn=null,n=WE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),r===i){e=sr(t,e,n);break e}Nt(t,e,r,n)}e=e.child}return e;case 5:return HE(e),t===null&&Rf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sf(r,i)?o=null:s!==null&&Sf(r,s)&&(e.flags|=32),yT(t,e),Nt(t,e,o,n),e.child;case 6:return t===null&&Rf(e),null;case 13:return wT(t,e,n);case 4:return om(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vs(e,null,r,n):Nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),av(t,e,r,i,n);case 7:return Nt(t,e,e.pendingProps,n),e.child;case 8:return Nt(t,e,e.pendingProps.children,n),e.child;case 12:return Nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ae(Xu,r._currentValue),r._currentValue=o,s!==null)if(xn(s.value,o)){if(s.children===i.children&&!$t.current){e=sr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=er(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Pf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ss(e,n),i=cn(i),r=r(i),e.flags|=1,Nt(t,e,r,n),e.child;case 14:return r=e.type,i=pn(r,e.pendingProps),i=pn(r.type,i),lv(t,e,r,i,n);case 15:return gT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),Su(t,e),e.tag=1,Wt(r)?(t=!0,Ku(e)):t=!1,Ss(e,n),fT(e,r,i),bf(e,r,i,n),Mf(null,e,r,!0,t,n);case 19:return ET(t,e,n);case 22:return _T(t,e,n)}throw Error(z(156,e.tag))};function VT(t,e){return cE(t,e)}function _1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(t,e,n,r){return new _1(t,e,n,r)}function Em(t){return t=t.prototype,!(!t||!t.isReactComponent)}function y1(t){if(typeof t=="function")return Em(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Up)return 11;if(t===zp)return 14}return 2}function Fr(t,e){var n=t.alternate;return n===null?(n=ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Au(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Em(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case as:return Ti(n.children,i,s,e);case Fp:o=8,i|=8;break;case tf:return t=ln(12,n,e,i|2),t.elementType=tf,t.lanes=s,t;case nf:return t=ln(13,n,e,i),t.elementType=nf,t.lanes=s,t;case rf:return t=ln(19,n,e,i),t.elementType=rf,t.lanes=s,t;case Hw:return Yc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qw:o=10;break e;case Gw:o=9;break e;case Up:o=11;break e;case zp:o=14;break e;case Er:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=ln(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ti(t,e,n,r){return t=ln(7,t,r,e),t.lanes=n,t}function Yc(t,e,n,r){return t=ln(22,t,r,e),t.elementType=Hw,t.lanes=n,t.stateNode={isHidden:!1},t}function Pd(t,e,n){return t=ln(6,t,null,e),t.lanes=n,t}function Nd(t,e,n){return e=ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function v1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hd(0),this.expirationTimes=hd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tm(t,e,n,r,i,s,o,a,u){return t=new v1(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sm(s),t}function w1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jT(t){if(!t)return Gr;t=t._reactInternals;e:{if(Bi(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Wt(n))return jE(t,n,e)}return e}function FT(t,e,n,r,i,s,o,a,u){return t=Tm(n,r,!0,t,i,s,o,a,u),t.context=jT(null),n=t.current,r=Lt(),i=jr(n),s=er(r,i),s.callback=e??null,Lr(n,s,i),t.current.lanes=i,tl(t,i,r),qt(t,r),t}function Xc(t,e,n,r){var i=e.current,s=Lt(),o=jr(i);return n=jT(n),e.context===null?e.context=n:e.pendingContext=n,e=er(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Lr(i,e,o),t!==null&&(En(t,i,o,s),Eu(t,i,o)),o}function ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Im(t,e){wv(t,e),(t=t.alternate)&&wv(t,e)}function E1(){return null}var UT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sm(t){this._internalRoot=t}Jc.prototype.render=Sm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Xc(t,e,null,null)};Jc.prototype.unmount=Sm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ri(function(){Xc(null,t,null,null)}),e[rr]=null}};function Jc(t){this._internalRoot=t}Jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=_E();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&vE(t)}};function xm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ev(){}function T1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ac(o);s.call(c)}}var o=FT(e,r,t,0,null,!1,!1,"",Ev);return t._reactRootContainer=o,t[rr]=o.current,Sa(t.nodeType===8?t.parentNode:t),Ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ac(u);a.call(c)}}var u=Tm(t,0,!1,null,null,!1,!1,"",Ev);return t._reactRootContainer=u,t[rr]=u.current,Sa(t.nodeType===8?t.parentNode:t),Ri(function(){Xc(e,u,n,r)}),u}function eh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ac(o);a.call(u)}}Xc(e,o,t,i)}else o=T1(n,e,t,i,r);return ac(o)}mE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Go(e.pendingLanes);n!==0&&(Wp(e,n|1),qt(e,We()),!(pe&6)&&(Us=We()+500,ti()))}break;case 13:Ri(function(){var r=ir(t,1);if(r!==null){var i=Lt();En(r,t,1,i)}}),Im(t,1)}};qp=function(t){if(t.tag===13){var e=ir(t,134217728);if(e!==null){var n=Lt();En(e,t,134217728,n)}Im(t,134217728)}};gE=function(t){if(t.tag===13){var e=jr(t),n=ir(t,e);if(n!==null){var r=Lt();En(n,t,e,r)}Im(t,e)}};_E=function(){return Ee};yE=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};pf=function(t,e,n){switch(e){case"input":if(af(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wc(r);if(!i)throw Error(z(90));Qw(r),af(r,i)}}}break;case"textarea":Xw(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};iE=ym;sE=Ri;var I1={usingClientEntryPoint:!1,Events:[rl,hs,Wc,nE,rE,ym]},Vo={findFiberByHostInstance:pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S1={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lE(t),t===null?null:t.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||E1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{Uc=iu.inject(S1),bn=iu}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I1;rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xm(e))throw Error(z(200));return w1(t,e,null,n)};rn.createRoot=function(t,e){if(!xm(t))throw Error(z(299));var n=!1,r="",i=UT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tm(t,1,!1,null,null,n,!1,r,i),t[rr]=e.current,Sa(t.nodeType===8?t.parentNode:t),new Sm(e)};rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=lE(e),t=t===null?null:t.stateNode,t};rn.flushSync=function(t){return Ri(t)};rn.hydrate=function(t,e,n){if(!Zc(e))throw Error(z(200));return eh(null,t,e,!0,n)};rn.hydrateRoot=function(t,e,n){if(!xm(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=UT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=FT(e,null,t,1,n??null,i,!1,s,o),t[rr]=e.current,Sa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jc(e)};rn.render=function(t,e,n){if(!Zc(e))throw Error(z(200));return eh(null,t,e,!1,n)};rn.unmountComponentAtNode=function(t){if(!Zc(t))throw Error(z(40));return t._reactRootContainer?(Ri(function(){eh(null,null,t,!1,function(){t._reactRootContainer=null,t[rr]=null})}),!0):!1};rn.unstable_batchedUpdates=ym;rn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zc(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return eh(t,e,n,!1,r)};rn.version="18.3.1-next-f1338f8080-20240426";function zT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zT)}catch(t){console.error(t)}}zT(),zw.exports=rn;var x1=zw.exports,BT,Tv=x1;BT=Tv.createRoot,Tv.hydrateRoot;var Iv={};/**
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
 */const $T={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const $=function(t,e){if(!t)throw ro(e)},ro=function(t){return new Error("Firebase Database ("+$T.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const WT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},C1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Cm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,y=c&63;u||(y=64,o||(g=64)),r.push(n[f],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(WT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):C1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new A1;const g=s<<2|a>>4;if(r.push(g),c!==64){const y=a<<4&240|c>>2;if(r.push(y),p!==64){const T=c<<6&192|p;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class A1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qT=function(t){const e=WT(t);return Cm.encodeByteArray(e,!0)},lc=function(t){return qT(t).replace(/\./g,"")},uc=function(t){try{return Cm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function k1(t){return GT(void 0,t)}function GT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!R1(n)||(t[n]=GT(t[n],e[n]));return t}function R1(t){return t!=="__proto__"}/**
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
 */function P1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const N1=()=>P1().__FIREBASE_DEFAULTS__,b1=()=>{if(typeof process>"u"||typeof Iv>"u")return;const t=Iv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},D1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uc(t[1]);return e&&JSON.parse(e)},th=()=>{try{return N1()||b1()||D1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},HT=t=>{var e,n;return(n=(e=th())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},KT=t=>{const e=HT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},QT=()=>{var t;return(t=th())===null||t===void 0?void 0:t.config},YT=t=>{var e;return(e=th())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class nh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function XT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[lc(JSON.stringify(n)),lc(JSON.stringify(o)),""].join(".")}/**
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
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Am(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function O1(){var t;const e=(t=th())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function M1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function L1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function JT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function V1(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function j1(){return $T.NODE_ADMIN===!0}function F1(){return!O1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function U1(){try{return typeof indexedDB=="object"}catch{return!1}}function z1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const B1="FirebaseError";class pr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=B1,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sl.prototype.create)}}class sl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pr(i,a,r)}}function $1(t,e){return t.replace(W1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const W1=/\{\$([^}]+)}/g;/**
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
 */function Da(t){return JSON.parse(t)}function ot(t){return JSON.stringify(t)}/**
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
 */const ZT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Da(uc(s[0])||""),n=Da(uc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},q1=function(t){const e=ZT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},G1=function(t){const e=ZT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function mr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Oa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Sv(s)&&Sv(o)){if(!Oa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sv(t){return t!==null&&typeof t=="object"}/**
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
 */function io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class H1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,f;for(let p=0;p<80;p++){p<40?p<20?(c=a^s&(o^a),f=1518500249):(c=s^o^a,f=1859775393):p<60?(c=s&o|a&(s|o),f=2400959708):(c=s^o^a,f=3395469782);const g=(i<<5|i>>>27)+c+u+f+r[p]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function K1(t,e){const n=new Q1(t,e);return n.subscribe.bind(n)}class Q1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Y1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bd),i.error===void 0&&(i.error=bd),i.complete===void 0&&(i.complete=bd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bd(){}function km(t,e){return`${t} failed: ${e} argument `}/**
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
 */const X1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class Hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const di="[DEFAULT]";/**
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
 */class J1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new nh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eR(e))try{this.getOrInitializeService({instanceIdentifier:di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=di){return this.instances.has(e)}getOptions(e=di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Z1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=di){return this.component?this.component.multipleInstances?e:di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Z1(t){return t===di?void 0:t}function eR(t){return t.instantiationMode==="EAGER"}/**
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
 */class tR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new J1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const nR={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},rR=ce.INFO,iR={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},sR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ih{constructor(e){this.name=e,this._logLevel=rR,this._logHandler=sR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const oR=(t,e)=>e.some(n=>t instanceof n);let xv,Cv;function aR(){return xv||(xv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lR(){return Cv||(Cv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eI=new WeakMap,Kf=new WeakMap,tI=new WeakMap,Dd=new WeakMap,Rm=new WeakMap;function uR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eI.set(n,t)}).catch(()=>{}),Rm.set(e,t),e}function cR(t){if(Kf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Kf.set(t,e)}let Qf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hR(t){Qf=t(Qf)}function dR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Od(this),e,...n);return tI.set(r,e.sort?e.sort():[e]),Ur(r)}:lR().includes(t)?function(...e){return t.apply(Od(this),e),Ur(eI.get(this))}:function(...e){return Ur(t.apply(Od(this),e))}}function fR(t){return typeof t=="function"?dR(t):(t instanceof IDBTransaction&&cR(t),oR(t,aR())?new Proxy(t,Qf):t)}function Ur(t){if(t instanceof IDBRequest)return uR(t);if(Dd.has(t))return Dd.get(t);const e=fR(t);return e!==t&&(Dd.set(t,e),Rm.set(e,t)),e}const Od=t=>Rm.get(t);function pR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ur(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ur(o.result),u.oldVersion,u.newVersion,Ur(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const mR=["get","getKey","getAll","getAllKeys","count"],gR=["put","add","delete","clear"],Md=new Map;function Av(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Md.get(e))return Md.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mR.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Md.set(e,s),s}hR(t=>({...t,get:(e,n,r)=>Av(e,n)||t.get(e,n,r),has:(e,n)=>!!Av(e,n)||t.has(e,n)}));/**
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
 */class _R{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yf="@firebase/app",kv="0.10.13";/**
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
 */const or=new ih("@firebase/app"),vR="@firebase/app-compat",wR="@firebase/analytics-compat",ER="@firebase/analytics",TR="@firebase/app-check-compat",IR="@firebase/app-check",SR="@firebase/auth",xR="@firebase/auth-compat",CR="@firebase/database",AR="@firebase/data-connect",kR="@firebase/database-compat",RR="@firebase/functions",PR="@firebase/functions-compat",NR="@firebase/installations",bR="@firebase/installations-compat",DR="@firebase/messaging",OR="@firebase/messaging-compat",MR="@firebase/performance",LR="@firebase/performance-compat",VR="@firebase/remote-config",jR="@firebase/remote-config-compat",FR="@firebase/storage",UR="@firebase/storage-compat",zR="@firebase/firestore",BR="@firebase/vertexai-preview",$R="@firebase/firestore-compat",WR="firebase",qR="10.14.1";/**
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
 */const Xf="[DEFAULT]",GR={[Yf]:"fire-core",[vR]:"fire-core-compat",[ER]:"fire-analytics",[wR]:"fire-analytics-compat",[IR]:"fire-app-check",[TR]:"fire-app-check-compat",[SR]:"fire-auth",[xR]:"fire-auth-compat",[CR]:"fire-rtdb",[AR]:"fire-data-connect",[kR]:"fire-rtdb-compat",[RR]:"fire-fn",[PR]:"fire-fn-compat",[NR]:"fire-iid",[bR]:"fire-iid-compat",[DR]:"fire-fcm",[OR]:"fire-fcm-compat",[MR]:"fire-perf",[LR]:"fire-perf-compat",[VR]:"fire-rc",[jR]:"fire-rc-compat",[FR]:"fire-gcs",[UR]:"fire-gcs-compat",[zR]:"fire-fst",[$R]:"fire-fst-compat",[BR]:"fire-vertex","fire-js":"fire-js",[WR]:"fire-js-all"};/**
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
 */const Ma=new Map,HR=new Map,Jf=new Map;function Rv(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pi(t){const e=t.name;if(Jf.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Jf.set(e,t);for(const n of Ma.values())Rv(n,t);for(const n of HR.values())Rv(n,t);return!0}function sh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qn(t){return t.settings!==void 0}/**
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
 */const KR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zr=new sl("app","Firebase",KR);/**
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
 */class QR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}/**
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
 */const $i=qR;function nI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw zr.create("bad-app-name",{appName:String(i)});if(n||(n=QT()),!n)throw zr.create("no-options");const s=Ma.get(i);if(s){if(Oa(n,s.options)&&Oa(r,s.config))return s;throw zr.create("duplicate-app",{appName:i})}const o=new tR(i);for(const u of Jf.values())o.addComponent(u);const a=new QR(n,r,o);return Ma.set(i,a),a}function Pm(t=Xf){const e=Ma.get(t);if(!e&&t===Xf&&QT())return nI();if(!e)throw zr.create("no-app",{appName:t});return e}function YR(){return Array.from(Ma.values())}function On(t,e,n){var r;let i=(r=GR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(a.join(" "));return}Pi(new Hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const XR="firebase-heartbeat-database",JR=1,La="firebase-heartbeat-store";let Ld=null;function rI(){return Ld||(Ld=pR(XR,JR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(La)}catch(n){console.warn(n)}}}}).catch(t=>{throw zr.create("idb-open",{originalErrorMessage:t.message})})),Ld}async function ZR(t){try{const n=(await rI()).transaction(La),r=await n.objectStore(La).get(iI(t));return await n.done,r}catch(e){if(e instanceof pr)or.warn(e.message);else{const n=zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(n.message)}}}async function Pv(t,e){try{const r=(await rI()).transaction(La,"readwrite");await r.objectStore(La).put(e,iI(t)),await r.done}catch(n){if(n instanceof pr)or.warn(n.message);else{const r=zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function iI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eP=1024,tP=30*24*60*60*1e3;class nP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=tP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nv(),{heartbeatsToSend:r,unsentEntries:i}=rP(this._heartbeatsCache.heartbeats),s=lc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return or.warn(n),""}}}function Nv(){return new Date().toISOString().substring(0,10)}function rP(t,e=eP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return U1()?z1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bv(t){return lc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sP(t){Pi(new Hr("platform-logger",e=>new _R(e),"PRIVATE")),Pi(new Hr("heartbeat",e=>new nP(e),"PRIVATE")),On(Yf,kv,t),On(Yf,kv,"esm2017"),On("fire-js","")}sP("");function Nm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function sI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oP=sI,oI=new sl("auth","Firebase",sI());/**
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
 */const hc=new ih("@firebase/auth");function aP(t,...e){hc.logLevel<=ce.WARN&&hc.warn(`Auth (${$i}): ${t}`,...e)}function ku(t,...e){hc.logLevel<=ce.ERROR&&hc.error(`Auth (${$i}): ${t}`,...e)}/**
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
 */function Vn(t,...e){throw Dm(t,...e)}function Tn(t,...e){return Dm(t,...e)}function bm(t,e,n){const r=Object.assign(Object.assign({},oP()),{[e]:n});return new sl("auth","Firebase",r).create(e,{appName:t.name})}function Ii(t){return bm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Vn(t,"argument-error"),bm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return oI.create(t,...e)}function ie(t,e,...n){if(!t)throw Dm(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ku(e),new Error(e)}function ar(t,e){t||Yn(e)}/**
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
 */function Zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uP(){return Dv()==="http:"||Dv()==="https:"}function Dv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uP()||L1()||"connection"in navigator)?navigator.onLine:!0}function hP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ol{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=Am()||JT()}get(){return cP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Om(t,e){ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class aI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fP=new ol(3e4,6e4);function Mm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function so(t,e,n,r,i={}){return lI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=io(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return M1()||(c.referrerPolicy="no-referrer"),aI.fetch()(uI(t,t.config.apiHost,n,a),c)})}async function lI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dP),e);try{const i=new mP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw su(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw su(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw su(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw su(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bm(t,f,c);Vn(t,f)}}catch(i){if(i instanceof pr)throw i;Vn(t,"network-request-failed",{message:String(i)})}}async function pP(t,e,n,r,i={}){const s=await so(t,e,n,r,i);return"mfaPendingCredential"in s&&Vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function uI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Om(t.config,i):`${t.config.apiScheme}://${i}`}class mP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),fP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function su(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function gP(t,e){return so(t,"POST","/v1/accounts:delete",e)}async function cI(t,e){return so(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function oa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _P(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=Lm(r);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:oa(Vd(i.auth_time)),issuedAtTime:oa(Vd(i.iat)),expirationTime:oa(Vd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vd(t){return Number(t)*1e3}function Lm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ku("JWT malformed, contained fewer than 3 sections"),null;try{const i=uc(n);return i?JSON.parse(i):(ku("Failed to decode base64 JWT payload"),null)}catch(i){return ku("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ov(t){const e=Lm(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Va(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pr&&yP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ep{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oa(this.lastLoginAt),this.creationTime=oa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Va(t,cI(n,{idToken:r}));ie(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?hI(s.providerUserInfo):[],a=EP(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ep(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function wP(t){const e=Me(t);await dc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function hI(t){return t.map(e=>{var{providerId:n}=e,r=Nm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function TP(t,e){const n=await lI(t,{},async()=>{const r=io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=uI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",aI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IP(t,e){return so(t,"POST","/v2/accounts:revokeToken",Mm(t,e))}/**
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
 */class Cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ov(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Ov(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await TP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Cs;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ie(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cs,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
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
 */function wr(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ep(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Va(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _P(this,e)}reload(){return wP(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qn(this.auth.app))return Promise.reject(Ii(this.auth));const e=await this.getIdToken();return await Va(this,gP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:C,emailVerified:D,isAnonymous:O,providerData:V,stsTokenManager:I}=n;ie(C&&I,e,"internal-error");const _=Cs.fromJSON(this.name,I);ie(typeof C=="string",e,"internal-error"),wr(p,e.name),wr(g,e.name),ie(typeof D=="boolean",e,"internal-error"),ie(typeof O=="boolean",e,"internal-error"),wr(y,e.name),wr(T,e.name),wr(k,e.name),wr(N,e.name),wr(x,e.name),wr(E,e.name);const w=new Xn({uid:C,auth:e,email:g,emailVerified:D,displayName:p,isAnonymous:O,photoURL:T,phoneNumber:y,tenantId:k,stsTokenManager:_,createdAt:x,lastLoginAt:E});return V&&Array.isArray(V)&&(w.providerData=V.map(S=>Object.assign({},S))),N&&(w._redirectEventId=N),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Cs;i.updateFromServerResponse(n);const s=new Xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await dc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ie(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?hI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Cs;a.updateFromIdToken(r);const u=new Xn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ep(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Mv=new Map;function Jn(t){ar(t instanceof Function,"Expected a class definition");let e=Mv.get(t);return e?(ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mv.set(t,e),e)}/**
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
 */class dI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dI.type="NONE";const Lv=dI;/**
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
 */function Ru(t,e,n){return`firebase:${t}:${e}:${n}`}class As{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ru(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ru("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new As(Jn(Lv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Jn(Lv);const o=Ru(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){const p=Xn._fromJSON(e,f);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new As(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new As(s,e,r))}}/**
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
 */function Vv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yI(e))return"Blackberry";if(vI(e))return"Webos";if(pI(e))return"Safari";if((e.includes("chrome/")||mI(e))&&!e.includes("edge/"))return"Chrome";if(_I(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fI(t=kt()){return/firefox\//i.test(t)}function pI(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mI(t=kt()){return/crios\//i.test(t)}function gI(t=kt()){return/iemobile/i.test(t)}function _I(t=kt()){return/android/i.test(t)}function yI(t=kt()){return/blackberry/i.test(t)}function vI(t=kt()){return/webos/i.test(t)}function Vm(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SP(t=kt()){var e;return Vm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xP(){return V1()&&document.documentMode===10}function wI(t=kt()){return Vm(t)||_I(t)||vI(t)||yI(t)||/windows phone/i.test(t)||gI(t)}/**
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
 */function EI(t,e=[]){let n;switch(t){case"Browser":n=Vv(kt());break;case"Worker":n=`${Vv(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$i}/${r}`}/**
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
 */class CP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function AP(t,e={}){return so(t,"GET","/v2/passwordPolicy",Mm(t,e))}/**
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
 */const kP=6;class RP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class PP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jv(this),this.idTokenSubscription=new jv(this),this.beforeStateQueue=new CP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await cI(this,{idToken:e}),r=await Xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qn(this.app))return Promise.reject(Ii(this));const n=e?Me(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qn(this.app)?Promise.reject(Ii(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qn(this.app)?Promise.reject(Ii(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AP(this),n=new RP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new sl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await IP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=EI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function oh(t){return Me(t)}class jv{constructor(e){this.auth=e,this.observer=null,this.addObserver=K1(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let jm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NP(t){jm=t}function bP(t){return jm.loadJS(t)}function DP(){return jm.gapiScript}function OP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function MP(t,e){const n=sh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Oa(s,e??{}))return i;Vn(i,"already-initialized")}return n.initialize({options:e})}function LP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function VP(t,e,n){const r=oh(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=TI(e),{host:o,port:a}=jP(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),FP()}function TI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jP(t){const e=TI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Fv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Fv(o)}}}function Fv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class II{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}/**
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
 */async function ks(t,e){return pP(t,"POST","/v1/accounts:signInWithIdp",Mm(t,e))}/**
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
 */const UP="http://localhost";class Ni extends II{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ks(e,n)}buildRequest(){const e={requestUri:UP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=io(n)}return e}}/**
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
 */class Fm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class al extends Fm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xr extends al{constructor(){super("facebook.com")}static credential(e){return Ni._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
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
 */class Gn extends al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ni._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
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
 */class Cr extends al{constructor(){super("github.com")}static credential(e){return Ni._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
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
 */class Ar extends al{constructor(){super("twitter.com")}static credential(e,n){return Ni._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ar.credential(n,r)}catch{return null}}}Ar.TWITTER_SIGN_IN_METHOD="twitter.com";Ar.PROVIDER_ID="twitter.com";/**
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
 */class Bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xn._fromIdTokenResponse(e,r,i),o=Uv(r);return new Bs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Uv(r);return new Bs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Uv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fc extends pr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fc(e,n,r,i)}}function SI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fc._fromErrorAndOperation(t,s,e,r):s})}async function zP(t,e,n=!1){const r=await Va(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bs._forOperation(t,"link",r)}/**
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
 */async function BP(t,e,n=!1){const{auth:r}=t;if(Qn(r.app))return Promise.reject(Ii(r));const i="reauthenticate";try{const s=await Va(t,SI(r,i,e,t),n);ie(s.idToken,r,"internal-error");const o=Lm(s.idToken);ie(o,r,"internal-error");const{sub:a}=o;return ie(t.uid===a,r,"user-mismatch"),Bs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),s}}/**
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
 */async function $P(t,e,n=!1){if(Qn(t.app))return Promise.reject(Ii(t));const r="signIn",i=await SI(t,r,e),s=await Bs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function WP(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function qP(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function GP(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function HP(t){return Me(t).signOut()}const pc="__sak";/**
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
 */class xI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pc,"1"),this.storage.removeItem(pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const KP=1e3,QP=10;class CI extends xI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}CI.type="LOCAL";const YP=CI;/**
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
 */class AI extends xI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}AI.type="SESSION";const kI=AI;/**
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
 */function XP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ah{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ah(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await XP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ah.receivers=[];/**
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
 */function Um(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class JP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Um("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Mn(){return window}function ZP(t){Mn().location.href=t}/**
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
 */function RI(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function eN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nN(){return RI()?self:null}/**
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
 */const PI="firebaseLocalStorageDb",rN=1,mc="firebaseLocalStorage",NI="fbase_key";class ll{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lh(t,e){return t.transaction([mc],e?"readwrite":"readonly").objectStore(mc)}function iN(){const t=indexedDB.deleteDatabase(PI);return new ll(t).toPromise()}function tp(){const t=indexedDB.open(PI,rN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mc,{keyPath:NI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mc)?e(r):(r.close(),await iN(),e(await tp()))})})}async function zv(t,e,n){const r=lh(t,!0).put({[NI]:e,value:n});return new ll(r).toPromise()}async function sN(t,e){const n=lh(t,!1).get(e),r=await new ll(n).toPromise();return r===void 0?null:r.value}function Bv(t,e){const n=lh(t,!0).delete(e);return new ll(n).toPromise()}const oN=800,aN=3;class bI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return RI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ah._getInstance(nN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eN(),!this.activeServiceWorker)return;this.sender=new JP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tp();return await zv(e,pc,"1"),await Bv(e,pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=lh(i,!1).getAll();return new ll(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bI.type="LOCAL";const lN=bI;new ol(3e4,6e4);/**
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
 */function DI(t,e){return e?Jn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zm extends II{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uN(t){return $P(t.auth,new zm(t),t.bypassAuthState)}function cN(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),BP(n,new zm(t),t.bypassAuthState)}async function hN(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),zP(n,new zm(t),t.bypassAuthState)}/**
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
 */class OI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uN;case"linkViaPopup":case"linkViaRedirect":return hN;case"reauthViaPopup":case"reauthViaRedirect":return cN;default:Vn(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dN=new ol(2e3,1e4);async function fN(t,e,n){if(Qn(t.app))return Promise.reject(Tn(t,"operation-not-supported-in-this-environment"));const r=oh(t);lP(t,e,Fm);const i=DI(r,n);return new _i(r,"signInViaPopup",e,i).executeNotNull()}class _i extends OI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=Um();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dN.get())};e()}}_i.currentPopupAction=null;/**
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
 */const pN="pendingRedirect",Pu=new Map;class mN extends OI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pu.get(this.auth._key());if(!e){try{const r=await gN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pu.set(this.auth._key(),e)}return this.bypassAuthState||Pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gN(t,e){const n=vN(e),r=yN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _N(t,e){Pu.set(t._key(),e)}function yN(t){return Jn(t._redirectPersistence)}function vN(t){return Ru(pN,t.config.apiKey,t.name)}async function wN(t,e,n=!1){if(Qn(t.app))return Promise.reject(Ii(t));const r=oh(t),i=DI(r,e),o=await new mN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const EN=10*60*1e3;class TN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!MI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EN&&this.cachedEventUids.clear(),this.cachedEventUids.has($v(e))}saveEventToCache(e){this.cachedEventUids.add($v(e)),this.lastProcessedEventTime=Date.now()}}function $v(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function MI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return MI(t);default:return!1}}/**
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
 */async function SN(t,e={}){return so(t,"GET","/v1/projects",e)}/**
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
 */const xN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CN=/^https?/;async function AN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SN(t);for(const n of e)try{if(kN(n))return}catch{}Vn(t,"unauthorized-domain")}function kN(t){const e=Zf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!CN.test(n))return!1;if(xN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const RN=new ol(3e4,6e4);function Wv(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PN(t){return new Promise((e,n)=>{var r,i,s;function o(){Wv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wv(),n(Tn(t,"network-request-failed"))},timeout:RN.get()})}if(!((i=(r=Mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Mn().gapi)===null||s===void 0)&&s.load)o();else{const a=OP("iframefcb");return Mn()[a]=()=>{gapi.load?o():n(Tn(t,"network-request-failed"))},bP(`${DP()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Nu=null,e})}let Nu=null;function NN(t){return Nu=Nu||PN(t),Nu}/**
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
 */const bN=new ol(5e3,15e3),DN="__/auth/iframe",ON="emulator/auth/iframe",MN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VN(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Om(e,ON):`https://${t.config.authDomain}/${DN}`,r={apiKey:e.apiKey,appName:t.name,v:$i},i=LN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${io(r).slice(1)}`}async function jN(t){const e=await NN(t),n=Mn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:VN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),a=Mn().setTimeout(()=>{s(o)},bN.get());function u(){Mn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const FN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UN=500,zN=600,BN="_blank",$N="http://localhost";class qv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WN(t,e,n,r=UN,i=zN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},FN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=kt().toLowerCase();n&&(a=mI(c)?BN:n),fI(c)&&(e=e||$N,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[y,T])=>`${g}${y}=${T},`,"");if(SP(c)&&a!=="_self")return qN(e||"",a),new qv(null);const p=window.open(e||"",a,f);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new qv(p)}function qN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const GN="__/auth/handler",HN="emulator/auth/handler",KN=encodeURIComponent("fac");async function Gv(t,e,n,r,i,s){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$i,eventId:i};if(e instanceof Fm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof al){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await t._getAppCheckToken(),c=u?`#${KN}=${encodeURIComponent(u)}`:"";return`${QN(t)}?${io(a).slice(1)}${c}`}function QN({config:t}){return t.emulator?Om(t,HN):`https://${t.authDomain}/${GN}`}/**
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
 */const jd="webStorageSupport";class YN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kI,this._completeRedirectFn=wN,this._overrideRedirectResult=_N}async _openPopup(e,n,r,i){var s;ar((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Gv(e,n,r,Zf(),i);return WN(e,o,Um())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Gv(e,n,r,Zf(),i);return ZP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ar(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jN(e),r=new TN(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jd,{type:jd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jd];o!==void 0&&n(!!o),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wI()||pI()||Vm()}}const XN=YN;var Hv="@firebase/auth",Kv="1.7.9";/**
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
 */class JN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eb(t){Pi(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:EI(t)},c=new PP(r,i,s,u);return LP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pi(new Hr("auth-internal",e=>{const n=oh(e.getProvider("auth").getImmediate());return(r=>new JN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(Hv,Kv,ZN(t)),On(Hv,Kv,"esm2017")}/**
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
 */const tb=5*60,nb=YT("authIdTokenMaxAge")||tb;let Qv=null;const rb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nb)return;const i=n==null?void 0:n.token;Qv!==i&&(Qv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ib(t=Pm()){const e=sh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MP(t,{popupRedirectResolver:XN,persistence:[lN,YP,kI]}),r=YT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=rb(s.toString());qP(n,o,()=>o(n.currentUser)),WP(n,a=>o(a))}}const i=HT("auth");return i&&VP(n,`http://${i}`),n}function sb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}NP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eb("Browser");var Yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Si,LI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function w(){}w.prototype=_.prototype,I.D=_.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(S,R,P){for(var A=Array(arguments.length-2),me=2;me<arguments.length;me++)A[me-2]=arguments[me];return _.prototype[R].apply(S,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,w){w||(w=0);var S=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)S[R]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(R=0;16>R;++R)S[R]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=I.g[0],w=I.g[1],R=I.g[2];var P=I.g[3],A=_+(P^w&(R^P))+S[0]+3614090360&4294967295;_=w+(A<<7&4294967295|A>>>25),A=P+(R^_&(w^R))+S[1]+3905402710&4294967295,P=_+(A<<12&4294967295|A>>>20),A=R+(w^P&(_^w))+S[2]+606105819&4294967295,R=P+(A<<17&4294967295|A>>>15),A=w+(_^R&(P^_))+S[3]+3250441966&4294967295,w=R+(A<<22&4294967295|A>>>10),A=_+(P^w&(R^P))+S[4]+4118548399&4294967295,_=w+(A<<7&4294967295|A>>>25),A=P+(R^_&(w^R))+S[5]+1200080426&4294967295,P=_+(A<<12&4294967295|A>>>20),A=R+(w^P&(_^w))+S[6]+2821735955&4294967295,R=P+(A<<17&4294967295|A>>>15),A=w+(_^R&(P^_))+S[7]+4249261313&4294967295,w=R+(A<<22&4294967295|A>>>10),A=_+(P^w&(R^P))+S[8]+1770035416&4294967295,_=w+(A<<7&4294967295|A>>>25),A=P+(R^_&(w^R))+S[9]+2336552879&4294967295,P=_+(A<<12&4294967295|A>>>20),A=R+(w^P&(_^w))+S[10]+4294925233&4294967295,R=P+(A<<17&4294967295|A>>>15),A=w+(_^R&(P^_))+S[11]+2304563134&4294967295,w=R+(A<<22&4294967295|A>>>10),A=_+(P^w&(R^P))+S[12]+1804603682&4294967295,_=w+(A<<7&4294967295|A>>>25),A=P+(R^_&(w^R))+S[13]+4254626195&4294967295,P=_+(A<<12&4294967295|A>>>20),A=R+(w^P&(_^w))+S[14]+2792965006&4294967295,R=P+(A<<17&4294967295|A>>>15),A=w+(_^R&(P^_))+S[15]+1236535329&4294967295,w=R+(A<<22&4294967295|A>>>10),A=_+(R^P&(w^R))+S[1]+4129170786&4294967295,_=w+(A<<5&4294967295|A>>>27),A=P+(w^R&(_^w))+S[6]+3225465664&4294967295,P=_+(A<<9&4294967295|A>>>23),A=R+(_^w&(P^_))+S[11]+643717713&4294967295,R=P+(A<<14&4294967295|A>>>18),A=w+(P^_&(R^P))+S[0]+3921069994&4294967295,w=R+(A<<20&4294967295|A>>>12),A=_+(R^P&(w^R))+S[5]+3593408605&4294967295,_=w+(A<<5&4294967295|A>>>27),A=P+(w^R&(_^w))+S[10]+38016083&4294967295,P=_+(A<<9&4294967295|A>>>23),A=R+(_^w&(P^_))+S[15]+3634488961&4294967295,R=P+(A<<14&4294967295|A>>>18),A=w+(P^_&(R^P))+S[4]+3889429448&4294967295,w=R+(A<<20&4294967295|A>>>12),A=_+(R^P&(w^R))+S[9]+568446438&4294967295,_=w+(A<<5&4294967295|A>>>27),A=P+(w^R&(_^w))+S[14]+3275163606&4294967295,P=_+(A<<9&4294967295|A>>>23),A=R+(_^w&(P^_))+S[3]+4107603335&4294967295,R=P+(A<<14&4294967295|A>>>18),A=w+(P^_&(R^P))+S[8]+1163531501&4294967295,w=R+(A<<20&4294967295|A>>>12),A=_+(R^P&(w^R))+S[13]+2850285829&4294967295,_=w+(A<<5&4294967295|A>>>27),A=P+(w^R&(_^w))+S[2]+4243563512&4294967295,P=_+(A<<9&4294967295|A>>>23),A=R+(_^w&(P^_))+S[7]+1735328473&4294967295,R=P+(A<<14&4294967295|A>>>18),A=w+(P^_&(R^P))+S[12]+2368359562&4294967295,w=R+(A<<20&4294967295|A>>>12),A=_+(w^R^P)+S[5]+4294588738&4294967295,_=w+(A<<4&4294967295|A>>>28),A=P+(_^w^R)+S[8]+2272392833&4294967295,P=_+(A<<11&4294967295|A>>>21),A=R+(P^_^w)+S[11]+1839030562&4294967295,R=P+(A<<16&4294967295|A>>>16),A=w+(R^P^_)+S[14]+4259657740&4294967295,w=R+(A<<23&4294967295|A>>>9),A=_+(w^R^P)+S[1]+2763975236&4294967295,_=w+(A<<4&4294967295|A>>>28),A=P+(_^w^R)+S[4]+1272893353&4294967295,P=_+(A<<11&4294967295|A>>>21),A=R+(P^_^w)+S[7]+4139469664&4294967295,R=P+(A<<16&4294967295|A>>>16),A=w+(R^P^_)+S[10]+3200236656&4294967295,w=R+(A<<23&4294967295|A>>>9),A=_+(w^R^P)+S[13]+681279174&4294967295,_=w+(A<<4&4294967295|A>>>28),A=P+(_^w^R)+S[0]+3936430074&4294967295,P=_+(A<<11&4294967295|A>>>21),A=R+(P^_^w)+S[3]+3572445317&4294967295,R=P+(A<<16&4294967295|A>>>16),A=w+(R^P^_)+S[6]+76029189&4294967295,w=R+(A<<23&4294967295|A>>>9),A=_+(w^R^P)+S[9]+3654602809&4294967295,_=w+(A<<4&4294967295|A>>>28),A=P+(_^w^R)+S[12]+3873151461&4294967295,P=_+(A<<11&4294967295|A>>>21),A=R+(P^_^w)+S[15]+530742520&4294967295,R=P+(A<<16&4294967295|A>>>16),A=w+(R^P^_)+S[2]+3299628645&4294967295,w=R+(A<<23&4294967295|A>>>9),A=_+(R^(w|~P))+S[0]+4096336452&4294967295,_=w+(A<<6&4294967295|A>>>26),A=P+(w^(_|~R))+S[7]+1126891415&4294967295,P=_+(A<<10&4294967295|A>>>22),A=R+(_^(P|~w))+S[14]+2878612391&4294967295,R=P+(A<<15&4294967295|A>>>17),A=w+(P^(R|~_))+S[5]+4237533241&4294967295,w=R+(A<<21&4294967295|A>>>11),A=_+(R^(w|~P))+S[12]+1700485571&4294967295,_=w+(A<<6&4294967295|A>>>26),A=P+(w^(_|~R))+S[3]+2399980690&4294967295,P=_+(A<<10&4294967295|A>>>22),A=R+(_^(P|~w))+S[10]+4293915773&4294967295,R=P+(A<<15&4294967295|A>>>17),A=w+(P^(R|~_))+S[1]+2240044497&4294967295,w=R+(A<<21&4294967295|A>>>11),A=_+(R^(w|~P))+S[8]+1873313359&4294967295,_=w+(A<<6&4294967295|A>>>26),A=P+(w^(_|~R))+S[15]+4264355552&4294967295,P=_+(A<<10&4294967295|A>>>22),A=R+(_^(P|~w))+S[6]+2734768916&4294967295,R=P+(A<<15&4294967295|A>>>17),A=w+(P^(R|~_))+S[13]+1309151649&4294967295,w=R+(A<<21&4294967295|A>>>11),A=_+(R^(w|~P))+S[4]+4149444226&4294967295,_=w+(A<<6&4294967295|A>>>26),A=P+(w^(_|~R))+S[11]+3174756917&4294967295,P=_+(A<<10&4294967295|A>>>22),A=R+(_^(P|~w))+S[2]+718787259&4294967295,R=P+(A<<15&4294967295|A>>>17),A=w+(P^(R|~_))+S[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(R+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+P&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var w=_-this.blockSize,S=this.B,R=this.h,P=0;P<_;){if(R==0)for(;P<=w;)i(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<_;)if(S[R++]=I.charCodeAt(P++),R==this.blockSize){i(this,S),R=0;break}}else for(;P<_;)if(S[R++]=I[P++],R==this.blockSize){i(this,S),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var w=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=w&255,w/=256;for(this.u(I),I=Array(16),_=w=0;4>_;++_)for(var S=0;32>S;S+=8)I[w++]=this.g[_]>>>S&255;return I};function s(I,_){var w=a;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=_(I)}function o(I,_){this.h=_;for(var w=[],S=!0,R=I.length-1;0<=R;R--){var P=I[R]|0;S&&P==_||(w[R]=P,S=!1)}this.g=w}var a={};function u(I){return-128<=I&&128>I?s(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return N(c(-I));for(var _=[],w=1,S=0;I>=w;S++)_[S]=I/w|0,w*=4294967296;return new o(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return N(f(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(_,8)),S=p,R=0;R<I.length;R+=8){var P=Math.min(8,I.length-R),A=parseInt(I.substring(R,R+P),_);8>P?(P=c(Math.pow(_,P)),S=S.j(P).add(c(A))):(S=S.j(w),S=S.add(c(A)))}return S}var p=u(0),g=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();for(var I=0,_=1,w=0;w<this.g.length;w++){var S=this.i(w);I+=(0<=S?S:4294967296+S)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(T(this))return"0";if(k(this))return"-"+N(this).toString(I);for(var _=c(Math.pow(I,6)),w=this,S="";;){var R=D(w,_).g;w=x(w,R.j(_));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=R,T(w))return P+S;for(;6>P.length;)P="0"+P;S=P+S}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function T(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=x(this,I),k(I)?-1:T(I)?0:1};function N(I){for(var _=I.g.length,w=[],S=0;S<_;S++)w[S]=~I.g[S];return new o(w,~I.h).add(g)}t.abs=function(){return k(this)?N(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],S=0,R=0;R<=_;R++){var P=S+(this.i(R)&65535)+(I.i(R)&65535),A=(P>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);S=A>>>16,P&=65535,A&=65535,w[R]=A<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function x(I,_){return I.add(N(_))}t.j=function(I){if(T(this)||T(I))return p;if(k(this))return k(I)?N(this).j(N(I)):N(N(this).j(I));if(k(I))return N(this.j(N(I)));if(0>this.l(y)&&0>I.l(y))return c(this.m()*I.m());for(var _=this.g.length+I.g.length,w=[],S=0;S<2*_;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var R=0;R<I.g.length;R++){var P=this.i(S)>>>16,A=this.i(S)&65535,me=I.i(R)>>>16,Te=I.i(R)&65535;w[2*S+2*R]+=A*Te,E(w,2*S+2*R),w[2*S+2*R+1]+=P*Te,E(w,2*S+2*R+1),w[2*S+2*R+1]+=A*me,E(w,2*S+2*R+1),w[2*S+2*R+2]+=P*me,E(w,2*S+2*R+2)}for(S=0;S<_;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=_;S<2*_;S++)w[S]=0;return new o(w,0)};function E(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function C(I,_){this.g=I,this.h=_}function D(I,_){if(T(_))throw Error("division by zero");if(T(I))return new C(p,p);if(k(I))return _=D(N(I),_),new C(N(_.g),N(_.h));if(k(_))return _=D(I,N(_)),new C(N(_.g),_.h);if(30<I.g.length){if(k(I)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var w=g,S=_;0>=S.l(I);)w=O(w),S=O(S);var R=V(w,1),P=V(S,1);for(S=V(S,2),w=V(w,2);!T(S);){var A=P.add(S);0>=A.l(I)&&(R=R.add(w),P=A),S=V(S,1),w=V(w,1)}return _=x(I,R.j(_)),new C(R,_)}for(R=p;0<=I.l(_);){for(w=Math.max(1,Math.floor(I.m()/_.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),P=c(w),A=P.j(_);k(A)||0<A.l(I);)w-=S,P=c(w),A=P.j(_);T(P)&&(P=g),R=R.add(P),I=x(I,A)}return new C(R,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)&I.i(S);return new o(w,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)|I.i(S);return new o(w,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)^I.i(S);return new o(w,this.h^I.h)};function O(I){for(var _=I.g.length+1,w=[],S=0;S<_;S++)w[S]=I.i(S)<<1|I.i(S-1)>>>31;return new o(w,I.h)}function V(I,_){var w=_>>5;_%=32;for(var S=I.g.length-w,R=[],P=0;P<S;P++)R[P]=0<_?I.i(P+w)>>>_|I.i(P+w+1)<<32-_:I.i(P+w);return new o(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,LI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Si=o}).apply(typeof Yv<"u"?Yv:typeof self<"u"?self:typeof window<"u"?window:{});var ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var VI,Ko,jI,bu,np,FI,UI,zI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ou=="object"&&ou];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var b=l[v];if(!(b in m))break e;m=m[b]}l=l[l.length-1],v=m[l],d=d(v),d!=v&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,v=!1,b={next:function(){if(!v&&m<l.length){var M=m++;return{value:d(M,l[M]),done:!1}}return v=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function f(l,d,m){return l.call.apply(l.bind,arguments)}function p(l,d,m){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,v),l.apply(d,b)}}return function(){return l.apply(d,arguments)}}function g(l,d,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function y(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function T(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(v,b,M){for(var q=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)q[Ie-2]=arguments[Ie];return d.prototype[b].apply(v,q)}}function k(l){const d=l.length;if(0<d){const m=Array(d);for(let v=0;v<d;v++)m[v]=l[v];return m}return[]}function N(l,d){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(u(v)){const b=l.length||0,M=v.length||0;l.length=b+M;for(let q=0;q<M;q++)l[b+q]=v[q]}else l.push(v)}}class x{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function E(l){return/^[\s\xa0]*$/.test(l)}function C(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var O=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function V(l,d,m){for(const v in l)d.call(m,l[v],v,l)}function I(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function _(l){const d={};for(const m in l)d[m]=l[m];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(l,d){let m,v;for(let b=1;b<arguments.length;b++){v=arguments[b];for(m in v)l[m]=v[m];for(let M=0;M<w.length;M++)m=w[M],Object.prototype.hasOwnProperty.call(v,m)&&(l[m]=v[m])}}function R(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function P(l){a.setTimeout(()=>{throw l},0)}function A(){var l=H;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class me{constructor(){this.h=this.g=null}add(d,m){const v=Te.get();v.set(d,m),this.h?this.h.next=v:this.g=v,this.h=v}}var Te=new x(()=>new qe,l=>l.reset());class qe{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,B=!1,H=new me,U=()=>{const l=a.Promise.resolve(void 0);xe=()=>{l.then(X)}};var X=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(m){P(m)}var d=Te;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}B=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var G=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function K(l,d){if(se.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(O){e:{try{D(d.nodeName);var b=!0;break e}catch{}b=!1}b||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ve[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&K.aa.h.call(this)}}T(K,se);var ve={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ke="closure_listenable_"+(1e6*Math.random()|0),Qi=0;function Yi(l,d,m,v,b){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!v,this.ha=b,this.key=++Qi,this.da=this.fa=!1}function Sl(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function xl(l){this.src=l,this.g={},this.h=0}xl.prototype.add=function(l,d,m,v,b){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var q=jh(l,d,v,b);return-1<q?(d=l[q],m||(d.fa=!1)):(d=new Yi(d,this.src,M,!!v,b),d.fa=m,l.push(d)),d};function Vh(l,d){var m=d.type;if(m in l.g){var v=l.g[m],b=Array.prototype.indexOf.call(v,d,void 0),M;(M=0<=b)&&Array.prototype.splice.call(v,b,1),M&&(Sl(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function jh(l,d,m,v){for(var b=0;b<l.length;++b){var M=l[b];if(!M.da&&M.listener==d&&M.capture==!!m&&M.ha==v)return b}return-1}var Fh="closure_lm_"+(1e6*Math.random()|0),Uh={};function m_(l,d,m,v,b){if(Array.isArray(d)){for(var M=0;M<d.length;M++)m_(l,d[M],m,v,b);return null}return m=y_(m),l&&l[ke]?l.K(d,m,c(v)?!!v.capture:!1,b):xC(l,d,m,!1,v,b)}function xC(l,d,m,v,b,M){if(!d)throw Error("Invalid event type");var q=c(b)?!!b.capture:!!b,Ie=Bh(l);if(Ie||(l[Fh]=Ie=new xl(l)),m=Ie.add(d,m,v,q,M),m.proxy)return m;if(v=CC(),m.proxy=v,v.src=l,v.listener=m,l.addEventListener)G||(b=q),b===void 0&&(b=!1),l.addEventListener(d.toString(),v,b);else if(l.attachEvent)l.attachEvent(__(d.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function CC(){function l(m){return d.call(l.src,l.listener,m)}const d=AC;return l}function g_(l,d,m,v,b){if(Array.isArray(d))for(var M=0;M<d.length;M++)g_(l,d[M],m,v,b);else v=c(v)?!!v.capture:!!v,m=y_(m),l&&l[ke]?(l=l.i,d=String(d).toString(),d in l.g&&(M=l.g[d],m=jh(M,m,v,b),-1<m&&(Sl(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete l.g[d],l.h--)))):l&&(l=Bh(l))&&(d=l.g[d.toString()],l=-1,d&&(l=jh(d,m,v,b)),(m=-1<l?d[l]:null)&&zh(m))}function zh(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[ke])Vh(d.i,l);else{var m=l.type,v=l.proxy;d.removeEventListener?d.removeEventListener(m,v,l.capture):d.detachEvent?d.detachEvent(__(m),v):d.addListener&&d.removeListener&&d.removeListener(v),(m=Bh(d))?(Vh(m,l),m.h==0&&(m.src=null,d[Fh]=null)):Sl(l)}}}function __(l){return l in Uh?Uh[l]:Uh[l]="on"+l}function AC(l,d){if(l.da)l=!0;else{d=new K(d,this);var m=l.listener,v=l.ha||l.src;l.fa&&zh(l),l=m.call(v,d)}return l}function Bh(l){return l=l[Fh],l instanceof xl?l:null}var $h="__closure_events_fn_"+(1e9*Math.random()>>>0);function y_(l){return typeof l=="function"?l:(l[$h]||(l[$h]=function(d){return l.handleEvent(d)}),l[$h])}function _t(){Z.call(this),this.i=new xl(this),this.M=this,this.F=null}T(_t,Z),_t.prototype[ke]=!0,_t.prototype.removeEventListener=function(l,d,m,v){g_(this,l,d,m,v)};function Rt(l,d){var m,v=l.F;if(v)for(m=[];v;v=v.F)m.push(v);if(l=l.M,v=d.type||d,typeof d=="string")d=new se(d,l);else if(d instanceof se)d.target=d.target||l;else{var b=d;d=new se(v,l),S(d,b)}if(b=!0,m)for(var M=m.length-1;0<=M;M--){var q=d.g=m[M];b=Cl(q,v,!0,d)&&b}if(q=d.g=l,b=Cl(q,v,!0,d)&&b,b=Cl(q,v,!1,d)&&b,m)for(M=0;M<m.length;M++)q=d.g=m[M],b=Cl(q,v,!1,d)&&b}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],v=0;v<m.length;v++)Sl(m[v]);delete l.g[d],l.h--}}this.F=null},_t.prototype.K=function(l,d,m,v){return this.i.add(String(l),d,!1,m,v)},_t.prototype.L=function(l,d,m,v){return this.i.add(String(l),d,!0,m,v)};function Cl(l,d,m,v){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var b=!0,M=0;M<d.length;++M){var q=d[M];if(q&&!q.da&&q.capture==m){var Ie=q.listener,ut=q.ha||q.src;q.fa&&Vh(l.i,q),b=Ie.call(ut,v)!==!1&&b}}return b&&!v.defaultPrevented}function v_(l,d,m){if(typeof l=="function")m&&(l=g(l,m));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function w_(l){l.g=v_(()=>{l.g=null,l.i&&(l.i=!1,w_(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class kC extends Z{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:w_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _o(l){Z.call(this),this.h=l,this.g={}}T(_o,Z);var E_=[];function T_(l){V(l.g,function(d,m){this.g.hasOwnProperty(m)&&zh(d)},l),l.g={}}_o.prototype.N=function(){_o.aa.N.call(this),T_(this)},_o.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wh=a.JSON.stringify,RC=a.JSON.parse,PC=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function qh(){}qh.prototype.h=null;function I_(l){return l.h||(l.h=l.i())}function S_(){}var yo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gh(){se.call(this,"d")}T(Gh,se);function Hh(){se.call(this,"c")}T(Hh,se);var si={},x_=null;function Al(){return x_=x_||new _t}si.La="serverreachability";function C_(l){se.call(this,si.La,l)}T(C_,se);function vo(l){const d=Al();Rt(d,new C_(d))}si.STAT_EVENT="statevent";function A_(l,d){se.call(this,si.STAT_EVENT,l),this.stat=d}T(A_,se);function Pt(l){const d=Al();Rt(d,new A_(d,l))}si.Ma="timingevent";function k_(l,d){se.call(this,si.Ma,l),this.size=d}T(k_,se);function wo(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Eo(){this.g=!0}Eo.prototype.xa=function(){this.g=!1};function NC(l,d,m,v,b,M){l.info(function(){if(l.g)if(M)for(var q="",Ie=M.split("&"),ut=0;ut<Ie.length;ut++){var ge=Ie[ut].split("=");if(1<ge.length){var yt=ge[0];ge=ge[1];var vt=yt.split("_");q=2<=vt.length&&vt[1]=="type"?q+(yt+"="+ge+"&"):q+(yt+"=redacted&")}}else q=null;else q=M;return"XMLHTTP REQ ("+v+") [attempt "+b+"]: "+d+`
`+m+`
`+q})}function bC(l,d,m,v,b,M,q){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+b+"]: "+d+`
`+m+`
`+M+" "+q})}function Xi(l,d,m,v){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+OC(l,m)+(v?" "+v:"")})}function DC(l,d){l.info(function(){return"TIMEOUT: "+d})}Eo.prototype.info=function(){};function OC(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var v=m[l];if(!(2>v.length)){var b=v[1];if(Array.isArray(b)&&!(1>b.length)){var M=b[0];if(M!="noop"&&M!="stop"&&M!="close")for(var q=1;q<b.length;q++)b[q]=""}}}}return Wh(m)}catch{return d}}var kl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},R_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Kh;function Rl(){}T(Rl,qh),Rl.prototype.g=function(){return new XMLHttpRequest},Rl.prototype.i=function(){return{}},Kh=new Rl;function gr(l,d,m,v){this.j=l,this.i=d,this.l=m,this.R=v||1,this.U=new _o(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new P_}function P_(){this.i=null,this.g="",this.h=!1}var N_={},Qh={};function Yh(l,d,m){l.L=1,l.v=Dl(Un(d)),l.m=m,l.P=!0,b_(l,null)}function b_(l,d){l.F=Date.now(),Pl(l),l.A=Un(l.v);var m=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),G_(m.i,"t",v),l.C=0,m=l.j.J,l.h=new P_,l.g=cy(l.j,m?d:null,!l.m),0<l.O&&(l.M=new kC(g(l.Y,l,l.g),l.O)),d=l.U,m=l.g,v=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(E_[0]=b.toString()),b=E_);for(var M=0;M<b.length;M++){var q=m_(m,b[M],v||d.handleEvent,!1,d.h||d);if(!q)break;d.g[q.key]=q}d=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),vo(),NC(l.i,l.u,l.A,l.l,l.R,l.m)}gr.prototype.ca=function(l){l=l.target;const d=this.M;d&&zn(l)==3?d.j():this.Y(l)},gr.prototype.Y=function(l){try{if(l==this.g)e:{const vt=zn(this.g);var d=this.g.Ba();const es=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Z_(this.g)))){this.J||vt!=4||d==7||(d==8||0>=es?vo(3):vo(2)),Xh(this);var m=this.g.Z();this.X=m;t:if(D_(this)){var v=Z_(this.g);l="";var b=v.length,M=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oi(this),To(this);var q="";break t}this.h.i=new a.TextDecoder}for(d=0;d<b;d++)this.h.h=!0,l+=this.h.i.decode(v[d],{stream:!(M&&d==b-1)});v.length=0,this.h.g+=l,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=m==200,bC(this.i,this.u,this.A,this.l,this.R,vt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,ut=this.g;if((Ie=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(Ie)){var ge=Ie;break t}}ge=null}if(m=ge)Xi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jh(this,m);else{this.o=!1,this.s=3,Pt(12),oi(this),To(this);break e}}if(this.P){m=!0;let dn;for(;!this.J&&this.C<q.length;)if(dn=MC(this,q),dn==Qh){vt==4&&(this.s=4,Pt(14),m=!1),Xi(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==N_){this.s=4,Pt(15),Xi(this.i,this.l,q,"[Invalid Chunk]"),m=!1;break}else Xi(this.i,this.l,dn,null),Jh(this,dn);if(D_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||q.length!=0||this.h.h||(this.s=1,Pt(16),m=!1),this.o=this.o&&m,!m)Xi(this.i,this.l,q,"[Invalid Chunked Response]"),oi(this),To(this);else if(0<q.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),id(yt),yt.M=!0,Pt(11))}}else Xi(this.i,this.l,q,null),Jh(this,q);vt==4&&oi(this),this.o&&!this.J&&(vt==4?oy(this.j,this):(this.o=!1,Pl(this)))}else JC(this.g),m==400&&0<q.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),oi(this),To(this)}}}catch{}finally{}};function D_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function MC(l,d){var m=l.C,v=d.indexOf(`
`,m);return v==-1?Qh:(m=Number(d.substring(m,v)),isNaN(m)?N_:(v+=1,v+m>d.length?Qh:(d=d.slice(v,v+m),l.C=v+m,d)))}gr.prototype.cancel=function(){this.J=!0,oi(this)};function Pl(l){l.S=Date.now()+l.I,O_(l,l.I)}function O_(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=wo(g(l.ba,l),d)}function Xh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}gr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(DC(this.i,this.A),this.L!=2&&(vo(),Pt(17)),oi(this),this.s=2,To(this)):O_(this,this.S-l)};function To(l){l.j.G==0||l.J||oy(l.j,l)}function oi(l){Xh(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,T_(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Jh(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||Zh(m.h,l))){if(!l.K&&Zh(m.h,l)&&m.G==3){try{var v=m.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var b=v;if(b[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Fl(m),Vl(m);else break e;rd(m),Pt(18)}}else m.za=b[1],0<m.za-m.T&&37500>b[2]&&m.F&&m.v==0&&!m.C&&(m.C=wo(g(m.Za,m),6e3));if(1>=V_(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else li(m,11)}else if((l.K||m.g==l)&&Fl(m),!E(d))for(b=m.Da.g.parse(d),d=0;d<b.length;d++){let ge=b[d];if(m.T=ge[0],ge=ge[1],m.G==2)if(ge[0]=="c"){m.K=ge[1],m.ia=ge[2];const yt=ge[3];yt!=null&&(m.la=yt,m.j.info("VER="+m.la));const vt=ge[4];vt!=null&&(m.Aa=vt,m.j.info("SVER="+m.Aa));const es=ge[5];es!=null&&typeof es=="number"&&0<es&&(v=1.5*es,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const dn=l.g;if(dn){const zl=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zl){var M=v.h;M.g||zl.indexOf("spdy")==-1&&zl.indexOf("quic")==-1&&zl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(ed(M,M.h),M.h=null))}if(v.D){const sd=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;sd&&(v.ya=sd,Re(v.I,v.D,sd))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var q=l;if(v.qa=uy(v,v.J?v.ia:null,v.W),q.K){j_(v.h,q);var Ie=q,ut=v.L;ut&&(Ie.I=ut),Ie.B&&(Xh(Ie),Pl(Ie)),v.g=q}else iy(v);0<m.i.length&&jl(m)}else ge[0]!="stop"&&ge[0]!="close"||li(m,7);else m.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?li(m,7):nd(m):ge[0]!="noop"&&m.l&&m.l.ta(ge),m.v=0)}}vo(4)}catch{}}var LC=class{constructor(l,d){this.g=l,this.map=d}};function M_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function L_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function V_(l){return l.h?1:l.g?l.g.size:0}function Zh(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function ed(l,d){l.g?l.g.add(d):l.h=d}function j_(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}M_.prototype.cancel=function(){if(this.i=F_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function F_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return k(l.i)}function VC(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],m=l.length,v=0;v<m;v++)d.push(l[v]);return d}d=[],m=0;for(v in l)d[m++]=l[v];return d}function jC(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const v in l)d[m++]=v;return d}}}function U_(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=jC(l),v=VC(l),b=v.length,M=0;M<b;M++)d.call(void 0,v[M],m&&m[M],l)}var z_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FC(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var v=l[m].indexOf("="),b=null;if(0<=v){var M=l[m].substring(0,v);b=l[m].substring(v+1)}else M=l[m];d(M,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function ai(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ai){this.h=l.h,Nl(this,l.j),this.o=l.o,this.g=l.g,bl(this,l.s),this.l=l.l;var d=l.i,m=new xo;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),B_(this,m),this.m=l.m}else l&&(d=String(l).match(z_))?(this.h=!1,Nl(this,d[1]||"",!0),this.o=Io(d[2]||""),this.g=Io(d[3]||"",!0),bl(this,d[4]),this.l=Io(d[5]||"",!0),B_(this,d[6]||"",!0),this.m=Io(d[7]||"")):(this.h=!1,this.i=new xo(null,this.h))}ai.prototype.toString=function(){var l=[],d=this.j;d&&l.push(So(d,$_,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(So(d,$_,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(So(m,m.charAt(0)=="/"?BC:zC,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",So(m,WC)),l.join("")};function Un(l){return new ai(l)}function Nl(l,d,m){l.j=m?Io(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function bl(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function B_(l,d,m){d instanceof xo?(l.i=d,qC(l.i,l.h)):(m||(d=So(d,$C)),l.i=new xo(d,l.h))}function Re(l,d,m){l.i.set(d,m)}function Dl(l){return Re(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Io(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function So(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,UC),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function UC(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var $_=/[#\/\?@]/g,zC=/[#\?:]/g,BC=/[#\?]/g,$C=/[#\?@]/g,WC=/#/g;function xo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function _r(l){l.g||(l.g=new Map,l.h=0,l.i&&FC(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=xo.prototype,t.add=function(l,d){_r(this),this.i=null,l=Ji(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function W_(l,d){_r(l),d=Ji(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function q_(l,d){return _r(l),d=Ji(l,d),l.g.has(d)}t.forEach=function(l,d){_r(this),this.g.forEach(function(m,v){m.forEach(function(b){l.call(d,b,v,this)},this)},this)},t.na=function(){_r(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let v=0;v<d.length;v++){const b=l[v];for(let M=0;M<b.length;M++)m.push(d[v])}return m},t.V=function(l){_r(this);let d=[];if(typeof l=="string")q_(this,l)&&(d=d.concat(this.g.get(Ji(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return _r(this),this.i=null,l=Ji(this,l),q_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function G_(l,d,m){W_(l,d),0<m.length&&(l.i=null,l.g.set(Ji(l,d),k(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var v=d[m];const M=encodeURIComponent(String(v)),q=this.V(v);for(v=0;v<q.length;v++){var b=M;q[v]!==""&&(b+="="+encodeURIComponent(String(q[v]))),l.push(b)}}return this.i=l.join("&")};function Ji(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function qC(l,d){d&&!l.j&&(_r(l),l.i=null,l.g.forEach(function(m,v){var b=v.toLowerCase();v!=b&&(W_(this,v),G_(this,b,m))},l)),l.j=d}function GC(l,d){const m=new Eo;if(a.Image){const v=new Image;v.onload=y(yr,m,"TestLoadImage: loaded",!0,d,v),v.onerror=y(yr,m,"TestLoadImage: error",!1,d,v),v.onabort=y(yr,m,"TestLoadImage: abort",!1,d,v),v.ontimeout=y(yr,m,"TestLoadImage: timeout",!1,d,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else d(!1)}function HC(l,d){const m=new Eo,v=new AbortController,b=setTimeout(()=>{v.abort(),yr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:v.signal}).then(M=>{clearTimeout(b),M.ok?yr(m,"TestPingServer: ok",!0,d):yr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(b),yr(m,"TestPingServer: error",!1,d)})}function yr(l,d,m,v,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),v(m)}catch{}}function KC(){this.g=new PC}function QC(l,d,m){const v=m||"";try{U_(l,function(b,M){let q=b;c(b)&&(q=Wh(b)),d.push(v+M+"="+encodeURIComponent(q))})}catch(b){throw d.push(v+"type="+encodeURIComponent("_badmap")),b}}function Ol(l){this.l=l.Ub||null,this.j=l.eb||!1}T(Ol,qh),Ol.prototype.g=function(){return new Ml(this.l,this.j)},Ol.prototype.i=function(l){return function(){return l}}({});function Ml(l,d){_t.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Ml,_t),t=Ml.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Ao(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Co(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ao(this)),this.g&&(this.readyState=3,Ao(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;H_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function H_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Co(this):Ao(this),this.readyState==3&&H_(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Co(this))},t.Qa=function(l){this.g&&(this.response=l,Co(this))},t.ga=function(){this.g&&Co(this)};function Co(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ao(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function Ao(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ml.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function K_(l){let d="";return V(l,function(m,v){d+=v,d+=":",d+=m,d+=`\r
`}),d}function td(l,d,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=K_(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Re(l,d,m))}function Ue(l){_t.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Ue,_t);var YC=/^https?$/i,XC=["POST","PUT"];t=Ue.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kh.g(),this.v=this.o?I_(this.o):I_(Kh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(M){Q_(this,M);return}if(l=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var b in v)m.set(b,v[b]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const M of v.keys())m.set(M,v.get(M));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(XC,d,void 0))||v||b||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,q]of m)this.g.setRequestHeader(M,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{J_(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){Q_(this,M)}};function Q_(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Y_(l),Ll(l)}function Y_(l){l.A||(l.A=!0,Rt(l,"complete"),Rt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Rt(this,"complete"),Rt(this,"abort"),Ll(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ll(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?X_(this):this.bb())},t.bb=function(){X_(this)};function X_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||zn(l)!=4||l.Z()!=2)){if(l.u&&zn(l)==4)v_(l.Ea,0,l);else if(Rt(l,"readystatechange"),zn(l)==4){l.h=!1;try{const q=l.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var v;if(v=q===0){var b=String(l.D).match(z_)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),v=!YC.test(b?b.toLowerCase():"")}m=v}if(m)Rt(l,"complete"),Rt(l,"success");else{l.m=6;try{var M=2<zn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",Y_(l)}}finally{Ll(l)}}}}function Ll(l,d){if(l.g){J_(l);const m=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||Rt(l,"ready");try{m.onreadystatechange=v}catch{}}}function J_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function zn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),RC(d)}};function Z_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function JC(l){const d={};l=(l.g&&2<=zn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(E(l[v]))continue;var m=R(l[v]);const b=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=d[b]||[];d[b]=M,M.push(m)}I(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ko(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function ey(l){this.Aa=0,this.i=[],this.j=new Eo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ko("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ko("baseRetryDelayMs",5e3,l),this.cb=ko("retryDelaySeedMs",1e4,l),this.Wa=ko("forwardChannelMaxRetries",2,l),this.wa=ko("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new M_(l&&l.concurrentRequestLimit),this.Da=new KC,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ey.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,v){Pt(0),this.W=l,this.H=d||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=uy(this,null,this.W),jl(this)};function nd(l){if(ty(l),l.G==3){var d=l.U++,m=Un(l.I);if(Re(m,"SID",l.K),Re(m,"RID",d),Re(m,"TYPE","terminate"),Ro(l,m),d=new gr(l,l.j,d),d.L=2,d.v=Dl(Un(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=cy(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Pl(d)}ly(l)}function Vl(l){l.g&&(id(l),l.g.cancel(),l.g=null)}function ty(l){Vl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Fl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function jl(l){if(!L_(l.h)&&!l.s){l.s=!0;var d=l.Ga;xe||U(),B||(xe(),B=!0),H.add(d,l),l.B=0}}function ZC(l,d){return V_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=wo(g(l.Ga,l,d),ay(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new gr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=_(M),S(M,this.S)):M=this.S),this.m!==null||this.O||(b.H=M,M=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=ry(this,b,d),m=Un(this.I),Re(m,"RID",l),Re(m,"CVER",22),this.D&&Re(m,"X-HTTP-Session-Id",this.D),Ro(this,m),M&&(this.O?d="headers="+encodeURIComponent(String(K_(M)))+"&"+d:this.m&&td(m,this.m,M)),ed(this.h,b),this.Ua&&Re(m,"TYPE","init"),this.P?(Re(m,"$req",d),Re(m,"SID","null"),b.T=!0,Yh(b,m,null)):Yh(b,m,d),this.G=2}}else this.G==3&&(l?ny(this,l):this.i.length==0||L_(this.h)||ny(this))};function ny(l,d){var m;d?m=d.l:m=l.U++;const v=Un(l.I);Re(v,"SID",l.K),Re(v,"RID",m),Re(v,"AID",l.T),Ro(l,v),l.m&&l.o&&td(v,l.m,l.o),m=new gr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=ry(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ed(l.h,m),Yh(m,v,d)}function Ro(l,d){l.H&&V(l.H,function(m,v){Re(d,v,m)}),l.l&&U_({},function(m,v){Re(d,v,m)})}function ry(l,d,m){m=Math.min(l.i.length,m);var v=l.l?g(l.l.Na,l.l,l):null;e:{var b=l.i;let M=-1;for(;;){const q=["count="+m];M==-1?0<m?(M=b[0].g,q.push("ofs="+M)):M=0:q.push("ofs="+M);let Ie=!0;for(let ut=0;ut<m;ut++){let ge=b[ut].g;const yt=b[ut].map;if(ge-=M,0>ge)M=Math.max(0,b[ut].g-100),Ie=!1;else try{QC(yt,q,"req"+ge+"_")}catch{v&&v(yt)}}if(Ie){v=q.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,v}function iy(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;xe||U(),B||(xe(),B=!0),H.add(d,l),l.v=0}}function rd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=wo(g(l.Fa,l),ay(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,sy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=wo(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Vl(this),sy(this))};function id(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function sy(l){l.g=new gr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Un(l.qa);Re(d,"RID","rpc"),Re(d,"SID",l.K),Re(d,"AID",l.T),Re(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Re(d,"TO",l.ja),Re(d,"TYPE","xmlhttp"),Ro(l,d),l.m&&l.o&&td(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Dl(Un(d)),m.m=null,m.P=!0,b_(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Vl(this),rd(this),Pt(19))};function Fl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function oy(l,d){var m=null;if(l.g==d){Fl(l),id(l),l.g=null;var v=2}else if(Zh(l.h,d))m=d.D,j_(l.h,d),v=1;else return;if(l.G!=0){if(d.o)if(v==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var b=l.B;v=Al(),Rt(v,new k_(v,m)),jl(l)}else iy(l);else if(b=d.s,b==3||b==0&&0<d.X||!(v==1&&ZC(l,d)||v==2&&rd(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),b){case 1:li(l,5);break;case 4:li(l,10);break;case 3:li(l,6);break;default:li(l,2)}}}function ay(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function li(l,d){if(l.j.info("Error code "+d),d==2){var m=g(l.fb,l),v=l.Xa;const b=!v;v=new ai(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Nl(v,"https"),Dl(v),b?GC(v.toString(),m):HC(v.toString(),m)}else Pt(2);l.G=0,l.l&&l.l.sa(d),ly(l),ty(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function ly(l){if(l.G=0,l.ka=[],l.l){const d=F_(l.h);(d.length!=0||l.i.length!=0)&&(N(l.ka,d),N(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function uy(l,d,m){var v=m instanceof ai?Un(m):new ai(m);if(v.g!="")d&&(v.g=d+"."+v.g),bl(v,v.s);else{var b=a.location;v=b.protocol,d=d?d+"."+b.hostname:b.hostname,b=+b.port;var M=new ai(null);v&&Nl(M,v),d&&(M.g=d),b&&bl(M,b),m&&(M.l=m),v=M}return m=l.D,d=l.ya,m&&d&&Re(v,m,d),Re(v,"VER",l.la),Ro(l,v),v}function cy(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ue(new Ol({eb:m})):new Ue(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function hy(){}t=hy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ul(){}Ul.prototype.g=function(l,d){return new Qt(l,d)};function Qt(l,d){_t.call(this),this.g=new ey(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!E(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!E(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Zi(this)}T(Qt,_t),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){nd(this.g)},Qt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Wh(l),l=m);d.i.push(new LC(d.Ya++,l)),d.G==3&&jl(d)},Qt.prototype.N=function(){this.g.l=null,delete this.j,nd(this.g),delete this.g,Qt.aa.N.call(this)};function dy(l){Gh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}T(dy,Gh);function fy(){Hh.call(this),this.status=1}T(fy,Hh);function Zi(l){this.g=l}T(Zi,hy),Zi.prototype.ua=function(){Rt(this.g,"a")},Zi.prototype.ta=function(l){Rt(this.g,new dy(l))},Zi.prototype.sa=function(l){Rt(this.g,new fy)},Zi.prototype.ra=function(){Rt(this.g,"b")},Ul.prototype.createWebChannel=Ul.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,zI=function(){return new Ul},UI=function(){return Al()},FI=si,np={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kl.NO_ERROR=0,kl.TIMEOUT=8,kl.HTTP_ERROR=6,bu=kl,R_.COMPLETE="complete",jI=R_,S_.EventType=yo,yo.OPEN="a",yo.CLOSE="b",yo.ERROR="c",yo.MESSAGE="d",_t.prototype.listen=_t.prototype.K,Ko=S_,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,VI=Ue}).apply(typeof ou<"u"?ou:typeof self<"u"?self:typeof window<"u"?window:{});const Xv="@firebase/firestore";/**
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
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let oo="10.14.0";/**
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
 */const bi=new ih("@firebase/firestore");function jo(){return bi.logLevel}function Y(t,...e){if(bi.logLevel<=ce.DEBUG){const n=e.map(Bm);bi.debug(`Firestore (${oo}): ${t}`,...n)}}function lr(t,...e){if(bi.logLevel<=ce.ERROR){const n=e.map(Bm);bi.error(`Firestore (${oo}): ${t}`,...n)}}function $s(t,...e){if(bi.logLevel<=ce.WARN){const n=e.map(Bm);bi.warn(`Firestore (${oo}): ${t}`,...n)}}function Bm(t){if(typeof t=="string")return t;try{/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${oo}) INTERNAL ASSERTION FAILED: `+t;throw lr(e),new Error(e)}function fe(t,e){t||ee()}function re(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends pr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class BI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ob{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class ab{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lb{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new In;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new In,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new BI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new It(e)}}class ub{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ub(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class db{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){fe(this.o===void 0);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new hb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class $I{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function Ws(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new et(0,0))}static max(){return new te(new et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ja{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ja.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ja?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends ja{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const pb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends ja{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return pb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(we.fromString(e))}static fromName(e){return new J(we.fromString(e).popFirst(5))}static empty(){return new J(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new we(e.slice()))}}function mb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new Kr(i,J.empty(),e)}function gb(t){return new Kr(t.readTime,t.key,-1)}class Kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kr(te.min(),J.empty(),-1)}static max(){return new Kr(te.max(),J.empty(),-1)}}function _b(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const yb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ul(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==yb)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function cl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class $m{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}$m.oe=-1;function hl(t){return t==null}function gc(t){return t===0&&1/t==-1/0}function Eb(t){return typeof t=="number"&&Number.isInteger(t)&&!gc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Jv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Tb(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function WI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let Ye=class rp{constructor(e,n){this.comparator=e,this.root=n||Br.EMPTY}insert(e,n){return new rp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Br.BLACK,null,null))}remove(e){return new rp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Br.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new au(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new au(this.root,e,this.comparator,!1)}getReverseIterator(){return new au(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new au(this.root,e,this.comparator,!0)}},au=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Br=class Bn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Bn.RED,this.left=i??Bn.EMPTY,this.right=s??Bn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Bn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Bn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}};Br.EMPTY=null,Br.RED=!0,Br.BLACK=!1;Br.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Br(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zv(this.data.getIterator())}getIteratorFrom(e){return new Zv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class Zv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new pt(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qI("Invalid base64 string: "+s):s}}(e);return new gt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const Ib=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=Ib.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Di(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */function uh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wm(t){const e=t.mapValue.fields.__previous_value__;return uh(e)?Wm(e):e}function Fa(t){const e=Qr(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class Sb{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ua{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ua("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ua&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const lu={mapValue:{}};function Oi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?uh(t)?4:Cb(t)?9007199254740991:xb(t)?10:11:ee()}function jn(t,e){if(t===e)return!0;const n=Oi(t);if(n!==Oi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fa(t).isEqual(Fa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Qr(i.timestampValue),a=Qr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Di(i.bytesValue).isEqual(Di(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return $e(i.geoPointValue.latitude)===$e(s.geoPointValue.latitude)&&$e(i.geoPointValue.longitude)===$e(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return $e(i.integerValue)===$e(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=$e(i.doubleValue),a=$e(s.doubleValue);return o===a?gc(o)===gc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ws(t.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Jv(o)!==Jv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!jn(o[u],a[u])))return!1;return!0}(t,e);default:return ee()}}function za(t,e){return(t.values||[]).find(n=>jn(n,e))!==void 0}function qs(t,e){if(t===e)return 0;const n=Oi(t),r=Oi(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=$e(s.integerValue||s.doubleValue),u=$e(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return e0(t.timestampValue,e.timestampValue);case 4:return e0(Fa(t),Fa(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Di(s),u=Di(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const f=_e(a[c],u[c]);if(f!==0)return f}return _e(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=_e($e(s.latitude),$e(o.latitude));return a!==0?a:_e($e(s.longitude),$e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return t0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,f;const p=s.fields||{},g=o.fields||{},y=(a=p.value)===null||a===void 0?void 0:a.arrayValue,T=(u=g.value)===null||u===void 0?void 0:u.arrayValue,k=_e(((c=y==null?void 0:y.values)===null||c===void 0?void 0:c.length)||0,((f=T==null?void 0:T.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:t0(y,T)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===lu.mapValue&&o===lu.mapValue)return 0;if(s===lu.mapValue)return 1;if(o===lu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=_e(u[p],f[p]);if(g!==0)return g;const y=qs(a[u[p]],c[f[p]]);if(y!==0)return y}return _e(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ee()}}function e0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Qr(t),r=Qr(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function t0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=qs(n[i],r[i]);if(s)return s}return _e(n.length,r.length)}function Gs(t){return ip(t)}function ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Di(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ip(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ip(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function _c(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function sp(t){return!!t&&"integerValue"in t}function qm(t){return!!t&&"arrayValue"in t}function n0(t){return!!t&&"nullValue"in t}function r0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Du(t){return!!t&&"mapValue"in t}function xb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function aa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=aa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=aa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Cb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Du(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=aa(n)}setAll(e){let n=dt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=aa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Du(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Du(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ot(aa(this.value))}}function GI(t){const e=[];return Wi(t.fields,(n,r)=>{const i=new dt([n]);if(Du(r)){const s=GI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Zt(e)}/**
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
 */class st{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new st(e,0,te.min(),te.min(),te.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,i){return new st(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new st(e,2,n,te.min(),te.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,te.min(),te.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hs{constructor(e,n){this.position=e,this.inclusive=n}}function i0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=qs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function s0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ba{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ab(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class HI{}class Qe extends HI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Rb(e,n,r):n==="array-contains"?new bb(e,r):n==="in"?new Db(e,r):n==="not-in"?new Ob(e,r):n==="array-contains-any"?new Mb(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Pb(e,r):new Nb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qs(n,this.value)):n!==null&&Oi(this.value)===Oi(n)&&this.matchesComparison(qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Cn extends HI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Cn(e,n)}matches(e){return KI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function KI(t){return t.op==="and"}function QI(t){return kb(t)&&KI(t)}function kb(t){for(const e of t.filters)if(e instanceof Cn)return!1;return!0}function op(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+Gs(t.value);if(QI(t))return t.filters.map(e=>op(e)).join(",");{const e=t.filters.map(n=>op(n)).join(",");return`${t.op}(${e})`}}function YI(t,e){return t instanceof Qe?function(r,i){return i instanceof Qe&&r.op===i.op&&r.field.isEqual(i.field)&&jn(r.value,i.value)}(t,e):t instanceof Cn?function(r,i){return i instanceof Cn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&YI(o,i.filters[a]),!0):!1}(t,e):void ee()}function XI(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Gs(n.value)}`}(t):t instanceof Cn?function(n){return n.op.toString()+" {"+n.getFilters().map(XI).join(" ,")+"}"}(t):"Filter"}class Rb extends Qe{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class Pb extends Qe{constructor(e,n){super(e,"in",n),this.keys=JI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Nb extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=JI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function JI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class bb extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qm(n)&&za(n.arrayValue,this.value)}}class Db extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&za(this.value.arrayValue,n)}}class Ob extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!za(this.value.arrayValue,n)}}class Mb extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>za(this.value.arrayValue,r))}}/**
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
 */class Lb{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function o0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Lb(t,e,n,r,i,s,o)}function Gm(t){const e=re(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>op(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),hl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gs(r)).join(",")),e.ue=n}return e.ue}function Hm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ab(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!YI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!s0(t.startAt,e.startAt)&&s0(t.endAt,e.endAt)}function ap(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ni{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Vb(t,e,n,r,i,s,o,a){return new ni(t,e,n,r,i,s,o,a)}function ch(t){return new ni(t)}function a0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Km(t){return t.collectionGroup!==null}function Rs(t){const e=re(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new pt(dt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ba(s,r))}),n.has(dt.keyField().canonicalString())||e.ce.push(new Ba(dt.keyField(),r))}return e.ce}function Ln(t){const e=re(t);return e.le||(e.le=ZI(e,Rs(t))),e.le}function jb(t){const e=re(t);return e.he||(e.he=ZI(e,t.explicitOrderBy)),e.he}function ZI(t,e){if(t.limitType==="F")return o0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ba(i.field,s)});const n=t.endAt?new Hs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Hs(t.startAt.position,t.startAt.inclusive):null;return o0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function lp(t,e){const n=t.filters.concat([e]);return new ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yc(t,e,n){return new ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hh(t,e){return Hm(Ln(t),Ln(e))&&t.limitType===e.limitType}function eS(t){return`${Gm(Ln(t))}|lt:${t.limitType}`}function is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>XI(i)).join(", ")}]`),hl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Gs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Gs(i)).join(",")),`Target(${r})`}(Ln(t))}; limitType=${t.limitType})`}function dh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Rs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=i0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Rs(r),i)||r.endAt&&!function(o,a,u){const c=i0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Rs(r),i))}(t,e)}function Fb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function tS(t){return(e,n)=>{let r=!1;for(const i of Rs(t)){const s=Ub(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ub(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?qs(u,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */class ao{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return WI(this.inner)}size(){return this.innerSize}}/**
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
 */const zb=new Ye(J.comparator);function ur(){return zb}const nS=new Ye(J.comparator);function Qo(...t){let e=nS;for(const n of t)e=e.insert(n.key,n);return e}function rS(t){let e=nS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yi(){return la()}function iS(){return la()}function la(){return new ao(t=>t.toString(),(t,e)=>t.isEqual(e))}const Bb=new Ye(J.comparator),$b=new pt(J.comparator);function he(...t){let e=$b;for(const n of t)e=e.add(n);return e}const Wb=new pt(_e);function qb(){return Wb}/**
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
 */function Qm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(e)?"-0":e}}function sS(t){return{integerValue:""+t}}function oS(t,e){return Eb(e)?sS(e):Qm(t,e)}/**
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
 */class fh{constructor(){this._=void 0}}function Gb(t,e,n){return t instanceof $a?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&uh(s)&&(s=Wm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ks?lS(t,e):t instanceof Wa?uS(t,e):function(i,s){const o=aS(i,s),a=l0(o)+l0(i.Pe);return sp(o)&&sp(i.Pe)?sS(a):Qm(i.serializer,a)}(t,e)}function Hb(t,e,n){return t instanceof Ks?lS(t,e):t instanceof Wa?uS(t,e):n}function aS(t,e){return t instanceof qa?function(r){return sp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class $a extends fh{}class Ks extends fh{constructor(e){super(),this.elements=e}}function lS(t,e){const n=cS(e);for(const r of t.elements)n.some(i=>jn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wa extends fh{constructor(e){super(),this.elements=e}}function uS(t,e){let n=cS(e);for(const r of t.elements)n=n.filter(i=>!jn(i,r));return{arrayValue:{values:n}}}class qa extends fh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function l0(t){return $e(t.integerValue||t.doubleValue)}function cS(t){return qm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Ym{constructor(e,n){this.field=e,this.transform=n}}function Kb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ks&&i instanceof Ks||r instanceof Wa&&i instanceof Wa?Ws(r.elements,i.elements,jn):r instanceof qa&&i instanceof qa?jn(r.Pe,i.Pe):r instanceof $a&&i instanceof $a}(t.transform,e.transform)}class Qb{constructor(e,n){this.version=e,this.transformResults=n}}class Mt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mt}static exists(e){return new Mt(void 0,e)}static updateTime(e){return new Mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ou(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ph{}function hS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xm(t.key,Mt.none()):new dl(t.key,t.data,Mt.none());{const n=t.data,r=Ot.empty();let i=new pt(dt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ri(t.key,r,new Zt(i.toArray()),Mt.none())}}function Yb(t,e,n){t instanceof dl?function(i,s,o){const a=i.value.clone(),u=c0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ri?function(i,s,o){if(!Ou(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=c0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(dS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ua(t,e,n,r){return t instanceof dl?function(s,o,a,u){if(!Ou(s.precondition,o))return a;const c=s.value.clone(),f=h0(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ri?function(s,o,a,u){if(!Ou(s.precondition,o))return a;const c=h0(s.fieldTransforms,u,o),f=o.data;return f.setAll(dS(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return Ou(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Xb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=aS(r.transform,i||null);s!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,s))}return n||null}function u0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ws(r,i,(s,o)=>Kb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class dl extends ph{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ri extends ph{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function dS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function c0(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Hb(o,a,n[i]))}return r}function h0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Gb(s,o,e))}return r}class Xm extends ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fS extends ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Jb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Yb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ua(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ua(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=iS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=hS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,(n,r)=>u0(n,r))&&Ws(this.baseMutations,e.baseMutations,(n,r)=>u0(n,r))}}class Jm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=function(){return Bb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Jm(e,n,r,i)}}/**
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
 */class Zb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class eD{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
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
 */class tD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,de;function pS(t){switch(t){default:return ee();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function mS(t){if(t===void 0)return lr("GRPC error has no .code"),j.UNKNOWN;switch(t){case Ge.OK:return j.OK;case Ge.CANCELLED:return j.CANCELLED;case Ge.UNKNOWN:return j.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return j.INTERNAL;case Ge.UNAVAILABLE:return j.UNAVAILABLE;case Ge.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ge.NOT_FOUND:return j.NOT_FOUND;case Ge.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ge.ABORTED:return j.ABORTED;case Ge.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ge.DATA_LOSS:return j.DATA_LOSS;default:return ee()}}(de=Ge||(Ge={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function nD(){return new TextEncoder}/**
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
 */const rD=new Si([4294967295,4294967295],0);function d0(t){const e=nD().encode(t),n=new LI;return n.update(e),new Uint8Array(n.digest())}function f0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Si([n,r],0),new Si([i,s],0)]}class Zm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Yo(`Invalid padding: ${n}`);if(r<0)throw new Yo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Yo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Si.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Si.fromNumber(r)));return i.compare(rD)===1&&(i=new Si([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=d0(e),[r,i]=f0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=d0(e),[r,i]=f0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Yo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,fl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mh(te.min(),i,new Ye(_e),ur(),he())}}class fl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fl(r,n,he(),he(),he())}}/**
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
 */class Mu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class gS{constructor(e,n){this.targetId=e,this.me=n}}class _S{constructor(e,n,r=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class p0{constructor(){this.fe=0,this.ge=g0(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=he(),n=he(),r=he();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new fl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=g0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class iD{constructor(e){this.Le=e,this.Be=new Map,this.ke=ur(),this.qe=m0(),this.Qe=new Ye(_e)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(ap(s))if(r===0){const o=new J(s.path);this.Ue(n,o,st.newNoDocument(o,te.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Di(r).toUint8Array()}catch(u){if(u instanceof qI)return $s("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Zm(o,i,s)}catch(u){return $s(u instanceof Yo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&ap(a.target)){const u=new J(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,st.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=he();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new mh(e,n,this.Qe,this.ke,r);return this.ke=ur(),this.qe=m0(),this.Qe=new Ye(_e),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new p0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new pt(_e),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new p0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function m0(){return new Ye(J.comparator)}function g0(){return new Ye(J.comparator)}const sD={asc:"ASCENDING",desc:"DESCENDING"},oD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aD={and:"AND",or:"OR"};class lD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function up(t,e){return t.useProto3Json||hl(e)?e:{value:e}}function vc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uD(t,e){return vc(t,e.toTimestamp())}function tn(t){return fe(!!t),te.fromTimestamp(function(n){const r=Qr(n);return new et(r.seconds,r.nanos)}(t))}function eg(t,e){return cp(t,e).canonicalString()}function cp(t,e){const n=function(i){return new we(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vS(t){const e=we.fromString(t);return fe(CS(e)),e}function wc(t,e){return eg(t.databaseId,e.path)}function ca(t,e){const n=vS(e);if(n.get(1)!==t.databaseId.projectId)throw new W(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(ES(n))}function wS(t,e){return eg(t.databaseId,e)}function cD(t){const e=vS(t);return e.length===4?we.emptyPath():ES(e)}function hp(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ES(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _0(t,e,n){return{name:wc(t,e),fields:n.value.mapValue.fields}}function hD(t,e){return"found"in e?function(r,i){fe(!!i.found),i.found.name,i.found.updateTime;const s=ca(r,i.found.name),o=tn(i.found.updateTime),a=i.found.createTime?tn(i.found.createTime):te.min(),u=new Ot({mapValue:{fields:i.found.fields}});return st.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){fe(!!i.missing),fe(!!i.readTime);const s=ca(r,i.missing),o=tn(i.readTime);return st.newNoDocument(s,o)}(t,e):ee()}function dD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(fe(f===void 0||typeof f=="string"),gt.fromBase64String(f||"")):(fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),gt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const f=c.code===void 0?j.UNKNOWN:mS(c.code);return new W(f,c.message||"")}(o);n=new _S(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ca(t,r.document.name),s=tn(r.document.updateTime),o=r.document.createTime?tn(r.document.createTime):te.min(),a=new Ot({mapValue:{fields:r.document.fields}}),u=st.newFoundDocument(i,s,o,a),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Mu(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ca(t,r.document),s=r.readTime?tn(r.readTime):te.min(),o=st.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Mu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ca(t,r.document),s=r.removedTargetIds||[];n=new Mu([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new tD(i,s),a=r.targetId;n=new gS(a,o)}}return n}function TS(t,e){let n;if(e instanceof dl)n={update:_0(t,e.key,e.value)};else if(e instanceof Xm)n={delete:wc(t,e.key)};else if(e instanceof ri)n={update:_0(t,e.key,e.data),updateMask:ED(e.fieldMask)};else{if(!(e instanceof fS))return ee();n={verify:wc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof $a)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ks)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof qa)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:uD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function fD(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?tn(i.updateTime):tn(s);return o.isEqual(te.min())&&(o=tn(s)),new Qb(o,i.transformResults||[])}(n,e))):[]}function pD(t,e){return{documents:[wS(t,e.path)]}}function IS(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=wS(t,i);const s=function(c){if(c.length!==0)return xS(Cn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:kr(g.field),direction:yD(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=up(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function mD(t,e,n,r){const{_t:i,parent:s}=IS(t,e),o={},a=[];let u=0;return n.forEach(c=>{const f="aggregate_"+u++;o[f]=c.alias,c.aggregateType==="count"?a.push({alias:f,count:{}}):c.aggregateType==="avg"?a.push({alias:f,avg:{field:kr(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:f,sum:{field:kr(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ut:o,parent:s}}function gD(t){let e=cD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=SS(p);return g instanceof Cn&&QI(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(T){return new Ba(ss(T.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(p){let g;return g=typeof p=="object"?p.value:p,hl(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,y=p.values||[];return new Hs(y,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,y=p.values||[];return new Hs(y,g)}(n.endAt)),Vb(e,i,o,s,a,"F",u,c)}function _D(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function SS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ss(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ss(n.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ss(n.unaryFilter.field);return Qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ss(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(ss(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Cn.create(n.compositeFilter.filters.map(r=>SS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function yD(t){return sD[t]}function vD(t){return oD[t]}function wD(t){return aD[t]}function kr(t){return{fieldPath:t.canonicalString()}}function ss(t){return dt.fromServerFormat(t.fieldPath)}function xS(t){return t instanceof Qe?function(n){if(n.op==="=="){if(r0(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NAN"}};if(n0(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(r0(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NOT_NAN"}};if(n0(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(n.field),op:vD(n.op),value:n.value}}}(t):t instanceof Cn?function(n){const r=n.getFilters().map(i=>xS(i));return r.length===1?r[0]:{compositeFilter:{op:wD(n.op),filters:r}}}(t):ee()}function ED(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function CS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Nr{constructor(e,n,r,i,s=te.min(),o=te.min(),a=gt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class TD{constructor(e){this.ct=e}}function ID(t){const e=gD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yc(e,e.limit,"L"):e}/**
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
 */class SD{constructor(){this.un=new xD}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Kr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Kr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class xD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pt(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pt(we.comparator)).toArray()}}/**
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
 */class Qs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Qs(0)}static kn(){return new Qs(-1)}}/**
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
 */class CD{constructor(){this.changes=new ao(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class AD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class kD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ua(r.mutation,i,Zt.empty(),et.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const i=yi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Qo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=yi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ur();const o=la(),a=function(){return la()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof ri)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),ua(f.mutation,c,f.mutation.getFieldMask(),et.now())):o.set(c.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return a.set(c,new AD(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=la();let i=new Ye((o,a)=>o-a),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Zt.empty();f=a.applyToLocalView(c,f),r.set(u,f);const p=(i.get(a.batchId)||he()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,f=u.value,p=iS();f.forEach(g=>{if(!s.has(g)){const y=hS(n.get(g),r.get(g));y!==null&&p.set(g,y),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Km(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(yi());let a=-1,u=s;return o.next(c=>F.forEach(c,(f,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,he())).next(f=>({batchId:a,changes:rS(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=Qo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Qo();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(p,g){return new ni(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,st.newInvalidDocument(f)))});let a=Qo();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&ua(f.mutation,c,Zt.empty(),et.now()),dh(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class RD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:tn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:ID(i.bundledQuery),readTime:tn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class PD{constructor(){this.overlays=new Ye(J.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yi();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=yi(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ye((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=yi(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const a=yi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>a.set(c,f)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Zb(n,r));let s=this.Ir.get(n);s===void 0&&(s=he(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class ND{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class tg{constructor(){this.Tr=new pt(nt.Er),this.dr=new pt(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new nt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new J(new we([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new J(new we([])),r=new nt(n,e),i=new nt(n,e+1);let s=he();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return J.comparator(e.key,n.key)||_e(e.wr,n.wr)}static Ar(e,n){return _e(e.wr,n.wr)||J.comparator(e.key,n.key)}}/**
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
 */class bD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new pt(nt.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Jb(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(_e);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new nt(new J(s),0);let a=new pt(_e);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new nt(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class DD{constructor(e){this.Mr=e,this.docs=function(){return new Ye(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ur();const o=n.path,a=new J(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||_b(gb(f),r)<=0||(i.has(f.key)||dh(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new OD(this)}getSize(e){return F.resolve(this.size)}}class OD extends CD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class MD{constructor(e){this.persistence=e,this.Nr=new ao(n=>Gm(n),Hm),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new tg,this.targetCount=0,this.kr=Qs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class LD{constructor(e,n){this.qr={},this.overlays={},this.Qr=new $m(0),this.Kr=!1,this.Kr=!0,this.$r=new ND,this.referenceDelegate=e(this),this.Ur=new MD(this),this.indexManager=new SD,this.remoteDocumentCache=function(i){return new DD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new TD(n),this.Gr=new RD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new bD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new VD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class VD extends vb{constructor(e){super(),this.currentSequenceNumber=e}}class ng{constructor(e){this.persistence=e,this.Jr=new tg,this.Yr=null}static Zr(e){return new ng(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=J.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class rg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=he(),i=he();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rg(e,n.fromCache,r,i)}}/**
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
 */class jD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class FD{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return F1()?8:wb(kt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new jD;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(jo()<=ce.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(jo()<=ce.DEBUG&&Y("QueryEngine","Query:",is(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(jo()<=ce.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(n))):F.resolve())}Yi(e,n){if(a0(n))return F.resolve(null);let r=Ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yc(n,null,"F"),r=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,yc(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return a0(n)||i.isEqual(te.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(jo()<=ce.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),is(n)),this.rs(e,o,n,mb(i,-1)).next(a=>a))})}ts(e,n){let r=new pt(tS(e));return n.forEach((i,s)=>{dh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return jo()<=ce.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",is(n)),this.Ji.getDocumentsMatchingQuery(e,n,Kr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class UD{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ye(_e),this._s=new ao(s=>Gm(s),Hm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function zD(t,e,n,r){return new UD(t,e,n,r)}async function AS(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=he();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){a.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function BD(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,f){const p=c.batch,g=p.keys();let y=F.resolve();return g.forEach(T=>{y=y.next(()=>f.getEntry(u,T)).next(k=>{const N=c.docVersions.get(T);fe(N!==null),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),f.addEntry(k)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=he();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function kS(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function $D(t,e){const n=re(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let y=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(gt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),i=i.insert(p,y),function(k,N,x){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,y,f)&&a.push(n.Ur.updateTargetData(s,y))});let u=ur(),c=he();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(WD(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(te.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function WD(t,e,n){let r=he(),i=he();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ur();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function qD(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GD(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function dp(t,e,n){const r=re(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!cl(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function y0(t,e,n){const r=re(t);let i=te.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=re(u),g=p._s.get(f);return g!==void 0?F.resolve(p.os.get(g)):p.Ur.getTargetData(c,f)}(r,o,Ln(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:he())).next(a=>(HD(r,Fb(e),a),{documents:a,Ts:s})))}function HD(t,e,n){let r=t.us.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class v0{constructor(){this.activeTargetIds=qb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KD{constructor(){this.so=new v0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new v0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QD{_o(e){}shutdown(){}}/**
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
 */class w0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let uu=null;function Fd(){return uu===null?uu=function(){return 268435456+Math.round(2147483648*Math.random())}():uu++,"0x"+uu.toString(16)}/**
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
 */const YD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class XD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Tt="WebChannelConnection";class JD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Fd(),u=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(Y("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw $s("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=YD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Fd();return new Promise((o,a)=>{const u=new VI;u.setWithCredentials(!0),u.listenOnce(jI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case bu.NO_ERROR:const f=u.getResponseJson();Y(Tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case bu.TIMEOUT:Y(Tt,`RPC '${e}' ${s} timed out`),a(new W(j.DEADLINE_EXCEEDED,"Request time out"));break;case bu.HTTP_ERROR:const p=u.getStatus();if(Y(Tt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const T=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(x)>=0?x:j.UNKNOWN}(y.status);a(new W(T,y.message))}else a(new W(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new W(j.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{Y(Tt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Y(Tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Fd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zI(),a=UI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");Y(Tt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let g=!1,y=!1;const T=new XD({Io:N=>{y?Y(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(g||(Y(Tt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),Y(Tt,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),k=(N,x,E)=>{N.listen(x,C=>{try{E(C)}catch(D){setTimeout(()=>{throw D},0)}})};return k(p,Ko.EventType.OPEN,()=>{y||(Y(Tt,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),k(p,Ko.EventType.CLOSE,()=>{y||(y=!0,Y(Tt,`RPC '${e}' stream ${i} transport closed`),T.So())}),k(p,Ko.EventType.ERROR,N=>{y||(y=!0,$s(Tt,`RPC '${e}' stream ${i} transport errored:`,N),T.So(new W(j.UNAVAILABLE,"The operation could not be completed")))}),k(p,Ko.EventType.MESSAGE,N=>{var x;if(!y){const E=N.data[0];fe(!!E);const C=E,D=C.error||((x=C[0])===null||x===void 0?void 0:x.error);if(D){Y(Tt,`RPC '${e}' stream ${i} received error:`,D);const O=D.status;let V=function(w){const S=Ge[w];if(S!==void 0)return mS(S)}(O),I=D.message;V===void 0&&(V=j.INTERNAL,I="Unknown error status: "+O+" with message "+D.message),y=!0,T.So(new W(V,I)),p.close()}else Y(Tt,`RPC '${e}' stream ${i} received:`,E),T.bo(E)}}),k(a,FI.STAT_EVENT,N=>{N.stat===np.PROXY?Y(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===np.NOPROXY&&Y(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function Ud(){return typeof document<"u"?document:null}/**
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
 */function gh(t){return new lD(t,!0)}/**
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
 */class ig{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class RS{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ig(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(lr(n.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZD extends RS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=dD(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?tn(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=hp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=ap(u)?{documents:pD(s,u)}:{query:IS(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=yS(s,o.resumeToken);const c=up(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=vc(s,o.snapshotVersion.toTimestamp());const c=up(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=_D(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=hp(this.serializer),n.removeTarget=e,this.a_(n)}}class e2 extends RS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=fD(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=hp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TS(this.serializer,r))};this.a_(n)}}/**
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
 */class t2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,cp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,cp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class n2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(lr(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class r2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{qi(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=re(u);c.L_.add(4),await pl(c),c.q_.set("Unknown"),c.L_.delete(4),await _h(c)}(this))})}),this.q_=new n2(r,i)}}async function _h(t){if(qi(t))for(const e of t.B_)await e(!0)}async function pl(t){for(const e of t.B_)await e(!1)}function PS(t,e){const n=re(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),lg(n)?ag(n):lo(n).r_()&&og(n,e))}function sg(t,e){const n=re(t),r=lo(n);n.N_.delete(e),r.r_()&&NS(n,e),n.N_.size===0&&(r.r_()?r.o_():qi(n)&&n.q_.set("Unknown"))}function og(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}lo(t).A_(e)}function NS(t,e){t.Q_.xe(e),lo(t).R_(e)}function ag(t){t.Q_=new iD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),lo(t).start(),t.q_.v_()}function lg(t){return qi(t)&&!lo(t).n_()&&t.N_.size>0}function qi(t){return re(t).L_.size===0}function bS(t){t.Q_=void 0}async function i2(t){t.q_.set("Online")}async function s2(t){t.N_.forEach((e,n)=>{og(t,e)})}async function o2(t,e){bS(t),lg(t)?(t.q_.M_(e),ag(t)):t.q_.set("Unknown")}async function a2(t,e,n){if(t.q_.set("Online"),e instanceof _S&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ec(t,r)}else if(e instanceof Mu?t.Q_.Ke(e):e instanceof gS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await kS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(gt.EMPTY_BYTE_STRING,f.snapshotVersion)),NS(s,u);const p=new Nr(f.target,u,c,f.sequenceNumber);og(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Ec(t,r)}}async function Ec(t,e,n){if(!cl(e))throw e;t.L_.add(1),await pl(t),t.q_.set("Offline"),n||(n=()=>kS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await _h(t)})}function DS(t,e){return e().catch(n=>Ec(t,n,e))}async function yh(t){const e=re(t),n=Yr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;l2(e);)try{const i=await qD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,u2(e,i)}catch(i){await Ec(e,i)}OS(e)&&MS(e)}function l2(t){return qi(t)&&t.O_.length<10}function u2(t,e){t.O_.push(e);const n=Yr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function OS(t){return qi(t)&&!Yr(t).n_()&&t.O_.length>0}function MS(t){Yr(t).start()}async function c2(t){Yr(t).p_()}async function h2(t){const e=Yr(t);for(const n of t.O_)e.m_(n.mutations)}async function d2(t,e,n){const r=t.O_.shift(),i=Jm.from(r,e,n);await DS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await yh(t)}async function f2(t,e){e&&Yr(t).V_&&await async function(r,i){if(function(o){return pS(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();Yr(r).s_(),await DS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await yh(r)}}(t,e),OS(t)&&MS(t)}async function E0(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=qi(n);n.L_.add(3),await pl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await _h(n)}async function p2(t,e){const n=re(t);e?(n.L_.delete(2),await _h(n)):e||(n.L_.add(2),await pl(n),n.q_.set("Unknown"))}function lo(t){return t.K_||(t.K_=function(n,r,i){const s=re(n);return s.w_(),new ZD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:i2.bind(null,t),Ro:s2.bind(null,t),mo:o2.bind(null,t),d_:a2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),lg(t)?ag(t):t.q_.set("Unknown")):(await t.K_.stop(),bS(t))})),t.K_}function Yr(t){return t.U_||(t.U_=function(n,r,i){const s=re(n);return s.w_(),new e2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:c2.bind(null,t),mo:f2.bind(null,t),f_:h2.bind(null,t),g_:d2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await yh(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class ug{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ug(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cg(t,e){if(lr("AsyncQueue",`${e}: ${t}`),cl(t))return new W(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ps{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Qo(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new Ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class T0{constructor(){this.W_=new Ye(J.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ys{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ys(e,n,Ps.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class m2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class g2{constructor(){this.queries=I0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=re(n),s=i.queries;i.queries=I0(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new W(j.ABORTED,"Firestore shutting down"))}}function I0(){return new ao(t=>eS(t),hh)}async function hg(t,e){const n=re(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new m2,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=cg(o,`Initialization of query '${is(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&fg(n)}async function dg(t,e){const n=re(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _2(t,e){const n=re(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&fg(n)}function y2(t,e,n){const r=re(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function fg(t){t.Y_.forEach(e=>{e.next()})}var fp,S0;(S0=fp||(fp={})).ea="default",S0.Cache="cache";class pg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==fp.Cache}}/**
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
 */class LS{constructor(e){this.key=e}}class VS{constructor(e){this.key=e}}class v2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=he(),this.mutatedKeys=he(),this.Aa=tS(e),this.Ra=new Ps(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new T0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),y=dh(this.query,p)?p:null,T=!!g&&this.mutatedKeys.has(g.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let N=!1;g&&y?g.data.isEqual(y.data)?T!==k&&(r.track({type:3,doc:y}),N=!0):this.ga(g,y)||(r.track({type:2,doc:y}),N=!0,(u&&this.Aa(y,u)>0||c&&this.Aa(y,c)<0)&&(a=!0)):!g&&y?(r.track({type:0,doc:y}),N=!0):g&&!y&&(r.track({type:1,doc:g}),N=!0,(u||c)&&(a=!0)),N&&(y?(o=o.add(y),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(y,T){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return k(y)-k(T)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Ys(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new T0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=he(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new VS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new LS(r))}),n}ba(e){this.Ta=e.Ts,this.da=he();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ys.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class w2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class E2{constructor(e){this.key=e,this.va=!1}}class T2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ao(a=>eS(a),hh),this.Ma=new Map,this.xa=new Set,this.Oa=new Ye(J.comparator),this.Na=new Map,this.La=new tg,this.Ba={},this.ka=new Map,this.qa=Qs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function I2(t,e,n=!0){const r=$S(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await jS(r,e,n,!0),i}async function S2(t,e){const n=$S(t);await jS(n,e,!0,!1)}async function jS(t,e,n,r){const i=await GD(t.localStore,Ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await x2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&PS(t.remoteStore,i),a}async function x2(t,e,n,r,i){t.Ka=(p,g,y)=>async function(k,N,x,E){let C=N.view.ma(x);C.ns&&(C=await y0(k.localStore,N.query,!1).then(({documents:I})=>N.view.ma(I,C)));const D=E&&E.targetChanges.get(N.targetId),O=E&&E.targetMismatches.get(N.targetId)!=null,V=N.view.applyChanges(C,k.isPrimaryClient,D,O);return C0(k,N.targetId,V.wa),V.snapshot}(t,p,g,y);const s=await y0(t.localStore,e,!0),o=new v2(e,s.Ts),a=o.ma(s.documents),u=fl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);C0(t,n,c.wa);const f=new w2(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function C2(t,e,n){const r=re(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!hh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await dp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&sg(r.remoteStore,i.targetId),pp(r,i.targetId)}).catch(ul)):(pp(r,i.targetId),await dp(r.localStore,i.targetId,!0))}async function A2(t,e){const n=re(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sg(n.remoteStore,r.targetId))}async function k2(t,e,n){const r=M2(t);try{const i=await function(o,a){const u=re(o),c=et.now(),f=a.reduce((y,T)=>y.add(T.key),he());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let T=ur(),k=he();return u.cs.getEntries(y,f).next(N=>{T=N,T.forEach((x,E)=>{E.isValidDocument()||(k=k.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,T)).next(N=>{p=N;const x=[];for(const E of a){const C=Xb(E,p.get(E.key).overlayedDocument);C!=null&&x.push(new ri(E.key,C,GI(C.value.mapValue),Mt.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,x,a)}).next(N=>{g=N;const x=N.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(y,N.batchId,x)})}).then(()=>({batchId:g.batchId,changes:rS(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ye(_e)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ml(r,i.changes),await yh(r.remoteStore)}catch(i){const s=cg(i,"Failed to persist write");n.reject(s)}}async function FS(t,e){const n=re(t);try{const r=await $D(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?fe(o.va):i.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await ml(n,r,e)}catch(r){await ul(r)}}function x0(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=re(o);u.onlineState=a;let c=!1;u.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(a)&&(c=!0)}),c&&fg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function R2(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ye(J.comparator);o=o.insert(s,st.newNoDocument(s,te.min()));const a=he().add(s),u=new mh(te.min(),new Map,new Ye(_e),o,a);await FS(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),mg(r)}else await dp(r.localStore,e,!1).then(()=>pp(r,e,n)).catch(ul)}async function P2(t,e){const n=re(t),r=e.batch.batchId;try{const i=await BD(n.localStore,e);zS(n,r,null),US(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ml(n,i)}catch(i){await ul(i)}}async function N2(t,e,n){const r=re(t);try{const i=await function(o,a){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(fe(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);zS(r,e,n),US(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ml(r,i)}catch(i){await ul(i)}}function US(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function zS(t,e,n){const r=re(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function pp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||BS(t,r)})}function BS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(sg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),mg(t))}function C0(t,e,n){for(const r of n)r instanceof LS?(t.La.addReference(r.key,e),b2(t,r)):r instanceof VS?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||BS(t,r.key)):ee()}function b2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.xa.add(r),mg(t))}function mg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new J(we.fromString(e)),r=t.qa.next();t.Na.set(r,new E2(n)),t.Oa=t.Oa.insert(n,r),PS(t.remoteStore,new Nr(Ln(ch(n.path)),r,"TargetPurposeLimboResolution",$m.oe))}}async function ml(t,e,n){const r=re(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=rg.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=re(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,g=>F.forEach(g.$i,y=>f.persistence.referenceDelegate.addReference(p,g.targetId,y)).next(()=>F.forEach(g.Ui,y=>f.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))}catch(p){if(!cl(p))throw p;Y("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const y=f.os.get(g),T=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(T);f.os=f.os.insert(g,k)}}}(r.localStore,s))}async function D2(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await AS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new W(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ml(n,r.hs)}}function O2(t,e){const n=re(t),r=n.Na.get(e);if(r&&r.va)return he().add(r.key);{let i=he();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function $S(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=FS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=O2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=R2.bind(null,e),e.Ca.d_=_2.bind(null,e.eventManager),e.Ca.$a=y2.bind(null,e.eventManager),e}function M2(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=P2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=N2.bind(null,e),e}class Tc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return zD(this.persistence,new FD,e.initialUser,this.serializer)}Ga(e){return new LD(ng.Zr,this.serializer)}Wa(e){return new KD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tc.provider={build:()=>new Tc};class mp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>x0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=D2.bind(null,this.syncEngine),await p2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new g2}()}createDatastore(e){const n=gh(e.databaseInfo.databaseId),r=function(s){return new JD(s)}(e.databaseInfo);return function(s,o,a,u){return new t2(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new r2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>x0(this.syncEngine,n,0),function(){return w0.D()?new w0:new QD}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,f){const p=new T2(i,s,o,a,u,c);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=re(i);Y("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await pl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}mp.provider={build:()=>new mp};/**
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
 */class gg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):lr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class L2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new W(j.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=re(i),a={documents:s.map(p=>wc(o.serializer,p))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,we.emptyPath(),a,s.length),c=new Map;u.forEach(p=>{const g=hD(o.serializer,p);c.set(g.key.toString(),g)});const f=[];return s.forEach(p=>{const g=c.get(p.toString());fe(!!g),f.push(g)}),f}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Xm(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=J.fromPath(r);this.mutations.push(new fS(i,this.precondition(i)))}),await async function(r,i){const s=re(r),o={writes:i.map(a=>TS(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,we.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ee();n=te.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new W(j.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(te.min())?Mt.exists(!1):Mt.updateTime(n):Mt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(te.min()))throw new W(j.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Mt.updateTime(n)}return Mt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class V2{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new ig(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new L2(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!hl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!pS(n)}return!1}}/**
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
 */class j2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=$I.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zd(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await AS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function A0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await F2(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>E0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>E0(e.remoteStore,i)),t._onlineComponents=e}async function F2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await zd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;$s("Error using user provided cache. Falling back to memory cache: "+n),await zd(t,new Tc)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await zd(t,new Tc);return t._offlineComponents}async function _g(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await A0(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await A0(t,new mp))),t._onlineComponents}function U2(t){return _g(t).then(e=>e.syncEngine)}function WS(t){return _g(t).then(e=>e.datastore)}async function Ic(t){const e=await _g(t),n=e.eventManager;return n.onListen=I2.bind(null,e.syncEngine),n.onUnlisten=C2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=S2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=A2.bind(null,e.syncEngine),n}function z2(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const f=new gg({next:g=>{f.Za(),o.enqueueAndForget(()=>dg(s,p));const y=g.docs.has(a);!y&&g.fromCache?c.reject(new W(j.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&u&&u.source==="server"?c.reject(new W(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new pg(ch(a.path),f,{includeMetadataChanges:!0,_a:!0});return hg(s,p)}(await Ic(t),t.asyncQueue,e,n,r)),r.promise}function B2(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const f=new gg({next:g=>{f.Za(),o.enqueueAndForget(()=>dg(s,p)),g.fromCache&&u.source==="server"?c.reject(new W(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new pg(a,f,{includeMetadataChanges:!0,_a:!0});return hg(s,p)}(await Ic(t),t.asyncQueue,e,n,r)),r.promise}function $2(t,e,n){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await WS(t);r.resolve(async function(o,a,u){var c;const f=re(o),{request:p,ut:g,parent:y}=mD(f.serializer,jb(a),u);f.connection.Fo||delete p.parent;const T=(await f.Lo("RunAggregationQuery",f.serializer.databaseId,y,p,1)).filter(N=>!!N.result);fe(T.length===1);const k=(c=T[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(k).reduce((N,x)=>(N[g[x]]=k[x],N),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}/**
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
 */function qS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const k0=new Map;/**
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
 */function yg(t,e,n){if(!n)throw new W(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function W2(t,e,n,r){if(e===!0&&r===!0)throw new W(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function R0(t){if(!J.isDocumentKey(t))throw new W(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function P0(t){if(J.isDocumentKey(t))throw new W(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vh(t);throw new W(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function q2(t,e){if(e<=0)throw new W(j.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class N0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}W2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new N0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new N0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ob;switch(r.type){case"firstParty":return new cb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=k0.get(n);r&&(Y("ComponentProvider","Removing Datastore"),k0.delete(n),r.terminate())}(this),Promise.resolve()}}function G2(t,e,n,r={}){var i;const s=(t=Gt(t,gl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=It.MOCK_USER;else{a=XT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new It(c)}t._authCredentials=new ab(new BI(a,u))}}/**
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
 */class An{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new An(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class $r extends An{constructor(e,n,r){super(e,n,ch(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new J(e))}withConverter(e){return new $r(this.firestore,e,this._path)}}function uo(t,e,...n){if(t=Me(t),yg("collection","path",e),t instanceof gl){const r=we.fromString(e,...n);return P0(r),new $r(t,null,r)}{if(!(t instanceof Ct||t instanceof $r))throw new W(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return P0(r),new $r(t.firestore,null,r)}}function H2(t,e){if(t=Gt(t,gl),yg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new W(j.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new An(t,null,function(r){return new ni(we.emptyPath(),r)}(e))}function lt(t,e,...n){if(t=Me(t),arguments.length===1&&(e=$I.newId()),yg("doc","path",e),t instanceof gl){const r=we.fromString(e,...n);return R0(r),new Ct(t,null,new J(r))}{if(!(t instanceof Ct||t instanceof $r))throw new W(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return R0(r),new Ct(t.firestore,t instanceof $r?t.converter:null,new J(r))}}/**
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
 */class b0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ig(this,"async_queue_retry"),this.Vu=()=>{const r=Ud();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Ud();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Ud();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new In;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!cl(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw lr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=ug.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function D0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class cr extends gl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new b0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new b0(e),this._firestoreClient=void 0,await e}}}function K2(t,e){const n=typeof t=="object"?t:Pm(),r=typeof t=="string"?t:"(default)",i=sh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=KT("firestore");s&&G2(i,...s)}return i}function co(t){if(t._terminated)throw new W(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Q2(t),t._firestoreClient}function Q2(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,f){return new Sb(a,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,qS(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new j2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Y2{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class X2{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Mi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mi(gt.fromBase64String(e))}catch(n){throw new W(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mi(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class wh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ho{constructor(e){this._methodName=e}}/**
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
 */class vg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */class wg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const J2=/^__.*__$/;class Z2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new dl(e,this.data,n,this.fieldTransforms)}}class GS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ri(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function HS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Eh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Eh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Sc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(HS(this.Cu)&&J2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class eO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gh(e)}Qu(e,n,r,i=!1){return new Eh({Cu:e,methodName:n,qu:r,path:dt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _l(t){const e=t._freezeSettings(),n=gh(t._databaseId);return new eO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Eg(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);xg("Data must be an object, but it was:",o,r);const a=QS(r,o);let u,c;if(s.merge)u=new Zt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=gp(e,p,n);if(!o.contains(g))throw new W(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);XS(f,g)||f.push(g)}u=new Zt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new Z2(new Ot(a),u,c)}class Th extends ho{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Th}}function tO(t,e,n){return new Eh({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Tg extends ho{_toFieldTransform(e){return new Ym(e.path,new $a)}isEqual(e){return e instanceof Tg}}class Ig extends ho{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=tO(this,e,!0),r=this.Ku.map(s=>fo(s,n)),i=new Ks(r);return new Ym(e.path,i)}isEqual(e){return e instanceof Ig&&Oa(this.Ku,e.Ku)}}class Sg extends ho{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new qa(e.serializer,oS(e.serializer,this.$u));return new Ym(e.path,n)}isEqual(e){return e instanceof Sg&&this.$u===e.$u}}function nO(t,e,n,r){const i=t.Qu(1,e,n);xg("Data must be an object, but it was:",i,r);const s=[],o=Ot.empty();Wi(r,(u,c)=>{const f=Cg(e,u,n);c=Me(c);const p=i.Nu(f);if(c instanceof Th)s.push(f);else{const g=fo(c,p);g!=null&&(s.push(f),o.set(f,g))}});const a=new Zt(s);return new GS(o,a,i.fieldTransforms)}function rO(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[gp(e,r,n)],u=[i];if(s.length%2!=0)throw new W(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(gp(e,s[g])),u.push(s[g+1]);const c=[],f=Ot.empty();for(let g=a.length-1;g>=0;--g)if(!XS(c,a[g])){const y=a[g];let T=u[g];T=Me(T);const k=o.Nu(y);if(T instanceof Th)c.push(y);else{const N=fo(T,k);N!=null&&(c.push(y),f.set(y,N))}}const p=new Zt(c);return new GS(f,p,o.fieldTransforms)}function KS(t,e,n,r=!1){return fo(n,t.Qu(r?4:3,e))}function fo(t,e){if(YS(t=Me(t)))return xg("Unsupported field value:",e,t),QS(t,e);if(t instanceof ho)return function(r,i){if(!HS(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=fo(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return oS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=et.fromDate(r);return{timestampValue:vc(i.serializer,s)}}if(r instanceof et){const s=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vc(i.serializer,s)}}if(r instanceof vg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mi)return{bytesValue:yS(i.serializer,r._byteString)};if(r instanceof Ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:eg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof wg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Qm(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${vh(r)}`)}(t,e)}function QS(t,e){const n={};return WI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wi(t,(r,i)=>{const s=fo(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function YS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof vg||t instanceof Mi||t instanceof Ct||t instanceof ho||t instanceof wg)}function xg(t,e,n){if(!YS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=vh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function gp(t,e,n){if((e=Me(e))instanceof wh)return e._internalPath;if(typeof e=="string")return Cg(t,e);throw Sc("Field path arguments must be of type string or ",t,!1,void 0,n)}const iO=new RegExp("[~\\*/\\[\\]]");function Cg(t,e,n){if(e.search(iO)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wh(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(j.INVALID_ARGUMENT,a+t+u)}function XS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ga{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ih("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sO extends Ga{data(){return super.data()}}function Ih(t,e){return typeof e=="string"?Cg(t,e):e instanceof wh?e._internalPath:e._delegate._internalPath}/**
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
 */function JS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ag{}class Sh extends Ag{}function xh(t,e,...n){let r=[];e instanceof Ag&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof kg).length,a=s.filter(u=>u instanceof Ch).length;if(o>1||o>0&&a>0)throw new W(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ch extends Sh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ch(e,n,r)}_apply(e){const n=this._parse(e);return ex(e._query,n),new An(e.firestore,e.converter,lp(e._query,n))}_parse(e){const n=_l(e.firestore);return function(s,o,a,u,c,f,p){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){M0(p,f);const y=[];for(const T of p)y.push(O0(u,s,T));g={arrayValue:{values:y}}}else g=O0(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||M0(p,f),g=KS(a,o,p,f==="in"||f==="not-in");return Qe.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function _p(t,e,n){const r=e,i=Ih("where",t);return Ch._create(i,r,n)}class kg extends Ag{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new kg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)ex(o,u),o=lp(o,u)}(e._query,n),new An(e.firestore,e.converter,lp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Rg extends Sh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Rg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ba(s,o)}(e._query,this._field,this._direction);return new An(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ni(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Pg(t,e="asc"){const n=e,r=Ih("orderBy",t);return Rg._create(r,n)}class Ng extends Sh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ng(e,n,r)}_apply(e){return new An(e.firestore,e.converter,yc(e._query,this._limit,this._limitType))}}function ZS(t){return q2("limit",t),Ng._create("limit",t,"F")}class bg extends Sh{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new bg(e,n,r)}_apply(e){const n=aO(e,this.type,this._docOrFields,this._inclusive);return new An(e.firestore,e.converter,function(i,s){return new ni(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function oO(...t){return bg._create("startAfter",t,!1)}function aO(t,e,n,r){if(n[0]=Me(n[0]),n[0]instanceof Ga)return function(s,o,a,u,c){if(!u)throw new W(j.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const f=[];for(const p of Rs(s))if(p.field.isKeyField())f.push(_c(o,u.key));else{const g=u.data.field(p.field);if(uh(g))throw new W(j.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const y=p.field.canonicalString();throw new W(j.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}f.push(g)}return new Hs(f,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=_l(t.firestore);return function(o,a,u,c,f,p){const g=o.explicitOrderBy;if(f.length>g.length)throw new W(j.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let T=0;T<f.length;T++){const k=f[T];if(g[T].field.isKeyField()){if(typeof k!="string")throw new W(j.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!Km(o)&&k.indexOf("/")!==-1)throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const N=o.path.child(we.fromString(k));if(!J.isDocumentKey(N))throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const x=new J(N);y.push(_c(a,x))}else{const N=KS(u,c,k);y.push(N)}}return new Hs(y,p)}(t._query,t.firestore._databaseId,i,e,n,r)}}function O0(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new W(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Km(e)&&n.indexOf("/")!==-1)throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!J.isDocumentKey(r))throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _c(t,new J(r))}if(n instanceof Ct)return _c(t,n._key);throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vh(n)}.`)}function M0(t,e){if(!Array.isArray(t)||t.length===0)throw new W(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ex(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class tx{convertValue(e,n="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Wi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>$e(o.doubleValue));return new wg(s)}convertGeoPoint(e){return new vg($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fa(e));default:return null}}convertTimestamp(e){const n=Qr(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);fe(CS(r));const i=new Ua(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||lr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Dg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class lO extends tx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function uO(){return new Y2("count")}/**
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
 */class ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Og extends Ga{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ih("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Lu extends Og{data(e={}){return super.data(e)}}class nx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ys(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Lu(this._firestore,this._userDataWriter,r.key,r,new ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Lu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ys(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Lu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ys(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:cO(a.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
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
 */function Li(t){t=Gt(t,Ct);const e=Gt(t.firestore,cr);return z2(co(e),t._key).then(n=>ix(e,t,n))}class yl extends tx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function Mg(t){t=Gt(t,An);const e=Gt(t.firestore,cr),n=co(e),r=new yl(e);return JS(t._query),B2(n,t._query).then(i=>new nx(e,r,t,i))}function Gi(t,e,n){t=Gt(t,Ct);const r=Gt(t.firestore,cr),i=Dg(t.converter,e,n);return rx(r,[Eg(_l(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Mt.none())])}function hO(t,e){const n=Gt(t.firestore,cr),r=lt(t),i=Dg(t.converter,e);return rx(n,[Eg(_l(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Mt.exists(!1))]).then(()=>r)}function Ah(t,...e){var n,r,i;t=Me(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||D0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(D0(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,f;if(t instanceof Ct)c=Gt(t.firestore,cr),f=ch(t._key.path),u={next:p=>{e[o]&&e[o](ix(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Gt(t,An);c=Gt(p.firestore,cr),f=p._query;const g=new yl(c);u={next:y=>{e[o]&&e[o](new nx(c,g,p,y))},error:e[o+1],complete:e[o+2]},JS(t._query)}return function(g,y,T,k){const N=new gg(k),x=new pg(y,N,T);return g.asyncQueue.enqueueAndForget(async()=>hg(await Ic(g),x)),()=>{N.Za(),g.asyncQueue.enqueueAndForget(async()=>dg(await Ic(g),x))}}(co(c),f,a,u)}function rx(t,e){return function(r,i){const s=new In;return r.asyncQueue.enqueueAndForget(async()=>k2(await U2(r),i,s)),s.promise}(co(t),e)}function ix(t,e,n){const r=n.docs.get(e._key),i=new yl(t);return new Og(t,i,e._key,r,new ys(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function dO(t){return fO(t,{count:uO()})}function fO(t,e){const n=Gt(t.firestore,cr),r=co(n),i=Tb(e,(s,o)=>new eD(o,s.aggregateType,s._internalFieldPath));return $2(r,t._query,i).then(s=>function(a,u,c){const f=new yl(a);return new X2(u,f,c)}(n,t,s))}/**
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
 */const pO={maxAttempts:5};function Fo(t,e){if((t=Me(t)).firestore!==e)throw new W(j.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class mO extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=_l(n)}get(n){const r=Fo(n,this._firestore),i=new lO(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return ee();const o=s[0];if(o.isFoundDocument())return new Ga(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Ga(this._firestore,i,r._key,null,r.converter);throw ee()})}set(n,r,i){const s=Fo(n,this._firestore),o=Dg(s.converter,r,i),a=Eg(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Fo(n,this._firestore);let a;return a=typeof(r=Me(r))=="string"||r instanceof wh?rO(this._dataReader,"Transaction.update",o._key,r,i,s):nO(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Fo(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Fo(e,this._firestore),r=new yl(this._firestore);return super.get(e).then(i=>new Og(this._firestore,r,n._key,i._document,new ys(!1,!1),n.converter))}}function gO(t,e,n){t=Gt(t,cr);const r=Object.assign(Object.assign({},pO),n);return function(s){if(s.maxAttempts<1)throw new W(j.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new In;return s.asyncQueue.enqueueAndForget(async()=>{const c=await WS(s);new V2(s.asyncQueue,c,a,o,u).au()}),u.promise}(co(t),i=>e(new mO(t,i)),r)}function Fn(){return new Tg("serverTimestamp")}function _O(...t){return new Ig("arrayUnion",t)}function ui(t){return new Sg("increment",t)}(function(e,n=!0){(function(i){oo=i})($i),Pi(new Hr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new cr(new lb(r.getProvider("auth-internal")),new db(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ua(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),On(Xv,"4.7.3",e),On(Xv,"4.7.3","esm2017")})();var yO="firebase",vO="10.14.1";/**
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
 */On(yO,vO,"app");var L0={};const V0="@firebase/database",j0="1.0.8";/**
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
 */let sx="";function wO(t){sx=t}/**
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
 */class EO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ot(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Da(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class TO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ox=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new EO(e)}}catch{}return new TO},vi=ox("localStorage"),IO=ox("sessionStorage");/**
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
 */const Ns=new ih("@firebase/database"),SO=function(){let t=1;return function(){return t++}}(),ax=function(t){const e=X1(t),n=new H1;n.update(e);const r=n.digest();return Cm.encodeByteArray(r)},vl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=vl.apply(null,r):typeof r=="object"?e+=ot(r):e+=r,e+=" "}return e};let ha=null,F0=!0;const xO=function(t,e){$(!0,"Can't turn on custom loggers persistently."),Ns.logLevel=ce.VERBOSE,ha=Ns.log.bind(Ns)},xt=function(...t){if(F0===!0&&(F0=!1,ha===null&&IO.get("logging_enabled")===!0&&xO()),ha){const e=vl.apply(null,t);ha(e)}},wl=function(t){return function(...e){xt(t,...e)}},yp=function(...t){const e="FIREBASE INTERNAL ERROR: "+vl(...t);Ns.error(e)},hr=function(...t){const e=`FIREBASE FATAL ERROR: ${vl(...t)}`;throw Ns.error(e),new Error(e)},Ht=function(...t){const e="FIREBASE WARNING: "+vl(...t);Ns.warn(e)},CO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},lx=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},AO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Xs="[MIN_NAME]",Vi="[MAX_NAME]",po=function(t,e){if(t===e)return 0;if(t===Xs||e===Vi)return-1;if(e===Xs||t===Vi)return 1;{const n=U0(t),r=U0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},kO=function(t,e){return t===e?0:t<e?-1:1},Uo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ot(e))},Lg=function(t){if(typeof t!="object"||t===null)return ot(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ot(e[r]),n+=":",n+=Lg(t[e[r]]);return n+="}",n},ux=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const cx=function(t){$(!lx(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const f=c.join("");let p="";for(u=0;u<64;u+=8){let g=parseInt(f.substr(u,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},RO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},PO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function NO(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const bO=new RegExp("^-?(0*)\\d{1,10}$"),DO=-2147483648,OO=2147483647,U0=function(t){if(bO.test(t)){const e=Number(t);if(e>=DO&&e<=OO)return e}return null},mo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ht("Exception was thrown by user callback.",n),e},Math.floor(0))}},MO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},da=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class LO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ht(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class VO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(xt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ht(e)}}class Vu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vu.OWNER="owner";/**
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
 */const Vg="5",hx="v",dx="s",fx="r",px="f",mx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gx="ls",_x="p",vp="ac",yx="websocket",vx="long_polling";/**
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
 */class wx{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function jO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ex(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===yx)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===vx)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jO(t)&&(n.ns=t.namespace);const i=[];return Kt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class FO{constructor(){this.counters_={}}incrementCounter(e,n=1){mr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return k1(this.counters_)}}/**
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
 */const Bd={},$d={};function jg(t){const e=t.toString();return Bd[e]||(Bd[e]=new FO),Bd[e]}function UO(t,e){const n=t.toString();return $d[n]||($d[n]=e()),$d[n]}/**
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
 */class zO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&mo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const z0="start",BO="close",$O="pLPCommand",WO="pRTLPCB",Tx="id",Ix="pw",Sx="ser",qO="cb",GO="seg",HO="ts",KO="d",QO="dframe",xx=1870,Cx=30,YO=xx-Cx,XO=25e3,JO=3e4;class vs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=wl(e),this.stats_=jg(n),this.urlFn=u=>(this.appCheckToken&&(u[vp]=this.appCheckToken),Ex(n,vx,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new zO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(JO)),AO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fg((...s)=>{const[o,a,u,c,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===z0)this.id=a,this.password=u;else if(o===BO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[z0]="t",r[Sx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[qO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[hx]=Vg,this.transportSessionId&&(r[dx]=this.transportSessionId),this.lastSessionId&&(r[gx]=this.lastSessionId),this.applicationId&&(r[_x]=this.applicationId),this.appCheckToken&&(r[vp]=this.appCheckToken),typeof location<"u"&&location.hostname&&mx.test(location.hostname)&&(r[fx]=px);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vs.forceAllow_=!0}static forceDisallow(){vs.forceDisallow_=!0}static isAvailable(){return vs.forceAllow_?!0:!vs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!RO()&&!PO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=qT(n),i=ux(r,YO);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[QO]="t",r[Tx]=e,r[Ix]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ot(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SO(),window[$O+this.uniqueCallbackIdentifier]=e,window[WO+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){xt("frame writing exception"),a.stack&&xt(a.stack),xt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Tx]=this.myID,e[Ix]=this.myPW,e[Sx]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cx+r.length<=xx;){const o=this.pendingSegs.shift();r=r+"&"+GO+i+"="+o.seg+"&"+HO+i+"="+o.ts+"&"+KO+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(XO)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{xt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const ZO=16384,eM=45e3;let xc=null;typeof MozWebSocket<"u"?xc=MozWebSocket:typeof WebSocket<"u"&&(xc=WebSocket);class _n{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=wl(this.connId),this.stats_=jg(n),this.connURL=_n.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[hx]=Vg,typeof location<"u"&&location.hostname&&mx.test(location.hostname)&&(o[fx]=px),n&&(o[dx]=n),r&&(o[gx]=r),i&&(o[vp]=i),s&&(o[_x]=s),Ex(e,yx,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vi.set("previous_websocket_failure",!0);try{let r;j1(),this.mySock=new xc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_n.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&xc!==null&&!_n.forceDisallow_}static previouslyFailed(){return vi.isInMemoryStorage||vi.get("previous_websocket_failure")===!0}markConnectionHealthy(){vi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Da(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ux(n,ZO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_n.responsesRequiredToBeHealthy=2;_n.healthyTimeout=3e4;/**
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
 */class Ha{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vs,_n]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_n&&_n.isAvailable();let r=n&&!_n.previouslyFailed();if(e.webSocketOnly&&(n||Ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_n];else{const i=this.transports_=[];for(const s of Ha.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ha.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ha.globalTransportInitialized_=!1;/**
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
 */const tM=6e4,nM=5e3,rM=10*1024,iM=100*1024,Wd="t",B0="d",sM="s",$0="r",oM="e",W0="o",q0="a",G0="n",H0="p",aM="h";class lM{constructor(e,n,r,i,s,o,a,u,c,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=wl("c:"+this.id+":"),this.transportManager_=new Ha(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=da(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wd in e){const n=e[Wd];n===q0?this.upgradeIfSecondaryHealthy_():n===$0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===W0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Uo("t",e),r=Uo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:H0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:q0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:G0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Uo("t",e),r=Uo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Uo(Wd,e);if(B0 in e){const r=e[B0];if(n===aM){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===G0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sM?this.onConnectionShutdown_(r):n===$0?this.onReset_(r):n===oM?yp("Server Error: "+r):n===W0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vg!==r&&Ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),da(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):da(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:H0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ax{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class kx{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Cc extends kx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Am()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Cc}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const K0=32,Q0=768;class Se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new Se("")}function oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Xr(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Se(t.pieces_,e)}function Rx(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Px(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Nx(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Se(e,0)}function Je(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Se(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function zt(t,e){const n=oe(t),r=oe(e);if(n===null)return e;if(n===r)return zt(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ug(t,e){if(Xr(t)!==Xr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function yn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Xr(t)>Xr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class cM{constructor(e,n){this.errorPrefix_=n,this.parts_=Px(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=rh(this.parts_[r]);bx(this)}}function hM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=rh(e),bx(t)}function dM(t){const e=t.parts_.pop();t.byteLength_-=rh(e),t.parts_.length>0&&(t.byteLength_-=1)}function bx(t){if(t.byteLength_>Q0)throw new Error(t.errorPrefix_+"has a key path longer than "+Q0+" bytes ("+t.byteLength_+").");if(t.parts_.length>K0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+K0+") or object contains a cycle "+fi(t))}function fi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class zg extends kx{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new zg}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const zo=1e3,fM=60*5*1e3,Y0=30*1e3,pM=1.3,mM=3e4,gM="server_kill",X0=3;class tr extends Ax{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=tr.nextPersistentConnectionId_++,this.log_=wl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zo,this.maxReconnectDelay_=fM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Cc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ot(s)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new nh,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;tr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mr(e,"w")){const r=zs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||G1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Y0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=q1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ot(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yp("Unrecognized action received from server: "+ot(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mM&&(this.reconnectDelay_=zo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*pM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+tr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(p){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(p)};this.realtime_={close:u,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?xt("getToken() completed but was canceled"):(xt("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,a=new lM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Ht(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(gM)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Ht(p),u())}}}interrupt(e){xt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hf(this.interruptReasons_)&&(this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Lg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){xt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=X0&&(this.reconnectDelay_=Y0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){xt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=X0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+sx.replace(/\./g,"-")]=1,Am()?e["framework.cordova"]=1:JT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Cc.getInstance().currentlyOnline();return Hf(this.interruptReasons_)&&e}}tr.nextPersistentConnectionId_=0;tr.nextConnectionId_=0;/**
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
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
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
 */class kh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ae(Xs,e),i=new ae(Xs,n);return this.compare(r,i)!==0}minPost(){return ae.MIN}}/**
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
 */let cu;class Dx extends kh{static get __EMPTY_NODE(){return cu}static set __EMPTY_NODE(e){cu=e}compare(e,n){return po(e.name,n.name)}isDefinedOn(e){throw ro("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(Vi,cu)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,cu)}toString(){return".key"}}const bs=new Dx;/**
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
 */class hu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??Bt.EMPTY_NODE,this.right=s??Bt.EMPTY_NODE}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Bt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}it.RED=!0;it.BLACK=!1;class _M{copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Bt{constructor(e,n=Bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,it.BLACK,null,null))}remove(e){return new Bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,it.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new hu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new hu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new hu(this.root_,null,this.comparator_,!0,e)}}Bt.EMPTY_NODE=new _M;/**
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
 */function yM(t,e){return po(t.name,e.name)}function Bg(t,e){return po(t,e)}/**
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
 */let wp;function vM(t){wp=t}const Ox=function(t){return typeof t=="number"?"number:"+cx(t):"string:"+t},Mx=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mr(e,".sv"),"Priority must be a string or number.")}else $(t===wp||t.isEmpty(),"priority of unexpected type.");$(t===wp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let J0;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Mx(this.priorityNode_)}static set __childrenNodeConstructor(e){J0=e}static get __childrenNodeConstructor(){return J0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:oe(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=oe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||Xr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ox(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=cx(this.value_):e+=this.value_,this.lazyHash_=ax(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=tt.VALUE_TYPE_ORDER.indexOf(n),s=tt.VALUE_TYPE_ORDER.indexOf(r);return $(i>=0,"Unknown leaf type: "+n),$(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Lx,Vx;function wM(t){Lx=t}function EM(t){Vx=t}class TM extends kh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?po(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(Vi,new tt("[PRIORITY-POST]",Vx))}makePost(e,n){const r=Lx(e);return new ae(n,new tt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Be=new TM;/**
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
 */const IM=Math.log(2);class SM{constructor(e){const n=s=>parseInt(Math.log(s)/IM,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ac=function(t,e,n,r){t.sort(e);const i=function(u,c){const f=c-u;let p,g;if(f===0)return null;if(f===1)return p=t[u],g=n?n(p):p,new it(g,p.node,it.BLACK,null,null);{const y=parseInt(f/2,10)+u,T=i(u,y),k=i(y+1,c);return p=t[y],g=n?n(p):p,new it(g,p.node,it.BLACK,T,k)}},s=function(u){let c=null,f=null,p=t.length;const g=function(T,k){const N=p-T,x=p;p-=T;const E=i(N+1,x),C=t[N],D=n?n(C):C;y(new it(D,C.node,k,null,E))},y=function(T){c?(c.left=T,c=T):(f=T,c=T)};for(let T=0;T<u.count;++T){const k=u.nextBitIsOne(),N=Math.pow(2,u.count-(T+1));k?g(N,it.BLACK):(g(N,it.BLACK),g(N,it.RED))}return f},o=new SM(t.length),a=s(o);return new Bt(r||e,a)};/**
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
 */let qd;const ns={};class Zn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return $(ns&&Be,"ChildrenNode.ts has not been loaded"),qd=qd||new Zn({".priority":ns},{".priority":Be}),qd}get(e){const n=zs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Bt?n:null}hasIndex(e){return mr(this.indexSet_,e.toString())}addIndex(e,n){$(e!==bs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ae.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ac(r,e.getCompare()):a=ns;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const f=Object.assign({},this.indexes_);return f[u]=a,new Zn(f,c)}addToIndexes(e,n){const r=cc(this.indexes_,(i,s)=>{const o=zs(this.indexSet_,s);if($(o,"Missing index implementation for "+s),i===ns)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(ae.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Ac(a,o.getCompare())}else return ns;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new ae(e.name,a))),u.insert(e,e.node)}});return new Zn(r,this.indexSet_)}removeFromIndexes(e,n){const r=cc(this.indexes_,i=>{if(i===ns)return i;{const s=n.get(e.name);return s?i.remove(new ae(e.name,s)):i}});return new Zn(r,this.indexSet_)}}/**
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
 */let Bo;class ne{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Mx(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bo||(Bo=new ne(new Bt(Bg),null,Zn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bo}updatePriority(e){return this.children_.isEmpty()?this:new ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bo:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ae(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Bo:this.priorityNode_;return new ne(i,o,s)}}updateChild(e,n){const r=oe(e);if(r===null)return n;{$(oe(e)!==".priority"||Xr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Be,(o,a)=>{n[o]=a.val(e),r++,s&&ne.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ox(this.getPriority().val())+":"),this.forEachChild(Be,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ax(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ae(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ae.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===El?-1:0}withIndex(e){if(e===bs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ne(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Be),i=n.getIterator(Be);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bs?null:this.indexMap_.get(e.toString())}}ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xM extends ne{constructor(){super(new Bt(Bg),ne.EMPTY_NODE,Zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ne.EMPTY_NODE}isEmpty(){return!1}}const El=new xM;Object.defineProperties(ae,{MIN:{value:new ae(Xs,ne.EMPTY_NODE)},MAX:{value:new ae(Vi,El)}});Dx.__EMPTY_NODE=ne.EMPTY_NODE;tt.__childrenNodeConstructor=ne;vM(El);EM(El);/**
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
 */const CM=!0;function ht(t,e=null){if(t===null)return ne.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,ht(e))}if(!(t instanceof Array)&&CM){const n=[];let r=!1;if(Kt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=ht(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ae(o,u)))}}),n.length===0)return ne.EMPTY_NODE;const s=Ac(n,yM,o=>o.name,Bg);if(r){const o=Ac(n,Be.getCompare());return new ne(s,ht(e),new Zn({".priority":o},{".priority":Be}))}else return new ne(s,ht(e),Zn.Default)}else{let n=ne.EMPTY_NODE;return Kt(t,(r,i)=>{if(mr(t,r)&&r.substring(0,1)!=="."){const s=ht(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ht(e))}}wM(ht);/**
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
 */class AM extends kh{constructor(e){super(),this.indexPath_=e,$(!le(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?po(e.name,n.name):s}makePost(e,n){const r=ht(e),i=ne.EMPTY_NODE.updateChild(this.indexPath_,r);return new ae(n,i)}maxPost(){const e=ne.EMPTY_NODE.updateChild(this.indexPath_,El);return new ae(Vi,e)}toString(){return Px(this.indexPath_,0).join("/")}}/**
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
 */class kM extends kh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?po(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const r=ht(e);return new ae(n,r)}toString(){return".value"}}const RM=new kM;/**
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
 */function jx(t){return{type:"value",snapshotNode:t}}function Js(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ka(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Qa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function PM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class $g{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ka(n,a)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Js(n,r)):o.trackChildChange(Qa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Be,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ka(i,s))}),n.isLeafNode()||n.forEachChild(Be,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Qa(i,s,o))}else r.trackChildChange(Js(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ne.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ya{constructor(e){this.indexedFilter_=new $g(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ya.getStartPost_(e),this.endPost_=Ya.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ae(n,r))||(r=ne.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ne.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ne.EMPTY_NODE);const s=this;return n.forEachChild(Be,(o,a)=>{s.matches(new ae(o,a))||(i=i.updateImmediateChild(o,ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class NM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ya(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ae(n,r))||(r=ne.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ne.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ne.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,y)=>p(y,g)}else o=this.index_.getCompare();const a=e;$(a.numChildren()===this.limit_,"");const u=new ae(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(u);if(a.hasChild(n)){const p=a.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,c,this.reverse_);for(;g!=null&&(g.name===n||a.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const y=g==null?1:o(g,u);if(f&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(Qa(n,r,p)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ka(n,p));const k=a.updateImmediateChild(n,ne.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(s!=null&&s.trackChildChange(Js(g.name,g.node)),k.updateImmediateChild(g.name,g.node)):k}}else return r.isEmpty()?e:f&&o(c,u)>=0?(s!=null&&(s.trackChildChange(Ka(c.name,c.node)),s.trackChildChange(Js(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,ne.EMPTY_NODE)):e}}/**
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
 */class Wg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xs}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new Wg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bM(t){return t.loadsAllData()?new $g(t.getIndex()):t.hasLimit()?new NM(t):new Ya(t)}function Z0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Be?n="$priority":t.index_===RM?n="$value":t.index_===bs?n="$key":($(t.index_ instanceof AM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ot(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ot(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ot(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ot(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ot(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ew(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Be&&(e.i=t.index_.toString()),e}/**
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
 */class kc extends Ax{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=wl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=kc.getListenId_(e,r),a={};this.listens_[o]=a;const u=Z0(e._queryParams);this.restRequest_(s+".json",u,(c,f)=>{let p=f;if(c===404&&(p=null,c=null),c===null&&this.onDataUpdate_(s,p,!1,r),zs(this.listens_,o)===a){let g;c?c===401?g="permission_denied":g="rest_error:"+c:g="ok",i(g,null)}})}unlisten(e,n){const r=kc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Z0(e._queryParams),r=e._path.toString(),i=new nh;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+io(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Da(a.responseText)}catch{Ht("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Ht("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class DM{constructor(){this.rootNode_=ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Rc(){return{value:null,children:new Map}}function Fx(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=oe(e);t.children.has(r)||t.children.set(r,Rc());const i=t.children.get(r);e=Ce(e),Fx(i,e,n)}}function Ep(t,e,n){t.value!==null?n(e,t.value):OM(t,(r,i)=>{const s=new Se(e.toString()+"/"+r);Ep(i,s,n)})}function OM(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class MM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Kt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const tw=10*1e3,LM=30*1e3,VM=5*60*1e3;class jM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new MM(e);const r=tw+(LM-tw)*Math.random();da(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Kt(e,(i,s)=>{s>0&&mr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),da(this.reportStats_.bind(this),Math.floor(Math.random()*2*VM))}}/**
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
 */var vn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vn||(vn={}));function Ux(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Pc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=vn.ACK_USER_WRITE,this.source=Ux()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Se(e));return new Pc(ye(),n,this.revert)}}else return $(oe(this.path)===e,"operationForChild called for unrelated child."),new Pc(Ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class Xa{constructor(e,n){this.source=e,this.path=n,this.type=vn.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new Xa(this.source,ye()):new Xa(this.source,Ce(this.path))}}/**
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
 */class ji{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=vn.OVERWRITE}operationForChild(e){return le(this.path)?new ji(this.source,ye(),this.snap.getImmediateChild(e)):new ji(this.source,Ce(this.path),this.snap)}}/**
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
 */class Ja{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=vn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Se(e));return n.isEmpty()?null:n.value?new ji(this.source,ye(),n.value):new Ja(this.source,ye(),n)}else return $(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ja(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Fi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class FM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function UM(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(PM(o.childName,o.snapshotNode))}),$o(t,i,"child_removed",e,r,n),$o(t,i,"child_added",e,r,n),$o(t,i,"child_moved",s,r,n),$o(t,i,"child_changed",e,r,n),$o(t,i,"value",e,r,n),i}function $o(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>BM(t,a,u)),o.forEach(a=>{const u=zM(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function zM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function BM(t,e,n){if(e.childName==null||n.childName==null)throw ro("Should only compare child_ events.");const r=new ae(e.childName,e.snapshotNode),i=new ae(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Rh(t,e){return{eventCache:t,serverCache:e}}function fa(t,e,n,r){return Rh(new Fi(e,n,r),t.serverCache)}function zx(t,e,n,r){return Rh(t.eventCache,new Fi(e,n,r))}function Tp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ui(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Gd;const $M=()=>(Gd||(Gd=new Bt(kO)),Gd);class be{constructor(e,n=$M()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return Kt(e,(r,i)=>{n=n.set(new Se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(le(e))return null;{const r=oe(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ce(e),n);return s!=null?{path:Je(new Se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=oe(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new be(null)}}set(e,n){if(le(e))return new be(n,this.children);{const r=oe(e),s=(this.children.get(r)||new be(null)).set(Ce(e),n),o=this.children.insert(r,s);return new be(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=oe(e),r=this.children.get(n);if(r){const i=r.remove(Ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new be(null):new be(this.value,s)}else return this}}get(e){if(le(e))return this.value;{const n=oe(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(le(e))return n;{const r=oe(e),s=(this.children.get(r)||new be(null)).setTree(Ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new be(this.value,o)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Je(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(le(e))return null;{const s=oe(e),o=this.children.get(s);return o?o.findOnPath_(Ce(e),Je(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,r){if(le(e))return this;{this.value&&r(n,this.value);const i=oe(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),Je(n,i),r):new be(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Je(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Sn{constructor(e){this.writeTree_=e}static empty(){return new Sn(new be(null))}}function pa(t,e,n){if(le(e))return new Sn(new be(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=zt(i,e);return s=s.updateChild(o,n),new Sn(t.writeTree_.set(i,s))}else{const i=new be(n),s=t.writeTree_.setTree(e,i);return new Sn(s)}}}function nw(t,e,n){let r=t;return Kt(n,(i,s)=>{r=pa(r,Je(e,i),s)}),r}function rw(t,e){if(le(e))return Sn.empty();{const n=t.writeTree_.setTree(e,new be(null));return new Sn(n)}}function Ip(t,e){return Hi(t,e)!=null}function Hi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(zt(n.path,e)):null}function iw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Be,(r,i)=>{e.push(new ae(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ae(r,i.value))}),e}function Wr(t,e){if(le(e))return t;{const n=Hi(t,e);return n!=null?new Sn(new be(n)):new Sn(t.writeTree_.subtree(e))}}function Sp(t){return t.writeTree_.isEmpty()}function Zs(t,e){return Bx(ye(),t.writeTree_,e)}function Bx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?($(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Bx(Je(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Je(t,".priority"),r)),n}}/**
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
 */function Hg(t,e){return Gx(e,t)}function WM(t,e,n,r,i){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=pa(t.visibleWrites,e,n)),t.lastWriteId=r}function qM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function GM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&HM(a,r.path)?i=!1:yn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return KM(t),!0;if(r.snap)t.visibleWrites=rw(t.visibleWrites,r.path);else{const a=r.children;Kt(a,u=>{t.visibleWrites=rw(t.visibleWrites,Je(r.path,u))})}return!0}else return!1}function HM(t,e){if(t.snap)return yn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&yn(Je(t.path,n),e))return!0;return!1}function KM(t){t.visibleWrites=$x(t.allWrites,QM,ye()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function QM(t){return t.visible}function $x(t,e,n){let r=Sn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)yn(n,o)?(a=zt(n,o),r=pa(r,a,s.snap)):yn(o,n)&&(a=zt(o,n),r=pa(r,ye(),s.snap.getChild(a)));else if(s.children){if(yn(n,o))a=zt(n,o),r=nw(r,a,s.children);else if(yn(o,n))if(a=zt(o,n),le(a))r=nw(r,ye(),s.children);else{const u=zs(s.children,oe(a));if(u){const c=u.getChild(Ce(a));r=pa(r,ye(),c)}}}else throw ro("WriteRecord should have .snap or .children")}}return r}function Wx(t,e,n,r,i){if(!r&&!i){const s=Hi(t.visibleWrites,e);if(s!=null)return s;{const o=Wr(t.visibleWrites,e);if(Sp(o))return n;if(n==null&&!Ip(o,ye()))return null;{const a=n||ne.EMPTY_NODE;return Zs(o,a)}}}else{const s=Wr(t.visibleWrites,e);if(!i&&Sp(s))return n;if(!i&&n==null&&!Ip(s,ye()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(yn(c.path,e)||yn(e,c.path))},a=$x(t.allWrites,o,e),u=n||ne.EMPTY_NODE;return Zs(a,u)}}}function YM(t,e,n){let r=ne.EMPTY_NODE;const i=Hi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Be,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Wr(t.visibleWrites,e);return n.forEachChild(Be,(o,a)=>{const u=Zs(Wr(s,new Se(o)),a);r=r.updateImmediateChild(o,u)}),iw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Wr(t.visibleWrites,e);return iw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function XM(t,e,n,r,i){$(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Je(e,n);if(Ip(t.visibleWrites,s))return null;{const o=Wr(t.visibleWrites,s);return Sp(o)?i.getChild(n):Zs(o,i.getChild(n))}}function JM(t,e,n,r){const i=Je(e,n),s=Hi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Wr(t.visibleWrites,i);return Zs(o,r.getNode().getImmediateChild(n))}else return null}function ZM(t,e){return Hi(t.visibleWrites,e)}function eL(t,e,n,r,i,s,o){let a;const u=Wr(t.visibleWrites,e),c=Hi(u,ye());if(c!=null)a=c;else if(n!=null)a=Zs(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],p=o.getCompare(),g=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=g.getNext();for(;y&&f.length<i;)p(y,r)!==0&&f.push(y),y=g.getNext();return f}else return[]}function tL(){return{visibleWrites:Sn.empty(),allWrites:[],lastWriteId:-1}}function Nc(t,e,n,r){return Wx(t.writeTree,t.treePath,e,n,r)}function Kg(t,e){return YM(t.writeTree,t.treePath,e)}function sw(t,e,n,r){return XM(t.writeTree,t.treePath,e,n,r)}function bc(t,e){return ZM(t.writeTree,Je(t.treePath,e))}function nL(t,e,n,r,i,s){return eL(t.writeTree,t.treePath,e,n,r,i,s)}function Qg(t,e,n){return JM(t.writeTree,t.treePath,e,n)}function qx(t,e){return Gx(Je(t.treePath,e),t.writeTree)}function Gx(t,e){return{treePath:t,writeTree:e}}/**
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
 */class rL{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Qa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ka(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Js(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Qa(r,e.snapshotNode,i.oldSnap));else throw ro("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class iL{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Hx=new iL;class Yg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ui(this.viewCache_),s=nL(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function sL(t){return{filter:t}}function oL(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function aL(t,e,n,r,i){const s=new rL;let o,a;if(n.type===vn.OVERWRITE){const c=n;c.source.fromUser?o=xp(t,e,c.path,c.snap,r,i,s):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!le(c.path),o=Dc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===vn.MERGE){const c=n;c.source.fromUser?o=uL(t,e,c.path,c.children,r,i,s):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Cp(t,e,c.path,c.children,r,i,a,s))}else if(n.type===vn.ACK_USER_WRITE){const c=n;c.revert?o=dL(t,e,c.path,r,i,s):o=cL(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===vn.LISTEN_COMPLETE)o=hL(t,e,n.path,r,s);else throw ro("Unknown operation type: "+n.type);const u=s.getChanges();return lL(e,o,u),{viewCache:o,changes:u}}function lL(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Tp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(jx(Tp(e)))}}function Kx(t,e,n,r,i,s){const o=e.eventCache;if(bc(r,n)!=null)return e;{let a,u;if(le(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ui(e),f=c instanceof ne?c:ne.EMPTY_NODE,p=Kg(r,f);a=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const c=Nc(r,Ui(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=oe(n);if(c===".priority"){$(Xr(n)===1,"Can't have a priority with additional path components");const f=o.getNode();u=e.serverCache.getNode();const p=sw(r,n,f,u);p!=null?a=t.filter.updatePriority(f,p):a=o.getNode()}else{const f=Ce(n);let p;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const g=sw(r,n,o.getNode(),u);g!=null?p=o.getNode().getImmediateChild(c).updateChild(f,g):p=o.getNode().getImmediateChild(c)}else p=Qg(r,c,e.serverCache);p!=null?a=t.filter.updateChild(o.getNode(),c,p,f,i,s):a=o.getNode()}}return fa(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function Dc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const f=o?t.filter:t.filter.getIndexedFilter();if(le(n))c=f.updateFullNode(u.getNode(),r,null);else if(f.filtersNodes()&&!u.isFiltered()){const y=u.getNode().updateChild(n,r);c=f.updateFullNode(u.getNode(),y,null)}else{const y=oe(n);if(!u.isCompleteForPath(n)&&Xr(n)>1)return e;const T=Ce(n),N=u.getNode().getImmediateChild(y).updateChild(T,r);y===".priority"?c=f.updatePriority(u.getNode(),N):c=f.updateChild(u.getNode(),y,N,T,Hx,null)}const p=zx(e,c,u.isFullyInitialized()||le(n),f.filtersNodes()),g=new Yg(i,p,s);return Kx(t,p,n,i,g,a)}function xp(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const f=new Yg(i,e,s);if(le(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=fa(e,c,!0,t.filter.filtersNodes());else{const p=oe(n);if(p===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=fa(e,c,a.isFullyInitialized(),a.isFiltered());else{const g=Ce(n),y=a.getNode().getImmediateChild(p);let T;if(le(g))T=r;else{const k=f.getCompleteChild(p);k!=null?Rx(g)===".priority"&&k.getChild(Nx(g)).isEmpty()?T=k:T=k.updateChild(g,r):T=ne.EMPTY_NODE}if(y.equals(T))u=e;else{const k=t.filter.updateChild(a.getNode(),p,T,g,f,o);u=fa(e,k,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function ow(t,e){return t.eventCache.isCompleteForChild(e)}function uL(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const f=Je(n,u);ow(e,oe(f))&&(a=xp(t,a,f,c,i,s,o))}),r.foreach((u,c)=>{const f=Je(n,u);ow(e,oe(f))||(a=xp(t,a,f,c,i,s,o))}),a}function aw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Cp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;le(n)?c=r:c=new be(null).setTree(n,r);const f=e.serverCache.getNode();return c.children.inorderTraversal((p,g)=>{if(f.hasChild(p)){const y=e.serverCache.getNode().getImmediateChild(p),T=aw(t,y,g);u=Dc(t,u,new Se(p),T,i,s,o,a)}}),c.children.inorderTraversal((p,g)=>{const y=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!f.hasChild(p)&&!y){const T=e.serverCache.getNode().getImmediateChild(p),k=aw(t,T,g);u=Dc(t,u,new Se(p),k,i,s,o,a)}}),u}function cL(t,e,n,r,i,s,o){if(bc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(le(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Dc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(le(n)){let c=new be(null);return u.getNode().forEachChild(bs,(f,p)=>{c=c.set(new Se(f),p)}),Cp(t,e,n,c,i,s,a,o)}else return e}else{let c=new be(null);return r.foreach((f,p)=>{const g=Je(n,f);u.isCompleteForPath(g)&&(c=c.set(f,u.getNode().getChild(g)))}),Cp(t,e,n,c,i,s,a,o)}}function hL(t,e,n,r,i){const s=e.serverCache,o=zx(e,s.getNode(),s.isFullyInitialized()||le(n),s.isFiltered());return Kx(t,o,n,r,Hx,i)}function dL(t,e,n,r,i,s){let o;if(bc(r,n)!=null)return e;{const a=new Yg(r,e,i),u=e.eventCache.getNode();let c;if(le(n)||oe(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Nc(r,Ui(e));else{const p=e.serverCache.getNode();$(p instanceof ne,"serverChildren would be complete if leaf node"),f=Kg(r,p)}f=f,c=t.filter.updateFullNode(u,f,s)}else{const f=oe(n);let p=Qg(r,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=u.getImmediateChild(f)),p!=null?c=t.filter.updateChild(u,f,p,Ce(n),a,s):e.eventCache.getNode().hasChild(f)?c=t.filter.updateChild(u,f,ne.EMPTY_NODE,Ce(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Nc(r,Ui(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||bc(r,ye())!=null,fa(e,c,o,t.filter.filtersNodes())}}/**
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
 */class fL{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new $g(r.getIndex()),s=bM(r);this.processor_=sL(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(ne.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(ne.EMPTY_NODE,a.getNode(),null),f=new Fi(u,o.isFullyInitialized(),i.filtersNodes()),p=new Fi(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Rh(p,f),this.eventGenerator_=new FM(this.query_)}get query(){return this.query_}}function pL(t){return t.viewCache_.serverCache.getNode()}function mL(t,e){const n=Ui(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function lw(t){return t.eventRegistrations_.length===0}function gL(t,e){t.eventRegistrations_.push(e)}function uw(t,e,n){const r=[];if(n){$(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function cw(t,e,n,r){e.type===vn.MERGE&&e.source.queryId!==null&&($(Ui(t.viewCache_),"We should always have a full cache before handling merges"),$(Tp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=aL(t.processor_,i,e,n,r);return oL(t.processor_,s.viewCache),$(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Qx(t,s.changes,s.viewCache.eventCache.getNode(),null)}function _L(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Be,(s,o)=>{r.push(Js(s,o))}),n.isFullyInitialized()&&r.push(jx(n.getNode())),Qx(t,r,n.getNode(),e)}function Qx(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return UM(t.eventGenerator_,e,n,i)}/**
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
 */let Oc;class yL{constructor(){this.views=new Map}}function vL(t){$(!Oc,"__referenceConstructor has already been defined"),Oc=t}function wL(){return $(Oc,"Reference.ts has not been loaded"),Oc}function EL(t){return t.views.size===0}function Xg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return $(s!=null,"SyncTree gave us an op for an invalid query."),cw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(cw(o,e,n,r));return s}}function TL(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Nc(n,i?r:null),u=!1;a?u=!0:r instanceof ne?(a=Kg(n,r),u=!1):(a=ne.EMPTY_NODE,u=!1);const c=Rh(new Fi(a,u,!1),new Fi(r,i,!1));return new fL(e,c)}return o}function IL(t,e,n,r,i,s){const o=TL(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),gL(o,n),_L(o,n)}function SL(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Jr(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(uw(c,n,r)),lw(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(uw(u,n,r)),lw(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!Jr(t)&&s.push(new(wL())(e._repo,e._path)),{removed:s,events:o}}function Yx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ds(t,e){let n=null;for(const r of t.views.values())n=n||mL(r,e);return n}function Xx(t,e){if(e._queryParams.loadsAllData())return Ph(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Jx(t,e){return Xx(t,e)!=null}function Jr(t){return Ph(t)!=null}function Ph(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Mc;function xL(t){$(!Mc,"__referenceConstructor has already been defined"),Mc=t}function CL(){return $(Mc,"Reference.ts has not been loaded"),Mc}let AL=1;class hw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=tL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zx(t,e,n,r,i){return WM(t.pendingWriteTree_,e,n,r,i),i?Tl(t,new ji(Ux(),e,n)):[]}function wi(t,e,n=!1){const r=qM(t.pendingWriteTree_,e);if(GM(t.pendingWriteTree_,e)){let s=new be(null);return r.snap!=null?s=s.set(ye(),!0):Kt(r.children,o=>{s=s.set(new Se(o),!0)}),Tl(t,new Pc(r.path,s,n))}else return[]}function Nh(t,e,n){return Tl(t,new ji(qg(),e,n))}function kL(t,e,n){const r=be.fromObject(n);return Tl(t,new Ja(qg(),e,r))}function RL(t,e){return Tl(t,new Xa(qg(),e))}function PL(t,e,n){const r=Zg(t,n);if(r){const i=e_(r),s=i.path,o=i.queryId,a=zt(s,e),u=new Xa(Gg(o),a);return t_(t,s,u)}else return[]}function Ap(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Jx(o,e))){const u=SL(o,e,n,r);EL(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const f=c.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(s,(g,y)=>Jr(y));if(f&&!p){const g=t.syncPointTree_.subtree(s);if(!g.isEmpty()){const y=DL(g);for(let T=0;T<y.length;++T){const k=y[T],N=k.query,x=nC(t,k);t.listenProvider_.startListening(ma(N),Lc(t,N),x.hashFn,x.onComplete)}}}!p&&c.length>0&&!r&&(f?t.listenProvider_.stopListening(ma(e),null):c.forEach(g=>{const y=t.queryToTagMap.get(bh(g));t.listenProvider_.stopListening(ma(g),y)}))}OL(t,c)}return a}function NL(t,e,n,r){const i=Zg(t,r);if(i!=null){const s=e_(i),o=s.path,a=s.queryId,u=zt(o,e),c=new ji(Gg(a),u,n);return t_(t,o,c)}else return[]}function bL(t,e,n,r){const i=Zg(t,r);if(i){const s=e_(i),o=s.path,a=s.queryId,u=zt(o,e),c=be.fromObject(n),f=new Ja(Gg(a),u,c);return t_(t,o,f)}else return[]}function dw(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,y)=>{const T=zt(g,i);s=s||Ds(y,T),o=o||Jr(y)});let a=t.syncPointTree_.get(i);a?(o=o||Jr(a),s=s||Ds(a,ye())):(a=new yL,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=ne.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,T)=>{const k=Ds(T,ye());k&&(s=s.updateImmediateChild(y,k))}));const c=Jx(a,e);if(!c&&!e._queryParams.loadsAllData()){const g=bh(e);$(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const y=ML();t.queryToTagMap.set(g,y),t.tagToQueryMap.set(y,g)}const f=Hg(t.pendingWriteTree_,i);let p=IL(a,e,n,f,s,u);if(!c&&!o&&!r){const g=Xx(a,e);p=p.concat(LL(t,e,g))}return p}function Jg(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=zt(o,e),c=Ds(a,u);if(c)return c});return Wx(i,e,s,n,!0)}function Tl(t,e){return eC(e,t.syncPointTree_,null,Hg(t.pendingWriteTree_,ye()))}function eC(t,e,n,r){if(le(t.path))return tC(t,e,n,r);{const i=e.get(ye());n==null&&i!=null&&(n=Ds(i,ye()));let s=[];const o=oe(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,f=qx(r,o);s=s.concat(eC(a,u,c,f))}return i&&(s=s.concat(Xg(i,t,r,n))),s}}function tC(t,e,n,r){const i=e.get(ye());n==null&&i!=null&&(n=Ds(i,ye()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=qx(r,o),f=t.operationForChild(o);f&&(s=s.concat(tC(f,a,u,c)))}),i&&(s=s.concat(Xg(i,t,r,n))),s}function nC(t,e){const n=e.query,r=Lc(t,n);return{hashFn:()=>(pL(e)||ne.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?PL(t,n._path,r):RL(t,n._path);{const s=NO(i,n);return Ap(t,n,null,s)}}}}function Lc(t,e){const n=bh(e);return t.queryToTagMap.get(n)}function bh(t){return t._path.toString()+"$"+t._queryIdentifier}function Zg(t,e){return t.tagToQueryMap.get(e)}function e_(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Se(t.substr(0,e))}}function t_(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const i=Hg(t.pendingWriteTree_,e);return Xg(r,n,i,null)}function DL(t){return t.fold((e,n,r)=>{if(n&&Jr(n))return[Ph(n)];{let i=[];return n&&(i=Yx(n)),Kt(r,(s,o)=>{i=i.concat(o)}),i}})}function ma(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(CL())(t._repo,t._path):t}function OL(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=bh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function ML(){return AL++}function LL(t,e,n){const r=e._path,i=Lc(t,e),s=nC(t,n),o=t.listenProvider_.startListening(ma(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)$(!Jr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,f,p)=>{if(!le(c)&&f&&Jr(f))return[Ph(f).query];{let g=[];return f&&(g=g.concat(Yx(f).map(y=>y.query))),Kt(p,(y,T)=>{g=g.concat(T)}),g}});for(let c=0;c<u.length;++c){const f=u[c];t.listenProvider_.stopListening(ma(f),Lc(t,f))}}return o}/**
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
 */class n_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new n_(n)}node(){return this.node_}}class r_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Je(this.path_,e);return new r_(this.syncTree_,n)}node(){return Jg(this.syncTree_,this.path_)}}const VL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},fw=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return FL(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},FL=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const i=e.node();if($(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},UL=function(t,e,n,r){return i_(e,new r_(n,t),r)},rC=function(t,e,n){return i_(t,new n_(e),n)};function i_(t,e,n){const r=t.getPriority().val(),i=fw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=fw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new tt(a,ht(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new tt(i))),o.forEachChild(Be,(a,u)=>{const c=i_(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class s_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function o_(t,e){let n=e instanceof Se?e:new Se(e),r=t,i=oe(n);for(;i!==null;){const s=zs(r.node.children,i)||{children:{},childCount:0};r=new s_(i,r,s),n=Ce(n),i=oe(n)}return r}function go(t){return t.node.value}function iC(t,e){t.node.value=e,kp(t)}function sC(t){return t.node.childCount>0}function zL(t){return go(t)===void 0&&!sC(t)}function Dh(t,e){Kt(t.node.children,(n,r)=>{e(new s_(n,t,r))})}function oC(t,e,n,r){n&&e(t),Dh(t,i=>{oC(i,e,!0)})}function BL(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Il(t){return new Se(t.parent===null?t.name:Il(t.parent)+"/"+t.name)}function kp(t){t.parent!==null&&$L(t.parent,t.name,t)}function $L(t,e,n){const r=zL(n),i=mr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,kp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,kp(t))}/**
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
 */const WL=/[\[\].#$\/\u0000-\u001F\u007F]/,qL=/[\[\].#$\u0000-\u001F\u007F]/,Hd=10*1024*1024,aC=function(t){return typeof t=="string"&&t.length!==0&&!WL.test(t)},lC=function(t){return typeof t=="string"&&t.length!==0&&!qL.test(t)},GL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lC(t)},HL=function(t,e,n,r){a_(km(t,"value"),e,n)},a_=function(t,e,n){const r=n instanceof Se?new cM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+fi(r));if(typeof e=="function")throw new Error(t+"contains a function "+fi(r)+" with contents = "+e.toString());if(lx(e))throw new Error(t+"contains "+e.toString()+" "+fi(r));if(typeof e=="string"&&e.length>Hd/3&&rh(e)>Hd)throw new Error(t+"contains a string greater than "+Hd+" utf8 bytes "+fi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Kt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!aC(o)))throw new Error(t+" contains an invalid key ("+o+") "+fi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hM(r,o),a_(t,a,r),dM(r)}),i&&s)throw new Error(t+' contains ".value" child '+fi(r)+" in addition to actual children.")}},uC=function(t,e,n,r){if(!lC(n))throw new Error(km(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},KL=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),uC(t,e,n)},QL=function(t,e){if(oe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},YL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!aC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!GL(n))throw new Error(km(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class XL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function l_(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ug(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function cC(t,e,n){l_(t,n),hC(t,r=>Ug(r,e))}function dr(t,e,n){l_(t,n),hC(t,r=>yn(r,e)||yn(e,r))}function hC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(JL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function JL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ha&&xt("event: "+n.toString()),mo(r)}}}/**
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
 */const ZL="repo_interrupt",eV=25;class tV{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new XL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rc(),this.transactionQueueTree_=new s_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nV(t,e,n){if(t.stats_=jg(t.repoInfo_),t.forceRestClient_||MO())t.server_=new kc(t.repoInfo_,(r,i,s,o)=>{pw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>mw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ot(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new tr(t.repoInfo_,e,(r,i,s,o)=>{pw(t,r,i,s,o)},r=>{mw(t,r)},r=>{iV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=UO(t.repoInfo_,()=>new jM(t.stats_,t.server_)),t.infoData_=new DM,t.infoSyncTree_=new hw({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Nh(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),c_(t,"connected",!1),t.serverSyncTree_=new hw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);dr(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function rV(t){const n=t.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function u_(t){return VL({timestamp:rV(t)})}function pw(t,e,n,r,i){t.dataUpdateCount++;const s=new Se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=cc(n,c=>ht(c));o=bL(t.serverSyncTree_,s,u,i)}else{const u=ht(n);o=NL(t.serverSyncTree_,s,u,i)}else if(r){const u=cc(n,c=>ht(c));o=kL(t.serverSyncTree_,s,u)}else{const u=ht(n);o=Nh(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Oh(t,s)),dr(t.eventQueue_,a,o)}function mw(t,e){c_(t,"connected",e),e===!1&&oV(t)}function iV(t,e){Kt(e,(n,r)=>{c_(t,n,r)})}function c_(t,e,n){const r=new Se("/.info/"+e),i=ht(n);t.infoData_.updateSnapshot(r,i);const s=Nh(t.infoSyncTree_,r,i);dr(t.eventQueue_,r,s)}function dC(t){return t.nextWriteId_++}function sV(t,e,n,r,i){h_(t,"set",{path:e.toString(),value:n,priority:r});const s=u_(t),o=ht(n,r),a=Jg(t.serverSyncTree_,e),u=rC(o,a,s),c=dC(t),f=Zx(t.serverSyncTree_,e,u,c,!0);l_(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(g,y)=>{const T=g==="ok";T||Ht("set at "+e+" failed: "+g);const k=wi(t.serverSyncTree_,c,!T);dr(t.eventQueue_,e,k),uV(t,i,g,y)});const p=yC(t,e);Oh(t,p),dr(t.eventQueue_,p,[])}function oV(t){h_(t,"onDisconnectEvents");const e=u_(t),n=Rc();Ep(t.onDisconnect_,ye(),(i,s)=>{const o=UL(i,s,t.serverSyncTree_,e);Fx(n,i,o)});let r=[];Ep(n,ye(),(i,s)=>{r=r.concat(Nh(t.serverSyncTree_,i,s));const o=yC(t,i);Oh(t,o)}),t.onDisconnect_=Rc(),dr(t.eventQueue_,ye(),r)}function aV(t,e,n){let r;oe(e._path)===".info"?r=dw(t.infoSyncTree_,e,n):r=dw(t.serverSyncTree_,e,n),cC(t.eventQueue_,e._path,r)}function fC(t,e,n){let r;oe(e._path)===".info"?r=Ap(t.infoSyncTree_,e,n):r=Ap(t.serverSyncTree_,e,n),cC(t.eventQueue_,e._path,r)}function lV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ZL)}function h_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),xt(n,...e)}function uV(t,e,n,r){e&&mo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function pC(t,e,n){return Jg(t.serverSyncTree_,e,n)||ne.EMPTY_NODE}function d_(t,e=t.transactionQueueTree_){if(e||Mh(t,e),go(e)){const n=gC(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&cV(t,Il(e),n)}else sC(e)&&Dh(e,n=>{d_(t,n)})}function cV(t,e,n){const r=n.map(c=>c.currentWriteId),i=pC(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const f=n[c];$(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=zt(e,f.path);s=s.updateChild(p,f.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{h_(t,"transaction put response",{path:u.toString(),status:c});let f=[];if(c==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,f=f.concat(wi(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Mh(t,o_(t.transactionQueueTree_,e)),d_(t,t.transactionQueueTree_),dr(t.eventQueue_,e,f);for(let g=0;g<p.length;g++)mo(p[g])}else{if(c==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Ht("transaction at "+u.toString()+" failed: "+c);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=c}Oh(t,e)}},o)}function Oh(t,e){const n=mC(t,e),r=Il(n),i=gC(t,n);return hV(t,i,r),r}function hV(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=zt(n,u.path);let f=!1,p;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)f=!0,p=u.abortReason,i=i.concat(wi(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=eV)f=!0,p="maxretry",i=i.concat(wi(t.serverSyncTree_,u.currentWriteId,!0));else{const g=pC(t,u.path,o);u.currentInputSnapshot=g;const y=e[a].update(g.val());if(y!==void 0){a_("transaction failed: Data returned ",y,u.path);let T=ht(y);typeof y=="object"&&y!=null&&mr(y,".priority")||(T=T.updatePriority(g.getPriority()));const N=u.currentWriteId,x=u_(t),E=rC(T,g,x);u.currentOutputSnapshotRaw=T,u.currentOutputSnapshotResolved=E,u.currentWriteId=dC(t),o.splice(o.indexOf(N),1),i=i.concat(Zx(t.serverSyncTree_,u.path,E,u.currentWriteId,u.applyLocally)),i=i.concat(wi(t.serverSyncTree_,N,!0))}else f=!0,p="nodata",i=i.concat(wi(t.serverSyncTree_,u.currentWriteId,!0))}dr(t.eventQueue_,n,i),i=[],f&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(p==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(p),!1,null))))}Mh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)mo(r[a]);d_(t,t.transactionQueueTree_)}function mC(t,e){let n,r=t.transactionQueueTree_;for(n=oe(e);n!==null&&go(r)===void 0;)r=o_(r,n),e=Ce(e),n=oe(e);return r}function gC(t,e){const n=[];return _C(t,e,n),n.sort((r,i)=>r.order-i.order),n}function _C(t,e,n){const r=go(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Dh(e,i=>{_C(t,i,n)})}function Mh(t,e){const n=go(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,iC(e,n.length>0?n:void 0)}Dh(e,r=>{Mh(t,r)})}function yC(t,e){const n=Il(mC(t,e)),r=o_(t.transactionQueueTree_,e);return BL(r,i=>{Kd(t,i)}),Kd(t,r),oC(r,i=>{Kd(t,i)}),n}function Kd(t,e){const n=go(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(wi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?iC(e,void 0):n.length=s+1,dr(t.eventQueue_,Il(e),i);for(let o=0;o<r.length;o++)mo(r[o])}}/**
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
 */function dV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function fV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ht(`Invalid query segment '${n}' in query '${t}'`)}return e}const gw=function(t,e){const n=pV(t),r=n.namespace;n.domain==="firebase.com"&&hr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||CO();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new wx(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Se(n.pathString)}},pV=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let f=t.indexOf("/");f===-1&&(f=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(f,p)),f<p&&(i=dV(t.substring(f,p)));const g=fV(t.substring(Math.min(t.length,p)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const y=e.slice(0,c);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),s=r}"ns"in g&&(s=g.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class mV{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ot(this.snapshot.exportVal())}}class gV{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class _V{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class f_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return le(this._path)?null:Rx(this._path)}get ref(){return new ii(this._repo,this._path)}get _queryIdentifier(){const e=ew(this._queryParams),n=Lg(e);return n==="{}"?"default":n}get _queryObject(){return ew(this._queryParams)}isEqual(e){if(e=Me(e),!(e instanceof f_))return!1;const n=this._repo===e._repo,r=Ug(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+uM(this._path)}}class ii extends f_{constructor(e,n){super(e,n,new Wg,!1)}get parent(){const e=Nx(this._path);return e===null?null:new ii(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Vc{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Se(e),r=Rp(this.ref,e);return new Vc(this._node.getChild(n),r,Be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Vc(i,Rp(this.ref,r),Be)))}hasChild(e){const n=new Se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function vC(t,e){return t=Me(t),t._checkNotDeleted("ref"),e!==void 0?Rp(t._root,e):t._root}function Rp(t,e){return t=Me(t),oe(t._path)===null?KL("child","path",e):uC("child","path",e),new ii(t._repo,Je(t._path,e))}function yV(t,e){t=Me(t),QL("set",t._path),HL("set",e,t._path);const n=new nh;return sV(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class p_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new mV("value",this,new Vc(e.snapshotNode,new ii(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gV(this,e,n):null}matches(e){return e instanceof p_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function vV(t,e,n,r,i){const s=new _V(n,void 0),o=new p_(s);return aV(t._repo,t,o),()=>fC(t._repo,t,o)}function wV(t,e,n,r){return vV(t,"value",e)}function EV(t,e,n){fC(t._repo,t,null)}vL(ii);xL(ii);/**
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
 */const TV="FIREBASE_DATABASE_EMULATOR_HOST",Pp={};let IV=!1;function SV(t,e,n,r){t.repoInfo_=new wx(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function xV(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||hr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=gw(s,i),a=o.repoInfo,u;typeof process<"u"&&L0&&(u=L0[TV]),u?(s=`http://${u}?ns=${a.namespace}`,o=gw(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new VO(t.name,t.options,e);YL("Invalid Firebase Database URL",o),le(o.path)||hr("Database URL must point to the root of a Firebase Database (not including a child path).");const f=AV(a,t,c,new LO(t.name,n));return new kV(f,t)}function CV(t,e){const n=Pp[e];(!n||n[t.key]!==t)&&hr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),lV(t),delete n[t.key]}function AV(t,e,n,r){let i=Pp[e.name];i||(i={},Pp[e.name]=i);let s=i[t.toURLString()];return s&&hr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new tV(t,IV,n,r),i[t.toURLString()]=s,s}class kV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ii(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hr("Cannot call "+e+" on a deleted database.")}}function RV(t=Pm(),e){const n=sh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=KT("database");r&&PV(n,...r)}return n}function PV(t,e,n,r={}){t=Me(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&hr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&hr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Vu(Vu.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:XT(r.mockUserToken,t.app.options.projectId);s=new Vu(o)}SV(i,e,n,s)}/**
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
 */function NV(t){wO($i),Pi(new Hr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return xV(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),On(V0,j0,t),On(V0,j0,"esm2017")}tr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};NV();const bV={apiKey:"AIzaSyDWqss4olY-yE58OpUd9FsCAgTuOrHUyfc",authDomain:"mathgame-prod.firebaseapp.com",projectId:"mathgame-prod",storageBucket:"mathgame-prod.firebasestorage.app",messagingSenderId:"823268749100",appId:"1:823268749100:web:88747dc6fd11cfd90a0689",databaseURL:"https://mathgame-prod-default-rtdb.asia-southeast1.firebasedatabase.app/"},Qd=10,Lh=YR().length?getApp():nI(bV);console.log(`Firebase initialized with project ID: ${Lh.options.projectId}`);const Yd=ib(Lh),Oe=K2(Lh);let Np=null;function DV(t){try{console.log("WRITING TEST DATA TO RTDB"),yV(vC(t,"s/connTest"),{next:-2}).then(()=>{console.log("Successfully sned next -2")}).catch(e=>{console.log("Failed to send next -2 to connTest"+e)}).finally(()=>{console.log("finished Conn test")})}catch(e){console.error(e),console.log("Error while initializing rtbd")}}Np=RV(Lh),DV(Np),console.log("Running in production mode, connected to real Firebase services");const OV=Np,He=9999999;async function _w(t){const e=await Li(lt(Oe,"students",t));return e.exists()?e.data():null}async function MV(t,{name:e,email:n,age:r,consentGiven:i,consentTimestamp:s,consentVersion:o}){await Gi(lt(Oe,"students",t),{name:e,email:n,age:Number(r),consentGiven:i,consentTimestamp:s,consentVersion:o,createdAt:Fn()})}async function LV(t,e){const n=uo(Oe,"scores",t,"trials"),r=e.sequence?e.sequence.map(i=>`${i.operator}${i.value}`).join(" "):"";await hO(n,{count:e.count,digits:e.digits,isCorrect:e.isCorrect,userAnswer:e.userAnswer,actualAnswer:e.actualAnswer,duration:e.duration,score:e.score??0,numbers:r,timestamp:Fn()}),await FV(t,e),await zV(t,e)}async function yw(t){const e=uo(Oe,"scores",t,"trials");return(await dO(e)).data().count}function VV(t,e=10,n){const r=xh(uo(Oe,"scores",t,"trials"),Pg("timestamp","desc"),ZS(e));return Ah(r,i=>{const s=i.docs.map(a=>({id:a.id,...a.data()})),o=i.docs[i.docs.length-1]??null;n({trials:s,lastDoc:o})})}async function wC(t,e=10,n=null){const r=uo(Oe,"scores",t,"trials"),i=[Pg("timestamp","desc"),ZS(e)];n&&i.push(oO(n));const s=xh(r,...i),o=await Mg(s),a=o.docs.map(c=>({id:c.id,...c.data()})),u=o.docs[o.docs.length-1]??null;return{trials:a,lastDoc:u}}async function jV(t){const e=lt(Oe,"scores",t,"stats","global"),n=lt(Oe,"scores",t,"stats","groups"),[r,i]=await Promise.all([Li(e),Li(n)]);return{global:r.exists()?r.data():null,groups:i.exists()?i.data():{}}}async function FV(t,e){const n=`${e.digits}d_${e.count}n`,r=lt(Oe,"scores",t,"stats","global"),i=lt(Oe,"scores",t,"stats","groups");try{await gO(Oe,async s=>{const o=await s.get(r),a=await s.get(i),u=o.exists()?o.data():{totalGames:0,totalScore:0,totalCorrect:0,bestStreak:0,currentStreak:0,minScore:He,maxScore:0,totalTime:0,minTime:He,maxTime:0},c=u.totalGames+1,f=u.totalScore+e.score,p=u.totalCorrect+(e.isCorrect?1:0),g=e.isCorrect?u.currentStreak+1:0,y=(u.totalTime||0)+(e.duration||0),T=u.minScore&&u.minScore>0?u.minScore:He,k=u.minTime&&u.minTime>0?u.minTime:He,N={totalGames:c,totalScore:f,totalCorrect:p,avgScore:Math.round(f/c),minScore:Math.min(T,e.isCorrect?e.score:He),maxScore:Math.max(u.maxScore,e.score),currentStreak:g,bestStreak:Math.max(u.bestStreak,g),accuracy:p/c*100,totalTime:y,minTime:Math.min(k,e.isCorrect?e.duration:He),maxTime:Math.max(u.maxTime,e.duration||0),upd_at:Fn()},E=(a.exists()?a.data():{})[n]||{totalGames:0,totalScore:0,totalCorrect:0,minScore:He,maxScore:0,bstr:0,cstr:0,totalTime:0,minTime:He,maxTime:0},C=e.isCorrect?E.cstr?E.cstr+1:1:0,D=Math.max(E.bstr?E.bstr:0,C),O=E.totalGames+1,V=E.totalScore+e.score,I=(E.totalTime||0)+(e.duration||0),_=E.minScore&&E.minScore>0?E.minScore:He,w=E.minTime&&E.minTime>0?E.minTime:He,S={digits:e.digits,count:e.count,totalGames:O,totalScore:V,totalCorrect:E.totalCorrect+(e.isCorrect?1:0),avgScore:V/O,minScore:Math.min(_,e.isCorrect?e.score:He),maxScore:Math.max(E.maxScore,e.score),accuracy:(E.totalCorrect+(e.isCorrect?1:0))/O*100,totalTime:I,minTime:Math.min(w,e.isCorrect?e.duration:He),maxTime:Math.max(E.maxTime,e.duration||0),bstr:D,cstr:C,upd_at:Fn()};o.exists()?s.update(r,N,{merge:!0}):s.set(r,N),a.exists()?s.update(i,{[n]:S},{merge:!0}):s.set(i,{[n]:S})})}catch(s){console.error("Stats update failed: ",s)}}function UV(t){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}${n}${r}`}async function zV(t,e){const n=UV(new Date),r=lt(Oe,"dailyStats",n);try{await Gi(r,{date:n,activeUids:_O(t),totalGames:ui(1),totalCorrect:ui(e.isCorrect?1:0),totalTime:ui(e.duration||0),students:{[t]:{games:ui(1),correct:ui(e.isCorrect?1:0),time:ui(e.duration||0),score:ui(e.score||0),upd_at:Fn()}},upd_by:t},{merge:!0})}catch(i){console.error("Daily stats update failed: ",i)}}async function BV(t){const e=await Li(lt(Oe,"students",t,"prefs","general"));return e.exists()?e.data():{}}async function EC(t,e){await Gi(lt(Oe,"students",t,"prefs","general"),{...e,updAt:Fn()},{merge:!0})}async function $V(t){const e=await Li(lt(Oe,"students",t,"prefs","customPresets"));return e.exists()?e.data():{presets:[],lastUsed:null}}async function jc(t,e,n){await Gi(lt(Oe,"students",t,"prefs","customPresets"),{presets:e,lastUsed:n||null,updAt:Fn()},{merge:!0})}async function WV(t,e){await Gi(lt(Oe,"students",t,"prefs","customPresets"),{lastUsed:e,updAt:Fn()},{merge:!0})}async function qV(t){const e=xh(uo(Oe,"challenges"),_p("code","==",t.toUpperCase().trim())),n=await Mg(e);if(n.empty)return null;const r=n.docs[0];return{id:r.id,...r.data()}}function GV(t,e){return Ah(lt(Oe,"challenges",t),n=>{n.exists()&&e({id:n.id,...n.data()})})}function HV(t,e){return Ah(uo(Oe,"challenges",t,"participants"),n=>{e(n.docs.map(r=>({uid:r.id,...r.data()})))})}async function KV(t,e,n){const r=lt(Oe,"challenges",t,"participants",e);if((await Li(r)).exists()){console.log("Already joined "+t);return}await Gi(r,{uid:e,name:n,joinedAt:Fn(),status:"waiting",totalScore:0,totalCorrect:0,questionsAttempted:0,scores:null})}function QV(t,e,n){return Ah(lt(Oe,"challenges",t,"participants",e,"private","token"),r=>{r.exists()&&n(r.data().rtdbToken)})}async function YV(t,e,{qIdx:n,submittedAnswer:r,duration:i}){await Gi(lt(Oe,"challenges",t,"participants",e,"private","submission"),{qIdx:n,submittedAnswer:r,duration:i,submittedAt:Fn()})}async function XV(t){const e=await Mg(xh(H2(Oe,"participants"),_p("uid","==",t),_p("status","==","finished"),Pg("finishedAt","desc")));return e.empty?(console.log("NOT FOUND ANY CHALLENGES "),[]):await Promise.all(e.docs.map(async r=>{const i=r.ref.parent.parent.id,o=(await Li(lt(Oe,"challenges",i))).data(),a=r.data(),u=(o==null?void 0:o.leaderboard)||[],c=u.find(f=>f.uid===t);return{challengeId:i,code:(o==null?void 0:o.code)||"—",config:(o==null?void 0:o.config)||{},finishedAt:a.finishedAt,totalParticipants:u.length,rank:(c==null?void 0:c.rank)??null,myResult:{totalScore:(c==null?void 0:c.totalScore)??a.totalScore??0,totalCorrect:(c==null?void 0:c.totalCorrect)??a.totalCorrect??0,questionsAttempted:(c==null?void 0:c.questionsAttempted)??a.questionsAttempted??0}}}))}const TC=L.createContext(null);function JV({children:t}){const[e,n]=L.useState(void 0),[r,i]=L.useState(null),[s,o]=L.useState(!1),[a,u]=L.useState(null),[c,f]=L.useState([]),[p,g]=L.useState(null),[y,T]=L.useState({});L.useEffect(()=>GP(Yd,async C=>{if(n(C),C){o(!0);const D=await _w(C.uid);i(D),BV(C.uid).then(O=>{u(O.nickname||null),T(O.displayPrefs||null)}),$V(C.uid).then(O=>{f(O.presets||[]),g(O.lastUsed||null)}),o(!1)}else i(null),u(null),f([]),g(null),T({})}),[]);const k=async()=>{const E=new Gn;await fN(Yd,E)},N=async()=>{await HP(Yd)},x=async()=>{if(!e)return;const E=await _w(e.uid);i(E)};return h.jsx(TC.Provider,{value:{user:e,profile:r,loadingProfile:s,loginWithGoogle:k,logout:N,refreshProfile:x,nickname:a,setNickname:u,presets:c,setPresets:f,lastUsed:p,setLastUsed:g,displayPrefs:y,setDisplayPrefs:T},children:t})}function Ki(){return L.useContext(TC)}function ZV(){const{loginWithGoogle:t}=Ki();return h.jsxs("div",{className:"card text-center flex flex-col gap-md",style:{gap:24},children:[h.jsx("div",{style:{fontSize:"4rem",lineHeight:1},children:"🥷"}),h.jsx("h1",{className:"title",children:"Number Ninja"}),h.jsxs("p",{className:"subtitle",children:["Watch the numbers flash, remember the total,",h.jsx("br",{}),"then type your answer. Can you keep up? 🧠⚡"]}),h.jsx("div",{className:"divider"}),h.jsxs("button",{className:"btn btn-primary btn-full btn-lg",onClick:t,children:[h.jsx(ej,{})," Sign in with Google"]}),h.jsxs("p",{style:{fontSize:"0.78rem",color:"#aaa",lineHeight:1.5},children:["Your information is used for internal analysis and record identification only.",h.jsx("br",{}),"Data is ",h.jsx("strong",{children:"never sold"})," to third parties."]})]})}function ej(){return h.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 48 48",children:[h.jsx("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),h.jsx("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),h.jsx("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),h.jsx("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})]})}const vw=[{name:"🏃 Sprint",digits:1,count:100,autoMode:!0,speed:.5,lastUsed:Date.now(),createdAt:Date.now()},{name:"🎯 Accuracy",digits:2,count:20,autoMode:!0,speed:1.5,lastUsed:Date.now(),createdAt:Date.now()},{name:"💪 Endurance",digits:1,count:500,autoMode:!0,speed:2,lastUsed:Date.now(),createdAt:Date.now()}];function tj(){const{user:t,refreshProfile:e,setPresets:n}=Ki(),[r,i]=L.useState(""),[s,o]=L.useState(!1),[a,u]=L.useState(!1),[c,f]=L.useState(""),[p,g]=L.useState(!1),y=parseInt(r,10),T=async()=>{if(f(""),g(!1),!s){g(!0),f("You must confirm you are the parent / guardian/ Above 18 and agree to the privacy notice before continuing.");return}if(!y||y<4||isNaN(y)){f("Please enter a valid age >= 4.");return}u(!0);try{await MV(t.uid,{name:t.displayName||"Student",email:t.email,age:y,consentGiven:!0,consentTimestamp:new Date().toISOString(),consentVersion:"1.0"}),await jc(t.uid,vw,null),n(vw),await e()}catch(k){console.log("Error "+k),f("Something went wrong. Please try again."),u(!1)}};return h.jsxs("div",{className:"card flex flex-col",style:{gap:20},children:[h.jsxs("div",{className:"text-center",children:[h.jsx("div",{style:{fontSize:"2.6rem"},children:"👨‍👩‍👧"}),h.jsx("h2",{className:"title",style:{fontSize:"1.6rem",marginTop:8},children:"Parent / Guardian /Above 18 Setup"}),h.jsx("p",{className:"subtitle mt-sm",children:"You are creating a learning profile for you / your child on Number Ninja."})]}),h.jsx("div",{className:"divider"}),h.jsxs("div",{style:{background:"var(--surface, #f8f9fa)",border:"1.5px solid var(--border, #e2e8f0)",borderRadius:14,padding:"18px 20px",fontSize:"0.88rem",lineHeight:1.7,color:"var(--text-muted)"},children:[h.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12,color:"var(--text)",fontWeight:700,fontSize:"0.92rem"},children:"🔒 We will store"}),h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[{icon:"👤",text:"Your name + email — for account identification and data archival communications"},{icon:"🎂",text:"User's age — to compare performance with age-group peers"},{icon:"🏆",text:"User's game scores + session history — to review progress and mistakes"}].map(({icon:k,text:N})=>h.jsxs("div",{style:{display:"flex",gap:10,alignItems:"flex-start"},children:[h.jsx("span",{style:{fontSize:"1rem",flexShrink:0,marginTop:1},children:k}),h.jsx("span",{children:N})]},N))}),h.jsxs("div",{style:{marginTop:14,paddingTop:12,borderTop:"1px solid var(--border, #e2e8f0)",display:"flex",flexDirection:"column",gap:4,fontSize:"0.83rem"},children:[h.jsxs("span",{children:["🚫 ",h.jsx("strong",{style:{color:"var(--text)"},children:"We never sell this data."})]}),h.jsxs("span",{children:["🗑️ You can delete all data anytime from ",h.jsx("strong",{style:{color:"var(--text)"},children:"Emailing us at champsworld-hub@googlegroups.com"}),"."]})]}),h.jsx("a",{href:"privacy.html",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",marginTop:12,color:"var(--primary, #4f46e5)",fontWeight:600,fontSize:"0.85rem",textDecoration:"none"},children:"📄 Read full Privacy Policy →"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"section-title",htmlFor:"age-input",children:"User's age 🎂"}),h.jsx("input",{id:"age-input",className:"input mt-sm",type:"number",min:"4",placeholder:"Enter user's age...",value:r,onChange:k=>i(k.target.value)}),r&&(isNaN(y)||y<4)&&h.jsx("p",{style:{color:"var(--red)",fontSize:"0.85rem",marginTop:6},children:"Please enter a valid age (4 years or older)."})]}),h.jsxs("label",{className:"checkbox-label",style:{alignItems:"flex-start",gap:12,padding:"12px 14px",borderRadius:10,border:`1.5px solid ${p?"var(--red, #ef4444)":"transparent"}`,background:p?"rgba(239,68,68,0.06)":"transparent",transition:"border 0.2s, background 0.2s"},children:[h.jsx("input",{type:"checkbox",checked:s,onChange:k=>{o(k.target.checked),k.target.checked&&(g(!1),f(""))},style:{marginTop:3,flexShrink:0}}),h.jsx("span",{style:{fontSize:"0.88rem",lineHeight:1.6},children:"I am the parent / guardian /Above 18 yrs and I consent to the data practices described above."})]}),c&&h.jsxs("p",{style:{color:"var(--red, #ef4444)",fontSize:"0.88rem",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:8,padding:"10px 14px",margin:0},children:["⚠️ ",c]}),h.jsx("button",{className:"btn btn-green btn-full btn-lg",disabled:a,onClick:T,children:a?"Saving...":"Create Profile 🎮"})]})}function Xd(t,e){return Math.floor(Math.random()*(e-t+1))+t}function nj(t,e,n=!1){const r=Math.pow(10,t)-1,i=Xd(1,r),s=[{value:i,operator:"+",running:i}];let o=i;for(let a=1;a<e;a++){let u=Xd(1,r),c=Math.random()<.5?"+":"-";c==="-"&&(o===0?c="+":o-u<0&&(u=Xd(1,o))),o=c==="+"?o+u:o-u,n?s.push({value:u,operator:c}):s.push({value:u,operator:c,running:o})}return{sequence:s,answer:o}}const Za={easy:{label:"⭐ Easy",digits:1,count:3,autoAllowed:!1},medium:{label:"⭐⭐ Medium",digits:2,count:5,autoAllowed:!1},hard:{label:"⭐⭐⭐ Hard",digits:2,count:7,autoAllowed:!1},custom:{label:"Custom",digits:null,count:null,autoAllowed:!0}},ww={digits:1,count:20},Rn={minDigits:1,maxDigits:8,minCount:2,maxCount:1010},bt=5;function rj(){const[t,e]=L.useState("easy"),[n,r]=L.useState(ww.digits),[i,s]=L.useState(ww.count),[o,a]=L.useState("idle"),[u,c]=L.useState([]),[f,p]=L.useState(0),[g,y]=L.useState(0),[T,k]=L.useState(""),[N,x]=L.useState(null),[E,C]=L.useState(null),[D,O]=L.useState(!1),[V,I]=L.useState(2),[_,w]=L.useState(0),S=t==="custom"?n:Za[t].digits,R=t==="custom"?i:Za[t].count,P=L.useCallback((U="sequential")=>{const{sequence:X}=nj(S,R);c(X),y(0),p(U==="showAll"?Math.min(bt,X.length):1),k(""),x(null),a("watching"),C(Date.now()),w(Z=>Z+1)},[S,R]),A=L.useCallback((U="sequential")=>{if(U==="showAll"){const X=(g+2)*bt;f<u.length?(y(Z=>Z+1),p(Math.min(X,u.length))):a("answering")}else f<u.length?p(X=>X+1):a("answering")},[f,g,u.length]),me=L.useCallback(()=>{var Yi;const U=parseInt(T,10);if(isNaN(U))return null;const X=((Yi=u[u.length-1])==null?void 0:Yi.running)??0,Z=U===X,se=Math.round((Date.now()-E)/1e3),G=1+.1*(S-1)+(R-2)/20,K=20+(R-3)*.5,ve=100/(1+se/K),ke=Z?Math.round(ve*G):0,Qi={isCorrect:Z,actualAnswer:X,userAnswer:U,count:u.length,digits:S,duration:se,score:ke};return x(Qi),a("result"),Qi},[T,u,E,S,R]),Te=L.useCallback(()=>{a("idle"),c([]),p(0),y(0),k(""),x(null),w(U=>U+1)},[]),qe=g*bt,xe=u.slice(qe,qe+bt),B=Math.ceil(u.length/bt),H=f>=u.length;return{difficulty:t,setDifficulty:e,customDigits:n,setCustomDigits:r,customCount:i,setCustomCount:s,resolvedDigits:S,resolvedCount:R,phase:o,sequence:u,visibleCount:f,batchIndex:g,currentBatch:xe,totalBatches:B,isLastBatch:H,visibleNumbers:u.slice(0,f),isLastNumber:f===u.length,userAnswer:T,setUserAnswer:k,result:N,startGame:P,showNext:A,submitAnswer:me,reset:Te,autoMode:D,setAutoMode:O,autoSpeed:V,setAutoSpeed:I,questionKey:_}}function ij({uid:t}){var C;const[e,n]=L.useState(null),[r,i]=L.useState([]);if(L.useEffect(()=>{jV(t).then(n),wC(t,20,null).then(({trials:D})=>{i([...D].reverse())})},[t]),e===null)return h.jsx(cj,{});if(!e.global)return h.jsx(hj,{});const s=e.global,o=Object.values(e.groups||{}).sort((D,O)=>D.digits!==O.digits?D.digits-O.digits:D.count-O.count),a=s.totalGames||0,u=s.totalCorrect||0,c=s.totalScore||0,f=s.accuracy?Math.round(s.accuracy):0,p=s.avgScore?Math.round(s.avgScore):0,g=s.maxScore??0,y=s.bestStreak??0,T=s.currentStreak??0,k=s.totalGames?Math.round(s.totalTime/s.totalGames):0,N=(C=s.upd_at)!=null&&C.toDate?IC(s.upd_at.toDate()):"—",x=s.minScore?s.minScore===He||s.minScore===0?"-":s.minScore:"-",E=s.minTime?s.minTime===He||s.minTime===0?"-":s.minTime+"s":"-";return h.jsxs("div",{className:"flex flex-col",style:{gap:20},children:[h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[h.jsx(sj,{pct:f,correct:u,total:a}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,alignContent:"start"},children:[h.jsx(rs,{label:"Total score",value:`${c}🪙`,color:"var(--purple-dark)",icon:"🏆"}),h.jsx(rs,{label:"Avg score",value:`${p}🪙`,color:"var(--blue-dark)",icon:"📊"}),h.jsx(rs,{label:"Best score",value:`${g}🪙`,color:"var(--green-dark)",icon:"⭐"}),h.jsx(rs,{label:"Best streak",value:`${y}🔥`,color:"var(--yellow-dark)",icon:""}),h.jsx(rs,{label:"Avg time",value:`${k}s`,color:"var(--blue)",icon:"⏱"}),h.jsx(rs,{label:"Games played",value:a,color:"var(--text)",icon:"🎮"})]})]}),h.jsxs("a",{href:"ScoringGuide.html",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 18px",background:"linear-gradient(135deg, #fff8e0, #ffefc0)",border:"2px solid #ffe090",borderRadius:14,textDecoration:"none",color:"var(--yellow-dark)",fontWeight:800,fontSize:"0.9rem",transition:"transform 0.15s, box-shadow 0.15s"},onMouseEnter:D=>{D.currentTarget.style.transform="translateY(-2px)",D.currentTarget.style.boxShadow="0 4px 16px rgba(249,168,37,0.25)"},onMouseLeave:D=>{D.currentTarget.style.transform="",D.currentTarget.style.boxShadow=""},children:[h.jsx("span",{children:"🪙 How is my score calculated? See the scoring guide"}),h.jsx("span",{style:{fontSize:"1.1rem"},children:"→"})]}),r.length>=3&&h.jsx(Jd,{title:"Score trend (last 20 games)",children:h.jsx(oj,{trials:r})}),o.length>=2&&h.jsx(Jd,{title:"Avg score by difficulty",children:h.jsx(aj,{groups:o})}),o.length>=1&&h.jsx(Jd,{title:"Accuracy by difficulty",children:h.jsx(lj,{groups:o})}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[h.jsx("div",{style:{flex:1,height:1,background:"#e8e8e8"}}),h.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700,whiteSpace:"nowrap"},children:"RAW BREAKDOWN"}),h.jsx("div",{style:{flex:1,height:1,background:"#e8e8e8"}})]}),h.jsx(Tw,{children:"Overall stats"}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,background:"#f0f8ff",borderRadius:12,padding:14},children:[h.jsx(Ne,{label:"Total games",value:a}),h.jsx(Ne,{label:"Accuracy",value:`${f}%`,color:f>=70?"var(--green-dark)":"var(--red)"}),h.jsx(Ne,{label:"Best streak",value:y,color:"var(--yellow-dark)"}),h.jsx(Ne,{label:"Current Streak",value:T,color:"var(--blue-dark)"}),h.jsx(Ne,{label:"Total score",value:c,color:"var(--purple-dark)"}),h.jsx(Ne,{label:"Avg score",value:p,color:"var(--blue-dark)"}),h.jsx(Ne,{label:"Best score",value:g,color:"var(--green-dark)"}),h.jsx(Ne,{label:"Worst score",value:x,color:"var(--red)"}),h.jsx(Ne,{label:"Last Played",value:N}),h.jsx(Ne,{label:"Total time",value:`${Math.round(s.totalTime||0)}s`,color:"var(--purple-dark)"}),h.jsx(Ne,{label:"Avg time",value:`${k}s`,color:"var(--blue-dark)"}),h.jsx(Ne,{label:"Best time",value:E,color:"var(--green-dark)"}),h.jsx(Ne,{label:"Worst time",value:`${s.maxTime??0}s`,color:"var(--red)"})]}),h.jsx(Tw,{children:"Breakdown by difficulty"}),h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:o.map(D=>h.jsx(uj,{g:D},`${D.digits}-${D.count}`))})]})}function sj({pct:t,correct:e,total:n}){const o=2*Math.PI*44,a=o*(t/100),u=t>=70?"var(--green)":t>=40?"var(--yellow-dark)":"var(--red)";return h.jsxs("div",{style:{background:"#f8f9fa",borderRadius:14,padding:14,display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[h.jsx("span",{style:{fontSize:"0.78rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:1},children:"Accuracy"}),h.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 120 120",children:[h.jsx("circle",{cx:60,cy:60,r:44,fill:"none",stroke:"#e8e8e8",strokeWidth:"12"}),h.jsx("circle",{cx:60,cy:60,r:44,fill:"none",stroke:u,strokeWidth:"12",strokeDasharray:`${a} ${o}`,strokeLinecap:"round",transform:"rotate(-90 60 60)",style:{transition:"stroke-dasharray 0.8s ease"}}),h.jsxs("text",{x:60,y:54,textAnchor:"middle",fontFamily:"Fredoka One, cursive",fontSize:"22",fill:u,children:[t,"%"]}),h.jsxs("text",{x:60,y:72,textAnchor:"middle",fontFamily:"Nunito, sans-serif",fontSize:"10",fill:"#999",fontWeight:"700",children:[e,"/",n]})]})]})}function oj({trials:t}){const i=t.map(g=>g.score??0),s=Math.max(...i,1),o=Math.min(...i),a=s-o||1,u=i.length,c=i.map((g,y)=>{const T=10+y/(u-1)*300,k=70-(g-o)/a*(80-10*2);return[T,k]}),f="M "+c.map(g=>g.join(",")).join(" L "),p=f+` L ${c[c.length-1][0]},80 L ${c[0][0]},80 Z`;return h.jsxs("svg",{width:"100%",viewBox:"0 0 320 80",preserveAspectRatio:"none",style:{display:"block"},children:[h.jsx("defs",{children:h.jsxs("linearGradient",{id:"spark-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[h.jsx("stop",{offset:"0%",stopColor:"#4a9eda",stopOpacity:"0.25"}),h.jsx("stop",{offset:"100%",stopColor:"#4a9eda",stopOpacity:"0.02"})]})}),h.jsx("path",{d:p,fill:"url(#spark-grad)"}),h.jsx("path",{d:f,fill:"none",stroke:"#4a9eda",strokeWidth:"2.5",strokeLinejoin:"round",strokeLinecap:"round"}),c.map(([g,y],T)=>h.jsx("circle",{cx:g,cy:y,r:"4",fill:t[T].isCorrect?"var(--green)":"var(--red)",stroke:"white",strokeWidth:"1.5"},T)),h.jsx("text",{x:10,y:78,fontSize:"9",fill:"#bbb",fontFamily:"Nunito,sans-serif",children:o}),h.jsx("text",{x:10,y:13,fontSize:"9",fill:"#bbb",fontFamily:"Nunito,sans-serif",children:s})]})}function aj({groups:t}){const i=Math.min(40,300/t.length-8),s=Math.max(...t.map(o=>o.avgScore||0),1);return h.jsx("svg",{width:"100%",viewBox:"0 0 320 100",style:{display:"block",overflow:"visible"},children:t.map((o,a)=>{const u=10+a*(300/t.length)+(300/t.length-i)/2,f=(o.avgScore||0)/s*70,p=80-f,g=["#4a9eda","#5cbf6a","#9c6fe4","#ffd54f"][a%4],y=`${o.digits}d·${o.count}n`;return h.jsxs("g",{children:[h.jsx("rect",{x:u,y:p,width:i,height:f,rx:"5",fill:g,opacity:"0.85"}),h.jsx("text",{x:u+i/2,y:p-4,textAnchor:"middle",fontSize:"10",fontFamily:"Fredoka One,cursive",fill:g,children:Number(o.avgScore||0).toFixed(1)}),h.jsx("text",{x:u+i/2,y:96,textAnchor:"middle",fontSize:"8.5",fontFamily:"Nunito,sans-serif",fill:"#888",fontWeight:"700",children:y})]},a)})})}function lj({groups:t}){const n=t.length*32+10,r=80;return h.jsx("svg",{width:"100%",viewBox:`0 0 320 ${n}`,style:{display:"block"},children:t.map((i,s)=>{const o=i.accuracy?Math.round(i.accuracy):0,a=(320-r-40)*o/100,u=s*32+6,c=o>=70?"var(--green)":o>=40?"var(--yellow-dark)":"var(--red)",f=`${i.digits}d · ${i.count}n`;return h.jsxs("g",{children:[h.jsx("text",{x:0,y:u+16,fontSize:"10",fontFamily:"Nunito,sans-serif",fontWeight:"700",fill:"#555",children:f}),h.jsx("rect",{x:r,y:u+4,width:320-r-40,height:18,rx:"9",fill:"#ececec"}),h.jsx("rect",{x:r,y:u+4,width:Math.max(a,0),height:18,rx:"9",fill:c,opacity:"0.85"}),h.jsxs("text",{x:288,y:u+16,fontSize:"10",fontFamily:"Fredoka One,cursive",fill:c,fontWeight:"bold",children:[o,"%"]})]},s)})})}function uj({g:t}){var p;const e=t.totalCorrect||0,n=Math.round(e/t.totalGames*100),r=Math.round(t.totalScore/t.totalGames),i=Math.round(t.totalTime/t.totalGames),s=t.minTime===He||t.minTime===0?"-":t.minTime+"s",o=t.minScore===He||t.minScore===0?"-":t.minScore,a=t.maxScore??0,u=t.bstr??"-",c=t.cstr??"-",f=(p=t.upd_at)!=null&&p.toDate?IC(t.upd_at.toDate()):"—";return h.jsxs("div",{style:{background:"#fafafa",border:"2px solid #e8e8e8",borderRadius:14,padding:"14px 16px"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[h.jsxs("span",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.1rem",color:"var(--blue-dark)"},children:[t.digits," digit",t.digits>1?"s":""," · ",t.count," numbers"]}),h.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:700},children:[t.totalGames," game",t.totalGames>1?"s":""]})]}),h.jsxs("div",{style:{marginBottom:10},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:4},children:[h.jsx("span",{children:"Accuracy"}),h.jsxs("span",{style:{fontWeight:800,color:n>=70?"var(--green-dark)":"var(--red)"},children:[n,"%"]})]}),h.jsx("div",{style:{height:8,background:"#e8e8e8",borderRadius:4,overflow:"hidden"},children:h.jsx("div",{style:{height:"100%",width:`${n}%`,background:n>=70?"var(--green)":"var(--red)",borderRadius:4,transition:"width 0.6s ease"}})})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},children:[h.jsx(Ne,{label:"✅ Correct",value:e,color:"var(--green-dark)"}),h.jsx(Ne,{label:"Avg score",value:r,color:"var(--purple-dark)"}),h.jsx(Ne,{label:"Best score",value:a,color:"var(--yellow-dark)"}),h.jsx(Ne,{label:"Worst score",value:o,color:"var(--yellow-dark)"}),h.jsx(Ne,{label:"Avg time",value:`${i}s`,color:"var(--blue-dark)"}),h.jsx(Ne,{label:"Total games",value:t.totalGames||0}),h.jsx(Ne,{label:"Total score",value:t.totalScore||0,color:"var(--purple-dark)"}),h.jsx(Ne,{label:"Best time",value:`${s}`,color:"var(--green-dark)"}),h.jsx(Ne,{label:"Worst time",value:`${t.maxTime}s`,color:"var(--red)"}),h.jsx(Ne,{label:"Best Streak",value:u,color:"var(--green-dark)"}),h.jsx(Ne,{label:"Current Streak",value:c,color:"var(--green-dark)"}),h.jsx(Ne,{label:"Last Played",value:f})]})]})}function Jd({title:t,children:e}){return h.jsxs("div",{style:{background:"#fafafa",border:"1.5px solid #ececec",borderRadius:14,padding:"14px 16px"},children:[h.jsx("p",{style:{fontSize:"0.78rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:1,marginBottom:10},children:t}),e,t.includes("trend")&&h.jsxs("div",{style:{display:"flex",gap:16,marginTop:8,justifyContent:"center"},children:[h.jsx(Ew,{color:"var(--green)",label:"Correct"}),h.jsx(Ew,{color:"var(--red)",label:"Wrong"})]})]})}function Ew({color:t,label:e}){return h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:[h.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:t}}),e]})}function rs({label:t,value:e,color:n,icon:r}){return h.jsxs("div",{style:{background:"white",border:"1.5px solid #ececec",borderRadius:10,padding:"8px 10px",textAlign:"center"},children:[h.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.2rem",color:n||"var(--text)",lineHeight:1.2},children:e}),h.jsxs("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)",fontWeight:700,marginTop:2},children:[r," ",t]})]})}function Tw({children:t}){return h.jsx("p",{className:"section-title",style:{margin:0},children:t})}function Ne({label:t,value:e,color:n}){return h.jsxs("div",{style:{textAlign:"center"},children:[h.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:n||"var(--blue-dark)"},children:e}),h.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:t})]})}function cj(){return h.jsxs("div",{className:"loader",style:{padding:"40px 0"},children:[h.jsx("div",{className:"loader-dot"}),h.jsx("div",{className:"loader-dot"}),h.jsx("div",{className:"loader-dot"})]})}function hj(){return h.jsxs("div",{className:"text-center",style:{padding:"40px 0",color:"var(--text-muted)"},children:[h.jsx("div",{style:{fontSize:"3rem"},children:"📭"}),h.jsx("p",{style:{fontWeight:700,marginTop:12},children:"No stats yet!"}),h.jsx("p",{style:{fontSize:"0.875rem",marginTop:6},children:"Play your first round to see your stats."})]})}function IC(t){return t.toLocaleString("en-IN",{day:"numeric",month:"numeric",year:"numeric"})}function dj({uid:t}){const[e,n]=L.useState(null),[r,i]=L.useState(1),[s,o]=L.useState(0),[a,u]=L.useState(!1),[c,f]=L.useState([null]),p=Math.max(1,Math.ceil(s/Qd));if(L.useEffect(()=>(yw(t).then(o),r!==1?void 0:VV(t,Qd,({trials:T,lastDoc:k})=>{n(T),f(N=>{const x=[...N];return x[1]=k,x}),yw(t).then(o)})),[t,r]),L.useEffect(()=>{r!==1&&(u(!0),wC(t,Qd,c[r-1]??null).then(({trials:y,lastDoc:T})=>{n(y),f(k=>{const N=[...k];return N[r]=T,N}),u(!1)}))},[t,r]),e===null||a)return h.jsx(pj,{});if(s===0)return h.jsx(mj,{});const g=e.filter(y=>y.isCorrect).length;return e.length&&Math.round(g/e.length*100),h.jsxs("div",{className:"flex flex-col",style:{gap:14},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("p",{className:"section-title",style:{margin:0},children:["Page ",r," of ",p,h.jsxs("span",{style:{fontWeight:400,color:"var(--text-muted)",fontSize:"0.85rem"},children:[" (",s," total)"]})]}),r===1&&h.jsx("span",{style:{fontSize:"0.75rem",color:"var(--red)"},children:"🔴 Live"})]}),h.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:8},children:e.map(y=>h.jsx(fj,{t:y},y.id))}),h.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",justifyContent:"center",marginTop:4},children:[h.jsx("button",{className:"btn btn-outline",style:{padding:"8px 20px",fontSize:"0.9rem"},disabled:r===1,onClick:()=>i(y=>y-1),children:"← Prev"}),h.jsxs("span",{style:{fontWeight:700,fontSize:"0.9rem",color:"var(--text-muted)",minWidth:80,textAlign:"center"},children:[r," / ",p]}),h.jsx("button",{className:"btn btn-primary",style:{padding:"8px 20px",fontSize:"0.9rem"},disabled:r>=p,onClick:()=>i(y=>y+1),children:"Next →"})]})]})}function fj({t}){var n;const e=(n=t.timestamp)!=null&&n.toDate?_j(t.timestamp.toDate()):"—";return h.jsxs("li",{style:{background:"#f8f9fa",borderRadius:12,padding:"12px 14px",display:"flex",flexDirection:"column",gap:6,borderLeft:`4px solid ${t.isCorrect?"var(--green)":"var(--red)"}`},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsx("span",{className:`result-badge ${t.isCorrect?"badge-correct":"badge-wrong"}`,children:t.isCorrect?"✅ Correct":"❌ Wrong"}),h.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:e})]}),t.numbers&&h.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1rem",letterSpacing:"0.5px",wordBreak:"break-all"},children:gj(t.numbers)}),h.jsxs("div",{style:{display:"flex",gap:14,fontSize:"0.82rem",color:"var(--text-muted)",flexWrap:"wrap"},children:[h.jsxs("span",{children:["Answer: ",h.jsx("strong",{style:{color:"var(--text)"},children:t.actualAnswer})]}),h.jsxs("span",{children:["Yours: ",h.jsx("strong",{style:{color:t.isCorrect?"var(--green-dark)":"var(--red)"},children:t.userAnswer})]}),h.jsxs("span",{children:["⏱ ",t.duration,"s"]}),h.jsxs("span",{children:["🪙 ",t.score??0," pts"]}),h.jsxs("span",{children:[t.count," nums · ",t.digits,"d"]})]})]})}function pj(){return h.jsxs("div",{className:"loader",style:{padding:"40px 0"},children:[h.jsx("div",{className:"loader-dot"}),h.jsx("div",{className:"loader-dot"}),h.jsx("div",{className:"loader-dot"})]})}function mj(){return h.jsxs("div",{className:"text-center",style:{padding:"40px 0",color:"var(--text-muted)"},children:[h.jsx("div",{style:{fontSize:"3rem"},children:"📭"}),h.jsx("p",{style:{fontWeight:700,marginTop:12},children:"No games yet!"}),h.jsx("p",{className:"text-sm mt-sm",children:"Play your first round and results will appear here."})]})}function gj(t){return t.split(" ").map((e,n)=>h.jsx("span",{style:{color:e.startsWith("-")?"var(--red)":"var(--green-dark)",marginRight:4},children:e},n))}function _j(t){return t.toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}const Wn=[{label:"BG",full:"Beginner",value:5},{label:"LR",full:"Learning",value:3},{label:"INT",full:"Intermediate",value:2},{label:"ADV",full:"Advanced",value:1.5},{label:"EX",full:"Expert",value:1},{label:"🏅",full:"🏅 World Record",value:.5}];function yj(t,e,n,r){if(!r)return`${t}d · ${e}n · Manual`;const i=Wn.find(o=>o.value===n),s=i?i.label:`${n}s`;return`${t}d · ${e}n · ${s}`}function vj({autoMode:t,setAutoMode:e,autoSpeed:n,setAutoSpeed:r}){const i=Wn.findIndex(c=>c.value===n),s=i===-1?2:i,o=Wn[s],a=(o==null?void 0:o.value)===.5;function u(c){const f=parseInt(c.target.value);r(Wn[f].value)}return h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.75rem"},children:[h.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--text-muted)"},children:"Mode:"}),h.jsx("button",{onClick:()=>e(!1),style:{padding:"4px 16px",borderRadius:"999px",fontSize:"0.82rem",fontWeight:700,border:"2px solid var(--purple)",background:t?"white":"var(--purple)",color:t?"var(--purple)":"white",cursor:"pointer"},children:"Manual"}),h.jsx("button",{onClick:()=>e(!0),style:{padding:"4px 16px",borderRadius:"999px",fontSize:"0.82rem",fontWeight:700,border:"2px solid var(--purple)",background:t?"var(--purple)":"white",color:t?"white":"var(--purple)",cursor:"pointer"},children:"⏱️ Auto"})]}),t&&h.jsxs("div",{children:[h.jsx("input",{type:"range",min:0,max:Wn.length-1,step:1,value:s,onChange:u,style:{width:"100%",accentColor:a?"#FFD700":"var(--purple)"}}),h.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginTop:4},children:Wn.map((c,f)=>h.jsx("div",{title:`${c.full} — ${c.value}s per number`,onClick:()=>r(c.value),style:{fontSize:"0.7rem",fontWeight:700,cursor:"pointer",textAlign:"center",minWidth:28,padding:"2px 0",borderRadius:4,color:s===f?a&&f===Wn.length-1?"#7a5800":"var(--purple-dark)":"var(--text-muted)",background:s===f?f===Wn.length-1?"#FFD70044":"#f0ebff":"transparent"},children:c.label},f))}),h.jsxs("div",{style:{textAlign:"center",fontSize:"0.78rem",color:a?"#7a5800":"var(--purple-dark)",fontWeight:700,marginTop:6},children:[o.full," — ",o.value," seconds per number",a?" 🏅":""]})]})]})}function wj({presets:t,onPick:e,onCancel:n}){return h.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.4)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",zIndex:10,padding:"1rem"},children:h.jsxs("div",{style:{background:"white",borderRadius:12,padding:"1.25rem",width:"100%"},children:[h.jsx("p",{style:{fontWeight:700,marginBottom:"0.75rem",fontSize:"0.9rem"},children:"20 presets saved — pick one to replace:"}),h.jsx("div",{style:{maxHeight:220,overflowY:"auto",marginBottom:"0.75rem"},children:t.map((r,i)=>h.jsxs("div",{onClick:()=>e(i),style:{padding:"0.5rem 0.75rem",borderRadius:8,cursor:"pointer",marginBottom:4,border:"1px solid var(--border)",fontSize:"0.85rem",fontWeight:600},onMouseEnter:s=>s.currentTarget.style.background="var(--bg)",onMouseLeave:s=>s.currentTarget.style.background="white",children:[r.name,h.jsxs("span",{style:{fontWeight:400,color:"var(--text-muted)",marginLeft:8,fontSize:"0.78rem"},children:[r.digits,"d · ",r.count,"n · ",r.autoMode?`${r.speed}s`:"Manual"]})]},i))}),h.jsx("button",{className:"btn btn-outline btn-full",onClick:n,children:"Cancel"})]})})}function SC({game:t,mode:e="game",effectiveShowAll:n="sequential"}){var H;const{user:r,presets:i,setPresets:s,lastUsed:o,setLastUsed:a}=Ki(),{customDigits:u,setCustomDigits:c,customCount:f,setCustomCount:p,autoMode:g,setAutoMode:y,autoSpeed:T,setAutoSpeed:k,startGame:N}=t,[x,E]=L.useState(!1),[C,D]=L.useState(""),[O,V]=L.useState(""),[I,_]=L.useState(!1),[w,S]=L.useState(null);L.useEffect(()=>{e==="game"&&o&&(c(o.digits),p(o.count),y(o.autoMode??!1),k(o.speed??2))},[]);const R=Math.pow(10,u)-1,P=g?`⏱️ Auto — ${((H=Wn.find(U=>U.value===T))==null?void 0:H.full)||T+"s"} (${T}second/number)`:"✋ Manual — click Next for each number";function A(U){c(U.digits),p(U.count),y(U.autoMode??!1),k(U.speed??2)}function me(){const U=yj(u,f,T,g);D(U),V(""),E(!0)}function Te(U){D(U.target.value);const X=i.find(Z=>Z.name===U.target.value.trim());V(X?"A preset with this name already exists — saving will overwrite it.":"")}async function qe(U=null){const X=C.trim();if(!X)return;const Z={name:X,digits:u,count:f,autoMode:g,speed:T,lastUsed:Date.now(),createdAt:Date.now()};let se=[...i];const G=se.findIndex(K=>K.name===X);if(G!==-1)se[G]={...Z,createdAt:se[G].createdAt};else if(U!==null)se[U]=Z;else if(se.length>=20){S(Z),_(!0),E(!1);return}else se=[Z,...se];se.sort((K,ve)=>(ve.lastUsed||0)-(K.lastUsed||0)),s(se),await jc(r.uid,se,o),E(!1),_(!1),S(null)}async function xe(U){const X=[...i];X[U]=w,X.sort((Z,se)=>(se.lastUsed||0)-(Z.lastUsed||0)),s(X),await jc(r.uid,X,o),_(!1),S(null)}async function B(){const U={digits:u,count:f,autoMode:g,speed:T};a(U),await WV(r.uid,U),N(n?"showAll":"sequential")}return h.jsxs("div",{style:{position:"relative"},children:[I&&h.jsx(wj,{presets:i,onPick:xe,onCancel:()=>{_(!1),S(null)}}),h.jsxs("div",{style:{background:"#f8f0ff",borderRadius:14,padding:18,display:"flex",flexDirection:"column",gap:16},children:[i.length>0&&h.jsxs("div",{children:[h.jsx("p",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.4rem"},children:"MY CUSTOM GAME PRESETS"}),h.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:h.jsxs("select",{onChange:U=>{const X=i[parseInt(U.target.value)];X&&A(X)},defaultValue:"",style:{flex:1,padding:"0.5rem 0.75rem",borderRadius:10,border:"2px solid var(--purple)",fontSize:"0.85rem",fontFamily:"Nunito, sans-serif",background:"white",color:"var(--text)",outline:"none"},children:[h.jsx("option",{value:"",disabled:!0,children:"Load a preset..."}),i.map((U,X)=>h.jsx("option",{value:X,children:U.name},X))]})})]}),h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[h.jsx("span",{className:"section-title",style:{margin:0},children:"Digits per number"}),h.jsx("span",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:"var(--purple-dark)"},children:u})]}),h.jsx("input",{type:"range",min:Rn.minDigits,max:Rn.maxDigits,value:u,onChange:U=>c(Number(U.target.value)),style:{width:"100%",accentColor:"var(--purple)"}}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"var(--text-muted)",marginTop:4},children:[h.jsx("span",{children:"1 digit (1–9)"}),h.jsx("span",{children:"2 digits (1–99)"}),h.jsx("span",{children:"8 digits"})]})]}),h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[h.jsx("span",{className:"section-title",style:{margin:0},children:"Number of terms"}),h.jsx("input",{type:"number",min:Rn.minCount,max:Rn.maxCount,value:f,onChange:U=>{const X=Math.max(Rn.minCount,Math.min(Rn.maxCount,Number(U.target.value)));isNaN(X)||p(X)},style:{width:80,textAlign:"center",fontFamily:"Fredoka One, cursive",fontSize:"1.2rem",border:"2px solid var(--purple)",borderRadius:8,padding:"2px 6px",color:"var(--purple-dark)",background:"white",outline:"none"}})]}),h.jsx("input",{type:"range",min:Rn.minCount,max:Rn.maxCount,value:Math.min(f,Rn.maxCount),onChange:U=>p(Number(U.target.value)),style:{width:"100%",accentColor:"var(--purple)"}}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"var(--text-muted)",marginTop:4},children:[h.jsx("span",{children:"2 terms"}),h.jsx("span",{children:"50"}),h.jsxs("span",{children:[Rn.maxCount,"+"]})]})]}),h.jsx(vj,{autoMode:g,setAutoMode:y,autoSpeed:T,setAutoSpeed:k}),h.jsxs("div",{style:{background:"white",borderRadius:10,padding:"10px 14px",fontSize:"0.85rem",color:"var(--text-muted)",lineHeight:1.6},children:[h.jsxs("div",{children:["You'll see ",h.jsxs("strong",{style:{color:"var(--text)"},children:[f," numbers"]})," with up to"," ",h.jsxs("strong",{style:{color:"var(--text)"},children:[u," digit",u>1?"s":""]})," each"," ","(max value: ",h.jsx("strong",{style:{color:"var(--text)"},children:R}),")."]}),h.jsx("div",{style:{marginTop:"0.3rem",fontSize:"0.8rem"},children:P})]}),x?h.jsxs("div",{style:{background:"white",borderRadius:10,padding:"0.75rem"},children:[h.jsx("input",{type:"text",value:C,onChange:Te,placeholder:"Preset name...",style:{width:"100%",padding:"0.5rem 0.75rem",borderRadius:8,boxSizing:"border-box",border:`2px solid ${O?"#BA7517":"var(--purple)"}`,fontSize:"0.9rem",fontFamily:"Nunito, sans-serif",outline:"none",marginBottom:"0.5rem"}}),O&&h.jsxs("p",{style:{fontSize:"0.75rem",color:"#BA7517",marginBottom:"0.5rem"},children:["⚠️ ",O]}),h.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[h.jsx("button",{className:"btn btn-primary",style:{flex:1},onClick:()=>qe(),children:"Save"}),h.jsx("button",{className:"btn btn-outline",style:{flex:1},onClick:()=>E(!1),children:"Cancel"})]})]}):h.jsx("button",{className:"btn btn-outline btn-full",onClick:me,children:"+ Save as preset"}),e==="game"&&h.jsx("button",{className:"btn btn-green btn-full btn-lg",onClick:B,children:"Start Game! 🚀"})]})]})}const Ej={master:!1,easy:!1,medium:!1,hard:!1,custom:!1};function Tj({game:t,onClose:e}){const{user:n,profile:r,nickname:i,setNickname:s,presets:o,setPresets:a,lastUsed:u,displayPrefs:c,setDisplayPrefs:f}=Ki(),[p,g]=L.useState(i||""),[y,T]=L.useState(!1),[k,N]=L.useState(!1),[x,E]=L.useState(c??Ej),[C,D]=L.useState(!1);function O(w){E(S=>{const R={...S,[w]:!S[w]},P=R.easy||R.medium||R.hard||R.custom;return{...R,master:P?R.master:!1}}),N(!1)}function V(){E(w=>({...w,master:!w.master})),N(!1)}async function I(){T(!0);const w={nickname:p.trim()||null,displayPrefs:x};await EC(n.uid,w),s(p.trim()||null),f(x),T(!1),N(!0),setTimeout(()=>N(!1),2e3)}async function _(w){const S=o.filter((R,P)=>P!==w);a(S),await jc(n.uid,S,u)}return h.jsxs(h.Fragment,{children:[h.jsx("div",{onClick:e,style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:50}}),h.jsxs("div",{style:{position:"fixed",top:0,left:0,bottom:0,width:"85%",maxWidth:420,background:"white",zIndex:51,overflowY:"auto",padding:"1.5rem",boxShadow:"4px 0 24px rgba(0,0,0,0.15)",animation:"slideInLeft 0.25s ease"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.5rem"},children:[h.jsx("h2",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:"var(--purple-dark)",margin:0},children:"⚙️ Settings"}),h.jsx("button",{className:"btn btn-outline",onClick:e,style:{padding:"6px 14px"},children:"✕ Close"})]}),h.jsxs(Iw,{label:"👤 PROFILE",children:[h.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.25rem"},children:"Full name (from Google)"}),h.jsx("p",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"1rem",color:"var(--text)"},children:(r==null?void 0:r.name)||(n==null?void 0:n.displayName)}),h.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.35rem"},children:["Nickname ",h.jsx("span",{style:{opacity:.6},children:"(shown top-left in game)"})]}),h.jsx("input",{type:"text",value:p,onChange:w=>{g(w.target.value),N(!1)},placeholder:"e.g. Ari, Ninja, Flash...",maxLength:20,style:{width:"100%",padding:"0.5rem 0.75rem",borderRadius:8,border:"2px solid var(--purple)",fontSize:"0.9rem",fontFamily:"Nunito, sans-serif",outline:"none",boxSizing:"border-box"}})]}),h.jsxs(Iw,{label:"📺 NUMBER DISPLAY",children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:x.master?"0.75rem":0},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"var(--text)"},children:"Show all numbers"}),h.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:x.master?"Sliding window of 5 — tap Next to advance":"One number at a time (default)"})]}),h.jsx(Sw,{value:x.master,onChange:V})]}),x.master&&h.jsx("div",{style:{background:"var(--bg)",borderRadius:10,padding:"0.6rem 0.75rem",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[{key:"easy",label:"⭐ Easy",sub:"3 numbers"},{key:"medium",label:"⭐⭐ Medium",sub:"5 numbers"},{key:"hard",label:"⭐⭐⭐ Hard",sub:"7 numbers"},{key:"custom",label:"⚙️ Custom",sub:"variable, window of 5"}].map(({key:w,label:S,sub:R})=>h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"0.4rem",borderBottom:w!=="custom"?"1px solid var(--border)":"none"},children:[h.jsxs("div",{children:[h.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--text)"},children:S}),h.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)",marginLeft:6},children:R})]}),h.jsx(Sw,{value:x[w],onChange:()=>O(w)})]},w))})]}),h.jsx("button",{className:"btn btn-primary",onClick:I,disabled:y,style:{padding:"6px 20px",fontSize:"0.85rem",marginBottom:"1.5rem"},children:k?"✓ Saved!":y?"Saving...":"Save"}),h.jsxs("div",{children:[h.jsxs("button",{onClick:()=>D(w=>!w),style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",background:"none",border:"none",cursor:"pointer",padding:"0 0 0.75rem 0"},children:[h.jsx("p",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--text-muted)",margin:0,letterSpacing:"0.05em"},children:"🎮 CUSTOM TRAINING PRESETS"}),h.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:C?"▲ Hide":"▼ Show"})]}),C&&h.jsxs(h.Fragment,{children:[o.length===0?h.jsxs("div",{style:{background:"var(--bg)",borderRadius:12,padding:"1.5rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.875rem"},children:["No presets saved yet.",h.jsx("br",{}),h.jsx("span",{style:{fontSize:"0.8rem",opacity:.7},children:"Go to Play → Custom to create one."})]}):h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginBottom:"1rem"},children:o.map((w,S)=>h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"var(--bg)",borderRadius:10,padding:"0.6rem 0.75rem",border:"1px solid var(--border)"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:700,fontSize:"0.875rem",color:"var(--text)"},children:w.name}),h.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:[w.digits,"d · ",w.count,"n · ",w.autoMode?`${w.speed}s auto`:"Manual"]})]}),h.jsx("button",{onClick:()=>_(S),style:{background:"none",border:"none",cursor:"pointer",fontSize:"1rem",color:"var(--text-muted)",padding:"4px 8px"},title:"Delete preset",children:"🗑️"})]},S))}),t&&h.jsx(SC,{game:t,mode:"settings"})]})]})]}),h.jsx("style",{children:`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
      `})]})}function Iw({label:t,children:e}){return h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.75rem",letterSpacing:"0.05em",margin:"0 0 0.75rem 0"},children:t}),h.jsx("div",{style:{background:"var(--bg)",borderRadius:12,padding:"1rem"},children:e})]})}function Sw({value:t,onChange:e}){return h.jsx("button",{onClick:e,style:{position:"relative",width:44,height:24,borderRadius:12,border:"none",cursor:"pointer",background:t?"var(--purple)":"var(--border)",transition:"background 0.2s",flexShrink:0},"aria-checked":t,role:"switch",children:h.jsx("span",{style:{position:"absolute",top:3,left:t?23:3,width:18,height:18,borderRadius:"50%",background:"white",boxShadow:"0 1px 3px rgba(0,0,0,0.2)",transition:"left 0.2s"}})})}function Ij(){return OV}function Sj(t,e){const n=Ij(),r=vC(n,`s/${t}`);return wV(r,i=>{i.exists()&&e(i.val())}),()=>EV(r)}const Dt={IDLE:"idle",JOINING:"joining",WAITING:"waiting",PLAYING:"playing",FINISHED:"finished"},xj={showAll:!0,autoMode:!1,autoSpeed:2},Xt=5,Cj=200,du=400;function Aj({sequence:t,visibleCount:e,isLastNumber:n,showAll:r=!1,autoMode:i=!1,autoSpeed:s=2.5,onNext:o,onReady:a,onBack:u,questionLabel:c,currentBatch:f=[],batchIndex:p=0,totalBatches:g=1,isLastBatch:y=!1}){const T=L.useRef(null),k=L.useRef(null),[N,x]=L.useState(0),[E,C]=L.useState(!1),D=L.useRef(-1);L.useEffect(()=>{r&&p!==D.current&&(D.current=p,x(0),C(!0),f.forEach((G,K)=>{setTimeout(()=>{x(K+1),K===f.length-1&&setTimeout(()=>C(!1),du)},K*Cj)}))},[p,r]),L.useEffect(()=>{r&&(D.current=-1)},[]);const[O,V]=L.useState(null),I=O!==null,_=t[e-1],w=t.slice(0,e-1),S=Math.ceil(w.length/Xt);function R(G){const K=w.length-G*Xt,ve=Math.max(0,K-Xt);return w.slice(ve,K)}function P(G){const K=p-1-G;return K<0?[]:t.slice(K*Xt,(K+1)*Xt)}const me=I&&(r?O<p-1:O<S-1),Te=I&&O>0,qe=I?r?P(O):R(O):[];function xe(){V(I?null:0)}const B=r?p>0:w.length>0;function H(){clearInterval(T.current),k.current=Date.now(),V(null),o==null||o()}function U(){clearInterval(T.current),V(null),a==null||a()}L.useEffect(()=>{if(!(!i||r)&&!n)return k.current=Date.now(),T.current=setInterval(()=>{Date.now()-k.current>=s*1e3&&H()},100),()=>clearInterval(T.current)},[i,s,e,n,r]);const[X,Z]=L.useState(0);L.useEffect(()=>{if(!i||n||r){Z(0);return}const G=setInterval(()=>{Z(Math.min((Date.now()-(k.current||Date.now()))/(s*1e3),1))},50);return()=>clearInterval(G)},[i,s,e,n,r]);const se=r?y:n;return h.jsxs("div",{className:"flex flex-col",style:{gap:16},children:[c&&h.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:700},children:c}),h.jsx("div",{className:"progress-dots",children:t.map((G,K)=>h.jsx("div",{className:`dot ${K<e-1?"done":K===e-1?"active":""}`},K))}),r&&h.jsxs("div",{style:{textAlign:"center",fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700},children:["Batch ",p+1," of ",g]}),i&&!n&&!r&&h.jsx("div",{style:{height:4,background:"var(--border)",borderRadius:2,overflow:"hidden"},children:h.jsx("div",{style:{height:"100%",borderRadius:2,transition:"width 50ms linear",background:s<.5?"#D85A30":s===.5?"#FFD700":"var(--purple)",width:`${X*100}%`}})}),h.jsxs("div",{className:"number-display",children:[r&&!I&&h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,justifyContent:"center",padding:"8px 0"},children:f.map((G,K)=>{const ve=p*Xt+K,ke=K<N;return h.jsxs("div",{className:`number-bubble current-large ${ke?"bounce-in":""}`,style:{opacity:ke?1:0,transform:ke?"scale(1)":"scale(0)",transition:`opacity ${du}ms, transform ${du}ms`},children:[ve>0&&h.jsx("span",{className:"operator",children:G.operator}),h.jsx("span",{className:`num ${G.operator==="+"?"positive":"negative"}`,children:G.value})]},`${p}-${K}`)})}),!r&&!I&&_&&h.jsxs("div",{className:"number-bubble current-large bounce-in",children:[e>1&&h.jsx("span",{className:"operator",children:_.operator}),h.jsx("span",{className:`num ${_.operator==="+"?"positive":"negative"}`,children:_.value})]},e),I&&h.jsxs("div",{style:{width:"100%"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},children:[h.jsx("button",{onClick:()=>me&&V(G=>G+1),disabled:!me,style:xw(!me),children:"‹ Older"}),h.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:r?`Batch ${p-O} of ${g}`:"Previous numbers"}),h.jsx("button",{onClick:()=>Te&&V(G=>G-1),disabled:!Te,style:xw(!Te),children:"Newer ›"})]}),h.jsx("div",{className:"history-stream",children:qe.map((G,K)=>{const ve=r?(p-1-O)*Xt+K:w.length-O*Xt-(qe.length-K);return h.jsxs("span",{className:`number-bubble-sm ${G.operator==="+"?"positive":"negative"}`,children:[ve>0&&h.jsx("span",{className:"op",children:G.operator}),G.value]},K)})})]})]}),h.jsxs("div",{className:"flex flex-col",style:{gap:10},children:[se?h.jsx("button",{className:"btn btn-yellow btn-full btn-lg",onClick:U,children:"I'm ready! ✅"}):h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"btn btn-primary btn-full btn-lg",onClick:H,disabled:r&&E,children:r?"Next batch →":"Next number →"}),i&&!r&&h.jsx("div",{style:{textAlign:"center",fontSize:"0.82rem",color:"var(--text-muted)",padding:"0.5rem",background:"var(--bg)",borderRadius:"10px"},children:s===.5?"🏅 WR pace — next number in 0.5s⏱️":s<.5?`⏱️ ${s}s pace — beyond WR!`:`⏱️ Auto advancing every ${s}s`})]}),h.jsxs("div",{className:"flex flex-row",style:{gap:10},children:[u&&h.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.9rem",flex:1},onClick:u,children:"← Back to Menu"}),h.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.9rem",flex:u?1:"100%"},onClick:xe,disabled:!B,children:I?"🙈 Hide":"👀 Peek"})]})]}),h.jsx("style",{children:`
        @keyframes bounceIn {
          0%   { transform: scale(0);    opacity: 0; }
          60%  { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1);    opacity: 1; }
        }
        .bounce-in { animation: bounceIn ${du}ms cubic-bezier(.36,.07,.19,.97) both; }
      `})]})}function xw(t){return{background:"none",border:"1px solid var(--border)",borderRadius:6,padding:"2px 10px",fontSize:"0.78rem",cursor:t?"default":"pointer",color:t?"var(--border)":"var(--text-muted)"}}function kj({challenge:t,uid:e,channel:n,state:r,showAll:i,autoMode:s,autoSpeed:o,onFinished:a}){const[u,c]=L.useState("waiting"),[f,p]=L.useState(null),[g,y]=L.useState(1),[T,k]=L.useState(""),[N,x]=L.useState(0),[E,C]=L.useState(null),[D,O]=L.useState(!1),V=L.useRef({}),I=L.useRef([]),_=L.useRef(-2),w=L.useRef(!1),S=L.useRef(!1),R=L.useRef("waiting"),P=L.useRef(null);L.useEffect(()=>{R.current=u},[u]),L.useEffect(()=>{if(!r)return;const G=S.current;S.current=r===Dt.PLAYING,!G&&S.current&&R.current==="waiting"&&A()},[r]),L.useEffect(()=>{if(!n)return;console.log("got data in channel "),Object.keys(n).forEach(K=>{const ve=K.match(/^question_(\d+)$/);if(!ve)return;const ke=parseInt(ve[1]);V.current[ke]||(V.current[ke]=n[K],I.current.includes(ke)||(I.current=[...I.current,ke].sort((Qi,Yi)=>Qi-Yi)))});const G=n.next;if(G!=null&&G!==_.current){if(_.current=G,G===-1){w.current=!0,(R.current==="waiting"||R.current==="between")&&A();return}S.current&&(R.current==="waiting"||R.current==="between")&&A()}},[n]),L.useEffect(()=>{u==="answering"&&setTimeout(()=>{var G;return(G=P.current)==null?void 0:G.focus()},100)},[u]);function A(){if(!S.current)return;const G=I.current;if(G.length===0){w.current&&(R.current==="waiting"||R.current==="between")&&(a==null||a(),c("finished"),R.current="finished");return}const K=G[0];V.current[K]&&(I.current=G.slice(1),p(K),y(1),k(""),C(Date.now()),c("watching"),R.current="watching")}const me=f!==null?V.current[f]:null,Te=(me==null?void 0:me.sequence)||[],qe=g>=Te.length,xe=Math.floor((g-1)/Xt),B=Math.ceil(Te.length/Xt)||1,H=Te.slice(xe*Xt,(xe+1)*Xt),U=xe>=B-1;function X(){if(i){const G=Math.min((xe+1)*Xt+1,Te.length);y(G)}else y(G=>G+1)}function Z(){c("answering"),R.current="answering"}async function se(){if(!T||f===null||D)return;O(!0);const G=parseFloat(((Date.now()-E)/1e3).toFixed(2));await YV(t.id,e,{qIdx:f,submittedAnswer:parseInt(T),duration:G}),x(K=>K+1),O(!1),c("between"),R.current="between",A()}return u==="waiting"?h.jsxs("div",{className:"flex flex-col text-center",style:{gap:16},children:[h.jsxs("div",{className:"loader",children:[h.jsx("span",{className:"loader-dot"}),h.jsx("span",{className:"loader-dot"}),h.jsx("span",{className:"loader-dot"})]}),h.jsx("p",{className:"subtitle",children:"Get ready..."})]}):u==="between"?h.jsxs("div",{className:"flex flex-col text-center",style:{gap:16},children:[h.jsx("div",{style:{fontSize:"2.5rem"},children:"✓"}),h.jsx("p",{className:"subtitle",children:"Answer submitted! Next question incoming..."}),h.jsxs("div",{className:"loader",children:[h.jsx("span",{className:"loader-dot"}),h.jsx("span",{className:"loader-dot"}),h.jsx("span",{className:"loader-dot"})]}),h.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:["Questions done: ",N]})]}):u==="finished"?h.jsxs("div",{className:"flex flex-col text-center",style:{gap:16},children:[h.jsx("div",{style:{fontSize:"2.5rem"},children:"🎉"}),h.jsx("h3",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:"var(--purple-dark)"},children:"All done!"}),h.jsxs("p",{className:"subtitle",children:["You answered ",N," questions."]})]}):u==="watching"?h.jsxs("div",{className:"flex flex-col",style:{gap:4},children:[h.jsx("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",color:"var(--text-muted)"},children:h.jsxs("span",{children:["Question ",N+1]})}),h.jsx(Aj,{sequence:Te,visibleCount:g,isLastNumber:qe,showAll:i,autoMode:s,autoSpeed:o,onNext:X,onReady:Z,currentBatch:H,batchIndex:xe,totalBatches:B,isLastBatch:U},f)]}):u==="answering"?h.jsxs("div",{className:"flex flex-col",style:{gap:16},children:[h.jsxs("div",{className:"text-center",children:[h.jsx("div",{style:{fontSize:"2.5rem"},children:"🤔"}),h.jsx("h3",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:"var(--purple-dark)"},children:"What was the total?"}),h.jsxs("p",{className:"subtitle",children:["You saw ",Te.length," numbers — what did they add up to?"]})]}),h.jsx("div",{className:"answer-row",children:h.jsx("input",{ref:P,className:"answer-input",type:"number",placeholder:"?",value:T,onChange:G=>k(G.target.value),onKeyDown:G=>G.key==="Enter"&&se()})}),h.jsx("button",{className:"btn btn-purple btn-full btn-lg",style:{background:"var(--purple)",color:"white",boxShadow:"0 4px 0 var(--purple-dark)"},disabled:!T||D,onClick:se,children:D?"Submitting...":"Submit Answer 🎯"}),h.jsxs("p",{style:{textAlign:"center",fontSize:"0.8rem",color:"var(--text-muted)"},children:["Questions done: ",N]})]}):null}function Rj({uid:t,name:e}){const[n,r]=L.useState([]),[i,s]=L.useState("join"),[o,a]=L.useState(""),[u,c]=L.useState(""),[f,p]=L.useState(!1),[g,y]=L.useState([]),[T,k]=L.useState(!1),[N,x]=L.useState("");L.useEffect(()=>{if(i!=="past"){console.log("NOT PAST CHALLENGES TAB");return}console.log("PAST CHALLENGES TAB"),k(!0),x(""),XV(t).then(O=>{y(O||[]),k(!1)}).catch(O=>{console.log("PAST CHALLENGES TAB"+O),console.error(O),x("Could not load past challenges."),k(!1)})},[i,t]);async function E(){if(!(!o.trim()||f)){c(""),p(!0);try{const O=await qV(o.trim());if(!O){c("Challenge not found. Check the code and try again."),p(!1);return}if(O.status==="finished"){c("This challenge has already ended."),p(!1);return}if(n.find(V=>V.id===O.id)){s(O.id),a(""),p(!1);return}await KV(O.id,t,e),r(V=>[...V,{id:O.id,code:O.code||o.trim(),config:O.config,state:O.status==="active"?Dt.PLAYING:Dt.WAITING}]),s(O.id),a("")}catch{c("Something went wrong. Try again.")}p(!1)}}function C(O){r(V=>V.filter(I=>I.id!==O)),s(V=>V===O?"join":V),y([])}function D(O,V){r(I=>I.map(_=>_.id===O?{..._,state:V}:_))}return h.jsxs("div",{className:"flex flex-col",style:{gap:0},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3,marginBottom:16,overflowX:"auto",scrollbarWidth:"none"},children:[n.map(O=>h.jsx(Pj,{session:O,isActive:i===O.id,onClick:()=>s(O.id)},O.id)),h.jsx(Cw,{label:"＋",isActive:i==="join",onClick:()=>s("join"),style:{fontSize:"2rem",fontWeight:900,color:"#E53935",lineHeight:1,display:"flex",alignItems:"center"}}),h.jsx(Cw,{label:"📋 Past",isActive:i==="past",onClick:()=>s("past"),style:{marginLeft:"auto"}})]}),i==="join"&&h.jsx(Nj,{code:o,setCode:a,error:u,joining:f,onJoin:E}),n.map(O=>h.jsx("div",{style:{display:i===O.id?"block":"none"},children:h.jsx(bj,{sessionMeta:O,uid:t,name:e,onFinished:()=>C(O.id),onStateChange:V=>D(O.id,V)})},O.id)),i==="past"&&h.jsx(Fj,{pastChallenges:g,loading:T,error:N,onGoJoin:()=>s("join")})]})}function Cw({label:t,isActive:e,onClick:n,style:r}){return h.jsx("button",{onClick:n,style:{padding:"6px 12px",fontSize:"0.82rem",fontWeight:700,border:"none",borderRadius:8,cursor:"pointer",background:e?"white":"transparent",color:e?"var(--purple-dark)":"var(--text-muted)",boxShadow:e?"0 1px 4px rgba(0,0,0,0.10)":"none",transition:"all 0.15s",whiteSpace:"nowrap",flexShrink:0,...r},children:t})}function Pj({session:t,isActive:e,onClick:n}){const r=t.state===Dt.PLAYING||t.state===Dt.WAITING,i=t.state===Dt.PLAYING?"#4CAF50":"#FFB300",s=t.state===Dt.PLAYING?"0 0 0 2px rgba(76,175,80,0.25)":"0 0 0 2px rgba(255,179,0,0.25)";return h.jsxs("button",{onClick:n,style:{padding:"6px 10px",fontSize:"0.78rem",fontWeight:700,border:"none",borderRadius:8,cursor:"pointer",background:e?"white":"transparent",color:e?"var(--purple-dark)":"var(--text-muted)",boxShadow:e?"0 1px 4px rgba(0,0,0,0.10)":"none",transition:"all 0.15s",whiteSpace:"nowrap",flexShrink:0,display:"flex",alignItems:"center",gap:5,fontFamily:"Fredoka One, cursive",letterSpacing:"0.04em"},children:[r&&h.jsx("span",{style:{width:7,height:7,borderRadius:"50%",flexShrink:0,background:i,boxShadow:s}}),t.code]})}function Nj({code:t,setCode:e,error:n,joining:r,onJoin:i}){return h.jsxs("div",{className:"flex flex-col",style:{gap:20},children:[h.jsxs("div",{className:"text-center",children:[h.jsx("div",{style:{fontSize:"3rem"},children:"🏆"}),h.jsx("h2",{className:"title",style:{fontSize:"1.4rem"},children:"Join Challenge"}),h.jsx("p",{className:"subtitle",children:"Enter the code from your teacher to join"})]}),h.jsxs("div",{children:[h.jsx("input",{type:"text",className:"answer-input",placeholder:"e.g. NNJ-4X2K",value:t,onChange:s=>e(s.target.value.toUpperCase()),onKeyDown:s=>s.key==="Enter"&&i(),style:{width:"100%",textAlign:"center",fontSize:"1.5rem",letterSpacing:"0.15em",fontFamily:"Fredoka One, cursive"}}),n&&h.jsx("p",{style:{color:"var(--red)",fontSize:"0.85rem",textAlign:"center",marginTop:"0.5rem"},children:n})]}),h.jsx("button",{className:"btn btn-primary btn-full btn-lg",onClick:i,disabled:!t.trim()||r,children:r?"Joining...":"Join Challenge →"}),h.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"1rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.82rem"},children:["Past challenges — tap ",h.jsx("strong",{children:"📋 Past"})," above"]})]})}function bj({sessionMeta:t,uid:e,onFinished:n,onStateChange:r}){const{displayPrefs:i,setDisplayPrefs:s}=Ki(),o=(i==null?void 0:i.challenge)??xj,[a,u]=L.useState(t.state||Dt.WAITING),[c,f]=L.useState({id:t.id,code:t.code,config:t.config}),[p,g]=L.useState(null),[y,T]=L.useState(null),[k,N]=L.useState([]),[x,E]=L.useState(!1),[C,D]=L.useState(o.showAll),[O,V]=L.useState(o.autoMode),[I,_]=L.useState(o.autoSpeed),[w,S]=L.useState(!1),[R,P]=L.useState(5),A=L.useRef(null),me=L.useRef(a===Dt.WAITING);L.useEffect(()=>{r(a)},[a]),L.useEffect(()=>GV(t.id,H=>{f(H),H.status==="active"&&(me.current&&(S(!0),P(5)),u(Dt.PLAYING)),H.status==="finished"&&u(Dt.FINISHED)}),[t.id]),L.useEffect(()=>QV(t.id,e,g),[t.id,e]),L.useEffect(()=>{if(p)return Sj(p,T)},[p]),L.useEffect(()=>HV(t.id,N),[t.id]),L.useEffect(()=>{if(!w){clearInterval(A.current);return}return A.current=setInterval(()=>{P(H=>H<=1?(clearInterval(A.current),S(!1),me.current=!1,0):H-1)},1e3),()=>clearInterval(A.current)},[w]);function Te(){clearInterval(A.current),S(!1),me.current=!1}async function qe(){const U={...i,challenge:{showAll:C,autoMode:O,autoSpeed:I}};await EC(e,{displayPrefs:U}),s(U)}const xe=[...k].sort((H,U)=>U.totalScore-H.totalScore),B=xe.findIndex(H=>H.uid===e)+1;if(a===Dt.WAITING)return h.jsx("div",{className:"flex flex-col",style:{gap:16},children:h.jsx(Mj,{challenge:c,participants:k,token:p,uid:e,showAll:C,setShowAll:D,autoMode:O,setAutoMode:V,autoSpeed:I,setAutoSpeed:_,onSavePrefs:qe})});if(a===Dt.PLAYING)return h.jsxs("div",{className:"flex flex-col",style:{gap:0},children:[w&&h.jsx(Lj,{countdown:R,showAll:C,autoMode:O,autoSpeed:I,onDismiss:Te}),h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[h.jsx(Dj,{code:c.code}),h.jsx(Oj,{open:x,onToggle:()=>E(H=>!H),count:k.length,myRank:B})]}),h.jsx(kj,{challenge:c,uid:e,channel:y,state:a,showAll:C,autoMode:O,autoSpeed:I,onFinished:()=>u(Dt.FINISHED)}),h.jsx(Vj,{open:x,participants:k,uid:e,myRank:B})]});if(a===Dt.FINISHED){const H=k.find(U=>U.uid===e);return h.jsx("div",{className:"flex flex-col",style:{gap:16},children:h.jsx(jj,{sorted:xe,myResult:H,myRank:B,uid:e,participants:k,onDone:n})})}return null}function Dj({code:t,dim:e}){return h.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:5,background:e?"var(--bg)":"var(--purple-light)",border:"1.5px solid var(--border)",borderRadius:8,padding:"3px 10px",fontFamily:"Fredoka One, cursive",fontSize:"0.85rem",letterSpacing:"0.08em",color:e?"var(--text-muted)":"var(--purple-dark)"},children:["🏆 ",t]})}function Oj({open:t,onToggle:e,count:n,myRank:r}){return h.jsxs("button",{onClick:e,style:{display:"flex",alignItems:"center",gap:5,background:t?"var(--purple-light)":"var(--bg)",border:`1.5px solid ${t?"var(--purple)":"var(--border)"}`,borderRadius:8,padding:"5px 10px",fontSize:"0.78rem",fontWeight:700,color:t?"var(--purple-dark)":"var(--text-muted)",cursor:"pointer",transition:"all 0.15s"},children:["🏅 ",r>0?`#${r}`:"Board",n>0&&h.jsx("span",{style:{background:t?"var(--purple)":"var(--border)",color:t?"white":"var(--text-muted)",borderRadius:99,padding:"1px 6px",fontSize:"0.72rem"},children:n}),h.jsx("span",{style:{fontSize:"0.7rem"},children:t?"▲":"▼"})]})}function Mj({challenge:t,participants:e,token:n,uid:r,showAll:i,setShowAll:s,autoMode:o,setAutoMode:a,autoSpeed:u,setAutoSpeed:c,onSavePrefs:f}){const[p,g]=L.useState(!1);async function y(){await f(),g(!0),setTimeout(()=>g(!1),2e3)}return h.jsxs("div",{className:"flex flex-col text-center",style:{gap:20},children:[h.jsx("div",{style:{fontSize:"3rem"},children:"⏳"}),h.jsxs("div",{children:[h.jsx("h2",{className:"title",style:{fontSize:"1.3rem"},children:"You're in!"}),h.jsx("p",{className:"subtitle",children:"Waiting for your teacher to start the challenge..."})]}),(t==null?void 0:t.config)&&h.jsxs("div",{style:{background:"var(--bg)",borderRadius:12,padding:"1rem",fontSize:"0.875rem",color:"var(--text-muted)",display:"flex",gap:"1.5rem",justifyContent:"center"},children:[h.jsxs("span",{children:["📐 ",t.config.digits," digit",t.config.digits>1?"s":""]}),h.jsxs("span",{children:["🔢 ",t.config.count," numbers"]}),h.jsxs("span",{children:["🎮 ",t.config.numGames," questions"]})]}),h.jsxs("div",{style:{background:"var(--bg)",borderRadius:14,padding:"1rem",textAlign:"left"},children:[h.jsx("p",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.75rem",letterSpacing:"0.05em"},children:"📺 HOW TO SEE NUMBERS"}),h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:i?"0.75rem":0},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"var(--text)"},children:"Show all (5 at a time)"}),h.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:i?"Sliding window of 5 — tap Next batch to advance":"One number at a time"})]}),h.jsx(Aw,{value:i,onChange:()=>{s(T=>!T),i||a(!1)}})]}),!i&&h.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"0.75rem",marginTop:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:o?"0.75rem":0},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:700,fontSize:"0.85rem",color:"var(--text)"},children:"Auto-advance ⏱️"}),h.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:o?`Numbers advance every ${u}s`:"Tap manually to advance"})]}),h.jsx(Aw,{value:o,onChange:()=>a(T=>!T)})]}),o&&h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"var(--text-muted)",marginBottom:4},children:[h.jsx("span",{children:"Speed"}),h.jsx("span",{style:{fontWeight:700,color:u<=.5?"#D85A30":"var(--purple-dark)"},children:u===.5?"0.5s 🏅 WR pace":`${u}s / number`})]}),h.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.5",value:u,onChange:T=>c(parseFloat(T.target.value)),style:{width:"100%",accentColor:"var(--purple)"}}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.68rem",color:"var(--text-muted)"},children:[h.jsx("span",{children:"0.5s (fastest)"}),h.jsx("span",{children:"3s (slowest)"})]})]})]}),h.jsx("button",{onClick:y,className:"btn btn-outline",style:{marginTop:"1rem",width:"100%",fontSize:"0.82rem",padding:"6px 0"},children:p?"✓ Saved as default":"💾 Save as my default"})]}),e.length>0&&h.jsxs("div",{style:{textAlign:"left"},children:[h.jsxs("p",{style:{fontSize:"0.78rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.5rem"},children:["STUDENTS JOINED (",e.length,")"]}),e.map(T=>{var k;return h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.4rem 0",borderBottom:"1px solid var(--border)",fontSize:"0.875rem"},children:[h.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"var(--purple-light)",color:"var(--purple-dark)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",fontWeight:700},children:(k=T.name)==null?void 0:k.charAt(0).toUpperCase()}),h.jsxs("span",{style:{fontWeight:T.uid===r?700:400},children:[T.name,T.uid===r?" (you)":""]})]},T.uid)})]}),h.jsx("p",{style:{fontSize:"0.78rem",fontWeight:n?700:400,color:n?"#1D9E75":"var(--text-muted)"},children:n?"✓ Ready — waiting for teacher to start":"Setting up your channel..."})]})}function Lj({countdown:t,showAll:e,autoMode:n,autoSpeed:r,onDismiss:i}){const s=e?"Show all (5 at a time)":n?`Auto-advance every ${r}s`:"Sequential (manual)";return h.jsxs(h.Fragment,{children:[h.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:100},onClick:i}),h.jsxs("div",{style:{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)",background:"white",borderRadius:16,padding:"1.5rem",width:"min(340px, 90vw)",zIndex:101,boxShadow:"0 8px 32px rgba(0,0,0,0.18)",textAlign:"center"},children:[h.jsx("div",{style:{fontSize:"2.5rem",marginBottom:8},children:"🚀"}),h.jsx("h3",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.2rem",color:"var(--purple-dark)",margin:"0 0 0.5rem"},children:"Challenge Started!"}),h.jsxs("p",{style:{fontSize:"0.875rem",color:"var(--text-muted)",marginBottom:"1rem"},children:["Your teacher just started. Proceeding with your current settings in ",h.jsxs("strong",{style:{color:"var(--purple-dark)"},children:[t,"s"]}),"."]}),h.jsxs("div",{style:{background:"var(--bg)",borderRadius:10,padding:"0.6rem 1rem",marginBottom:"1rem",fontSize:"0.82rem",color:"var(--text)"},children:["📺 ",h.jsx("strong",{children:s})]}),h.jsx("button",{className:"btn btn-primary btn-full",onClick:i,style:{fontSize:"0.9rem"},children:"Got it — let's go! ✅"})]})]})}function Vj({open:t,participants:e,uid:n,myRank:r}){const i=[...e].sort((s,o)=>o.totalScore-s.totalScore);return h.jsx("div",{style:{overflow:"hidden",maxHeight:t?"400px":"0px",transition:"max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)"},children:h.jsxs("div",{style:{marginTop:16,background:"var(--bg)",borderRadius:12,border:"1.5px solid var(--border)",overflow:"hidden"},children:[h.jsxs("div",{style:{padding:"10px 14px",background:"linear-gradient(135deg, var(--purple-light) 0%, #EDE7F6 100%)",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[h.jsx("span",{style:{fontWeight:700,fontSize:"0.82rem",color:"var(--purple-dark)"},children:"🏅 Live Leaderboard"}),h.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--purple-dark)",opacity:.7},children:[r>0?`You're #${r}`:""," · ",e.length," players"]})]}),h.jsxs("div",{style:{maxHeight:280,overflowY:"auto"},children:[i.length===0&&h.jsx("p",{style:{textAlign:"center",color:"var(--text-muted)",fontSize:"0.82rem",padding:"1rem"},children:"Waiting for scores..."}),i.map((s,o)=>{var c;const a=s.uid===n,u=o===0?"🥇":o===1?"🥈":o===2?"🥉":null;return h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"8px 14px",background:a?"#FFFBEA":"transparent",borderBottom:"1px solid var(--border)",borderLeft:a?"3px solid #FFD54F":"3px solid transparent"},children:[h.jsx("span",{style:{minWidth:26,textAlign:"center",fontWeight:700,fontSize:u?"1rem":"0.78rem",color:"var(--text-muted)"},children:u||`#${o+1}`}),h.jsx("span",{style:{width:26,height:26,borderRadius:"50%",flexShrink:0,background:a?"#FFD54F":"var(--purple-light)",color:a?"#7A5800":"var(--purple-dark)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.68rem",fontWeight:700},children:(c=s.name)==null?void 0:c.charAt(0).toUpperCase()}),h.jsxs("span",{style:{flex:1,fontSize:"0.82rem",fontWeight:a?700:400,color:a?"var(--text)":"var(--text-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[s.name,a?" (you)":""]}),h.jsxs("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)",minWidth:32,textAlign:"right"},children:[s.questionsAttempted||0,"✓"]}),h.jsx("span",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1rem",color:a?"#7A5800":"var(--purple-dark)",minWidth:40,textAlign:"right"},children:s.totalScore||0})]},s.uid)})]}),h.jsx("div",{style:{padding:"6px 14px",textAlign:"center",fontSize:"0.72rem",color:"var(--text-muted)",borderTop:"1px solid var(--border)"},children:"Updates live as answers are scored"})]})})}function jj({sorted:t,myResult:e,myRank:n,uid:r,participants:i,onDone:s}){return h.jsxs("div",{className:"flex flex-col",style:{gap:16},children:[h.jsxs("div",{className:"text-center",children:[h.jsx("div",{style:{fontSize:"3rem"},children:n===1?"🥇":n===2?"🥈":n===3?"🥉":"🎉"}),h.jsx("h2",{className:"title",style:{fontSize:"1.3rem"},children:"Challenge Complete!"}),h.jsxs("p",{className:"subtitle",children:["You ranked #",n," out of ",i.length," students"]})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,background:"#f8f9fa",borderRadius:12,padding:16},children:[h.jsx(fu,{label:"Questions done",value:(e==null?void 0:e.questionsAttempted)||0}),h.jsx(fu,{label:"Total score",value:(e==null?void 0:e.totalScore)||0,color:"var(--purple-dark)"}),h.jsx(fu,{label:"Correct answers",value:(e==null?void 0:e.totalCorrect)||0,color:"var(--green-dark)"}),h.jsx(fu,{label:"Your rank",value:`#${n}`,color:"var(--blue-dark)"})]}),h.jsxs("div",{children:[h.jsx("p",{style:{fontSize:"0.78rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.5rem"},children:"LEADERBOARD"}),t.map((o,a)=>h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.5rem 0.5rem",borderBottom:"1px solid var(--border)",background:o.uid===r?"#FFFBEA":"transparent",borderRadius:4,borderLeft:o.uid===r?"3px solid #FFD54F":"3px solid transparent"},children:[h.jsx("span",{style:{fontSize:"1.1rem",minWidth:28},children:a===0?"🥇":a===1?"🥈":a===2?"🥉":`#${a+1}`}),h.jsxs("span",{style:{flex:1,fontWeight:o.uid===r?700:400,fontSize:"0.875rem"},children:[o.name,o.uid===r?" (you)":""]}),h.jsxs("span",{style:{fontSize:"0.875rem",color:"var(--text-muted)"},children:[o.questionsAttempted||0," done"]}),h.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem",color:"var(--purple-dark)",minWidth:48,textAlign:"right"},children:o.totalScore||0})]},o.uid))]}),h.jsx("button",{className:"btn btn-outline btn-full",onClick:s,children:"Close"})]})}function Fj({pastChallenges:t,loading:e,error:n,onGoJoin:r}){return e?h.jsxs("div",{className:"flex flex-col text-center",style:{gap:12},children:[h.jsxs("div",{className:"loader",children:[h.jsx("span",{className:"loader-dot"}),h.jsx("span",{className:"loader-dot"}),h.jsx("span",{className:"loader-dot"})]}),h.jsx("p",{className:"subtitle",children:"Loading past challenges..."})]}):n?h.jsx("p",{style:{textAlign:"center",color:"var(--red)",fontSize:"0.85rem"},children:n}):t.length===0?h.jsxs("div",{className:"text-center",style:{padding:"2rem 0",color:"var(--text-muted)"},children:[h.jsx("div",{style:{fontSize:"2.5rem",marginBottom:12},children:"📋"}),h.jsx("p",{style:{fontSize:"0.9rem"},children:"No past challenges yet."}),h.jsx("p",{style:{fontSize:"0.8rem",marginTop:4},children:"Finished challenges will appear here."}),h.jsx("button",{className:"btn btn-outline",style:{marginTop:12,fontSize:"0.85rem"},onClick:r,children:"Join one →"})]}):h.jsx("div",{className:"flex flex-col",style:{gap:10},children:t.map(i=>h.jsx(Uj,{challenge:i},i.challengeId))})}function Uj({challenge:t}){var s,o,a,u,c,f;const[e,n]=L.useState(!1),r=t.rank?t.rank===1?"🥇":t.rank===2?"🥈":t.rank===3?"🥉":`#${t.rank}`:"🎉",i=t.finishedAt?new Date((s=t.finishedAt)!=null&&s.seconds?t.finishedAt.seconds*1e3:t.finishedAt).toLocaleDateString(void 0,{month:"short",day:"numeric"}):"—";return h.jsxs("div",{style:{border:"1.5px solid var(--border)",borderRadius:12,overflow:"hidden"},children:[h.jsxs("button",{onClick:()=>n(p=>!p),style:{width:"100%",padding:"12px 14px",background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:12,textAlign:"left"},children:[h.jsx("span",{style:{fontSize:t.rank<=3?"1.5rem":"0.95rem",minWidth:32,textAlign:"center"},children:r}),h.jsxs("div",{style:{flex:1},children:[h.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"0.95rem",color:"var(--purple-dark)",letterSpacing:"0.05em"},children:t.code}),h.jsxs("div",{style:{fontSize:"0.73rem",color:"var(--text-muted)",marginTop:1},children:[i," · ",(o=t.config)==null?void 0:o.digits,"d · ",(a=t.config)==null?void 0:a.count,"n"]})]}),h.jsxs("div",{style:{textAlign:"right"},children:[h.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.1rem",color:"var(--purple-dark)"},children:((u=t.myResult)==null?void 0:u.totalScore)??"—"}),h.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)"},children:"pts"})]}),h.jsx("span",{style:{fontSize:"0.7rem",color:"var(--text-muted)",marginLeft:4,transform:e?"rotate(180deg)":"none",transition:"transform 0.2s"},children:"▼"})]}),e&&h.jsxs("div",{style:{padding:"12px 14px 14px",borderTop:"1px solid var(--border)"},children:[h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,marginBottom:10},children:[h.jsx(Zd,{label:"Correct",value:((c=t.myResult)==null?void 0:c.totalCorrect)??"—",color:"var(--green-dark)"}),h.jsx(Zd,{label:"Attempted",value:((f=t.myResult)==null?void 0:f.questionsAttempted)??"—"}),h.jsx(Zd,{label:"Rank",value:r,color:"var(--purple-dark)"})]}),t.totalParticipants&&h.jsxs("div",{style:{fontSize:"0.73rem",color:"var(--text-muted)",textAlign:"center"},children:[t.totalParticipants," students participated"]})]})]})}function fu({label:t,value:e,color:n}){return h.jsxs("div",{style:{textAlign:"center"},children:[h.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.8rem",color:n||"var(--blue-dark)"},children:e}),h.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700},children:t})]})}function Zd({label:t,value:e,color:n}){return h.jsxs("div",{style:{textAlign:"center",background:"var(--bg)",borderRadius:8,padding:"8px 4px"},children:[h.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.2rem",color:n||"var(--blue-dark)"},children:e}),h.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)",fontWeight:700},children:t})]})}function Aw({value:t,onChange:e}){return h.jsx("button",{onClick:e,style:{position:"relative",width:44,height:24,borderRadius:12,border:"none",cursor:"pointer",background:t?"var(--purple)":"var(--border)",transition:"background 0.2s",flexShrink:0},"aria-checked":t,role:"switch",children:h.jsx("span",{style:{position:"absolute",top:3,left:t?23:3,width:18,height:18,borderRadius:"50%",background:"white",boxShadow:"0 1px 3px rgba(0,0,0,0.2)",transition:"left 0.2s"}})})}function zj(){var E;const{user:t,profile:e,logout:n,nickname:r,displayPrefs:i}=Ki(),s=rj(),[o,a]=L.useState("play"),[u,c]=L.useState(null),[f,p]=L.useState(!1),g=L.useRef(null),[y,T]=L.useState(!1),k=!s.autoMode&&!!(i!=null&&i.master)&&!!(i!=null&&i[s.difficulty]);L.useEffect(()=>{s.phase==="answering"&&setTimeout(()=>{var C;return(C=g.current)==null?void 0:C.focus()},100)},[s.phase]),L.useEffect(()=>{if(s.phase==="watching"){p(!0);const C=setTimeout(()=>p(!1),350);return()=>clearTimeout(C)}},[s.visibleCount,s.phase]);const N=async()=>{const C=s.submitAnswer();if(C){c({correct:C.isCorrect}),setTimeout(()=>c(null),900);try{await LV(t.uid,{...C,sequence:s.sequence})}catch(D){console.warn("Failed to save trial:",D)}}},x=((e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"S").split(" ").map(C=>C[0]).join("").slice(0,2).toUpperCase();return h.jsxs("div",{className:"card",style:{maxWidth:550},children:[h.jsxs("div",{className:"header-bar",children:[h.jsxs("div",{className:"avatar-chip",onClick:()=>T(!0),style:{cursor:"pointer"},title:"Settings",children:[h.jsx("div",{className:"avatar",children:x}),h.jsx("span",{children:r||((E=e==null?void 0:e.name)==null?void 0:E.split(" ")[0])||"Student"})]}),h.jsxs("div",{className:"title",style:{display:"flex",fontSize:"1rem",alignItems:"center",gap:"0.5rem"},children:[h.jsx("img",{src:"./logo_header.png",alt:"ChampsWorld",style:{height:"32px",width:"auto",borderRadius:"6px"}}),"Number Ninja"]}),h.jsx("button",{className:"btn btn-outline",style:{padding:"8px 16px",fontSize:"0.85rem"},onClick:n,children:"Sign out"})]}),h.jsx("div",{className:"tabs",children:[{key:"play",label:"🎮 Play"},{key:"stats",label:"📊 Stats"},{key:"history",label:"📜 History"},{key:"challenge",label:"🏆 Challenge"}].map(({key:C,label:D})=>h.jsx("button",{className:`tab ${o===C?"active":""}`,onClick:()=>a(C),children:D},C))}),o==="play"&&h.jsxs(h.Fragment,{children:[s.phase==="idle"&&h.jsx(Bj,{game:s,effectiveShowAll:k}),s.phase==="watching"&&h.jsx(qj,{game:s,totalBump:f,effectiveShowAll:k}),s.phase==="answering"&&h.jsx(Gj,{game:s,answerRef:g,onSubmit:N,onKeyDown:C=>C.key==="Enter"&&N()}),s.phase==="result"&&h.jsx(Hj,{game:s,effectiveShowAll:k,onSwitchHistory:()=>a("history")})]}),o==="stats"&&h.jsx(ij,{uid:t.uid}),o==="history"&&h.jsx(dj,{uid:t.uid}),o==="challenge"&&h.jsx(Rj,{uid:t.uid,name:r||(e==null?void 0:e.name)}),u&&h.jsx("div",{className:"feedback-overlay",children:h.jsx("div",{className:`feedback-badge ${u.correct?"feedback-correct":"feedback-wrong"}`,children:u.correct?"🎉 Correct!":"❌ Oops!"})}),y&&h.jsx(Tj,{game:s,onClose:()=>T(!1)}),h.jsx("div",{style:{textAlign:"center",paddingBottom:"0.75rem"},children:h.jsx("a",{href:"./privacy.html",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.75rem",color:"var(--text-muted)",textDecoration:"none",opacity:.7},onMouseEnter:C=>C.currentTarget.style.opacity="1",onMouseLeave:C=>C.currentTarget.style.opacity="0.7",children:"Privacy Policy"})})]})}function Bj({game:t,effectiveShowAll:e}){return h.jsxs("div",{className:"flex flex-col",style:{gap:20},children:[h.jsxs("div",{className:"text-center",children:[h.jsx("div",{style:{fontSize:"3rem"},children:"🧮"}),h.jsx("h2",{className:"title",style:{fontSize:"1.6rem"},children:"Mental Math"}),h.jsx("p",{className:"subtitle mt-sm",children:e?`Numbers appear ${bt} at a time — remember them all, then type your answer!`:"Numbers appear one by one — keep a running total, then type your answer!"})]}),h.jsxs("div",{children:[h.jsx("p",{className:"section-title",children:"Choose difficulty:"}),h.jsx("div",{className:"difficulty-grid mt-sm",style:{gridTemplateColumns:"repeat(4, 1fr)"},children:Object.entries(Za).map(([n,{label:r}])=>h.jsx("button",{className:`diff-btn ${t.difficulty===n?"selected":""}`,onClick:()=>t.setDifficulty(n),children:n==="custom"?h.jsxs("div",{className:"diff-btn-custom-content",children:[h.jsx("span",{className:"diff-btn-icon",children:"⚙️"}),h.jsx("span",{children:r})]}):r},n))})]}),t.difficulty==="custom"?h.jsx(SC,{game:t,mode:"game",effectiveShowAll:e}):h.jsx($j,{difficulty:t.difficulty,effectiveShowAll:e}),t.difficulty!=="custom"&&h.jsx("button",{className:"btn btn-green btn-full btn-lg",onClick:()=>t.startGame(e?"showAll":"sequential"),children:"Start Game! 🚀"})]})}function $j({difficulty:t,effectiveShowAll:e}){const n=Za[t];return h.jsxs("div",{style:{background:"#f0f8ff",borderRadius:12,padding:"14px 18px",fontSize:"0.9rem",color:"var(--text-muted)"},children:["You'll see ",h.jsxs("strong",{style:{color:"var(--text)"},children:[n.count," numbers"]})," with up to"," ",h.jsxs("strong",{style:{color:"var(--text)"},children:[n.digits," digit",n.digits>1?"s":""]})," each",e?h.jsxs(h.Fragment,{children:[", shown ",h.jsxs("strong",{style:{color:"var(--text)"},children:[bt," at a time"]}),"."]}):h.jsxs(h.Fragment,{children:[", shown ",h.jsx("strong",{style:{color:"var(--text)"},children:"one at a time"}),"."]})]})}const Wj=200,pu=400;function qj({game:t,totalBump:e,effectiveShowAll:n}){var se;const{visibleNumbers:r,isLastNumber:i,sequence:s,autoMode:o,autoSpeed:a,currentBatch:u,batchIndex:c,totalBatches:f,isLastBatch:p,showNext:g}=t,y=r[r.length-1],T=o&&((se=Za[t.difficulty])==null?void 0:se.autoAllowed)===!0,k=L.useRef(null),N=L.useRef(null),[x,E]=L.useState(0),[C,D]=L.useState(!1),O=L.useRef(-1);L.useEffect(()=>{n&&c!==O.current&&(O.current=c,E(0),D(!0),u.forEach((G,K)=>{setTimeout(()=>{E(K+1),K===u.length-1&&setTimeout(()=>D(!1),pu)},K*Wj)}))},[c,n]),L.useEffect(()=>{n&&(O.current=-1)},[t.phase]);const[V,I]=L.useState(null),_=V!==null,w=r.slice(0,r.length-1),S=Math.ceil(w.length/bt);function R(G){const K=w.length-G*bt,ve=Math.max(0,K-bt);return w.slice(ve,K)}function P(G){const K=c-1-G;return K<0?[]:s.slice(K*bt,(K+1)*bt)}const me=_&&(n?V<c-1:V<S-1),Te=_&&V>0,qe=_?n?P(V):R(V):[];function xe(){I(_?null:0)}function B(){clearInterval(k.current),N.current=Date.now(),I(null),g(n?"showAll":"sequential")}L.useEffect(()=>{if(!(!T||!a||n)&&!i)return N.current=Date.now(),k.current=setInterval(()=>{Date.now()-N.current>=a*1e3&&B()},100),()=>clearInterval(k.current)},[T,a,t.visibleCount,i,n]);const[H,U]=L.useState(0);L.useEffect(()=>{if(!T||!a||i||n){U(0);return}const G=setInterval(()=>{U(Math.min((Date.now()-(N.current||Date.now()))/(a*1e3),1))},50);return()=>clearInterval(G)},[T,a,t.visibleCount,i,n]);const X=n?p:i,Z=n?c>0:w.length>0;return h.jsxs("div",{className:"flex flex-col",style:{gap:16},children:[h.jsx("div",{className:"progress-dots",children:s.map((G,K)=>h.jsx("div",{className:`dot ${K<t.visibleCount-1?"done":K===t.visibleCount-1?"active":""}`},K))}),n&&h.jsxs("div",{style:{textAlign:"center",fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700},children:["Batch ",c+1," of ",f]}),T&&!i&&!n&&h.jsx("div",{style:{height:4,background:"var(--border)",borderRadius:2,overflow:"hidden"},children:h.jsx("div",{style:{height:"100%",borderRadius:2,transition:"width 50ms linear",background:a<.5?"#D85A30":a===.5?"#FFD700":"var(--purple)",width:`${H*100}%`}})}),h.jsxs("div",{className:"number-display",children:[n&&!_&&h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,justifyContent:"center",padding:"8px 0"},children:u.map((G,K)=>{const ve=c*bt+K,ke=K<x;return h.jsxs("div",{className:`number-bubble current-large ${ke?"bounce-in":""}`,style:{opacity:ke?1:0,transform:ke?"scale(1)":"scale(0)",transition:`opacity ${pu}ms, transform ${pu}ms`},children:[ve>0&&h.jsx("span",{className:"operator",children:G.operator}),h.jsx("span",{className:`num ${G.operator==="+"?"positive":"negative"}`,children:G.value})]},`${c}-${K}`)})}),!n&&!_&&y&&h.jsxs("div",{className:"number-bubble current-large bounce-in",children:[t.visibleCount>1&&h.jsx("span",{className:"operator",children:y.operator}),h.jsx("span",{className:`num ${y.operator==="+"?"positive":"negative"}`,children:y.value})]},t.visibleCount),_&&h.jsxs("div",{style:{width:"100%"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},children:[h.jsx("button",{onClick:()=>me&&I(G=>G+1),disabled:!me,style:kw(!me),children:"‹ Older"}),h.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:n?`Batch ${c-V} of ${f}`:"Previous numbers"}),h.jsx("button",{onClick:()=>Te&&I(G=>G-1),disabled:!Te,style:kw(!Te),children:"Newer ›"})]}),h.jsx("div",{className:"history-stream",children:qe.map((G,K)=>{const ve=n?(c-1-V)*bt+K:w.length-V*bt-(qe.length-K);return h.jsxs("span",{className:`number-bubble-sm ${G.operator==="+"?"positive":"negative"}`,children:[ve>0&&h.jsx("span",{className:"op",children:G.operator}),G.value]},K)})})]})]}),h.jsxs("div",{className:"flex flex-col",style:{gap:10},children:[X?h.jsx("button",{className:"btn btn-yellow btn-full btn-lg",onClick:B,children:"I'm ready! ✅"}):h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"btn btn-primary btn-full btn-lg",onClick:B,disabled:n&&C,children:n?"Next batch →":"Next number →"}),T&&!n&&h.jsx("div",{style:{textAlign:"center",fontSize:"0.82rem",color:"var(--text-muted)",padding:"0.5rem",background:"var(--bg)",borderRadius:"10px"},children:a===.5?"🏅 WR pace — next number in 0.5s⏱️":a<.5?`⏱️ ${a}s pace — beyond WR!`:`⏱️ Auto advancing every ${a}s`})]}),h.jsxs("div",{className:"flex flex-row",style:{gap:10},children:[h.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.9rem",flex:1},onClick:t.reset,children:"← Back to Menu"}),h.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.9rem",flex:1},onClick:xe,disabled:!Z,children:_?"🙈 Hide":"👀 Peek"})]})]}),h.jsx("style",{children:`
        @keyframes bounceIn {
          0%   { transform: scale(0);    opacity: 0; }
          60%  { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1);    opacity: 1; }
        }
        .bounce-in { animation: bounceIn ${pu}ms cubic-bezier(.36,.07,.19,.97) both; }
      `})]})}function kw(t){return{background:"none",border:"1px solid var(--border)",borderRadius:6,padding:"2px 10px",fontSize:"0.78rem",cursor:t?"default":"pointer",color:t?"var(--border)":"var(--text-muted)"}}function Gj({game:t,answerRef:e,onSubmit:n,onKeyDown:r}){return h.jsxs("div",{className:"flex flex-col",style:{gap:16},children:[h.jsxs("div",{className:"text-center",children:[h.jsx("div",{style:{fontSize:"2.5rem"},children:"🤔"}),h.jsx("h3",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:"var(--purple-dark)"},children:"What was the total?"}),h.jsxs("p",{className:"subtitle",children:["You saw ",t.sequence.length," numbers — what did they add up to?"]})]}),h.jsx("div",{className:"answer-row",children:h.jsx("input",{ref:e,className:"answer-input",type:"number",placeholder:"?",value:t.userAnswer,onChange:i=>t.setUserAnswer(i.target.value),onKeyDown:r})}),h.jsx("button",{className:"btn btn-purple btn-full btn-lg",style:{background:"var(--purple)",color:"white",boxShadow:"0 4px 0 var(--purple-dark)"},disabled:!t.userAnswer,onClick:n,children:"Submit Answer 🎯"}),h.jsx("button",{className:"btn btn-outline btn-full",onClick:t.reset,children:"← Back to Menu"})]})}function Hj({game:t,effectiveShowAll:e,onSwitchHistory:n}){const r=t.difficulty==="custom"?`${t.customDigits}d, ${t.customCount}n`:t.difficulty,{result:i}=t,s=i==null?void 0:i.isCorrect;return h.jsxs("div",{className:"flex flex-col text-center",style:{gap:16},children:[h.jsx("div",{style:{fontSize:"4rem",lineHeight:1},children:s?"🎉":"💪"}),h.jsxs("div",{children:[h.jsx("h3",{className:"title",style:{color:s?"var(--green-dark)":"var(--red)"},children:s?"Great job!":"Almost there!"}),h.jsx("p",{className:"subtitle mt-sm",children:s?"Great mental math! Your brain is super fast.":`The answer was ${i==null?void 0:i.actualAnswer}, you said ${i==null?void 0:i.userAnswer}.`})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,background:"#f8f9fa",borderRadius:12,padding:16},children:[h.jsx(mu,{label:"Numbers seen",value:i==null?void 0:i.count}),h.jsx(mu,{label:"🪙 Score",value:i==null?void 0:i.score,color:"var(--purple-dark)"}),h.jsx(mu,{label:"Time taken",value:`${i==null?void 0:i.duration}s`}),h.jsx(mu,{label:"Correct answer",value:i==null?void 0:i.actualAnswer,color:"var(--green-dark)"})]}),h.jsxs("button",{className:"btn btn-green btn-full",onClick:()=>t.startGame(e?"showAll":"sequential"),children:["Play '",r,"' Again! 🚀"]}),h.jsx("button",{className:"btn btn-outline btn-full",style:{fontSize:"0.85rem"},onClick:t.reset,children:"Menu"})]})}function mu({label:t,value:e,color:n}){return h.jsxs("div",{style:{textAlign:"center"},children:[h.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.8rem",color:n||"var(--blue-dark)"},children:e}),h.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700},children:t})]})}function Kj(){const t=Array.from({length:12},(e,n)=>({size:Math.random()*8+4,top:Math.random()*100,left:Math.random()*100,dur:(Math.random()*3+2).toFixed(1),delay:(Math.random()*3).toFixed(1)}));return h.jsx("div",{className:"stars",children:t.map((e,n)=>h.jsx("div",{className:"star",style:{width:e.size,height:e.size,top:`${e.top}%`,left:`${e.left}%`,"--dur":`${e.dur}s`,animationDelay:`${e.delay}s`}},n))})}function Rw(){return h.jsxs("div",{className:"loader",style:{padding:"60px 0"},children:[h.jsx("div",{className:"loader-dot"}),h.jsx("div",{className:"loader-dot"}),h.jsx("div",{className:"loader-dot"})]})}function Qj(){const{user:t,profile:e,loadingProfile:n}=Ki(),r=t===void 0;return h.jsxs("div",{className:"app-wrap",children:[h.jsx(Kj,{}),r?h.jsx(Rw,{}):t?n?h.jsx(Rw,{}):e?h.jsx(zj,{}):h.jsx(tj,{}):h.jsx(ZV,{})]})}BT(document.getElementById("root")).render(h.jsx(L.StrictMode,{children:h.jsx(JV,{children:h.jsx(Qj,{})})}));
