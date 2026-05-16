(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Cw={exports:{}},Lc={},xw={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),Yx=Symbol.for("react.portal"),Xx=Symbol.for("react.fragment"),Jx=Symbol.for("react.strict_mode"),Zx=Symbol.for("react.profiler"),eA=Symbol.for("react.provider"),tA=Symbol.for("react.context"),nA=Symbol.for("react.forward_ref"),rA=Symbol.for("react.suspense"),iA=Symbol.for("react.memo"),sA=Symbol.for("react.lazy"),hy=Symbol.iterator;function oA(t){return t===null||typeof t!="object"?null:(t=hy&&t[hy]||t["@@iterator"],typeof t=="function"?t:null)}var Aw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kw=Object.assign,Rw={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=Rw,this.updater=n||Aw}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Pw(){}Pw.prototype=Ys.prototype;function Rp(t,e,n){this.props=t,this.context=e,this.refs=Rw,this.updater=n||Aw}var Pp=Rp.prototype=new Pw;Pp.constructor=Rp;kw(Pp,Ys.prototype);Pp.isPureReactComponent=!0;var dy=Array.isArray,Nw=Object.prototype.hasOwnProperty,Np={current:null},bw={key:!0,ref:!0,__self:!0,__source:!0};function Dw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Nw.call(e,r)&&!bw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xa,type:t,key:s,ref:o,props:i,_owner:Np.current}}function aA(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function lA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fy=/\/+/g;function nd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lA(""+t.key):e.toString(36)}function du(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xa:case Yx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+nd(o,0):r,dy(i)?(n="",t!=null&&(n=t.replace(fy,"$&/")+"/"),du(i,e,n,"",function(c){return c})):i!=null&&(bp(i)&&(i=aA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(fy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",dy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+nd(s,a);o+=du(s,e,n,u,i)}else if(u=oA(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+nd(s,a++),o+=du(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fl(t,e,n){if(t==null)return t;var r=[],i=0;return du(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},fu={transition:null},cA={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:fu,ReactCurrentOwner:Np};function Ow(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:Fl,forEach:function(t,e,n){Fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fl(t,function(){e++}),e},toArray:function(t){return Fl(t,function(e){return e})||[]},only:function(t){if(!bp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=Ys;ue.Fragment=Xx;ue.Profiler=Zx;ue.PureComponent=Rp;ue.StrictMode=Jx;ue.Suspense=rA;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cA;ue.act=Ow;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=kw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Np.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Nw.call(e,u)&&!bw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Xa,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:tA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eA,_context:t},t.Consumer=t};ue.createElement=Dw;ue.createFactory=function(t){var e=Dw.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:nA,render:t}};ue.isValidElement=bp;ue.lazy=function(t){return{$$typeof:sA,_payload:{_status:-1,_result:t},_init:uA}};ue.memo=function(t,e){return{$$typeof:iA,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=fu.transition;fu.transition={};try{t()}finally{fu.transition=e}};ue.unstable_act=Ow;ue.useCallback=function(t,e){return Mt.current.useCallback(t,e)};ue.useContext=function(t){return Mt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Mt.current.useEffect(t,e)};ue.useId=function(){return Mt.current.useId()};ue.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Mt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};ue.useRef=function(t){return Mt.current.useRef(t)};ue.useState=function(t){return Mt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Mt.current.useTransition()};ue.version="18.3.1";xw.exports=ue;var j=xw.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hA=j,dA=Symbol.for("react.element"),fA=Symbol.for("react.fragment"),pA=Object.prototype.hasOwnProperty,mA=hA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gA={key:!0,ref:!0,__self:!0,__source:!0};function Lw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pA.call(e,r)&&!gA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dA,type:t,key:s,ref:o,props:i,_owner:mA.current}}Lc.Fragment=fA;Lc.jsx=Lw;Lc.jsxs=Lw;Cw.exports=Lc;var f=Cw.exports,Mw={exports:{}},nn={},Vw={exports:{}},jw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,H){var B=U.length;U.push(H);e:for(;0<B;){var Y=B-1>>>1,ne=U[Y];if(0<i(ne,H))U[Y]=H,U[B]=ne,B=Y;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var H=U[0],B=U.pop();if(B!==H){U[0]=B;e:for(var Y=0,ne=U.length,ie=ne>>>1;Y<ie;){var de=2*(Y+1)-1,se=U[de],Be=de+1,mt=U[Be];if(0>i(se,B))Be<ne&&0>i(mt,se)?(U[Y]=mt,U[Be]=B,Y=Be):(U[Y]=se,U[de]=B,Y=de);else if(Be<ne&&0>i(mt,B))U[Y]=mt,U[Be]=B,Y=Be;else break e}}return H}function i(U,H){var B=U.sortIndex-H.sortIndex;return B!==0?B:U.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,p=null,g=3,v=!1,T=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(U){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=U)r(c),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(c)}}function D(U){if(k=!1,C(U),!T)if(n(u)!==null)T=!0,kt(O);else{var H=n(c);H!==null&&re(D,H.startTime-U)}}function O(U,H){T=!1,k&&(k=!1,S(_),_=-1),v=!0;var B=g;try{for(C(H),p=n(u);p!==null&&(!(p.expirationTime>H)||U&&!R());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,g=p.priorityLevel;var ne=Y(p.expirationTime<=H);H=t.unstable_now(),typeof ne=="function"?p.callback=ne:p===n(u)&&r(u),C(H)}else r(u);p=n(u)}if(p!==null)var ie=!0;else{var de=n(c);de!==null&&re(D,de.startTime-H),ie=!1}return ie}finally{p=null,g=B,v=!1}}var V=!1,I=null,_=-1,E=5,x=-1;function R(){return!(t.unstable_now()-x<E)}function P(){if(I!==null){var U=t.unstable_now();x=U;var H=!0;try{H=I(!0,U)}finally{H?A():(V=!1,I=null)}}else V=!1}var A;if(typeof w=="function")A=function(){w(P)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,ot=Ce.port2;Ce.port1.onmessage=P,A=function(){ot.postMessage(null)}}else A=function(){N(P,0)};function kt(U){I=U,V||(V=!0,A())}function re(U,H){_=N(function(){U(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){T||v||(T=!0,kt(O))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var B=g;g=H;try{return U()}finally{g=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var B=g;g=U;try{return H()}finally{g=B}},t.unstable_scheduleCallback=function(U,H,B){var Y=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Y+B:Y):B=Y,U){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=B+ne,U={id:d++,callback:H,priorityLevel:U,startTime:B,expirationTime:ne,sortIndex:-1},B>Y?(U.sortIndex=B,e(c,U),n(u)===null&&U===n(c)&&(k?(S(_),_=-1):k=!0,re(D,B-Y))):(U.sortIndex=ne,e(u,U),T||v||(T=!0,kt(O))),U},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(U){var H=g;return function(){var B=g;g=H;try{return U.apply(this,arguments)}finally{g=B}}}})(jw);Vw.exports=jw;var _A=Vw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yA=j,tn=_A;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fw=new Set,fa={};function Ui(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(fa[t]=e,t=0;t<e.length;t++)Fw.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xd=Object.prototype.hasOwnProperty,vA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,py={},my={};function wA(t){return Xd.call(my,t)?!0:Xd.call(py,t)?!1:vA.test(t)?my[t]=!0:(py[t]=!0,!1)}function EA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TA(t,e,n,r){if(e===null||typeof e>"u"||EA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dp=/[\-:]([a-z])/g;function Op(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dp,Op);ft[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dp,Op);ft[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dp,Op);ft[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lp(t,e,n,r){var i=ft.hasOwnProperty(e)?ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TA(e,n,i,r)&&(n=null),r||i===null?wA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var dr=yA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ul=Symbol.for("react.element"),ns=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),Mp=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),Uw=Symbol.for("react.provider"),zw=Symbol.for("react.context"),Vp=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),jp=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),Bw=Symbol.for("react.offscreen"),gy=Symbol.iterator;function Ao(t){return t===null||typeof t!="object"?null:(t=gy&&t[gy]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,rd;function zo(t){if(rd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rd=e&&e[1]||""}return`
`+rd+t}var id=!1;function sd(t,e){if(!t||id)return"";id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{id=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zo(t):""}function IA(t){switch(t.tag){case 5:return zo(t.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return t=sd(t.type,!1),t;case 11:return t=sd(t.type.render,!1),t;case 1:return t=sd(t.type,!0),t;default:return""}}function tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case ns:return"Portal";case Jd:return"Profiler";case Mp:return"StrictMode";case Zd:return"Suspense";case ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zw:return(t.displayName||"Context")+".Consumer";case Uw:return(t._context.displayName||"Context")+".Provider";case Vp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jp:return e=t.displayName||null,e!==null?e:tf(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return tf(t(e))}catch{}}return null}function SA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tf(e);case 8:return e===Mp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $w(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function CA(t){var e=$w(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zl(t){t._valueTracker||(t._valueTracker=CA(t))}function Ww(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$w(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nf(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _y(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qw(t,e){e=e.checked,e!=null&&Lp(t,"checked",e,!1)}function rf(t,e){qw(t,e);var n=Wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&sf(t,e.type,Wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sf(t,e,n){(e!=="number"||Ou(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bo=Array.isArray;function gs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Bo(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wr(n)}}function Gw(t,e){var n=Wr(e.value),r=Wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Bl,Kw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Bl=Bl||document.createElement("div"),Bl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Bl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xA=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){xA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function Qw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function Yw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var AA=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(t,e){if(e){if(AA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function uf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function Fp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hf=null,_s=null,ys=null;function Ey(t){if(t=el(t)){if(typeof hf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Uc(e),hf(t.stateNode,t.type,e))}}function Xw(t){_s?ys?ys.push(t):ys=[t]:_s=t}function Jw(){if(_s){var t=_s,e=ys;if(ys=_s=null,Ey(t),e)for(t=0;t<e.length;t++)Ey(e[t])}}function Zw(t,e){return t(e)}function eE(){}var od=!1;function tE(t,e,n){if(od)return t(e,n);od=!0;try{return Zw(t,e,n)}finally{od=!1,(_s!==null||ys!==null)&&(eE(),Jw())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var r=Uc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var df=!1;if(tr)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){df=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{df=!1}function kA(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Qo=!1,Lu=null,Mu=!1,ff=null,RA={onError:function(t){Qo=!0,Lu=t}};function PA(t,e,n,r,i,s,o,a,u){Qo=!1,Lu=null,kA.apply(RA,arguments)}function NA(t,e,n,r,i,s,o,a,u){if(PA.apply(this,arguments),Qo){if(Qo){var c=Lu;Qo=!1,Lu=null}else throw Error(z(198));Mu||(Mu=!0,ff=c)}}function zi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function nE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ty(t){if(zi(t)!==t)throw Error(z(188))}function bA(t){var e=t.alternate;if(!e){if(e=zi(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ty(i),t;if(s===r)return Ty(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function rE(t){return t=bA(t),t!==null?iE(t):null}function iE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iE(t);if(e!==null)return e;t=t.sibling}return null}var sE=tn.unstable_scheduleCallback,Iy=tn.unstable_cancelCallback,DA=tn.unstable_shouldYield,OA=tn.unstable_requestPaint,ze=tn.unstable_now,LA=tn.unstable_getCurrentPriorityLevel,Up=tn.unstable_ImmediatePriority,oE=tn.unstable_UserBlockingPriority,Vu=tn.unstable_NormalPriority,MA=tn.unstable_LowPriority,aE=tn.unstable_IdlePriority,Mc=null,Nn=null;function VA(t){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(Mc,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:UA,jA=Math.log,FA=Math.LN2;function UA(t){return t>>>=0,t===0?32:31-(jA(t)/FA|0)|0}var $l=64,Wl=4194304;function $o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ju(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=$o(a):(s&=o,s!==0&&(r=$o(s)))}else o=n&~i,o!==0?r=$o(o):s!==0&&(r=$o(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vn(e),i=1<<n,r|=t[n],e&=~i;return r}function zA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-vn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=zA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function pf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lE(){var t=$l;return $l<<=1,!($l&4194240)&&($l=64),t}function ad(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vn(e),t[e]=n}function $A(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-vn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-vn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var we=0;function uE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cE,Bp,hE,dE,fE,mf=!1,ql=[],Nr=null,br=null,Dr=null,ga=new Map,_a=new Map,Tr=[],WA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sy(t,e){switch(t){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function Ro(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=el(e),e!==null&&Bp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qA(t,e,n,r,i){switch(e){case"focusin":return Nr=Ro(Nr,t,e,n,r,i),!0;case"dragenter":return br=Ro(br,t,e,n,r,i),!0;case"mouseover":return Dr=Ro(Dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ga.set(s,Ro(ga.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_a.set(s,Ro(_a.get(s)||null,t,e,n,r,i)),!0}return!1}function pE(t){var e=fi(t.target);if(e!==null){var n=zi(e);if(n!==null){if(e=n.tag,e===13){if(e=nE(n),e!==null){t.blockedOn=e,fE(t.priority,function(){hE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cf=r,n.target.dispatchEvent(r),cf=null}else return e=el(n),e!==null&&Bp(e),t.blockedOn=n,!1;e.shift()}return!0}function Cy(t,e,n){pu(t)&&n.delete(e)}function GA(){mf=!1,Nr!==null&&pu(Nr)&&(Nr=null),br!==null&&pu(br)&&(br=null),Dr!==null&&pu(Dr)&&(Dr=null),ga.forEach(Cy),_a.forEach(Cy)}function Po(t,e){t.blockedOn===e&&(t.blockedOn=null,mf||(mf=!0,tn.unstable_scheduleCallback(tn.unstable_NormalPriority,GA)))}function ya(t){function e(i){return Po(i,t)}if(0<ql.length){Po(ql[0],t);for(var n=1;n<ql.length;n++){var r=ql[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Nr!==null&&Po(Nr,t),br!==null&&Po(br,t),Dr!==null&&Po(Dr,t),ga.forEach(e),_a.forEach(e),n=0;n<Tr.length;n++)r=Tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)pE(n),n.blockedOn===null&&Tr.shift()}var vs=dr.ReactCurrentBatchConfig,Fu=!0;function HA(t,e,n,r){var i=we,s=vs.transition;vs.transition=null;try{we=1,$p(t,e,n,r)}finally{we=i,vs.transition=s}}function KA(t,e,n,r){var i=we,s=vs.transition;vs.transition=null;try{we=4,$p(t,e,n,r)}finally{we=i,vs.transition=s}}function $p(t,e,n,r){if(Fu){var i=gf(t,e,n,r);if(i===null)_d(t,e,r,Uu,n),Sy(t,r);else if(qA(i,t,e,n,r))r.stopPropagation();else if(Sy(t,r),e&4&&-1<WA.indexOf(t)){for(;i!==null;){var s=el(i);if(s!==null&&cE(s),s=gf(t,e,n,r),s===null&&_d(t,e,r,Uu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _d(t,e,r,null,n)}}var Uu=null;function gf(t,e,n,r){if(Uu=null,t=Fp(r),t=fi(t),t!==null)if(e=zi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=nE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uu=t,null}function mE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LA()){case Up:return 1;case oE:return 4;case Vu:case MA:return 16;case aE:return 536870912;default:return 16}default:return 16}}var kr=null,Wp=null,mu=null;function gE(){if(mu)return mu;var t,e=Wp,n=e.length,r,i="value"in kr?kr.value:kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return mu=i.slice(t,1<r?1-r:void 0)}function gu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function xy(){return!1}function rn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gl:xy,this.isPropagationStopped=xy,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qp=rn(Xs),Za=Me({},Xs,{view:0,detail:0}),QA=rn(Za),ld,ud,No,Vc=Me({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==No&&(No&&t.type==="mousemove"?(ld=t.screenX-No.screenX,ud=t.screenY-No.screenY):ud=ld=0,No=t),ld)},movementY:function(t){return"movementY"in t?t.movementY:ud}}),Ay=rn(Vc),YA=Me({},Vc,{dataTransfer:0}),XA=rn(YA),JA=Me({},Za,{relatedTarget:0}),cd=rn(JA),ZA=Me({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),ek=rn(ZA),tk=Me({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nk=rn(tk),rk=Me({},Xs,{data:0}),ky=rn(rk),ik={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ok={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ak(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ok[t])?!!e[t]:!1}function Gp(){return ak}var lk=Me({},Za,{key:function(t){if(t.key){var e=ik[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gp,charCode:function(t){return t.type==="keypress"?gu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uk=rn(lk),ck=Me({},Vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ry=rn(ck),hk=Me({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gp}),dk=rn(hk),fk=Me({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),pk=rn(fk),mk=Me({},Vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gk=rn(mk),_k=[9,13,27,32],Hp=tr&&"CompositionEvent"in window,Yo=null;tr&&"documentMode"in document&&(Yo=document.documentMode);var yk=tr&&"TextEvent"in window&&!Yo,_E=tr&&(!Hp||Yo&&8<Yo&&11>=Yo),Py=" ",Ny=!1;function yE(t,e){switch(t){case"keyup":return _k.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function vk(t,e){switch(t){case"compositionend":return vE(e);case"keypress":return e.which!==32?null:(Ny=!0,Py);case"textInput":return t=e.data,t===Py&&Ny?null:t;default:return null}}function wk(t,e){if(is)return t==="compositionend"||!Hp&&yE(t,e)?(t=gE(),mu=Wp=kr=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _E&&e.locale!=="ko"?null:e.data;default:return null}}var Ek={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function by(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ek[t.type]:e==="textarea"}function wE(t,e,n,r){Xw(r),e=zu(e,"onChange"),0<e.length&&(n=new qp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xo=null,va=null;function Tk(t){NE(t,0)}function jc(t){var e=as(t);if(Ww(e))return t}function Ik(t,e){if(t==="change")return e}var EE=!1;if(tr){var hd;if(tr){var dd="oninput"in document;if(!dd){var Dy=document.createElement("div");Dy.setAttribute("oninput","return;"),dd=typeof Dy.oninput=="function"}hd=dd}else hd=!1;EE=hd&&(!document.documentMode||9<document.documentMode)}function Oy(){Xo&&(Xo.detachEvent("onpropertychange",TE),va=Xo=null)}function TE(t){if(t.propertyName==="value"&&jc(va)){var e=[];wE(e,va,t,Fp(t)),tE(Tk,e)}}function Sk(t,e,n){t==="focusin"?(Oy(),Xo=e,va=n,Xo.attachEvent("onpropertychange",TE)):t==="focusout"&&Oy()}function Ck(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jc(va)}function xk(t,e){if(t==="click")return jc(e)}function Ak(t,e){if(t==="input"||t==="change")return jc(e)}function kk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Sn=typeof Object.is=="function"?Object.is:kk;function wa(t,e){if(Sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xd.call(e,i)||!Sn(t[i],e[i]))return!1}return!0}function Ly(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function My(t,e){var n=Ly(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ly(n)}}function IE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?IE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function SE(){for(var t=window,e=Ou();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ou(t.document)}return e}function Kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rk(t){var e=SE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&IE(n.ownerDocument.documentElement,n)){if(r!==null&&Kp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=My(n,s);var o=My(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Pk=tr&&"documentMode"in document&&11>=document.documentMode,ss=null,_f=null,Jo=null,yf=!1;function Vy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yf||ss==null||ss!==Ou(r)||(r=ss,"selectionStart"in r&&Kp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jo&&wa(Jo,r)||(Jo=r,r=zu(_f,"onSelect"),0<r.length&&(e=new qp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ss)))}function Hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var os={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionend:Hl("Transition","TransitionEnd")},fd={},CE={};tr&&(CE=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Fc(t){if(fd[t])return fd[t];if(!os[t])return t;var e=os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in CE)return fd[t]=e[n];return t}var xE=Fc("animationend"),AE=Fc("animationiteration"),kE=Fc("animationstart"),RE=Fc("transitionend"),PE=new Map,jy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(t,e){PE.set(t,e),Ui(e,[t])}for(var pd=0;pd<jy.length;pd++){var md=jy[pd],Nk=md.toLowerCase(),bk=md[0].toUpperCase()+md.slice(1);Jr(Nk,"on"+bk)}Jr(xE,"onAnimationEnd");Jr(AE,"onAnimationIteration");Jr(kE,"onAnimationStart");Jr("dblclick","onDoubleClick");Jr("focusin","onFocus");Jr("focusout","onBlur");Jr(RE,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function Fy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NA(r,e,void 0,t),t.currentTarget=null}function NE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Fy(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Fy(i,a,c),s=u}}}if(Mu)throw t=ff,Mu=!1,ff=null,t}function Ae(t,e){var n=e[If];n===void 0&&(n=e[If]=new Set);var r=t+"__bubble";n.has(r)||(bE(e,t,2,!1),n.add(r))}function gd(t,e,n){var r=0;e&&(r|=4),bE(n,t,r,e)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[Kl]){t[Kl]=!0,Fw.forEach(function(n){n!=="selectionchange"&&(Dk.has(n)||gd(n,!1,t),gd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Kl]||(e[Kl]=!0,gd("selectionchange",!1,e))}}function bE(t,e,n,r){switch(mE(e)){case 1:var i=HA;break;case 4:i=KA;break;default:i=$p}n=i.bind(null,e,n,t),i=void 0,!df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _d(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}tE(function(){var c=s,d=Fp(n),p=[];e:{var g=PE.get(t);if(g!==void 0){var v=qp,T=t;switch(t){case"keypress":if(gu(n)===0)break e;case"keydown":case"keyup":v=uk;break;case"focusin":T="focus",v=cd;break;case"focusout":T="blur",v=cd;break;case"beforeblur":case"afterblur":v=cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ay;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=XA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=dk;break;case xE:case AE:case kE:v=ek;break;case RE:v=pk;break;case"scroll":v=QA;break;case"wheel":v=gk;break;case"copy":case"cut":case"paste":v=nk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ry}var k=(e&4)!==0,N=!k&&t==="scroll",S=k?g!==null?g+"Capture":null:g;k=[];for(var w=c,C;w!==null;){C=w;var D=C.stateNode;if(C.tag===5&&D!==null&&(C=D,S!==null&&(D=ma(w,S),D!=null&&k.push(Ta(w,D,C)))),N)break;w=w.return}0<k.length&&(g=new v(g,T,null,n,d),p.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==cf&&(T=n.relatedTarget||n.fromElement)&&(fi(T)||T[nr]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(T=n.relatedTarget||n.toElement,v=c,T=T?fi(T):null,T!==null&&(N=zi(T),T!==N||T.tag!==5&&T.tag!==6)&&(T=null)):(v=null,T=c),v!==T)){if(k=Ay,D="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(k=Ry,D="onPointerLeave",S="onPointerEnter",w="pointer"),N=v==null?g:as(v),C=T==null?g:as(T),g=new k(D,w+"leave",v,n,d),g.target=N,g.relatedTarget=C,D=null,fi(d)===c&&(k=new k(S,w+"enter",T,n,d),k.target=C,k.relatedTarget=N,D=k),N=D,v&&T)t:{for(k=v,S=T,w=0,C=k;C;C=Xi(C))w++;for(C=0,D=S;D;D=Xi(D))C++;for(;0<w-C;)k=Xi(k),w--;for(;0<C-w;)S=Xi(S),C--;for(;w--;){if(k===S||S!==null&&k===S.alternate)break t;k=Xi(k),S=Xi(S)}k=null}else k=null;v!==null&&Uy(p,g,v,k,!1),T!==null&&N!==null&&Uy(p,N,T,k,!0)}}e:{if(g=c?as(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var O=Ik;else if(by(g))if(EE)O=Ak;else{O=Ck;var V=Sk}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(O=xk);if(O&&(O=O(t,c))){wE(p,O,n,d);break e}V&&V(t,g,c),t==="focusout"&&(V=g._wrapperState)&&V.controlled&&g.type==="number"&&sf(g,"number",g.value)}switch(V=c?as(c):window,t){case"focusin":(by(V)||V.contentEditable==="true")&&(ss=V,_f=c,Jo=null);break;case"focusout":Jo=_f=ss=null;break;case"mousedown":yf=!0;break;case"contextmenu":case"mouseup":case"dragend":yf=!1,Vy(p,n,d);break;case"selectionchange":if(Pk)break;case"keydown":case"keyup":Vy(p,n,d)}var I;if(Hp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else is?yE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(_E&&n.locale!=="ko"&&(is||_!=="onCompositionStart"?_==="onCompositionEnd"&&is&&(I=gE()):(kr=d,Wp="value"in kr?kr.value:kr.textContent,is=!0)),V=zu(c,_),0<V.length&&(_=new ky(_,t,null,n,d),p.push({event:_,listeners:V}),I?_.data=I:(I=vE(n),I!==null&&(_.data=I)))),(I=yk?vk(t,n):wk(t,n))&&(c=zu(c,"onBeforeInput"),0<c.length&&(d=new ky("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=I))}NE(p,e)})}function Ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ma(t,n),s!=null&&r.unshift(Ta(t,s,i)),s=ma(t,e),s!=null&&r.push(Ta(t,s,i))),t=t.return}return r}function Xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Uy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ma(n,s),u!=null&&o.unshift(Ta(n,u,a))):i||(u=ma(n,s),u!=null&&o.push(Ta(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ok=/\r\n?/g,Lk=/\u0000|\uFFFD/g;function zy(t){return(typeof t=="string"?t:""+t).replace(Ok,`
`).replace(Lk,"")}function Ql(t,e,n){if(e=zy(e),zy(t)!==e&&n)throw Error(z(425))}function Bu(){}var vf=null,wf=null;function Ef(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tf=typeof setTimeout=="function"?setTimeout:void 0,Mk=typeof clearTimeout=="function"?clearTimeout:void 0,By=typeof Promise=="function"?Promise:void 0,Vk=typeof queueMicrotask=="function"?queueMicrotask:typeof By<"u"?function(t){return By.resolve(null).then(t).catch(jk)}:Tf;function jk(t){setTimeout(function(){throw t})}function yd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ya(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ya(e)}function Or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $y(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),Pn="__reactFiber$"+Js,Ia="__reactProps$"+Js,nr="__reactContainer$"+Js,If="__reactEvents$"+Js,Fk="__reactListeners$"+Js,Uk="__reactHandles$"+Js;function fi(t){var e=t[Pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[Pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$y(t);t!==null;){if(n=t[Pn])return n;t=$y(t)}return e}t=n,n=t.parentNode}return null}function el(t){return t=t[Pn]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Uc(t){return t[Ia]||null}var Sf=[],ls=-1;function Zr(t){return{current:t}}function Pe(t){0>ls||(t.current=Sf[ls],Sf[ls]=null,ls--)}function Se(t,e){ls++,Sf[ls]=t.current,t.current=e}var qr={},xt=Zr(qr),$t=Zr(!1),Si=qr;function Ns(t,e){var n=t.type.contextTypes;if(!n)return qr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Wt(t){return t=t.childContextTypes,t!=null}function $u(){Pe($t),Pe(xt)}function Wy(t,e,n){if(xt.current!==qr)throw Error(z(168));Se(xt,e),Se($t,n)}function DE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,SA(t)||"Unknown",i));return Me({},n,r)}function Wu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qr,Si=xt.current,Se(xt,t),Se($t,$t.current),!0}function qy(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=DE(t,e,Si),r.__reactInternalMemoizedMergedChildContext=t,Pe($t),Pe(xt),Se(xt,t)):Pe($t),Se($t,n)}var Wn=null,zc=!1,vd=!1;function OE(t){Wn===null?Wn=[t]:Wn.push(t)}function zk(t){zc=!0,OE(t)}function ei(){if(!vd&&Wn!==null){vd=!0;var t=0,e=we;try{var n=Wn;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wn=null,zc=!1}catch(i){throw Wn!==null&&(Wn=Wn.slice(t+1)),sE(Up,ei),i}finally{we=e,vd=!1}}return null}var us=[],cs=0,qu=null,Gu=0,sn=[],on=0,Ci=null,Gn=1,Hn="";function ui(t,e){us[cs++]=Gu,us[cs++]=qu,qu=t,Gu=e}function LE(t,e,n){sn[on++]=Gn,sn[on++]=Hn,sn[on++]=Ci,Ci=t;var r=Gn;t=Hn;var i=32-vn(r)-1;r&=~(1<<i),n+=1;var s=32-vn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-vn(e)+i|n<<i|r,Hn=s+t}else Gn=1<<s|n<<i|r,Hn=t}function Qp(t){t.return!==null&&(ui(t,1),LE(t,1,0))}function Yp(t){for(;t===qu;)qu=us[--cs],us[cs]=null,Gu=us[--cs],us[cs]=null;for(;t===Ci;)Ci=sn[--on],sn[on]=null,Hn=sn[--on],sn[on]=null,Gn=sn[--on],sn[on]=null}var Zt=null,Xt=null,De=!1,mn=null;function ME(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zt=t,Xt=Or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zt=t,Xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ci!==null?{id:Gn,overflow:Hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zt=t,Xt=null,!0):!1;default:return!1}}function Cf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xf(t){if(De){var e=Xt;if(e){var n=e;if(!Gy(t,e)){if(Cf(t))throw Error(z(418));e=Or(n.nextSibling);var r=Zt;e&&Gy(t,e)?ME(r,n):(t.flags=t.flags&-4097|2,De=!1,Zt=t)}}else{if(Cf(t))throw Error(z(418));t.flags=t.flags&-4097|2,De=!1,Zt=t}}}function Hy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zt=t}function Yl(t){if(t!==Zt)return!1;if(!De)return Hy(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ef(t.type,t.memoizedProps)),e&&(e=Xt)){if(Cf(t))throw VE(),Error(z(418));for(;e;)ME(t,e),e=Or(e.nextSibling)}if(Hy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xt=Or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xt=null}}else Xt=Zt?Or(t.stateNode.nextSibling):null;return!0}function VE(){for(var t=Xt;t;)t=Or(t.nextSibling)}function bs(){Xt=Zt=null,De=!1}function Xp(t){mn===null?mn=[t]:mn.push(t)}var Bk=dr.ReactCurrentBatchConfig;function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Xl(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ky(t){var e=t._init;return e(t._payload)}function jE(t){function e(S,w){if(t){var C=S.deletions;C===null?(S.deletions=[w],S.flags|=16):C.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(S,w){return S=jr(S,w),S.index=0,S.sibling=null,S}function s(S,w,C){return S.index=C,t?(C=S.alternate,C!==null?(C=C.index,C<w?(S.flags|=2,w):C):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,w,C,D){return w===null||w.tag!==6?(w=xd(C,S.mode,D),w.return=S,w):(w=i(w,C),w.return=S,w)}function u(S,w,C,D){var O=C.type;return O===rs?d(S,w,C.props.children,D,C.key):w!==null&&(w.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===wr&&Ky(O)===w.type)?(D=i(w,C.props),D.ref=bo(S,w,C),D.return=S,D):(D=Iu(C.type,C.key,C.props,null,S.mode,D),D.ref=bo(S,w,C),D.return=S,D)}function c(S,w,C,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==C.containerInfo||w.stateNode.implementation!==C.implementation?(w=Ad(C,S.mode,D),w.return=S,w):(w=i(w,C.children||[]),w.return=S,w)}function d(S,w,C,D,O){return w===null||w.tag!==7?(w=Ei(C,S.mode,D,O),w.return=S,w):(w=i(w,C),w.return=S,w)}function p(S,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return w=xd(""+w,S.mode,C),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ul:return C=Iu(w.type,w.key,w.props,null,S.mode,C),C.ref=bo(S,null,w),C.return=S,C;case ns:return w=Ad(w,S.mode,C),w.return=S,w;case wr:var D=w._init;return p(S,D(w._payload),C)}if(Bo(w)||Ao(w))return w=Ei(w,S.mode,C,null),w.return=S,w;Xl(S,w)}return null}function g(S,w,C,D){var O=w!==null?w.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return O!==null?null:a(S,w,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ul:return C.key===O?u(S,w,C,D):null;case ns:return C.key===O?c(S,w,C,D):null;case wr:return O=C._init,g(S,w,O(C._payload),D)}if(Bo(C)||Ao(C))return O!==null?null:d(S,w,C,D,null);Xl(S,C)}return null}function v(S,w,C,D,O){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(C)||null,a(w,S,""+D,O);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ul:return S=S.get(D.key===null?C:D.key)||null,u(w,S,D,O);case ns:return S=S.get(D.key===null?C:D.key)||null,c(w,S,D,O);case wr:var V=D._init;return v(S,w,C,V(D._payload),O)}if(Bo(D)||Ao(D))return S=S.get(C)||null,d(w,S,D,O,null);Xl(w,D)}return null}function T(S,w,C,D){for(var O=null,V=null,I=w,_=w=0,E=null;I!==null&&_<C.length;_++){I.index>_?(E=I,I=null):E=I.sibling;var x=g(S,I,C[_],D);if(x===null){I===null&&(I=E);break}t&&I&&x.alternate===null&&e(S,I),w=s(x,w,_),V===null?O=x:V.sibling=x,V=x,I=E}if(_===C.length)return n(S,I),De&&ui(S,_),O;if(I===null){for(;_<C.length;_++)I=p(S,C[_],D),I!==null&&(w=s(I,w,_),V===null?O=I:V.sibling=I,V=I);return De&&ui(S,_),O}for(I=r(S,I);_<C.length;_++)E=v(I,S,_,C[_],D),E!==null&&(t&&E.alternate!==null&&I.delete(E.key===null?_:E.key),w=s(E,w,_),V===null?O=E:V.sibling=E,V=E);return t&&I.forEach(function(R){return e(S,R)}),De&&ui(S,_),O}function k(S,w,C,D){var O=Ao(C);if(typeof O!="function")throw Error(z(150));if(C=O.call(C),C==null)throw Error(z(151));for(var V=O=null,I=w,_=w=0,E=null,x=C.next();I!==null&&!x.done;_++,x=C.next()){I.index>_?(E=I,I=null):E=I.sibling;var R=g(S,I,x.value,D);if(R===null){I===null&&(I=E);break}t&&I&&R.alternate===null&&e(S,I),w=s(R,w,_),V===null?O=R:V.sibling=R,V=R,I=E}if(x.done)return n(S,I),De&&ui(S,_),O;if(I===null){for(;!x.done;_++,x=C.next())x=p(S,x.value,D),x!==null&&(w=s(x,w,_),V===null?O=x:V.sibling=x,V=x);return De&&ui(S,_),O}for(I=r(S,I);!x.done;_++,x=C.next())x=v(I,S,_,x.value,D),x!==null&&(t&&x.alternate!==null&&I.delete(x.key===null?_:x.key),w=s(x,w,_),V===null?O=x:V.sibling=x,V=x);return t&&I.forEach(function(P){return e(S,P)}),De&&ui(S,_),O}function N(S,w,C,D){if(typeof C=="object"&&C!==null&&C.type===rs&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Ul:e:{for(var O=C.key,V=w;V!==null;){if(V.key===O){if(O=C.type,O===rs){if(V.tag===7){n(S,V.sibling),w=i(V,C.props.children),w.return=S,S=w;break e}}else if(V.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===wr&&Ky(O)===V.type){n(S,V.sibling),w=i(V,C.props),w.ref=bo(S,V,C),w.return=S,S=w;break e}n(S,V);break}else e(S,V);V=V.sibling}C.type===rs?(w=Ei(C.props.children,S.mode,D,C.key),w.return=S,S=w):(D=Iu(C.type,C.key,C.props,null,S.mode,D),D.ref=bo(S,w,C),D.return=S,S=D)}return o(S);case ns:e:{for(V=C.key;w!==null;){if(w.key===V)if(w.tag===4&&w.stateNode.containerInfo===C.containerInfo&&w.stateNode.implementation===C.implementation){n(S,w.sibling),w=i(w,C.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=Ad(C,S.mode,D),w.return=S,S=w}return o(S);case wr:return V=C._init,N(S,w,V(C._payload),D)}if(Bo(C))return T(S,w,C,D);if(Ao(C))return k(S,w,C,D);Xl(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,w!==null&&w.tag===6?(n(S,w.sibling),w=i(w,C),w.return=S,S=w):(n(S,w),w=xd(C,S.mode,D),w.return=S,S=w),o(S)):n(S,w)}return N}var Ds=jE(!0),FE=jE(!1),Hu=Zr(null),Ku=null,hs=null,Jp=null;function Zp(){Jp=hs=Ku=null}function em(t){var e=Hu.current;Pe(Hu),t._currentValue=e}function Af(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){Ku=t,Jp=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ut=!0),t.firstContext=null)}function un(t){var e=t._currentValue;if(Jp!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(Ku===null)throw Error(z(308));hs=t,Ku.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var pi=null;function tm(t){pi===null?pi=[t]:pi.push(t)}function UE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,tm(e)):(n.next=i.next,i.next=n),e.interleaved=n,rr(t,r)}function rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Er=!1;function nm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,rr(t,n)}return i=r.interleaved,i===null?(e.next=e,tm(r)):(e.next=i.next,i.next=e),r.interleaved=e,rr(t,n)}function _u(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zp(t,n)}}function Qy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qu(t,e,n,r){var i=t.updateQueue;Er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,a=s;do{var g=a.lane,v=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,k=a;switch(g=e,v=n,k.tag){case 1:if(T=k.payload,typeof T=="function"){p=T.call(v,p,g);break e}p=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=k.payload,g=typeof T=="function"?T.call(v,p,g):T,g==null)break e;p=Me({},p,g);break e;case 2:Er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,u=p):d=d.next=v,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ai|=o,t.lanes=o,t.memoizedState=p}}function Yy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var tl={},bn=Zr(tl),Sa=Zr(tl),Ca=Zr(tl);function mi(t){if(t===tl)throw Error(z(174));return t}function rm(t,e){switch(Se(Ca,e),Se(Sa,t),Se(bn,tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=af(e,t)}Pe(bn),Se(bn,e)}function Os(){Pe(bn),Pe(Sa),Pe(Ca)}function BE(t){mi(Ca.current);var e=mi(bn.current),n=af(e,t.type);e!==n&&(Se(Sa,t),Se(bn,n))}function im(t){Sa.current===t&&(Pe(bn),Pe(Sa))}var Oe=Zr(0);function Yu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wd=[];function sm(){for(var t=0;t<wd.length;t++)wd[t]._workInProgressVersionPrimary=null;wd.length=0}var yu=dr.ReactCurrentDispatcher,Ed=dr.ReactCurrentBatchConfig,xi=0,Le=null,Ke=null,et=null,Xu=!1,Zo=!1,xa=0,$k=0;function vt(){throw Error(z(321))}function om(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Sn(t[n],e[n]))return!1;return!0}function am(t,e,n,r,i,s){if(xi=s,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yu.current=t===null||t.memoizedState===null?Hk:Kk,t=n(r,i),Zo){s=0;do{if(Zo=!1,xa=0,25<=s)throw Error(z(301));s+=1,et=Ke=null,e.updateQueue=null,yu.current=Qk,t=n(r,i)}while(Zo)}if(yu.current=Ju,e=Ke!==null&&Ke.next!==null,xi=0,et=Ke=Le=null,Xu=!1,e)throw Error(z(300));return t}function lm(){var t=xa!==0;return xa=0,t}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Le.memoizedState=et=t:et=et.next=t,et}function cn(){if(Ke===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=et===null?Le.memoizedState:et.next;if(e!==null)et=e,Ke=t;else{if(t===null)throw Error(z(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},et===null?Le.memoizedState=et=t:et=et.next=t}return et}function Aa(t,e){return typeof e=="function"?e(t):e}function Td(t){var e=cn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((xi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,Le.lanes|=d,Ai|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Sn(r,e.memoizedState)||(Ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Le.lanes|=s,Ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Id(t){var e=cn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Sn(s,e.memoizedState)||(Ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $E(){}function WE(t,e){var n=Le,r=cn(),i=e(),s=!Sn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ut=!0),r=r.queue,um(HE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,ka(9,GE.bind(null,n,r,i,e),void 0,null),it===null)throw Error(z(349));xi&30||qE(n,e,i)}return i}function qE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function GE(t,e,n,r){e.value=n,e.getSnapshot=r,KE(e)&&QE(t)}function HE(t,e,n){return n(function(){KE(e)&&QE(t)})}function KE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Sn(t,n)}catch{return!0}}function QE(t){var e=rr(t,1);e!==null&&wn(e,t,1,-1)}function Xy(t){var e=Rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},e.queue=t,t=t.dispatch=Gk.bind(null,Le,t),[e.memoizedState,t]}function ka(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function YE(){return cn().memoizedState}function vu(t,e,n,r){var i=Rn();Le.flags|=t,i.memoizedState=ka(1|e,n,void 0,r===void 0?null:r)}function Bc(t,e,n,r){var i=cn();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var o=Ke.memoizedState;if(s=o.destroy,r!==null&&om(r,o.deps)){i.memoizedState=ka(e,n,s,r);return}}Le.flags|=t,i.memoizedState=ka(1|e,n,s,r)}function Jy(t,e){return vu(8390656,8,t,e)}function um(t,e){return Bc(2048,8,t,e)}function XE(t,e){return Bc(4,2,t,e)}function JE(t,e){return Bc(4,4,t,e)}function ZE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function eT(t,e,n){return n=n!=null?n.concat([t]):null,Bc(4,4,ZE.bind(null,e,t),n)}function cm(){}function tT(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&om(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function nT(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&om(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rT(t,e,n){return xi&21?(Sn(n,e)||(n=lE(),Le.lanes|=n,Ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ut=!0),t.memoizedState=n)}function Wk(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=Ed.transition;Ed.transition={};try{t(!1),e()}finally{we=n,Ed.transition=r}}function iT(){return cn().memoizedState}function qk(t,e,n){var r=Vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sT(t))oT(e,n);else if(n=UE(t,e,n,r),n!==null){var i=Lt();wn(n,t,r,i),aT(n,e,r)}}function Gk(t,e,n){var r=Vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sT(t))oT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Sn(a,o)){var u=e.interleaved;u===null?(i.next=i,tm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=UE(t,e,i,r),n!==null&&(i=Lt(),wn(n,t,r,i),aT(n,e,r))}}function sT(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function oT(t,e){Zo=Xu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function aT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zp(t,n)}}var Ju={readContext:un,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},Hk={readContext:un,useCallback:function(t,e){return Rn().memoizedState=[t,e===void 0?null:e],t},useContext:un,useEffect:Jy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vu(4194308,4,ZE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vu(4194308,4,t,e)},useInsertionEffect:function(t,e){return vu(4,2,t,e)},useMemo:function(t,e){var n=Rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qk.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=Rn();return t={current:t},e.memoizedState=t},useState:Xy,useDebugValue:cm,useDeferredValue:function(t){return Rn().memoizedState=t},useTransition:function(){var t=Xy(!1),e=t[0];return t=Wk.bind(null,t[1]),Rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,i=Rn();if(De){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),it===null)throw Error(z(349));xi&30||qE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Jy(HE.bind(null,r,s,t),[t]),r.flags|=2048,ka(9,GE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rn(),e=it.identifierPrefix;if(De){var n=Hn,r=Gn;n=(r&~(1<<32-vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$k++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Kk={readContext:un,useCallback:tT,useContext:un,useEffect:um,useImperativeHandle:eT,useInsertionEffect:XE,useLayoutEffect:JE,useMemo:nT,useReducer:Td,useRef:YE,useState:function(){return Td(Aa)},useDebugValue:cm,useDeferredValue:function(t){var e=cn();return rT(e,Ke.memoizedState,t)},useTransition:function(){var t=Td(Aa)[0],e=cn().memoizedState;return[t,e]},useMutableSource:$E,useSyncExternalStore:WE,useId:iT,unstable_isNewReconciler:!1},Qk={readContext:un,useCallback:tT,useContext:un,useEffect:um,useImperativeHandle:eT,useInsertionEffect:XE,useLayoutEffect:JE,useMemo:nT,useReducer:Id,useRef:YE,useState:function(){return Id(Aa)},useDebugValue:cm,useDeferredValue:function(t){var e=cn();return Ke===null?e.memoizedState=t:rT(e,Ke.memoizedState,t)},useTransition:function(){var t=Id(Aa)[0],e=cn().memoizedState;return[t,e]},useMutableSource:$E,useSyncExternalStore:WE,useId:iT,unstable_isNewReconciler:!1};function fn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $c={isMounted:function(t){return(t=t._reactInternals)?zi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=Vr(t),s=Zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(wn(e,t,i,r),_u(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=Vr(t),s=Zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(wn(e,t,i,r),_u(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Lt(),r=Vr(t),i=Zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Lr(t,i,r),e!==null&&(wn(e,t,r,n),_u(e,t,r))}};function Zy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wa(n,r)||!wa(i,s):!0}function lT(t,e,n){var r=!1,i=qr,s=e.contextType;return typeof s=="object"&&s!==null?s=un(s):(i=Wt(e)?Si:xt.current,r=e.contextTypes,s=(r=r!=null)?Ns(t,i):qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$c,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ev(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&$c.enqueueReplaceState(e,e.state,null)}function Rf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},nm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=un(s):(s=Wt(e)?Si:xt.current,i.context=Ns(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&$c.enqueueReplaceState(i,i.state,null),Qu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e){try{var n="",r=e;do n+=IA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Sd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Yk=typeof WeakMap=="function"?WeakMap:Map;function uT(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ec||(ec=!0,Uf=r),Pf(t,e)},n}function cT(t,e,n){n=Zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Pf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pf(t,e),typeof r!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Yk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=cR.bind(null,t,e,n),e.then(t,t))}function nv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,Lr(n,e,1))),n.lanes|=1),t)}var Xk=dr.ReactCurrentOwner,Ut=!1;function Nt(t,e,n,r){e.child=t===null?FE(e,null,n,r):Ds(e,t.child,n,r)}function iv(t,e,n,r,i){n=n.render;var s=e.ref;return ws(e,i),r=am(t,e,n,r,s,i),n=lm(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(De&&n&&Qp(e),e.flags|=1,Nt(t,e,r,i),e.child)}function sv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ym(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hT(t,e,s,r,i)):(t=Iu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(o,r)&&t.ref===e.ref)return ir(t,e,i)}return e.flags|=1,t=jr(s,r),t.ref=e.ref,t.return=e,e.child=t}function hT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(wa(s,r)&&t.ref===e.ref)if(Ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ut=!0);else return e.lanes=t.lanes,ir(t,e,i)}return Nf(t,e,n,r,i)}function dT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(fs,Yt),Yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(fs,Yt),Yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(fs,Yt),Yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Se(fs,Yt),Yt|=r;return Nt(t,e,i,n),e.child}function fT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nf(t,e,n,r,i){var s=Wt(n)?Si:xt.current;return s=Ns(e,s),ws(e,i),n=am(t,e,n,r,s,i),r=lm(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(De&&r&&Qp(e),e.flags|=1,Nt(t,e,n,i),e.child)}function ov(t,e,n,r,i){if(Wt(n)){var s=!0;Wu(e)}else s=!1;if(ws(e,i),e.stateNode===null)wu(t,e),lT(e,n,r),Rf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=un(c):(c=Wt(n)?Si:xt.current,c=Ns(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&ev(e,o,r,c),Er=!1;var g=e.memoizedState;o.state=g,Qu(e,r,o,i),u=e.memoizedState,a!==r||g!==u||$t.current||Er?(typeof d=="function"&&(kf(e,n,d,r),u=e.memoizedState),(a=Er||Zy(e,n,a,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,zE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:fn(e.type,a),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=un(u):(u=Wt(n)?Si:xt.current,u=Ns(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==u)&&ev(e,o,r,u),Er=!1,g=e.memoizedState,o.state=g,Qu(e,r,o,i);var T=e.memoizedState;a!==p||g!==T||$t.current||Er?(typeof v=="function"&&(kf(e,n,v,r),T=e.memoizedState),(c=Er||Zy(e,n,c,r,g,T,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return bf(t,e,n,r,s,i)}function bf(t,e,n,r,i,s){fT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&qy(e,n,!1),ir(t,e,s);r=e.stateNode,Xk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ds(e,t.child,null,s),e.child=Ds(e,null,a,s)):Nt(t,e,a,s),e.memoizedState=r.state,i&&qy(e,n,!0),e.child}function pT(t){var e=t.stateNode;e.pendingContext?Wy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wy(t,e.context,!1),rm(t,e.containerInfo)}function av(t,e,n,r,i){return bs(),Xp(i),e.flags|=256,Nt(t,e,n,r),e.child}var Df={dehydrated:null,treeContext:null,retryLane:0};function Of(t){return{baseLanes:t,cachePool:null,transitions:null}}function mT(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(Oe,i&1),t===null)return xf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gc(o,r,0,null),t=Ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Of(n),e.memoizedState=Df,t):hm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Jk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=jr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=jr(a,s):(s=Ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Of(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Df,r}return s=t.child,t=s.sibling,r=jr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hm(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Jl(t,e,n,r){return r!==null&&Xp(r),Ds(e,t.child,null,n),t=hm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Jk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Sd(Error(z(422))),Jl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gc({mode:"visible",children:r.children},i,0,null),s=Ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ds(e,t.child,null,o),e.child.memoizedState=Of(o),e.memoizedState=Df,s);if(!(e.mode&1))return Jl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=Sd(s,r,void 0),Jl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ut||a){if(r=it,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rr(t,i),wn(r,t,i,-1))}return _m(),r=Sd(Error(z(421))),Jl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Xt=Or(i.nextSibling),Zt=e,De=!0,mn=null,t!==null&&(sn[on++]=Gn,sn[on++]=Hn,sn[on++]=Ci,Gn=t.id,Hn=t.overflow,Ci=e),e=hm(e,r.children),e.flags|=4096,e)}function lv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Af(t.return,e,n)}function Cd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Nt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lv(t,n,e);else if(t.tag===19)lv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cd(e,!0,n,null,s);break;case"together":Cd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zk(t,e,n){switch(e.tag){case 3:pT(e),bs();break;case 5:BE(e);break;case 1:Wt(e.type)&&Wu(e);break;case 4:rm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Se(Hu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?mT(t,e,n):(Se(Oe,Oe.current&1),t=ir(t,e,n),t!==null?t.sibling:null);Se(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,dT(t,e,n)}return ir(t,e,n)}var _T,Lf,yT,vT;_T=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lf=function(){};yT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,mi(bn.current);var s=null;switch(n){case"input":i=nf(t,i),r=nf(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=of(t,i),r=of(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bu)}lf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ae("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};vT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Do(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function eR(t,e,n){var r=e.pendingProps;switch(Yp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return Wt(e.type)&&$u(),wt(e),null;case 3:return r=e.stateNode,Os(),Pe($t),Pe(xt),sm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mn!==null&&($f(mn),mn=null))),Lf(t,e),wt(e),null;case 5:im(e);var i=mi(Ca.current);if(n=e.type,t!==null&&e.stateNode!=null)yT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return wt(e),null}if(t=mi(bn.current),Yl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Pn]=e,r[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<Wo.length;i++)Ae(Wo[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":_y(r,s),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ae("invalid",r);break;case"textarea":vy(r,s),Ae("invalid",r)}lf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ql(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ql(r.textContent,a,t),i=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":zl(r),yy(r,s,!0);break;case"textarea":zl(r),wy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pn]=e,t[Ia]=r,_T(t,e,!1,!1),e.stateNode=t;e:{switch(o=uf(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wo.length;i++)Ae(Wo[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":_y(t,r),i=nf(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":vy(t,r),i=of(t,r),Ae("invalid",t);break;default:i=r}lf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Yw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Kw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&pa(t,u):typeof u=="number"&&pa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ae("scroll",t):u!=null&&Lp(t,s,u,o))}switch(n){case"input":zl(t),yy(t,r,!1);break;case"textarea":zl(t),wy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gs(t,!!r.multiple,s,!1):r.defaultValue!=null&&gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Bu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wt(e),null;case 6:if(t&&e.stateNode!=null)vT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=mi(Ca.current),mi(bn.current),Yl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pn]=e,(s=r.nodeValue!==n)&&(t=Zt,t!==null))switch(t.tag){case 3:Ql(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ql(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=e,e.stateNode=r}return wt(e),null;case 13:if(Pe(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&Xt!==null&&e.mode&1&&!(e.flags&128))VE(),bs(),e.flags|=98560,s=!1;else if(s=Yl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Pn]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),s=!1}else mn!==null&&($f(mn),mn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?Ye===0&&(Ye=3):_m())),e.updateQueue!==null&&(e.flags|=4),wt(e),null);case 4:return Os(),Lf(t,e),t===null&&Ea(e.stateNode.containerInfo),wt(e),null;case 10:return em(e.type._context),wt(e),null;case 17:return Wt(e.type)&&$u(),wt(e),null;case 19:if(Pe(Oe),s=e.memoizedState,s===null)return wt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Do(s,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yu(t),o!==null){for(e.flags|=128,Do(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>Ms&&(e.flags|=128,r=!0,Do(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Do(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!De)return wt(e),null}else 2*ze()-s.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,r=!0,Do(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=Oe.current,Se(Oe,r?n&1|2:n&1),e):(wt(e),null);case 22:case 23:return gm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Yt&1073741824&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function tR(t,e){switch(Yp(e),e.tag){case 1:return Wt(e.type)&&$u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Os(),Pe($t),Pe(xt),sm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return im(e),null;case 13:if(Pe(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Oe),null;case 4:return Os(),null;case 10:return em(e.type._context),null;case 22:case 23:return gm(),null;case 24:return null;default:return null}}var Zl=!1,It=!1,nR=typeof WeakSet=="function"?WeakSet:Set,G=null;function ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function Mf(t,e,n){try{n()}catch(r){je(t,e,r)}}var uv=!1;function rR(t,e){if(vf=Fu,t=SE(),Kp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,p=t,g=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++d===r&&(u=o),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wf={focusedElem:t,selectionRange:n},Fu=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var k=T.memoizedProps,N=T.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?k:fn(e.type,k),N);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(D){je(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return T=uv,uv=!1,T}function ea(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mf(e,n,s)}i=i.next}while(i!==r)}}function Wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wT(t){var e=t.alternate;e!==null&&(t.alternate=null,wT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pn],delete e[Ia],delete e[If],delete e[Fk],delete e[Uk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ET(t){return t.tag===5||t.tag===3||t.tag===4}function cv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ET(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bu));else if(r!==4&&(t=t.child,t!==null))for(jf(t,e,n),t=t.sibling;t!==null;)jf(t,e,n),t=t.sibling}function Ff(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}var lt=null,pn=!1;function yr(t,e,n){for(n=n.child;n!==null;)TT(t,e,n),n=n.sibling}function TT(t,e,n){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(Mc,n)}catch{}switch(n.tag){case 5:It||ds(n,e);case 6:var r=lt,i=pn;lt=null,yr(t,e,n),lt=r,pn=i,lt!==null&&(pn?(t=lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):lt.removeChild(n.stateNode));break;case 18:lt!==null&&(pn?(t=lt,n=n.stateNode,t.nodeType===8?yd(t.parentNode,n):t.nodeType===1&&yd(t,n),ya(t)):yd(lt,n.stateNode));break;case 4:r=lt,i=pn,lt=n.stateNode.containerInfo,pn=!0,yr(t,e,n),lt=r,pn=i;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mf(n,e,o),i=i.next}while(i!==r)}yr(t,e,n);break;case 1:if(!It&&(ds(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,e,a)}yr(t,e,n);break;case 21:yr(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,yr(t,e,n),It=r):yr(t,e,n);break;default:yr(t,e,n)}}function hv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nR),e.forEach(function(r){var i=dR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:lt=a.stateNode,pn=!1;break e;case 3:lt=a.stateNode.containerInfo,pn=!0;break e;case 4:lt=a.stateNode.containerInfo,pn=!0;break e}a=a.return}if(lt===null)throw Error(z(160));TT(s,o,i),lt=null,pn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){je(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)IT(e,t),e=e.sibling}function IT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dn(e,t),An(t),r&4){try{ea(3,t,t.return),Wc(3,t)}catch(k){je(t,t.return,k)}try{ea(5,t,t.return)}catch(k){je(t,t.return,k)}}break;case 1:dn(e,t),An(t),r&512&&n!==null&&ds(n,n.return);break;case 5:if(dn(e,t),An(t),r&512&&n!==null&&ds(n,n.return),t.flags&32){var i=t.stateNode;try{pa(i,"")}catch(k){je(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qw(i,s),uf(a,o);var c=uf(a,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?Yw(i,p):d==="dangerouslySetInnerHTML"?Kw(i,p):d==="children"?pa(i,p):Lp(i,d,p,c)}switch(a){case"input":rf(i,s);break;case"textarea":Gw(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?gs(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?gs(i,!!s.multiple,s.defaultValue,!0):gs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ia]=s}catch(k){je(t,t.return,k)}}break;case 6:if(dn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){je(t,t.return,k)}}break;case 3:if(dn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(k){je(t,t.return,k)}break;case 4:dn(e,t),An(t);break;case 13:dn(e,t),An(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pm=ze())),r&4&&hv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(It=(c=It)||d,dn(e,t),It=c):dn(e,t),An(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(G=t,d=t.child;d!==null;){for(p=G=d;G!==null;){switch(g=G,v=g.child,g.tag){case 0:case 11:case 14:case 15:ea(4,g,g.return);break;case 1:ds(g,g.return);var T=g.stateNode;if(typeof T.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(k){je(r,n,k)}}break;case 5:ds(g,g.return);break;case 22:if(g.memoizedState!==null){fv(p);continue}}v!==null?(v.return=g,G=v):fv(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Qw("display",o))}catch(k){je(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){je(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dn(e,t),An(t),r&4&&hv(t);break;case 21:break;default:dn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ET(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pa(i,""),r.flags&=-33);var s=cv(t);Ff(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=cv(t);jf(t,a,o);break;default:throw Error(z(161))}}catch(u){je(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iR(t,e,n){G=t,ST(t)}function ST(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Zl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||It;a=Zl;var c=It;if(Zl=o,(It=u)&&!c)for(G=i;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?pv(i):u!==null?(u.return=o,G=u):pv(i);for(;s!==null;)G=s,ST(s),s=s.sibling;G=i,Zl=a,It=c}dv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):dv(t)}}function dv(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||Wc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:fn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Yy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ya(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}It||e.flags&512&&Vf(e)}catch(g){je(e,e.return,g)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function fv(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function pv(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wc(4,e)}catch(u){je(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){je(e,i,u)}}var s=e.return;try{Vf(e)}catch(u){je(e,s,u)}break;case 5:var o=e.return;try{Vf(e)}catch(u){je(e,o,u)}}}catch(u){je(e,e.return,u)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var sR=Math.ceil,Zu=dr.ReactCurrentDispatcher,dm=dr.ReactCurrentOwner,ln=dr.ReactCurrentBatchConfig,me=0,it=null,qe=null,ht=0,Yt=0,fs=Zr(0),Ye=0,Ra=null,Ai=0,qc=0,fm=0,ta=null,Ft=null,pm=0,Ms=1/0,Bn=null,ec=!1,Uf=null,Mr=null,eu=!1,Rr=null,tc=0,na=0,zf=null,Eu=-1,Tu=0;function Lt(){return me&6?ze():Eu!==-1?Eu:Eu=ze()}function Vr(t){return t.mode&1?me&2&&ht!==0?ht&-ht:Bk.transition!==null?(Tu===0&&(Tu=lE()),Tu):(t=we,t!==0||(t=window.event,t=t===void 0?16:mE(t.type)),t):1}function wn(t,e,n,r){if(50<na)throw na=0,zf=null,Error(z(185));Ja(t,n,r),(!(me&2)||t!==it)&&(t===it&&(!(me&2)&&(qc|=n),Ye===4&&Ir(t,ht)),qt(t,r),n===1&&me===0&&!(e.mode&1)&&(Ms=ze()+500,zc&&ei()))}function qt(t,e){var n=t.callbackNode;BA(t,e);var r=ju(t,t===it?ht:0);if(r===0)n!==null&&Iy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Iy(n),e===1)t.tag===0?zk(mv.bind(null,t)):OE(mv.bind(null,t)),Vk(function(){!(me&6)&&ei()}),n=null;else{switch(uE(r)){case 1:n=Up;break;case 4:n=oE;break;case 16:n=Vu;break;case 536870912:n=aE;break;default:n=Vu}n=bT(n,CT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function CT(t,e){if(Eu=-1,Tu=0,me&6)throw Error(z(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var r=ju(t,t===it?ht:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nc(t,r);else{e=r;var i=me;me|=2;var s=AT();(it!==t||ht!==e)&&(Bn=null,Ms=ze()+500,wi(t,e));do try{lR();break}catch(a){xT(t,a)}while(!0);Zp(),Zu.current=s,me=i,qe!==null?e=0:(it=null,ht=0,e=Ye)}if(e!==0){if(e===2&&(i=pf(t),i!==0&&(r=i,e=Bf(t,i))),e===1)throw n=Ra,wi(t,0),Ir(t,r),qt(t,ze()),n;if(e===6)Ir(t,r);else{if(i=t.current.alternate,!(r&30)&&!oR(i)&&(e=nc(t,r),e===2&&(s=pf(t),s!==0&&(r=s,e=Bf(t,s))),e===1))throw n=Ra,wi(t,0),Ir(t,r),qt(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:ci(t,Ft,Bn);break;case 3:if(Ir(t,r),(r&130023424)===r&&(e=pm+500-ze(),10<e)){if(ju(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Tf(ci.bind(null,t,Ft,Bn),e);break}ci(t,Ft,Bn);break;case 4:if(Ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-vn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sR(r/1960))-r,10<r){t.timeoutHandle=Tf(ci.bind(null,t,Ft,Bn),r);break}ci(t,Ft,Bn);break;case 5:ci(t,Ft,Bn);break;default:throw Error(z(329))}}}return qt(t,ze()),t.callbackNode===n?CT.bind(null,t):null}function Bf(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(wi(t,e).flags|=256),t=nc(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&$f(e)),t}function $f(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function oR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ir(t,e){for(e&=~fm,e&=~qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vn(e),r=1<<n;t[n]=-1,e&=~r}}function mv(t){if(me&6)throw Error(z(327));Es();var e=ju(t,0);if(!(e&1))return qt(t,ze()),null;var n=nc(t,e);if(t.tag!==0&&n===2){var r=pf(t);r!==0&&(e=r,n=Bf(t,r))}if(n===1)throw n=Ra,wi(t,0),Ir(t,e),qt(t,ze()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ci(t,Ft,Bn),qt(t,ze()),null}function mm(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(Ms=ze()+500,zc&&ei())}}function ki(t){Rr!==null&&Rr.tag===0&&!(me&6)&&Es();var e=me;me|=1;var n=ln.transition,r=we;try{if(ln.transition=null,we=1,t)return t()}finally{we=r,ln.transition=n,me=e,!(me&6)&&ei()}}function gm(){Yt=fs.current,Pe(fs)}function wi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Mk(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(Yp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$u();break;case 3:Os(),Pe($t),Pe(xt),sm();break;case 5:im(r);break;case 4:Os();break;case 13:Pe(Oe);break;case 19:Pe(Oe);break;case 10:em(r.type._context);break;case 22:case 23:gm()}n=n.return}if(it=t,qe=t=jr(t.current,null),ht=Yt=e,Ye=0,Ra=null,fm=qc=Ai=0,Ft=ta=null,pi!==null){for(e=0;e<pi.length;e++)if(n=pi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}pi=null}return t}function xT(t,e){do{var n=qe;try{if(Zp(),yu.current=Ju,Xu){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xu=!1}if(xi=0,et=Ke=Le=null,Zo=!1,xa=0,dm.current=null,n===null||n.return===null){Ye=1,Ra=e,qe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=ht,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=nv(o);if(v!==null){v.flags&=-257,rv(v,o,a,s,e),v.mode&1&&tv(s,c,e),e=v,u=c;var T=e.updateQueue;if(T===null){var k=new Set;k.add(u),e.updateQueue=k}else T.add(u);break e}else{if(!(e&1)){tv(s,c,e),_m();break e}u=Error(z(426))}}else if(De&&a.mode&1){var N=nv(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),rv(N,o,a,s,e),Xp(Ls(u,a));break e}}s=u=Ls(u,a),Ye!==4&&(Ye=2),ta===null?ta=[s]:ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=uT(s,u,e);Qy(s,S);break e;case 1:a=u;var w=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Mr===null||!Mr.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=cT(s,a,e);Qy(s,D);break e}}s=s.return}while(s!==null)}RT(n)}catch(O){e=O,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function AT(){var t=Zu.current;return Zu.current=Ju,t===null?Ju:t}function _m(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),it===null||!(Ai&268435455)&&!(qc&268435455)||Ir(it,ht)}function nc(t,e){var n=me;me|=2;var r=AT();(it!==t||ht!==e)&&(Bn=null,wi(t,e));do try{aR();break}catch(i){xT(t,i)}while(!0);if(Zp(),me=n,Zu.current=r,qe!==null)throw Error(z(261));return it=null,ht=0,Ye}function aR(){for(;qe!==null;)kT(qe)}function lR(){for(;qe!==null&&!DA();)kT(qe)}function kT(t){var e=NT(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,e===null?RT(t):qe=e,dm.current=null}function RT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tR(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,qe=null;return}}else if(n=eR(n,e,Yt),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Ye===0&&(Ye=5)}function ci(t,e,n){var r=we,i=ln.transition;try{ln.transition=null,we=1,uR(t,e,n,r)}finally{ln.transition=i,we=r}return null}function uR(t,e,n,r){do Es();while(Rr!==null);if(me&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($A(t,s),t===it&&(qe=it=null,ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eu||(eu=!0,bT(Vu,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ln.transition,ln.transition=null;var o=we;we=1;var a=me;me|=4,dm.current=null,rR(t,n),IT(n,t),Rk(wf),Fu=!!vf,wf=vf=null,t.current=n,iR(n),OA(),me=a,we=o,ln.transition=s}else t.current=n;if(eu&&(eu=!1,Rr=t,tc=i),s=t.pendingLanes,s===0&&(Mr=null),VA(n.stateNode),qt(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ec)throw ec=!1,t=Uf,Uf=null,t;return tc&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===zf?na++:(na=0,zf=t):na=0,ei(),null}function Es(){if(Rr!==null){var t=uE(tc),e=ln.transition,n=we;try{if(ln.transition=null,we=16>t?16:t,Rr===null)var r=!1;else{if(t=Rr,Rr=null,tc=0,me&6)throw Error(z(331));var i=me;for(me|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(G=c;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:ea(8,d,s)}var p=d.child;if(p!==null)p.return=d,G=p;else for(;G!==null;){d=G;var g=d.sibling,v=d.return;if(wT(d),d===c){G=null;break}if(g!==null){g.return=v,G=g;break}G=v}}}var T=s.alternate;if(T!==null){var k=T.child;if(k!==null){T.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,G=S;break e}G=s.return}}var w=t.current;for(G=w;G!==null;){o=G;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,G=C;else e:for(o=w;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wc(9,a)}}catch(O){je(a,a.return,O)}if(a===o){G=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,G=D;break e}G=a.return}}if(me=i,ei(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(Mc,t)}catch{}r=!0}return r}finally{we=n,ln.transition=e}}return!1}function gv(t,e,n){e=Ls(n,e),e=uT(t,e,1),t=Lr(t,e,1),e=Lt(),t!==null&&(Ja(t,1,e),qt(t,e))}function je(t,e,n){if(t.tag===3)gv(t,t,n);else for(;e!==null;){if(e.tag===3){gv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mr===null||!Mr.has(r))){t=Ls(n,t),t=cT(e,t,1),e=Lr(e,t,1),t=Lt(),e!==null&&(Ja(e,1,t),qt(e,t));break}}e=e.return}}function cR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Lt(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(ht&n)===n&&(Ye===4||Ye===3&&(ht&130023424)===ht&&500>ze()-pm?wi(t,0):fm|=n),qt(t,e)}function PT(t,e){e===0&&(t.mode&1?(e=Wl,Wl<<=1,!(Wl&130023424)&&(Wl=4194304)):e=1);var n=Lt();t=rr(t,e),t!==null&&(Ja(t,e,n),qt(t,n))}function hR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),PT(t,n)}function dR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),PT(t,n)}var NT;NT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)Ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ut=!1,Zk(t,e,n);Ut=!!(t.flags&131072)}else Ut=!1,De&&e.flags&1048576&&LE(e,Gu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wu(t,e),t=e.pendingProps;var i=Ns(e,xt.current);ws(e,n),i=am(null,e,r,t,i,n);var s=lm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(r)?(s=!0,Wu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nm(e),i.updater=$c,e.stateNode=i,i._reactInternals=e,Rf(e,r,t,n),e=bf(null,e,r,!0,s,n)):(e.tag=0,De&&s&&Qp(e),Nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pR(r),t=fn(r,t),i){case 0:e=Nf(null,e,r,t,n);break e;case 1:e=ov(null,e,r,t,n);break e;case 11:e=iv(null,e,r,t,n);break e;case 14:e=sv(null,e,r,fn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Nf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),ov(t,e,r,i,n);case 3:e:{if(pT(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,zE(t,e),Qu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ls(Error(z(423)),e),e=av(t,e,r,n,i);break e}else if(r!==i){i=Ls(Error(z(424)),e),e=av(t,e,r,n,i);break e}else for(Xt=Or(e.stateNode.containerInfo.firstChild),Zt=e,De=!0,mn=null,n=FE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),r===i){e=ir(t,e,n);break e}Nt(t,e,r,n)}e=e.child}return e;case 5:return BE(e),t===null&&xf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ef(r,i)?o=null:s!==null&&Ef(r,s)&&(e.flags|=32),fT(t,e),Nt(t,e,o,n),e.child;case 6:return t===null&&xf(e),null;case 13:return mT(t,e,n);case 4:return rm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ds(e,null,r,n):Nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),iv(t,e,r,i,n);case 7:return Nt(t,e,e.pendingProps,n),e.child;case 8:return Nt(t,e,e.pendingProps.children,n),e.child;case 12:return Nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Se(Hu,r._currentValue),r._currentValue=o,s!==null)if(Sn(s.value,o)){if(s.children===i.children&&!$t.current){e=ir(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Zn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Af(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Af(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ws(e,n),i=un(i),r=r(i),e.flags|=1,Nt(t,e,r,n),e.child;case 14:return r=e.type,i=fn(r,e.pendingProps),i=fn(r.type,i),sv(t,e,r,i,n);case 15:return hT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),wu(t,e),e.tag=1,Wt(r)?(t=!0,Wu(e)):t=!1,ws(e,n),lT(e,r,i),Rf(e,r,i,n),bf(null,e,r,!0,t,n);case 19:return gT(t,e,n);case 22:return dT(t,e,n)}throw Error(z(156,e.tag))};function bT(t,e){return sE(t,e)}function fR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,r){return new fR(t,e,n,r)}function ym(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pR(t){if(typeof t=="function")return ym(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vp)return 11;if(t===jp)return 14}return 2}function jr(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Iu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ym(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rs:return Ei(n.children,i,s,e);case Mp:o=8,i|=8;break;case Jd:return t=an(12,n,e,i|2),t.elementType=Jd,t.lanes=s,t;case Zd:return t=an(13,n,e,i),t.elementType=Zd,t.lanes=s,t;case ef:return t=an(19,n,e,i),t.elementType=ef,t.lanes=s,t;case Bw:return Gc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Uw:o=10;break e;case zw:o=9;break e;case Vp:o=11;break e;case jp:o=14;break e;case wr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=an(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ei(t,e,n,r){return t=an(7,t,r,e),t.lanes=n,t}function Gc(t,e,n,r){return t=an(22,t,r,e),t.elementType=Bw,t.lanes=n,t.stateNode={isHidden:!1},t}function xd(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function Ad(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ad(0),this.expirationTimes=ad(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ad(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vm(t,e,n,r,i,s,o,a,u){return t=new mR(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=an(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nm(s),t}function gR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ns,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function DT(t){if(!t)return qr;t=t._reactInternals;e:{if(zi(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Wt(n))return DE(t,n,e)}return e}function OT(t,e,n,r,i,s,o,a,u){return t=vm(n,r,!0,t,i,s,o,a,u),t.context=DT(null),n=t.current,r=Lt(),i=Vr(n),s=Zn(r,i),s.callback=e??null,Lr(n,s,i),t.current.lanes=i,Ja(t,i,r),qt(t,r),t}function Hc(t,e,n,r){var i=e.current,s=Lt(),o=Vr(i);return n=DT(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Lr(i,e,o),t!==null&&(wn(t,i,o,s),_u(t,i,o)),o}function rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _v(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wm(t,e){_v(t,e),(t=t.alternate)&&_v(t,e)}function _R(){return null}var LT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Em(t){this._internalRoot=t}Kc.prototype.render=Em.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Hc(t,e,null,null)};Kc.prototype.unmount=Em.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ki(function(){Hc(null,t,null,null)}),e[nr]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=dE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&pE(t)}};function Tm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yv(){}function yR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=rc(o);s.call(c)}}var o=OT(e,r,t,0,null,!1,!1,"",yv);return t._reactRootContainer=o,t[nr]=o.current,Ea(t.nodeType===8?t.parentNode:t),ki(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=rc(u);a.call(c)}}var u=vm(t,0,!1,null,null,!1,!1,"",yv);return t._reactRootContainer=u,t[nr]=u.current,Ea(t.nodeType===8?t.parentNode:t),ki(function(){Hc(e,u,n,r)}),u}function Yc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=rc(o);a.call(u)}}Hc(e,o,t,i)}else o=yR(n,e,t,i,r);return rc(o)}cE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$o(e.pendingLanes);n!==0&&(zp(e,n|1),qt(e,ze()),!(me&6)&&(Ms=ze()+500,ei()))}break;case 13:ki(function(){var r=rr(t,1);if(r!==null){var i=Lt();wn(r,t,1,i)}}),wm(t,1)}};Bp=function(t){if(t.tag===13){var e=rr(t,134217728);if(e!==null){var n=Lt();wn(e,t,134217728,n)}wm(t,134217728)}};hE=function(t){if(t.tag===13){var e=Vr(t),n=rr(t,e);if(n!==null){var r=Lt();wn(n,t,e,r)}wm(t,e)}};dE=function(){return we};fE=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};hf=function(t,e,n){switch(e){case"input":if(rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Uc(r);if(!i)throw Error(z(90));Ww(r),rf(r,i)}}}break;case"textarea":Gw(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};Zw=mm;eE=ki;var vR={usingClientEntryPoint:!1,Events:[el,as,Uc,Xw,Jw,mm]},Oo={findFiberByHostInstance:fi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wR={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rE(t),t===null?null:t.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||_R,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{Mc=tu.inject(wR),Nn=tu}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vR;nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tm(e))throw Error(z(200));return gR(t,e,null,n)};nn.createRoot=function(t,e){if(!Tm(t))throw Error(z(299));var n=!1,r="",i=LT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vm(t,1,!1,null,null,n,!1,r,i),t[nr]=e.current,Ea(t.nodeType===8?t.parentNode:t),new Em(e)};nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=rE(e),t=t===null?null:t.stateNode,t};nn.flushSync=function(t){return ki(t)};nn.hydrate=function(t,e,n){if(!Qc(e))throw Error(z(200));return Yc(null,t,e,!0,n)};nn.hydrateRoot=function(t,e,n){if(!Tm(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=LT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=OT(e,null,t,1,n??null,i,!1,s,o),t[nr]=e.current,Ea(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Kc(e)};nn.render=function(t,e,n){if(!Qc(e))throw Error(z(200));return Yc(null,t,e,!1,n)};nn.unmountComponentAtNode=function(t){if(!Qc(t))throw Error(z(40));return t._reactRootContainer?(ki(function(){Yc(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};nn.unstable_batchedUpdates=mm;nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Qc(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Yc(t,e,n,!1,r)};nn.version="18.3.1-next-f1338f8080-20240426";function MT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(MT)}catch(t){console.error(t)}}MT(),Mw.exports=nn;var ER=Mw.exports,VT,vv=ER;VT=vv.createRoot,vv.hydrateRoot;var wv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw Zs(e)},Zs=function(t){return new Error("Firebase Database ("+jT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},TR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Im={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,v=c&63;u||(v=64,o||(g=64)),r.push(n[d],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(FT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new IR;const g=s<<2|a>>4;if(r.push(g),c!==64){const v=a<<4&240|c>>2;if(r.push(v),p!==64){const T=c<<6&192|p;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UT=function(t){const e=FT(t);return Im.encodeByteArray(e,!0)},ic=function(t){return UT(t).replace(/\./g,"")},sc=function(t){try{return Im.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t){return zT(void 0,t)}function zT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!CR(n)||(t[n]=zT(t[n],e[n]));return t}function CR(t){return t!=="__proto__"}/**
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
 */function xR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AR=()=>xR().__FIREBASE_DEFAULTS__,kR=()=>{if(typeof process>"u"||typeof wv>"u")return;const t=wv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sc(t[1]);return e&&JSON.parse(e)},Xc=()=>{try{return AR()||kR()||RR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},BT=t=>{var e,n;return(n=(e=Xc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$T=t=>{const e=BT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},WT=()=>{var t;return(t=Xc())===null||t===void 0?void 0:t.config},qT=t=>{var e;return(e=Xc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function GT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ic(JSON.stringify(n)),ic(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function PR(){var t;const e=(t=Xc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function HT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DR(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OR(){return jT.NODE_ADMIN===!0}function LR(){return!PR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MR(){try{return typeof indexedDB=="object"}catch{return!1}}function VR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="FirebaseError";class fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jR,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nl.prototype.create)}}class nl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?FR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fr(i,a,r)}}function FR(t,e){return t.replace(UR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const UR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){return JSON.parse(t)}function rt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Pa(sc(s[0])||""),n=Pa(sc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},zR=function(t){const e=KT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},BR=function(t){const e=KT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Wf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Na(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ev(s)&&Ev(o)){if(!Na(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ev(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let p=0;p<80;p++){p<40?p<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):p<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const g=(i<<5|i>>>27)+c+u+d+r[p]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function WR(t,e){const n=new qR(t,e);return n.subscribe.bind(n)}class qR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kd),i.error===void 0&&(i.error=kd),i.complete===void 0&&(i.complete=kd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kd(){}function Cm(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function be(t){return t&&t._delegate?t._delegate:t}class Gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hi="[DEFAULT]";/**
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
 */class KR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YR(e))try{this.getOrInitializeService({instanceIdentifier:hi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hi){return this.instances.has(e)}getOptions(e=hi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hi){return this.component?this.component.multipleInstances?e:hi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QR(t){return t===hi?void 0:t}function YR(t){return t.instantiationMode==="EAGER"}/**
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
 */class XR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const JR={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},ZR=ce.INFO,e1={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},t1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=e1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eh{constructor(e){this.name=e,this._logLevel=ZR,this._logHandler=t1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const n1=(t,e)=>e.some(n=>t instanceof n);let Tv,Iv;function r1(){return Tv||(Tv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function i1(){return Iv||(Iv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const QT=new WeakMap,qf=new WeakMap,YT=new WeakMap,Rd=new WeakMap,xm=new WeakMap;function s1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&QT.set(n,t)}).catch(()=>{}),xm.set(e,t),e}function o1(t){if(qf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qf.set(t,e)}let Gf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||YT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function a1(t){Gf=t(Gf)}function l1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pd(this),e,...n);return YT.set(r,e.sort?e.sort():[e]),Fr(r)}:i1().includes(t)?function(...e){return t.apply(Pd(this),e),Fr(QT.get(this))}:function(...e){return Fr(t.apply(Pd(this),e))}}function u1(t){return typeof t=="function"?l1(t):(t instanceof IDBTransaction&&o1(t),n1(t,r1())?new Proxy(t,Gf):t)}function Fr(t){if(t instanceof IDBRequest)return s1(t);if(Rd.has(t))return Rd.get(t);const e=u1(t);return e!==t&&(Rd.set(t,e),xm.set(e,t)),e}const Pd=t=>xm.get(t);function c1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Fr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Fr(o.result),u.oldVersion,u.newVersion,Fr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const h1=["get","getKey","getAll","getAllKeys","count"],d1=["put","add","delete","clear"],Nd=new Map;function Sv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nd.get(e))return Nd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=d1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||h1.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Nd.set(e,s),s}a1(t=>({...t,get:(e,n,r)=>Sv(e,n)||t.get(e,n,r),has:(e,n)=>!!Sv(e,n)||t.has(e,n)}));/**
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
 */class f1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(p1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function p1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hf="@firebase/app",Cv="0.10.13";/**
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
 */const sr=new eh("@firebase/app"),m1="@firebase/app-compat",g1="@firebase/analytics-compat",_1="@firebase/analytics",y1="@firebase/app-check-compat",v1="@firebase/app-check",w1="@firebase/auth",E1="@firebase/auth-compat",T1="@firebase/database",I1="@firebase/data-connect",S1="@firebase/database-compat",C1="@firebase/functions",x1="@firebase/functions-compat",A1="@firebase/installations",k1="@firebase/installations-compat",R1="@firebase/messaging",P1="@firebase/messaging-compat",N1="@firebase/performance",b1="@firebase/performance-compat",D1="@firebase/remote-config",O1="@firebase/remote-config-compat",L1="@firebase/storage",M1="@firebase/storage-compat",V1="@firebase/firestore",j1="@firebase/vertexai-preview",F1="@firebase/firestore-compat",U1="firebase",z1="10.14.1";/**
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
 */const Kf="[DEFAULT]",B1={[Hf]:"fire-core",[m1]:"fire-core-compat",[_1]:"fire-analytics",[g1]:"fire-analytics-compat",[v1]:"fire-app-check",[y1]:"fire-app-check-compat",[w1]:"fire-auth",[E1]:"fire-auth-compat",[T1]:"fire-rtdb",[I1]:"fire-data-connect",[S1]:"fire-rtdb-compat",[C1]:"fire-fn",[x1]:"fire-fn-compat",[A1]:"fire-iid",[k1]:"fire-iid-compat",[R1]:"fire-fcm",[P1]:"fire-fcm-compat",[N1]:"fire-perf",[b1]:"fire-perf-compat",[D1]:"fire-rc",[O1]:"fire-rc-compat",[L1]:"fire-gcs",[M1]:"fire-gcs-compat",[V1]:"fire-fst",[F1]:"fire-fst-compat",[j1]:"fire-vertex","fire-js":"fire-js",[U1]:"fire-js-all"};/**
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
 */const ba=new Map,$1=new Map,Qf=new Map;function xv(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ri(t){const e=t.name;if(Qf.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;Qf.set(e,t);for(const n of ba.values())xv(n,t);for(const n of $1.values())xv(n,t);return!0}function th(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kn(t){return t.settings!==void 0}/**
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
 */const W1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ur=new nl("app","Firebase",W1);/**
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
 */class q1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Bi=z1;function XT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ur.create("bad-app-name",{appName:String(i)});if(n||(n=WT()),!n)throw Ur.create("no-options");const s=ba.get(i);if(s){if(Na(n,s.options)&&Na(r,s.config))return s;throw Ur.create("duplicate-app",{appName:i})}const o=new XR(i);for(const u of Qf.values())o.addComponent(u);const a=new q1(n,r,o);return ba.set(i,a),a}function Am(t=Kf){const e=ba.get(t);if(!e&&t===Kf&&WT())return XT();if(!e)throw Ur.create("no-app",{appName:t});return e}function G1(){return Array.from(ba.values())}function Dn(t,e,n){var r;let i=(r=B1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(a.join(" "));return}Ri(new Gr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const H1="firebase-heartbeat-database",K1=1,Da="firebase-heartbeat-store";let bd=null;function JT(){return bd||(bd=c1(H1,K1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Da)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ur.create("idb-open",{originalErrorMessage:t.message})})),bd}async function Q1(t){try{const n=(await JT()).transaction(Da),r=await n.objectStore(Da).get(ZT(t));return await n.done,r}catch(e){if(e instanceof fr)sr.warn(e.message);else{const n=Ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function Av(t,e){try{const r=(await JT()).transaction(Da,"readwrite");await r.objectStore(Da).put(e,ZT(t)),await r.done}catch(n){if(n instanceof fr)sr.warn(n.message);else{const r=Ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function ZT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Y1=1024,X1=30*24*60*60*1e3;class J1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=X1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kv(),{heartbeatsToSend:r,unsentEntries:i}=Z1(this._heartbeatsCache.heartbeats),s=ic(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return sr.warn(n),""}}}function kv(){return new Date().toISOString().substring(0,10)}function Z1(t,e=Y1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Rv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MR()?VR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Q1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Av(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Av(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Rv(t){return ic(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tP(t){Ri(new Gr("platform-logger",e=>new f1(e),"PRIVATE")),Ri(new Gr("heartbeat",e=>new J1(e),"PRIVATE")),Dn(Hf,Cv,t),Dn(Hf,Cv,"esm2017"),Dn("fire-js","")}tP("");function km(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function eI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nP=eI,tI=new nl("auth","Firebase",eI());/**
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
 */const ac=new eh("@firebase/auth");function rP(t,...e){ac.logLevel<=ce.WARN&&ac.warn(`Auth (${Bi}): ${t}`,...e)}function Su(t,...e){ac.logLevel<=ce.ERROR&&ac.error(`Auth (${Bi}): ${t}`,...e)}/**
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
 */function Mn(t,...e){throw Pm(t,...e)}function En(t,...e){return Pm(t,...e)}function Rm(t,e,n){const r=Object.assign(Object.assign({},nP()),{[e]:n});return new nl("auth","Firebase",r).create(e,{appName:t.name})}function Ti(t){return Rm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Mn(t,"argument-error"),Rm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tI.create(t,...e)}function te(t,e,...n){if(!t)throw Pm(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Su(e),new Error(e)}function or(t,e){t||Qn(e)}/**
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
 */function Yf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sP(){return Pv()==="http:"||Pv()==="https:"}function Pv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function oP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sP()||bR()||"connection"in navigator)?navigator.onLine:!0}function aP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class rl{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=Sm()||HT()}get(){return oP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nm(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class nI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uP=new rl(3e4,6e4);function bm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function to(t,e,n,r,i={}){return rI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=eo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return NR()||(c.referrerPolicy="no-referrer"),nI.fetch()(iI(t,t.config.apiHost,n,a),c)})}async function rI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lP),e);try{const i=new hP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw nu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw nu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw nu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw nu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Rm(t,d,c);Mn(t,d)}}catch(i){if(i instanceof fr)throw i;Mn(t,"network-request-failed",{message:String(i)})}}async function cP(t,e,n,r,i={}){const s=await to(t,e,n,r,i);return"mfaPendingCredential"in s&&Mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function iI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Nm(t.config,i):`${t.config.apiScheme}://${i}`}class hP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),uP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=En(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function dP(t,e){return to(t,"POST","/v1/accounts:delete",e)}async function sI(t,e){return to(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ra(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fP(t,e=!1){const n=be(t),r=await n.getIdToken(e),i=Dm(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ra(Dd(i.auth_time)),issuedAtTime:ra(Dd(i.iat)),expirationTime:ra(Dd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Dd(t){return Number(t)*1e3}function Dm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Su("JWT malformed, contained fewer than 3 sections"),null;try{const i=sc(n);return i?JSON.parse(i):(Su("Failed to decode base64 JWT payload"),null)}catch(i){return Su("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Nv(t){const e=Dm(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Oa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fr&&pP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ra(this.lastLoginAt),this.creationTime=ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Oa(t,sI(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?oI(s.providerUserInfo):[],a=_P(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Xf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function gP(t){const e=be(t);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _P(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function oI(t){return t.map(e=>{var{providerId:n}=e,r=km(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function yP(t,e){const n=await rI(t,{},async()=>{const r=eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=iI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vP(t,e){return to(t,"POST","/v2/accounts:revokeToken",bm(t,e))}/**
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
 */class Ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=Nv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ts;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ts,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
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
 */function vr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=km(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Oa(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fP(this,e)}reload(){return gP(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kn(this.auth.app))return Promise.reject(Ti(this.auth));const e=await this.getIdToken();return await Oa(this,dP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:D,isAnonymous:O,providerData:V,stsTokenManager:I}=n;te(C&&I,e,"internal-error");const _=Ts.fromJSON(this.name,I);te(typeof C=="string",e,"internal-error"),vr(p,e.name),vr(g,e.name),te(typeof D=="boolean",e,"internal-error"),te(typeof O=="boolean",e,"internal-error"),vr(v,e.name),vr(T,e.name),vr(k,e.name),vr(N,e.name),vr(S,e.name),vr(w,e.name);const E=new Yn({uid:C,auth:e,email:g,emailVerified:D,displayName:p,isAnonymous:O,photoURL:T,phoneNumber:v,tenantId:k,stsTokenManager:_,createdAt:S,lastLoginAt:w});return V&&Array.isArray(V)&&(E.providerData=V.map(x=>Object.assign({},x))),N&&(E._redirectEventId=N),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ts;i.updateFromServerResponse(n);const s=new Yn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?oI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ts;a.updateFromIdToken(r);const u=new Yn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Xf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const bv=new Map;function Xn(t){or(t instanceof Function,"Expected a class definition");let e=bv.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bv.set(t,e),e)}/**
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
 */class aI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}aI.type="NONE";const Dv=aI;/**
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
 */function Cu(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Cu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Cu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Is(Xn(Dv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Xn(Dv);const o=Cu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Yn._fromJSON(e,d);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Is(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Is(s,e,r))}}/**
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
 */function Ov(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fI(e))return"Blackberry";if(pI(e))return"Webos";if(uI(e))return"Safari";if((e.includes("chrome/")||cI(e))&&!e.includes("edge/"))return"Chrome";if(dI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lI(t=At()){return/firefox\//i.test(t)}function uI(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cI(t=At()){return/crios\//i.test(t)}function hI(t=At()){return/iemobile/i.test(t)}function dI(t=At()){return/android/i.test(t)}function fI(t=At()){return/blackberry/i.test(t)}function pI(t=At()){return/webos/i.test(t)}function Om(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wP(t=At()){var e;return Om(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EP(){return DR()&&document.documentMode===10}function mI(t=At()){return Om(t)||dI(t)||pI(t)||fI(t)||/windows phone/i.test(t)||hI(t)}/**
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
 */function gI(t,e=[]){let n;switch(t){case"Browser":n=Ov(At());break;case"Worker":n=`${Ov(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bi}/${r}`}/**
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
 */class TP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function IP(t,e={}){return to(t,"GET","/v2/passwordPolicy",bm(t,e))}/**
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
 */const SP=6;class CP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:SP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class xP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lv(this),this.idTokenSubscription=new Lv(this),this.beforeStateQueue=new TP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sI(this,{idToken:e}),r=await Yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Kn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kn(this.app))return Promise.reject(Ti(this));const n=e?be(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kn(this.app)?Promise.reject(Ti(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kn(this.app)?Promise.reject(Ti(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IP(this),n=new CP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function nh(t){return be(t)}class Lv{constructor(e){this.auth=e,this.observer=null,this.addObserver=WR(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AP(t){Lm=t}function kP(t){return Lm.loadJS(t)}function RP(){return Lm.gapiScript}function PP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function NP(t,e){const n=th(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Na(s,e??{}))return i;Mn(i,"already-initialized")}return n.initialize({options:e})}function bP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DP(t,e,n){const r=nh(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=_I(e),{host:o,port:a}=OP(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),LP()}function _I(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OP(t){const e=_I(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Mv(o)}}}function Mv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yI{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}/**
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
 */async function Ss(t,e){return cP(t,"POST","/v1/accounts:signInWithIdp",bm(t,e))}/**
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
 */const MP="http://localhost";class Pi extends yI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=km(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Pi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ss(e,n)}buildRequest(){const e={requestUri:MP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=eo(n)}return e}}/**
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
 */class Mm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class il extends Mm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sr extends il{constructor(){super("facebook.com")}static credential(e){return Pi._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
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
 */class qn extends il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pi._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
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
 */class Cr extends il{constructor(){super("github.com")}static credential(e){return Pi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
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
 */class xr extends il{constructor(){super("twitter.com")}static credential(e,n){return Pi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
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
 */class js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yn._fromIdTokenResponse(e,r,i),o=Vv(r);return new js({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vv(r);return new js({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class uc extends fr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new uc(e,n,r,i)}}function vI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?uc._fromErrorAndOperation(t,s,e,r):s})}async function VP(t,e,n=!1){const r=await Oa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return js._forOperation(t,"link",r)}/**
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
 */async function jP(t,e,n=!1){const{auth:r}=t;if(Kn(r.app))return Promise.reject(Ti(r));const i="reauthenticate";try{const s=await Oa(t,vI(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=Dm(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),js._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mn(r,"user-mismatch"),s}}/**
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
 */async function FP(t,e,n=!1){if(Kn(t.app))return Promise.reject(Ti(t));const r="signIn",i=await vI(t,r,e),s=await js._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function UP(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function zP(t,e,n){return be(t).beforeAuthStateChanged(e,n)}function BP(t,e,n,r){return be(t).onAuthStateChanged(e,n,r)}function $P(t){return be(t).signOut()}const cc="__sak";/**
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
 */class wI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cc,"1"),this.storage.removeItem(cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const WP=1e3,qP=10;class EI extends wI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);EP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}EI.type="LOCAL";const GP=EI;/**
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
 */class TI extends wI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}TI.type="SESSION";const II=TI;/**
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
 */function HP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new rh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await HP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rh.receivers=[];/**
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
 */function Vm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class KP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Vm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function On(){return window}function QP(t){On().location.href=t}/**
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
 */function SI(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function YP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function JP(){return SI()?self:null}/**
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
 */const CI="firebaseLocalStorageDb",ZP=1,hc="firebaseLocalStorage",xI="fbase_key";class sl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ih(t,e){return t.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function eN(){const t=indexedDB.deleteDatabase(CI);return new sl(t).toPromise()}function Jf(){const t=indexedDB.open(CI,ZP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hc,{keyPath:xI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hc)?e(r):(r.close(),await eN(),e(await Jf()))})})}async function jv(t,e,n){const r=ih(t,!0).put({[xI]:e,value:n});return new sl(r).toPromise()}async function tN(t,e){const n=ih(t,!1).get(e),r=await new sl(n).toPromise();return r===void 0?null:r.value}function Fv(t,e){const n=ih(t,!0).delete(e);return new sl(n).toPromise()}const nN=800,rN=3;class AI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return SI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rh._getInstance(JP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await YP(),!this.activeServiceWorker)return;this.sender=new KP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jf();return await jv(e,cc,"1"),await Fv(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ih(i,!1).getAll();return new sl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}AI.type="LOCAL";const iN=AI;new rl(3e4,6e4);/**
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
 */function kI(t,e){return e?Xn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class jm extends yI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sN(t){return FP(t.auth,new jm(t),t.bypassAuthState)}function oN(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),jP(n,new jm(t),t.bypassAuthState)}async function aN(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),VP(n,new jm(t),t.bypassAuthState)}/**
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
 */class RI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sN;case"linkViaPopup":case"linkViaRedirect":return aN;case"reauthViaPopup":case"reauthViaRedirect":return oN;default:Mn(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lN=new rl(2e3,1e4);async function uN(t,e,n){if(Kn(t.app))return Promise.reject(En(t,"operation-not-supported-in-this-environment"));const r=nh(t);iP(t,e,Mm);const i=kI(r,n);return new gi(r,"signInViaPopup",e,i).executeNotNull()}class gi extends RI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,gi.currentPopupAction&&gi.currentPopupAction.cancel(),gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=Vm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lN.get())};e()}}gi.currentPopupAction=null;/**
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
 */const cN="pendingRedirect",xu=new Map;class hN extends RI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xu.get(this.auth._key());if(!e){try{const r=await dN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xu.set(this.auth._key(),e)}return this.bypassAuthState||xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dN(t,e){const n=mN(e),r=pN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fN(t,e){xu.set(t._key(),e)}function pN(t){return Xn(t._redirectPersistence)}function mN(t){return Cu(cN,t.config.apiKey,t.name)}async function gN(t,e,n=!1){if(Kn(t.app))return Promise.reject(Ti(t));const r=nh(t),i=kI(r,e),o=await new hN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const _N=10*60*1e3;class yN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!PI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_N&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uv(e))}saveEventToCache(e){this.cachedEventUids.add(Uv(e)),this.lastProcessedEventTime=Date.now()}}function Uv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function PI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return PI(t);default:return!1}}/**
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
 */async function wN(t,e={}){return to(t,"GET","/v1/projects",e)}/**
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
 */const EN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TN=/^https?/;async function IN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wN(t);for(const n of e)try{if(SN(n))return}catch{}Mn(t,"unauthorized-domain")}function SN(t){const e=Yf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TN.test(n))return!1;if(EN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const CN=new rl(3e4,6e4);function zv(){const t=On().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xN(t){return new Promise((e,n)=>{var r,i,s;function o(){zv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zv(),n(En(t,"network-request-failed"))},timeout:CN.get()})}if(!((i=(r=On().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=On().gapi)===null||s===void 0)&&s.load)o();else{const a=PP("iframefcb");return On()[a]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},kP(`${RP()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Au=null,e})}let Au=null;function AN(t){return Au=Au||xN(t),Au}/**
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
 */const kN=new rl(5e3,15e3),RN="__/auth/iframe",PN="emulator/auth/iframe",NN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DN(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nm(e,PN):`https://${t.config.authDomain}/${RN}`,r={apiKey:e.apiKey,appName:t.name,v:Bi},i=bN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${eo(r).slice(1)}`}async function ON(t){const e=await AN(t),n=On().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:DN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),a=On().setTimeout(()=>{s(o)},kN.get());function u(){On().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const LN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MN=500,VN=600,jN="_blank",FN="http://localhost";class Bv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UN(t,e,n,r=MN,i=VN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},LN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=At().toLowerCase();n&&(a=cI(c)?jN:n),lI(c)&&(e=e||FN,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[v,T])=>`${g}${v}=${T},`,"");if(wP(c)&&a!=="_self")return zN(e||"",a),new Bv(null);const p=window.open(e||"",a,d);te(p,t,"popup-blocked");try{p.focus()}catch{}return new Bv(p)}function zN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const BN="__/auth/handler",$N="emulator/auth/handler",WN=encodeURIComponent("fac");async function $v(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bi,eventId:i};if(e instanceof Mm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof il){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${WN}=${encodeURIComponent(u)}`:"";return`${qN(t)}?${eo(a).slice(1)}${c}`}function qN({config:t}){return t.emulator?Nm(t,$N):`https://${t.authDomain}/${BN}`}/**
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
 */const Od="webStorageSupport";class GN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=II,this._completeRedirectFn=gN,this._overrideRedirectResult=fN}async _openPopup(e,n,r,i){var s;or((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await $v(e,n,r,Yf(),i);return UN(e,o,Vm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await $v(e,n,r,Yf(),i);return QP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(or(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ON(e),r=new yN(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Od,{type:Od},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Od];o!==void 0&&n(!!o),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mI()||uI()||Om()}}const HN=GN;var Wv="@firebase/auth",qv="1.7.9";/**
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
 */class KN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function QN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YN(t){Ri(new Gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gI(t)},c=new xP(r,i,s,u);return bP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ri(new Gr("auth-internal",e=>{const n=nh(e.getProvider("auth").getImmediate());return(r=>new KN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(Wv,qv,QN(t)),Dn(Wv,qv,"esm2017")}/**
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
 */const XN=5*60,JN=qT("authIdTokenMaxAge")||XN;let Gv=null;const ZN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JN)return;const i=n==null?void 0:n.token;Gv!==i&&(Gv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eb(t=Am()){const e=th(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NP(t,{popupRedirectResolver:HN,persistence:[iN,GP,II]}),r=qT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=ZN(s.toString());zP(n,o,()=>o(n.currentUser)),UP(n,a=>o(a))}}const i=BT("auth");return i&&DP(n,`http://${i}`),n}function tb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}AP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=En("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YN("Browser");var Hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ii,NI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function E(){}E.prototype=_.prototype,I.D=_.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(x,R,P){for(var A=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)A[Ce-2]=arguments[Ce];return _.prototype[R].apply(x,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,E){E||(E=0);var x=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)x[R]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(R=0;16>R;++R)x[R]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=I.g[0],E=I.g[1],R=I.g[2];var P=I.g[3],A=_+(P^E&(R^P))+x[0]+3614090360&4294967295;_=E+(A<<7&4294967295|A>>>25),A=P+(R^_&(E^R))+x[1]+3905402710&4294967295,P=_+(A<<12&4294967295|A>>>20),A=R+(E^P&(_^E))+x[2]+606105819&4294967295,R=P+(A<<17&4294967295|A>>>15),A=E+(_^R&(P^_))+x[3]+3250441966&4294967295,E=R+(A<<22&4294967295|A>>>10),A=_+(P^E&(R^P))+x[4]+4118548399&4294967295,_=E+(A<<7&4294967295|A>>>25),A=P+(R^_&(E^R))+x[5]+1200080426&4294967295,P=_+(A<<12&4294967295|A>>>20),A=R+(E^P&(_^E))+x[6]+2821735955&4294967295,R=P+(A<<17&4294967295|A>>>15),A=E+(_^R&(P^_))+x[7]+4249261313&4294967295,E=R+(A<<22&4294967295|A>>>10),A=_+(P^E&(R^P))+x[8]+1770035416&4294967295,_=E+(A<<7&4294967295|A>>>25),A=P+(R^_&(E^R))+x[9]+2336552879&4294967295,P=_+(A<<12&4294967295|A>>>20),A=R+(E^P&(_^E))+x[10]+4294925233&4294967295,R=P+(A<<17&4294967295|A>>>15),A=E+(_^R&(P^_))+x[11]+2304563134&4294967295,E=R+(A<<22&4294967295|A>>>10),A=_+(P^E&(R^P))+x[12]+1804603682&4294967295,_=E+(A<<7&4294967295|A>>>25),A=P+(R^_&(E^R))+x[13]+4254626195&4294967295,P=_+(A<<12&4294967295|A>>>20),A=R+(E^P&(_^E))+x[14]+2792965006&4294967295,R=P+(A<<17&4294967295|A>>>15),A=E+(_^R&(P^_))+x[15]+1236535329&4294967295,E=R+(A<<22&4294967295|A>>>10),A=_+(R^P&(E^R))+x[1]+4129170786&4294967295,_=E+(A<<5&4294967295|A>>>27),A=P+(E^R&(_^E))+x[6]+3225465664&4294967295,P=_+(A<<9&4294967295|A>>>23),A=R+(_^E&(P^_))+x[11]+643717713&4294967295,R=P+(A<<14&4294967295|A>>>18),A=E+(P^_&(R^P))+x[0]+3921069994&4294967295,E=R+(A<<20&4294967295|A>>>12),A=_+(R^P&(E^R))+x[5]+3593408605&4294967295,_=E+(A<<5&4294967295|A>>>27),A=P+(E^R&(_^E))+x[10]+38016083&4294967295,P=_+(A<<9&4294967295|A>>>23),A=R+(_^E&(P^_))+x[15]+3634488961&4294967295,R=P+(A<<14&4294967295|A>>>18),A=E+(P^_&(R^P))+x[4]+3889429448&4294967295,E=R+(A<<20&4294967295|A>>>12),A=_+(R^P&(E^R))+x[9]+568446438&4294967295,_=E+(A<<5&4294967295|A>>>27),A=P+(E^R&(_^E))+x[14]+3275163606&4294967295,P=_+(A<<9&4294967295|A>>>23),A=R+(_^E&(P^_))+x[3]+4107603335&4294967295,R=P+(A<<14&4294967295|A>>>18),A=E+(P^_&(R^P))+x[8]+1163531501&4294967295,E=R+(A<<20&4294967295|A>>>12),A=_+(R^P&(E^R))+x[13]+2850285829&4294967295,_=E+(A<<5&4294967295|A>>>27),A=P+(E^R&(_^E))+x[2]+4243563512&4294967295,P=_+(A<<9&4294967295|A>>>23),A=R+(_^E&(P^_))+x[7]+1735328473&4294967295,R=P+(A<<14&4294967295|A>>>18),A=E+(P^_&(R^P))+x[12]+2368359562&4294967295,E=R+(A<<20&4294967295|A>>>12),A=_+(E^R^P)+x[5]+4294588738&4294967295,_=E+(A<<4&4294967295|A>>>28),A=P+(_^E^R)+x[8]+2272392833&4294967295,P=_+(A<<11&4294967295|A>>>21),A=R+(P^_^E)+x[11]+1839030562&4294967295,R=P+(A<<16&4294967295|A>>>16),A=E+(R^P^_)+x[14]+4259657740&4294967295,E=R+(A<<23&4294967295|A>>>9),A=_+(E^R^P)+x[1]+2763975236&4294967295,_=E+(A<<4&4294967295|A>>>28),A=P+(_^E^R)+x[4]+1272893353&4294967295,P=_+(A<<11&4294967295|A>>>21),A=R+(P^_^E)+x[7]+4139469664&4294967295,R=P+(A<<16&4294967295|A>>>16),A=E+(R^P^_)+x[10]+3200236656&4294967295,E=R+(A<<23&4294967295|A>>>9),A=_+(E^R^P)+x[13]+681279174&4294967295,_=E+(A<<4&4294967295|A>>>28),A=P+(_^E^R)+x[0]+3936430074&4294967295,P=_+(A<<11&4294967295|A>>>21),A=R+(P^_^E)+x[3]+3572445317&4294967295,R=P+(A<<16&4294967295|A>>>16),A=E+(R^P^_)+x[6]+76029189&4294967295,E=R+(A<<23&4294967295|A>>>9),A=_+(E^R^P)+x[9]+3654602809&4294967295,_=E+(A<<4&4294967295|A>>>28),A=P+(_^E^R)+x[12]+3873151461&4294967295,P=_+(A<<11&4294967295|A>>>21),A=R+(P^_^E)+x[15]+530742520&4294967295,R=P+(A<<16&4294967295|A>>>16),A=E+(R^P^_)+x[2]+3299628645&4294967295,E=R+(A<<23&4294967295|A>>>9),A=_+(R^(E|~P))+x[0]+4096336452&4294967295,_=E+(A<<6&4294967295|A>>>26),A=P+(E^(_|~R))+x[7]+1126891415&4294967295,P=_+(A<<10&4294967295|A>>>22),A=R+(_^(P|~E))+x[14]+2878612391&4294967295,R=P+(A<<15&4294967295|A>>>17),A=E+(P^(R|~_))+x[5]+4237533241&4294967295,E=R+(A<<21&4294967295|A>>>11),A=_+(R^(E|~P))+x[12]+1700485571&4294967295,_=E+(A<<6&4294967295|A>>>26),A=P+(E^(_|~R))+x[3]+2399980690&4294967295,P=_+(A<<10&4294967295|A>>>22),A=R+(_^(P|~E))+x[10]+4293915773&4294967295,R=P+(A<<15&4294967295|A>>>17),A=E+(P^(R|~_))+x[1]+2240044497&4294967295,E=R+(A<<21&4294967295|A>>>11),A=_+(R^(E|~P))+x[8]+1873313359&4294967295,_=E+(A<<6&4294967295|A>>>26),A=P+(E^(_|~R))+x[15]+4264355552&4294967295,P=_+(A<<10&4294967295|A>>>22),A=R+(_^(P|~E))+x[6]+2734768916&4294967295,R=P+(A<<15&4294967295|A>>>17),A=E+(P^(R|~_))+x[13]+1309151649&4294967295,E=R+(A<<21&4294967295|A>>>11),A=_+(R^(E|~P))+x[4]+4149444226&4294967295,_=E+(A<<6&4294967295|A>>>26),A=P+(E^(_|~R))+x[11]+3174756917&4294967295,P=_+(A<<10&4294967295|A>>>22),A=R+(_^(P|~E))+x[2]+718787259&4294967295,R=P+(A<<15&4294967295|A>>>17),A=E+(P^(R|~_))+x[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(R+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+P&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var E=_-this.blockSize,x=this.B,R=this.h,P=0;P<_;){if(R==0)for(;P<=E;)i(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<_;)if(x[R++]=I.charCodeAt(P++),R==this.blockSize){i(this,x),R=0;break}}else for(;P<_;)if(x[R++]=I[P++],R==this.blockSize){i(this,x),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var E=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=E&255,E/=256;for(this.u(I),I=Array(16),_=E=0;4>_;++_)for(var x=0;32>x;x+=8)I[E++]=this.g[_]>>>x&255;return I};function s(I,_){var E=a;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=_(I)}function o(I,_){this.h=_;for(var E=[],x=!0,R=I.length-1;0<=R;R--){var P=I[R]|0;x&&P==_||(E[R]=P,x=!1)}this.g=E}var a={};function u(I){return-128<=I&&128>I?s(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return N(c(-I));for(var _=[],E=1,x=0;I>=E;x++)_[x]=I/E|0,E*=4294967296;return new o(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return N(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(_,8)),x=p,R=0;R<I.length;R+=8){var P=Math.min(8,I.length-R),A=parseInt(I.substring(R,R+P),_);8>P?(P=c(Math.pow(_,P)),x=x.j(P).add(c(A))):(x=x.j(E),x=x.add(c(A)))}return x}var p=u(0),g=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();for(var I=0,_=1,E=0;E<this.g.length;E++){var x=this.i(E);I+=(0<=x?x:4294967296+x)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(T(this))return"0";if(k(this))return"-"+N(this).toString(I);for(var _=c(Math.pow(I,6)),E=this,x="";;){var R=D(E,_).g;E=S(E,R.j(_));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=R,T(E))return P+x;for(;6>P.length;)P="0"+P;x=P+x}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function T(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=S(this,I),k(I)?-1:T(I)?0:1};function N(I){for(var _=I.g.length,E=[],x=0;x<_;x++)E[x]=~I.g[x];return new o(E,~I.h).add(g)}t.abs=function(){return k(this)?N(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],x=0,R=0;R<=_;R++){var P=x+(this.i(R)&65535)+(I.i(R)&65535),A=(P>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);x=A>>>16,P&=65535,A&=65535,E[R]=A<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function S(I,_){return I.add(N(_))}t.j=function(I){if(T(this)||T(I))return p;if(k(this))return k(I)?N(this).j(N(I)):N(N(this).j(I));if(k(I))return N(this.j(N(I)));if(0>this.l(v)&&0>I.l(v))return c(this.m()*I.m());for(var _=this.g.length+I.g.length,E=[],x=0;x<2*_;x++)E[x]=0;for(x=0;x<this.g.length;x++)for(var R=0;R<I.g.length;R++){var P=this.i(x)>>>16,A=this.i(x)&65535,Ce=I.i(R)>>>16,ot=I.i(R)&65535;E[2*x+2*R]+=A*ot,w(E,2*x+2*R),E[2*x+2*R+1]+=P*ot,w(E,2*x+2*R+1),E[2*x+2*R+1]+=A*Ce,w(E,2*x+2*R+1),E[2*x+2*R+2]+=P*Ce,w(E,2*x+2*R+2)}for(x=0;x<_;x++)E[x]=E[2*x+1]<<16|E[2*x];for(x=_;x<2*_;x++)E[x]=0;return new o(E,0)};function w(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function C(I,_){this.g=I,this.h=_}function D(I,_){if(T(_))throw Error("division by zero");if(T(I))return new C(p,p);if(k(I))return _=D(N(I),_),new C(N(_.g),N(_.h));if(k(_))return _=D(I,N(_)),new C(N(_.g),_.h);if(30<I.g.length){if(k(I)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,x=_;0>=x.l(I);)E=O(E),x=O(x);var R=V(E,1),P=V(x,1);for(x=V(x,2),E=V(E,2);!T(x);){var A=P.add(x);0>=A.l(I)&&(R=R.add(E),P=A),x=V(x,1),E=V(E,1)}return _=S(I,R.j(_)),new C(R,_)}for(R=p;0<=I.l(_);){for(E=Math.max(1,Math.floor(I.m()/_.m())),x=Math.ceil(Math.log(E)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),P=c(E),A=P.j(_);k(A)||0<A.l(I);)E-=x,P=c(E),A=P.j(_);T(P)&&(P=g),R=R.add(P),I=S(I,A)}return new C(R,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],x=0;x<_;x++)E[x]=this.i(x)&I.i(x);return new o(E,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],x=0;x<_;x++)E[x]=this.i(x)|I.i(x);return new o(E,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],x=0;x<_;x++)E[x]=this.i(x)^I.i(x);return new o(E,this.h^I.h)};function O(I){for(var _=I.g.length+1,E=[],x=0;x<_;x++)E[x]=I.i(x)<<1|I.i(x-1)>>>31;return new o(E,I.h)}function V(I,_){var E=_>>5;_%=32;for(var x=I.g.length-E,R=[],P=0;P<x;P++)R[P]=0<_?I.i(P+E)>>>_|I.i(P+E+1)<<32-_:I.i(P+E);return new o(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,NI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Ii=o}).apply(typeof Hv<"u"?Hv:typeof self<"u"?self:typeof window<"u"?window:{});var ru=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bI,qo,DI,ku,Zf,OI,LI,MI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,m){return l==Array.prototype||l==Object.prototype||(l[h]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ru=="object"&&ru];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var m=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var b=l[y];if(!(b in m))break e;m=m[b]}l=l[l.length-1],y=m[l],h=h(y),h!=y&&h!=null&&e(m,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var m=0,y=!1,b={next:function(){if(!y&&m<l.length){var L=m++;return{value:h(L,l[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,m){return l.call.apply(l.bind,arguments)}function p(l,h,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,y),l.apply(h,b)}}return function(){return l.apply(h,arguments)}}function g(l,h,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function v(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function T(l,h){function m(){}m.prototype=h.prototype,l.aa=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,b,L){for(var q=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)q[Ee-2]=arguments[Ee];return h.prototype[b].apply(y,q)}}function k(l){const h=l.length;if(0<h){const m=Array(h);for(let y=0;y<h;y++)m[y]=l[y];return m}return[]}function N(l,h){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const b=l.length||0,L=y.length||0;l.length=b+L;for(let q=0;q<L;q++)l[b+q]=y[q]}else l.push(y)}}class S{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(l){return/^[\s\xa0]*$/.test(l)}function C(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var O=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function V(l,h,m){for(const y in l)h.call(m,l[y],y,l)}function I(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function _(l){const h={};for(const m in l)h[m]=l[m];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(l,h){let m,y;for(let b=1;b<arguments.length;b++){y=arguments[b];for(m in y)l[m]=y[m];for(let L=0;L<E.length;L++)m=E[L],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function R(l){var h=1;l=l.split(":");const m=[];for(;0<h&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function P(l){a.setTimeout(()=>{throw l},0)}function A(){var l=H;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Ce{constructor(){this.h=this.g=null}add(h,m){const y=ot.get();y.set(h,m),this.h?this.h.next=y:this.g=y,this.h=y}}var ot=new S(()=>new kt,l=>l.reset());class kt{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let re,U=!1,H=new Ce,B=()=>{const l=a.Promise.resolve(void 0);re=()=>{l.then(Y)}};var Y=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(m){P(m)}var h=ot;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}U=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var de=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return l}();function se(l,h){if(ie.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(O){e:{try{D(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Be[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&se.aa.h.call(this)}}T(se,ie);var Be={2:"touch",3:"pen",4:"mouse"};se.prototype.h=function(){se.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var mt="closure_listenable_"+(1e6*Math.random()|0),vx=0;function wx(l,h,m,y,b){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!y,this.ha=b,this.key=++vx,this.da=this.fa=!1}function El(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Tl(l){this.src=l,this.g={},this.h=0}Tl.prototype.add=function(l,h,m,y,b){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var q=Oh(l,h,y,b);return-1<q?(h=l[q],m||(h.fa=!1)):(h=new wx(h,this.src,L,!!y,b),h.fa=m,l.push(h)),h};function Dh(l,h){var m=h.type;if(m in l.g){var y=l.g[m],b=Array.prototype.indexOf.call(y,h,void 0),L;(L=0<=b)&&Array.prototype.splice.call(y,b,1),L&&(El(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Oh(l,h,m,y){for(var b=0;b<l.length;++b){var L=l[b];if(!L.da&&L.listener==h&&L.capture==!!m&&L.ha==y)return b}return-1}var Lh="closure_lm_"+(1e6*Math.random()|0),Mh={};function d_(l,h,m,y,b){if(Array.isArray(h)){for(var L=0;L<h.length;L++)d_(l,h[L],m,y,b);return null}return m=m_(m),l&&l[mt]?l.K(h,m,c(y)?!!y.capture:!1,b):Ex(l,h,m,!1,y,b)}function Ex(l,h,m,y,b,L){if(!h)throw Error("Invalid event type");var q=c(b)?!!b.capture:!!b,Ee=jh(l);if(Ee||(l[Lh]=Ee=new Tl(l)),m=Ee.add(h,m,y,q,L),m.proxy)return m;if(y=Tx(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)de||(b=q),b===void 0&&(b=!1),l.addEventListener(h.toString(),y,b);else if(l.attachEvent)l.attachEvent(p_(h.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Tx(){function l(m){return h.call(l.src,l.listener,m)}const h=Ix;return l}function f_(l,h,m,y,b){if(Array.isArray(h))for(var L=0;L<h.length;L++)f_(l,h[L],m,y,b);else y=c(y)?!!y.capture:!!y,m=m_(m),l&&l[mt]?(l=l.i,h=String(h).toString(),h in l.g&&(L=l.g[h],m=Oh(L,m,y,b),-1<m&&(El(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete l.g[h],l.h--)))):l&&(l=jh(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Oh(h,m,y,b)),(m=-1<l?h[l]:null)&&Vh(m))}function Vh(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[mt])Dh(h.i,l);else{var m=l.type,y=l.proxy;h.removeEventListener?h.removeEventListener(m,y,l.capture):h.detachEvent?h.detachEvent(p_(m),y):h.addListener&&h.removeListener&&h.removeListener(y),(m=jh(h))?(Dh(m,l),m.h==0&&(m.src=null,h[Lh]=null)):El(l)}}}function p_(l){return l in Mh?Mh[l]:Mh[l]="on"+l}function Ix(l,h){if(l.da)l=!0;else{h=new se(h,this);var m=l.listener,y=l.ha||l.src;l.fa&&Vh(l),l=m.call(y,h)}return l}function jh(l){return l=l[Lh],l instanceof Tl?l:null}var Fh="__closure_events_fn_"+(1e9*Math.random()>>>0);function m_(l){return typeof l=="function"?l:(l[Fh]||(l[Fh]=function(h){return l.handleEvent(h)}),l[Fh])}function gt(){ne.call(this),this.i=new Tl(this),this.M=this,this.F=null}T(gt,ne),gt.prototype[mt]=!0,gt.prototype.removeEventListener=function(l,h,m,y){f_(this,l,h,m,y)};function Rt(l,h){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=h.type||h,typeof h=="string")h=new ie(h,l);else if(h instanceof ie)h.target=h.target||l;else{var b=h;h=new ie(y,l),x(h,b)}if(b=!0,m)for(var L=m.length-1;0<=L;L--){var q=h.g=m[L];b=Il(q,y,!0,h)&&b}if(q=h.g=l,b=Il(q,y,!0,h)&&b,b=Il(q,y,!1,h)&&b,m)for(L=0;L<m.length;L++)q=h.g=m[L],b=Il(q,y,!1,h)&&b}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var m=l.g[h],y=0;y<m.length;y++)El(m[y]);delete l.g[h],l.h--}}this.F=null},gt.prototype.K=function(l,h,m,y){return this.i.add(String(l),h,!1,m,y)},gt.prototype.L=function(l,h,m,y){return this.i.add(String(l),h,!0,m,y)};function Il(l,h,m,y){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,L=0;L<h.length;++L){var q=h[L];if(q&&!q.da&&q.capture==m){var Ee=q.listener,at=q.ha||q.src;q.fa&&Dh(l.i,q),b=Ee.call(at,y)!==!1&&b}}return b&&!y.defaultPrevented}function g_(l,h,m){if(typeof l=="function")m&&(l=g(l,m));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function __(l){l.g=g_(()=>{l.g=null,l.i&&(l.i=!1,__(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Sx extends ne{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:__(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function po(l){ne.call(this),this.h=l,this.g={}}T(po,ne);var y_=[];function v_(l){V(l.g,function(h,m){this.g.hasOwnProperty(m)&&Vh(h)},l),l.g={}}po.prototype.N=function(){po.aa.N.call(this),v_(this)},po.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Uh=a.JSON.stringify,Cx=a.JSON.parse,xx=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function zh(){}zh.prototype.h=null;function w_(l){return l.h||(l.h=l.i())}function E_(){}var mo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bh(){ie.call(this,"d")}T(Bh,ie);function $h(){ie.call(this,"c")}T($h,ie);var ii={},T_=null;function Sl(){return T_=T_||new gt}ii.La="serverreachability";function I_(l){ie.call(this,ii.La,l)}T(I_,ie);function go(l){const h=Sl();Rt(h,new I_(h))}ii.STAT_EVENT="statevent";function S_(l,h){ie.call(this,ii.STAT_EVENT,l),this.stat=h}T(S_,ie);function Pt(l){const h=Sl();Rt(h,new S_(h,l))}ii.Ma="timingevent";function C_(l,h){ie.call(this,ii.Ma,l),this.size=h}T(C_,ie);function _o(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function yo(){this.g=!0}yo.prototype.xa=function(){this.g=!1};function Ax(l,h,m,y,b,L){l.info(function(){if(l.g)if(L)for(var q="",Ee=L.split("&"),at=0;at<Ee.length;at++){var ge=Ee[at].split("=");if(1<ge.length){var _t=ge[0];ge=ge[1];var yt=_t.split("_");q=2<=yt.length&&yt[1]=="type"?q+(_t+"="+ge+"&"):q+(_t+"=redacted&")}}else q=null;else q=L;return"XMLHTTP REQ ("+y+") [attempt "+b+"]: "+h+`
`+m+`
`+q})}function kx(l,h,m,y,b,L,q){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+b+"]: "+h+`
`+m+`
`+L+" "+q})}function Hi(l,h,m,y){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+Px(l,m)+(y?" "+y:"")})}function Rx(l,h){l.info(function(){return"TIMEOUT: "+h})}yo.prototype.info=function(){};function Px(l,h){if(!l.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var b=y[1];if(Array.isArray(b)&&!(1>b.length)){var L=b[0];if(L!="noop"&&L!="stop"&&L!="close")for(var q=1;q<b.length;q++)b[q]=""}}}}return Uh(m)}catch{return h}}var Cl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},x_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wh;function xl(){}T(xl,zh),xl.prototype.g=function(){return new XMLHttpRequest},xl.prototype.i=function(){return{}},Wh=new xl;function mr(l,h,m,y){this.j=l,this.i=h,this.l=m,this.R=y||1,this.U=new po(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new A_}function A_(){this.i=null,this.g="",this.h=!1}var k_={},qh={};function Gh(l,h,m){l.L=1,l.v=Pl(Fn(h)),l.m=m,l.P=!0,R_(l,null)}function R_(l,h){l.F=Date.now(),Al(l),l.A=Fn(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),$_(m.i,"t",y),l.C=0,m=l.j.J,l.h=new A_,l.g=ay(l.j,m?h:null,!l.m),0<l.O&&(l.M=new Sx(g(l.Y,l,l.g),l.O)),h=l.U,m=l.g,y=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(y_[0]=b.toString()),b=y_);for(var L=0;L<b.length;L++){var q=d_(m,b[L],y||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),go(),Ax(l.i,l.u,l.A,l.l,l.R,l.m)}mr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Un(l)==3?h.j():this.Y(l)},mr.prototype.Y=function(l){try{if(l==this.g)e:{const yt=Un(this.g);var h=this.g.Ba();const Yi=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Y_(this.g)))){this.J||yt!=4||h==7||(h==8||0>=Yi?go(3):go(2)),Hh(this);var m=this.g.Z();this.X=m;t:if(P_(this)){var y=Y_(this.g);l="";var b=y.length,L=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){si(this),vo(this);var q="";break t}this.h.i=new a.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,l+=this.h.i.decode(y[h],{stream:!(L&&h==b-1)});y.length=0,this.h.g+=l,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=m==200,kx(this.i,this.u,this.A,this.l,this.R,yt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,at=this.g;if((Ee=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Ee)){var ge=Ee;break t}}ge=null}if(m=ge)Hi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kh(this,m);else{this.o=!1,this.s=3,Pt(12),si(this),vo(this);break e}}if(this.P){m=!0;let hn;for(;!this.J&&this.C<q.length;)if(hn=Nx(this,q),hn==qh){yt==4&&(this.s=4,Pt(14),m=!1),Hi(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==k_){this.s=4,Pt(15),Hi(this.i,this.l,q,"[Invalid Chunk]"),m=!1;break}else Hi(this.i,this.l,hn,null),Kh(this,hn);if(P_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||q.length!=0||this.h.h||(this.s=1,Pt(16),m=!1),this.o=this.o&&m,!m)Hi(this.i,this.l,q,"[Invalid Chunked Response]"),si(this),vo(this);else if(0<q.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),ed(_t),_t.M=!0,Pt(11))}}else Hi(this.i,this.l,q,null),Kh(this,q);yt==4&&si(this),this.o&&!this.J&&(yt==4?ry(this.j,this):(this.o=!1,Al(this)))}else Kx(this.g),m==400&&0<q.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),si(this),vo(this)}}}catch{}finally{}};function P_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Nx(l,h){var m=l.C,y=h.indexOf(`
`,m);return y==-1?qh:(m=Number(h.substring(m,y)),isNaN(m)?k_:(y+=1,y+m>h.length?qh:(h=h.slice(y,y+m),l.C=y+m,h)))}mr.prototype.cancel=function(){this.J=!0,si(this)};function Al(l){l.S=Date.now()+l.I,N_(l,l.I)}function N_(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_o(g(l.ba,l),h)}function Hh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}mr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Rx(this.i,this.A),this.L!=2&&(go(),Pt(17)),si(this),this.s=2,vo(this)):N_(this,this.S-l)};function vo(l){l.j.G==0||l.J||ry(l.j,l)}function si(l){Hh(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,v_(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Kh(l,h){try{var m=l.j;if(m.G!=0&&(m.g==l||Qh(m.h,l))){if(!l.K&&Qh(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var b=y;if(b[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Ml(m),Ol(m);else break e;Zh(m),Pt(18)}}else m.za=b[1],0<m.za-m.T&&37500>b[2]&&m.F&&m.v==0&&!m.C&&(m.C=_o(g(m.Za,m),6e3));if(1>=O_(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ai(m,11)}else if((l.K||m.g==l)&&Ml(m),!w(h))for(b=m.Da.g.parse(h),h=0;h<b.length;h++){let ge=b[h];if(m.T=ge[0],ge=ge[1],m.G==2)if(ge[0]=="c"){m.K=ge[1],m.ia=ge[2];const _t=ge[3];_t!=null&&(m.la=_t,m.j.info("VER="+m.la));const yt=ge[4];yt!=null&&(m.Aa=yt,m.j.info("SVER="+m.Aa));const Yi=ge[5];Yi!=null&&typeof Yi=="number"&&0<Yi&&(y=1.5*Yi,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const hn=l.g;if(hn){const jl=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jl){var L=y.h;L.g||jl.indexOf("spdy")==-1&&jl.indexOf("quic")==-1&&jl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Yh(L,L.h),L.h=null))}if(y.D){const td=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;td&&(y.ya=td,xe(y.I,y.D,td))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var q=l;if(y.qa=oy(y,y.J?y.ia:null,y.W),q.K){L_(y.h,q);var Ee=q,at=y.L;at&&(Ee.I=at),Ee.B&&(Hh(Ee),Al(Ee)),y.g=q}else ty(y);0<m.i.length&&Ll(m)}else ge[0]!="stop"&&ge[0]!="close"||ai(m,7);else m.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?ai(m,7):Jh(m):ge[0]!="noop"&&m.l&&m.l.ta(ge),m.v=0)}}go(4)}catch{}}var bx=class{constructor(l,h){this.g=l,this.map=h}};function b_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function D_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function O_(l){return l.h?1:l.g?l.g.size:0}function Qh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Yh(l,h){l.g?l.g.add(h):l.h=h}function L_(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}b_.prototype.cancel=function(){if(this.i=M_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function M_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.D);return h}return k(l.i)}function Dx(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],m=l.length,y=0;y<m;y++)h.push(l[y]);return h}h=[],m=0;for(y in l)h[m++]=l[y];return h}function Ox(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var m=0;m<l;m++)h.push(m);return h}h=[],m=0;for(const y in l)h[m++]=y;return h}}}function V_(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var m=Ox(l),y=Dx(l),b=y.length,L=0;L<b;L++)h.call(void 0,y[L],m&&m[L],l)}var j_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lx(l,h){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),b=null;if(0<=y){var L=l[m].substring(0,y);b=l[m].substring(y+1)}else L=l[m];h(L,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function oi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof oi){this.h=l.h,kl(this,l.j),this.o=l.o,this.g=l.g,Rl(this,l.s),this.l=l.l;var h=l.i,m=new To;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),F_(this,m),this.m=l.m}else l&&(h=String(l).match(j_))?(this.h=!1,kl(this,h[1]||"",!0),this.o=wo(h[2]||""),this.g=wo(h[3]||"",!0),Rl(this,h[4]),this.l=wo(h[5]||"",!0),F_(this,h[6]||"",!0),this.m=wo(h[7]||"")):(this.h=!1,this.i=new To(null,this.h))}oi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Eo(h,U_,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Eo(h,U_,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Eo(m,m.charAt(0)=="/"?jx:Vx,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Eo(m,Ux)),l.join("")};function Fn(l){return new oi(l)}function kl(l,h,m){l.j=m?wo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Rl(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function F_(l,h,m){h instanceof To?(l.i=h,zx(l.i,l.h)):(m||(h=Eo(h,Fx)),l.i=new To(h,l.h))}function xe(l,h,m){l.i.set(h,m)}function Pl(l){return xe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function wo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Eo(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,Mx),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Mx(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var U_=/[#\/\?@]/g,Vx=/[#\?:]/g,jx=/[#\?]/g,Fx=/[#\?@]/g,Ux=/#/g;function To(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function gr(l){l.g||(l.g=new Map,l.h=0,l.i&&Lx(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=To.prototype,t.add=function(l,h){gr(this),this.i=null,l=Ki(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function z_(l,h){gr(l),h=Ki(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function B_(l,h){return gr(l),h=Ki(l,h),l.g.has(h)}t.forEach=function(l,h){gr(this),this.g.forEach(function(m,y){m.forEach(function(b){l.call(h,b,y,this)},this)},this)},t.na=function(){gr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let y=0;y<h.length;y++){const b=l[y];for(let L=0;L<b.length;L++)m.push(h[y])}return m},t.V=function(l){gr(this);let h=[];if(typeof l=="string")B_(this,l)&&(h=h.concat(this.g.get(Ki(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)h=h.concat(l[m])}return h},t.set=function(l,h){return gr(this),this.i=null,l=Ki(this,l),B_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function $_(l,h,m){z_(l,h),0<m.length&&(l.i=null,l.g.set(Ki(l,h),k(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var y=h[m];const L=encodeURIComponent(String(y)),q=this.V(y);for(y=0;y<q.length;y++){var b=L;q[y]!==""&&(b+="="+encodeURIComponent(String(q[y]))),l.push(b)}}return this.i=l.join("&")};function Ki(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function zx(l,h){h&&!l.j&&(gr(l),l.i=null,l.g.forEach(function(m,y){var b=y.toLowerCase();y!=b&&(z_(this,y),$_(this,b,m))},l)),l.j=h}function Bx(l,h){const m=new yo;if(a.Image){const y=new Image;y.onload=v(_r,m,"TestLoadImage: loaded",!0,h,y),y.onerror=v(_r,m,"TestLoadImage: error",!1,h,y),y.onabort=v(_r,m,"TestLoadImage: abort",!1,h,y),y.ontimeout=v(_r,m,"TestLoadImage: timeout",!1,h,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else h(!1)}function $x(l,h){const m=new yo,y=new AbortController,b=setTimeout(()=>{y.abort(),_r(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:y.signal}).then(L=>{clearTimeout(b),L.ok?_r(m,"TestPingServer: ok",!0,h):_r(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),_r(m,"TestPingServer: error",!1,h)})}function _r(l,h,m,y,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),y(m)}catch{}}function Wx(){this.g=new xx}function qx(l,h,m){const y=m||"";try{V_(l,function(b,L){let q=b;c(b)&&(q=Uh(b)),h.push(y+L+"="+encodeURIComponent(q))})}catch(b){throw h.push(y+"type="+encodeURIComponent("_badmap")),b}}function Nl(l){this.l=l.Ub||null,this.j=l.eb||!1}T(Nl,zh),Nl.prototype.g=function(){return new bl(this.l,this.j)},Nl.prototype.i=function(l){return function(){return l}}({});function bl(l,h){gt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(bl,gt),t=bl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,So(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Io(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,So(this)),this.g&&(this.readyState=3,So(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;W_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function W_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Io(this):So(this),this.readyState==3&&W_(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Io(this))},t.Qa=function(l){this.g&&(this.response=l,Io(this))},t.ga=function(){this.g&&Io(this)};function Io(l){l.readyState=4,l.l=null,l.j=null,l.v=null,So(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function So(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(bl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function q_(l){let h="";return V(l,function(m,y){h+=y,h+=":",h+=m,h+=`\r
`}),h}function Xh(l,h,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=q_(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):xe(l,h,m))}function Ve(l){gt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Ve,gt);var Gx=/^https?$/i,Hx=["POST","PUT"];t=Ve.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wh.g(),this.v=this.o?w_(this.o):w_(Wh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(L){G_(this,L);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var b in y)m.set(b,y[b]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())m.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Hx,h,void 0))||y||b||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,q]of m)this.g.setRequestHeader(L,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Q_(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){G_(this,L)}};function G_(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,H_(l),Dl(l)}function H_(l){l.A||(l.A=!0,Rt(l,"complete"),Rt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Rt(this,"complete"),Rt(this,"abort"),Dl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Dl(this,!0)),Ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?K_(this):this.bb())},t.bb=function(){K_(this)};function K_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Un(l)!=4||l.Z()!=2)){if(l.u&&Un(l)==4)g_(l.Ea,0,l);else if(Rt(l,"readystatechange"),Un(l)==4){l.h=!1;try{const q=l.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var y;if(y=q===0){var b=String(l.D).match(j_)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),y=!Gx.test(b?b.toLowerCase():"")}m=y}if(m)Rt(l,"complete"),Rt(l,"success");else{l.m=6;try{var L=2<Un(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",H_(l)}}finally{Dl(l)}}}}function Dl(l,h){if(l.g){Q_(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Rt(l,"ready");try{m.onreadystatechange=y}catch{}}}function Q_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Un(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),Cx(h)}};function Y_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Kx(l){const h={};l=(l.g&&2<=Un(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(w(l[y]))continue;var m=R(l[y]);const b=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=h[b]||[];h[b]=L,L.push(m)}I(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Co(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function X_(l){this.Aa=0,this.i=[],this.j=new yo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Co("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Co("baseRetryDelayMs",5e3,l),this.cb=Co("retryDelaySeedMs",1e4,l),this.Wa=Co("forwardChannelMaxRetries",2,l),this.wa=Co("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new b_(l&&l.concurrentRequestLimit),this.Da=new Wx,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=X_.prototype,t.la=8,t.G=1,t.connect=function(l,h,m,y){Pt(0),this.W=l,this.H=h||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=oy(this,null,this.W),Ll(this)};function Jh(l){if(J_(l),l.G==3){var h=l.U++,m=Fn(l.I);if(xe(m,"SID",l.K),xe(m,"RID",h),xe(m,"TYPE","terminate"),xo(l,m),h=new mr(l,l.j,h),h.L=2,h.v=Pl(Fn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=ay(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Al(h)}sy(l)}function Ol(l){l.g&&(ed(l),l.g.cancel(),l.g=null)}function J_(l){Ol(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ml(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ll(l){if(!D_(l.h)&&!l.s){l.s=!0;var h=l.Ga;re||B(),U||(re(),U=!0),H.add(h,l),l.B=0}}function Qx(l,h){return O_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_o(g(l.Ga,l,h),iy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new mr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=_(L),x(L,this.S)):L=this.S),this.m!==null||this.O||(b.H=L,L=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=ey(this,b,h),m=Fn(this.I),xe(m,"RID",l),xe(m,"CVER",22),this.D&&xe(m,"X-HTTP-Session-Id",this.D),xo(this,m),L&&(this.O?h="headers="+encodeURIComponent(String(q_(L)))+"&"+h:this.m&&Xh(m,this.m,L)),Yh(this.h,b),this.Ua&&xe(m,"TYPE","init"),this.P?(xe(m,"$req",h),xe(m,"SID","null"),b.T=!0,Gh(b,m,null)):Gh(b,m,h),this.G=2}}else this.G==3&&(l?Z_(this,l):this.i.length==0||D_(this.h)||Z_(this))};function Z_(l,h){var m;h?m=h.l:m=l.U++;const y=Fn(l.I);xe(y,"SID",l.K),xe(y,"RID",m),xe(y,"AID",l.T),xo(l,y),l.m&&l.o&&Xh(y,l.m,l.o),m=new mr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),h&&(l.i=h.D.concat(l.i)),h=ey(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Yh(l.h,m),Gh(m,y,h)}function xo(l,h){l.H&&V(l.H,function(m,y){xe(h,y,m)}),l.l&&V_({},function(m,y){xe(h,y,m)})}function ey(l,h,m){m=Math.min(l.i.length,m);var y=l.l?g(l.l.Na,l.l,l):null;e:{var b=l.i;let L=-1;for(;;){const q=["count="+m];L==-1?0<m?(L=b[0].g,q.push("ofs="+L)):L=0:q.push("ofs="+L);let Ee=!0;for(let at=0;at<m;at++){let ge=b[at].g;const _t=b[at].map;if(ge-=L,0>ge)L=Math.max(0,b[at].g-100),Ee=!1;else try{qx(_t,q,"req"+ge+"_")}catch{y&&y(_t)}}if(Ee){y=q.join("&");break e}}}return l=l.i.splice(0,m),h.D=l,y}function ty(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;re||B(),U||(re(),U=!0),H.add(h,l),l.v=0}}function Zh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_o(g(l.Fa,l),iy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,ny(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_o(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Ol(this),ny(this))};function ed(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function ny(l){l.g=new mr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Fn(l.qa);xe(h,"RID","rpc"),xe(h,"SID",l.K),xe(h,"AID",l.T),xe(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&xe(h,"TO",l.ja),xe(h,"TYPE","xmlhttp"),xo(l,h),l.m&&l.o&&Xh(h,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Pl(Fn(h)),m.m=null,m.P=!0,R_(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Ol(this),Zh(this),Pt(19))};function Ml(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ry(l,h){var m=null;if(l.g==h){Ml(l),ed(l),l.g=null;var y=2}else if(Qh(l.h,h))m=h.D,L_(l.h,h),y=1;else return;if(l.G!=0){if(h.o)if(y==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var b=l.B;y=Sl(),Rt(y,new C_(y,m)),Ll(l)}else ty(l);else if(b=h.s,b==3||b==0&&0<h.X||!(y==1&&Qx(l,h)||y==2&&Zh(l)))switch(m&&0<m.length&&(h=l.h,h.i=h.i.concat(m)),b){case 1:ai(l,5);break;case 4:ai(l,10);break;case 3:ai(l,6);break;default:ai(l,2)}}}function iy(l,h){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*h}function ai(l,h){if(l.j.info("Error code "+h),h==2){var m=g(l.fb,l),y=l.Xa;const b=!y;y=new oi(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||kl(y,"https"),Pl(y),b?Bx(y.toString(),m):$x(y.toString(),m)}else Pt(2);l.G=0,l.l&&l.l.sa(h),sy(l),J_(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function sy(l){if(l.G=0,l.ka=[],l.l){const h=M_(l.h);(h.length!=0||l.i.length!=0)&&(N(l.ka,h),N(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function oy(l,h,m){var y=m instanceof oi?Fn(m):new oi(m);if(y.g!="")h&&(y.g=h+"."+y.g),Rl(y,y.s);else{var b=a.location;y=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var L=new oi(null);y&&kl(L,y),h&&(L.g=h),b&&Rl(L,b),m&&(L.l=m),y=L}return m=l.D,h=l.ya,m&&h&&xe(y,m,h),xe(y,"VER",l.la),xo(l,y),y}function ay(l,h,m){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ve(new Nl({eb:m})):new Ve(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ly(){}t=ly.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Vl(){}Vl.prototype.g=function(l,h){return new Qt(l,h)};function Qt(l,h){gt.call(this),this.g=new X_(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!w(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Qi(this)}T(Qt,gt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Jh(this.g)},Qt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Uh(l),l=m);h.i.push(new bx(h.Ya++,l)),h.G==3&&Ll(h)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Jh(this.g),delete this.g,Qt.aa.N.call(this)};function uy(l){Bh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}T(uy,Bh);function cy(){$h.call(this),this.status=1}T(cy,$h);function Qi(l){this.g=l}T(Qi,ly),Qi.prototype.ua=function(){Rt(this.g,"a")},Qi.prototype.ta=function(l){Rt(this.g,new uy(l))},Qi.prototype.sa=function(l){Rt(this.g,new cy)},Qi.prototype.ra=function(){Rt(this.g,"b")},Vl.prototype.createWebChannel=Vl.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,MI=function(){return new Vl},LI=function(){return Sl()},OI=ii,Zf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Cl.NO_ERROR=0,Cl.TIMEOUT=8,Cl.HTTP_ERROR=6,ku=Cl,x_.COMPLETE="complete",DI=x_,E_.EventType=mo,mo.OPEN="a",mo.CLOSE="b",mo.ERROR="c",mo.MESSAGE="d",gt.prototype.listen=gt.prototype.K,qo=E_,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,bI=Ve}).apply(typeof ru<"u"?ru:typeof self<"u"?self:typeof window<"u"?window:{});const Kv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new eh("@firebase/firestore");function Lo(){return Ni.logLevel}function K(t,...e){if(Ni.logLevel<=ce.DEBUG){const n=e.map(Fm);Ni.debug(`Firestore (${no}): ${t}`,...n)}}function ar(t,...e){if(Ni.logLevel<=ce.ERROR){const n=e.map(Fm);Ni.error(`Firestore (${no}): ${t}`,...n)}}function Fs(t,...e){if(Ni.logLevel<=ce.WARN){const n=e.map(Fm);Ni.warn(`Firestore (${no}): ${t}`,...n)}}function Fm(t){if(typeof t=="string")return t;try{/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${no}) INTERNAL ASSERTION FAILED: `+t;throw ar(e),new Error(e)}function pe(t,e){t||X()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends fr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class rb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ib{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string"),new VI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new Tt(e)}}class sb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ob{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new sb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ab{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){pe(this.o===void 0);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.R=n.token,new ab(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ub(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ub(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function Us(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Xe(0,0))}static max(){return new J(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return La.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof La?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends La{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const cb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends La{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return cb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(ve.fromString(e))}static fromName(e){return new Q(ve.fromString(e).popFirst(5))}static empty(){return new Q(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new ve(e.slice()))}}function hb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new Hr(i,Q.empty(),e)}function db(t){return new Hr(t.readTime,t.key,-1)}class Hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hr(J.min(),Q.empty(),-1)}static max(){return new Hr(J.max(),Q.empty(),-1)}}function fb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const pb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==pb)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function gb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function al(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Um{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Um.oe=-1;function ll(t){return t==null}function dc(t){return t===0&&1/t==-1/0}function _b(t){return typeof t=="number"&&Number.isInteger(t)&&!dc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $i(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yb(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function FI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let He=class ep{constructor(e,n){this.comparator=e,this.root=n||zr.EMPTY}insert(e,n){return new ep(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,zr.BLACK,null,null))}remove(e){return new ep(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new iu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new iu(this.root,e,this.comparator,!1)}getReverseIterator(){return new iu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new iu(this.root,e,this.comparator,!0)}},iu=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},zr=class zn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??zn.RED,this.left=i??zn.EMPTY,this.right=s??zn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new zn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return zn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return zn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}};zr.EMPTY=null,zr.RED=!0,zr.BLACK=!1;zr.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new zr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yv(this.data.getIterator())}getIteratorFrom(e){return new Yv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class Yv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new dt(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class UI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new UI("Invalid base64 string: "+s):s}}(e);return new pt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const vb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(pe(!!t),typeof t=="string"){let e=0;const n=vb.exec(t);if(pe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bi(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */function sh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zm(t){const e=t.mapValue.fields.__previous_value__;return sh(e)?zm(e):e}function Ma(t){const e=Kr(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Va{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Va("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Va&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const su={mapValue:{}};function Di(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sh(t)?4:Tb(t)?9007199254740991:Eb(t)?10:11:X()}function Vn(t,e){if(t===e)return!0;const n=Di(t);if(n!==Di(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ma(t).isEqual(Ma(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Kr(i.timestampValue),a=Kr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return bi(i.bytesValue).isEqual(bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ue(i.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(i.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ue(i.integerValue)===Ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ue(i.doubleValue),a=Ue(s.doubleValue);return o===a?dc(o)===dc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Us(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Qv(o)!==Qv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Vn(o[u],a[u])))return!1;return!0}(t,e);default:return X()}}function ja(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function zs(t,e){if(t===e)return 0;const n=Di(t),r=Di(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ue(s.integerValue||s.doubleValue),u=Ue(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Xv(t.timestampValue,e.timestampValue);case 4:return Xv(Ma(t),Ma(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(s,o){const a=bi(s),u=bi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=_e(a[c],u[c]);if(d!==0)return d}return _e(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=_e(Ue(s.latitude),Ue(o.latitude));return a!==0?a:_e(Ue(s.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Jv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const p=s.fields||{},g=o.fields||{},v=(a=p.value)===null||a===void 0?void 0:a.arrayValue,T=(u=g.value)===null||u===void 0?void 0:u.arrayValue,k=_e(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Jv(v,T)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===su.mapValue&&o===su.mapValue)return 0;if(s===su.mapValue)return 1;if(o===su.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const g=_e(u[p],d[p]);if(g!==0)return g;const v=zs(a[u[p]],c[d[p]]);if(v!==0)return v}return _e(u.length,d.length)}(t.mapValue,e.mapValue);default:throw X()}}function Xv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Kr(t),r=Kr(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function Jv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=zs(n[i],r[i]);if(s)return s}return _e(n.length,r.length)}function Bs(t){return tp(t)}function tp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=tp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${tp(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function fc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function np(t){return!!t&&"integerValue"in t}function Bm(t){return!!t&&"arrayValue"in t}function Zv(t){return!!t&&"nullValue"in t}function e0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ru(t){return!!t&&"mapValue"in t}function Eb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ia(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $i(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ia(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ia(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Tb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ru(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ia(n)}setAll(e){let n=ct.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ia(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ru(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ru(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$i(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(ia(this.value))}}function zI(t){const e=[];return $i(t.fields,(n,r)=>{const i=new ct([n]);if(Ru(r)){const s=zI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new nt(e,0,J.min(),J.min(),J.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,J.min(),J.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,J.min(),J.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $s{constructor(e,n){this.position=e,this.inclusive=n}}function t0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=zs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function n0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fa{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ib(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class BI{}class Ge extends BI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Cb(e,n,r):n==="array-contains"?new kb(e,r):n==="in"?new Rb(e,r):n==="not-in"?new Pb(e,r):n==="array-contains-any"?new Nb(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xb(e,r):new Ab(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zs(n,this.value)):n!==null&&Di(this.value)===Di(n)&&this.matchesComparison(zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Cn extends BI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Cn(e,n)}matches(e){return $I(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $I(t){return t.op==="and"}function WI(t){return Sb(t)&&$I(t)}function Sb(t){for(const e of t.filters)if(e instanceof Cn)return!1;return!0}function rp(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+Bs(t.value);if(WI(t))return t.filters.map(e=>rp(e)).join(",");{const e=t.filters.map(n=>rp(n)).join(",");return`${t.op}(${e})`}}function qI(t,e){return t instanceof Ge?function(r,i){return i instanceof Ge&&r.op===i.op&&r.field.isEqual(i.field)&&Vn(r.value,i.value)}(t,e):t instanceof Cn?function(r,i){return i instanceof Cn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&qI(o,i.filters[a]),!0):!1}(t,e):void X()}function GI(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${Bs(n.value)}`}(t):t instanceof Cn?function(n){return n.op.toString()+" {"+n.getFilters().map(GI).join(" ,")+"}"}(t):"Filter"}class Cb extends Ge{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class xb extends Ge{constructor(e,n){super(e,"in",n),this.keys=HI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ab extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=HI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function HI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class kb extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bm(n)&&ja(n.arrayValue,this.value)}}class Rb extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ja(this.value.arrayValue,n)}}class Pb extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ja(this.value.arrayValue,n)}}class Nb extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ja(this.value.arrayValue,r))}}/**
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
 */class bb{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function r0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bb(t,e,n,r,i,s,o)}function $m(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ll(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bs(r)).join(",")),e.ue=n}return e.ue}function Wm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ib(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!n0(t.startAt,e.startAt)&&n0(t.endAt,e.endAt)}function ip(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Db(t,e,n,r,i,s,o,a){return new ti(t,e,n,r,i,s,o,a)}function oh(t){return new ti(t)}function i0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qm(t){return t.collectionGroup!==null}function Cs(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new dt(ct.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Fa(s,r))}),n.has(ct.keyField().canonicalString())||e.ce.push(new Fa(ct.keyField(),r))}return e.ce}function Ln(t){const e=ee(t);return e.le||(e.le=KI(e,Cs(t))),e.le}function Ob(t){const e=ee(t);return e.he||(e.he=KI(e,t.explicitOrderBy)),e.he}function KI(t,e){if(t.limitType==="F")return r0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Fa(i.field,s)});const n=t.endAt?new $s(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $s(t.startAt.position,t.startAt.inclusive):null;return r0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function sp(t,e){const n=t.filters.concat([e]);return new ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function pc(t,e,n){return new ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ah(t,e){return Wm(Ln(t),Ln(e))&&t.limitType===e.limitType}function QI(t){return`${$m(Ln(t))}|lt:${t.limitType}`}function es(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>GI(i)).join(", ")}]`),ll(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Bs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Bs(i)).join(",")),`Target(${r})`}(Ln(t))}; limitType=${t.limitType})`}function lh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Cs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=t0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Cs(r),i)||r.endAt&&!function(o,a,u){const c=t0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Cs(r),i))}(t,e)}function Lb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YI(t){return(e,n)=>{let r=!1;for(const i of Cs(t)){const s=Mb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Mb(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?zs(u,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$i(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return FI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=new He(Q.comparator);function lr(){return Vb}const XI=new He(Q.comparator);function Go(...t){let e=XI;for(const n of t)e=e.insert(n.key,n);return e}function JI(t){let e=XI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _i(){return sa()}function ZI(){return sa()}function sa(){return new ro(t=>t.toString(),(t,e)=>t.isEqual(e))}const jb=new He(Q.comparator),Fb=new dt(Q.comparator);function he(...t){let e=Fb;for(const n of t)e=e.add(n);return e}const Ub=new dt(_e);function zb(){return Ub}/**
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
 */function Gm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dc(e)?"-0":e}}function eS(t){return{integerValue:""+t}}function tS(t,e){return _b(e)?eS(e):Gm(t,e)}/**
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
 */class uh{constructor(){this._=void 0}}function Bb(t,e,n){return t instanceof Ua?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&sh(s)&&(s=zm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ws?rS(t,e):t instanceof za?iS(t,e):function(i,s){const o=nS(i,s),a=s0(o)+s0(i.Pe);return np(o)&&np(i.Pe)?eS(a):Gm(i.serializer,a)}(t,e)}function $b(t,e,n){return t instanceof Ws?rS(t,e):t instanceof za?iS(t,e):n}function nS(t,e){return t instanceof Ba?function(r){return np(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ua extends uh{}class Ws extends uh{constructor(e){super(),this.elements=e}}function rS(t,e){const n=sS(e);for(const r of t.elements)n.some(i=>Vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class za extends uh{constructor(e){super(),this.elements=e}}function iS(t,e){let n=sS(e);for(const r of t.elements)n=n.filter(i=>!Vn(i,r));return{arrayValue:{values:n}}}class Ba extends uh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function s0(t){return Ue(t.integerValue||t.doubleValue)}function sS(t){return Bm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n){this.field=e,this.transform=n}}function Wb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ws&&i instanceof Ws||r instanceof za&&i instanceof za?Us(r.elements,i.elements,Vn):r instanceof Ba&&i instanceof Ba?Vn(r.Pe,i.Pe):r instanceof Ua&&i instanceof Ua}(t.transform,e.transform)}class qb{constructor(e,n){this.version=e,this.transformResults=n}}class Ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ot}static exists(e){return new Ot(void 0,e)}static updateTime(e){return new Ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ch{}function oS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Km(t.key,Ot.none()):new ul(t.key,t.data,Ot.none());{const n=t.data,r=Dt.empty();let i=new dt(ct.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ni(t.key,r,new Jt(i.toArray()),Ot.none())}}function Gb(t,e,n){t instanceof ul?function(i,s,o){const a=i.value.clone(),u=a0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ni?function(i,s,o){if(!Pu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=a0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(aS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function oa(t,e,n,r){return t instanceof ul?function(s,o,a,u){if(!Pu(s.precondition,o))return a;const c=s.value.clone(),d=l0(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ni?function(s,o,a,u){if(!Pu(s.precondition,o))return a;const c=l0(s.fieldTransforms,u,o),d=o.data;return d.setAll(aS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return Pu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Hb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=nS(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function o0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Us(r,i,(s,o)=>Wb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ul extends ch{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ni extends ch{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function aS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function a0(t,e,n){const r=new Map;pe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,$b(o,a,n[i]))}return r}function l0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Bb(s,o,e))}return r}class Km extends ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lS extends ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Gb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=oa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=oa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ZI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=oS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Us(this.mutations,e.mutations,(n,r)=>o0(n,r))&&Us(this.baseMutations,e.baseMutations,(n,r)=>o0(n,r))}}class Qm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){pe(e.mutations.length===r.length);let i=function(){return jb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Qm(e,n,r,i)}}/**
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
 */class Qb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Yb{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,fe;function uS(t){switch(t){default:return X();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function cS(t){if(t===void 0)return ar("GRPC error has no .code"),M.UNKNOWN;switch(t){case $e.OK:return M.OK;case $e.CANCELLED:return M.CANCELLED;case $e.UNKNOWN:return M.UNKNOWN;case $e.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case $e.INTERNAL:return M.INTERNAL;case $e.UNAVAILABLE:return M.UNAVAILABLE;case $e.UNAUTHENTICATED:return M.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case $e.NOT_FOUND:return M.NOT_FOUND;case $e.ALREADY_EXISTS:return M.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return M.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case $e.ABORTED:return M.ABORTED;case $e.OUT_OF_RANGE:return M.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return M.UNIMPLEMENTED;case $e.DATA_LOSS:return M.DATA_LOSS;default:return X()}}(fe=$e||($e={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Jb(){return new TextEncoder}/**
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
 */const Zb=new Ii([4294967295,4294967295],0);function u0(t){const e=Jb().encode(t),n=new NI;return n.update(e),new Uint8Array(n.digest())}function c0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ii([n,r],0),new Ii([i,s],0)]}class Ym{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ho(`Invalid padding: ${n}`);if(r<0)throw new Ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ho(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ii.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ii.fromNumber(r)));return i.compare(Zb)===1&&(i=new Ii([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=u0(e),[r,i]=c0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ym(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=u0(e),[r,i]=c0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,cl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hh(J.min(),i,new He(_e),lr(),he())}}class cl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new cl(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class hS{constructor(e,n){this.targetId=e,this.me=n}}class dS{constructor(e,n,r=pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class h0{constructor(){this.fe=0,this.ge=f0(),this.pe=pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=he(),n=he(),r=he();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new cl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=f0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class eD{constructor(e){this.Le=e,this.Be=new Map,this.ke=lr(),this.qe=d0(),this.Qe=new He(_e)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(ip(s))if(r===0){const o=new Q(s.path);this.Ue(n,o,nt.newNoDocument(o,J.min()))}else pe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=bi(r).toUint8Array()}catch(u){if(u instanceof UI)return Fs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Ym(o,i,s)}catch(u){return Fs(u instanceof Ho?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&ip(a.target)){const u=new Q(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,nt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=he();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new hh(e,n,this.Qe,this.ke,r);return this.ke=lr(),this.qe=d0(),this.Qe=new He(_e),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new h0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new dt(_e),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new h0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function d0(){return new He(Q.comparator)}function f0(){return new He(Q.comparator)}const tD={asc:"ASCENDING",desc:"DESCENDING"},nD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rD={and:"AND",or:"OR"};class iD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function op(t,e){return t.useProto3Json||ll(e)?e:{value:e}}function mc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sD(t,e){return mc(t,e.toTimestamp())}function en(t){return pe(!!t),J.fromTimestamp(function(n){const r=Kr(n);return new Xe(r.seconds,r.nanos)}(t))}function Xm(t,e){return ap(t,e).canonicalString()}function ap(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function pS(t){const e=ve.fromString(t);return pe(ES(e)),e}function gc(t,e){return Xm(t.databaseId,e.path)}function aa(t,e){const n=pS(e);if(n.get(1)!==t.databaseId.projectId)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(gS(n))}function mS(t,e){return Xm(t.databaseId,e)}function oD(t){const e=pS(t);return e.length===4?ve.emptyPath():gS(e)}function lp(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gS(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function p0(t,e,n){return{name:gc(t,e),fields:n.value.mapValue.fields}}function aD(t,e){return"found"in e?function(r,i){pe(!!i.found),i.found.name,i.found.updateTime;const s=aa(r,i.found.name),o=en(i.found.updateTime),a=i.found.createTime?en(i.found.createTime):J.min(),u=new Dt({mapValue:{fields:i.found.fields}});return nt.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){pe(!!i.missing),pe(!!i.readTime);const s=aa(r,i.missing),o=en(i.readTime);return nt.newNoDocument(s,o)}(t,e):X()}function lD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(pe(d===void 0||typeof d=="string"),pt.fromBase64String(d||"")):(pe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),pt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?M.UNKNOWN:cS(c.code);return new W(d,c.message||"")}(o);n=new dS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=aa(t,r.document.name),s=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):J.min(),a=new Dt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Nu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=aa(t,r.document),s=r.readTime?en(r.readTime):J.min(),o=nt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Nu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=aa(t,r.document),s=r.removedTargetIds||[];n=new Nu([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Xb(i,s),a=r.targetId;n=new hS(a,o)}}return n}function _S(t,e){let n;if(e instanceof ul)n={update:p0(t,e.key,e.value)};else if(e instanceof Km)n={delete:gc(t,e.key)};else if(e instanceof ni)n={update:p0(t,e.key,e.data),updateMask:_D(e.fieldMask)};else{if(!(e instanceof lS))return X();n={verify:gc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ua)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ws)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof za)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ba)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:sD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function uD(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?en(i.updateTime):en(s);return o.isEqual(J.min())&&(o=en(s)),new qb(o,i.transformResults||[])}(n,e))):[]}function cD(t,e){return{documents:[mS(t,e.path)]}}function yS(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=mS(t,i);const s=function(c){if(c.length!==0)return wS(Cn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:Ar(g.field),direction:pD(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=op(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function hD(t,e,n,r){const{_t:i,parent:s}=yS(t,e),o={},a=[];let u=0;return n.forEach(c=>{const d="aggregate_"+u++;o[d]=c.alias,c.aggregateType==="count"?a.push({alias:d,count:{}}):c.aggregateType==="avg"?a.push({alias:d,avg:{field:Ar(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:d,sum:{field:Ar(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ut:o,parent:s}}function dD(t){let e=oD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){pe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const g=vS(p);return g instanceof Cn&&WI(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(T){return new Fa(ts(T.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(p){let g;return g=typeof p=="object"?p.value:p,ll(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,v=p.values||[];return new $s(v,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,v=p.values||[];return new $s(v,g)}(n.endAt)),Db(e,i,o,s,a,"F",u,c)}function fD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ts(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ts(n.unaryFilter.field);return Ge.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ts(n.unaryFilter.field);return Ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ts(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(ts(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Cn.create(n.compositeFilter.filters.map(r=>vS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function pD(t){return tD[t]}function mD(t){return nD[t]}function gD(t){return rD[t]}function Ar(t){return{fieldPath:t.canonicalString()}}function ts(t){return ct.fromServerFormat(t.fieldPath)}function wS(t){return t instanceof Ge?function(n){if(n.op==="=="){if(e0(n.value))return{unaryFilter:{field:Ar(n.field),op:"IS_NAN"}};if(Zv(n.value))return{unaryFilter:{field:Ar(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(e0(n.value))return{unaryFilter:{field:Ar(n.field),op:"IS_NOT_NAN"}};if(Zv(n.value))return{unaryFilter:{field:Ar(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ar(n.field),op:mD(n.op),value:n.value}}}(t):t instanceof Cn?function(n){const r=n.getFilters().map(i=>wS(i));return r.length===1?r[0]:{compositeFilter:{op:gD(n.op),filters:r}}}(t):X()}function _D(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ES(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r,i,s=J.min(),o=J.min(),a=pt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.ct=e}}function vD(t){const e=dD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pc(e,e.limit,"L"):e}/**
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
 */class wD{constructor(){this.un=new ED}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Hr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Hr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class ED{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new dt(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new dt(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new qs(0)}static kn(){return new qs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(){this.changes=new ro(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ID{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&oa(r.mutation,i,Jt.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const i=_i();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Go();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_i();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=lr();const o=sa(),a=function(){return sa()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ni)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),oa(d.mutation,c,d.mutation.getFieldMask(),Xe.now())):o.set(c.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return a.set(c,new ID(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=sa();let i=new He((o,a)=>o-a),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Jt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const p=(i.get(a.batchId)||he()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,p=ZI();d.forEach(g=>{if(!s.has(g)){const v=oS(n.get(g),r.get(g));v!==null&&p.set(g,v),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(_i());let a=-1,u=s;return o.next(c=>F.forEach(c,(d,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,he())).next(d=>({batchId:a,changes:JI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Go();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Go();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(p,g){return new ti(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,nt.newInvalidDocument(d)))});let a=Go();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&oa(d.mutation,c,Jt.empty(),Xe.now()),lh(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class CD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:en(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:vD(i.bundledQuery),readTime:en(i.readTime)}}(n)),F.resolve()}}/**
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
 */class xD{constructor(){this.overlays=new He(Q.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_i();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=_i(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new He((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=_i(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=_i(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Qb(n,r));let s=this.Ir.get(n);s===void 0&&(s=he(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class AD{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.Tr=new dt(Ze.Er),this.dr=new dt(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new ve([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new ve([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=he();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||_e(e.wr,n.wr)}static Ar(e,n){return _e(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new dt(Ze.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Kb(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(_e);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new Q(s),0);let a=new dt(_e);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){pe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ze(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this.Mr=e,this.docs=function(){return new He(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=lr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=lr();const o=n.path,a=new Q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||fb(db(d),r)<=0||(i.has(d.key)||lh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new PD(this)}getSize(e){return F.resolve(this.size)}}class PD extends TD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e){this.persistence=e,this.Nr=new ro(n=>$m(n),Wm),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Jm,this.targetCount=0,this.kr=qs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new qs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Um(0),this.Kr=!1,this.Kr=!0,this.$r=new AD,this.referenceDelegate=e(this),this.Ur=new ND(this),this.indexManager=new wD,this.remoteDocumentCache=function(i){return new RD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new yD(n),this.Gr=new CD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new kD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new DD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class DD extends mb{constructor(e){super(),this.currentSequenceNumber=e}}class Zm{constructor(e){this.persistence=e,this.Jr=new Jm,this.Yr=null}static Zr(e){return new Zm(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=he(),i=he();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new eg(e,n.fromCache,r,i)}}/**
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
 */class OD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class LD{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return LR()?8:gb(At())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new OD;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Lo()<=ce.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",es(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Lo()<=ce.DEBUG&&K("QueryEngine","Query:",es(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Lo()<=ce.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",es(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(n))):F.resolve())}Yi(e,n){if(i0(n))return F.resolve(null);let r=Ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=pc(n,null,"F"),r=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,pc(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return i0(n)||i.isEqual(J.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(Lo()<=ce.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),es(n)),this.rs(e,o,n,hb(i,-1)).next(a=>a))})}ts(e,n){let r=new dt(YI(e));return n.forEach((i,s)=>{lh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Lo()<=ce.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",es(n)),this.Ji.getDocumentsMatchingQuery(e,n,Hr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class MD{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new He(_e),this._s=new ro(s=>$m(s),Wm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function VD(t,e,n,r){return new MD(t,e,n,r)}async function TS(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=he();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function jD(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const p=c.batch,g=p.keys();let v=F.resolve();return g.forEach(T=>{v=v.next(()=>d.getEntry(u,T)).next(k=>{const N=c.docVersions.get(T);pe(N!==null),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=he();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function IS(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function FD(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,p)=>{const g=i.get(p);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(pt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(p,v),function(k,N,S){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,v,d)&&a.push(n.Ur.updateTargetData(s,v))});let u=lr(),c=he();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(UD(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(J.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function UD(t,e,n){let r=he(),i=he();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=lr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function zD(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function BD(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function up(t,e,n){const r=ee(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!al(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function m0(t,e,n){const r=ee(t);let i=J.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=ee(u),g=p._s.get(d);return g!==void 0?F.resolve(p.os.get(g)):p.Ur.getTargetData(c,d)}(r,o,Ln(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:he())).next(a=>($D(r,Lb(e),a),{documents:a,Ts:s})))}function $D(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class g0{constructor(){this.activeTargetIds=zb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WD{constructor(){this.so=new g0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new g0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qD{_o(e){}shutdown(){}}/**
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
 */class _0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ou=null;function Ld(){return ou===null?ou=function(){return 268435456+Math.round(2147483648*Math.random())}():ou++,"0x"+ou.toString(16)}/**
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
 */const GD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection";class KD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Ld(),u=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(K("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Fs("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+no}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=GD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Ld();return new Promise((o,a)=>{const u=new bI;u.setWithCredentials(!0),u.listenOnce(DI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ku.NO_ERROR:const d=u.getResponseJson();K(Et,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case ku.TIMEOUT:K(Et,`RPC '${e}' ${s} timed out`),a(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case ku.HTTP_ERROR:const p=u.getStatus();if(K(Et,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const T=function(N){const S=N.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(S)>=0?S:M.UNKNOWN}(v.status);a(new W(T,v.message))}else a(new W(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new W(M.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{K(Et,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);K(Et,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Ld(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=MI(),a=LI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");K(Et,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let g=!1,v=!1;const T=new HD({Io:N=>{v?K(Et,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(g||(K(Et,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),K(Et,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),k=(N,S,w)=>{N.listen(S,C=>{try{w(C)}catch(D){setTimeout(()=>{throw D},0)}})};return k(p,qo.EventType.OPEN,()=>{v||(K(Et,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),k(p,qo.EventType.CLOSE,()=>{v||(v=!0,K(Et,`RPC '${e}' stream ${i} transport closed`),T.So())}),k(p,qo.EventType.ERROR,N=>{v||(v=!0,Fs(Et,`RPC '${e}' stream ${i} transport errored:`,N),T.So(new W(M.UNAVAILABLE,"The operation could not be completed")))}),k(p,qo.EventType.MESSAGE,N=>{var S;if(!v){const w=N.data[0];pe(!!w);const C=w,D=C.error||((S=C[0])===null||S===void 0?void 0:S.error);if(D){K(Et,`RPC '${e}' stream ${i} received error:`,D);const O=D.status;let V=function(E){const x=$e[E];if(x!==void 0)return cS(x)}(O),I=D.message;V===void 0&&(V=M.INTERNAL,I="Unknown error status: "+O+" with message "+D.message),v=!0,T.So(new W(V,I)),p.close()}else K(Et,`RPC '${e}' stream ${i} received:`,w),T.bo(w)}}),k(a,OI.STAT_EVENT,N=>{N.stat===Zf.PROXY?K(Et,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Zf.NOPROXY&&K(Et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function Md(){return typeof document<"u"?document:null}/**
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
 */function dh(t){return new iD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new tg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QD extends SS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=lD(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?en(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=lp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=ip(u)?{documents:cD(s,u)}:{query:yS(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=fS(s,o.resumeToken);const c=op(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=mc(s,o.snapshotVersion.toTimestamp());const c=op(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=fD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=lp(this.serializer),n.removeTarget=e,this.a_(n)}}class YD extends SS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return pe(!!e.streamToken),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=uD(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=lp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>_S(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,ap(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,ap(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class JD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ar(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Wi(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.L_.add(4),await hl(c),c.q_.set("Unknown"),c.L_.delete(4),await fh(c)}(this))})}),this.q_=new JD(r,i)}}async function fh(t){if(Wi(t))for(const e of t.B_)await e(!0)}async function hl(t){for(const e of t.B_)await e(!1)}function CS(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),sg(n)?ig(n):io(n).r_()&&rg(n,e))}function ng(t,e){const n=ee(t),r=io(n);n.N_.delete(e),r.r_()&&xS(n,e),n.N_.size===0&&(r.r_()?r.o_():Wi(n)&&n.q_.set("Unknown"))}function rg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}io(t).A_(e)}function xS(t,e){t.Q_.xe(e),io(t).R_(e)}function ig(t){t.Q_=new eD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),io(t).start(),t.q_.v_()}function sg(t){return Wi(t)&&!io(t).n_()&&t.N_.size>0}function Wi(t){return ee(t).L_.size===0}function AS(t){t.Q_=void 0}async function eO(t){t.q_.set("Online")}async function tO(t){t.N_.forEach((e,n)=>{rg(t,e)})}async function nO(t,e){AS(t),sg(t)?(t.q_.M_(e),ig(t)):t.q_.set("Unknown")}async function rO(t,e,n){if(t.q_.set("Online"),e instanceof dS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _c(t,r)}else if(e instanceof Nu?t.Q_.Ke(e):e instanceof hS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await IS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(pt.EMPTY_BYTE_STRING,d.snapshotVersion)),xS(s,u);const p=new Pr(d.target,u,c,d.sequenceNumber);rg(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await _c(t,r)}}async function _c(t,e,n){if(!al(e))throw e;t.L_.add(1),await hl(t),t.q_.set("Offline"),n||(n=()=>IS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await fh(t)})}function kS(t,e){return e().catch(n=>_c(t,n,e))}async function ph(t){const e=ee(t),n=Qr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;iO(e);)try{const i=await zD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,sO(e,i)}catch(i){await _c(e,i)}RS(e)&&PS(e)}function iO(t){return Wi(t)&&t.O_.length<10}function sO(t,e){t.O_.push(e);const n=Qr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function RS(t){return Wi(t)&&!Qr(t).n_()&&t.O_.length>0}function PS(t){Qr(t).start()}async function oO(t){Qr(t).p_()}async function aO(t){const e=Qr(t);for(const n of t.O_)e.m_(n.mutations)}async function lO(t,e,n){const r=t.O_.shift(),i=Qm.from(r,e,n);await kS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ph(t)}async function uO(t,e){e&&Qr(t).V_&&await async function(r,i){if(function(o){return uS(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();Qr(r).s_(),await kS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ph(r)}}(t,e),RS(t)&&PS(t)}async function y0(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Wi(n);n.L_.add(3),await hl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await fh(n)}async function cO(t,e){const n=ee(t);e?(n.L_.delete(2),await fh(n)):e||(n.L_.add(2),await hl(n),n.q_.set("Unknown"))}function io(t){return t.K_||(t.K_=function(n,r,i){const s=ee(n);return s.w_(),new QD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:eO.bind(null,t),Ro:tO.bind(null,t),mo:nO.bind(null,t),d_:rO.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),sg(t)?ig(t):t.q_.set("Unknown")):(await t.K_.stop(),AS(t))})),t.K_}function Qr(t){return t.U_||(t.U_=function(n,r,i){const s=ee(n);return s.w_(),new YD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:oO.bind(null,t),mo:uO.bind(null,t),f_:aO.bind(null,t),g_:lO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ph(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new og(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ag(t,e){if(ar("AsyncQueue",`${e}: ${t}`),al(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Go(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this.W_=new He(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gs{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Gs(e,n,xs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class dO{constructor(){this.queries=w0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=w0(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function w0(){return new ro(t=>QI(t),ah)}async function lg(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new hO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=ag(o,`Initialization of query '${es(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&cg(n)}async function ug(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function fO(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&cg(n)}function pO(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function cg(t){t.Y_.forEach(e=>{e.next()})}var cp,E0;(E0=cp||(cp={})).ea="default",E0.Cache="cache";class hg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==cp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.key=e}}class bS{constructor(e){this.key=e}}class mO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=he(),this.mutatedKeys=he(),this.Aa=YI(e),this.Ra=new xs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new v0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const g=i.get(d),v=lh(this.query,p)?p:null,T=!!g&&this.mutatedKeys.has(g.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let N=!1;g&&v?g.data.isEqual(v.data)?T!==k&&(r.track({type:3,doc:v}),N=!0):this.ga(g,v)||(r.track({type:2,doc:v}),N=!0,(u&&this.Aa(v,u)>0||c&&this.Aa(v,c)<0)&&(a=!0)):!g&&v?(r.track({type:0,doc:v}),N=!0):g&&!v&&(r.track({type:1,doc:g}),N=!0,(u||c)&&(a=!0)),N&&(v?(o=o.add(v),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(v,T){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return k(v)-k(T)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Gs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new v0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=he(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new bS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new NS(r))}),n}ba(e){this.Ta=e.Ts,this.da=he();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Gs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class gO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _O{constructor(e){this.key=e,this.va=!1}}class yO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ro(a=>QI(a),ah),this.Ma=new Map,this.xa=new Set,this.Oa=new He(Q.comparator),this.Na=new Map,this.La=new Jm,this.Ba={},this.ka=new Map,this.qa=qs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function vO(t,e,n=!0){const r=jS(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await DS(r,e,n,!0),i}async function wO(t,e){const n=jS(t);await DS(n,e,!0,!1)}async function DS(t,e,n,r){const i=await BD(t.localStore,Ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await EO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&CS(t.remoteStore,i),a}async function EO(t,e,n,r,i){t.Ka=(p,g,v)=>async function(k,N,S,w){let C=N.view.ma(S);C.ns&&(C=await m0(k.localStore,N.query,!1).then(({documents:I})=>N.view.ma(I,C)));const D=w&&w.targetChanges.get(N.targetId),O=w&&w.targetMismatches.get(N.targetId)!=null,V=N.view.applyChanges(C,k.isPrimaryClient,D,O);return I0(k,N.targetId,V.wa),V.snapshot}(t,p,g,v);const s=await m0(t.localStore,e,!0),o=new mO(e,s.Ts),a=o.ma(s.documents),u=cl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);I0(t,n,c.wa);const d=new gO(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function TO(t,e,n){const r=ee(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ah(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await up(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ng(r.remoteStore,i.targetId),hp(r,i.targetId)}).catch(ol)):(hp(r,i.targetId),await up(r.localStore,i.targetId,!0))}async function IO(t,e){const n=ee(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ng(n.remoteStore,r.targetId))}async function SO(t,e,n){const r=NO(t);try{const i=await function(o,a){const u=ee(o),c=Xe.now(),d=a.reduce((v,T)=>v.add(T.key),he());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let T=lr(),k=he();return u.cs.getEntries(v,d).next(N=>{T=N,T.forEach((S,w)=>{w.isValidDocument()||(k=k.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,T)).next(N=>{p=N;const S=[];for(const w of a){const C=Hb(w,p.get(w.key).overlayedDocument);C!=null&&S.push(new ni(w.key,C,zI(C.value.mapValue),Ot.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,S,a)}).next(N=>{g=N;const S=N.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(v,N.batchId,S)})}).then(()=>({batchId:g.batchId,changes:JI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new He(_e)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await dl(r,i.changes),await ph(r.remoteStore)}catch(i){const s=ag(i,"Failed to persist write");n.reject(s)}}async function OS(t,e){const n=ee(t);try{const r=await FD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?pe(o.va):i.removedDocuments.size>0&&(pe(o.va),o.va=!1))}),await dl(n,r,e)}catch(r){await ol(r)}}function T0(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ee(o);u.onlineState=a;let c=!1;u.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(a)&&(c=!0)}),c&&cg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CO(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new He(Q.comparator);o=o.insert(s,nt.newNoDocument(s,J.min()));const a=he().add(s),u=new hh(J.min(),new Map,new He(_e),o,a);await OS(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),dg(r)}else await up(r.localStore,e,!1).then(()=>hp(r,e,n)).catch(ol)}async function xO(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await jD(n.localStore,e);MS(n,r,null),LS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await dl(n,i)}catch(i){await ol(i)}}async function AO(t,e,n){const r=ee(t);try{const i=await function(o,a){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(pe(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);MS(r,e,n),LS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await dl(r,i)}catch(i){await ol(i)}}function LS(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function MS(t,e,n){const r=ee(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function hp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||VS(t,r)})}function VS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(ng(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),dg(t))}function I0(t,e,n){for(const r of n)r instanceof NS?(t.La.addReference(r.key,e),kO(t,r)):r instanceof bS?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||VS(t,r.key)):X()}function kO(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),dg(t))}function dg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(ve.fromString(e)),r=t.qa.next();t.Na.set(r,new _O(n)),t.Oa=t.Oa.insert(n,r),CS(t.remoteStore,new Pr(Ln(oh(n.path)),r,"TargetPurposeLimboResolution",Um.oe))}}async function dl(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=eg.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,g=>F.forEach(g.$i,v=>d.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>F.forEach(g.Ui,v=>d.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!al(p))throw p;K("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const v=d.os.get(g),T=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(T);d.os=d.os.insert(g,k)}}}(r.localStore,s))}async function RO(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await TS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new W(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await dl(n,r.hs)}}function PO(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return he().add(r.key);{let i=he();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function jS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=OS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CO.bind(null,e),e.Ca.d_=fO.bind(null,e.eventManager),e.Ca.$a=pO.bind(null,e.eventManager),e}function NO(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AO.bind(null,e),e}class yc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return VD(this.persistence,new LD,e.initialUser,this.serializer)}Ga(e){return new bD(Zm.Zr,this.serializer)}Wa(e){return new WD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yc.provider={build:()=>new yc};class dp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>T0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RO.bind(null,this.syncEngine),await cO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dO}()}createDatastore(e){const n=dh(e.databaseInfo.databaseId),r=function(s){return new KD(s)}(e.databaseInfo);return function(s,o,a,u){return new XD(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new ZD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>T0(this.syncEngine,n,0),function(){return _0.D()?new _0:new qD}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const p=new yO(i,s,o,a,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);K("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await hl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}dp.provider={build:()=>new dp};/**
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
 */class fg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new W(M.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=ee(i),a={documents:s.map(p=>gc(o.serializer,p))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,ve.emptyPath(),a,s.length),c=new Map;u.forEach(p=>{const g=aD(o.serializer,p);c.set(g.key.toString(),g)});const d=[];return s.forEach(p=>{const g=c.get(p.toString());pe(!!g),d.push(g)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Km(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=Q.fromPath(r);this.mutations.push(new lS(i,this.precondition(i)))}),await async function(r,i){const s=ee(r),o={writes:i.map(a=>_S(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,ve.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw X();n=J.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new W(M.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(J.min())?Ot.exists(!1):Ot.updateTime(n):Ot.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(J.min()))throw new W(M.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ot.updateTime(n)}return Ot.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class DO{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new tg(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new bO(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!ll(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!uS(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Tt.UNAUTHENTICATED,this.clientId=jI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ag(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vd(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await TS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function S0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LO(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>y0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>y0(e.remoteStore,i)),t._onlineComponents=e}async function LO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Fs("Error using user provided cache. Falling back to memory cache: "+n),await Vd(t,new yc)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Vd(t,new yc);return t._offlineComponents}async function pg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await S0(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await S0(t,new dp))),t._onlineComponents}function MO(t){return pg(t).then(e=>e.syncEngine)}function FS(t){return pg(t).then(e=>e.datastore)}async function vc(t){const e=await pg(t),n=e.eventManager;return n.onListen=vO.bind(null,e.syncEngine),n.onUnlisten=TO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=IO.bind(null,e.syncEngine),n}function VO(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new fg({next:g=>{d.Za(),o.enqueueAndForget(()=>ug(s,p));const v=g.docs.has(a);!v&&g.fromCache?c.reject(new W(M.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&u&&u.source==="server"?c.reject(new W(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new hg(oh(a.path),d,{includeMetadataChanges:!0,_a:!0});return lg(s,p)}(await vc(t),t.asyncQueue,e,n,r)),r.promise}function jO(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new fg({next:g=>{d.Za(),o.enqueueAndForget(()=>ug(s,p)),g.fromCache&&u.source==="server"?c.reject(new W(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new hg(a,d,{includeMetadataChanges:!0,_a:!0});return lg(s,p)}(await vc(t),t.asyncQueue,e,n,r)),r.promise}function FO(t,e,n){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await FS(t);r.resolve(async function(o,a,u){var c;const d=ee(o),{request:p,ut:g,parent:v}=hD(d.serializer,Ob(a),u);d.connection.Fo||delete p.parent;const T=(await d.Lo("RunAggregationQuery",d.serializer.databaseId,v,p,1)).filter(N=>!!N.result);pe(T.length===1);const k=(c=T[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(k).reduce((N,S)=>(N[g[S]]=k[S],N),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}/**
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
 */function US(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const C0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function UO(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function x0(t){if(!Q.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function A0(t){if(Q.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mh(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function zO(t,e){if(e<=0)throw new W(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class k0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=US((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new k0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new k0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nb;switch(r.type){case"firstParty":return new ob(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=C0.get(n);r&&(K("ComponentProvider","Removing Datastore"),C0.delete(n),r.terminate())}(this),Promise.resolve()}}function BO(t,e,n,r={}){var i;const s=(t=Gt(t,fl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Tt.MOCK_USER;else{a=GT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Tt(c)}t._authCredentials=new rb(new VI(a,u))}}/**
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
 */class xn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xn(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Br extends xn{constructor(e,n,r){super(e,n,oh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new Q(e))}withConverter(e){return new Br(this.firestore,e,this._path)}}function so(t,e,...n){if(t=be(t),mg("collection","path",e),t instanceof fl){const r=ve.fromString(e,...n);return A0(r),new Br(t,null,r)}{if(!(t instanceof Ct||t instanceof Br))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return A0(r),new Br(t.firestore,null,r)}}function $O(t,e){if(t=Gt(t,fl),mg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new xn(t,null,function(r){return new ti(ve.emptyPath(),r)}(e))}function st(t,e,...n){if(t=be(t),arguments.length===1&&(e=jI.newId()),mg("doc","path",e),t instanceof fl){const r=ve.fromString(e,...n);return x0(r),new Ct(t,null,new Q(r))}{if(!(t instanceof Ct||t instanceof Br))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return x0(r),new Ct(t.firestore,t instanceof Br?t.converter:null,new Q(r))}}/**
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
 */class R0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new tg(this,"async_queue_retry"),this.Vu=()=>{const r=Md();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Md();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Md();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Tn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!al(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ar("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=og.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function P0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ur extends fl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new R0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new R0(e),this._firestoreClient=void 0,await e}}}function WO(t,e){const n=typeof t=="object"?t:Am(),r=typeof t=="string"?t:"(default)",i=th(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$T("firestore");s&&BO(i,...s)}return i}function oo(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||qO(t),t._firestoreClient}function qO(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new wb(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,US(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new OO(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class GO{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class HO{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oi(pt.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Oi(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ao{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */class _g{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=/^__.*__$/;class QO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ni(e,this.data,this.fieldMask,n,this.fieldTransforms):new ul(e,this.data,n,this.fieldTransforms)}}class zS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ni(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function BS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class _h{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new _h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return wc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(BS(this.Cu)&&KO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class YO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dh(e)}Qu(e,n,r,i=!1){return new _h({Cu:e,methodName:n,qu:r,path:ct.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pl(t){const e=t._freezeSettings(),n=dh(t._databaseId);return new YO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yg(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Tg("Data must be an object, but it was:",o,r);const a=WS(r,o);let u,c;if(s.merge)u=new Jt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const g=fp(e,p,n);if(!o.contains(g))throw new W(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);GS(d,g)||d.push(g)}u=new Jt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new QO(new Dt(a),u,c)}class yh extends ao{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yh}}function XO(t,e,n){return new _h({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class vg extends ao{_toFieldTransform(e){return new Hm(e.path,new Ua)}isEqual(e){return e instanceof vg}}class wg extends ao{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=XO(this,e,!0),r=this.Ku.map(s=>lo(s,n)),i=new Ws(r);return new Hm(e.path,i)}isEqual(e){return e instanceof wg&&Na(this.Ku,e.Ku)}}class Eg extends ao{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Ba(e.serializer,tS(e.serializer,this.$u));return new Hm(e.path,n)}isEqual(e){return e instanceof Eg&&this.$u===e.$u}}function JO(t,e,n,r){const i=t.Qu(1,e,n);Tg("Data must be an object, but it was:",i,r);const s=[],o=Dt.empty();$i(r,(u,c)=>{const d=Ig(e,u,n);c=be(c);const p=i.Nu(d);if(c instanceof yh)s.push(d);else{const g=lo(c,p);g!=null&&(s.push(d),o.set(d,g))}});const a=new Jt(s);return new zS(o,a,i.fieldTransforms)}function ZO(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[fp(e,r,n)],u=[i];if(s.length%2!=0)throw new W(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(fp(e,s[g])),u.push(s[g+1]);const c=[],d=Dt.empty();for(let g=a.length-1;g>=0;--g)if(!GS(c,a[g])){const v=a[g];let T=u[g];T=be(T);const k=o.Nu(v);if(T instanceof yh)c.push(v);else{const N=lo(T,k);N!=null&&(c.push(v),d.set(v,N))}}const p=new Jt(c);return new zS(d,p,o.fieldTransforms)}function $S(t,e,n,r=!1){return lo(n,t.Qu(r?4:3,e))}function lo(t,e){if(qS(t=be(t)))return Tg("Unsupported field value:",e,t),WS(t,e);if(t instanceof ao)return function(r,i){if(!BS(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=lo(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Xe.fromDate(r);return{timestampValue:mc(i.serializer,s)}}if(r instanceof Xe){const s=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mc(i.serializer,s)}}if(r instanceof gg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Oi)return{bytesValue:fS(i.serializer,r._byteString)};if(r instanceof Ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Xm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof _g)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Gm(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${mh(r)}`)}(t,e)}function WS(t,e){const n={};return FI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$i(t,(r,i)=>{const s=lo(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function qS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof gg||t instanceof Oi||t instanceof Ct||t instanceof ao||t instanceof _g)}function Tg(t,e,n){if(!qS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=mh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function fp(t,e,n){if((e=be(e))instanceof gh)return e._internalPath;if(typeof e=="string")return Ig(t,e);throw wc("Field path arguments must be of type string or ",t,!1,void 0,n)}const e2=new RegExp("[~\\*/\\[\\]]");function Ig(t,e,n){if(e.search(e2)>=0)throw wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gh(...e.split("."))._internalPath}catch{throw wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(M.INVALID_ARGUMENT,a+t+u)}function GS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class $a{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new t2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class t2 extends $a{data(){return super.data()}}function vh(t,e){return typeof e=="string"?Ig(t,e):e instanceof gh?e._internalPath:e._delegate._internalPath}/**
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
 */function HS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sg{}class wh extends Sg{}function Eh(t,e,...n){let r=[];e instanceof Sg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Cg).length,a=s.filter(u=>u instanceof Th).length;if(o>1||o>0&&a>0)throw new W(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Th extends wh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Th(e,n,r)}_apply(e){const n=this._parse(e);return QS(e._query,n),new xn(e.firestore,e.converter,sp(e._query,n))}_parse(e){const n=pl(e.firestore);return function(s,o,a,u,c,d,p){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){b0(p,d);const v=[];for(const T of p)v.push(N0(u,s,T));g={arrayValue:{values:v}}}else g=N0(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||b0(p,d),g=$S(a,o,p,d==="in"||d==="not-in");return Ge.create(c,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function pp(t,e,n){const r=e,i=vh("where",t);return Th._create(i,r,n)}class Cg extends Sg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)QS(o,u),o=sp(o,u)}(e._query,n),new xn(e.firestore,e.converter,sp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xg extends wh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new xg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fa(s,o)}(e._query,this._field,this._direction);return new xn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ti(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Ag(t,e="asc"){const n=e,r=vh("orderBy",t);return xg._create(r,n)}class kg extends wh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new kg(e,n,r)}_apply(e){return new xn(e.firestore,e.converter,pc(e._query,this._limit,this._limitType))}}function KS(t){return zO("limit",t),kg._create("limit",t,"F")}class Rg extends wh{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Rg(e,n,r)}_apply(e){const n=r2(e,this.type,this._docOrFields,this._inclusive);return new xn(e.firestore,e.converter,function(i,s){return new ti(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function n2(...t){return Rg._create("startAfter",t,!1)}function r2(t,e,n,r){if(n[0]=be(n[0]),n[0]instanceof $a)return function(s,o,a,u,c){if(!u)throw new W(M.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const p of Cs(s))if(p.field.isKeyField())d.push(fc(o,u.key));else{const g=u.data.field(p.field);if(sh(g))throw new W(M.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const v=p.field.canonicalString();throw new W(M.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}d.push(g)}return new $s(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=pl(t.firestore);return function(o,a,u,c,d,p){const g=o.explicitOrderBy;if(d.length>g.length)throw new W(M.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let T=0;T<d.length;T++){const k=d[T];if(g[T].field.isKeyField()){if(typeof k!="string")throw new W(M.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!qm(o)&&k.indexOf("/")!==-1)throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const N=o.path.child(ve.fromString(k));if(!Q.isDocumentKey(N))throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const S=new Q(N);v.push(fc(a,S))}else{const N=$S(u,c,k);v.push(N)}}return new $s(v,p)}(t._query,t.firestore._databaseId,i,e,n,r)}}function N0(t,e,n){if(typeof(n=be(n))=="string"){if(n==="")throw new W(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qm(e)&&n.indexOf("/")!==-1)throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!Q.isDocumentKey(r))throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fc(t,new Q(r))}if(n instanceof Ct)return fc(t,n._key);throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mh(n)}.`)}function b0(t,e){if(!Array.isArray(t)||t.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function QS(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class YS{convertValue(e,n="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $i(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ue(o.doubleValue));return new _g(s)}convertGeoPoint(e){return new gg(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ma(e));default:return null}}convertTimestamp(e){const n=Kr(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);pe(ES(r));const i=new Va(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||ar(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Pg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class i2 extends YS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function s2(){return new GO("count")}/**
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
 */class ps{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ng extends $a{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bu extends Ng{data(e={}){return super.data(e)}}class XS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ps(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bu(this._firestore,this._userDataWriter,r.key,r,new ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new bu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ps(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new bu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ps(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:o2(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function o2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function Li(t){t=Gt(t,Ct);const e=Gt(t.firestore,ur);return VO(oo(e),t._key).then(n=>ZS(e,t,n))}class ml extends YS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function bg(t){t=Gt(t,xn);const e=Gt(t.firestore,ur),n=oo(e),r=new ml(e);return HS(t._query),jO(n,t._query).then(i=>new XS(e,r,t,i))}function qi(t,e,n){t=Gt(t,Ct);const r=Gt(t.firestore,ur),i=Pg(t.converter,e,n);return JS(r,[yg(pl(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ot.none())])}function a2(t,e){const n=Gt(t.firestore,ur),r=st(t),i=Pg(t.converter,e);return JS(n,[yg(pl(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ot.exists(!1))]).then(()=>r)}function Ih(t,...e){var n,r,i;t=be(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||P0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(P0(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(t instanceof Ct)c=Gt(t.firestore,ur),d=oh(t._key.path),u={next:p=>{e[o]&&e[o](ZS(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Gt(t,xn);c=Gt(p.firestore,ur),d=p._query;const g=new ml(c);u={next:v=>{e[o]&&e[o](new XS(c,g,p,v))},error:e[o+1],complete:e[o+2]},HS(t._query)}return function(g,v,T,k){const N=new fg(k),S=new hg(v,N,T);return g.asyncQueue.enqueueAndForget(async()=>lg(await vc(g),S)),()=>{N.Za(),g.asyncQueue.enqueueAndForget(async()=>ug(await vc(g),S))}}(oo(c),d,a,u)}function JS(t,e){return function(r,i){const s=new Tn;return r.asyncQueue.enqueueAndForget(async()=>SO(await MO(r),i,s)),s.promise}(oo(t),e)}function ZS(t,e,n){const r=n.docs.get(e._key),i=new ml(t);return new Ng(t,i,e._key,r,new ps(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function l2(t){return u2(t,{count:s2()})}function u2(t,e){const n=Gt(t.firestore,ur),r=oo(n),i=yb(e,(s,o)=>new Yb(o,s.aggregateType,s._internalFieldPath));return FO(r,t._query,i).then(s=>function(a,u,c){const d=new ml(a);return new HO(u,d,c)}(n,t,s))}/**
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
 */const c2={maxAttempts:5};function Mo(t,e){if((t=be(t)).firestore!==e)throw new W(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class h2 extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=pl(n)}get(n){const r=Mo(n,this._firestore),i=new i2(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return X();const o=s[0];if(o.isFoundDocument())return new $a(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new $a(this._firestore,i,r._key,null,r.converter);throw X()})}set(n,r,i){const s=Mo(n,this._firestore),o=Pg(s.converter,r,i),a=yg(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Mo(n,this._firestore);let a;return a=typeof(r=be(r))=="string"||r instanceof gh?ZO(this._dataReader,"Transaction.update",o._key,r,i,s):JO(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Mo(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Mo(e,this._firestore),r=new ml(this._firestore);return super.get(e).then(i=>new Ng(this._firestore,r,n._key,i._document,new ps(!1,!1),n.converter))}}function d2(t,e,n){t=Gt(t,ur);const r=Object.assign(Object.assign({},c2),n);return function(s){if(s.maxAttempts<1)throw new W(M.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new Tn;return s.asyncQueue.enqueueAndForget(async()=>{const c=await FS(s);new DO(s.asyncQueue,c,a,o,u).au()}),u.promise}(oo(t),i=>e(new h2(t,i)),r)}function jn(){return new vg("serverTimestamp")}function f2(...t){return new wg("arrayUnion",t)}function li(t){return new Eg("increment",t)}(function(e,n=!0){(function(i){no=i})(Bi),Ri(new Gr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ur(new ib(r.getProvider("auth-internal")),new lb(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Va(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Dn(Kv,"4.7.3",e),Dn(Kv,"4.7.3","esm2017")})();var p2="firebase",m2="10.14.1";/**
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
 */Dn(p2,m2,"app");var D0={};const O0="@firebase/database",L0="1.0.8";/**
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
 */let eC="";function g2(t){eC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Pa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _2(e)}}catch{}return new y2},yi=tC("localStorage"),v2=tC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new eh("@firebase/database"),w2=function(){let t=1;return function(){return t++}}(),nC=function(t){const e=HR(t),n=new $R;n.update(e);const r=n.digest();return Im.encodeByteArray(r)},gl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=gl.apply(null,r):typeof r=="object"?e+=rt(r):e+=r,e+=" "}return e};let la=null,M0=!0;const E2=function(t,e){$(!0,"Can't turn on custom loggers persistently."),As.logLevel=ce.VERBOSE,la=As.log.bind(As)},St=function(...t){if(M0===!0&&(M0=!1,la===null&&v2.get("logging_enabled")===!0&&E2()),la){const e=gl.apply(null,t);la(e)}},_l=function(t){return function(...e){St(t,...e)}},mp=function(...t){const e="FIREBASE INTERNAL ERROR: "+gl(...t);As.error(e)},cr=function(...t){const e=`FIREBASE FATAL ERROR: ${gl(...t)}`;throw As.error(e),new Error(e)},Ht=function(...t){const e="FIREBASE WARNING: "+gl(...t);As.warn(e)},T2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},rC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},I2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hs="[MIN_NAME]",Mi="[MAX_NAME]",uo=function(t,e){if(t===e)return 0;if(t===Hs||e===Mi)return-1;if(e===Hs||t===Mi)return 1;{const n=V0(t),r=V0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},S2=function(t,e){return t===e?0:t<e?-1:1},Vo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+rt(e))},Dg=function(t){if(typeof t!="object"||t===null)return rt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=rt(e[r]),n+=":",n+=Dg(t[e[r]]);return n+="}",n},iC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const sC=function(t){$(!rC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let p="";for(u=0;u<64;u+=8){let g=parseInt(d.substr(u,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},C2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},x2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function A2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const k2=new RegExp("^-?(0*)\\d{1,10}$"),R2=-2147483648,P2=2147483647,V0=function(t){if(k2.test(t)){const e=Number(t);if(e>=R2&&e<=P2)return e}return null},co=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ht("Exception was thrown by user callback.",n),e},Math.floor(0))}},N2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ua=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class b2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ht(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(St("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ht(e)}}class Du{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Du.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="5",oC="v",aC="s",lC="r",uC="f",cC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hC="ls",dC="p",gp="ac",fC="websocket",pC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=yi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&yi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function O2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function gC(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===fC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===pC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);O2(t)&&(n.ns=t.namespace);const i=[];return Kt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(){this.counters_={}}incrementCounter(e,n=1){pr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return SR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd={},Fd={};function Lg(t){const e=t.toString();return jd[e]||(jd[e]=new L2),jd[e]}function M2(t,e){const n=t.toString();return Fd[n]||(Fd[n]=e()),Fd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&co(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="start",j2="close",F2="pLPCommand",U2="pRTLPCB",_C="id",yC="pw",vC="ser",z2="cb",B2="seg",$2="ts",W2="d",q2="dframe",wC=1870,EC=30,G2=wC-EC,H2=25e3,K2=3e4;class ms{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_l(e),this.stats_=Lg(n),this.urlFn=u=>(this.appCheckToken&&(u[gp]=this.appCheckToken),gC(n,pC,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new V2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(K2)),I2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mg((...s)=>{const[o,a,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===j0)this.id=a,this.password=u;else if(o===j2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[j0]="t",r[vC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[z2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[oC]=Og,this.transportSessionId&&(r[aC]=this.transportSessionId),this.lastSessionId&&(r[hC]=this.lastSessionId),this.applicationId&&(r[dC]=this.applicationId),this.appCheckToken&&(r[gp]=this.appCheckToken),typeof location<"u"&&location.hostname&&cC.test(location.hostname)&&(r[lC]=uC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ms.forceAllow_=!0}static forceDisallow(){ms.forceDisallow_=!0}static isAvailable(){return ms.forceAllow_?!0:!ms.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!C2()&&!x2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=UT(n),i=iC(r,G2);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[q2]="t",r[_C]=e,r[yC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Mg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=w2(),window[F2+this.uniqueCallbackIdentifier]=e,window[U2+this.uniqueCallbackIdentifier]=n,this.myIFrame=Mg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){St("frame writing exception"),a.stack&&St(a.stack),St(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||St("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_C]=this.myID,e[yC]=this.myPW,e[vC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+EC+r.length<=wC;){const o=this.pendingSegs.shift();r=r+"&"+B2+i+"="+o.seg+"&"+$2+i+"="+o.ts+"&"+W2+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(H2)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{St("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=16384,Y2=45e3;let Ec=null;typeof MozWebSocket<"u"?Ec=MozWebSocket:typeof WebSocket<"u"&&(Ec=WebSocket);class gn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_l(this.connId),this.stats_=Lg(n),this.connURL=gn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[oC]=Og,typeof location<"u"&&location.hostname&&cC.test(location.hostname)&&(o[lC]=uC),n&&(o[aC]=n),r&&(o[hC]=r),i&&(o[gp]=i),s&&(o[dC]=s),gC(e,fC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,yi.set("previous_websocket_failure",!0);try{let r;OR(),this.mySock=new Ec(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){gn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ec!==null&&!gn.forceDisallow_}static previouslyFailed(){return yi.isInMemoryStorage||yi.get("previous_websocket_failure")===!0}markConnectionHealthy(){yi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Pa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=iC(n,Q2);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Y2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gn.responsesRequiredToBeHealthy=2;gn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ms,gn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=gn&&gn.isAvailable();let r=n&&!gn.previouslyFailed();if(e.webSocketOnly&&(n||Ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[gn];else{const i=this.transports_=[];for(const s of Wa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Wa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=6e4,J2=5e3,Z2=10*1024,eL=100*1024,Ud="t",F0="d",tL="s",U0="r",nL="e",z0="o",B0="a",$0="n",W0="p",rL="h";class iL{constructor(e,n,r,i,s,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_l("c:"+this.id+":"),this.transportManager_=new Wa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ua(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Z2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ud in e){const n=e[Ud];n===B0?this.upgradeIfSecondaryHealthy_():n===U0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===z0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Vo("t",e),r=Vo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:W0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:B0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Vo("t",e),r=Vo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Vo(Ud,e);if(F0 in e){const r=e[F0];if(n===rL){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===$0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tL?this.onConnectionShutdown_(r):n===U0?this.onReset_(r):n===nL?mp("Server Error: "+r):n===z0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Og!==r&&Ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ua(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(X2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ua(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(J2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:W0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(yi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends IC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Tc}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=32,G0=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new Te("")}function oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Yr(t){return t.pieces_.length-t.pieceNum_}function Ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Te(t.pieces_,e)}function SC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sL(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function CC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function xC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Te(e,0)}function Qe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Te(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function zt(t,e){const n=oe(t),r=oe(e);if(n===null)return e;if(n===r)return zt(Ie(t),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Vg(t,e){if(Yr(t)!==Yr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function _n(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Yr(t)>Yr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class oL{constructor(e,n){this.errorPrefix_=n,this.parts_=CC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Zc(this.parts_[r]);AC(this)}}function aL(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Zc(e),AC(t)}function lL(t){const e=t.parts_.pop();t.byteLength_-=Zc(e),t.parts_.length>0&&(t.byteLength_-=1)}function AC(t){if(t.byteLength_>G0)throw new Error(t.errorPrefix_+"has a key path longer than "+G0+" bytes ("+t.byteLength_+").");if(t.parts_.length>q0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+q0+") or object contains a cycle "+di(t))}function di(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends IC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new jg}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=1e3,uL=60*5*1e3,H0=30*1e3,cL=1.3,hL=3e4,dL="server_kill",K0=3;class er extends TC{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=er.nextPersistentConnectionId_++,this.log_=_l("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=jo,this.maxReconnectDelay_=uL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Tc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(rt(s)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Jc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;er.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pr(e,"w")){const r=Vs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||BR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=H0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mp("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hL&&(this.reconnectDelay_=jo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+er.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(p){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(p)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?St("getToken() completed but was canceled"):(St("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,a=new iL(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Ht(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(dL)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Ht(p),u())}}}interrupt(e){St("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){St("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wf(this.interruptReasons_)&&(this.reconnectDelay_=jo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Dg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Te(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){St("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=K0&&(this.reconnectDelay_=H0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){St("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=K0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+eC.replace(/\./g,"-")]=1,Sm()?e["framework.cordova"]=1:HT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tc.getInstance().currentlyOnline();return Wf(this.interruptReasons_)&&e}}er.nextPersistentConnectionId_=0;er.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ae(Hs,e),i=new ae(Hs,n);return this.compare(r,i)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let au;class kC extends Sh{static get __EMPTY_NODE(){return au}static set __EMPTY_NODE(e){au=e}compare(e,n){return uo(e.name,n.name)}isDefinedOn(e){throw Zs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(Mi,au)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,au)}toString(){return".key"}}const ks=new kC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??tt.RED,this.left=i??Bt.EMPTY_NODE,this.right=s??Bt.EMPTY_NODE}copy(e,n,r,i,s){return new tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Bt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class fL{copy(e,n,r,i,s){return this}insert(e,n,r){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Bt{constructor(e,n=Bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new Bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new lu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new lu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new lu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new lu(this.root_,null,this.comparator_,!0,e)}}Bt.EMPTY_NODE=new fL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(t,e){return uo(t.name,e.name)}function Fg(t,e){return uo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _p;function mL(t){_p=t}const RC=function(t){return typeof t=="number"?"number:"+sC(t):"string:"+t},PC=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pr(e,".sv"),"Priority must be a string or number.")}else $(t===_p||t.isEmpty(),"priority of unexpected type.");$(t===_p||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q0;class Je{constructor(e,n=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),PC(this.priorityNode_)}static set __childrenNodeConstructor(e){Q0=e}static get __childrenNodeConstructor(){return Q0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:oe(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=oe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||Yr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+RC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=sC(this.value_):e+=this.value_,this.lazyHash_=nC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Je.VALUE_TYPE_ORDER.indexOf(n),s=Je.VALUE_TYPE_ORDER.indexOf(r);return $(i>=0,"Unknown leaf type: "+n),$(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NC,bC;function gL(t){NC=t}function _L(t){bC=t}class yL extends Sh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?uo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(Mi,new Je("[PRIORITY-POST]",bC))}makePost(e,n){const r=NC(e);return new ae(n,new Je("[PRIORITY-POST]",r))}toString(){return".priority"}}const Fe=new yL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vL=Math.log(2);class wL{constructor(e){const n=s=>parseInt(Math.log(s)/vL,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ic=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let p,g;if(d===0)return null;if(d===1)return p=t[u],g=n?n(p):p,new tt(g,p.node,tt.BLACK,null,null);{const v=parseInt(d/2,10)+u,T=i(u,v),k=i(v+1,c);return p=t[v],g=n?n(p):p,new tt(g,p.node,tt.BLACK,T,k)}},s=function(u){let c=null,d=null,p=t.length;const g=function(T,k){const N=p-T,S=p;p-=T;const w=i(N+1,S),C=t[N],D=n?n(C):C;v(new tt(D,C.node,k,null,w))},v=function(T){c?(c.left=T,c=T):(d=T,c=T)};for(let T=0;T<u.count;++T){const k=u.nextBitIsOne(),N=Math.pow(2,u.count-(T+1));k?g(N,tt.BLACK):(g(N,tt.BLACK),g(N,tt.RED))}return d},o=new wL(t.length),a=s(o);return new Bt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zd;const Ji={};class Jn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return $(Ji&&Fe,"ChildrenNode.ts has not been loaded"),zd=zd||new Jn({".priority":Ji},{".priority":Fe}),zd}get(e){const n=Vs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Bt?n:null}hasIndex(e){return pr(this.indexSet_,e.toString())}addIndex(e,n){$(e!==ks,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ae.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ic(r,e.getCompare()):a=Ji;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new Jn(d,c)}addToIndexes(e,n){const r=oc(this.indexes_,(i,s)=>{const o=Vs(this.indexSet_,s);if($(o,"Missing index implementation for "+s),i===Ji)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(ae.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Ic(a,o.getCompare())}else return Ji;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new ae(e.name,a))),u.insert(e,e.node)}});return new Jn(r,this.indexSet_)}removeFromIndexes(e,n){const r=oc(this.indexes_,i=>{if(i===Ji)return i;{const s=n.get(e.name);return s?i.remove(new ae(e.name,s)):i}});return new Jn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo;class Z{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&PC(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Fo||(Fo=new Z(new Bt(Fg),null,Jn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fo}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fo:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ae(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Fo:this.priorityNode_;return new Z(i,o,s)}}updateChild(e,n){const r=oe(e);if(r===null)return n;{$(oe(e)!==".priority"||Yr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ie(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Fe,(o,a)=>{n[o]=a.val(e),r++,s&&Z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+RC(this.getPriority().val())+":"),this.forEachChild(Fe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":nC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ae(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ae.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yl?-1:0}withIndex(e){if(e===ks||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ks||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Fe),i=n.getIterator(Fe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ks?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class EL extends Z{constructor(){super(new Bt(Fg),Z.EMPTY_NODE,Jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const yl=new EL;Object.defineProperties(ae,{MIN:{value:new ae(Hs,Z.EMPTY_NODE)},MAX:{value:new ae(Mi,yl)}});kC.__EMPTY_NODE=Z.EMPTY_NODE;Je.__childrenNodeConstructor=Z;mL(yl);_L(yl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL=!0;function ut(t,e=null){if(t===null)return Z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Je(n,ut(e))}if(!(t instanceof Array)&&TL){const n=[];let r=!1;if(Kt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=ut(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ae(o,u)))}}),n.length===0)return Z.EMPTY_NODE;const s=Ic(n,pL,o=>o.name,Fg);if(r){const o=Ic(n,Fe.getCompare());return new Z(s,ut(e),new Jn({".priority":o},{".priority":Fe}))}else return new Z(s,ut(e),Jn.Default)}else{let n=Z.EMPTY_NODE;return Kt(t,(r,i)=>{if(pr(t,r)&&r.substring(0,1)!=="."){const s=ut(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ut(e))}}gL(ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL extends Sh{constructor(e){super(),this.indexPath_=e,$(!le(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?uo(e.name,n.name):s}makePost(e,n){const r=ut(e),i=Z.EMPTY_NODE.updateChild(this.indexPath_,r);return new ae(n,i)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,yl);return new ae(Mi,e)}toString(){return CC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL extends Sh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?uo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const r=ut(e);return new ae(n,r)}toString(){return".value"}}const CL=new SL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t){return{type:"value",snapshotNode:t}}function Ks(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function qa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ga(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xL(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(qa(n,a)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ks(n,r)):o.trackChildChange(Ga(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Fe,(i,s)=>{n.hasChild(i)||r.trackChildChange(qa(i,s))}),n.isLeafNode()||n.forEachChild(Fe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ga(i,s,o))}else r.trackChildChange(Ks(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.indexedFilter_=new Ug(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ha.getStartPost_(e),this.endPost_=Ha.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ae(n,r))||(r=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Z.EMPTY_NODE);const s=this;return n.forEachChild(Fe,(o,a)=>{s.matches(new ae(o,a))||(i=i.updateImmediateChild(o,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ha(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ae(n,r))||(r=Z.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Z.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Z.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,v)=>p(v,g)}else o=this.index_.getCompare();const a=e;$(a.numChildren()===this.limit_,"");const u=new ae(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(u);if(a.hasChild(n)){const p=a.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,c,this.reverse_);for(;g!=null&&(g.name===n||a.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const v=g==null?1:o(g,u);if(d&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(Ga(n,r,p)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(qa(n,p));const k=a.updateImmediateChild(n,Z.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(s!=null&&s.trackChildChange(Ks(g.name,g.node)),k.updateImmediateChild(g.name,g.node)):k}}else return r.isEmpty()?e:d&&o(c,u)>=0?(s!=null&&(s.trackChildChange(qa(c.name,c.node)),s.trackChildChange(Ks(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,Z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hs}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const e=new zg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kL(t){return t.loadsAllData()?new Ug(t.getIndex()):t.hasLimit()?new AL(t):new Ha(t)}function Y0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Fe?n="$priority":t.index_===CL?n="$value":t.index_===ks?n="$key":($(t.index_ instanceof IL,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=rt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=rt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+rt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=rt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function X0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Fe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc extends TC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=_l("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Sc.getListenId_(e,r),a={};this.listens_[o]=a;const u=Y0(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let p=d;if(c===404&&(p=null,c=null),c===null&&this.onDataUpdate_(s,p,!1,r),Vs(this.listens_,o)===a){let g;c?c===401?g="permission_denied":g="rest_error:"+c:g="ok",i(g,null)}})}unlisten(e,n){const r=Sc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Y0(e._queryParams),r=e._path.toString(),i=new Jc;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+eo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Pa(a.responseText)}catch{Ht("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Ht("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){return{value:null,children:new Map}}function OC(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=oe(e);t.children.has(r)||t.children.set(r,Cc());const i=t.children.get(r);e=Ie(e),OC(i,e,n)}}function yp(t,e,n){t.value!==null?n(e,t.value):PL(t,(r,i)=>{const s=new Te(e.toString()+"/"+r);yp(i,s,n)})}function PL(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Kt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=10*1e3,bL=30*1e3,DL=5*60*1e3;class OL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new NL(e);const r=J0+(bL-J0)*Math.random();ua(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Kt(e,(i,s)=>{s>0&&pr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ua(this.reportStats_.bind(this),Math.floor(Math.random()*2*DL))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yn||(yn={}));function LC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Bg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $g(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=yn.ACK_USER_WRITE,this.source=LC()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new xc(ye(),n,this.revert)}}else return $(oe(this.path)===e,"operationForChild called for unrelated child."),new xc(Ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n){this.source=e,this.path=n,this.type=yn.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new Ka(this.source,ye()):new Ka(this.source,Ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=yn.OVERWRITE}operationForChild(e){return le(this.path)?new Vi(this.source,ye(),this.snap.getImmediateChild(e)):new Vi(this.source,Ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=yn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new Vi(this.source,ye(),n.value):new Qa(this.source,ye(),n)}else return $(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qa(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ML(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(xL(o.childName,o.snapshotNode))}),Uo(t,i,"child_removed",e,r,n),Uo(t,i,"child_added",e,r,n),Uo(t,i,"child_moved",s,r,n),Uo(t,i,"child_changed",e,r,n),Uo(t,i,"value",e,r,n),i}function Uo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>jL(t,a,u)),o.forEach(a=>{const u=VL(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function VL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function jL(t,e,n){if(e.childName==null||n.childName==null)throw Zs("Should only compare child_ events.");const r=new ae(e.childName,e.snapshotNode),i=new ae(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t,e){return{eventCache:t,serverCache:e}}function ca(t,e,n,r){return Ch(new ji(e,n,r),t.serverCache)}function MC(t,e,n,r){return Ch(t.eventCache,new ji(e,n,r))}function vp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Fi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bd;const FL=()=>(Bd||(Bd=new Bt(S2)),Bd);class Re{constructor(e,n=FL()){this.value=e,this.children=n}static fromObject(e){let n=new Re(null);return Kt(e,(r,i)=>{n=n.set(new Te(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(le(e))return null;{const r=oe(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ie(e),n);return s!=null?{path:Qe(new Te(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=oe(e),r=this.children.get(n);return r!==null?r.subtree(Ie(e)):new Re(null)}}set(e,n){if(le(e))return new Re(n,this.children);{const r=oe(e),s=(this.children.get(r)||new Re(null)).set(Ie(e),n),o=this.children.insert(r,s);return new Re(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=oe(e),r=this.children.get(n);if(r){const i=r.remove(Ie(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Re(null):new Re(this.value,s)}else return this}}get(e){if(le(e))return this.value;{const n=oe(e),r=this.children.get(n);return r?r.get(Ie(e)):null}}setTree(e,n){if(le(e))return n;{const r=oe(e),s=(this.children.get(r)||new Re(null)).setTree(Ie(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Re(this.value,o)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Qe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(le(e))return null;{const s=oe(e),o=this.children.get(s);return o?o.findOnPath_(Ie(e),Qe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,r){if(le(e))return this;{this.value&&r(n,this.value);const i=oe(e),s=this.children.get(i);return s?s.foreachOnPath_(Ie(e),Qe(n,i),r):new Re(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Qe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.writeTree_=e}static empty(){return new In(new Re(null))}}function ha(t,e,n){if(le(e))return new In(new Re(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=zt(i,e);return s=s.updateChild(o,n),new In(t.writeTree_.set(i,s))}else{const i=new Re(n),s=t.writeTree_.setTree(e,i);return new In(s)}}}function Z0(t,e,n){let r=t;return Kt(n,(i,s)=>{r=ha(r,Qe(e,i),s)}),r}function ew(t,e){if(le(e))return In.empty();{const n=t.writeTree_.setTree(e,new Re(null));return new In(n)}}function wp(t,e){return Gi(t,e)!=null}function Gi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(zt(n.path,e)):null}function tw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(r,i)=>{e.push(new ae(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ae(r,i.value))}),e}function $r(t,e){if(le(e))return t;{const n=Gi(t,e);return n!=null?new In(new Re(n)):new In(t.writeTree_.subtree(e))}}function Ep(t){return t.writeTree_.isEmpty()}function Qs(t,e){return VC(ye(),t.writeTree_,e)}function VC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?($(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=VC(Qe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Qe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t,e){return zC(e,t)}function UL(t,e,n,r,i){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ha(t.visibleWrites,e,n)),t.lastWriteId=r}function zL(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function BL(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$L(a,r.path)?i=!1:_n(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return WL(t),!0;if(r.snap)t.visibleWrites=ew(t.visibleWrites,r.path);else{const a=r.children;Kt(a,u=>{t.visibleWrites=ew(t.visibleWrites,Qe(r.path,u))})}return!0}else return!1}function $L(t,e){if(t.snap)return _n(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&_n(Qe(t.path,n),e))return!0;return!1}function WL(t){t.visibleWrites=jC(t.allWrites,qL,ye()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function qL(t){return t.visible}function jC(t,e,n){let r=In.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)_n(n,o)?(a=zt(n,o),r=ha(r,a,s.snap)):_n(o,n)&&(a=zt(o,n),r=ha(r,ye(),s.snap.getChild(a)));else if(s.children){if(_n(n,o))a=zt(n,o),r=Z0(r,a,s.children);else if(_n(o,n))if(a=zt(o,n),le(a))r=Z0(r,ye(),s.children);else{const u=Vs(s.children,oe(a));if(u){const c=u.getChild(Ie(a));r=ha(r,ye(),c)}}}else throw Zs("WriteRecord should have .snap or .children")}}return r}function FC(t,e,n,r,i){if(!r&&!i){const s=Gi(t.visibleWrites,e);if(s!=null)return s;{const o=$r(t.visibleWrites,e);if(Ep(o))return n;if(n==null&&!wp(o,ye()))return null;{const a=n||Z.EMPTY_NODE;return Qs(o,a)}}}else{const s=$r(t.visibleWrites,e);if(!i&&Ep(s))return n;if(!i&&n==null&&!wp(s,ye()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(_n(c.path,e)||_n(e,c.path))},a=jC(t.allWrites,o,e),u=n||Z.EMPTY_NODE;return Qs(a,u)}}}function GL(t,e,n){let r=Z.EMPTY_NODE;const i=Gi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Fe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=$r(t.visibleWrites,e);return n.forEachChild(Fe,(o,a)=>{const u=Qs($r(s,new Te(o)),a);r=r.updateImmediateChild(o,u)}),tw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=$r(t.visibleWrites,e);return tw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function HL(t,e,n,r,i){$(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Qe(e,n);if(wp(t.visibleWrites,s))return null;{const o=$r(t.visibleWrites,s);return Ep(o)?i.getChild(n):Qs(o,i.getChild(n))}}function KL(t,e,n,r){const i=Qe(e,n),s=Gi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=$r(t.visibleWrites,i);return Qs(o,r.getNode().getImmediateChild(n))}else return null}function QL(t,e){return Gi(t.visibleWrites,e)}function YL(t,e,n,r,i,s,o){let a;const u=$r(t.visibleWrites,e),c=Gi(u,ye());if(c!=null)a=c;else if(n!=null)a=Qs(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],p=o.getCompare(),g=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=g.getNext();for(;v&&d.length<i;)p(v,r)!==0&&d.push(v),v=g.getNext();return d}else return[]}function XL(){return{visibleWrites:In.empty(),allWrites:[],lastWriteId:-1}}function Ac(t,e,n,r){return FC(t.writeTree,t.treePath,e,n,r)}function qg(t,e){return GL(t.writeTree,t.treePath,e)}function nw(t,e,n,r){return HL(t.writeTree,t.treePath,e,n,r)}function kc(t,e){return QL(t.writeTree,Qe(t.treePath,e))}function JL(t,e,n,r,i,s){return YL(t.writeTree,t.treePath,e,n,r,i,s)}function Gg(t,e,n){return KL(t.writeTree,t.treePath,e,n)}function UC(t,e){return zC(Qe(t.treePath,e),t.writeTree)}function zC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ga(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,qa(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ks(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ga(r,e.snapshotNode,i.oldSnap));else throw Zs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const BC=new eM;class Hg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ji(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fi(this.viewCache_),s=JL(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(t){return{filter:t}}function nM(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function rM(t,e,n,r,i){const s=new ZL;let o,a;if(n.type===yn.OVERWRITE){const c=n;c.source.fromUser?o=Tp(t,e,c.path,c.snap,r,i,s):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!le(c.path),o=Rc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===yn.MERGE){const c=n;c.source.fromUser?o=sM(t,e,c.path,c.children,r,i,s):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ip(t,e,c.path,c.children,r,i,a,s))}else if(n.type===yn.ACK_USER_WRITE){const c=n;c.revert?o=lM(t,e,c.path,r,i,s):o=oM(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===yn.LISTEN_COMPLETE)o=aM(t,e,n.path,r,s);else throw Zs("Unknown operation type: "+n.type);const u=s.getChanges();return iM(e,o,u),{viewCache:o,changes:u}}function iM(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=vp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(DC(vp(e)))}}function $C(t,e,n,r,i,s){const o=e.eventCache;if(kc(r,n)!=null)return e;{let a,u;if(le(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Fi(e),d=c instanceof Z?c:Z.EMPTY_NODE,p=qg(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const c=Ac(r,Fi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=oe(n);if(c===".priority"){$(Yr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const p=nw(r,n,d,u);p!=null?a=t.filter.updatePriority(d,p):a=o.getNode()}else{const d=Ie(n);let p;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const g=nw(r,n,o.getNode(),u);g!=null?p=o.getNode().getImmediateChild(c).updateChild(d,g):p=o.getNode().getImmediateChild(c)}else p=Gg(r,c,e.serverCache);p!=null?a=t.filter.updateChild(o.getNode(),c,p,d,i,s):a=o.getNode()}}return ca(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function Rc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(le(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const v=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),v,null)}else{const v=oe(n);if(!u.isCompleteForPath(n)&&Yr(n)>1)return e;const T=Ie(n),N=u.getNode().getImmediateChild(v).updateChild(T,r);v===".priority"?c=d.updatePriority(u.getNode(),N):c=d.updateChild(u.getNode(),v,N,T,BC,null)}const p=MC(e,c,u.isFullyInitialized()||le(n),d.filtersNodes()),g=new Hg(i,p,s);return $C(t,p,n,i,g,a)}function Tp(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const d=new Hg(i,e,s);if(le(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=ca(e,c,!0,t.filter.filtersNodes());else{const p=oe(n);if(p===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=ca(e,c,a.isFullyInitialized(),a.isFiltered());else{const g=Ie(n),v=a.getNode().getImmediateChild(p);let T;if(le(g))T=r;else{const k=d.getCompleteChild(p);k!=null?SC(g)===".priority"&&k.getChild(xC(g)).isEmpty()?T=k:T=k.updateChild(g,r):T=Z.EMPTY_NODE}if(v.equals(T))u=e;else{const k=t.filter.updateChild(a.getNode(),p,T,g,d,o);u=ca(e,k,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function rw(t,e){return t.eventCache.isCompleteForChild(e)}function sM(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const d=Qe(n,u);rw(e,oe(d))&&(a=Tp(t,a,d,c,i,s,o))}),r.foreach((u,c)=>{const d=Qe(n,u);rw(e,oe(d))||(a=Tp(t,a,d,c,i,s,o))}),a}function iw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ip(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;le(n)?c=r:c=new Re(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((p,g)=>{if(d.hasChild(p)){const v=e.serverCache.getNode().getImmediateChild(p),T=iw(t,v,g);u=Rc(t,u,new Te(p),T,i,s,o,a)}}),c.children.inorderTraversal((p,g)=>{const v=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!d.hasChild(p)&&!v){const T=e.serverCache.getNode().getImmediateChild(p),k=iw(t,T,g);u=Rc(t,u,new Te(p),k,i,s,o,a)}}),u}function oM(t,e,n,r,i,s,o){if(kc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(le(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Rc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(le(n)){let c=new Re(null);return u.getNode().forEachChild(ks,(d,p)=>{c=c.set(new Te(d),p)}),Ip(t,e,n,c,i,s,a,o)}else return e}else{let c=new Re(null);return r.foreach((d,p)=>{const g=Qe(n,d);u.isCompleteForPath(g)&&(c=c.set(d,u.getNode().getChild(g)))}),Ip(t,e,n,c,i,s,a,o)}}function aM(t,e,n,r,i){const s=e.serverCache,o=MC(e,s.getNode(),s.isFullyInitialized()||le(n),s.isFiltered());return $C(t,o,n,r,BC,i)}function lM(t,e,n,r,i,s){let o;if(kc(r,n)!=null)return e;{const a=new Hg(r,e,i),u=e.eventCache.getNode();let c;if(le(n)||oe(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ac(r,Fi(e));else{const p=e.serverCache.getNode();$(p instanceof Z,"serverChildren would be complete if leaf node"),d=qg(r,p)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=oe(n);let p=Gg(r,d,e.serverCache);p==null&&e.serverCache.isCompleteForChild(d)&&(p=u.getImmediateChild(d)),p!=null?c=t.filter.updateChild(u,d,p,Ie(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,Z.EMPTY_NODE,Ie(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ac(r,Fi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||kc(r,ye())!=null,ca(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Ug(r.getIndex()),s=kL(r);this.processor_=tM(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(Z.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Z.EMPTY_NODE,a.getNode(),null),d=new ji(u,o.isFullyInitialized(),i.filtersNodes()),p=new ji(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ch(p,d),this.eventGenerator_=new LL(this.query_)}get query(){return this.query_}}function cM(t){return t.viewCache_.serverCache.getNode()}function hM(t,e){const n=Fi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function sw(t){return t.eventRegistrations_.length===0}function dM(t,e){t.eventRegistrations_.push(e)}function ow(t,e,n){const r=[];if(n){$(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function aw(t,e,n,r){e.type===yn.MERGE&&e.source.queryId!==null&&($(Fi(t.viewCache_),"We should always have a full cache before handling merges"),$(vp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=rM(t.processor_,i,e,n,r);return nM(t.processor_,s.viewCache),$(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,WC(t,s.changes,s.viewCache.eventCache.getNode(),null)}function fM(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Fe,(s,o)=>{r.push(Ks(s,o))}),n.isFullyInitialized()&&r.push(DC(n.getNode())),WC(t,r,n.getNode(),e)}function WC(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ML(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc;class pM{constructor(){this.views=new Map}}function mM(t){$(!Pc,"__referenceConstructor has already been defined"),Pc=t}function gM(){return $(Pc,"Reference.ts has not been loaded"),Pc}function _M(t){return t.views.size===0}function Kg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return $(s!=null,"SyncTree gave us an op for an invalid query."),aw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(aw(o,e,n,r));return s}}function yM(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ac(n,i?r:null),u=!1;a?u=!0:r instanceof Z?(a=qg(n,r),u=!1):(a=Z.EMPTY_NODE,u=!1);const c=Ch(new ji(a,u,!1),new ji(r,i,!1));return new uM(e,c)}return o}function vM(t,e,n,r,i,s){const o=yM(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),dM(o,n),fM(o,n)}function wM(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Xr(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(ow(c,n,r)),sw(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(ow(u,n,r)),sw(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!Xr(t)&&s.push(new(gM())(e._repo,e._path)),{removed:s,events:o}}function qC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rs(t,e){let n=null;for(const r of t.views.values())n=n||hM(r,e);return n}function GC(t,e){if(e._queryParams.loadsAllData())return xh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function HC(t,e){return GC(t,e)!=null}function Xr(t){return xh(t)!=null}function xh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc;function EM(t){$(!Nc,"__referenceConstructor has already been defined"),Nc=t}function TM(){return $(Nc,"Reference.ts has not been loaded"),Nc}let IM=1;class lw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=XL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function KC(t,e,n,r,i){return UL(t.pendingWriteTree_,e,n,r,i),i?vl(t,new Vi(LC(),e,n)):[]}function vi(t,e,n=!1){const r=zL(t.pendingWriteTree_,e);if(BL(t.pendingWriteTree_,e)){let s=new Re(null);return r.snap!=null?s=s.set(ye(),!0):Kt(r.children,o=>{s=s.set(new Te(o),!0)}),vl(t,new xc(r.path,s,n))}else return[]}function Ah(t,e,n){return vl(t,new Vi(Bg(),e,n))}function SM(t,e,n){const r=Re.fromObject(n);return vl(t,new Qa(Bg(),e,r))}function CM(t,e){return vl(t,new Ka(Bg(),e))}function xM(t,e,n){const r=Yg(t,n);if(r){const i=Xg(r),s=i.path,o=i.queryId,a=zt(s,e),u=new Ka($g(o),a);return Jg(t,s,u)}else return[]}function Sp(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||HC(o,e))){const u=wM(o,e,n,r);_M(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const d=c.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(s,(g,v)=>Xr(v));if(d&&!p){const g=t.syncPointTree_.subtree(s);if(!g.isEmpty()){const v=RM(g);for(let T=0;T<v.length;++T){const k=v[T],N=k.query,S=XC(t,k);t.listenProvider_.startListening(da(N),bc(t,N),S.hashFn,S.onComplete)}}}!p&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(da(e),null):c.forEach(g=>{const v=t.queryToTagMap.get(kh(g));t.listenProvider_.stopListening(da(g),v)}))}PM(t,c)}return a}function AM(t,e,n,r){const i=Yg(t,r);if(i!=null){const s=Xg(i),o=s.path,a=s.queryId,u=zt(o,e),c=new Vi($g(a),u,n);return Jg(t,o,c)}else return[]}function kM(t,e,n,r){const i=Yg(t,r);if(i){const s=Xg(i),o=s.path,a=s.queryId,u=zt(o,e),c=Re.fromObject(n),d=new Qa($g(a),u,c);return Jg(t,o,d)}else return[]}function uw(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,v)=>{const T=zt(g,i);s=s||Rs(v,T),o=o||Xr(v)});let a=t.syncPointTree_.get(i);a?(o=o||Xr(a),s=s||Rs(a,ye())):(a=new pM,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=Z.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,T)=>{const k=Rs(T,ye());k&&(s=s.updateImmediateChild(v,k))}));const c=HC(a,e);if(!c&&!e._queryParams.loadsAllData()){const g=kh(e);$(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const v=NM();t.queryToTagMap.set(g,v),t.tagToQueryMap.set(v,g)}const d=Wg(t.pendingWriteTree_,i);let p=vM(a,e,n,d,s,u);if(!c&&!o&&!r){const g=GC(a,e);p=p.concat(bM(t,e,g))}return p}function Qg(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=zt(o,e),c=Rs(a,u);if(c)return c});return FC(i,e,s,n,!0)}function vl(t,e){return QC(e,t.syncPointTree_,null,Wg(t.pendingWriteTree_,ye()))}function QC(t,e,n,r){if(le(t.path))return YC(t,e,n,r);{const i=e.get(ye());n==null&&i!=null&&(n=Rs(i,ye()));let s=[];const o=oe(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=UC(r,o);s=s.concat(QC(a,u,c,d))}return i&&(s=s.concat(Kg(i,t,r,n))),s}}function YC(t,e,n,r){const i=e.get(ye());n==null&&i!=null&&(n=Rs(i,ye()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=UC(r,o),d=t.operationForChild(o);d&&(s=s.concat(YC(d,a,u,c)))}),i&&(s=s.concat(Kg(i,t,r,n))),s}function XC(t,e){const n=e.query,r=bc(t,n);return{hashFn:()=>(cM(e)||Z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?xM(t,n._path,r):CM(t,n._path);{const s=A2(i,n);return Sp(t,n,null,s)}}}}function bc(t,e){const n=kh(e);return t.queryToTagMap.get(n)}function kh(t){return t._path.toString()+"$"+t._queryIdentifier}function Yg(t,e){return t.tagToQueryMap.get(e)}function Xg(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Te(t.substr(0,e))}}function Jg(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const i=Wg(t.pendingWriteTree_,e);return Kg(r,n,i,null)}function RM(t){return t.fold((e,n,r)=>{if(n&&Xr(n))return[xh(n)];{let i=[];return n&&(i=qC(n)),Kt(r,(s,o)=>{i=i.concat(o)}),i}})}function da(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(TM())(t._repo,t._path):t}function PM(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=kh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function NM(){return IM++}function bM(t,e,n){const r=e._path,i=bc(t,e),s=XC(t,n),o=t.listenProvider_.startListening(da(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)$(!Xr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,d,p)=>{if(!le(c)&&d&&Xr(d))return[xh(d).query];{let g=[];return d&&(g=g.concat(qC(d).map(v=>v.query))),Kt(p,(v,T)=>{g=g.concat(T)}),g}});for(let c=0;c<u.length;++c){const d=u[c];t.listenProvider_.stopListening(da(d),bc(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zg(n)}node(){return this.node_}}class e_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qe(this.path_,e);return new e_(this.syncTree_,n)}node(){return Qg(this.syncTree_,this.path_)}}const DM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},cw=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return OM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return LM(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},OM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},LM=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const i=e.node();if($(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},MM=function(t,e,n,r){return t_(e,new e_(n,t),r)},JC=function(t,e,n){return t_(t,new Zg(e),n)};function t_(t,e,n){const r=t.getPriority().val(),i=cw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=cw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Je(a,ut(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Je(i))),o.forEachChild(Fe,(a,u)=>{const c=t_(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function r_(t,e){let n=e instanceof Te?e:new Te(e),r=t,i=oe(n);for(;i!==null;){const s=Vs(r.node.children,i)||{children:{},childCount:0};r=new n_(i,r,s),n=Ie(n),i=oe(n)}return r}function ho(t){return t.node.value}function ZC(t,e){t.node.value=e,Cp(t)}function ex(t){return t.node.childCount>0}function VM(t){return ho(t)===void 0&&!ex(t)}function Rh(t,e){Kt(t.node.children,(n,r)=>{e(new n_(n,t,r))})}function tx(t,e,n,r){n&&e(t),Rh(t,i=>{tx(i,e,!0)})}function jM(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function wl(t){return new Te(t.parent===null?t.name:wl(t.parent)+"/"+t.name)}function Cp(t){t.parent!==null&&FM(t.parent,t.name,t)}function FM(t,e,n){const r=VM(n),i=pr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Cp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Cp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM=/[\[\].#$\/\u0000-\u001F\u007F]/,zM=/[\[\].#$\u0000-\u001F\u007F]/,$d=10*1024*1024,nx=function(t){return typeof t=="string"&&t.length!==0&&!UM.test(t)},rx=function(t){return typeof t=="string"&&t.length!==0&&!zM.test(t)},BM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),rx(t)},$M=function(t,e,n,r){i_(Cm(t,"value"),e,n)},i_=function(t,e,n){const r=n instanceof Te?new oL(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+di(r));if(typeof e=="function")throw new Error(t+"contains a function "+di(r)+" with contents = "+e.toString());if(rC(e))throw new Error(t+"contains "+e.toString()+" "+di(r));if(typeof e=="string"&&e.length>$d/3&&Zc(e)>$d)throw new Error(t+"contains a string greater than "+$d+" utf8 bytes "+di(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Kt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!nx(o)))throw new Error(t+" contains an invalid key ("+o+") "+di(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aL(r,o),i_(t,a,r),lL(r)}),i&&s)throw new Error(t+' contains ".value" child '+di(r)+" in addition to actual children.")}},ix=function(t,e,n,r){if(!rx(n))throw new Error(Cm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},WM=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ix(t,e,n)},qM=function(t,e){if(oe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},GM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nx(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!BM(n))throw new Error(Cm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function s_(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Vg(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function sx(t,e,n){s_(t,n),ox(t,r=>Vg(r,e))}function hr(t,e,n){s_(t,n),ox(t,r=>_n(r,e)||_n(e,r))}function ox(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(KM(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function KM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();la&&St("event: "+n.toString()),co(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM="repo_interrupt",YM=25;class XM{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new HM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Cc(),this.transactionQueueTree_=new n_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JM(t,e,n){if(t.stats_=Lg(t.repoInfo_),t.forceRestClient_||N2())t.server_=new Sc(t.repoInfo_,(r,i,s,o)=>{hw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>dw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new er(t.repoInfo_,e,(r,i,s,o)=>{hw(t,r,i,s,o)},r=>{dw(t,r)},r=>{eV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=M2(t.repoInfo_,()=>new OL(t.stats_,t.server_)),t.infoData_=new RL,t.infoSyncTree_=new lw({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Ah(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),a_(t,"connected",!1),t.serverSyncTree_=new lw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);hr(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function ZM(t){const n=t.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function o_(t){return DM({timestamp:ZM(t)})}function hw(t,e,n,r,i){t.dataUpdateCount++;const s=new Te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=oc(n,c=>ut(c));o=kM(t.serverSyncTree_,s,u,i)}else{const u=ut(n);o=AM(t.serverSyncTree_,s,u,i)}else if(r){const u=oc(n,c=>ut(c));o=SM(t.serverSyncTree_,s,u)}else{const u=ut(n);o=Ah(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Ph(t,s)),hr(t.eventQueue_,a,o)}function dw(t,e){a_(t,"connected",e),e===!1&&nV(t)}function eV(t,e){Kt(e,(n,r)=>{a_(t,n,r)})}function a_(t,e,n){const r=new Te("/.info/"+e),i=ut(n);t.infoData_.updateSnapshot(r,i);const s=Ah(t.infoSyncTree_,r,i);hr(t.eventQueue_,r,s)}function ax(t){return t.nextWriteId_++}function tV(t,e,n,r,i){l_(t,"set",{path:e.toString(),value:n,priority:r});const s=o_(t),o=ut(n,r),a=Qg(t.serverSyncTree_,e),u=JC(o,a,s),c=ax(t),d=KC(t.serverSyncTree_,e,u,c,!0);s_(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(g,v)=>{const T=g==="ok";T||Ht("set at "+e+" failed: "+g);const k=vi(t.serverSyncTree_,c,!T);hr(t.eventQueue_,e,k),sV(t,i,g,v)});const p=fx(t,e);Ph(t,p),hr(t.eventQueue_,p,[])}function nV(t){l_(t,"onDisconnectEvents");const e=o_(t),n=Cc();yp(t.onDisconnect_,ye(),(i,s)=>{const o=MM(i,s,t.serverSyncTree_,e);OC(n,i,o)});let r=[];yp(n,ye(),(i,s)=>{r=r.concat(Ah(t.serverSyncTree_,i,s));const o=fx(t,i);Ph(t,o)}),t.onDisconnect_=Cc(),hr(t.eventQueue_,ye(),r)}function rV(t,e,n){let r;oe(e._path)===".info"?r=uw(t.infoSyncTree_,e,n):r=uw(t.serverSyncTree_,e,n),sx(t.eventQueue_,e._path,r)}function lx(t,e,n){let r;oe(e._path)===".info"?r=Sp(t.infoSyncTree_,e,n):r=Sp(t.serverSyncTree_,e,n),sx(t.eventQueue_,e._path,r)}function iV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(QM)}function l_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),St(n,...e)}function sV(t,e,n,r){e&&co(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function ux(t,e,n){return Qg(t.serverSyncTree_,e,n)||Z.EMPTY_NODE}function u_(t,e=t.transactionQueueTree_){if(e||Nh(t,e),ho(e)){const n=hx(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&oV(t,wl(e),n)}else ex(e)&&Rh(e,n=>{u_(t,n)})}function oV(t,e,n){const r=n.map(c=>c.currentWriteId),i=ux(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];$(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const p=zt(e,d.path);s=s.updateChild(p,d.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{l_(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,d=d.concat(vi(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Nh(t,r_(t.transactionQueueTree_,e)),u_(t,t.transactionQueueTree_),hr(t.eventQueue_,e,d);for(let g=0;g<p.length;g++)co(p[g])}else{if(c==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Ht("transaction at "+u.toString()+" failed: "+c);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=c}Ph(t,e)}},o)}function Ph(t,e){const n=cx(t,e),r=wl(n),i=hx(t,n);return aV(t,i,r),r}function aV(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=zt(n,u.path);let d=!1,p;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,p=u.abortReason,i=i.concat(vi(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=YM)d=!0,p="maxretry",i=i.concat(vi(t.serverSyncTree_,u.currentWriteId,!0));else{const g=ux(t,u.path,o);u.currentInputSnapshot=g;const v=e[a].update(g.val());if(v!==void 0){i_("transaction failed: Data returned ",v,u.path);let T=ut(v);typeof v=="object"&&v!=null&&pr(v,".priority")||(T=T.updatePriority(g.getPriority()));const N=u.currentWriteId,S=o_(t),w=JC(T,g,S);u.currentOutputSnapshotRaw=T,u.currentOutputSnapshotResolved=w,u.currentWriteId=ax(t),o.splice(o.indexOf(N),1),i=i.concat(KC(t.serverSyncTree_,u.path,w,u.currentWriteId,u.applyLocally)),i=i.concat(vi(t.serverSyncTree_,N,!0))}else d=!0,p="nodata",i=i.concat(vi(t.serverSyncTree_,u.currentWriteId,!0))}hr(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(p==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(p),!1,null))))}Nh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)co(r[a]);u_(t,t.transactionQueueTree_)}function cx(t,e){let n,r=t.transactionQueueTree_;for(n=oe(e);n!==null&&ho(r)===void 0;)r=r_(r,n),e=Ie(e),n=oe(e);return r}function hx(t,e){const n=[];return dx(t,e,n),n.sort((r,i)=>r.order-i.order),n}function dx(t,e,n){const r=ho(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Rh(e,i=>{dx(t,i,n)})}function Nh(t,e){const n=ho(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ZC(e,n.length>0?n:void 0)}Rh(e,r=>{Nh(t,r)})}function fx(t,e){const n=wl(cx(t,e)),r=r_(t.transactionQueueTree_,e);return jM(r,i=>{Wd(t,i)}),Wd(t,r),tx(r,i=>{Wd(t,i)}),n}function Wd(t,e){const n=ho(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(vi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ZC(e,void 0):n.length=s+1,hr(t.eventQueue_,wl(e),i);for(let o=0;o<r.length;o++)co(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function uV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ht(`Invalid query segment '${n}' in query '${t}'`)}return e}const fw=function(t,e){const n=cV(t),r=n.namespace;n.domain==="firebase.com"&&cr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&cr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||T2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new mC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Te(n.pathString)}},cV=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(d,p)),d<p&&(i=lV(t.substring(d,p)));const g=uV(t.substring(Math.min(t.length,p)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),s=r}"ns"in g&&(s=g.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+rt(this.snapshot.exportVal())}}class dV{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class c_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return le(this._path)?null:SC(this._path)}get ref(){return new ri(this._repo,this._path)}get _queryIdentifier(){const e=X0(this._queryParams),n=Dg(e);return n==="{}"?"default":n}get _queryObject(){return X0(this._queryParams)}isEqual(e){if(e=be(e),!(e instanceof c_))return!1;const n=this._repo===e._repo,r=Vg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+sL(this._path)}}class ri extends c_{constructor(e,n){super(e,n,new zg,!1)}get parent(){const e=xC(this._path);return e===null?null:new ri(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Dc{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Te(e),r=xp(this.ref,e);return new Dc(this._node.getChild(n),r,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Dc(i,xp(this.ref,r),Fe)))}hasChild(e){const n=new Te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function px(t,e){return t=be(t),t._checkNotDeleted("ref"),e!==void 0?xp(t._root,e):t._root}function xp(t,e){return t=be(t),oe(t._path)===null?WM("child","path",e):ix("child","path",e),new ri(t._repo,Qe(t._path,e))}function pV(t,e){t=be(t),qM("set",t._path),$M("set",e,t._path);const n=new Jc;return tV(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class h_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new hV("value",this,new Dc(e.snapshotNode,new ri(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dV(this,e,n):null}matches(e){return e instanceof h_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function mV(t,e,n,r,i){const s=new fV(n,void 0),o=new h_(s);return rV(t._repo,t,o),()=>lx(t._repo,t,o)}function gV(t,e,n,r){return mV(t,"value",e)}function _V(t,e,n){lx(t._repo,t,null)}mM(ri);EM(ri);/**
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
 */const yV="FIREBASE_DATABASE_EMULATOR_HOST",Ap={};let vV=!1;function wV(t,e,n,r){t.repoInfo_=new mC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function EV(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||cr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),St("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fw(s,i),a=o.repoInfo,u;typeof process<"u"&&D0&&(u=D0[yV]),u?(s=`http://${u}?ns=${a.namespace}`,o=fw(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new D2(t.name,t.options,e);GM("Invalid Firebase Database URL",o),le(o.path)||cr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=IV(a,t,c,new b2(t.name,n));return new SV(d,t)}function TV(t,e){const n=Ap[e];(!n||n[t.key]!==t)&&cr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),iV(t),delete n[t.key]}function IV(t,e,n,r){let i=Ap[e.name];i||(i={},Ap[e.name]=i);let s=i[t.toURLString()];return s&&cr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new XM(t,vV,n,r),i[t.toURLString()]=s,s}class SV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ri(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(TV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&cr("Cannot call "+e+" on a deleted database.")}}function CV(t=Am(),e){const n=th(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=$T("database");r&&xV(n,...r)}return n}function xV(t,e,n,r={}){t=be(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&cr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&cr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Du(Du.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:GT(r.mockUserToken,t.app.options.projectId);s=new Du(o)}wV(i,e,n,s)}/**
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
 */function AV(t){g2(Bi),Ri(new Gr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return EV(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Dn(O0,L0,t),Dn(O0,L0,"esm2017")}er.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};er.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};AV();const kV={apiKey:"AIzaSyDWqss4olY-yE58OpUd9FsCAgTuOrHUyfc",authDomain:"mathgame-prod.firebaseapp.com",projectId:"mathgame-prod",storageBucket:"mathgame-prod.firebasestorage.app",messagingSenderId:"823268749100",appId:"1:823268749100:web:88747dc6fd11cfd90a0689",databaseURL:"https://mathgame-prod-default-rtdb.asia-southeast1.firebasedatabase.app/"},qd=10,bh=G1().length?getApp():XT(kV);console.log(`Firebase initialized with project ID: ${bh.options.projectId}`);const Gd=eb(bh),Ne=WO(bh);let kp=null;function RV(t){try{console.log("WRITING TEST DATA TO RTDB"),pV(px(t,"s/connTest"),{next:-2}).then(()=>{console.log("Successfully sned next -2")}).catch(e=>{console.log("Failed to send next -2 to connTest"+e)}).finally(()=>{console.log("finished Conn test")})}catch(e){console.error(e),console.log("Error while initializing rtbd")}}kp=CV(bh),RV(kp),console.log("Running in production mode, connected to real Firebase services");const PV=kp,We=9999999;async function pw(t){const e=await Li(st(Ne,"students",t));return e.exists()?e.data():null}async function NV(t,{name:e,email:n,age:r,consentGiven:i,consentTimestamp:s,consentVersion:o}){await qi(st(Ne,"students",t),{name:e,email:n,age:Number(r),consentGiven:i,consentTimestamp:s,consentVersion:o,createdAt:jn()})}async function bV(t,e){const n=so(Ne,"scores",t,"trials"),r=e.sequence?e.sequence.map(i=>`${i.operator}${i.value}`).join(" "):"";await a2(n,{count:e.count,digits:e.digits,isCorrect:e.isCorrect,userAnswer:e.userAnswer,actualAnswer:e.actualAnswer,duration:e.duration,score:e.score??0,numbers:r,timestamp:jn()}),await LV(t,e),await VV(t,e)}async function mw(t){const e=so(Ne,"scores",t,"trials");return(await l2(e)).data().count}function DV(t,e=10,n){const r=Eh(so(Ne,"scores",t,"trials"),Ag("timestamp","desc"),KS(e));return Ih(r,i=>{const s=i.docs.map(a=>({id:a.id,...a.data()})),o=i.docs[i.docs.length-1]??null;n({trials:s,lastDoc:o})})}async function mx(t,e=10,n=null){const r=so(Ne,"scores",t,"trials"),i=[Ag("timestamp","desc"),KS(e)];n&&i.push(n2(n));const s=Eh(r,...i),o=await bg(s),a=o.docs.map(c=>({id:c.id,...c.data()})),u=o.docs[o.docs.length-1]??null;return{trials:a,lastDoc:u}}async function OV(t){const e=st(Ne,"scores",t,"stats","global"),n=st(Ne,"scores",t,"stats","groups"),[r,i]=await Promise.all([Li(e),Li(n)]);return{global:r.exists()?r.data():null,groups:i.exists()?i.data():{}}}async function LV(t,e){const n=`${e.digits}d_${e.count}n`,r=st(Ne,"scores",t,"stats","global"),i=st(Ne,"scores",t,"stats","groups");try{await d2(Ne,async s=>{const o=await s.get(r),a=await s.get(i),u=o.exists()?o.data():{totalGames:0,totalScore:0,totalCorrect:0,bestStreak:0,currentStreak:0,minScore:We,maxScore:0,totalTime:0,minTime:We,maxTime:0},c=u.totalGames+1,d=u.totalScore+e.score,p=u.totalCorrect+(e.isCorrect?1:0),g=e.isCorrect?u.currentStreak+1:0,v=(u.totalTime||0)+(e.duration||0),T=u.minScore&&u.minScore>0?u.minScore:We,k=u.minTime&&u.minTime>0?u.minTime:We,N={totalGames:c,totalScore:d,totalCorrect:p,avgScore:Math.round(d/c),minScore:Math.min(T,e.isCorrect?e.score:We),maxScore:Math.max(u.maxScore,e.score),currentStreak:g,bestStreak:Math.max(u.bestStreak,g),accuracy:p/c*100,totalTime:v,minTime:Math.min(k,e.isCorrect?e.duration:We),maxTime:Math.max(u.maxTime,e.duration||0),upd_at:jn()},w=(a.exists()?a.data():{})[n]||{totalGames:0,totalScore:0,totalCorrect:0,minScore:We,maxScore:0,bstr:0,cstr:0,totalTime:0,minTime:We,maxTime:0},C=e.isCorrect?w.cstr?w.cstr+1:1:0,D=Math.max(w.bstr?w.bstr:0,C),O=w.totalGames+1,V=w.totalScore+e.score,I=(w.totalTime||0)+(e.duration||0),_=w.minScore&&w.minScore>0?w.minScore:We,E=w.minTime&&w.minTime>0?w.minTime:We,x={digits:e.digits,count:e.count,totalGames:O,totalScore:V,totalCorrect:w.totalCorrect+(e.isCorrect?1:0),avgScore:V/O,minScore:Math.min(_,e.isCorrect?e.score:We),maxScore:Math.max(w.maxScore,e.score),accuracy:(w.totalCorrect+(e.isCorrect?1:0))/O*100,totalTime:I,minTime:Math.min(E,e.isCorrect?e.duration:We),maxTime:Math.max(w.maxTime,e.duration||0),bstr:D,cstr:C,upd_at:jn()};o.exists()?s.update(r,N,{merge:!0}):s.set(r,N),a.exists()?s.update(i,{[n]:x},{merge:!0}):s.set(i,{[n]:x})})}catch(s){console.error("Stats update failed: ",s)}}function MV(t){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}${n}${r}`}async function VV(t,e){const n=MV(new Date),r=st(Ne,"dailyStats",n);try{await qi(r,{date:n,activeUids:f2(t),totalGames:li(1),totalCorrect:li(e.isCorrect?1:0),totalTime:li(e.duration||0),students:{[t]:{games:li(1),correct:li(e.isCorrect?1:0),time:li(e.duration||0),score:li(e.score||0),upd_at:jn()}},upd_by:t},{merge:!0})}catch(i){console.error("Daily stats update failed: ",i)}}async function jV(t){const e=await Li(st(Ne,"students",t,"prefs","general"));return e.exists()?e.data():{}}async function FV(t,e){await qi(st(Ne,"students",t,"prefs","general"),{...e,updAt:jn()},{merge:!0})}async function UV(t){const e=await Li(st(Ne,"students",t,"prefs","customPresets"));return e.exists()?e.data():{presets:[],lastUsed:null}}async function Oc(t,e,n){await qi(st(Ne,"students",t,"prefs","customPresets"),{presets:e,lastUsed:n||null,updAt:jn()},{merge:!0})}async function zV(t,e){await qi(st(Ne,"students",t,"prefs","customPresets"),{lastUsed:e,updAt:jn()},{merge:!0})}async function BV(t){const e=Eh(so(Ne,"challenges"),pp("code","==",t.toUpperCase().trim())),n=await bg(e);if(n.empty)return null;const r=n.docs[0];return{id:r.id,...r.data()}}function $V(t,e){return Ih(st(Ne,"challenges",t),n=>{n.exists()&&e({id:n.id,...n.data()})})}function WV(t,e){return Ih(so(Ne,"challenges",t,"participants"),n=>{e(n.docs.map(r=>({uid:r.id,...r.data()})))})}async function qV(t,e,n){const r=st(Ne,"challenges",t,"participants",e);if((await Li(r)).exists()){console.log("Already joined "+t);return}await qi(r,{uid:e,name:n,joinedAt:jn(),status:"waiting",totalScore:0,totalCorrect:0,questionsAttempted:0,scores:null})}function GV(t,e,n){return Ih(st(Ne,"challenges",t,"participants",e,"private","token"),r=>{r.exists()&&n(r.data().rtdbToken)})}async function HV(t,e,{qIdx:n,submittedAnswer:r,duration:i}){await qi(st(Ne,"challenges",t,"participants",e,"private","submission"),{qIdx:n,submittedAnswer:r,duration:i,submittedAt:jn()})}async function KV(t){const e=await bg(Eh($O(Ne,"participants"),pp("uid","==",t),pp("status","==","finished"),Ag("finishedAt","desc")));return e.empty?(console.log("NOT FOUND ANY CHALLENGES "),[]):await Promise.all(e.docs.map(async r=>{const i=r.ref.parent.parent.id,o=(await Li(st(Ne,"challenges",i))).data(),a=r.data(),u=(o==null?void 0:o.leaderboard)||[],c=u.find(d=>d.uid===t);return{challengeId:i,code:(o==null?void 0:o.code)||"—",config:(o==null?void 0:o.config)||{},finishedAt:a.finishedAt,totalParticipants:u.length,rank:(c==null?void 0:c.rank)??null,myResult:{totalScore:(c==null?void 0:c.totalScore)??a.totalScore??0,totalCorrect:(c==null?void 0:c.totalCorrect)??a.totalCorrect??0,questionsAttempted:(c==null?void 0:c.questionsAttempted)??a.questionsAttempted??0}}}))}const gx=j.createContext(null);function QV({children:t}){const[e,n]=j.useState(void 0),[r,i]=j.useState(null),[s,o]=j.useState(!1),[a,u]=j.useState(null),[c,d]=j.useState([]),[p,g]=j.useState(null),[v,T]=j.useState({});j.useEffect(()=>BP(Gd,async C=>{if(n(C),C){o(!0);const D=await pw(C.uid);i(D),jV(C.uid).then(O=>{u(O.nickname||null),T(O.displayPrefs||null)}),UV(C.uid).then(O=>{d(O.presets||[]),g(O.lastUsed||null)}),o(!1)}else i(null),u(null),d([]),g(null),T({})}),[]);const k=async()=>{const w=new qn;await uN(Gd,w)},N=async()=>{await $P(Gd)},S=async()=>{if(!e)return;const w=await pw(e.uid);i(w)};return f.jsx(gx.Provider,{value:{user:e,profile:r,loadingProfile:s,loginWithGoogle:k,logout:N,refreshProfile:S,nickname:a,setNickname:u,presets:c,setPresets:d,lastUsed:p,setLastUsed:g,displayPrefs:v,setDisplayPrefs:T},children:t})}function fo(){return j.useContext(gx)}function YV(){const{loginWithGoogle:t}=fo();return f.jsxs("div",{className:"card text-center flex flex-col gap-md",style:{gap:24},children:[f.jsx("div",{style:{fontSize:"4rem",lineHeight:1},children:"🥷"}),f.jsx("h1",{className:"title",children:"Number Ninja"}),f.jsxs("p",{className:"subtitle",children:["Watch the numbers flash, remember the total,",f.jsx("br",{}),"then type your answer. Can you keep up? 🧠⚡"]}),f.jsx("div",{className:"divider"}),f.jsxs("button",{className:"btn btn-primary btn-full btn-lg",onClick:t,children:[f.jsx(XV,{})," Sign in with Google"]}),f.jsxs("p",{style:{fontSize:"0.78rem",color:"#aaa",lineHeight:1.5},children:["Your information is used for internal analysis and record identification only.",f.jsx("br",{}),"Data is ",f.jsx("strong",{children:"never sold"})," to third parties."]})]})}function XV(){return f.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 48 48",children:[f.jsx("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),f.jsx("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),f.jsx("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),f.jsx("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})]})}const gw=[{name:"🏃 Sprint",digits:1,count:100,autoMode:!0,speed:.5,lastUsed:Date.now(),createdAt:Date.now()},{name:"🎯 Accuracy",digits:2,count:20,autoMode:!0,speed:1.5,lastUsed:Date.now(),createdAt:Date.now()},{name:"💪 Endurance",digits:1,count:500,autoMode:!0,speed:2,lastUsed:Date.now(),createdAt:Date.now()}];function JV(){const{user:t,refreshProfile:e,setPresets:n}=fo(),[r,i]=j.useState(""),[s,o]=j.useState(!1),[a,u]=j.useState(!1),[c,d]=j.useState(""),[p,g]=j.useState(!1),v=parseInt(r,10),T=async()=>{if(d(""),g(!1),!s){g(!0),d("You must confirm you are the parent / guardian/ Above 18 and agree to the privacy notice before continuing.");return}if(!v||v<4||isNaN(v)){d("Please enter a valid age >= 4.");return}u(!0);try{await NV(t.uid,{name:t.displayName||"Student",email:t.email,age:v,consentGiven:!0,consentTimestamp:new Date().toISOString(),consentVersion:"1.0"}),await Oc(t.uid,gw,null),n(gw),await e()}catch(k){console.log("Error "+k),d("Something went wrong. Please try again."),u(!1)}};return f.jsxs("div",{className:"card flex flex-col",style:{gap:20},children:[f.jsxs("div",{className:"text-center",children:[f.jsx("div",{style:{fontSize:"2.6rem"},children:"👨‍👩‍👧"}),f.jsx("h2",{className:"title",style:{fontSize:"1.6rem",marginTop:8},children:"Parent / Guardian /Above 18 Setup"}),f.jsx("p",{className:"subtitle mt-sm",children:"You are creating a learning profile for you / your child on Number Ninja."})]}),f.jsx("div",{className:"divider"}),f.jsxs("div",{style:{background:"var(--surface, #f8f9fa)",border:"1.5px solid var(--border, #e2e8f0)",borderRadius:14,padding:"18px 20px",fontSize:"0.88rem",lineHeight:1.7,color:"var(--text-muted)"},children:[f.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12,color:"var(--text)",fontWeight:700,fontSize:"0.92rem"},children:"🔒 We will store"}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[{icon:"👤",text:"Your name + email — for account identification and data archival communications"},{icon:"🎂",text:"User's age — to compare performance with age-group peers"},{icon:"🏆",text:"User's game scores + session history — to review progress and mistakes"}].map(({icon:k,text:N})=>f.jsxs("div",{style:{display:"flex",gap:10,alignItems:"flex-start"},children:[f.jsx("span",{style:{fontSize:"1rem",flexShrink:0,marginTop:1},children:k}),f.jsx("span",{children:N})]},N))}),f.jsxs("div",{style:{marginTop:14,paddingTop:12,borderTop:"1px solid var(--border, #e2e8f0)",display:"flex",flexDirection:"column",gap:4,fontSize:"0.83rem"},children:[f.jsxs("span",{children:["🚫 ",f.jsx("strong",{style:{color:"var(--text)"},children:"We never sell this data."})]}),f.jsxs("span",{children:["🗑️ You can delete all data anytime from ",f.jsx("strong",{style:{color:"var(--text)"},children:"Emailing us at champsworld-hub@googlegroups.com"}),"."]})]}),f.jsx("a",{href:"privacy.html",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",marginTop:12,color:"var(--primary, #4f46e5)",fontWeight:600,fontSize:"0.85rem",textDecoration:"none"},children:"📄 Read full Privacy Policy →"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"section-title",htmlFor:"age-input",children:"User's age 🎂"}),f.jsx("input",{id:"age-input",className:"input mt-sm",type:"number",min:"4",placeholder:"Enter user's age...",value:r,onChange:k=>i(k.target.value)}),r&&(isNaN(v)||v<4)&&f.jsx("p",{style:{color:"var(--red)",fontSize:"0.85rem",marginTop:6},children:"Please enter a valid age (4 years or older)."})]}),f.jsxs("label",{className:"checkbox-label",style:{alignItems:"flex-start",gap:12,padding:"12px 14px",borderRadius:10,border:`1.5px solid ${p?"var(--red, #ef4444)":"transparent"}`,background:p?"rgba(239,68,68,0.06)":"transparent",transition:"border 0.2s, background 0.2s"},children:[f.jsx("input",{type:"checkbox",checked:s,onChange:k=>{o(k.target.checked),k.target.checked&&(g(!1),d(""))},style:{marginTop:3,flexShrink:0}}),f.jsx("span",{style:{fontSize:"0.88rem",lineHeight:1.6},children:"I am the parent / guardian /Above 18 yrs and I consent to the data practices described above."})]}),c&&f.jsxs("p",{style:{color:"var(--red, #ef4444)",fontSize:"0.88rem",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:8,padding:"10px 14px",margin:0},children:["⚠️ ",c]}),f.jsx("button",{className:"btn btn-green btn-full btn-lg",disabled:a,onClick:T,children:a?"Saving...":"Create Profile 🎮"})]})}function Hd(t,e){return Math.floor(Math.random()*(e-t+1))+t}function ZV(t,e,n=!1){const r=Math.pow(10,t)-1,i=Hd(1,r),s=[{value:i,operator:"+",running:i}];let o=i;for(let a=1;a<e;a++){let u=Hd(1,r),c=Math.random()<.5?"+":"-";c==="-"&&(o===0?c="+":o-u<0&&(u=Hd(1,o))),o=c==="+"?o+u:o-u,n?s.push({value:u,operator:c}):s.push({value:u,operator:c,running:o})}return{sequence:s,answer:o}}const Ya={easy:{label:"⭐ Easy",digits:1,count:3,autoAllowed:!1},medium:{label:"⭐⭐ Medium",digits:2,count:5,autoAllowed:!1},hard:{label:"⭐⭐⭐ Hard",digits:2,count:7,autoAllowed:!1},custom:{label:"Custom",digits:null,count:null,autoAllowed:!0}},_w={digits:1,count:20},kn={minDigits:1,maxDigits:8,minCount:2,maxCount:1010},bt=5;function ej(){const[t,e]=j.useState("easy"),[n,r]=j.useState(_w.digits),[i,s]=j.useState(_w.count),[o,a]=j.useState("idle"),[u,c]=j.useState([]),[d,p]=j.useState(0),[g,v]=j.useState(0),[T,k]=j.useState(""),[N,S]=j.useState(null),[w,C]=j.useState(null),[D,O]=j.useState(!1),[V,I]=j.useState(2),_=t==="custom"?n:Ya[t].digits,E=t==="custom"?i:Ya[t].count,x=j.useCallback((U="sequential")=>{const{sequence:H}=ZV(_,E);c(H),v(0),p(U==="showAll"?Math.min(bt,H.length):1),k(""),S(null),a("watching"),C(Date.now())},[_,E]),R=j.useCallback((U="sequential")=>{if(U==="showAll"){const H=(g+2)*bt;d<u.length?(v(B=>B+1),p(Math.min(H,u.length))):a("answering")}else d<u.length?p(H=>H+1):a("answering")},[d,g,u.length]),P=j.useCallback(()=>{var mt;const U=parseInt(T,10);if(isNaN(U))return null;const H=((mt=u[u.length-1])==null?void 0:mt.running)??0,B=U===H,Y=Math.round((Date.now()-w)/1e3),ne=1+.1*(_-1)+(E-2)/20,ie=20+(E-3)*.5,de=100/(1+Y/ie),se=B?Math.round(de*ne):0,Be={isCorrect:B,actualAnswer:H,userAnswer:U,count:u.length,digits:_,duration:Y,score:se};return S(Be),a("result"),Be},[T,u,w,_,E]),A=j.useCallback(()=>{a("idle"),c([]),p(0),v(0),k(""),S(null)},[]),Ce=g*bt,ot=u.slice(Ce,Ce+bt),kt=Math.ceil(u.length/bt),re=d>=u.length;return{difficulty:t,setDifficulty:e,customDigits:n,setCustomDigits:r,customCount:i,setCustomCount:s,resolvedDigits:_,resolvedCount:E,phase:o,sequence:u,visibleCount:d,batchIndex:g,currentBatch:ot,totalBatches:kt,isLastBatch:re,visibleNumbers:u.slice(0,d),isLastNumber:d===u.length,userAnswer:T,setUserAnswer:k,result:N,startGame:x,showNext:R,submitAnswer:P,reset:A,autoMode:D,setAutoMode:O,autoSpeed:V,setAutoSpeed:I}}function tj({uid:t}){var C;const[e,n]=j.useState(null),[r,i]=j.useState([]);if(j.useEffect(()=>{OV(t).then(n),mx(t,20,null).then(({trials:D})=>{i([...D].reverse())})},[t]),e===null)return f.jsx(aj,{});if(!e.global)return f.jsx(lj,{});const s=e.global,o=Object.values(e.groups||{}).sort((D,O)=>D.digits!==O.digits?D.digits-O.digits:D.count-O.count),a=s.totalGames||0,u=s.totalCorrect||0,c=s.totalScore||0,d=s.accuracy?Math.round(s.accuracy):0,p=s.avgScore?Math.round(s.avgScore):0,g=s.maxScore??0,v=s.bestStreak??0,T=s.currentStreak??0,k=s.totalGames?Math.round(s.totalTime/s.totalGames):0,N=(C=s.upd_at)!=null&&C.toDate?_x(s.upd_at.toDate()):"—",S=s.minScore?s.minScore===We||s.minScore===0?"-":s.minScore:"-",w=s.minTime?s.minTime===We||s.minTime===0?"-":s.minTime+"s":"-";return f.jsxs("div",{className:"flex flex-col",style:{gap:20},children:[f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[f.jsx(nj,{pct:d,correct:u,total:a}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,alignContent:"start"},children:[f.jsx(Zi,{label:"Total score",value:`${c}🪙`,color:"var(--purple-dark)",icon:"🏆"}),f.jsx(Zi,{label:"Avg score",value:`${p}🪙`,color:"var(--blue-dark)",icon:"📊"}),f.jsx(Zi,{label:"Best score",value:`${g}🪙`,color:"var(--green-dark)",icon:"⭐"}),f.jsx(Zi,{label:"Best streak",value:`${v}🔥`,color:"var(--yellow-dark)",icon:""}),f.jsx(Zi,{label:"Avg time",value:`${k}s`,color:"var(--blue)",icon:"⏱"}),f.jsx(Zi,{label:"Games played",value:a,color:"var(--text)",icon:"🎮"})]})]}),f.jsxs("a",{href:"ScoringGuide.html",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 18px",background:"linear-gradient(135deg, #fff8e0, #ffefc0)",border:"2px solid #ffe090",borderRadius:14,textDecoration:"none",color:"var(--yellow-dark)",fontWeight:800,fontSize:"0.9rem",transition:"transform 0.15s, box-shadow 0.15s"},onMouseEnter:D=>{D.currentTarget.style.transform="translateY(-2px)",D.currentTarget.style.boxShadow="0 4px 16px rgba(249,168,37,0.25)"},onMouseLeave:D=>{D.currentTarget.style.transform="",D.currentTarget.style.boxShadow=""},children:[f.jsx("span",{children:"🪙 How is my score calculated? See the scoring guide"}),f.jsx("span",{style:{fontSize:"1.1rem"},children:"→"})]}),r.length>=3&&f.jsx(Kd,{title:"Score trend (last 20 games)",children:f.jsx(rj,{trials:r})}),o.length>=2&&f.jsx(Kd,{title:"Avg score by difficulty",children:f.jsx(ij,{groups:o})}),o.length>=1&&f.jsx(Kd,{title:"Accuracy by difficulty",children:f.jsx(sj,{groups:o})}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[f.jsx("div",{style:{flex:1,height:1,background:"#e8e8e8"}}),f.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700,whiteSpace:"nowrap"},children:"RAW BREAKDOWN"}),f.jsx("div",{style:{flex:1,height:1,background:"#e8e8e8"}})]}),f.jsx(vw,{children:"Overall stats"}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,background:"#f0f8ff",borderRadius:12,padding:14},children:[f.jsx(ke,{label:"Total games",value:a}),f.jsx(ke,{label:"Accuracy",value:`${d}%`,color:d>=70?"var(--green-dark)":"var(--red)"}),f.jsx(ke,{label:"Best streak",value:v,color:"var(--yellow-dark)"}),f.jsx(ke,{label:"Current Streak",value:T,color:"var(--blue-dark)"}),f.jsx(ke,{label:"Total score",value:c,color:"var(--purple-dark)"}),f.jsx(ke,{label:"Avg score",value:p,color:"var(--blue-dark)"}),f.jsx(ke,{label:"Best score",value:g,color:"var(--green-dark)"}),f.jsx(ke,{label:"Worst score",value:S,color:"var(--red)"}),f.jsx(ke,{label:"Last Played",value:N}),f.jsx(ke,{label:"Total time",value:`${Math.round(s.totalTime||0)}s`,color:"var(--purple-dark)"}),f.jsx(ke,{label:"Avg time",value:`${k}s`,color:"var(--blue-dark)"}),f.jsx(ke,{label:"Best time",value:w,color:"var(--green-dark)"}),f.jsx(ke,{label:"Worst time",value:`${s.maxTime??0}s`,color:"var(--red)"})]}),f.jsx(vw,{children:"Breakdown by difficulty"}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:o.map(D=>f.jsx(oj,{g:D},`${D.digits}-${D.count}`))})]})}function nj({pct:t,correct:e,total:n}){const o=2*Math.PI*44,a=o*(t/100),u=t>=70?"var(--green)":t>=40?"var(--yellow-dark)":"var(--red)";return f.jsxs("div",{style:{background:"#f8f9fa",borderRadius:14,padding:14,display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[f.jsx("span",{style:{fontSize:"0.78rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:1},children:"Accuracy"}),f.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 120 120",children:[f.jsx("circle",{cx:60,cy:60,r:44,fill:"none",stroke:"#e8e8e8",strokeWidth:"12"}),f.jsx("circle",{cx:60,cy:60,r:44,fill:"none",stroke:u,strokeWidth:"12",strokeDasharray:`${a} ${o}`,strokeLinecap:"round",transform:"rotate(-90 60 60)",style:{transition:"stroke-dasharray 0.8s ease"}}),f.jsxs("text",{x:60,y:54,textAnchor:"middle",fontFamily:"Fredoka One, cursive",fontSize:"22",fill:u,children:[t,"%"]}),f.jsxs("text",{x:60,y:72,textAnchor:"middle",fontFamily:"Nunito, sans-serif",fontSize:"10",fill:"#999",fontWeight:"700",children:[e,"/",n]})]})]})}function rj({trials:t}){const i=t.map(g=>g.score??0),s=Math.max(...i,1),o=Math.min(...i),a=s-o||1,u=i.length,c=i.map((g,v)=>{const T=10+v/(u-1)*300,k=70-(g-o)/a*(80-10*2);return[T,k]}),d="M "+c.map(g=>g.join(",")).join(" L "),p=d+` L ${c[c.length-1][0]},80 L ${c[0][0]},80 Z`;return f.jsxs("svg",{width:"100%",viewBox:"0 0 320 80",preserveAspectRatio:"none",style:{display:"block"},children:[f.jsx("defs",{children:f.jsxs("linearGradient",{id:"spark-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[f.jsx("stop",{offset:"0%",stopColor:"#4a9eda",stopOpacity:"0.25"}),f.jsx("stop",{offset:"100%",stopColor:"#4a9eda",stopOpacity:"0.02"})]})}),f.jsx("path",{d:p,fill:"url(#spark-grad)"}),f.jsx("path",{d,fill:"none",stroke:"#4a9eda",strokeWidth:"2.5",strokeLinejoin:"round",strokeLinecap:"round"}),c.map(([g,v],T)=>f.jsx("circle",{cx:g,cy:v,r:"4",fill:t[T].isCorrect?"var(--green)":"var(--red)",stroke:"white",strokeWidth:"1.5"},T)),f.jsx("text",{x:10,y:78,fontSize:"9",fill:"#bbb",fontFamily:"Nunito,sans-serif",children:o}),f.jsx("text",{x:10,y:13,fontSize:"9",fill:"#bbb",fontFamily:"Nunito,sans-serif",children:s})]})}function ij({groups:t}){const i=Math.min(40,300/t.length-8),s=Math.max(...t.map(o=>o.avgScore||0),1);return f.jsx("svg",{width:"100%",viewBox:"0 0 320 100",style:{display:"block",overflow:"visible"},children:t.map((o,a)=>{const u=10+a*(300/t.length)+(300/t.length-i)/2,d=(o.avgScore||0)/s*70,p=80-d,g=["#4a9eda","#5cbf6a","#9c6fe4","#ffd54f"][a%4],v=`${o.digits}d·${o.count}n`;return f.jsxs("g",{children:[f.jsx("rect",{x:u,y:p,width:i,height:d,rx:"5",fill:g,opacity:"0.85"}),f.jsx("text",{x:u+i/2,y:p-4,textAnchor:"middle",fontSize:"10",fontFamily:"Fredoka One,cursive",fill:g,children:Number(o.avgScore||0).toFixed(1)}),f.jsx("text",{x:u+i/2,y:96,textAnchor:"middle",fontSize:"8.5",fontFamily:"Nunito,sans-serif",fill:"#888",fontWeight:"700",children:v})]},a)})})}function sj({groups:t}){const n=t.length*32+10,r=80;return f.jsx("svg",{width:"100%",viewBox:`0 0 320 ${n}`,style:{display:"block"},children:t.map((i,s)=>{const o=i.accuracy?Math.round(i.accuracy):0,a=(320-r-40)*o/100,u=s*32+6,c=o>=70?"var(--green)":o>=40?"var(--yellow-dark)":"var(--red)",d=`${i.digits}d · ${i.count}n`;return f.jsxs("g",{children:[f.jsx("text",{x:0,y:u+16,fontSize:"10",fontFamily:"Nunito,sans-serif",fontWeight:"700",fill:"#555",children:d}),f.jsx("rect",{x:r,y:u+4,width:320-r-40,height:18,rx:"9",fill:"#ececec"}),f.jsx("rect",{x:r,y:u+4,width:Math.max(a,0),height:18,rx:"9",fill:c,opacity:"0.85"}),f.jsxs("text",{x:288,y:u+16,fontSize:"10",fontFamily:"Fredoka One,cursive",fill:c,fontWeight:"bold",children:[o,"%"]})]},s)})})}function oj({g:t}){var p;const e=t.totalCorrect||0,n=Math.round(e/t.totalGames*100),r=Math.round(t.totalScore/t.totalGames),i=Math.round(t.totalTime/t.totalGames),s=t.minTime===We||t.minTime===0?"-":t.minTime+"s",o=t.minScore===We||t.minScore===0?"-":t.minScore,a=t.maxScore??0,u=t.bstr??"-",c=t.cstr??"-",d=(p=t.upd_at)!=null&&p.toDate?_x(t.upd_at.toDate()):"—";return f.jsxs("div",{style:{background:"#fafafa",border:"2px solid #e8e8e8",borderRadius:14,padding:"14px 16px"},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[f.jsxs("span",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.1rem",color:"var(--blue-dark)"},children:[t.digits," digit",t.digits>1?"s":""," · ",t.count," numbers"]}),f.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:700},children:[t.totalGames," game",t.totalGames>1?"s":""]})]}),f.jsxs("div",{style:{marginBottom:10},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:4},children:[f.jsx("span",{children:"Accuracy"}),f.jsxs("span",{style:{fontWeight:800,color:n>=70?"var(--green-dark)":"var(--red)"},children:[n,"%"]})]}),f.jsx("div",{style:{height:8,background:"#e8e8e8",borderRadius:4,overflow:"hidden"},children:f.jsx("div",{style:{height:"100%",width:`${n}%`,background:n>=70?"var(--green)":"var(--red)",borderRadius:4,transition:"width 0.6s ease"}})})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},children:[f.jsx(ke,{label:"✅ Correct",value:e,color:"var(--green-dark)"}),f.jsx(ke,{label:"Avg score",value:r,color:"var(--purple-dark)"}),f.jsx(ke,{label:"Best score",value:a,color:"var(--yellow-dark)"}),f.jsx(ke,{label:"Worst score",value:o,color:"var(--yellow-dark)"}),f.jsx(ke,{label:"Avg time",value:`${i}s`,color:"var(--blue-dark)"}),f.jsx(ke,{label:"Total games",value:t.totalGames||0}),f.jsx(ke,{label:"Total score",value:t.totalScore||0,color:"var(--purple-dark)"}),f.jsx(ke,{label:"Best time",value:`${s}`,color:"var(--green-dark)"}),f.jsx(ke,{label:"Worst time",value:`${t.maxTime}s`,color:"var(--red)"}),f.jsx(ke,{label:"Best Streak",value:u,color:"var(--green-dark)"}),f.jsx(ke,{label:"Current Streak",value:c,color:"var(--green-dark)"}),f.jsx(ke,{label:"Last Played",value:d})]})]})}function Kd({title:t,children:e}){return f.jsxs("div",{style:{background:"#fafafa",border:"1.5px solid #ececec",borderRadius:14,padding:"14px 16px"},children:[f.jsx("p",{style:{fontSize:"0.78rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:1,marginBottom:10},children:t}),e,t.includes("trend")&&f.jsxs("div",{style:{display:"flex",gap:16,marginTop:8,justifyContent:"center"},children:[f.jsx(yw,{color:"var(--green)",label:"Correct"}),f.jsx(yw,{color:"var(--red)",label:"Wrong"})]})]})}function yw({color:t,label:e}){return f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:[f.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:t}}),e]})}function Zi({label:t,value:e,color:n,icon:r}){return f.jsxs("div",{style:{background:"white",border:"1.5px solid #ececec",borderRadius:10,padding:"8px 10px",textAlign:"center"},children:[f.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.2rem",color:n||"var(--text)",lineHeight:1.2},children:e}),f.jsxs("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)",fontWeight:700,marginTop:2},children:[r," ",t]})]})}function vw({children:t}){return f.jsx("p",{className:"section-title",style:{margin:0},children:t})}function ke({label:t,value:e,color:n}){return f.jsxs("div",{style:{textAlign:"center"},children:[f.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:n||"var(--blue-dark)"},children:e}),f.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:t})]})}function aj(){return f.jsxs("div",{className:"loader",style:{padding:"40px 0"},children:[f.jsx("div",{className:"loader-dot"}),f.jsx("div",{className:"loader-dot"}),f.jsx("div",{className:"loader-dot"})]})}function lj(){return f.jsxs("div",{className:"text-center",style:{padding:"40px 0",color:"var(--text-muted)"},children:[f.jsx("div",{style:{fontSize:"3rem"},children:"📭"}),f.jsx("p",{style:{fontWeight:700,marginTop:12},children:"No stats yet!"}),f.jsx("p",{style:{fontSize:"0.875rem",marginTop:6},children:"Play your first round to see your stats."})]})}function _x(t){return t.toLocaleString("en-IN",{day:"numeric",month:"numeric",year:"numeric"})}function uj({uid:t}){const[e,n]=j.useState(null),[r,i]=j.useState(1),[s,o]=j.useState(0),[a,u]=j.useState(!1),[c,d]=j.useState([null]),p=Math.max(1,Math.ceil(s/qd));if(j.useEffect(()=>(mw(t).then(o),r!==1?void 0:DV(t,qd,({trials:T,lastDoc:k})=>{n(T),d(N=>{const S=[...N];return S[1]=k,S}),mw(t).then(o)})),[t,r]),j.useEffect(()=>{r!==1&&(u(!0),mx(t,qd,c[r-1]??null).then(({trials:v,lastDoc:T})=>{n(v),d(k=>{const N=[...k];return N[r]=T,N}),u(!1)}))},[t,r]),e===null||a)return f.jsx(hj,{});if(s===0)return f.jsx(dj,{});const g=e.filter(v=>v.isCorrect).length;return e.length&&Math.round(g/e.length*100),f.jsxs("div",{className:"flex flex-col",style:{gap:14},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsxs("p",{className:"section-title",style:{margin:0},children:["Page ",r," of ",p,f.jsxs("span",{style:{fontWeight:400,color:"var(--text-muted)",fontSize:"0.85rem"},children:[" (",s," total)"]})]}),r===1&&f.jsx("span",{style:{fontSize:"0.75rem",color:"var(--red)"},children:"🔴 Live"})]}),f.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:8},children:e.map(v=>f.jsx(cj,{t:v},v.id))}),f.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",justifyContent:"center",marginTop:4},children:[f.jsx("button",{className:"btn btn-outline",style:{padding:"8px 20px",fontSize:"0.9rem"},disabled:r===1,onClick:()=>i(v=>v-1),children:"← Prev"}),f.jsxs("span",{style:{fontWeight:700,fontSize:"0.9rem",color:"var(--text-muted)",minWidth:80,textAlign:"center"},children:[r," / ",p]}),f.jsx("button",{className:"btn btn-primary",style:{padding:"8px 20px",fontSize:"0.9rem"},disabled:r>=p,onClick:()=>i(v=>v+1),children:"Next →"})]})]})}function cj({t}){var n;const e=(n=t.timestamp)!=null&&n.toDate?pj(t.timestamp.toDate()):"—";return f.jsxs("li",{style:{background:"#f8f9fa",borderRadius:12,padding:"12px 14px",display:"flex",flexDirection:"column",gap:6,borderLeft:`4px solid ${t.isCorrect?"var(--green)":"var(--red)"}`},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsx("span",{className:`result-badge ${t.isCorrect?"badge-correct":"badge-wrong"}`,children:t.isCorrect?"✅ Correct":"❌ Wrong"}),f.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:e})]}),t.numbers&&f.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1rem",letterSpacing:"0.5px",wordBreak:"break-all"},children:fj(t.numbers)}),f.jsxs("div",{style:{display:"flex",gap:14,fontSize:"0.82rem",color:"var(--text-muted)",flexWrap:"wrap"},children:[f.jsxs("span",{children:["Answer: ",f.jsx("strong",{style:{color:"var(--text)"},children:t.actualAnswer})]}),f.jsxs("span",{children:["Yours: ",f.jsx("strong",{style:{color:t.isCorrect?"var(--green-dark)":"var(--red)"},children:t.userAnswer})]}),f.jsxs("span",{children:["⏱ ",t.duration,"s"]}),f.jsxs("span",{children:["🪙 ",t.score??0," pts"]}),f.jsxs("span",{children:[t.count," nums · ",t.digits,"d"]})]})]})}function hj(){return f.jsxs("div",{className:"loader",style:{padding:"40px 0"},children:[f.jsx("div",{className:"loader-dot"}),f.jsx("div",{className:"loader-dot"}),f.jsx("div",{className:"loader-dot"})]})}function dj(){return f.jsxs("div",{className:"text-center",style:{padding:"40px 0",color:"var(--text-muted)"},children:[f.jsx("div",{style:{fontSize:"3rem"},children:"📭"}),f.jsx("p",{style:{fontWeight:700,marginTop:12},children:"No games yet!"}),f.jsx("p",{className:"text-sm mt-sm",children:"Play your first round and results will appear here."})]})}function fj(t){return t.split(" ").map((e,n)=>f.jsx("span",{style:{color:e.startsWith("-")?"var(--red)":"var(--green-dark)",marginRight:4},children:e},n))}function pj(t){return t.toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}const $n=[{label:"BG",full:"Beginner",value:5},{label:"LR",full:"Learning",value:3},{label:"INT",full:"Intermediate",value:2},{label:"ADV",full:"Advanced",value:1.5},{label:"EX",full:"Expert",value:1},{label:"🏅",full:"🏅 World Record",value:.5}];function mj(t,e,n,r){if(!r)return`${t}d · ${e}n · Manual`;const i=$n.find(o=>o.value===n),s=i?i.label:`${n}s`;return`${t}d · ${e}n · ${s}`}function gj({autoMode:t,setAutoMode:e,autoSpeed:n,setAutoSpeed:r}){const i=$n.findIndex(c=>c.value===n),s=i===-1?2:i,o=$n[s],a=(o==null?void 0:o.value)===.5;function u(c){const d=parseInt(c.target.value);r($n[d].value)}return f.jsxs("div",{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.75rem"},children:[f.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--text-muted)"},children:"Mode:"}),f.jsx("button",{onClick:()=>e(!1),style:{padding:"4px 16px",borderRadius:"999px",fontSize:"0.82rem",fontWeight:700,border:"2px solid var(--purple)",background:t?"white":"var(--purple)",color:t?"var(--purple)":"white",cursor:"pointer"},children:"Manual"}),f.jsx("button",{onClick:()=>e(!0),style:{padding:"4px 16px",borderRadius:"999px",fontSize:"0.82rem",fontWeight:700,border:"2px solid var(--purple)",background:t?"var(--purple)":"white",color:t?"white":"var(--purple)",cursor:"pointer"},children:"⏱️ Auto"})]}),t&&f.jsxs("div",{children:[f.jsx("input",{type:"range",min:0,max:$n.length-1,step:1,value:s,onChange:u,style:{width:"100%",accentColor:a?"#FFD700":"var(--purple)"}}),f.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginTop:4},children:$n.map((c,d)=>f.jsx("div",{title:`${c.full} — ${c.value}s per number`,onClick:()=>r(c.value),style:{fontSize:"0.7rem",fontWeight:700,cursor:"pointer",textAlign:"center",minWidth:28,padding:"2px 0",borderRadius:4,color:s===d?a&&d===$n.length-1?"#7a5800":"var(--purple-dark)":"var(--text-muted)",background:s===d?d===$n.length-1?"#FFD70044":"#f0ebff":"transparent"},children:c.label},d))}),f.jsxs("div",{style:{textAlign:"center",fontSize:"0.78rem",color:a?"#7a5800":"var(--purple-dark)",fontWeight:700,marginTop:6},children:[o.full," — ",o.value," seconds per number",a?" 🏅":""]})]})]})}function _j({presets:t,onPick:e,onCancel:n}){return f.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.4)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",zIndex:10,padding:"1rem"},children:f.jsxs("div",{style:{background:"white",borderRadius:12,padding:"1.25rem",width:"100%"},children:[f.jsx("p",{style:{fontWeight:700,marginBottom:"0.75rem",fontSize:"0.9rem"},children:"20 presets saved — pick one to replace:"}),f.jsx("div",{style:{maxHeight:220,overflowY:"auto",marginBottom:"0.75rem"},children:t.map((r,i)=>f.jsxs("div",{onClick:()=>e(i),style:{padding:"0.5rem 0.75rem",borderRadius:8,cursor:"pointer",marginBottom:4,border:"1px solid var(--border)",fontSize:"0.85rem",fontWeight:600},onMouseEnter:s=>s.currentTarget.style.background="var(--bg)",onMouseLeave:s=>s.currentTarget.style.background="white",children:[r.name,f.jsxs("span",{style:{fontWeight:400,color:"var(--text-muted)",marginLeft:8,fontSize:"0.78rem"},children:[r.digits,"d · ",r.count,"n · ",r.autoMode?`${r.speed}s`:"Manual"]})]},i))}),f.jsx("button",{className:"btn btn-outline btn-full",onClick:n,children:"Cancel"})]})})}function yx({game:t,mode:e="game",effectiveShowAll:n="sequential"}){var H;const{user:r,presets:i,setPresets:s,lastUsed:o,setLastUsed:a}=fo(),{customDigits:u,setCustomDigits:c,customCount:d,setCustomCount:p,autoMode:g,setAutoMode:v,autoSpeed:T,setAutoSpeed:k,startGame:N}=t,[S,w]=j.useState(!1),[C,D]=j.useState(""),[O,V]=j.useState(""),[I,_]=j.useState(!1),[E,x]=j.useState(null);j.useEffect(()=>{e==="game"&&o&&(c(o.digits),p(o.count),v(o.autoMode??!1),k(o.speed??2))},[]);const R=Math.pow(10,u)-1,P=g?`⏱️ Auto — ${((H=$n.find(B=>B.value===T))==null?void 0:H.full)||T+"s"} (${T}second/number)`:"✋ Manual — click Next for each number";function A(B){c(B.digits),p(B.count),v(B.autoMode??!1),k(B.speed??2)}function Ce(){const B=mj(u,d,T,g);D(B),V(""),w(!0)}function ot(B){D(B.target.value);const Y=i.find(ne=>ne.name===B.target.value.trim());V(Y?"A preset with this name already exists — saving will overwrite it.":"")}async function kt(B=null){const Y=C.trim();if(!Y)return;const ne={name:Y,digits:u,count:d,autoMode:g,speed:T,lastUsed:Date.now(),createdAt:Date.now()};let ie=[...i];const de=ie.findIndex(se=>se.name===Y);if(de!==-1)ie[de]={...ne,createdAt:ie[de].createdAt};else if(B!==null)ie[B]=ne;else if(ie.length>=20){x(ne),_(!0),w(!1);return}else ie=[ne,...ie];ie.sort((se,Be)=>(Be.lastUsed||0)-(se.lastUsed||0)),s(ie),await Oc(r.uid,ie,o),w(!1),_(!1),x(null)}async function re(B){const Y=[...i];Y[B]=E,Y.sort((ne,ie)=>(ie.lastUsed||0)-(ne.lastUsed||0)),s(Y),await Oc(r.uid,Y,o),_(!1),x(null)}async function U(){const B={digits:u,count:d,autoMode:g,speed:T};a(B),await zV(r.uid,B),N(n?"showAll":"sequential")}return f.jsxs("div",{style:{position:"relative"},children:[I&&f.jsx(_j,{presets:i,onPick:re,onCancel:()=>{_(!1),x(null)}}),f.jsxs("div",{style:{background:"#f8f0ff",borderRadius:14,padding:18,display:"flex",flexDirection:"column",gap:16},children:[i.length>0&&f.jsxs("div",{children:[f.jsx("p",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.4rem"},children:"MY CUSTOM GAME PRESETS"}),f.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:f.jsxs("select",{onChange:B=>{const Y=i[parseInt(B.target.value)];Y&&A(Y)},defaultValue:"",style:{flex:1,padding:"0.5rem 0.75rem",borderRadius:10,border:"2px solid var(--purple)",fontSize:"0.85rem",fontFamily:"Nunito, sans-serif",background:"white",color:"var(--text)",outline:"none"},children:[f.jsx("option",{value:"",disabled:!0,children:"Load a preset..."}),i.map((B,Y)=>f.jsx("option",{value:Y,children:B.name},Y))]})})]}),f.jsxs("div",{children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[f.jsx("span",{className:"section-title",style:{margin:0},children:"Digits per number"}),f.jsx("span",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:"var(--purple-dark)"},children:u})]}),f.jsx("input",{type:"range",min:kn.minDigits,max:kn.maxDigits,value:u,onChange:B=>c(Number(B.target.value)),style:{width:"100%",accentColor:"var(--purple)"}}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"var(--text-muted)",marginTop:4},children:[f.jsx("span",{children:"1 digit (1–9)"}),f.jsx("span",{children:"2 digits (1–99)"}),f.jsx("span",{children:"8 digits"})]})]}),f.jsxs("div",{children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[f.jsx("span",{className:"section-title",style:{margin:0},children:"Number of terms"}),f.jsx("input",{type:"number",min:kn.minCount,max:kn.maxCount,value:d,onChange:B=>{const Y=Math.max(kn.minCount,Math.min(kn.maxCount,Number(B.target.value)));isNaN(Y)||p(Y)},style:{width:80,textAlign:"center",fontFamily:"Fredoka One, cursive",fontSize:"1.2rem",border:"2px solid var(--purple)",borderRadius:8,padding:"2px 6px",color:"var(--purple-dark)",background:"white",outline:"none"}})]}),f.jsx("input",{type:"range",min:kn.minCount,max:kn.maxCount,value:Math.min(d,kn.maxCount),onChange:B=>p(Number(B.target.value)),style:{width:"100%",accentColor:"var(--purple)"}}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"var(--text-muted)",marginTop:4},children:[f.jsx("span",{children:"2 terms"}),f.jsx("span",{children:"50"}),f.jsxs("span",{children:[kn.maxCount,"+"]})]})]}),f.jsx(gj,{autoMode:g,setAutoMode:v,autoSpeed:T,setAutoSpeed:k}),f.jsxs("div",{style:{background:"white",borderRadius:10,padding:"10px 14px",fontSize:"0.85rem",color:"var(--text-muted)",lineHeight:1.6},children:[f.jsxs("div",{children:["You'll see ",f.jsxs("strong",{style:{color:"var(--text)"},children:[d," numbers"]})," with up to"," ",f.jsxs("strong",{style:{color:"var(--text)"},children:[u," digit",u>1?"s":""]})," each"," ","(max value: ",f.jsx("strong",{style:{color:"var(--text)"},children:R}),")."]}),f.jsx("div",{style:{marginTop:"0.3rem",fontSize:"0.8rem"},children:P})]}),S?f.jsxs("div",{style:{background:"white",borderRadius:10,padding:"0.75rem"},children:[f.jsx("input",{type:"text",value:C,onChange:ot,placeholder:"Preset name...",style:{width:"100%",padding:"0.5rem 0.75rem",borderRadius:8,boxSizing:"border-box",border:`2px solid ${O?"#BA7517":"var(--purple)"}`,fontSize:"0.9rem",fontFamily:"Nunito, sans-serif",outline:"none",marginBottom:"0.5rem"}}),O&&f.jsxs("p",{style:{fontSize:"0.75rem",color:"#BA7517",marginBottom:"0.5rem"},children:["⚠️ ",O]}),f.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[f.jsx("button",{className:"btn btn-primary",style:{flex:1},onClick:()=>kt(),children:"Save"}),f.jsx("button",{className:"btn btn-outline",style:{flex:1},onClick:()=>w(!1),children:"Cancel"})]})]}):f.jsx("button",{className:"btn btn-outline btn-full",onClick:Ce,children:"+ Save as preset"}),e==="game"&&f.jsx("button",{className:"btn btn-green btn-full btn-lg",onClick:U,children:"Start Game! 🚀"})]})]})}const yj={master:!1,easy:!1,medium:!1,hard:!1,custom:!1};function vj({game:t,onClose:e}){const{user:n,profile:r,nickname:i,setNickname:s,presets:o,setPresets:a,lastUsed:u,displayPrefs:c,setDisplayPrefs:d}=fo(),[p,g]=j.useState(i||""),[v,T]=j.useState(!1),[k,N]=j.useState(!1),[S,w]=j.useState(c??yj),[C,D]=j.useState(!1);function O(E){w(x=>{const R={...x,[E]:!x[E]},P=R.easy||R.medium||R.hard||R.custom;return{...R,master:P?R.master:!1}}),N(!1)}function V(){w(E=>({...E,master:!E.master})),N(!1)}async function I(){T(!0);const E={nickname:p.trim()||null,displayPrefs:S};await FV(n.uid,E),s(p.trim()||null),d(S),T(!1),N(!0),setTimeout(()=>N(!1),2e3)}async function _(E){const x=o.filter((R,P)=>P!==E);a(x),await Oc(n.uid,x,u)}return f.jsxs(f.Fragment,{children:[f.jsx("div",{onClick:e,style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:50}}),f.jsxs("div",{style:{position:"fixed",top:0,left:0,bottom:0,width:"85%",maxWidth:420,background:"white",zIndex:51,overflowY:"auto",padding:"1.5rem",boxShadow:"4px 0 24px rgba(0,0,0,0.15)",animation:"slideInLeft 0.25s ease"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.5rem"},children:[f.jsx("h2",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:"var(--purple-dark)",margin:0},children:"⚙️ Settings"}),f.jsx("button",{className:"btn btn-outline",onClick:e,style:{padding:"6px 14px"},children:"✕ Close"})]}),f.jsxs(ww,{label:"👤 PROFILE",children:[f.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.25rem"},children:"Full name (from Google)"}),f.jsx("p",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"1rem",color:"var(--text)"},children:(r==null?void 0:r.name)||(n==null?void 0:n.displayName)}),f.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.35rem"},children:["Nickname ",f.jsx("span",{style:{opacity:.6},children:"(shown top-left in game)"})]}),f.jsx("input",{type:"text",value:p,onChange:E=>{g(E.target.value),N(!1)},placeholder:"e.g. Ari, Ninja, Flash...",maxLength:20,style:{width:"100%",padding:"0.5rem 0.75rem",borderRadius:8,border:"2px solid var(--purple)",fontSize:"0.9rem",fontFamily:"Nunito, sans-serif",outline:"none",boxSizing:"border-box"}})]}),f.jsxs(ww,{label:"📺 NUMBER DISPLAY",children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:S.master?"0.75rem":0},children:[f.jsxs("div",{children:[f.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"var(--text)"},children:"Show all numbers"}),f.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:S.master?"Sliding window of 5 — tap Next to advance":"One number at a time (default)"})]}),f.jsx(Ew,{value:S.master,onChange:V})]}),S.master&&f.jsx("div",{style:{background:"var(--bg)",borderRadius:10,padding:"0.6rem 0.75rem",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[{key:"easy",label:"⭐ Easy",sub:"3 numbers"},{key:"medium",label:"⭐⭐ Medium",sub:"5 numbers"},{key:"hard",label:"⭐⭐⭐ Hard",sub:"7 numbers"},{key:"custom",label:"⚙️ Custom",sub:"variable, window of 5"}].map(({key:E,label:x,sub:R})=>f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"0.4rem",borderBottom:E!=="custom"?"1px solid var(--border)":"none"},children:[f.jsxs("div",{children:[f.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--text)"},children:x}),f.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)",marginLeft:6},children:R})]}),f.jsx(Ew,{value:S[E],onChange:()=>O(E)})]},E))})]}),f.jsx("button",{className:"btn btn-primary",onClick:I,disabled:v,style:{padding:"6px 20px",fontSize:"0.85rem",marginBottom:"1.5rem"},children:k?"✓ Saved!":v?"Saving...":"Save"}),f.jsxs("div",{children:[f.jsxs("button",{onClick:()=>D(E=>!E),style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",background:"none",border:"none",cursor:"pointer",padding:"0 0 0.75rem 0"},children:[f.jsx("p",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--text-muted)",margin:0,letterSpacing:"0.05em"},children:"🎮 CUSTOM TRAINING PRESETS"}),f.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:C?"▲ Hide":"▼ Show"})]}),C&&f.jsxs(f.Fragment,{children:[o.length===0?f.jsxs("div",{style:{background:"var(--bg)",borderRadius:12,padding:"1.5rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.875rem"},children:["No presets saved yet.",f.jsx("br",{}),f.jsx("span",{style:{fontSize:"0.8rem",opacity:.7},children:"Go to Play → Custom to create one."})]}):f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginBottom:"1rem"},children:o.map((E,x)=>f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"var(--bg)",borderRadius:10,padding:"0.6rem 0.75rem",border:"1px solid var(--border)"},children:[f.jsxs("div",{children:[f.jsx("div",{style:{fontWeight:700,fontSize:"0.875rem",color:"var(--text)"},children:E.name}),f.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:[E.digits,"d · ",E.count,"n · ",E.autoMode?`${E.speed}s auto`:"Manual"]})]}),f.jsx("button",{onClick:()=>_(x),style:{background:"none",border:"none",cursor:"pointer",fontSize:"1rem",color:"var(--text-muted)",padding:"4px 8px"},title:"Delete preset",children:"🗑️"})]},x))}),t&&f.jsx(yx,{game:t,mode:"settings"})]})]})]}),f.jsx("style",{children:`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
      `})]})}function ww({label:t,children:e}){return f.jsxs("div",{style:{marginBottom:"1.5rem"},children:[f.jsx("p",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.75rem",letterSpacing:"0.05em",margin:"0 0 0.75rem 0"},children:t}),f.jsx("div",{style:{background:"var(--bg)",borderRadius:12,padding:"1rem"},children:e})]})}function Ew({value:t,onChange:e}){return f.jsx("button",{onClick:e,style:{position:"relative",width:44,height:24,borderRadius:12,border:"none",cursor:"pointer",background:t?"var(--purple)":"var(--border)",transition:"background 0.2s",flexShrink:0},"aria-checked":t,role:"switch",children:f.jsx("span",{style:{position:"absolute",top:3,left:t?23:3,width:18,height:18,borderRadius:"50%",background:"white",boxShadow:"0 1px 3px rgba(0,0,0,0.2)",transition:"left 0.2s"}})})}function wj(){return PV}function Ej(t,e){const n=wj(),r=px(n,`s/${t}`);return gV(r,i=>{i.exists()&&e(i.val())}),()=>_V(r)}const jt={IDLE:"idle",JOINING:"joining",WAITING:"waiting",PLAYING:"playing",FINISHED:"finished"};function Tj({challenge:t,uid:e,channel:n,state:r,onFinished:i}){const[s,o]=j.useState("waiting"),[a,u]=j.useState(null),[c,d]=j.useState(1),[p,g]=j.useState(""),[v,T]=j.useState(0),[k,N]=j.useState(null),[S,w]=j.useState(!1),C=j.useRef({}),D=j.useRef([]),O=j.useRef(-2),V=j.useRef(!1),I=j.useRef(!1),_=j.useRef("waiting"),E=j.useRef(null);j.useEffect(()=>{_.current=s},[s]),j.useEffect(()=>{if(!r)return;const re=I.current;I.current=r===jt.PLAYING,!re&&I.current&&_.current==="waiting"&&x()},[r]),j.useEffect(()=>{if(!n)return;console.log("got data in channel "),Object.keys(n).forEach(U=>{console.log("CHANNEL checking key "+U);const H=U.match(/^question_(\d+)$/);if(!H)return;const B=parseInt(H[1]);console.log(" idx is "+B),C.current[B]||(C.current[B]=n[U],D.current.includes(B)||(D.current=[...D.current,B].sort((Y,ne)=>Y-ne)))});const re=n.next;if(console.log("next is "+re),re!=null&&re!==O.current){if(O.current=re,re===-1){V.current=!0,(_.current==="waiting"||_.current==="between")&&x();return}I.current&&(_.current==="waiting"||_.current==="between")?(console.log(" going forward"),x()):console.log("NOT moving forward "+I.current+" phaseRef "+_.current)}},[n]),j.useEffect(()=>{s==="answering"&&setTimeout(()=>{var re;return(re=E.current)==null?void 0:re.focus()},100)},[s]);function x(){if(!I.current)return;const re=D.current;if(re.length===0){V.current&&(_.current==="waiting"||_.current==="between")&&(i==null||i(),o("finished"),_.current="finished");return}const U=re[0];C.current[U]&&(D.current=re.slice(1),u(U),d(1),g(""),N(Date.now()),o("watching"),_.current="watching")}const R=a!==null?C.current[a]:null,P=(R==null?void 0:R.sequence)||[],A=P[c-1],Ce=c>=P.length;function ot(){Ce?(o("answering"),_.current="answering"):d(re=>re+1)}async function kt(){if(!p||a===null||S)return;w(!0);const re=parseFloat(((Date.now()-k)/1e3).toFixed(2));await HV(t.id,e,{qIdx:a,submittedAnswer:parseInt(p),duration:re}),T(U=>U+1),w(!1),o("between"),_.current="between",x()}return s==="waiting"?f.jsxs("div",{className:"flex flex-col text-center",style:{gap:16},children:[f.jsxs("div",{className:"loader",children:[f.jsx("span",{className:"loader-dot"}),f.jsx("span",{className:"loader-dot"}),f.jsx("span",{className:"loader-dot"})]}),f.jsx("p",{className:"subtitle",children:"Get ready..."})]}):s==="between"?f.jsxs("div",{className:"flex flex-col text-center",style:{gap:16},children:[f.jsx("div",{style:{fontSize:"2.5rem"},children:"✓"}),f.jsx("p",{className:"subtitle",children:"Answer submitted! Next question incoming..."}),f.jsxs("div",{className:"loader",children:[f.jsx("span",{className:"loader-dot"}),f.jsx("span",{className:"loader-dot"}),f.jsx("span",{className:"loader-dot"})]}),f.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:["Questions done: ",v]})]}):s==="finished"?f.jsxs("div",{className:"flex flex-col text-center",style:{gap:16},children:[f.jsx("div",{style:{fontSize:"2.5rem"},children:"🎉"}),f.jsx("h3",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:"var(--purple-dark)"},children:"All done!"}),f.jsxs("p",{className:"subtitle",children:["You answered ",v," questions."]})]}):s==="watching"?f.jsxs("div",{className:"flex flex-col",style:{gap:16},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",color:"var(--text-muted)"},children:[f.jsxs("span",{children:["Question ",v+1]}),f.jsxs("span",{children:[c," / ",P.length]})]}),f.jsx("div",{className:"progress-dots",children:P.map((re,U)=>f.jsx("div",{className:`dot ${U<c-1?"done":U===c-1?"active":""}`},U))}),f.jsx("div",{className:"number-display",children:A&&f.jsxs("div",{className:"number-bubble current-large bounce-in",children:[c>1&&f.jsx("span",{className:"operator",children:A.operator}),f.jsx("span",{className:`num ${A.operator==="+"?"positive":"negative"}`,children:A.value})]},c)}),f.jsx("button",{className:`btn btn-full btn-lg ${Ce?"btn-yellow":"btn-primary"}`,onClick:ot,children:Ce?"I'm ready! ✅":"Next number →"})]}):s==="answering"?f.jsxs("div",{className:"flex flex-col",style:{gap:16},children:[f.jsxs("div",{className:"text-center",children:[f.jsx("div",{style:{fontSize:"2.5rem"},children:"🤔"}),f.jsx("h3",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:"var(--purple-dark)"},children:"What was the total?"}),f.jsxs("p",{className:"subtitle",children:["You saw ",P.length," numbers — what did they add up to?"]})]}),f.jsx("div",{className:"answer-row",children:f.jsx("input",{ref:E,className:"answer-input",type:"number",placeholder:"?",value:p,onChange:re=>g(re.target.value),onKeyDown:re=>re.key==="Enter"&&kt()})}),f.jsx("button",{className:"btn btn-purple btn-full btn-lg",style:{background:"var(--purple)",color:"white",boxShadow:"0 4px 0 var(--purple-dark)"},disabled:!p||S,onClick:kt,children:S?"Submitting...":"Submit Answer 🎯"}),f.jsxs("p",{style:{textAlign:"center",fontSize:"0.8rem",color:"var(--text-muted)"},children:["Questions done: ",v]})]}):null}function Ij({uid:t,name:e}){const[n,r]=j.useState([]),[i,s]=j.useState("join"),[o,a]=j.useState(""),[u,c]=j.useState(""),[d,p]=j.useState(!1),[g,v]=j.useState([]),[T,k]=j.useState(!1),[N,S]=j.useState("");j.useEffect(()=>{if(i!=="past"){console.log("NOT PAST CHALLENGES TAB");return}console.log("PAST CHALLENGES TAB"),k(!0),S(""),KV(t).then(O=>{v(O||[]),k(!1)}).catch(O=>{console.log("PAST CHALLENGES TAB"+O),console.error(O),S("Could not load past challenges."),k(!1)})},[i,t]);async function w(){if(!(!o.trim()||d)){c(""),p(!0);try{const O=await BV(o.trim());if(!O){c("Challenge not found. Check the code and try again."),p(!1);return}if(O.status==="finished"){c("This challenge has already ended."),p(!1);return}if(n.find(V=>V.id===O.id)){s(O.id),a(""),p(!1);return}await qV(O.id,t,e),r(V=>[...V,{id:O.id,code:O.code||o.trim(),config:O.config,state:O.status==="active"?jt.PLAYING:jt.WAITING}]),s(O.id),a("")}catch{c("Something went wrong. Try again.")}p(!1)}}function C(O){r(V=>V.filter(I=>I.id!==O)),s(V=>V===O?"join":V),v([])}function D(O,V){r(I=>I.map(_=>_.id===O?{..._,state:V}:_))}return f.jsxs("div",{className:"flex flex-col",style:{gap:0},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3,marginBottom:16,overflowX:"auto",scrollbarWidth:"none"},children:[n.map(O=>f.jsx(Sj,{session:O,isActive:i===O.id,onClick:()=>s(O.id)},O.id)),f.jsx(Tw,{label:"＋",isActive:i==="join",onClick:()=>s("join"),style:{fontSize:"2rem",fontWeight:900,color:"#E53935",lineHeight:1,display:"flex",alignItems:"center"}}),f.jsx(Tw,{label:"📋 Past",isActive:i==="past",onClick:()=>s("past"),style:{marginLeft:"auto"}})]}),i==="join"&&f.jsx(Cj,{code:o,setCode:a,error:u,joining:d,onJoin:w}),n.map(O=>f.jsx("div",{style:{display:i===O.id?"block":"none"},children:f.jsx(xj,{sessionMeta:O,uid:t,name:e,onFinished:()=>C(O.id),onStateChange:V=>D(O.id,V)})},O.id)),i==="past"&&f.jsx(Nj,{pastChallenges:g,loading:T,error:N,onGoJoin:()=>s("join")})]})}function Tw({label:t,isActive:e,onClick:n,style:r}){return f.jsx("button",{onClick:n,style:{padding:"6px 12px",fontSize:"0.82rem",fontWeight:700,border:"none",borderRadius:8,cursor:"pointer",background:e?"white":"transparent",color:e?"var(--purple-dark)":"var(--text-muted)",boxShadow:e?"0 1px 4px rgba(0,0,0,0.10)":"none",transition:"all 0.15s",whiteSpace:"nowrap",flexShrink:0,...r},children:t})}function Sj({session:t,isActive:e,onClick:n}){const r=t.state===jt.PLAYING||t.state===jt.WAITING,i=t.state===jt.PLAYING?"#4CAF50":"#FFB300",s=t.state===jt.PLAYING?"0 0 0 2px rgba(76,175,80,0.25)":"0 0 0 2px rgba(255,179,0,0.25)";return f.jsxs("button",{onClick:n,style:{padding:"6px 10px",fontSize:"0.78rem",fontWeight:700,border:"none",borderRadius:8,cursor:"pointer",background:e?"white":"transparent",color:e?"var(--purple-dark)":"var(--text-muted)",boxShadow:e?"0 1px 4px rgba(0,0,0,0.10)":"none",transition:"all 0.15s",whiteSpace:"nowrap",flexShrink:0,display:"flex",alignItems:"center",gap:5,fontFamily:"Fredoka One, cursive",letterSpacing:"0.04em"},children:[r&&f.jsx("span",{style:{width:7,height:7,borderRadius:"50%",flexShrink:0,background:i,boxShadow:s}}),t.code]})}function Cj({code:t,setCode:e,error:n,joining:r,onJoin:i}){return f.jsxs("div",{className:"flex flex-col",style:{gap:20},children:[f.jsxs("div",{className:"text-center",children:[f.jsx("div",{style:{fontSize:"3rem"},children:"🏆"}),f.jsx("h2",{className:"title",style:{fontSize:"1.4rem"},children:"Join Challenge"}),f.jsx("p",{className:"subtitle",children:"Enter the code from your teacher to join"})]}),f.jsxs("div",{children:[f.jsx("input",{type:"text",className:"answer-input",placeholder:"e.g. NNJ-4X2K",value:t,onChange:s=>e(s.target.value.toUpperCase()),onKeyDown:s=>s.key==="Enter"&&i(),style:{width:"100%",textAlign:"center",fontSize:"1.5rem",letterSpacing:"0.15em",fontFamily:"Fredoka One, cursive"}}),n&&f.jsx("p",{style:{color:"var(--red)",fontSize:"0.85rem",textAlign:"center",marginTop:"0.5rem"},children:n})]}),f.jsx("button",{className:"btn btn-primary btn-full btn-lg",onClick:i,disabled:!t.trim()||r,children:r?"Joining...":"Join Challenge →"}),f.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"1rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.82rem"},children:["Past challenges — tap ",f.jsx("strong",{children:"📋 Past"})," above"]})]})}function xj({sessionMeta:t,uid:e,onFinished:n,onStateChange:r}){const[i,s]=j.useState(t.state||jt.WAITING),[o,a]=j.useState({id:t.id,code:t.code,config:t.config}),[u,c]=j.useState(null),[d,p]=j.useState(null),[g,v]=j.useState([]),[T,k]=j.useState(!1);j.useEffect(()=>{r(i)},[i]),j.useEffect(()=>$V(t.id,w=>{a(w),w.status==="active"&&s(jt.PLAYING),w.status==="finished"&&s(jt.FINISHED)}),[t.id]),j.useEffect(()=>GV(t.id,e,c),[t.id,e]),j.useEffect(()=>{if(u)return Ej(u,p)},[u]),j.useEffect(()=>WV(t.id,v),[t.id]);const N=[...g].sort((w,C)=>C.totalScore-w.totalScore),S=N.findIndex(w=>w.uid===e)+1;if(i===jt.WAITING)return f.jsxs("div",{className:"flex flex-col",style:{gap:16},children:[f.jsx(Qd,{code:o.code}),f.jsx(kj,{challenge:o,participants:g,token:u,uid:e})]});if(i===jt.PLAYING)return f.jsxs("div",{className:"flex flex-col",style:{gap:0},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[f.jsx(Qd,{code:o.code}),f.jsx(Aj,{open:T,onToggle:()=>k(w=>!w),count:g.length,myRank:S})]}),f.jsx(Tj,{challenge:o,uid:e,channel:d,state:i,onFinished:()=>s(jt.FINISHED)}),f.jsx(Rj,{open:T,participants:g,uid:e,myRank:S})]});if(i===jt.FINISHED){const w=g.find(C=>C.uid===e);return f.jsxs("div",{className:"flex flex-col",style:{gap:16},children:[f.jsx(Qd,{code:o.code,dim:!0}),f.jsx(Pj,{sorted:N,myResult:w,myRank:S,uid:e,participants:g,onDone:n})]})}return null}function Qd({code:t,dim:e}){return f.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:5,background:e?"var(--bg)":"var(--purple-light)",border:"1.5px solid var(--border)",borderRadius:8,padding:"3px 10px",fontFamily:"Fredoka One, cursive",fontSize:"0.85rem",letterSpacing:"0.08em",color:e?"var(--text-muted)":"var(--purple-dark)"},children:["🏆 ",t]})}function Aj({open:t,onToggle:e,count:n,myRank:r}){return f.jsxs("button",{onClick:e,style:{display:"flex",alignItems:"center",gap:5,background:t?"var(--purple-light)":"var(--bg)",border:`1.5px solid ${t?"var(--purple)":"var(--border)"}`,borderRadius:8,padding:"5px 10px",fontSize:"0.78rem",fontWeight:700,color:t?"var(--purple-dark)":"var(--text-muted)",cursor:"pointer",transition:"all 0.15s"},children:["🏅 ",r>0?`#${r}`:"Board",n>0&&f.jsx("span",{style:{background:t?"var(--purple)":"var(--border)",color:t?"white":"var(--text-muted)",borderRadius:99,padding:"1px 6px",fontSize:"0.72rem"},children:n}),f.jsx("span",{style:{fontSize:"0.7rem"},children:t?"▲":"▼"})]})}function kj({challenge:t,participants:e,token:n,uid:r}){return f.jsxs("div",{className:"flex flex-col text-center",style:{gap:20},children:[f.jsx("div",{style:{fontSize:"3rem"},children:"⏳"}),f.jsxs("div",{children:[f.jsx("h2",{className:"title",style:{fontSize:"1.3rem"},children:"You're in!"}),f.jsx("p",{className:"subtitle",children:"Waiting for your teacher to start the challenge..."})]}),(t==null?void 0:t.config)&&f.jsxs("div",{style:{background:"var(--bg)",borderRadius:12,padding:"1rem",fontSize:"0.875rem",color:"var(--text-muted)",display:"flex",gap:"1.5rem",justifyContent:"center"},children:[f.jsxs("span",{children:["📐 ",t.config.digits," digit",t.config.digits>1?"s":""]}),f.jsxs("span",{children:["🔢 ",t.config.count," numbers"]}),f.jsxs("span",{children:["🎮 ",t.config.numGames," questions"]})]}),e.length>0&&f.jsxs("div",{style:{textAlign:"left"},children:[f.jsxs("p",{style:{fontSize:"0.78rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.5rem"},children:["STUDENTS JOINED (",e.length,")"]}),e.map(i=>{var s;return f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.4rem 0",borderBottom:"1px solid var(--border)",fontSize:"0.875rem"},children:[f.jsx("span",{style:{width:28,height:28,borderRadius:"50%",background:"var(--purple-light)",color:"var(--purple-dark)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",fontWeight:700},children:(s=i.name)==null?void 0:s.charAt(0).toUpperCase()}),f.jsxs("span",{style:{fontWeight:i.uid===r?700:400},children:[i.name,i.uid===r?" (you)":""]})]},i.uid)})]}),f.jsx("p",{style:{fontSize:"0.78rem",fontWeight:n?700:400,color:n?"#1D9E75":"var(--text-muted)"},children:n?"✓ Ready — waiting for teacher to start":"Setting up your channel..."})]})}function Rj({open:t,participants:e,uid:n,myRank:r}){const i=[...e].sort((s,o)=>o.totalScore-s.totalScore);return f.jsx("div",{style:{overflow:"hidden",maxHeight:t?"400px":"0px",transition:"max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)"},children:f.jsxs("div",{style:{marginTop:16,background:"var(--bg)",borderRadius:12,border:"1.5px solid var(--border)",overflow:"hidden"},children:[f.jsxs("div",{style:{padding:"10px 14px",background:"linear-gradient(135deg, var(--purple-light) 0%, #EDE7F6 100%)",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[f.jsx("span",{style:{fontWeight:700,fontSize:"0.82rem",color:"var(--purple-dark)"},children:"🏅 Live Leaderboard"}),f.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--purple-dark)",opacity:.7},children:[r>0?`You're #${r}`:""," · ",e.length," players"]})]}),f.jsxs("div",{style:{maxHeight:280,overflowY:"auto"},children:[i.length===0&&f.jsx("p",{style:{textAlign:"center",color:"var(--text-muted)",fontSize:"0.82rem",padding:"1rem"},children:"Waiting for scores..."}),i.map((s,o)=>{var c;const a=s.uid===n,u=o===0?"🥇":o===1?"🥈":o===2?"🥉":null;return f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"8px 14px",background:a?"#FFFBEA":"transparent",borderBottom:"1px solid var(--border)",borderLeft:a?"3px solid #FFD54F":"3px solid transparent"},children:[f.jsx("span",{style:{minWidth:26,textAlign:"center",fontWeight:700,fontSize:u?"1rem":"0.78rem",color:"var(--text-muted)"},children:u||`#${o+1}`}),f.jsx("span",{style:{width:26,height:26,borderRadius:"50%",flexShrink:0,background:a?"#FFD54F":"var(--purple-light)",color:a?"#7A5800":"var(--purple-dark)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.68rem",fontWeight:700},children:(c=s.name)==null?void 0:c.charAt(0).toUpperCase()}),f.jsxs("span",{style:{flex:1,fontSize:"0.82rem",fontWeight:a?700:400,color:a?"var(--text)":"var(--text-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[s.name,a?" (you)":""]}),f.jsxs("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)",minWidth:32,textAlign:"right"},children:[s.questionsAttempted||0,"✓"]}),f.jsx("span",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1rem",color:a?"#7A5800":"var(--purple-dark)",minWidth:40,textAlign:"right"},children:s.totalScore||0})]},s.uid)})]}),f.jsx("div",{style:{padding:"6px 14px",textAlign:"center",fontSize:"0.72rem",color:"var(--text-muted)",borderTop:"1px solid var(--border)"},children:"Updates live as answers are scored"})]})})}function Pj({sorted:t,myResult:e,myRank:n,uid:r,participants:i,onDone:s}){return f.jsxs("div",{className:"flex flex-col",style:{gap:16},children:[f.jsxs("div",{className:"text-center",children:[f.jsx("div",{style:{fontSize:"3rem"},children:n===1?"🥇":n===2?"🥈":n===3?"🥉":"🎉"}),f.jsx("h2",{className:"title",style:{fontSize:"1.3rem"},children:"Challenge Complete!"}),f.jsxs("p",{className:"subtitle",children:["You ranked #",n," out of ",i.length," students"]})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,background:"#f8f9fa",borderRadius:12,padding:16},children:[f.jsx(uu,{label:"Questions done",value:(e==null?void 0:e.questionsAttempted)||0}),f.jsx(uu,{label:"Total score",value:(e==null?void 0:e.totalScore)||0,color:"var(--purple-dark)"}),f.jsx(uu,{label:"Correct answers",value:(e==null?void 0:e.totalCorrect)||0,color:"var(--green-dark)"}),f.jsx(uu,{label:"Your rank",value:`#${n}`,color:"var(--blue-dark)"})]}),f.jsxs("div",{children:[f.jsx("p",{style:{fontSize:"0.78rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.5rem"},children:"LEADERBOARD"}),t.map((o,a)=>f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.5rem 0.5rem",borderBottom:"1px solid var(--border)",background:o.uid===r?"#FFFBEA":"transparent",borderRadius:4,borderLeft:o.uid===r?"3px solid #FFD54F":"3px solid transparent"},children:[f.jsx("span",{style:{fontSize:"1.1rem",minWidth:28},children:a===0?"🥇":a===1?"🥈":a===2?"🥉":`#${a+1}`}),f.jsxs("span",{style:{flex:1,fontWeight:o.uid===r?700:400,fontSize:"0.875rem"},children:[o.name,o.uid===r?" (you)":""]}),f.jsxs("span",{style:{fontSize:"0.875rem",color:"var(--text-muted)"},children:[o.questionsAttempted||0," done"]}),f.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem",color:"var(--purple-dark)",minWidth:48,textAlign:"right"},children:o.totalScore||0})]},o.uid))]}),f.jsx("button",{className:"btn btn-outline btn-full",onClick:s,children:"Close"})]})}function Nj({pastChallenges:t,loading:e,error:n,onGoJoin:r}){return e?f.jsxs("div",{className:"flex flex-col text-center",style:{gap:12},children:[f.jsxs("div",{className:"loader",children:[f.jsx("span",{className:"loader-dot"}),f.jsx("span",{className:"loader-dot"}),f.jsx("span",{className:"loader-dot"})]}),f.jsx("p",{className:"subtitle",children:"Loading past challenges..."})]}):n?f.jsx("p",{style:{textAlign:"center",color:"var(--red)",fontSize:"0.85rem"},children:n}):t.length===0?f.jsxs("div",{className:"text-center",style:{padding:"2rem 0",color:"var(--text-muted)"},children:[f.jsx("div",{style:{fontSize:"2.5rem",marginBottom:12},children:"📋"}),f.jsx("p",{style:{fontSize:"0.9rem"},children:"No past challenges yet."}),f.jsx("p",{style:{fontSize:"0.8rem",marginTop:4},children:"Finished challenges will appear here."}),f.jsx("button",{className:"btn btn-outline",style:{marginTop:12,fontSize:"0.85rem"},onClick:r,children:"Join one →"})]}):f.jsx("div",{className:"flex flex-col",style:{gap:10},children:t.map(i=>f.jsx(bj,{challenge:i},i.challengeId))})}function bj({challenge:t}){var s,o,a,u,c,d;const[e,n]=j.useState(!1),r=t.rank?t.rank===1?"🥇":t.rank===2?"🥈":t.rank===3?"🥉":`#${t.rank}`:"🎉",i=t.finishedAt?new Date((s=t.finishedAt)!=null&&s.seconds?t.finishedAt.seconds*1e3:t.finishedAt).toLocaleDateString(void 0,{month:"short",day:"numeric"}):"—";return f.jsxs("div",{style:{border:"1.5px solid var(--border)",borderRadius:12,overflow:"hidden"},children:[f.jsxs("button",{onClick:()=>n(p=>!p),style:{width:"100%",padding:"12px 14px",background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:12,textAlign:"left"},children:[f.jsx("span",{style:{fontSize:t.rank<=3?"1.5rem":"0.95rem",minWidth:32,textAlign:"center"},children:r}),f.jsxs("div",{style:{flex:1},children:[f.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"0.95rem",color:"var(--purple-dark)",letterSpacing:"0.05em"},children:t.code}),f.jsxs("div",{style:{fontSize:"0.73rem",color:"var(--text-muted)",marginTop:1},children:[i," · ",(o=t.config)==null?void 0:o.digits,"d · ",(a=t.config)==null?void 0:a.count,"n"]})]}),f.jsxs("div",{style:{textAlign:"right"},children:[f.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.1rem",color:"var(--purple-dark)"},children:((u=t.myResult)==null?void 0:u.totalScore)??"—"}),f.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)"},children:"pts"})]}),f.jsx("span",{style:{fontSize:"0.7rem",color:"var(--text-muted)",marginLeft:4,transform:e?"rotate(180deg)":"none",transition:"transform 0.2s"},children:"▼"})]}),e&&f.jsxs("div",{style:{padding:"12px 14px 14px",borderTop:"1px solid var(--border)"},children:[f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,marginBottom:10},children:[f.jsx(Yd,{label:"Correct",value:((c=t.myResult)==null?void 0:c.totalCorrect)??"—",color:"var(--green-dark)"}),f.jsx(Yd,{label:"Attempted",value:((d=t.myResult)==null?void 0:d.questionsAttempted)??"—"}),f.jsx(Yd,{label:"Rank",value:r,color:"var(--purple-dark)"})]}),t.totalParticipants&&f.jsxs("div",{style:{fontSize:"0.73rem",color:"var(--text-muted)",textAlign:"center"},children:[t.totalParticipants," students participated"]})]})]})}function uu({label:t,value:e,color:n}){return f.jsxs("div",{style:{textAlign:"center"},children:[f.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.8rem",color:n||"var(--blue-dark)"},children:e}),f.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700},children:t})]})}function Yd({label:t,value:e,color:n}){return f.jsxs("div",{style:{textAlign:"center",background:"var(--bg)",borderRadius:8,padding:"8px 4px"},children:[f.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.2rem",color:n||"var(--blue-dark)"},children:e}),f.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)",fontWeight:700},children:t})]})}function Dj(){var w;const{user:t,profile:e,logout:n,nickname:r,displayPrefs:i}=fo(),s=ej(),[o,a]=j.useState("play"),[u,c]=j.useState(null),[d,p]=j.useState(!1),g=j.useRef(null),[v,T]=j.useState(!1),k=!s.autoMode&&!!(i!=null&&i.master)&&!!(i!=null&&i[s.difficulty]);j.useEffect(()=>{s.phase==="answering"&&setTimeout(()=>{var C;return(C=g.current)==null?void 0:C.focus()},100)},[s.phase]),j.useEffect(()=>{if(s.phase==="watching"){p(!0);const C=setTimeout(()=>p(!1),350);return()=>clearTimeout(C)}},[s.visibleCount,s.phase]);const N=async()=>{const C=s.submitAnswer();if(C){c({correct:C.isCorrect}),setTimeout(()=>c(null),900);try{await bV(t.uid,{...C,sequence:s.sequence})}catch(D){console.warn("Failed to save trial:",D)}}},S=((e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"S").split(" ").map(C=>C[0]).join("").slice(0,2).toUpperCase();return f.jsxs("div",{className:"card",style:{maxWidth:550},children:[f.jsxs("div",{className:"header-bar",children:[f.jsxs("div",{className:"avatar-chip",onClick:()=>T(!0),style:{cursor:"pointer"},title:"Settings",children:[f.jsx("div",{className:"avatar",children:S}),f.jsx("span",{children:r||((w=e==null?void 0:e.name)==null?void 0:w.split(" ")[0])||"Student"})]}),f.jsxs("div",{className:"title",style:{display:"flex",fontSize:"1rem",alignItems:"center",gap:"0.5rem"},children:[f.jsx("img",{src:"./logo_header.png",alt:"ChampsWorld",style:{height:"32px",width:"auto",borderRadius:"6px"}}),"Number Ninja"]}),f.jsx("button",{className:"btn btn-outline",style:{padding:"8px 16px",fontSize:"0.85rem"},onClick:n,children:"Sign out"})]}),f.jsx("div",{className:"tabs",children:[{key:"play",label:"🎮 Play"},{key:"stats",label:"📊 Stats"},{key:"history",label:"📜 History"},{key:"challenge",label:"🏆 Challenge"}].map(({key:C,label:D})=>f.jsx("button",{className:`tab ${o===C?"active":""}`,onClick:()=>a(C),children:D},C))}),o==="play"&&f.jsxs(f.Fragment,{children:[s.phase==="idle"&&f.jsx(Oj,{game:s,effectiveShowAll:k}),s.phase==="watching"&&f.jsx(Vj,{game:s,totalBump:d,effectiveShowAll:k}),s.phase==="answering"&&f.jsx(jj,{game:s,answerRef:g,onSubmit:N,onKeyDown:C=>C.key==="Enter"&&N()}),s.phase==="result"&&f.jsx(Fj,{game:s,effectiveShowAll:k,onSwitchHistory:()=>a("history")})]}),o==="stats"&&f.jsx(tj,{uid:t.uid}),o==="history"&&f.jsx(uj,{uid:t.uid}),o==="challenge"&&f.jsx(Ij,{uid:t.uid,name:r||(e==null?void 0:e.name)}),u&&f.jsx("div",{className:"feedback-overlay",children:f.jsx("div",{className:`feedback-badge ${u.correct?"feedback-correct":"feedback-wrong"}`,children:u.correct?"🎉 Correct!":"❌ Oops!"})}),v&&f.jsx(vj,{game:s,onClose:()=>T(!1)}),f.jsx("div",{style:{textAlign:"center",paddingBottom:"0.75rem"},children:f.jsx("a",{href:"./privacy.html",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.75rem",color:"var(--text-muted)",textDecoration:"none",opacity:.7},onMouseEnter:C=>C.currentTarget.style.opacity="1",onMouseLeave:C=>C.currentTarget.style.opacity="0.7",children:"Privacy Policy"})})]})}function Oj({game:t,effectiveShowAll:e}){return f.jsxs("div",{className:"flex flex-col",style:{gap:20},children:[f.jsxs("div",{className:"text-center",children:[f.jsx("div",{style:{fontSize:"3rem"},children:"🧮"}),f.jsx("h2",{className:"title",style:{fontSize:"1.6rem"},children:"Mental Math"}),f.jsx("p",{className:"subtitle mt-sm",children:e?`Numbers appear ${bt} at a time — remember them all, then type your answer!`:"Numbers appear one by one — keep a running total, then type your answer!"})]}),f.jsxs("div",{children:[f.jsx("p",{className:"section-title",children:"Choose difficulty:"}),f.jsx("div",{className:"difficulty-grid mt-sm",style:{gridTemplateColumns:"repeat(4, 1fr)"},children:Object.entries(Ya).map(([n,{label:r}])=>f.jsx("button",{className:`diff-btn ${t.difficulty===n?"selected":""}`,onClick:()=>t.setDifficulty(n),children:n==="custom"?f.jsxs("div",{className:"diff-btn-custom-content",children:[f.jsx("span",{className:"diff-btn-icon",children:"⚙️"}),f.jsx("span",{children:r})]}):r},n))})]}),t.difficulty==="custom"?f.jsx(yx,{game:t,mode:"game",effectiveShowAll:e}):f.jsx(Lj,{difficulty:t.difficulty,effectiveShowAll:e}),t.difficulty!=="custom"&&f.jsx("button",{className:"btn btn-green btn-full btn-lg",onClick:()=>t.startGame(e?"showAll":"sequential"),children:"Start Game! 🚀"})]})}function Lj({difficulty:t,effectiveShowAll:e}){const n=Ya[t];return f.jsxs("div",{style:{background:"#f0f8ff",borderRadius:12,padding:"14px 18px",fontSize:"0.9rem",color:"var(--text-muted)"},children:["You'll see ",f.jsxs("strong",{style:{color:"var(--text)"},children:[n.count," numbers"]})," with up to"," ",f.jsxs("strong",{style:{color:"var(--text)"},children:[n.digits," digit",n.digits>1?"s":""]})," each",e?f.jsxs(f.Fragment,{children:[", shown ",f.jsxs("strong",{style:{color:"var(--text)"},children:[bt," at a time"]}),"."]}):f.jsxs(f.Fragment,{children:[", shown ",f.jsx("strong",{style:{color:"var(--text)"},children:"one at a time"}),"."]})]})}const Mj=200,cu=400;function Vj({game:t,totalBump:e,effectiveShowAll:n}){var ie;const{visibleNumbers:r,isLastNumber:i,sequence:s,autoMode:o,autoSpeed:a,currentBatch:u,batchIndex:c,totalBatches:d,isLastBatch:p,showNext:g}=t,v=r[r.length-1],T=o&&((ie=Ya[t.difficulty])==null?void 0:ie.autoAllowed)===!0,k=j.useRef(null),N=j.useRef(null),[S,w]=j.useState(0),[C,D]=j.useState(!1),O=j.useRef(-1);j.useEffect(()=>{n&&c!==O.current&&(O.current=c,w(0),D(!0),u.forEach((de,se)=>{setTimeout(()=>{w(se+1),se===u.length-1&&setTimeout(()=>D(!1),cu)},se*Mj)}))},[c,n]),j.useEffect(()=>{n&&(O.current=-1)},[t.phase]);const[V,I]=j.useState(null),_=V!==null,E=r.slice(0,r.length-1),x=Math.ceil(E.length/bt);function R(de){const se=E.length-de*bt,Be=Math.max(0,se-bt);return E.slice(Be,se)}function P(de){const se=c-1-de;return se<0?[]:s.slice(se*bt,(se+1)*bt)}const Ce=_&&(n?V<c-1:V<x-1),ot=_&&V>0,kt=_?n?P(V):R(V):[];function re(){I(_?null:0)}function U(){clearInterval(k.current),N.current=Date.now(),I(null),g(n?"showAll":"sequential")}j.useEffect(()=>{if(!(!T||!a||n)&&!i)return N.current=Date.now(),k.current=setInterval(()=>{Date.now()-N.current>=a*1e3&&U()},100),()=>clearInterval(k.current)},[T,a,t.visibleCount,i,n]);const[H,B]=j.useState(0);j.useEffect(()=>{if(!T||!a||i||n){B(0);return}const de=setInterval(()=>{B(Math.min((Date.now()-(N.current||Date.now()))/(a*1e3),1))},50);return()=>clearInterval(de)},[T,a,t.visibleCount,i,n]);const Y=n?p:i,ne=n?c>0:E.length>0;return f.jsxs("div",{className:"flex flex-col",style:{gap:16},children:[f.jsx("div",{className:"progress-dots",children:s.map((de,se)=>f.jsx("div",{className:`dot ${se<t.visibleCount-1?"done":se===t.visibleCount-1?"active":""}`},se))}),n&&f.jsxs("div",{style:{textAlign:"center",fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700},children:["Batch ",c+1," of ",d]}),T&&!i&&!n&&f.jsx("div",{style:{height:4,background:"var(--border)",borderRadius:2,overflow:"hidden"},children:f.jsx("div",{style:{height:"100%",borderRadius:2,transition:"width 50ms linear",background:a<.5?"#D85A30":a===.5?"#FFD700":"var(--purple)",width:`${H*100}%`}})}),f.jsxs("div",{className:"number-display",children:[n&&!_&&f.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,justifyContent:"center",padding:"8px 0"},children:u.map((de,se)=>{const Be=c*bt+se,mt=se<S;return f.jsxs("div",{className:`number-bubble current-large ${mt?"bounce-in":""}`,style:{opacity:mt?1:0,transform:mt?"scale(1)":"scale(0)",transition:`opacity ${cu}ms, transform ${cu}ms`},children:[Be>0&&f.jsx("span",{className:"operator",children:de.operator}),f.jsx("span",{className:`num ${de.operator==="+"?"positive":"negative"}`,children:de.value})]},`${c}-${se}`)})}),!n&&!_&&v&&f.jsxs("div",{className:"number-bubble current-large bounce-in",children:[t.visibleCount>1&&f.jsx("span",{className:"operator",children:v.operator}),f.jsx("span",{className:`num ${v.operator==="+"?"positive":"negative"}`,children:v.value})]},t.visibleCount),_&&f.jsxs("div",{style:{width:"100%"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},children:[f.jsx("button",{onClick:()=>Ce&&I(de=>de+1),disabled:!Ce,style:Iw(!Ce),children:"‹ Older"}),f.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:n?`Batch ${c-V} of ${d}`:"Previous numbers"}),f.jsx("button",{onClick:()=>ot&&I(de=>de-1),disabled:!ot,style:Iw(!ot),children:"Newer ›"})]}),f.jsx("div",{className:"history-stream",children:kt.map((de,se)=>{const Be=n?(c-1-V)*bt+se:E.length-V*bt-(kt.length-se);return f.jsxs("span",{className:`number-bubble-sm ${de.operator==="+"?"positive":"negative"}`,children:[Be>0&&f.jsx("span",{className:"op",children:de.operator}),de.value]},se)})})]})]}),f.jsxs("div",{className:"flex flex-col",style:{gap:10},children:[Y?f.jsx("button",{className:"btn btn-yellow btn-full btn-lg",onClick:U,children:"I'm ready! ✅"}):f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"btn btn-primary btn-full btn-lg",onClick:U,disabled:n&&C,children:n?"Next batch →":"Next number →"}),T&&!n&&f.jsx("div",{style:{textAlign:"center",fontSize:"0.82rem",color:"var(--text-muted)",padding:"0.5rem",background:"var(--bg)",borderRadius:"10px"},children:a===.5?"🏅 WR pace — next number in 0.5s⏱️":a<.5?`⏱️ ${a}s pace — beyond WR!`:`⏱️ Auto advancing every ${a}s`})]}),f.jsxs("div",{className:"flex flex-row",style:{gap:10},children:[f.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.9rem",flex:1},onClick:t.reset,children:"← Back to Menu"}),f.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.9rem",flex:1},onClick:re,disabled:!ne,children:_?"🙈 Hide":"👀 Peek"})]})]}),f.jsx("style",{children:`
        @keyframes bounceIn {
          0%   { transform: scale(0);    opacity: 0; }
          60%  { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1);    opacity: 1; }
        }
        .bounce-in { animation: bounceIn ${cu}ms cubic-bezier(.36,.07,.19,.97) both; }
      `})]})}function Iw(t){return{background:"none",border:"1px solid var(--border)",borderRadius:6,padding:"2px 10px",fontSize:"0.78rem",cursor:t?"default":"pointer",color:t?"var(--border)":"var(--text-muted)"}}function jj({game:t,answerRef:e,onSubmit:n,onKeyDown:r}){return f.jsxs("div",{className:"flex flex-col",style:{gap:16},children:[f.jsxs("div",{className:"text-center",children:[f.jsx("div",{style:{fontSize:"2.5rem"},children:"🤔"}),f.jsx("h3",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:"var(--purple-dark)"},children:"What was the total?"}),f.jsxs("p",{className:"subtitle",children:["You saw ",t.sequence.length," numbers — what did they add up to?"]})]}),f.jsx("div",{className:"answer-row",children:f.jsx("input",{ref:e,className:"answer-input",type:"number",placeholder:"?",value:t.userAnswer,onChange:i=>t.setUserAnswer(i.target.value),onKeyDown:r})}),f.jsx("button",{className:"btn btn-purple btn-full btn-lg",style:{background:"var(--purple)",color:"white",boxShadow:"0 4px 0 var(--purple-dark)"},disabled:!t.userAnswer,onClick:n,children:"Submit Answer 🎯"}),f.jsx("button",{className:"btn btn-outline btn-full",onClick:t.reset,children:"← Back to Menu"})]})}function Fj({game:t,effectiveShowAll:e,onSwitchHistory:n}){const r=t.difficulty==="custom"?`${t.customDigits}d, ${t.customCount}n`:t.difficulty,{result:i}=t,s=i==null?void 0:i.isCorrect;return f.jsxs("div",{className:"flex flex-col text-center",style:{gap:16},children:[f.jsx("div",{style:{fontSize:"4rem",lineHeight:1},children:s?"🎉":"💪"}),f.jsxs("div",{children:[f.jsx("h3",{className:"title",style:{color:s?"var(--green-dark)":"var(--red)"},children:s?"Great job!":"Almost there!"}),f.jsx("p",{className:"subtitle mt-sm",children:s?"Great mental math! Your brain is super fast.":`The answer was ${i==null?void 0:i.actualAnswer}, you said ${i==null?void 0:i.userAnswer}.`})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,background:"#f8f9fa",borderRadius:12,padding:16},children:[f.jsx(hu,{label:"Numbers seen",value:i==null?void 0:i.count}),f.jsx(hu,{label:"🪙 Score",value:i==null?void 0:i.score,color:"var(--purple-dark)"}),f.jsx(hu,{label:"Time taken",value:`${i==null?void 0:i.duration}s`}),f.jsx(hu,{label:"Correct answer",value:i==null?void 0:i.actualAnswer,color:"var(--green-dark)"})]}),f.jsxs("button",{className:"btn btn-green btn-full",onClick:()=>t.startGame(e?"showAll":"sequential"),children:["Play '",r,"' Again! 🚀"]}),f.jsx("button",{className:"btn btn-outline btn-full",style:{fontSize:"0.85rem"},onClick:t.reset,children:"Menu"})]})}function hu({label:t,value:e,color:n}){return f.jsxs("div",{style:{textAlign:"center"},children:[f.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.8rem",color:n||"var(--blue-dark)"},children:e}),f.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700},children:t})]})}function Uj(){const t=Array.from({length:12},(e,n)=>({size:Math.random()*8+4,top:Math.random()*100,left:Math.random()*100,dur:(Math.random()*3+2).toFixed(1),delay:(Math.random()*3).toFixed(1)}));return f.jsx("div",{className:"stars",children:t.map((e,n)=>f.jsx("div",{className:"star",style:{width:e.size,height:e.size,top:`${e.top}%`,left:`${e.left}%`,"--dur":`${e.dur}s`,animationDelay:`${e.delay}s`}},n))})}function Sw(){return f.jsxs("div",{className:"loader",style:{padding:"60px 0"},children:[f.jsx("div",{className:"loader-dot"}),f.jsx("div",{className:"loader-dot"}),f.jsx("div",{className:"loader-dot"})]})}function zj(){const{user:t,profile:e,loadingProfile:n}=fo(),r=t===void 0;return f.jsxs("div",{className:"app-wrap",children:[f.jsx(Uj,{}),r?f.jsx(Sw,{}):t?n?f.jsx(Sw,{}):e?f.jsx(Dj,{}):f.jsx(JV,{}):f.jsx(YV,{})]})}VT(document.getElementById("root")).render(f.jsx(j.StrictMode,{children:f.jsx(QV,{children:f.jsx(zj,{})})}));
