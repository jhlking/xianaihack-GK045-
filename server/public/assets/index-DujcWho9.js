function cx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ux(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bg={exports:{}},rc={},Hg={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),dx=Symbol.for("react.portal"),hx=Symbol.for("react.fragment"),fx=Symbol.for("react.strict_mode"),px=Symbol.for("react.profiler"),mx=Symbol.for("react.provider"),gx=Symbol.for("react.context"),vx=Symbol.for("react.forward_ref"),_x=Symbol.for("react.suspense"),xx=Symbol.for("react.memo"),yx=Symbol.for("react.lazy"),cp=Symbol.iterator;function Sx(t){return t===null||typeof t!="object"?null:(t=cp&&t[cp]||t["@@iterator"],typeof t=="function"?t:null)}var Vg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jg=Object.assign,Gg={};function na(t,e,n){this.props=t,this.context=e,this.refs=Gg,this.updater=n||Vg}na.prototype.isReactComponent={};na.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};na.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wg(){}Wg.prototype=na.prototype;function Eh(t,e,n){this.props=t,this.context=e,this.refs=Gg,this.updater=n||Vg}var Th=Eh.prototype=new Wg;Th.constructor=Eh;jg(Th,na.prototype);Th.isPureReactComponent=!0;var up=Array.isArray,Xg=Object.prototype.hasOwnProperty,bh={current:null},Yg={key:!0,ref:!0,__self:!0,__source:!0};function $g(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Xg.call(e,i)&&!Yg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:mo,type:t,key:s,ref:a,props:r,_owner:bh.current}}function Mx(t,e){return{$$typeof:mo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ah(t){return typeof t=="object"&&t!==null&&t.$$typeof===mo}function wx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dp=/\/+/g;function Nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wx(""+t.key):e.toString(36)}function hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case mo:case dx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Nc(a,0):i,up(r)?(n="",t!=null&&(n=t.replace(dp,"$&/")+"/"),hl(r,e,n,"",function(c){return c})):r!=null&&(Ah(r)&&(r=Mx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(dp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",up(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Nc(s,o);a+=hl(s,e,n,l,r)}else if(l=Sx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Nc(s,o++),a+=hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function bo(t,e,n){if(t==null)return t;var i=[],r=0;return hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ex(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},fl={transition:null},Tx={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:fl,ReactCurrentOwner:bh};function qg(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:bo,forEach:function(t,e,n){bo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bo(t,function(){e++}),e},toArray:function(t){return bo(t,function(e){return e})||[]},only:function(t){if(!Ah(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=na;Xe.Fragment=hx;Xe.Profiler=px;Xe.PureComponent=Eh;Xe.StrictMode=fx;Xe.Suspense=_x;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tx;Xe.act=qg;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=jg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=bh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Xg.call(e,l)&&!Yg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:mo,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:gx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mx,_context:t},t.Consumer=t};Xe.createElement=$g;Xe.createFactory=function(t){var e=$g.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:vx,render:t}};Xe.isValidElement=Ah;Xe.lazy=function(t){return{$$typeof:yx,_payload:{_status:-1,_result:t},_init:Ex}};Xe.memo=function(t,e){return{$$typeof:xx,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=fl.transition;fl.transition={};try{t()}finally{fl.transition=e}};Xe.unstable_act=qg;Xe.useCallback=function(t,e){return an.current.useCallback(t,e)};Xe.useContext=function(t){return an.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return an.current.useEffect(t,e)};Xe.useId=function(){return an.current.useId()};Xe.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return an.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Xe.useRef=function(t){return an.current.useRef(t)};Xe.useState=function(t){return an.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return an.current.useTransition()};Xe.version="18.3.1";Hg.exports=Xe;var re=Hg.exports;const bx=ux(re),Ax=cx({__proto__:null,default:bx},[re]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx=re,Rx=Symbol.for("react.element"),Px=Symbol.for("react.fragment"),Nx=Object.prototype.hasOwnProperty,Lx=Cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dx={key:!0,ref:!0,__self:!0,__source:!0};function Kg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Nx.call(e,i)&&!Dx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Rx,type:t,key:s,ref:a,props:r,_owner:Lx.current}}rc.Fragment=Px;rc.jsx=Kg;rc.jsxs=Kg;Bg.exports=rc;var x=Bg.exports,Zg={exports:{}},An={},Jg={exports:{}},Qg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,X){var $=I.length;I.push(X);e:for(;0<$;){var ae=$-1>>>1,de=I[ae];if(0<r(de,X))I[ae]=X,I[$]=de,$=ae;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var X=I[0],$=I.pop();if($!==X){I[0]=$;e:for(var ae=0,de=I.length,ke=de>>>1;ae<ke;){var P=2*(ae+1)-1,V=I[P],ne=P+1,te=I[ne];if(0>r(V,$))ne<de&&0>r(te,V)?(I[ae]=te,I[ne]=$,ae=ne):(I[ae]=V,I[P]=$,ae=P);else if(ne<de&&0>r(te,$))I[ae]=te,I[ne]=$,ae=ne;else break e}}return X}function r(I,X){var $=I.sortIndex-X.sortIndex;return $!==0?$:I.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,f=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=I)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function S(I){if(y=!1,_(I),!v)if(n(l)!==null)v=!0,W(N);else{var X=n(c);X!==null&&K(S,X.startTime-I)}}function N(I,X){v=!1,y&&(y=!1,u(C),C=-1),p=!0;var $=f;try{for(_(X),h=n(l);h!==null&&(!(h.expirationTime>X)||I&&!L());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,f=h.priorityLevel;var de=ae(h.expirationTime<=X);X=t.unstable_now(),typeof de=="function"?h.callback=de:h===n(l)&&i(l),_(X)}else i(l);h=n(l)}if(h!==null)var ke=!0;else{var P=n(c);P!==null&&K(S,P.startTime-X),ke=!1}return ke}finally{h=null,f=$,p=!1}}var A=!1,T=null,C=-1,E=5,M=-1;function L(){return!(t.unstable_now()-M<E)}function z(){if(T!==null){var I=t.unstable_now();M=I;var X=!0;try{X=T(!0,I)}finally{X?B():(A=!1,T=null)}}else A=!1}var B;if(typeof g=="function")B=function(){g(z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,Z=Y.port2;Y.port1.onmessage=z,B=function(){Z.postMessage(null)}}else B=function(){m(z,0)};function W(I){T=I,A||(A=!0,B())}function K(I,X){C=m(function(){I(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,W(N))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var $=f;f=X;try{return I()}finally{f=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,X){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=f;f=I;try{return X()}finally{f=$}},t.unstable_scheduleCallback=function(I,X,$){var ae=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ae+$:ae):$=ae,I){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=$+de,I={id:d++,callback:X,priorityLevel:I,startTime:$,expirationTime:de,sortIndex:-1},$>ae?(I.sortIndex=$,e(c,I),n(l)===null&&I===n(c)&&(y?(u(C),C=-1):y=!0,K(S,$-ae))):(I.sortIndex=de,e(l,I),v||p||(v=!0,W(N))),I},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(I){var X=f;return function(){var $=f;f=X;try{return I.apply(this,arguments)}finally{f=$}}}})(Qg);Jg.exports=Qg;var Ix=Jg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux=re,bn=Ix;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var e0=new Set,Ga={};function qr(t,e){Vs(t,e),Vs(t+"Capture",e)}function Vs(t,e){for(Ga[t]=e,t=0;t<e.length;t++)e0.add(e[t])}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=Object.prototype.hasOwnProperty,kx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hp={},fp={};function Fx(t){return Bu.call(fp,t)?!0:Bu.call(hp,t)?!1:kx.test(t)?fp[t]=!0:(hp[t]=!0,!1)}function Ox(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zx(t,e,n,i){if(e===null||typeof e>"u"||Ox(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ch=/[\-:]([a-z])/g;function Rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ch,Rh);Wt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ch,Rh);Wt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ch,Rh);Wt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ph(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zx(e,n,r,i)&&(n=null),i||r===null?Fx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zi=Ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ao=Symbol.for("react.element"),vs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),Nh=Symbol.for("react.strict_mode"),Hu=Symbol.for("react.profiler"),t0=Symbol.for("react.provider"),n0=Symbol.for("react.context"),Lh=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),ju=Symbol.for("react.suspense_list"),Dh=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),i0=Symbol.for("react.offscreen"),pp=Symbol.iterator;function da(t){return t===null||typeof t!="object"?null:(t=pp&&t[pp]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Lc;function Aa(t){if(Lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lc=e&&e[1]||""}return`
`+Lc+t}var Dc=!1;function Ic(t,e){if(!t||Dc)return"";Dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Aa(t):""}function Bx(t){switch(t.tag){case 5:return Aa(t.type);case 16:return Aa("Lazy");case 13:return Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 2:case 15:return t=Ic(t.type,!1),t;case 11:return t=Ic(t.type.render,!1),t;case 1:return t=Ic(t.type,!0),t;default:return""}}function Gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case vs:return"Portal";case Hu:return"Profiler";case Nh:return"StrictMode";case Vu:return"Suspense";case ju:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case n0:return(t.displayName||"Context")+".Consumer";case t0:return(t._context.displayName||"Context")+".Provider";case Lh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dh:return e=t.displayName||null,e!==null?e:Gu(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return Gu(t(e))}catch{}}return null}function Hx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===Nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function r0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vx(t){var e=r0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Co(t){t._valueTracker||(t._valueTracker=Vx(t))}function s0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=r0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wu(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a0(t,e){e=e.checked,e!=null&&Ph(t,"checked",e,!1)}function Xu(t,e){a0(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yu(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yu(t,e,n){(e!=="number"||Ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ca=Array.isArray;function Ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ca(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function o0(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _p(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function l0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?l0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ro,c0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jx=["Webkit","ms","Moz","O"];Object.keys(Da).forEach(function(t){jx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Da[e]=Da[t]})});function u0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Da.hasOwnProperty(t)&&Da[t]?(""+e).trim():e+"px"}function d0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=u0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Gx=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ku(t,e){if(e){if(Gx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ju=null;function Ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qu=null,Ls=null,Ds=null;function xp(t){if(t=_o(t)){if(typeof Qu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=cc(e),Qu(t.stateNode,t.type,e))}}function h0(t){Ls?Ds?Ds.push(t):Ds=[t]:Ls=t}function f0(){if(Ls){var t=Ls,e=Ds;if(Ds=Ls=null,xp(t),e)for(t=0;t<e.length;t++)xp(e[t])}}function p0(t,e){return t(e)}function m0(){}var Uc=!1;function g0(t,e,n){if(Uc)return t(e,n);Uc=!0;try{return p0(t,e,n)}finally{Uc=!1,(Ls!==null||Ds!==null)&&(m0(),f0())}}function Xa(t,e){var n=t.stateNode;if(n===null)return null;var i=cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var ed=!1;if(Ii)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){ed=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{ed=!1}function Wx(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ia=!1,Dl=null,Il=!1,td=null,Xx={onError:function(t){Ia=!0,Dl=t}};function Yx(t,e,n,i,r,s,a,o,l){Ia=!1,Dl=null,Wx.apply(Xx,arguments)}function $x(t,e,n,i,r,s,a,o,l){if(Yx.apply(this,arguments),Ia){if(Ia){var c=Dl;Ia=!1,Dl=null}else throw Error(se(198));Il||(Il=!0,td=c)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yp(t){if(Kr(t)!==t)throw Error(se(188))}function qx(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yp(r),t;if(s===i)return yp(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function _0(t){return t=qx(t),t!==null?x0(t):null}function x0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=x0(t);if(e!==null)return e;t=t.sibling}return null}var y0=bn.unstable_scheduleCallback,Sp=bn.unstable_cancelCallback,Kx=bn.unstable_shouldYield,Zx=bn.unstable_requestPaint,At=bn.unstable_now,Jx=bn.unstable_getCurrentPriorityLevel,Uh=bn.unstable_ImmediatePriority,S0=bn.unstable_UserBlockingPriority,Ul=bn.unstable_NormalPriority,Qx=bn.unstable_LowPriority,M0=bn.unstable_IdlePriority,sc=null,oi=null;function ey(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(sc,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:iy,ty=Math.log,ny=Math.LN2;function iy(t){return t>>>=0,t===0?32:31-(ty(t)/ny|0)|0}var Po=64,No=4194304;function Ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ra(o):(s&=a,s!==0&&(i=Ra(s)))}else a=n&~r,a!==0?i=Ra(a):s!==0&&(i=Ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function ry(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-qn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=ry(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function nd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function w0(){var t=Po;return Po<<=1,!(Po&4194240)&&(Po=64),t}function kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function ay(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function E0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var T0,Fh,b0,A0,C0,id=!1,Lo=[],rr=null,sr=null,ar=null,Ya=new Map,$a=new Map,Zi=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mp(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function fa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_o(e),e!==null&&Fh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ly(t,e,n,i,r){switch(e){case"focusin":return rr=fa(rr,t,e,n,i,r),!0;case"dragenter":return sr=fa(sr,t,e,n,i,r),!0;case"mouseover":return ar=fa(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ya.set(s,fa(Ya.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,$a.set(s,fa($a.get(s)||null,t,e,n,i,r)),!0}return!1}function R0(t){var e=Dr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=v0(n),e!==null){t.blockedOn=e,C0(t.priority,function(){b0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ju=i,n.target.dispatchEvent(i),Ju=null}else return e=_o(n),e!==null&&Fh(e),t.blockedOn=n,!1;e.shift()}return!0}function wp(t,e,n){pl(t)&&n.delete(e)}function cy(){id=!1,rr!==null&&pl(rr)&&(rr=null),sr!==null&&pl(sr)&&(sr=null),ar!==null&&pl(ar)&&(ar=null),Ya.forEach(wp),$a.forEach(wp)}function pa(t,e){t.blockedOn===e&&(t.blockedOn=null,id||(id=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,cy)))}function qa(t){function e(r){return pa(r,t)}if(0<Lo.length){pa(Lo[0],t);for(var n=1;n<Lo.length;n++){var i=Lo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&pa(rr,t),sr!==null&&pa(sr,t),ar!==null&&pa(ar,t),Ya.forEach(e),$a.forEach(e),n=0;n<Zi.length;n++)i=Zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Zi.length&&(n=Zi[0],n.blockedOn===null);)R0(n),n.blockedOn===null&&Zi.shift()}var Is=zi.ReactCurrentBatchConfig,Fl=!0;function uy(t,e,n,i){var r=rt,s=Is.transition;Is.transition=null;try{rt=1,Oh(t,e,n,i)}finally{rt=r,Is.transition=s}}function dy(t,e,n,i){var r=rt,s=Is.transition;Is.transition=null;try{rt=4,Oh(t,e,n,i)}finally{rt=r,Is.transition=s}}function Oh(t,e,n,i){if(Fl){var r=rd(t,e,n,i);if(r===null)Xc(t,e,i,Ol,n),Mp(t,i);else if(ly(r,t,e,n,i))i.stopPropagation();else if(Mp(t,i),e&4&&-1<oy.indexOf(t)){for(;r!==null;){var s=_o(r);if(s!==null&&T0(s),s=rd(t,e,n,i),s===null&&Xc(t,e,i,Ol,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xc(t,e,i,null,n)}}var Ol=null;function rd(t,e,n,i){if(Ol=null,t=Ih(i),t=Dr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ol=t,null}function P0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jx()){case Uh:return 1;case S0:return 4;case Ul:case Qx:return 16;case M0:return 536870912;default:return 16}default:return 16}}var er=null,zh=null,ml=null;function N0(){if(ml)return ml;var t,e=zh,n=e.length,i,r="value"in er?er.value:er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ml=r.slice(t,1<i?1-i:void 0)}function gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Do(){return!0}function Ep(){return!1}function Cn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Do:Ep,this.isPropagationStopped=Ep,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),e}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=Cn(ia),vo=Et({},ia,{view:0,detail:0}),hy=Cn(vo),Fc,Oc,ma,ac=Et({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ma&&(ma&&t.type==="mousemove"?(Fc=t.screenX-ma.screenX,Oc=t.screenY-ma.screenY):Oc=Fc=0,ma=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),Tp=Cn(ac),fy=Et({},ac,{dataTransfer:0}),py=Cn(fy),my=Et({},vo,{relatedTarget:0}),zc=Cn(my),gy=Et({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),vy=Cn(gy),_y=Et({},ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xy=Cn(_y),yy=Et({},ia,{data:0}),bp=Cn(yy),Sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},My={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ey(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wy[t])?!!e[t]:!1}function Hh(){return Ey}var Ty=Et({},vo,{key:function(t){if(t.key){var e=Sy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?My[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hh,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),by=Cn(Ty),Ay=Et({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ap=Cn(Ay),Cy=Et({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hh}),Ry=Cn(Cy),Py=Et({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ny=Cn(Py),Ly=Et({},ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dy=Cn(Ly),Iy=[9,13,27,32],Vh=Ii&&"CompositionEvent"in window,Ua=null;Ii&&"documentMode"in document&&(Ua=document.documentMode);var Uy=Ii&&"TextEvent"in window&&!Ua,L0=Ii&&(!Vh||Ua&&8<Ua&&11>=Ua),Cp=" ",Rp=!1;function D0(t,e){switch(t){case"keyup":return Iy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function ky(t,e){switch(t){case"compositionend":return I0(e);case"keypress":return e.which!==32?null:(Rp=!0,Cp);case"textInput":return t=e.data,t===Cp&&Rp?null:t;default:return null}}function Fy(t,e){if(xs)return t==="compositionend"||!Vh&&D0(t,e)?(t=N0(),ml=zh=er=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return L0&&e.locale!=="ko"?null:e.data;default:return null}}var Oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Oy[t.type]:e==="textarea"}function U0(t,e,n,i){h0(i),e=zl(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ka=null,Ka=null;function zy(t){X0(t,0)}function oc(t){var e=Ms(t);if(s0(e))return t}function By(t,e){if(t==="change")return e}var k0=!1;if(Ii){var Bc;if(Ii){var Hc="oninput"in document;if(!Hc){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),Hc=typeof Np.oninput=="function"}Bc=Hc}else Bc=!1;k0=Bc&&(!document.documentMode||9<document.documentMode)}function Lp(){ka&&(ka.detachEvent("onpropertychange",F0),Ka=ka=null)}function F0(t){if(t.propertyName==="value"&&oc(Ka)){var e=[];U0(e,Ka,t,Ih(t)),g0(zy,e)}}function Hy(t,e,n){t==="focusin"?(Lp(),ka=e,Ka=n,ka.attachEvent("onpropertychange",F0)):t==="focusout"&&Lp()}function Vy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oc(Ka)}function jy(t,e){if(t==="click")return oc(e)}function Gy(t,e){if(t==="input"||t==="change")return oc(e)}function Wy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:Wy;function Za(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bu.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function Dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ip(t,e){var n=Dp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dp(n)}}function O0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function z0(){for(var t=window,e=Ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ll(t.document)}return e}function jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xy(t){var e=z0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O0(n.ownerDocument.documentElement,n)){if(i!==null&&jh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ip(n,s);var a=Ip(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yy=Ii&&"documentMode"in document&&11>=document.documentMode,ys=null,sd=null,Fa=null,ad=!1;function Up(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ad||ys==null||ys!==Ll(i)||(i=ys,"selectionStart"in i&&jh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fa&&Za(Fa,i)||(Fa=i,i=zl(sd,"onSelect"),0<i.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ys)))}function Io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},Vc={},B0={};Ii&&(B0=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function lc(t){if(Vc[t])return Vc[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in B0)return Vc[t]=e[n];return t}var H0=lc("animationend"),V0=lc("animationiteration"),j0=lc("animationstart"),G0=lc("transitionend"),W0=new Map,kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){W0.set(t,e),qr(e,[t])}for(var jc=0;jc<kp.length;jc++){var Gc=kp[jc],$y=Gc.toLowerCase(),qy=Gc[0].toUpperCase()+Gc.slice(1);vr($y,"on"+qy)}vr(H0,"onAnimationEnd");vr(V0,"onAnimationIteration");vr(j0,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(G0,"onTransitionEnd");Vs("onMouseEnter",["mouseout","mouseover"]);Vs("onMouseLeave",["mouseout","mouseover"]);Vs("onPointerEnter",["pointerout","pointerover"]);Vs("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function Fp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$x(i,e,void 0,t),t.currentTarget=null}function X0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Fp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Fp(r,o,c),s=l}}}if(Il)throw t=td,Il=!1,td=null,t}function mt(t,e){var n=e[dd];n===void 0&&(n=e[dd]=new Set);var i=t+"__bubble";n.has(i)||(Y0(e,t,2,!1),n.add(i))}function Wc(t,e,n){var i=0;e&&(i|=4),Y0(n,t,i,e)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function Ja(t){if(!t[Uo]){t[Uo]=!0,e0.forEach(function(n){n!=="selectionchange"&&(Ky.has(n)||Wc(n,!1,t),Wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Uo]||(e[Uo]=!0,Wc("selectionchange",!1,e))}}function Y0(t,e,n,i){switch(P0(e)){case 1:var r=uy;break;case 4:r=dy;break;default:r=Oh}n=r.bind(null,e,n,t),r=void 0,!ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Xc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Dr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}g0(function(){var c=s,d=Ih(n),h=[];e:{var f=W0.get(t);if(f!==void 0){var p=Bh,v=t;switch(t){case"keypress":if(gl(n)===0)break e;case"keydown":case"keyup":p=by;break;case"focusin":v="focus",p=zc;break;case"focusout":v="blur",p=zc;break;case"beforeblur":case"afterblur":p=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ry;break;case H0:case V0:case j0:p=vy;break;case G0:p=Ny;break;case"scroll":p=hy;break;case"wheel":p=Dy;break;case"copy":case"cut":case"paste":p=xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ap}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,_;g!==null;){_=g;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,u!==null&&(S=Xa(g,u),S!=null&&y.push(Qa(g,S,_)))),m)break;g=g.return}0<y.length&&(f=new p(f,v,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Ju&&(v=n.relatedTarget||n.fromElement)&&(Dr(v)||v[Ui]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Dr(v):null,v!==null&&(m=Kr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=Tp,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ap,S="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:Ms(p),_=v==null?f:Ms(v),f=new y(S,g+"leave",p,n,d),f.target=m,f.relatedTarget=_,S=null,Dr(d)===c&&(y=new y(u,g+"enter",v,n,d),y.target=_,y.relatedTarget=m,S=y),m=S,p&&v)t:{for(y=p,u=v,g=0,_=y;_;_=ts(_))g++;for(_=0,S=u;S;S=ts(S))_++;for(;0<g-_;)y=ts(y),g--;for(;0<_-g;)u=ts(u),_--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=ts(y),u=ts(u)}y=null}else y=null;p!==null&&Op(h,f,p,y,!1),v!==null&&m!==null&&Op(h,m,v,y,!0)}}e:{if(f=c?Ms(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var N=By;else if(Pp(f))if(k0)N=Gy;else{N=Vy;var A=Hy}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=jy);if(N&&(N=N(t,c))){U0(h,N,n,d);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Yu(f,"number",f.value)}switch(A=c?Ms(c):window,t){case"focusin":(Pp(A)||A.contentEditable==="true")&&(ys=A,sd=c,Fa=null);break;case"focusout":Fa=sd=ys=null;break;case"mousedown":ad=!0;break;case"contextmenu":case"mouseup":case"dragend":ad=!1,Up(h,n,d);break;case"selectionchange":if(Yy)break;case"keydown":case"keyup":Up(h,n,d)}var T;if(Vh)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else xs?D0(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(L0&&n.locale!=="ko"&&(xs||C!=="onCompositionStart"?C==="onCompositionEnd"&&xs&&(T=N0()):(er=d,zh="value"in er?er.value:er.textContent,xs=!0)),A=zl(c,C),0<A.length&&(C=new bp(C,t,null,n,d),h.push({event:C,listeners:A}),T?C.data=T:(T=I0(n),T!==null&&(C.data=T)))),(T=Uy?ky(t,n):Fy(t,n))&&(c=zl(c,"onBeforeInput"),0<c.length&&(d=new bp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}X0(h,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Xa(t,n),s!=null&&i.unshift(Qa(t,s,r)),s=Xa(t,e),s!=null&&i.push(Qa(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Op(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Xa(n,s),l!=null&&a.unshift(Qa(n,l,o))):r||(l=Xa(n,s),l!=null&&a.push(Qa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Zy=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function zp(t){return(typeof t=="string"?t:""+t).replace(Zy,`
`).replace(Jy,"")}function ko(t,e,n){if(e=zp(e),zp(t)!==e&&n)throw Error(se(425))}function Bl(){}var od=null,ld=null;function cd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ud=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,Bp=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof Bp<"u"?function(t){return Bp.resolve(null).then(t).catch(tS)}:ud;function tS(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),qa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);qa(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ra=Math.random().toString(36).slice(2),si="__reactFiber$"+ra,eo="__reactProps$"+ra,Ui="__reactContainer$"+ra,dd="__reactEvents$"+ra,nS="__reactListeners$"+ra,iS="__reactHandles$"+ra;function Dr(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ui]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hp(t);t!==null;){if(n=t[si])return n;t=Hp(t)}return e}t=n,n=t.parentNode}return null}function _o(t){return t=t[si]||t[Ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function cc(t){return t[eo]||null}var hd=[],ws=-1;function _r(t){return{current:t}}function vt(t){0>ws||(t.current=hd[ws],hd[ws]=null,ws--)}function dt(t,e){ws++,hd[ws]=t.current,t.current=e}var mr={},Jt=_r(mr),fn=_r(!1),Hr=mr;function js(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function Hl(){vt(fn),vt(Jt)}function Vp(t,e,n){if(Jt.current!==mr)throw Error(se(168));dt(Jt,e),dt(fn,n)}function $0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,Hx(t)||"Unknown",r));return Et({},n,i)}function Vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Hr=Jt.current,dt(Jt,t),dt(fn,fn.current),!0}function jp(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=$0(t,e,Hr),i.__reactInternalMemoizedMergedChildContext=t,vt(fn),vt(Jt),dt(Jt,t)):vt(fn),dt(fn,n)}var Mi=null,uc=!1,$c=!1;function q0(t){Mi===null?Mi=[t]:Mi.push(t)}function rS(t){uc=!0,q0(t)}function xr(){if(!$c&&Mi!==null){$c=!0;var t=0,e=rt;try{var n=Mi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,uc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),y0(Uh,xr),r}finally{rt=e,$c=!1}}return null}var Es=[],Ts=0,jl=null,Gl=0,Ln=[],Dn=0,Vr=null,Ti=1,bi="";function Cr(t,e){Es[Ts++]=Gl,Es[Ts++]=jl,jl=t,Gl=e}function K0(t,e,n){Ln[Dn++]=Ti,Ln[Dn++]=bi,Ln[Dn++]=Vr,Vr=t;var i=Ti;t=bi;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ti=1<<32-qn(e)+r|n<<r|i,bi=s+t}else Ti=1<<s|n<<r|i,bi=t}function Gh(t){t.return!==null&&(Cr(t,1),K0(t,1,0))}function Wh(t){for(;t===jl;)jl=Es[--Ts],Es[Ts]=null,Gl=Es[--Ts],Es[Ts]=null;for(;t===Vr;)Vr=Ln[--Dn],Ln[Dn]=null,bi=Ln[--Dn],Ln[Dn]=null,Ti=Ln[--Dn],Ln[Dn]=null}var Tn=null,En=null,xt=!1,Xn=null;function Z0(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,En=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:Ti,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,En=null,!0):!1;default:return!1}}function fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pd(t){if(xt){var e=En;if(e){var n=e;if(!Gp(t,e)){if(fd(t))throw Error(se(418));e=or(n.nextSibling);var i=Tn;e&&Gp(t,e)?Z0(i,n):(t.flags=t.flags&-4097|2,xt=!1,Tn=t)}}else{if(fd(t))throw Error(se(418));t.flags=t.flags&-4097|2,xt=!1,Tn=t}}}function Wp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function Fo(t){if(t!==Tn)return!1;if(!xt)return Wp(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cd(t.type,t.memoizedProps)),e&&(e=En)){if(fd(t))throw J0(),Error(se(418));for(;e;)Z0(t,e),e=or(e.nextSibling)}if(Wp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Tn?or(t.stateNode.nextSibling):null;return!0}function J0(){for(var t=En;t;)t=or(t.nextSibling)}function Gs(){En=Tn=null,xt=!1}function Xh(t){Xn===null?Xn=[t]:Xn.push(t)}var sS=zi.ReactCurrentBatchConfig;function ga(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Oo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xp(t){var e=t._init;return e(t._payload)}function Q0(t){function e(u,g){if(t){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=dr(u,g),u.index=0,u.sibling=null,u}function s(u,g,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=2,g):_):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,_,S){return g===null||g.tag!==6?(g=tu(_,u.mode,S),g.return=u,g):(g=r(g,_),g.return=u,g)}function l(u,g,_,S){var N=_.type;return N===_s?d(u,g,_.props.children,S,_.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qi&&Xp(N)===g.type)?(S=r(g,_.props),S.ref=ga(u,g,_),S.return=u,S):(S=wl(_.type,_.key,_.props,null,u.mode,S),S.ref=ga(u,g,_),S.return=u,S)}function c(u,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=nu(_,u.mode,S),g.return=u,g):(g=r(g,_.children||[]),g.return=u,g)}function d(u,g,_,S,N){return g===null||g.tag!==7?(g=zr(_,u.mode,S,N),g.return=u,g):(g=r(g,_),g.return=u,g)}function h(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=tu(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ao:return _=wl(g.type,g.key,g.props,null,u.mode,_),_.ref=ga(u,null,g),_.return=u,_;case vs:return g=nu(g,u.mode,_),g.return=u,g;case qi:var S=g._init;return h(u,S(g._payload),_)}if(Ca(g)||da(g))return g=zr(g,u.mode,_,null),g.return=u,g;Oo(u,g)}return null}function f(u,g,_,S){var N=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return N!==null?null:o(u,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ao:return _.key===N?l(u,g,_,S):null;case vs:return _.key===N?c(u,g,_,S):null;case qi:return N=_._init,f(u,g,N(_._payload),S)}if(Ca(_)||da(_))return N!==null?null:d(u,g,_,S,null);Oo(u,_)}return null}function p(u,g,_,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(_)||null,o(g,u,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ao:return u=u.get(S.key===null?_:S.key)||null,l(g,u,S,N);case vs:return u=u.get(S.key===null?_:S.key)||null,c(g,u,S,N);case qi:var A=S._init;return p(u,g,_,A(S._payload),N)}if(Ca(S)||da(S))return u=u.get(_)||null,d(g,u,S,N,null);Oo(g,S)}return null}function v(u,g,_,S){for(var N=null,A=null,T=g,C=g=0,E=null;T!==null&&C<_.length;C++){T.index>C?(E=T,T=null):E=T.sibling;var M=f(u,T,_[C],S);if(M===null){T===null&&(T=E);break}t&&T&&M.alternate===null&&e(u,T),g=s(M,g,C),A===null?N=M:A.sibling=M,A=M,T=E}if(C===_.length)return n(u,T),xt&&Cr(u,C),N;if(T===null){for(;C<_.length;C++)T=h(u,_[C],S),T!==null&&(g=s(T,g,C),A===null?N=T:A.sibling=T,A=T);return xt&&Cr(u,C),N}for(T=i(u,T);C<_.length;C++)E=p(T,u,C,_[C],S),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?C:E.key),g=s(E,g,C),A===null?N=E:A.sibling=E,A=E);return t&&T.forEach(function(L){return e(u,L)}),xt&&Cr(u,C),N}function y(u,g,_,S){var N=da(_);if(typeof N!="function")throw Error(se(150));if(_=N.call(_),_==null)throw Error(se(151));for(var A=N=null,T=g,C=g=0,E=null,M=_.next();T!==null&&!M.done;C++,M=_.next()){T.index>C?(E=T,T=null):E=T.sibling;var L=f(u,T,M.value,S);if(L===null){T===null&&(T=E);break}t&&T&&L.alternate===null&&e(u,T),g=s(L,g,C),A===null?N=L:A.sibling=L,A=L,T=E}if(M.done)return n(u,T),xt&&Cr(u,C),N;if(T===null){for(;!M.done;C++,M=_.next())M=h(u,M.value,S),M!==null&&(g=s(M,g,C),A===null?N=M:A.sibling=M,A=M);return xt&&Cr(u,C),N}for(T=i(u,T);!M.done;C++,M=_.next())M=p(T,u,C,M.value,S),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?C:M.key),g=s(M,g,C),A===null?N=M:A.sibling=M,A=M);return t&&T.forEach(function(z){return e(u,z)}),xt&&Cr(u,C),N}function m(u,g,_,S){if(typeof _=="object"&&_!==null&&_.type===_s&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ao:e:{for(var N=_.key,A=g;A!==null;){if(A.key===N){if(N=_.type,N===_s){if(A.tag===7){n(u,A.sibling),g=r(A,_.props.children),g.return=u,u=g;break e}}else if(A.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qi&&Xp(N)===A.type){n(u,A.sibling),g=r(A,_.props),g.ref=ga(u,A,_),g.return=u,u=g;break e}n(u,A);break}else e(u,A);A=A.sibling}_.type===_s?(g=zr(_.props.children,u.mode,S,_.key),g.return=u,u=g):(S=wl(_.type,_.key,_.props,null,u.mode,S),S.ref=ga(u,g,_),S.return=u,u=S)}return a(u);case vs:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),g=r(g,_.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=nu(_,u.mode,S),g.return=u,u=g}return a(u);case qi:return A=_._init,m(u,g,A(_._payload),S)}if(Ca(_))return v(u,g,_,S);if(da(_))return y(u,g,_,S);Oo(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,_),g.return=u,u=g):(n(u,g),g=tu(_,u.mode,S),g.return=u,u=g),a(u)):n(u,g)}return m}var Ws=Q0(!0),ev=Q0(!1),Wl=_r(null),Xl=null,bs=null,Yh=null;function $h(){Yh=bs=Xl=null}function qh(t){var e=Wl.current;vt(Wl),t._currentValue=e}function md(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){Xl=t,Yh=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(Yh!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Xl===null)throw Error(se(308));bs=t,Xl.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Ir=null;function Kh(t){Ir===null?Ir=[t]:Ir.push(t)}function tv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kh(e)):(n.next=r.next,r.next=n),e.interleaved=n,ki(t,i)}function ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function Zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ki(t,n)}return r=i.interleaved,r===null?(e.next=e,Kh(i)):(e.next=r.next,r.next=e),i.interleaved=e,ki(t,n)}function vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kh(t,n)}}function Yp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yl(t,e,n,i){var r=t.updateQueue;Ki=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,y=o;switch(f=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(p,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(p,h,f):v,f==null)break e;h=Et({},h,f);break e;case 2:Ki=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Gr|=a,t.lanes=a,t.memoizedState=h}}function $p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var xo={},li=_r(xo),to=_r(xo),no=_r(xo);function Ur(t){if(t===xo)throw Error(se(174));return t}function Jh(t,e){switch(dt(no,e),dt(to,t),dt(li,xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}vt(li),dt(li,e)}function Xs(){vt(li),vt(to),vt(no)}function iv(t){Ur(no.current);var e=Ur(li.current),n=qu(e,t.type);e!==n&&(dt(to,t),dt(li,n))}function Qh(t){to.current===t&&(vt(li),vt(to))}var St=_r(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function ef(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var _l=zi.ReactCurrentDispatcher,Kc=zi.ReactCurrentBatchConfig,jr=0,wt=null,Lt=null,Ft=null,ql=!1,Oa=!1,io=0,aS=0;function Yt(){throw Error(se(321))}function tf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function nf(t,e,n,i,r,s){if(jr=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=t===null||t.memoizedState===null?uS:dS,t=n(i,r),Oa){s=0;do{if(Oa=!1,io=0,25<=s)throw Error(se(301));s+=1,Ft=Lt=null,e.updateQueue=null,_l.current=hS,t=n(i,r)}while(Oa)}if(_l.current=Kl,e=Lt!==null&&Lt.next!==null,jr=0,Ft=Lt=wt=null,ql=!1,e)throw Error(se(300));return t}function rf(){var t=io!==0;return io=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?wt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Fn(){if(Lt===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Ft===null?wt.memoizedState:Ft.next;if(e!==null)Ft=e,Lt=t;else{if(t===null)throw Error(se(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Ft===null?wt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function ro(t,e){return typeof e=="function"?e(t):e}function Zc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((jr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,wt.lanes|=d,Gr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ei(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,Gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ei(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function rv(){}function sv(t,e){var n=wt,i=Fn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,sf(lv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,so(9,ov.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(se(349));jr&30||av(n,e,r)}return r}function av(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ov(t,e,n,i){e.value=n,e.getSnapshot=i,cv(e)&&uv(t)}function lv(t,e,n){return n(function(){cv(e)&&uv(t)})}function cv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function uv(t){var e=ki(t,1);e!==null&&Kn(e,t,1,-1)}function qp(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:t},e.queue=t,t=t.dispatch=cS.bind(null,wt,t),[e.memoizedState,t]}function so(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function dv(){return Fn().memoizedState}function xl(t,e,n,i){var r=ii();wt.flags|=t,r.memoizedState=so(1|e,n,void 0,i===void 0?null:i)}function dc(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var a=Lt.memoizedState;if(s=a.destroy,i!==null&&tf(i,a.deps)){r.memoizedState=so(e,n,s,i);return}}wt.flags|=t,r.memoizedState=so(1|e,n,s,i)}function Kp(t,e){return xl(8390656,8,t,e)}function sf(t,e){return dc(2048,8,t,e)}function hv(t,e){return dc(4,2,t,e)}function fv(t,e){return dc(4,4,t,e)}function pv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mv(t,e,n){return n=n!=null?n.concat([t]):null,dc(4,4,pv.bind(null,e,t),n)}function af(){}function gv(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vv(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _v(t,e,n){return jr&21?(ei(n,e)||(n=w0(),wt.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function oS(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Kc.transition;Kc.transition={};try{t(!1),e()}finally{rt=n,Kc.transition=i}}function xv(){return Fn().memoizedState}function lS(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},yv(t))Sv(e,n);else if(n=tv(t,e,n,i),n!==null){var r=rn();Kn(n,t,i,r),Mv(n,e,i)}}function cS(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(yv(t))Sv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ei(o,a)){var l=e.interleaved;l===null?(r.next=r,Kh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=tv(t,e,r,i),n!==null&&(r=rn(),Kn(n,t,i,r),Mv(n,e,i))}}function yv(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function Sv(t,e){Oa=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kh(t,n)}}var Kl={readContext:kn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},uS={readContext:kn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:Kp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=lS.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:qp,useDebugValue:af,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=qp(!1),e=t[0];return t=oS.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=ii();if(xt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Bt===null)throw Error(se(349));jr&30||av(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kp(lv.bind(null,i,s,t),[t]),i.flags|=2048,so(9,ov.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=Bt.identifierPrefix;if(xt){var n=bi,i=Ti;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dS={readContext:kn,useCallback:gv,useContext:kn,useEffect:sf,useImperativeHandle:mv,useInsertionEffect:hv,useLayoutEffect:fv,useMemo:vv,useReducer:Zc,useRef:dv,useState:function(){return Zc(ro)},useDebugValue:af,useDeferredValue:function(t){var e=Fn();return _v(e,Lt.memoizedState,t)},useTransition:function(){var t=Zc(ro)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:sv,useId:xv,unstable_isNewReconciler:!1},hS={readContext:kn,useCallback:gv,useContext:kn,useEffect:sf,useImperativeHandle:mv,useInsertionEffect:hv,useLayoutEffect:fv,useMemo:vv,useReducer:Jc,useRef:dv,useState:function(){return Jc(ro)},useDebugValue:af,useDeferredValue:function(t){var e=Fn();return Lt===null?e.memoizedState=t:_v(e,Lt.memoizedState,t)},useTransition:function(){var t=Jc(ro)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:sv,useId:xv,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hc={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=ur(t),s=Pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Kn(e,t,r,i),vl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=ur(t),s=Pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Kn(e,t,r,i),vl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=ur(t),r=Pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(Kn(e,t,i,n),vl(e,t,i))}};function Zp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Za(n,i)||!Za(r,s):!0}function wv(t,e,n){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=pn(e)?Hr:Jt.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&hc.enqueueReplaceState(e,e.state,null)}function vd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=pn(e)?Hr:Jt.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hc.enqueueReplaceState(r,r.state,null),Yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",i=e;do n+=Bx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fS=typeof WeakMap=="function"?WeakMap:Map;function Ev(t,e,n){n=Pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Jl||(Jl=!0,Cd=i),_d(t,e)},n}function Tv(t,e,n){n=Pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){_d(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_d(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Qp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=AS.bind(null,t,e,n),e.then(t,t))}function em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pi(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var pS=zi.ReactCurrentOwner,hn=!1;function en(t,e,n,i){e.child=t===null?ev(e,null,n,i):Ws(e,t.child,n,i)}function nm(t,e,n,i,r){n=n.render;var s=e.ref;return Us(e,r),i=nf(t,e,n,i,s,r),n=rf(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(xt&&n&&Gh(e),e.flags|=1,en(t,e,i,r),e.child)}function im(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,bv(t,e,s,i,r)):(t=wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Za,n(a,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function bv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Za(s,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return xd(t,e,n,i,r)}function Av(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Cs,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Cs,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Cs,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Cs,Sn),Sn|=i;return en(t,e,r,n),e.child}function Cv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xd(t,e,n,i,r){var s=pn(n)?Hr:Jt.current;return s=js(e,s),Us(e,r),n=nf(t,e,n,i,s,r),i=rf(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(xt&&i&&Gh(e),e.flags|=1,en(t,e,n,r),e.child)}function rm(t,e,n,i,r){if(pn(n)){var s=!0;Vl(e)}else s=!1;if(Us(e,r),e.stateNode===null)yl(t,e),wv(e,n,i),vd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=pn(n)?Hr:Jt.current,c=js(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Jp(e,a,i,c),Ki=!1;var f=e.memoizedState;a.state=f,Yl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||fn.current||Ki?(typeof d=="function"&&(gd(e,n,d,i),l=e.memoizedState),(o=Ki||Zp(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,nv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Gn(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=pn(n)?Hr:Jt.current,l=js(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&Jp(e,a,i,l),Ki=!1,f=e.memoizedState,a.state=f,Yl(e,i,a,r);var v=e.memoizedState;o!==h||f!==v||fn.current||Ki?(typeof p=="function"&&(gd(e,n,p,i),v=e.memoizedState),(c=Ki||Zp(e,n,c,i,f,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return yd(t,e,n,i,s,r)}function yd(t,e,n,i,r,s){Cv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&jp(e,n,!1),Fi(t,e,s);i=e.stateNode,pS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ws(e,t.child,null,s),e.child=Ws(e,null,o,s)):en(t,e,o,s),e.memoizedState=i.state,r&&jp(e,n,!0),e.child}function Rv(t){var e=t.stateNode;e.pendingContext?Vp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vp(t,e.context,!1),Jh(t,e.containerInfo)}function sm(t,e,n,i,r){return Gs(),Xh(r),e.flags|=256,en(t,e,n,i),e.child}var Sd={dehydrated:null,treeContext:null,retryLane:0};function Md(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pv(t,e,n){var i=e.pendingProps,r=St.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(St,r&1),t===null)return pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=mc(a,i,0,null),t=zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Md(n),e.memoizedState=Sd,t):of(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return mS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=dr(o,s):(s=zr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Md(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Sd,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function of(t,e){return e=mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function zo(t,e,n,i){return i!==null&&Xh(i),Ws(e,t.child,null,n),t=of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Qc(Error(se(422))),zo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=mc({mode:"visible",children:i.children},r,0,null),s=zr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ws(e,t.child,null,a),e.child.memoizedState=Md(a),e.memoizedState=Sd,s);if(!(e.mode&1))return zo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=Qc(s,i,void 0),zo(t,e,a,i)}if(o=(a&t.childLanes)!==0,hn||o){if(i=Bt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ki(t,r),Kn(i,t,r,-1))}return ff(),i=Qc(Error(se(421))),zo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=CS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=or(r.nextSibling),Tn=e,xt=!0,Xn=null,t!==null&&(Ln[Dn++]=Ti,Ln[Dn++]=bi,Ln[Dn++]=Vr,Ti=t.id,bi=t.overflow,Vr=e),e=of(e,i.children),e.flags|=4096,e)}function am(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),md(t.return,e,n)}function eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Nv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&am(t,n,e);else if(t.tag===19)am(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$l(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}eu(e,!0,n,null,s);break;case"together":eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gS(t,e,n){switch(e.tag){case 3:Rv(e),Gs();break;case 5:iv(e);break;case 1:pn(e.type)&&Vl(e);break;case 4:Jh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?Pv(t,e,n):(dt(St,St.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);dt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Nv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Av(t,e,n)}return Fi(t,e,n)}var Lv,wd,Dv,Iv;Lv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wd=function(){};Dv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(li.current);var s=null;switch(n){case"input":r=Wu(t,r),i=Wu(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=$u(t,r),i=$u(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Bl)}Ku(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ga.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ga.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Iv=function(t,e,n,i){n!==i&&(e.flags|=4)};function va(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function vS(t,e,n){var i=e.pendingProps;switch(Wh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return pn(e.type)&&Hl(),$t(e),null;case 3:return i=e.stateNode,Xs(),vt(fn),vt(Jt),ef(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(Nd(Xn),Xn=null))),wd(t,e),$t(e),null;case 5:Qh(e);var r=Ur(no.current);if(n=e.type,t!==null&&e.stateNode!=null)Dv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return $t(e),null}if(t=Ur(li.current),Fo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[eo]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<Pa.length;r++)mt(Pa[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":mp(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":vp(i,s),mt("invalid",i)}Ku(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ko(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ko(i.textContent,o,t),r=["children",""+o]):Ga.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&mt("scroll",i)}switch(n){case"input":Co(i),gp(i,s,!0);break;case"textarea":Co(i),_p(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Bl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=l0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[si]=e,t[eo]=i,Lv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Zu(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Pa.length;r++)mt(Pa[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":mp(t,i),r=Wu(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),mt("invalid",t);break;case"textarea":vp(t,i),r=$u(t,i),mt("invalid",t);break;default:r=i}Ku(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?d0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&c0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wa(t,l):typeof l=="number"&&Wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ga.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Ph(t,s,l,a))}switch(n){case"input":Co(t),gp(t,i,!1);break;case"textarea":Co(t),_p(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ns(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Bl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)Iv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Ur(no.current),Ur(li.current),Fo(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:ko(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ko(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return $t(e),null;case 13:if(vt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&En!==null&&e.mode&1&&!(e.flags&128))J0(),Gs(),e.flags|=98560,s=!1;else if(s=Fo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[si]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else Xn!==null&&(Nd(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Dt===0&&(Dt=3):ff())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Xs(),wd(t,e),t===null&&Ja(e.stateNode.containerInfo),$t(e),null;case 10:return qh(e.type._context),$t(e),null;case 17:return pn(e.type)&&Hl(),$t(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)va(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=$l(t),a!==null){for(e.flags|=128,va(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>$s&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304)}else{if(!i)if(t=$l(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!xt)return $t(e),null}else 2*At()-s.renderingStartTime>$s&&n!==1073741824&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=St.current,dt(St,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return hf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function _S(t,e){switch(Wh(e),e.tag){case 1:return pn(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),vt(fn),vt(Jt),ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qh(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return Xs(),null;case 10:return qh(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var Bo=!1,Zt=!1,xS=typeof WeakSet=="function"?WeakSet:Set,_e=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function Ed(t,e,n){try{n()}catch(i){bt(t,e,i)}}var om=!1;function yS(t,e){if(od=Fl,t=z0(),jh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++d===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ld={focusedElem:t,selectionRange:n},Fl=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Gn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){bt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return v=om,om=!1,v}function za(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ed(e,n,s)}r=r.next}while(r!==i)}}function fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Uv(t){var e=t.alternate;e!==null&&(t.alternate=null,Uv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[eo],delete e[dd],delete e[nS],delete e[iS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kv(t){return t.tag===5||t.tag===3||t.tag===4}function lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bl));else if(i!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}function Ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}var Ht=null,Wn=!1;function Vi(t,e,n){for(n=n.child;n!==null;)Fv(t,e,n),n=n.sibling}function Fv(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 5:Zt||As(n,e);case 6:var i=Ht,r=Wn;Ht=null,Vi(t,e,n),Ht=i,Wn=r,Ht!==null&&(Wn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Wn?(t=Ht,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),qa(t)):Yc(Ht,n.stateNode));break;case 4:i=Ht,r=Wn,Ht=n.stateNode.containerInfo,Wn=!0,Vi(t,e,n),Ht=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ed(n,e,a),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!Zt&&(As(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){bt(n,e,o)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Vi(t,e,n),Zt=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function cm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xS),e.forEach(function(i){var r=RS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ht=o.stateNode,Wn=!1;break e;case 3:Ht=o.stateNode.containerInfo,Wn=!0;break e;case 4:Ht=o.stateNode.containerInfo,Wn=!0;break e}o=o.return}if(Ht===null)throw Error(se(160));Fv(s,a,r),Ht=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ov(e,t),e=e.sibling}function Ov(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ni(t),i&4){try{za(3,t,t.return),fc(3,t)}catch(y){bt(t,t.return,y)}try{za(5,t,t.return)}catch(y){bt(t,t.return,y)}}break;case 1:Bn(e,t),ni(t),i&512&&n!==null&&As(n,n.return);break;case 5:if(Bn(e,t),ni(t),i&512&&n!==null&&As(n,n.return),t.flags&32){var r=t.stateNode;try{Wa(r,"")}catch(y){bt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&a0(r,s),Zu(o,a);var c=Zu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?d0(r,h):d==="dangerouslySetInnerHTML"?c0(r,h):d==="children"?Wa(r,h):Ph(r,d,h,c)}switch(o){case"input":Xu(r,s);break;case"textarea":o0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ns(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ns(r,!!s.multiple,s.defaultValue,!0):Ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[eo]=s}catch(y){bt(t,t.return,y)}}break;case 6:if(Bn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){bt(t,t.return,y)}}break;case 3:if(Bn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{qa(e.containerInfo)}catch(y){bt(t,t.return,y)}break;case 4:Bn(e,t),ni(t);break;case 13:Bn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(uf=At())),i&4&&cm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||d,Bn(e,t),Zt=c):Bn(e,t),ni(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(_e=t,d=t.child;d!==null;){for(h=_e=d;_e!==null;){switch(f=_e,p=f.child,f.tag){case 0:case 11:case 14:case 15:za(4,f,f.return);break;case 1:As(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){bt(i,n,y)}}break;case 5:As(f,f.return);break;case 22:if(f.memoizedState!==null){dm(h);continue}}p!==null?(p.return=f,_e=p):dm(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=u0("display",a))}catch(y){bt(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){bt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Bn(e,t),ni(t),i&4&&cm(t);break;case 21:break;default:Bn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Wa(r,""),i.flags&=-33);var s=lm(t);Ad(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=lm(t);bd(t,o,a);break;default:throw Error(se(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SS(t,e,n){_e=t,zv(t)}function zv(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Bo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Zt;o=Bo;var c=Zt;if(Bo=a,(Zt=l)&&!c)for(_e=r;_e!==null;)a=_e,l=a.child,a.tag===22&&a.memoizedState!==null?hm(r):l!==null?(l.return=a,_e=l):hm(r);for(;s!==null;)_e=s,zv(s),s=s.sibling;_e=r,Bo=o,Zt=c}um(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):um(t)}}function um(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||fc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$p(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$p(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&qa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Zt||e.flags&512&&Td(e)}catch(f){bt(e,e.return,f)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function dm(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function hm(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fc(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{Td(e)}catch(l){bt(e,s,l)}break;case 5:var a=e.return;try{Td(e)}catch(l){bt(e,a,l)}}}catch(l){bt(e,e.return,l)}if(e===t){_e=null;break}var o=e.sibling;if(o!==null){o.return=e.return,_e=o;break}_e=e.return}}var MS=Math.ceil,Zl=zi.ReactCurrentDispatcher,lf=zi.ReactCurrentOwner,Un=zi.ReactCurrentBatchConfig,Je=0,Bt=null,Rt=null,jt=0,Sn=0,Cs=_r(0),Dt=0,ao=null,Gr=0,pc=0,cf=0,Ba=null,dn=null,uf=0,$s=1/0,Si=null,Jl=!1,Cd=null,cr=null,Ho=!1,tr=null,Ql=0,Ha=0,Rd=null,Sl=-1,Ml=0;function rn(){return Je&6?At():Sl!==-1?Sl:Sl=At()}function ur(t){return t.mode&1?Je&2&&jt!==0?jt&-jt:sS.transition!==null?(Ml===0&&(Ml=w0()),Ml):(t=rt,t!==0||(t=window.event,t=t===void 0?16:P0(t.type)),t):1}function Kn(t,e,n,i){if(50<Ha)throw Ha=0,Rd=null,Error(se(185));go(t,n,i),(!(Je&2)||t!==Bt)&&(t===Bt&&(!(Je&2)&&(pc|=n),Dt===4&&Ji(t,jt)),mn(t,i),n===1&&Je===0&&!(e.mode&1)&&($s=At()+500,uc&&xr()))}function mn(t,e){var n=t.callbackNode;sy(t,e);var i=kl(t,t===Bt?jt:0);if(i===0)n!==null&&Sp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sp(n),e===1)t.tag===0?rS(fm.bind(null,t)):q0(fm.bind(null,t)),eS(function(){!(Je&6)&&xr()}),n=null;else{switch(E0(i)){case 1:n=Uh;break;case 4:n=S0;break;case 16:n=Ul;break;case 536870912:n=M0;break;default:n=Ul}n=Yv(n,Bv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bv(t,e){if(Sl=-1,Ml=0,Je&6)throw Error(se(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var i=kl(t,t===Bt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ec(t,i);else{e=i;var r=Je;Je|=2;var s=Vv();(Bt!==t||jt!==e)&&(Si=null,$s=At()+500,Or(t,e));do try{TS();break}catch(o){Hv(t,o)}while(!0);$h(),Zl.current=s,Je=r,Rt!==null?e=0:(Bt=null,jt=0,e=Dt)}if(e!==0){if(e===2&&(r=nd(t),r!==0&&(i=r,e=Pd(t,r))),e===1)throw n=ao,Or(t,0),Ji(t,i),mn(t,At()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!wS(r)&&(e=ec(t,i),e===2&&(s=nd(t),s!==0&&(i=s,e=Pd(t,s))),e===1))throw n=ao,Or(t,0),Ji(t,i),mn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Rr(t,dn,Si);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=uf+500-At(),10<e)){if(kl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ud(Rr.bind(null,t,dn,Si),e);break}Rr(t,dn,Si);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-qn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*MS(i/1960))-i,10<i){t.timeoutHandle=ud(Rr.bind(null,t,dn,Si),i);break}Rr(t,dn,Si);break;case 5:Rr(t,dn,Si);break;default:throw Error(se(329))}}}return mn(t,At()),t.callbackNode===n?Bv.bind(null,t):null}function Pd(t,e){var n=Ba;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=ec(t,e),t!==2&&(e=dn,dn=n,e!==null&&Nd(e)),t}function Nd(t){dn===null?dn=t:dn.push.apply(dn,t)}function wS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~cf,e&=~pc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function fm(t){if(Je&6)throw Error(se(327));ks();var e=kl(t,0);if(!(e&1))return mn(t,At()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var i=nd(t);i!==0&&(e=i,n=Pd(t,i))}if(n===1)throw n=ao,Or(t,0),Ji(t,e),mn(t,At()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,dn,Si),mn(t,At()),null}function df(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&($s=At()+500,uc&&xr())}}function Wr(t){tr!==null&&tr.tag===0&&!(Je&6)&&ks();var e=Je;Je|=1;var n=Un.transition,i=rt;try{if(Un.transition=null,rt=1,t)return t()}finally{rt=i,Un.transition=n,Je=e,!(Je&6)&&xr()}}function hf(){Sn=Cs.current,vt(Cs)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Qy(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(Wh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hl();break;case 3:Xs(),vt(fn),vt(Jt),ef();break;case 5:Qh(i);break;case 4:Xs();break;case 13:vt(St);break;case 19:vt(St);break;case 10:qh(i.type._context);break;case 22:case 23:hf()}n=n.return}if(Bt=t,Rt=t=dr(t.current,null),jt=Sn=e,Dt=0,ao=null,cf=pc=Gr=0,dn=Ba=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ir=null}return t}function Hv(t,e){do{var n=Rt;try{if($h(),_l.current=Kl,ql){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ql=!1}if(jr=0,Ft=Lt=wt=null,Oa=!1,io=0,lf.current=null,n===null||n.return===null){Dt=1,ao=e,Rt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=jt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=em(a);if(p!==null){p.flags&=-257,tm(p,a,o,s,e),p.mode&1&&Qp(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Qp(s,c,e),ff();break e}l=Error(se(426))}}else if(xt&&o.mode&1){var m=em(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),tm(m,a,o,s,e),Xh(Ys(l,o));break e}}s=l=Ys(l,o),Dt!==4&&(Dt=2),Ba===null?Ba=[s]:Ba.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Ev(s,l,e);Yp(s,u);break e;case 1:o=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(cr===null||!cr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Tv(s,o,e);Yp(s,S);break e}}s=s.return}while(s!==null)}Gv(n)}catch(N){e=N,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function Vv(){var t=Zl.current;return Zl.current=Kl,t===null?Kl:t}function ff(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Bt===null||!(Gr&268435455)&&!(pc&268435455)||Ji(Bt,jt)}function ec(t,e){var n=Je;Je|=2;var i=Vv();(Bt!==t||jt!==e)&&(Si=null,Or(t,e));do try{ES();break}catch(r){Hv(t,r)}while(!0);if($h(),Je=n,Zl.current=i,Rt!==null)throw Error(se(261));return Bt=null,jt=0,Dt}function ES(){for(;Rt!==null;)jv(Rt)}function TS(){for(;Rt!==null&&!Kx();)jv(Rt)}function jv(t){var e=Xv(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?Gv(t):Rt=e,lf.current=null}function Gv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_S(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Rt=null;return}}else if(n=vS(n,e,Sn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Dt===0&&(Dt=5)}function Rr(t,e,n){var i=rt,r=Un.transition;try{Un.transition=null,rt=1,bS(t,e,n,i)}finally{Un.transition=r,rt=i}return null}function bS(t,e,n,i){do ks();while(tr!==null);if(Je&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ay(t,s),t===Bt&&(Rt=Bt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,Yv(Ul,function(){return ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var a=rt;rt=1;var o=Je;Je|=4,lf.current=null,yS(t,n),Ov(n,t),Xy(ld),Fl=!!od,ld=od=null,t.current=n,SS(n),Zx(),Je=o,rt=a,Un.transition=s}else t.current=n;if(Ho&&(Ho=!1,tr=t,Ql=r),s=t.pendingLanes,s===0&&(cr=null),ey(n.stateNode),mn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Jl)throw Jl=!1,t=Cd,Cd=null,t;return Ql&1&&t.tag!==0&&ks(),s=t.pendingLanes,s&1?t===Rd?Ha++:(Ha=0,Rd=t):Ha=0,xr(),null}function ks(){if(tr!==null){var t=E0(Ql),e=Un.transition,n=rt;try{if(Un.transition=null,rt=16>t?16:t,tr===null)var i=!1;else{if(t=tr,tr=null,Ql=0,Je&6)throw Error(se(331));var r=Je;for(Je|=4,_e=t.current;_e!==null;){var s=_e,a=s.child;if(_e.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(_e=c;_e!==null;){var d=_e;switch(d.tag){case 0:case 11:case 15:za(8,d,s)}var h=d.child;if(h!==null)h.return=d,_e=h;else for(;_e!==null;){d=_e;var f=d.sibling,p=d.return;if(Uv(d),d===c){_e=null;break}if(f!==null){f.return=p,_e=f;break}_e=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}_e=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,_e=a;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:za(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,_e=u;break e}_e=s.return}}var g=t.current;for(_e=g;_e!==null;){a=_e;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,_e=_;else e:for(a=g;_e!==null;){if(o=_e,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:fc(9,o)}}catch(N){bt(o,o.return,N)}if(o===a){_e=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,_e=S;break e}_e=o.return}}if(Je=r,xr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(sc,t)}catch{}i=!0}return i}finally{rt=n,Un.transition=e}}return!1}function pm(t,e,n){e=Ys(n,e),e=Ev(t,e,1),t=lr(t,e,1),e=rn(),t!==null&&(go(t,1,e),mn(t,e))}function bt(t,e,n){if(t.tag===3)pm(t,t,n);else for(;e!==null;){if(e.tag===3){pm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=Ys(n,t),t=Tv(e,t,1),e=lr(e,t,1),t=rn(),e!==null&&(go(e,1,t),mn(e,t));break}}e=e.return}}function AS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(jt&n)===n&&(Dt===4||Dt===3&&(jt&130023424)===jt&&500>At()-uf?Or(t,0):cf|=n),mn(t,e)}function Wv(t,e){e===0&&(t.mode&1?(e=No,No<<=1,!(No&130023424)&&(No=4194304)):e=1);var n=rn();t=ki(t,e),t!==null&&(go(t,e,n),mn(t,n))}function CS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wv(t,n)}function RS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Wv(t,n)}var Xv;Xv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,gS(t,e,n);hn=!!(t.flags&131072)}else hn=!1,xt&&e.flags&1048576&&K0(e,Gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yl(t,e),t=e.pendingProps;var r=js(e,Jt.current);Us(e,n),r=nf(null,e,i,t,r,n);var s=rf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,Vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zh(e),r.updater=hc,e.stateNode=r,r._reactInternals=e,vd(e,i,t,n),e=yd(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&Gh(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=NS(i),t=Gn(i,t),r){case 0:e=xd(null,e,i,t,n);break e;case 1:e=rm(null,e,i,t,n);break e;case 11:e=nm(null,e,i,t,n);break e;case 14:e=im(null,e,i,Gn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),xd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),rm(t,e,i,r,n);case 3:e:{if(Rv(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,nv(t,e),Yl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(se(423)),e),e=sm(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(se(424)),e),e=sm(t,e,i,n,r);break e}else for(En=or(e.stateNode.containerInfo.firstChild),Tn=e,xt=!0,Xn=null,n=ev(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),i===r){e=Fi(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return iv(e),t===null&&pd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,cd(i,r)?a=null:s!==null&&cd(i,s)&&(e.flags|=32),Cv(t,e),en(t,e,a,n),e.child;case 6:return t===null&&pd(e),null;case 13:return Pv(t,e,n);case 4:return Jh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ws(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),nm(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,dt(Wl,i._currentValue),i._currentValue=a,s!==null)if(ei(s.value,a)){if(s.children===r.children&&!fn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),md(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),md(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Us(e,n),r=kn(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),im(t,e,i,r,n);case 15:return bv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),yl(t,e),e.tag=1,pn(i)?(t=!0,Vl(e)):t=!1,Us(e,n),wv(e,i,r),vd(e,i,r,n),yd(null,e,i,!0,t,n);case 19:return Nv(t,e,n);case 22:return Av(t,e,n)}throw Error(se(156,e.tag))};function Yv(t,e){return y0(t,e)}function PS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new PS(t,e,n,i)}function pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function NS(t){if(typeof t=="function")return pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lh)return 11;if(t===Dh)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")pf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case _s:return zr(n.children,r,s,e);case Nh:a=8,r|=8;break;case Hu:return t=In(12,n,e,r|2),t.elementType=Hu,t.lanes=s,t;case Vu:return t=In(13,n,e,r),t.elementType=Vu,t.lanes=s,t;case ju:return t=In(19,n,e,r),t.elementType=ju,t.lanes=s,t;case i0:return mc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case t0:a=10;break e;case n0:a=9;break e;case Lh:a=11;break e;case Dh:a=14;break e;case qi:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=In(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function zr(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function mc(t,e,n,i){return t=In(22,t,i,e),t.elementType=i0,t.lanes=n,t.stateNode={isHidden:!1},t}function tu(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function nu(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function mf(t,e,n,i,r,s,a,o,l){return t=new LS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zh(s),t}function DS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function $v(t){if(!t)return mr;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(pn(n))return $0(t,n,e)}return e}function qv(t,e,n,i,r,s,a,o,l){return t=mf(n,i,!0,t,r,s,a,o,l),t.context=$v(null),n=t.current,i=rn(),r=ur(n),s=Pi(i,r),s.callback=e??null,lr(n,s,r),t.current.lanes=r,go(t,r,i),mn(t,i),t}function gc(t,e,n,i){var r=e.current,s=rn(),a=ur(r);return n=$v(n),e.context===null?e.context=n:e.pendingContext=n,e=Pi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,a),t!==null&&(Kn(t,r,a,s),vl(t,r,a)),a}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gf(t,e){mm(t,e),(t=t.alternate)&&mm(t,e)}function IS(){return null}var Kv=typeof reportError=="function"?reportError:function(t){console.error(t)};function vf(t){this._internalRoot=t}vc.prototype.render=vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));gc(t,e,null,null)};vc.prototype.unmount=vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){gc(null,t,null,null)}),e[Ui]=null}};function vc(t){this._internalRoot=t}vc.prototype.unstable_scheduleHydration=function(t){if(t){var e=A0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zi.length&&e!==0&&e<Zi[n].priority;n++);Zi.splice(n,0,t),n===0&&R0(t)}};function _f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gm(){}function US(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tc(a);s.call(c)}}var a=qv(e,i,t,0,null,!1,!1,"",gm);return t._reactRootContainer=a,t[Ui]=a.current,Ja(t.nodeType===8?t.parentNode:t),Wr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=tc(l);o.call(c)}}var l=mf(t,0,!1,null,null,!1,!1,"",gm);return t._reactRootContainer=l,t[Ui]=l.current,Ja(t.nodeType===8?t.parentNode:t),Wr(function(){gc(e,l,n,i)}),l}function xc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=tc(a);o.call(l)}}gc(e,a,t,r)}else a=US(n,e,t,r,i);return tc(a)}T0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ra(e.pendingLanes);n!==0&&(kh(e,n|1),mn(e,At()),!(Je&6)&&($s=At()+500,xr()))}break;case 13:Wr(function(){var i=ki(t,1);if(i!==null){var r=rn();Kn(i,t,1,r)}}),gf(t,1)}};Fh=function(t){if(t.tag===13){var e=ki(t,134217728);if(e!==null){var n=rn();Kn(e,t,134217728,n)}gf(t,134217728)}};b0=function(t){if(t.tag===13){var e=ur(t),n=ki(t,e);if(n!==null){var i=rn();Kn(n,t,e,i)}gf(t,e)}};A0=function(){return rt};C0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Qu=function(t,e,n){switch(e){case"input":if(Xu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=cc(i);if(!r)throw Error(se(90));s0(i),Xu(i,r)}}}break;case"textarea":o0(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};p0=df;m0=Wr;var kS={usingClientEntryPoint:!1,Events:[_o,Ms,cc,h0,f0,df]},_a={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FS={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_0(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||IS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{sc=Vo.inject(FS),oi=Vo}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kS;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_f(e))throw Error(se(200));return DS(t,e,null,n)};An.createRoot=function(t,e){if(!_f(t))throw Error(se(299));var n=!1,i="",r=Kv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=mf(t,1,!1,null,null,n,!1,i,r),t[Ui]=e.current,Ja(t.nodeType===8?t.parentNode:t),new vf(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=_0(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Wr(t)};An.hydrate=function(t,e,n){if(!_c(e))throw Error(se(200));return xc(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!_f(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Kv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=qv(e,null,t,1,n??null,r,!1,s,a),t[Ui]=e.current,Ja(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new vc(e)};An.render=function(t,e,n){if(!_c(e))throw Error(se(200));return xc(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!_c(t))throw Error(se(40));return t._reactRootContainer?(Wr(function(){xc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ui]=null})}),!0):!1};An.unstable_batchedUpdates=df;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!_c(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return xc(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function Zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zv)}catch(t){console.error(t)}}Zv(),Zg.exports=An;var OS=Zg.exports,Jv,vm=OS;Jv=vm.createRoot,vm.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},oo.apply(null,arguments)}var nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nr||(nr={}));const _m="popstate";function zS(t){t===void 0&&(t={});function e(r,s){let{pathname:a="/",search:o="",hash:l=""}=Zr(r.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Ld("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let a=r.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");o=c===-1?l:l.slice(0,c)}return o+"#"+(typeof s=="string"?s:nc(s))}function i(r,s){xf(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return HS(e,n,i,t)}function Pt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function xf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BS(){return Math.random().toString(36).substr(2,8)}function xm(t,e){return{usr:t.state,key:t.key,idx:e}}function Ld(t,e,n,i){return n===void 0&&(n=null),oo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zr(e):e,{state:n,key:e&&e.key||i||BS()})}function nc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Zr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function HS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=nr.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(oo({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function h(){o=nr.Pop;let m=d(),u=m==null?null:m-c;c=m,l&&l({action:o,location:y.location,delta:u})}function f(m,u){o=nr.Push;let g=Ld(y.location,m,u);n&&n(g,m),c=d()+1;let _=xm(g,c),S=y.createHref(g);try{a.pushState(_,"",S)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;r.location.assign(S)}s&&l&&l({action:o,location:y.location,delta:1})}function p(m,u){o=nr.Replace;let g=Ld(y.location,m,u);n&&n(g,m),c=d();let _=xm(g,c),S=y.createHref(g);a.replaceState(_,"",S),s&&l&&l({action:o,location:y.location,delta:0})}function v(m){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof m=="string"?m:nc(m);return g=g.replace(/ $/,"%20"),Pt(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let y={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(_m,h),l=m,()=>{r.removeEventListener(_m,h),l=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let u=v(m);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:f,replace:p,go(m){return a.go(m)}};return y}var ym;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ym||(ym={}));function VS(t,e,n){return n===void 0&&(n="/"),jS(t,e,n)}function jS(t,e,n,i){let r=typeof e=="string"?Zr(e):e,s=yf(r.pathname||"/",n);if(s==null)return null;let a=Qv(t);GS(a);let o=null,l=nM(s);for(let c=0;o==null&&c<a.length;++c)o=QS(a[c],l);return o}function Qv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Pt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=hr([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Pt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Qv(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:ZS(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of e_(s.path))r(s,a,l)}),e}function e_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=e_(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function GS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:JS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const WS=/^:[\w-]+$/,XS=3,YS=2,$S=1,qS=10,KS=-2,Sm=t=>t==="*";function ZS(t,e){let n=t.split("/"),i=n.length;return n.some(Sm)&&(i+=KS),e&&(i+=YS),n.filter(r=>!Sm(r)).reduce((r,s)=>r+(WS.test(s)?XS:s===""?$S:qS),i)}function JS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function QS(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=eM({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:hr([s,h.pathname]),pathnameBase:sM(hr([s,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(s=hr([s,h.pathnameBase]))}return a}function eM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=tM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,h)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let y=o[h]||"";a=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=o[h];return p&&!v?c[f]=void 0:c[f]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function tM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),xf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function nM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function iM(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Zr(t):t,s;return n?(n=i_(n),n.startsWith("/")?s=Mm(n.substring(1),"/"):s=Mm(n,e)):s=e,{pathname:s,search:aM(i),hash:oM(r)}}function Mm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function iu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function t_(t,e){let n=rM(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function n_(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Zr(t):(r=oo({},t),Pt(!r.pathname||!r.pathname.includes("?"),iu("?","pathname","search",r)),Pt(!r.pathname||!r.pathname.includes("#"),iu("#","pathname","hash",r)),Pt(!r.search||!r.search.includes("#"),iu("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}o=h>=0?e[h]:"/"}let l=iM(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const i_=t=>t.replace(/\/\/+/g,"/"),hr=t=>i_(t.join("/")),sM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),aM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,oM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function lM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const r_=["post","put","patch","delete"];new Set(r_);const cM=["get",...r_];new Set(cM);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},lo.apply(null,arguments)}const Sf=re.createContext(null),uM=re.createContext(null),Jr=re.createContext(null),yc=re.createContext(null),yr=re.createContext({outlet:null,matches:[],isDataRoute:!1}),s_=re.createContext(null);function dM(t,e){let{relative:n}=e===void 0?{}:e;yo()||Pt(!1);let{basename:i,navigator:r}=re.useContext(Jr),{hash:s,pathname:a,search:o}=l_(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:hr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function yo(){return re.useContext(yc)!=null}function Sc(){return yo()||Pt(!1),re.useContext(yc).location}function a_(t){re.useContext(Jr).static||re.useLayoutEffect(t)}function o_(){let{isDataRoute:t}=re.useContext(yr);return t?TM():hM()}function hM(){yo()||Pt(!1);let t=re.useContext(Sf),{basename:e,future:n,navigator:i}=re.useContext(Jr),{matches:r}=re.useContext(yr),{pathname:s}=Sc(),a=JSON.stringify(t_(r,n.v7_relativeSplatPath)),o=re.useRef(!1);return a_(()=>{o.current=!0}),re.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let h=n_(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:hr([e,h.pathname])),(d.replace?i.replace:i.push)(h,d.state,d)},[e,i,a,s,t])}function fM(){let{matches:t}=re.useContext(yr),e=t[t.length-1];return e?e.params:{}}function l_(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=re.useContext(Jr),{matches:r}=re.useContext(yr),{pathname:s}=Sc(),a=JSON.stringify(t_(r,i.v7_relativeSplatPath));return re.useMemo(()=>n_(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function pM(t,e){return mM(t,e)}function mM(t,e,n,i){yo()||Pt(!1);let{navigator:r}=re.useContext(Jr),{matches:s}=re.useContext(yr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=Sc(),d;if(e){var h;let m=typeof e=="string"?Zr(e):e;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||Pt(!1),d=m}else d=c;let f=d.pathname||"/",p=f;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=VS(t,{pathname:p}),y=yM(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:hr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:hr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&y?re.createElement(yc.Provider,{value:{location:lo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:nr.Pop}},y):y}function gM(){let t=EM(),e=lM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return re.createElement(re.Fragment,null,re.createElement("h2",null,"Unexpected Application Error!"),re.createElement("h3",{style:{fontStyle:"italic"}},e),n?re.createElement("pre",{style:r},n):null,null)}const vM=re.createElement(gM,null);class _M extends re.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?re.createElement(yr.Provider,{value:this.props.routeContext},re.createElement(s_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xM(t){let{routeContext:e,match:n,children:i}=t,r=re.useContext(Sf);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),re.createElement(yr.Provider,{value:e},i)}function yM(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);d>=0||Pt(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let h=a[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:f,errors:p}=n,v=h.route.loader&&f[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||v){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,h,f)=>{let p,v=!1,y=null,m=null;n&&(p=o&&h.route.id?o[h.route.id]:void 0,y=h.route.errorElement||vM,l&&(c<0&&f===0?(bM("route-fallback"),v=!0,m=null):c===f&&(v=!0,m=h.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,f+1)),g=()=>{let _;return p?_=y:v?_=m:h.route.Component?_=re.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=d,re.createElement(xM,{match:h,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:_})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?re.createElement(_M,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var c_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(c_||{}),u_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(u_||{});function SM(t){let e=re.useContext(Sf);return e||Pt(!1),e}function MM(t){let e=re.useContext(uM);return e||Pt(!1),e}function wM(t){let e=re.useContext(yr);return e||Pt(!1),e}function d_(t){let e=wM(),n=e.matches[e.matches.length-1];return n.route.id||Pt(!1),n.route.id}function EM(){var t;let e=re.useContext(s_),n=MM(),i=d_();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function TM(){let{router:t}=SM(c_.UseNavigateStable),e=d_(u_.UseNavigateStable),n=re.useRef(!1);return a_(()=>{n.current=!0}),re.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,lo({fromRouteId:e},s)))},[t,e])}const wm={};function bM(t,e,n){wm[t]||(wm[t]=!0)}function AM(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function xi(t){Pt(!1)}function CM(t){let{basename:e="/",children:n=null,location:i,navigationType:r=nr.Pop,navigator:s,static:a=!1,future:o}=t;yo()&&Pt(!1);let l=e.replace(/^\/*/,"/"),c=re.useMemo(()=>({basename:l,navigator:s,static:a,future:lo({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Zr(i));let{pathname:d="/",search:h="",hash:f="",state:p=null,key:v="default"}=i,y=re.useMemo(()=>{let m=yf(d,l);return m==null?null:{location:{pathname:m,search:h,hash:f,state:p,key:v},navigationType:r}},[l,d,h,f,p,v,r]);return y==null?null:re.createElement(Jr.Provider,{value:c},re.createElement(yc.Provider,{children:n,value:y}))}function RM(t){let{children:e,location:n}=t;return pM(Dd(e),n)}new Promise(()=>{});function Dd(t,e){e===void 0&&(e=[]);let n=[];return re.Children.forEach(t,(i,r)=>{if(!re.isValidElement(i))return;let s=[...e,r];if(i.type===re.Fragment){n.push.apply(n,Dd(i.props.children,s));return}i.type!==xi&&Pt(!1),!i.props.index||!i.props.children||Pt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Dd(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Id(){return Id=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Id.apply(null,arguments)}function PM(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function NM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function LM(t,e){return t.button===0&&(!e||e==="_self")&&!NM(t)}const DM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],IM="6";try{window.__reactRouterVersion=IM}catch{}const UM="startTransition",Em=Ax[UM];function kM(t){let{basename:e,children:n,future:i,window:r}=t,s=re.useRef();s.current==null&&(s.current=zS({window:r,v5Compat:!0}));let a=s.current,[o,l]=re.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=re.useCallback(h=>{c&&Em?Em(()=>l(h)):l(h)},[l,c]);return re.useLayoutEffect(()=>a.listen(d),[a,d]),re.useEffect(()=>AM(i),[i]),re.createElement(CM,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const FM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ke=re.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:d,viewTransition:h}=e,f=PM(e,DM),{basename:p}=re.useContext(Jr),v,y=!1;if(typeof c=="string"&&OM.test(c)&&(v=c,FM))try{let _=new URL(window.location.href),S=c.startsWith("//")?new URL(_.protocol+c):new URL(c),N=yf(S.pathname,p);S.origin===_.origin&&N!=null?c=N+S.search+S.hash:y=!0}catch{}let m=dM(c,{relative:r}),u=zM(c,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:h});function g(_){i&&i(_),_.defaultPrevented||u(_)}return re.createElement("a",Id({},f,{href:v||m,onClick:y||s?i:g,ref:n,target:l}))});var Tm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Tm||(Tm={}));var bm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bm||(bm={}));function zM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=o_(),c=Sc(),d=l_(t,{relative:a});return re.useCallback(h=>{if(LM(h,n)){h.preventDefault();let f=i!==void 0?i:nc(c)===nc(d);l(t,{replace:f,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,d,i,r,n,t,s,a,o])}const BM=[{to:"/demo/phone",char:"声",title:"时光电话",poem:"思念，终于有了回音",mod:"复古电话机 × AI 声音模组",desc:"再次拨通那串熟悉的号码，听筒那头，是记忆里的声音在轻轻回应。",tags:["旧物新生","AI 声音","温柔陪伴"],theme:{c1:"#f0c4b2",c2:"#f7e3cd",ink:"#a2603f"}},{to:"/demo/comb",char:"藏",title:"声纹梳",poem:"平凡的日常，值得被珍藏",mod:"梳子 × 声音录制模组",desc:"每一次梳头，都是一次温柔的采集；声音悄悄留档，供来日慢慢回忆。",tags:["日常采集","声音留档","家庭记忆"],theme:{c1:"#bfe0cc",c2:"#e4efdb",ink:"#4f7d66"}},{to:"/demo/ward",char:"愿",title:"心愿病房",poem:"来不及说的话，现在能听见了",mod:"AI 视频 × 声音 × 信息提取",desc:"屏幕里的亲人，终于说出那句迟到已久的「我爱你」。",tags:["心愿达成","AI 视频","好好告别"],theme:{c1:"#c4cfee",c2:"#e5e7f5",ink:"#5d6ba0"}}];function HM(){return x.jsxs("div",{className:"wf-demos",children:[x.jsxs("header",{className:"topbar",children:[x.jsxs("div",{className:"brand",children:["万物改造工坊 ",x.jsx("span",{className:"glow",children:"WonderForge"})]}),x.jsxs("nav",{className:"nav",children:[x.jsx(Ke,{to:"/combine",children:"组合工作台"}),x.jsx(Ke,{to:"/demos",className:"active",children:"3D 演示"}),x.jsx(Ke,{to:"/community",children:"社区"})]})]}),x.jsx("span",{className:"wf-orb o1","aria-hidden":"true"}),x.jsx("span",{className:"wf-orb o2","aria-hidden":"true"}),x.jsx("span",{className:"wf-orb o3","aria-hidden":"true"}),x.jsxs("main",{className:"wf-body",children:[x.jsxs("section",{className:"wf-hero",children:[x.jsxs("div",{className:"wf-dust","aria-hidden":"true",children:[x.jsx("i",{}),x.jsx("i",{}),x.jsx("i",{}),x.jsx("i",{}),x.jsx("i",{}),x.jsx("i",{})]}),x.jsx("span",{className:"wf-eyebrow",children:"万物改造工坊 · 温柔的科技"}),x.jsxs("h1",{className:"wf-line",children:["让原本有意义的事物，",x.jsx("em",{className:"wf-hl rose",children:"更加有意义"}),"；",x.jsx("br",{}),"让本该是遗憾的事物，",x.jsx("em",{className:"wf-hl mint",children:"不再无能为力"}),"。"]}),x.jsxs("p",{className:"wf-sub",children:["在这里，旧物与 AI 温柔相遇——",x.jsx("br",{className:"wf-br"}),"承载记忆的老物件重新开口，来不及说出的话，终于被听见。"]})]}),x.jsxs("section",{className:"wf-section",children:[x.jsxs("div",{className:"wf-section-head",children:[x.jsx("h2",{className:"wf-section-title",children:"明星组合"}),x.jsx("span",{className:"wf-section-note",children:"三件被温柔点亮的小物"})]}),x.jsx("div",{className:"wf-grid",children:BM.map(t=>x.jsxs(Ke,{to:t.to,className:"wf-card",style:{"--c1":t.theme.c1,"--c2":t.theme.c2,"--ink":t.theme.ink},children:[x.jsx("span",{className:"wf-badge",children:t.char}),x.jsxs("div",{className:"wf-card-text",children:[x.jsx("div",{className:"wf-card-title",children:t.title}),x.jsxs("div",{className:"wf-poem",children:["「",t.poem,"」"]}),x.jsx("span",{className:"wf-mod",children:t.mod}),x.jsx("p",{className:"wf-desc",children:t.desc})]}),x.jsx("div",{className:"wf-tags",children:t.tags.map(e=>x.jsx("span",{className:"wf-tag",children:e},e))}),x.jsxs("span",{className:"wf-enter",children:["进入演示",x.jsx("i",{className:"wf-arrow","aria-hidden":"true",children:"→"})]})]},t.to))})]}),x.jsx("section",{className:"wf-section",children:x.jsxs("div",{className:"wf-community",children:[x.jsxs("div",{className:"wf-community-text",children:[x.jsx("h3",{className:"wf-community-title",children:"你的构想，也可以被点亮"}),x.jsx("p",{className:"wf-community-desc",children:"发起你的产品构想、设置预期目标，大家以「加模组 / 改 3D 图纸 / 提方案」的方式一起助力—— 把一个闪念，变成一件可以抱在怀里的实物。"})]}),x.jsxs(Ke,{to:"/community",className:"wf-btn",children:["进入社区",x.jsx("i",{className:"wf-arrow","aria-hidden":"true",children:"→"})]})]})}),x.jsxs("footer",{className:"wf-footer",children:[x.jsx("span",{className:"wf-footer-brand",children:"万物改造工坊 WonderForge"}),x.jsx("span",{className:"wf-footer-sep",children:"·"}),x.jsx("span",{className:"wf-footer-motto",children:"为每一件旧物，留住一段温柔的时光"})]})]})]})}const VM=[{id:"di-01",slug:"cup",el:{name:"陶瓷马克杯",desc:"白色陶瓷杯，杯身光滑",tags:["容器","日常","可涂装"]},parts:[{key:"glow",id:"hp-02",name:"夜光荧光粉",desc:"白天吸光、夜晚自发光",tags:["发光","涂装","被动光"],install:"调漆涂装 · 静置固化 1 小时",effect:"杯身手绘星星与月亮，白天安静可爱，夜晚发出青绿色微光"},{key:"led",id:"hp-01",name:"LED 灯带",desc:"可调色温的柔性灯带",tags:["发光","柔性","氛围"],install:"杯底嵌线 · 磁吸供电底座",effect:"杯底环绕一圈暖白光，深夜起身替你照亮床头一小圈"}],mods:[{key:"voice",id:"ai-01",name:"声音克隆",desc:"复刻真人声线",tags:["声音","分身","情感"],effect:"录一段 TA 的声音，AI 学习音色——之后随时都能再听见",panel:"声音克隆体验"},{key:"album",id:"ai-09",name:"记忆相册",desc:"照片自动整理与讲述",tags:["影像","记忆","叙事"],effect:"上传视频、照片与温馨文字，AI 收藏学习，留住 TA 的样子",panel:"记忆相册"}],shots:{plain:{img:"cup/cup-plain.jpg",label:"原设计 · 午后书房",caption:"还是那只普通的白瓷杯——安静地冒着热气，陪你度过每一个午后。"},glow:{img:"cup/cup-glow.jpg",label:"夜光 · 熄灯之后",caption:"熄了灯，杯身的星星与月亮悄悄亮起——白天吸饱了阳光，夜里替你温柔发光。"},led:{img:"cup/cup-led.jpg",label:"灯带 · 床头暖光",caption:"杯底的一圈暖白灯带，是深夜里最不打扰人的小夜灯。"},both:{img:"cup/cup-both.jpg",label:"全组合 · 深夜氛围",caption:"荧光星月与暖光灯带交相辉映——深夜的床头，有了一小片被温柔照亮的宇宙。"}}},{id:"di-03",slug:"comb",el:{name:"檀木梳",desc:"木制齿梳，握感温润，适合嵌装小部件",tags:["日用品","木质","随身"]},parts:[{key:"mic",id:"hp-10",name:"电容麦克风",desc:"高灵敏度拾音头",tags:["收音","音频","输入"],install:"梳柄开槽 · 内嵌拾音头",effect:"梳头时悄悄录下一小段日常，藏在梳柄里"},{key:"fiber",id:"hp-24",name:"光导纤维",desc:"会漏光的细光纤",tags:["光学","柔性","氛围"],install:"梳背嵌槽 · 埋入一圈微光光纤",effect:"梳背浮起一圈柔柔的光，像把夜色梳顺了"}],mods:[{key:"record",id:"ai-02",name:"声音录制",desc:"持续采集与归档声音",tags:["采集","记录","回忆"],effect:"把梳头时的哼唱、碎碎念，慢慢存成一条时间轴",panel:"声音留档"},{key:"playback",id:"ai-10",name:"语音播报",desc:"文字转自然语音",tags:["语音","输出","交互"],effect:"某天回放，听见那年梳头时的轻声",panel:"回忆回放"}],shots:{plain:{img:"comb/comb-plain.jpg",label:"原设计 · 午后木桌",caption:"还是那把温润的檀木梳，静静躺在妆台上。"},mic:{img:"comb/comb-mic.jpg",label:"收音 · 悄悄留档",caption:"梳柄里多了一枚小小的拾音头，把日常轻轻收进时光。"},fiber:{img:"comb/comb-fiber.jpg",label:"光纤 · 夜色微光",caption:"梳背一圈柔光，像把夜色也梳得服服帖帖。"},both:{img:"comb/comb-both.jpg",label:"全组合 · 会说话的梳子",caption:"边梳边存、夜里发光——一把会记住日常的梳子。"}}},{id:"di-04",slug:"lamp",el:{name:"黄铜台灯",desc:"暖光台灯，金属灯罩",tags:["照明","金属","桌面"]},parts:[{key:"light",id:"hp-18",name:"光敏传感器",desc:"感知光线明暗",tags:["感知","光线","自动"],install:"灯座嵌装 · 面向窗口",effect:"天光一暗，灯就自己亮起来"},{key:"rgb",id:"hp-36",name:"RGB 全彩灯珠",desc:"千变万色的灯珠",tags:["发光","色彩","氛围"],install:"灯罩内环 · 替换光源",effect:"暖黄之外，还能调出晚霞般的一抹柔彩"}],mods:[{key:"alarm",id:"ai-44",name:"智能闹钟",desc:"被叫醒也温柔",tags:["时间","起居","关怀"],effect:"天一亮，用最柔的光把你叫醒",panel:"温柔叫醒"},{key:"lull",id:"ai-33",name:"睡前故事",desc:"轻声讲的哄睡故事",tags:["陪伴","故事","儿童"],effect:"熄灯后，替你讲一小段睡前故事",panel:"睡前故事"}],shots:{plain:{img:"lamp/lamp-plain.jpg",label:"原设计 · 深夜书桌",caption:"一盏安静的黄铜台灯，陪你读完整本旧书。"},light:{img:"lamp/lamp-light.jpg",label:"光敏 · 日落自亮",caption:"天一暗，它就懂你地亮起来，等你回家。"},rgb:{img:"lamp/lamp-rgb.jpg",label:"灯珠 · 晚霞暖彩",caption:"灯罩里透出一抹柔和的晚霞色。"},both:{img:"lamp/lamp-both.jpg",label:"全组合 · 守夜小灯",caption:"日落自动亮、睡前讲故事——一盏会守夜的小灯。"}}},{id:"di-05",slug:"box",el:{name:"八音盒",desc:"上发条播放旋律",tags:["音乐","机械","礼物"]},parts:[{key:"buzzer",id:"hp-39",name:"蜂鸣器",desc:"嘀嘀作响的蜂鸣器",tags:["发声","提示","输出"],install:"盒内嵌装 · 音孔朝上",effect:"发条之外，多了一条会哼歌的声线"},{key:"led",id:"hp-01",name:"LED 灯带",desc:"可调色温的柔性灯带",tags:["发光","柔性","氛围"],install:"盒盖内沿 · 贴一圈柔光",effect:"打开盒盖，盒里亮起一小片星光"}],mods:[{key:"melody",id:"ai-19",name:"旋律续写",desc:"把哼的调补成曲",tags:["音乐","创作","交互"],effect:"你哼一小段，它接着续成完整的歌",panel:"续写旋律"},{key:"lull",id:"ai-33",name:"睡前故事",desc:"轻声讲的哄睡故事",tags:["陪伴","故事","儿童"],effect:"摇一摇，讲一段轻轻的晚安故事",panel:"晚安故事"}],shots:{plain:{img:"box/box-plain.jpg",label:"原设计 · 床头八音盒",caption:"上紧发条，熟悉的小调缓缓响起。"},buzzer:{img:"box/box-buzzer.jpg",label:"蜂鸣 · 会哼歌",caption:"它多了一条会哼歌的声线。"},led:{img:"box/box-led.jpg",label:"灯带 · 盒内星光",caption:"盒盖一开，盒里亮起一小片温柔星光。"},both:{img:"box/box-both.jpg",label:"全组合 · 睡前童谣",caption:"星光里续着你的调，讲着晚安的故事。"}}},{id:"di-06",slug:"radio",el:{name:"老式收音机",desc:"旋钮调频的桌面收音机",tags:["音频","复古","桌面"]},parts:[{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"替换原喇叭 · 内嵌箱体",effect:"声音更暖，像从老唱片里淌出来"},{key:"led",id:"hp-01",name:"LED 灯带",desc:"可调色温的柔性灯带",tags:["发光","柔性","氛围"],install:"刻度盘后 · 透出暖光",effect:"调频刻度盘泛起一圈暖光"}],mods:[{key:"dialect",id:"ai-29",name:"方言合成",desc:"用乡音开口说话",tags:["语音","方言","输出"],effect:"用最熟悉的乡音，讲那些老故事",panel:"乡音故事"},{key:"story",id:"ai-17",name:"故事生成",desc:"把回忆写成小故事",tags:["文字","创作","回忆"],effect:"把旧事慢慢说成一段段故事",panel:"旧事重提"}],shots:{plain:{img:"radio/radio-plain.jpg",label:"原设计 · 客厅一角",caption:"一台安静的木头收音机，旋钮等着被转动。"},speaker:{img:"radio/radio-speaker.jpg",label:"扬声 · 更暖的声",caption:"声音更暖了，像从老唱片里淌出来。"},led:{img:"radio/radio-led.jpg",label:"灯带 · 刻度暖光",caption:"刻度盘泛起一圈暖黄的光。"},both:{img:"radio/radio-both.jpg",label:"全组合 · 会讲乡音",caption:"暖光里，乡音把老故事一句句讲给你听。"}}},{id:"di-07",slug:"camera",el:{name:"胶片相机",desc:"机械快门，可换镜头",tags:["影像","机械","收藏"]},parts:[{key:"screen",id:"hp-11",name:"小型显示屏",desc:"高清小屏模组",tags:["显示","输出","交互"],install:"背盖开窗 · 嵌入小屏",effect:"机身背面多了一扇会回放的窗"},{key:"mic",id:"hp-10",name:"电容麦克风",desc:"高灵敏度拾音头",tags:["收音","音频","输入"],install:"机身侧边 · 嵌一枚拾音头",effect:"按下快门时，也把现场的声音收进来"}],mods:[{key:"vision",id:"ai-12",name:"图像识别",desc:"识别物体与场景",tags:["视觉","感知","分析"],effect:"认出照片里的人与物，替你讲那段回忆",panel:"看图说话"},{key:"voice",id:"ai-01",name:"声音克隆",desc:"复刻真人声线",tags:["声音","分身","情感"],effect:"用熟悉的声音，讲照片里的故事",panel:"熟悉的声音"}],shots:{plain:{img:"camera/camera-plain.jpg",label:"原设计 · 收藏柜上",caption:"一台停摆的胶片相机，快门里藏着旧时光。"},screen:{img:"camera/camera-screen.jpg",label:"屏幕 · 回放的窗",caption:"机背亮起一扇小窗，回放着当年的照片。"},mic:{img:"camera/camera-mic.jpg",label:"收音 · 收进现场",caption:"按下快门，连现场的声音也一起收进来。"},both:{img:"camera/camera-both.jpg",label:"全组合 · 会说的相机",caption:"认出照片，用熟悉的声音把回忆讲出来。"}}},{id:"di-08",slug:"clock",el:{name:"木质挂钟",desc:"整点报时的老挂钟",tags:["时间","木质","墙面"]},parts:[{key:"crystal",id:"hp-35",name:"时钟晶振",desc:"滴答精准的心跳",tags:["时间","计时","元件"],install:"机芯替换 · 精准走时",effect:"走得又准又稳，像把时间攥紧了"},{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"钟底内嵌 · 音孔朝下",effect:"整点不再单调，多了一句轻轻的叮咛"}],mods:[{key:"alarm",id:"ai-44",name:"智能闹钟",desc:"被叫醒也温柔",tags:["时间","起居","关怀"],effect:"整点用最轻的声音，提醒你该歇歇了",panel:"整点叮咛"},{key:"remind",id:"ai-26",name:"健康提醒",desc:"贴心的作息关怀",tags:["健康","提醒","关怀"],effect:"久坐、熬夜，它都轻轻提醒一句",panel:"温柔提醒"}],shots:{plain:{img:"clock/clock-plain.jpg",label:"原设计 · 客厅墙面",caption:"一只走时的老挂钟，把日子一格一格走完。"},crystal:{img:"clock/clock-crystal.jpg",label:"晶振 · 精准走时",caption:"滴答声更稳了，像把时间轻轻攥紧。"},speaker:{img:"clock/clock-speaker.jpg",label:"扬声 · 整点叮咛",caption:"整点响起一句轻轻的叮咛。"},both:{img:"clock/clock-both.jpg",label:"全组合 · 会关怀的钟",caption:"走得准，还时不时温柔提醒你歇一歇。"}}},{id:"di-09",slug:"thermos",el:{name:"搪瓷暖水壶",desc:"保温水壶，印花外壳，握感温润",tags:["保温","日用","复古"]},parts:[{key:"temp",id:"hp-19",name:"温度传感器",desc:"实时感知水温",tags:["感知","温度","输入"],install:"壶底嵌装 · 贴底测温",effect:"拿起时壶身亮一下色，告诉你水还热不热"},{key:"glow",id:"hp-01",name:"LED 灯带",desc:"可调色温的柔性灯带",tags:["发光","柔性","氛围"],install:"壶腰嵌槽 · 绕一圈暖光",effect:"夜里倒水时壶身浮起一圈暖晕，像旧时灶台的余温"}],mods:[{key:"remind",id:"ai-02",name:"声音录制",desc:"持续采集与归档声音",tags:["采集","记录","回忆"],effect:"每次倒水时录下几句碎碎念，存成一条时间轴",panel:"喝水记忆"},{key:"analyze",id:"ai-08",name:"情感分析",desc:"识别语气与情绪",tags:["情感","分析","陪伴"],effect:"从碎碎念里读懂今天的心情，灯带颜色随之温柔变化",panel:"情绪灯语"}],shots:{plain:{img:"thermos/thermos-plain.jpg",label:"原设计 · 厨房一角",caption:"还是那只印花搪瓷壶——安安静静蹲在灶台边，等着谁渴了来倒一杯。"},temp:{img:"thermos/thermos-temp.jpg",label:"温感 · 摸一摸就知道",caption:"指尖碰到壶身，一圈暖橙光亮起——水还热着呢。"},glow:{img:"thermos/thermos-glow.jpg",label:"暖光 · 夜里倒杯水",caption:"深夜倒水时壶腰亮起暖晕，像灶台没熄的余温。"},both:{img:"thermos/thermos-both.jpg",label:"组合 · 懂你冷热的老壶",caption:"壶知道水有多热，也听懂了你的碎碎念——每一杯都是一段被记住的日常。"}}},{id:"di-10",slug:"frame",el:{name:"木质相框",desc:"装老照片的木相框",tags:["展示","木质","记忆"]},parts:[{key:"screen",id:"hp-11",name:"小型显示屏",desc:"高清小屏模组",tags:["显示","输出","交互"],install:"相框内嵌 · 替换照片位",effect:"老照片变成一扇会动的小窗"},{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"框背内嵌 · 音孔朝外",effect:"相框学会了说话"}],mods:[{key:"video",id:"ai-04",name:"AI 视频分身",desc:"生成真人形象视频",tags:["影像","分身","情感"],effect:"相框里的人，动起来对你点点头",panel:"影像重逢"},{key:"voice",id:"ai-01",name:"声音克隆",desc:"复刻真人声线",tags:["声音","分身","情感"],effect:"用熟悉的声音，说那句好久不见",panel:"声音重逢"}],shots:{plain:{img:"frame/frame-plain.jpg",label:"原设计 · 五斗柜上",caption:"一只木相框，框着一张泛黄的老照片。"},screen:{img:"frame/frame-screen.jpg",label:"屏幕 · 会动的窗",caption:"照片里的人，在小小屏幕里对你笑了笑。"},speaker:{img:"frame/frame-speaker.jpg",label:"扬声 · 学会说话",caption:"相框多了一条会说话的声音。"},both:{img:"frame/frame-both.jpg",label:"全组合 · 重逢",caption:"相框里的人动起来，用熟悉的声音说好久不见。"}}},{id:"di-11",slug:"typewriter",el:{name:"老式打字机",desc:"机械按键打字机",tags:["文字","机械","收藏"]},parts:[{key:"eink",id:"hp-25",name:"电子墨水屏",desc:"纸感的低功耗屏",tags:["显示","纸感","低功耗"],install:"机身侧面 · 架一块纸感屏",effect:"打出来的字，浮现在纸感的小屏上"},{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"机身底部 · 内嵌喇叭",effect:"敲下的字，还能被轻轻念出来"}],mods:[{key:"story",id:"ai-17",name:"故事生成",desc:"把回忆写成小故事",tags:["文字","创作","回忆"],effect:"把旧事整理成一段段家书",panel:"家书生成"},{key:"voice",id:"ai-10",name:"语音播报",desc:"文字转自然语音",tags:["语音","输出","交互"],effect:"把写好的信，一字一句念给你听",panel:"家书朗读"}],shots:{plain:{img:"typewriter/typewriter-plain.jpg",label:"原设计 · 书桌角落",caption:"一台斑驳的打字机，等着谁再敲下一行字。"},eink:{img:"typewriter/typewriter-eink.jpg",label:"墨水屏 · 纸感浮现",caption:"打出的字，在纸感小屏上浮现出来。"},speaker:{img:"typewriter/typewriter-speaker.jpg",label:"扬声 · 念出声",caption:"敲下的句子，被轻轻念了出来。"},both:{img:"typewriter/typewriter-both.jpg",label:"全组合 · 家书打印机",caption:"把旧事敲成字、念成信——一封会说话的家书。"}}},{id:"di-12",slug:"kerosene",el:{name:"煤油灯",desc:"玻璃罩煤油灯",tags:["照明","复古","氛围"]},parts:[{key:"light",id:"hp-18",name:"光敏传感器",desc:"感知光线明暗",tags:["感知","光线","自动"],install:"灯座嵌装 · 感应明暗",effect:"天黑下来，火光就自己亮起"},{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"灯座底部 · 内嵌喇叭",effect:"火光摇曳时，故事也跟着开场"}],mods:[{key:"lull",id:"ai-33",name:"睡前故事",desc:"轻声讲的哄睡故事",tags:["陪伴","故事","儿童"],effect:"灯光一暗，睡前故事就开讲",panel:"晚安故事"},{key:"mood",id:"ai-15",name:"情绪安抚",desc:"温和陪伴式语言",tags:["陪伴","情绪","关怀"],effect:"夜里难眠时，说几句温软的话",panel:"夜话陪伴"}],shots:{plain:{img:"kerosene/kerosene-plain.jpg",label:"原设计 · 老屋夜里",caption:"一盏煤油灯，把老屋的夜照得又暖又静。"},light:{img:"kerosene/kerosene-light.jpg",label:"光敏 · 日落自亮",caption:"天一暗，火光就自己亮起来。"},speaker:{img:"kerosene/kerosene-speaker.jpg",label:"扬声 · 故事开场",caption:"火光摇曳，故事悄悄开了场。"},both:{img:"kerosene/kerosene-both.jpg",label:"全组合 · 晚安煤油灯",caption:"日落自亮，睡前讲一段温柔的故事。"}}},{id:"di-13",slug:"suitcase",el:{name:"旧旅行箱",desc:"皮质手提箱",tags:["收纳","皮质","旅行"]},parts:[{key:"wifi",id:"hp-26",name:"WiFi 模组",desc:"无线上网模块",tags:["连接","无线","网络"],install:"箱盖内衬 · 隐藏嵌装",effect:"箱子连上网，能把远方的挂念收进来"},{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"箱内夹层 · 内嵌喇叭",effect:"打开箱子，听见那头的叮嘱"}],mods:[{key:"wechat",id:"ai-06",name:"微信记忆分身",desc:"用聊天记录构建人物分身",tags:["社交","分身","回忆"],effect:"把聊天里的 TA，装进这只箱子",panel:"记忆分身"},{key:"message",id:"ai-37",name:"语音留言",desc:"替你留言给家人",tags:["语音","家庭","传情"],effect:"替你收下、也替你捎去那些话",panel:"语音留言"}],shots:{plain:{img:"suitcase/suitcase-plain.jpg",label:"原设计 · 床脚角落",caption:"一只旧皮箱，装着出远门的念想。"},wifi:{img:"suitcase/suitcase-wifi.jpg",label:"联网 · 收进挂念",caption:"箱子连上了网，把远方的挂念收进来。"},speaker:{img:"suitcase/suitcase-speaker.jpg",label:"扬声 · 听见叮嘱",caption:"打开箱子，听见那头的碎碎念。"},both:{img:"suitcase/suitcase-both.jpg",label:"全组合 · 会叮嘱的箱子",caption:"打开箱子，听见熟悉的人轻声叮嘱。"}}},{id:"di-14",slug:"tv",el:{name:"老式显像管电视",desc:"方盒子黑白电视",tags:["显示","复古","大件"]},parts:[{key:"projector",id:"hp-38",name:"微型投影",desc:"掌心大小的投影镜头",tags:["影像","投影","输出"],install:"机身顶部 · 加装投影镜头",effect:"影像投到墙上，比屏幕更大一截"},{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"机身侧边 · 内嵌喇叭",effect:"电视里的声音，暖了起来"}],mods:[{key:"video",id:"ai-04",name:"AI 视频分身",desc:"生成真人形象视频",tags:["影像","分身","情感"],effect:"老电视里，再放一次 TA 的模样",panel:"影像重映"},{key:"repair",id:"ai-16",name:"老照片修复",desc:"修补划痕并智能上色",tags:["影像","修复","记忆"],effect:"把模糊的老影像，修得清晰又鲜亮",panel:"影像修复"}],shots:{plain:{img:"tv/tv-plain.jpg",label:"原设计 · 客厅电视柜",caption:"一台方方正正的老电视，屏幕安静地黑着。"},projector:{img:"tv/tv-projector.jpg",label:"投影 · 更大影像",caption:"影像投到墙上，比屏幕又大了一截。"},speaker:{img:"tv/tv-speaker.jpg",label:"扬声 · 声音变暖",caption:"电视里的声音，变得暖暖的。"},both:{img:"tv/tv-both.jpg",label:"全组合 · 重映旧时光",caption:"老电视里，再放一次熟悉的那张脸。"}}},{id:"di-15",slug:"flashlight",el:{name:"黄铜手电筒",desc:"金属筒身手电",tags:["照明","便携","金属"]},parts:[{key:"light",id:"hp-18",name:"光敏传感器",desc:"感知光线明暗",tags:["感知","光线","自动"],install:"筒身嵌装 · 感应明暗",effect:"天快黑时，它先替你亮起来"},{key:"solar",id:"hp-08",name:"太阳能板",desc:"柔性光伏板",tags:["能源","户外","可持续"],install:"筒身贴装 · 柔性光伏片",effect:"晒晒太阳，就攒下一晚的光"}],mods:[{key:"weather",id:"ai-49",name:"天气管家",desc:"出门前的温柔叮嘱",tags:["生活","天气","关怀"],effect:"出门前，轻声提醒一句带伞加衣",panel:"天气叮咛"},{key:"remind",id:"ai-26",name:"健康提醒",desc:"贴心的作息关怀",tags:["健康","提醒","关怀"],effect:"夜归路上，提醒你早点休息",panel:"夜路关怀"}],shots:{plain:{img:"flashlight/flashlight-plain.jpg",label:"原设计 · 玄关抽屉",caption:"一支黄铜手电，等着照亮回家的路。"},light:{img:"flashlight/flashlight-light.jpg",label:"光敏 · 天黑自亮",caption:"天快黑时，它先替你亮起来。"},solar:{img:"flashlight/flashlight-solar.jpg",label:"光伏 · 晒出续航",caption:"晒晒太阳，就攒下一整晚的光。"},both:{img:"flashlight/flashlight-both.jpg",label:"全组合 · 陪你夜路",caption:"天黑自亮、晒出续航，一路有人陪着回家。"}}},{id:"di-16",slug:"sewing",el:{name:"手摇缝纫机",desc:"脚踏板驱动的老式缝纫机",tags:["工具","机械","家传"]},parts:[{key:"vibrate",id:"hp-21",name:"振动马达",desc:"手机里的振动马达",tags:["振动","驱动","反馈"],install:"踏板下 · 内嵌振动马达",effect:"踩下踏板，机身轻轻回你一记颤动"},{key:"led",id:"hp-01",name:"LED 灯带",desc:"可调色温的柔性灯带",tags:["发光","柔性","氛围"],install:"机臂下 · 加装工作灯",effect:"缝纫时，机臂下亮起一小片暖光"}],mods:[{key:"comfort",id:"ai-15",name:"情绪安抚",desc:"温和陪伴式语言",tags:["陪伴","情绪","关怀"],effect:"踩线时，有句温软的话陪着你",panel:"絮语陪伴"},{key:"story",id:"ai-17",name:"故事生成",desc:"把回忆写成小故事",tags:["文字","创作","回忆"],effect:"把缝进去的旧事，说成一段故事",panel:"旧事如线"}],shots:{plain:{img:"sewing/sewing-plain.jpg",label:"原设计 · 窗边缝纫",caption:"一台吱呀作响的老缝纫机，等着谁再踩一脚。"},vibrate:{img:"sewing/sewing-vibrate.jpg",label:"振动 · 温柔回响",caption:"踩下踏板，机身轻轻回你一记颤动。"},led:{img:"sewing/sewing-led.jpg",label:"灯带 · 工作暖光",caption:"机臂下亮起一小片暖光，照亮针脚。"},both:{img:"sewing/sewing-both.jpg",label:"全组合 · 絮语缝纫机",caption:"暖光里踩着踏板，有句温软的话陪着缝。"}}},{id:"di-17",slug:"frog",el:{name:"铁皮发条青蛙",desc:"上紧发条会蹦跳的铁皮玩具",tags:["玩具","发条","童年"]},parts:[{key:"motor",id:"hp-05",name:"微型马达",desc:"低速静音马达",tags:["运动","驱动","机械"],install:"机芯替换 · 内嵌静音马达",effect:"不用上发条，也能一下一下往前跳"},{key:"rgb",id:"hp-36",name:"RGB 全彩灯珠",desc:"千变万色的灯珠",tags:["发光","色彩","氛围"],install:"双眼内 · 嵌两颗小灯珠",effect:"两颗眼睛亮起来，还会眨呀眨"}],mods:[{key:"pet",id:"ai-40",name:"虚拟宠物",desc:"会撒娇的电子宠物",tags:["陪伴","宠物","交互"],effect:"它会蹦跳、会撒娇，像真的小宠物",panel:"撒娇互动"},{key:"voice",id:"ai-01",name:"声音克隆",desc:"复刻真人声线",tags:["声音","分身","情感"],effect:"用熟悉的声音，学两声逗你的话",panel:"熟悉嗓音"}],shots:{plain:{img:"frog/frog-plain.jpg",label:"原设计 · 旧木桌上",caption:"一只铁皮青蛙，安安静静蹲在旧桌上。"},motor:{img:"frog/frog-motor.jpg",label:"马达 · 自己会跳",caption:"不上发条，它也能一下一下跳起来。"},rgb:{img:"frog/frog-rgb.jpg",label:"灯珠 · 眼睛会眨",caption:"两颗眼睛亮起来，还冲你眨呀眨。"},both:{img:"frog/frog-both.jpg",label:"全组合 · 会撒娇的青蛙",caption:"它会跳、会眨眼，还会用熟悉的声音逗你。"}}},{id:"di-18",slug:"fan",el:{name:"蒲扇",desc:"竹柄芭蕉扇，扇出夏夜的风",tags:["竹编","夏夜","长辈"]},parts:[{key:"fan",id:"hp-31",name:"微型风扇",desc:"巴掌大的小风扇",tags:["送风","驱动","降温"],install:"扇柄端 · 内嵌小风扇",effect:"不用手摇，也有丝丝凉风"},{key:"fiber",id:"hp-24",name:"光导纤维",desc:"会漏光的细光纤",tags:["光学","柔性","氛围"],install:"扇缘编入 · 一圈微光",effect:"扇沿浮起一圈柔柔的光"}],mods:[{key:"message",id:"ai-37",name:"语音留言",desc:"替你留言给家人",tags:["语音","家庭","传情"],effect:"摇扇时，替你捎去一句晚安",panel:"摇扇传话"},{key:"lull",id:"ai-33",name:"睡前故事",desc:"轻声讲的哄睡故事",tags:["陪伴","故事","儿童"],effect:"夏夜里，边扇风边讲老故事",panel:"夏夜故事"}],shots:{plain:{img:"fan/fan-plain.jpg",label:"原设计 · 竹凉席上",caption:"一把蒲扇，摇着整个夏天最凉的风。"},fan:{img:"fan/fan-fan.jpg",label:"风扇 · 自生凉风",caption:"不用手摇，也有丝丝凉风送来。"},fiber:{img:"fan/fan-fiber.jpg",label:"光纤 · 扇缘微光",caption:"扇沿浮起一圈柔柔的光。"},both:{img:"fan/fan-both.jpg",label:"全组合 · 夏夜蒲扇",caption:"凉风伴着微光，念着那句迟到的晚安。"}}},{id:"di-19",slug:"gramophone",el:{name:"留声机",desc:"手摇上弦的黑胶留声机",tags:["音频","机械","复古"]},parts:[{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"底座内 · 内嵌喇叭",effect:"声音更清晰，像把老唱片唤醒了"},{key:"led",id:"hp-01",name:"LED 灯带",desc:"可调色温的柔性灯带",tags:["发光","柔性","氛围"],install:"底座一圈 · 暖光氛围",effect:"唱盘转起来，底座泛一圈暖光"}],mods:[{key:"music",id:"ai-18",name:"音乐生成",desc:"谱一段专属旋律",tags:["音乐","创作","定制"],effect:"把那些年，谱成一支专属旋律",panel:"谱曲"},{key:"repair",id:"ai-31",name:"老录音修复",desc:"降噪修复老磁带",tags:["音频","修复","记忆"],effect:"把沙沙的旧唱片，修得清晰如昨",panel:"修复旧声"}],shots:{plain:{img:"gramophone/gramophone-plain.jpg",label:"原设计 · 木柜之上",caption:"一台留声机，静静转着旧日的旋律。"},speaker:{img:"gramophone/gramophone-speaker.jpg",label:"扬声 · 唤醒唱片",caption:"声音更清晰，像把老唱片唤醒了。"},led:{img:"gramophone/gramophone-led.jpg",label:"灯带 · 暖光氛围",caption:"唱盘转动，底座泛起一圈暖光。"},both:{img:"gramophone/gramophone-both.jpg",label:"全组合 · 旧曲留声机",caption:"暖光里，旧旋律被谱成一支新的歌。"}}},{id:"di-20",slug:"watch",el:{name:"老怀表",desc:"黄铜链坠的旧怀表",tags:["时间","金属","随身"]},parts:[{key:"heart",id:"hp-22",name:"心率传感器",desc:"贴肤测心跳的传感器",tags:["感知","健康","贴肤"],install:"表背贴装 · 感应心跳",effect:"贴着胸口，就听见自己的心跳"},{key:"vibrate",id:"hp-21",name:"振动马达",desc:"手机里的振动马达",tags:["振动","驱动","反馈"],install:"表壳内 · 内嵌振动马达",effect:"该歇歇时，它在掌心轻轻一颤"}],mods:[{key:"health",id:"ai-26",name:"健康提醒",desc:"贴心的作息关怀",tags:["健康","提醒","关怀"],effect:"心跳、作息，它都替你轻轻惦记",panel:"健康惦记"},{key:"medicine",id:"ai-27",name:"用药提醒",desc:"按时提醒吃药",tags:["健康","提醒","长辈"],effect:"到点了，轻轻提醒一句该吃药了",panel:"按时提醒"}],shots:{plain:{img:"watch/watch-plain.jpg",label:"原设计 · 掌心旧表",caption:"一块老怀表，表盖里封着旧时光。"},heart:{img:"watch/watch-heart.jpg",label:"心率 · 听见心跳",caption:"贴着胸口，就听见自己的心跳。"},vibrate:{img:"watch/watch-vibrate.jpg",label:"振动 · 掌心轻颤",caption:"该歇歇时，它在掌心轻轻一颤。"},both:{img:"watch/watch-both.jpg",label:"全组合 · 会关心的怀表",caption:"听着心跳，轻轻提醒你按时吃药歇息。"}}},{id:"di-21",slug:"enamel-mug",el:{name:"搪瓷缸",desc:"印着红字的搪瓷缸，磕掉过瓷露出铁",tags:["容器","复古","日用"]},parts:[{key:"glow",id:"hp-02",name:"夜光荧光粉",desc:"白天吸光、夜晚自发光",tags:["发光","涂装","被动光"],install:"磕瓷处填补 · 荧光补瓷",effect:"磕掉瓷的地方夜里泛着柔光，像旧伤变成了星星"},{key:"button",id:"hp-03",name:"圆形按钮",desc:"段落感机械按钮",tags:["触发","交互","机械"],install:"缸把手末端 · 拇指位",effect:"按下时缸壁轻轻一震，像在回应你握住它的手"}],mods:[{key:"voice",id:"ai-01",name:"声音克隆",desc:"复刻真人声线",tags:["声音","分身","情感"],effect:"按下按钮，缸里传出爷爷当年的声音，说一句老话",panel:"声纹回放"},{key:"memory",id:"ai-05",name:"信息提取",desc:"从聊天记录提取记忆素材",tags:["数据","记忆","整理"],effect:"从老照片里提取搪瓷缸出现的每个场景，拼出一段家族记忆",panel:"记忆拼图"}],shots:{plain:{img:"enamel-mug/enamel-mug-plain.jpg",label:"原设计 · 搪瓷缸",caption:"磕掉瓷的搪瓷缸，露出铁底色——用过很多年，红字还看得清。"},glow:{img:"enamel-mug/enamel-mug-glow.jpg",label:"夜光 · 磕瓷处亮起来",caption:"磕掉瓷的地方夜里泛光，旧伤变成了星星。"},button:{img:"enamel-mug/enamel-mug-button.jpg",label:"按钮 · 按一下就回应",caption:"把手末端多了一颗小按钮，按下时缸壁轻轻一震。"},both:{img:"enamel-mug/enamel-mug-both.jpg",label:"组合 · 会说话的老搪瓷缸",caption:"按下按钮，爷爷的声音从缸里传出来，磕瓷处的星光亮着——像他还坐在你对面。"}}},{id:"di-22",slug:"cradle",el:{name:"竹编摇篮",desc:"婴儿睡过的竹摇篮",tags:["家具","竹编","童年"]},parts:[{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"摇篮侧 · 内嵌喇叭",effect:"轻轻一摇，摇篮里响起温柔声"},{key:"fiber",id:"hp-24",name:"光导纤维",desc:"会漏光的细光纤",tags:["光学","柔性","氛围"],install:"摇篮边 · 编入一圈星光",effect:"摇篮边亮起一小圈星光，像夜空"}],mods:[{key:"lull",id:"ai-33",name:"睡前故事",desc:"轻声讲的哄睡故事",tags:["陪伴","故事","儿童"],effect:"摇一摇，自动讲起睡前故事",panel:"摇篮故事"},{key:"sleep",id:"ai-34",name:"智能哄睡",desc:"营造入睡氛围",tags:["陪伴","睡眠","氛围"],effect:"轻柔的声音和微光，哄着慢慢入睡",panel:"哄睡氛围"}],shots:{plain:{img:"cradle/cradle-plain.jpg",label:"原设计 · 老屋角落",caption:"一只竹摇篮，轻轻摇着旧日的梦。"},speaker:{img:"cradle/cradle-speaker.jpg",label:"扬声 · 摇篮低语",caption:"轻轻一摇，摇篮里响起温柔的声音。"},fiber:{img:"cradle/cradle-fiber.jpg",label:"光纤 · 一圈星光",caption:"摇篮边亮起一小圈星光，像夜空。"},both:{img:"cradle/cradle-both.jpg",label:"全组合 · 摇篮夜话",caption:"星光下摇一摇，睡前故事轻轻开场。"}}},{id:"di-23",slug:"chair",el:{name:"藤编摇椅",desc:"吱呀作响的藤摇椅",tags:["家具","藤编","休闲"]},parts:[{key:"tilt",id:"hp-41",name:"倾角传感器",desc:"察觉歪斜的传感器",tags:["感知","姿态","保护"],install:"椅脚内 · 嵌装感应",effect:"一坐下、一摇晃，它都察觉"},{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"扶手内 · 内嵌喇叭",effect:"摇椅会陪你说说话"}],mods:[{key:"speech",id:"ai-07",name:"语音识别",desc:"语音转文字",tags:["语音","转写","交互"],effect:"听懂你说的话，接上你的话头",panel:"听你说话"},{key:"chat",id:"ai-11",name:"AI 对话",desc:"自然语言对话能力",tags:["对话","陪伴","交互"],effect:"坐下来摇一摇，TA 陪你聊聊天",panel:"陪聊"}],shots:{plain:{img:"chair/chair-plain.jpg",label:"原设计 · 窗边摇椅",caption:"一把吱呀作响的藤摇椅，晒着午后阳光。"},tilt:{img:"chair/chair-tilt.jpg",label:"倾角 · 察觉摇晃",caption:"一坐下、一摇晃，它都轻轻察觉。"},speaker:{img:"chair/chair-speaker.jpg",label:"扬声 · 陪你说话",caption:"扶手里传出一句温柔的话。"},both:{img:"chair/chair-both.jpg",label:"全组合 · 摇椅聊天",caption:"坐下来摇一摇，有人陪你聊聊天。"}}},{id:"di-24",slug:"top",el:{name:"木陀螺",desc:"鞭子抽着转的木陀螺，转起来嗡嗡响",tags:["玩具","木质","童年"]},parts:[{key:"led",id:"hp-01",name:"LED 灯带",desc:"可调色温的柔性灯带",tags:["发光","柔性","氛围"],install:"陀螺腰部 · 嵌一圈薄灯",effect:"转起来时腰部光带拉成一个光环，像童年的彩色光圈"},{key:"counter",id:"hp-05",name:"微型马达",desc:"低速静音马达",tags:["运动","驱动","机械"],install:"陀螺底部 · 藏在铁尖里",effect:"不用鞭子也能自己转起来，安静地在桌上转着等你回来看"}],mods:[{key:"record",id:"ai-02",name:"声音录制",desc:"持续采集与归档声音",tags:["采集","记录","回忆"],effect:"陀螺转起来时录下孩子的笑声，存在陀螺里",panel:"笑声留档"},{key:"playback",id:"ai-10",name:"语音播报",desc:"文字转自然语音",tags:["语音","转写","交互"],effect:"陀螺停下时说一句童年的话，像在提醒你该回去玩了",panel:"童年回声"}],shots:{plain:{img:"top/top-plain.jpg",label:"原设计 · 院里的陀螺",caption:"鞭子一抽，木陀螺嗡嗡转起来——是院子里整个下午的消遣。"},led:{img:"top/top-led.jpg",label:"光带 · 转成光环",caption:"转起来时腰部光带拉成一个光环，像把童年的颜色留住。"},counter:{img:"top/top-counter.jpg",label:"自转 · 不用鞭子也能转",caption:"底部藏了个小马达，不用鞭子也能在桌上安静地转着。"},both:{img:"top/top-both.jpg",label:"组合 · 会留笑声的陀螺",caption:"光带转成光环，笑声存进陀螺，停下时说一句童年老话——像把院子里的下午找回来了。"}}},{id:"di-25",slug:"kite",el:{name:"纸风筝",desc:"竹骨纸面的老风筝，线一放飞到天上",tags:["玩具","竹纸","童年"]},parts:[{key:"light",id:"hp-18",name:"光敏传感器",desc:"感知光线明暗",tags:["感知","光","输入"],install:"风筝面 · 贴在纸背上",effect:"天暗下来时风筝面浮出暖光，像一盏挂在云上的灯"},{key:"gyro",id:"hp-11",name:"陀螺仪",desc:"感知姿态与倾斜",tags:["感知","姿态","输入"],install:"风筝骨交叉处 · 卡在竹节",effect:"手机上能看到风筝在风里的姿态，知道它偏了还是稳了"}],mods:[{key:"camera",id:"ai-09",name:"记忆相册",desc:"照片自动整理与讲述",tags:["影像","记忆","叙事"],effect:"风筝上的光敏记录每次放飞时的天色，自动拼成一本放飞日记",panel:"飞天日记"},{key:"voice",id:"ai-07",name:"语音识别",desc:"语音转文字",tags:["语音","转写","交互"],effect:"放风筝时说的话转成文字写在风筝面上，像给天空寄了封信",panel:"天空书信"}],shots:{plain:{img:"kite/kite-plain.jpg",label:"原设计 · 春天的风筝",caption:"竹骨纸面的老风筝，线一放就飞到天上——是整个春天的头等大事。"},light:{img:"kite/kite-light.jpg",label:"感光 · 天暗了会亮",caption:"天暗下来时风筝面浮出暖光，像挂在云上的一盏灯。"},gyro:{img:"kite/kite-gyro.jpg",label:"陀螺仪 · 看见风的姿态",caption:"手机上能看到风筝的姿态——偏了多少、稳不稳，像它在跟你说话。"},both:{img:"kite/kite-both.jpg",label:"组合 · 会写日记的风筝",caption:"天色记录成日记，说的话写在风筝面上——每一次放飞都被天空记住。"}}},{id:"di-26",slug:"rattle",el:{name:"拨浪鼓",desc:"咚咚作响的小拨浪鼓，摇一摇两边弹珠敲鼓面",tags:["玩具","声音","童年"]},parts:[{key:"led",id:"hp-12",name:"RGB 全彩灯珠",desc:"可编程彩色 LED",tags:["发光","彩色","可编程"],install:"鼓面两侧 · 嵌入小灯",effect:"摇动时鼓面两侧亮起随节奏变色的光，像把声音变成看得见的颜色"},{key:"mic",id:"hp-10",name:"电容麦克风",desc:"高灵敏度拾音头",tags:["收音","音频","输入"],install:"鼓腰内壁 · 藏在鼓身里",effect:"录下拨浪鼓的每一次咚咚声，存成节奏档案"}],mods:[{key:"analyze",id:"ai-03",name:"声音分析",desc:"声纹情绪与语义分析",tags:["分析","情感","洞察"],effect:"从咚咚声的节奏里读出摇鼓人的心情，灯色随之变化",panel:"节奏心情"},{key:"playback",id:"ai-10",name:"语音播报",desc:"文字转自然语音",tags:["语音","转写","交互"],effect:"摇三下拨浪鼓，它说一句童年时奶奶哄你的话",panel:"童年回声"}],shots:{plain:{img:"rattle/rattle-plain.jpg",label:"原设计 · 小手摇的鼓",caption:"咚咚响的拨浪鼓，小手一摇两边弹珠敲鼓面——是童年最早的乐器。"},led:{img:"rattle/rattle-led.jpg",label:"彩光 · 声音变颜色",caption:"摇动时鼓面两侧亮起变色的光，咚咚声变成了看得见的颜色。"},mic:{img:"rattle/rattle-mic.jpg",label:"收音 · 记下咚咚声",caption:"鼓身里藏了个小麦克风，每一声咚咚都被记下来。"},both:{img:"rattle/rattle-both.jpg",label:"组合 · 懂心情的拨浪鼓",caption:"咚咚声读出心情，灯色跟着变——摇三下，说一句奶奶的老话。"}}},{id:"di-27",slug:"hotpot",el:{name:"铜火锅",desc:"炭火铜火锅，一家人围着吃",tags:["餐具","金属","团聚"]},parts:[{key:"temp",id:"hp-19",name:"温度传感器",desc:"实时感知温度",tags:["感知","温度","输入"],install:"锅底中心 · 嵌入感温",effect:"锅壁一圈暖光显示汤温，橙到红就是滚了，该下菜了"},{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"锅底座侧 · 藏在铜壁里",effect:"水滚时轻轻播放一段老曲子，像在叫大家该上桌了"}],mods:[{key:"record",id:"ai-02",name:"声音录制",desc:"持续采集与归档声音",tags:["采集","记录","回忆"],effect:"围炉时的说笑声都录下来，每次火锅都是一个团圆的声音档案",panel:"团圆留声"},{key:"analyze",id:"ai-08",name:"情感分析",desc:"识别语气与情绪",tags:["情感","分析","陪伴"],effect:"从说笑声里读出今晚的氛围，下次开锅时灯色自动还原那个温度",panel:"团圆温度"}],shots:{plain:{img:"hotpot/hotpot-plain.jpg",label:"原设计 · 围炉之夜",caption:"炭火铜火锅，一家人围着坐——筷子在锅里捞来捞去，是最热闹的冬夜。"},temp:{img:"hotpot/hotpot-temp.jpg",label:"温感 · 汤滚了会亮",caption:"锅壁一圈暖光显示汤温，橙到红就是滚了，该下菜了。"},speaker:{img:"hotpot/hotpot-speaker.jpg",label:"音响 · 开锅的老曲子",caption:"水滚时铜壁里飘出一段老曲子，像在叫大家该上桌了。"},both:{img:"hotpot/hotpot-both.jpg",label:"组合 · 会记住团圆的铜锅",caption:"汤温用光告诉你，说笑声存进锅底，下次开锅时那个温度自动还原——像团圆从未散场。"}}},{id:"di-28",slug:"abacus",el:{name:"算盘",desc:"噼啪作响的木算盘，拨珠子算账",tags:["工具","木质","老物件"]},parts:[{key:"screen",id:"hp-13",name:"墨水屏",desc:"低功耗电子纸屏",tags:["显示","低功耗","薄片"],install:"算盘底部 · 薄屏贴合",effect:"算完后拨一下末档，算盘底部浮现数字确认结果"},{key:"vibrate",id:"hp-05",name:"微型马达",desc:"低速静音马达",tags:["运动","驱动","机械"],install:"算盘边框内 · 藏在横梁里",effect:"拨到特定位置时算盘轻轻一震，像在提醒你算错了"}],mods:[{key:"extract",id:"ai-05",name:"信息提取",desc:"从聊天记录提取记忆素材",tags:["数据","记忆","整理"],effect:"从老账本里提取每笔数字背后的故事，在算盘底屏上回看",panel:"账目回看"},{key:"voice",id:"ai-07",name:"语音识别",desc:"语音转文字",tags:["语音","转写","交互"],effect:"报一个数，算盘自动拨到对应位置，像有个老掌柜帮你算",panel:"老掌柜模式"}],shots:{plain:{img:"abacus/abacus-plain.jpg",label:"原设计 · 老掌柜的算盘",caption:"噼啪作响的木算盘，拨珠子算账——是老掌柜吃饭的家伙。"},screen:{img:"abacus/abacus-screen.jpg",label:"底屏 · 算完亮数字",caption:"拨一下末档，算盘底部浮现数字，像在帮你确认结果。"},vibrate:{img:"abacus/abacus-vibrate.jpg",label:"震动 · 算错了会提醒",caption:"拨到特定位置时算盘轻轻一震，像在说你算错了。"},both:{img:"abacus/abacus-both.jpg",label:"组合 · 会讲故事的老算盘",caption:"报个数自动拨珠，底屏亮出结果和故事——像老掌柜还在柜台后面坐着。"}}},{id:"di-29",slug:"pen",el:{name:"老钢笔",desc:"笔尖磨旧的钢笔，写过很多字",tags:["文字","金属","随身"]},parts:[{key:"screen",id:"hp-13",name:"墨水屏",desc:"低功耗电子纸屏",tags:["显示","低功耗","薄片"],install:"笔杆内壁 · 薄屏贴面",effect:"写过的字在笔杆上缓缓显示一行摘要，像笔在帮你记住写了什么"},{key:"heart",id:"hp-21",name:"心率传感器",desc:"感知心跳节奏",tags:["感知","生理","输入"],install:"笔握处 · 指腹触点",effect:"写字时感知你心跳，紧张时笔杆微微变暖"}],mods:[{key:"analyze",id:"ai-08",name:"情感分析",desc:"识别语气与情绪",tags:["情感","分析","陪伴"],effect:"从你写的字里读出心情，笔杆温度随之变化",panel:"笔触心事"},{key:"record",id:"ai-02",name:"声音录制",desc:"持续采集与归档声音",tags:["采集","记录","回忆"],effect:"写字时的笔尖沙沙声和你的喃喃都录下来，存成一篇有声日记",panel:"有声日记"}],shots:{plain:{img:"pen/pen-plain.jpg",label:"原设计 · 写过很多字",caption:"笔尖磨旧的钢笔，握在手里有分量——写过很多字，也写了很多心事。"},screen:{img:"pen/pen-screen.jpg",label:"笔屏 · 记住你写了什么",caption:"写过的字在笔杆上缓缓显示一行摘要，像笔在帮你记。"},heart:{img:"pen/pen-heart.jpg",label:"心率 · 笔杆会变暖",caption:"写字时笔握处感知心跳，紧张时笔杆微微变暖。"},both:{img:"pen/pen-both.jpg",label:"组合 · 懂心事的钢笔",caption:"笔尖沙沙声存成有声日记，心情让笔杆变暖——像老朋友在旁边听你写。"}}},{id:"di-30",slug:"letterbox",el:{name:"手写信匣",desc:"装满旧信的木匣子，叠着泛黄的信纸",tags:["收纳","木质","记忆"]},parts:[{key:"screen",id:"hp-13",name:"墨水屏",desc:"低功耗电子纸屏",tags:["显示","低功耗","薄片"],install:"匣盖内面 · 屏贴盖板",effect:"打开匣盖，墨水屏上浮现最近一封信的开头几句"},{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"匣底暗格 · 藏在木壁里",effect:"打开匣盖时轻轻播放一段写信人的声音"}],mods:[{key:"voice",id:"ai-01",name:"声音克隆",desc:"复刻真人声线",tags:["声音","分身","情感"],effect:"用信上的字生成写信人的声音，把信读给你听",panel:"读信之声"},{key:"memory",id:"ai-09",name:"记忆相册",desc:"照片自动整理与讲述",tags:["影像","记忆","叙事"],effect:"信纸上提到的每个场景自动配上老照片，在墨水屏上展示",panel:"信中影像"}],shots:{plain:{img:"letterbox/letterbox-plain.jpg",label:"原设计 · 泛黄的信",caption:"装满旧信的木匣子，信纸泛黄叠着——每封都是一段没说完的话。"},screen:{img:"letterbox/letterbox-screen.jpg",label:"盖屏 · 打开就看见",caption:"打开匣盖，墨水屏上浮现最近一封信的开头几句。"},speaker:{img:"letterbox/letterbox-speaker.jpg",label:"音响 · 打开就听见",caption:"打开匣盖时木壁里飘出写信人的声音，像信在开口说话。"},both:{img:"letterbox/letterbox-both.jpg",label:"组合 · 会读信的木匣",caption:"打开匣盖，信开头浮在屏上，写信人的声音从木壁里飘出来——像他还在灯下写。"}}},{id:"di-31",slug:"chime",el:{name:"檐下风铃",desc:"风吹叮当的风铃，挂在屋檐下",tags:["氛围","声音","悬挂"]},parts:[{key:"light",id:"hp-01",name:"LED 灯带",desc:"可调色温的柔性灯带",tags:["发光","柔性","氛围"],install:"铃管底部 · 绕一圈薄光",effect:"风起时铃管底部亮起随风力变化的暖光，像把风声变成光"},{key:"mic",id:"hp-10",name:"电容麦克风",desc:"高灵敏度拾音头",tags:["收音","音频","输入"],install:"铃顶吊座 · 藏在吊绳处",effect:"每一声叮当都被录下来，存成风的声音日记"}],mods:[{key:"analyze",id:"ai-03",name:"声音分析",desc:"声纹情绪与语义分析",tags:["分析","情感","洞察"],effect:"从铃声的频率读出今天的风是急是缓，灯色随风力变化",panel:"风语解读"},{key:"playback",id:"ai-10",name:"语音播报",desc:"文字转自然语音",tags:["语音","转写","交互"],effect:"无风的夜晚，铃里轻轻播放白天录下的叮当声，像把风带进屋",panel:"风回声"}],shots:{plain:{img:"chime/chime-plain.jpg",label:"原设计 · 檐下的风",caption:"挂在檐下的风铃，风一吹就叮当响——是整条巷子最温柔的声音。"},light:{img:"chime/chime-light.jpg",label:"光带 · 风变成光",caption:"风起时铃管底部亮起暖光，风力越大光越亮。"},mic:{img:"chime/chime-mic.jpg",label:"收音 · 记下每一声叮当",caption:"铃顶藏了个小麦克风，每一声叮当都被存下来。"},both:{img:"chime/chime-both.jpg",label:"组合 · 会记住风的风铃",caption:"叮当声变成光，存成声音日记——无风的夜里轻轻回放，像把风带回屋里。"}}},{id:"di-32",slug:"bedwarmer",el:{name:"汤婆子",desc:"捂被窝的铜暖手炉，灌上热水暖一夜",tags:["保暖","金属","冬日"]},parts:[{key:"temp",id:"hp-19",name:"温度传感器",desc:"实时感知温度",tags:["感知","温度","输入"],install:"铜壁底部 · 内嵌感温",effect:"铜壁颜色随温度变化，暖时泛橙光，凉了就暗下去"},{key:"glow",id:"hp-02",name:"夜光荧光粉",desc:"白天吸光、夜晚自发光",tags:["发光","涂装","被动光"],install:"铜面花纹处 · 荧光填刻",effect:"铜面的刻花纹路夜里发光，在被窝里亮成一幅暖图"}],mods:[{key:"remind",id:"ai-44",name:"智能闹钟",desc:"睡眠周期感知与提醒",tags:["时间","感知","陪伴"],effect:"感知你的睡眠周期，在浅睡时用暖光唤醒而不是吵醒你",panel:"温柔叫醒"},{key:"analyze",id:"ai-08",name:"情感分析",desc:"识别语气与情绪",tags:["情感","分析","陪伴"],effect:"根据你说梦话的语气调灯色，像汤婆子也在替你操心",panel:"梦话灯语"}],shots:{plain:{img:"bedwarmer/bedwarmer-plain.jpg",label:"原设计 · 冬夜的被窝",caption:"灌上热水的铜汤婆子，塞进被窝暖一夜——是冬天最朴素的安全感。"},temp:{img:"bedwarmer/bedwarmer-temp.jpg",label:"温感 · 凉了会暗",caption:"铜壁颜色随温度变，暖时泛橙光，凉了就暗下去。"},glow:{img:"bedwarmer/bedwarmer-glow.jpg",label:"夜光 · 被窝里的暖图",caption:"铜面花纹夜里发光，在被窝里亮成一幅暖图。"},both:{img:"bedwarmer/bedwarmer-both.jpg",label:"组合 · 懂你冷热的汤婆子",caption:"铜壁告诉你还暖不暖，花纹在被窝里发光——浅睡时用光轻轻叫醒你。"}}},{id:"di-33",slug:"bell",el:{name:"拉绳门铃",desc:"门外拉绳的老门铃",tags:["声音","机械","家"]},parts:[{key:"ir",id:"hp-09",name:"红外传感器",desc:"人体/距离感应",tags:["感知","触发","非接触"],install:"门铃内 · 嵌装感应",effect:"还没拉绳，就知道有人来了"},{key:"bell",id:"hp-47",name:"小铜铃",desc:"叮当响的小铜铃",tags:["声音","复古","提示"],install:"门铃旁 · 加装铜铃",effect:"叮当一声，比原来更清脆"}],mods:[{key:"voiceprint",id:"ai-46",name:"声纹识别",desc:"认出家人的声音",tags:["安全","声音","识别"],effect:"一拉绳，就听出是谁回来了",panel:"听声辨人"},{key:"announce",id:"ai-10",name:"语音播报",desc:"文字转自然语音",tags:["语音","输出","交互"],effect:"轻轻报一声：是谁到家了",panel:"回家播报"}],shots:{plain:{img:"bell/bell-plain.jpg",label:"原设计 · 家门之外",caption:"一只老门铃，等着一根拉绳被轻轻拽动。"},ir:{img:"bell/bell-ir.jpg",label:"红外 · 未拉先知",caption:"还没拉绳，就知道有人来了。"},bell:{img:"bell/bell-bell.jpg",label:"铜铃 · 一声清脆",caption:"叮当一声，比原来更清脆。"},both:{img:"bell/bell-both.jpg",label:"全组合 · 听声知归",caption:"一拉绳，就听出是谁回家了。"}}},{id:"di-34",slug:"coalstove",el:{name:"蜂窝煤炉",desc:"冬天取暖的煤炉，炉膛里烧着蜂窝煤",tags:["炊事","金属","冬日"]},parts:[{key:"light",id:"hp-01",name:"LED 灯带",desc:"可调色温的柔性灯带",tags:["发光","柔性","氛围"],install:"炉腰通风口 · 绕一圈暖光",effect:"模拟炭火的暖光跳动，炉子里没煤也像在烧着"},{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"炉底座内 · 藏在铁壁里",effect:"播放炭火噼啪的白噪音，像炉子真的在烧着"}],mods:[{key:"memory",id:"ai-09",name:"记忆相册",desc:"照片自动整理与讲述",tags:["影像","记忆","叙事"],effect:"炉前烤红薯的记忆自动配上老照片，在炉面光带上轮播",panel:"炉前记忆"},{key:"voice",id:"ai-07",name:"语音识别",desc:"语音转文字",tags:["语音","转写","交互"],effect:"说一句想吃什么，炉子用暖光画出字来，像在应你",panel:"炉口回话"}],shots:{plain:{img:"coalstove/coalstove-plain.jpg",label:"原设计 · 冬天的炉子",caption:"蜂窝煤炉烧着火，一家人围着烤——是冬天最暖的那块地方。"},light:{img:"coalstove/coalstove-light.jpg",label:"暖光 · 模拟炭火",caption:"炉腰绕一圈暖光，模拟炭火跳动，没煤也像在烧着。"},speaker:{img:"coalstove/coalstove-speaker.jpg",label:"音响 · 炭火白噪音",caption:"炉底飘出噼啪的炭火声，像炉子真的在烧着。"},both:{img:"coalstove/coalstove-both.jpg",label:"组合 · 会记事的煤炉",caption:"暖光模拟炭火，噼啪声陪着你——说句话炉子就用光画字应你，像冬天从没走远。"}}},{id:"di-35",slug:"tinbox",el:{name:"铁皮饼干盒",desc:"装满回忆的铁皮盒，打开闻到黄油味",tags:["收纳","金属","童年"]},parts:[{key:"screen",id:"hp-13",name:"墨水屏",desc:"低功耗电子纸屏",tags:["显示","低功耗","薄片"],install:"盒盖内面 · 屏贴盖板",effect:"打开盒盖浮现饼干盒里最旧的那张照片"},{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"盒底暗格 · 藏在铁壁里",effect:"打开盒盖时播放一段小时候的电视广告曲"}],mods:[{key:"memory",id:"ai-09",name:"记忆相册",desc:"照片自动整理与讲述",tags:["影像","记忆","叙事"],effect:"盒里每张老照片都被识别整理，打开盒盖就能在屏上翻看",panel:"铁盒相册"},{key:"voice",id:"ai-01",name:"声音克隆",desc:"复刻真人声线",tags:["声音","分身","情感"],effect:"打开盒盖，奶奶的声音说一句小时候说的话",panel:"奶奶的话"}],shots:{plain:{img:"tinbox/tinbox-plain.jpg",label:"原设计 · 打开是回忆",caption:"铁皮饼干盒，打开闻到黄油味——里面装着旧照片和小玩意儿，是童年的百宝箱。"},screen:{img:"tinbox/tinbox-screen.jpg",label:"盖屏 · 打开看见旧照",caption:"打开盒盖，墨水屏上浮现盒里最旧的那张照片。"},speaker:{img:"tinbox/tinbox-speaker.jpg",label:"音响 · 打开听见老曲",caption:"打开盒盖时铁壁里飘出小时候的电视广告曲。"},both:{img:"tinbox/tinbox-both.jpg",label:"组合 · 会说话的饼干盒",caption:"打开盒盖看旧照，奶奶的声音从铁壁里飘出来——像她还坐在你旁边拆饼干。"}}},{id:"di-36",slug:"marble",el:{name:"玻璃弹珠",desc:"五颜六色的玻璃珠，弹一下在地上滚",tags:["玩具","玻璃","童年"]},parts:[{key:"led",id:"hp-12",name:"RGB 全彩灯珠",desc:"可编程彩色 LED",tags:["发光","彩色","可编程"],install:"弹珠内部 · 封入微型灯",effect:"弹珠内部亮起随滚动变色的光，像把彩虹藏进了玻璃球"},{key:"gyro",id:"hp-11",name:"陀螺仪",desc:"感知姿态与倾斜",tags:["感知","姿态","输入"],install:"弹珠内 · 封入微型陀螺",effect:"手机上看到弹珠在滚动的轨迹，像在看一个彩虹的路径"}],mods:[{key:"play",id:"ai-02",name:"声音录制",desc:"持续采集与归档声音",tags:["采集","记录","回忆"],effect:"弹珠碰撞的咔嗒声被录下来，存成一条童年声音线",panel:"弹珠声线"},{key:"analyze",id:"ai-03",name:"声音分析",desc:"声纹情绪与语义分析",tags:["分析","情感","洞察"],effect:"从弹珠碰撞的节奏读出玩耍时的兴奋程度，灯色随之变化",panel:"弹珠心情"}],shots:{plain:{img:"marble/marble-plain.jpg",label:"原设计 · 地上的彩虹",caption:"五颜六色的玻璃弹珠，弹一下在地上滚——是童年最简单的快乐。"},led:{img:"marble/marble-led.jpg",label:"内光 · 彩虹藏进玻璃",caption:"弹珠内部亮起变色的光，像把彩虹藏进了玻璃球。"},gyro:{img:"marble/marble-gyro.jpg",label:"陀螺仪 · 看见滚的轨迹",caption:"手机上看到弹珠滚动的轨迹，像在追一个彩虹的路径。"},both:{img:"marble/marble-both.jpg",label:"组合 · 会记快乐的弹珠",caption:"彩虹在玻璃球里转，碰撞声存成声音线——快乐被记住了。"}}},{id:"di-37",slug:"fan-fold",el:{name:"木折扇",desc:"折起来的老折扇，打开有竹香",tags:["竹纸","夏夜","随身"]},parts:[{key:"glow",id:"hp-02",name:"夜光荧光粉",desc:"白天吸光、夜晚自发光",tags:["发光","涂装","被动光"],install:"扇面文字处 · 荧光描字",effect:"扇面上的水墨字夜里发光，像在夏夜的风里亮着一段诗"},{key:"mic",id:"hp-10",name:"电容麦克风",desc:"高灵敏度拾音头",tags:["收音","音频","输入"],install:"扇骨末端 · 藏在竹节里",effect:"扇一扇时录下风声，存成夏天声音档案"}],mods:[{key:"voice",id:"ai-07",name:"语音识别",desc:"语音转文字",tags:["语音","转写","交互"],effect:"说一句话，扇面上自动用水墨字体写出来，像在替你题扇",panel:"题扇模式"},{key:"playback",id:"ai-10",name:"语音播报",desc:"文字转自然语音",tags:["语音","转写","交互"],effect:"打开扇子时轻轻念一句扇面上的诗，像扇子在自言自语",panel:"扇面吟诗"}],shots:{plain:{img:"fan-fold/fan-fold-plain.jpg",label:"原设计 · 夏天的扇子",caption:"折起来的老折扇，打开有竹香——是夏天院子里最体面的凉风。"},glow:{img:"fan-fold/fan-fold-glow.jpg",label:"夜光 · 字在夜里亮",caption:"扇面水墨字夜里发光，像在夏夜的风里亮着一段诗。"},mic:{img:"fan-fold/fan-fold-mic.jpg",label:"收音 · 扇出风声",caption:"扇骨末端藏了个小麦克风，扇一扇就录下风声。"},both:{img:"fan-fold/fan-fold-both.jpg",label:"组合 · 会题诗的折扇",caption:"说句话扇面自动题字，夜里字亮着，打开时念一句——像夏夜的风带着诗。"}}},{id:"di-38",slug:"glasses",el:{name:"老花镜",desc:"祖母戴过的老花镜，镜腿磨得光亮",tags:["随身","光学","长辈"]},parts:[{key:"screen",id:"hp-13",name:"墨水屏",desc:"低功耗电子纸屏",tags:["显示","低功耗","薄片"],install:"镜腿外侧 · 薄屏贴面",effect:"看书时镜腿屏上浮现放大的字，像一副会帮你认字的镜"},{key:"light",id:"hp-18",name:"光敏传感器",desc:"感知光线明暗",tags:["感知","光","输入"],install:"镜框桥处 · 面向书页",effect:"光线暗时镜框微微亮起暖光，像在替你开一盏灯"}],mods:[{key:"read",id:"ai-07",name:"语音识别",desc:"语音转文字",tags:["语音","转写","交互"],effect:"看书看累了，说一句念给我听，镜腿里轻声把字念出来",panel:"念给我听"},{key:"memory",id:"ai-05",name:"信息提取",desc:"从聊天记录提取记忆素材",tags:["数据","记忆","整理"],effect:"从老照片里提取祖母戴这副眼镜的每个场景，在镜腿屏上回看",panel:"祖母影像"}],shots:{plain:{img:"glasses/glasses-plain.jpg",label:"原设计 · 祖母的眼镜",caption:"祖母戴过的老花镜，镜腿磨得光亮——她戴着它看了很多年的书和报纸。"},screen:{img:"glasses/glasses-screen.jpg",label:"镜腿屏 · 帮你认字",caption:"看书时镜腿屏上浮现放大的字，像在帮你认。"},light:{img:"glasses/glasses-light.jpg",label:"感光 · 暗了会亮",caption:"光线暗时镜框微微亮起暖光，像在替你开一盏灯。"},both:{img:"glasses/glasses-both.jpg",label:"组合 · 会念书的眼镜",caption:"暗了会亮，累了会念——镜腿屏上还能看到祖母戴它的老照片。"}}},{id:"di-39",slug:"sewbasket",el:{name:"针线笸箩",desc:"竹编的针线筐，装着线和顶针",tags:["工具","竹编","家传"]},parts:[{key:"glow",id:"hp-02",name:"夜光荧光粉",desc:"白天吸光、夜晚自发光",tags:["发光","涂装","被动光"],install:"竹编纹理间 · 荧光填缝",effect:"笸箩的编织纹路夜里发光，像把针线活的光也留住了"},{key:"mic",id:"hp-10",name:"电容麦克风",desc:"高灵敏度拾音头",tags:["收音","音频","输入"],install:"笸箩底沿 · 藏在竹编里",effect:"穿针引线时的细碎声被录下，存成一段手艺声音档案"}],mods:[{key:"voice",id:"ai-01",name:"声音克隆",desc:"复刻真人声线",tags:["声音","分身","情感"],effect:"拿起顶针时，笸箩里传出奶奶教穿针的声音",panel:"手艺回声"},{key:"memory",id:"ai-09",name:"记忆相册",desc:"照片自动整理与讲述",tags:["影像","记忆","叙事"],effect:"每件缝过的衣物都被识别整理，在笸箩纹路的光里轮播",panel:"针线记忆"}],shots:{plain:{img:"sewbasket/sewbasket-plain.jpg",label:"原设计 · 奶奶的筐",caption:"竹编的针线笸箩，装着线和顶针——是奶奶做了一辈子针线活的伙伴。"},glow:{img:"sewbasket/sewbasket-glow.jpg",label:"夜光 · 编纹发光",caption:"笸箩的编织纹路夜里发光，像把针线活的光也留住了。"},mic:{img:"sewbasket/sewbasket-mic.jpg",label:"收音 · 记下穿针声",caption:"笸箩底沿藏了个小麦克风，穿针引线的细碎声被记下来。"},both:{img:"sewbasket/sewbasket-both.jpg",label:"组合 · 会回声的针线筐",caption:"编纹发光，拿起顶针奶奶的声音就传出来——像她还在灯下帮你穿针。"}}},{id:"di-40",slug:"calendar",el:{name:"老挂历",desc:"一天撕一页的老挂历，撕到年末只剩薄薄一叠",tags:["时间","纸质","记忆"]},parts:[{key:"screen",id:"hp-13",name:"墨水屏",desc:"低功耗电子纸屏",tags:["显示","低功耗","薄片"],install:"挂历封面 · 屏贴面",effect:"每天自动翻一页，墨水屏上显示今天的日子和节气"},{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"挂历背板 · 藏在纸板里",effect:"每天早上撕页时播放一段当年那天的声音记忆"}],mods:[{key:"memory",id:"ai-09",name:"记忆相册",desc:"照片自动整理与讲述",tags:["影像","记忆","叙事"],effect:"挂历屏上每天轮播一张那年同一天的老照片",panel:"那年今日"},{key:"voice",id:"ai-01",name:"声音克隆",desc:"复刻真人声线",tags:["声音","分身","情感"],effect:"撕页时家人当年的声音从背板飘出，说一句那天说的话",panel:"那年那语"}],shots:{plain:{img:"calendar/calendar-plain.jpg",label:"原设计 · 一天一页",caption:"一天撕一页的老挂历，撕到年末只剩薄薄一叠——是时间最实在的样子。"},screen:{img:"calendar/calendar-screen.jpg",label:"日屏 · 自动翻页",caption:"每天自动翻一页，墨水屏上显示今天的日子和节气。"},speaker:{img:"calendar/calendar-speaker.jpg",label:"音响 · 撕页的声音",caption:"撕页时背板飘出当年那天的声音记忆。"},both:{img:"calendar/calendar-both.jpg",label:"组合 · 会回声的挂历",caption:"每天翻一页，屏上看到那年今日的老照片，背板飘出那天的声音——像时间没走远。"}}},{id:"di-41",slug:"mortar",el:{name:"石臼",desc:"捣蒜捣谷的石臼，石杵磨得光滑",tags:["厨房","石质","老物件"]},parts:[{key:"vibrate",id:"hp-05",name:"微型马达",desc:"低速静音马达",tags:["运动","驱动","机械"],install:"石臼底部 · 嵌入底座",effect:"捣的时候石臼轻轻震，帮你把料捣得更匀"},{key:"glow",id:"hp-02",name:"夜光荧光粉",desc:"白天吸光、夜晚自发光",tags:["发光","涂装","被动光"],install:"石臼内壁 · 荧光刻纹",effect:"石臼内壁的纹路夜里发光，像把石头的年轮亮出来"}],mods:[{key:"recipe",id:"ai-05",name:"信息提取",desc:"从聊天记录提取记忆素材",tags:["数据","记忆","整理"],effect:"从家里的老菜谱里提取配方，捣什么料时臼里亮出步骤",panel:"老菜谱"},{key:"voice",id:"ai-07",name:"语音识别",desc:"语音转文字",tags:["语音","转写","交互"],effect:"说一句捣什么，石臼的震动频率自动调到适合的力度",panel:"捣料模式"}],shots:{plain:{img:"mortar/mortar-plain.jpg",label:"原设计 · 灶台的石头",caption:"捣蒜捣谷的石臼，石杵磨得光滑——是灶台上最沉也最实在的家伙。"},vibrate:{img:"mortar/mortar-vibrate.jpg",label:"震动 · 捣得更匀",caption:"捣的时候石臼轻轻震，帮你把料捣得更匀。"},glow:{img:"mortar/mortar-glow.jpg",label:"夜光 · 石纹发光",caption:"石臼内壁的纹路夜里发光，像把石头的年轮亮出来。"},both:{img:"mortar/mortar-both.jpg",label:"组合 · 懂菜谱的石臼",caption:"说句捣什么就调好力度，臼里亮出老菜谱步骤——像灶台上那个老帮手。"}}},{id:"di-42",slug:"canteen",el:{name:"军用水壶",desc:"漆皮斑驳的铝水壶，背带磨得发白",tags:["容器","金属","家传"]},parts:[{key:"temp",id:"hp-19",name:"温度传感器",desc:"实时感知温度",tags:["感知","温度","输入"],install:"壶底内壁 · 贴底测温",effect:"壶壁一圈光显示水温，暖到凉一眼就知道"},{key:"glow",id:"hp-02",name:"夜光荧光粉",desc:"白天吸光、夜晚自发光",tags:["发光","涂装","被动光"],install:"漆皮斑驳处 · 荧光补漆",effect:"斑驳的漆皮处夜里发光，像把行军的路标亮出来"}],mods:[{key:"memory",id:"ai-09",name:"记忆相册",desc:"照片自动整理与讲述",tags:["影像","记忆","叙事"],effect:"壶上的漆痕被识别整理，拼出一段行军记忆",panel:"行军记忆"},{key:"voice",id:"ai-01",name:"声音克隆",desc:"复刻真人声线",tags:["声音","分身","情感"],effect:"拧开壶盖时，壶里传出当年行军号子的声音",panel:"号子回声"}],shots:{plain:{img:"canteen/canteen-plain.jpg",label:"原设计 · 斑驳的漆",caption:"漆皮斑驳的铝水壶，背带磨得发白——跟着谁走过很远的路。"},temp:{img:"canteen/canteen-temp.jpg",label:"温感 · 水还热不热",caption:"壶壁一圈光显示水温，暖到凉一眼就知道。"},glow:{img:"canteen/canteen-glow.jpg",label:"夜光 · 漆痕发亮",caption:"斑驳的漆皮处夜里发光，像把行军的路标亮出来。"},both:{img:"canteen/canteen-both.jpg",label:"组合 · 会记路的水壶",caption:"水温一眼看到，漆痕夜里发光，拧开壶盖听到号子——像跟着走了一段路。"}}},{id:"di-43",slug:"rockhorse",el:{name:"摇摇木马",desc:"会摇的儿童木马，骑着摇了一代又一代",tags:["玩具","木质","童年"]},parts:[{key:"led",id:"hp-01",name:"LED 灯带",desc:"可调色温的柔性灯带",tags:["发光","柔性","氛围"],install:"木马鬃毛处 · 绕一圈暖光",effect:"骑上去时鬃毛亮起暖光，像木马活了过来"},{key:"gyro",id:"hp-11",name:"陀螺仪",desc:"感知姿态与倾斜",tags:["感知","姿态","输入"],install:"木马底弧 · 卡在弧形处",effect:"手机上看到摇动的幅度，像在记录一个孩子的快乐节奏"}],mods:[{key:"record",id:"ai-02",name:"声音录制",desc:"持续采集与归档声音",tags:["采集","记录","回忆"],effect:"骑上去时的笑声和吱呀声被录下，存成一条童年声音线",panel:"笑声存档"},{key:"playback",id:"ai-10",name:"语音播报",desc:"文字转自然语音",tags:["语音","转写","交互"],effect:"摇到一定次数时，木马说一句童年的话鼓励你继续摇",panel:"木马说话"}],shots:{plain:{img:"rockhorse/rockhorse-plain.jpg",label:"原设计 · 摇了一代",caption:"会摇的儿童木马，骑着摇了一代又一代——是家里最老的玩具。"},led:{img:"rockhorse/rockhorse-led.jpg",label:"鬃光 · 木马活了",caption:"骑上去时鬃毛亮起暖光，像木马活了过来。"},gyro:{img:"rockhorse/rockhorse-gyro.jpg",label:"陀螺仪 · 摇的节奏",caption:"手机上看到摇动的幅度，像在记录一个孩子的快乐节奏。"},both:{img:"rockhorse/rockhorse-both.jpg",label:"组合 · 会记笑声的木马",caption:"鬃毛亮暖光，笑声和吱呀声存进木马——摇到一定次数说一句老话，像它也成了家人。"}}},{id:"di-44",slug:"toolbox",el:{name:"木质工具箱",desc:"爷爷的木工工具箱，装着锤子和凿子",tags:["工具","木质","家传"]},parts:[{key:"screen",id:"hp-13",name:"墨水屏",desc:"低功耗电子纸屏",tags:["显示","低功耗","薄片"],install:"箱盖内面 · 屏贴盖板",effect:"打开箱盖浮现爷爷当年的工具清单和手稿"},{key:"light",id:"hp-18",name:"光敏传感器",desc:"感知光线明暗",tags:["感知","光","输入"],install:"箱盖内侧 · 面向工具",effect:"打开箱盖时工具区亮起暖光，像爷爷在灯下帮你照亮"}],mods:[{key:"guide",id:"ai-07",name:"语音识别",desc:"语音转文字",tags:["语音","转写","交互"],effect:"说一句想做什么，箱盖屏上浮现爷爷手写的步骤指南",panel:"爷爷指南"},{key:"memory",id:"ai-05",name:"信息提取",desc:"从聊天记录提取记忆素材",tags:["数据","记忆","整理"],effect:"从老照片里提取爷爷做木工的每个场景，在屏上轮播",panel:"手艺影像"}],shots:{plain:{img:"toolbox/toolbox-plain.jpg",label:"原设计 · 爷爷的箱",caption:"爷爷的木工工具箱，装着锤子和凿子——是家里最有分量的传家宝。"},screen:{img:"toolbox/toolbox-screen.jpg",label:"盖屏 · 打开看手稿",caption:"打开箱盖，墨水屏上浮现爷爷当年的工具清单和手稿。"},light:{img:"toolbox/toolbox-light.jpg",label:"感光 · 打开就亮",caption:"打开箱盖时工具区亮起暖光，像爷爷在帮你照亮。"},both:{img:"toolbox/toolbox-both.jpg",label:"组合 · 会教手艺的工具箱",caption:"打开盖子看手稿和照片，说句话浮现指南——像爷爷还站在工作台旁边。"}}},{id:"di-45",slug:"candle",el:{name:"黄铜烛台",desc:"插蜡烛的黄铜烛台，烛光摇曳映在墙上",tags:["照明","金属","氛围"]},parts:[{key:"led",id:"hp-01",name:"LED 灯带",desc:"可调色温的柔性灯带",tags:["发光","柔性","氛围"],install:"烛台杯口 · 绕一圈暖光",effect:"没点蜡烛时烛台杯口亮起模拟烛光的暖光，像永不熄灭的烛火"},{key:"mic",id:"hp-10",name:"电容麦克风",desc:"高灵敏度拾音头",tags:["收音","音频","输入"],install:"烛台底座 · 藏在铜壁里",effect:"烛光下说的话被录下来，存成一段烛边声音档案"}],mods:[{key:"voice",id:"ai-01",name:"声音克隆",desc:"复刻真人声线",tags:["声音","分身","情感"],effect:"烛台里传出一个故人的声音，说一句烛光下说过的老话",panel:"烛边回声"},{key:"analyze",id:"ai-08",name:"情感分析",desc:"识别语气与情绪",tags:["情感","分析","陪伴"],effect:"烛光的亮度随说话的语气变化，像烛台在替你感受",panel:"烛语心灯"}],shots:{plain:{img:"candle/candle-plain.jpg",label:"原设计 · 墙上的烛影",caption:"插蜡烛的黄铜烛台，烛光摇曳映在墙上——是夜晚最温柔的仪式。"},led:{img:"candle/candle-led.jpg",label:"暖光 · 不灭的烛",caption:"没点蜡烛时杯口亮起模拟烛光的暖光，永不熄灭。"},mic:{img:"candle/candle-mic.jpg",label:"收音 · 记下烛边话",caption:"烛台底座藏了个小麦克风，烛光下说的话被记下来。"},both:{img:"candle/candle-both.jpg",label:"组合 · 会回声的烛台",caption:"暖光模拟烛火，烛光下的话被存住——故人的声音从铜壁里飘出来，像他还在烛光那头。"}}},{id:"di-46",slug:"jar",el:{name:"玻璃腌菜罐",desc:"封着老味道的玻璃罐，盖子拧得紧",tags:["容器","玻璃","日用"]},parts:[{key:"screen",id:"hp-13",name:"墨水屏",desc:"低功耗电子纸屏",tags:["显示","低功耗","薄片"],install:"罐壁外侧 · 薄屏贴面",effect:"罐壁屏上显示腌制天数和最佳食用期，像罐子在帮你数日子"},{key:"temp",id:"hp-19",name:"温度传感器",desc:"实时感知温度",tags:["感知","温度","输入"],install:"罐底外壁 · 贴底感温",effect:"罐壁一圈光显示罐内温度，酸了就变色提醒"}],mods:[{key:"recipe",id:"ai-05",name:"信息提取",desc:"从聊天记录提取记忆素材",tags:["数据","记忆","整理"],effect:"从家里的腌菜老配方里提取步骤，罐壁屏上显示今天该做什么",panel:"腌菜指南"},{key:"voice",id:"ai-07",name:"语音识别",desc:"语音转文字",tags:["语音","转写","交互"],effect:"问一句腌了多久，罐壁屏上显示天数，像罐子在回答你",panel:"罐子回答"}],shots:{plain:{img:"jar/jar-plain.jpg",label:"原设计 · 封着老味道",caption:"封着老味道的玻璃罐，盖子拧得紧——里面是奶奶腌了一辈子的菜。"},screen:{img:"jar/jar-screen.jpg",label:"罐屏 · 帮你数日子",caption:"罐壁屏上显示腌制天数和最佳食用期，像在帮你数日子。"},temp:{img:"jar/jar-temp.jpg",label:"温感 · 酸了会变色",caption:"罐壁一圈光显示罐内温度，酸了就变色提醒。"},both:{img:"jar/jar-both.jpg",label:"组合 · 懂腌菜的罐子",caption:"罐壁显示天数和温度，问一句就回答——像奶奶在旁边帮你记着腌菜的每个日子。"}}},{id:"di-47",slug:"oilpaper",el:{name:"油纸伞",desc:"桐油刷面的纸伞，打开有桐油香",tags:["雨具","竹纸","诗意"]},parts:[{key:"glow",id:"hp-02",name:"夜光荧光粉",desc:"白天吸光、夜晚自发光",tags:["发光","涂装","被动光"],install:"伞面竹骨处 · 荧光描骨",effect:"雨夜里伞骨发出柔光，像在雨中亮着一盏不灭的灯"},{key:"mic",id:"hp-10",name:"电容麦克风",desc:"高灵敏度拾音头",tags:["收音","音频","输入"],install:"伞顶内面 · 藏在竹骨交叉处",effect:"打伞时雨打伞面的声音被录下，存成一段雨声档案"}],mods:[{key:"voice",id:"ai-01",name:"声音克隆",desc:"复刻真人声线",tags:["声音","分身","情感"],effect:"打开伞时伞里传出一个故人的声音，说一句雨天的老话",panel:"雨中回声"},{key:"analyze",id:"ai-03",name:"声音分析",desc:"声纹情绪与语义分析",tags:["分析","情感","洞察"],effect:"从雨声读出雨的大小缓急，伞骨的光随雨势变化",panel:"雨语解读"}],shots:{plain:{img:"oilpaper/oilpaper-plain.jpg",label:"原设计 · 雨中的诗",caption:"桐油刷面的纸伞，打开有桐油香——是雨天最诗意的一把伞。"},glow:{img:"oilpaper/oilpaper-glow.jpg",label:"夜光 · 伞骨发亮",caption:"雨夜里伞骨发出柔光，像在雨中亮着一盏不灭的灯。"},mic:{img:"oilpaper/oilpaper-mic.jpg",label:"收音 · 记下雨声",caption:"伞顶藏了个小麦克风，雨打伞面的声音被存下来。"},both:{img:"oilpaper/oilpaper-both.jpg",label:"组合 · 会记雨声的伞",caption:"伞骨在雨夜发光，雨声被存住——打开伞听到故人的声音，像雨天有人陪你走。"}}},{id:"di-48",slug:"hangingbasket",el:{name:"藤编吊篮",desc:"挂在檐下的藤吊篮，晃晃悠悠垂着",tags:["收纳","藤编","悬挂"]},parts:[{key:"light",id:"hp-01",name:"LED 灯带",desc:"可调色温的柔性灯带",tags:["发光","柔性","氛围"],install:"吊篮边缘 · 绕一圈暖光",effect:"傍晚时吊篮边缘亮起暖光，像檐下挂了一盏会摇的灯"},{key:"gyro",id:"hp-11",name:"陀螺仪",desc:"感知姿态与倾斜",tags:["感知","姿态","输入"],install:"吊篮底部 · 卡在藤编底座",effect:"手机上看到吊篮晃动的幅度，像在记录风的节奏"}],mods:[{key:"memory",id:"ai-09",name:"记忆相册",desc:"照片自动整理与讲述",tags:["影像","记忆","叙事"],effect:"吊篮里的老物件被识别整理，边缘光带轮播它们的照片",panel:"吊篮记忆"},{key:"voice",id:"ai-10",name:"语音播报",desc:"文字转自然语音",tags:["语音","转写","交互"],effect:"风大时吊篮里轻轻说一句檐下的老话，像在提醒你收衣服",panel:"檐下提醒"}],shots:{plain:{img:"hangingbasket/hangingbasket-plain.jpg",label:"原设计 · 檐下的晃悠",caption:"挂在檐下的藤吊篮，晃晃悠悠垂着——里面装着夏天的瓜果和零碎。"},light:{img:"hangingbasket/hangingbasket-light.jpg",label:"暖光 · 会摇的灯",caption:"傍晚时吊篮边缘亮起暖光，像檐下挂了一盏会摇的灯。"},gyro:{img:"hangingbasket/hangingbasket-gyro.jpg",label:"陀螺仪 · 风的节奏",caption:"手机上看到吊篮晃动的幅度，像在记录风的节奏。"},both:{img:"hangingbasket/hangingbasket-both.jpg",label:"组合 · 会记事的吊篮",caption:"边缘暖光轮播老照片，风大时说一句檐下的老话——像老屋的檐还护着你。"}}},{id:"di-49",slug:"matchbox",el:{name:"火柴盒",desc:"划一下就亮的火柴，磷面磨得发白",tags:["小物","日常","复古"]},parts:[{key:"led",id:"hp-12",name:"RGB 全彩灯珠",desc:"可编程彩色 LED",tags:["发光","彩色","可编程"],install:"盒内底面 · 嵌入微型灯",effect:"划一下火柴盒，盒内亮起暖光，像真的擦出一朵小火苗"},{key:"vibrate",id:"hp-05",name:"微型马达",desc:"低速静音马达",tags:["运动","驱动","机械"],install:"盒底内壁 · 藏在纸板里",effect:"划开时盒子轻轻一震，像真的擦到磷面的触感"}],mods:[{key:"remind",id:"ai-02",name:"声音录制",desc:"持续采集与归档声音",tags:["采集","记录","回忆"],effect:"每次划火柴的时间被记录，存成一段日常仪式档案",panel:"划火记忆"},{key:"voice",id:"ai-10",name:"语音播报",desc:"文字转自然语音",tags:["语音","转写","交互"],effect:"划开时盒里说一句老话，像在提醒你今天还没点灯",panel:"点灯提醒"}],shots:{plain:{img:"matchbox/matchbox-plain.jpg",label:"原设计 · 划一下就亮",caption:"划一下就亮的火柴，磷面磨得发白——是最小的火，也是最日常的仪式。"},led:{img:"matchbox/matchbox-led.jpg",label:"内光 · 擦出光",caption:"划一下盒子，盒内亮起暖光，像真的擦出一朵小火苗。"},vibrate:{img:"matchbox/matchbox-vibrate.jpg",label:"震动 · 擦到磷面",caption:"划开时盒子轻轻一震，像真的擦到磷面的触感。"},both:{img:"matchbox/matchbox-both.jpg",label:"组合 · 会记事的火柴盒",caption:"划一下亮光震动，说一句点灯的老话——像在提醒你今天还有一盏灯没点。"}}},{id:"di-50",slug:"album",el:{name:"集邮册",desc:"贴过岁月的集邮册",tags:["纸质","收藏","记忆"]},parts:[{key:"speaker",id:"hp-06",name:"扬声器",desc:"小体积全频喇叭",tags:["发声","音频","输出"],install:"册旁 · 内嵌小喇叭",effect:"翻开集邮册，故事随之响起"},{key:"led",id:"hp-01",name:"LED 灯带",desc:"可调色温的柔性灯带",tags:["发光","柔性","氛围"],install:"册脊 · 夹一条暖光",effect:"翻页时，册脊透出一线暖光"}],mods:[{key:"radio",id:"ai-50",name:"回忆电台",desc:"自动播你的人生电台",tags:["音频","节目","回忆"],effect:"把邮票里的岁月，播成一部人生电台",panel:"人生电台"},{key:"story",id:"ai-17",name:"故事生成",desc:"把回忆写成小故事",tags:["文字","创作","回忆"],effect:"一张张邮票，讲成一段段往事",panel:"邮票往事"}],shots:{plain:{img:"album/album-plain.jpg",label:"原设计 · 书桌之上",caption:"一本旧集邮册，封着许多张过去的模样。"},speaker:{img:"album/album-speaker.jpg",label:"扬声 · 故事响起",caption:"翻开集邮册，故事随之响起。"},led:{img:"album/album-led.jpg",label:"灯带 · 册脊暖光",caption:"翻页时，册脊透出一线暖光。"},both:{img:"album/album-both.jpg",label:"全组合 · 回忆电台",caption:"暖光里翻开册子，把岁月播成一部电台。"}}}],Am={"di-01":"cup","di-03":"comb","di-04":"lamp","di-05":"box","di-06":"radio","di-07":"camera","di-08":"clock","di-09":"thermos","di-10":"frame","di-11":"typewriter","di-12":"kerosene","di-13":"suitcase","di-14":"tv","di-15":"flashlight","di-16":"sewing","di-17":"frog","di-18":"fan","di-19":"gramophone","di-20":"watch","di-21":"enamel-mug","di-22":"cradle","di-23":"chair","di-24":"top","di-25":"kite","di-26":"rattle","di-27":"hotpot","di-28":"abacus","di-29":"pen","di-30":"letterbox","di-31":"chime","di-32":"bedwarmer","di-33":"bell","di-34":"coalstove","di-35":"tinbox","di-36":"marble","di-37":"fan-fold","di-38":"glasses","di-39":"sewbasket","di-40":"calendar","di-41":"mortar","di-42":"canteen","di-43":"rockhorse","di-44":"toolbox","di-45":"candle","di-46":"jar","di-47":"oilpaper","di-48":"hangingbasket","di-49":"matchbox","di-50":"album","di-02":"phone"},h_={phone:{id:"di-02",name:"老式旋转电话机"},bed:{id:"di-51",name:"老式手摇病床"}},ru="wonder-forge:combiner:draft",xa="wonder-forge:combiner:history",Cm=20,ns=[{name:"老式电话机",image:"/textures/phone-dial.jpg",upgrade:"AI 声音",tone:"rose"},{name:"木质相框",image:"/frame/frame-plain.jpg",upgrade:"记忆屏",tone:"amber"},{name:"复古台灯",image:"/lamp/lamp-plain.jpg",upgrade:"智能光",tone:"mint"},{name:"老式收音机",image:"/radio/radio-plain.jpg",upgrade:"语音中枢",tone:"blue"},{name:"机械怀表",image:"/watch/watch-plain.jpg",upgrade:"时间提醒",tone:"amber"},{name:"搪瓷暖水壶",image:"/thermos/thermos-plain.jpg",upgrade:"温度感知",tone:"rose"},{name:"手摇缝纫机",image:"/sewing/sewing-plain.jpg",upgrade:"动作记录",tone:"mint"},{name:"木质算盘",image:"/abacus/abacus-plain.jpg",upgrade:"数据交互",tone:"blue"}];function Rm(){var K,I,X,$,ae,de,ke;const[t,e]=re.useState(null),[n,i]=re.useState([]),[r,s]=re.useState([]),[a,o]=re.useState([]),[l,c]=re.useState(""),[d,h]=re.useState(!1),[f,p]=re.useState(""),[v,y]=re.useState(null),[m,u]=re.useState("daily_items"),[g,_]=re.useState([]),[S,N]=re.useState(!1),[A,T]=re.useState("");re.useEffect(()=>{try{const P=JSON.parse(localStorage.getItem(ru)||"null"),V=JSON.parse(localStorage.getItem(xa)||"[]");Array.isArray(P==null?void 0:P.daily)&&i(P.daily),Array.isArray(P==null?void 0:P.hardware)&&s(P.hardware),Array.isArray(P==null?void 0:P.ai)&&o(P.ai),typeof(P==null?void 0:P.idea)=="string"&&c(P.idea),Array.isArray(V)&&_(V.slice(0,Cm))}catch{localStorage.removeItem(ru),localStorage.removeItem(xa)}finally{N(!0)}},[]),re.useEffect(()=>{fetch("/api/items").then(P=>P.json()).then(e).catch(P=>p("无法加载奇物库："+P.message))},[]),re.useEffect(()=>{S&&localStorage.setItem(ru,JSON.stringify({daily:n,hardware:r,ai:a,idea:l}))},[n,r,a,l,S]);const C=(P,V,ne)=>V(P.includes(ne)?P.filter(te=>te!==ne):[...P,ne]),E=(P,V,ne)=>{V(te=>te.includes(ne.id)?te:[...te,ne.id]),u(P),T(`已将「${ne.name}」加入搭配工作间`),window.setTimeout(()=>T(""),2600),window.requestAnimationFrame(()=>window.setTimeout(()=>{var te;(te=document.getElementById("workbench"))==null||te.scrollIntoView({behavior:"smooth",block:"start"})},40))},M=async()=>{h(!0),p(""),y(null);try{const P=await fetch("/api/combine",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({daily_ids:n,hardware_ids:r,ai_ids:a,idea:l})}),V=await P.json();if(!P.ok)throw new Error(V.error||"请求失败");y(V),L({daily:n,hardware:r,ai:a,idea:l,result:V})}catch(P){p(String(P.message||P))}finally{h(!1)}},L=P=>{var ne,te;const V={id:((te=(ne=globalThis.crypto)==null?void 0:ne.randomUUID)==null?void 0:te.call(ne))||`${Date.now()}-${Math.random().toString(16).slice(2)}`,createdAt:new Date().toISOString(),...P};_(Ee=>{const he=[V,...Ee].slice(0,Cm);return localStorage.setItem(xa,JSON.stringify(he)),he})},z=P=>{var V,ne;i(P.daily||[]),s(P.hardware||[]),o(P.ai||[]),c(P.idea||""),y(P.result||null),u((V=P.daily)!=null&&V.length?"daily_items":(ne=P.hardware)!=null&&ne.length?"hardware_parts":"ai_modules"),p(""),window.scrollTo({top:0,behavior:"smooth"})},B=P=>{_(V=>{const ne=V.filter(te=>te.id!==P);return localStorage.setItem(xa,JSON.stringify(ne)),ne})},Y=()=>{localStorage.removeItem(xa),_([])},Z=P=>new Intl.DateTimeFormat("zh-CN",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(P));if(!t)return x.jsxs("div",{className:"wf-combine",children:[x.jsxs("header",{className:"topbar",children:[x.jsxs("div",{className:"brand",children:[x.jsx(Ke,{to:"/",children:"万物改造工坊"})," ",x.jsx("span",{className:"glow",children:"WonderForge"})]}),x.jsxs("nav",{className:"nav",children:[x.jsx(Ke,{to:"/combine",className:"active",children:"搭配工作间"}),x.jsx(Ke,{to:"/demos",children:"3D 演示"}),x.jsx(Ke,{to:"/community",children:"社区"})]})]}),x.jsxs("main",{className:"wf-body",children:[x.jsx("div",{className:"skeleton",style:{marginTop:56}}),x.jsx("div",{className:"skeleton",style:{height:140,marginTop:18}})]})]});const W=(P,V)=>P.map(ne=>{var te;return(te=V.find(Ee=>Ee.id===ne))==null?void 0:te.name}).filter(Boolean);return x.jsxs("div",{className:"wf-combine",children:[x.jsxs("header",{className:"topbar",children:[x.jsxs("div",{className:"brand",children:[x.jsx(Ke,{to:"/",children:"万物改造工坊"})," ",x.jsx("span",{className:"glow",children:"WonderForge"})]}),x.jsxs("nav",{className:"nav",children:[x.jsx(Ke,{to:"/combine",className:"active",children:"搭配工作间"}),x.jsx(Ke,{to:"/demos",children:"3D 演示"}),x.jsx(Ke,{to:"/community",children:"社区"})]})]}),x.jsxs("div",{className:"wf-relic-layer","aria-hidden":"true",children:[x.jsxs("div",{className:"wf-relic-caption",children:[x.jsx("span",{className:"wf-relic-caption-dot"}),x.jsx("span",{children:"旧物资料库"}),x.jsx("b",{children:"新功能流动中"})]}),x.jsx("div",{className:"wf-relic-track wf-relic-track-a",children:[...ns,...ns].map((P,V)=>x.jsxs("div",{className:`wf-relic-item tone-${P.tone}`,style:{"--item-tilt":`${V%2?2:-2}deg`},children:[x.jsx("img",{src:P.image,alt:""}),x.jsxs("span",{className:"wf-relic-item-copy",children:[x.jsx("strong",{children:P.name}),x.jsxs("small",{children:[x.jsx("i",{children:"＋"}),P.upgrade]})]})]},`a-${P.name}-${V}`))}),x.jsx("div",{className:"wf-relic-track wf-relic-track-b",children:[...ns.slice(3),...ns.slice(0,3),...ns.slice(3),...ns.slice(0,3)].map((P,V)=>x.jsxs("div",{className:`wf-relic-item tone-${P.tone}`,style:{"--item-tilt":`${V%2?-2:2}deg`},children:[x.jsx("img",{src:P.image,alt:""}),x.jsxs("span",{className:"wf-relic-item-copy",children:[x.jsx("strong",{children:P.name}),x.jsxs("small",{children:[x.jsx("i",{children:"＋"}),P.upgrade]})]})]},`b-${P.name}-${V}`))}),x.jsx("div",{className:"wf-relic-scanline"})]}),x.jsx("span",{className:"wf-orb o1","aria-hidden":"true"}),x.jsx("span",{className:"wf-orb o2","aria-hidden":"true"}),x.jsx("span",{className:"wf-orb o3","aria-hidden":"true"}),x.jsxs("main",{className:"wf-body",children:[x.jsxs("section",{className:"wf-hero",children:[x.jsxs("div",{className:"wf-dust","aria-hidden":"true",children:[x.jsx("i",{}),x.jsx("i",{}),x.jsx("i",{}),x.jsx("i",{}),x.jsx("i",{}),x.jsx("i",{})]}),x.jsx("span",{className:"wf-eyebrow",children:"搭配工作间 · 温柔创造"}),x.jsxs("h1",{className:"wf-line",children:["选一件旧物，加一点心意，",x.jsx("br",{}),"组合出",x.jsx("em",{className:"wf-hl rose",children:"新的可能"}),"。"]}),x.jsxs("p",{className:"wf-sub",children:["从奇物库挑选日常物品、功能部件或 AI 模组，写下你期待的样子——",x.jsx("br",{className:"wf-br"}),"我们帮你把念头，变成看得见的产品方案。"]}),x.jsxs("div",{className:"wf-memory-wall","aria-label":"温馨回忆留言墙",children:[x.jsxs("aside",{className:"wf-memory-note note-a",children:[x.jsx("span",{className:"wf-note-pin","aria-hidden":"true"}),x.jsxs("div",{className:"wf-note-meta",children:[x.jsx("span",{children:"旧物留言 · 01"}),x.jsx("time",{dateTime:"1987",children:"1987 → 今天"})]}),x.jsx("p",{children:"“这只老电话，替我接住了很多没说出口的想念。”"}),x.jsx("div",{className:"wf-note-sign",children:"— 写给还在等的人"}),x.jsx("span",{className:"wf-note-stamp",children:"MEMORY / KEPT"})]}),x.jsxs("aside",{className:"wf-memory-note note-b",children:[x.jsx("span",{className:"wf-note-pin","aria-hidden":"true"}),x.jsxs("div",{className:"wf-note-meta",children:[x.jsx("span",{children:"旧物留言 · 02"}),x.jsx("time",{dateTime:"1998",children:"1998 → 今天"})]}),x.jsx("p",{children:"“那把梳子还在抽屉里，等下一次有人轻轻拿起。”"}),x.jsx("div",{className:"wf-note-sign",children:"— 写给爱梳头发的你"}),x.jsx("span",{className:"wf-note-stamp",children:"HELD / CLOSE"})]}),x.jsxs("aside",{className:"wf-memory-note note-c",children:[x.jsx("span",{className:"wf-note-pin","aria-hidden":"true"}),x.jsxs("div",{className:"wf-note-meta",children:[x.jsx("span",{children:"旧物留言 · 03"}),x.jsx("time",{dateTime:"2001",children:"2001 → 今天"})]}),x.jsx("p",{children:"“灯亮起来的时候，家就有了回声。”"}),x.jsx("div",{className:"wf-note-sign",children:"— 写给每个晚归的人"}),x.jsx("span",{className:"wf-note-stamp",children:"LIGHT / HOME"})]})]}),x.jsxs("button",{type:"button",className:"wf-workbench-jump",onClick:()=>{var P;return(P=document.getElementById("workbench"))==null?void 0:P.scrollIntoView({behavior:"smooth",block:"start"})},children:["进入搭配工作间 ",x.jsx("span",{"aria-hidden":"true",children:"↓"})]})]}),x.jsxs("div",{className:"wf-workbench-head",id:"workbench",children:[x.jsxs("div",{children:[x.jsx("span",{className:"wf-workbench-kicker",children:"MIX LAB · 搭配工作间"}),x.jsx("h2",{children:"把旧物和新功能，放在一起试试看"})]}),x.jsx("p",{children:"从下方选择日常物品、功能部件或 AI 模组，开始你的组合。"})]}),A&&x.jsx("div",{className:"wf-workbench-notice",role:"status","aria-live":"polite",children:A}),x.jsx("div",{className:"category-tabs",role:"tablist","aria-label":"选择模组类别",children:[["daily_items","日常物品",n.length],["hardware_parts","功能部件",r.length],["ai_modules","AI 模组",a.length]].map(([P,V,ne])=>x.jsxs("button",{type:"button",role:"tab","aria-selected":m===P,className:m===P?"category-tab active":"category-tab",onClick:()=>u(P),children:[V,x.jsx("span",{children:ne})]},P))}),m==="daily_items"&&x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"wf-daily-head",children:[x.jsxs("div",{children:[x.jsx("span",{className:"wf-daily-kicker",children:"01 / DAILY OBJECTS"}),x.jsx("h3",{children:"日常物品搭配工作间"}),x.jsxs("span",{className:"wf-daily-count",children:["共 ",t.daily_items.length," 件旧物"]})]}),x.jsx("p",{children:"先挑一件有故事的旧物，再给它加上一项新能力。"})]}),x.jsx("div",{className:"grid3 cat-daily",children:t.daily_items.map(P=>x.jsxs("div",{className:n.includes(P.id)?"card selected":"card",style:{cursor:"pointer"},onClick:()=>C(n,i,P.id),children:[x.jsx("div",{style:{fontWeight:700},children:P.name}),x.jsx("div",{style:{color:"var(--muted)",fontSize:12,margin:"4px 0 8px"},children:P.desc}),x.jsx("div",{children:P.tags.map(V=>x.jsx("span",{className:"chip",style:{pointerEvents:"none",marginRight:4,padding:"2px 8px",fontSize:11},children:V},V))}),x.jsxs("div",{className:"wf-item-card-footer",children:[x.jsx("div",{style:{fontSize:12,color:n.includes(P.id)?"var(--accent)":"transparent"},children:n.includes(P.id)?"✓ 已选":"·"}),Am[P.id]&&x.jsxs(Ke,{to:`/combine/${Am[P.id]}`,className:"wf-item-workbench-btn",onClick:V=>V.stopPropagation(),children:["搭配工作间 ",x.jsx("span",{"aria-hidden":"true",children:"→"})]})]})]},P.id))})]}),m==="hardware_parts"&&x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"section-label",children:["② 功能部件 · 共 ",t.hardware_parts.length," 件"]}),x.jsx("div",{className:"grid3 cat-hardware",children:t.hardware_parts.map(P=>x.jsxs("div",{className:r.includes(P.id)?"card selected":"card",style:{cursor:"pointer"},onClick:()=>C(r,s,P.id),children:[x.jsx("div",{style:{fontWeight:700},children:P.name}),x.jsx("div",{style:{color:"var(--muted)",fontSize:12,margin:"4px 0 8px"},children:P.desc}),x.jsxs("div",{className:"wf-item-card-footer",children:[x.jsx("div",{style:{fontSize:12,color:r.includes(P.id)?"var(--accent)":"transparent"},children:r.includes(P.id)?"✓ 已选":"·"}),x.jsxs("button",{type:"button",className:`wf-item-workbench-btn${r.includes(P.id)?" is-selected":""}`,"aria-pressed":r.includes(P.id),onClick:V=>{V.stopPropagation(),E("hardware_parts",s,P)},children:[r.includes(P.id)?"已加入工作间":"搭配工作间"," ",x.jsx("span",{"aria-hidden":"true",children:r.includes(P.id)?"✓":"→"})]})]})]},P.id))})]}),m==="ai_modules"&&x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"section-label",children:["③ AI 模组 · 共 ",t.ai_modules.length," 件"]}),x.jsx("div",{className:"grid3 cat-ai",children:t.ai_modules.map(P=>x.jsxs("div",{className:a.includes(P.id)?"card selected":"card",style:{cursor:"pointer"},onClick:()=>C(a,o,P.id),children:[x.jsx("div",{style:{fontWeight:700},children:P.name}),x.jsx("div",{style:{color:"var(--muted)",fontSize:12,margin:"4px 0 8px"},children:P.desc}),x.jsxs("div",{className:"wf-item-card-footer",children:[x.jsx("div",{style:{fontSize:12,color:a.includes(P.id)?"var(--accent)":"transparent"},children:a.includes(P.id)?"✓ 已选":"·"}),x.jsxs("button",{type:"button",className:`wf-item-workbench-btn${a.includes(P.id)?" is-selected":""}`,"aria-pressed":a.includes(P.id),onClick:V=>{V.stopPropagation(),E("ai_modules",o,P)},children:[a.includes(P.id)?"已加入工作间":"搭配工作间"," ",x.jsx("span",{"aria-hidden":"true",children:a.includes(P.id)?"✓":"→"})]})]})]},P.id))})]}),x.jsx("div",{className:"section-label",children:"预期效果（可选）"}),x.jsx("textarea",{rows:3,placeholder:"例如：想给杯子加上夜光，做成夜晚会发光的记忆杯…",value:l,onChange:P=>c(P.target.value)}),x.jsxs("div",{style:{marginTop:20,display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[x.jsx("button",{className:"btn",onClick:M,disabled:d||!n.length&&!r.length&&!a.length,children:d?x.jsxs(x.Fragment,{children:[x.jsx("span",{className:"spin"})," 生成中（约 1-3 分钟）…"]}):"生成产品方案"}),x.jsxs("div",{className:"selected-summary",children:["已选：",W(n,t.daily_items).join("、")||"无物品"," · ",W(r,t.hardware_parts).join("、")||"无部件"," · ",W(a,t.ai_modules).join("、")||"无模组"]})]}),f&&x.jsxs("div",{className:"error-box",children:["出错了：",f]}),v&&x.jsxs("div",{style:{marginTop:28},children:[x.jsx("div",{className:"section-label",children:"生成结果"}),x.jsxs("div",{className:"result-grid",children:[x.jsxs("div",{children:[x.jsxs("div",{className:"card",children:[x.jsx("div",{className:"result-name",children:(K=v.result)==null?void 0:K.name}),x.jsx("div",{style:{color:"var(--muted)",fontSize:13,lineHeight:1.7},children:(I=v.result)==null?void 0:I.intro})]}),x.jsxs("div",{className:"card",style:{marginTop:12},children:[x.jsx("div",{style:{fontWeight:700,marginBottom:6},children:"核心玩法"}),x.jsx("ul",{style:{margin:0,paddingLeft:18,fontSize:13,lineHeight:1.8},children:(((X=v.result)==null?void 0:X.play)||[]).map((P,V)=>x.jsx("li",{children:P},V))}),x.jsx("div",{style:{fontWeight:700,margin:"12px 0 6px"},children:"材料清单"}),x.jsx("ul",{style:{margin:0,paddingLeft:18,fontSize:13,lineHeight:1.8},children:((($=v.result)==null?void 0:$.materials)||[]).map((P,V)=>x.jsx("li",{children:P},V))}),x.jsx("div",{style:{fontWeight:700,margin:"12px 0 6px"},children:"组装步骤"}),x.jsx("ol",{style:{margin:0,paddingLeft:18,fontSize:13,lineHeight:1.8},children:(((ae=v.result)==null?void 0:ae.steps)||[]).map((P,V)=>x.jsx("li",{children:P},V))})]})]}),x.jsxs("div",{children:[((de=v.image_urls)==null?void 0:de.length)>0?x.jsx("div",{className:"media-box",children:x.jsx("img",{src:v.image_urls[0],alt:((ke=v.result)==null?void 0:ke.name)||"生成图"})}):x.jsx("div",{className:"media-box",style:{color:"var(--muted)",fontSize:13,padding:20,textAlign:"center"},children:"效果图生成中或未返回，稍后可重试"}),x.jsxs("div",{className:"video-slot","aria-label":"视频预留位",children:[x.jsx("span",{className:"play-btn",children:"▶"}),x.jsx("span",{children:"预期视频"})]}),v.web_thread_link&&x.jsxs("div",{style:{marginTop:10,fontSize:12},children:["会话链接：",x.jsx("a",{href:v.web_thread_link,target:"_blank",rel:"noreferrer",style:{color:"var(--accent2)"},children:"在小云雀查看"})]})]})]})]}),x.jsxs("section",{className:"history-panel","aria-label":"组合记录",children:[x.jsxs("div",{className:"history-heading",children:[x.jsxs("div",{children:[x.jsx("div",{className:"section-label",children:"组合记录"}),x.jsxs("div",{className:"history-caption",children:["已保存 ",g.length," 条，当前选择会自动保存为草稿"]})]}),g.length>0&&x.jsx("button",{type:"button",className:"text-button",onClick:Y,children:"清空记录"})]}),g.length===0?x.jsx("div",{className:"history-empty",children:"生成产品方案后，组合与效果图会出现在这里。"}):x.jsx("div",{className:"history-list",children:g.map(P=>{var ne,te;const V=[...W(P.daily||[],(t==null?void 0:t.daily_items)||[]),...W(P.hardware||[],(t==null?void 0:t.hardware_parts)||[]),...W(P.ai||[],(t==null?void 0:t.ai_modules)||[])];return x.jsxs("div",{className:"history-row",children:[x.jsxs("div",{className:"history-row-main",children:[x.jsx("div",{className:"history-name",children:((te=(ne=P.result)==null?void 0:ne.result)==null?void 0:te.name)||"未命名组合"}),x.jsx("div",{className:"history-items",children:V.join(" + ")||"暂无物品"}),x.jsx("div",{className:"history-date",children:Z(P.createdAt)})]}),x.jsxs("div",{className:"history-actions",children:[x.jsx("button",{type:"button",className:"btn ghost compact",onClick:()=>z(P),children:"载入"}),x.jsx("button",{type:"button",className:"text-button danger",onClick:()=>B(P.id),children:"删除"})]})]},P.id)})})]}),x.jsxs("footer",{className:"wf-footer",children:[x.jsx("span",{className:"wf-footer-brand",children:"万物改造工坊 WonderForge"}),x.jsx("span",{className:"wf-footer-sep",children:"·"}),x.jsx("span",{className:"wf-footer-motto",children:"为每一件旧物，留住一段温柔的时光"})]})]})]})}const Pm=["加模组","改 3D 图纸","提方案","供物料"];function jM(){const[t,e]=re.useState([]),[n,i]=re.useState(""),[r,s]=re.useState(""),[a,o]=re.useState(!1),[l,c]=re.useState(null),[d,h]=re.useState(""),[f,p]=re.useState(Pm[0]),[v,y]=re.useState(null),[m,u]=re.useState(!1),[g,_]=re.useState("");re.useEffect(()=>{fetch("/api/community").then(A=>A.json()).then(e).catch(()=>_("社区数据暂时无法加载"))},[]);const S=async()=>{if(!(!n.trim()||!r.trim())){u(!0),_("");try{const A=await fetch("/api/community",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n.trim(),goal:r.trim()})}),T=await A.json();if(!A.ok)throw new Error(T.error||"发布失败");e(T),i(""),s(""),o(!1)}catch(A){_(A.message)}finally{u(!1)}}},N=async()=>{if(!(!d.trim()&&!v)){u(!0),_("");try{let A=null;if(v){const E=await fetch("/api/community/uploads",{method:"POST",headers:{"Content-Type":"application/octet-stream","X-File-Name":encodeURIComponent(v.name)},body:v});if(A=await E.json(),!E.ok)throw new Error(A.error||"图纸上传失败")}const T=await fetch(`/api/community/${l}/help`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:f,text:d.trim(),attachment:A})}),C=await T.json();if(!T.ok)throw new Error(C.error||"助力提交失败");e(C),c(null),h(""),y(null)}catch(A){_(A.message)}finally{u(!1)}}};return x.jsxs("div",{className:"wf-community-page",children:[x.jsxs("header",{className:"topbar",children:[x.jsxs("div",{className:"brand",children:[x.jsx(Ke,{to:"/",children:"万物改造工坊"})," ",x.jsx("span",{className:"glow",children:"WonderForge"})]}),x.jsxs("nav",{className:"nav",children:[x.jsx(Ke,{to:"/combine",children:"组合工作台"}),x.jsx(Ke,{to:"/demos",children:"3D 演示"}),x.jsx(Ke,{to:"/community",className:"active",children:"社区"})]})]}),x.jsx("span",{className:"wf-orb o1","aria-hidden":"true"}),x.jsx("span",{className:"wf-orb o2","aria-hidden":"true"}),x.jsx("span",{className:"wf-orb o3","aria-hidden":"true"}),x.jsxs("main",{className:"wf-body",children:[x.jsxs("section",{className:"wf-hero",children:[x.jsxs("div",{className:"wf-dust","aria-hidden":"true",children:[x.jsx("i",{}),x.jsx("i",{}),x.jsx("i",{}),x.jsx("i",{}),x.jsx("i",{}),x.jsx("i",{})]}),x.jsx("span",{className:"wf-eyebrow",children:"社区助力 · 一起温柔"}),x.jsxs("h1",{className:"wf-line",children:["你发起的构想，",x.jsx("br",{}),"由大家一起",x.jsx("em",{className:"wf-hl mint",children:"温柔点亮"}),"。"]}),x.jsxs("p",{className:"wf-sub",children:["发布你的产品构想与预期目标，任何人都可以加模组、改 3D 图纸、提方案、供物料——",x.jsx("br",{className:"wf-br"}),"把一个闪念，慢慢抱进现实。"]}),x.jsx("div",{style:{marginTop:30},children:x.jsx("button",{className:"btn",onClick:()=>o(!a),children:a?"收起构想":"+ 发起构想"})})]}),g&&x.jsx("div",{className:"error-box",role:"alert",children:g}),a&&x.jsxs("div",{className:"card",style:{marginTop:14},children:[x.jsx("div",{className:"section-label",children:"构想标题"}),x.jsx("input",{type:"text",value:n,onChange:A=>i(A.target.value),placeholder:"例如：夜光记忆杯"}),x.jsx("div",{className:"section-label",children:"预期目标"}),x.jsx("textarea",{rows:3,value:r,onChange:A=>s(A.target.value),placeholder:"描述你想做出什么样的产品、达成什么效果…"}),x.jsx("div",{style:{marginTop:14},children:x.jsx("button",{className:"btn",onClick:S,disabled:m||!n.trim()||!r.trim(),children:m?"提交中…":"发布到社区"})})]}),x.jsxs("div",{className:"grid3",style:{gridTemplateColumns:"1fr"},children:[t.length===0&&!g&&x.jsxs("div",{className:"empty-state",children:[x.jsx("div",{className:"empty-state-title",children:"还没有人发起构想"}),x.jsx("div",{className:"empty-state-sub",children:"点上面的「发起构想」，让第一个闪念在这里发芽——大家会来帮你一起点亮它。"})]}),t.map(A=>x.jsxs("div",{className:"card project-card",style:{marginTop:14},children:[x.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10},children:[x.jsx("div",{className:"project-title",children:A.title}),x.jsx("span",{className:"chip status-chip",style:{pointerEvents:"none",fontSize:12,whiteSpace:"nowrap"},children:A.status})]}),x.jsxs("div",{style:{color:"var(--muted)",fontSize:12,margin:"6px 0"},children:["发起人 ",A.creator," · 组合：",A.combos.join(" + ")||"未填写"]}),x.jsx("div",{className:"project-goal",style:{margin:"6px 0 12px"},children:A.goal}),x.jsxs("div",{style:{fontWeight:700,fontSize:13,marginBottom:8},children:["助力记录（",A.contributions.length,"）"]}),A.contributions.length===0&&x.jsx("div",{style:{color:"var(--muted)",fontSize:12},children:"还没有人助力，来当第一个吧"}),A.contributions.map((T,C)=>x.jsxs("div",{className:"contrib-row",children:[x.jsx("span",{className:"chip","data-type":T.type,style:{pointerEvents:"none",fontSize:11,padding:"2px 8px",whiteSpace:"nowrap"},children:T.type}),x.jsxs("span",{style:{color:"var(--text)"},children:[T.who,"：",T.text]}),T.attachment&&x.jsx("a",{href:T.attachment.url,download:T.attachment.name,style:{color:"var(--accent2)"},children:T.attachment.name})]},C)),x.jsx("div",{style:{marginTop:12},children:x.jsx("button",{className:"btn ghost",onClick:()=>{c(l===A.id?null:A.id),y(null)},children:"我来助力"})}),l===A.id&&x.jsxs("div",{style:{marginTop:12,display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[x.jsx("select",{value:f,onChange:T=>p(T.target.value),children:Pm.map(T=>x.jsx("option",{value:T,children:T},T))}),x.jsx("input",{type:"text",style:{flex:1,minWidth:220},value:d,onChange:T=>h(T.target.value),placeholder:f==="改 3D 图纸"?"上传/描述你的图纸修改…":"写下你的助力内容…"}),f==="改 3D 图纸"&&x.jsx("input",{type:"file",accept:".stl,.step,.stp,.3mf,.obj",onChange:T=>{var C;return y(((C=T.target.files)==null?void 0:C[0])||null)}}),x.jsx("button",{className:"btn",onClick:N,disabled:m||!d.trim()&&!v,children:m?"提交中…":"提交助力"})]})]},A.id))]}),x.jsxs("footer",{className:"wf-footer",children:[x.jsx("span",{className:"wf-footer-brand",children:"万物改造工坊 WonderForge"}),x.jsx("span",{className:"wf-footer-sep",children:"·"}),x.jsx("span",{className:"wf-footer-motto",children:"为每一件旧物，留住一段温柔的时光"})]})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mf="170",Fs={ROTATE:0,DOLLY:1,PAN:2},Rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},GM=0,Nm=1,WM=2,f_=1,p_=2,yi=3,gr=0,gn=1,Ei=2,Ni=0,Os=1,Ud=2,Lm=3,Dm=4,XM=5,Nr=100,YM=101,$M=102,qM=103,KM=104,ZM=200,JM=201,QM=202,ew=203,kd=204,Fd=205,tw=206,nw=207,iw=208,rw=209,sw=210,aw=211,ow=212,lw=213,cw=214,Od=0,zd=1,Bd=2,qs=3,Hd=4,Vd=5,jd=6,Gd=7,m_=0,uw=1,dw=2,fr=0,g_=1,v_=2,__=3,wf=4,hw=5,x_=6,y_=7,S_=300,Ks=301,Zs=302,Wd=303,Xd=304,Mc=306,co=1e3,kr=1001,Yd=1002,Zn=1003,fw=1004,jo=1005,ai=1006,su=1007,Fr=1008,Oi=1009,M_=1010,w_=1011,uo=1012,Ef=1013,Xr=1014,Ai=1015,Li=1016,Tf=1017,bf=1018,Js=1020,E_=35902,T_=1021,b_=1022,$n=1023,A_=1024,C_=1025,zs=1026,Qs=1027,R_=1028,Af=1029,P_=1030,Cf=1031,Rf=1033,El=33776,Tl=33777,bl=33778,Al=33779,$d=35840,qd=35841,Kd=35842,Zd=35843,Jd=36196,Qd=37492,eh=37496,th=37808,nh=37809,ih=37810,rh=37811,sh=37812,ah=37813,oh=37814,lh=37815,ch=37816,uh=37817,dh=37818,hh=37819,fh=37820,ph=37821,Cl=36492,mh=36494,gh=36495,N_=36283,vh=36284,_h=36285,xh=36286,pw=3200,mw=3201,L_=0,gw=1,Qi="",Mn="srgb",sa="srgb-linear",wc="linear",it="srgb",is=7680,Im=519,vw=512,_w=513,xw=514,D_=515,yw=516,Sw=517,Mw=518,ww=519,Um=35044,km="300 es",Ci=2e3,ic=2001;class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rl=Math.PI/180,yh=180/Math.PI;function So(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function zt(t,e,n){return Math.max(e,Math.min(n,t))}function Ew(t,e){return(t%e+e)%e}function au(t,e,n){return(1-n)*t+n*e}function ya(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Tw={DEG2RAD:Rl};class oe{constructor(e=0,n=0){oe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],v=i[8],y=r[0],m=r[3],u=r[6],g=r[1],_=r[4],S=r[7],N=r[2],A=r[5],T=r[8];return s[0]=a*y+o*g+l*N,s[3]=a*m+o*_+l*A,s[6]=a*u+o*S+l*T,s[1]=c*y+d*g+h*N,s[4]=c*m+d*_+h*A,s[7]=c*u+d*S+h*T,s[2]=f*y+p*g+v*N,s[5]=f*m+p*_+v*A,s[8]=f*u+p*S+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*s,p=c*s-a*l,v=n*h+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=h*y,e[1]=(r*c-d*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(ou.makeScale(e,n)),this}rotate(e){return this.premultiply(ou.makeRotation(-e)),this}translate(e,n){return this.premultiply(ou.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ou=new He;function I_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ho(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function bw(){const t=ho("canvas");return t.style.display="block",t}const Fm={};function Na(t){t in Fm||(Fm[t]=!0,console.warn(t))}function Aw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Cw(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rw(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:sa,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===it&&(t.r=Di(t.r),t.g=Di(t.g),t.b=Di(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===it&&(t.r=Bs(t.r),t.g=Bs(t.g),t.b=Bs(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Qi?wc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Di(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Om=[.64,.33,.3,.6,.15,.06],zm=[.2126,.7152,.0722],Bm=[.3127,.329],Hm=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vm=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[sa]:{primaries:Om,whitePoint:Bm,transfer:wc,toXYZ:Hm,fromXYZ:Vm,luminanceCoefficients:zm,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:Om,whitePoint:Bm,transfer:it,toXYZ:Hm,fromXYZ:Vm,luminanceCoefficients:zm,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}});let rs;class Pw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rs===void 0&&(rs=ho("canvas")),rs.width=e.width,rs.height=e.height;const i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ho("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Di(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Di(n[i]/255)*255):n[i]=Di(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nw=0;class U_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nw++}),this.uuid=So(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(lu(r[a].image)):s.push(lu(r[a]))}else s=lu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Pw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lw=0;class sn extends Qr{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=kr,r=kr,s=ai,a=Fr,o=$n,l=Oi,c=sn.DEFAULT_ANISOTROPY,d=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=So(),this.name="",this.source=new U_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case co:e.x=e.x-Math.floor(e.x);break;case kr:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case co:e.y=e.y-Math.floor(e.y);break;case kr:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=S_;sn.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,n=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],v=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(p+1)/2,N=(u+1)/2,A=(d+f)/4,T=(h+y)/4,C=(v+m)/4;return _>S&&_>N?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=T/i):S>N?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=C/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=T/s,r=C/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(h-y)/g,this.z=(f-d)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dw extends Qr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new at(0,0,e,n),this.scissorTest=!1,this.viewport=new at(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new U_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Dw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class k_ extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iw extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[a+0],p=s[a+1],v=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(h!==y||l!==f||c!==p||d!==v){let m=1-o;const u=l*f+c*p+d*v+h*y,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const N=Math.sqrt(_),A=Math.atan2(N,u*g);m=Math.sin(m*A)/N,o=Math.sin(o*A)/N}const S=o*g;if(l=l*m+f*S,c=c*m+p*S,d=d*m+v*S,h=h*m+y*S,m===1-o){const N=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=N,c*=N,d*=N,h*=N}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+d*h+l*p-c*f,e[n+1]=l*v+d*f+c*h-o*p,e[n+2]=c*v+d*p+o*f-l*h,e[n+3]=d*v-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*d*h+c*p*v,this._y=c*p*h-f*d*v,this._z=c*d*v+f*p*h,this._w=c*d*h-f*p*v;break;case"YXZ":this._x=f*d*h+c*p*v,this._y=c*p*h-f*d*v,this._z=c*d*v-f*p*h,this._w=c*d*h+f*p*v;break;case"ZXY":this._x=f*d*h-c*p*v,this._y=c*p*h+f*d*v,this._z=c*d*v+f*p*h,this._w=c*d*h-f*p*v;break;case"ZYX":this._x=f*d*h-c*p*v,this._y=c*p*h+f*d*v,this._z=c*d*v-f*p*h,this._w=c*d*h+f*p*v;break;case"YZX":this._x=f*d*h+c*p*v,this._y=c*p*h+f*d*v,this._z=c*d*v-f*p*h,this._w=c*d*h-f*p*v;break;case"XZY":this._x=f*d*h-c*p*v,this._y=c*p*h-f*d*v,this._z=c*d*v+f*p*h,this._w=c*d*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cu.copy(this).projectOnVector(e),this.sub(cu)}reflect(e){return this.sub(cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cu=new D,jm=new Yr;class Mo{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Go.copy(i.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),Wo.subVectors(this.max,Sa),ss.subVectors(e.a,Sa),as.subVectors(e.b,Sa),os.subVectors(e.c,Sa),ji.subVectors(as,ss),Gi.subVectors(os,as),Mr.subVectors(ss,os);let n=[0,-ji.z,ji.y,0,-Gi.z,Gi.y,0,-Mr.z,Mr.y,ji.z,0,-ji.x,Gi.z,0,-Gi.x,Mr.z,0,-Mr.x,-ji.y,ji.x,0,-Gi.y,Gi.x,0,-Mr.y,Mr.x,0];return!uu(n,ss,as,os,Wo)||(n=[1,0,0,0,1,0,0,0,1],!uu(n,ss,as,os,Wo))?!1:(Xo.crossVectors(ji,Gi),n=[Xo.x,Xo.y,Xo.z],uu(n,ss,as,os,Wo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new D,new D,new D,new D,new D,new D,new D,new D],Hn=new D,Go=new Mo,ss=new D,as=new D,os=new D,ji=new D,Gi=new D,Mr=new D,Sa=new D,Wo=new D,Xo=new D,wr=new D;function uu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){wr.fromArray(t,s);const o=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=n.dot(wr),d=i.dot(wr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Uw=new Mo,Ma=new D,du=new D;class Pf{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Uw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const n=Ma.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(du)),this.expandByPoint(Ma.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new D,hu=new D,Yo=new D,Wi=new D,fu=new D,$o=new D,pu=new D;class Nf{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hu.copy(e).add(n).multiplyScalar(.5),Yo.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(hu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Yo),o=Wi.dot(this.direction),l=-Wi.dot(Yo),c=Wi.lengthSq(),d=Math.abs(1-a*a);let h,f,p,v;if(d>0)if(h=a*l-o,f=a*o-l,v=s*d,h>=0)if(f>=-v)if(f<=v){const y=1/d;h*=y,f*=y,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(hu).addScaledVector(Yo,f),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){fu.subVectors(n,e),$o.subVectors(i,e),pu.crossVectors(fu,$o);let a=this.direction.dot(pu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,e);const l=o*this.direction.dot($o.crossVectors(Wi,$o));if(l<0)return null;const c=o*this.direction.dot(fu.cross(Wi));if(c<0||l+c>a)return null;const d=-o*Wi.dot(pu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,s,a,o,l,c,d,h,f,p,v,y,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,f,p,v,y,m)}set(e,n,i,r,s,a,o,l,c,d,h,f,p,v,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=v,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),a=1/ls.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,p=a*h,v=o*d,y=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=f-y*c,n[9]=-o*l,n[2]=y-f*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,v=c*d,y=c*h;n[0]=f+y*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=p*o-v,n[6]=y+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,v=c*d,y=c*h;n[0]=f-y*o,n[4]=-a*h,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*d,n[9]=y-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,p=a*h,v=o*d,y=o*h;n[0]=l*d,n[4]=v*c-p,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,v=o*l,y=o*c;n[0]=l*d,n[4]=y-f*h,n[8]=v*h+p,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+v,n[10]=f-y*h}else if(e.order==="XZY"){const f=a*l,p=a*c,v=o*l,y=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+y,n[5]=a*d,n[9]=p*h-v,n[2]=v*h-p,n[6]=o*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kw,e,Fw)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Xi.crossVectors(i,xn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Xi.crossVectors(i,xn)),Xi.normalize(),qo.crossVectors(xn,Xi),r[0]=Xi.x,r[4]=qo.x,r[8]=xn.x,r[1]=Xi.y,r[5]=qo.y,r[9]=xn.y,r[2]=Xi.z,r[6]=qo.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],v=i[2],y=i[6],m=i[10],u=i[14],g=i[3],_=i[7],S=i[11],N=i[15],A=r[0],T=r[4],C=r[8],E=r[12],M=r[1],L=r[5],z=r[9],B=r[13],Y=r[2],Z=r[6],W=r[10],K=r[14],I=r[3],X=r[7],$=r[11],ae=r[15];return s[0]=a*A+o*M+l*Y+c*I,s[4]=a*T+o*L+l*Z+c*X,s[8]=a*C+o*z+l*W+c*$,s[12]=a*E+o*B+l*K+c*ae,s[1]=d*A+h*M+f*Y+p*I,s[5]=d*T+h*L+f*Z+p*X,s[9]=d*C+h*z+f*W+p*$,s[13]=d*E+h*B+f*K+p*ae,s[2]=v*A+y*M+m*Y+u*I,s[6]=v*T+y*L+m*Z+u*X,s[10]=v*C+y*z+m*W+u*$,s[14]=v*E+y*B+m*K+u*ae,s[3]=g*A+_*M+S*Y+N*I,s[7]=g*T+_*L+S*Z+N*X,s[11]=g*C+_*z+S*W+N*$,s[15]=g*E+_*B+S*K+N*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],v=e[3],y=e[7],m=e[11],u=e[15];return v*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*p-i*l*p)+y*(+n*l*p-n*c*f+s*a*f-r*a*p+r*c*d-s*l*d)+m*(+n*c*h-n*o*p-s*a*h+i*a*p+s*o*d-i*c*d)+u*(-r*o*d-n*l*h+n*o*f+r*a*h-i*a*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],v=e[12],y=e[13],m=e[14],u=e[15],g=h*m*c-y*f*c+y*l*p-o*m*p-h*l*u+o*f*u,_=v*f*c-d*m*c-v*l*p+a*m*p+d*l*u-a*f*u,S=d*y*c-v*h*c+v*o*p-a*y*p-d*o*u+a*h*u,N=v*h*l-d*y*l-v*o*f+a*y*f+d*o*m-a*h*m,A=n*g+i*_+r*S+s*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=g*T,e[1]=(y*f*s-h*m*s-y*r*p+i*m*p+h*r*u-i*f*u)*T,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*u+i*l*u)*T,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*p-i*l*p)*T,e[4]=_*T,e[5]=(d*m*s-v*f*s+v*r*p-n*m*p-d*r*u+n*f*u)*T,e[6]=(v*l*s-a*m*s-v*r*c+n*m*c+a*r*u-n*l*u)*T,e[7]=(a*f*s-d*l*s+d*r*c-n*f*c-a*r*p+n*l*p)*T,e[8]=S*T,e[9]=(v*h*s-d*y*s-v*i*p+n*y*p+d*i*u-n*h*u)*T,e[10]=(a*y*s-v*o*s+v*i*c-n*y*c-a*i*u+n*o*u)*T,e[11]=(d*o*s-a*h*s-d*i*c+n*h*c+a*i*p-n*o*p)*T,e[12]=N*T,e[13]=(d*y*r-v*h*r+v*i*f-n*y*f-d*i*m+n*h*m)*T,e[14]=(v*o*r-a*y*r-v*i*l+n*y*l+a*i*m-n*o*m)*T,e[15]=(a*h*r-d*o*r+d*i*l-n*h*l-a*i*f+n*o*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,f=s*c,p=s*d,v=s*h,y=a*d,m=a*h,u=o*h,g=l*c,_=l*d,S=l*h,N=i.x,A=i.y,T=i.z;return r[0]=(1-(y+u))*N,r[1]=(p+S)*N,r[2]=(v-_)*N,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+u))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(v+_)*T,r[9]=(m-g)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ls.set(r[0],r[1],r[2]).length();const a=ls.set(r[4],r[5],r[6]).length(),o=ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const c=1/s,d=1/a,h=1/o;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=d,Vn.elements[5]*=d,Vn.elements[6]*=d,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,n.setFromRotationMatrix(Vn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Ci){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,v;if(o===Ci)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ic)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ci){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(a-s),f=(n+e)*c,p=(i+r)*d;let v,y;if(o===Ci)v=(a+s)*h,y=-2*h;else if(o===ic)v=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ls=new D,Vn=new _t,kw=new D(0,0,0),Fw=new D(1,1,1),Xi=new D,qo=new D,xn=new D,Gm=new _t,Wm=new Yr;class ui{constructor(e=0,n=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wm.setFromEuler(this),this.setFromQuaternion(Wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Lf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ow=0;const Xm=new D,cs=new Yr,gi=new _t,Ko=new D,wa=new D,zw=new D,Bw=new Yr,Ym=new D(1,0,0),$m=new D(0,1,0),qm=new D(0,0,1),Km={type:"added"},Hw={type:"removed"},us={type:"childadded",child:null},mu={type:"childremoved",child:null};class Gt extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ow++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new D,n=new ui,i=new Yr,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new He}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Ym,e)}rotateY(e){return this.rotateOnAxis($m,e)}rotateZ(e){return this.rotateOnAxis(qm,e)}translateOnAxis(e,n){return Xm.copy(e).applyQuaternion(this.quaternion),this.position.add(Xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ym,e)}translateY(e){return this.translateOnAxis($m,e)}translateZ(e){return this.translateOnAxis(qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ko.copy(e):Ko.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(wa,Ko,this.up):gi.lookAt(Ko,wa,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(gi),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Km),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Hw),mu.child=e,this.dispatchEvent(mu),mu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Km),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,zw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,Bw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new D(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new D,vi=new D,gu=new D,_i=new D,ds=new D,hs=new D,Zm=new D,vu=new D,_u=new D,xu=new D,yu=new at,Su=new at,Mu=new at;class Yn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),vi.subVectors(i,n),gu.subVectors(e,n);const a=jn.dot(jn),o=jn.dot(vi),l=jn.dot(gu),c=vi.dot(vi),d=vi.dot(gu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*d)*f,v=(a*d-o*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return yu.setScalar(0),Su.setScalar(0),Mu.setScalar(0),yu.fromBufferAttribute(e,n),Su.fromBufferAttribute(e,i),Mu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(yu,s.x),a.addScaledVector(Su,s.y),a.addScaledVector(Mu,s.z),a}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),vi.subVectors(e,n),jn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),jn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ds.subVectors(r,i),hs.subVectors(s,i),vu.subVectors(e,i);const l=ds.dot(vu),c=hs.dot(vu);if(l<=0&&c<=0)return n.copy(i);_u.subVectors(e,r);const d=ds.dot(_u),h=hs.dot(_u);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(ds,a);xu.subVectors(e,s);const p=ds.dot(xu),v=hs.dot(xu);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(hs,o);const m=d*v-p*h;if(m<=0&&h-d>=0&&p-v>=0)return Zm.subVectors(s,r),o=(h-d)/(h-d+(p-v)),n.copy(r).addScaledVector(Zm,o);const u=1/(m+y+f);return a=y*u,o=f*u,n.copy(i).addScaledVector(ds,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Oe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=Ew(e,1),n=zt(n,0,1),i=zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=wu(a,s,e+1/3),this.g=wu(a,s,e),this.b=wu(a,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mn){const i=F_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return qe.fromWorkingColorSpace(Kt.copy(this),e),Math.round(zt(Kt.r*255,0,255))*65536+Math.round(zt(Kt.g*255,0,255))*256+Math.round(zt(Kt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=qe.workingColorSpace){return qe.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Mn){qe.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==Mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(Zo);const i=au(Yi.h,Zo.h,n),r=au(Yi.s,Zo.s,n),s=au(Yi.l,Zo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Oe;Oe.NAMES=F_;let Vw=0;class wo extends Qr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=So(),this.name="",this.blending=Os,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Fd,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kd&&(i.blendSrc=this.blendSrc),this.blendDst!==Fd&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Im&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Df extends wo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=m_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new D,Jo=new oe;class ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Um,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jo.fromBufferAttribute(this,n),Jo.applyMatrix3(e),this.setXY(n,Jo.x,Jo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ya(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ya(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ya(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ya(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ya(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Um&&(e.usage=this.usage),e}}class O_ extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class z_ extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class lt extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let jw=0;const Pn=new _t,Eu=new Gt,fs=new D,yn=new Mo,Ea=new Mo,kt=new D;class vn extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jw++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I_(e)?z_:O_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Eu.lookAt(e),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ea.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(yn.min,Ea.min),yn.expandByPoint(kt),kt.addVectors(yn.max,Ea.max),yn.expandByPoint(kt)):(yn.expandByPoint(Ea.min),yn.expandByPoint(Ea.max))}yn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)kt.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(e,c),kt.add(fs)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new D,l[C]=new D;const c=new D,d=new D,h=new D,f=new oe,p=new oe,v=new oe,y=new D,m=new D;function u(C,E,M){c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,M),d.sub(c),h.sub(c),p.sub(f),v.sub(f);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(y.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(L),o[C].add(y),o[E].add(y),o[M].add(y),l[C].add(m),l[E].add(m),l[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let C=0,E=g.length;C<E;++C){const M=g[C],L=M.start,z=M.count;for(let B=L,Y=L+z;B<Y;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new D,S=new D,N=new D,A=new D;function T(C){N.fromBufferAttribute(r,C),A.copy(N);const E=o[C];_.copy(E),_.sub(N.multiplyScalar(N.dot(E))).normalize(),S.crossVectors(A,E);const L=S.dot(l[C])<0?-1:1;a.setXYZW(C,_.x,_.y,_.z,L)}for(let C=0,E=g.length;C<E;++C){const M=g[C],L=M.start,z=M.count;for(let B=L,Y=L+z;B<Y;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,d=new D,h=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let u=0;u<d;u++)f[v++]=c[p++]}return new ci(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jm=new _t,Er=new Nf,Qo=new Pf,Qm=new D,el=new D,tl=new D,nl=new D,Tu=new D,il=new D,eg=new D,rl=new D;class we extends Gt{constructor(e=new vn,n=new Df){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){il.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Tu.fromBufferAttribute(h,e),a?il.addScaledVector(Tu,d):il.addScaledVector(Tu.sub(n),d))}n.add(il)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(Qo.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Qo,Qm)===null||Er.origin.distanceToSquared(Qm)>(e.far-e.near)**2))&&(Jm.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Jm),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){const m=f[v],u=a[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,N=_;S<N;S+=3){const A=o.getX(S),T=o.getX(S+1),C=o.getX(S+2);r=sl(this,u,e,i,c,d,h,A,T,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=v,u=y;m<u;m+=3){const g=o.getX(m),_=o.getX(m+1),S=o.getX(m+2);r=sl(this,a,e,i,c,d,h,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){const m=f[v],u=a[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,N=_;S<N;S+=3){const A=S,T=S+1,C=S+2;r=sl(this,u,e,i,c,d,h,A,T,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,u=y;m<u;m+=3){const g=m,_=m+1,S=m+2;r=sl(this,a,e,i,c,d,h,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Gw(t,e,n,i,r,s,a,o){let l;if(e.side===gn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===gr,o),l===null)return null;rl.copy(o),rl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(rl);return c<n.near||c>n.far?null:{distance:c,point:rl.clone(),object:t}}function sl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,el),t.getVertexPosition(l,tl),t.getVertexPosition(c,nl);const d=Gw(t,e,n,i,el,tl,nl,eg);if(d){const h=new D;Yn.getBarycoord(eg,el,tl,nl,h),r&&(d.uv=Yn.getInterpolatedAttribute(r,o,l,c,h,new oe)),s&&(d.uv1=Yn.getInterpolatedAttribute(s,o,l,c,h,new oe)),a&&(d.normal=Yn.getInterpolatedAttribute(a,o,l,c,h,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};Yn.getNormal(el,tl,nl,f.normal),d.face=f,d.barycoord=h}return d}class Ot extends vn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(h,2));function v(y,m,u,g,_,S,N,A,T,C,E){const M=S/T,L=N/C,z=S/2,B=N/2,Y=A/2,Z=T+1,W=C+1;let K=0,I=0;const X=new D;for(let $=0;$<W;$++){const ae=$*L-B;for(let de=0;de<Z;de++){const ke=de*M-z;X[y]=ke*g,X[m]=ae*_,X[u]=Y,c.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[u]=A>0?1:-1,d.push(X.x,X.y,X.z),h.push(de/T),h.push(1-$/C),K+=1}}for(let $=0;$<C;$++)for(let ae=0;ae<T;ae++){const de=f+ae+Z*$,ke=f+ae+Z*($+1),P=f+(ae+1)+Z*($+1),V=f+(ae+1)+Z*$;l.push(de,ke,V),l.push(ke,P,V),I+=6}o.addGroup(p,I,E),p+=I,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ot(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=ea(t[n]);for(const r in i)e[r]=i[r]}return e}function Ww(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function B_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const fo={clone:ea,merge:Qt};var Xw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends wo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xw,this.fragmentShader=Yw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=Ww(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class H_ extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new D,tg=new oe,ng=new oe;class wn extends H_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=yh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yh*2*Math.atan(Math.tan(Rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,n){return this.getViewBounds(e,tg,ng),n.subVectors(ng,tg)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Rl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ps=-90,ms=1;class $w extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(ps,ms,e,n);r.layers=this.layers,this.add(r);const s=new wn(ps,ms,e,n);s.layers=this.layers,this.add(s);const a=new wn(ps,ms,e,n);a.layers=this.layers,this.add(a);const o=new wn(ps,ms,e,n);o.layers=this.layers,this.add(o);const l=new wn(ps,ms,e,n);l.layers=this.layers,this.add(l);const c=new wn(ps,ms,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class V_ extends sn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ks,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qw extends Jn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new V_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ai}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ot(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Ni});s.uniforms.tEquirect.value=n;const a=new we(r,s),o=n.minFilter;return n.minFilter===Fr&&(n.minFilter=ai),new $w(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const bu=new D,Kw=new D,Zw=new He;class wi{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=bu.subVectors(i,n).cross(Kw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(bu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Zw.getNormalMatrix(e),r=this.coplanarPoint(bu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Pf,al=new D;class If{constructor(e=new wi,n=new wi,i=new wi,r=new wi,s=new wi,a=new wi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],p=r[8],v=r[9],y=r[10],m=r[11],u=r[12],g=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-u).normalize(),i[1].setComponents(l+s,f+c,m+p,S+u).normalize(),i[2].setComponents(l+a,f+d,m+v,S+g).normalize(),i[3].setComponents(l-a,f-d,m-v,S-g).normalize(),i[4].setComponents(l-o,f-h,m-y,S-_).normalize(),n===Ci)i[5].setComponents(l+o,f+h,m+y,S+_).normalize();else if(n===ic)i[5].setComponents(o,h,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(al.x=r.normal.x>0?e.max.x:e.min.x,al.y=r.normal.y>0?e.max.y:e.min.y,al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function j_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Jw(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){const v=h[f],y=h[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){const y=h[p];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class aa extends vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,f=n/l,p=[],v=[],y=[],m=[];for(let u=0;u<d;u++){const g=u*f-a;for(let _=0;_<c;_++){const S=_*h-s;v.push(S,-g,0),y.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const _=g+c*u,S=g+c*(u+1),N=g+1+c*(u+1),A=g+1+c*u;p.push(_,S,A),p.push(S,N,A)}this.setIndex(p),this.setAttribute("position",new lt(v,3)),this.setAttribute("normal",new lt(y,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eE=`#ifdef USE_ALPHAHASH
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
#endif`,tE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sE=`#ifdef USE_AOMAP
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
#endif`,aE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oE=`#ifdef USE_BATCHING
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
#endif`,lE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hE=`#ifdef USE_IRIDESCENCE
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
#endif`,fE=`#ifdef USE_BUMPMAP
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
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ME=`#define PI 3.141592653589793
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
} // validated`,wE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EE=`vec3 transformedNormal = objectNormal;
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
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RE="gl_FragColor = linearToOutputTexel( gl_FragColor );",PE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NE=`#ifdef USE_ENVMAP
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
#endif`,LE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DE=`#ifdef USE_ENVMAP
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
#endif`,IE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BE=`#ifdef USE_GRADIENTMAP
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
}`,HE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GE=`uniform bool receiveShadow;
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
#endif`,WE=`#ifdef USE_ENVMAP
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
#endif`,XE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$E=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KE=`PhysicalMaterial material;
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
#endif`,ZE=`struct PhysicalMaterial {
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
}`,JE=`
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
#endif`,QE=`#if defined( RE_IndirectDiffuse )
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
#endif`,e1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l1=`#if defined( USE_POINTS_UV )
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
#endif`,c1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`#ifdef USE_MORPHTARGETS
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
#endif`,m1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S1=`#ifdef USE_NORMALMAP
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
#endif`,M1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F1=`float getShadowMask() {
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
}`,O1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z1=`#ifdef USE_SKINNING
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
#endif`,B1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H1=`#ifdef USE_SKINNING
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
#endif`,V1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X1=`#ifdef USE_TRANSMISSION
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
#endif`,Y1=`#ifdef USE_TRANSMISSION
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q1=`uniform sampler2D t2D;
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
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`#include <common>
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
}`,sT=`#if DEPTH_PACKING == 3200
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
}`,aT=`#define DISTANCE
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
}`,oT=`#define DISTANCE
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`uniform float scale;
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
}`,dT=`uniform vec3 diffuse;
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
}`,hT=`#include <common>
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
}`,fT=`uniform vec3 diffuse;
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
}`,pT=`#define LAMBERT
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
}`,mT=`#define LAMBERT
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
}`,gT=`#define MATCAP
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
}`,vT=`#define MATCAP
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
}`,_T=`#define NORMAL
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
}`,xT=`#define NORMAL
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
}`,yT=`#define PHONG
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
}`,ST=`#define PHONG
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
}`,MT=`#define STANDARD
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
}`,wT=`#define STANDARD
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
}`,ET=`#define TOON
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
}`,TT=`#define TOON
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
}`,bT=`uniform float size;
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
}`,AT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,RT=`uniform vec3 color;
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
}`,PT=`uniform float rotation;
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
}`,NT=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Qw,alphahash_pars_fragment:eE,alphamap_fragment:tE,alphamap_pars_fragment:nE,alphatest_fragment:iE,alphatest_pars_fragment:rE,aomap_fragment:sE,aomap_pars_fragment:aE,batching_pars_vertex:oE,batching_vertex:lE,begin_vertex:cE,beginnormal_vertex:uE,bsdfs:dE,iridescence_fragment:hE,bumpmap_pars_fragment:fE,clipping_planes_fragment:pE,clipping_planes_pars_fragment:mE,clipping_planes_pars_vertex:gE,clipping_planes_vertex:vE,color_fragment:_E,color_pars_fragment:xE,color_pars_vertex:yE,color_vertex:SE,common:ME,cube_uv_reflection_fragment:wE,defaultnormal_vertex:EE,displacementmap_pars_vertex:TE,displacementmap_vertex:bE,emissivemap_fragment:AE,emissivemap_pars_fragment:CE,colorspace_fragment:RE,colorspace_pars_fragment:PE,envmap_fragment:NE,envmap_common_pars_fragment:LE,envmap_pars_fragment:DE,envmap_pars_vertex:IE,envmap_physical_pars_fragment:WE,envmap_vertex:UE,fog_vertex:kE,fog_pars_vertex:FE,fog_fragment:OE,fog_pars_fragment:zE,gradientmap_pars_fragment:BE,lightmap_pars_fragment:HE,lights_lambert_fragment:VE,lights_lambert_pars_fragment:jE,lights_pars_begin:GE,lights_toon_fragment:XE,lights_toon_pars_fragment:YE,lights_phong_fragment:$E,lights_phong_pars_fragment:qE,lights_physical_fragment:KE,lights_physical_pars_fragment:ZE,lights_fragment_begin:JE,lights_fragment_maps:QE,lights_fragment_end:e1,logdepthbuf_fragment:t1,logdepthbuf_pars_fragment:n1,logdepthbuf_pars_vertex:i1,logdepthbuf_vertex:r1,map_fragment:s1,map_pars_fragment:a1,map_particle_fragment:o1,map_particle_pars_fragment:l1,metalnessmap_fragment:c1,metalnessmap_pars_fragment:u1,morphinstance_vertex:d1,morphcolor_vertex:h1,morphnormal_vertex:f1,morphtarget_pars_vertex:p1,morphtarget_vertex:m1,normal_fragment_begin:g1,normal_fragment_maps:v1,normal_pars_fragment:_1,normal_pars_vertex:x1,normal_vertex:y1,normalmap_pars_fragment:S1,clearcoat_normal_fragment_begin:M1,clearcoat_normal_fragment_maps:w1,clearcoat_pars_fragment:E1,iridescence_pars_fragment:T1,opaque_fragment:b1,packing:A1,premultiplied_alpha_fragment:C1,project_vertex:R1,dithering_fragment:P1,dithering_pars_fragment:N1,roughnessmap_fragment:L1,roughnessmap_pars_fragment:D1,shadowmap_pars_fragment:I1,shadowmap_pars_vertex:U1,shadowmap_vertex:k1,shadowmask_pars_fragment:F1,skinbase_vertex:O1,skinning_pars_vertex:z1,skinning_vertex:B1,skinnormal_vertex:H1,specularmap_fragment:V1,specularmap_pars_fragment:j1,tonemapping_fragment:G1,tonemapping_pars_fragment:W1,transmission_fragment:X1,transmission_pars_fragment:Y1,uv_pars_fragment:$1,uv_pars_vertex:q1,uv_vertex:K1,worldpos_vertex:Z1,background_vert:J1,background_frag:Q1,backgroundCube_vert:eT,backgroundCube_frag:tT,cube_vert:nT,cube_frag:iT,depth_vert:rT,depth_frag:sT,distanceRGBA_vert:aT,distanceRGBA_frag:oT,equirect_vert:lT,equirect_frag:cT,linedashed_vert:uT,linedashed_frag:dT,meshbasic_vert:hT,meshbasic_frag:fT,meshlambert_vert:pT,meshlambert_frag:mT,meshmatcap_vert:gT,meshmatcap_frag:vT,meshnormal_vert:_T,meshnormal_frag:xT,meshphong_vert:yT,meshphong_frag:ST,meshphysical_vert:MT,meshphysical_frag:wT,meshtoon_vert:ET,meshtoon_frag:TT,points_vert:bT,points_frag:AT,shadow_vert:CT,shadow_frag:RT,sprite_vert:PT,sprite_frag:NT},ue={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ri={basic:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Qt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Qt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Qt([ue.points,ue.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Qt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Qt([ue.common,ue.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Qt([ue.sprite,ue.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Qt([ue.common,ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Qt([ue.lights,ue.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ri.physical={uniforms:Qt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ol={r:0,b:0,g:0},br=new ui,LT=new _t;function DT(t,e,n,i,r,s,a){const o=new Oe(0);let l=s===!0?0:1,c,d,h=null,f=0,p=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function y(g){let _=!1;const S=v(g);S===null?u(o,l):S&&S.isColor&&(u(S,1),_=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,_){const S=v(_);S&&(S.isCubeTexture||S.mapping===Mc)?(d===void 0&&(d=new we(new Ot(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:ea(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),br.copy(_.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(LT.makeRotationFromEuler(br)),d.material.toneMapped=qe.getTransfer(S.colorSpace)!==it,(h!==S||f!==S.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=S,f=S.version,p=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new we(new aa(2,2),new nn({name:"BackgroundMaterial",uniforms:ea(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=qe.getTransfer(S.colorSpace)!==it,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,_){g.getRGB(ol,B_(t)),i.buffers.color.setClear(ol.r,ol.g,ol.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(g,_=1){o.set(g),l=_,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(o,l)},render:y,addToRenderList:m}}function IT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,L,z,B,Y){let Z=!1;const W=h(B,z,L);s!==W&&(s=W,c(s.object)),Z=p(M,B,z,Y),Z&&v(M,B,z,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(M,L,z,B),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function h(M,L,z){const B=z.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let Z=Y[L.id];Z===void 0&&(Z={},Y[L.id]=Z);let W=Z[B];return W===void 0&&(W=f(l()),Z[B]=W),W}function f(M){const L=[],z=[],B=[];for(let Y=0;Y<n;Y++)L[Y]=0,z[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,L,z,B){const Y=s.attributes,Z=L.attributes;let W=0;const K=z.getAttributes();for(const I in K)if(K[I].location>=0){const $=Y[I];let ae=Z[I];if(ae===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),$===void 0||$.attribute!==ae||ae&&$.data!==ae.data)return!0;W++}return s.attributesNum!==W||s.index!==B}function v(M,L,z,B){const Y={},Z=L.attributes;let W=0;const K=z.getAttributes();for(const I in K)if(K[I].location>=0){let $=Z[I];$===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&($=M.instanceColor));const ae={};ae.attribute=$,$&&$.data&&(ae.data=$.data),Y[I]=ae,W++}s.attributes=Y,s.attributesNum=W,s.index=B}function y(){const M=s.newAttributes;for(let L=0,z=M.length;L<z;L++)M[L]=0}function m(M){u(M,0)}function u(M,L){const z=s.newAttributes,B=s.enabledAttributes,Y=s.attributeDivisors;z[M]=1,B[M]===0&&(t.enableVertexAttribArray(M),B[M]=1),Y[M]!==L&&(t.vertexAttribDivisor(M,L),Y[M]=L)}function g(){const M=s.newAttributes,L=s.enabledAttributes;for(let z=0,B=L.length;z<B;z++)L[z]!==M[z]&&(t.disableVertexAttribArray(z),L[z]=0)}function _(M,L,z,B,Y,Z,W){W===!0?t.vertexAttribIPointer(M,L,z,Y,Z):t.vertexAttribPointer(M,L,z,B,Y,Z)}function S(M,L,z,B){y();const Y=B.attributes,Z=z.getAttributes(),W=L.defaultAttributeValues;for(const K in Z){const I=Z[K];if(I.location>=0){let X=Y[K];if(X===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(X=M.instanceColor)),X!==void 0){const $=X.normalized,ae=X.itemSize,de=e.get(X);if(de===void 0)continue;const ke=de.buffer,P=de.type,V=de.bytesPerElement,ne=P===t.INT||P===t.UNSIGNED_INT||X.gpuType===Ef;if(X.isInterleavedBufferAttribute){const te=X.data,Ee=te.stride,he=X.offset;if(te.isInstancedInterleavedBuffer){for(let Me=0;Me<I.locationSize;Me++)u(I.location+Me,te.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Me=0;Me<I.locationSize;Me++)m(I.location+Me);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let Me=0;Me<I.locationSize;Me++)_(I.location+Me,ae/I.locationSize,P,$,Ee*V,(he+ae/I.locationSize*Me)*V,ne)}else{if(X.isInstancedBufferAttribute){for(let te=0;te<I.locationSize;te++)u(I.location+te,X.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let te=0;te<I.locationSize;te++)m(I.location+te);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let te=0;te<I.locationSize;te++)_(I.location+te,ae/I.locationSize,P,$,ae*V,ae/I.locationSize*te*V,ne)}}else if(W!==void 0){const $=W[K];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(I.location,$);break;case 3:t.vertexAttrib3fv(I.location,$);break;case 4:t.vertexAttrib4fv(I.location,$);break;default:t.vertexAttrib1fv(I.location,$)}}}}g()}function N(){C();for(const M in i){const L=i[M];for(const z in L){const B=L[z];for(const Y in B)d(B[Y].object),delete B[Y];delete L[z]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const z in L){const B=L[z];for(const Y in B)d(B[Y].object),delete B[Y];delete L[z]}delete i[M.id]}function T(M){for(const L in i){const z=i[L];if(z[M.id]===void 0)continue;const B=z[M.id];for(const Y in B)d(B[Y].object),delete B[Y];delete z[M.id]}}function C(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:E,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function UT(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let v=0;v<h;v++)p+=d[v];n.update(p,i,1)}function l(c,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],d[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let v=0;for(let y=0;y<h;y++)v+=d[y]*f[y];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==$n&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Oi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ai&&!C)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=v>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:N,maxSamples:A}}function FT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new wi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?d(null):c();else{const g=s?0:i,_=g*4;let S=u.clippingState||null;l.value=S,S=d(v,f,_,p);for(let N=0;N!==_;++N)S[N]=n[N];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,v){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const u=p+y*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,S=p;_!==y;++_,S+=4)a.copy(h[_]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function OT(t){let e=new WeakMap;function n(a,o){return o===Wd?a.mapping=Ks:o===Xd&&(a.mapping=Zs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wd||o===Xd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qw(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Uf extends H_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ps=4,ig=[.125,.215,.35,.446,.526,.582],Lr=20,Au=new Uf,rg=new Oe;let Cu=null,Ru=0,Pu=0,Nu=!1;const Pr=(1+Math.sqrt(5))/2,gs=1/Pr,sg=[new D(-Pr,gs,0),new D(Pr,gs,0),new D(-gs,0,Pr),new D(gs,0,Pr),new D(0,Pr,-gs),new D(0,Pr,gs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Cu=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cu,Ru,Pu),this._renderer.xr.enabled=Nu,e.scissorTest=!1,ll(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cu=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Li,format:$n,colorSpace:sa,depthBuffer:!1},r=og(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=og(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zT(s)),this._blurMaterial=BT(s,e,n)}return r}_compileMaterial(e){const n=new we(this._lodPlanes[0],e);this._renderer.compile(n,Au)}_sceneToCubeUV(e,n,i,r){const o=new wn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(rg),d.toneMapping=fr,d.autoClear=!1;const p=new Df({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),v=new we(new Ot,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(rg),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const _=this._cubeSize;ll(r,g*_,u>2?_:0,_,_),d.setRenderTarget(r),y&&d.render(v,o),d.render(e,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ks||e.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new we(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ll(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Au)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=sg[(r-s-1)%sg.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new we(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Lr-1),y=s/v,m=isFinite(s)?1+Math.floor(d*y):Lr;m>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const u=[];let g=0;for(let T=0;T<Lr;++T){const C=T/y,E=Math.exp(-C*C/2);u.push(E),T===0?g+=E:T<m&&(g+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const S=this._sizeLods[r],N=3*S*(r>_-Ps?r-_+Ps:0),A=4*(this._cubeSize-S);ll(n,N,A,3*S,2*S),l.setRenderTarget(n),l.render(h,Au)}}function zT(t){const e=[],n=[],i=[];let r=t;const s=t-Ps+1+ig.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Ps?l=ig[a-t+Ps-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,v=6,y=3,m=2,u=1,g=new Float32Array(y*v*p),_=new Float32Array(m*v*p),S=new Float32Array(u*v*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,C=A>2?0:-1,E=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];g.set(E,y*v*A),_.set(f,m*v*A);const M=[A,A,A,A,A,A];S.set(M,u*v*A)}const N=new vn;N.setAttribute("position",new ci(g,y)),N.setAttribute("uv",new ci(_,m)),N.setAttribute("faceIndex",new ci(S,u)),e.push(N),r>Ps&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function og(t,e,n){const i=new Jn(t,e,n);return i.texture.mapping=Mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ll(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function BT(t,e,n){const i=new Float32Array(Lr),r=new D(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kf(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function lg(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kf(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function cg(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function kf(){return`

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
	`}function HT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wd||l===Xd,d=l===Ks||l===Zs;if(c||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new ag(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new ag(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function VT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Na("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jT(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const y=f.morphAttributes[v];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const y=p[v];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,v=h.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let _=0,S=g.length;_<S;_+=3){const N=g[_+0],A=g[_+1],T=g[_+2];f.push(N,A,A,T,T,N)}}else if(v!==void 0){const g=v.array;y=v.version;for(let _=0,S=g.length/3-1;_<S;_+=3){const N=_+0,A=_+1,T=_+2;f.push(N,A,A,T,T,N)}}else return;const m=new(I_(f)?z_:O_)(f,1);m.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function GT(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*a),n.update(p,i,1)}function c(f,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,f*a,v),n.update(p,i,v))}function d(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];n.update(m,i,1)}function h(f,p,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,v);let u=0;for(let g=0;g<v;g++)u+=p[g]*y[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function WT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function XT(t,e,n){const i=new WeakMap,r=new at;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let M=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let N=o.attributes.position.count*S,A=1;N>e.maxTextureSize&&(A=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const T=new Float32Array(N*A*4*h),C=new k_(T,N,A,h);C.type=Ai,C.needsUpdate=!0;const E=S*4;for(let L=0;L<h;L++){const z=u[L],B=g[L],Y=_[L],Z=N*A*4*L;for(let W=0;W<z.count;W++){const K=W*E;v===!0&&(r.fromBufferAttribute(z,W),T[Z+K+0]=r.x,T[Z+K+1]=r.y,T[Z+K+2]=r.z,T[Z+K+3]=0),y===!0&&(r.fromBufferAttribute(B,W),T[Z+K+4]=r.x,T[Z+K+5]=r.y,T[Z+K+6]=r.z,T[Z+K+7]=0),m===!0&&(r.fromBufferAttribute(Y,W),T[Z+K+8]=r.x,T[Z+K+9]=r.y,T[Z+K+10]=r.z,T[Z+K+11]=Y.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new oe(N,A)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function YT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class G_ extends sn{constructor(e,n,i,r,s,a,o,l,c,d=zs){if(d!==zs&&d!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===zs&&(i=Xr),i===void 0&&d===Qs&&(i=Js),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Zn,this.minFilter=l!==void 0?l:Zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const W_=new sn,ug=new G_(1,1),X_=new k_,Y_=new Iw,$_=new V_,dg=[],hg=[],fg=new Float32Array(16),pg=new Float32Array(9),mg=new Float32Array(4);function oa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=dg[r];if(s===void 0&&(s=new Float32Array(r),dg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ec(t,e){let n=hg[e];n===void 0&&(n=new Int32Array(e),hg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function JT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;mg.set(i),t.uniformMatrix2fv(this.addr,!1,mg),Ut(n,i)}}function QT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;pg.set(i),t.uniformMatrix3fv(this.addr,!1,pg),Ut(n,i)}}function eb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;fg.set(i),t.uniformMatrix4fv(this.addr,!1,fg),Ut(n,i)}}function tb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function sb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function cb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ug.compareFunction=D_,s=ug):s=W_,n.setTexture2D(e||s,r)}function ub(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Y_,r)}function db(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||$_,r)}function hb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||X_,r)}function fb(t){switch(t){case 5126:return $T;case 35664:return qT;case 35665:return KT;case 35666:return ZT;case 35674:return JT;case 35675:return QT;case 35676:return eb;case 5124:case 35670:return tb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return rb;case 5125:return sb;case 36294:return ab;case 36295:return ob;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return hb}}function pb(t,e){t.uniform1fv(this.addr,e)}function mb(t,e){const n=oa(e,this.size,2);t.uniform2fv(this.addr,n)}function gb(t,e){const n=oa(e,this.size,3);t.uniform3fv(this.addr,n)}function vb(t,e){const n=oa(e,this.size,4);t.uniform4fv(this.addr,n)}function _b(t,e){const n=oa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xb(t,e){const n=oa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yb(t,e){const n=oa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Sb(t,e){t.uniform1iv(this.addr,e)}function Mb(t,e){t.uniform2iv(this.addr,e)}function wb(t,e){t.uniform3iv(this.addr,e)}function Eb(t,e){t.uniform4iv(this.addr,e)}function Tb(t,e){t.uniform1uiv(this.addr,e)}function bb(t,e){t.uniform2uiv(this.addr,e)}function Ab(t,e){t.uniform3uiv(this.addr,e)}function Cb(t,e){t.uniform4uiv(this.addr,e)}function Rb(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||W_,s[a])}function Pb(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Y_,s[a])}function Nb(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||$_,s[a])}function Lb(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||X_,s[a])}function Db(t){switch(t){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return vb;case 35674:return _b;case 35675:return xb;case 35676:return yb;case 5124:case 35670:return Sb;case 35667:case 35671:return Mb;case 35668:case 35672:return wb;case 35669:case 35673:return Eb;case 5125:return Tb;case 36294:return bb;case 36295:return Ab;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Lb}}class Ib{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fb(n.type)}}class Ub{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Db(n.type)}}class kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Lu=/(\w+)(\])?(\[|\.)?/g;function gg(t,e){t.seq.push(e),t.map[e.id]=e}function Fb(t,e,n){const i=t.name,r=i.length;for(Lu.lastIndex=0;;){const s=Lu.exec(i),a=Lu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){gg(n,c===void 0?new Ib(o,t,e):new Ub(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new kb(o),gg(n,h)),n=h}}}class Pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Fb(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function vg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ob=37297;let zb=0;function Bb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const _g=new He;function Hb(t){qe._getMatrix(_g,qe.workingColorSpace,t);const e=`mat3( ${_g.elements.map(n=>n.toFixed(4))} )`;switch(qe.getTransfer(t)){case wc:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function xg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Bb(t.getShaderSource(e),a)}else return r}function Vb(t,e){const n=Hb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function jb(t,e){let n;switch(e){case g_:n="Linear";break;case v_:n="Reinhard";break;case __:n="Cineon";break;case wf:n="ACESFilmic";break;case x_:n="AgX";break;case y_:n="Neutral";break;case hw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const cl=new D;function Gb(){qe.getLuminanceCoefficients(cl);const t=cl.x.toFixed(4),e=cl.y.toFixed(4),n=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function Xb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Yb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function La(t){return t!==""}function yg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $b=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(t){return t.replace($b,Kb)}const qb=new Map;function Kb(t,e){let n=je[e];if(n===void 0){const i=qb.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sh(n)}const Zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mg(t){return t.replace(Zb,Jb)}function Jb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===f_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===p_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function eA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function nA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case m_:e="ENVMAP_BLENDING_MULTIPLY";break;case uw:e="ENVMAP_BLENDING_MIX";break;case dw:e="ENVMAP_BLENDING_ADD";break}return e}function iA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Qb(n),c=eA(n),d=tA(n),h=nA(n),f=iA(n),p=Wb(n),v=Xb(s),y=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(La).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(La).join(`
`),u.length>0&&(u+=`
`)):(m=[wg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),u=[wg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fr?"#define TONE_MAPPING":"",n.toneMapping!==fr?je.tonemapping_pars_fragment:"",n.toneMapping!==fr?jb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Vb("linearToOutputTexel",n.outputColorSpace),Gb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(La).join(`
`)),a=Sh(a),a=yg(a,n),a=Sg(a,n),o=Sh(o),o=yg(o,n),o=Sg(o,n),a=Mg(a),o=Mg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===km?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=g+m+a,S=g+u+o,N=vg(r,r.VERTEX_SHADER,_),A=vg(r,r.FRAGMENT_SHADER,S);r.attachShader(y,N),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(L){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(N).trim(),Y=r.getShaderInfoLog(A).trim();let Z=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,N,A);else{const K=xg(r,N,"vertex"),I=xg(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+K+`
`+I)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||Y==="")&&(W=!1);W&&(L.diagnostics={runnable:Z,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(N),r.deleteShader(A),C=new Pl(r,y),E=Yb(r,y)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,Ob)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=A,this}let sA=0;class aA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new oA(e),n.set(e,i)),i}}class oA{constructor(e){this.id=sA++,this.code=e,this.usedTimes=0}}function lA(t,e,n,i,r,s,a){const o=new Lf,l=new aA,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,z,B){const Y=z.fog,Z=B.geometry,W=E.isMeshStandardMaterial?z.environment:null,K=(E.isMeshStandardMaterial?n:e).get(E.envMap||W),I=K&&K.mapping===Mc?K.image.height:null,X=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const $=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ae=$!==void 0?$.length:0;let de=0;Z.morphAttributes.position!==void 0&&(de=1),Z.morphAttributes.normal!==void 0&&(de=2),Z.morphAttributes.color!==void 0&&(de=3);let ke,P,V,ne;if(X){const nt=ri[X];ke=nt.vertexShader,P=nt.fragmentShader}else ke=E.vertexShader,P=E.fragmentShader,l.update(E),V=l.getVertexShaderID(E),ne=l.getFragmentShaderID(E);const te=t.getRenderTarget(),Ee=t.state.buffers.depth.getReversed(),he=B.isInstancedMesh===!0,Me=B.isBatchedMesh===!0,Pe=!!E.map,Ie=!!E.matcap,ht=!!K,U=!!E.aoMap,Ye=!!E.lightMap,Ge=!!E.bumpMap,We=!!E.normalMap,Ne=!!E.displacementMap,ot=!!E.emissiveMap,Le=!!E.metalnessMap,R=!!E.roughnessMap,w=E.anisotropy>0,H=E.clearcoat>0,Q=E.dispersion>0,ie=E.iridescence>0,J=E.sheen>0,Ce=E.transmission>0,pe=w&&!!E.anisotropyMap,xe=H&&!!E.clearcoatMap,Ze=H&&!!E.clearcoatNormalMap,le=H&&!!E.clearcoatRoughnessMap,ye=ie&&!!E.iridescenceMap,De=ie&&!!E.iridescenceThicknessMap,Ue=J&&!!E.sheenColorMap,Se=J&&!!E.sheenRoughnessMap,$e=!!E.specularMap,Ve=!!E.specularColorMap,ct=!!E.specularIntensityMap,k=Ce&&!!E.transmissionMap,fe=Ce&&!!E.thicknessMap,q=!!E.gradientMap,ee=!!E.alphaMap,ve=E.alphaTest>0,me=!!E.alphaHash,ze=!!E.extensions;let Tt=fr;E.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Tt=t.toneMapping);const Xt={shaderID:X,shaderType:E.type,shaderName:E.name,vertexShader:ke,fragmentShader:P,defines:E.defines,customVertexShaderID:V,customFragmentShaderID:ne,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Me,batchingColor:Me&&B._colorsTexture!==null,instancing:he,instancingColor:he&&B.instanceColor!==null,instancingMorph:he&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:sa,alphaToCoverage:!!E.alphaToCoverage,map:Pe,matcap:Ie,envMap:ht,envMapMode:ht&&K.mapping,envMapCubeUVHeight:I,aoMap:U,lightMap:Ye,bumpMap:Ge,normalMap:We,displacementMap:f&&Ne,emissiveMap:ot,normalMapObjectSpace:We&&E.normalMapType===gw,normalMapTangentSpace:We&&E.normalMapType===L_,metalnessMap:Le,roughnessMap:R,anisotropy:w,anisotropyMap:pe,clearcoat:H,clearcoatMap:xe,clearcoatNormalMap:Ze,clearcoatRoughnessMap:le,dispersion:Q,iridescence:ie,iridescenceMap:ye,iridescenceThicknessMap:De,sheen:J,sheenColorMap:Ue,sheenRoughnessMap:Se,specularMap:$e,specularColorMap:Ve,specularIntensityMap:ct,transmission:Ce,transmissionMap:k,thicknessMap:fe,gradientMap:q,opaque:E.transparent===!1&&E.blending===Os&&E.alphaToCoverage===!1,alphaMap:ee,alphaTest:ve,alphaHash:me,combine:E.combine,mapUv:Pe&&y(E.map.channel),aoMapUv:U&&y(E.aoMap.channel),lightMapUv:Ye&&y(E.lightMap.channel),bumpMapUv:Ge&&y(E.bumpMap.channel),normalMapUv:We&&y(E.normalMap.channel),displacementMapUv:Ne&&y(E.displacementMap.channel),emissiveMapUv:ot&&y(E.emissiveMap.channel),metalnessMapUv:Le&&y(E.metalnessMap.channel),roughnessMapUv:R&&y(E.roughnessMap.channel),anisotropyMapUv:pe&&y(E.anisotropyMap.channel),clearcoatMapUv:xe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Se&&y(E.sheenRoughnessMap.channel),specularMapUv:$e&&y(E.specularMap.channel),specularColorMapUv:Ve&&y(E.specularColorMap.channel),specularIntensityMapUv:ct&&y(E.specularIntensityMap.channel),transmissionMapUv:k&&y(E.transmissionMap.channel),thicknessMapUv:fe&&y(E.thicknessMap.channel),alphaMapUv:ee&&y(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(We||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(Pe||ee),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ee,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:de,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Pe&&E.map.isVideoTexture===!0&&qe.getTransfer(E.map.colorSpace)===it,decodeVideoTextureEmissive:ot&&E.emissiveMap.isVideoTexture===!0&&qe.getTransfer(E.emissiveMap.colorSpace)===it,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ei,flipSided:E.side===gn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ze&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&E.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(g(M,E),_(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function g(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function _(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const M=v[E.type];let L;if(M){const z=ri[M];L=fo.clone(z.uniforms)}else L=E.uniforms;return L}function N(E,M){let L;for(let z=0,B=d.length;z<B;z++){const Y=d[z];if(Y.cacheKey===M){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new rA(t,M,E,s),d.push(L)),L}function A(E){if(--E.usedTimes===0){const M=d.indexOf(E);d[M]=d[d.length-1],d.pop(),E.destroy()}}function T(E){l.remove(E)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:N,releaseProgram:A,releaseShaderCache:T,programs:d,dispose:C}}function cA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function uA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Eg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Tg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,p,v,y,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:y,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=y,u.group=m),e++,u}function o(h,f,p,v,y,m){const u=a(h,f,p,v,y,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,f,p,v,y,m){const u=a(h,f,p,v,y,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||uA),i.length>1&&i.sort(f||Eg),r.length>1&&r.sort(f||Eg)}function d(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function dA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Tg,t.set(i,[a])):r>=s.length?(a=new Tg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function hA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Oe};break;case"SpotLight":n={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function fA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pA=0;function mA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gA(t){const e=new hA,n=fA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new _t,a=new _t;function o(c){let d=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,v=0,y=0,m=0,u=0,g=0,_=0,S=0,N=0,A=0,T=0;c.sort(mA);for(let E=0,M=c.length;E<M;E++){const L=c[E],z=L.color,B=L.intensity,Y=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=z.r*B,h+=z.g*B,f+=z.b*B;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],B);T++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,I=n.get(L);I.shadowIntensity=K.intensity,I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=L.shadow.matrix,g++}i.directional[p]=W,p++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(z).multiplyScalar(B),W.distance=Y,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[y]=W;const K=L.shadow;if(L.map&&(i.spotLightMap[N]=L.map,N++,K.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[y]=K.matrix,L.castShadow){const I=n.get(L);I.shadowIntensity=K.intensity,I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=Z,S++}y++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(z).multiplyScalar(B),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const K=L.shadow,I=n.get(L);I.shadowIntensity=K.intensity,I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,I.shadowCameraNear=K.camera.near,I.shadowCameraFar=K.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=Z,i.pointShadowMatrix[v]=L.shadow.matrix,_++}i.point[v]=W,v++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(B),W.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[u]=W,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==p||C.pointLength!==v||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==g||C.numPointShadows!==_||C.numSpotShadows!==S||C.numSpotMaps!==N||C.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+N-A,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,C.directionalLength=p,C.pointLength=v,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=g,C.numPointShadows=_,C.numSpotShadows=S,C.numSpotMaps=N,C.numLightProbes=T,i.version=pA++)}function l(c,d){let h=0,f=0,p=0,v=0,y=0;const m=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const _=c[u];if(_.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function bg(t){const e=new gA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function vA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new bg(t),e.set(r,[o])):s>=a.length?(o=new bg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class _A extends wo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xA extends wo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SA=`uniform sampler2D shadow_pass;
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
}`;function MA(t,e,n){let i=new If;const r=new oe,s=new oe,a=new at,o=new _A({depthPacking:mw}),l=new xA,c={},d=n.maxTextureSize,h={[gr]:gn,[gn]:gr,[Ei]:Ei},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:yA,fragmentShader:SA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new vn;v.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new we(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f_;let u=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ni),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=u!==yi&&this.type===yi,Y=u===yi&&this.type!==yi;for(let Z=0,W=A.length;Z<W;Z++){const K=A[Z],I=K.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const X=I.getFrameExtents();if(r.multiply(X),s.copy(I.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/X.x),r.x=s.x*X.x,I.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/X.y),r.y=s.y*X.y,I.mapSize.y=s.y)),I.map===null||B===!0||Y===!0){const ae=this.type!==yi?{minFilter:Zn,magFilter:Zn}:{};I.map!==null&&I.map.dispose(),I.map=new Jn(r.x,r.y,ae),I.map.texture.name=K.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const $=I.getViewportCount();for(let ae=0;ae<$;ae++){const de=I.getViewport(ae);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),z.viewport(a),I.updateMatrices(K,ae),i=I.getFrustum(),S(T,C,I.camera,K,this.type)}I.isPointLightShadow!==!0&&this.type===yi&&g(I,C),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,M,L)};function g(A,T){const C=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,C,f,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,C,p,y,null)}function _(A,T,C,E){let M=null;const L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=C.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=M.uuid,B=T.uuid;let Y=c[z];Y===void 0&&(Y={},c[z]=Y);let Z=Y[B];Z===void 0&&(Z=M.clone(),Y[B]=Z,T.addEventListener("dispose",N)),M=Z}if(M.visible=T.visible,M.wireframe=T.wireframe,E===yi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=t.properties.get(M);z.light=C}return M}function S(A,T,C,E,M){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===yi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const B=e.update(A),Y=A.material;if(Array.isArray(Y)){const Z=B.groups;for(let W=0,K=Z.length;W<K;W++){const I=Z[W],X=Y[I.materialIndex];if(X&&X.visible){const $=_(A,X,E,M);A.onBeforeShadow(t,A,T,C,B,$,I),t.renderBufferDirect(C,null,B,$,A,I),A.onAfterShadow(t,A,T,C,B,$,I)}}}else if(Y.visible){const Z=_(A,Y,E,M);A.onBeforeShadow(t,A,T,C,B,Z,null),t.renderBufferDirect(C,null,B,Z,A,null),A.onAfterShadow(t,A,T,C,B,Z,null)}}const z=A.children;for(let B=0,Y=z.length;B<Y;B++)S(z[B],T,C,E,M)}function N(A){A.target.removeEventListener("dispose",N);for(const C in c){const E=c[C],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const wA={[Od]:zd,[Bd]:jd,[Hd]:Gd,[qs]:Vd,[zd]:Od,[jd]:Bd,[Gd]:Hd,[Vd]:qs};function EA(t,e){function n(){let k=!1;const fe=new at;let q=null;const ee=new at(0,0,0,0);return{setMask:function(ve){q!==ve&&!k&&(t.colorMask(ve,ve,ve,ve),q=ve)},setLocked:function(ve){k=ve},setClear:function(ve,me,ze,Tt,Xt){Xt===!0&&(ve*=Tt,me*=Tt,ze*=Tt),fe.set(ve,me,ze,Tt),ee.equals(fe)===!1&&(t.clearColor(ve,me,ze,Tt),ee.copy(fe))},reset:function(){k=!1,q=null,ee.set(-1,0,0,0)}}}function i(){let k=!1,fe=!1,q=null,ee=null,ve=null;return{setReversed:function(me){if(fe!==me){const ze=e.get("EXT_clip_control");fe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const Tt=ve;ve=null,this.setClear(Tt)}fe=me},getReversed:function(){return fe},setTest:function(me){me?te(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(me){q!==me&&!k&&(t.depthMask(me),q=me)},setFunc:function(me){if(fe&&(me=wA[me]),ee!==me){switch(me){case Od:t.depthFunc(t.NEVER);break;case zd:t.depthFunc(t.ALWAYS);break;case Bd:t.depthFunc(t.LESS);break;case qs:t.depthFunc(t.LEQUAL);break;case Hd:t.depthFunc(t.EQUAL);break;case Vd:t.depthFunc(t.GEQUAL);break;case jd:t.depthFunc(t.GREATER);break;case Gd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=me}},setLocked:function(me){k=me},setClear:function(me){ve!==me&&(fe&&(me=1-me),t.clearDepth(me),ve=me)},reset:function(){k=!1,q=null,ee=null,ve=null,fe=!1}}}function r(){let k=!1,fe=null,q=null,ee=null,ve=null,me=null,ze=null,Tt=null,Xt=null;return{setTest:function(nt){k||(nt?te(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(nt){fe!==nt&&!k&&(t.stencilMask(nt),fe=nt)},setFunc:function(nt,On,hi){(q!==nt||ee!==On||ve!==hi)&&(t.stencilFunc(nt,On,hi),q=nt,ee=On,ve=hi)},setOp:function(nt,On,hi){(me!==nt||ze!==On||Tt!==hi)&&(t.stencilOp(nt,On,hi),me=nt,ze=On,Tt=hi)},setLocked:function(nt){k=nt},setClear:function(nt){Xt!==nt&&(t.clearStencil(nt),Xt=nt)},reset:function(){k=!1,fe=null,q=null,ee=null,ve=null,me=null,ze=null,Tt=null,Xt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,p=[],v=null,y=!1,m=null,u=null,g=null,_=null,S=null,N=null,A=null,T=new Oe(0,0,0),C=0,E=!1,M=null,L=null,z=null,B=null,Y=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(I)[1]),W=K>=1):I.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),W=K>=2);let X=null,$={};const ae=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),ke=new at().fromArray(ae),P=new at().fromArray(de);function V(k,fe,q,ee){const ve=new Uint8Array(4),me=t.createTexture();t.bindTexture(k,me),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ze=0;ze<q;ze++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(fe+ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return me}const ne={};ne[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(t.DEPTH_TEST),a.setFunc(qs),Ge(!1),We(Nm),te(t.CULL_FACE),U(Ni);function te(k){d[k]!==!0&&(t.enable(k),d[k]=!0)}function Ee(k){d[k]!==!1&&(t.disable(k),d[k]=!1)}function he(k,fe){return h[k]!==fe?(t.bindFramebuffer(k,fe),h[k]=fe,k===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=fe),k===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Me(k,fe){let q=p,ee=!1;if(k){q=f.get(fe),q===void 0&&(q=[],f.set(fe,q));const ve=k.textures;if(q.length!==ve.length||q[0]!==t.COLOR_ATTACHMENT0){for(let me=0,ze=ve.length;me<ze;me++)q[me]=t.COLOR_ATTACHMENT0+me;q.length=ve.length,ee=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,ee=!0);ee&&t.drawBuffers(q)}function Pe(k){return v!==k?(t.useProgram(k),v=k,!0):!1}const Ie={[Nr]:t.FUNC_ADD,[YM]:t.FUNC_SUBTRACT,[$M]:t.FUNC_REVERSE_SUBTRACT};Ie[qM]=t.MIN,Ie[KM]=t.MAX;const ht={[ZM]:t.ZERO,[JM]:t.ONE,[QM]:t.SRC_COLOR,[kd]:t.SRC_ALPHA,[sw]:t.SRC_ALPHA_SATURATE,[iw]:t.DST_COLOR,[tw]:t.DST_ALPHA,[ew]:t.ONE_MINUS_SRC_COLOR,[Fd]:t.ONE_MINUS_SRC_ALPHA,[rw]:t.ONE_MINUS_DST_COLOR,[nw]:t.ONE_MINUS_DST_ALPHA,[aw]:t.CONSTANT_COLOR,[ow]:t.ONE_MINUS_CONSTANT_COLOR,[lw]:t.CONSTANT_ALPHA,[cw]:t.ONE_MINUS_CONSTANT_ALPHA};function U(k,fe,q,ee,ve,me,ze,Tt,Xt,nt){if(k===Ni){y===!0&&(Ee(t.BLEND),y=!1);return}if(y===!1&&(te(t.BLEND),y=!0),k!==XM){if(k!==m||nt!==E){if((u!==Nr||S!==Nr)&&(t.blendEquation(t.FUNC_ADD),u=Nr,S=Nr),nt)switch(k){case Os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ud:t.blendFunc(t.ONE,t.ONE);break;case Lm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ud:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Lm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}g=null,_=null,N=null,A=null,T.set(0,0,0),C=0,m=k,E=nt}return}ve=ve||fe,me=me||q,ze=ze||ee,(fe!==u||ve!==S)&&(t.blendEquationSeparate(Ie[fe],Ie[ve]),u=fe,S=ve),(q!==g||ee!==_||me!==N||ze!==A)&&(t.blendFuncSeparate(ht[q],ht[ee],ht[me],ht[ze]),g=q,_=ee,N=me,A=ze),(Tt.equals(T)===!1||Xt!==C)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Xt),T.copy(Tt),C=Xt),m=k,E=!1}function Ye(k,fe){k.side===Ei?Ee(t.CULL_FACE):te(t.CULL_FACE);let q=k.side===gn;fe&&(q=!q),Ge(q),k.blending===Os&&k.transparent===!1?U(Ni):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const ee=k.stencilWrite;o.setTest(ee),ee&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ot(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(k){M!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),M=k)}function We(k){k!==GM?(te(t.CULL_FACE),k!==L&&(k===Nm?t.cullFace(t.BACK):k===WM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),L=k}function Ne(k){k!==z&&(W&&t.lineWidth(k),z=k)}function ot(k,fe,q){k?(te(t.POLYGON_OFFSET_FILL),(B!==fe||Y!==q)&&(t.polygonOffset(fe,q),B=fe,Y=q)):Ee(t.POLYGON_OFFSET_FILL)}function Le(k){k?te(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function R(k){k===void 0&&(k=t.TEXTURE0+Z-1),X!==k&&(t.activeTexture(k),X=k)}function w(k,fe,q){q===void 0&&(X===null?q=t.TEXTURE0+Z-1:q=X);let ee=$[q];ee===void 0&&(ee={type:void 0,texture:void 0},$[q]=ee),(ee.type!==k||ee.texture!==fe)&&(X!==q&&(t.activeTexture(q),X=q),t.bindTexture(k,fe||ne[k]),ee.type=k,ee.texture=fe)}function H(){const k=$[X];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ze(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(k){ke.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),ke.copy(k))}function Se(k){P.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),P.copy(k))}function $e(k,fe){let q=c.get(fe);q===void 0&&(q=new WeakMap,c.set(fe,q));let ee=q.get(k);ee===void 0&&(ee=t.getUniformBlockIndex(fe,k.name),q.set(k,ee))}function Ve(k,fe){const ee=c.get(fe).get(k);l.get(fe)!==ee&&(t.uniformBlockBinding(fe,ee,k.__bindingPointIndex),l.set(fe,ee))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},X=null,$={},h={},f=new WeakMap,p=[],v=null,y=!1,m=null,u=null,g=null,_=null,S=null,N=null,A=null,T=new Oe(0,0,0),C=0,E=!1,M=null,L=null,z=null,B=null,Y=null,ke.set(0,0,t.canvas.width,t.canvas.height),P.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:Ee,bindFramebuffer:he,drawBuffers:Me,useProgram:Pe,setBlending:U,setMaterial:Ye,setFlipSided:Ge,setCullFace:We,setLineWidth:Ne,setPolygonOffset:ot,setScissorTest:Le,activeTexture:R,bindTexture:w,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:ie,texImage2D:ye,texImage3D:De,updateUBOMapping:$e,uniformBlockBinding:Ve,texStorage2D:Ze,texStorage3D:le,texSubImage2D:J,texSubImage3D:Ce,compressedTexSubImage2D:pe,compressedTexSubImage3D:xe,scissor:Ue,viewport:Se,reset:ct}}function Ag(t,e,n,i){const r=TA(i);switch(n){case T_:return t*e;case A_:return t*e;case C_:return t*e*2;case R_:return t*e/r.components*r.byteLength;case Af:return t*e/r.components*r.byteLength;case P_:return t*e*2/r.components*r.byteLength;case Cf:return t*e*2/r.components*r.byteLength;case b_:return t*e*3/r.components*r.byteLength;case $n:return t*e*4/r.components*r.byteLength;case Rf:return t*e*4/r.components*r.byteLength;case El:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bl:case Al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:case Zd:return Math.max(t,16)*Math.max(e,8)/4;case $d:case Kd:return Math.max(t,8)*Math.max(e,8)/2;case Jd:case Qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ih:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case sh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ah:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case dh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case hh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case fh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ph:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Cl:case mh:case gh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case N_:case vh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case _h:case xh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function TA(t){switch(t){case Oi:case M_:return{byteLength:1,components:1};case uo:case w_:case Li:return{byteLength:2,components:1};case Tf:case bf:return{byteLength:2,components:4};case Xr:case Ef:case Ai:return{byteLength:4,components:1};case E_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function bA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,w){return p?new OffscreenCanvas(R,w):ho("canvas")}function y(R,w,H){let Q=1;const ie=Le(R);if((ie.width>H||ie.height>H)&&(Q=H/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(Q*ie.width),Ce=Math.floor(Q*ie.height);h===void 0&&(h=v(J,Ce));const pe=w?v(J,Ce):h;return pe.width=J,pe.height=Ce,pe.getContext("2d").drawImage(R,0,0,J,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Ce+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,w,H,Q,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=w;if(w===t.RED&&(H===t.FLOAT&&(J=t.R32F),H===t.HALF_FLOAT&&(J=t.R16F),H===t.UNSIGNED_BYTE&&(J=t.R8)),w===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.R8UI),H===t.UNSIGNED_SHORT&&(J=t.R16UI),H===t.UNSIGNED_INT&&(J=t.R32UI),H===t.BYTE&&(J=t.R8I),H===t.SHORT&&(J=t.R16I),H===t.INT&&(J=t.R32I)),w===t.RG&&(H===t.FLOAT&&(J=t.RG32F),H===t.HALF_FLOAT&&(J=t.RG16F),H===t.UNSIGNED_BYTE&&(J=t.RG8)),w===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RG8UI),H===t.UNSIGNED_SHORT&&(J=t.RG16UI),H===t.UNSIGNED_INT&&(J=t.RG32UI),H===t.BYTE&&(J=t.RG8I),H===t.SHORT&&(J=t.RG16I),H===t.INT&&(J=t.RG32I)),w===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RGB8UI),H===t.UNSIGNED_SHORT&&(J=t.RGB16UI),H===t.UNSIGNED_INT&&(J=t.RGB32UI),H===t.BYTE&&(J=t.RGB8I),H===t.SHORT&&(J=t.RGB16I),H===t.INT&&(J=t.RGB32I)),w===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),H===t.UNSIGNED_INT&&(J=t.RGBA32UI),H===t.BYTE&&(J=t.RGBA8I),H===t.SHORT&&(J=t.RGBA16I),H===t.INT&&(J=t.RGBA32I)),w===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),w===t.RGBA){const Ce=ie?wc:qe.getTransfer(Q);H===t.FLOAT&&(J=t.RGBA32F),H===t.HALF_FLOAT&&(J=t.RGBA16F),H===t.UNSIGNED_BYTE&&(J=Ce===it?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(R,w){let H;return R?w===null||w===Xr||w===Js?H=t.DEPTH24_STENCIL8:w===Ai?H=t.DEPTH32F_STENCIL8:w===uo&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xr||w===Js?H=t.DEPTH_COMPONENT24:w===Ai?H=t.DEPTH_COMPONENT32F:w===uo&&(H=t.DEPTH_COMPONENT16),H}function N(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zn&&R.minFilter!==ai?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function A(R){const w=R.target;w.removeEventListener("dispose",A),C(w),w.isVideoTexture&&d.delete(w)}function T(R){const w=R.target;w.removeEventListener("dispose",T),M(w)}function C(R){const w=i.get(R);if(w.__webglInit===void 0)return;const H=R.source,Q=f.get(H);if(Q){const ie=Q[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(R),Object.keys(Q).length===0&&f.delete(H)}i.remove(R)}function E(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const H=R.source,Q=f.get(H);delete Q[w.__cacheKey],a.memory.textures--}function M(R){const w=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let ie=0;ie<w.__webglFramebuffer[Q].length;ie++)t.deleteFramebuffer(w.__webglFramebuffer[Q][ie]);else t.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)t.deleteFramebuffer(w.__webglFramebuffer[Q]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=R.textures;for(let Q=0,ie=H.length;Q<ie;Q++){const J=i.get(H[Q]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(H[Q])}i.remove(R)}let L=0;function z(){L=0}function B(){const R=L;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function Y(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function Z(R,w){const H=i.get(R);if(R.isVideoTexture&&Ne(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{P(H,R,w);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+w)}function W(R,w){const H=i.get(R);if(R.version>0&&H.__version!==R.version){P(H,R,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+w)}function K(R,w){const H=i.get(R);if(R.version>0&&H.__version!==R.version){P(H,R,w);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+w)}function I(R,w){const H=i.get(R);if(R.version>0&&H.__version!==R.version){V(H,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+w)}const X={[co]:t.REPEAT,[kr]:t.CLAMP_TO_EDGE,[Yd]:t.MIRRORED_REPEAT},$={[Zn]:t.NEAREST,[fw]:t.NEAREST_MIPMAP_NEAREST,[jo]:t.NEAREST_MIPMAP_LINEAR,[ai]:t.LINEAR,[su]:t.LINEAR_MIPMAP_NEAREST,[Fr]:t.LINEAR_MIPMAP_LINEAR},ae={[vw]:t.NEVER,[ww]:t.ALWAYS,[_w]:t.LESS,[D_]:t.LEQUAL,[xw]:t.EQUAL,[Mw]:t.GEQUAL,[yw]:t.GREATER,[Sw]:t.NOTEQUAL};function de(R,w){if(w.type===Ai&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ai||w.magFilter===su||w.magFilter===jo||w.magFilter===Fr||w.minFilter===ai||w.minFilter===su||w.minFilter===jo||w.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,X[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,X[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,X[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,$[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,$[w.minFilter]),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ae[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Zn||w.minFilter!==jo&&w.minFilter!==Fr||w.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ke(R,w){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",A));const Q=w.source;let ie=f.get(Q);ie===void 0&&(ie={},f.set(Q,ie));const J=Y(w);if(J!==R.__cacheKey){ie[J]===void 0&&(ie[J]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ie[J].usedTimes++;const Ce=ie[R.__cacheKey];Ce!==void 0&&(ie[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(w)),R.__cacheKey=J,R.__webglTexture=ie[J].texture}return H}function P(R,w,H){let Q=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=t.TEXTURE_3D);const ie=ke(R,w),J=w.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+H);const Ce=i.get(J);if(J.version!==Ce.__version||ie===!0){n.activeTexture(t.TEXTURE0+H);const pe=qe.getPrimaries(qe.workingColorSpace),xe=w.colorSpace===Qi?null:qe.getPrimaries(w.colorSpace),Ze=w.colorSpace===Qi||pe===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let le=y(w.image,!1,r.maxTextureSize);le=ot(w,le);const ye=s.convert(w.format,w.colorSpace),De=s.convert(w.type);let Ue=_(w.internalFormat,ye,De,w.colorSpace,w.isVideoTexture);de(Q,w);let Se;const $e=w.mipmaps,Ve=w.isVideoTexture!==!0,ct=Ce.__version===void 0||ie===!0,k=J.dataReady,fe=N(w,le);if(w.isDepthTexture)Ue=S(w.format===Qs,w.type),ct&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,Ue,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Ue,le.width,le.height,0,ye,De,null));else if(w.isDataTexture)if($e.length>0){Ve&&ct&&n.texStorage2D(t.TEXTURE_2D,fe,Ue,$e[0].width,$e[0].height);for(let q=0,ee=$e.length;q<ee;q++)Se=$e[q],Ve?k&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Se.width,Se.height,ye,De,Se.data):n.texImage2D(t.TEXTURE_2D,q,Ue,Se.width,Se.height,0,ye,De,Se.data);w.generateMipmaps=!1}else Ve?(ct&&n.texStorage2D(t.TEXTURE_2D,fe,Ue,le.width,le.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,ye,De,le.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,le.width,le.height,0,ye,De,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ve&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ue,$e[0].width,$e[0].height,le.depth);for(let q=0,ee=$e.length;q<ee;q++)if(Se=$e[q],w.format!==$n)if(ye!==null)if(Ve){if(k)if(w.layerUpdates.size>0){const ve=Ag(Se.width,Se.height,w.format,w.type);for(const me of w.layerUpdates){const ze=Se.data.subarray(me*ve/Se.data.BYTES_PER_ELEMENT,(me+1)*ve/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,me,Se.width,Se.height,1,ye,ze)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,Se.width,Se.height,le.depth,ye,Se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,Ue,Se.width,Se.height,le.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,Se.width,Se.height,le.depth,ye,De,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,Ue,Se.width,Se.height,le.depth,0,ye,De,Se.data)}else{Ve&&ct&&n.texStorage2D(t.TEXTURE_2D,fe,Ue,$e[0].width,$e[0].height);for(let q=0,ee=$e.length;q<ee;q++)Se=$e[q],w.format!==$n?ye!==null?Ve?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,Se.width,Se.height,ye,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,q,Ue,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?k&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Se.width,Se.height,ye,De,Se.data):n.texImage2D(t.TEXTURE_2D,q,Ue,Se.width,Se.height,0,ye,De,Se.data)}else if(w.isDataArrayTexture)if(Ve){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ue,le.width,le.height,le.depth),k)if(w.layerUpdates.size>0){const q=Ag(le.width,le.height,w.format,w.type);for(const ee of w.layerUpdates){const ve=le.data.subarray(ee*q/le.data.BYTES_PER_ELEMENT,(ee+1)*q/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,le.width,le.height,1,ye,De,ve)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ye,De,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,le.width,le.height,le.depth,0,ye,De,le.data);else if(w.isData3DTexture)Ve?(ct&&n.texStorage3D(t.TEXTURE_3D,fe,Ue,le.width,le.height,le.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ye,De,le.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,le.width,le.height,le.depth,0,ye,De,le.data);else if(w.isFramebufferTexture){if(ct)if(Ve)n.texStorage2D(t.TEXTURE_2D,fe,Ue,le.width,le.height);else{let q=le.width,ee=le.height;for(let ve=0;ve<fe;ve++)n.texImage2D(t.TEXTURE_2D,ve,Ue,q,ee,0,ye,De,null),q>>=1,ee>>=1}}else if($e.length>0){if(Ve&&ct){const q=Le($e[0]);n.texStorage2D(t.TEXTURE_2D,fe,Ue,q.width,q.height)}for(let q=0,ee=$e.length;q<ee;q++)Se=$e[q],Ve?k&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ye,De,Se):n.texImage2D(t.TEXTURE_2D,q,Ue,ye,De,Se);w.generateMipmaps=!1}else if(Ve){if(ct){const q=Le(le);n.texStorage2D(t.TEXTURE_2D,fe,Ue,q.width,q.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,De,le)}else n.texImage2D(t.TEXTURE_2D,0,Ue,ye,De,le);m(w)&&u(Q),Ce.__version=J.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function V(R,w,H){if(w.image.length!==6)return;const Q=ke(R,w),ie=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const J=i.get(ie);if(ie.version!==J.__version||Q===!0){n.activeTexture(t.TEXTURE0+H);const Ce=qe.getPrimaries(qe.workingColorSpace),pe=w.colorSpace===Qi?null:qe.getPrimaries(w.colorSpace),xe=w.colorSpace===Qi||Ce===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ze=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!Ze&&!le?ye[ee]=y(w.image[ee],!0,r.maxCubemapSize):ye[ee]=le?w.image[ee].image:w.image[ee],ye[ee]=ot(w,ye[ee]);const De=ye[0],Ue=s.convert(w.format,w.colorSpace),Se=s.convert(w.type),$e=_(w.internalFormat,Ue,Se,w.colorSpace),Ve=w.isVideoTexture!==!0,ct=J.__version===void 0||Q===!0,k=ie.dataReady;let fe=N(w,De);de(t.TEXTURE_CUBE_MAP,w);let q;if(Ze){Ve&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,$e,De.width,De.height);for(let ee=0;ee<6;ee++){q=ye[ee].mipmaps;for(let ve=0;ve<q.length;ve++){const me=q[ve];w.format!==$n?Ue!==null?Ve?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,me.width,me.height,Ue,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,$e,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,me.width,me.height,Ue,Se,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,$e,me.width,me.height,0,Ue,Se,me.data)}}}else{if(q=w.mipmaps,Ve&&ct){q.length>0&&fe++;const ee=Le(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,$e,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(le){Ve?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,Ue,Se,ye[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,ye[ee].width,ye[ee].height,0,Ue,Se,ye[ee].data);for(let ve=0;ve<q.length;ve++){const ze=q[ve].image[ee].image;Ve?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,ze.width,ze.height,Ue,Se,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,$e,ze.width,ze.height,0,Ue,Se,ze.data)}}else{Ve?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ue,Se,ye[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,Ue,Se,ye[ee]);for(let ve=0;ve<q.length;ve++){const me=q[ve];Ve?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,Ue,Se,me.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,$e,Ue,Se,me.image[ee])}}}m(w)&&u(t.TEXTURE_CUBE_MAP),J.__version=ie.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ne(R,w,H,Q,ie,J){const Ce=s.convert(H.format,H.colorSpace),pe=s.convert(H.type),xe=_(H.internalFormat,Ce,pe,H.colorSpace),Ze=i.get(w),le=i.get(H);if(le.__renderTarget=w,!Ze.__hasExternalTextures){const ye=Math.max(1,w.width>>J),De=Math.max(1,w.height>>J);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,J,xe,ye,De,w.depth,0,Ce,pe,null):n.texImage2D(ie,J,xe,ye,De,0,Ce,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),We(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ie,le.__webglTexture,0,Ge(w)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ie,le.__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(R,w,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer){const Q=w.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,J=S(w.stencilBuffer,ie),Ce=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=Ge(w);We(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,J,w.width,w.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,J,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,J,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,R)}else{const Q=w.textures;for(let ie=0;ie<Q.length;ie++){const J=Q[ie],Ce=s.convert(J.format,J.colorSpace),pe=s.convert(J.type),xe=_(J.internalFormat,Ce,pe,J.colorSpace),Ze=Ge(w);H&&We(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,xe,w.width,w.height):We(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze,xe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,xe,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ee(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(w.depthTexture);Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);const ie=Q.__webglTexture,J=Ge(w);if(w.depthTexture.format===zs)We(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(w.depthTexture.format===Qs)We(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function he(R){const w=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Q){const ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=Q}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ee(w.__webglFramebuffer,R)}else if(H){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]===void 0)w.__webglDepthbuffer[Q]=t.createRenderbuffer(),te(w.__webglDepthbuffer[Q],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),te(w.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(R,w,H){const Q=i.get(R);w!==void 0&&ne(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&he(R)}function Pe(R){const w=R.texture,H=i.get(R),Q=i.get(w);R.addEventListener("dispose",T);const ie=R.textures,J=R.isWebGLCubeRenderTarget===!0,Ce=ie.length>1;if(Ce||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=w.version,a.memory.textures++),J){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[pe]=[];for(let xe=0;xe<w.mipmaps.length;xe++)H.__webglFramebuffer[pe][xe]=t.createFramebuffer()}else H.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)H.__webglFramebuffer[pe]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let pe=0,xe=ie.length;pe<xe;pe++){const Ze=i.get(ie[pe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&We(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pe=0;pe<ie.length;pe++){const xe=ie[pe];H.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[pe]);const Ze=s.convert(xe.format,xe.colorSpace),le=s.convert(xe.type),ye=_(xe.internalFormat,Ze,le,xe.colorSpace,R.isXRRenderTarget===!0),De=Ge(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,ye,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,H.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),te(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),de(t.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)ne(H.__webglFramebuffer[pe][xe],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else ne(H.__webglFramebuffer[pe],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(w)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let pe=0,xe=ie.length;pe<xe;pe++){const Ze=ie[pe],le=i.get(Ze);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),de(t.TEXTURE_2D,Ze),ne(H.__webglFramebuffer,R,Ze,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),m(Ze)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Q.__webglTexture),de(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)ne(H.__webglFramebuffer[xe],R,w,t.COLOR_ATTACHMENT0,pe,xe);else ne(H.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,pe,0);m(w)&&u(pe),n.unbindTexture()}R.depthBuffer&&he(R)}function Ie(R){const w=R.textures;for(let H=0,Q=w.length;H<Q;H++){const ie=w[H];if(m(ie)){const J=g(R),Ce=i.get(ie).__webglTexture;n.bindTexture(J,Ce),u(J),n.unbindTexture()}}}const ht=[],U=[];function Ye(R){if(R.samples>0){if(We(R)===!1){const w=R.textures,H=R.width,Q=R.height;let ie=t.COLOR_BUFFER_BIT;const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(R),pe=w.length>1;if(pe)for(let xe=0;xe<w.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let xe=0;xe<w.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);const Ze=i.get(w[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ze,0)}t.blitFramebuffer(0,0,H,Q,0,0,H,Q,ie,t.NEAREST),l===!0&&(ht.length=0,U.length=0,ht.push(t.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ht.push(J),U.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ht))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let xe=0;xe<w.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);const Ze=i.get(w[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Ge(R){return Math.min(r.maxSamples,R.samples)}function We(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ne(R){const w=a.render.frame;d.get(R)!==w&&(d.set(R,w),R.update())}function ot(R,w){const H=R.colorSpace,Q=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==sa&&H!==Qi&&(qe.getTransfer(H)===it?(Q!==$n||ie!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=I,this.rebindTextures=Me,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=We}function AA(t,e){function n(i,r=Qi){let s;const a=qe.getTransfer(r);if(i===Oi)return t.UNSIGNED_BYTE;if(i===Tf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===bf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===E_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===M_)return t.BYTE;if(i===w_)return t.SHORT;if(i===uo)return t.UNSIGNED_SHORT;if(i===Ef)return t.INT;if(i===Xr)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===Li)return t.HALF_FLOAT;if(i===T_)return t.ALPHA;if(i===b_)return t.RGB;if(i===$n)return t.RGBA;if(i===A_)return t.LUMINANCE;if(i===C_)return t.LUMINANCE_ALPHA;if(i===zs)return t.DEPTH_COMPONENT;if(i===Qs)return t.DEPTH_STENCIL;if(i===R_)return t.RED;if(i===Af)return t.RED_INTEGER;if(i===P_)return t.RG;if(i===Cf)return t.RG_INTEGER;if(i===Rf)return t.RGBA_INTEGER;if(i===El||i===Tl||i===bl||i===Al)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===El)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===El)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$d||i===qd||i===Kd||i===Zd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$d)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jd||i===Qd||i===eh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jd||i===Qd)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===eh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===th||i===nh||i===ih||i===rh||i===sh||i===ah||i===oh||i===lh||i===ch||i===uh||i===dh||i===hh||i===fh||i===ph)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===th)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ih)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ah)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ch)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ph)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cl||i===mh||i===gh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Cl)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===N_||i===vh||i===_h||i===xh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Cl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_h)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class CA extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vt extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RA={type:"move"};class Du{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(RA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const PA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NA=`
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

}`;class LA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new nn({vertexShader:PA,fragmentShader:NA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new we(new aa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DA extends Qr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,v=null;const y=new LA,m=n.getContextAttributes();let u=null,g=null;const _=[],S=[],N=new oe;let A=null;const T=new wn;T.viewport=new at;const C=new wn;C.viewport=new at;const E=[T,C],M=new CA;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let V=_[P];return V===void 0&&(V=new Du,_[P]=V),V.getTargetRaySpace()},this.getControllerGrip=function(P){let V=_[P];return V===void 0&&(V=new Du,_[P]=V),V.getGripSpace()},this.getHand=function(P){let V=_[P];return V===void 0&&(V=new Du,_[P]=V),V.getHandSpace()};function B(P){const V=S.indexOf(P.inputSource);if(V===-1)return;const ne=_[V];ne!==void 0&&(ne.update(P.inputSource,P.frame,c||a),ne.dispatchEvent({type:P.type,data:P.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Z);for(let P=0;P<_.length;P++){const V=S[P];V!==null&&(S[P]=null,_[P].disconnect(V))}L=null,z=null,y.reset(),e.setRenderTarget(u),p=null,f=null,h=null,r=null,g=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const V={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,V),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Jn(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let V=null,ne=null,te=null;m.depth&&(te=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,V=m.stencil?Qs:zs,ne=m.stencil?Js:Xr);const Ee={colorFormat:n.RGBA8,depthFormat:te,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Jn(f.textureWidth,f.textureHeight,{format:$n,type:Oi,depthTexture:new G_(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(P){for(let V=0;V<P.removed.length;V++){const ne=P.removed[V],te=S.indexOf(ne);te>=0&&(S[te]=null,_[te].disconnect(ne))}for(let V=0;V<P.added.length;V++){const ne=P.added[V];let te=S.indexOf(ne);if(te===-1){for(let he=0;he<_.length;he++)if(he>=S.length){S.push(ne),te=he;break}else if(S[he]===null){S[he]=ne,te=he;break}if(te===-1)break}const Ee=_[te];Ee&&Ee.connect(ne)}}const W=new D,K=new D;function I(P,V,ne){W.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(ne.matrixWorld);const te=W.distanceTo(K),Ee=V.projectionMatrix.elements,he=ne.projectionMatrix.elements,Me=Ee[14]/(Ee[10]-1),Pe=Ee[14]/(Ee[10]+1),Ie=(Ee[9]+1)/Ee[5],ht=(Ee[9]-1)/Ee[5],U=(Ee[8]-1)/Ee[0],Ye=(he[8]+1)/he[0],Ge=Me*U,We=Me*Ye,Ne=te/(-U+Ye),ot=Ne*-U;if(V.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(ot),P.translateZ(Ne),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),Ee[10]===-1)P.projectionMatrix.copy(V.projectionMatrix),P.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const Le=Me+Ne,R=Pe+Ne,w=Ge-ot,H=We+(te-ot),Q=Ie*Pe/R*Le,ie=ht*Pe/R*Le;P.projectionMatrix.makePerspective(w,H,Q,ie,Le,R),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function X(P,V){V===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(V.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;let V=P.near,ne=P.far;y.texture!==null&&(y.depthNear>0&&(V=y.depthNear),y.depthFar>0&&(ne=y.depthFar)),M.near=C.near=T.near=V,M.far=C.far=T.far=ne,(L!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,z=M.far),T.layers.mask=P.layers.mask|2,C.layers.mask=P.layers.mask|4,M.layers.mask=T.layers.mask|C.layers.mask;const te=P.parent,Ee=M.cameras;X(M,te);for(let he=0;he<Ee.length;he++)X(Ee[he],te);Ee.length===2?I(M,T,C):M.projectionMatrix.copy(T.projectionMatrix),$(P,M,te)};function $(P,V,ne){ne===null?P.matrix.copy(V.matrixWorld):(P.matrix.copy(ne.matrixWorld),P.matrix.invert(),P.matrix.multiply(V.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(V.projectionMatrix),P.projectionMatrixInverse.copy(V.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=yh*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(P){l=P,f!==null&&(f.fixedFoveation=P),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=P)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let ae=null;function de(P,V){if(d=V.getViewerPose(c||a),v=V,d!==null){const ne=d.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let te=!1;ne.length!==M.cameras.length&&(M.cameras.length=0,te=!0);for(let he=0;he<ne.length;he++){const Me=ne[he];let Pe=null;if(p!==null)Pe=p.getViewport(Me);else{const ht=h.getViewSubImage(f,Me);Pe=ht.viewport,he===0&&(e.setRenderTargetTextures(g,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(g))}let Ie=E[he];Ie===void 0&&(Ie=new wn,Ie.layers.enable(he),Ie.viewport=new at,E[he]=Ie),Ie.matrix.fromArray(Me.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Me.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),he===0&&(M.matrix.copy(Ie.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),te===!0&&M.cameras.push(Ie)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const he=h.getDepthInformation(ne[0]);he&&he.isValid&&he.texture&&y.init(e,he,r.renderState)}}for(let ne=0;ne<_.length;ne++){const te=S[ne],Ee=_[ne];te!==null&&Ee!==void 0&&Ee.update(te,V,c||a)}ae&&ae(P,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),v=null}const ke=new j_;ke.setAnimationLoop(de),this.setAnimationLoop=function(P){ae=P},this.dispose=function(){}}}const Ar=new ui,IA=new _t;function UA(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,B_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,_,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===gn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===gn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),_=g.envMap,S=g.envMapRotation;_&&(m.envMap.value=_,Ar.copy(S),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),m.envMapRotation.value.setFromMatrix4(IA.makeRotationFromEuler(Ar)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===gn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const S=_.program;i.uniformBlockBinding(g,S)}function c(g,_){let S=r[g.id];S===void 0&&(v(g),S=d(g),r[g.id]=S,g.addEventListener("dispose",m));const N=_.program;i.updateUBOMapping(g,N);const A=e.render.frame;s[g.id]!==A&&(f(g),s[g.id]=A)}function d(g){const _=h();g.__bindingPointIndex=_;const S=t.createBuffer(),N=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,N,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function h(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=r[g.id],S=g.uniforms,N=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,T=S.length;A<T;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,M=C.length;E<M;E++){const L=C[E];if(p(L,A,E,N)===!0){const z=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let Z=0;Z<B.length;Z++){const W=B[Z],K=y(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,z+Y,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,S,N){const A=g.value,T=_+"_"+S;if(N[T]===void 0)return typeof A=="number"||typeof A=="boolean"?N[T]=A:N[T]=A.clone(),!0;{const C=N[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return N[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function v(g){const _=g.uniforms;let S=0;const N=16;for(let T=0,C=_.length;T<C;T++){const E=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,L=E.length;M<L;M++){const z=E[M],B=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,Z=B.length;Y<Z;Y++){const W=B[Y],K=y(W),I=S%N,X=I%K.boundary,$=I+X;S+=X,$!==0&&N-$<K.storage&&(S+=N-$),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=K.storage}}}const A=S%N;return A>0&&(S+=N-A),g.__size=S,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class FA{constructor(e={}){const{canvas:n=bw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),y=new Int32Array(4);let m=null,u=null;const g=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=fr,this.toneMappingExposure=1;const S=this;let N=!1,A=0,T=0,C=null,E=-1,M=null;const L=new at,z=new at;let B=null;const Y=new Oe(0);let Z=0,W=n.width,K=n.height,I=1,X=null,$=null;const ae=new at(0,0,W,K),de=new at(0,0,W,K);let ke=!1;const P=new If;let V=!1,ne=!1;const te=new _t,Ee=new _t,he=new D,Me=new at,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function ht(){return C===null?I:1}let U=i;function Ye(b,F){return n.getContext(b,F)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mf}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",me,!1),U===null){const F="webgl2";if(U=Ye(F,b),U===null)throw Ye(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ge,We,Ne,ot,Le,R,w,H,Q,ie,J,Ce,pe,xe,Ze,le,ye,De,Ue,Se,$e,Ve,ct,k;function fe(){Ge=new VT(U),Ge.init(),Ve=new AA(U,Ge),We=new kT(U,Ge,e,Ve),Ne=new EA(U,Ge),We.reverseDepthBuffer&&f&&Ne.buffers.depth.setReversed(!0),ot=new WT(U),Le=new cA,R=new bA(U,Ge,Ne,Le,We,Ve,ot),w=new OT(S),H=new HT(S),Q=new Jw(U),ct=new IT(U,Q),ie=new jT(U,Q,ot,ct),J=new YT(U,ie,Q,ot),Ue=new XT(U,We,R),le=new FT(Le),Ce=new lA(S,w,H,Ge,We,ct,le),pe=new UA(S,Le),xe=new dA,Ze=new vA(Ge),De=new DT(S,w,H,Ne,J,p,l),ye=new MA(S,J,We),k=new kA(U,ot,We,Ne),Se=new UT(U,Ge,ot),$e=new GT(U,Ge,ot),ot.programs=Ce.programs,S.capabilities=We,S.extensions=Ge,S.properties=Le,S.renderLists=xe,S.shadowMap=ye,S.state=Ne,S.info=ot}fe();const q=new DA(S,U);this.xr=q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(b){b!==void 0&&(I=b,this.setSize(W,K,!1))},this.getSize=function(b){return b.set(W,K)},this.setSize=function(b,F,j=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,K=F,n.width=Math.floor(b*I),n.height=Math.floor(F*I),j===!0&&(n.style.width=b+"px",n.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(W*I,K*I).floor()},this.setDrawingBufferSize=function(b,F,j){W=b,K=F,I=j,n.width=Math.floor(b*j),n.height=Math.floor(F*j),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(ae)},this.setViewport=function(b,F,j,G){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,F,j,G),Ne.viewport(L.copy(ae).multiplyScalar(I).round())},this.getScissor=function(b){return b.copy(de)},this.setScissor=function(b,F,j,G){b.isVector4?de.set(b.x,b.y,b.z,b.w):de.set(b,F,j,G),Ne.scissor(z.copy(de).multiplyScalar(I).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(b){Ne.setScissorTest(ke=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(b=!0,F=!0,j=!0){let G=0;if(b){let O=!1;if(C!==null){const ce=C.texture.format;O=ce===Rf||ce===Cf||ce===Af}if(O){const ce=C.texture.type,ge=ce===Oi||ce===Xr||ce===uo||ce===Js||ce===Tf||ce===bf,Te=De.getClearColor(),be=De.getClearAlpha(),Fe=Te.r,Be=Te.g,Ae=Te.b;ge?(v[0]=Fe,v[1]=Be,v[2]=Ae,v[3]=be,U.clearBufferuiv(U.COLOR,0,v)):(y[0]=Fe,y[1]=Be,y[2]=Ae,y[3]=be,U.clearBufferiv(U.COLOR,0,y))}else G|=U.COLOR_BUFFER_BIT}F&&(G|=U.DEPTH_BUFFER_BIT),j&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",me,!1),xe.dispose(),Ze.dispose(),Le.dispose(),w.dispose(),H.dispose(),J.dispose(),ct.dispose(),k.dispose(),Ce.dispose(),q.dispose(),q.removeEventListener("sessionstart",tp),q.removeEventListener("sessionend",np),Sr.stop()};function ee(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const b=ot.autoReset,F=ye.enabled,j=ye.autoUpdate,G=ye.needsUpdate,O=ye.type;fe(),ot.autoReset=b,ye.enabled=F,ye.autoUpdate=j,ye.needsUpdate=G,ye.type=O}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ze(b){const F=b.target;F.removeEventListener("dispose",ze),Tt(F)}function Tt(b){Xt(b),Le.remove(b)}function Xt(b){const F=Le.get(b).programs;F!==void 0&&(F.forEach(function(j){Ce.releaseProgram(j)}),b.isShaderMaterial&&Ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,j,G,O,ce){F===null&&(F=Pe);const ge=O.isMesh&&O.matrixWorld.determinant()<0,Te=ax(b,F,j,G,O);Ne.setMaterial(G,ge);let be=j.index,Fe=1;if(G.wireframe===!0){if(be=ie.getWireframeAttribute(j),be===void 0)return;Fe=2}const Be=j.drawRange,Ae=j.attributes.position;let Qe=Be.start*Fe,ut=(Be.start+Be.count)*Fe;ce!==null&&(Qe=Math.max(Qe,ce.start*Fe),ut=Math.min(ut,(ce.start+ce.count)*Fe)),be!==null?(Qe=Math.max(Qe,0),ut=Math.min(ut,be.count)):Ae!=null&&(Qe=Math.max(Qe,0),ut=Math.min(ut,Ae.count));const ft=ut-Qe;if(ft<0||ft===1/0)return;ct.setup(O,G,Te,j,be);let ln,et=Se;if(be!==null&&(ln=Q.get(be),et=$e,et.setIndex(ln)),O.isMesh)G.wireframe===!0?(Ne.setLineWidth(G.wireframeLinewidth*ht()),et.setMode(U.LINES)):et.setMode(U.TRIANGLES);else if(O.isLine){let Re=G.linewidth;Re===void 0&&(Re=1),Ne.setLineWidth(Re*ht()),O.isLineSegments?et.setMode(U.LINES):O.isLineLoop?et.setMode(U.LINE_LOOP):et.setMode(U.LINE_STRIP)}else O.isPoints?et.setMode(U.POINTS):O.isSprite&&et.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)et.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))et.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Re=O._multiDrawStarts,fi=O._multiDrawCounts,tt=O._multiDrawCount,zn=be?Q.get(be).bytesPerElement:1,es=Le.get(G).currentProgram.getUniforms();for(let _n=0;_n<tt;_n++)es.setValue(U,"_gl_DrawID",_n),et.render(Re[_n]/zn,fi[_n])}else if(O.isInstancedMesh)et.renderInstances(Qe,ft,O.count);else if(j.isInstancedBufferGeometry){const Re=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,fi=Math.min(j.instanceCount,Re);et.renderInstances(Qe,ft,fi)}else et.render(Qe,ft)};function nt(b,F,j){b.transparent===!0&&b.side===Ei&&b.forceSinglePass===!1?(b.side=gn,b.needsUpdate=!0,To(b,F,j),b.side=gr,b.needsUpdate=!0,To(b,F,j),b.side=Ei):To(b,F,j)}this.compile=function(b,F,j=null){j===null&&(j=b),u=Ze.get(j),u.init(F),_.push(u),j.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),b!==j&&b.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const G=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ce=O.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){const Te=ce[ge];nt(Te,j,O),G.add(Te)}else nt(ce,j,O),G.add(ce)}),_.pop(),u=null,G},this.compileAsync=function(b,F,j=null){const G=this.compile(b,F,j);return new Promise(O=>{function ce(){if(G.forEach(function(ge){Le.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){O(b);return}setTimeout(ce,10)}Ge.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let On=null;function hi(b){On&&On(b)}function tp(){Sr.stop()}function np(){Sr.start()}const Sr=new j_;Sr.setAnimationLoop(hi),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(b){On=b,q.setAnimationLoop(b),b===null?Sr.stop():Sr.start()},q.addEventListener("sessionstart",tp),q.addEventListener("sessionend",np),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,F,C),u=Ze.get(b,_.length),u.init(F),_.push(u),Ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),P.setFromProjectionMatrix(Ee),ne=this.localClippingEnabled,V=le.init(this.clippingPlanes,ne),m=xe.get(b,g.length),m.init(),g.push(m),q.enabled===!0&&q.isPresenting===!0){const ce=S.xr.getDepthSensingMesh();ce!==null&&Pc(ce,F,-1/0,S.sortObjects)}Pc(b,F,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(X,$),Ie=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ie&&De.addToRenderList(m,b),this.info.render.frame++,V===!0&&le.beginShadows();const j=u.state.shadowsArray;ye.render(j,b,F),V===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(u.setupLights(),F.isArrayCamera){const ce=F.cameras;if(O.length>0)for(let ge=0,Te=ce.length;ge<Te;ge++){const be=ce[ge];rp(G,O,b,be)}Ie&&De.render(b);for(let ge=0,Te=ce.length;ge<Te;ge++){const be=ce[ge];ip(m,b,be,be.viewport)}}else O.length>0&&rp(G,O,b,F),Ie&&De.render(b),ip(m,b,F);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(S,b,F),ct.resetDefaultState(),E=-1,M=null,_.pop(),_.length>0?(u=_[_.length-1],V===!0&&le.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Pc(b,F,j,G){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||P.intersectsSprite(b)){G&&Me.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ee);const ge=J.update(b),Te=b.material;Te.visible&&m.push(b,ge,Te,j,Me.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||P.intersectsObject(b))){const ge=J.update(b),Te=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Me.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Me.copy(ge.boundingSphere.center)),Me.applyMatrix4(b.matrixWorld).applyMatrix4(Ee)),Array.isArray(Te)){const be=ge.groups;for(let Fe=0,Be=be.length;Fe<Be;Fe++){const Ae=be[Fe],Qe=Te[Ae.materialIndex];Qe&&Qe.visible&&m.push(b,ge,Qe,j,Me.z,Ae)}}else Te.visible&&m.push(b,ge,Te,j,Me.z,null)}}const ce=b.children;for(let ge=0,Te=ce.length;ge<Te;ge++)Pc(ce[ge],F,j,G)}function ip(b,F,j,G){const O=b.opaque,ce=b.transmissive,ge=b.transparent;u.setupLightsView(j),V===!0&&le.setGlobalState(S.clippingPlanes,j),G&&Ne.viewport(L.copy(G)),O.length>0&&Eo(O,F,j),ce.length>0&&Eo(ce,F,j),ge.length>0&&Eo(ge,F,j),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function rp(b,F,j,G){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new Jn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Li:Oi,minFilter:Fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ce=u.state.transmissionRenderTarget[G.id],ge=G.viewport||L;ce.setSize(ge.z,ge.w);const Te=S.getRenderTarget();S.setRenderTarget(ce),S.getClearColor(Y),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),Ie&&De.render(j);const be=S.toneMapping;S.toneMapping=fr;const Fe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),V===!0&&le.setGlobalState(S.clippingPlanes,G),Eo(b,j,G),R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ae=0,Qe=F.length;Ae<Qe;Ae++){const ut=F[Ae],ft=ut.object,ln=ut.geometry,et=ut.material,Re=ut.group;if(et.side===Ei&&ft.layers.test(G.layers)){const fi=et.side;et.side=gn,et.needsUpdate=!0,sp(ft,j,G,ln,et,Re),et.side=fi,et.needsUpdate=!0,Be=!0}}Be===!0&&(R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce))}S.setRenderTarget(Te),S.setClearColor(Y,Z),Fe!==void 0&&(G.viewport=Fe),S.toneMapping=be}function Eo(b,F,j){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ce=b.length;O<ce;O++){const ge=b[O],Te=ge.object,be=ge.geometry,Fe=G===null?ge.material:G,Be=ge.group;Te.layers.test(j.layers)&&sp(Te,F,j,be,Fe,Be)}}function sp(b,F,j,G,O,ce){b.onBeforeRender(S,F,j,G,O,ce),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(S,F,j,G,b,ce),O.transparent===!0&&O.side===Ei&&O.forceSinglePass===!1?(O.side=gn,O.needsUpdate=!0,S.renderBufferDirect(j,F,G,O,b,ce),O.side=gr,O.needsUpdate=!0,S.renderBufferDirect(j,F,G,O,b,ce),O.side=Ei):S.renderBufferDirect(j,F,G,O,b,ce),b.onAfterRender(S,F,j,G,O,ce)}function To(b,F,j){F.isScene!==!0&&(F=Pe);const G=Le.get(b),O=u.state.lights,ce=u.state.shadowsArray,ge=O.state.version,Te=Ce.getParameters(b,O.state,ce,F,j),be=Ce.getProgramCacheKey(Te);let Fe=G.programs;G.environment=b.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(b.isMeshStandardMaterial?H:w).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",ze),Fe=new Map,G.programs=Fe);let Be=Fe.get(be);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===ge)return op(b,Te),Be}else Te.uniforms=Ce.getUniforms(b),b.onBeforeCompile(Te,S),Be=Ce.acquireProgram(Te,be),Fe.set(be,Be),G.uniforms=Te.uniforms;const Ae=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ae.clippingPlanes=le.uniform),op(b,Te),G.needsLights=lx(b),G.lightsStateVersion=ge,G.needsLights&&(Ae.ambientLightColor.value=O.state.ambient,Ae.lightProbe.value=O.state.probe,Ae.directionalLights.value=O.state.directional,Ae.directionalLightShadows.value=O.state.directionalShadow,Ae.spotLights.value=O.state.spot,Ae.spotLightShadows.value=O.state.spotShadow,Ae.rectAreaLights.value=O.state.rectArea,Ae.ltc_1.value=O.state.rectAreaLTC1,Ae.ltc_2.value=O.state.rectAreaLTC2,Ae.pointLights.value=O.state.point,Ae.pointLightShadows.value=O.state.pointShadow,Ae.hemisphereLights.value=O.state.hemi,Ae.directionalShadowMap.value=O.state.directionalShadowMap,Ae.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ae.spotShadowMap.value=O.state.spotShadowMap,Ae.spotLightMatrix.value=O.state.spotLightMatrix,Ae.spotLightMap.value=O.state.spotLightMap,Ae.pointShadowMap.value=O.state.pointShadowMap,Ae.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Be,G.uniformsList=null,Be}function ap(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Pl.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function op(b,F){const j=Le.get(b);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function ax(b,F,j,G,O){F.isScene!==!0&&(F=Pe),R.resetTextureUnits();const ce=F.fog,ge=G.isMeshStandardMaterial?F.environment:null,Te=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:sa,be=(G.isMeshStandardMaterial?H:w).get(G.envMap||ge),Fe=G.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Be=!!j.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!j.morphAttributes.position,Qe=!!j.morphAttributes.normal,ut=!!j.morphAttributes.color;let ft=fr;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ft=S.toneMapping);const ln=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,et=ln!==void 0?ln.length:0,Re=Le.get(G),fi=u.state.lights;if(V===!0&&(ne===!0||b!==M)){const Rn=b===M&&G.id===E;le.setState(G,b,Rn)}let tt=!1;G.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==fi.state.version||Re.outputColorSpace!==Te||O.isBatchedMesh&&Re.batching===!1||!O.isBatchedMesh&&Re.batching===!0||O.isBatchedMesh&&Re.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Re.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Re.instancing===!1||!O.isInstancedMesh&&Re.instancing===!0||O.isSkinnedMesh&&Re.skinning===!1||!O.isSkinnedMesh&&Re.skinning===!0||O.isInstancedMesh&&Re.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Re.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Re.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Re.instancingMorph===!1&&O.morphTexture!==null||Re.envMap!==be||G.fog===!0&&Re.fog!==ce||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==le.numPlanes||Re.numIntersection!==le.numIntersection)||Re.vertexAlphas!==Fe||Re.vertexTangents!==Be||Re.morphTargets!==Ae||Re.morphNormals!==Qe||Re.morphColors!==ut||Re.toneMapping!==ft||Re.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Re.__version=G.version);let zn=Re.currentProgram;tt===!0&&(zn=To(G,F,O));let es=!1,_n=!1,ca=!1;const pt=zn.getUniforms(),ti=Re.uniforms;if(Ne.useProgram(zn.program)&&(es=!0,_n=!0,ca=!0),G.id!==E&&(E=G.id,_n=!0),es||M!==b){Ne.buffers.depth.getReversed()?(te.copy(b.projectionMatrix),Cw(te),Rw(te),pt.setValue(U,"projectionMatrix",te)):pt.setValue(U,"projectionMatrix",b.projectionMatrix),pt.setValue(U,"viewMatrix",b.matrixWorldInverse);const Bi=pt.map.cameraPosition;Bi!==void 0&&Bi.setValue(U,he.setFromMatrixPosition(b.matrixWorld)),We.logarithmicDepthBuffer&&pt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,_n=!0,ca=!0)}if(O.isSkinnedMesh){pt.setOptional(U,O,"bindMatrix"),pt.setOptional(U,O,"bindMatrixInverse");const Rn=O.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),pt.setValue(U,"boneTexture",Rn.boneTexture,R))}O.isBatchedMesh&&(pt.setOptional(U,O,"batchingTexture"),pt.setValue(U,"batchingTexture",O._matricesTexture,R),pt.setOptional(U,O,"batchingIdTexture"),pt.setValue(U,"batchingIdTexture",O._indirectTexture,R),pt.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&pt.setValue(U,"batchingColorTexture",O._colorsTexture,R));const ua=j.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0)&&Ue.update(O,j,zn),(_n||Re.receiveShadow!==O.receiveShadow)&&(Re.receiveShadow=O.receiveShadow,pt.setValue(U,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ti.envMap.value=be,ti.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(ti.envMapIntensity.value=F.environmentIntensity),_n&&(pt.setValue(U,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&ox(ti,ca),ce&&G.fog===!0&&pe.refreshFogUniforms(ti,ce),pe.refreshMaterialUniforms(ti,G,I,K,u.state.transmissionRenderTarget[b.id]),Pl.upload(U,ap(Re),ti,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Pl.upload(U,ap(Re),ti,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pt.setValue(U,"center",O.center),pt.setValue(U,"modelViewMatrix",O.modelViewMatrix),pt.setValue(U,"normalMatrix",O.normalMatrix),pt.setValue(U,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Rn=G.uniformsGroups;for(let Bi=0,Hi=Rn.length;Bi<Hi;Bi++){const lp=Rn[Bi];k.update(lp,zn),k.bind(lp,zn)}}return zn}function ox(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function lx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,F,j){Le.get(b.texture).__webglTexture=F,Le.get(b.depthTexture).__webglTexture=j;const G=Le.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=j===void 0,G.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const j=Le.get(b);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,j=0){C=b,A=F,T=j;let G=!0,O=null,ce=!1,ge=!1;if(b){const be=Le.get(b);if(be.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(be.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(be.__hasExternalTextures)R.rebindTextures(b,Le.get(b.texture).__webglTexture,Le.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ae=b.depthTexture;if(be.__boundDepthTexture!==Ae){if(Ae!==null&&Le.has(Ae)&&(b.width!==Ae.image.width||b.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ge=!0);const Be=Le.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?O=Be[F][j]:O=Be[F],ce=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?O=Le.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?O=Be[j]:O=Be,L.copy(b.viewport),z.copy(b.scissor),B=b.scissorTest}else L.copy(ae).multiplyScalar(I).floor(),z.copy(de).multiplyScalar(I).floor(),B=ke;if(Ne.bindFramebuffer(U.FRAMEBUFFER,O)&&G&&Ne.drawBuffers(b,O),Ne.viewport(L),Ne.scissor(z),Ne.setScissorTest(B),ce){const be=Le.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,j)}else if(ge){const be=Le.get(b.texture),Fe=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.__webglTexture,j||0,Fe)}E=-1},this.readRenderTargetPixels=function(b,F,j,G,O,ce,ge){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){Ne.bindFramebuffer(U.FRAMEBUFFER,Te);try{const be=b.texture,Fe=be.format,Be=be.type;if(!We.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-G&&j>=0&&j<=b.height-O&&U.readPixels(F,j,G,O,Ve.convert(Fe),Ve.convert(Be),ce)}finally{const be=C!==null?Le.get(C).__webglFramebuffer:null;Ne.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(b,F,j,G,O,ce,ge){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){const be=b.texture,Fe=be.format,Be=be.type;if(!We.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-G&&j>=0&&j<=b.height-O){Ne.bindFramebuffer(U.FRAMEBUFFER,Te);const Ae=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.bufferData(U.PIXEL_PACK_BUFFER,ce.byteLength,U.STREAM_READ),U.readPixels(F,j,G,O,Ve.convert(Fe),Ve.convert(Be),0);const Qe=C!==null?Le.get(C).__webglFramebuffer:null;Ne.bindFramebuffer(U.FRAMEBUFFER,Qe);const ut=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Aw(U,ut,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ce),U.deleteBuffer(Ae),U.deleteSync(ut),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,j=0){b.isTexture!==!0&&(Na("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-j),O=Math.floor(b.image.width*G),ce=Math.floor(b.image.height*G),ge=F!==null?F.x:0,Te=F!==null?F.y:0;R.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,ge,Te,O,ce),Ne.unbindTexture()},this.copyTextureToTexture=function(b,F,j=null,G=null,O=0){b.isTexture!==!0&&(Na("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],F=arguments[2],O=arguments[3]||0,j=null);let ce,ge,Te,be,Fe,Be,Ae,Qe,ut;const ft=b.isCompressedTexture?b.mipmaps[O]:b.image;j!==null?(ce=j.max.x-j.min.x,ge=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,be=j.min.x,Fe=j.min.y,Be=j.isBox3?j.min.z:0):(ce=ft.width,ge=ft.height,Te=ft.depth||1,be=0,Fe=0,Be=0),G!==null?(Ae=G.x,Qe=G.y,ut=G.z):(Ae=0,Qe=0,ut=0);const ln=Ve.convert(F.format),et=Ve.convert(F.type);let Re;F.isData3DTexture?(R.setTexture3D(F,0),Re=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Re=U.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Re=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const fi=U.getParameter(U.UNPACK_ROW_LENGTH),tt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),zn=U.getParameter(U.UNPACK_SKIP_PIXELS),es=U.getParameter(U.UNPACK_SKIP_ROWS),_n=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ft.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,be),U.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Be);const ca=b.isDataArrayTexture||b.isData3DTexture,pt=F.isDataArrayTexture||F.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const ti=Le.get(b),ua=Le.get(F),Rn=Le.get(ti.__renderTarget),Bi=Le.get(ua.__renderTarget);Ne.bindFramebuffer(U.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Hi=0;Hi<Te;Hi++)ca&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(b).__webglTexture,O,Be+Hi),b.isDepthTexture?(pt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(F).__webglTexture,O,ut+Hi),U.blitFramebuffer(be,Fe,ce,ge,Ae,Qe,ce,ge,U.DEPTH_BUFFER_BIT,U.NEAREST)):pt?U.copyTexSubImage3D(Re,O,Ae,Qe,ut+Hi,be,Fe,ce,ge):U.copyTexSubImage2D(Re,O,Ae,Qe,ut+Hi,be,Fe,ce,ge);Ne.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else pt?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Re,O,Ae,Qe,ut,ce,ge,Te,ln,et,ft.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Re,O,Ae,Qe,ut,ce,ge,Te,ln,ft.data):U.texSubImage3D(Re,O,Ae,Qe,ut,ce,ge,Te,ln,et,ft):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,Ae,Qe,ce,ge,ln,et,ft.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,Ae,Qe,ft.width,ft.height,ln,ft.data):U.texSubImage2D(U.TEXTURE_2D,O,Ae,Qe,ce,ge,ln,et,ft);U.pixelStorei(U.UNPACK_ROW_LENGTH,fi),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,zn),U.pixelStorei(U.UNPACK_SKIP_ROWS,es),U.pixelStorei(U.UNPACK_SKIP_IMAGES,_n),O===0&&F.generateMipmaps&&U.generateMipmap(Re),Ne.unbindTexture()},this.copyTextureToTexture3D=function(b,F,j=null,G=null,O=0){return b.isTexture!==!0&&(Na("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,G=arguments[1]||null,b=arguments[2],F=arguments[3],O=arguments[4]||0),Na('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,j,G,O)},this.initRenderTarget=function(b){Le.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Ne.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,Ne.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=qe._getUnpackColorSpace()}}class Ff{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=n,this.far=i}clone(){return new Ff(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class OA extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const d=i[r],f=i[r+1]-d,p=(a-d)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new oe:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new D,r=[],s=[],a=[],o=new D,l=new _t;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(zt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(zt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Of extends di{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new oe){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*d-p*h+this.aX,c=f*h+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class zA extends Of{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function zf(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,d,h){let f=(a-s)/c-(o-s)/(c+d)+(o-a)/d,p=(o-a)/d-(l-a)/(d+h)+(l-o)/h;f*=d,p*=d,r(a,o,f,p)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const ul=new D,Iu=new zf,Uu=new zf,ku=new zf;class BA extends di{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,d;this.closed||o>0?c=r[(o-1)%s]:(ul.subVectors(r[0],r[1]).add(r[0]),c=ul);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?d=r[(o+2)%s]:(ul.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=ul),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(d),p);y<1e-4&&(y=1),v<1e-4&&(v=y),m<1e-4&&(m=y),Iu.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,v,y,m),Uu.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,v,y,m),ku.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,v,y,m)}else this.curveType==="catmullrom"&&(Iu.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),Uu.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),ku.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return i.set(Iu.calc(l),Uu.calc(l),ku.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cg(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*t+n}function HA(t,e){const n=1-t;return n*n*e}function VA(t,e){return 2*(1-t)*t*e}function jA(t,e){return t*t*e}function Va(t,e,n,i){return HA(t,e)+VA(t,n)+jA(t,i)}function GA(t,e){const n=1-t;return n*n*n*e}function WA(t,e){const n=1-t;return 3*n*n*t*e}function XA(t,e){return 3*(1-t)*t*t*e}function YA(t,e){return t*t*t*e}function ja(t,e,n,i,r){return GA(t,e)+WA(t,n)+XA(t,i)+YA(t,r)}class q_ extends di{constructor(e=new oe,n=new oe,i=new oe,r=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new oe){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ja(e,r.x,s.x,a.x,o.x),ja(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $A extends di{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ja(e,r.x,s.x,a.x,o.x),ja(e,r.y,s.y,a.y,o.y),ja(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class K_ extends di{constructor(e=new oe,n=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new oe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new oe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qA extends di{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z_ extends di{constructor(e=new oe,n=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new oe){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(Va(e,r.x,s.x,a.x),Va(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tc extends di{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(Va(e,r.x,s.x,a.x),Va(e,r.y,s.y,a.y),Va(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class J_ extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new oe){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],d=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(Cg(o,l.x,c.x,d.x,h.x),Cg(o,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new oe().fromArray(r))}return this}}var Mh=Object.freeze({__proto__:null,ArcCurve:zA,CatmullRomCurve3:BA,CubicBezierCurve:q_,CubicBezierCurve3:$A,EllipseCurve:Of,LineCurve:K_,LineCurve3:qA,QuadraticBezierCurve:Z_,QuadraticBezierCurve3:Tc,SplineCurve:J_});class KA extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(n.push(d),i=d)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Mh[r.type]().fromJSON(r))}return this}}class ZA extends KA{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new K_(this.currentPoint.clone(),new oe(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Z_(this.currentPoint.clone(),new oe(e,n),new oe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,a){const o=new q_(this.currentPoint.clone(),new oe(e,n),new oe(i,r),new oe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new J_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,n+l,i,r,s,a),this}absarc(e,n,i,r,s,a){return this.absellipse(e,n,i,i,r,s,a),this}ellipse(e,n,i,r,s,a,o,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,n+d,i,r,s,a,o,l),this}absellipse(e,n,i,r,s,a,o,l){const c=new Of(e,n,i,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Bf extends vn{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=zt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],d=1/n,h=new D,f=new oe,p=new D,v=new D,y=new D;let m=0,u=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,u=e[g+1].y-e[g].y,p.x=u*1,p.y=-m,p.z=u*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[g+1].x-e[g].x,u=e[g+1].y-e[g].y,p.x=u*1,p.y=-m,p.z=u*0,v.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(v)}for(let g=0;g<=n;g++){const _=i+g*d*r,S=Math.sin(_),N=Math.cos(_);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*S,h.y=e[A].y,h.z=e[A].x*N,a.push(h.x,h.y,h.z),f.x=g/n,f.y=A/(e.length-1),o.push(f.x,f.y);const T=l[3*A+0]*S,C=l[3*A+1],E=l[3*A+0]*N;c.push(T,C,E)}}for(let g=0;g<n;g++)for(let _=0;_<e.length-1;_++){const S=_+g*e.length,N=S,A=S+e.length,T=S+e.length+1,C=S+1;s.push(N,A,C),s.push(T,C,A)}this.setIndex(s),this.setAttribute("position",new lt(a,3)),this.setAttribute("uv",new lt(o,2)),this.setAttribute("normal",new lt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.points,e.segments,e.phiStart,e.phiLength)}}class Hf extends Bf{constructor(e=1,n=1,i=4,r=8){const s=new ZA;s.absarc(0,-n/2,e,Math.PI*1.5,0),s.absarc(0,n/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:n,capSegments:i,radialSegments:r}}static fromJSON(e){return new Hf(e.radius,e.length,e.capSegments,e.radialSegments)}}class bc extends vn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new D,d=new oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=n;h++,f+=3){const p=i+h/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[f]/e+1)/2,d.y=(a[f+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Mt extends vn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],p=[];let v=0;const y=[],m=i/2;let u=0;g(),a===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(p,2));function g(){const S=new D,N=new D;let A=0;const T=(n-e)/i;for(let C=0;C<=s;C++){const E=[],M=C/s,L=M*(n-e)+e;for(let z=0;z<=r;z++){const B=z/r,Y=B*l+o,Z=Math.sin(Y),W=Math.cos(Y);N.x=L*Z,N.y=-M*i+m,N.z=L*W,h.push(N.x,N.y,N.z),S.set(Z,T,W).normalize(),f.push(S.x,S.y,S.z),p.push(B,1-M),E.push(v++)}y.push(E)}for(let C=0;C<r;C++)for(let E=0;E<s;E++){const M=y[E][C],L=y[E+1][C],z=y[E+1][C+1],B=y[E][C+1];(e>0||E!==0)&&(d.push(M,L,B),A+=3),(n>0||E!==s-1)&&(d.push(L,z,B),A+=3)}c.addGroup(u,A,0),u+=A}function _(S){const N=v,A=new oe,T=new D;let C=0;const E=S===!0?e:n,M=S===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),v++;const L=v;for(let z=0;z<=r;z++){const Y=z/r*l+o,Z=Math.cos(Y),W=Math.sin(Y);T.x=E*W,T.y=m*M,T.z=E*Z,h.push(T.x,T.y,T.z),f.push(0,M,0),A.x=Z*.5+.5,A.y=W*.5*M+.5,p.push(A.x,A.y),v++}for(let z=0;z<r;z++){const B=N+z,Y=L+z;S===!0?d.push(Y,Y+1,B):d.push(Y+1,Y,B),C+=3}c.addGroup(u,C,S===!0?1:2),u+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hs extends vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new D,f=new D,p=[],v=[],y=[],m=[];for(let u=0;u<=i;u++){const g=[],_=u/i;let S=0;u===0&&a===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let N=0;N<=n;N++){const A=N/n;h.x=-e*Math.cos(r+A*s)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(r+A*s)*Math.sin(a+_*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(A+S,1-_),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const _=d[u][g+1],S=d[u][g],N=d[u+1][g],A=d[u+1][g+1];(u!==0||a>0)&&p.push(_,S,A),(u!==i-1||l<Math.PI)&&p.push(S,N,A)}this.setIndex(p),this.setAttribute("position",new lt(v,3)),this.setAttribute("normal",new lt(y,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ir extends vn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],d=new D,h=new D,f=new D;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const y=v/r*s,m=p/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(y),h.y=(e+n*Math.cos(m))*Math.sin(y),h.z=n*Math.sin(m),o.push(h.x,h.y,h.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const y=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,u=(r+1)*(p-1)+v,g=(r+1)*p+v;a.push(y,m,g),a.push(m,u,g)}this.setIndex(a),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ac extends vn{constructor(e=new Tc(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new oe;let d=new D;const h=[],f=[],p=[],v=[];y(),this.setIndex(v),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(p,2));function y(){for(let _=0;_<n;_++)m(_);m(s===!1?n:0),g(),u()}function m(_){d=e.getPointAt(_/n,d);const S=a.normals[_],N=a.binormals[_];for(let A=0;A<=r;A++){const T=A/r*Math.PI*2,C=Math.sin(T),E=-Math.cos(T);l.x=E*S.x+C*N.x,l.y=E*S.y+C*N.y,l.z=E*S.z+C*N.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=d.x+i*l.x,o.y=d.y+i*l.y,o.z=d.z+i*l.z,h.push(o.x,o.y,o.z)}}function u(){for(let _=1;_<=n;_++)for(let S=1;S<=r;S++){const N=(r+1)*(_-1)+(S-1),A=(r+1)*_+(S-1),T=(r+1)*_+S,C=(r+1)*(_-1)+S;v.push(N,A,C),v.push(A,T,C)}}function g(){for(let _=0;_<=n;_++)for(let S=0;S<=r;S++)c.x=_/n,c.y=S/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ac(new Mh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class JA extends nn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Qn extends wo{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=L_,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Rg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class QA{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],v=c[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return v}return null}}}const eC=new QA;class Vf{constructor(e){this.manager=e!==void 0?e:eC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vf.DEFAULT_MATERIAL_NAME="__DEFAULT";class tC extends Vf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Rg.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=ho("img");function l(){d(),Rg.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){d(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class nC extends Vf{constructor(e){super(e)}load(e,n,i,r){const s=new sn,a=new tC(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class jf extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class iC extends jf{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Fu=new _t,Pg=new D,Ng=new D;class Q_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new If,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Pg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pg),Ng.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ng),n.updateMatrixWorld(),Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lg=new _t,Ta=new D,Ou=new D;class rC extends Q_{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ta.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ta),Ou.copy(i.position),Ou.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Ou),i.updateMatrixWorld(),r.makeTranslation(-Ta.x,-Ta.y,-Ta.z),Lg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lg)}}class Ri extends jf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new rC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sC extends Q_{constructor(){super(new Uf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aC extends jf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new sC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ex{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Dg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Dg(){return performance.now()}const Ig=new _t;class oC{constructor(e,n,i=0,r=1/0){this.ray=new Nf(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Lf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Ig.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ig),this}intersectObject(e,n=!0,i=[]){return wh(e,this,i,n),i.sort(Ug),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)wh(e[r],this,i,n);return i.sort(Ug),i}}function Ug(t,e){return t.distance-e.distance}function wh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)wh(s[a],e,n,!0)}}class kg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lC extends Qr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mf);const Fg={type:"change"},Gf={type:"start"},tx={type:"end"},dl=new Nf,Og=new wi,cC=Math.cos(70*Tw.DEG2RAD),Nt=new D,un=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zu=1e-6;class uC extends lC{constructor(e,n=null){super(e,n),this.state=st.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fs.ROTATE,MIDDLE:Fs.DOLLY,RIGHT:Fs.PAN},this.touches={ONE:Rs.ROTATE,TWO:Rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Yr,this._lastTargetPosition=new D,this._quat=new Yr().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kg,this._sphericalDelta=new kg,this._scale=1,this._panOffset=new D,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new D,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hC.bind(this),this._onPointerDown=dC.bind(this),this._onPointerUp=fC.bind(this),this._onContextMenu=yC.bind(this),this._onMouseWheel=gC.bind(this),this._onKeyDown=vC.bind(this),this._onTouchStart=_C.bind(this),this._onTouchMove=xC.bind(this),this._onMouseDown=pC.bind(this),this._onMouseMove=mC.bind(this),this._interceptControlDown=SC.bind(this),this._interceptControlUp=MC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fg),this.update(),this.state=st.NONE}update(e=null){const n=this.object.position;Nt.copy(n).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=un:i>Math.PI&&(i-=un),r<-Math.PI?r+=un:r>Math.PI&&(r-=un),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Nt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(dl.origin.copy(this.object.position),dl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dl.direction))<cC?this.object.lookAt(this.target):(Og.setFromNormalAndCoplanarPoint(this.object.up,this.target),dl.intersectPlane(Og,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>zu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zu||this._lastTargetPosition.distanceToSquared(this.target)>zu?(this.dispatchEvent(Fg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Nt.setFromMatrixColumn(n,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,n){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(n,1):(Nt.setFromMatrixColumn(n,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Nt.copy(r).sub(this.target);let s=Nt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(un*this._rotateDelta.x/n.clientHeight),this._rotateUp(un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(un*this._rotateDelta.x/n.clientHeight),this._rotateUp(un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new oe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function dC(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function hC(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function fC(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tx),this.state=st.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function pC(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Fs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=st.DOLLY;break;case Fs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=st.ROTATE}break;case Fs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Gf)}function mC(t){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function gC(t){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(t.preventDefault(),this.dispatchEvent(Gf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(tx))}function vC(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function _C(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=st.TOUCH_ROTATE;break;case Rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case Rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=st.TOUCH_DOLLY_PAN;break;case Rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Gf)}function xC(t){switch(this._trackPointer(t),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=st.NONE}}function yC(t){this.enabled!==!1&&t.preventDefault()}function SC(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function MC(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const nx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class la{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const wC=new Uf(-1,1,1,-1,0,1);class EC extends vn{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}}const TC=new EC;class Wf{constructor(e){this._mesh=new we(TC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class bC extends la{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fo.clone(e.uniforms),this.material=new nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wf(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zg extends la{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class AC extends la{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class CC{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new oe);this._width=i.width,this._height=i.height,n=new Jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Li}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bC(nx),this.copyPass.material.blending=Ni,this.clock=new ex}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}zg!==void 0&&(a instanceof zg?i=!0:a instanceof AC&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class RC extends la{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Oe}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const PC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ta extends la{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new Oe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jn(s,a,{type:Li}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Jn(s,a,{type:Li});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new Jn(s,a,{type:Li});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}const o=PC;this.highPassUniforms=fo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new oe(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=nx;this.copyUniforms=fo.clone(d.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:Ud,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Oe,this.oldClearAlpha=1,this.basic=new Df,this.fsQuad=new Wf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new oe(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ta.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ta.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new nn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new nn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ta.BlurDirectionX=new oe(1,0);ta.BlurDirectionY=new oe(0,1);const NC={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class LC extends la{constructor(){super();const e=NC;this.uniforms=fo.clone(e.uniforms),this.material=new JA({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Wf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qe.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===g_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===v_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===__?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===x_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===y_&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Xf={background:1839883,floorColor:3811354,hemiSky:16771272,hemiGround:2759180,rim:16763274};function Yf(t,{background:e=724242,floorColor:n=1580070,hemiSky:i=13162751,hemiGround:r=1511947,rim:s=8308991,cameraX:a=2.4,cameraY:o=2.1,cameraZ:l=6,targetY:c=.4}={}){const d=new FA({canvas:t,antialias:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.shadowMap.enabled=!0,d.shadowMap.type=p_,d.toneMapping=wf,d.toneMappingExposure=1.05;const h=new OA;h.background=new Oe(e),h.fog=new Ff(e,14,44);const f=new wn(45,1,.1,100);f.position.set(a,o,l);const p=new uC(f,t);p.enableDamping=!0,p.target.set(0,c,0),p.minDistance=2.2,p.maxDistance=14,p.maxPolarAngle=Math.PI*.6;const v=new iC(i,r,.75);h.add(v);const y=new aC(16773338,1.5);y.position.set(4,7,5),y.castShadow=!0,y.shadow.mapSize.set(1024,1024),y.shadow.camera.left=-8,y.shadow.camera.right=8,y.shadow.camera.top=8,y.shadow.camera.bottom=-8,h.add(y);const m=new Ri(s,14,22,2);m.position.set(-4,2.4,-2),h.add(m);const u=new we(new bc(9,64),new Qn({color:n,roughness:.92,metalness:.08}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,h.add(u);const g=new oC,_=new oe(999,999),S=new ex,N=[];let A=!1,T=0;const C=()=>{const K=t.clientWidth||1,I=t.clientHeight||1;d.setSize(K,I,!1),E.setSize(K,I),f.aspect=K/I,f.updateProjectionMatrix()},E=new CC(d);E.addPass(new RC(h,f));const M=new ta(new oe(1,1),.85,.45,.82);E.addPass(M),E.addPass(new LC),C(),window.addEventListener("resize",C);const L=()=>{if(A)return;const K=Math.min(S.getDelta(),.05),I=S.elapsedTime;for(const X of N)X(K,I);p.update(),E.render(),T=requestAnimationFrame(L)};T=requestAnimationFrame(L);const z=K=>{const I=t.getBoundingClientRect();_.x=(K.clientX-I.left)/I.width*2-1,_.y=-((K.clientY-I.top)/I.height)*2+1};t.addEventListener("pointermove",z);const B=(K,I,X)=>{let $=null;N.push(()=>{var de;g.setFromCamera(_,f);const ae=((de=g.intersectObjects(K,!1)[0])==null?void 0:de.object)||null;ae!==$&&($&&X&&X($),ae&&I&&I(ae),$=ae)})},Y=[];return{renderer:d,scene:h,camera:f,controls:p,raycaster:g,pointer:_,clock:S,bloom:M,hover:B,onClick:K=>{const I=X=>{var P;const $=t.getBoundingClientRect(),ae=(X.clientX-$.left)/$.width*2-1,de=-((X.clientY-$.top)/$.height)*2+1;g.setFromCamera(new oe(ae,de),f);const ke=(P=g.intersectObjects(Y,!0)[0])==null?void 0:P.object;ke&&K(ke)};return t.addEventListener("pointerdown",I),()=>t.removeEventListener("pointerdown",I)},onFrame:K=>N.push(K),clickables:Y,destroy:()=>{A=!0,cancelAnimationFrame(T),window.removeEventListener("resize",C),t.removeEventListener("pointermove",z),document.body.style.cursor="default",p.dispose(),E.dispose(),d.dispose()}}}function $r(t,e,n){const i=new nC().load(t);return i.wrapS=co,i.wrapT=co,e!==void 0&&i.repeat.set(e,n),i.anisotropy=8,i.colorSpace=Mn,i}function $f(t,e,n=5,i=5){const r=t.children.find(s=>s.isMesh&&s.geometry&&s.geometry.type==="CircleGeometry");return r&&(r.material=new Qn({map:$r(e,n,i),roughness:.88,metalness:.04})),r}function qf(t,e,n,i,r){const s=new we(new aa(n,i),new Qn({map:$r(e),roughness:.96,metalness:0}));return s.position.set(...r),t.add(s),s}function gt({color:t,metalness:e=.1,roughness:n=.5,emissive:i=0,emissiveIntensity:r=0}){return new Qn({color:t,metalness:e,roughness:n,emissive:i,emissiveIntensity:r})}function Br(t,e=1.2,n=.4){return new Qn({color:1118481,emissive:t,emissiveIntensity:e,metalness:0,roughness:n})}function DC({radius:t=.22,height:e=.12,capColor:n=14895679,bodyColor:i=2764602,ringColor:r=8308991,y:s=.3}){const a=new Vt,o=new we(new Mt(t,t*.92,e,32),gt({color:i,metalness:.6,roughness:.4}));o.position.y=s,o.castShadow=!0,a.add(o);const l=new we(new Mt(t*.8,t*.8,e*.72,32),gt({color:n,metalness:.15,roughness:.32}));l.position.y=s+e*.42,l.castShadow=!0,a.add(l);const c=new we(new ir(t,e*.16,12,40),Br(r,.8));return c.rotation.x=Math.PI/2,c.position.y=s,a.add(c),{group:a,cap:l,ring:c}}function Kf(){let t=null;const e=()=>(t||(t=new(window.AudioContext||window.webkitAudioContext)),t.state==="suspended"&&t.resume(),t),n=(i,r=.12,s="sine",a=.12,o=0)=>{const l=e(),c=l.createOscillator(),d=l.createGain();c.type=s,c.frequency.value=i,d.gain.setValueAtTime(0,l.currentTime+o),d.gain.linearRampToValueAtTime(a,l.currentTime+o+.015),d.gain.exponentialRampToValueAtTime(1e-4,l.currentTime+o+r),c.connect(d).connect(l.destination),c.start(l.currentTime+o),c.stop(l.currentTime+o+r+.05)};return{click:()=>{n(2200,.05,"square",.05),n(1400,.04,"square",.04,.02)},chime:()=>{n(660,.5,"sine",.09),n(880,.6,"sine",.08,.14),n(1100,.8,"sine",.07,.3)},soft:()=>{n(440,.4,"sine",.07)}}}function Zf(t){try{if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance(t);e.lang="zh-CN",e.rate=.92,e.pitch=1.05;const i=window.speechSynthesis.getVoices().find(r=>r.lang.startsWith("zh"));i&&(e.voice=i),window.speechSynthesis.speak(e)}catch{}}const ba=new D;function Nn(t,e,n,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;ba.copy(e),ba[i]=0,ba.normalize();const c=.5*a/(a+o),d=1-ba.angleTo(t)/l;return Math.sign(ba[n])===1?d*c:o/(a+o)+c+c*(1-d)}class IC extends Ot{constructor(e=1,n=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,n/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new D,l=new D,c=new D(e,n,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,v=new D,y=.5/r;for(let m=0,u=0;m<d.length;m+=3,u+=2)switch(o.fromArray(d,m),l.copy(o),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),d[m+0]=c.x*Math.sign(o.x)+l.x*s,d[m+1]=c.y*Math.sign(o.y)+l.y*s,d[m+2]=c.z*Math.sign(o.z)+l.z*s,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/p)){case 0:v.set(1,0,0),f[u+0]=Nn(v,l,"z","y",s,i),f[u+1]=1-Nn(v,l,"y","z",s,n);break;case 1:v.set(-1,0,0),f[u+0]=1-Nn(v,l,"z","y",s,i),f[u+1]=1-Nn(v,l,"y","z",s,n);break;case 2:v.set(0,1,0),f[u+0]=1-Nn(v,l,"x","z",s,e),f[u+1]=Nn(v,l,"z","x",s,i);break;case 3:v.set(0,-1,0),f[u+0]=1-Nn(v,l,"x","z",s,e),f[u+1]=1-Nn(v,l,"z","x",s,i);break;case 4:v.set(0,0,1),f[u+0]=1-Nn(v,l,"x","y",s,e),f[u+1]=1-Nn(v,l,"y","x",s,n);break;case 5:v.set(0,0,-1),f[u+0]=Nn(v,l,"x","y",s,e),f[u+1]=1-Nn(v,l,"y","x",s,n);break}}}const Cc=15329764,po=16250866,Jf=12567489,ix=10331042;function tn(t=Cc,e=.86){return new Qn({color:t,roughness:e,metalness:0})}function yt(t,e,n,i=.08,r=tn()){const s=new we(new IC(t,e,n,3,i),r);return s.castShadow=!0,s.receiveShadow=!0,s}function Nl(t,e,n=tn(),i=24){const r=new we(new Mt(t,t,e,i),n);return r.castShadow=!0,r.receiveShadow=!0,r}function UC(){const t=new Vt;t.name="WhiteFilm_TimePhone";const e=tn(Cc,.78),n=tn(po,.72),i=tn(Jf,.94),r=tn(ix,.9),s=yt(3.35,.42,2.32,.18,e);s.position.y=.23,t.add(s);const a=yt(3.04,.1,1.96,.1,n);a.position.set(.18,.49,.03),t.add(a);const o=yt(.46,.05,1.55,.025,i);o.position.set(-1.15,.565,.02),t.add(o);const l=yt(1.24,.08,1.2,.08,i);l.position.set(-.38,.57,-.38),t.add(l);const c=yt(1.08,.045,1.02,.05,r);c.position.set(-.38,.64,-.38),t.add(c);const d=[],h=[.42,.86,1.3],f=[-.7,-.25,.2,.65];for(let M=0;M<f.length;M+=1)for(let L=0;L<h.length;L+=1){const z=yt(.34,.12,.28,.05,n);z.position.set(h[L],.61,f[M]),t.add(z),d.push(z)}const p=[];for(const M of[.42,.86,1.3]){const L=yt(.34,.12,.28,.05,n);L.position.set(M,.61,1.02),t.add(L),p.push(L)}const v=[];for(let M=0;M<2;M+=1)for(let L=0;L<3;L+=1){const z=yt(.25,.1,.22,.04,n);z.position.set(-.42+L*.3,.61,.88+M*.32),t.add(z),v.push(z)}const y=[];for(let M=0;M<6;M+=1){const L=yt(.28,.1,.22,.04,n);L.position.set(-.75+M*.3,.52,1.08),t.add(L),y.push(L)}const m=yt(.9,.045,.9,.08,tn(po,.9));m.position.set(-.38,.69,-.38),t.add(m);const u=new Vt;u.name="phone-handset";const g=new Tc(new D(0,-.02,-.6),new D(0,-.12,0),new D(0,-.02,.6)),_=new we(new Ac(g,24,.085,12,!1),e);_.castShadow=!0,_.receiveShadow=!0,u.add(_);const S=new we(new Mt(.185,.16,.15,28),e);S.position.set(0,-.02,.7),S.rotation.x=Math.PI/2-.45,S.castShadow=!0,S.receiveShadow=!0,u.add(S);const N=new we(new Mt(.075,.075,.012,24),i);N.position.set(0,0,.081),S.add(N);for(let M=0;M<6;M+=1){const L=M/6*Math.PI*2,z=new we(new Mt(.011,.011,.02,8),r);z.position.set(Math.cos(L)*.04,Math.sin(L)*.04,.012),N.add(z)}const A=new we(new Mt(.013,.013,.02,8),r);A.position.set(0,0,.012),N.add(A);const T=new we(new Mt(.145,.125,.13,24),e);T.position.set(0,-.02,-.7),T.rotation.x=-(Math.PI/2-.45),T.castShadow=!0,T.receiveShadow=!0,u.add(T);const C=new we(new Mt(.06,.06,.012,20),i);C.position.set(0,0,-.07),T.add(C);for(let M=-1;M<=1;M+=1)for(let L=-1;L<=1;L+=1){const z=new we(new Mt(.009,.009,.018,8),r);z.position.set(M*.028,L*.028,-.012),C.add(z)}u.position.set(-1.15,.8,.02),u.rotation.y=-.08,t.add(u);const E=yt(2.9,.035,.05,.02,i);return E.position.set(.18,.51,-1.01),t.add(E),{root:t,handset:u,dialFace:m,screen:c,numberKeys:d,bottomKeys:p,functionKeys:v,lowerKeys:y,ledRail:E}}function kC(){const t=new Vt;t.name="WhiteFilm_HospitalBed";const e=tn(Cc,.76),n=tn(po,.72),i=tn(Jf,.92),r=yt(3.2,.2,1.72,.08,e);r.position.y=.66,t.add(r);const s=yt(2.98,.38,1.48,.14,n);s.position.set(-.02,.92,0),t.add(s);const a=yt(1.76,.08,1.44,.06,tn(po,.94));a.name="blanket",a.position.set(.56,1.13,0),t.add(a);const o=yt(.88,.22,1.3,.12,n);o.position.set(-1,1.18,0),t.add(o);const l=yt(.18,1.38,1.78,.14,e);l.position.set(-1.62,1.15,0),t.add(l);const c=yt(.18,1.12,1.78,.14,e);c.position.set(1.58,1.02,0),t.add(c);const d=[];for(const p of[-1,1]){const v=new Vt,y=yt(.12,.12,1.55,.06,n);y.rotation.y=Math.PI/2,y.position.set(0,.2,0),v.add(y);const m=Nl(.055,.42,i,16);m.position.set(-.58,-.03,0),v.add(m);const u=Nl(.055,.42,i,16);u.position.set(.58,-.03,0),v.add(u),v.position.set(0,1.43,p*.88),v.rotation.x=p*.015,t.add(v),d.push(v)}const h=yt(2.8,.12,1.2,.05,i);h.position.set(0,.42,0),t.add(h);const f=[];for(const p of[-1.3,1.3])for(const v of[-.62,.62]){const y=Nl(.12,.08,i,20);y.rotation.z=Math.PI/2,y.position.set(p,.16,v),t.add(y),f.push(y)}return{root:t,mattress:s,pillow:o,blanket:a,headboard:l,footboard:c,railGroups:d,wheels:f}}function FC(){const t=new Vt;t.name="WhiteFilm_VoiceBrush";const e=tn(po,.72),n=tn(Cc,.82),i=tn(ix,.9),r=yt(.98,.18,1.42,.35,e);r.position.y=.83,t.add(r);const s=yt(.8,.06,1.2,.24,n);s.position.set(0,.95,0),t.add(s);const a=yt(.34,.4,.28,.1,e);a.position.set(0,.55,0),t.add(a);const o=yt(.42,.92,.34,.18,e);o.position.set(0,-.08,0),t.add(o);const l=[];for(let d=-.36;d<=.36;d+=.12)for(let h=-.52;h<=.52;h+=.12){const f=Nl(.018,.18,i,8);f.position.set(d,1.09,h),t.add(f),l.push(f)}const c=new we(new ir(.11,.025,12,32),tn(Jf,.9));return c.rotation.x=Math.PI/2,c.position.set(0,1.065,0),t.add(c),{root:t,head:r,handle:o,bristles:l,sensor:c}}function rx(t,e){const n=Yf(t,{cameraZ:6.1,targetY:.72,...Xf}),{scene:i,clickables:r,camera:s,raycaster:a,controls:o}=n,l=Kf(),c=UC();c.root.position.y=.04,i.add(c.root),$f(i,"textures/ward-floor.jpg",5,5),qf(i,"textures/phone-bg.jpg",18,9,[.5,3,-4.2]);const d=new Ri(16767048,6,14,1.5);d.position.set(.5,3.2,-3.2),i.add(d),c.dialFace.material.map=$r("textures/phone-dial.jpg"),c.dialFace.material.needsUpdate=!0,c.screen.material.emissiveMap=$r("textures/phone-screen.jpg"),c.screen.material.emissive=new Oe(16777215),c.screen.material.emissiveIntensity=0;const h=new Audio("audio/voice.mp3");h.preload="auto";const f=new we(new Ot(2.72,.035,.045),Br(16764810,.15));f.position.copy(c.ledRail.position).add(new D(0,.04,.025)),c.root.add(f);const p=new Ri(16764810,0,4,2);p.position.set(.2,.9,-.9),i.add(p);const v={lifted:!1,dial:0,callOn:!1},y=c.handset.position.clone(),m=y.clone(),u=new D;c.handset.getWorldPosition(u);const g=gt({color:11772802,roughness:.85,metalness:.05}),_=gt({color:10331042,roughness:.7,metalness:.35}),S=new we(new Mt(.045,.05,.08,20),_);S.rotation.x=Math.PI/2,S.position.set(.55,.23,1.2),S.castShadow=!0,i.add(S);const N=new we(new Mt(.035,.04,.08,16),_);N.position.set(0,-.15,-.5),c.handset.add(N);const A=new D(.55,.23,1.16),T=new D(0,-.1,-.5),C=new D(-1.5,.5,1.15),E=new D,M=(U=0)=>{c.handset.localToWorld(T.clone(),E);const Ye=C.clone();return Ye.x+=Math.sin(U*1.7)*.04,Ye.y+=Math.sin(U*2.1)*.02,new Ac(new Tc(A.clone(),Ye,E.clone()),26,.03,8,!1)},L=new we(M(),g);L.castShadow=!0,i.add(L);const z=gt({color:15983804,roughness:.95}),B=gt({color:9402968,roughness:.9}),Y=new Vt,Z=new we(new Ot(.46,.34,.016),z);Z.castShadow=!0,Y.add(Z);for(let U=0;U<3;U+=1){const Ye=new we(new Ot(.28-U*.05,.018,.006),B);Ye.position.set(-.05+U*.02,.09-U*.095,.014),Y.add(Ye)}Y.position.set(1.35,.6,-.72),Y.rotation.set(-.35,-.28,.05),i.add(Y);const W=new Vt,K=new we(new Ot(.46,.58,.03),gt({color:15789282,roughness:.8}));K.castShadow=!0;const I=new we(new Ot(.36,.46,.034),gt({color:14926748,roughness:.9}));W.add(K,I),W.position.set(-2.45,.3,.85),W.rotation.set(-.12,.5,.06),i.add(W);const X=[];c.handset.traverse(U=>{U.isMesh&&X.push(U)}),r.push(...X,c.dialFace,...c.numberKeys,...c.bottomKeys,...c.functionKeys,...c.lowerKeys);const $=new Set(X),ae=new Set(c.numberKeys);let de=!1;const ke=new wi,P=new D,V=new D,ne=new D,te=new D,Ee=U=>{const Ye=t.getBoundingClientRect();return new oe((U.clientX-Ye.left)/Ye.width*2-1,-((U.clientY-Ye.top)/Ye.height)*2+1)},he=U=>{if(U.button!==0||de)return;a.setFromCamera(Ee(U),s);const Ye=a.intersectObjects([c.handset],!0)[0];if(!Ye)return;de=!0,o.enabled=!1,document.body.style.cursor="grabbing",v.lifted||(v.lifted=!0,e==null||e("拿起听筒")),l.click();const Ge=s.getWorldDirection(new D);ke.setFromNormalAndCoplanarPoint(Ge,Ye.point),V.copy(Ye.point).sub(c.handset.getWorldPosition(new D)),c.handset.getWorldPosition(new D).distanceTo(u)<.45&&m.copy(y).add(new D(.35,.9,.5))},Me=U=>{if(!de||(a.setFromCamera(Ee(U),s),!a.ray.intersectPlane(ke,P)))return;P.sub(V);const Ye=P.clone().sub(u);Ye.length()>1.5&&Ye.setLength(1.5),P.copy(u).add(Ye),P.y=Math.min(Math.max(P.y,.75),2.7),c.root.worldToLocal(P,ne),m.copy(ne)},Pe=()=>{if(!de)return;de=!1,o.enabled=!0,c.handset.getWorldPosition(te);const U=a.setFromCamera(n.pointer,s).intersectObjects([c.handset],!0).length>0;document.body.style.cursor=U?"pointer":"default",te.distanceTo(u)<.55&&(v.lifted=!1,v.callOn=!1,m.copy(y),l.click(),e==null||e("放下听筒，通话结束"))};t.addEventListener("pointerdown",he,!0),window.addEventListener("pointermove",Me),window.addEventListener("pointerup",Pe),window.addEventListener("pointercancel",Pe),n.onClick(U=>{if(!(U===c.handset||$.has(U))){if(ae.has(U)){v.lifted?(v.dial+=1,l.click(),e==null||e(`拨号 ${v.dial}`)):(l.click(),e==null||e("请先拿起听筒")),U.position.y-=.035,setTimeout(()=>{U.position.y+=.035},110);return}U===c.dialFace&&v.lifted&&!v.callOn&&(v.callOn=!0,l.chime(),e==null||e("接通：AI 声音模组已启动"),h.currentTime=0,h.play().catch(()=>Zf("你好，我记得你的声音。")))}});let Ie=0;n.onFrame((U,Ye)=>{const Ge=v.callOn?1:0;Ie+=(Ge-Ie)*2.2*U;const We=Ie*(.7+.3*Math.sin(Ye*5));f.material.emissiveIntensity=.15+We*1.6,p.intensity=We*8,c.screen.material.emissiveIntensity=We*1.3,de?c.handset.position.copy(m):(c.handset.position.lerp(m,1-Math.exp(-8*U)),v.lifted&&(c.handset.position.y+=Math.sin(Ye*1.9)*.012));const Ne=v.lifted?-.38:0,ot=v.lifted?.32:-.08;c.handset.rotation.z+=(Ne-c.handset.rotation.z)*(1-Math.exp(-5*U)),c.handset.rotation.y+=(ot-c.handset.rotation.y)*(1-Math.exp(-5*U)),L.geometry.dispose(),L.geometry=M(Ye)}),n.hover(r,()=>{document.body.style.cursor="pointer"},()=>{document.body.style.cursor="default"});const ht=n.destroy.bind(n);return n.destroy=()=>{t.removeEventListener("pointerdown",he,!0),window.removeEventListener("pointermove",Me),window.removeEventListener("pointerup",Pe),window.removeEventListener("pointercancel",Pe),ht()},n}function OC(t,e){const n=Yf(t,{cameraX:1.9,cameraY:1.6,cameraZ:2.3,targetY:.6,...Xf}),{scene:i,clickables:r}=n,s=Kf(),a=FC();a.root.rotation.z=-.12,a.root.position.y=.08,i.add(a.root),r.push(a.root),$f(i,"textures/ward-floor.jpg",5,5),qf(i,"textures/comb-bg.jpg",14,8,[0,2.8,-3.8]);const o=new Ri(16763984,5,10,1.6);o.position.set(0,3,-2.8),i.add(o);const l=$r("textures/comb-wood.jpg",2,4);a.handle.material=new Qn({map:l,color:16777215,roughness:.6,metalness:.05}),a.head.material=new Qn({map:l,color:16777215,roughness:.58,metalness:.05});const c=new we(new Hs(.06,16,16),Br(11069123,.3));c.position.set(0,1.14,0),a.root.add(c);const d=new Ri(11069123,0,2,2);d.position.set(0,1.18,0),i.add(d);const h=[];for(let T=0;T<4;T+=1){const C=new we(new ir(.28+T*.14,.012,8,48),Br(11069123,1.1));C.position.set(0,1.3,0),C.scale.setScalar(.01),i.add(C),h.push(C)}const f=new we(new ir(.13,.034,12,28),gt({color:14262434,roughness:.9}));f.rotation.set(Math.PI/2+.12,.2,0),f.position.set(.72,.05,.55),f.castShadow=!0,i.add(f);const p=new we(new ir(.11,.03,12,26),gt({color:14726281,roughness:.9}));p.rotation.set(Math.PI/2-.1,-.15,.4),p.position.set(-.78,.045,.62),p.castShadow=!0,i.add(p);const v=new Vt,y=gt({color:15789282,roughness:.75}),m=new we(new ir(.16,.022,12,36),y);m.castShadow=!0;const u=new we(new bc(.148,32),gt({color:14673128,roughness:.15,metalness:.85}));u.position.z=.008;const g=new we(new Mt(.02,.024,.22,12),y);g.position.set(0,-.27,0),g.castShadow=!0,v.add(m,u,g),v.rotation.set(-1.28,.35,.1),v.position.set(.92,.15,-.42),i.add(v);const _={recording:!1,recordT:0},S=a.root.position.clone(),N=()=>{_.recording=!0,_.recordT=0,s.chime(),e==null||e("开始录音：梳头时请轻声说话…")},A=()=>{_.recording=!1,s.soft(),e==null||e("录音完成：声纹分析中 → 已存入回忆库"),Zf("声音已收录，这是给未来的温柔回放。")};return n.onClick(()=>{_.recording?A():N()}),n.onFrame((T,C)=>{if(_.recording){_.recordT+=T,a.root.position.x=Math.sin(_.recordT*2.6)*.52,a.root.rotation.z=-.12+Math.sin(_.recordT*2.6)*.06;const E=.7+Math.sin(C*7)*.3;c.material.emissiveIntensity=1+E,d.intensity=E*4,h.forEach((M,L)=>{const z=(_.recordT*1.4+L*.25)%1;M.scale.setScalar(.01+z*1.5),M.material.opacity=1-z,M.material.transparent=!0})}else a.root.position.x+=(S.x-a.root.position.x)*5*T,a.root.rotation.z+=(-.12-a.root.rotation.z)*5*T,c.material.emissiveIntensity=.2,d.intensity=0,h.forEach(E=>E.scale.setScalar(.01));a.root.position.y=S.y+Math.sin(C*1.4)*.025}),n.hover(r,()=>{document.body.style.cursor="pointer"},()=>{document.body.style.cursor="default"}),n}function sx(t,e){const n=Yf(t,{cameraZ:6.8,targetY:.75,...Xf,background:2365968}),{scene:i,clickables:r}=n,s=Kf(),a=kC();a.root.position.set(-.65,0,0),i.add(a.root),$f(i,"textures/ward-floor.jpg",5,5),qf(i,"textures/ward-wall.jpg",20,9,[0,3.2,-4]);const o=new Ri(16762168,7.5,14,1.5);o.position.set(0,3.6,-3),i.add(o),a.blanket.material=new Qn({map:$r("textures/ward-blanket.jpg",2,1.4),color:16777215,roughness:.94,metalness:0});const l=new Audio("audio/wish.mp3");l.preload="auto";const c=new Ri(16767392,7,9,2);c.position.set(-.4,2.7,1.6),i.add(c);const d=gt({color:15789282,roughness:.78}),h=new Vt,f=new we(new Ot(.85,.05,.55),d);f.position.y=.6,f.castShadow=!0,h.add(f);for(const[he,Me]of[[-.36,-.21],[.36,-.21],[-.36,.21],[.36,.21]]){const Pe=new we(new Mt(.025,.025,.58,10),gt({color:14209734,roughness:.85}));Pe.position.set(he,.29,Me),Pe.castShadow=!0,h.add(Pe)}h.position.set(-3,0,.8),i.add(h);const p=new Vt,v=new we(new Mt(.075,.05,.22,18),gt({color:13623508,roughness:.4}));v.position.y=.11,v.castShadow=!0,p.add(v);const y=gt({color:10469274,roughness:.9}),m=[15250620,15983304,15784104];for(let he=0;he<3;he+=1){const Me=-.5+he*.5,Pe=new we(new Mt(.008,.008,.34,6),y);Pe.position.set(Math.sin(Me)*.05,.37,Math.cos(Me)*.025),Pe.rotation.z=-Me*.55;const Ie=new we(new Hs(.062,12,12),gt({color:m[he],roughness:.85}));Ie.position.set(Pe.position.x-Me*.1,.54,Pe.position.z),Ie.castShadow=!0,p.add(Pe,Ie)}p.position.set(-3,.63,.8),i.add(p);const u=new we(new Mt(.05,.045,.13,16),gt({color:16118506,roughness:.25,metalness:.1}));u.position.set(-2.78,.7,.94),u.castShadow=!0,i.add(u);const g=new we(new Ot(.55,.09,1.62),gt({color:14923709,roughness:.95}));g.position.set(.93,1.63,0),g.rotation.z=.12,g.castShadow=!0,i.add(g);const _=new we(new Ot(.42,.05,1.48),gt({color:14460845,roughness:.95}));_.position.set(.9,1.7,.02),_.rotation.z=-.06,_.castShadow=!0,i.add(_);const S=gt({color:14209734,roughness:.7}),N=new we(new Mt(.02,.02,2.6,10),S);N.rotation.z=Math.PI/2,N.position.set(-2,2.78,-1.7),i.add(N);const A=new we(new Ot(.72,2.4,.07),gt({color:15128768,roughness:.96}));A.position.set(-2.83,1.56,-1.7),A.castShadow=!0,i.add(A);const T=new we(new Ot(.45,2.4,.07),gt({color:14144191,roughness:.96}));T.position.set(-1.16,1.56,-1.7),T.castShadow=!0,i.add(T);const C=gt({color:15524040,roughness:.96}),E=gt({color:14206630,roughness:.96}),M=(he,Me)=>{const Pe=new we(new Mt(.05,.05,2.42,10),Me);Pe.position.set(he,1.56,-1.66),Pe.castShadow=!0,i.add(Pe)};[-.24,-.12,0,.12,.24].forEach((he,Me)=>M(-2.83+he,Me%2?E:C)),[-.15,0,.15].forEach((he,Me)=>M(-1.16+he,Me%2?E:C));const L=new Ri(16769200,4,7,2);L.position.set(-2,1.7,-1.1),i.add(L);const z=new Vt,B=new Qn({color:15198435,roughness:.76}),Y=new Qn({color:11450037,roughness:.9}),Z=new we(new Mt(.055,.065,1.9,16),B);Z.position.set(2.18,1,0),z.add(Z);const W=new we(new Mt(.3,.36,.1,24),B);W.position.set(2.18,.05,0),z.add(W);const K=new we(new Ot(1.45,1.04,.12),B);K.position.set(2.18,2.02,0),z.add(K);const I=new we(new aa(1.3,.86),Y);I.position.set(2.18,2.02,.07),z.add(I),I.material.emissiveMap=$r("textures/ward-screen.jpg"),I.material.emissive=new Oe(16777215),I.material.emissiveIntensity=0;const X=new Ri(16768941,0,6,2);X.position.set(2.18,2.02,.7),z.add(X);const $=new Vt,ae=new we(new Hs(.17,24,24),Br(16770756,1.4));ae.position.y=.72,$.add(ae);const de=new we(new Hf(.24,.6,8,24),Br(16770756,1.2));de.position.y=.28,$.add(de),$.position.set(2.18,1.35,.15),$.scale.setScalar(.55),$.visible=!1,z.add($);const ke=[],P=[16764810,11069123,16770756];for(let he=0;he<3;he+=1){const Me=new we(new Ot(.24,.24,.24),B);Me.position.set(1.78+he*.35,.5,0),z.add(Me);const Pe=new we(new Hs(.05,12,12),Br(P[he],1.3));Pe.position.set(Me.position.x,Me.position.y,.14),z.add(Pe),ke.push({dot:Pe,color:P[he]})}i.add(z);const V=DC({radius:.2,height:.12,capColor:14241603,bodyColor:10242624,ringColor:16763274,y:.32});V.group.position.set(2.18,.82,.62),i.add(V.group),r.push(V.cap);const ne={lit:!1,litT:0};let te=!1;n.onClick(he=>{he!==V.cap||te||(te=!0,setTimeout(()=>{te=!1},2200),V.cap.position.y-=.04,setTimeout(()=>{V.cap.position.y+=.04},120),s.chime(),ne.lit=!0,e==null||e("按下按钮：AI 视频分身启动，读取微信记忆…"),l.currentTime=0,l.play().catch(()=>Zf("我一直在你的记忆里。我爱你。")))});let Ee=0;return n.onFrame((he,Me)=>{ne.litT+=((ne.lit?1:0)-ne.litT)*2.4*he;const Pe=ne.litT;I.material.emissive=new Oe(16777215),I.material.emissiveIntensity=Pe*1.35,I.material.color.set(2433565),X.intensity=Pe*9,$.visible=Pe>.15,$.scale.setScalar(.55*Math.min(1,Pe*1.25)),$.position.z=.15+Math.sin(Me*1.3)*.01*Pe,V.ring.material.emissiveIntensity=.45+Math.sin(Me*2.2)*.2+Pe*1.2,Ee=(Ee+he*2.2)%1,ke.forEach((Ie,ht)=>{Ie.dot.material.emissive=new Oe(Ie.color),Ie.dot.material.emissiveIntensity=.35+(Ee*1.6+ht*.33)%1*1.3})}),n.hover(r,()=>{document.body.style.cursor="pointer"},()=>{document.body.style.cursor="default"}),n}function Rc(t){const e=re.useRef(null),[n,i]=re.useState([]);return re.useEffect(()=>{const r=e.current;if(!r)return;const s=t(r,a=>{i(o=>[a,...o].slice(0,8))});return()=>s.destroy()},[t]),{canvasRef:e,logs:n}}const Qf={phone:{no:"01",title:"时光电话",poem:"思念，终于有了回音",story:"爸妈结婚那年，外婆陪嫁的老电话，就立在客厅的五斗柜上。通讯录的纸页早已泛黄卷边，可那串号码，你至今倒背如流。",tags:["旧物 · 复古电话机","模组 · AI 声音克隆","年代 · 那年的客厅","体验 · 任何时候都能拨通"],hints:["按住左侧听筒，拿起来拖动接听","听筒与机身之间有电话线相连","点击数字键拨号，点击拨号盘接通","拖拽旋转视角，滚轮缩放"],theme:{c1:"#e8bfa8",c2:"#f2d9b8",ink:"#a2603f"}},comb:{no:"02",title:"声纹梳",poem:"平凡的日常，值得被珍藏",story:"小时候，妈妈每天早上给你梳头。木梳齿间绕过的，是她一天里和你说话最多的十分钟。",tags:["旧物 · 木梳","模组 · 声音录制","年代 · 每一个清晨","收藏 · 日常的声音"],hints:["点击梳子开始录音","LED 亮起，声纹如涟漪展开","再点一下，停止并回放","拖拽旋转视角，滚轮缩放"],theme:{c1:"#b9dfc8",c2:"#e3efdb",ink:"#4f7d66"}},ward:{no:"03",title:"心愿病房",poem:"来不及说的话，现在能听见了",story:"病房的窗帘，永远只拉开一半。他说不出口的那句牵挂，这一次，让屏幕里的他替自己说完。",tags:["场景 · 病床旁显示屏","模组 · AI 视频 × 声音 × 信息提取","心愿 · 好好告别","体验 · 把想说的话听完"],hints:["按下床旁的红色按钮","屏幕亮起，亲人现身","听那句迟到已久的「我爱你」","拖拽旋转视角，滚轮缩放"],theme:{c1:"#c3cde8",c2:"#e2e5f4",ink:"#5d6ba0"}}};function ep({meta:t,canvasRef:e,logs:n}){return x.jsxs("div",{className:"wf-demo",style:{"--c1":t.theme.c1,"--c2":t.theme.c2,"--ink":t.theme.ink},children:[x.jsxs("header",{className:"topbar",children:[x.jsxs("div",{className:"brand",children:[x.jsx(Ke,{to:"/",children:"万物改造工坊"})," ",x.jsx("span",{className:"glow",children:"WonderForge"})]}),x.jsxs("nav",{className:"nav",children:[x.jsx(Ke,{to:"/combine",children:"组合工作台"}),x.jsx(Ke,{to:"/demos",className:"active",children:"3D 演示"}),x.jsx(Ke,{to:"/community",children:"社区"})]})]}),x.jsx("span",{className:"wf-orb o1","aria-hidden":"true"}),x.jsx("span",{className:"wf-orb o2","aria-hidden":"true"}),x.jsx("span",{className:"wf-orb o3","aria-hidden":"true"}),x.jsxs("main",{className:"wf-body",children:[x.jsxs("div",{className:"wf-demo-top",children:[x.jsx(Ke,{to:"/demos",className:"wf-back",children:"← 回到演示列表"}),x.jsxs("span",{className:"wf-archive-no",children:["旧物档案 · No.",t.no]})]}),x.jsxs("section",{className:"wf-demo-hero",children:[x.jsx("h1",{className:"wf-demo-title",children:t.title}),x.jsxs("p",{className:"wf-demo-poem",children:["「",t.poem,"」"]})]}),x.jsxs("div",{className:"wf-stage",children:[x.jsx("canvas",{ref:e}),x.jsx("div",{className:"wf-logs",children:n.map((i,r)=>x.jsx("div",{className:"wf-log",children:i},r))})]}),x.jsxs("div",{className:"wf-note",children:[x.jsx("div",{className:"wf-note-label",children:"照片背后，写着 ——"}),x.jsx("p",{className:"wf-note-text",children:t.story}),x.jsx("div",{className:"wf-note-tags",children:t.tags.map(i=>x.jsx("span",{className:"wf-note-tag",children:i},i))})]}),x.jsx("div",{className:"wf-hints",children:t.hints.map((i,r)=>x.jsxs("span",{className:"wf-hint",children:[x.jsx("i",{children:r+1}),i]},r))}),x.jsxs("footer",{className:"wf-footer",children:[x.jsx("span",{className:"wf-footer-brand",children:"万物改造工坊 WonderForge"}),x.jsx("span",{className:"wf-footer-sep",children:"·"}),x.jsx("span",{className:"wf-footer-motto",children:"为每一件旧物，留住一段温柔的时光"})]})]})]})}function zC(){const{canvasRef:t,logs:e}=Rc(rx);return x.jsx(ep,{meta:Qf.phone,canvasRef:t,logs:e})}function BC(){const{canvasRef:t,logs:e}=Rc(OC);return x.jsx(ep,{meta:Qf.comb,canvasRef:t,logs:e})}function HC(){const{canvasRef:t,logs:e}=Rc(sx);return x.jsx(ep,{meta:Qf.ward,canvasRef:t,logs:e})}const VC="wonder-forge:combiner:draft",jC={phone:{title:"时光电话",poem:"思念，终于有了回音",story:"爸妈结婚那年，外婆陪嫁的老电话，就立在客厅的五斗柜上。通讯录的纸页早已泛黄卷边，可那串号码，你至今倒背如流。",theme:{c1:"#e8bfa8",c2:"#f2d9b8",ink:"#a2603f"},hints:["按住左侧听筒，拿起来拖动接听","听筒与机身之间有电话线相连","点击数字键拨号，点击拨号盘接通","拖拽旋转视角，滚轮缩放"]},bed:{title:"心愿病房",poem:"来不及说的话，现在能听见了",story:"病房的窗帘，永远只拉开一半。他说不出口的那句牵挂，这一次，让屏幕里的他替自己说完。",theme:{c1:"#c3cde8",c2:"#e2e5f4",ink:"#5d6ba0"},hints:["按下床旁的红色按钮","屏幕亮起，亲人现身","听那句迟到已久的「我爱你」","拖拽旋转视角，滚轮缩放"]}};function GC({slug:t}){const e=jC[t],n=t==="phone"?rx:sx,{canvasRef:i,logs:r}=Rc(n);return x.jsxs("div",{className:"wf-combine wf-workshop wf-workshop-3d",style:{"--c1":e.theme.c1,"--c2":e.theme.c2,"--ink":e.theme.ink},children:[x.jsxs("header",{className:"topbar",children:[x.jsxs("div",{className:"brand",children:[x.jsx(Ke,{to:"/",children:"万物改造工坊"})," ",x.jsx("span",{className:"glow",children:"WonderForge"})]}),x.jsxs("nav",{className:"nav",children:[x.jsx(Ke,{to:"/combine",className:"active",children:"搭配工作间"}),x.jsx(Ke,{to:"/demos",children:"3D 演示"}),x.jsx(Ke,{to:"/community",children:"社区"})]})]}),x.jsx("span",{className:"wf-orb o1","aria-hidden":"true"}),x.jsx("span",{className:"wf-orb o2","aria-hidden":"true"}),x.jsx("span",{className:"wf-orb o3","aria-hidden":"true"}),x.jsxs("main",{className:"wf-body",children:[x.jsxs("div",{className:"wk-crumb",children:[x.jsx(Ke,{to:"/combine",className:"wk-back",children:"← 回到搭配工作间"}),x.jsxs("span",{className:"wk-crumb-name",children:[h_[t].name," · 搭配工作间"]}),x.jsx("span",{className:"wk-crumb-badge",children:"3D 交互"})]}),x.jsxs("section",{className:"wk-hero",children:[x.jsx("h1",{className:"wk-title",children:e.title}),x.jsxs("p",{className:"wk-poem",children:["「",e.poem,"」"]}),x.jsx("p",{className:"wk-story",children:e.story})]}),x.jsxs("div",{className:"wk-stage",children:[x.jsx("canvas",{ref:i}),x.jsx("div",{className:"wk-logs",children:r.map((s,a)=>x.jsx("div",{className:"wk-log",children:s},a))})]}),x.jsxs("div",{className:"wk-hint-card",children:[x.jsx("div",{className:"wk-hint-label",children:"试试这样玩"}),x.jsx("ul",{className:"wk-hints",children:e.hints.map((s,a)=>x.jsx("li",{children:s},a))}),x.jsx("div",{className:"wk-hint-note",children:"这件旧物的搭配工作间以 3D 实景呈现，部件与 AI 模组的能力已融入场景——拿起听筒、按下按钮，旧物就在你手里活过来。"})]}),x.jsxs("footer",{className:"wf-footer",children:[x.jsx("span",{className:"wf-footer-brand",children:"万物改造工坊 WonderForge"}),x.jsx("span",{className:"wf-footer-sep",children:"·"}),x.jsx("span",{className:"wf-footer-motto",children:"为每一件旧物，留住一段温柔的时光"})]})]})]})}function WC({w:t}){const e=o_(),[n,i]=[t.parts[0].key,t.parts[1].key],[r,s]=[t.mods[0].key,t.mods[1].key],[a,o]=re.useState({}),[l,c]=re.useState(null),d=a[n]&&a[i]?"both":a[n]?n:a[i]?i:"plain",h=t.shots[d],f=["plain",n,i,"both"].filter(g=>t.shots[g]),p=a[r]||a[s],v=g=>o(_=>({..._,[g]:!_[g]})),y=g=>{o(g==="plain"?_=>({..._,[n]:!1,[i]:!1}):g==="both"?_=>({..._,[n]:!0,[i]:!0}):_=>({..._,[n]:g===n,[i]:g===i}))},m=()=>{const g=[a[n]&&t.parts[0].id,a[i]&&t.parts[1].id].filter(Boolean),_=[a[r]&&t.mods[0].id,a[s]&&t.mods[1].id].filter(Boolean),S=[a[n]&&t.parts[0].name,a[i]&&t.parts[1].name,a[r]&&t.mods[0].name,a[s]&&t.mods[1].name].filter(Boolean),N=t.el.name+(S.length?" × "+S.join("与"):"")+"（来自搭配工作间）";try{localStorage.setItem(VC,JSON.stringify({daily:[t.id],hardware:g,ai:_,idea:N}))}catch{}e("/combine")},u=[t.el.name,a[n]?"× "+t.parts[0].name:"",a[i]?"× "+t.parts[1].name:"",a[r]?"× "+t.mods[0].name:"",a[s]?"× "+t.mods[1].name:""].filter(Boolean).join(" ");return x.jsxs("div",{className:"wf-combine wf-workshop",children:[x.jsxs("header",{className:"topbar",children:[x.jsxs("div",{className:"brand",children:[x.jsx(Ke,{to:"/",children:"万物改造工坊"})," ",x.jsx("span",{className:"glow",children:"WonderForge"})]}),x.jsxs("nav",{className:"nav",children:[x.jsx(Ke,{to:"/combine",className:"active",children:"搭配工作间"}),x.jsx(Ke,{to:"/demos",children:"3D 演示"}),x.jsx(Ke,{to:"/community",children:"社区"})]})]}),x.jsx("span",{className:"wf-orb o1","aria-hidden":"true"}),x.jsx("span",{className:"wf-orb o2","aria-hidden":"true"}),x.jsx("span",{className:"wf-orb o3","aria-hidden":"true"}),x.jsxs("main",{className:"wf-body",children:[x.jsxs("div",{className:"wk-crumb",children:[x.jsx(Ke,{to:"/combine",className:"wk-back",children:"← 回到搭配工作间"}),x.jsxs("span",{className:"wk-crumb-name",children:[t.el.name," · 搭配工作间"]})]}),x.jsx("div",{className:"wk-combo",role:"status","aria-live":"polite",children:u||t.el.name}),x.jsxs("div",{className:"wk-layout",children:[x.jsxs("div",{className:"wk-left",children:[x.jsxs("section",{className:"wk-el-card",children:[x.jsx("div",{className:"wk-el-name",children:t.el.name}),x.jsx("div",{className:"wk-el-desc",children:t.el.desc}),x.jsx("div",{className:"wk-el-tags",children:t.el.tags.map(g=>x.jsx("span",{className:"chip",children:g},g))})]}),x.jsx("h3",{className:"wk-section-title",children:"可添加部件 · 点一点，看看改造后的它"}),t.parts.map(g=>x.jsxs("button",{type:"button",className:`wk-addon${a[g.key]?" selected":""}`,"aria-pressed":!!a[g.key],onClick:()=>v(g.key),children:[x.jsxs("div",{className:"wk-addon-head",children:[x.jsx("span",{className:"wk-addon-name",children:g.name}),x.jsx("span",{className:"wk-addon-state",children:a[g.key]?"已添加":"点击添加"})]}),x.jsx("div",{className:"wk-addon-desc",children:g.desc}),x.jsxs("div",{className:"wk-addon-install",children:[x.jsx("b",{children:"安装"}),"：",g.install]}),x.jsxs("div",{className:"wk-addon-effect",children:[x.jsx("b",{children:"效果"}),"：",g.effect]}),x.jsx("div",{className:"wk-addon-tags",children:g.tags.map(_=>x.jsx("span",{className:"chip",children:_},_))})]},g.key)),x.jsxs("h3",{className:"wk-section-title",children:["AI 模组 · 让",t.el.name,"开始懂你"]}),t.mods.map(g=>x.jsxs("button",{type:"button",className:`wk-addon wk-ai${a[g.key]?" selected":""}`,"aria-pressed":!!a[g.key],onClick:()=>{v(g.key),a[g.key]||c(g.key)},children:[x.jsxs("div",{className:"wk-addon-head",children:[x.jsx("span",{className:"wk-addon-name",children:g.name}),x.jsx("span",{className:"wk-addon-state",children:a[g.key]?"已注入":"点击注入"})]}),x.jsx("div",{className:"wk-addon-desc",children:g.desc}),x.jsxs("div",{className:"wk-addon-effect",children:[x.jsx("b",{children:"能力"}),"：",g.effect]}),x.jsx("div",{className:"wk-addon-tags",children:g.tags.map(_=>x.jsx("span",{className:"chip",children:_},_))})]},g.key))]}),x.jsxs("div",{className:"wk-right",children:[x.jsxs("figure",{className:"wk-shot",children:[x.jsx("img",{src:h.img,alt:`${t.el.name} · ${h.label}`}),x.jsxs("figcaption",{className:"wk-shot-cap",children:[x.jsx("span",{className:"wk-shot-label",children:h.label}),x.jsx("span",{className:"wk-shot-text",children:h.caption})]})]}),x.jsx("div",{className:"wk-thumbs",role:"tablist","aria-label":"效果图切换",children:f.map(g=>x.jsxs("button",{type:"button",role:"tab","aria-selected":g===d,className:`wk-thumb${g===d?" active":""}`,onClick:()=>y(g),children:[x.jsx("img",{src:t.shots[g].img,alt:t.shots[g].label}),x.jsx("span",{className:"wk-thumb-label",children:t.shots[g].label})]},g))}),p&&x.jsx("div",{className:"wk-views",children:t.mods.map(g=>a[g.key]&&x.jsx("button",{type:"button",className:`wk-view${l===g.key?" active":""}`,onClick:()=>c(g.key),children:g.panel},g.key))}),l&&p&&(()=>{const g=t.mods.find(_=>_.key===l&&a[_.key]);return g?x.jsxs("div",{className:"wk-panel",children:[x.jsx("div",{className:"wk-panel-title",children:g.panel}),x.jsx("p",{className:"wk-panel-sub",children:g.effect}),x.jsx("p",{className:"wk-panel-note",children:"演示环境：本面板为交互示意，正式版将接入对应 AI 能力。"})]}):null})(),x.jsxs("button",{type:"button",className:"btn wk-go-combine",onClick:m,children:["带去组合工作台生成方案 ",x.jsx("span",{"aria-hidden":"true",children:"→"})]})]})]}),x.jsxs("footer",{className:"wf-footer",children:[x.jsx("span",{className:"wf-footer-brand",children:"万物改造工坊 WonderForge"}),x.jsx("span",{className:"wf-footer-sep",children:"·"}),x.jsx("span",{className:"wf-footer-motto",children:"为每一件旧物，留住一段温柔的时光"})]})]})]})}function XC(){const{slug:t}=fM();if(h_[t])return x.jsx(GC,{slug:t},t);const e=re.useMemo(()=>VM.find(n=>n.slug===t),[t]);return e?x.jsx(WC,{w:e},t):x.jsx("div",{className:"wf-combine wf-workshop",children:x.jsx("main",{className:"wf-body",style:{paddingTop:80},children:x.jsxs("div",{className:"card",style:{maxWidth:480,margin:"0 auto",textAlign:"center"},children:[x.jsx("div",{style:{fontWeight:700,fontSize:18},children:"该旧物暂未开放搭配工作间"}),x.jsx("p",{style:{color:"var(--muted)",margin:"12px 0 20px"},children:"可回到组合工作台，选择已支持的 50 件旧物体验搭配工作间。"}),x.jsx(Ke,{to:"/combine",className:"btn",children:"回到搭配工作间"})]})})})}Jv(document.getElementById("root")).render(x.jsx(kM,{children:x.jsxs(RM,{children:[x.jsx(xi,{path:"/",element:x.jsx(Rm,{})}),x.jsx(xi,{path:"/combine",element:x.jsx(Rm,{})}),x.jsx(xi,{path:"/combine/:slug",element:x.jsx(XC,{})}),x.jsx(xi,{path:"/demos",element:x.jsx(HM,{})}),x.jsx(xi,{path:"/community",element:x.jsx(jM,{})}),x.jsx(xi,{path:"/demo/phone",element:x.jsx(zC,{})}),x.jsx(xi,{path:"/demo/comb",element:x.jsx(BC,{})}),x.jsx(xi,{path:"/demo/ward",element:x.jsx(HC,{})})]})}));
